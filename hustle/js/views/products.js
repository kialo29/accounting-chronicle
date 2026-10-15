import { h, fmt, table, pill, btn, empty, menu, input, select, field, grid, toast, confirmDialog } from '../util.js';
import { productEconomics, priceForMargin, stockOnHand, soldQty, channelFor, productBreakdown, activeOrders } from '../calc.js';
import { productForm, stockAdjustForm } from '../forms.js';

let q = '';
let showInactive = false;

export default {
  title: 'Products & pricing',
  subtitle: ctx => `${ctx.state.products.filter(p => p.active !== false).length} in your catalogue`,
  actions: () => [btn('+ Add product / service', () => productForm(null), 'btn-ghost')],
  render(ctx) {
    const { state, store, type } = ctx;
    const root = h('div.stack');
    const products = state.products.filter(p => (showInactive || p.active !== false) && (!q || (p.name + ' ' + (p.category || '') + ' ' + (p.sku || '')).toLowerCase().includes(q.toLowerCase())));
    const sold = productBreakdown(state, activeOrders(state));
    const stockValue = state.products.filter(p => p.trackStock).reduce((a, p) => a + Math.max(0, stockOnHand(state, p)) * (Number(p.cost) || 0), 0);
    const low = state.products.filter(p => p.trackStock && p.active !== false && stockOnHand(state, p) <= (Number(p.lowStock) || 0));
    root.appendChild(h('div.stats',
      h('div.stat', h('div.stat-label', 'Items'), h('div.stat-value', state.products.filter(p => p.active !== false).length)),
      h('div.stat', h('div.stat-label', 'Stock value (at cost)'), h('div.stat-value', fmt.money(stockValue))),
      h('div.stat', { class: low.length ? 'warn' : '' }, h('div.stat-label', 'Low stock'), h('div.stat-value', low.length)),
      h('div.stat', h('div.stat-label', 'Best seller'), h('div.stat-value', { style: { fontSize: '1.1rem' } }, sold[0] ? sold[0].label : '–'), sold[0] ? h('div.stat-sub', `${fmt.num(sold[0].qty)} sold · ${fmt.money(sold[0].revenue)}`) : null),
    ));
    root.appendChild(h('div.filters', input({ type: 'search', placeholder: 'Search catalogue…', value: q, onInput: e => { q = e.target.value; redraw(); } }), h('label.check', h('input', { type: 'checkbox', checked: showInactive, onChange: e => { showInactive = e.target.checked; redraw(); } }), h('span', 'Show archived'))));
    const body = h('div'); root.appendChild(body);
    function redraw() {
      if (!products.length) { body.replaceChildren(h('div.card', empty('🏷️', 'Nothing in your catalogue', 'Add what you sell with its cost and the margin calculator does the rest.', btn('Add product or service', () => productForm(null))))); return; }
      const rows = products.map(p => {
        const e = productEconomics(state, p, state.channels[0]?.id);
        const onHand = stockOnHand(state, p);
        const tone = e.margin < 0.2 ? 'bad' : e.margin < 0.4 ? 'warn' : 'good';
        const s = sold.find(x => x.key === p.id);
        return h('tr', { class: p.active === false ? 'muted' : '' },
          h('td', h('b', p.name), h('span.sub', [p.category, p.sku, p.type === 'hourly' ? 'per hour' : p.type].filter(Boolean).join(' · '))),
          h('td.num', fmt.money(p.price)),
          h('td.num', fmt.money(p.cost)),
          h('td.num', fmt.money(e.profit), h('span.sub', `after ${fmt.money(e.fees + e.ship)} fees/postage`)),
          h('td', pill(fmt.pct(e.margin), tone)),
          h('td', p.trackStock ? h('span', { class: onHand <= (Number(p.lowStock) || 0) ? 'bad' : '' }, `${onHand} on hand`, h('span.sub', `${soldQty(state, p.id)} sold`)) : h('span.muted', s ? `${fmt.num(s.qty)} sold` : '–')),
          h('td', h('div.table-actions', p.trackStock ? btn('+ Stock', () => stockAdjustForm(p), 'btn-sm btn-ghost') : null, btn('Edit', () => productForm(p), 'btn-sm btn-ghost'),
            menu([{ label: 'Duplicate', onClick: () => { const { id, createdAt, updatedAt, ...rest } = p; store.add('products', { ...rest, name: p.name + ' (copy)' }); } }, { label: p.active === false ? 'Restore' : 'Archive', onClick: () => store.update('products', p.id, { active: p.active === false }) }, { label: 'Delete', danger: true, onClick: async () => { if (await confirmDialog('Delete this item?')) store.remove('products', p.id); } }]))));
      });
      body.replaceChildren(h('div.card', table(['Item', { label: 'Price', class: 'num' }, { label: 'Unit cost', class: 'num' }, { label: 'Profit each', class: 'num' }, 'Margin', 'Stock / sold', ''], rows)));
    }
    redraw();
    root.appendChild(h('div.grid.grid-2', calculator(ctx), channels(ctx)));
    return root;
  },
};

