import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  addMonths,
  addDays,
  occurrences,
  applyWeekendRule,
  nthWeekdayOfMonth,
  amountAt,
  actualBalances,
  matchOccurrences,
  buildForecast,
  cashBudget,
  balanceSheet,
  incomeStatement,
  actualVsPlan,
  budgetTracker,
  currentPeriod,
  safeToSpend,
  goalProgress,
  debtPayoff,
  suggestLines,
  fullYearsBetween,
  monthlyEquivalent,
} from '../src/budget/engine.js';

const near = (a, b, msg) => assert.ok(Math.abs(a - b) < 0.005, `${msg || ''} expected ${b} got ${a}`);

function baseState(overrides = {}) {
  return {
    settings: { currency: 'GBP', asOf: '2026-10-15', horizonMonths: 6, safetyBuffer: 500, matchWindowDays: 5 },
    accounts: [
      { id: 'cur', name: 'Current', type: 'current', openingBalance: 1000, openingDate: '2026-01-01' },
      { id: 'sav', name: 'Savings', type: 'savings', openingBalance: 2000, openingDate: '2026-01-01', interestRate: 12 },
      { id: 'cc', name: 'Card', type: 'credit', openingBalance: -300, openingDate: '2026-01-01', creditLimit: 1000 },
    ],
    lines: [],
    transactions: [],
    scenarios: [],
    goals: [],
    ...overrides,
  };
}

test('addMonths clamps to month length', () => {
  assert.equal(addMonths('2026-01-31', 1), '2026-02-28');
  assert.equal(addMonths('2026-01-31', 3), '2026-04-30');
  assert.equal(addMonths('2026-11-15', 2), '2027-01-15');
  assert.equal(addMonths('2026-03-15', -3), '2025-12-15');
});

test('weekend rules', () => {
  // 2026-10-17 is a Saturday, 2026-10-18 a Sunday
  assert.equal(applyWeekendRule('2026-10-17', 'previous'), '2026-10-16');
  assert.equal(applyWeekendRule('2026-10-18', 'previous'), '2026-10-16');
  assert.equal(applyWeekendRule('2026-10-17', 'next'), '2026-10-19');
  assert.equal(applyWeekendRule('2026-10-18', 'nearest'), '2026-10-19');
  assert.equal(applyWeekendRule('2026-10-15', 'previous'), '2026-10-15');
});

test('nth weekday of month', () => {
  // October 2026: first Friday is the 2nd, last Friday the 30th
  assert.equal(nthWeekdayOfMonth(2026, 10, 1, 5), '2026-10-02');
  assert.equal(nthWeekdayOfMonth(2026, 10, -1, 5), '2026-10-30');
  assert.equal(nthWeekdayOfMonth(2026, 10, 2, 1), '2026-10-12');
});

test('monthly occurrences clamp the day and respect start/end', () => {
  const s = { frequency: 'monthly', interval: 1, start: '2026-01-31', end: '2026-05-15' };
  const dates = occurrences(s, '2026-01-01', '2026-12-31').map((o) => o.date);
  assert.deepEqual(dates, ['2026-01-31', '2026-02-28', '2026-03-31', '2026-04-30']);
});

test('last working day of the month', () => {
  const s = { frequency: 'monthly', interval: 1, start: '2026-01-01', dayOfMonth: 'last', weekendRule: 'previous' };
  const dates = occurrences(s, '2026-10-01', '2027-01-31').map((o) => o.date);
  // Oct 31 2026 is Saturday -> Oct 30; Nov 30 Monday; Dec 31 Thursday; Jan 31 2027 Sunday -> Jan 29
  assert.deepEqual(dates, ['2026-10-30', '2026-11-30', '2026-12-31', '2027-01-29']);
});

