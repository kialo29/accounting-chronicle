/* Example data: a UK trainee accountant's finances, generated relative to today. */
import { addDays, addMonths, monthStart, occurrences, amountAt, applyFlow, today } from './engine.js';

function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

export function sampleState(asOf = today()) {
  const rand = rng(20261015);
  const uid = (p) => `${p}_${Math.floor(rand() * 1e9).toString(36)}`;
  const ym = (offsetMonths, day) => {
    const d = addMonths(monthStart(asOf), offsetMonths);
    return `${d.slice(0, 8)}${String(day).padStart(2, '0')}`;
  };
  const start = ym(-14, 1);
  const year = Number(asOf.slice(0, 4));
  const dec15 = `${asOf.slice(5) <= '12-15' ? year : year + 1}-12-15`;

  const accounts = [
    { id: 'acc_current', name: 'Current account', type: 'current', openingBalance: 0, openingDate: start, interestRate: 0, notes: 'Main bank account' },
    { id: 'acc_savings', name: 'Easy-access savings', type: 'savings', openingBalance: 0, openingDate: start, interestRate: 4.0 },
    { id: 'acc_isa', name: 'Stocks & shares ISA', type: 'investment', openingBalance: 0, openingDate: start, interestRate: 5.0 },
    { id: 'acc_card', name: 'Credit card', type: 'credit', openingBalance: 0, openingDate: start, interestRate: 0, creditLimit: 2500 },
    { id: 'acc_cash', name: 'Cash', type: 'cash', openingBalance: 0, openingDate: start },
  ];

  const scenarios = [
    { id: 'sc_move', name: 'Move to a 2-bed flat (spring)', enabled: false, notes: 'Extra rent, moving van and deposit top-up.' },
    { id: 'sc_card', name: 'Clear the credit card faster', enabled: false, notes: 'An extra £150 a month onto the card.' },
  ];

  const monthly = (start, extra = {}) => ({ frequency: 'monthly', interval: 1, start, weekendRule: 'none', ...extra });
  const weekly = (start, interval = 1) => ({ frequency: 'weekly', interval, start, weekendRule: 'none' });

  const lines = [
    {
      id: 'ln_salary', name: 'Salary (net)', kind: 'income', category: 'Salary', flowType: 'fixed', accountId: 'acc_current',
      amount: 2480, schedule: monthly(start, { dayOfMonth: 'last', weekendRule: 'previous' }),
      changes: [{ from: ym(6, 1), amount: 2580, note: 'Pay review (+4%)' }],
      notes: 'Paid on the last working day of the month.',
    },
    {
      id: 'ln_tutoring', name: 'Tutoring', kind: 'income', category: 'Side income', flowType: 'variable', accountId: 'acc_current',
      amount: 80, amountMin: 0, amountMax: 200, schedule: monthly(ym(-6, 20)),
    },
    {
      id: 'ln_rent', name: 'Rent', kind: 'expense', category: 'Housing', flowType: 'fixed', accountId: 'acc_current',
      amount: 975, schedule: monthly(ym(-14, 1)),
      changes: [{ from: ym(5, 1), amount: 1010, note: 'Landlord increase at renewal' }],
    },
    { id: 'ln_ctax', name: 'Council tax', kind: 'expense', category: 'Housing', flowType: 'fixed', accountId: 'acc_current', amount: 142, schedule: monthly(ym(-14, 1)) },
    { id: 'ln_energy', name: 'Gas & electricity', kind: 'expense', category: 'Utilities', flowType: 'variable', accountId: 'acc_current', amount: 105, amountMin: 70, amountMax: 150, schedule: monthly(ym(-14, 15)), annualGrowthPct: 3 },
    { id: 'ln_water', name: 'Water', kind: 'expense', category: 'Utilities', flowType: 'fixed', accountId: 'acc_current', amount: 32, schedule: monthly(ym(-14, 8)) },
    { id: 'ln_broadband', name: 'Broadband', kind: 'expense', category: 'Utilities', flowType: 'fixed', accountId: 'acc_current', amount: 29, schedule: monthly(ym(-14, 20)) },
    { id: 'ln_phone', name: 'Phone', kind: 'expense', category: 'Phone', flowType: 'fixed', accountId: 'acc_current', amount: 18, schedule: monthly(ym(-14, 12)) },
    { id: 'ln_travel', name: 'Travelcard', kind: 'expense', category: 'Transport', flowType: 'fixed', accountId: 'acc_current', amount: 128, schedule: monthly(ym(-14, 1)) },
    { id: 'ln_groceries', name: 'Groceries', kind: 'expense', category: 'Groceries', flowType: 'variable', accountId: 'acc_current', amount: 70, amountMin: 55, amountMax: 95, schedule: weekly(addDays(asOf, -((Number(asOf.slice(8)) % 7) + 70))) },
    { id: 'ln_eating', name: 'Eating out & coffee', kind: 'expense', category: 'Eating out', flowType: 'discretionary', accountId: 'acc_card', amount: 30, amountMin: 15, amountMax: 55, schedule: weekly(addDays(asOf, -73)) },
    { id: 'ln_gym', name: 'Gym', kind: 'expense', category: 'Health & fitness', flowType: 'fixed', accountId: 'acc_current', amount: 34, schedule: monthly(ym(-14, 1)) },
    { id: 'ln_netflix', name: 'Netflix', kind: 'expense', category: 'Subscriptions', flowType: 'fixed', accountId: 'acc_card', amount: 10.99, schedule: monthly(ym(-14, 3)) },
    { id: 'ln_spotify', name: 'Spotify', kind: 'expense', category: 'Subscriptions', flowType: 'fixed', accountId: 'acc_card', amount: 11.99, schedule: monthly(ym(-14, 7)) },
    { id: 'ln_clothes', name: 'Clothes', kind: 'expense', category: 'Clothing', flowType: 'discretionary', accountId: 'acc_card', amount: 50, amountMin: 0, amountMax: 120, schedule: monthly(ym(-14, 18)) },
    { id: 'ln_misc', name: 'Amazon & misc', kind: 'expense', category: 'Shopping', flowType: 'discretionary', accountId: 'acc_card', amount: 50, amountMin: 20, amountMax: 120, schedule: monthly(ym(-14, 22)) },
    { id: 'ln_haircut', name: 'Haircut', kind: 'expense', category: 'Personal care', flowType: 'fixed', accountId: 'acc_cash', amount: 25, schedule: weekly(addDays(asOf, -31), 6) },
    { id: 'ln_carins', name: 'Car insurance (annual)', kind: 'expense', category: 'Insurance', flowType: 'irregular', accountId: 'acc_current', amount: 640, schedule: { frequency: 'yearly', interval: 1, start: ym(4, 11) }, annualGrowthPct: 8 },
    { id: 'ln_exam', name: 'ACA exam fees', kind: 'expense', category: 'Education', flowType: 'irregular', accountId: 'acc_current', amount: 350, schedule: { frequency: 'once', interval: 1, start: ym(2, 9) } },
    { id: 'ln_xmas', name: 'Christmas gifts', kind: 'expense', category: 'Gifts', flowType: 'irregular', accountId: 'acc_card', amount: 300, amountMin: 220, amountMax: 400, schedule: { frequency: 'once', interval: 1, start: dec15 } },
    { id: 'ln_holiday', name: 'Summer holiday', kind: 'expense', category: 'Travel', flowType: 'irregular', accountId: 'acc_savings', amount: 850, amountMin: 700, amountMax: 1100, schedule: { frequency: 'once', interval: 1, start: ym(8, 5) } },
    { id: 'ln_save', name: 'Savings transfer', kind: 'transfer', category: 'Savings', flowType: 'fixed', accountId: 'acc_current', toAccountId: 'acc_savings', amount: 250, schedule: monthly(ym(-14, 1)), changes: [{ from: ym(6, 1), amount: 325, note: 'After the pay review' }] },
    { id: 'ln_isa', name: 'ISA contribution', kind: 'transfer', category: 'Investing', flowType: 'fixed', accountId: 'acc_current', toAccountId: 'acc_isa', amount: 100, schedule: monthly(ym(-14, 2)) },
    { id: 'ln_cardpay', name: 'Credit card payment', kind: 'transfer', category: 'Debt repayment', flowType: 'fixed', accountId: 'acc_current', toAccountId: 'acc_card', amount: 250, schedule: monthly(ym(-14, 10)) },
    { id: 'ln_cashout', name: 'Cash withdrawal', kind: 'transfer', category: 'Cash', flowType: 'variable', accountId: 'acc_current', toAccountId: 'acc_cash', amount: 20, schedule: monthly(ym(-14, 5)) },
    // Scenario lines
    { id: 'ln_sc_rent', name: 'Extra rent for 2-bed', kind: 'expense', category: 'Housing', flowType: 'fixed', accountId: 'acc_current', amount: 320, schedule: monthly(ym(6, 1)), scenarioId: 'sc_move' },
    { id: 'ln_sc_move', name: 'Moving costs & deposit top-up', kind: 'expense', category: 'Housing', flowType: 'irregular', accountId: 'acc_savings', amount: 900, amountMin: 700, amountMax: 1200, schedule: { frequency: 'once', interval: 1, start: ym(6, 1) }, scenarioId: 'sc_move' },
    { id: 'ln_sc_card', name: 'Extra card payment', kind: 'transfer', category: 'Debt repayment', flowType: 'fixed', accountId: 'acc_current', toAccountId: 'acc_card', amount: 150, schedule: monthly(ym(1, 11)), scenarioId: 'sc_card' },
  ];
  for (const l of lines) l.active = true;

  // Actual transactions for roughly the last 75 days, with realistic variation.
  const histFrom = addDays(asOf, -75);
  const transactions = [];
  const vary = (a, k) => {
    if (a.min === a.max) return a.expected;
    const t = rand();
    return Math.round((a.min + (a.max - a.min) * (0.15 + 0.7 * t) + (k === 'high' ? 10 : 0)) * 100) / 100;
  };
  for (const l of lines) {
    if (l.scenarioId) continue;
    for (const occ of occurrences(l.schedule, histFrom, asOf)) {
      const a = amountAt(l, occ.date);
      let amount = vary(a);
      let date = occ.date;
      if (l.flowType === 'variable' || l.flowType === 'discretionary') {
        date = addDays(date, Math.floor(rand() * 3) - 1);
        if (date > asOf) date = asOf;
      }
      if (l.id === 'ln_tutoring' && rand() < 0.3) continue; // some months no tutoring
      if (l.id === 'ln_clothes' && rand() < 0.4) continue;
      transactions.push({
        id: uid('tx'), date, kind: l.kind, amount, accountId: l.accountId, toAccountId: l.toAccountId,
        category: l.category, flowType: l.flowType, description: l.name, lineId: l.id,
      });
    }
  }
  // Unplanned spending
  const extras = [
    [-61, 'expense', 45, 'acc_card', 'Gifts', 'discretionary', 'Birthday present'],
    [-47, 'expense', 18.5, 'acc_card', 'Transport', 'variable', 'Taxi home'],
    [-40, 'expense', 12.3, 'acc_current', 'Health & fitness', 'variable', 'Pharmacy'],
    [-33, 'expense', 89, 'acc_card', 'Entertainment', 'discretionary', 'Concert tickets'],
    [-26, 'expense', 24, 'acc_current', 'Eating out', 'discretionary', 'Team lunch'],
    [-19, 'income', 60, 'acc_current', 'Other income', 'variable', 'Sold old textbooks'],
    [-12, 'expense', 38, 'acc_card', 'Transport', 'variable', 'Train to see family'],
    [-5, 'expense', 15.99, 'acc_card', 'Education', 'variable', 'Revision question bank'],
    [-2, 'expense', 9.5, 'acc_cash', 'Eating out', 'discretionary', 'Lunch'],
  ];
  for (const [off, kind, amount, acc, cat, ft, desc] of extras) {
    transactions.push({ id: uid('tx'), date: addDays(asOf, off), kind, amount, accountId: acc, category: cat, flowType: ft, description: desc, lineId: null });
  }
  transactions.sort((a, b) => (a.date < b.date ? -1 : 1));

  // Opening balances chosen so that today's balances look realistic.
  const targets = { acc_current: 1480, acc_savings: 3850, acc_isa: 1920, acc_card: -410, acc_cash: 35 };
  const net = {};
  for (const tx of transactions) applyFlow(net, tx, tx.amount);
  for (const acc of accounts) acc.openingBalance = Math.round(((targets[acc.id] || 0) - (net[acc.id] || 0)) * 100) / 100;

  const goals = [
    { id: 'goal_ef', name: 'Emergency fund (3 months of bills)', accountId: 'acc_savings', target: 6000, targetDate: ym(14, 1) },
    { id: 'goal_isa', name: 'ISA pot', accountId: 'acc_isa', target: 5000, targetDate: null },
  ];

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
    accounts,
    lines,
    transactions,
    scenarios,
    goals,
    categories: [],
  };
}
