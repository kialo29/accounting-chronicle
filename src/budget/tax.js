/* ============================================================
   UK take-home pay calculator — pure functions, no DOM.
   Rules are data so they can be edited when the tax year changes.
   ============================================================ */

export const DEFAULT_RULES = {
  taxYear: '2025/26',
  personalAllowance: 12570,
  paTaperStart: 100000, // allowance reduced £1 for every £2 above this
  // Income tax bands (England, Wales and Northern Ireland): width of taxable income after the allowance
  rUK: [
    { name: 'Basic rate', rate: 0.2, upTo: 37700 },
    { name: 'Higher rate', rate: 0.4, upTo: 125140 - 12570 },
    { name: 'Additional rate', rate: 0.45, upTo: Infinity },
  ],
  // Scottish bands, as taxable income after the allowance
  scotland: [
    { name: 'Starter rate', rate: 0.19, upTo: 15397 - 12570 },
    { name: 'Basic rate', rate: 0.2, upTo: 27491 - 12570 },
    { name: 'Intermediate rate', rate: 0.21, upTo: 43662 - 12570 },
    { name: 'Higher rate', rate: 0.42, upTo: 75000 - 12570 },
    { name: 'Advanced rate', rate: 0.45, upTo: 125140 - 12570 },
    { name: 'Top rate', rate: 0.48, upTo: Infinity },
  ],
  ni: {
    primaryThreshold: 12570,
    upperEarningsLimit: 50270,
    mainRate: 0.08,
    upperRate: 0.02,
    employerThreshold: 5000,
    employerRate: 0.15,
  },
  studentLoans: {
    plan1: { label: 'Plan 1', threshold: 26065, rate: 0.09 },
    plan2: { label: 'Plan 2', threshold: 28470, rate: 0.09 },
    plan4: { label: 'Plan 4 (Scotland)', threshold: 32745, rate: 0.09 },
    plan5: { label: 'Plan 5', threshold: 25000, rate: 0.09 },
    postgrad: { label: 'Postgraduate loan', threshold: 21000, rate: 0.06 },
  },
};

export const PAY_FREQUENCIES = [
  { id: 'monthly', label: 'Monthly', perYear: 12 },
  { id: 'fourweekly', label: 'Every 4 weeks', perYear: 13 },
  { id: 'fortnightly', label: 'Fortnightly', perYear: 26 },
  { id: 'weekly', label: 'Weekly', perYear: 52 },
];

export const PENSION_METHODS = [
  ['salarySacrifice', 'Salary sacrifice (saves tax and NI)'],
  ['netPay', 'Net pay arrangement (saves tax, not NI)'],
  ['reliefAtSource', 'Relief at source (taken from net pay, 20% added back)'],
];

/** Personal allowance from a tax code such as 1257L; null when it cannot be read. */
export function allowanceFromTaxCode(code, rules = DEFAULT_RULES) {
  if (!code) return rules.personalAllowance;
  const c = String(code).trim().toUpperCase().replace(/^S|^C/, '');
  if (/^(BR|D0|D1|0T|NT)$/.test(c)) return 0;
  const m = c.match(/^K?(\d{1,4})[LMNTYP]?$/);
  if (!m) return null;
  const n = Number(m[1]);
  if (c.startsWith('K')) return -(n * 10 + 9);
  return n * 10 + 9;
}

function round2(n) {
  return Math.round(n * 100) / 100;
}

