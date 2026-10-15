// ---------------------------------------------------------------
// calc.js – pure calculations over the store state
// ---------------------------------------------------------------
import { sum, round2, monthKey, today, lastMonths, isOverdue } from './util.js';

export function channelFor(state, id) { return state.channels.find(c => c.id === id) || { id: 'direct', name: 'Direct', feePct: 0, feeFixed: 0 }; }
export function customerName(state, id) { const c = state.customers.find(x => x.id === id); return c ? c.name : 'Walk-in'; }
export function stageName(state, id) { const s = state.stages.find(x => x.id === id); return s ? s.name : '–'; }
export function productById(state, id) { return state.products.find(p => p.id === id); }

/** Totals for one order (sale). */
export function orderTotals(state, o) {
  const subtotal = round2(sum(o.items || [], it => (Number(it.qty) || 0) * (Number(it.unitPrice) || 0)));
  const discount = Number(o.discount) || 0;
  const shippingCharged = Number(o.shippingCharged) || 0;
  const revenue = round2(subtotal - discount + shippingCharged);
  const ch = o.feeOverride || channelFor(state, o.channelId);
  const feePct = Number(ch.feePct) || 0, feeFixed = Number(ch.feeFixed) || 0;
  const fees = round2(revenue > 0 ? revenue * feePct / 100 + feeFixed : 0);
  const cogs = round2(sum(o.items || [], it => (Number(it.qty) || 0) * (Number(it.unitCost) || 0)));
  const shippingCost = Number(o.shippingCost) || 0;
  const extraCosts = o.id ? round2(sum(state.expenses.filter(e => e.orderId === o.id), e => e.amount)) : 0;
  const profit = round2(revenue - fees - cogs - shippingCost - extraCosts);
  const margin = revenue > 0 ? profit / revenue : 0;
  return { subtotal, discount, shippingCharged, revenue, fees, cogs, shippingCost, extraCosts, profit, margin };
}

export function activeOrders(state) { return state.orders.filter(o => !o.cancelled); }

export function invoiceTotals(inv) {
  const subtotal = round2(sum(inv.items || [], it => (Number(it.qty) || 0) * (Number(it.unitPrice) || 0)));
  const discount = Number(inv.discount) || 0;
  const shipping = Number(inv.shipping) || 0;
  const net = round2(subtotal - discount + shipping);
  const vat = round2(net * (Number(inv.vatRate) || 0) / 100);
  const total = round2(net + vat);
  return { subtotal, discount, shipping, net, vat, total };
}
export function invoiceStatus(inv) {
  if (inv.status === 'sent' && isOverdue(inv.dueDate)) return 'overdue';
  return inv.status;
}

/** Unit economics for a product. */
export function productEconomics(state, p, channelId) {
  const ch = channelId ? channelFor(state, channelId) : null;
  const feePct = p.feePct !== null && p.feePct !== undefined ? Number(p.feePct) : (ch ? Number(ch.feePct) : 0);
  const feeFixed = p.feeFixed !== null && p.feeFixed !== undefined ? Number(p.feeFixed) : (ch ? Number(ch.feeFixed) : 0);
  const price = Number(p.price) || 0, cost = Number(p.cost) || 0, ship = Number(p.shippingCost) || 0;
  const fees = round2(price * feePct / 100 + feeFixed);
  const profit = round2(price - cost - fees - ship);
  return { price, cost, fees, ship, profit, margin: price > 0 ? profit / price : 0, markup: cost > 0 ? profit / cost : Infinity };
}
/** Suggest a price for a target margin given cost, fees, shipping. */
export function priceForMargin(cost, feePct, feeFixed, ship, targetMargin) {
  // price * (1 - m - feePct/100) = cost + feeFixed + ship
  const denom = 1 - targetMargin - feePct / 100;
  if (denom <= 0) return NaN;
  return round2((cost + feeFixed + ship) / denom);
}

export function soldQty(state, productId) {
  let n = 0;
  for (const o of activeOrders(state)) for (const it of o.items || []) if (it.productId === productId) n += Number(it.qty) || 0;
  return n;
}
export function stockOnHand(state, p) { return (Number(p.stockIn) || 0) - soldQty(state, p.id); }

/** Monthly profit & loss over the last n months. */
export function monthlyPnL(state, n = 6, endIso = today()) {
  const months = lastMonths(n, endIso);
  return months.map(m => {
    const orders = activeOrders(state).filter(o => monthKey(o.date) === m);
    let revenue = 0, cogs = 0, fees = 0, shipCost = 0, profitOrders = 0, collected = 0;
    for (const o of orders) { const t = orderTotals(state, o); revenue += t.revenue; cogs += t.cogs; fees += t.fees; shipCost += t.shippingCost; profitOrders += t.profit; if (o.paid) collected += t.revenue; }
    const linkedExpenseIds = new Set(orders.map(o => o.id));
    const expenses = state.expenses.filter(e => monthKey(e.date) === m && !(e.orderId && linkedExpenseIds.has(e.orderId)) && !(e.recurring && e.recurring !== 'none'));
    const overhead = sum(expenses, e => e.amount);
    const profit = round2(profitOrders - overhead);
    return { month: m, revenue: round2(revenue), cogs: round2(cogs), fees: round2(fees), shipCost: round2(shipCost), overhead: round2(overhead), profit, margin: revenue ? profit / revenue : 0, orders: orders.length, collected: round2(collected) };
  });
}

