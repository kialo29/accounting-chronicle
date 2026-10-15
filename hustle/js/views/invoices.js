import { h, fmt, table, pill, btn, empty, menu, input, select, toast, confirmDialog, copyText, openModal, today, addDays } from '../util.js';
import { invoiceTotals, invoiceStatus, customerName, outstanding, overdueInvoices } from '../calc.js';
import { invoiceForm } from '../forms.js';

let filter = { q: '', status: '' };
const TONE = { draft: '', sent: 'info', paid: 'good', overdue: 'bad', void: '' };

export default {
  title: 'Invoices',
  subtitle: ctx => { const od = overdueInvoices(ctx.state); const o = outstanding(ctx.state); return `${fmt.money(o.total)} outstanding${od.length ? ` · ${od.length} overdue` : ''}`; },
  actions: () => [btn('+ New invoice', () => invoiceForm(null), 'btn-ghost')],
  render(ctx) {
    const { state, store } = ctx;
    const root = h('div.stack');
    if (ctx.param) { const inv = store.get('invoices', ctx.param); history.replaceState(null, '', '#invoices'); if (inv) { setTimeout(() => viewInvoice(ctx, inv), 0); } }
    const invs = state.invoices.filter(i => {
      const st = invoiceStatus(i);
      if (filter.status && st !== filter.status) return false;
      if (filter.q) { const q = filter.q.toLowerCase(); if (![i.number, customerName(state, i.customerId), ...(i.items || []).map(x => x.description)].join(' ').toLowerCase().includes(q)) return false; }
      return true;
    }).sort((a, b) => b.number.localeCompare(a.number, undefined, { numeric: true }));
    const counts = { sent: 0, overdue: 0, paid: 0, draft: 0 };
    let sentTotal = 0, overdueTotal = 0, paidMonth = 0;
    for (const i of state.invoices) { const s = invoiceStatus(i); counts[s] = (counts[s] || 0) + 1; const t = invoiceTotals(i).total; if (s === 'sent') sentTotal += t; if (s === 'overdue') overdueTotal += t; if (s === 'paid' && (i.paidAt || '').slice(0, 7) === today().slice(0, 7)) paidMonth += t; }
    root.appendChild(h('div.stats',
      h('div.stat.warn', h('div.stat-label', 'Awaiting payment'), h('div.stat-value', fmt.money(sentTotal)), h('div.stat-sub', `${counts.sent || 0} sent`)),
      h('div.stat.bad', h('div.stat-label', 'Overdue'), h('div.stat-value', fmt.money(overdueTotal)), h('div.stat-sub', `${counts.overdue || 0} invoices`)),
      h('div.stat.good', h('div.stat-label', 'Paid this month'), h('div.stat-value', fmt.money(paidMonth))),
      h('div.stat', h('div.stat-label', 'Drafts'), h('div.stat-value', counts.draft || 0)),
    ));
    root.appendChild(h('div.filters',
      input({ type: 'search', placeholder: 'Search invoices…', value: filter.q, onInput: e => { filter.q = e.target.value; redraw(); } }),
      select({ value: filter.status, onChange: e => { filter.status = e.target.value; redraw(); } }, [{ value: '', label: 'All statuses' }, { value: 'draft', label: 'Draft' }, { value: 'sent', label: 'Sent' }, { value: 'overdue', label: 'Overdue' }, { value: 'paid', label: 'Paid' }])));
    const body = h('div'); root.appendChild(body);
    function redraw() {
      if (!invs.length) { body.replaceChildren(h('div.card', empty('📄', 'No invoices yet', 'Create one from a sale, from unbilled time, or from scratch.', btn('New invoice', () => invoiceForm(null))))); return; }
      const rows = invs.map(i => {
        const st = invoiceStatus(i); const t = invoiceTotals(i);
        return h('tr.clickable', { onClick: e => { if (e.target.closest('button')) return; viewInvoice(ctx, i); } },
          h('td', h('b', i.number), h('span.sub', fmt.date(i.date))),
          h('td', customerName(state, i.customerId), h('span.sub', (i.items || []).map(x => x.description).join(', ').slice(0, 60))),
          h('td', pill(st[0].toUpperCase() + st.slice(1), TONE[st]), st === 'overdue' ? h('span.sub', `due ${fmt.rel(i.dueDate)}`) : st === 'sent' ? h('span.sub', `due ${fmt.rel(i.dueDate)}`) : null),
          h('td.num', fmt.money(t.total)),
          h('td', h('div.table-actions', btn('View', () => viewInvoice(ctx, i), 'btn-sm btn-ghost'), actions(ctx, i))));
      });
      body.replaceChildren(h('div.card', table(['Number', 'Customer', 'Status', { label: 'Total', class: 'num' }, ''], rows)));
    }
    redraw();
    return root;
  },
};

