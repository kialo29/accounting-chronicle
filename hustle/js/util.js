// ---------------------------------------------------------------
// util.js – tiny DOM builder, formatting, modals, toasts, forms
// ---------------------------------------------------------------

export function uid(prefix = '') {
  const t = Date.now().toString(36);
  const r = Math.random().toString(36).slice(2, 8);
  return prefix + t + r;
}

/** h('div.cls#id', {attrs}, ...children) – builds DOM nodes without innerHTML */
export function h(tag, attrs, ...children) {
  if (attrs && (attrs instanceof Node || typeof attrs !== 'object' || Array.isArray(attrs))) {
    children.unshift(attrs);
    attrs = null;
  }
  const m = /^([a-z0-9-]+)?((?:[.#][\w-]+)*)$/i.exec(tag) || [];
  const el = document.createElement(m[1] || 'div');
  if (m[2]) {
    for (const part of m[2].match(/[.#][\w-]+/g) || []) {
      if (part[0] === '.') el.classList.add(part.slice(1));
      else el.id = part.slice(1);
    }
  }
  if (attrs) {
    for (const [k, v] of Object.entries(attrs)) {
      if (v === null || v === undefined || v === false) continue;
      if (k === 'class') el.className += (el.className ? ' ' : '') + v;
      else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
      else if (k === 'dataset') Object.assign(el.dataset, v);
      else if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v);
      else if (k === 'html') el.innerHTML = v; // trusted, static strings only
      else if (k in el && typeof v !== 'string' && k !== 'value') el[k] = v;
      else if (k === 'value') el.value = v;
      else if (k === 'checked' || k === 'selected' || k === 'disabled' || k === 'required') { if (v) el.setAttribute(k, ''); el[k] = !!v; }
      else el.setAttribute(k, v === true ? '' : v);
    }
  }
  append(el, children);
  return el;
}

export function append(el, children) {
  for (const c of children.flat(Infinity)) {
    if (c === null || c === undefined || c === false) continue;
    el.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
  }
  return el;
}

export function clear(el) { while (el.firstChild) el.removeChild(el.firstChild); return el; }
/** replaceChildren that drops null/false children instead of printing "null" */
export function setChildren(el, ...children) { clear(el); return append(el, children); }

export function svg(tag, attrs, ...children) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tag);
  if (attrs) for (const [k, v] of Object.entries(attrs)) {
    if (v === null || v === undefined || v === false) continue;
    if (k.startsWith('on') && typeof v === 'function') el.addEventListener(k.slice(2).toLowerCase(), v);
    else el.setAttribute(k, v);
  }
  for (const c of children.flat(Infinity)) {
    if (c === null || c === undefined || c === false) continue;
    el.appendChild(c instanceof Node ? c : document.createTextNode(String(c)));
  }
  return el;
}

// ---------- formatting ----------
let _currency = 'GBP';
let _locale = 'en-GB';
export function setLocale(currency, locale) { _currency = currency || 'GBP'; _locale = locale || 'en-GB'; }
export function currencySymbol() {
  try { return (0).toLocaleString(_locale, { style: 'currency', currency: _currency, minimumFractionDigits: 0, maximumFractionDigits: 0 }).replace(/\d/g, '').trim(); }
  catch { return _currency; }
}
export const fmt = {
  money(n, opts = {}) {
    const v = Number(n) || 0;
    try {
      return v.toLocaleString(_locale, { style: 'currency', currency: _currency, minimumFractionDigits: opts.compact ? 0 : 2, maximumFractionDigits: opts.compact ? 0 : 2 });
    } catch { return `${_currency} ${v.toFixed(2)}`; }
  },
  num(n, dp = 0) { return (Number(n) || 0).toLocaleString(_locale, { minimumFractionDigits: dp, maximumFractionDigits: dp }); },
  pct(n, dp = 0) { if (!isFinite(n)) return '–'; return (Number(n) * 100).toFixed(dp) + '%'; },
  date(iso, style = 'medium') {
    if (!iso) return '';
    const d = typeof iso === 'string' ? parseDate(iso) : iso;
    if (!d || isNaN(d)) return '';
    if (style === 'short') return d.toLocaleDateString(_locale, { day: 'numeric', month: 'short' });
    if (style === 'month') return d.toLocaleDateString(_locale, { month: 'short', year: 'numeric' });
    if (style === 'long') return d.toLocaleDateString(_locale, { day: 'numeric', month: 'long', year: 'numeric' });
    return d.toLocaleDateString(_locale, { day: 'numeric', month: 'short', year: 'numeric' });
  },
  hours(minutes) {
    const m = Math.round(minutes || 0);
    const hh = Math.floor(m / 60), mm = m % 60;
    return hh ? `${hh}h ${String(mm).padStart(2, '0')}m` : `${mm}m`;
  },
  rel(iso) {
    const d = parseDate(iso); if (!d) return '';
    const days = Math.round((startOfDay(d) - startOfDay(new Date())) / 86400000);
    if (days === 0) return 'Today';
    if (days === 1) return 'Tomorrow';
    if (days === -1) return 'Yesterday';
    if (days < 0) return `${-days} days ago`;
    return `In ${days} days`;
  },
};

// ---------- dates (all stored as YYYY-MM-DD) ----------
export function parseDate(iso) {
  if (!iso) return null;
  if (iso instanceof Date) return iso;
  const [y, m, d] = String(iso).slice(0, 10).split('-').map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
}
export function toISO(d = new Date()) {
  const dt = d instanceof Date ? d : parseDate(d);
  return `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`;
}
export function today() { return toISO(new Date()); }
export function startOfDay(d) { const x = new Date(d); x.setHours(0, 0, 0, 0); return x; }
export function addDays(iso, n) { const d = parseDate(iso); d.setDate(d.getDate() + n); return toISO(d); }
export function addMonths(iso, n) { const d = parseDate(iso); const day = d.getDate(); d.setDate(1); d.setMonth(d.getMonth() + n); d.setDate(Math.min(day, daysInMonth(d))); return toISO(d); }
export function daysInMonth(d) { return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate(); }
export function monthKey(iso) { return String(iso || '').slice(0, 7); }
export function monthLabel(key) { const [y, m] = key.split('-').map(Number); return new Date(y, m - 1, 1).toLocaleDateString(_locale, { month: 'short', year: '2-digit' }); }
export function lastMonths(n, endIso = today()) {
  const out = []; const d = parseDate(endIso); d.setDate(1);
  for (let i = n - 1; i >= 0; i--) { const x = new Date(d.getFullYear(), d.getMonth() - i, 1); out.push(toISO(x).slice(0, 7)); }
  return out;
}
export function isOverdue(iso) { return !!iso && iso < today(); }

// ---------- misc ----------
export const sum = (arr, fn = x => x) => arr.reduce((a, x) => a + (Number(fn(x)) || 0), 0);
export const by = key => (a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
export const byDesc = key => (a, b) => (a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0);
export const round2 = n => Math.round((Number(n) || 0) * 100) / 100;
export const clamp = (n, a, b) => Math.min(b, Math.max(a, n));
export function groupBy(arr, fn) { const m = new Map(); for (const x of arr) { const k = fn(x); if (!m.has(k)) m.set(k, []); m.get(k).push(x); } return m; }
export function escapeCSV(v) { const s = v === null || v === undefined ? '' : String(v); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; }
export function toCSV(rows, headers) { return [headers.map(escapeCSV).join(','), ...rows.map(r => r.map(escapeCSV).join(','))].join('\n'); }

export function downloadFile(name, content, type = 'text/plain') {
  try {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = h('a', { href: url, download: name });
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    return true;
  } catch { return false; }
}

export async function copyText(text) {
  try { await navigator.clipboard.writeText(text); return true; }
  catch {
    try {
      const ta = h('textarea', { value: text, style: { position: 'fixed', opacity: 0 } });
      document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); return true;
    } catch { return false; }
  }
}

export function debounce(fn, ms = 200) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; }

// ---------- toasts ----------
export function toast(msg, kind = 'ok') {
  let host = document.getElementById('toasts');
  if (!host) { host = h('div#toasts'); document.body.appendChild(host); }
  const t = h('div.toast', { class: kind, role: 'status' }, msg);
  host.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 3200);
}