test('fortnightly and 4-weekly occurrences', () => {
  const s = { frequency: 'weekly', interval: 2, start: '2026-10-02' };
  const dates = occurrences(s, '2026-10-01', '2026-11-30').map((o) => o.date);
  assert.deepEqual(dates, ['2026-10-02', '2026-10-16', '2026-10-30', '2026-11-13', '2026-11-27']);
  const s4 = { frequency: 'weekly', interval: 4, start: '2026-01-02' };
  const d4 = occurrences(s4, '2026-10-01', '2026-10-31').map((o) => o.date);
  assert.deepEqual(d4, ['2026-10-09']);
});

test('yearly, quarterly and one-off', () => {
  const y = { frequency: 'yearly', interval: 1, start: '2025-03-10' };
  assert.deepEqual(occurrences(y, '2026-01-01', '2027-12-31').map((o) => o.date), ['2026-03-10', '2027-03-10']);
  const q = { frequency: 'monthly', interval: 3, start: '2026-01-15' };
  assert.deepEqual(occurrences(q, '2026-01-01', '2026-12-31').map((o) => o.date), ['2026-01-15', '2026-04-15', '2026-07-15', '2026-10-15']);
  const o = { frequency: 'once', start: '2026-12-20' };
  assert.deepEqual(occurrences(o, '2026-12-01', '2026-12-31').map((x) => x.date), ['2026-12-20']);
  assert.deepEqual(occurrences(o, '2027-01-01', '2027-12-31'), []);
});

test('weekend-shifted occurrence at the range edge is kept', () => {
  // Nominal 2026-10-31 (Saturday) moves to Friday 2026-10-30, inside October.
  const s = { frequency: 'monthly', interval: 1, start: '2026-08-31', weekendRule: 'previous' };
  const dates = occurrences(s, '2026-10-01', '2026-10-31').map((o) => o.date);
  assert.deepEqual(dates, ['2026-10-30']);
  // And it is not reported in November.
  assert.deepEqual(occurrences(s, '2026-11-01', '2026-11-29').map((o) => o.date), []);
});

test('amountAt applies changes and annual growth', () => {
  const line = {
    amount: 950,
    schedule: { frequency: 'monthly', interval: 1, start: '2025-01-01' },
    changes: [{ from: '2027-03-01', amount: 1000, amountMin: 990, amountMax: 1050 }],
    annualGrowthPct: 0,
  };
  assert.equal(amountAt(line, '2027-02-01').expected, 950);
  assert.deepEqual(amountAt(line, '2027-03-01'), { min: 990, expected: 1000, max: 1050 });
  const grow = { amount: 100, schedule: { frequency: 'monthly', interval: 1, start: '2025-06-01' }, annualGrowthPct: 10 };
  near(amountAt(grow, '2026-05-31').expected, 100);
  near(amountAt(grow, '2026-06-01').expected, 110);
  near(amountAt(grow, '2027-06-01').expected, 121);
  assert.equal(fullYearsBetween('2025-06-01', '2026-05-31'), 0);
  assert.equal(fullYearsBetween('2025-06-01', '2027-06-01'), 2);
});

test('actual balances follow sign conventions', () => {
  const st = baseState({
    transactions: [
      { id: 't1', date: '2026-10-01', kind: 'income', amount: 500, accountId: 'cur' },
      { id: 't2', date: '2026-10-02', kind: 'expense', amount: 120, accountId: 'cc' },
      { id: 't3', date: '2026-10-03', kind: 'transfer', amount: 200, accountId: 'cur', toAccountId: 'cc' },
      { id: 't4', date: '2026-11-01', kind: 'expense', amount: 999, accountId: 'cur' },
    ],
  });
  const b = actualBalances(st, '2026-10-15');
  assert.equal(b.cur, 1300);
  assert.equal(b.cc, -220);
  assert.equal(b.sav, 2000);
});

