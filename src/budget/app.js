/* ============================================================
   Budget app UI. Vanilla JS, no build step.
   State lives in localStorage; all maths is in engine.js.
   ============================================================ */
import * as E from './engine.js';
import * as C from './charts.js';
import * as S from './storage.js';
import { sampleState } from './sample.js';
import * as T from './tax.js';

/* ------------------------------------------------------------
   Helpers
   ------------------------------------------------------------ */
const root = document.getElementById('budget-app');
const esc = (s) =>
  String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const DEFAULT_CATEGORIES = [
  'Salary', 'Side income', 'Other income', 'Housing', 'Utilities', 'Groceries', 'Transport', 'Phone', 'Insurance',
  'Subscriptions', 'Eating out', 'Entertainment', 'Health & fitness', 'Clothing', 'Shopping', 'Gifts', 'Education',
  'Travel', 'Personal care', 'Savings', 'Investing', 'Debt repayment', 'Cash', 'Balance adjustment', 'Other',
];
const FLOW_TYPES = {
  income: [
    ['fixed', 'Fixed (salary, pension)'],
    ['variable', 'Variable (freelance, bonus)'],
  ],
  expense: [
    ['fixed', 'Fixed (same every time)'],
    ['variable', 'Variable (essential, amount varies)'],
    ['discretionary', 'Discretionary (nice to have)'],
    ['irregular', 'Irregular / one-off'],
  ],
  transfer: [
    ['fixed', 'Fixed'],
    ['variable', 'Variable'],
  ],
};
const FLOW_LABEL = { fixed: 'Fixed', variable: 'Variable', discretionary: 'Discretionary', irregular: 'Irregular' };
const WEEKEND_RULES = [
  ['none', 'Leave as is'],
  ['previous', 'Move to previous working day'],
  ['next', 'Move to next working day'],
  ['nearest', 'Move to nearest working day'],
];

let state = S.load();
let forecast = null;
const ui = {
  view: 'dashboard',
  cashflow: { months: 12, account: 'liquid', band: true },
  budget: { kind: 'all', search: '' },
  tx: { month: 'all', account: 'all', kind: 'all', search: '' },
  statements: { tab: 'income', periodType: 'month', anchor: null, bsDate: null, bsCompare: null, cfMonth: null },
  avp: { months: 6, open: null },
  modal: null,
  csv: null,
};