// ---------- modals ----------
export function openModal({ title, body, footer, size = 'md', onClose }) {
  const back = h('div.modal-back', { role: 'dialog', 'aria-modal': 'true', 'aria-label': title });
  const panel = h('div.modal', { class: `modal-${size}` });
  const close = () => { back.classList.remove('show'); setTimeout(() => back.remove(), 180); document.removeEventListener('keydown', esc); onClose && onClose(); };
  const esc = e => { if (e.key === 'Escape') close(); };
  const head = h('div.modal-head', h('h2', title), h('button.icon-btn', { type: 'button', 'aria-label': 'Close', onClick: close }, '✕'));
  const bodyEl = h('div.modal-body', body);
  panel.append(head, bodyEl);
  if (footer) panel.append(h('div.modal-foot', footer));
  back.append(panel);
  back.addEventListener('mousedown', e => { if (e.target === back) close(); });
  document.addEventListener('keydown', esc);
  document.body.appendChild(back);
  requestAnimationFrame(() => { back.classList.add('show'); const f = panel.querySelector('input,select,textarea,button:not(.icon-btn)'); f && f.focus(); });
  return { close, panel, body: bodyEl };
}

export function confirmDialog(message, { okText = 'Delete', danger = true, title = 'Are you sure?' } = {}) {
  return new Promise(resolve => {
    const m = openModal({
      title, size: 'sm',
      body: h('p', message),
      footer: [
        h('button.btn.btn-ghost', { type: 'button', onClick: () => { m.close(); resolve(false); } }, 'Cancel'),
        h('button.btn', { type: 'button', class: danger ? 'btn-danger' : 'btn-primary', onClick: () => { m.close(); resolve(true); } }, okText),
      ],
    });
  });
}

