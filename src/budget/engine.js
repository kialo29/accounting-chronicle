/* ============================================================
   Budget engine — pure calculations, no DOM.
   Works in the browser (ES module) and in Node for tests.

   Conventions
   - Dates are 'YYYY-MM-DD' strings; all maths is done in UTC so a
     date never slips a day because of time zones.
   - Money is a plain number in the user's currency.
   - Account balances use the owner's point of view: assets are
     positive, debts are negative (owing £500 on a card = -500).
   ============================================================ */

/* ------------------------------------------------------------
   Dates
   ------------------------------------------------------------ */

const pad = (n) => String(n).padStart(2, '0');

export function parseDate(s) {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

export function fmtDate(d) {
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}

export function today() {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function addDays(s, n) {
  const d = parseDate(s);
  d.setUTCDate(d.getUTCDate() + n);
  return fmtDate(d);
}

export function daysInMonth(year, month /* 1-12 */) {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

/** Add n months, clamping the day to the target month's length. */
export function addMonths(s, n) {
  const [y, m, d] = s.split('-').map(Number);
  const total = y * 12 + (m - 1) + n;
  const ny = Math.floor(total / 12);
  const nm = (total % 12) + 1;
  return `${ny}-${pad(nm)}-${pad(Math.min(d, daysInMonth(ny, nm)))}`;
}

export function diffDays(a, b) {
  return Math.round((parseDate(b) - parseDate(a)) / 86400000);
}

export function weekday(s) {
  return parseDate(s).getUTCDay(); // 0 = Sunday
}

export function monthKey(s) {
  return s.slice(0, 7);
}

export function monthStart(s) {
  return `${s.slice(0, 7)}-01`;
}

export function monthEnd(s) {
  const [y, m] = s.split('-').map(Number);
  return `${s.slice(0, 7)}-${pad(daysInMonth(y, m))}`;
}

export function monthsBetween(a, b) {
  const [ay, am] = a.split('-').map(Number);
  const [by, bm] = b.split('-').map(Number);
  return (by - ay) * 12 + (bm - am);
}

/** Whole years elapsed between a and b (anniversary based). */
export function fullYearsBetween(a, b) {
  if (b < a) return 0;
  const [ay, am, ad] = a.split('-').map(Number);
  const [by, bm, bd] = b.split('-').map(Number);
  let years = by - ay;
  if (bm < am || (bm === am && bd < ad)) years -= 1;
  return Math.max(0, years);
}

export function isWeekend(s) {
  const w = weekday(s);
  return w === 0 || w === 6;
}

/** Move a date off a weekend according to a rule. */
export function applyWeekendRule(s, rule) {
  if (!rule || rule === 'none') return s;
  const w = weekday(s);
  if (w !== 0 && w !== 6) return s;
  if (rule === 'previous') return addDays(s, w === 6 ? -1 : -2);
  if (rule === 'next') return addDays(s, w === 6 ? 2 : 1);
  if (rule === 'nearest') return addDays(s, w === 6 ? -1 : 1);
  return s;
}

export function clampDay(year, month, day) {
  return Math.min(day, daysInMonth(year, month));
}

/** Date of the nth (1..4, or -1 for last) weekday (0..6) in a month. */
export function nthWeekdayOfMonth(year, month, n, wd) {
  if (n > 0) {
    const first = weekday(`${year}-${pad(month)}-01`);
    const day = 1 + ((wd - first + 7) % 7) + (n - 1) * 7;
    return `${year}-${pad(month)}-${pad(clampDay(year, month, day))}`;
  }
  const dim = daysInMonth(year, month);
  const last = weekday(`${year}-${pad(month)}-${pad(dim)}`);
  const day = dim - ((last - wd + 7) % 7);
  return `${year}-${pad(month)}-${pad(day)}`;
}

/* ------------------------------------------------------------
   Schedules
   ------------------------------------------------------------
   schedule = {
     frequency: 'once' | 'daily' | 'weekly' | 'monthly' | 'yearly',
     interval: 1,              // every N units (weekly+2 = fortnightly, monthly+3 = quarterly)
     start: 'YYYY-MM-DD',      // anchor / first occurrence
     end: 'YYYY-MM-DD' | null,
     dayOfMonth: 1..31 | 'last' | null,   // monthly/yearly; defaults to start's day
     nthWeekday: { n: 1..4 | -1, weekday: 0..6 } | null, // e.g. last Friday
     weekendRule: 'none' | 'previous' | 'next' | 'nearest'
   }
   ------------------------------------------------------------ */

export const FREQUENCY_PRESETS = [
  { id: 'once', label: 'One-off', frequency: 'once', interval: 1 },
  { id: 'daily', label: 'Daily', frequency: 'daily', interval: 1 },
  { id: 'weekly', label: 'Weekly', frequency: 'weekly', interval: 1 },
  { id: 'fortnightly', label: 'Fortnightly', frequency: 'weekly', interval: 2 },
  { id: 'fourweekly', label: 'Every 4 weeks', frequency: 'weekly', interval: 4 },
  { id: 'monthly', label: 'Monthly', frequency: 'monthly', interval: 1 },
  { id: 'bimonthly', label: 'Every 2 months', frequency: 'monthly', interval: 2 },
  { id: 'quarterly', label: 'Quarterly', frequency: 'monthly', interval: 3 },
  { id: 'halfyearly', label: 'Every 6 months', frequency: 'monthly', interval: 6 },
  { id: 'yearly', label: 'Yearly', frequency: 'yearly', interval: 1 },
];

export function presetForSchedule(schedule) {
  const p = FREQUENCY_PRESETS.find(
    (x) => x.frequency === schedule.frequency && x.interval === (schedule.interval || 1)
  );
  return p ? p.id : 'custom';
}

function nominalMonthly(schedule, k, stepMonths) {
  const [sy, sm, sd] = schedule.start.split('-').map(Number);
  const total = sy * 12 + (sm - 1) + k * stepMonths;
  const y = Math.floor(total / 12);
  const m = (total % 12) + 1;
  if (schedule.nthWeekday) {
    return nthWeekdayOfMonth(y, m, schedule.nthWeekday.n, schedule.nthWeekday.weekday);
  }
  let day;
  if (schedule.dayOfMonth === 'last') day = daysInMonth(y, m);
  else if (schedule.dayOfMonth) day = clampDay(y, m, Number(schedule.dayOfMonth));
  else day = clampDay(y, m, sd);
  return `${y}-${pad(m)}-${pad(day)}`;
}

/**
 * All occurrence dates of a schedule whose (weekend-adjusted) date falls
 * within [from, to] inclusive. Returns [{ date, nominal }].
 */
export function occurrences(schedule, from, to) {
  if (!schedule || !schedule.start) return [];
  const out = [];
  const interval = Math.max(1, Number(schedule.interval) || 1);
  const hardEnd = schedule.end && schedule.end < to ? schedule.end : to;
  const rule = schedule.weekendRule || 'none';
  const push = (nominal) => {
    if (nominal > hardEnd) return false;
    const date = applyWeekendRule(nominal, rule);
    if (date >= from && date <= to) out.push({ date, nominal });
    return true;
  };

  if (schedule.frequency === 'once') {
    push(schedule.start);
    return out;
  }

  // Generate a little beyond both edges so weekend shifts don't drop items.
  const lo = addDays(from, -3);
  const hi = addDays(hardEnd, 3);

  if (schedule.frequency === 'daily' || schedule.frequency === 'weekly') {
    const step = interval * (schedule.frequency === 'daily' ? 1 : 7);
    let k = 0;
    const gap = diffDays(schedule.start, lo);
    if (gap > 0) k = Math.floor(gap / step);
    for (;;) {
      const nominal = addDays(schedule.start, k * step);
      if (nominal > hi) break;
      push(nominal);
      k += 1;
      if (k > 100000) break;
    }
    return out;
  }

  const stepMonths = schedule.frequency === 'yearly' ? 12 * interval : interval;
  let k = Math.max(0, Math.floor(monthsBetween(schedule.start, lo) / stepMonths) - 1);
  for (;;) {
    const nominal = nominalMonthly(schedule, k, stepMonths);
    if (nominal > hi) break;
    if (nominal >= schedule.start) push(nominal);
    k += 1;
    if (k > 100000) break;
  }
  return out;
}

export function nextOccurrence(schedule, from) {
  const list = occurrences(schedule, from, addMonths(from, 36));
  return list.length ? list[0].date : null;
}

/* ------------------------------------------------------------
   Lines (budget items) and amounts
   ------------------------------------------------------------
   line = {
     id, name, kind: 'income' | 'expense' | 'transfer',
     category, flowType: 'fixed' | 'variable' | 'discretionary' | 'irregular',
     accountId, toAccountId (transfer only),
     amount, amountMin, amountMax,   // min/max optional -> a range
     schedule, changes: [{ from, amount, amountMin, amountMax, note }],
     annualGrowthPct, scenarioId, active, skips: ['YYYY-MM-DD'], notes
   }
   ------------------------------------------------------------ */

export function normaliseAmounts(obj) {
  const expected = Number(obj.amount) || 0;
  const min = obj.amountMin == null || obj.amountMin === '' ? expected : Number(obj.amountMin);
  const max = obj.amountMax == null || obj.amountMax === '' ? expected : Number(obj.amountMax);
  return {
    expected,
    min: Math.min(min, max, expected),
    max: Math.max(min, max, expected),
  };
}

/** Amount { min, expected, max } of a line on a given date. */
export function amountAt(line, date) {
  let amounts = normaliseAmounts(line);
  let since = line.schedule ? line.schedule.start : date;
  const changes = (line.changes || []).slice().sort((a, b) => (a.from < b.from ? -1 : 1));
  for (const c of changes) {
    if (c.from <= date) {
      amounts = normaliseAmounts(c);
      since = c.from;
    }
  }
  const g = Number(line.annualGrowthPct) || 0;
  if (g) {
    const years = fullYearsBetween(since, date);
    const f = Math.pow(1 + g / 100, years);
    amounts = { min: amounts.min * f, expected: amounts.expected * f, max: amounts.max * f };
  }
  return amounts;
}

export function isRange(line) {
  const a = normaliseAmounts(line);
  return a.min !== a.max;
}

export function scenarioEnabled(state, scenarioId) {
  if (!scenarioId) return true;
  const sc = (state.scenarios || []).find((s) => s.id === scenarioId);
  return sc ? !!sc.enabled : true;
}

export function activeLines(state) {
  return (state.lines || []).filter((l) => l.active !== false && scenarioEnabled(state, l.scenarioId));
}

/* ------------------------------------------------------------
   Accounts and actual balances
   ------------------------------------------------------------ */

export const ACCOUNT_TYPES = [
  { id: 'current', label: 'Current account', group: 'cash', liquid: true },
  { id: 'savings', label: 'Savings', group: 'cash', liquid: true },
  { id: 'cash', label: 'Cash', group: 'cash', liquid: true },
  { id: 'investment', label: 'Investment', group: 'investment', liquid: false },
  { id: 'asset', label: 'Other asset (car, deposit…)', group: 'asset', liquid: false },
  { id: 'credit', label: 'Credit card', group: 'liability', liquid: false },
  { id: 'loan', label: 'Loan / mortgage', group: 'liability', liquid: false },
];

export function accountType(acc) {
  return ACCOUNT_TYPES.find((t) => t.id === acc.type) || ACCOUNT_TYPES[0];
}

export function isLiquid(acc) {
  if (acc.liquid != null) return !!acc.liquid;
  return accountType(acc).liquid;
}

export function isLiability(acc) {
  return accountType(acc).group === 'liability';
}

/** Apply a flow to a balances map. amount is always positive. */
export function applyFlow(balances, flow, amount) {
  const amt = Number(amount) || 0;
  if (flow.kind === 'income') {
    balances[flow.accountId] = (balances[flow.accountId] || 0) + amt;
  } else if (flow.kind === 'expense') {
    balances[flow.accountId] = (balances[flow.accountId] || 0) - amt;
  } else if (flow.kind === 'transfer') {
    balances[flow.accountId] = (balances[flow.accountId] || 0) - amt;
    if (flow.toAccountId) balances[flow.toAccountId] = (balances[flow.toAccountId] || 0) + amt;
  }
}

/** Balances of every account from opening balances + actual transactions up to a date. */
export function actualBalances(state, upTo) {
  const balances = {};
  for (const acc of state.accounts || []) {
    balances[acc.id] = !acc.openingDate || acc.openingDate <= upTo ? Number(acc.openingBalance) || 0 : 0;
  }
  for (const tx of state.transactions || []) {
    if (tx.date <= upTo) applyFlow(balances, tx, tx.amount);
  }
  return balances;
}

export function sumLiquid(state, balances) {
  let s = 0;
  for (const acc of state.accounts || []) if (isLiquid(acc)) s += balances[acc.id] || 0;
  return s;
}

export function sumAll(balances) {
  return Object.values(balances).reduce((a, b) => a + b, 0);
}

/* ------------------------------------------------------------
   Matching planned occurrences to actual transactions
   ------------------------------------------------------------ */

/**
 * Match a line's occurrences to actual transactions linked to it
 * (tx.lineId === line.id) within +/- windowDays of the planned date.
 * Returns { matched: Map(date -> tx), unmatchedTx: [tx] }.
 */
export function matchOccurrences(line, transactions, occs, windowDays) {
  const txs = (transactions || [])
    .filter((t) => t.lineId === line.id)
    .sort((a, b) => (a.date < b.date ? -1 : 1));
  const used = new Set();
  const matched = new Map();
  for (const occ of occs) {
    let best = null;
    let bestGap = Infinity;
    for (const tx of txs) {
      if (used.has(tx.id)) continue;
      const gap = Math.abs(diffDays(occ.date, tx.date));
      if (gap <= windowDays && gap < bestGap) {
        best = tx;
        bestGap = gap;
      }
    }
    if (best) {
      used.add(best.id);
      matched.set(occ.date, best);
    }
  }
  return { matched, unmatchedTx: txs.filter((t) => !used.has(t.id)) };
}

/* ------------------------------------------------------------
   Forecast
   ------------------------------------------------------------ */

export function getAsOf(state, opts = {}) {
  return opts.asOf || (state.settings && state.settings.asOf) || today();
}

/**
 * Build the cash-flow forecast.
 * Returns {
 *   asOf, endDate, startBalances, events, days, byDate, warnings, overdue, minLiquid
 * }
 * events: [{ date, nominal, kind, name, category, flowType, accountId, toAccountId,
 *            amounts:{min,expected,max}, source:'plan'|'actual', lineId, overdue }]
 * days:   [{ date, balances:{low,expected,high}, liquid:{low,expected,high}, netWorth }]
 */
export function buildForecast(state, opts = {}) {
  const settings = state.settings || {};
  const asOf = getAsOf(state, opts);
  const months = opts.months || settings.horizonMonths || 12;
  const endDate = monthEnd(addMonths(asOf, months - 1));
  const windowDays = settings.matchWindowDays ?? 5;
  const lookbackDays = settings.overdueLookbackDays ?? 45;
  const buffer = Number(settings.safetyBuffer) || 0;
  const accounts = state.accounts || [];
  const accById = Object.fromEntries(accounts.map((a) => [a.id, a]));

  const startBalances = actualBalances(state, asOf);
  const events = [];

  // Future-dated actual transactions are certain events.
  for (const tx of state.transactions || []) {
    if (tx.date > asOf && tx.date <= endDate) {
      const amt = Number(tx.amount) || 0;
      events.push({
        id: `tx:${tx.id}`,
        date: tx.date,
        nominal: tx.date,
        kind: tx.kind,
        name: tx.description || tx.category || tx.kind,
        category: tx.category || 'Uncategorised',
        flowType: tx.flowType || 'fixed',
        accountId: tx.accountId,
        toAccountId: tx.toAccountId,
        amounts: { min: amt, expected: amt, max: amt },
        source: 'actual',
        lineId: tx.lineId || null,
        txId: tx.id,
        overdue: false,
      });
    }
  }

  // Missed planned items (planned before as-of, no matching actual).
  //   'tracked' (default): carry forward only for lines you have linked an
  //              actual to before — i.e. lines you are actually tracking.
  //   'all':     carry forward for every line.
  //   'none':    never carry forward.
  // In every mode only the most recent miss per line is carried, and only if
  // it is later than the last occurrence you did record, so untracked history
  // never piles up as fake "overdue" items.
  const overdueMode = settings.overdueMode || 'tracked';
  const lookback = addDays(asOf, -lookbackDays);
  const unrecorded = [];
  for (const line of activeLines(state)) {
    const occs = occurrences(line.schedule, lookback, endDate);
    const { matched } = matchOccurrences(line, state.transactions, occs, windowDays);
    const skips = new Set(line.skips || []);
    const everLinked = (state.transactions || []).some((t) => t.lineId === line.id);
    const lastMatched = [...matched.keys()].sort().pop() || '';
    const carry = overdueMode === 'all' || (overdueMode === 'tracked' && everLinked);
    const pastMisses = occs.filter(
      (o) => o.date < asOf && !matched.has(o.date) && !skips.has(o.nominal) && !skips.has(o.date) && o.date > lastMatched
    );
    const latestMiss = pastMisses.length ? pastMisses[pastMisses.length - 1] : null;
    for (const occ of occs) {
      if (matched.has(occ.date)) continue;
      if (skips.has(occ.nominal) || skips.has(occ.date)) continue;
      const past = occ.date < asOf;
      const ev = {
        id: `line:${line.id}:${occ.nominal}`,
        date: past ? asOf : occ.date,
        nominal: occ.nominal,
        plannedDate: occ.date,
        kind: line.kind,
        name: line.name,
        category: line.category || 'Uncategorised',
        flowType: line.flowType || 'fixed',
        accountId: line.accountId,
        toAccountId: line.toAccountId,
        amounts: amountAt(line, occ.date),
        source: 'plan',
        lineId: line.id,
        overdue: past,
      };
      if (past) {
        if (occ.date <= lastMatched) continue; // older than something already recorded
        if (carry && occ === latestMiss) events.push(ev);
        else unrecorded.push(ev);
        continue;
      }
      events.push(ev);
    }
  }

  // Inflows before outflows on the same day keeps warnings realistic.
  const kindOrder = { income: 0, transfer: 1, expense: 2 };
  events.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : kindOrder[a.kind] - kindOrder[b.kind]));

  const cases = {
    low: { ...startBalances },
    expected: { ...startBalances },
    high: { ...startBalances },
  };
  const caseAmount = (ev, c) => {
    if (c === 'expected' || ev.kind === 'transfer') return ev.amounts.expected;
    // low = pessimistic for cash: income at min, spending at max.
    if (ev.kind === 'income') return c === 'low' ? ev.amounts.min : ev.amounts.max;
    return c === 'low' ? ev.amounts.max : ev.amounts.min;
  };

  const days = [];
  const byDate = {};
  const warnings = [];
  const warned = new Set();
  let evIdx = 0;
  let minLiquid = { date: asOf, value: Infinity };

  for (let d = asOf; d <= endDate; d = addDays(d, 1)) {
    // Monthly interest on the 1st (not on the as-of day itself).
    if (d.endsWith('-01') && d !== asOf) {
      for (const acc of accounts) {
        const r = Number(acc.interestRate) || 0;
        if (!r) continue;
        for (const c of Object.keys(cases)) {
          const bal = cases[c][acc.id] || 0;
          if (isLiability(acc) ? bal < 0 : bal > 0) cases[c][acc.id] = bal * (1 + r / 100 / 12);
        }
      }
    }
    while (evIdx < events.length && events[evIdx].date === d) {
      const ev = events[evIdx];
      for (const c of Object.keys(cases)) applyFlow(cases[c], ev, caseAmount(ev, c));
      evIdx += 1;
    }
    const snapshot = {
      date: d,
      balances: {
        low: { ...cases.low },
        expected: { ...cases.expected },
        high: { ...cases.high },
      },
      liquid: {
        low: sumLiquid(state, cases.low),
        expected: sumLiquid(state, cases.expected),
        high: sumLiquid(state, cases.high),
      },
      netWorth: sumAll(cases.expected),
    };
    days.push(snapshot);
    byDate[d] = snapshot;
    if (snapshot.liquid.expected < minLiquid.value) minLiquid = { date: d, value: snapshot.liquid.expected };

    // Warnings on the expected case, once per account per episode.
    for (const acc of accounts) {
      const bal = cases.expected[acc.id] || 0;
      const key = acc.id;
      let type = null;
      if (acc.type === 'credit' && acc.creditLimit && -bal > Number(acc.creditLimit)) type = 'overLimit';
      else if (isLiquid(acc) && bal < 0) type = 'negative';
      if (type) {
        if (!warned.has(key)) {
          warnings.push({ date: d, accountId: acc.id, accountName: acc.name, type, amount: bal });
          warned.add(key);
        }
      } else warned.delete(key);
    }
    if (buffer > 0) {
      if (snapshot.liquid.expected < buffer) {
        if (!warned.has('__buffer')) {
          warnings.push({ date: d, type: 'belowBuffer', amount: snapshot.liquid.expected, buffer });
          warned.add('__buffer');
        }
      } else warned.delete('__buffer');
    }
  }

  return {
    asOf,
    endDate,
    months,
    startBalances,
    events,
    days,
    byDate,
    warnings,
    overdue: events.filter((e) => e.overdue),
    unrecorded: unrecorded.sort((a, b) => (a.plannedDate < b.plannedDate ? 1 : -1)),
    minLiquid: minLiquid.value === Infinity ? { date: asOf, value: sumLiquid(state, startBalances) } : minLiquid,
    accById,
  };
}

/** Balances at any date: actuals before as-of, forecast (expected) after. */
export function balancesAt(state, forecast, date) {
  if (date < forecast.asOf) return actualBalances(state, date);
  const snap = forecast.byDate[date];
  if (snap) return snap.balances.expected;
  if (date > forecast.endDate) return forecast.days[forecast.days.length - 1].balances.expected;
  return forecast.startBalances;
}

/* ------------------------------------------------------------
   Flow listing helpers (actual + forecast, unified)
   ------------------------------------------------------------ */

function txToFlow(tx) {
  const amt = Number(tx.amount) || 0;
  return {
    id: `tx:${tx.id}`,
    date: tx.date,
    kind: tx.kind,
    name: tx.description || tx.category || tx.kind,
    category: tx.category || 'Uncategorised',
    flowType: tx.flowType || 'fixed',
    accountId: tx.accountId,
    toAccountId: tx.toAccountId,
    amounts: { min: amt, expected: amt, max: amt },
    source: 'actual',
    lineId: tx.lineId || null,
    txId: tx.id,
  };
}

/** Actual transactions dated in [from,to] and <= asOf. */
export function actualFlows(state, asOf, from, to) {
  return (state.transactions || [])
    .filter((t) => t.date >= from && t.date <= to && t.date <= asOf)
    .map(txToFlow);
}

/** Forecast events dated in [from,to] (they are all >= asOf). */
export function forecastFlows(forecast, from, to) {
  return forecast.events.filter((e) => e.date >= from && e.date <= to);
}

/** Planned occurrences (the budget) in [from,to], ignoring actuals. */
export function plannedFlows(state, from, to) {
  const out = [];
  for (const line of activeLines(state)) {
    for (const occ of occurrences(line.schedule, from, to)) {
      if ((line.skips || []).includes(occ.nominal)) continue;
      out.push({
        id: `plan:${line.id}:${occ.nominal}`,
        date: occ.date,
        kind: line.kind,
        name: line.name,
        category: line.category || 'Uncategorised',
        flowType: line.flowType || 'fixed',
        accountId: line.accountId,
        toAccountId: line.toAccountId,
        amounts: amountAt(line, occ.date),
        source: 'plan',
        lineId: line.id,
      });
    }
  }
  return out.sort((a, b) => (a.date < b.date ? -1 : 1));
}

/** Expected outturn for a period = actuals to date + forecast for the rest. */
export function expectedFlows(state, forecast, from, to) {
  return actualFlows(state, forecast.asOf, from, to).concat(
    forecastFlows(forecast, from < forecast.asOf ? forecast.asOf : from, to)
  );
}

/* ------------------------------------------------------------
   Aggregations
   ------------------------------------------------------------ */

function groupSum(flows, keyFn, valueFn = (f) => f.amounts.expected) {
  const out = {};
  for (const f of flows) {
    const k = keyFn(f);
    out[k] = (out[k] || 0) + valueFn(f);
  }
  return out;
}

export function totals(flows) {
  const t = { income: 0, expense: 0, transfer: 0 };
  for (const f of flows) t[f.kind] = (t[f.kind] || 0) + f.amounts.expected;
  t.net = t.income - t.expense;
  return t;
}

export function byCategory(flows, kind) {
  return groupSum(flows.filter((f) => f.kind === kind), (f) => f.category);
}

/**
 * Income statement for a period.
 * Columns: budget (plan), actual (to date), expected (outturn), variance (expected - budget).
 */
export function incomeStatement(state, forecast, from, to) {
  const plan = plannedFlows(state, from, to);
  const actual = actualFlows(state, forecast.asOf, from, to);
  const expected = expectedFlows(state, forecast, from, to);

  const build = (kind) => {
    const cats = new Set([
      ...Object.keys(byCategory(plan, kind)),
      ...Object.keys(byCategory(actual, kind)),
      ...Object.keys(byCategory(expected, kind)),
    ]);
    const p = byCategory(plan, kind);
    const a = byCategory(actual, kind);
    const e = byCategory(expected, kind);
    const typeOf = {};
    for (const f of [...plan, ...expected, ...actual]) if (f.kind === kind) typeOf[f.category] = typeOf[f.category] || f.flowType;
    return [...cats]
      .map((c) => ({
        category: c,
        flowType: typeOf[c] || 'fixed',
        budget: p[c] || 0,
        actual: a[c] || 0,
        expected: e[c] || 0,
      }))
      .sort((x, y) => y.budget - x.budget || y.expected - x.expected);
  };

  const incomeRows = build('income');
  const expenseRows = build('expense');
  const transferRows = build('transfer');
  const sum = (rows, k) => rows.reduce((s, r) => s + r[k], 0);
  const sect = (rows) => ({ rows, budget: sum(rows, 'budget'), actual: sum(rows, 'actual'), expected: sum(rows, 'expected') });

  const income = sect(incomeRows);
  const expenses = sect(expenseRows);
  const transfers = sect(transferRows);
  const groups = {};
  for (const r of expenseRows) {
    groups[r.flowType] = groups[r.flowType] || { flowType: r.flowType, rows: [], budget: 0, actual: 0, expected: 0 };
    groups[r.flowType].rows.push(r);
    groups[r.flowType].budget += r.budget;
    groups[r.flowType].actual += r.actual;
    groups[r.flowType].expected += r.expected;
  }
  const order = ['fixed', 'variable', 'discretionary', 'irregular'];
  return {
    from,
    to,
    partial: to > forecast.asOf,
    income,
    expenses,
    expenseGroups: order.filter((k) => groups[k]).map((k) => groups[k]),
    transfers,
    net: {
      budget: income.budget - expenses.budget,
      actual: income.actual - expenses.actual,
      expected: income.expected - expenses.expected,
    },
  };
}

/**
 * Monthly cash budget: opening, receipts, payments, net, closing per month,
 * for liquid accounts in total and each account individually.
 * Months before as-of are actual, the as-of month is mixed, later months are forecast.
 */
export function cashBudget(state, forecast, monthsBack = 2, monthsForward = 6) {
  const asOf = forecast.asOf;
  const first = monthStart(addMonths(asOf, -monthsBack));
  const accounts = state.accounts || [];
  const liquidIds = new Set(accounts.filter(isLiquid).map((a) => a.id));
  const rows = [];
  for (let i = 0; i <= monthsBack + monthsForward; i++) {
    const ms = monthStart(addMonths(first, i));
    const me = monthEnd(ms);
    if (ms > forecast.endDate) break;
    const flows = expectedFlows(state, forecast, ms, me);
    const opening = balancesAt(state, forecast, addDays(ms, -1));
    const closing = balancesAt(state, forecast, me);
    const byAccount = {};
    for (const acc of accounts) {
      let inflow = 0;
      let outflow = 0;
      for (const f of flows) {
        const amt = f.amounts.expected;
        if (f.kind === 'income' && f.accountId === acc.id) inflow += amt;
        else if (f.kind === 'expense' && f.accountId === acc.id) outflow += amt;
        else if (f.kind === 'transfer') {
          if (f.accountId === acc.id) outflow += amt;
          if (f.toAccountId === acc.id) inflow += amt;
        }
      }
      byAccount[acc.id] = { opening: opening[acc.id] || 0, inflow, outflow, closing: closing[acc.id] || 0 };
    }
    // Liquid total: transfers between liquid accounts cancel out.
    let receipts = 0;
    let payments = 0;
    let transfersIn = 0;
    let transfersOut = 0;
    for (const f of flows) {
      const amt = f.amounts.expected;
      if (f.kind === 'income' && liquidIds.has(f.accountId)) receipts += amt;
      else if (f.kind === 'expense' && liquidIds.has(f.accountId)) payments += amt;
      else if (f.kind === 'transfer') {
        const fromL = liquidIds.has(f.accountId);
        const toL = liquidIds.has(f.toAccountId);
        if (fromL && !toL) transfersOut += amt;
        if (!fromL && toL) transfersIn += amt;
      }
    }
    const openingLiquid = sumLiquid(state, opening);
    const closingLiquid = sumLiquid(state, closing);
    rows.push({
      month: monthKey(ms),
      source: me < asOf ? 'actual' : ms > asOf ? 'forecast' : 'mixed',
      openingLiquid,
      receipts,
      payments,
      transfersIn,
      transfersOut,
      net: receipts + transfersIn - payments - transfersOut,
      closingLiquid,
      other: closingLiquid - openingLiquid - (receipts + transfersIn - payments - transfersOut), // interest etc.
      byAccount,
      netWorth: sumAll(closing),
    });
  }
  return rows;
}

/** Balance sheet as at a date (actual before as-of, projected after). */
export function balanceSheet(state, forecast, date, compareDate = null) {
  const bal = balancesAt(state, forecast, date);
  const cmp = compareDate ? balancesAt(state, forecast, compareDate) : null;
  const groups = { cash: [], investment: [], asset: [], liability: [] };
  for (const acc of state.accounts || []) {
    const t = accountType(acc);
    const value = bal[acc.id] || 0;
    groups[t.group].push({
      account: acc,
      value,
      compare: cmp ? cmp[acc.id] || 0 : null,
    });
  }
  const sum = (arr) => arr.reduce((s, r) => s + r.value, 0);
  const sumC = (arr) => (cmp ? arr.reduce((s, r) => s + (r.compare || 0), 0) : null);
  const assets = sum(groups.cash) + sum(groups.investment) + sum(groups.asset);
  const liabilities = -sum(groups.liability);
  const result = {
    date,
    compareDate,
    projected: date > forecast.asOf,
    groups,
    totals: {
      cash: sum(groups.cash),
      investment: sum(groups.investment),
      asset: sum(groups.asset),
      assets,
      liabilities,
      netWorth: assets - liabilities,
    },
  };
  if (cmp) {
    const cAssets = sumC(groups.cash) + sumC(groups.investment) + sumC(groups.asset);
    const cLiab = -sumC(groups.liability);
    result.compareTotals = {
      cash: sumC(groups.cash),
      investment: sumC(groups.investment),
      asset: sumC(groups.asset),
      assets: cAssets,
      liabilities: cLiab,
      netWorth: cAssets - cLiab,
    };
  }
  return result;
}

/** Actual vs plan per month for the last N months (including the current one). */
export function actualVsPlan(state, forecast, monthsBack = 6) {
  const asOf = forecast.asOf;
  const out = [];
  for (let i = monthsBack - 1; i >= 0; i--) {
    const ms = monthStart(addMonths(asOf, -i));
    const me = monthEnd(ms);
    // For the month in progress compare the plan to date with the actuals to date.
    const plan = plannedFlows(state, ms, me < asOf ? me : asOf);
    const actual = actualFlows(state, asOf, ms, me);
    const hasActuals = (state.transactions || []).some((t) => t.date >= ms && t.date <= me && t.date <= asOf);
    const pT = totals(plan);
    const aT = totals(actual);
    const cats = new Set([...plan, ...actual].filter((f) => f.kind !== 'transfer').map((f) => `${f.kind}|${f.category}`));
    const pC = groupSum(plan, (f) => `${f.kind}|${f.category}`);
    const aC = groupSum(actual, (f) => `${f.kind}|${f.category}`);
    const categories = [...cats]
      .map((k) => {
        const [kind, category] = k.split('|');
        return { kind, category, plan: pC[k] || 0, actual: aC[k] || 0, variance: (aC[k] || 0) - (pC[k] || 0) };
      })
      .sort((a, b) => a.kind.localeCompare(b.kind) || Math.abs(b.variance) - Math.abs(a.variance));
    out.push({
      month: monthKey(ms),
      partial: me > asOf,
      hasActuals,
      plan: pT,
      actual: aT,
      variance: { income: aT.income - pT.income, expense: aT.expense - pT.expense, net: aT.net - pT.net },
      categories,
    });
  }
  return out;
}

/**
 * Budget tracker for a period: per expense category the budget (plan), spent
 * so far, what is still due, and the remaining amount.
 */
export function budgetTracker(state, forecast, from, to) {
  const asOf = forecast.asOf;
  const plan = plannedFlows(state, from, to).filter((f) => f.kind === 'expense');
  const spent = actualFlows(state, asOf, from, to).filter((f) => f.kind === 'expense');
  const due = forecastFlows(forecast, from < asOf ? asOf : from, to).filter((f) => f.kind === 'expense' && f.source === 'plan');
  const cats = new Set([...plan, ...spent].map((f) => f.category));
  const p = byCategory(plan, 'expense');
  const s = byCategory(spent, 'expense');
  const d = byCategory(due, 'expense');
  const typeOf = {};
  for (const f of [...plan, ...spent]) typeOf[f.category] = typeOf[f.category] || f.flowType;
  const rows = [...cats]
    .map((c) => {
      const budget = p[c] || 0;
      const spentC = s[c] || 0;
      const dueC = d[c] || 0;
      const remaining = budget - spentC;
      let status = 'ok';
      if (spentC > budget + 0.005) status = 'over';
      else if (spentC + dueC > budget + 0.005) status = 'at-risk';
      return { category: c, flowType: typeOf[c] || 'fixed', budget, spent: spentC, due: dueC, remaining, status };
    })
    .sort((a, b) => b.budget - a.budget);
  const sum = (k) => rows.reduce((x, r) => x + r[k], 0);
  return {
    from,
    to,
    rows,
    totals: { budget: sum('budget'), spent: sum('spent'), due: sum('due'), remaining: sum('remaining') },
    daysLeft: Math.max(0, diffDays(asOf, to)),
  };
}

/** Period containing as-of for a given period start day (1 = calendar month). */
export function currentPeriod(asOf, startDay = 1) {
  const sd = Math.max(1, Math.min(28, Number(startDay) || 1));
  if (sd === 1) return { from: monthStart(asOf), to: monthEnd(asOf) };
  const [y, m, d] = asOf.split('-').map(Number);
  let from;
  if (d >= sd) from = `${y}-${pad(m)}-${pad(sd)}`;
  else from = addMonths(`${y}-${pad(m)}-${pad(sd)}`, -1);
  const to = addDays(addMonths(from, 1), -1);
  return { from, to };
}

/**
 * Safe-to-spend: the lowest the spending accounts (current + cash) are
 * expected to go over the next N days, less the safety buffer.
 */
export function safeToSpend(state, forecast, daysAhead = 30) {
  const buffer = Number((state.settings || {}).safetyBuffer) || 0;
  const spendIds = (state.accounts || []).filter((a) => a.type === 'current' || a.type === 'cash').map((a) => a.id);
  const end = addDays(forecast.asOf, daysAhead);
  let min = Infinity;
  let minDate = forecast.asOf;
  for (const day of forecast.days) {
    if (day.date > end) break;
    const v = spendIds.reduce((s, id) => s + (day.balances.expected[id] || 0), 0);
    if (v < min) {
      min = v;
      minDate = day.date;
    }
  }
  if (min === Infinity) min = 0;
  return { amount: min - buffer, lowDate: minDate, lowBalance: min, buffer, daysAhead };
}

/** Goal progress and projected completion date. */
export function goalProgress(state, forecast, goal) {
  const acc = (state.accounts || []).find((a) => a.id === goal.accountId);
  const current = acc ? forecast.startBalances[acc.id] || 0 : 0;
  const target = Number(goal.target) || 0;
  let reachDate = null;
  if (acc) {
    for (const day of forecast.days) {
      if ((day.balances.expected[acc.id] || 0) >= target) {
        reachDate = day.date;
        break;
      }
    }
    if (!reachDate && forecast.days.length > 1) {
      const last = forecast.days[forecast.days.length - 1];
      const perDay = ((last.balances.expected[acc.id] || 0) - current) / Math.max(1, forecast.days.length - 1);
      if (perDay > 0) reachDate = addDays(last.date, Math.ceil((target - (last.balances.expected[acc.id] || 0)) / perDay));
    }
  }
  const onTrack = goal.targetDate ? (reachDate ? reachDate <= goal.targetDate : false) : !!reachDate;
  return {
    goal,
    account: acc,
    current,
    target,
    pct: target > 0 ? Math.max(0, Math.min(1, current / target)) : 0,
    remaining: Math.max(0, target - current),
    reachDate,
    onTrack,
    reached: current >= target && target > 0,
  };
}

/** Projected date a debt account is cleared (expected balance >= 0). */
export function debtPayoff(state, forecast, acc) {
  const start = forecast.startBalances[acc.id] || 0;
  if (start >= 0) return { account: acc, cleared: true, date: forecast.asOf };
  for (const day of forecast.days) {
    if ((day.balances.expected[acc.id] || 0) >= -0.005) return { account: acc, cleared: false, date: day.date };
  }
  const last = forecast.days[forecast.days.length - 1];
  const end = last ? last.balances.expected[acc.id] || 0 : start;
  const perDay = (end - start) / Math.max(1, forecast.days.length - 1);
  if (perDay > 0 && last) return { account: acc, cleared: false, date: addDays(last.date, Math.ceil(-end / perDay)), extrapolated: true };
  return { account: acc, cleared: false, date: null };
}

/** Upcoming events in the next N days (overdue first). */
export function upcoming(forecast, daysAhead = 30) {
  const end = addDays(forecast.asOf, daysAhead);
  return forecast.events.filter((e) => e.date <= end);
}

/** Planned occurrences a transaction might belong to (for linking). */
export function suggestLines(state, tx, windowDays = 10) {
  const out = [];
  for (const line of activeLines(state)) {
    if (line.kind !== tx.kind) continue;
    const occs = occurrences(line.schedule, addDays(tx.date, -windowDays), addDays(tx.date, windowDays));
    if (!occs.length) continue;
    const a = amountAt(line, tx.date);
    const amt = Number(tx.amount) || 0;
    const tolerance = Math.max(a.max - a.min, Math.abs(a.expected) * 0.25, 5);
    const within = amt >= a.min - tolerance && amt <= a.max + tolerance;
    const sameAcc = !tx.accountId || !line.accountId || line.accountId === tx.accountId;
    const gap = Math.min(...occs.map((o) => Math.abs(diffDays(o.date, tx.date))));
    out.push({ line, score: (within ? 2 : 0) + (sameAcc ? 1 : 0) - gap / 100, gap, occurrence: occs[0] });
  }
  return out.sort((a, b) => b.score - a.score);
}

/* ------------------------------------------------------------
   Monthly summary series for charts (income vs expense by month)
   ------------------------------------------------------------ */
export function monthlySeries(state, forecast, monthsBack = 3, monthsForward = 9) {
  const asOf = forecast.asOf;
  const out = [];
  for (let i = -monthsBack; i <= monthsForward; i++) {
    const ms = monthStart(addMonths(asOf, i));
    const me = monthEnd(ms);
    if (ms > forecast.endDate) break;
    const flows = expectedFlows(state, forecast, ms, me);
    const t = totals(flows);
    out.push({ month: monthKey(ms), income: t.income, expense: t.expense, net: t.net, source: me < asOf ? 'actual' : ms > asOf ? 'forecast' : 'mixed' });
  }
  return out;
}

/* ------------------------------------------------------------
   Annualised view of a line (useful for "what does this cost a year")
   ------------------------------------------------------------ */
export function annualAmount(line, from) {
  const occs = occurrences(line.schedule, from, addDays(addMonths(from, 12), -1));
  return occs.reduce((s, o) => s + amountAt(line, o.date).expected, 0);
}

export function monthlyEquivalent(line, from) {
  return annualAmount(line, from) / 12;
}

/* ------------------------------------------------------------
   Validation of a line / transaction (returns array of messages)
   ------------------------------------------------------------ */
export function validateLine(line, state) {
  const errors = [];
  if (!line.name || !line.name.trim()) errors.push('Give the item a name.');
  if (!['income', 'expense', 'transfer'].includes(line.kind)) errors.push('Choose income, expense or transfer.');
  if (!(Number(line.amount) >= 0)) errors.push('Amount must be a number of zero or more.');
  if (!line.schedule || !line.schedule.start) errors.push('Choose a start date.');
  if (line.schedule && line.schedule.end && line.schedule.end < line.schedule.start) errors.push('End date is before the start date.');
  if (!line.accountId) errors.push('Choose an account.');
  if (line.kind === 'transfer') {
    if (!line.toAccountId) errors.push('Choose the account to transfer to.');
    else if (line.toAccountId === line.accountId) errors.push('A transfer needs two different accounts.');
  }
  if (state && line.accountId && !(state.accounts || []).some((a) => a.id === line.accountId)) errors.push('Unknown account.');
  for (const c of line.changes || []) {
    if (!c.from) errors.push('Each amount change needs a date.');
    if (!(Number(c.amount) >= 0)) errors.push('Each amount change needs an amount.');
  }
  return errors;
}

export function validateTransaction(tx, state) {
  const errors = [];
  if (!tx.date) errors.push('Choose a date.');
  if (!(Number(tx.amount) > 0)) errors.push('Amount must be more than zero.');
  if (!['income', 'expense', 'transfer'].includes(tx.kind)) errors.push('Choose income, expense or transfer.');
  if (!tx.accountId) errors.push('Choose an account.');
  if (tx.kind === 'transfer' && (!tx.toAccountId || tx.toAccountId === tx.accountId)) errors.push('A transfer needs two different accounts.');
  if (state && tx.accountId && !(state.accounts || []).some((a) => a.id === tx.accountId)) errors.push('Unknown account.');
  return errors;
}