function calculator(ctx) {
  const { state } = ctx;
  const cost = input({ type: 'number', min: 0, value: 5 });
  const ship = input({ type: 'number', min: 0, value: 0 });
  const hours = input({ type: 'number', min: 0, step: 0.25, value: 0 });
  const rate = input({ type: 'number', min: 0, value: state.settings.hourlyRate || 0 });
  const chan = select({ value: state.channels[0]?.id || '' }, state.channels.map(c => ({ value: c.id, label: `${c.name} (${c.feePct}% + ${fmt.money(c.feeFixed)})` })));
  const target = input({ type: 'number', min: 0, max: 95, value: 50 });
  const price = input({ type: 'number', min: 0, value: 15 });
  const fixed = input({ type: 'number', min: 0, value: 0 });
  const out = h('div.calc-out');
  const be = h('p.muted', { style: { fontSize: '.85rem', marginTop: '8px' } });
  function recalc() {
    const ch = channelFor(state, chan.value);
    const fullCost = Number(cost.value) + Number(hours.value) * Number(rate.value);
    const sug = priceForMargin(fullCost, ch.feePct, ch.feeFixed, Number(ship.value), Number(target.value) / 100);
    const p = Number(price.value);
    const fees = p * ch.feePct / 100 + ch.feeFixed;
    const profit = p - fullCost - fees - Number(ship.value);
    const margin = p ? profit / p : 0;
    out.replaceChildren(
      h('span', `Price for ${target.value}% margin`), h('b.good', isNaN(sug) ? 'impossible with those fees' : fmt.money(sug)),
      h('span', 'At your price, fees are'), h('b', fmt.money(fees)),
      h('span', 'Profit per sale'), h('b', { class: profit < 0 ? 'bad' : '' }, fmt.money(profit)),
      h('span', 'Margin'), h('b', { class: margin < 0.2 ? 'bad' : margin < 0.4 ? 'warn' : 'good' }, fmt.pct(margin)),
    );
    const f = Number(fixed.value);
    be.textContent = f > 0 && profit > 0 ? `To cover ${fmt.money(f)} of monthly fixed costs you need ${Math.ceil(f / profit)} sales a month (${fmt.money(Math.ceil(f / profit) * p)} revenue).` : f > 0 ? 'Profit per sale must be positive to break even.' : '';
  }
  [cost, ship, hours, rate, chan, target, price, fixed].forEach(el => el.addEventListener('input', recalc));
  recalc();
  return h('div.card', h('div.card-head', h('h3', 'Pricing & break-even calculator')),
    h('div.form',
      grid(2, field('Materials / stock cost', cost), field('Postage you pay', ship)),
      grid(2, field('Hours of your time', hours), field('Your hourly rate', rate)),
      grid(2, field('Selling via', chan), field('Target margin %', target)),
      grid(2, field('Your price', price), field('Monthly fixed costs', fixed, 'Subscriptions, insurance, market fees')),
      out, be));
}

function channels(ctx) {
  const { state, store } = ctx;
  const rows = state.channels.map(c => {
    const pct = input({ type: 'number', min: 0, value: c.feePct, style: { width: '80px' }, onChange: e => store.update('channels', c.id, { feePct: Number(e.target.value) || 0 }) });
    const fix = input({ type: 'number', min: 0, value: c.feeFixed, style: { width: '80px' }, onChange: e => store.update('channels', c.id, { feeFixed: Number(e.target.value) || 0 }) });
    return h('tr', h('td', c.name), h('td', h('div.row', pct, '%')), h('td', h('div.row', '+', fix)), h('td', h('button.icon-btn', { type: 'button', 'aria-label': 'Remove channel', onClick: async () => { if (await confirmDialog(`Remove ${c.name}? Past sales keep their fees.`, { okText: 'Remove' })) store.remove('channels', c.id); } }, '✕')));
  });
  const name = input({ placeholder: 'New channel name' }); const pct = input({ type: 'number', min: 0, placeholder: '%', style: { width: '70px' } }); const fix = input({ type: 'number', min: 0, placeholder: 'fixed', style: { width: '80px' } });
  return h('div.card', h('div.card-head', h('h3', 'Sales channels & fees'), h('small', 'Fees come off every sale automatically')),
    table(['Channel', 'Fee %', 'Fixed fee', ''], rows),
    h('div.row', { style: { marginTop: '10px' } }, h('div', { style: { flex: 1, minWidth: '140px' } }, name), pct, fix, btn('Add', () => { if (!name.value.trim()) return; store.add('channels', { name: name.value.trim(), feePct: Number(pct.value) || 0, feeFixed: Number(fix.value) || 0 }); toast('Channel added'); }, 'btn-sm')));
}