/**
 * input = {
 *   gross,                 // annual base salary before deductions
 *   bonus: 0,              // annual bonus, taxed and NI'd as earnings (not pensionable here)
 *   scotland: false,
 *   taxCode: '1257L',      // optional; overrides the standard allowance
 *   pensionPct: 0,         // employee contribution, % of base salary
 *   pensionMethod: 'salarySacrifice' | 'netPay' | 'reliefAtSource',
 *   employerPensionPct: 0, // for the employer cost line only
 *   studentLoans: ['plan2', 'postgrad'],
 *   noNI: false,           // over State Pension age
 *   frequency: 'monthly',
 *   taxableBenefits: 0,    // annual taxable value of benefits in kind (PMI, car): taxed, not NI'd, not cash
 *   holidayDays: 0,        // days of extra leave bought through salary sacrifice
 *   workingDays: 260,      // days a year used to price a day of leave
 *   otherSacrifice: 0,     // annual: cycle to work, EV lease, childcare etc.
 *   payrollGiving: 0,      // annual: charity from pre-tax pay (tax relief, no NI relief)
 *   loanRepayment: 0,      // per pay period, from net pay (company / graduate loan)
 *   loanBalance: 0,        // remaining balance, to show when it clears
 *   otherNetDeductions: 0, // per pay period, from net pay (season ticket loan, union fees…)
 * }
 */
function compute(input, rules) {
  const gross = Math.max(0, Number(input.gross) || 0);
  const bonus = Math.max(0, Number(input.bonus) || 0);
  const pensionPct = Math.max(0, Number(input.pensionPct) || 0) / 100;
  const method = input.pensionMethod || 'salarySacrifice';
  const freq = PAY_FREQUENCIES.find((f) => f.id === input.frequency) || PAY_FREQUENCIES[0];
  const num = (k) => Math.max(0, Number(input[k]) || 0);

  const pensionGross = round2(gross * pensionPct);
  const workingDays = Math.max(1, Number(input.workingDays) || 260);
  const holidayCost = round2((gross / workingDays) * num('holidayDays'));
  const otherSacrifice = round2(num('otherSacrifice'));
  const sacrifice = (method === 'salarySacrifice' ? pensionGross : 0) + holidayCost + otherSacrifice;
  const payrollGiving = round2(num('payrollGiving'));
  const taxableBenefits = round2(num('taxableBenefits'));
  const loanRepayment = round2(num('loanRepayment') * freq.perYear);
  const otherNetDeductions = round2(num('otherNetDeductions') * freq.perYear);

  const earnings = gross + bonus - sacrifice; // cash earnings after salary sacrifice
  const salaryForNI = Math.max(0, earnings);
  const salaryForTax = Math.max(0, earnings - (method === 'netPay' ? pensionGross : 0) - payrollGiving + taxableBenefits);
  const deductedFromPay = method === 'reliefAtSource' ? round2(pensionGross * 0.8) : method === 'netPay' ? pensionGross : 0;

  let allowance = allowanceFromTaxCode(input.taxCode, rules);
  const badCode = allowance == null;
  if (badCode) allowance = rules.personalAllowance;
  if (salaryForTax > rules.paTaperStart && allowance > 0) {
    allowance = Math.max(0, allowance - Math.floor((salaryForTax - rules.paTaperStart) / 2));
  }
  const taxable = Math.max(0, salaryForTax - allowance);

  const bands = input.scotland ? rules.scotland : rules.rUK;
  const bandRows = [];
  let remaining = taxable;
  let lower = 0;
  let incomeTax = 0;
  for (const b of bands) {
    const inBand = Math.max(0, Math.min(remaining, b.upTo - lower));
    const tax = round2(inBand * b.rate);
    if (inBand > 0) bandRows.push({ name: b.name, rate: b.rate, amount: inBand, tax });
    incomeTax += tax;
    remaining -= inBand;
    lower = b.upTo;
    if (remaining <= 0) break;
  }
  incomeTax = round2(incomeTax);

  const ni = rules.ni;
  let nationalInsurance = 0;
  if (!input.noNI) {
    const main = Math.max(0, Math.min(salaryForNI, ni.upperEarningsLimit) - ni.primaryThreshold);
    const upper = Math.max(0, salaryForNI - ni.upperEarningsLimit);
    nationalInsurance = round2(main * ni.mainRate + upper * ni.upperRate);
  }
  const employerNI = round2(Math.max(0, salaryForNI - ni.employerThreshold) * ni.employerRate);
  const employerPension = round2(gross * (Math.max(0, Number(input.employerPensionPct) || 0) / 100));

  const loanRows = [];
  let studentLoan = 0;
  for (const id of input.studentLoans || []) {
    const plan = rules.studentLoans[id];
    if (!plan) continue;
    const repay = round2(Math.max(0, salaryForNI - plan.threshold) * plan.rate);
    loanRows.push({ id, label: plan.label, threshold: plan.threshold, rate: plan.rate, amount: repay });
    studentLoan += repay;
  }
  studentLoan = round2(studentLoan);

  const totalDeductions = round2(sacrifice + deductedFromPay + payrollGiving + incomeTax + nationalInsurance + studentLoan + loanRepayment + otherNetDeductions);
  const net = round2(gross + bonus - totalDeductions);
  return {
    gross, bonus, pensionGross, holidayCost, otherSacrifice, sacrifice, payrollGiving, taxableBenefits, loanRepayment, otherNetDeductions,
    salaryForNI, salaryForTax, deductedFromPay, allowance, badCode, taxable, bandRows, incomeTax, nationalInsurance, employerNI, employerPension,
    loanRows, studentLoan, totalDeductions, net, freq, method,
  };
}

