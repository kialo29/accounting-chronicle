import { h, fmt, stat, today, addDays, monthKey, monthLabel, btn, pill, empty, sum } from '../util.js';
import { orderTotals, rangeSummary, monthlyPnL, outstanding, overdueInvoices, customerName, stageName, stockOnHand, activeOrders, unbilledTime, breakdown } from '../calc.js';
import { barChart, progress, donutChart } from '../charts.js';
import { orderForm, expenseForm, taskForm } from '../forms.js';

export default {
  title: ctx => `Hi${ctx.state.settings.ownerName ? ' ' + ctx.state.settings.ownerName.split(' ')[0] : ''}, here’s ${ctx.state.settings.businessName || 'your hustle'}`,
  subtitle: () => new Date().toLocaleDateString(undefined, { weekday: 'long', day: 'numeric', month: 'long' }),
  render(ctx) {
    const { state, navigate, type } = ctx;
    const tdy = today();
    const monthStart = tdy.slice(0, 7) + '-01';
    const m = rangeSummary(state, monthStart, tdy);
    const prevStart = monthKey(addDays(monthStart, -1)) + '-01';
    const prev = rangeSummary(state, prevStart, addDays(monthStart, -1));
    const out = outstanding(state);
    const overdue = overdueInvoices(state);
    const delta = (a, b) => b ? `${a >= b ? '▲' : '▼'} ${fmt.pct(Math.abs((a - b) / b))} vs last month` : 'no data last month';

    const stats = h('div.stats',
      stat('Revenue this month', fmt.money(m.revenue), delta(m.revenue, prev.revenue)),
      stat('Profit this month', fmt.money(m.profit), `${fmt.pct(m.margin)} margin`, m.profit < 0 ? 'bad' : 'good'),
      stat('Owed to you', fmt.money(out.total), out.count ? `${out.count} unpaid ${type.salesLabel.toLowerCase()}` : 'All paid up', overdue.length ? 'warn' : ''),
      stat(`${type.salesLabel} this month`, fmt.num(m.orders), m.orders ? `avg ${fmt.money(m.revenue / m.orders)}` : 'none yet'),
    );

    // goal
    const goal = state.settings.goalRevenue || 0;
    const goalCard = goal ? h('div.card', h('div.card-head', h('h3', 'Monthly goal'), h('span.muted', `${fmt.money(m.revenue)} of ${fmt.money(goal)}`)), progress(m.revenue, goal, 'Revenue goal'),
      h('p.muted', { style: { marginTop: '8px', fontSize: '.85rem' } }, m.revenue >= goal ? '🎉 Goal hit. Raise it in Settings.' : `${fmt.money(goal - m.revenue)} to go, ${Math.max(0, new Date(tdy.slice(0, 4), tdy.slice(5, 7), 0).getDate() - Number(tdy.slice(8))) } days left`)) : null;

    // chart: revenue vs profit last 6 months
    const pnl = monthlyPnL(state, 6);
    const chartCard = h('div.card', h('div.card-head', h('h3', 'Revenue and profit, last 6 months'), btn('Reports', () => navigate('reports'), 'btn-sm btn-ghost')),
      pnl.some(p => p.revenue) ? barChart({ labels: pnl.map(p => monthLabel(p.month)), series: [{ name: 'Revenue', values: pnl.map(p => p.revenue) }, { name: 'Profit', values: pnl.map(p => p.profit) }] }) : empty('📊', 'No sales yet', `Record your first ${type.salesLabel.toLowerCase().replace(/s$/, '')} and the chart fills in.`, btn(`Record a ${type.salesLabel.replace(/s$/, '').toLowerCase()}`, () => orderForm(null))));

    // needs attention
    const attention = [];
    for (const inv of overdue) attention.push({ kind: 'bad', text: `Invoice ${inv.number} to ${customerName(state, inv.customerId)} is overdue (${fmt.rel(inv.dueDate)})`, go: () => navigate('invoices') });
    const dueTasks = state.tasks.filter(t => !t.done && t.due && t.due <= tdy);
    if (dueTasks.length) attention.push({ kind: 'warn', text: `${dueTasks.length} task${dueTasks.length > 1 ? 's' : ''} due or overdue`, go: () => navigate('tasks') });
    const low = state.products.filter(p => p.trackStock && p.active !== false && stockOnHand(state, p) <= (Number(p.lowStock) || 0));
    if (low.length) attention.push({ kind: 'warn', text: `Low stock: ${low.slice(0, 3).map(p => p.name).join(', ')}${low.length > 3 ? ` +${low.length - 3}` : ''}`, go: () => navigate('products') });
    const toShip = activeOrders(state).filter(o => o.delivery?.method === 'post' && !o.delivery?.shippedAt && state.stages.findIndex(s => s.id === o.stageId) < state.stages.length - 1);
    if (toShip.length) attention.push({ kind: 'info', text: `${toShip.length} ${toShip.length === 1 ? 'order' : 'orders'} waiting to be posted`, go: () => navigate('delivery') });
    const unbilled = unbilledTime(state);
    if (unbilled.length) attention.push({ kind: 'info', text: `${fmt.hours(sum(unbilled, t => t.minutes))} of unbilled time (${fmt.money(sum(unbilled, t => t.minutes / 60 * t.rate))})`, go: () => navigate('time') });
    const dueOrders = activeOrders(state).filter(o => o.dueDate && o.dueDate <= addDays(tdy, 2) && state.stages.findIndex(s => s.id === o.stageId) < state.stages.length - 1);
    if (dueOrders.length) attention.push({ kind: 'warn', text: `${dueOrders.length} ${type.salesLabel.toLowerCase()} due in the next 2 days`, go: () => navigate('sales') });
    const attCard = h('div.card', h('div.card-head', h('h3', 'Needs attention')),
      attention.length ? h('div.list', attention.map(a => h('div.list-item', pill('●', a.kind), h('div.li-main', h('div.li-title', { style: { fontWeight: 500 } }, a.text)), btn('Open', a.go, 'btn-sm btn-ghost')))) : h('p.muted', 'Nothing urgent. Nice.'));

    // pipeline
    const open = activeOrders(state).filter(o => state.stages.findIndex(s => s.id === o.stageId) < state.stages.length - 1);
    const pipeline = h('div.card', h('div.card-head', h('h3', `${type.salesLabel} in progress`), btn('Board', () => navigate('sales', 'board'), 'btn-sm btn-ghost')),
      state.stages.length ? h('div.row', state.stages.map(s => { const n = open.filter(o => o.stageId === s.id).length; return h('div', { style: { flex: 1, minWidth: '90px' } }, h('div.stat-label', s.name), h('div.stat-value', { style: { fontSize: '1.3rem' } }, n)); })) : h('p.muted', 'No stages set up.'));

    // recent sales
    const recent = [...activeOrders(state)].sort((a, b) => (b.date + b.createdAt).localeCompare(a.date + a.createdAt)).slice(0, 6);
    const recentCard = h('div.card', h('div.card-head', h('h3', `Recent ${type.salesLabel.toLowerCase()}`), btn('See all', () => navigate('sales'), 'btn-sm btn-ghost')),
      recent.length ? h('div.list', recent.map(o => { const t = orderTotals(state, o); return h('div.list-item', { style: { cursor: 'pointer' }, onClick: () => orderForm(o) }, h('div.li-main', h('div.li-title', o.items.map(i => `${i.qty > 1 ? i.qty + '× ' : ''}${i.name}`).join(', ')), h('div.li-sub', `${fmt.date(o.date, 'short')} · ${customerName(state, o.customerId)} · ${stageName(state, o.stageId)}`)), h('div', { style: { textAlign: 'right' } }, h('div', { style: { fontWeight: 700 } }, fmt.money(t.revenue)), h('small', { class: t.profit < 0 ? 'bad' : 'good' }, `${fmt.money(t.profit)} profit`)), o.paid ? pill('Paid', 'good') : pill('Unpaid', 'warn')); })) : h('p.muted', 'Nothing recorded yet.'));

    // top channels this month
    const thisMonthOrders = activeOrders(state).filter(o => o.date >= monthStart);
    const chan = breakdown(state, thisMonthOrders, o => o.channelId, k => (state.channels.find(c => c.id === k) || { name: 'Other' }).name);
    const chanCard = h('div.card', h('div.card-head', h('h3', 'Where this month’s money came from')), chan.length ? donutChart(chan.map(c => ({ label: c.label, value: c.revenue }))) : h('p.muted', 'No sales this month yet.'));

    // tasks today
    const todays = state.tasks.filter(t => !t.done).sort((a, b) => (a.due || '9999').localeCompare(b.due || '9999')).slice(0, 5);
    const tasksCard = h('div.card', h('div.card-head', h('h3', 'Up next'), btn('+ Task', () => taskForm(null), 'btn-sm btn-ghost')),
      todays.length ? h('div.list', todays.map(t => h('label.list-item', h('input', { type: 'checkbox', onChange: () => ctx.store.update('tasks', t.id, { done: true, doneAt: today() }) }), h('div.li-main', h('div.li-title', t.title), h('div.li-sub', t.due ? fmt.rel(t.due) : 'No date')), t.priority === 'high' ? pill('High', 'bad') : null))) : h('p.muted', 'No open tasks.'));

    // tips
    const tips = type.tips || [];
    const tipCard = h('div.card', h('div.card-head', h('h3', 'Tip')), h('div.tip', tips[new Date().getDate() % tips.length] || 'Record everything the day it happens.'));

    const quick = h('div.row', { style: { marginBottom: '16px' } },
      btn(`+ ${type.salesLabel.replace(/s$/, '')}`, () => orderForm(null)),
      btn('+ Expense', () => expenseForm(null), 'btn-ghost'),
      btn('+ Task', () => taskForm(null), 'btn-ghost'),
      h('span.muted', { style: { fontSize: '.8rem', marginLeft: 'auto' } }, 'Shortcuts: ', h('span.kbd', 'n'), ' new sale · ', h('span.kbd', 'e'), ' expense'));

    return h('div.stack', quick, stats,
      h('div.grid.grid-main', h('div.stack', chartCard, recentCard), h('div.stack', attCard, goalCard, pipeline, chanCard, tasksCard, tipCard)));
  },
};