function actions(ctx, i) {
  const { store } = ctx; const st = invoiceStatus(i);
  return menu([
    { label: 'Edit', onClick: () => invoiceForm(i) },
    st === 'draft' ? { label: 'Mark as sent', onClick: () => { store.update('invoices', i.id, { status: 'sent', sentAt: today() }); toast('Marked as sent'); } } : null,
    st !== 'paid' ? { label: 'Mark as paid', onClick: () => { store.markInvoicePaid(i.id, true); toast('Paid 🎉'); } } : { label: 'Mark as unpaid', onClick: () => store.markInvoicePaid(i.id, false) },
    { label: 'Copy as text', onClick: async () => { await copyText(invoiceText(ctx, i)); toast('Copied, paste it into an email or message'); } },
    { label: 'Copy payment reminder', onClick: async () => { await copyText(reminderText(ctx, i)); toast('Reminder copied'); } },
    { label: 'Duplicate', onClick: () => { const { id, createdAt, updatedAt, number, orderId, status, paidAt, sentAt, ...rest } = i; invoiceForm(null, null, { ...rest, customerId: i.customerId, items: i.items }); } },
    { label: 'Delete', danger: true, onClick: async () => { if (await confirmDialog('Delete this invoice?')) { store.remove('invoices', i.id); if (i.orderId) store.update('orders', i.orderId, { invoiceId: null }); } } },
  ]);
}

export function invoiceDoc(ctx, inv) {
  const { state } = ctx; const s = state.settings; const t = invoiceTotals(inv); const c = state.customers.find(x => x.id === inv.customerId); const st = invoiceStatus(inv);
  return h('div.invoice-doc',
    h('div.inv-head',
      h('div', h('h1', 'Invoice'), h('div', { style: { marginTop: '6px', fontWeight: 700, fontSize: '1.1rem' } }, s.businessName), s.address ? h('div', { style: { whiteSpace: 'pre-line', color: '#4b505b' } }, s.address) : null, s.email ? h('div', { style: { color: '#4b505b' } }, s.email) : null, s.phone ? h('div', { style: { color: '#4b505b' } }, s.phone) : null),
      h('div.inv-meta', h('div', h('span.lbl', 'Invoice no. '), h('b', inv.number)), h('div', h('span.lbl', 'Date '), fmt.date(inv.date)), h('div', h('span.lbl', 'Due '), fmt.date(inv.dueDate)), st === 'paid' ? h('div', { style: { marginTop: '10px' } }, h('span.stamp', 'PAID')) : st === 'overdue' ? h('div', { style: { marginTop: '10px' } }, h('span.stamp.overdue', 'OVERDUE')) : null)),
    h('div.inv-parties',
      h('div', h('div.lbl', 'Bill to'), h('div', { style: { fontWeight: 700 } }, c ? c.name : 'Customer'), c?.address ? h('div', { style: { whiteSpace: 'pre-line' } }, c.address) : null, c?.email ? h('div', c.email) : null),
      h('div', h('div.lbl', 'Payment'), h('div', `Due within ${Math.max(0, Math.round((new Date(inv.dueDate) - new Date(inv.date)) / 86400000))} days`), s.vatRegistered && s.vatNumber ? h('div', `VAT no. ${s.vatNumber}`) : null)),
    h('table', h('thead', h('tr', h('th', 'Description'), h('th.num', 'Qty'), h('th.num', 'Unit price'), h('th.num', 'Amount'))),
      h('tbody', (inv.items || []).map(it => h('tr', h('td', it.description), h('td.num', fmt.num(it.qty, Number.isInteger(it.qty) ? 0 : 2)), h('td.num', fmt.money(it.unitPrice)), h('td.num', fmt.money(it.qty * it.unitPrice)))))),
    h('div.inv-totals', h('span', 'Subtotal'), h('span.num', fmt.money(t.subtotal)), t.discount ? h('span', 'Discount') : null, t.discount ? h('span.num', '−' + fmt.money(t.discount)) : null, t.shipping ? h('span', 'Delivery') : null, t.shipping ? h('span.num', fmt.money(t.shipping)) : null, t.vat ? h('span', `VAT ${inv.vatRate}%`) : null, t.vat ? h('span.num', fmt.money(t.vat)) : null, h('span.big', 'Total due'), h('span.num.big', fmt.money(t.total))),
    h('div.inv-foot', h('div', h('div.lbl', 'How to pay'), s.paymentDetails || 'Add your bank details in Settings'), h('div', h('div.lbl', 'Notes'), [inv.notes, s.invoiceFooter].filter(Boolean).join('\n'))));
}

