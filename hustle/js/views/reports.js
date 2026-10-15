import { h, fmt, table, btn, input, select, field, grid, segmented, today, lastMonths, monthLabel, sum, downloadFile, toCSV, toast, monthKey } from '../util.js';
import { monthlyPnL, rangeSummary, breakdown, productBreakdown, activeOrders, customerName, taxYearFor, ukTaxEstimate, orderTotals } from '../calc.js';
import { barChart, lineChart, rankBars, donutChart } from '../charts.js';

let range = 'ty';
let custom = { from: '', to: '' };

export default {
  title: 'Reports & tax',
  subtitle: () => 'Profit & loss, what sells, who pays, and a Self Assessment estimate',
  render(ctx) {
    const { state, store } = ctx;
    const root = h('div.stack');
    const ty = taxYearFor();
    const ranges = { m: { from: today().slice(0, 7) + '-01', to: today(), label: 'This month' }, q: { from: lastMonths(3)[0] + '-01', to: today(), label: 'Last 3 months' }, ty: { from: ty.from, to: ty.to, label: `Tax year ${ty.label}` }, y: { from: lastMonths(12)[0] + '-01', to: today(), label: 'Last 12 months' }, all: { from: '0000-01-01', to: '9999-12-31', label: 'All time' }, custom: { from: custom.from || '2000-01-01', to: custom.to || today(), label: 'Custom' } };
    const r = ranges[range];
    const fromI = input({ type: 'date', value: custom.from, onChange: e => { custom.from = e.target.value; range = 'custom'; ctx.navigate('reports'); } });
    const toI = input({ type: 'date', value: custom.to, onChange: e => { custom.to = e.target.value; range = 'custom'; ctx.navigate('reports'); } });
    root.appendChild(h('div.filters', segmented(Object.entries(ranges).filter(([k]) => k !== 'custom').map(([k, v]) => ({ value: k, label: v.label })), range, v => { range = v; ctx.navigate('reports'); }), h('span.muted', 'or'), fromI, h('span.muted', 'to'), toI));

    const s = rangeSummary(state, r.from, r.to);
    const orders = activeOrders(state).filter(o => o.date >= r.from && o.date <= r.to);
    const expensesIn = state.expenses.filter(e => e.date >= r.from && e.date <= r.to && !(e.recurring && e.recurring !== 'none'));
    const fees = sum(orders, o => orderTotals(state, o).fees), cogs = sum(orders, o => orderTotals(state, o).cogs), ship = sum(orders, o => orderTotals(state, o).shippingCost);
    const totalExpenses = s.directCosts + s.overhead;

    root.appendChild(h('div.stats',
      h('div.stat', h('div.stat-label', 'Revenue'), h('div.stat-value', fmt.money(s.revenue)), h('div.stat-sub', `${s.orders} sales · ${fmt.money(s.collected)} collected`)),
      h('div.stat', h('div.stat-label', 'Costs & expenses'), h('div.stat-value', fmt.money(totalExpenses)), h('div.stat-sub', `${fmt.money(s.directCosts)} direct · ${fmt.money(s.overhead)} overhead`)),
      h('div.stat', { class: s.profit < 0 ? 'bad' : 'good' }, h('div.stat-label', 'Profit'), h('div.stat-value', fmt.money(s.profit)), h('div.stat-sub', `${fmt.pct(s.margin)} margin`)),
      h('div.stat', h('div.stat-label', 'Avg. sale'), h('div.stat-value', fmt.money(s.orders ? s.revenue / s.orders : 0)), h('div.stat-sub', `${fmt.money(s.orders ? s.profit / s.orders : 0)} profit each`)),
    ));

    // P&L statement
    const pl = h('div.card', h('div.card-head', h('h3', `Profit & loss · ${r.label}`), btn('CSV', () => exportPnL(state), 'btn-sm btn-ghost')),
      table(['', { label: 'Amount', class: 'num' }], [
        h('tr', h('td', h('b', 'Sales income')), h('td.num', h('b', fmt.money(s.revenue)))),
        h('tr', h('td', 'Cost of goods / materials'), h('td.num', '−' + fmt.money(cogs))),
        h('tr', h('td', 'Platform & payment fees'), h('td.num', '−' + fmt.money(fees))),
        h('tr', h('td', 'Postage & delivery you paid'), h('td.num', '−' + fmt.money(ship))),
        h('tr', h('td', 'Costs linked to specific sales'), h('td.num', '−' + fmt.money(s.directCosts - cogs - fees - ship))),
        h('tr', h('td', h('b', 'Gross profit')), h('td.num', h('b', fmt.money(s.revenue - s.directCosts)))),
        ...[...new Map(expensesIn.filter(e => !orders.find(o => o.id === e.orderId)).reduce((m, e) => m.set(e.category, (m.get(e.category) || 0) + e.amount), new Map()))].sort((a, b) => b[1] - a[1]).map(([c, v]) => h('tr', h('td', c), h('td.num', '−' + fmt.money(v)))),
        h('tr', h('td', h('b', 'Net profit')), h('td.num', h('b', { class: s.profit < 0 ? 'bad' : 'good' }, fmt.money(s.profit)))),
      ]));

    // monthly trend
    const pnl = monthlyPnL(state, 12);
    const trend = h('div.card', h('div.card-head', h('h3', 'Monthly trend')), barChart({ labels: pnl.map(p => monthLabel(p.month)), series: [{ name: 'Revenue', values: pnl.map(p => p.revenue) }, { name: 'Costs', values: pnl.map(p => p.revenue - p.profit) }, { name: 'Profit', values: pnl.map(p => p.profit) }] }, { height: 240 }),
      h('div.table-wrap', { style: { marginTop: '10px' } }, h('table.data', h('thead', h('tr', h('th', 'Month'), h('th.num', 'Sales'), h('th.num', 'Revenue'), h('th.num', 'Costs'), h('th.num', 'Profit'), h('th.num', 'Margin'))), h('tbody', pnl.filter(p => p.revenue || p.overhead).reverse().map(p => h('tr', h('td', monthLabel(p.month)), h('td.num', p.orders), h('td.num', fmt.money(p.revenue)), h('td.num', fmt.money(p.revenue - p.profit)), h('td.num', { class: p.profit < 0 ? 'bad' : '' }, fmt.money(p.profit)), h('td.num', fmt.pct(p.margin))))))));

    // breakdowns
    const byChannel = breakdown(state, orders, o => o.channelId, k => (state.channels.find(c => c.id === k) || { name: 'Other' }).name);
    const byCustomer = breakdown(state, orders, o => o.customerId || '', k => k ? customerName(state, k) : 'Walk-in').slice(0, 8);
    const byProduct = productBreakdown(state, orders).slice(0, 8);
    const breakdowns = h('div.grid.grid-3',
      h('div.card', h('div.card-head', h('h3', 'By channel')), byChannel.length ? h('div.stack', donutChart(byChannel.map(c => ({ label: c.label, value: c.revenue }))), h('div.table-wrap', h('table.data', h('thead', h('tr', h('th', 'Channel'), h('th.num', 'Revenue'), h('th.num', 'Margin'))), h('tbody', byChannel.map(c => h('tr', h('td', c.label), h('td.num', fmt.money(c.revenue)), h('td.num', fmt.pct(c.margin)))))))) : h('p.muted', 'No sales in this period.')),
      h('div.card', h('div.card-head', h('h3', 'Best sellers')), byProduct.length ? rankBars(byProduct.map(p => ({ label: p.label, sub: `${fmt.num(p.qty)} sold · ${fmt.pct(p.margin)} margin`, value: p.revenue }))) : h('p.muted', 'No sales in this period.')),
      h('div.card', h('div.card-head', h('h3', 'Top customers')), byCustomer.length ? rankBars(byCustomer.map(c => ({ label: c.label, sub: `${c.count} sales`, value: c.revenue }))) : h('p.muted', 'No sales in this period.')),
    );

    // tax estimate (UK)
    const tyS = rangeSummary(state, ty.from, ty.to);
    const tyOrders = activeOrders(state).filter(o => o.date >= ty.from && o.date <= ty.to);
    const tyExpenses = tyS.directCosts + tyS.overhead;
    const tax = state.settings.tax;
    const other = input({ type: 'number', min: 0, value: state.settings.otherIncome || 0, onChange: e => store.setSettings({ otherIncome: Number(e.target.value) || 0 }) });
    const est = ukTaxEstimate(tax, tyS.profit, state.settings.otherIncome || 0, tyS.revenue, tyExpenses);
    const taxCard = h('div.card', h('div.card-head', h('h3', `UK tax estimate · ${ty.label}`), h('small', 'Sole trader, Self Assessment')),
      h('div.stack',
        h('div.stack',
          h('div.kv', h('dt', 'Turnover'), h('dd', fmt.money(tyS.revenue)), h('dt', 'Expenses'), h('dd', fmt.money(tyExpenses)), h('dt', 'Profit'), h('dd', fmt.money(tyS.profit)), h('dt', est.useAllowance ? `Taxable after £${fmt.num(tax.tradingAllowance)} trading allowance` : 'Taxable profit (expenses claimed)'), h('dd', h('b', fmt.money(est.taxableProfit)))),
          field('Other income this tax year (salary etc.)', other, 'Sets which tax band your profit lands in'),
        ),
        h('div.stack',
          h('div.calc-out', h('span', 'Income tax on hustle'), h('b', fmt.money(est.incomeTax)), h('span', 'Class 4 National Insurance'), h('b', fmt.money(est.ni)), h('span', 'Set aside'), h('b.bad', fmt.money(est.total)), h('span', 'Effective rate'), h('b', fmt.pct(est.effectiveRate))),
          est.mustRegister ? h('div.hint-box.warn', `Turnover is over £${fmt.num(tax.tradingAllowance)}, so you need to register for Self Assessment by 5 October after the tax year ends and file by 31 January.`) : h('div.hint-box.good', `Turnover is under the £${fmt.num(tax.tradingAllowance)} trading allowance, so no tax return is needed for this hustle alone (keep records anyway).`),
          h('p.muted', { style: { fontSize: '.8rem' } }, 'An estimate using 2025/26 rates and no other reliefs. Student loans, pensions, Scottish rates and payments on account change the real bill. Adjust the rates in Settings.'),
        )));
    root.append(h('div.grid.grid-main', pl, taxCard), trend, breakdowns);
    return root;
  },
};

function exportPnL(state) {
  const pnl = monthlyPnL(state, 24);
  if (!downloadFile('profit-and-loss.csv', toCSV(pnl.map(p => [p.month, p.orders, p.revenue, p.cogs, p.fees, p.shipCost, p.overhead, p.profit, (p.margin * 100).toFixed(1)]), ['Month', 'Sales', 'Revenue', 'Cost of goods', 'Fees', 'Postage', 'Overheads', 'Profit', 'Margin %']), 'text/csv')) toast('Download blocked in this viewer', 'err');
}
