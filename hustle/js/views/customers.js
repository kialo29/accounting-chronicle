import { h, fmt, table, pill, btn, empty, input, openModal, sum, copyText, toast } from '../util.js';
import { orderTotals, activeOrders, invoiceTotals, invoiceStatus, unbilledTime } from '../calc.js';
import { customerForm, orderForm, invoiceForm, timeForm, invoiceFromTime } from '../forms.js';

let q = '';

export default {
  title: ctx => ctx.type.customerLabel,
  subtitle: ctx => `${ctx.state.customers.length} on file`,
  actions: ctx => [btn(`+ Add ${ctx.type.customerLabel.replace(/s$/, '').toLowerCase()}`, () => customerForm(null), 'btn-ghost')],
  render(ctx) {
    const { state, type } = ctx;
    const root = h('div.stack');
    const stats = state.customers.map(c => {
      const orders = activeOrders(state).filter(o => o.customerId === c.id);
      const rev = sum(orders, o => orderTotals(state, o).revenue);
      const profit = sum(orders, o => orderTotals(state, o).profit);
      const last = orders.map(o => o.date).sort().pop();
      const owed = sum(orders.filter(o => !o.paid), o => orderTotals(state, o).revenue);
      return { c, orders: orders.length, rev, profit, last, owed };
    }).filter(x => !q || (x.c.name + ' ' + (x.c.email || '') + ' ' + (x.c.notes || '')).toLowerCase().includes(q.toLowerCase())).sort((a, b) => b.rev - a.rev);
    root.appendChild(h('div.filters', input({ type: 'search', placeholder: 'Search…', value: q, onInput: e => { q = e.target.value; ctx.navigate('customers'); redraw(); } })));
    const body = h('div'); root.appendChild(body);
    function redraw() {
      if (!stats.length) { body.replaceChildren(h('div.card', empty('👥', `No ${type.customerLabel.toLowerCase()} yet`, 'They are added automatically when you record a sale, or add one here.', btn('Add one', () => customerForm(null))))); return; }
      const rows = stats.map(x => h('tr.clickable', { onClick: e => { if (e.target.closest('button')) return; viewCustomer(ctx, x.c); } },
        h('td', h('b', x.c.name), h('span.sub', [x.c.email, x.c.phone].filter(Boolean).join(' · '))),
        h('td.num', x.orders),
        h('td.num', fmt.money(x.rev)),
        h('td.num', fmt.money(x.profit)),
        h('td', x.owed ? pill(fmt.money(x.owed) + ' owed', 'warn') : pill('Paid up', 'good')),
        h('td', x.last ? fmt.date(x.last) : '–'),
        h('td', h('div.table-actions', btn('View', () => viewCustomer(ctx, x.c), 'btn-sm btn-ghost')))));
      body.replaceChildren(h('div.card', table(['Name', { label: type.salesLabel, class: 'num' }, { label: 'Spent', class: 'num' }, { label: 'Profit', class: 'num' }, 'Balance', 'Last sale', ''], rows)));
    }
    redraw();
    return root;
  },
};

export function viewCustomer(ctx, c) {
  const { state, store, type } = ctx;
  const orders = activeOrders(state).filter(o => o.customerId === c.id).sort((a, b) => b.date.localeCompare(a.date));
  const invoices = state.invoices.filter(i => i.customerId === c.id);
  const unbilled = unbilledTime(state).filter(t => t.customerId === c.id);
  const rev = sum(orders, o => orderTotals(state, o).revenue);
  const body = h('div.stack',
    h('div.stats',
      h('div.stat', h('div.stat-label', 'Lifetime value'), h('div.stat-value', fmt.money(rev))),
      h('div.stat', h('div.stat-label', type.salesLabel), h('div.stat-value', orders.length)),
      h('div.stat', h('div.stat-label', 'Owed'), h('div.stat-value', fmt.money(sum(orders.filter(o => !o.paid), o => orderTotals(state, o).revenue)))),
    ),
    h('div.kv', c.email ? [h('dt', 'Email'), h('dd', c.email)] : null, c.phone ? [h('dt', 'Phone'), h('dd', c.phone)] : null, c.address ? [h('dt', 'Address'), h('dd', { style: { whiteSpace: 'pre-line' } }, c.address)] : null, c.source ? [h('dt', 'Found you via'), h('dd', c.source)] : null, c.notes ? [h('dt', 'Notes'), h('dd', { style: { whiteSpace: 'pre-line' } }, c.notes)] : null),
    h('div.row', btn(`+ ${type.salesLabel.replace(/s$/, '')}`, () => { m.close(); orderForm(null, null, { customerId: c.id }); }, 'btn-sm'), btn('+ Invoice', () => { m.close(); invoiceForm(null, null, { customerId: c.id }); }, 'btn-sm btn-ghost'), type.hourly ? btn('+ Time', () => { m.close(); timeForm(null, null, { customerId: c.id }); }, 'btn-sm btn-ghost') : null, unbilled.length ? btn(`Invoice ${fmt.hours(sum(unbilled, t => t.minutes))} unbilled`, () => { m.close(); invoiceFromTime(c.id); }, 'btn-sm btn-primary') : null, c.email ? btn('Copy email', async () => { await copyText(c.email); toast('Copied'); }, 'btn-sm btn-ghost') : null),
    h('h3', 'History'),
    orders.length ? h('div.list', orders.map(o => { const t = orderTotals(state, o); return h('div.list-item', h('div.li-main', h('div.li-title', `${o.number} · ${o.items.map(i => i.name).join(', ')}`), h('div.li-sub', fmt.date(o.date))), h('b', fmt.money(t.revenue)), o.paid ? pill('Paid', 'good') : pill('Unpaid', 'warn'), btn('Open', () => { m.close(); orderForm(o); }, 'btn-sm btn-ghost')); })) : h('p.muted', 'No sales yet.'),
    invoices.length ? h('div', h('h3', 'Invoices'), h('div.list', invoices.map(i => h('div.list-item', h('div.li-main', h('div.li-title', i.number), h('div.li-sub', `${fmt.date(i.date)} · due ${fmt.date(i.dueDate)}`)), h('b', fmt.money(invoiceTotals(i).total)), pill(invoiceStatus(i), invoiceStatus(i) === 'paid' ? 'good' : invoiceStatus(i) === 'overdue' ? 'bad' : 'info'))))) : null,
  );
  const m = openModal({ title: c.name, size: 'lg', body, footer: [btn('Edit details', () => { m.close(); customerForm(c); }, 'btn-ghost'), btn('Close', () => m.close())] });
}