// ---------- forms ----------
export function field(label, control, hint) {
  const id = control.id || (control.id = uid('f_'));
  return h('label.field', { for: id }, h('span.field-label', label), control, hint ? h('span.field-hint', hint) : null);
}
export function input(attrs = {}) {
  const a = { type: 'text', ...attrs };
  if (a.type === 'number' && a.step === undefined) a.step = 'any';
  return h('input', a);
}
export function textarea(attrs = {}) { const el = h('textarea', { rows: 3, ...attrs }); if (attrs.value !== undefined) el.value = attrs.value; return el; }
export function select(attrs = {}, options = []) {
  const { value, ...rest } = attrs;
  const el = h('select', rest);
  for (const o of options) {
    const opt = typeof o === 'object' ? o : { value: o, label: o };
    el.appendChild(h('option', { value: opt.value }, opt.label));
  }
  if (value !== undefined && value !== null) el.value = String(value);
  return el;
}
export function checkbox(attrs = {}, label) {
  const id = attrs.id || uid('c_');
  const c = h('input', { type: 'checkbox', ...attrs, id });
  return h('label.check', { for: id }, c, h('span', label));
}
export function formValues(form) {
  const out = {};
  for (const el of form.querySelectorAll('[name]')) {
    if (el.type === 'checkbox') out[el.name] = el.checked;
    else if (el.type === 'number') out[el.name] = el.value === '' ? null : Number(el.value);
    else out[el.name] = el.value;
  }
  return out;
}
export function grid(cols, ...children) { return h('div.form-grid', { style: { '--cols': cols } }, ...children); }

// ---------- small UI pieces ----------
export function btn(label, onClick, cls = 'btn-primary', attrs = {}) { return h('button.btn', { type: 'button', class: cls, onClick, ...attrs }, label); }
export function pill(text, kind = '') { return h('span.pill', { class: kind }, text); }
export function empty(icon, title, text, action) {
  return h('div.empty', h('div.empty-icon', { 'aria-hidden': 'true' }, icon), h('h3', title), text ? h('p', text) : null, action || null);
}
export function table(headers, rows, opts = {}) {
  const t = h('table.data', { class: opts.class });
  t.appendChild(h('thead', h('tr', headers.map(hd => h('th', typeof hd === 'object' && !(hd instanceof Node) ? { class: hd.class } : null, typeof hd === 'object' && !(hd instanceof Node) ? hd.label : hd)))));
  const tb = h('tbody');
  for (const r of rows) tb.appendChild(r instanceof Node ? r : h('tr', r.map(c => h('td', c))));
  t.appendChild(tb);
  return h('div.table-wrap', t);
}
export function stat(label, value, sub, tone = '') {
  return h('div.stat', { class: tone }, h('div.stat-label', label), h('div.stat-value', value), sub ? h('div.stat-sub', sub) : null);
}
export function segmented(options, value, onChange) {
  const wrap = h('div.seg', { role: 'tablist' });
  for (const o of options) {
    const b = h('button', { type: 'button', role: 'tab', class: o.value === value ? 'active' : '', 'aria-selected': o.value === value ? 'true' : 'false', onClick: () => onChange(o.value) }, o.label);
    wrap.appendChild(b);
  }
  return wrap;
}
export function menu(items) {
  // items: [{label, onClick, danger}] – renders a small dropdown button
  const wrap = h('div.menu');
  const list = h('div.menu-list', { hidden: true });
  const b = h('button.icon-btn', { type: 'button', 'aria-label': 'More actions', 'aria-haspopup': 'true', onClick: e => { e.stopPropagation(); const open = !list.hidden; document.querySelectorAll('.menu-list').forEach(l => l.hidden = true); list.hidden = open; } }, '⋯');
  for (const it of items) {
    if (!it) continue;
    list.appendChild(h('button', { type: 'button', class: it.danger ? 'danger' : '', onClick: e => { e.stopPropagation(); list.hidden = true; it.onClick(); } }, it.label));
  }
  wrap.append(b, list);
  return wrap;
}
document.addEventListener('click', () => document.querySelectorAll('.menu-list').forEach(l => l.hidden = true));
