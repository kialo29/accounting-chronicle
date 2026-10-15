// ---------------------------------------------------------------
// app.js – shell, router, onboarding
// ---------------------------------------------------------------
import { h, clear, setLocale, btn, confirmDialog } from './util.js';
import { store } from './store.js';
import { overdueInvoices, unbilledTime } from './calc.js';
import { BUSINESS_TYPES } from './templates.js';
import { orderForm, expenseForm, invoiceForm, customerForm, productForm, timeForm, taskForm } from './forms.js';
import { renderOnboarding } from './views/onboarding.js';
import dashboard from './views/dashboard.js';
import sales from './views/sales.js';
import delivery from './views/delivery.js';
import invoices from './views/invoices.js';
import products from './views/products.js';
import customers from './views/customers.js';
import expenses from './views/expenses.js';
import time from './views/time.js';
import tasks from './views/tasks.js';
import reports from './views/reports.js';
import settings from './views/settings.js';

const VIEWS = { dashboard, sales, delivery, invoices, products, customers, expenses, time, tasks, reports, settings };

const main = document.getElementById('main');
const nav = document.getElementById('nav');
let current = 'dashboard';
let currentParam = null;

function navItems() {
  const t = store.type; const s = store.state;
  const overdue = overdueInvoices(s).length;
  const openTasks = s.tasks.filter(x => !x.done && x.due && x.due <= new Date().toISOString().slice(0, 10)).length;
  const items = [
    { key: 'dashboard', label: 'Dashboard', ic: '◫' },
    { sep: 'Money' },
    { key: 'sales', label: t.salesLabel, ic: '🧾' },
    { key: 'invoices', label: 'Invoices', ic: '📄', badge: overdue ? { n: overdue, warn: true } : null },
    { key: 'expenses', label: 'Expenses', ic: '💳' },
    { sep: 'Run it' },
    { key: 'products', label: 'Products & pricing', ic: '🏷️' },
    { key: 'customers', label: t.customerLabel, ic: '👥' },
    { key: 'delivery', label: 'Delivery', ic: '📦' },
    { key: 'tasks', label: 'Tasks & processes', ic: '✅', badge: openTasks ? { n: openTasks } : null },
    { key: 'time', label: 'Time', ic: '⏱️', badge: s.timer ? { n: '●' } : null },
    { sep: 'Insight' },
    { key: 'reports', label: 'Reports & tax', ic: '📈' },
    { key: 'settings', label: 'Settings', ic: '⚙️' },
  ];
  return items;
}

function renderNav() {
  clear(nav);
  for (const it of navItems()) {
    if (it.sep) { nav.appendChild(h('div.nav-sep', it.sep)); continue; }
    nav.appendChild(h('a', { href: '#' + it.key, class: it.key === current ? 'active' : '', 'aria-current': it.key === current ? 'page' : null },
      h('span.ic', { 'aria-hidden': 'true' }, it.ic), it.label, it.badge ? h('span.badge', { class: it.badge.warn ? 'warnb' : '' }, it.badge.n) : null));
  }
  document.getElementById('brand-name').textContent = store.settings.businessName || 'Hustle HQ';
  document.getElementById('brand-sub').textContent = store.settings.businessName ? 'Hustle HQ' : 'Side hustle HQ';
}

export function navigate(key, param) {
  location.hash = param ? `${key}/${param}` : key;
}

