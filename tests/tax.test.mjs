import { test } from 'node:test';
import assert from 'node:assert/strict';
import { takeHome, allowanceFromTaxCode, grossForNet, rulesWith, DEFAULT_RULES } from '../src/budget/tax.js';

const near = (a, b, msg) => assert.ok(Math.abs(a - b) < 0.01, `${msg || ''} expected ${b} got ${a}`);
// Employee NI as payroll does it: monthly thresholds £1,048 and £4,189, rounded to pence each month.
const r2 = (n) => Math.round(n * 100) / 100;
const niMonthly = (annualPay) => r2(r2(Math.max(0, Math.min(annualPay / 12, 4189) - 1048) * 0.08 + Math.max(0, annualPay / 12 - 4189) * 0.02) * 12);

test('£30,000 basic-rate taxpayer, no pension or loans', () => {
  const r = takeHome({ gross: 30000 });
  near(r.incomeTax.annual, 3486, 'tax');
  near(r.nationalInsurance.annual, niMonthly(30000), 'NI');
  near(r.net.annual, 30000 - 3486 - niMonthly(30000), 'net');
  near(r.net.monthly, (30000 - 3486 - niMonthly(30000)) / 12, 'monthly');
  assert.equal(r.bands.length, 1);
  assert.equal(r.bands[0].name, 'Basic rate');
});

test('£60,000 higher-rate taxpayer', () => {
  const r = takeHome({ gross: 60000 });
  near(r.incomeTax.annual, 11432, 'tax');
  near(r.nationalInsurance.annual, niMonthly(60000), 'NI');
  near(r.net.annual, 60000 - 11432 - niMonthly(60000), 'net');
  assert.deepEqual(r.bands.map((b) => b.name), ['Basic rate', 'Higher rate']);
  near(r.marginalRate, 0.42, 'marginal 40% + 2%');
});

test('personal allowance tapers above £100,000', () => {
  const r = takeHome({ gross: 110000 });
  assert.equal(r.allowance, 7570);
  near(r.incomeTax.annual, 33432, 'tax');
  near(r.marginalRate, 0.62, '60% effective + 2% NI');
  const top = takeHome({ gross: 130000 });
  assert.equal(top.allowance, 0);
  assert.ok(top.bands.some((b) => b.name === 'Additional rate'));
});

test('student loans: plan 2 and postgraduate stack', () => {
  const r = takeHome({ gross: 30000, studentLoans: ['plan2', 'postgrad'] });
  near(r.loans.find((l) => l.id === 'plan2').amount, (30000 - 28470) * 0.09, 'plan 2');
  near(r.loans.find((l) => l.id === 'postgrad').amount, (30000 - 21000) * 0.06, 'postgrad');
  near(r.studentLoan.annual, 137.7 + 540, 'total');
  const low = takeHome({ gross: 20000, studentLoans: ['plan2'] });
  assert.equal(low.studentLoan.annual, 0);
});

test('pension methods', () => {
  const sac = takeHome({ gross: 40000, pensionPct: 5, pensionMethod: 'salarySacrifice' });
  near(sac.pension.annual, 2000, 'pension');
  near(sac.incomeTax.annual, (38000 - 12570) * 0.2, 'tax on reduced salary');
  near(sac.nationalInsurance.annual, niMonthly(38000), 'NI on reduced salary');
  near(sac.net.annual, 38000 - sac.incomeTax.annual - sac.nationalInsurance.annual, 'net');

  const netPay = takeHome({ gross: 40000, pensionPct: 5, pensionMethod: 'netPay' });
  near(netPay.incomeTax.annual, (38000 - 12570) * 0.2, 'tax relief');
  near(netPay.nationalInsurance.annual, niMonthly(40000), 'NI on full salary');
  near(netPay.net.annual, 40000 - 2000 - netPay.incomeTax.annual - netPay.nationalInsurance.annual, 'net');

  const ras = takeHome({ gross: 40000, pensionPct: 5, pensionMethod: 'reliefAtSource' });
  near(ras.incomeTax.annual, (40000 - 12570) * 0.2, 'no payroll tax relief');
  near(ras.pensionFromPay.annual, 1600, '80% taken from pay');
  near(ras.net.annual, 40000 - 1600 - ras.incomeTax.annual - ras.nationalInsurance.annual, 'net');
  assert.ok(ras.warnings.length);
});

