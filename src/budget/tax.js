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
 *   gross,                 // annual salary before deductions
 *   scotland: false,
 *   taxCode: '1257L',      // optional; overrides the standard allowance
 *   pensionPct: 0,         // employee contribution, % of gross
 *   pensionMethod: 'salarySacrifice' | 'netPay' | 'reliefAtSource',
 *   employerPensionPct: 0, // for the employer cost line only
 *   studentLoans: ['plan2', 'postgrad'],
 *   noNI: false,           // over State Pension age
 *   frequency: 'monthly',
 * }
 */
export function takeHome(input, rules = DEFAULT_RULES) {
  const gross = Math.max(0, Number(input.gross) || 0);
  const pensionPct = Math.max(0, Number(input.pensionPct) || 0) / 100;
  const method = input.pensionMethod || 'salarySacrifice';
  const pensionGross = round2(gross * pensionPct); // the amount that ends up in the pension
  const warnings = [];

  // Earnings used for each calculation
  const salaryForNI = method === 'salarySacrifice' ? gross - pensionGross : gross;
  const salaryForTax = method === 'salarySacrifice' || method === 'netPay' ? gross - pensionGross : gross;
  const deductedFromPay = method === 'reliefAtSource' ? round2(pensionGross * 0.8) : method === 'netPay' ? pensionGross : 0;
  if (method === 'reliefAtSource' && pensionGross > 0) {
    warnings.push('Relief at source: basic-rate relief is added to your pension automatically. Higher or additional-rate taxpayers claim the rest through Self Assessment.');
  }

  // Personal allowance (tax code, then taper above £100k based on adjusted net income)
  let allowance = allowanceFromTaxCode(input.taxCode, rules);
  if (allowance == null) {
    warnings.push(`Tax code "${input.taxCode}" was not recognised, so the standard allowance was used.`);
    allowance = rules.personalAllowance;
  }
  const adjustedNetIncome = salaryForTax;
  if (adjustedNetIncome > rules.paTaperStart && allowance > 0) {
    const reduction = Math.floor((adjustedNetIncome - rules.paTaperStart) / 2);
    allowance = Math.max(0, allowance - reduction);
  }
  const taxable = Math.max(0, salaryForTax - allowance);

  // Income tax by band
  const bands = input.scotland ? rules.scotland : rules.rUK;
  const bandRows = [];
  let remaining = taxable;
  let lower = 0;
  let incomeTax = 0;
  for (const b of bands) {
    const width = (b.upTo === Infinity ? Infinity : b.upTo) - lower;
    const inBand = Math.max(0, Math.min(remaining, width));
    const tax = round2(inBand * b.rate);
    if (inBand > 0) bandRows.push({ name: b.name, rate: b.rate, amount: inBand, tax });
    incomeTax += tax;
    remaining -= inBand;
    lower = b.upTo;
    if (remaining <= 0) break;
  }
  incomeTax = round2(incomeTax);

  // National Insurance (employee)
  const ni = rules.ni;
  let nationalInsurance = 0;
  if (!input.noNI) {
    const main = Math.max(0, Math.min(salaryForNI, ni.upperEarningsLimit) - ni.primaryThreshold);
    const upper = Math.max(0, salaryForNI - ni.upperEarningsLimit);
    nationalInsurance = round2(main * ni.mainRate + upper * ni.upperRate);
  }
  const employerNI = round2(Math.max(0, salaryForNI - ni.employerThreshold) * ni.employerRate);
  const employerPension = round2(gross * (Math.max(0, Number(input.employerPensionPct) || 0) / 100));

  // Student loans (each plan on the same earnings; postgraduate stacks with one undergraduate plan)
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

  const totalDeductions = round2(incomeTax + nationalInsurance + studentLoan + deductedFromPay + (method === 'salarySacrifice' ? pensionGross : 0));
  const net = round2(gross - totalDeductions);

  // Marginal rate: what you keep of the next £1 (gross), ignoring pension
  const marginal = (() => {
    const bump = takeHomeCore({ ...input, gross: gross + 100 }, rules);
    const base = net;
    return round2(1 - (bump - base) / 100);
  })();

  const freq = PAY_FREQUENCIES.find((f) => f.id === input.frequency) || PAY_FREQUENCIES[0];
  const per = (v) => ({ annual: round2(v), monthly: round2(v / 12), weekly: round2(v / 52), period: round2(v / freq.perYear) });

  return {
    rules,
    frequency: freq,
    warnings,
    allowance,
    taxable,
    bands: bandRows,
    loans: loanRows,
    pensionMethod: method,
    gross: per(gross),
    pension: per(pensionGross),
    pensionFromPay: per(method === 'reliefAtSource' ? deductedFromPay : pensionGross),
    incomeTax: per(incomeTax),
    nationalInsurance: per(nationalInsurance),
    studentLoan: per(studentLoan),
    totalDeductions: per(totalDeductions),
    net: per(net),
    employerNI: per(employerNI),
    employerPension: per(employerPension),
    employerCost: per(gross + employerNI + employerPension),
    effectiveRate: gross ? round2((incomeTax + nationalInsurance) / gross) : 0,
    marginalRate: marginal,
  };
}

/** Net pay only, used for the marginal-rate calculation (avoids recursion into marginal). */
function takeHomeCore(input, rules) {
  const gross = Math.max(0, Number(input.gross) || 0);
  const pensionPct = Math.max(0, Number(input.pensionPct) || 0) / 100;
  const method = input.pensionMethod || 'salarySacrifice';
  const pensionGross = round2(gross * pensionPct);
  const salaryForNI = method === 'salarySacrifice' ? gross - pensionGross : gross;
  const salaryForTax = method === 'salarySacrifice' || method === 'netPay' ? gross - pensionGross : gross;
  const deductedFromPay = method === 'reliefAtSource' ? round2(pensionGross * 0.8) : method === 'netPay' ? pensionGross : 0;
  let allowance = allowanceFromTaxCode(input.taxCode, rules);
  if (allowance == null) allowance = rules.personalAllowance;
  if (salaryForTax > rules.paTaperStart && allowance > 0) allowance = Math.max(0, allowance - Math.floor((salaryForTax - rules.paTaperStart) / 2));
  const taxable = Math.max(0, salaryForTax - allowance);
  const bands = input.scotland ? rules.scotland : rules.rUK;
  let remaining = taxable;
  let lower = 0;
  let tax = 0;
  for (const b of bands) {
    const inBand = Math.max(0, Math.min(remaining, b.upTo - lower));
    tax += inBand * b.rate;
    remaining -= inBand;
    lower = b.upTo;
    if (remaining <= 0) break;
  }
  const ni = rules.ni;
  let nat = 0;
  if (!input.noNI) nat = Math.max(0, Math.min(salaryForNI, ni.upperEarningsLimit) - ni.primaryThreshold) * ni.mainRate + Math.max(0, salaryForNI - ni.upperEarningsLimit) * ni.upperRate;
  let loans = 0;
  for (const id of input.studentLoans || []) {
    const plan = rules.studentLoans[id];
    if (plan) loans += Math.max(0, salaryForNI - plan.threshold) * plan.rate;
  }
  return gross - tax - nat - loans - deductedFromPay - (method === 'salarySacrifice' ? pensionGross : 0);
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