test('matching consumes nearest actual within window', () => {
  const line = { id: 'rent', kind: 'expense', amount: 950, schedule: { frequency: 'monthly', interval: 1, start: '2026-01-01' } };
  const txs = [
    { id: 'a', date: '2026-09-30', lineId: 'rent', amount: 950 },
    { id: 'b', date: '2026-11-03', lineId: 'rent', amount: 950 },
    { id: 'c', date: '2026-12-20', lineId: 'rent', amount: 950 },
  ];
  const occs = occurrences(line.schedule, '2026-10-01', '2026-12-31');
  const { matched, unmatchedTx } = matchOccurrences(line, txs, occs, 5);
  assert.equal(matched.get('2026-10-01').id, 'a');
  assert.equal(matched.get('2026-11-01').id, 'b');
  assert.equal(matched.has('2026-12-01'), false);
  assert.deepEqual(unmatchedTx.map((t) => t.id), ['c']);
});

test('forecast: paid-early items are excluded, overdue items carried to as-of', () => {
  const st = baseState({
    settings: { asOf: '2026-10-15', horizonMonths: 6, safetyBuffer: 500, matchWindowDays: 5, overdueMode: 'all' },
    lines: [
      { id: 'rent', name: 'Rent', kind: 'expense', category: 'Housing', flowType: 'fixed', accountId: 'cur', amount: 950, schedule: { frequency: 'monthly', interval: 1, start: '2026-01-01' } },
      { id: 'gym', name: 'Gym', kind: 'expense', category: 'Health', flowType: 'fixed', accountId: 'cur', amount: 35, schedule: { frequency: 'monthly', interval: 1, start: '2026-01-10' } },
      { id: 'sal', name: 'Salary', kind: 'income', category: 'Salary', flowType: 'fixed', accountId: 'cur', amount: 2300, schedule: { frequency: 'monthly', interval: 1, start: '2026-01-01', dayOfMonth: 'last', weekendRule: 'previous' } },
    ],
    transactions: [
      // rent for 1 Nov paid on 30 Oct (future-dated relative to as-of 15 Oct) -> certain event, Nov occurrence matched
      { id: 't1', date: '2026-10-30', kind: 'expense', amount: 950, accountId: 'cur', lineId: 'rent', category: 'Housing' },
    ],
  });
  const f = buildForecast(st);
  assert.equal(f.asOf, '2026-10-15');
  const rentEvents = f.events.filter((e) => e.lineId === 'rent');
  assert.ok(!rentEvents.some((e) => e.nominal === '2026-11-01'), 'November rent matched by the early payment');
  assert.ok(rentEvents.some((e) => e.source === 'actual' && e.date === '2026-10-30'));
  const gymOverdue = f.overdue.filter((e) => e.lineId === 'gym');
  assert.equal(gymOverdue.length, 1, 'only the latest miss is carried forward');
  assert.equal(gymOverdue[0].date, '2026-10-15');
  assert.equal(gymOverdue[0].plannedDate, '2026-10-10');
  // Older misses are listed as unrecorded, not carried
  assert.ok(f.unrecorded.some((e) => e.lineId === 'gym' && e.plannedDate === '2026-09-10'));
  // Day 0 balance includes overdue gym and the overdue September salary (never recorded, mode 'all')
  assert.equal(f.days[0].balances.expected.cur, 1000 - 35 + 2300);
  // Salary lands on 30 Oct (31st is Saturday)
  assert.ok(f.events.some((e) => e.lineId === 'sal' && e.date === '2026-10-30'));
});

test('forecast: default mode only carries misses for lines you track', () => {
  const lines = [
    { id: 'rent', name: 'Rent', kind: 'expense', category: 'Housing', accountId: 'cur', amount: 950, schedule: { frequency: 'monthly', interval: 1, start: '2026-01-01' } },
    { id: 'gym', name: 'Gym', kind: 'expense', category: 'Health', accountId: 'cur', amount: 35, schedule: { frequency: 'monthly', interval: 1, start: '2026-01-10' } },
  ];
  const st = baseState({
    lines,
    transactions: [{ id: 't1', date: '2026-09-01', kind: 'expense', amount: 950, accountId: 'cur', lineId: 'rent' }],
  });
  const f = buildForecast(st);
  // Rent is tracked (linked once) and 1 Oct was missed -> carried.
  assert.deepEqual(f.overdue.map((e) => e.lineId), ['rent']);
  // Gym never linked -> listed as unrecorded, not carried.
  assert.ok(f.unrecorded.some((e) => e.lineId === 'gym' && e.plannedDate === '2026-10-10'));
  assert.equal(f.days[0].balances.expected.cur, 1000 - 950 - 950);
  // Mode 'none' carries nothing.
  st.settings.overdueMode = 'none';
  assert.equal(buildForecast(st).overdue.length, 0);
});