test('Scottish bands and tax codes', () => {
  const s = takeHome({ gross: 50000, scotland: true });
  assert.deepEqual(s.bands.map((b) => b.name), ['Starter rate', 'Basic rate', 'Intermediate rate', 'Higher rate']);
  const expected = (15397 - 12570) * 0.19 + (27491 - 15397) * 0.2 + (43662 - 27491) * 0.21 + (50000 - 43662) * 0.42;
  near(s.incomeTax.annual, expected, 'scottish tax');
  assert.equal(allowanceFromTaxCode('1257L'), 12579);
  assert.equal(allowanceFromTaxCode('S1257L'), 12579);
  assert.equal(allowanceFromTaxCode('BR'), 0);
  assert.equal(allowanceFromTaxCode('K475'), -4759);
  assert.equal(allowanceFromTaxCode('hello'), null);
  const bad = takeHome({ gross: 30000, taxCode: 'hello' });
  assert.equal(bad.allowance, 12570);
  assert.ok(bad.warnings.length);
});

test('no NI over state pension age; pay frequencies; employer cost', () => {
  const r = takeHome({ gross: 30000, noNI: true, frequency: 'weekly' });
  assert.equal(r.nationalInsurance.annual, 0);
  near(r.net.period, r.net.annual / 52, 'weekly period');
  near(r.employerNI.annual, r2(r2((30000 / 52 - 96) * 0.15) * 52), 'employer NI (weekly thresholds)');
  const e = takeHome({ gross: 30000, employerPensionPct: 3 });
  near(e.employerCost.annual, 30000 + e.employerNI.annual + 900, 'employer cost');
});

test('gross for a target net and editable rules', () => {
  const g = grossForNet(takeHome({ gross: 30000 }).net.annual, {});
  near(g, 30000, 'inverse');
  const rules = rulesWith({ personalAllowance: 13000, 'ni.mainRate': 0.1 });
  assert.equal(rules.personalAllowance, 13000);
  assert.equal(rules.ni.mainRate, 0.1);
  assert.equal(rules.rUK[2].upTo, Infinity);
  assert.equal(DEFAULT_RULES.personalAllowance, 12570, 'defaults untouched');
  const r = takeHome({ gross: 30000 }, rules);
  near(r.incomeTax.annual, (30000 - 13000) * 0.2, 'custom allowance');
});

test('taxable benefits are taxed but not NI\'d and not paid as cash', () => {
  const base = takeHome({ gross: 30000 });
  const r = takeHome({ gross: 30000, taxableBenefits: 1000 });
  near(r.incomeTax.annual - base.incomeTax.annual, 200, 'tax on PMI');
  near(r.nationalInsurance.annual, base.nationalInsurance.annual, 'NI unchanged');
  near(r.net.annual, base.net.annual - 200, 'net down by the tax only');
  assert.ok(r.warnings.some((w) => /benefits/i.test(w)));
});

test('bought holiday and other salary sacrifice reduce tax and NI', () => {
  const r = takeHome({ gross: 26000, holidayDays: 5, workingDays: 260, otherSacrifice: 500 });
  near(r.holidayCost.annual, 500, '5 days at £100');
  near(r.incomeTax.annual, (25000 - 12570) * 0.2, 'tax on reduced pay');
  near(r.nationalInsurance.annual, niMonthly(25000), 'NI on reduced pay');
  near(r.net.annual, 25000 - r.incomeTax.annual - r.nationalInsurance.annual, 'net');
});