export function takeHome(input, rules = DEFAULT_RULES) {
  const c = compute(input, rules);
  const warnings = [];
  if (c.method === 'reliefAtSource' && c.pensionGross > 0) {
    warnings.push('Relief at source: basic-rate relief is added to your pension automatically. Higher or additional-rate taxpayers claim the rest through Self Assessment.');
  }
  if (c.badCode) warnings.push(`Tax code "${input.taxCode}" was not recognised, so the standard allowance was used.`);
  if (c.taxableBenefits > 0) warnings.push('Taxable benefits are not paid to you as cash, but you pay income tax on their value (usually through your tax code). They are not subject to employee National Insurance.');

  const bump = compute({ ...input, gross: c.gross + 100 }, rules);
  const marginalRate = round2(1 - (bump.net - c.net) / 100);
  const per = (v) => ({ annual: round2(v), monthly: round2(v / 12), weekly: round2(v / 52), period: round2(v / c.freq.perYear) });
  const loanBalance = Math.max(0, Number(input.loanBalance) || 0);
  const loanPeriods = c.loanRepayment > 0 && loanBalance > 0 ? Math.ceil(loanBalance / (c.loanRepayment / c.freq.perYear)) : null;

  return {
    rules,
    frequency: c.freq,
    warnings,
    allowance: c.allowance,
    taxable: c.taxable,
    bands: c.bandRows,
    loans: c.loanRows,
    pensionMethod: c.method,
    gross: per(c.gross),
    bonus: per(c.bonus),
    totalPay: per(c.gross + c.bonus),
    taxableBenefits: per(c.taxableBenefits),
    holidayCost: per(c.holidayCost),
    otherSacrifice: per(c.otherSacrifice),
    payrollGiving: per(c.payrollGiving),
    pension: per(c.pensionGross),
    pensionFromPay: per(c.method === 'reliefAtSource' ? c.deductedFromPay : c.pensionGross),
    incomeTax: per(c.incomeTax),
    nationalInsurance: per(c.nationalInsurance),
    studentLoan: per(c.studentLoan),
    loanRepayment: per(c.loanRepayment),
    otherNetDeductions: per(c.otherNetDeductions),
    totalDeductions: per(c.totalDeductions),
    net: per(c.net),
    netAfterLoan: per(c.net + c.loanRepayment),
    loanPeriods,
    employerNI: per(c.employerNI),
    employerPension: per(c.employerPension),
    employerCost: per(c.gross + c.bonus + c.taxableBenefits + c.employerNI + c.employerPension),
    effectiveRate: c.gross + c.bonus ? round2((c.incomeTax + c.nationalInsurance) / (c.gross + c.bonus)) : 0,
    marginalRate,
  };
}