export function invoiceText(ctx, inv) {
  const { state } = ctx; const s = state.settings; const t = invoiceTotals(inv);
  const lines = [`INVOICE ${inv.number} from ${s.businessName}`, `Date: ${fmt.date(inv.date)}   Due: ${fmt.date(inv.dueDate)}`, `To: ${customerName(state, inv.customerId)}`, ''];
  for (const it of inv.items || []) lines.push(`${it.qty} × ${it.description} @ ${fmt.money(it.unitPrice)} = ${fmt.money(it.qty * it.unitPrice)}`);
  lines.push('');
  if (t.discount) lines.push(`Discount: −${fmt.money(t.discount)}`);
  if (t.shipping) lines.push(`Delivery: ${fmt.money(t.shipping)}`);
  if (t.vat) lines.push(`VAT ${inv.vatRate}%: ${fmt.money(t.vat)}`);
  lines.push(`TOTAL DUE: ${fmt.money(t.total)}`, '', 'How to pay:', s.paymentDetails || '', '', inv.notes || '', s.invoiceFooter || '');
  return lines.join('\n');
}
export function reminderText(ctx, inv) {
  const { state } = ctx; const s = state.settings; const t = invoiceTotals(inv); const c = state.customers.find(x => x.id === inv.customerId);
  const od = invoiceStatus(inv) === 'overdue';
  return `Hi ${c ? c.name.split(' ')[0] : 'there'},\n\nJust a ${od ? 'reminder that invoice' : 'note that invoice'} ${inv.number} for ${fmt.money(t.total)} ${od ? `was due on ${fmt.date(inv.dueDate)} and is still outstanding` : `is due on ${fmt.date(inv.dueDate)}`}.\n\nYou can pay by:\n${s.paymentDetails || '(payment details)'}\n\nThanks,\n${s.ownerName || s.businessName}`;
}

export function viewInvoice(ctx, inv) {
  const { store } = ctx;
  const fresh = () => store.get('invoices', inv.id) || inv;
  const doc = h('div', invoiceDoc(ctx, fresh()));
  const st = invoiceStatus(fresh());
  const m = openModal({ title: `${inv.number}`, size: 'xl', body: doc, footer: [
    h('div.left.row',
      st === 'draft' ? btn('Mark sent', () => { store.update('invoices', inv.id, { status: 'sent', sentAt: today() }); doc.replaceChildren(invoiceDoc(ctx, fresh())); toast('Marked as sent'); }, 'btn-ghost') : null,
      st !== 'paid' ? btn('Mark paid', () => { store.markInvoicePaid(inv.id, true); doc.replaceChildren(invoiceDoc(ctx, fresh())); toast('Paid 🎉'); }, 'btn-ghost') : null,
      btn('Edit', () => { m.close(); invoiceForm(fresh()); }, 'btn-ghost')),
    btn('Copy as text', async () => { await copyText(invoiceText(ctx, fresh())); toast('Copied'); }, 'btn-ghost'),
    btn('Print / save PDF', () => printInvoice(ctx, fresh()), 'btn-primary'),
  ] });
}

export function printInvoice(ctx, inv) {
  const area = document.getElementById('print-area');
  area.replaceChildren(invoiceDoc(ctx, inv));
  document.body.classList.add('printing');
  const done = () => { document.body.classList.remove('printing'); area.replaceChildren(); window.removeEventListener('afterprint', done); };
  window.addEventListener('afterprint', done);
  try { window.print(); } catch { }
  setTimeout(done, 1500);
  if (!window.matchMedia || !window.matchMedia('print')) toast('If nothing happened, use “Copy as text” instead');
}
