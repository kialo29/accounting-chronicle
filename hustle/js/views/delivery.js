import { h, fmt, pill, btn, empty, input, today, toast, openModal, field, grid, segmented } from '../util.js';
import { orderTotals, customerName, stageName, activeOrders } from '../calc.js';
import { orderForm } from '../forms.js';

let tab = 'todo';
const METHOD = { post: 'Post', collect: 'Collection', 'in-person': 'In person', digital: 'Digital' };

export default {
  title: 'Delivery & fulfilment',
  subtitle: () => 'Everything that still needs to go out, be collected or be delivered',
  render(ctx) {
    const { state, store, type } = ctx;
    const lastStage = state.stages[state.stages.length - 1]?.id;
    const all = activeOrders(state).filter(o => o.stageId !== lastStage || tab === 'done');
    const todo = activeOrders(state).filter(o => !o.delivery?.deliveredAt && o.stageId !== lastStage);
    const shipped = todo.filter(o => o.delivery?.shippedAt);
    const waiting = todo.filter(o => !o.delivery?.shippedAt);
    const done = activeOrders(state).filter(o => o.delivery?.deliveredAt || o.stageId === lastStage).sort((a, b) => (b.delivery?.deliveredAt || b.date).localeCompare(a.delivery?.deliveredAt || a.date)).slice(0, 40);
    const groups = { todo: waiting, shipped, done };
    const root = h('div.stack',
      h('div.stats',
        h('div.stat', h('div.stat-label', 'To send / prepare'), h('div.stat-value', waiting.length)),
        h('div.stat', h('div.stat-label', 'On the way'), h('div.stat-value', shipped.length)),
        h('div.stat', h('div.stat-label', 'Delivered (recent)'), h('div.stat-value', done.length)),
        h('div.stat', h('div.stat-label', 'Postage cost this month'), h('div.stat-value', fmt.money(activeOrders(state).filter(o => o.date.slice(0, 7) === today().slice(0, 7)).reduce((a, o) => a + (Number(o.shippingCost) || 0), 0)))),
      ),
      segmented([{ value: 'todo', label: `To do (${waiting.length})` }, { value: 'shipped', label: `On the way (${shipped.length})` }, { value: 'done', label: 'Delivered' }], tab, v => { tab = v; ctx.navigate('delivery'); }),
    );
    const body = h('div');
    root.appendChild(body);
    function redraw() {
      const list = groups[tab].sort((a, b) => (a.dueDate || a.date).localeCompare(b.dueDate || b.date));
      if (!list.length) { body.replaceChildren(h('div.card', empty('📦', tab === 'todo' ? 'Nothing waiting' : tab === 'shipped' ? 'Nothing on the way' : 'Nothing delivered yet', tab === 'todo' ? `New ${type.salesLabel.toLowerCase()} appear here until they reach the last stage.` : ''))); return; }
      body.replaceChildren(h('div.card', h('div.list', list.map(o => row(o)))));
    }
    function row(o) {
      const d = o.delivery || {};
      const late = o.dueDate && o.dueDate < today() && !d.deliveredAt;
      return h('div.list-item',
        h('div.li-main',
          h('div.li-title', `${o.number} · ${o.items.map(i => `${i.qty > 1 ? i.qty + '× ' : ''}${i.name}`).join(', ')}`),
          h('div.li-sub', `${customerName(state, o.customerId)} · ${METHOD[d.method] || 'Post'}${d.address ? ' · ' + d.address : ''}${d.carrier ? ' · ' + d.carrier : ''}${d.tracking ? ' · ' + d.tracking : ''}`),
          h('div.row', { style: { marginTop: '4px', gap: '4px' } }, pill(stageName(state, o.stageId), 'info'), o.dueDate ? pill(`Due ${fmt.rel(o.dueDate)}`, late ? 'bad' : '') : null, d.shippedAt ? pill(`Sent ${fmt.date(d.shippedAt, 'short')}`, 'good') : null, d.deliveredAt ? pill(`Delivered ${fmt.date(d.deliveredAt, 'short')}`, 'good') : null, o.paid ? null : pill('Unpaid', 'warn'))),
        h('div.table-actions',
          !d.shippedAt && !d.deliveredAt ? btn(d.method === 'post' ? 'Mark sent' : 'Mark ready', () => markSent(o), 'btn-sm btn-primary') : null,
          !d.deliveredAt ? btn('Delivered', () => { store.update('orders', o.id, { delivery: { ...d, deliveredAt: today() }, stageId: lastStage || o.stageId }); toast('Marked delivered'); }, 'btn-sm') : null,
          btn('Edit', () => orderForm(o), 'btn-sm btn-ghost')));
    }
    function markSent(o) {
      const d = o.delivery || {};
      const carrier = input({ value: d.carrier || '', placeholder: 'Royal Mail, Evri, InPost, DPD…' });
      const tracking = input({ value: d.tracking || '', placeholder: 'optional' });
      const cost = input({ type: 'number', min: 0, value: o.shippingCost || 0 });
      const nextStage = state.stages.find(s => /ship|sent|ready|deliver/i.test(s.name)) || state.stages[Math.min(state.stages.length - 1, state.stages.findIndex(s => s.id === o.stageId) + 1)];
      const m = openModal({ title: `Mark ${o.number} as sent`, size: 'sm', body: h('div.form', grid(2, field('Carrier', carrier), field('Tracking number', tracking)), field('Postage you paid', cost)),
        footer: [btn('Cancel', () => m.close(), 'btn-ghost'), btn('Mark sent', () => { store.update('orders', o.id, { shippingCost: Number(cost.value) || 0, delivery: { ...d, carrier: carrier.value, tracking: tracking.value, shippedAt: today() }, stageId: nextStage ? nextStage.id : o.stageId }); m.close(); toast('Marked as sent'); })] });
    }
    redraw();
    return root;
  },
};
