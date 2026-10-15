import { h, fmt, table, pill, btn, empty, input, select, menu, toast, confirmDialog, downloadFile, toCSV, today, lastMonths, monthLabel, monthKey, sum } from '../util.js';
import { donutChart, barChart } from '../charts.js';
import { expenseForm } from '../forms.js';
import { EXPENSE_CATEGORIES } from '../templates.js';

let filter = { q: '', cat: '', month: '' };

export default {
  title: 'Expenses',
  subtitle: ctx => `${fmt.money(sum(ctx.state.expenses.filter(e => e.date.slice(0, 7) === today().slice(0, 7) && !(e.recurring && e.recurring !== 'none')), e => e.amount))} spent this month`,
  actions: () => [btn('+ Record expense', () => expenseForm(null), 'btn-ghost')],
  render(ctx) {
    const { state, store } = ctx;
    const root = h('div.stack');
    const real = state.expenses.filter(e => !(e.recurring && e.recurring !== 'none')); // exclude recurring templates (their copies count)
    const templates = state.expenses.filter(e => e.recurring && e.recurring !== 'none');
    const months = lastMonths(6);
    const byMonth = months.map(m => sum(real.filter(e => monthKey(e.date) === m), e => e.amount));
    const thisMonth = real.filter(e => monthKey(e.date) === today().slice(0, 7));
    const cats = new Map(); for (const e of thisMonth) cats.set(e.category, (cats.get(e.category) || 0) + e.amount);
    root.appendChild(h('div.grid.grid-2',
      h('div.card', h('div.card-head', h('h3', 'Spending, last 6 months')), byMonth.some(Boolean) ? barChart({ labels: months.map(monthLabel), series: [{ name: 'Expenses', values: byMonth }] }, { legend: false, height: 180 }) : h('p.muted', 'No expenses yet.')),
      h('div.card', h('div.card-head', h('h3', 'This month by category')), cats.size ? donutChart([...cats].map(([label, value]) => ({ label, value }))) : h('p.muted', 'Nothing recorded this month.')),
    ));
    if (templates.length) root.appendChild(h('div.card', h('div.card-head', h('h3', 'Repeating costs'), h('small', `${fmt.money(sum(templates.filter(t => t.recurring === 'monthly'), t => t.amount) + sum(templates.filter(t => t.recurring === 'weekly'), t => t.amount * 52 / 12) + sum(templates.filter(t => t.recurring === 'yearly'), t => t.amount / 12))} a month`)),
      h('div.list', templates.map(t => h('div.list-item', h('div.li-main', h('div.li-title', t.description), h('div.li-sub', `${t.recurring} · ${t.category}${t.vendor ? ' · ' + t.vendor : ''}`)), h('b', fmt.money(t.amount)), btn('Edit', () => expenseForm(t), 'btn-sm btn-ghost'), btn('Stop', async () => { if (await confirmDialog('Stop repeating this cost? Past copies stay.', { okText: 'Stop' })) store.update('expenses', t.id, { recurring: 'none' }); }, 'btn-sm btn-ghost'))))));
    const list = real.filter(e => (!filter.cat || e.category === filter.cat) && (!filter.month || monthKey(e.date) === filter.month) && (!filter.q || (e.description + ' ' + (e.vendor || '') + ' ' + e.category).toLowerCase().includes(filter.q.toLowerCase()))).sort((a, b) => b.date.localeCompare(a.date));
    root.appendChild(h('div.filters',
      input({ type: 'search', placeholder: 'Search expenses…', value: filter.q, onInput: e => { filter.q = e.target.value; redraw(); } }),
      select({ value: filter.cat, onChange: e => { filter.cat = e.target.value; ctx.navigate('expenses'); } }, [{ value: '', label: 'All categories' }, ...EXPENSE_CATEGORIES]),
      select({ value: filter.month, onChange: e => { filter.month = e.target.value; ctx.navigate('expenses'); } }, [{ value: '', label: 'All months' }, ...lastMonths(12).reverse().map(m => ({ value: m, label: monthLabel(m) }))]),
      h('div.spacer'), btn('CSV', () => { if (!downloadFile('expenses.csv', toCSV(list.map(e => [e.date, e.category, e.description, e.vendor || '', e.amount, e.receipt || '']), ['Date', 'Category', 'Description', 'Paid to', 'Amount', 'Receipt']), 'text/csv')) toast('Download blocked in this viewer', 'err'); }, 'btn-ghost btn-sm')));
    const body = h('div'); root.appendChild(body);
    function redraw() {
      const rows = list.filter(e => !filter.q || (e.description + ' ' + (e.vendor || '') + ' ' + e.category).toLowerCase().includes(filter.q.toLowerCase()));
      if (!rows.length) { body.replaceChildren(h('div.card', empty('💳', 'No expenses here', 'Every cost you record lowers your tax bill. Press e to add one.', btn('Record expense', () => expenseForm(null))))); return; }
      const t = table(['Date', 'What', 'Category', { label: 'Amount', class: 'num' }, ''], rows.map(e => h('tr',
        h('td.date', fmt.date(e.date)),
        h('td', h('b', e.description), h('span.sub', [e.vendor, e.parentId ? 'repeating' : null, e.orderId ? 'linked to a sale' : null, e.receipt].filter(Boolean).join(' · '))),
        h('td', pill(e.category)),
        h('td.num', fmt.money(e.amount)),
        h('td', h('div.table-actions', btn('Edit', () => expenseForm(e), 'btn-sm btn-ghost'), menu([{ label: 'Duplicate', onClick: () => { const { id, createdAt, updatedAt, parentId, ...rest } = e; store.add('expenses', { ...rest, date: today() }); } }, { label: 'Delete', danger: true, onClick: async () => { if (await confirmDialog('Delete this expense?')) store.remove('expenses', e.id); } }]))))));
      t.querySelector('table').appendChild(h('tfoot', h('tr', h('td', { colspan: 3 }, `${rows.length} expenses`), h('td.num', fmt.money(sum(rows, e => e.amount))), h('td'))));
      body.replaceChildren(h('div.card', t));
    }
    redraw();
    return root;
  },
};
