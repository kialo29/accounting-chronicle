import { h, fmt, pill, btn, empty, input, select, toast, confirmDialog, today, addDays, addMonths, openModal, segmented } from '../util.js';
import { taskForm, processForm } from '../forms.js';

let view = 'open';

export default {
  title: 'Tasks & processes',
  subtitle: ctx => `${ctx.state.tasks.filter(t => !t.done).length} open · ${ctx.state.processes.length} saved processes`,
  actions: () => [btn('+ Process', () => processForm(null), 'btn-ghost'), btn('+ Task', () => taskForm(null), 'btn-ghost')],
  render(ctx) {
    const { state, store } = ctx;
    const root = h('div.grid.grid-main');
    // ---- tasks ----
    const quick = input({ placeholder: 'Add a task and press Enter…', onKeydown: e => { if (e.key === 'Enter' && e.target.value.trim()) { store.add('tasks', { title: e.target.value.trim(), done: false, priority: 'normal', due: '', recurring: 'none' }); e.target.value = ''; } } });
    const tasks = state.tasks.filter(t => view === 'all' || (view === 'open' ? !t.done : t.done)).sort((a, b) => (a.done - b.done) || (a.due || '9999').localeCompare(b.due || '9999') || (b.priority === 'high') - (a.priority === 'high'));
    const groups = [['Overdue', t => t.due && t.due < today() && !t.done], ['Today', t => t.due === today()], ['Upcoming', t => t.due && t.due > today()], ['No date', t => !t.due], ['Done', t => t.done]];
    const list = h('div.stack');
    for (const [label, fn] of groups) {
      const items = tasks.filter(t => fn(t) && (label === 'Done' ? t.done : !t.done));
      if (!items.length) continue;
      list.appendChild(h('div', h('h4', { style: { margin: '8px 0 4px', color: label === 'Overdue' ? 'var(--bad)' : 'var(--muted)' } }, `${label} (${items.length})`), h('div.list', items.map(t => row(t)))));
    }
    function complete(t, done) {
      store.update('tasks', t.id, { done, doneAt: done ? today() : null });
      if (done && t.recurring && t.recurring !== 'none') {
        const next = t.recurring === 'daily' ? addDays(t.due || today(), 1) : t.recurring === 'weekly' ? addDays(t.due || today(), 7) : addMonths(t.due || today(), 1);
        store.add('tasks', { ...t, id: undefined, done: false, doneAt: null, due: next, createdAt: undefined });
        toast(`Next one scheduled for ${fmt.date(next)}`);
      }
    }
    function row(t) {
      return h('div.list-item', { class: t.done ? 'done' : '' },
        h('input', { type: 'checkbox', checked: t.done, 'aria-label': 'Done', onChange: e => complete(t, e.target.checked) }),
        h('div.li-main', { style: { cursor: 'pointer' }, onClick: () => taskForm(t) }, h('div.li-title', t.title), h('div.li-sub', [t.due ? fmt.rel(t.due) : null, t.tag, t.recurring && t.recurring !== 'none' ? `repeats ${t.recurring}` : null, t.processName].filter(Boolean).join(' · '))),
        t.priority === 'high' ? pill('High', 'bad') : t.priority === 'low' ? pill('Low') : null);
    }
    root.appendChild(h('div.card', h('div.card-head', h('h3', 'Tasks'), segmented([{ value: 'open', label: 'Open' }, { value: 'done', label: 'Done' }, { value: 'all', label: 'All' }], view, v => { view = v; ctx.navigate('tasks'); })), h('div.quick-add', { style: { marginBottom: '10px' } }, quick), tasks.length ? list : empty('✅', 'Nothing here', view === 'open' ? 'Add a task above or run a process.' : '')));

    // ---- processes ----
    const procs = h('div.stack');
    procs.appendChild(h('div.card', h('div.card-head', h('h3', 'Processes'), h('small', 'Repeatable checklists')), h('p.muted', { style: { fontSize: '.88rem', marginBottom: '10px' } }, 'Write down how you do things once. Run a process to turn its steps into tasks, or tick it off right here.'),
      state.processes.length ? h('div.stack', state.processes.map(p => processCard(ctx, p))) : h('p.muted', 'No processes yet.'), h('div', { style: { marginTop: '10px' } }, btn('+ New process', () => processForm(null), 'btn-sm btn-ghost'))));
    root.appendChild(procs);
    return root;
  },
};

function processCard(ctx, p) {
  const { store } = ctx;
  const open = h('details', h('summary', { style: { cursor: 'pointer', fontWeight: 600 } }, p.name, p.trigger ? h('small', { style: { marginLeft: '8px' } }, p.trigger) : null),
    h('ol.sop-steps', { style: { margin: '8px 0' } }, p.steps.map(s => h('li', s.text))),
    h('div.row', btn('Run as tasks', () => runProcess(ctx, p), 'btn-sm btn-primary'), btn('Tick off now', () => tickOff(p), 'btn-sm btn-ghost'), btn('Edit', () => processForm(p), 'btn-sm btn-ghost')));
  return open;
  function tickOff(p) {
    const boxes = p.steps.map(s => h('label.check', h('input', { type: 'checkbox' }), h('span', s.text)));
    const m = openModal({ title: p.name, body: h('div.checklist', boxes), footer: [btn('Done', () => { m.close(); toast('Nice work'); })] });
  }
}
function runProcess(ctx, p) {
  const { store } = ctx;
  const due = input({ type: 'date', value: today() });
  const ctxName = input({ placeholder: 'e.g. order #0042 or client name (optional)' });
  const m = openModal({ title: `Run “${p.name}”`, size: 'sm', body: h('div.form', h('p.muted', `Creates ${p.steps.length} tasks you can tick off.`), h('label.field', h('span.field-label', 'Due date'), due), h('label.field', h('span.field-label', 'For'), ctxName)),
    footer: [btn('Cancel', () => m.close(), 'btn-ghost'), btn('Create tasks', () => { p.steps.forEach((s, i) => store.add('tasks', { title: ctxName.value ? `${s.text} (${ctxName.value})` : s.text, done: false, priority: 'normal', due: due.value, recurring: 'none', tag: p.name, order: i })); m.close(); toast(`${p.steps.length} tasks added`); })] });
}
