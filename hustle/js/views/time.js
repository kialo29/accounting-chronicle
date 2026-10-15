import { h, fmt, table, pill, btn, empty, input, select, menu, toast, confirmDialog, sum, today, round2 } from '../util.js';
import { customerName, unbilledTime } from '../calc.js';
import { timeForm, invoiceFromTime, customerPicker } from '../forms.js';

let tick = null;

export default {
  title: 'Time',
  subtitle: ctx => { const u = unbilledTime(ctx.state); return `${fmt.hours(sum(u, t => t.minutes))} unbilled worth ${fmt.money(sum(u, t => t.minutes / 60 * t.rate))}`; },
  actions: () => [btn('+ Log time', () => timeForm(null), 'btn-ghost')],
  render(ctx) {
    const { state, store } = ctx;
    const root = h('div.stack');
    // ---- timer ----
    const timer = state.timer;
    const display = h('div.timer-big', '00:00:00');
    const desc = input({ value: timer?.description || '', placeholder: 'What are you working on?' });
    const cust = customerPicker(timer?.customerId || '');
    const update = () => { if (!store.state.timer) return; const secs = Math.floor((Date.now() - store.state.timer.startedAt) / 1000); display.textContent = [Math.floor(secs / 3600), Math.floor(secs % 3600 / 60), secs % 60].map(n => String(n).padStart(2, '0')).join(':'); };
    if (tick) clearInterval(tick); tick = null;
    if (timer) { update(); tick = setInterval(update, 1000); }
    const startBtn = btn(timer ? 'Stop & log' : 'Start timer', () => {
      if (store.state.timer) {
        const t = store.state.timer; const minutes = Math.max(1, Math.round((Date.now() - t.startedAt) / 60000));
        store.state.timer = null; store.save();
        timeForm(null, null, { customerId: cust.value, description: desc.value || t.description, minutes });
      } else { store.state.timer = { startedAt: Date.now(), customerId: cust.value, description: desc.value }; store.save(); }
    }, timer ? 'btn-danger' : 'btn-primary');
    root.appendChild(h('div.card', h('div.row', { style: { gap: '16px' } }, display, h('div', { style: { flex: 1, minWidth: '180px' } }, desc), h('div', { style: { minWidth: '180px' } }, cust), startBtn, timer ? btn('Discard', async () => { if (await confirmDialog('Discard the running timer?', { okText: 'Discard' })) { store.state.timer = null; store.save(); } }, 'btn-ghost') : null)));

    // ---- unbilled by client ----
    const unbilled = unbilledTime(state);
    const byClient = new Map();
    for (const t of unbilled) { const k = t.customerId || ''; if (!byClient.has(k)) byClient.set(k, { minutes: 0, value: 0 }); byClient.get(k).minutes += t.minutes; byClient.get(k).value += t.minutes / 60 * t.rate; }
    if (byClient.size) root.appendChild(h('div.card', h('div.card-head', h('h3', 'Ready to invoice')),
      h('div.list', [...byClient].map(([cid, v]) => h('div.list-item', h('div.li-main', h('div.li-title', cid ? customerName(state, cid) : 'No client set'), h('div.li-sub', `${fmt.hours(v.minutes)} · ${fmt.money(v.value)}`)), cid ? btn('Create invoice', () => invoiceFromTime(cid), 'btn-sm btn-primary') : h('small', 'Assign a client to invoice'))))));

    // ---- stats ----
    const wk = state.timeEntries.filter(t => t.date >= new Date(Date.now() - 6 * 86400000).toISOString().slice(0, 10));
    const mo = state.timeEntries.filter(t => t.date.slice(0, 7) === today().slice(0, 7));
    root.appendChild(h('div.stats',
      h('div.stat', h('div.stat-label', 'This week'), h('div.stat-value', fmt.hours(sum(wk, t => t.minutes)))),
      h('div.stat', h('div.stat-label', 'This month'), h('div.stat-value', fmt.hours(sum(mo, t => t.minutes))), h('div.stat-sub', `${fmt.money(sum(mo.filter(t => t.billable), t => t.minutes / 60 * t.rate))} billable`)),
      h('div.stat', h('div.stat-label', 'Average rate'), h('div.stat-value', fmt.money(mo.length ? sum(mo, t => t.minutes / 60 * t.rate) / (sum(mo, t => t.minutes) / 60) : state.settings.hourlyRate)), h('div.stat-sub', 'per hour'))));

    // ---- list ----
    const entries = [...state.timeEntries].sort((a, b) => b.date.localeCompare(a.date) || (b.createdAt || '').localeCompare(a.createdAt || ''));
    root.appendChild(h('div.card', entries.length ? table(['Date', 'Client', 'Work', { label: 'Time', class: 'num' }, { label: 'Value', class: 'num' }, 'Status', ''], entries.map(t => h('tr',
      h('td.date', fmt.date(t.date)), h('td', customerName(state, t.customerId)), h('td', t.description || '–'), h('td.num', fmt.hours(t.minutes)), h('td.num', fmt.money(t.minutes / 60 * t.rate)),
      h('td', !t.billable ? pill('Not billable') : t.invoiced ? pill('Invoiced', 'good') : pill('Unbilled', 'warn')),
      h('td', h('div.table-actions', btn('Edit', () => timeForm(t), 'btn-sm btn-ghost'), menu([{ label: t.invoiced ? 'Mark unbilled' : 'Mark as invoiced', onClick: () => store.update('timeEntries', t.id, { invoiced: !t.invoiced }) }, { label: 'Delete', danger: true, onClick: async () => { if (await confirmDialog('Delete this entry?')) store.remove('timeEntries', t.id); } }])))))) : empty('⏱️', 'No time logged', 'Start the timer or log time manually. Unbilled hours turn into invoices in one click.')));
    return root;
  },
};