function quickAdd() {
  const t = store.type;
  const items = [
    { label: `New ${t.salesLabel.replace(/s$/, '').toLowerCase()}`, onClick: () => orderForm(null, () => navigate('sales')) },
    { label: 'New invoice', onClick: () => invoiceForm(null, () => navigate('invoices')) },
    { label: 'Record expense', onClick: () => expenseForm(null) },
    { label: 'Log time', onClick: () => timeForm(null) },
    { label: 'Add product / service', onClick: () => productForm(null) },
    { label: `Add ${t.customerLabel.replace(/s$/, '').toLowerCase()}`, onClick: () => customerForm(null) },
    { label: 'Add task', onClick: () => taskForm(null) },
  ];
  const list = h('div.menu-list', { hidden: true }, items.map(it => h('button', { type: 'button', onClick: e => { e.stopPropagation(); list.hidden = true; it.onClick(); } }, it.label)));
  const button = h('button.btn.btn-primary', { type: 'button', 'aria-haspopup': 'true', onClick: e => { e.stopPropagation(); const open = !list.hidden; document.querySelectorAll('.menu-list').forEach(x => x.hidden = true); list.hidden = open; } }, '+ Add');
  return h('div.menu', button, list);
}

function render() {
  const s = store.state;
  setLocale(s.settings.currency, s.settings.locale);
  renderNav();
  clear(main);
  if (!s.settings.onboarded) { document.getElementById('rail').hidden = true; main.appendChild(renderOnboarding(() => { document.getElementById('rail').hidden = false; navigate('dashboard'); render(); })); return; }
  document.getElementById('rail').hidden = false;
  const view = VIEWS[current] || dashboard;
  const param = currentParam; currentParam = null; // params are one-shot (e.g. open an invoice once)
  const ctx = { store, state: s, navigate, param, type: store.type };
  const head = h('div.topbar',
    h('div.title', h('h1', typeof view.title === 'function' ? view.title(ctx) : view.title), view.subtitle ? h('small', view.subtitle(ctx)) : null),
    h('div.topbar-actions', ...(view.actions ? view.actions(ctx) : []), quickAdd()),
  );
  main.appendChild(head);
  if (s.settings.demo) main.appendChild(h('div.notice', h('span', 'You are looking at sample data. Clear it when you are ready to add your own.'), btn('Start fresh', async () => { if (await confirmDialog('Remove the sample data and start with an empty workspace? Your business settings are kept.', { okText: 'Start fresh' })) { const keep = { ...s.settings, demo: false }; store.reset(); store.setSettings({ ...keep, nextInvoiceNo: 1, nextOrderNo: 1 }); store.applyTemplate(keep.type, { seedProducts: false }); render(); } }, 'btn-sm')));
  try { main.appendChild(view.render(ctx)); }
  catch (err) { console.error(err); main.appendChild(h('div.card', h('h2', 'Something went wrong on this page'), h('p.muted', String(err.message || err)))); }
  document.title = `${typeof view.title === 'function' ? view.title(ctx) : view.title} · ${s.settings.businessName || 'Hustle HQ'}`;
  window.scrollTo({ top: 0 });
}

function route() {
  const hash = location.hash.replace(/^#/, '') || 'dashboard';
  const [key, param] = hash.split('/');
  current = VIEWS[key] ? key : 'dashboard';
  currentParam = param || null;
  render();
}

// theme toggle
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
  const root = document.documentElement;
  const cur = root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = cur === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('hustlehq.theme', next); } catch {}
});

// keyboard shortcuts: n = new sale, e = expense, / = search focus
document.addEventListener('keydown', e => {
  if (e.target.matches('input,textarea,select') || e.metaKey || e.ctrlKey || e.altKey) return;
  if (document.querySelector('.modal-back')) return;
  if (e.key === 'n') orderForm(null, () => navigate('sales'));
  if (e.key === 'e') expenseForm(null);
  if (e.key === '/') { const s = document.querySelector('input[type=search]'); if (s) { e.preventDefault(); s.focus(); } }
});

window.addEventListener('hashchange', route);
store.subscribe(() => {
  if (!store.state.settings.onboarded && document.querySelector('.onboard')) return; // onboarding redraws itself
  if (!document.querySelector('.modal-back')) render(); else document.body.dataset.pending = '1';
});
// re-render after a modal closes if a change happened while it was open
const obs = new MutationObserver(() => { if (!document.querySelector('.modal-back') && document.body.dataset.pending) { delete document.body.dataset.pending; render(); } });
obs.observe(document.body, { childList: true });

store.materializeRecurring();
route();