/** Net pay only (used by the inverse search). */
function takeHomeCore(input, rules) {
  return compute(input, rules).net;
}

/** Gross salary needed for a target annual take-home (search). */
export function grossForNet(targetNet, input, rules = DEFAULT_RULES) {
  let lo = 0;
  let hi = Math.max(1000, targetNet * 3);
  for (let i = 0; i < 60; i++) {
    const mid = (lo + hi) / 2;
    if (takeHomeCore({ ...input, gross: mid }, rules) < targetNet) lo = mid;
    else hi = mid;
  }
  return round2(hi);
}

/** Flat list of editable rule fields for the settings form. */
export function ruleFields() {
  return [
    ['taxYear', 'Tax year label', 'text'],
    ['personalAllowance', 'Personal allowance', 'money'],
    ['paTaperStart', 'Allowance tapers above', 'money'],
    ['rUK.0.upTo', 'Basic rate band (taxable income up to)', 'money'],
    ['rUK.0.rate', 'Basic rate', 'pct'],
    ['rUK.1.upTo', 'Higher rate band (taxable income up to)', 'money'],
    ['rUK.1.rate', 'Higher rate', 'pct'],
    ['rUK.2.rate', 'Additional rate', 'pct'],
    ['ni.primaryThreshold', 'NI primary threshold', 'money'],
    ['ni.upperEarningsLimit', 'NI upper earnings limit', 'money'],
    ['ni.mainRate', 'NI main rate', 'pct'],
    ['ni.upperRate', 'NI rate above the upper limit', 'pct'],
    ['ni.employerThreshold', 'Employer NI threshold', 'money'],
    ['ni.employerRate', 'Employer NI rate', 'pct'],
    ['studentLoans.plan1.threshold', 'Plan 1 threshold', 'money'],
    ['studentLoans.plan2.threshold', 'Plan 2 threshold', 'money'],
    ['studentLoans.plan4.threshold', 'Plan 4 threshold', 'money'],
    ['studentLoans.plan5.threshold', 'Plan 5 threshold', 'money'],
    ['studentLoans.postgrad.threshold', 'Postgraduate loan threshold', 'money'],
    ['studentLoans.postgrad.rate', 'Postgraduate loan rate', 'pct'],
    ['scotland.0.upTo', 'Scottish starter band up to', 'money'],
    ['scotland.0.rate', 'Scottish starter rate', 'pct'],
    ['scotland.1.upTo', 'Scottish basic band up to', 'money'],
    ['scotland.1.rate', 'Scottish basic rate', 'pct'],
    ['scotland.2.upTo', 'Scottish intermediate band up to', 'money'],
    ['scotland.2.rate', 'Scottish intermediate rate', 'pct'],
    ['scotland.3.upTo', 'Scottish higher band up to', 'money'],
    ['scotland.3.rate', 'Scottish higher rate', 'pct'],
    ['scotland.4.upTo', 'Scottish advanced band up to', 'money'],
    ['scotland.4.rate', 'Scottish advanced rate', 'pct'],
    ['scotland.5.rate', 'Scottish top rate', 'pct'],
  ];
}

export function getPath(obj, path) {
  return path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);
}

export function setPath(obj, path, value) {
  const keys = path.split('.');
  let o = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    const k = keys[i];
    o[k] = Array.isArray(o[k]) ? o[k].slice() : { ...(o[k] || {}) };
    o = o[k];
  }
  o[keys[keys.length - 1]] = value;
  return obj;
}

/** Deep copy of the default rules with overrides applied. */
export function rulesWith(overrides) {
  const base = JSON.parse(JSON.stringify(DEFAULT_RULES, (k, v) => (v === Infinity ? 'Infinity' : v)), (k, v) => (v === 'Infinity' ? Infinity : v));
  for (const [path, value] of Object.entries(overrides || {})) setPath(base, path, value);
  return base;
}
