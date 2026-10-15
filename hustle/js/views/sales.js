import { h, fmt, table, pill, btn, segmented, empty, menu, input, select, toast, confirmDialog, downloadFile, toCSV, today } from '../util.js';
import { orderTotals, customerName, stageName, activeOrders } from '../calc.js';
import { orderForm, expenseForm } from '../forms.js';

let mode = 'list';
let filter = { q: '', stage: '', paid: '', channel: '' };

export default {
  title: ctx => ctx.type.salesLabel,
  subtitle: ctx => `${activeOrders(ctx.state).length} recorded · drag cards between stages on the board`,
  actions: ctx => [btn(`+ New ${ctx.type.salesLabel.replace(/s$/, '').toLowerCase()}`, () => orderForm(null), 'btn-ghost')],
  render(ctx) {
    const { state, store, type } = ctx;
    if (ctx.param === 'board') { mode = 'board'; history.replaceState(null, '', '#sales'); }
    const root = h('div.stack');
    const orders = state.orders.filter(o => {
      if (filter.stage && o.stageId !== filter.stage) return false;
      if (filter.paid === 'paid' && !o.paid) return false;
      if (filter.paid === 'unpaid' && (o.paid || o.cancelled)) return false;
      if (filter.paid === 'cancelled' && !o.cancelled) return false;
      if (filter.paid !== 'cancelled' && o.cancelled) return false;
      if (filter.channel && o.channelId !== filter.channel) return false;
      if (filter.q) { const q = filter.q.toLowerCase(); const hay = [o.number, customerName(state, o.customerId), ...o.items.map(i => i.name), o.notes, o.delivery?.tracking].join(' ').toLowerCase(); if (!hay.includes(q)) return false; }
      return true;
    }).sort((a, b) => (b.date + b.createdAt).localeCompare(a.date + a.createdAt));

    const search = input({ type: 'search', placeholder: `Search ${type.salesLabel.toLowerCase()}…`, value: filter.q, onInput: e => { filter.q = e.target.value; redraw(); } });
    const filters = h('div.filters', search,
      select({ value: filter.stage, onChange: e => { filter.stage = e.target.value; redraw(); } }, [{ value: '', label: 'All stages' }, ...state.stages.map(s => ({ value: s.id, label: s.name }))]),
      select({ value: filter.paid, onChange: e => { filter.paid = e.target.value; redraw(); } }, [{ value: '', label: 'Paid & unpaid' }, { value: 'paid', label: 'Paid' }, { value: 'unpaid', label: 'Unpaid' }, { value: 'cancelled', label: 'Cancelled / refunded' }]),
      select({ value: filter.channel, onChange: e => { filter.channel = e.target.value; redraw(); } }, [{ value: '', label: 'All channels' }, ...state.channels.map(c => ({ value: c.id, label: c.name }))]),
      h('div.spacer'),
      segmented([{ value: 'list', label: 'List' }, { value: 'board', label: 'Board' }], mode, v => { mode = v; redraw(); }),
      btn('CSV', () => exportCSV(state, orders), 'btn-ghost btn-sm'),
    );
    const body = h('div');
    root.append(filters, body);
    function redraw() { body.replaceChildren(mode === 'board' ? board(ctx, orders) : list(ctx, orders)); }
    redraw();
    return root;
  },
};

function actionsFor(ctx, o) {
  const { store, state } = ctx;
  return menu([
    { label: 'Edit', onClick: () => orderForm(o) },
    o.paid ? { label: 'Mark unpaid', onClick: () => store.markOrderPaid(o.id, false) } : { label: 'Mark paid', onClick: () => store.markOrderPaid(o.id, true) },
    !o.invoiceId ? { label: 'Create invoice', onClick: () => { const inv = store.createInvoiceFromOrder(o); toast(`Invoice ${inv.number} created`); ctx.navigate('invoices', inv.id); } } : { label: 'View invoice', onClick: () => ctx.navigate('invoices', o.invoiceId) },
    { label: 'Add a cost to this sale', onClick: () => expenseForm(null, null, { orderId: o.id, category: 'Materials & ingredients' }) },
    { label: 'Duplicate', onClick: () => { const { id, createdAt, updatedAt, number, invoiceId, ...rest } = o; store.createOrder({ ...rest, date: today(), paid: false, paidAt: null, delivery: { method: o.delivery?.method }, stageId: state.stages[0]?.id }); toast('Duplicated'); } },
    o.cancelled ? { label: 'Restore', onClick: () => store.update('orders', o.id, { cancelled: false }) } : { label: 'Cancel / refund', danger: true, onClick: async () => { if (await confirmDialog('Mark this as cancelled or refunded? It will be excluded from revenue and stock goes back.', { okText: 'Cancel sale' })) store.update('orders', o.id, { cancelled: true, paid: false }); } },
  ]);
}