test('payroll giving relieves tax but not NI', () => {
  const r = takeHome({ gross: 30000, payrollGiving: 600 });
  near(r.incomeTax.annual, (29400 - 12570) * 0.2, 'tax');
  near(r.nationalInsurance.annual, niMonthly(30000), 'NI');
  near(r.net.annual, 30000 - 600 - r.incomeTax.annual - r.nationalInsurance.annual, 'net');
});

test('company loan and other after-tax deductions, with payoff', () => {
  const base = takeHome({ gross: 30000 });
  const r = takeHome({ gross: 30000, loanRepayment: 100, loanBalance: 1450, otherNetDeductions: 20 });
  near(r.incomeTax.annual, base.incomeTax.annual, 'tax unchanged');
  near(r.net.annual, base.net.annual - 1200 - 240, 'net');
  near(r.netAfterLoan.monthly, r.net.monthly + 100, 'after loan');
  assert.equal(r.loanPeriods, 15);
  const w = takeHome({ gross: 30000, frequency: 'weekly', loanRepayment: 25, loanBalance: 1000 });
  near(w.loanRepayment.annual, 1300, 'weekly x52');
  assert.equal(w.loanPeriods, 40);
});

test('bonus is taxed as earnings and not pensionable', () => {
  const r = takeHome({ gross: 30000, bonus: 2000, pensionPct: 5, pensionMethod: 'salarySacrifice', studentLoans: ['plan2'] });
  near(r.pension.annual, 1500, 'pension on base');
  near(r.incomeTax.annual, (30500 - 12570) * 0.2, 'tax');
  near(r.nationalInsurance.annual, niMonthly(30500), 'NI');
  near(r.studentLoan.annual, (30500 - 28470) * 0.09, 'loan');
  near(r.totalPay.annual, 32000, 'total pay');
});

test('reproduces a real monthly payslip (benefits allowance, SMART pension, flex benefits, BIK, graduate loan, NI category H)', () => {
  const r = takeHome({
    gross: 31800, frequency: 'monthly', taxCode: '1257L', pensionPct: 8, pensionMethod: 'salarySacrifice', niCategory: 'H',
    benefitsBasis: 'period', allowances: 50, taxableBenefits: 100.51 + 8.45, holidayAmount: 92.63, otherSacrifice: 2.74 + 7.09 + 1.36,
    loanRepayment: 194.45, loanBalance: 4861.05, studentLoans: [],
  });
  near(r.pension.monthly, 212, 'SMART pension');
  near(r.taxablePay.monthly, 2493.14, 'total taxable pay');
  near(r.niablePay.monthly, 2384.18, 'total payments');
  near(r.nationalInsurance.monthly, 106.89, 'employee NIC');
  assert.ok(Math.abs(r.incomeTax.monthly - 289.0) < 0.05, `PAYE ${r.incomeTax.monthly} within 5p of 289.00 (cumulative rounding)`);
  assert.ok(Math.abs(r.net.monthly - 1793.84) < 0.05, `net pay ${r.net.monthly} within 5p of 1,793.84`);
  assert.equal(r.employerNI.annual, 0, 'apprentice: no employer NI below the upper limit');
  assert.equal(r.loanPeriods, 25);
  near(r.netAfterLoan.monthly, r.net.monthly + 194.45, 'after the graduate loan');
});

test('NI categories', () => {
  const a = takeHome({ gross: 30000, niCategory: 'A' });
  const m = takeHome({ gross: 30000, niCategory: 'M' });
  const c = takeHome({ gross: 30000, niCategory: 'C' });
  near(m.nationalInsurance.annual, a.nationalInsurance.annual, 'employee NI same for under-21s');
  assert.equal(m.employerNI.annual, 0);
  assert.ok(a.employerNI.annual > 0);
  assert.equal(c.nationalInsurance.annual, 0);
  const high = takeHome({ gross: 60000, niCategory: 'H' });
  near(high.employerNI.annual, r2(r2((60000 / 12 - 4189) * 0.15) * 12), 'employer NI above UEL only');
});