test('forecast: skipped occurrences are ignored', () => {
  const st = baseState({
    lines: [{ id: 'gym', name: 'Gym', kind: 'expense', category: 'Health', accountId: 'cur', amount: 35, skips: ['2026-11-20'], schedule: { frequency: 'monthly', interval: 1, start: '2026-10-20' } }],
  });
  const f = buildForecast(st);
  const dates = f.events.filter((e) => e.lineId === 'gym').map((e) => e.date);
  assert.ok(dates.includes('2026-10-20'));
  assert.ok(!dates.includes('2026-11-20'));
  assert.ok(dates.includes('2026-12-20'));
});

test('forecast: ranges produce low/expected/high and warnings fire', () => {
  const st = baseState({
    settings: { asOf: '2026-10-15', horizonMonths: 3, safetyBuffer: 0 },
    lines: [
      { id: 'bills', name: 'Bills', kind: 'expense', category: 'Utilities', accountId: 'cur', amount: 100, amountMin: 80, amountMax: 140, schedule: { frequency: 'monthly', interval: 1, start: '2026-10-16' } },
      { id: 'big', name: 'Holiday', kind: 'expense', category: 'Travel', accountId: 'cur', amount: 1500, schedule: { frequency: 'once', start: '2026-10-20' } },
    ],
  });
  const f = buildForecast(st);
  const d = f.byDate['2026-10-16'];
  assert.equal(d.balances.low.cur, 1000 - 140);
  assert.equal(d.balances.expected.cur, 900);
  assert.equal(d.balances.high.cur, 920);
  const neg = f.warnings.find((w) => w.type === 'negative' && w.accountId === 'cur');
  assert.ok(neg);
  assert.equal(neg.date, '2026-10-20');
  // Liquid total includes savings (2000), so it stays positive; current alone is negative.
  assert.equal(f.byDate['2026-10-20'].balances.expected.cur, -600);
  assert.ok(f.minLiquid.value < 1400, 'liquid keeps falling as bills recur');
});

test('forecast: monthly interest accrues on savings and debts', () => {
  const st = baseState({ settings: { asOf: '2026-10-15', horizonMonths: 2 }, accounts: [
    { id: 'sav', name: 'Savings', type: 'savings', openingBalance: 1200, interestRate: 12 },
    { id: 'loan', name: 'Loan', type: 'loan', openingBalance: -1200, interestRate: 12 },
  ] });
  const f = buildForecast(st);
  near(f.byDate['2026-11-01'].balances.expected.sav, 1212, 'savings +1%');
  near(f.byDate['2026-11-01'].balances.expected.loan, -1212, 'loan +1%');
  near(f.byDate['2026-10-31'].balances.expected.sav, 1200, 'no interest before the 1st');
});