function list(ctx, orders) {
  const { state, type } = ctx;
  if (!orders.length) return empty('🧾', `No ${type.salesLabel.toLowerCase()} match`, 'Record one with the button above or press n.', btn(`Record a ${type.salesLabel.replace(/s$/, '').toLowerCase()}`, () => orderForm(null)));
  let totRev = 0, totProfit = 0;
  const rows = orders.map(o => {
    const t = orderTotals(state, o); totRev += t.revenue; totProfit += t.profit;
    const lastStage = state.stages[state.stages.length - 1]?.id === o.stageId;
    return h('tr', { class: o.cancelled ? 'muted' : '' },
      h('td', h('b', o.number), h('span.sub', fmt.date(o.date))),
      h('td', o.items.map(i => `${i.qty > 1 ? i.qty + '× ' : ''}${i.name}`).join(', '), h('span.sub', `${customerName(state, o.customerId)} · ${(state.channels.find(c => c.id === o.channelId) || {}).name || ''}`)),
      h('td', o.cancelled ? pill('Cancelled', 'bad') : pill(stageName(state, o.stageId), lastStage ? 'good' : 'info')),
      h('td', o.cancelled ? '' : o.paid ? pill('Paid', 'good') : pill('Unpaid', 'warn')),
      h('td.num', fmt.money(t.revenue)),
      h('td.num', { class: t.profit < 0 ? 'bad' : '' }, fmt.money(t.profit), h('span.sub', fmt.pct(t.margin))),
      h('td', h('div.table-actions', btn('Edit', () => orderForm(o), 'btn-sm btn-ghost'), actionsFor(ctx, o))));
  });
  const t = table([{ label: 'Ref' }, 'Items', 'Stage', 'Paid', { label: 'Total', class: 'num' }, { label: 'Profit', class: 'num' }, ''], rows);
  t.querySelector('table').appendChild(h('tfoot', h('tr', h('td', { colspan: 4 }, `${orders.length} ${type.salesLabel.toLowerCase()}`), h('td.num', fmt.money(totRev)), h('td.num', fmt.money(totProfit), h('span.sub', totRev ? fmt.pct(totProfit / totRev) : '')), h('td'))));
  return h('div.card', t);
}

function board(ctx, orders) {
  const { state, store } = ctx;
  const wrap = h('div.kanban');
  for (const st of state.stages) {
    const col = h('div.kcol', { dataset: { stage: st.id } });
    const inStage = orders.filter(o => o.stageId === st.id && !o.cancelled);
    const isLast = st.id === state.stages[state.stages.length - 1]?.id;
    const shown = isLast ? inStage.slice(0, 8) : inStage;
    col.appendChild(h('div.kcol-head', h('span', st.name), h('span.count', `${inStage.length} · ${fmt.money(inStage.reduce((a, o) => a + orderTotals(state, o).revenue, 0), { compact: true })}`)));
    for (const o of shown) {
      const t = orderTotals(state, o);
      const idx = state.stages.findIndex(s => s.id === st.id);
      const card = h('div.kcard', { draggable: 'true', ondragstart: e => { e.dataTransfer.setData('text/plain', o.id); e.dataTransfer.effectAllowed = 'move'; }, onClick: () => orderForm(o) },
        h('div.kt', h('span', o.items.map(i => `${i.qty > 1 ? i.qty + '× ' : ''}${i.name}`).join(', ')), h('span', fmt.money(t.revenue))),
        h('div.ks', h('span', customerName(state, o.customerId)), h('span', o.dueDate ? `Due ${fmt.rel(o.dueDate)}` : fmt.date(o.date, 'short'))),
        h('div.kp', o.paid ? pill('Paid', 'good') : pill('Unpaid', 'warn'), o.delivery?.tracking ? pill('Tracked', 'info') : null, o.dueDate && o.dueDate < today() ? pill('Late', 'bad') : null),
        h('div.kcard-move', idx > 0 ? h('button.btn.btn-sm.btn-ghost', { type: 'button', onClick: e => { e.stopPropagation(); store.update('orders', o.id, { stageId: state.stages[idx - 1].id }); } }, '←') : null, idx < state.stages.length - 1 ? h('button.btn.btn-sm.btn-ghost', { type: 'button', onClick: e => { e.stopPropagation(); store.update('orders', o.id, { stageId: state.stages[idx + 1].id }); } }, `→ ${state.stages[idx + 1].name}`) : null));
      col.appendChild(card);
    }
    if (shown.length < inStage.length) col.appendChild(h('p.muted', { style: { fontSize: '.8rem', textAlign: 'center', padding: '6px' } }, `+ ${inStage.length - shown.length} more in the list view`));
    col.addEventListener('dragover', e => { e.preventDefault(); col.classList.add('over'); });
    col.addEventListener('dragleave', () => col.classList.remove('over'));
    col.addEventListener('drop', e => { e.preventDefault(); col.classList.remove('over'); const id = e.dataTransfer.getData('text/plain'); if (id) store.update('orders', id, { stageId: st.id }); });
    wrap.appendChild(col);
  }
  return wrap;
}

function exportCSV(state, orders) {
  const rows = orders.map(o => { const t = orderTotals(state, o); return [o.number, o.date, customerName(state, o.customerId), (state.channels.find(c => c.id === o.channelId) || {}).name || '', stageName(state, o.stageId), o.items.map(i => `${i.qty} x ${i.name}`).join('; '), t.revenue, t.fees, t.cogs, t.shippingCost, t.profit, o.paid ? 'yes' : 'no', o.cancelled ? 'yes' : 'no']; });
  if (!downloadFile('sales.csv', toCSV(rows, ['Ref', 'Date', 'Customer', 'Channel', 'Stage', 'Items', 'Revenue', 'Fees', 'Cost of goods', 'Postage cost', 'Profit', 'Paid', 'Cancelled']), 'text/csv')) toast('Download blocked in this viewer', 'err');
}