/** Totals for an arbitrary date range (inclusive). */
export function rangeSummary(state, from, to) {
  const orders = activeOrders(state).filter(o => o.date >= from && o.date <= to);
  let revenue = 0, directCosts = 0, collected = 0;
  for (const o of orders) { const t = orderTotals(state, o); revenue += t.revenue; directCosts += t.fees + t.cogs + t.shippingCost + t.extraCosts; if (o.paid) collected += t.revenue; }
  const orderIds = new Set(orders.map(o => o.id));
  const overhead = sum(state.expenses.filter(e => e.date >= from && e.date <= to && !(e.recurring && e.recurring !== 'none') && !(e.orderId && orderIds.has(e.orderId))), e => e.amount);
  const profit = round2(revenue - directCosts - overhead);
  return { revenue: round2(revenue), directCosts: round2(directCosts), overhead: round2(overhead), profit, margin: revenue ? profit / revenue : 0, orders: orders.length, collected: round2(collected), outstanding: round2(revenue - collected) };
}

export function outstanding(state) {
  const unpaid = activeOrders(state).filter(o => !o.paid);
  return { count: unpaid.length, total: round2(sum(unpaid, o => orderTotals(state, o).revenue)) };
}
export function overdueInvoices(state) { return state.invoices.filter(i => invoiceStatus(i) === 'overdue'); }

export function breakdown(state, orders, keyFn, labelFn) {
  const map = new Map();
  for (const o of orders) {
    const k = keyFn(o); const t = orderTotals(state, o);
    if (!map.has(k)) map.set(k, { key: k, label: labelFn(k, o), revenue: 0, profit: 0, count: 0, qty: 0 });
    const r = map.get(k); r.revenue += t.revenue; r.profit += t.profit; r.count++;
  }
  return [...map.values()].map(r => ({ ...r, revenue: round2(r.revenue), profit: round2(r.profit), margin: r.revenue ? r.profit / r.revenue : 0 })).sort((a, b) => b.revenue - a.revenue);
}
export function productBreakdown(state, orders) {
  const map = new Map();
  for (const o of orders) for (const it of o.items || []) {
    const k = it.productId || it.name;
    if (!map.has(k)) map.set(k, { key: k, label: it.name, qty: 0, revenue: 0, profit: 0 });
    const r = map.get(k); const rev = (Number(it.qty) || 0) * (Number(it.unitPrice) || 0); r.qty += Number(it.qty) || 0; r.revenue += rev; r.profit += rev - (Number(it.qty) || 0) * (Number(it.unitCost) || 0);
  }
  return [...map.values()].map(r => ({ ...r, revenue: round2(r.revenue), profit: round2(r.profit), margin: r.revenue ? r.profit / r.revenue : 0 })).sort((a, b) => b.revenue - a.revenue);
}

/** UK tax year boundaries for a date (6 April – 5 April). */
export function taxYearFor(iso = today()) {
  const [y, m, d] = iso.split('-').map(Number);
  const startYear = (m > 4 || (m === 4 && d >= 6)) ? y : y - 1;
  return { from: `${startYear}-04-06`, to: `${startYear + 1}-04-05`, label: `${startYear}/${String(startYear + 1).slice(2)}` };
}

/** Estimated UK Income Tax + Class 4 NI attributable to the hustle. */
export function ukTaxEstimate(tax, profit, otherIncome = 0, turnover = 0, expensesTotal = 0) {
  const t = tax;
  // Trading allowance: use it instead of expenses if it gives a lower taxable profit.
  const useAllowance = turnover <= t.tradingAllowance || expensesTotal < t.tradingAllowance;
  const taxableProfit = Math.max(0, useAllowance ? turnover - t.tradingAllowance : profit);
  const incomeTax = inc => {
    let tax = 0, pa = t.personalAllowance;
    if (inc > 100000) pa = Math.max(0, pa - (inc - 100000) / 2);
    const taxable = Math.max(0, inc - pa);
    const basic = Math.min(taxable, t.basicRateLimit - t.personalAllowance);
    const higher = Math.min(Math.max(0, taxable - basic), t.higherRateLimit - t.basicRateLimit);
    const additional = Math.max(0, taxable - basic - higher);
    tax += basic * t.basicRate + higher * t.higherRate + additional * t.additionalRate;
    return tax;
  };
  const ni = p => { const main = Math.min(Math.max(0, p - t.class4LowerLimit), t.class4UpperLimit - t.class4LowerLimit) * t.class4MainRate; const upper = Math.max(0, p - t.class4UpperLimit) * t.class4UpperRate; return main + upper; };
  const taxOnHustle = incomeTax(otherIncome + taxableProfit) - incomeTax(otherIncome);
  const niOnHustle = ni(taxableProfit);
  const mustRegister = turnover > t.tradingAllowance;
  return { taxableProfit: round2(taxableProfit), useAllowance, incomeTax: round2(taxOnHustle), ni: round2(niOnHustle), total: round2(taxOnHustle + niOnHustle), mustRegister, effectiveRate: taxableProfit ? (taxOnHustle + niOnHustle) / taxableProfit : 0 };
}

export function unbilledTime(state) { return state.timeEntries.filter(t => t.billable && !t.invoiced); }