test('cash budget: opening/closing tie up and sources are labelled', () => {
  const st = baseState({
    settings: { asOf: '2026-10-15', horizonMonths: 4, safetyBuffer: 0 },
    lines: [
      { id: 'sal', name: 'Salary', kind: 'income', category: 'Salary', accountId: 'cur', amount: 2000, schedule: { frequency: 'monthly', interval: 1, start: '2026-01-25' } },
      { id: 'rent', name: 'Rent', kind: 'expense', category: 'Housing', accountId: 'cur', amount: 900, schedule: { frequency: 'monthly', interval: 1, start: '2026-01-01' } },
      { id: 'save', name: 'Save', kind: 'transfer', category: 'Savings', accountId: 'cur', toAccountId: 'sav', amount: 300, schedule: { frequency: 'monthly', interval: 1, start: '2026-01-26' } },
      { id: 'card', name: 'Pay card', kind: 'transfer', category: 'Debt', accountId: 'cur', toAccountId: 'cc', amount: 100, schedule: { frequency: 'monthly', interval: 1, start: '2026-01-27' } },
    ],
    transactions: [
      { id: 't1', date: '2026-09-25', kind: 'income', amount: 2000, accountId: 'cur', lineId: 'sal', category: 'Salary' },
      { id: 't2', date: '2026-10-01', kind: 'expense', amount: 900, accountId: 'cur', lineId: 'rent', category: 'Housing' },
    ],
  });
  const f = buildForecast(st);
  const rows = cashBudget(st, f, 1, 2);
  assert.deepEqual(rows.map((r) => r.month), ['2026-09', '2026-10', '2026-11', '2026-12']);
  assert.deepEqual(rows.map((r) => r.source), ['actual', 'mixed', 'forecast', 'forecast']);
  const sep = rows[0];
  assert.equal(sep.receipts, 2000);
  assert.equal(sep.payments, 0);
  const oct = rows[1];
  assert.equal(oct.receipts, 2000); // forecast salary on 25th
  assert.equal(oct.payments, 900); // actual rent paid
  assert.equal(oct.transfersOut, 100); // card payment leaves liquid; savings transfer stays within liquid
  for (const r of rows) near(r.closingLiquid, r.openingLiquid + r.net + r.other, `month ${r.month} ties`);
  // Savings account inflow is visible per account
  assert.equal(rows[2].byAccount.sav.inflow, 300);
  assert.equal(rows[2].byAccount.cc.inflow, 100);
});

test('balance sheet: assets, liabilities, net worth and projection', () => {
  const st = baseState({ settings: { asOf: '2026-10-15', horizonMonths: 2 }, lines: [
    { id: 'sal', name: 'Salary', kind: 'income', category: 'Salary', accountId: 'cur', amount: 500, schedule: { frequency: 'once', start: '2026-11-05' } },
  ] });
  const f = buildForecast(st);
  const bs = balanceSheet(st, f, '2026-10-15', '2026-09-15');
  assert.equal(bs.totals.assets, 3000);
  assert.equal(bs.totals.liabilities, 300);
  assert.equal(bs.totals.netWorth, 2700);
  assert.equal(bs.projected, false);
  const future = balanceSheet(st, f, '2026-11-30');
  assert.equal(future.projected, true);
  assert.equal(future.totals.assets, 3520); // +500 salary, +20 savings interest on 1 Nov
});

