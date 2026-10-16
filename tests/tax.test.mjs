import { test } from 'node:test';
import assert from 'node:assert/strict';
import { takeHome, allowanceFromTaxCode, grossForNet, rulesWith, DEFAULT_RULES } from '../src/budget/tax.js';

const near = (a, b, msg) => assert.ok(Math.abs(a - b) < 0.01, `${msg || ''} expected ${b} got ${a}`);

test('£30,000 basic-rate taxpayer, no pension or loans', () => {
  const r = takeHome({ gross: 30000 });
  near(r.incomeTax.annual, 3486, 'tax');
  near(r.nationalInsurance.annual, 1394.4, 'NI');
  near(r.net.annual, 25119.6, 'net');
  near(r.net.monthly, 2093.3, 'monthly');
  assert.equal(r.bands.length, 1);
  assert.equal(r.bands[0].name, 'Basic rate');
});

test('£60,000 higher-rate taxpayer', () => {
  const r = takeHome({ gross: 60000 });
  near(r.incomeTax.annual, 11432, 'tax');
  near(r.nationalInsurance.annual, 3210.6, 'NI');
  near(r.net.annual, 45357.4, 'net');
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
  near(sac.nationalInsurance.annual, (38000 - 12570) * 0.08, 'NI on reduced salary');
  near(sac.net.annual, 38000 - sac.incomeTax.annual - sac.nationalInsurance.annual, 'net');

  const netPay = takeHome({ gross: 40000, pensionPct: 5, pensionMethod: 'netPay' });
  near(netPay.incomeTax.annual, (38000 - 12570) * 0.2, 'tax relief');
  near(netPay.nationalInsurance.annual, (40000 - 12570) * 0.08, 'NI on full salary');
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
  near(r.employerNI.annual, (30000 - 5000) * 0.15, 'employer NI');
  const e = takeHome({ gross: 30000, employerPensionPct: 3 });
  near(e.employerCost.annual, 30000 + 3750 + 900, 'employer cost');
});

test('gross for a target net and editable rules', () => {
  const g = grossForNet(25119.6, {});
  near(g, 30000, 'inverse');
  const rules = rulesWith({ personalAllowance: 13000, 'ni.mainRate': 0.1 });
  assert.equal(rules.personalAllowance, 13000);
  assert.equal(rules.ni.mainRate, 0.1);
  assert.equal(rules.rUK[2].upTo, Infinity);
  assert.equal(DEFAULT_RULES.personalAllowance, 12570, 'defaults untouched');
  const r = takeHome({ gross: 30000 }, rules);
  near(r.incomeTax.annual, (30000 - 13000) * 0.2, 'custom allowance');
});
