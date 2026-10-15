/* Persistence: localStorage with JSON export/import. */

export const STORAGE_KEY = 'ac-budget-v1';

export function emptyState() {
  return {
    version: 1,
    settings: {
      currency: 'GBP',
      locale: 'en-GB',
      asOf: null,
      horizonMonths: 12,
      safetyBuffer: 500,
      periodStartDay: 1,
      matchWindowDays: 5,
      overdueLookbackDays: 45,
      overdueMode: 'tracked',
    },
    accounts: [],
    lines: [],
    transactions: [],
    scenarios: [],
    goals: [],
    categories: [],
  };
}

/** Bring any older/partial state up to the current shape. */
export function migrate(raw) {
  const base = emptyState();
  const s = { ...base, ...(raw || {}) };
  s.settings = { ...base.settings, ...(raw && raw.settings ? raw.settings : {}) };
  for (const k of ['accounts', 'lines', 'transactions', 'scenarios', 'goals', 'categories']) {
    if (!Array.isArray(s[k])) s[k] = [];
  }
  for (const l of s.lines) {
    l.changes = Array.isArray(l.changes) ? l.changes : [];
    l.skips = Array.isArray(l.skips) ? l.skips : [];
    if (!l.schedule) l.schedule = { frequency: 'monthly', interval: 1, start: null, weekendRule: 'none' };
    if (l.active == null) l.active = true;
  }
  s.version = 1;
  return s;
}

export function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return migrate(JSON.parse(raw));
  } catch (e) {
    console.warn('Could not load saved budget', e);
    return null;
  }
}

export function save(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch (e) {
    console.warn('Could not save budget', e);
    return false;
  }
}

export function clear() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    /* ignore */
  }
}

export function exportJson(state) {
  return JSON.stringify({ app: 'accounting-chronicle-budget', exportedAt: new Date().toISOString(), state }, null, 2);
}

export function parseImport(text) {
  const data = JSON.parse(text);
  const st = data && data.state ? data.state : data;
  if (!st || typeof st !== 'object' || !('accounts' in st || 'lines' in st)) {
    throw new Error('This file does not look like a budget export.');
  }
  return migrate(st);
}

export function uid(prefix = 'id') {
  const r = (typeof crypto !== 'undefined' && crypto.getRandomValues)
    ? Array.from(crypto.getRandomValues(new Uint8Array(6))).map((b) => b.toString(16).padStart(2, '0')).join('')
    : Math.random().toString(16).slice(2, 14);
  return `${prefix}_${r}`;
}

/* ------------------------------------------------------------
   CSV helpers
   ------------------------------------------------------------ */
export function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else inQuotes = false;
      } else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === ',') {
      row.push(field);
      field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field);
      field = '';
      if (row.some((x) => x.trim() !== '')) rows.push(row);
      row = [];
    } else field += c;
  }
  row.push(field);
  if (row.some((x) => x.trim() !== '')) rows.push(row);
  return rows;
}

export function toCsv(rows) {
  const q = (v) => {
    const s = v == null ? '' : String(v);
    return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  return rows.map((r) => r.map(q).join(',')).join('\r\n');
}

/** Try hard to read a date from bank-export formats. Returns 'YYYY-MM-DD' or null. */
export function parseLooseDate(s) {
  if (!s) return null;
  const t = String(s).trim();
  let m = t.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (m) return `${m[1]}-${m[2].padStart(2, '0')}-${m[3].padStart(2, '0')}`;
  m = t.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})$/);
  if (m) {
    const y = m[3].length === 2 ? `20${m[3]}` : m[3];
    return `${y}-${m[2].padStart(2, '0')}-${m[1].padStart(2, '0')}`; // day first (UK)
  }
  const d = new Date(t);
  if (!isNaN(d)) return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  return null;
}

export function parseAmount(s) {
  if (s == null || s === '') return null;
  const t = String(s).replace(/[£$€,\s]/g, '');
  if (!t) return null;
  const n = Number(t.replace(/^\((.*)\)$/, '-$1'));
  return isNaN(n) ? null : n;
}