test('income statement: budget vs actual vs expected', () => {
  const st = baseState({
    settings: { asOf: '2026-10-15', horizonMonths: 2, safetyBuffer: 0 },
    lines: [
      { id: 'sal', name: 'Salary', kind: 'income', category: 'Salary', flowType: 'fixed', accountId: 'cur', amount: 2000, schedule: { frequency: 'monthly', interval: 1, start: '2026-01-25' } },
      { id: 'food', name: 'Groceries', kind: 'expense', category: 'Groceries', flowType: 'variable', accountId: 'cur', amount: 60, schedule: { frequency: 'weekly', interval: 1, start: '2026-10-03' } },
      { id: 'rent', name: 'Rent', kind: 'expense', category: 'Housing', flowType: 'fixed', accountId: 'cur', amount: 900, schedule: { frequency: 'monthly', interval: 1, start: '2026-01-01' } },
    ],
    transactions: [
      { id: 't1', date: '2026-10-01', kind: 'expense', amount: 900, accountId: 'cur', lineId: 'rent', category: 'Housing', flowType: 'fixed' },
      { id: 't2', date: '2026-10-03', kind: 'expense', amount: 72, accountId: 'cur', lineId: 'food', category: 'Groceries', flowType: 'variable' },
      { id: 't3', date: '2026-10-10', kind: 'expense', amount: 55, accountId: 'cur', lineId: 'food', category: 'Groceries', flowType: 'variable' },
      { id: 't4', date: '2026-10-12', kind: 'expense', amount: 40, accountId: 'cur', category: 'Eating out', flowType: 'discretionary' },
    ],
  });
  const f = buildForecast(st);
  const is = incomeStatement(st, f, '2026-10-01', '2026-10-31');
  assert.equal(is.income.budget, 2000);
  assert.equal(is.income.actual, 0);
  assert.equal(is.income.expected, 2000);
  const groceries = is.expenses.rows.find((r) => r.category === 'Groceries');
  assert.equal(groceries.budget, 60 * 5); // 3,10,17,24,31 Oct
  assert.equal(groceries.actual, 127);
  assert.equal(groceries.expected, 127 + 60 * 3); // remaining 17, 24, 31
  const eating = is.expenses.rows.find((r) => r.category === 'Eating out');
  assert.equal(eating.budget, 0);
  assert.equal(eating.actual, 40);
  assert.equal(is.expenses.budget, 300 + 900);
  assert.equal(is.net.expected, 2000 - (127 + 180 + 900 + 40));
  assert.ok(is.expenseGroups.map((g) => g.flowType).includes('discretionary'));
  assert.equal(is.partial, true);
});

test('actual vs plan and budget tracker', () => {
  const st = baseState({
    settings: { asOf: '2026-10-15', horizonMonths: 2, safetyBuffer: 0 },
    lines: [
      { id: 'rent', name: 'Rent', kind: 'expense', category: 'Housing', flowType: 'fixed', accountId: 'cur', amount: 900, schedule: { frequency: 'monthly', interval: 1, start: '2026-01-01' } },
      { id: 'fun', name: 'Fun', kind: 'expense', category: 'Entertainment', flowType: 'discretionary', accountId: 'cur', amount: 100, schedule: { frequency: 'monthly', interval: 1, start: '2026-01-20' } },
    ],
    transactions: [
      { id: 't1', date: '2026-09-01', kind: 'expense', amount: 900, accountId: 'cur', lineId: 'rent', category: 'Housing' },
      { id: 't2', date: '2026-09-21', kind: 'expense', amount: 130, accountId: 'cur', lineId: 'fun', category: 'Entertainment' },
      { id: 't3', date: '2026-10-01', kind: 'expense', amount: 900, accountId: 'cur', lineId: 'rent', category: 'Housing' },
      { id: 't4', date: '2026-10-05', kind: 'expense', amount: 60, accountId: 'cur', category: 'Entertainment' },
    ],
  });
  const f = buildForecast(st);
  const avp = actualVsPlan(st, f, 2);
  assert.equal(avp[0].month, '2026-09');
  assert.equal(avp[0].plan.expense, 1000);
  assert.equal(avp[0].actual.expense, 1030);
  assert.equal(avp[0].variance.expense, 30);
  assert.equal(avp[1].partial, true);

  const tr = budgetTracker(st, f, '2026-10-01', '2026-10-31');
  const ent = tr.rows.find((r) => r.category === 'Entertainment');
  assert.equal(ent.budget, 100);
  assert.equal(ent.spent, 60);
  assert.equal(ent.due, 100); // planned 20 Oct still to come (not linked)
  assert.equal(ent.status, 'at-risk');
  const housing = tr.rows.find((r) => r.category === 'Housing');
  assert.equal(housing.due, 0);
  assert.equal(housing.status, 'ok');
  assert.equal(tr.daysLeft, 16);
});

test('pay-cycle periods', () => {
  assert.deepEqual(currentPeriod('2026-10-15', 1), { from: '2026-10-01', to: '2026-10-31' });
  assert.deepEqual(currentPeriod('2026-10-15', 25), { from: '2026-09-25', to: '2026-10-24' });
  assert.deepEqual(currentPeriod('2026-10-26', 25), { from: '2026-10-25', to: '2026-11-24' });
});