function fmtMoney(v, { decimals = 2, signed = false } = {}) {
  const n = Number(v) || 0;
  const f = new Intl.NumberFormat(state.settings.locale || 'en-GB', {
    style: 'currency',
    currency: state.settings.currency || 'GBP',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  const s = f.format(Math.abs(n) < 0.005 ? 0 : n);
  return signed && n > 0 ? `+${s}` : s;
}
const money0 = (v) => fmtMoney(v, { decimals: 0 });
const currencySymbol = () => fmtMoney(0).replace(/[\d.,\s]/g, '');

function fmtDay(s) {
  if (!s) return '';
  const [y, m, d] = s.split('-').map(Number);
  return `${d} ${MONTHS[m - 1].slice(0, 3)} ${y}`;
}
function fmtMonth(key) {
  const [y, m] = key.split('-').map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}
function relDay(s) {
  const d = E.diffDays(asOf(), s);
  if (d === 0) return 'today';
  if (d === 1) return 'tomorrow';
  if (d === -1) return 'yesterday';
  if (d < 0) return `${-d} days ago`;
  return `in ${d} days`;
}
const asOf = () => forecast.asOf;
const accById = (id) => state.accounts.find((a) => a.id === id);
const accName = (id) => (accById(id) ? accById(id).name : '—');
const lineById = (id) => state.lines.find((l) => l.id === id);
const scenarioName = (id) => (state.scenarios.find((s) => s.id === id) || {}).name;

function describeSchedule(sch) {
  if (!sch) return '';
  const preset = E.presetForSchedule(sch);
  const p = E.FREQUENCY_PRESETS.find((x) => x.id === preset);
  let s = p ? p.label : `Every ${sch.interval} ${sch.frequency === 'daily' ? 'days' : sch.frequency === 'weekly' ? 'weeks' : sch.frequency === 'monthly' ? 'months' : 'years'}`;
  if (sch.frequency === 'monthly' || sch.frequency === 'yearly') {
    if (sch.dayOfMonth === 'last') s += ', last day';
    else if (sch.dayOfMonth) s += `, ${ordinal(sch.dayOfMonth)}`;
    else if (sch.start) s += `, ${ordinal(Number(sch.start.slice(8)))}`;
  }
  if (sch.frequency === 'weekly' && sch.start) s += `, ${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][E.weekday(sch.start)]}`;
  if (sch.weekendRule && sch.weekendRule !== 'none') s += ' (working days)';
  return s;
}
function ordinal(n) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
function allCategories() {
  const set = new Set(DEFAULT_CATEGORIES);
  for (const l of state.lines) if (l.category) set.add(l.category);
  for (const t of state.transactions) if (t.category) set.add(t.category);
  return [...set].sort();
}
function datalist(id) {
  return `<datalist id="${id}">${allCategories().map((c) => `<option value="${esc(c)}">`).join('')}</datalist>`;
}
function selectOptions(list, selected, { placeholder } = {}) {
  let out = placeholder ? `<option value="">${esc(placeholder)}</option>` : '';
  for (const [v, label] of list) out += `<option value="${esc(v)}"${String(v) === String(selected) ? ' selected' : ''}>${esc(label)}</option>`;
  return out;
}
const accountOptions = (selected, placeholder = 'Choose account') =>
  selectOptions(state.accounts.map((a) => [a.id, a.name]), selected, { placeholder });
const signClass = (v) => (v > 0.005 ? 'pos' : v < -0.005 ? 'neg' : '');
const flowSign = (f) => (f.kind === 'income' ? 1 : f.kind === 'expense' ? -1 : 0);

/* ------------------------------------------------------------
   State management
   ------------------------------------------------------------ */
function recompute() {
  forecast = E.buildForecast(state);
}
function commit(msg) {
  S.save(state);
  recompute();
  render();
  if (msg) toast(msg);
}
function toast(msg) {
  let el = document.querySelector('.bg-toast');
  if (!el) {
    el = document.createElement('div');
    el.className = 'bg-toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 2200);
}
/** In-page confirmation (the site may run where native confirm() is unavailable). */
function ask(message, { okLabel = 'OK', cancelLabel = 'Cancel', danger = false } = {}) {
  return new Promise((resolve) => {
    const dlg = document.getElementById('bg-confirm');
    if (!dlg) {
      resolve(window.confirm ? window.confirm(message) : false);
      return;
    }
    dlg.innerHTML = `<div class="modal-body"><p>${esc(message)}</p><div class="bg-actions"><button class="btn ${danger ? 'btn-outline danger' : 'btn-primary'}" data-ok>${esc(okLabel)}</button>${cancelLabel ? `<button class="btn btn-secondary" data-cancel>${esc(cancelLabel)}</button>` : ''}</div></div>`;
    const done = (v) => {
      if (dlg.open) dlg.close();
      resolve(v);
    };
    dlg.querySelector('[data-ok]').onclick = () => done(true);
    const c = dlg.querySelector('[data-cancel]');
    if (c) c.onclick = () => done(false);
    dlg.oncancel = (e) => {
      e.preventDefault();
      done(false);
    };
    dlg.showModal();
    dlg.querySelector('[data-ok]').focus();
  });
}
const notice = (message) => ask(message, { cancelLabel: '' });

async function importBackupText(text) {
  let imported;
  try {
    imported = S.parseImport(text);
  } catch (e) {
    await notice(`Could not import: ${e.message}`);
    return;
  }
  if (state.accounts.length && !(await ask('Replace your current data with this backup?', { okLabel: 'Replace', danger: true }))) return;
  state = imported;
  commit('Backup imported');
}

function exportView(spec) {
  return `${modalHead(spec.title)}
  <div class="bg-form">
    <p class="muted small">${esc(spec.hint || '')}</p>
    <textarea class="export-text" rows="12" readonly>${esc(spec.text)}</textarea>
    <div class="bg-actions">
      <button class="btn btn-primary" data-action="copy-text">Copy to clipboard</button>
      <button class="btn btn-secondary" data-action="download-text" data-filename="${esc(spec.filename)}" data-mime="${esc(spec.mime)}">Download file</button>
      <button class="btn btn-secondary" data-action="close-modal">Close</button>
    </div>
  </div>`;
}

async function download(filename, text, type = 'application/json') {
  // Inside the claude.ai artifact viewer, files are handed over through the
  // downloads capability; everywhere else a normal browser download works.
  if (window.claude && typeof window.claude.use === 'function') {
    try {
      const dl = await window.claude.use('downloads');
      if (dl) {
        await dl.save({ filename, data: text });
        toast('Saved');
        return;
      }
    } catch (e) {
      if (!(e && e.code === 'declined')) toast('Could not save the file. Use Copy to clipboard instead.');
      return;
    }
  }
  const blob = new Blob([text], { type });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    URL.revokeObjectURL(a.href);
    a.remove();
  }, 0);
}

/* ------------------------------------------------------------
   Rendering
   ------------------------------------------------------------ */
const VIEWS = [
  ['dashboard', 'Dashboard'],
  ['cashflow', 'Cash flow'],
  ['budget', 'Budget plan'],
  ['transactions', 'Transactions'],
  ['statements', 'Statements'],
  ['avp', 'Actual vs plan'],
  ['accounts', 'Accounts & goals'],
  ['scenarios', 'Scenarios'],
  ['takehome', 'Take-home pay'],
  ['settings', 'Settings'],
];

function render() {
  if (!forecast) recompute();
  const empty = !state.accounts.length && !state.lines.length;
  root.innerHTML = `
    <div class="bg-shell">
      <nav class="bg-nav" aria-label="Budget sections">
        ${VIEWS.map(([id, label]) => `<a href="#${id}" class="${ui.view === id ? 'active' : ''}">${label}</a>`).join('')}
      </nav>
      <div class="bg-main">
        ${empty && ui.view !== 'settings' ? renderEmpty() : renderView()}
      </div>
    </div>
    <dialog class="bg-modal" id="bg-modal"></dialog>
    <dialog class="bg-modal bg-confirm" id="bg-confirm"></dialog>`;
  C.bindCharts(root);
  if (ui.modal) openModal(ui.modal);
}

function renderView() {
  switch (ui.view) {
    case 'dashboard': return viewDashboard();
    case 'cashflow': return viewCashflow();
    case 'budget': return viewBudget();
    case 'transactions': return viewTransactions();
    case 'statements': return viewStatements();
    case 'avp': return viewAvp();
    case 'accounts': return viewAccounts();
    case 'scenarios': return viewScenarios();
    case 'takehome': return viewTakeHome();
    case 'settings': return viewSettings();
    default: return viewDashboard();
  }
}

function renderEmpty() {
  return `<section class="bg-card bg-empty">
    <h2>Welcome to your budget</h2>
    <p>This is a personal budgeting and cash-flow forecasting tool. Everything is stored in this browser only, nothing is sent anywhere.</p>
    <p>You can start with a realistic example (a trainee accountant's finances) and edit it, or build your own from a blank page.</p>
    <div class="bg-actions">
      <button class="btn btn-primary" data-action="load-sample">Load the example</button>
      <button class="btn btn-secondary" data-action="open-modal" data-modal="account">Start from scratch: add an account</button>
    </div>
    <ul class="bg-feature-list">
      <li><b>Plan</b> income, fixed and variable expenses (with ranges), transfers, one-offs and amounts that change over time.</li>
      <li><b>Forecast</b> your cash day by day with best, expected and worst cases, and see the exact day you'd go overdrawn.</li>
      <li><b>Track</b> what actually happened, compare it to the plan, and keep an income statement, cash budget and balance sheet.</li>
    </ul>
  </section>`;
}

function statTile(label, value, { delta, deltaLabel, sub, hero = false, status } = {}) {
  return `<div class="stat ${hero ? 'stat-hero' : ''} ${status ? `stat-${status}` : ''}">
    <div class="stat-label">${esc(label)}</div>
    <div class="stat-value">${esc(value)}</div>
    ${delta != null ? `<div class="stat-delta ${signClass(delta)}">${esc(fmtMoney(delta, { decimals: 0, signed: true }))} ${esc(deltaLabel || '')}</div>` : ''}
    ${sub ? `<div class="stat-sub">${sub}</div>` : ''}
  </div>`;
}

/* ------------------------------------------------------------
   Dashboard
   ------------------------------------------------------------ */
function viewDashboard() {
  const f = forecast;
  const liquidNow = E.sumLiquid(state, f.startBalances);
  const day30 = f.byDate[E.addDays(f.asOf, 30)] || f.days[f.days.length - 1];
  const sts = E.safeToSpend(state, f, 30);
  const period = E.currentPeriod(f.asOf, state.settings.periodStartDay);
  const is = E.incomeStatement(state, f, period.from, period.to);
  const tracker = E.budgetTracker(state, f, period.from, period.to);
  const netWorth = E.sumAll(f.startBalances);
  const up = E.upcoming(f, 14).filter((e) => !e.overdue);

  const ninety = f.days.slice(0, 91);
  const chart = C.lineChart({
    id: 'dash-cash',
    title: 'Cash in current, savings and cash accounts: next 90 days',
    height: 220,
    series: [{ name: 'Expected', color: 'var(--viz-1)', points: ninety.map((d) => ({ x: d.date, y: d.liquid.expected })) }],
    band: ui.cashflow.band ? { name: 'Best to worst case', color: 'var(--viz-1)', low: ninety.map((d) => ({ x: d.date, y: d.liquid.low })), high: ninety.map((d) => ({ x: d.date, y: d.liquid.high })) } : null,
    refLines: state.settings.safetyBuffer ? [{ y: Number(state.settings.safetyBuffer), label: 'Safety buffer', color: 'var(--viz-warning)' }] : [],
    valueFormat: money0,
    xTooltip: fmtDay,
  });

  const topCats = tracker.rows.slice(0, 6);
  return `
    ${renderAttention()}
    <section class="bg-grid stats">
      ${statTile('Safe to spend (next 30 days)', money0(sts.amount), {
        hero: true,
        status: sts.amount < 0 ? 'critical' : sts.amount < 200 ? 'warning' : 'good',
        sub: `Lowest point ${esc(money0(sts.lowBalance))} on ${esc(fmtDay(sts.lowDate))}${sts.buffer ? `, keeping a ${esc(money0(sts.buffer))} buffer` : ''}. Spending accounts only.`,
      })}
      ${statTile('Cash today', money0(liquidNow), { sub: 'Current, savings and cash accounts' })}
      ${statTile('Cash in 30 days', money0(day30.liquid.expected), { delta: day30.liquid.expected - liquidNow, deltaLabel: 'expected' })}
      ${statTile('Net worth', money0(netWorth), { sub: `Assets less debts. ${esc(money0(f.days[f.days.length - 1].netWorth))} expected by ${esc(fmtDay(f.endDate))}` })}
      ${statTile(`${fmtMonth(period.from.slice(0, 7))} net`, fmtMoney(is.net.expected, { decimals: 0, signed: true }), {
        delta: is.net.expected - is.net.budget,
        deltaLabel: 'vs budget',
        sub: `Income ${esc(money0(is.income.expected))}, spending ${esc(money0(is.expenses.expected))} (expected outturn)`,
      })}
    </section>
    <section class="bg-card">${chart}</section>
    <section class="bg-grid two">
      <div class="bg-card">
        <div class="bg-card-head"><h3>Budget this period</h3><a href="#budget" class="see-all">Full budget →</a></div>
        <p class="muted small">${esc(fmtDay(period.from))} to ${esc(fmtDay(period.to))}, ${tracker.daysLeft} days left. Spent ${esc(money0(tracker.totals.spent))} of ${esc(money0(tracker.totals.budget))}; ${esc(money0(tracker.totals.due))} still planned.</p>
        ${topCats.length ? topCats.map((r) => `
          <div class="track-row">
            <div class="track-head"><span>${esc(r.category)}</span><span class="num">${esc(money0(r.spent))} <span class="muted">/ ${esc(money0(r.budget))}</span></span></div>
            ${C.meter({ value: r.spent, max: r.budget, status: r.status === 'over' ? 'critical' : r.status === 'at-risk' ? 'warning' : 'ok', label: r.category })}
          </div>`).join('') : '<p class="muted">No planned spending yet. Add expenses to your budget plan to track them here.</p>'}
      </div>
      <div class="bg-card">
        <div class="bg-card-head"><h3>Next 14 days</h3><a href="#cashflow" class="see-all">Cash flow →</a></div>
        ${up.length ? `<ul class="event-list">${up.slice(0, 12).map(eventRow).join('')}</ul>` : '<p class="muted">Nothing planned in the next two weeks.</p>'}
      </div>
    </section>
    ${state.goals.length ? `<section class="bg-card"><div class="bg-card-head"><h3>Goals</h3><a href="#accounts" class="see-all">Manage →</a></div><div class="bg-grid three">${state.goals.map(goalCard).join('')}</div></section>` : ''}
  `;
}

function eventRow(e) {
  const sign = flowSign(e);
  const amt = e.amounts.min !== e.amounts.max ? `${money0(e.amounts.min)}–${money0(e.amounts.max)}` : fmtMoney(e.amounts.expected);
  const where = e.kind === 'transfer' ? `${accName(e.accountId)} → ${accName(e.toAccountId)}` : accName(e.accountId);
  return `<li class="event ${e.overdue ? 'overdue' : ''}">
    <span class="event-date">${esc(fmtDay(e.date).slice(0, 6))}<small>${esc(relDay(e.date))}</small></span>
    <span class="event-name">${esc(e.name)}<small>${esc(e.category)} · ${esc(where)}${e.source === 'actual' ? ' · recorded' : ''}</small></span>
    <span class="event-amt num ${sign > 0 ? 'pos' : sign < 0 ? 'neg' : ''}">${sign > 0 ? '+' : sign < 0 ? '−' : ''}${esc(amt)}</span>
  </li>`;
}

function renderAttention() {
  const f = forecast;
  const items = [];
  for (const w of f.warnings) {
    if (w.type === 'negative') items.push({ level: 'critical', text: `<b>${esc(w.accountName)}</b> is expected to go overdrawn on ${esc(fmtDay(w.date))} (${esc(money0(w.amount))}).` });
    if (w.type === 'overLimit') items.push({ level: 'critical', text: `<b>${esc(w.accountName)}</b> is expected to exceed its credit limit on ${esc(fmtDay(w.date))}.` });
    if (w.type === 'belowBuffer') items.push({ level: 'warning', text: `Cash is expected to dip below your ${esc(money0(w.buffer))} safety buffer on ${esc(fmtDay(w.date))} (${esc(money0(w.amount))}).` });
  }
  const overdue = f.overdue;
  const unrecorded = f.unrecorded.slice(0, 8);
  if (!items.length && !overdue.length && !unrecorded.length) return '';
  const row = (e, carried) => `<li class="attn-item">
      <span>${esc(e.name)} <span class="muted">${esc(fmtMoney(e.amounts.expected))}, planned ${esc(fmtDay(e.plannedDate))}${carried ? ', assumed still due today' : ''}</span></span>
      <span class="attn-actions">
        <button class="btn-link" data-action="record-event" data-line="${esc(e.lineId)}" data-date="${esc(e.plannedDate)}">Record</button>
        <button class="btn-link" data-action="skip-event" data-line="${esc(e.lineId)}" data-date="${esc(e.nominal)}">Skip</button>
      </span></li>`;
  const shownAlerts = items.slice(0, 4);
  return `<section class="bg-card attention">
    ${items.length ? `<ul class="alerts">${shownAlerts.map((i) => `<li class="alert alert-${i.level}"><span class="alert-icon" aria-hidden="true">${i.level === 'critical' ? '⚠' : '!'}</span><span>${i.text}</span></li>`).join('')}${items.length > shownAlerts.length ? `<li class="muted small">and ${items.length - shownAlerts.length} more: see <a href="#cashflow">Cash flow</a>.</li>` : ''}</ul>` : ''}
    ${overdue.length ? `<h4>Missed planned items (counted as due today)</h4><ul class="attn-list">${overdue.map((e) => row(e, true)).join('')}</ul>` : ''}
    ${unrecorded.length ? `<details class="attn-more"><summary>${f.unrecorded.length} planned item${f.unrecorded.length > 1 ? 's' : ''} passed without a record</summary><p class="muted small">These are not counted in the forecast. Record them if they happened, or skip them. (Change this behaviour in Settings → missed items.)</p><ul class="attn-list">${unrecorded.map((e) => row(e, false)).join('')}</ul></details>` : ''}
  </section>`;
}

function goalCard(goal, { actions = false } = {}) {
  const g = E.goalProgress(state, forecast, goal);
  const status = g.reached ? 'good' : g.onTrack ? 'good' : goal.targetDate ? 'warning' : 'ok';
  return `<div class="goal">
    <div class="goal-head"><b>${esc(goal.name)}</b><span class="muted small">${esc(g.account ? g.account.name : 'No account')}</span></div>
    ${C.meter({ value: g.current, max: g.target, status: status === 'warning' ? 'warning' : 'ok', label: goal.name })}
    <div class="goal-meta"><span>${esc(money0(g.current))} of ${esc(money0(g.target))}</span><span>${Math.round(g.pct * 100)}%</span></div>
    <div class="small ${status === 'warning' ? 'neg' : ''}">${g.reached ? 'Reached' : g.reachDate ? `Expected ${esc(fmtDay(g.reachDate))}` : 'Not reached within the forecast'}${goal.targetDate ? ` · target ${esc(fmtDay(goal.targetDate))}${g.reached ? '' : g.onTrack ? ' ✓' : ' (behind)'}` : ''}</div>
    ${actions ? `<div class="goal-actions"><button class="btn-link" data-action="edit-goal" data-id="${esc(goal.id)}">Edit</button> <button class="btn-link danger" data-action="delete-goal" data-id="${esc(goal.id)}">Delete</button></div>` : ''}
  </div>`;
}

/* ------------------------------------------------------------
   Cash flow
   ------------------------------------------------------------ */
function viewCashflow() {
  const months = ui.cashflow.months;
  const f = months === state.settings.horizonMonths ? forecast : E.buildForecast(state, { months });
  const acc = ui.cashflow.account;
  const pick = (d, c) => (acc === 'liquid' ? d.liquid[c] : acc === 'all' ? E.sumAll(d.balances[c]) : d.balances[c][acc] || 0);
  const series = [{ name: 'Expected', color: 'var(--viz-1)', points: f.days.map((d) => ({ x: d.date, y: pick(d, 'expected') })) }];
  const band = ui.cashflow.band ? { name: 'Best to worst case', color: 'var(--viz-1)', low: f.days.map((d) => ({ x: d.date, y: pick(d, 'low') })), high: f.days.map((d) => ({ x: d.date, y: pick(d, 'high') })) } : null;
  const refLines = [];
  if (acc === 'liquid' && state.settings.safetyBuffer) refLines.push({ y: Number(state.settings.safetyBuffer), label: 'Safety buffer', color: 'var(--viz-warning)' });
  const a = accById(acc);
  if (a && a.type === 'credit' && a.creditLimit) refLines.push({ y: -Number(a.creditLimit), label: 'Credit limit', color: 'var(--viz-critical)' });
  const title = acc === 'liquid' ? 'Cash (current, savings and cash accounts)' : acc === 'all' ? 'Net worth (all accounts)' : accName(acc);
  const chart = C.lineChart({ id: 'cf-main', title: `${title}: next ${months} months`, height: 300, series, band, refLines, valueFormat: money0, xTooltip: fmtDay });

  let minPt = { date: f.asOf, value: Infinity };
  for (const d of f.days) {
    const v = pick(d, 'expected');
    if (v < minPt.value) minPt = { date: d.date, value: v };
  }
  const ms = E.monthlySeries(state, f, 2, months - 1);
  const bars = C.barChart({
    id: 'cf-monthly',
    title: 'Income vs spending by month (actual to date, then expected)',
    categories: ms.map((m) => C.shortMonth(m.month)),
    series: [
      { name: 'Income', color: 'var(--viz-3)', values: ms.map((m) => m.income) },
      { name: 'Spending', color: 'var(--viz-2)', values: ms.map((m) => m.expense) },
    ],
    dim: ms.map((m, i) => (m.source === 'forecast' ? i : -1)).filter((i) => i >= 0),
    highlight: ms.findIndex((m) => m.source === 'mixed'),
    valueFormat: money0,
  });

  const rows = E.cashBudget(state, f, 2, Math.min(months, 12));
  return `
    <section class="bg-card">
      <div class="bg-toolbar">
        <label>Horizon <select data-change="cf-months">${selectOptions([[3, '3 months'], [6, '6 months'], [12, '12 months'], [24, '24 months']], months)}</select></label>
        <label>Show <select data-change="cf-account">${selectOptions([['liquid', 'Cash (liquid accounts)'], ['all', 'Net worth (all accounts)'], ...state.accounts.map((x) => [x.id, x.name])], acc)}</select></label>
        <label class="check"><input type="checkbox" data-change="cf-band" ${ui.cashflow.band ? 'checked' : ''}> Best/worst range</label>
      </div>
      ${chart}
      <div class="bg-grid three compact">
        ${statTile('Lowest point', money0(minPt.value), { sub: `on ${esc(fmtDay(minPt.date))}`, status: minPt.value < 0 ? 'critical' : undefined })}
        ${statTile(`End of ${fmtMonth(f.endDate.slice(0, 7))}`, money0(pick(f.days[f.days.length - 1], 'expected')), { sub: `Range ${esc(money0(pick(f.days[f.days.length - 1], 'low')))} to ${esc(money0(pick(f.days[f.days.length - 1], 'high')))}` })}
        ${statTile('Warnings', String(f.warnings.length), { sub: f.warnings.length ? esc(f.warnings.map((w) => `${w.type === 'belowBuffer' ? 'below buffer' : w.type === 'overLimit' ? `${w.accountName} over limit` : `${w.accountName} overdrawn`} ${fmtDay(w.date)}`).join('; ')) : 'No problems in this horizon', status: f.warnings.length ? 'warning' : 'good' })}
      </div>
    </section>
    <section class="bg-card">${bars}</section>
    <section class="bg-card">
      <div class="bg-card-head"><h3>Cash budget</h3><span class="muted small">Liquid accounts. Months before today are actual; the current month mixes actual and forecast.</span></div>
      ${cashBudgetTable(rows)}
    </section>
    <section class="bg-card">
      <div class="bg-card-head"><h3>Planned movements</h3><span class="muted small">${f.events.length} items over ${months} months${f.events.length > 150 ? ', showing the first 150' : ''}</span></div>
      ${eventsTable(f.events.slice(0, 150))}
    </section>`;
}

function cashBudgetTable(rows) {
  const th = rows.map((r) => `<th class="num"><span class="src src-${r.source}">${esc(C.shortMonth(r.month))}</span></th>`).join('');
  const line = (label, key, { cls = '', neg = false } = {}) =>
    `<tr class="${cls}"><th>${esc(label)}</th>${rows.map((r) => `<td class="num ${neg && r[key] ? 'neg' : ''}">${esc(money0(neg ? -r[key] : r[key]))}</td>`).join('')}</tr>`;
  const accRows = state.accounts
    .map((a) => `<tr class="sub"><th>${esc(a.name)}</th>${rows.map((r) => `<td class="num ${signClass(r.byAccount[a.id].closing)}">${esc(money0(r.byAccount[a.id].closing))}</td>`).join('')}</tr>`)
    .join('');
  return `<div class="table-scroll"><table class="bg-table cash-budget">
    <thead><tr><th></th>${th}</tr></thead>
    <tbody>
      ${line('Opening cash', 'openingLiquid', { cls: 'strong' })}
      ${line('Receipts (income)', 'receipts')}
      ${line('Transfers in', 'transfersIn')}
      ${line('Payments', 'payments', { neg: true })}
      ${line('Transfers out (savings, debt, investing)', 'transfersOut', { neg: true })}
      ${line('Net cash flow', 'net', { cls: 'strong' })}
      ${line('Interest & adjustments', 'other')}
      ${line('Closing cash', 'closingLiquid', { cls: 'strong total' })}
      <tr class="section"><th colspan="${rows.length + 1}">Closing balance by account</th></tr>
      ${accRows}
      ${line('Net worth', 'netWorth', { cls: 'strong' })}
    </tbody></table></div>
    <p class="legend-note"><span class="src src-actual">Actual</span> <span class="src src-mixed">Current month</span> <span class="src src-forecast">Forecast</span></p>`;
}

function eventsTable(events) {
  if (!events.length) return '<p class="muted">No planned movements.</p>';
  return `<div class="table-scroll"><table class="bg-table">
    <thead><tr><th>Date</th><th>Item</th><th>Category</th><th>Account</th><th class="num">Expected</th><th class="num">Range</th></tr></thead>
    <tbody>${events.map((e) => {
      const sign = flowSign(e);
      return `<tr class="${e.overdue ? 'overdue' : ''}">
        <td>${esc(fmtDay(e.date))}${e.overdue ? ' <span class="tag warn">missed</span>' : ''}${e.source === 'actual' ? ' <span class="tag">recorded</span>' : ''}</td>
        <td>${esc(e.name)}</td><td>${esc(e.category)}</td>
        <td>${esc(e.kind === 'transfer' ? `${accName(e.accountId)} → ${accName(e.toAccountId)}` : accName(e.accountId))}</td>
        <td class="num ${sign > 0 ? 'pos' : sign < 0 ? 'neg' : ''}">${sign > 0 ? '+' : sign < 0 ? '−' : ''}${esc(fmtMoney(e.amounts.expected))}</td>
        <td class="num muted">${e.amounts.min !== e.amounts.max ? `${esc(money0(e.amounts.min))}–${esc(money0(e.amounts.max))}` : ''}</td>
      </tr>`;
    }).join('')}</tbody></table></div>`;
}

/* ------------------------------------------------------------
   Budget plan (lines)
   ------------------------------------------------------------ */
function viewBudget() {
  const f = forecast;
  const lines = E.activeLines(state);
  const monthlyOf = (l) => E.monthlyEquivalent(l, f.asOf);
  const sum = (pred) => lines.filter(pred).reduce((s, l) => s + monthlyOf(l), 0);
  const income = sum((l) => l.kind === 'income');
  const byType = {};
  for (const t of ['fixed', 'variable', 'discretionary', 'irregular']) byType[t] = sum((l) => l.kind === 'expense' && (l.flowType || 'fixed') === t);
  const expenses = Object.values(byType).reduce((a, b) => a + b, 0);
  const liquidIds = new Set(state.accounts.filter(E.isLiquid).map((a) => a.id));
  const saving = sum((l) => l.kind === 'transfer' && liquidIds.has(l.accountId) && !liquidIds.has(l.toAccountId)) + sum((l) => l.kind === 'transfer' && l.toAccountId && accById(l.toAccountId) && accById(l.toAccountId).type === 'savings');
  const surplus = income - expenses;

  const q = ui.budget.search.trim().toLowerCase();
  const shown = state.lines.filter((l) => (ui.budget.kind === 'all' || l.kind === ui.budget.kind) && (!q || `${l.name} ${l.category}`.toLowerCase().includes(q)));
  const groups = [['income', 'Income'], ['expense', 'Expenses'], ['transfer', 'Transfers (savings, investing, debt)']].filter(([k]) => shown.some((l) => l.kind === k));

  const row = (l) => {
    const a = E.amountAt(l, f.asOf);
    const next = l.active === false ? null : E.nextOccurrence(l.schedule, f.asOf);
    const later = (l.changes || []).filter((c) => c.from > f.asOf).sort((x, y) => (x.from < y.from ? -1 : 1))[0];
    return `<tr class="${l.active === false ? 'paused' : ''} ${l.scenarioId && !E.scenarioEnabled(state, l.scenarioId) ? 'paused' : ''}">
      <td><b>${esc(l.name)}</b>${l.scenarioId ? `<span class="tag scenario">${esc(scenarioName(l.scenarioId) || 'scenario')}</span>` : ''}${l.active === false ? '<span class="tag">paused</span>' : ''}<br><small class="muted">${esc(l.category || 'Uncategorised')}${l.notes ? ` · ${esc(l.notes)}` : ''}</small></td>
      <td>${esc(FLOW_LABEL[l.flowType] || 'Fixed')}</td>
      <td class="num">${a.min !== a.max ? `<span class="muted">${esc(money0(a.min))}–${esc(money0(a.max))}</span><br>` : ''}${esc(fmtMoney(a.expected))}${later ? `<br><small class="muted">${esc(fmtMoney(E.amountAt(l, later.from).expected))} from ${esc(fmtDay(later.from))}</small>` : ''}${l.annualGrowthPct ? `<br><small class="muted">+${esc(l.annualGrowthPct)}%/yr</small>` : ''}</td>
      <td>${esc(describeSchedule(l.schedule))}${l.schedule.end ? `<br><small class="muted">until ${esc(fmtDay(l.schedule.end))}</small>` : ''}</td>
      <td>${next ? esc(fmtDay(next)) : '<span class="muted">—</span>'}</td>
      <td class="num">${esc(money0(monthlyOf(l)))}</td>
      <td>${esc(l.kind === 'transfer' ? `${accName(l.accountId)} → ${accName(l.toAccountId)}` : accName(l.accountId))}</td>
      <td class="actions">
        <button class="btn-icon" title="Edit" data-action="edit-line" data-id="${esc(l.id)}">✎</button>
        <button class="btn-icon" title="Duplicate" data-action="dup-line" data-id="${esc(l.id)}">⧉</button>
        <button class="btn-icon" title="${l.active === false ? 'Resume' : 'Pause'}" data-action="toggle-line" data-id="${esc(l.id)}">${l.active === false ? '▶' : '⏸'}</button>
        <button class="btn-icon danger" title="Delete" data-action="delete-line" data-id="${esc(l.id)}">✕</button>
      </td>
    </tr>`;
  };

  return `
    <section class="bg-grid stats compact">
      ${statTile('Monthly income', money0(income), { sub: 'Average over the next 12 months' })}
      ${statTile('Monthly spending', money0(expenses), { sub: `Fixed ${esc(money0(byType.fixed))} · variable ${esc(money0(byType.variable))} · discretionary ${esc(money0(byType.discretionary))} · irregular ${esc(money0(byType.irregular))}` })}
      ${statTile('Savings & investing', money0(saving), { sub: income ? `${Math.round((saving / income) * 100)}% of income` : '' })}
      ${statTile('Surplus after spending', fmtMoney(surplus, { decimals: 0, signed: true }), { status: surplus < 0 ? 'critical' : undefined, sub: 'Before transfers to savings or debt' })}
    </section>
    <section class="bg-card">
      <div class="bg-toolbar">
        <div class="seg">${[['all', 'All'], ['income', 'Income'], ['expense', 'Expenses'], ['transfer', 'Transfers']].map(([k, l]) => `<button class="${ui.budget.kind === k ? 'active' : ''}" data-action="budget-kind" data-kind="${k}">${l}</button>`).join('')}</div>
        <input type="search" placeholder="Search items" value="${esc(ui.budget.search)}" data-input="budget-search">
        <span class="spacer"></span>
        <button class="btn btn-primary" data-action="open-modal" data-modal="line">+ Add item</button>
      </div>
      ${groups.length ? groups.map(([k, label]) => `
        <h4 class="group-title">${label}</h4>
        <div class="table-scroll"><table class="bg-table lines">
          <thead><tr><th>Item</th><th>Type</th><th class="num">Amount</th><th>Every</th><th>Next</th><th class="num">Per month</th><th>Account</th><th></th></tr></thead>
          <tbody>${shown.filter((l) => l.kind === k).map(row).join('')}</tbody>
        </table></div>`).join('') : '<p class="muted">No items yet. Add your salary, rent, bills and regular spending to build the plan.</p>'}
    </section>`;
}

/* ------------------------------------------------------------
   Transactions
   ------------------------------------------------------------ */
function viewTransactions() {
  const months = [...new Set(state.transactions.map((t) => t.date.slice(0, 7)))].sort().reverse();
  const q = ui.tx.search.trim().toLowerCase();
  const list = state.transactions
    .filter((t) => (ui.tx.month === 'all' || t.date.startsWith(ui.tx.month)) && (ui.tx.account === 'all' || t.accountId === ui.tx.account || t.toAccountId === ui.tx.account) && (ui.tx.kind === 'all' || t.kind === ui.tx.kind) && (!q || `${t.description} ${t.category}`.toLowerCase().includes(q)))
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  const t = E.totals(list.map((x) => ({ kind: x.kind, amounts: { expected: Number(x.amount) || 0 } })));
  return `
    <section class="bg-card">
      <div class="bg-toolbar">
        <select data-change="tx-month">${selectOptions([['all', 'All months'], ...months.map((m) => [m, fmtMonth(m)])], ui.tx.month)}</select>
        <select data-change="tx-account">${selectOptions([['all', 'All accounts'], ...state.accounts.map((a) => [a.id, a.name])], ui.tx.account)}</select>
        <select data-change="tx-kind">${selectOptions([['all', 'All types'], ['income', 'Income'], ['expense', 'Expenses'], ['transfer', 'Transfers']], ui.tx.kind)}</select>
        <input type="search" placeholder="Search" value="${esc(ui.tx.search)}" data-input="tx-search">
        <span class="spacer"></span>
        <button class="btn btn-secondary" data-action="open-modal" data-modal="csv">Import CSV</button>
        <button class="btn btn-secondary" data-action="export-csv">Export CSV</button>
        <button class="btn btn-primary" data-action="open-modal" data-modal="transaction">+ Add</button>
      </div>
      <p class="muted small">${list.length} transactions · income ${esc(money0(t.income))} · spending ${esc(money0(t.expense))} · transfers ${esc(money0(t.transfer))}</p>
      ${list.length ? `<div class="table-scroll"><table class="bg-table tx">
        <thead><tr><th>Date</th><th>Description</th><th>Category</th><th>Account</th><th>Plan item</th><th class="num">Amount</th><th></th></tr></thead>
        <tbody>${list.map((x) => {
          const sign = flowSign(x);
          const line = x.lineId ? lineById(x.lineId) : null;
          return `<tr>
            <td>${esc(fmtDay(x.date))}${x.date > forecast.asOf ? ' <span class="tag">future</span>' : ''}</td>
            <td>${esc(x.description || '')}</td>
            <td>${esc(x.category || '')}</td>
            <td>${esc(x.kind === 'transfer' ? `${accName(x.accountId)} → ${accName(x.toAccountId)}` : accName(x.accountId))}</td>
            <td>${line ? `<span class="tag link">${esc(line.name)}</span>` : '<span class="muted">—</span>'}</td>
            <td class="num ${sign > 0 ? 'pos' : sign < 0 ? 'neg' : ''}">${sign > 0 ? '+' : sign < 0 ? '−' : ''}${esc(fmtMoney(x.amount))}</td>
            <td class="actions"><button class="btn-icon" title="Edit" data-action="edit-tx" data-id="${esc(x.id)}">✎</button><button class="btn-icon danger" title="Delete" data-action="delete-tx" data-id="${esc(x.id)}">✕</button></td>
          </tr>`;
        }).join('')}</tbody></table></div>` : '<p class="muted">No transactions match. Record what actually happens here, and link each one to its plan item so the forecast knows it has been paid.</p>'}
    </section>`;
}

/* ------------------------------------------------------------
   Statements
   ------------------------------------------------------------ */
function periodRange() {
  const st = ui.statements;
  const anchor = st.anchor || forecast.asOf;
  if (st.periodType === 'year') return { from: `${anchor.slice(0, 4)}-01-01`, to: `${anchor.slice(0, 4)}-12-31`, label: anchor.slice(0, 4) };
  if (st.periodType === 'quarter') {
    const m = Number(anchor.slice(5, 7));
    const qStart = Math.floor((m - 1) / 3) * 3 + 1;
    const from = `${anchor.slice(0, 4)}-${String(qStart).padStart(2, '0')}-01`;
    return { from, to: E.monthEnd(E.addMonths(from, 2)), label: `Q${Math.floor((m - 1) / 3) + 1} ${anchor.slice(0, 4)}` };
  }
  return { from: E.monthStart(anchor), to: E.monthEnd(anchor), label: fmtMonth(anchor.slice(0, 7)) };
}

function viewStatements() {
  const tab = ui.statements.tab;
  return `<section class="bg-card">
    <div class="bg-toolbar">
      <div class="seg">${[['income', 'Income statement'], ['cash', 'Cash flow statement'], ['balance', 'Balance sheet']].map(([k, l]) => `<button class="${tab === k ? 'active' : ''}" data-action="stmt-tab" data-tab="${k}">${l}</button>`).join('')}</div>
    </div>
    ${tab === 'income' ? incomeStatementView() : tab === 'cash' ? cashFlowStatementView() : balanceSheetView()}
  </section>`;
}

function periodNav() {
  const p = periodRange();
  return `<div class="bg-toolbar">
    <div class="seg">${[['month', 'Month'], ['quarter', 'Quarter'], ['year', 'Year']].map(([k, l]) => `<button class="${ui.statements.periodType === k ? 'active' : ''}" data-action="stmt-period" data-period="${k}">${l}</button>`).join('')}</div>
    <div class="seg"><button data-action="stmt-nav" data-dir="-1">‹</button><button class="label">${esc(p.label)}</button><button data-action="stmt-nav" data-dir="1">›</button><button data-action="stmt-nav" data-dir="0">Today</button></div>
  </div>`;
}

function varianceCell(v, { good = 'pos' } = {}) {
  // good='pos': higher is good (income); good='neg': higher is bad (expenses)
  const cls = Math.abs(v) < 0.005 ? '' : (v > 0) === (good === 'pos') ? 'pos' : 'neg';
  return `<td class="num ${cls}">${esc(fmtMoney(v, { signed: true }))}</td>`;
}

function incomeStatementView() {
  const p = periodRange();
  const is = E.incomeStatement(state, forecast, p.from, p.to);
  const row = (r, good) => `<tr><td class="indent">${esc(r.category)}</td><td class="num">${esc(fmtMoney(r.budget))}</td><td class="num">${esc(fmtMoney(r.actual))}</td><td class="num">${esc(fmtMoney(r.expected))}</td>${varianceCell(r.expected - r.budget, { good })}</tr>`;
  const total = (label, s, good, cls = 'strong') => `<tr class="${cls}"><td>${esc(label)}</td><td class="num">${esc(fmtMoney(s.budget))}</td><td class="num">${esc(fmtMoney(s.actual))}</td><td class="num">${esc(fmtMoney(s.expected))}</td>${varianceCell(s.expected - s.budget, { good })}</tr>`;
  const savingsRate = is.income.expected ? Math.round(((is.income.expected - is.expenses.expected) / is.income.expected) * 100) : 0;
  return `${periodNav()}
    <p class="muted small">${esc(fmtDay(p.from))} to ${esc(fmtDay(p.to))}. <b>Budget</b> is the plan. <b>Actual</b> is what you have recorded so far. <b>Expected</b> is actual to date plus the forecast for the rest of the period${is.partial ? '' : ' (the period is complete, so it equals actual)'}. Transfers to savings and debt are shown below the line, as they are not spending.</p>
    <div class="table-scroll"><table class="bg-table statement">
      <thead><tr><th></th><th class="num">Budget</th><th class="num">Actual${is.partial ? ' to date' : ''}</th><th class="num">Expected</th><th class="num">Variance</th></tr></thead>
      <tbody>
        <tr class="section"><td colspan="5">Income</td></tr>
        ${is.income.rows.map((r) => row(r, 'pos')).join('')}
        ${total('Total income', is.income, 'pos')}
        <tr class="section"><td colspan="5">Expenses</td></tr>
        ${is.expenseGroups.map((g) => `<tr class="subhead"><td colspan="5">${esc(FLOW_LABEL[g.flowType])}</td></tr>${g.rows.map((r) => row(r, 'neg')).join('')}${total(`Total ${FLOW_LABEL[g.flowType].toLowerCase()}`, g, 'neg', 'subtotal')}`).join('')}
        ${total('Total expenses', is.expenses, 'neg')}
        ${total('Net surplus / (deficit)', is.net, 'pos', 'strong total')}
        <tr class="section"><td colspan="5">Memo: transfers to savings, investments and debt</td></tr>
        ${is.transfers.rows.map((r) => row(r, 'pos')).join('')}
        ${total('Total transfers', is.transfers, 'pos')}
        <tr class="strong"><td>Left in spending accounts after transfers</td><td class="num">${esc(fmtMoney(is.net.budget - is.transfers.budget))}</td><td class="num">${esc(fmtMoney(is.net.actual - is.transfers.actual))}</td><td class="num">${esc(fmtMoney(is.net.expected - is.transfers.expected))}</td><td></td></tr>
      </tbody></table></div>
    <p class="muted small">Expected savings rate (surplus ÷ income): <b>${savingsRate}%</b>.</p>`;
}

function cashFlowStatementView() {
  const p = periodRange();
  const flows = E.expectedFlows(state, forecast, p.from, p.to);
  const opening = E.balancesAt(state, forecast, E.addDays(p.from, -1));
  const closing = E.balancesAt(state, forecast, p.to);
  const liquid = state.accounts.filter(E.isLiquid);
  const liquidIds = new Set(liquid.map((a) => a.id));
  const inc = E.byCategory(flows.filter((f) => liquidIds.has(f.accountId)), 'income');
  const exp = E.byCategory(flows.filter((f) => liquidIds.has(f.accountId)), 'expense');
  const tOut = {};
  const tIn = {};
  for (const f of flows) {
    if (f.kind !== 'transfer') continue;
    const fromL = liquidIds.has(f.accountId);
    const toL = liquidIds.has(f.toAccountId);
    if (fromL && !toL) tOut[f.category] = (tOut[f.category] || 0) + f.amounts.expected;
    if (!fromL && toL) tIn[f.category] = (tIn[f.category] || 0) + f.amounts.expected;
  }
  const sum = (o) => Object.values(o).reduce((a, b) => a + b, 0);
  const openL = E.sumLiquid(state, opening);
  const closeL = E.sumLiquid(state, closing);
  const net = sum(inc) - sum(exp) + sum(tIn) - sum(tOut);
  const other = closeL - openL - net;
  const rows = (o, neg = false) => Object.entries(o).sort((a, b) => b[1] - a[1]).map(([k, v]) => `<tr><td class="indent">${esc(k)}</td><td class="num">${esc(fmtMoney(neg ? -v : v))}</td></tr>`).join('');
  return `${periodNav()}
    <p class="muted small">Cash movements through your liquid accounts (current, savings, cash) for ${esc(p.label)}. ${p.to > forecast.asOf ? 'Includes forecast items for the remainder of the period.' : ''}</p>
    <div class="bg-grid two">
      <div class="table-scroll"><table class="bg-table statement">
        <tbody>
          <tr class="section"><td colspan="2">Cash from income</td></tr>${rows(inc)}
          <tr class="subtotal"><td>Total receipts</td><td class="num">${esc(fmtMoney(sum(inc)))}</td></tr>
          <tr class="section"><td colspan="2">Cash paid out</td></tr>${rows(exp, true)}
          <tr class="subtotal"><td>Total payments</td><td class="num">${esc(fmtMoney(-sum(exp)))}</td></tr>
          <tr class="strong"><td>Net cash from day-to-day living</td><td class="num ${signClass(sum(inc) - sum(exp))}">${esc(fmtMoney(sum(inc) - sum(exp)))}</td></tr>
          <tr class="section"><td colspan="2">Transfers to savings, investments and debt</td></tr>${rows(tOut, true)}${rows(tIn)}
          <tr class="subtotal"><td>Net transfers</td><td class="num">${esc(fmtMoney(sum(tIn) - sum(tOut)))}</td></tr>
          <tr><td>Interest and adjustments</td><td class="num">${esc(fmtMoney(other))}</td></tr>
          <tr class="strong"><td>Net change in cash</td><td class="num ${signClass(closeL - openL)}">${esc(fmtMoney(closeL - openL))}</td></tr>
          <tr><td>Opening cash</td><td class="num">${esc(fmtMoney(openL))}</td></tr>
          <tr class="strong total"><td>Closing cash</td><td class="num">${esc(fmtMoney(closeL))}</td></tr>
        </tbody></table></div>
      <div class="table-scroll"><table class="bg-table statement">
        <thead><tr><th>Account</th><th class="num">Opening</th><th class="num">In</th><th class="num">Out</th><th class="num">Closing</th></tr></thead>
        <tbody>${state.accounts.map((a) => {
          let i = 0;
          let o = 0;
          for (const f of flows) {
            if (f.kind === 'income' && f.accountId === a.id) i += f.amounts.expected;
            else if (f.kind === 'expense' && f.accountId === a.id) o += f.amounts.expected;
            else if (f.kind === 'transfer') {
              if (f.accountId === a.id) o += f.amounts.expected;
              if (f.toAccountId === a.id) i += f.amounts.expected;
            }
          }
          return `<tr><td>${esc(a.name)}</td><td class="num">${esc(money0(opening[a.id] || 0))}</td><td class="num pos">${esc(money0(i))}</td><td class="num neg">${esc(money0(-o))}</td><td class="num ${signClass(closing[a.id] || 0)}">${esc(money0(closing[a.id] || 0))}</td></tr>`;
        }).join('')}</tbody></table></div>
    </div>`;
}

function balanceSheetView() {
  const st = ui.statements;
  const date = st.bsDate || forecast.asOf;
  const compare = st.bsCompare || E.addMonths(date, -1);
  const bs = E.balanceSheet(state, forecast, date, compare);
  const quick = [['today', 'Today', forecast.asOf], ['eom', 'Month end', E.monthEnd(forecast.asOf)], ['p6', '+6 months', E.addMonths(forecast.asOf, 6)], ['p12', '+12 months', E.addMonths(forecast.asOf, 12)]];
  const row = (r) => `<tr><td class="indent">${esc(r.account.name)}<small class="muted"> ${esc(E.accountType(r.account).label)}</small></td><td class="num">${esc(fmtMoney(Math.abs(r.value)))}</td><td class="num muted">${esc(fmtMoney(Math.abs(r.compare)))}</td>${varianceCell(E.isLiability(r.account) ? -(r.value - r.compare) : r.value - r.compare)}</tr>`;
  const tot = (label, v, c, cls = 'subtotal', good = 'pos') => `<tr class="${cls}"><td>${esc(label)}</td><td class="num">${esc(fmtMoney(v))}</td><td class="num muted">${esc(fmtMoney(c))}</td>${varianceCell(good === 'pos' ? v - c : -(v - c), { good: 'pos' })}</tr>`;
  const ct = bs.compareTotals;
  return `<div class="bg-toolbar">
      <label>As at <input type="date" value="${esc(date)}" data-change="bs-date"></label>
      <div class="seg">${quick.map(([k, l, d]) => `<button class="${date === d ? 'active' : ''}" data-action="bs-quick" data-date="${d}">${l}</button>`).join('')}</div>
      <label>Compare with <input type="date" value="${esc(compare)}" data-change="bs-compare"></label>
    </div>
    <p class="muted small">${bs.projected ? `<span class="tag warn">Projected</span> balances on ${esc(fmtDay(date))} based on the forecast.` : `Balances on ${esc(fmtDay(date))} from your opening balances and recorded transactions.`}</p>
    <div class="table-scroll"><table class="bg-table statement">
      <thead><tr><th></th><th class="num">${esc(fmtDay(date))}</th><th class="num">${esc(fmtDay(compare))}</th><th class="num">Change</th></tr></thead>
      <tbody>
        <tr class="section"><td colspan="4">Assets</td></tr>
        ${bs.groups.cash.map(row).join('')}${tot('Cash & savings', bs.totals.cash, ct.cash)}
        ${bs.groups.investment.length ? bs.groups.investment.map(row).join('') + tot('Investments', bs.totals.investment, ct.investment) : ''}
        ${bs.groups.asset.length ? bs.groups.asset.map(row).join('') + tot('Other assets', bs.totals.asset, ct.asset) : ''}
        ${tot('Total assets', bs.totals.assets, ct.assets, 'strong')}
        <tr class="section"><td colspan="4">Liabilities</td></tr>
        ${bs.groups.liability.length ? bs.groups.liability.map(row).join('') : '<tr><td class="indent muted" colspan="4">No debts recorded</td></tr>'}
        ${tot('Total liabilities', bs.totals.liabilities, ct.liabilities, 'strong', 'neg')}
        ${tot('Net worth', bs.totals.netWorth, ct.netWorth, 'strong total')}
      </tbody></table></div>
    ${bs.groups.liability.length ? `<h4 class="group-title">Debt payoff</h4><ul class="plain">${bs.groups.liability.map((r) => {
      const d = E.debtPayoff(state, forecast, r.account);
      return `<li>${esc(r.account.name)}: ${d.cleared ? 'cleared' : d.date ? `expected to be cleared by <b>${esc(fmtDay(d.date))}</b>${d.extrapolated ? ' (extrapolated beyond the forecast)' : ''}` : 'not cleared at the current rate of repayment'}</li>`;
    }).join('')}</ul>` : ''}`;
}

/* ------------------------------------------------------------
   Actual vs plan
   ------------------------------------------------------------ */
function viewAvp() {
  const rows = E.actualVsPlan(state, forecast, ui.avp.months);
  const complete = rows.filter((r) => !r.partial && r.hasActuals && (r.plan.expense || r.actual.expense));
  const accuracy = complete.length ? complete.reduce((s, r) => s + Math.abs(r.variance.expense) / (r.plan.expense || r.actual.expense || 1), 0) / complete.length : null;
  const bars = C.barChart({
    id: 'avp-bars',
    title: 'Spending: plan vs actual by month',
    categories: rows.map((r) => C.shortMonth(r.month)),
    series: [
      { name: 'Planned', color: 'var(--viz-1)', values: rows.map((r) => r.plan.expense) },
      { name: 'Actual', color: 'var(--viz-2)', values: rows.map((r) => r.actual.expense) },
    ],
    highlight: rows.findIndex((r) => r.partial),
    valueFormat: money0,
  });
  const barsInc = C.barChart({
    id: 'avp-bars-inc',
    title: 'Income: plan vs actual by month',
    height: 180,
    categories: rows.map((r) => C.shortMonth(r.month)),
    series: [
      { name: 'Planned', color: 'var(--viz-1)', values: rows.map((r) => r.plan.income) },
      { name: 'Actual', color: 'var(--viz-2)', values: rows.map((r) => r.actual.income) },
    ],
    highlight: rows.findIndex((r) => r.partial),
    valueFormat: money0,
  });
  return `
    <section class="bg-card">
      <div class="bg-toolbar">
        <label>Show last <select data-change="avp-months">${selectOptions([[3, '3 months'], [6, '6 months'], [12, '12 months']], ui.avp.months)}</select></label>
        ${accuracy != null ? `<span class="muted small">Average spending variance over complete months: <b>${Math.round(accuracy * 100)}%</b> of plan${accuracy > 0.15 ? ' — consider widening ranges or updating amounts' : ''}.</span>` : ''}
      </div>
      <div class="bg-grid two">${bars}${barsInc}</div>
    </section>
    <section class="bg-card">
      <div class="table-scroll"><table class="bg-table avp">
        <thead><tr><th>Month</th><th class="num">Income plan</th><th class="num">Income actual</th><th class="num">Variance</th><th class="num">Spending plan</th><th class="num">Spending actual</th><th class="num">Variance</th><th class="num">Net plan</th><th class="num">Net actual</th><th class="num">Variance</th><th></th></tr></thead>
        <tbody>${rows.map((r) => `
          <tr class="${r.partial ? 'partial' : ''}">
            <td>${esc(fmtMonth(r.month))}${r.partial ? ' <span class="tag">to date</span>' : ''}</td>
            ${!r.hasActuals ? `<td class="num">${esc(money0(r.plan.income))}</td><td class="muted" colspan="2">no records</td><td class="num">${esc(money0(r.plan.expense))}</td><td class="muted" colspan="2">no records</td><td class="num">${esc(money0(r.plan.net))}</td><td class="muted" colspan="2">no records</td><td></td></tr>` : `
            <td class="num">${esc(money0(r.plan.income))}</td><td class="num">${esc(money0(r.actual.income))}</td>${varianceCell(r.variance.income, { good: 'pos' })}
            <td class="num">${esc(money0(r.plan.expense))}</td><td class="num">${esc(money0(r.actual.expense))}</td>${varianceCell(r.variance.expense, { good: 'neg' })}
            <td class="num">${esc(money0(r.plan.net))}</td><td class="num">${esc(money0(r.actual.net))}</td>${varianceCell(r.variance.net, { good: 'pos' })}
            <td><button class="btn-link" data-action="avp-open" data-month="${r.month}">${ui.avp.open === r.month ? 'Hide' : 'Details'}</button></td>
          </tr>`}
          ${ui.avp.open === r.month && r.hasActuals ? `<tr class="detail"><td colspan="11">
            <table class="bg-table inner"><thead><tr><th>Category</th><th class="num">Plan</th><th class="num">Actual</th><th class="num">Variance</th></tr></thead>
            <tbody>${r.categories.map((c) => `<tr><td>${esc(c.category)} <small class="muted">${esc(c.kind)}</small></td><td class="num">${esc(fmtMoney(c.plan))}</td><td class="num">${esc(fmtMoney(c.actual))}</td>${varianceCell(c.variance, { good: c.kind === 'income' ? 'pos' : 'neg' })}</tr>`).join('')}</tbody></table>
          </td></tr>` : ''}`).join('')}</tbody></table></div>
      <p class="muted small">Variance is actual minus plan. Green is good for you (more income, less spending); red is the other way. Unplanned spending appears as categories with a zero plan. For the month in progress the plan is counted up to today only.</p>
    </section>`;
}

/* ------------------------------------------------------------
   Accounts & goals
   ------------------------------------------------------------ */
function viewAccounts() {
  const f = forecast;
  const last = f.days[f.days.length - 1];
  return `
    <section class="bg-card">
      <div class="bg-card-head"><h3>Accounts</h3><button class="btn btn-primary" data-action="open-modal" data-modal="account">+ Add account</button></div>
      ${state.accounts.length ? `<div class="table-scroll"><table class="bg-table">
        <thead><tr><th>Account</th><th>Type</th><th class="num">Balance today</th><th class="num">Expected ${esc(C.shortMonth(f.endDate.slice(0, 7)))}</th><th>Trend</th><th>Details</th><th></th></tr></thead>
        <tbody>${state.accounts.map((a) => {
          const now = f.startBalances[a.id] || 0;
          const end = last.balances.expected[a.id] || 0;
          const spark = f.days.filter((d, i) => i % Math.max(1, Math.floor(f.days.length / 40)) === 0).map((d) => d.balances.expected[a.id] || 0);
          const details = [];
          if (a.interestRate) details.push(`${a.interestRate}% interest`);
          if (a.creditLimit) details.push(`limit ${money0(a.creditLimit)}`);
          if (a.type === 'credit' || a.type === 'loan') {
            const d = E.debtPayoff(state, f, a);
            details.push(d.cleared ? 'cleared' : d.date ? `cleared by ${fmtDay(d.date)}` : 'not cleared in forecast');
          }
          return `<tr>
            <td><b>${esc(a.name)}</b>${a.notes ? `<br><small class="muted">${esc(a.notes)}</small>` : ''}</td>
            <td>${esc(E.accountType(a).label)}</td>
            <td class="num ${signClass(now)}">${esc(fmtMoney(now))}</td>
            <td class="num ${signClass(end)}">${esc(fmtMoney(end))}</td>
            <td>${C.sparkline(spark)}</td>
            <td class="small muted">${esc(details.join(' · '))}</td>
            <td class="actions"><button class="btn-link" data-action="open-modal" data-modal="balance" data-id="${esc(a.id)}">Set balance</button> <button class="btn-icon" title="Edit" data-action="edit-account" data-id="${esc(a.id)}">✎</button><button class="btn-icon danger" title="Delete" data-action="delete-account" data-id="${esc(a.id)}">✕</button></td>
          </tr>`;
        }).join('')}</tbody></table></div>
        <p class="muted small">"Set balance" records a correction so the app matches your real bank balance, for example after spending you did not log.</p>` : '<p class="muted">Add your current account, savings, credit cards and loans. Balances are tracked from an opening balance plus the transactions you record.</p>'}
    </section>
    <section class="bg-card">
      <div class="bg-card-head"><h3>Savings goals</h3><button class="btn btn-primary" data-action="open-modal" data-modal="goal">+ Add goal</button></div>
      ${state.goals.length ? `<div class="bg-grid three">${state.goals.map((g) => goalCard(g, { actions: true })).join('')}</div>` : '<p class="muted">A goal is a target balance for one of your accounts, such as an emergency fund. The forecast tells you when you will get there.</p>'}
    </section>`;
}

/* ------------------------------------------------------------
   Scenarios
   ------------------------------------------------------------ */
function viewScenarios() {
  const f = forecast;
  const cards = state.scenarios.map((sc) => {
    const lines = state.lines.filter((l) => l.scenarioId === sc.id);
    const monthly = lines.reduce((s, l) => s + (l.kind === 'income' ? 1 : l.kind === 'expense' ? -1 : 0) * E.monthlyEquivalent(l, f.asOf), 0);
    const transfers = lines.filter((l) => l.kind === 'transfer').reduce((s, l) => s + E.monthlyEquivalent(l, f.asOf), 0);
    return `<div class="bg-card scenario ${sc.enabled ? 'on' : ''}">
      <div class="bg-card-head">
        <label class="switch"><input type="checkbox" data-change="scenario-toggle" data-id="${esc(sc.id)}" ${sc.enabled ? 'checked' : ''}><span></span> <b>${esc(sc.name)}</b></label>
        <span class="actions"><button class="btn-icon" title="Edit" data-action="edit-scenario" data-id="${esc(sc.id)}">✎</button><button class="btn-icon danger" title="Delete" data-action="delete-scenario" data-id="${esc(sc.id)}">✕</button></span>
      </div>
      ${sc.notes ? `<p class="muted small">${esc(sc.notes)}</p>` : ''}
      <p class="small">Effect on monthly surplus: <b class="${signClass(monthly)}">${esc(fmtMoney(monthly, { decimals: 0, signed: true }))}</b>${transfers ? ` · transfers ${esc(money0(transfers))}/month` : ''}</p>
      ${lines.length ? `<ul class="plain small">${lines.map((l) => `<li>${esc(l.name)} · ${esc(fmtMoney(E.amountAt(l, f.asOf).expected))} ${esc(describeSchedule(l.schedule).toLowerCase())} from ${esc(fmtDay(l.schedule.start))} <button class="btn-link" data-action="edit-line" data-id="${esc(l.id)}">edit</button></li>`).join('')}</ul>` : '<p class="muted small">No items yet.</p>'}
      <button class="btn btn-secondary small" data-action="open-modal" data-modal="line" data-scenario="${esc(sc.id)}">+ Add item to this scenario</button>
    </div>`;
  });
  return `<section class="bg-card">
      <div class="bg-card-head"><h3>What-if scenarios</h3><button class="btn btn-primary" data-action="open-modal" data-modal="scenario">+ New scenario</button></div>
      <p class="muted">A scenario is a bundle of budget items you can switch on and off, such as a new job, moving flat, buying a car or paying off a card faster. Switched-on scenarios are included everywhere: forecast, statements and the dashboard.</p>
    </section>
    ${cards.length ? `<div class="bg-grid two">${cards.join('')}</div>` : ''}`;
}

/* ------------------------------------------------------------
   Settings
   ------------------------------------------------------------ */

/* ------------------------------------------------------------
   Take-home pay calculator
   ------------------------------------------------------------ */
// Defaults mirror a real trainee payslip: £31,800 with a £50 monthly benefits allowance,
// 8% SMART (salary sacrifice) pension, flexible benefits and purchased holiday by sacrifice,
// payrolled benefits in kind, a graduate loan repaid from net pay, NI category H, no student loan.
const TH_DEFAULTS = {
  gross: 31800, frequency: 'monthly', scotland: false, taxCode: '1257L', niCategory: 'H', payDay: 28,
  pensionPct: 8, pensionMethod: 'salarySacrifice', employerPensionPct: '', studentLoans: [],
  benefitsBasis: 'period', allowances: 50, taxableBenefits: 108.96, bonus: '',
  holidayDays: '', holidayAmount: 92.63, workingDays: 260, otherSacrifice: 11.19, payrollGiving: '',
  loanRepayment: 194.45, loanBalance: 4861.05, otherNetDeductions: '',
  compareGross: '', targetNet: '',
};

function thInputs() {
  return { ...TH_DEFAULTS, ...((state.settings && state.settings.takeHome) || {}) };
}
function thRules() {
  return T.rulesWith((state.settings && state.settings.taxRules) || {});
}
const pct = (v) => `${Math.round(v * 1000) / 10}%`;
function loanEndDate(r) {
  const days = Math.round((r.loanPeriods * 365) / r.frequency.perYear);
  return E.addDays(forecast.asOf, days);
}

function viewTakeHome() {
  const inp = thInputs();
  const rules = thRules();
  const overridden = Object.keys((state.settings && state.settings.taxRules) || {}).length;
  const loans = Object.entries(rules.studentLoans);
  return `<section class="bg-grid two takehome">
    <div class="bg-card">
      <h3>Your pay</h3>
      <p class="muted small">UK PAYE rules for ${esc(rules.taxYear)}${overridden ? ' (edited)' : ''}. Salary only; benefits in kind, bonuses and other income are not included.</p>
      <form data-form="takehome" class="bg-form" novalidate>
        <div class="grid2">
          <label>Gross annual salary (${esc(currencySymbol())}) <input id="th-gross" name="gross" type="number" min="0" step="100" value="${esc(inp.gross)}"></label>
          <label>Paid <select id="th-frequency" name="frequency">${selectOptions(T.PAY_FREQUENCIES.map((f) => [f.id, f.label]), inp.frequency)}</select></label>
          <label>Where you pay tax <select id="th-region" name="scotland">${selectOptions([['0', 'England, Wales or Northern Ireland'], ['1', 'Scotland']], inp.scotland ? '1' : '0')}</select></label>
          <label>Tax code <input id="th-taxcode" name="taxCode" value="${esc(inp.taxCode)}" placeholder="1257L"><small>From your payslip. 1257L is the standard code.</small></label>
        </div>
        <fieldset><legend>Pension</legend>
          <div class="grid3">
            <label>You pay (% of salary) <input id="th-pension" name="pensionPct" type="number" min="0" max="100" step="0.5" value="${esc(inp.pensionPct)}"></label>
            <label>Employer pays (%) <input id="th-emp-pension" name="employerPensionPct" type="number" min="0" max="100" step="0.5" value="${esc(inp.employerPensionPct)}"></label>
            <label>How it is taken <select id="th-pension-method" name="pensionMethod">${selectOptions(T.PENSION_METHODS, inp.pensionMethod)}</select></label>
          </div>
        </fieldset>
        <fieldset><legend>Student loans</legend>
          <div class="check-row">${loans.map(([id, l]) => `<label class="check"><input type="checkbox" name="loan_${id}" id="th-loan-${id}" ${inp.studentLoans.includes(id) ? 'checked' : ''}> ${esc(l.label)}</label>`).join('')}</div>
        </fieldset>
        <div class="grid2">
          <label>National Insurance category <select id="th-nicat" name="niCategory">${selectOptions(T.NI_CATEGORIES, inp.niCategory || (inp.noNI ? 'C' : 'A'))}</select><small>Shown on your payslip. Apprentices under 25 and under-21s cost the employer no NI below the upper limit.</small></label>
          <label>Pay day of the month <select id="th-payday" name="payDay">${selectOptions([['last', 'Last working day'], ...Array.from({ length: 28 }, (_, i) => [String(i + 1), ordinal(i + 1)])], String(inp.payDay || 'last'))}</select><small>Used when adding the salary to your budget.</small></label>
        </div>
        <fieldset><legend>Benefits, allowances and salary sacrifice</legend>
          <label>Amounts below are per <select id="th-basis" name="benefitsBasis">${selectOptions([['period', inp.frequency === 'monthly' ? 'month (as on the payslip)' : 'pay period (as on the payslip)'], ['year', 'year']], inp.benefitsBasis || 'period')}</select></label>
          <div class="grid2">
            <label>Cash allowances (${esc(currencySymbol())}) <input id="th-allowances" name="allowances" type="number" min="0" step="0.01" value="${esc(inp.allowances)}" placeholder="e.g. 50"><small>Benefits allowance, car allowance, location pay: paid with salary, taxed and NI'd, not pensionable.</small></label>
            <label>Taxable benefits in kind (${esc(currencySymbol())}) <input id="th-benefits" name="taxableBenefits" type="number" min="0" step="0.01" value="${esc(inp.taxableBenefits)}" placeholder="e.g. 100.51"><small>"BIK taxable credit" lines: private medical insurance, company car. Taxed, no NI, not paid as cash.</small></label>
            <label>Holiday purchase (${esc(currencySymbol())}) <input id="th-holiday-amount" name="holidayAmount" type="number" min="0" step="0.01" value="${esc(inp.holidayAmount)}" placeholder="e.g. 92.63"><small>The deduction on your payslip, taken by salary sacrifice. Leave blank to price it by days instead.</small></label>
            <label>…or holiday purchased (days a year) <input id="th-holiday" name="holidayDays" type="number" min="0" max="60" step="0.5" value="${esc(inp.holidayDays)}" placeholder="e.g. 5"><small>Priced at salary ÷ <input id="th-workdays" name="workingDays" type="number" min="200" max="366" step="1" value="${esc(inp.workingDays)}" style="width:5em"> working days.</small></label>
            <label>Flexible benefits by salary sacrifice (${esc(currencySymbol())}) <input id="th-sacrifice" name="otherSacrifice" type="number" min="0" step="0.01" value="${esc(inp.otherSacrifice)}" placeholder="e.g. 11.19"><small>Life assurance, critical illness, income protection, cycle to work, EV lease: saves tax and NI.</small></label>
            <label>Payroll giving (${esc(currencySymbol())}) <input id="th-giving" name="payrollGiving" type="number" min="0" step="0.01" value="${esc(inp.payrollGiving)}" placeholder="e.g. 10"><small>Charity from pre-tax pay: saves tax, not NI.</small></label>
            <label>Bonus (${esc(currencySymbol())} per year) <input id="th-bonus" name="bonus" type="number" min="0" step="100" value="${esc(inp.bonus)}" placeholder="e.g. 1500"><small>Taxed as pay. Pension is worked out on base salary only.</small></label>
          </div>
        </fieldset>
        <fieldset><legend>Taken from pay after tax <small class="muted">(per ${inp.frequency === 'monthly' ? 'month' : inp.frequency === 'weekly' ? 'week' : 'pay period'})</small></legend>
          <div class="grid3">
            <label>Company / graduate loan repayment (${esc(currencySymbol())}) <input id="th-loan" name="loanRepayment" type="number" min="0" step="5" value="${esc(inp.loanRepayment)}" placeholder="e.g. 150"></label>
            <label>Loan balance left (${esc(currencySymbol())}) <input id="th-loan-balance" name="loanBalance" type="number" min="0" step="10" value="${esc(inp.loanBalance)}" placeholder="e.g. 1800"><small>So we can show when it clears.</small></label>
            <label>Other deductions (${esc(currencySymbol())}) <input id="th-other-net" name="otherNetDeductions" type="number" min="0" step="5" value="${esc(inp.otherNetDeductions)}" placeholder="e.g. 25"><small>Season ticket loan, union fees, sports club.</small></label>
          </div>
        </fieldset>
        <fieldset><legend>What-ifs <small class="muted">(optional)</small></legend>
          <div class="grid2">
            <label>Compare with another salary (${esc(currencySymbol())}) <input id="th-compare" name="compareGross" type="number" min="0" step="100" value="${esc(inp.compareGross)}" placeholder="e.g. a job offer"></label>
            <label>Gross needed for a monthly take-home of <input id="th-target" name="targetNet" type="number" min="0" step="10" value="${esc(inp.targetNet)}" placeholder="e.g. 2500"></label>
          </div>
        </fieldset>
      </form>
      <details class="rules-editor" ${ui.rulesOpen ? 'open' : ''}>
        <summary>Tax year rules (edit when rates change)</summary>
        <form data-form="taxrules" class="bg-form">
          <div class="grid3">${T.ruleFields().map(([path, label, type]) => {
            const v = T.getPath(rules, path);
            const shown = type === 'pct' ? Math.round(v * 10000) / 100 : v;
            return `<label>${esc(label)}${type === 'pct' ? ' (%)' : ''} <input name="${esc(path)}" id="rule-${esc(path.replace(/\./g, '-'))}" type="${type === 'text' ? 'text' : 'number'}" step="any" value="${esc(shown)}"></label>`;
          }).join('')}</div>
          <div class="bg-actions"><button class="btn btn-primary" type="submit">Save rules</button><button class="btn btn-secondary" type="button" data-action="reset-rules">Reset to ${esc(T.DEFAULT_RULES.taxYear)} defaults</button></div>
          <p class="muted small">Band limits are taxable income after the personal allowance. Your tax code sets your own allowance (1257L = £12,579), so update the code too if the standard allowance changes. Check the current figures on GOV.UK each April.</p>
        </form>
      </details>
    </div>
    <div class="bg-card" id="th-results">${takeHomeResults(inp, rules)}</div>
  </section>`;
}

function takeHomeResults(inp, rules) {
  const r = T.takeHome(inp, rules);
  const cmp = inp.compareGross !== '' && Number(inp.compareGross) > 0 ? T.takeHome({ ...inp, gross: Number(inp.compareGross) }, rules) : null;
  const periodLabel = r.frequency.id === 'monthly' ? 'a month' : r.frequency.id === 'weekly' ? 'a week' : r.frequency.id === 'fortnightly' ? 'a fortnight' : 'every 4 weeks';
  const cols = ['annual', 'monthly', 'weekly'];
  const colLabels = ['Per year', 'Per month', 'Per week'];
  if (r.frequency.id === 'fourweekly' || r.frequency.id === 'fortnightly') {
    cols.splice(2, 0, 'period');
    colLabels.splice(2, 0, r.frequency.id === 'fourweekly' ? 'Per 4 weeks' : 'Per fortnight');
  }
  const row = (label, obj, { neg = false, cls = '' } = {}) => `<tr class="${cls}"><td>${label}</td>${cols.map((c) => `<td class="num ${neg && obj[c] ? 'neg' : ''}">${esc(fmtMoney(neg ? -obj[c] : obj[c]))}</td>`).join('')}</tr>`;
  const pensionLabel = r.pensionMethod === 'reliefAtSource' ? 'Pension (80% of contribution, from pay)' : r.pensionMethod === 'netPay' ? 'Pension (net pay arrangement)' : 'Pension (salary sacrifice)';
  let target = '';
  if (inp.targetNet !== '' && Number(inp.targetNet) > 0) {
    const g = T.grossForNet(Number(inp.targetNet) * 12, inp, rules);
    target = `<p class="small">For a take-home of <b>${esc(money0(Number(inp.targetNet)))}</b> a month with these settings you need a gross salary of about <b>${esc(money0(Math.ceil(g / 100) * 100))}</b>.</p>`;
  }
  return `
    <div class="stat stat-hero">
      <div class="stat-label">Take-home pay</div>
      <div class="stat-value">${esc(money0(r.net.period))} <span class="stat-unit">${periodLabel}</span></div>
      <div class="stat-sub">${esc(money0(r.net.annual))} a year from ${esc(money0(r.totalPay.annual))} of pay${r.taxableBenefits.annual ? ` plus ${esc(money0(r.taxableBenefits.annual))} of taxable benefits` : ''}. Deductions take ${esc(pct(r.totalPay.annual ? r.totalDeductions.annual / r.totalPay.annual : 0))}; every extra £1 you earn, you keep ${esc(fmtMoney(1 - r.marginalRate))}. Tax is worked out on the year, so it can differ from a cumulative PAYE payslip by a few pence.</div>
    </div>
    ${r.warnings.map((w) => `<p class="small muted">${esc(w)}</p>`).join('')}
    <div class="table-scroll"><table class="bg-table statement payslip">
      <thead><tr><th></th>${colLabels.map((l) => `<th class="num">${l}</th>`).join('')}</tr></thead>
      <tbody>
        ${row(r.bonus.annual || r.allowances.annual ? 'Basic salary' : 'Gross pay', r.gross, { cls: r.bonus.annual || r.allowances.annual ? '' : 'strong' })}
        ${r.allowances.annual ? row('Allowances', r.allowances) : ''}
        ${r.bonus.annual ? row('Bonus', r.bonus) : ''}
        ${r.bonus.annual || r.allowances.annual ? row('Gross pay', r.totalPay, { cls: 'strong' }) : ''}
        ${r.holidayCost.annual ? row('Holiday purchase (salary sacrifice)', r.holidayCost, { neg: true }) : ''}
        ${r.otherSacrifice.annual ? row('Flexible benefits (salary sacrifice)', r.otherSacrifice, { neg: true }) : ''}
        ${r.pensionFromPay.annual ? row(pensionLabel, r.pensionFromPay, { neg: true }) : ''}
        ${r.payrollGiving.annual ? row('Payroll giving', r.payrollGiving, { neg: true }) : ''}
        ${row('Income tax', r.incomeTax, { neg: true })}
        ${row('National Insurance', r.nationalInsurance, { neg: true })}
        ${r.studentLoan.annual ? row('Student loan', r.studentLoan, { neg: true }) : ''}
        ${r.loanRepayment.annual ? row('Company loan repayment', r.loanRepayment, { neg: true }) : ''}
        ${r.otherNetDeductions.annual ? row('Other deductions', r.otherNetDeductions, { neg: true }) : ''}
        ${row('Take-home pay', r.net, { cls: 'strong total' })}
        ${r.taxableBenefits.annual ? `<tr class="muted"><td>Taxable benefits in kind (tax included above, not paid as cash)</td>${cols.map((c) => `<td class="num">${esc(fmtMoney(r.taxableBenefits[c]))}</td>`).join('')}</tr>` : ''}
        <tr class="muted memo"><td>Total taxable pay (payslip figure)</td>${cols.map((c) => `<td class="num">${esc(fmtMoney(r.taxablePay[c]))}</td>`).join('')}</tr>
        <tr class="muted memo"><td>Total payments, before tax (NI-able pay)</td>${cols.map((c) => `<td class="num">${esc(fmtMoney(r.niablePay[c]))}</td>`).join('')}</tr>
      </tbody></table></div>
    ${target}
    ${r.loanPeriods ? `<p class="small">The company loan clears after <b>${r.loanPeriods}</b> more ${r.frequency.id === 'monthly' ? 'months' : 'pay periods'} (around ${esc(fmtDay(loanEndDate(r)))}); your take-home then rises to <b>${esc(money0(r.netAfterLoan.monthly))}</b> a month.</p>` : ''}
    <div class="bg-grid two compact">
      <div>
        <h4 class="group-title">Income tax</h4>
        <table class="bg-table inner small">
          <tr><td>Personal allowance</td><td class="num">${esc(fmtMoney(r.allowance))}</td></tr>
          <tr><td>Taxable income</td><td class="num">${esc(fmtMoney(r.taxable))}</td></tr>
          ${r.bands.map((b) => `<tr><td>${esc(b.name)} at ${esc(pct(b.rate))} on ${esc(money0(b.amount))}</td><td class="num">${esc(fmtMoney(b.tax))}</td></tr>`).join('')}
          ${r.loans.map((l) => `<tr><td>${esc(l.label)}: ${esc(pct(l.rate))} above ${esc(money0(l.threshold))}</td><td class="num">${esc(fmtMoney(l.amount))}</td></tr>`).join('')}
          <tr><td>Effective tax and NI rate</td><td class="num">${esc(pct(r.effectiveRate))}</td></tr>
          <tr><td>Marginal rate on the next £1</td><td class="num">${esc(pct(r.marginalRate))}</td></tr>
        </table>
      </div>
      <div>
        <h4 class="group-title">Pension and employer cost</h4>
        <table class="bg-table inner small">
          <tr><td>Into your pension each year</td><td class="num">${esc(fmtMoney(r.pension.annual + r.employerPension.annual))}</td></tr>
          <tr><td class="indent">from you${r.pensionMethod === 'reliefAtSource' ? ' (incl. 20% relief)' : ''}</td><td class="num">${esc(fmtMoney(r.pension.annual))}</td></tr>
          <tr><td class="indent">from your employer</td><td class="num">${esc(fmtMoney(r.employerPension.annual))}</td></tr>
          <tr><td>Employer National Insurance</td><td class="num">${esc(fmtMoney(r.employerNI.annual))}</td></tr>
          ${r.taxableBenefits.annual ? `<tr><td>Benefits provided</td><td class="num">${esc(fmtMoney(r.taxableBenefits.annual))}</td></tr>` : ''}
          <tr><td>Total cost to employer</td><td class="num">${esc(fmtMoney(r.employerCost.annual))}</td></tr>
        </table>
      </div>
    </div>
    ${cmp ? `<h4 class="group-title">Compared with ${esc(money0(cmp.gross.annual))}</h4>
    <div class="table-scroll"><table class="bg-table statement payslip">
      <thead><tr><th>Per month</th><th class="num">${esc(money0(r.gross.annual))}</th><th class="num">${esc(money0(cmp.gross.annual))}</th><th class="num">Difference</th></tr></thead>
      <tbody>${[['Gross pay', 'totalPay'], ['Holiday purchase', 'holidayCost'], ['Income tax', 'incomeTax'], ['National Insurance', 'nationalInsurance'], ['Student loan', 'studentLoan'], ['Pension (from pay)', 'pensionFromPay'], ['Company loan repayment', 'loanRepayment'], ['Take-home pay', 'net']].filter(([, k]) => r[k].annual || cmp[k].annual || k === 'totalPay' || k === 'net').map(([label, k]) => `<tr class="${k === 'net' ? 'strong total' : ''}"><td>${label}</td><td class="num">${esc(fmtMoney(r[k].monthly))}</td><td class="num">${esc(fmtMoney(cmp[k].monthly))}</td>${varianceCell(cmp[k].monthly - r[k].monthly, { good: k === 'totalPay' || k === 'net' ? 'pos' : 'neg' })}</tr>`).join('')}</tbody></table></div>
    <p class="small muted">A ${esc(money0(cmp.gross.annual - r.gross.annual))} change in salary is worth ${esc(fmtMoney(cmp.net.monthly - r.net.monthly, { signed: true }))} a month in your pocket.</p>` : ''}
    <div class="bg-actions">
      <button class="btn btn-primary" data-action="open-modal" data-modal="apply-salary" data-net="${r.net.monthly.toFixed(2)}" data-gross="${r.gross.annual}" data-after-loan="${r.loanPeriods ? r.netAfterLoan.monthly.toFixed(2) : ''}" data-loan-end="${r.loanPeriods ? loanEndDate(r) : ''}">Use ${esc(money0(r.net.monthly))} a month as my salary in the budget</button>
      ${cmp ? `<button class="btn btn-secondary" data-action="open-modal" data-modal="apply-salary" data-net="${cmp.net.monthly.toFixed(2)}" data-gross="${cmp.gross.annual}">Use the ${esc(money0(cmp.gross.annual))} figure instead</button>` : ''}
    </div>`;
}

function readTakeHomeForm(form) {
  const fd = new FormData(form);
  const g = (k) => (fd.get(k) ?? '').toString().trim();
  const loans = Object.keys(T.DEFAULT_RULES.studentLoans).filter((id) => form[`loan_${id}`] && form[`loan_${id}`].checked);
  return {
    gross: Number(g('gross')) || 0,
    frequency: g('frequency') || 'monthly',
    scotland: g('scotland') === '1',
    taxCode: g('taxCode') || '1257L',
    pensionPct: Number(g('pensionPct')) || 0,
    employerPensionPct: Number(g('employerPensionPct')) || 0,
    pensionMethod: g('pensionMethod') || 'salarySacrifice',
    studentLoans: loans,
    niCategory: g('niCategory') || 'A',
    payDay: g('payDay') || 'last',
    benefitsBasis: g('benefitsBasis') || 'period',
    allowances: g('allowances'),
    holidayAmount: g('holidayAmount'),
    compareGross: g('compareGross'),
    targetNet: g('targetNet'),
    bonus: g('bonus'),
    taxableBenefits: g('taxableBenefits'),
    holidayDays: g('holidayDays'),
    workingDays: Number(g('workingDays')) || 260,
    otherSacrifice: g('otherSacrifice'),
    payrollGiving: g('payrollGiving'),
    loanRepayment: g('loanRepayment'),
    loanBalance: g('loanBalance'),
    otherNetDeductions: g('otherNetDeductions'),
  };
}

function refreshTakeHome(form) {
  const next = readTakeHomeForm(form);
  const box = root.querySelector('#th-results');
  // Skip when nothing changed (e.g. the blur that happens when clicking a results button),
  // so the results are not re-rendered under the user's click.
  if (box && JSON.stringify(next) === JSON.stringify(state.settings.takeHome)) return;
  state.settings.takeHome = next;
  S.save(state);
  if (box) box.innerHTML = takeHomeResults(thInputs(), thRules());
}

function applySalaryForm(spec) {
  const incomeLines = state.lines.filter((l) => l.kind === 'income');
  const current = incomeLines.find((l) => /salary|wages|pay/i.test(l.name)) || incomeLines[0];
  return `${modalHead('Use this take-home pay in the budget')}
  <form data-form="apply-salary" class="bg-form" novalidate>
    <input type="hidden" name="net" value="${esc(spec.net)}">
    <p class="small muted">Monthly take-home of <b>${esc(fmtMoney(Number(spec.net)))}</b> from a ${esc(money0(Number(spec.gross)))} salary.</p>
    <div class="grid2">
      <label>Apply to <select name="target" id="apply-target">${selectOptions([['new', 'Create a new salary item'], ...incomeLines.map((l) => [l.id, `Update "${l.name}" (${money0(E.amountAt(l, forecast.asOf).expected)} now)`])], current ? current.id : 'new')}</select></label>
      <label>From <input name="from" id="apply-from" type="date" value="${esc(forecast.asOf)}"><small>Earlier occurrences keep their current amount, so a pay rise or new job from a future date is recorded as a change.</small></label>
      <label>Paid into <select name="accountId" id="apply-account">${accountOptions((state.accounts.find((a) => a.type === 'current') || state.accounts[0] || {}).id)}</select></label>
      <label>Pay day (new items) <select name="payday" id="apply-payday">${selectOptions([['last', 'Last working day of the month'], ...Array.from({ length: 28 }, (_, i) => [String(i + 1), ordinal(i + 1)])], String(thInputs().payDay || 'last'))}</select></label>
    </div>
    ${spec.afterLoan ? `<label class="check"><input type="checkbox" name="loanBump" id="apply-loan-bump" checked> Rise to ${esc(fmtMoney(Number(spec.afterLoan)))} a month from ${esc(fmtDay(spec.loanEnd))}, when the company loan is repaid</label><input type="hidden" name="afterLoan" value="${esc(spec.afterLoan)}"><input type="hidden" name="loanEnd" value="${esc(spec.loanEnd)}"` : ''}
    <div class="bg-actions"><button class="btn btn-primary" type="submit">Apply</button><button class="btn btn-secondary" type="button" data-action="close-modal">Cancel</button></div>
  </form>`;
}

function viewSettings() {
  const s = state.settings;
  return `<section class="bg-card">
    <h3>Settings</h3>
    <form data-form="settings" class="bg-form grid2">
      <label>Currency code <input name="currency" value="${esc(s.currency)}" maxlength="3" placeholder="GBP"></label>
      <label>Number format locale <input name="locale" value="${esc(s.locale || 'en-GB')}" placeholder="en-GB"></label>
      <label>Forecast horizon <select name="horizonMonths">${selectOptions([[3, '3 months'], [6, '6 months'], [12, '12 months'], [18, '18 months'], [24, '24 months']], s.horizonMonths)}</select></label>
      <label>Safety buffer (cash you never want to dip below) <input name="safetyBuffer" type="number" step="1" min="0" value="${esc(s.safetyBuffer)}"></label>
      <label>Budget period starts on day <input name="periodStartDay" type="number" min="1" max="28" value="${esc(s.periodStartDay || 1)}"><small>Use 1 for calendar months, or your payday (e.g. 25) to budget per pay cycle.</small></label>
      <label>Match window (days) <input name="matchWindowDays" type="number" min="0" max="31" value="${esc(s.matchWindowDays)}"><small>A recorded transaction linked to a plan item counts as that item if it is within this many days of the planned date.</small></label>
      <label>Missed planned items <select name="overdueMode">${selectOptions([['tracked', 'Carry forward for items I have recorded before (recommended)'], ['all', 'Carry forward every missed item'], ['none', 'Ignore missed items']], s.overdueMode || 'tracked')}</select><small>What to assume when a planned item's date passes without a matching transaction.</small></label>
      <label>Look back for missed items (days) <input name="overdueLookbackDays" type="number" min="0" max="180" value="${esc(s.overdueLookbackDays ?? 45)}"></label>
      <label>Plan "as of" date (leave blank for today) <input name="asOf" type="date" value="${esc(s.asOf || '')}"><small>Handy for planning from a future date, or reviewing the past.</small></label>
      <div class="bg-actions"><button class="btn btn-primary" type="submit">Save settings</button></div>
    </form>
  </section>
  <section class="bg-card">
    <h3>Your data</h3>
    <p class="muted">Everything is stored only in this browser (localStorage). Export a backup regularly, and import it on another device to carry on there.</p>
    <div class="bg-actions">
      <button class="btn btn-secondary" data-action="export-json">Export backup (JSON)</button>
      <label class="btn btn-secondary file">Import backup file<input type="file" accept="application/json,.json" data-change="import-json" hidden></label>
      <button class="btn btn-secondary" data-action="load-sample">Load the example data</button>
      <button class="btn btn-outline danger" data-action="reset-all">Delete everything</button>
    </div>
    <details class="import-paste"><summary>Or paste a backup</summary>
      <textarea id="import-text" rows="5" placeholder="Paste the contents of a backup file here"></textarea>
      <div class="bg-actions"><button class="btn btn-secondary" data-action="import-text">Restore from pasted backup</button></div>
    </details>
    <p class="muted small">${state.accounts.length} accounts · ${state.lines.length} plan items · ${state.transactions.length} transactions · ${state.scenarios.length} scenarios · ${state.goals.length} goals</p>
  </section>
  <section class="bg-card">
    <h3>How the numbers work</h3>
    <ul class="plain small">
      <li><b>Forecast</b>: starts from today's balances (opening balance + recorded transactions) and applies every planned item day by day. Items with a range produce a best and worst case.</li>
      <li><b>Linking</b>: when you record a transaction and link it to a plan item, that occurrence is treated as done, so paying rent early never double counts.</li>
      <li><b>Budget vs actual vs expected</b>: budget is the plan for the period; actual is what you recorded; expected is actual so far plus the forecast for the rest of the period.</li>
      <li><b>Balance sheet</b>: assets are positive balances, liabilities are negative balances (what you owe). Interest is applied monthly on the 1st using the account's annual rate.</li>
      <li><b>Transfers</b> (to savings, investments or paying a card) are not expenses: they move money between your own accounts and appear below the line.</li>
    </ul>
  </section>`;
}

/* ------------------------------------------------------------
   Modal forms
   ------------------------------------------------------------ */
function openModal(spec) {
  ui.modal = spec;
  const dlg = document.getElementById('bg-modal');
  dlg.innerHTML = `<div class="modal-body">${modalContent(spec)}</div>`;
  if (!dlg.open) dlg.showModal();
  const first = dlg.querySelector('input:not([type=hidden]):not([type=checkbox]), select');
  if (first) first.focus();
  const form = dlg.querySelector('form');
  if (form && form.dataset.form === 'line') syncLineForm(form);
  if (form && form.dataset.form === 'transaction') syncTxForm(form);
}
function closeModal() {
  ui.modal = null;
  ui.csv = null;
  const dlg = document.getElementById('bg-modal');
  if (dlg && dlg.open) dlg.close();
}

function modalContent(spec) {
  switch (spec.type) {
    case 'line': return lineForm(spec);
    case 'transaction': return txForm(spec);
    case 'account': return accountForm(spec);
    case 'goal': return goalForm(spec);
    case 'scenario': return scenarioForm(spec);
    case 'balance': return balanceForm(spec);
    case 'csv': return csvForm(spec);
    case 'export': return exportView(spec);
    case 'apply-salary': return applySalaryForm(spec);
    default: return '';
  }
}
const modalHead = (title) => `<div class="modal-head"><h3>${esc(title)}</h3><button type="button" class="btn-icon" data-action="close-modal" aria-label="Close">✕</button></div>`;
const errorBox = (errors) => (errors && errors.length ? `<ul class="form-errors">${errors.map((e) => `<li>${esc(e)}</li>`).join('')}</ul>` : '');

function lineForm(spec) {
  const l = spec.line || {
    kind: spec.kind || 'expense', flowType: 'fixed', category: '', amount: '', amountMin: '', amountMax: '',
    accountId: (state.accounts.find((a) => a.type === 'current') || state.accounts[0] || {}).id || '',
    toAccountId: '', schedule: { frequency: 'monthly', interval: 1, start: forecast.asOf, end: '', dayOfMonth: null, weekendRule: 'none' },
    changes: [], skips: [], annualGrowthPct: '', scenarioId: spec.scenario || '', notes: '',
  };
  const sch = l.schedule;
  const preset = E.presetForSchedule(sch);
  const dayOpt = sch.dayOfMonth === 'last' ? 'last' : sch.dayOfMonth ? String(sch.dayOfMonth) : 'start';
  const isRange = l.amountMin !== '' && l.amountMin != null && (Number(l.amountMin) !== Number(l.amount) || Number(l.amountMax) !== Number(l.amount));
  const changeRow = (c, i) => `<div class="change-row" data-row="${i}">
      <input type="date" name="ch_from" value="${esc(c.from || '')}" aria-label="From date">
      <input type="number" step="0.01" min="0" name="ch_amount" value="${esc(c.amount ?? '')}" placeholder="Amount" aria-label="Amount">
      <input type="number" step="0.01" min="0" name="ch_min" value="${esc(c.amountMin ?? '')}" placeholder="Min" aria-label="Minimum">
      <input type="number" step="0.01" min="0" name="ch_max" value="${esc(c.amountMax ?? '')}" placeholder="Max" aria-label="Maximum">
      <input type="text" name="ch_note" value="${esc(c.note || '')}" placeholder="Note (e.g. new job)" aria-label="Note">
      <button type="button" class="btn-icon danger" data-action="remove-change" aria-label="Remove">✕</button>
    </div>`;
  return `${modalHead(spec.line ? 'Edit budget item' : 'Add budget item')}
  <form data-form="line" class="bg-form" novalidate>
    <input type="hidden" name="id" value="${esc(l.id || '')}">
    ${errorBox(spec.errors)}
    <div class="seg radio">
      ${[['income', 'Income'], ['expense', 'Expense'], ['transfer', 'Transfer']].map(([k, lab]) => `<label class="${l.kind === k ? 'active' : ''}"><input type="radio" name="kind" value="${k}" ${l.kind === k ? 'checked' : ''}>${lab}</label>`).join('')}
    </div>
    <div class="grid2">
      <label>Name <input name="name" value="${esc(l.name || '')}" placeholder="e.g. Rent, Salary, Groceries" required></label>
      <label>Category <input name="category" list="cat-list" value="${esc(l.category || '')}" placeholder="e.g. Housing">${datalist('cat-list')}</label>
      <label>Type <select name="flowType" data-flow-types>${selectOptions(FLOW_TYPES[l.kind] || FLOW_TYPES.expense, l.flowType || 'fixed')}</select></label>
      <label data-show="account">From account / paid from <select name="accountId">${accountOptions(l.accountId)}</select></label>
      <label data-show="toAccount">To account <select name="toAccountId">${accountOptions(l.toAccountId, 'Choose destination')}</select></label>
    </div>
    <fieldset>
      <legend>Amount</legend>
      <div class="grid3">
        <label>Expected amount (${esc(currencySymbol())}) <input name="amount" type="number" step="0.01" min="0" value="${esc(l.amount)}" required></label>
        <label class="check span2"><input type="checkbox" name="isRange" ${isRange ? 'checked' : ''}> The amount varies: give a range</label>
        <label data-show="range">Minimum <input name="amountMin" type="number" step="0.01" min="0" value="${esc(isRange ? l.amountMin : '')}"></label>
        <label data-show="range">Maximum <input name="amountMax" type="number" step="0.01" min="0" value="${esc(isRange ? l.amountMax : '')}"></label>
        <label>Annual increase % (optional) <input name="annualGrowthPct" type="number" step="0.1" value="${esc(l.annualGrowthPct ?? '')}" placeholder="e.g. 3 for inflation"></label>
      </div>
    </fieldset>
    <fieldset>
      <legend>When</legend>
      <div class="grid3">
        <label>Repeats <select name="preset">${selectOptions([...E.FREQUENCY_PRESETS.map((p) => [p.id, p.label]), ['custom', 'Custom…']], preset)}</select></label>
        <label data-show="custom">Every <input name="interval" type="number" min="1" value="${esc(sch.interval || 1)}"></label>
        <label data-show="custom">Unit <select name="frequency">${selectOptions([['daily', 'days'], ['weekly', 'weeks'], ['monthly', 'months'], ['yearly', 'years']], sch.frequency)}</select></label>
        <label>Start / first date <input name="start" type="date" value="${esc(sch.start || '')}" required></label>
        <label data-show="repeat">End date (optional) <input name="end" type="date" value="${esc(sch.end || '')}"></label>
        <label data-show="monthly">Day of month <select name="dayOpt">${selectOptions([['start', 'Same day as the start date'], ['last', 'Last day of the month'], ...Array.from({ length: 31 }, (_, i) => [String(i + 1), ordinal(i + 1)])], dayOpt)}</select></label>
        <label data-show="repeat">If it lands on a weekend <select name="weekendRule">${selectOptions(WEEKEND_RULES, sch.weekendRule || 'none')}</select></label>
      </div>
    </fieldset>
    <fieldset>
      <legend>Amount changes over time <small class="muted">(new job, rent increase, contract ending…)</small></legend>
      <div class="changes">${(l.changes || []).map(changeRow).join('')}</div>
      <template id="change-template">${changeRow({}, 'new')}</template>
      <button type="button" class="btn btn-secondary small" data-action="add-change">+ Add a change</button>
    </fieldset>
    <div class="grid2">
      <label>Scenario (optional) <select name="scenarioId">${selectOptions([['', 'Part of the base plan'], ...state.scenarios.map((s) => [s.id, s.name])], l.scenarioId || '')}</select></label>
      <label>Notes <input name="notes" value="${esc(l.notes || '')}"></label>
    </div>
    ${(l.skips || []).length ? `<p class="small muted">Skipped dates: ${l.skips.map((d) => `<span class="tag">${esc(fmtDay(d))} <button type="button" class="btn-link" data-action="unskip" data-date="${esc(d)}">undo</button></span>`).join(' ')}</p>` : ''}
    <div class="bg-actions"><button class="btn btn-primary" type="submit">${spec.line ? 'Save changes' : 'Add item'}</button><button class="btn btn-secondary" type="button" data-action="close-modal">Cancel</button></div>
  </form>`;
}

function syncLineForm(form) {
  const kind = form.kind.value;
  const show = (key, on) => form.querySelectorAll(`[data-show="${key}"]`).forEach((el) => (el.style.display = on ? '' : 'none'));
  show('toAccount', kind === 'transfer');
  show('range', form.isRange.checked);
  const preset = form.preset.value;
  show('custom', preset === 'custom');
  const p = E.FREQUENCY_PRESETS.find((x) => x.id === preset);
  const freq = p ? p.frequency : form.frequency.value;
  show('repeat', freq !== 'once');
  show('monthly', freq === 'monthly' || freq === 'yearly');
  form.querySelectorAll('.seg.radio label').forEach((lab) => lab.classList.toggle('active', lab.querySelector('input').checked));
  const ft = form.querySelector('[data-flow-types]');
  const current = ft.value;
  const opts = FLOW_TYPES[kind] || FLOW_TYPES.expense;
  ft.innerHTML = selectOptions(opts, opts.some(([v]) => v === current) ? current : 'fixed');
}

function readLineForm(form) {
  const fd = new FormData(form);
  const g = (k) => (fd.get(k) ?? '').toString().trim();
  const preset = g('preset');
  const p = E.FREQUENCY_PRESETS.find((x) => x.id === preset);
  const frequency = p ? p.frequency : g('frequency');
  const interval = p ? p.interval : Math.max(1, Number(g('interval')) || 1);
  const dayOpt = g('dayOpt');
  const isRange = form.isRange.checked;
  const changes = [];
  form.querySelectorAll('.changes .change-row').forEach((row) => {
    const v = (n) => row.querySelector(`[name=${n}]`).value.trim();
    if (!v('ch_from') && !v('ch_amount')) return;
    changes.push({ from: v('ch_from'), amount: Number(v('ch_amount')), amountMin: v('ch_min') === '' ? null : Number(v('ch_min')), amountMax: v('ch_max') === '' ? null : Number(v('ch_max')), note: v('ch_note') });
  });
  const existing = g('id') ? lineById(g('id')) : null;
  return {
    id: g('id') || S.uid('ln'),
    name: g('name'),
    kind: g('kind'),
    category: g('category') || 'Uncategorised',
    flowType: g('flowType') || 'fixed',
    accountId: g('accountId'),
    toAccountId: g('kind') === 'transfer' ? g('toAccountId') : null,
    amount: Number(g('amount')),
    amountMin: isRange && g('amountMin') !== '' ? Number(g('amountMin')) : null,
    amountMax: isRange && g('amountMax') !== '' ? Number(g('amountMax')) : null,
    annualGrowthPct: g('annualGrowthPct') === '' ? 0 : Number(g('annualGrowthPct')),
    schedule: {
      frequency,
      interval,
      start: g('start'),
      end: frequency === 'once' ? null : g('end') || null,
      dayOfMonth: frequency === 'monthly' || frequency === 'yearly' ? (dayOpt === 'start' ? null : dayOpt === 'last' ? 'last' : Number(dayOpt)) : null,
      weekendRule: frequency === 'once' ? 'none' : g('weekendRule') || 'none',
    },
    changes: changes.sort((a, b) => (a.from < b.from ? -1 : 1)),
    skips: existing ? existing.skips || [] : [],
    scenarioId: g('scenarioId') || null,
    active: existing ? existing.active !== false : true,
    notes: g('notes'),
  };
}

function txForm(spec) {
  const t = spec.tx || {
    date: spec.date || forecast.asOf, kind: spec.kind || 'expense', amount: spec.amount ?? '', accountId: spec.accountId || (state.accounts[0] || {}).id || '',
    toAccountId: spec.toAccountId || '', category: spec.category || '', description: spec.description || '', lineId: spec.lineId || '', flowType: spec.flowType || '',
  };
  return `${modalHead(spec.tx ? 'Edit transaction' : 'Record a transaction')}
  <form data-form="transaction" class="bg-form" novalidate>
    <input type="hidden" name="id" value="${esc(t.id || '')}">
    ${errorBox(spec.errors)}
    <div class="seg radio">
      ${[['expense', 'Spent'], ['income', 'Received'], ['transfer', 'Transfer']].map(([k, lab]) => `<label class="${t.kind === k ? 'active' : ''}"><input type="radio" name="kind" value="${k}" ${t.kind === k ? 'checked' : ''}>${lab}</label>`).join('')}
    </div>
    <div class="grid3">
      <label>Date <input name="date" type="date" value="${esc(t.date)}" required></label>
      <label>Amount (${esc(currencySymbol())}) <input name="amount" type="number" step="0.01" min="0" value="${esc(t.amount)}" required></label>
      <label>Description <input name="description" value="${esc(t.description || '')}" placeholder="e.g. Tesco"></label>
      <label data-show="account">Account <select name="accountId">${accountOptions(t.accountId)}</select></label>
      <label data-show="toAccount">To account <select name="toAccountId">${accountOptions(t.toAccountId, 'Choose destination')}</select></label>
      <label>Category <input name="category" list="cat-list-tx" value="${esc(t.category || '')}">${datalist('cat-list-tx')}</label>
      <label class="span3">Plan item this belongs to <select name="lineId" data-line-select>${lineOptions(t)}</select><small>Linking tells the forecast this planned item has happened, so it is not counted again.</small></label>
    </div>
    <div class="bg-actions"><button class="btn btn-primary" type="submit">${spec.tx ? 'Save' : 'Record'}</button>${spec.tx ? '' : '<button class="btn btn-secondary" type="submit" name="another" value="1">Record and add another</button>'}<button class="btn btn-secondary" type="button" data-action="close-modal">Cancel</button></div>
  </form>`;
}

function lineOptions(t) {
  const amt = Number(t.amount) || 0;
  const suggestions = E.suggestLines(state, { kind: t.kind, date: t.date || forecast.asOf, amount: amt, accountId: t.accountId }, 12);
  const suggestedIds = suggestions.filter((s) => s.score >= 2).map((s) => s.line.id);
  const lines = E.activeLines(state).filter((l) => l.kind === t.kind);
  const opts = [['', 'Not planned / one-off']];
  for (const id of suggestedIds) {
    const l = lineById(id);
    opts.push([l.id, `★ ${l.name} (${money0(E.amountAt(l, t.date || forecast.asOf).expected)} ${describeSchedule(l.schedule).toLowerCase()})`]);
  }
  for (const l of lines) if (!suggestedIds.includes(l.id)) opts.push([l.id, `${l.name} (${money0(E.amountAt(l, forecast.asOf).expected)})`]);
  return selectOptions(opts, t.lineId || '');
}

function syncTxForm(form) {
  const kind = form.kind.value;
  const show = (key, on) => form.querySelectorAll(`[data-show="${key}"]`).forEach((el) => (el.style.display = on ? '' : 'none'));
  show('toAccount', kind === 'transfer');
  form.querySelectorAll('.seg.radio label').forEach((lab) => lab.classList.toggle('active', lab.querySelector('input').checked));
  const sel = form.querySelector('[data-line-select]');
  const current = sel.value;
  sel.innerHTML = lineOptions({ kind, date: form.date.value, amount: form.amount.value, accountId: form.accountId.value, lineId: current });
  if (!sel.value && current && lineById(current) && lineById(current).kind === kind) sel.value = current;
}

function readTxForm(form) {
  const fd = new FormData(form);
  const g = (k) => (fd.get(k) ?? '').toString().trim();
  const kind = g('kind');
  const line = g('lineId') ? lineById(g('lineId')) : null;
  return {
    id: g('id') || S.uid('tx'),
    date: g('date'),
    kind,
    amount: Number(g('amount')),
    accountId: g('accountId'),
    toAccountId: kind === 'transfer' ? g('toAccountId') : null,
    category: g('category') || (line ? line.category : 'Uncategorised'),
    description: g('description') || (line ? line.name : ''),
    lineId: line ? line.id : null,
    flowType: line ? line.flowType : kind === 'expense' ? 'variable' : 'fixed',
  };
}

function accountForm(spec) {
  const a = spec.account || { name: '', type: 'current', openingBalance: '', openingDate: forecast.asOf, interestRate: '', creditLimit: '', notes: '' };
  return `${modalHead(spec.account ? 'Edit account' : 'Add account')}
  <form data-form="account" class="bg-form" novalidate>
    <input type="hidden" name="id" value="${esc(a.id || '')}">
    ${errorBox(spec.errors)}
    <div class="grid2">
      <label>Name <input name="name" value="${esc(a.name)}" required placeholder="e.g. Monzo current account"></label>
      <label>Type <select name="type">${selectOptions(E.ACCOUNT_TYPES.map((t) => [t.id, t.label]), a.type)}</select></label>
      <label>Opening balance (${esc(currencySymbol())}) <input name="openingBalance" type="number" step="0.01" value="${esc(a.openingBalance)}" required><small>For cards and loans enter what you owe as a negative number, e.g. -450.</small></label>
      <label>Balance as at <input name="openingDate" type="date" value="${esc(a.openingDate || '')}" required></label>
      <label>Interest rate % per year (optional) <input name="interestRate" type="number" step="0.01" value="${esc(a.interestRate ?? '')}"><small>Earned on savings, charged on debts. Applied monthly.</small></label>
      <label>Credit limit (cards) <input name="creditLimit" type="number" step="1" min="0" value="${esc(a.creditLimit ?? '')}"></label>
      <label class="span2">Notes <input name="notes" value="${esc(a.notes || '')}"></label>
    </div>
    <div class="bg-actions"><button class="btn btn-primary" type="submit">${spec.account ? 'Save' : 'Add account'}</button><button class="btn btn-secondary" type="button" data-action="close-modal">Cancel</button></div>
  </form>`;
}

function goalForm(spec) {
  const g = spec.goal || { name: '', accountId: (state.accounts.find((a) => a.type === 'savings') || state.accounts[0] || {}).id || '', target: '', targetDate: '' };
  return `${modalHead(spec.goal ? 'Edit goal' : 'Add goal')}
  <form data-form="goal" class="bg-form" novalidate>
    <input type="hidden" name="id" value="${esc(g.id || '')}">
    ${errorBox(spec.errors)}
    <div class="grid2">
      <label>Goal <input name="name" value="${esc(g.name)}" required placeholder="e.g. Emergency fund"></label>
      <label>Account to reach it in <select name="accountId">${accountOptions(g.accountId)}</select></label>
      <label>Target balance (${esc(currencySymbol())}) <input name="target" type="number" step="1" min="0" value="${esc(g.target)}" required></label>
      <label>Target date (optional) <input name="targetDate" type="date" value="${esc(g.targetDate || '')}"></label>
    </div>
    <div class="bg-actions"><button class="btn btn-primary" type="submit">Save</button><button class="btn btn-secondary" type="button" data-action="close-modal">Cancel</button></div>
  </form>`;
}

function scenarioForm(spec) {
  const s = spec.scenario || { name: '', notes: '', enabled: false };
  return `${modalHead(spec.scenario ? 'Edit scenario' : 'New scenario')}
  <form data-form="scenario" class="bg-form" novalidate>
    <input type="hidden" name="id" value="${esc(s.id || '')}">
    ${errorBox(spec.errors)}
    <label>Name <input name="name" value="${esc(s.name)}" required placeholder="e.g. Take the new job"></label>
    <label>Notes <input name="notes" value="${esc(s.notes || '')}"></label>
    <label class="check"><input type="checkbox" name="enabled" ${s.enabled ? 'checked' : ''}> Switched on (include in the forecast)</label>
    <div class="bg-actions"><button class="btn btn-primary" type="submit">Save</button><button class="btn btn-secondary" type="button" data-action="close-modal">Cancel</button></div>
  </form>`;
}

function balanceForm(spec) {
  const a = accById(spec.id);
  const now = forecast.startBalances[a.id] || 0;
  return `${modalHead(`Set balance: ${a.name}`)}
  <form data-form="balance" class="bg-form" novalidate>
    <input type="hidden" name="accountId" value="${esc(a.id)}">
    <p class="muted small">The app currently thinks this account holds <b>${esc(fmtMoney(now))}</b>. Enter the real balance and a correcting transaction will be recorded for the difference.</p>
    <div class="grid2">
      <label>Actual balance (${esc(currencySymbol())}) <input name="balance" type="number" step="0.01" value="${esc(now.toFixed(2))}" required></label>
      <label>As at <input name="date" type="date" value="${esc(forecast.asOf)}" required></label>
    </div>
    <div class="bg-actions"><button class="btn btn-primary" type="submit">Record correction</button><button class="btn btn-secondary" type="button" data-action="close-modal">Cancel</button></div>
  </form>`;
}

function csvForm(spec) {
  const c = ui.csv;
  if (!c) {
    return `${modalHead('Import transactions from CSV')}
    <form data-form="csv-file" class="bg-form" novalidate>
      <p class="muted small">Export a statement from your bank as CSV, then choose it here. You will map the columns on the next step. Transactions are added to the account you pick; money in is treated as income and money out as spending.</p>
      <label>CSV file <input type="file" name="file" accept=".csv,text/csv" required></label>
      <label>Into account <select name="accountId">${accountOptions((state.accounts[0] || {}).id)}</select></label>
      <div class="bg-actions"><button class="btn btn-primary" type="submit">Next</button><button class="btn btn-secondary" type="button" data-action="close-modal">Cancel</button></div>
    </form>`;
  }
  if (c.step === 'map') {
    const cols = c.headers.map((h, i) => [String(i), h || `Column ${i + 1}`]);
    const guess = (re) => {
      const i = c.headers.findIndex((h) => re.test(h));
      return i >= 0 ? String(i) : '';
    };
    return `${modalHead('Map the columns')}
    <form data-form="csv-map" class="bg-form" novalidate>
      <p class="muted small">${c.rows.length} rows found. First row: <code>${esc(c.rows[0].slice(0, 5).join(' | '))}</code></p>
      <div class="grid2">
        <label>Date column <select name="date">${selectOptions(cols, guess(/date/i))}</select></label>
        <label>Description column <select name="desc">${selectOptions(cols, guess(/desc|memo|narrative|details|name|merchant|reference/i), { placeholder: 'None' })}</select></label>
        <label>Amount column (signed: negative = money out) <select name="amount">${selectOptions(cols, guess(/^amount|^value|^sum/i), { placeholder: 'Use separate in/out columns' })}</select></label>
        <label>Category column (optional) <select name="category">${selectOptions(cols, guess(/categor/i), { placeholder: 'None' })}</select></label>
        <label>Money out column <select name="debit">${selectOptions(cols, guess(/debit|out|paid out|withdraw/i), { placeholder: 'None' })}</select></label>
        <label>Money in column <select name="credit">${selectOptions(cols, guess(/credit|paid in|deposit|money in/i), { placeholder: 'None' })}</select></label>
        <label class="check span2"><input type="checkbox" name="flip"> Amounts are the other way round (positive = money out)</label>
        <label class="check span2"><input type="checkbox" name="skipDupes" checked> Skip rows that look like transactions I already have (same date, amount and description)</label>
      </div>
      <div class="bg-actions"><button class="btn btn-primary" type="submit">Preview</button><button class="btn btn-secondary" type="button" data-action="close-modal">Cancel</button></div>
    </form>`;
  }
  // preview
  const lines = E.activeLines(state);
  return `${modalHead('Check and import')}
    <form data-form="csv-import" class="bg-form" novalidate>
      <p class="muted small">${c.preview.length} transactions ready for <b>${esc(accName(c.accountId))}</b>${c.skipped ? ` (${c.skipped} skipped as duplicates or unreadable)` : ''}. Untick any you do not want, and set categories or link to plan items.</p>
      <div class="table-scroll csv-preview"><table class="bg-table">
        <thead><tr><th></th><th>Date</th><th>Description</th><th class="num">Amount</th><th>Category</th><th>Plan item</th></tr></thead>
        <tbody>${c.preview.map((p, i) => `<tr>
          <td><input type="checkbox" name="inc_${i}" checked></td>
          <td>${esc(fmtDay(p.date))}</td><td>${esc(p.description)}</td>
          <td class="num ${p.kind === 'income' ? 'pos' : 'neg'}">${p.kind === 'income' ? '+' : '−'}${esc(fmtMoney(p.amount))}</td>
          <td><input name="cat_${i}" list="cat-list-csv" value="${esc(p.category)}"></td>
          <td><select name="line_${i}">${selectOptions([['', '—'], ...lines.filter((l) => l.kind === p.kind).map((l) => [l.id, l.name])], p.lineId || '')}</select></td>
        </tr>`).join('')}</tbody></table></div>
      ${datalist('cat-list-csv')}
      <div class="bg-actions"><button class="btn btn-primary" type="submit">Import ${c.preview.length} transactions</button><button class="btn btn-secondary" type="button" data-action="close-modal">Cancel</button></div>
    </form>`;
}

/* ------------------------------------------------------------
   Actions
   ------------------------------------------------------------ */
function guessCategory(desc, kind) {
  const d = (desc || '').toLowerCase();
  for (const l of E.activeLines(state)) if (l.kind === kind && d.includes(l.name.toLowerCase())) return { category: l.category, lineId: l.id };
  const rules = [
    [/tesco|sainsbury|asda|aldi|lidl|waitrose|morrisons|co-op|m&s food|iceland/, 'Groceries'],
    [/uber|tfl|trainline|rail|bus|petrol|shell|bp |esso|parking/, 'Transport'],
    [/netflix|spotify|disney|prime|apple\.com|youtube/, 'Subscriptions'],
    [/costa|starbucks|pret|greggs|cafe|coffee|restaurant|deliveroo|just eat|uber eats|mcdonald|kfc|nando/, 'Eating out'],
    [/rent|landlord|council tax/, 'Housing'],
    [/british gas|octopus|edf|eon|ovo|thames water|severn|anglian|bt |sky|virgin media|vodafone|ee |o2|three/, 'Utilities'],
    [/gym|puregym|boots|pharmacy|dentist|nhs/, 'Health & fitness'],
    [/amazon|argos|ebay|john lewis|ikea/, 'Shopping'],
    [/primark|h&m|zara|next|uniqlo|asos/, 'Clothing'],
    [/salary|payroll|wages|hmrc/, kind === 'income' ? 'Salary' : 'Other'],
    [/interest/, 'Other income'],
  ];
  for (const [re, cat] of rules) if (re.test(d)) return { category: cat, lineId: null };
  return { category: kind === 'income' ? 'Other income' : 'Other', lineId: null };
}

async function handleAction(action, el) {
  const id = el.dataset.id;
  switch (action) {
    case 'close-modal': closeModal(); break;
    case 'open-modal': {
      const type = el.dataset.modal;
      const spec = { type };
      if (type === 'line' && el.dataset.scenario) spec.scenario = el.dataset.scenario;
      if (type === 'balance') spec.id = id;
      if (type === 'apply-salary') {
        spec.net = el.dataset.net;
        spec.gross = el.dataset.gross;
        spec.afterLoan = el.dataset.afterLoan || '';
        spec.loanEnd = el.dataset.loanEnd || '';
        if (!state.accounts.length) {
          notice('Add an account first (Accounts & goals), so the salary has somewhere to be paid into.');
          return;
        }
      }
      if (type === 'csv') ui.csv = null;
      openModal(spec);
      break;
    }
    case 'load-sample':
      if (state.accounts.length || state.lines.length) {
        if (!(await ask('Replace your current data with the example? Export a backup first if you want to keep it.', { okLabel: 'Replace with example', danger: true }))) return;
      }
      state = sampleState();
      commit('Example data loaded');
      location.hash = '#dashboard';
      break;
    case 'reset-all':
      if (!(await ask('Delete all budget data from this browser? This cannot be undone.', { okLabel: 'Delete everything', danger: true }))) return;
      S.clear();
      state = S.emptyState();
      commit('All data deleted');
      break;
    case 'export-json':
      openModal({ type: 'export', title: 'Backup (JSON)', filename: `budget-backup-${E.today()}.json`, mime: 'application/json', text: S.exportJson(state), hint: 'Keep this somewhere safe. Paste it back in under Settings → Your data to restore, on any device.' });
      break;
    case 'import-text': {
      const ta = root.querySelector('#import-text');
      if (ta && ta.value.trim()) importBackupText(ta.value);
      else notice('Paste the contents of a backup file first.');
      break;
    }
    case 'copy-text': {
      const ta = el.closest('.modal-body').querySelector('textarea');
      try {
        await navigator.clipboard.writeText(ta.value);
        toast('Copied');
      } catch (e) {
        ta.focus();
        ta.select();
        toast('Press Ctrl+C / Cmd+C to copy');
      }
      break;
    }
    case 'download-text': {
      const ta = el.closest('.modal-body').querySelector('textarea');
      download(el.dataset.filename, ta.value, el.dataset.mime);
      break;
    }
    case 'export-csv': {
      const rows = [['date', 'kind', 'amount', 'account', 'to_account', 'category', 'description', 'plan_item']];
      for (const t of [...state.transactions].sort((a, b) => (a.date < b.date ? -1 : 1))) {
        rows.push([t.date, t.kind, t.amount, accName(t.accountId), t.toAccountId ? accName(t.toAccountId) : '', t.category || '', t.description || '', t.lineId ? (lineById(t.lineId) || {}).name || '' : '']);
      }
      openModal({ type: 'export', title: 'Transactions (CSV)', filename: `transactions-${E.today()}.csv`, mime: 'text/csv', text: S.toCsv(rows), hint: 'Paste into a spreadsheet, or download the file.' });
      break;
    }
    case 'budget-kind': ui.budget.kind = el.dataset.kind; render(); break;
    case 'reset-rules':
      delete state.settings.taxRules;
      ui.rulesOpen = true;
      commit('Tax rules reset to defaults');
      break;
    case 'edit-line': openModal({ type: 'line', line: lineById(id) }); break;
    case 'dup-line': {
      const l = lineById(id);
      const copy = JSON.parse(JSON.stringify(l));
      copy.id = S.uid('ln');
      copy.name = `${l.name} (copy)`;
      copy.skips = [];
      openModal({ type: 'line', line: copy, duplicate: true });
      break;
    }
    case 'toggle-line': {
      const l = lineById(id);
      l.active = l.active === false;
      commit(l.active ? 'Item resumed' : 'Item paused');
      break;
    }
    case 'delete-line': {
      const l = lineById(id);
      const linked = state.transactions.filter((t) => t.lineId === id).length;
      if (!(await ask(`Delete "${l.name}"?${linked ? ` ${linked} recorded transaction(s) will be unlinked but kept.` : ''}`, { okLabel: 'Delete', danger: true }))) return;
      state.lines = state.lines.filter((x) => x.id !== id);
      for (const t of state.transactions) if (t.lineId === id) t.lineId = null;
      commit('Item deleted');
      break;
    }
    case 'record-event': {
      const l = lineById(el.dataset.line);
      const a = E.amountAt(l, el.dataset.date);
      openModal({ type: 'transaction', date: el.dataset.date, kind: l.kind, amount: a.expected, accountId: l.accountId, toAccountId: l.toAccountId, category: l.category, description: l.name, lineId: l.id });
      break;
    }
    case 'skip-event': {
      const l = lineById(el.dataset.line);
      l.skips = [...new Set([...(l.skips || []), el.dataset.date])];
      commit('Skipped');
      break;
    }
    case 'unskip': {
      const form = el.closest('form');
      const l = lineById(form.id.value);
      if (l) {
        l.skips = (l.skips || []).filter((d) => d !== el.dataset.date);
        S.save(state);
        recompute();
        openModal({ type: 'line', line: l });
      }
      break;
    }
    case 'add-change': {
      const form = el.closest('form');
      const tpl = form.querySelector('#change-template');
      form.querySelector('.changes').insertAdjacentHTML('beforeend', tpl.innerHTML);
      break;
    }
    case 'remove-change': el.closest('.change-row').remove(); break;
    case 'edit-tx': openModal({ type: 'transaction', tx: state.transactions.find((t) => t.id === id) }); break;
    case 'delete-tx':
      if (!(await ask('Delete this transaction?', { okLabel: 'Delete', danger: true }))) return;
      state.transactions = state.transactions.filter((t) => t.id !== id);
      commit('Transaction deleted');
      break;
    case 'stmt-tab': ui.statements.tab = el.dataset.tab; render(); break;
    case 'stmt-period': ui.statements.periodType = el.dataset.period; render(); break;
    case 'stmt-nav': {
      const dir = Number(el.dataset.dir);
      const st = ui.statements;
      if (dir === 0) st.anchor = null;
      else {
        const anchor = st.anchor || forecast.asOf;
        st.anchor = E.addMonths(anchor, dir * (st.periodType === 'year' ? 12 : st.periodType === 'quarter' ? 3 : 1));
      }
      render();
      break;
    }
    case 'bs-quick': ui.statements.bsDate = el.dataset.date; ui.statements.bsCompare = null; render(); break;
    case 'avp-open': ui.avp.open = ui.avp.open === el.dataset.month ? null : el.dataset.month; render(); break;
    case 'edit-account': openModal({ type: 'account', account: accById(id) }); break;
    case 'delete-account': {
      const a = accById(id);
      const used = state.transactions.filter((t) => t.accountId === id || t.toAccountId === id).length + state.lines.filter((l) => l.accountId === id || l.toAccountId === id).length;
      if (used) {
        await notice(`"${a.name}" is used by ${used} transaction(s) or plan item(s). Move or delete those first.`);
        return;
      }
      if (!(await ask(`Delete account "${a.name}"?`, { okLabel: 'Delete', danger: true }))) return;
      state.accounts = state.accounts.filter((x) => x.id !== id);
      state.goals = state.goals.filter((g) => g.accountId !== id);
      commit('Account deleted');
      break;
    }
    case 'edit-goal': openModal({ type: 'goal', goal: state.goals.find((g) => g.id === id) }); break;
    case 'delete-goal':
      if (!(await ask('Delete this goal?', { okLabel: 'Delete', danger: true }))) return;
      state.goals = state.goals.filter((g) => g.id !== id);
      commit('Goal deleted');
      break;
    case 'edit-scenario': openModal({ type: 'scenario', scenario: state.scenarios.find((s) => s.id === id) }); break;
    case 'delete-scenario': {
      const n = state.lines.filter((l) => l.scenarioId === id).length;
      if (!(await ask(`Delete this scenario${n ? ` and its ${n} item(s)` : ''}?`, { okLabel: 'Delete', danger: true }))) return;
      state.scenarios = state.scenarios.filter((s) => s.id !== id);
      state.lines = state.lines.filter((l) => l.scenarioId !== id);
      commit('Scenario deleted');
      break;
    }
    default: break;
  }
}

async function handleChange(key, el) {
  switch (key) {
    case 'cf-months': ui.cashflow.months = Number(el.value); render(); break;
    case 'cf-account': ui.cashflow.account = el.value; render(); break;
    case 'cf-band': ui.cashflow.band = el.checked; render(); break;
    case 'tx-month': ui.tx.month = el.value; render(); break;
    case 'tx-account': ui.tx.account = el.value; render(); break;
    case 'tx-kind': ui.tx.kind = el.value; render(); break;
    case 'bs-date': ui.statements.bsDate = el.value || null; render(); break;
    case 'bs-compare': ui.statements.bsCompare = el.value || null; render(); break;
    case 'avp-months': ui.avp.months = Number(el.value); render(); break;
    case 'scenario-toggle': {
      const sc = state.scenarios.find((s) => s.id === el.dataset.id);
      sc.enabled = el.checked;
      commit(sc.enabled ? `"${sc.name}" switched on` : `"${sc.name}" switched off`);
      break;
    }
    case 'import-json': {
      const file = el.files && el.files[0];
      if (!file) return;
      importBackupText(await file.text());
      break;
    }
    default: break;
  }
}

async function handleSubmit(form) {
  const type = form.dataset.form;
  if (type === 'line') {
    const line = readLineForm(form);
    const errors = E.validateLine(line, state);
    if (errors.length) {
      openModal({ ...ui.modal, line, errors });
      return;
    }
    const idx = state.lines.findIndex((l) => l.id === line.id);
    if (idx >= 0) state.lines[idx] = line;
    else state.lines.push(line);
    closeModal();
    commit(idx >= 0 ? 'Item saved' : 'Item added');
  } else if (type === 'transaction') {
    const tx = readTxForm(form);
    const errors = E.validateTransaction(tx, state);
    if (errors.length) {
      openModal({ ...ui.modal, tx: { ...tx, id: ui.modal.tx ? tx.id : '' }, errors });
      return;
    }
    const idx = state.transactions.findIndex((t) => t.id === tx.id);
    if (idx >= 0) state.transactions[idx] = tx;
    else state.transactions.push(tx);
    const another = form.querySelector('[name=another]') && document.activeElement && document.activeElement.name === 'another';
    closeModal();
    commit(idx >= 0 ? 'Transaction saved' : 'Transaction recorded');
    if (another) openModal({ type: 'transaction', date: tx.date, kind: tx.kind, accountId: tx.accountId });
  } else if (type === 'account') {
    const fd = new FormData(form);
    const g = (k) => (fd.get(k) ?? '').toString().trim();
    const acc = {
      id: g('id') || S.uid('acc'),
      name: g('name'),
      type: g('type'),
      openingBalance: Number(g('openingBalance')) || 0,
      openingDate: g('openingDate') || forecast.asOf,
      interestRate: g('interestRate') === '' ? 0 : Number(g('interestRate')),
      creditLimit: g('creditLimit') === '' ? null : Number(g('creditLimit')),
      notes: g('notes'),
    };
    const errors = [];
    if (!acc.name) errors.push('Give the account a name.');
    if (errors.length) {
      openModal({ ...ui.modal, account: acc, errors });
      return;
    }
    const idx = state.accounts.findIndex((a) => a.id === acc.id);
    if (idx >= 0) state.accounts[idx] = acc;
    else state.accounts.push(acc);
    closeModal();
    commit(idx >= 0 ? 'Account saved' : 'Account added');
  } else if (type === 'goal') {
    const fd = new FormData(form);
    const g = (k) => (fd.get(k) ?? '').toString().trim();
    const goal = { id: g('id') || S.uid('goal'), name: g('name'), accountId: g('accountId'), target: Number(g('target')) || 0, targetDate: g('targetDate') || null };
    const errors = [];
    if (!goal.name) errors.push('Give the goal a name.');
    if (!goal.accountId) errors.push('Choose an account.');
    if (!(goal.target > 0)) errors.push('Target must be more than zero.');
    if (errors.length) {
      openModal({ ...ui.modal, goal, errors });
      return;
    }
    const idx = state.goals.findIndex((x) => x.id === goal.id);
    if (idx >= 0) state.goals[idx] = goal;
    else state.goals.push(goal);
    closeModal();
    commit('Goal saved');
  } else if (type === 'scenario') {
    const fd = new FormData(form);
    const g = (k) => (fd.get(k) ?? '').toString().trim();
    const sc = { id: g('id') || S.uid('sc'), name: g('name'), notes: g('notes'), enabled: form.enabled.checked };
    if (!sc.name) {
      openModal({ ...ui.modal, scenario: sc, errors: ['Give the scenario a name.'] });
      return;
    }
    const idx = state.scenarios.findIndex((x) => x.id === sc.id);
    if (idx >= 0) state.scenarios[idx] = sc;
    else state.scenarios.push(sc);
    closeModal();
    commit('Scenario saved');
  } else if (type === 'balance') {
    const fd = new FormData(form);
    const accountId = fd.get('accountId');
    const date = fd.get('date') || forecast.asOf;
    const target = Number(fd.get('balance'));
    const current = E.actualBalances(state, date)[accountId] || 0;
    const diff = Math.round((target - current) * 100) / 100;
    if (Math.abs(diff) < 0.005) {
      closeModal();
      toast('Balance already matches');
      return;
    }
    state.transactions.push({ id: S.uid('tx'), date, kind: diff > 0 ? 'income' : 'expense', amount: Math.abs(diff), accountId, category: 'Balance adjustment', description: 'Balance correction', lineId: null, flowType: 'irregular' });
    closeModal();
    commit(`Balance corrected by ${fmtMoney(diff, { signed: true })}`);
  } else if (type === 'settings') {
    const fd = new FormData(form);
    const g = (k) => (fd.get(k) ?? '').toString().trim();
    const s = state.settings;
    s.currency = (g('currency') || 'GBP').toUpperCase();
    s.locale = g('locale') || 'en-GB';
    s.horizonMonths = Number(g('horizonMonths')) || 12;
    s.safetyBuffer = Number(g('safetyBuffer')) || 0;
    s.periodStartDay = Math.max(1, Math.min(28, Number(g('periodStartDay')) || 1));
    s.matchWindowDays = Math.max(0, Number(g('matchWindowDays')) || 0);
    s.overdueMode = g('overdueMode') || 'tracked';
    s.overdueLookbackDays = Math.max(0, Number(g('overdueLookbackDays')) || 0);
    s.asOf = g('asOf') || null;
    try {
      new Intl.NumberFormat(s.locale, { style: 'currency', currency: s.currency });
    } catch (e) {
      await notice('That currency code or locale is not recognised.');
      return;
    }
    ui.cashflow.months = s.horizonMonths;
    commit('Settings saved');
  } else if (type === 'taxrules') {
    const fd = new FormData(form);
    const overrides = {};
    for (const [path, , kind] of T.ruleFields()) {
      const raw = (fd.get(path) ?? '').toString().trim();
      const def = T.getPath(T.DEFAULT_RULES, path);
      let v;
      if (kind === 'text') v = raw || def;
      else if (raw === '') v = def;
      else v = kind === 'pct' ? Number(raw) / 100 : Number(raw);
      if (Number.isNaN(v)) v = def;
      if (v !== def) overrides[path] = v;
    }
    state.settings.taxRules = overrides;
    ui.rulesOpen = true;
    commit('Tax rules saved');
  } else if (type === 'takehome') {
    refreshTakeHome(form);
  } else if (type === 'apply-salary') {
    const fd = new FormData(form);
    const g = (k) => (fd.get(k) ?? '').toString().trim();
    const net = Math.round(Number(g('net')) * 100) / 100;
    const from = g('from') || forecast.asOf;
    const target = g('target');
    const bump = form.loanBump && form.loanBump.checked && g('afterLoan') && g('loanEnd') > from
      ? { from: g('loanEnd'), amount: Math.round(Number(g('afterLoan')) * 100) / 100, amountMin: null, amountMax: null, note: 'Company loan repaid' }
      : null;
    if (target === 'new') {
      const payday = g('payday');
      state.lines.push({
        id: S.uid('ln'), name: 'Salary (net)', kind: 'income', category: 'Salary', flowType: 'fixed', accountId: g('accountId'), toAccountId: null,
        amount: net, amountMin: null, amountMax: null, annualGrowthPct: 0,
        schedule: { frequency: 'monthly', interval: 1, start: from, end: null, dayOfMonth: payday === 'last' ? 'last' : Number(payday), weekendRule: 'previous' },
        changes: bump ? [bump] : [], skips: [], scenarioId: null, active: true, notes: 'From the take-home pay calculator',
      });
      closeModal();
      commit('Salary item added to the budget');
    } else {
      const line = lineById(target);
      if (!line) return;
      if (from <= line.schedule.start) {
        line.amount = net;
        line.amountMin = null;
        line.amountMax = null;
        line.changes = (line.changes || []).filter((c) => c.from > from);
      } else {
        line.changes = (line.changes || []).filter((c) => c.from !== from);
        line.changes.push({ from, amount: net, amountMin: null, amountMax: null, note: 'From the take-home pay calculator' });
      }
      if (bump) {
        line.changes = (line.changes || []).filter((c) => c.from !== bump.from);
        line.changes.push(bump);
      }
      line.changes.sort((a, b) => (a.from < b.from ? -1 : 1));
      closeModal();
      commit(`"${line.name}" updated`);
    }
  } else if (type === 'csv-file') {
    const file = form.file.files && form.file.files[0];
    const accountId = form.accountId.value;
    if (!file) return;
    file.text().then((text) => {
      const rows = S.parseCsv(text);
      if (rows.length < 2) {
        notice('The file needs a header row and at least one transaction.');
        return;
      }
      ui.csv = { step: 'map', headers: rows[0].map((h) => h.trim()), rows: rows.slice(1), accountId };
      openModal({ type: 'csv' });
    });
  } else if (type === 'csv-map') {
    const c = ui.csv;
    const fd = new FormData(form);
    const col = (k) => {
      const v = fd.get(k);
      return v === '' || v == null ? -1 : Number(v);
    };
    const flip = form.flip.checked;
    const skipDupes = form.skipDupes.checked;
    const existing = new Set(state.transactions.map((t) => `${t.date}|${Number(t.amount).toFixed(2)}|${(t.description || '').toLowerCase()}`));
    const preview = [];
    let skipped = 0;
    for (const r of c.rows) {
      const date = S.parseLooseDate(r[col('date')]);
      let amount = null;
      if (col('amount') >= 0) amount = S.parseAmount(r[col('amount')]);
      else {
        const d = col('debit') >= 0 ? S.parseAmount(r[col('debit')]) : null;
        const cr = col('credit') >= 0 ? S.parseAmount(r[col('credit')]) : null;
        if (d) amount = -Math.abs(d);
        else if (cr) amount = Math.abs(cr);
      }
      if (!date || amount == null || amount === 0) {
        skipped++;
        continue;
      }
      if (flip) amount = -amount;
      const kind = amount > 0 ? 'income' : 'expense';
      const description = col('desc') >= 0 ? r[col('desc')].trim() : '';
      const guess = guessCategory(description, kind);
      const category = col('category') >= 0 && r[col('category')].trim() ? r[col('category')].trim() : guess.category;
      const key = `${date}|${Math.abs(amount).toFixed(2)}|${description.toLowerCase()}`;
      if (skipDupes && existing.has(key)) {
        skipped++;
        continue;
      }
      preview.push({ date, kind, amount: Math.abs(amount), description, category, lineId: guess.lineId });
    }
    preview.sort((a, b) => (a.date < b.date ? -1 : 1));
    ui.csv = { ...c, step: 'preview', preview, skipped };
    openModal({ type: 'csv' });
  } else if (type === 'csv-import') {
    const c = ui.csv;
    let n = 0;
    c.preview.forEach((p, i) => {
      if (!form[`inc_${i}`].checked) return;
      const lineId = form[`line_${i}`].value || null;
      const line = lineId ? lineById(lineId) : null;
      state.transactions.push({
        id: S.uid('tx'), date: p.date, kind: p.kind, amount: p.amount, accountId: c.accountId, toAccountId: null,
        category: form[`cat_${i}`].value.trim() || p.category, description: p.description, lineId, flowType: line ? line.flowType : p.kind === 'expense' ? 'variable' : 'fixed',
      });
      n++;
    });
    closeModal();
    commit(`${n} transactions imported`);
  }
}

/* ------------------------------------------------------------
   Wiring
   ------------------------------------------------------------ */
function routeFromHash() {
  const h = (location.hash || '').replace(/^#\/?/, '');
  ui.view = VIEWS.some(([id]) => id === h) ? h : 'dashboard';
}

document.addEventListener('click', (ev) => {
  const el = ev.target.closest('[data-action]');
  if (!el || !root.contains(el)) return;
  ev.preventDefault();
  handleAction(el.dataset.action, el);
});
document.addEventListener('change', (ev) => {
  const el = ev.target;
  if (!root.contains(el)) return;
  if (el.dataset.change) handleChange(el.dataset.change, el);
  if (el.closest('form[data-form="takehome"]')) refreshTakeHome(el.closest('form'));
  const form = el.closest('form');
  if (form && form.dataset.form === 'line') syncLineForm(form);
  if (form && form.dataset.form === 'transaction') syncTxForm(form);
});
let searchTimer = null;
document.addEventListener('input', (ev) => {
  const el = ev.target;
  const thForm = el.closest && el.closest('form[data-form="takehome"]');
  if (thForm) {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => refreshTakeHome(thForm), 250);
    return;
  }
  if (!el.dataset || !el.dataset.input) return;
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    if (el.dataset.input === 'budget-search') ui.budget.search = el.value;
    if (el.dataset.input === 'tx-search') ui.tx.search = el.value;
    const pos = el.selectionStart;
    render();
    const again = root.querySelector(`[data-input="${el.dataset.input}"]`);
    if (again) {
      again.focus();
      try { again.setSelectionRange(pos, pos); } catch (e) { /* ignore */ }
    }
  }, 200);
});
document.addEventListener('submit', (ev) => {
  const form = ev.target;
  if (!form.dataset || !form.dataset.form || !root.contains(form)) return;
  ev.preventDefault();
  handleSubmit(form);
});
document.addEventListener('toggle', (ev) => {
  if (ev.target && ev.target.classList && ev.target.classList.contains('rules-editor')) ui.rulesOpen = ev.target.open;
}, true);
document.addEventListener('keydown', (ev) => {
  if (ev.key === 'Escape' && ui.modal && !(document.getElementById('bg-confirm') || {}).open) {
    ev.preventDefault();
    closeModal();
  }
});
document.addEventListener('close', (ev) => {
  if (ev.target && ev.target.id === 'bg-modal') ui.modal = null;
}, true);
window.addEventListener('hashchange', () => {
  routeFromHash();
  closeModal();
  render();
  window.scrollTo({ top: root.offsetTop - 80, behavior: 'smooth' });
});

if (!state) {
  state = S.emptyState();
}
routeFromHash();
recompute();
render();