test('safe to spend, goals and debt payoff', () => {
  const st = baseState({
    settings: { asOf: '2026-10-15', horizonMonths: 12, safetyBuffer: 200 },
    lines: [
      { id: 'rent', name: 'Rent', kind: 'expense', category: 'Housing', accountId: 'cur', amount: 600, schedule: { frequency: 'monthly', interval: 1, start: '2026-01-01' } },
      { id: 'sal', name: 'Salary', kind: 'income', category: 'Salary', accountId: 'cur', amount: 1500, schedule: { frequency: 'monthly', interval: 1, start: '2026-01-28' } },
      { id: 'save', name: 'Save', kind: 'transfer', category: 'Savings', accountId: 'cur', toAccountId: 'sav', amount: 250, schedule: { frequency: 'monthly', interval: 1, start: '2026-01-29' } },
      { id: 'card', name: 'Card', kind: 'transfer', category: 'Debt', accountId: 'cur', toAccountId: 'cc', amount: 100, schedule: { frequency: 'monthly', interval: 1, start: '2026-01-29' } },
    ],
    goals: [{ id: 'g1', name: 'Emergency fund', accountId: 'sav', target: 3000, targetDate: '2027-03-31' }],
  });
  const f = buildForecast(st);
  const sts = safeToSpend(st, f, 30);
  // Current: 1000 today -> +1500 (28 Oct) -> -350 (29 Oct) -> -600 (1 Nov). Lowest is today, less buffer 200.
  assert.equal(sts.lowBalance, 1000);
  assert.equal(sts.amount, 800);
  assert.equal(sts.lowDate, '2026-10-15');
  const g = goalProgress(st, f, st.goals[0]);
  assert.equal(g.current, 2000);
  // 2000 -> 2250 (29 Oct) -> interest -> 2500+ (29 Nov) -> 2750+ (29 Dec) -> 3000+ (29 Jan)
  assert.equal(g.reachDate, '2027-01-29');
  assert.equal(g.onTrack, true);
  const dp = debtPayoff(st, f, st.accounts[2]);
  assert.equal(dp.date, '2026-12-29'); // -300 -> -200 -> -100 -> 0
});

test('suggestLines ranks the matching planned item first', () => {
  const st = baseState({
    lines: [
      { id: 'rent', name: 'Rent', kind: 'expense', category: 'Housing', accountId: 'cur', amount: 950, schedule: { frequency: 'monthly', interval: 1, start: '2026-01-01' } },
      { id: 'gym', name: 'Gym', kind: 'expense', category: 'Health', accountId: 'cur', amount: 35, schedule: { frequency: 'monthly', interval: 1, start: '2026-01-03' } },
    ],
  });
  const s = suggestLines(st, { kind: 'expense', date: '2026-10-02', amount: 950, accountId: 'cur' });
  assert.equal(s[0].line.id, 'rent');
  near(monthlyEquivalent(st.lines[0], '2026-01-01'), 950);
});

test('scenario toggles include or exclude lines', () => {
  const st = baseState({
    settings: { asOf: '2026-10-15', horizonMonths: 2 },
    scenarios: [{ id: 'job', name: 'New job', enabled: false }],
    lines: [
      { id: 'bonus', name: 'Bonus', kind: 'income', category: 'Salary', accountId: 'cur', amount: 500, scenarioId: 'job', schedule: { frequency: 'once', start: '2026-11-01' } },
    ],
  });
  assert.equal(buildForecast(st).events.length, 0);
  st.scenarios[0].enabled = true;
  assert.equal(buildForecast(st).events.length, 1);
});

test('forecast horizon ends at month end and days are contiguous', () => {
  const st = baseState({ settings: { asOf: '2026-10-15', horizonMonths: 3 } });
  const f = buildForecast(st);
  assert.equal(f.endDate, '2026-12-31');
  assert.equal(f.days.length, 17 + 30 + 31);
  assert.equal(f.days[1].date, addDays(f.asOf, 1));
});
