# Chapter six: Deferred tax and the tax charge.

After the November 2025 sitting of this paper, the examiners wrote a sentence every candidate should read before the exam. Question 1 had asked for "the total tax charge required for the profit and loss account (current year tax charge and deferred tax charge), and the closing deferred tax balance". In the examiners' words, "only a small number of candidates calculated the deferred tax charge". Most referred only to balances, and many dealt with fixed asset timing differences and forgot the short-term ones.

So here is the question this chapter answers. Why does a company that owes HMRC £750,000 report a tax charge of £950,000? And why is the higher figure, not the lower one, the honest number for a shareholder to read?

This is the second chapter of Part Two, on measuring profit. Chapter 5 showed that taxable profit starts from the accounts; this chapter runs the other way and shows how the accounts report the tax. Deferred tax is a **core (grade 1)** item on the LCG grid. *The Living Law* (TKS) signposted deferred tax but never taught it, so we start from first principles and go to Advanced Technical depth.

---

## Two numbers for one year.

Every company's profit and loss account carries one line for tax. Behind it sit two numbers:

- **Current tax**: the corporation tax the company expects to pay HMRC for the period, computed on taxable total profits, plus adjustments for earlier periods.
- **Deferred tax**: an accounting measure of the tax effects of items that the accounts and the tax computation recognise in different periods.

Together they make the **total tax charge**: the number analysts divide by profit before tax, and the number the examiner asks you to compute.

Our running case is the invented Tarnmoor group, a listed engineering group whose companies, people and figures are all made up for teaching. On 1 April GY1, Tarnmoor plc bought Calder Valve Engineering Ltd, the invented manufacturer from *The Living Law*. Calder kept its 31 March year end; its first year end inside the group is **31 March GY2**.

For that year, in our invented case, Calder's taxable total profits are **£3.0m**. At 25%, its corporation tax is **£750,000**. Its RDEC of **£400,000** is set off against that liability (step 1), so the cash it sends HMRC is **£350,000**. Yet Calder's accounts show a tax charge of **£950,000**.

> **Misconception: "deferred tax is tax you owe HMRC".** It is not. HMRC never assesses deferred tax, never sends a bill for it and never refunds a deferred tax asset. Deferred tax exists only in the financial statements. It measures how today's transactions will change tomorrow's tax bills, so that the accounts report the tax consequences of this year's profit in this year. People believe the myth because the balance sheet line is called a "liability" and because, for a growing company, it usually is real future cash. But the "creditor" is the company's own future tax computation, not HMRC.

The gap between £750,000 and £950,000 is £200,000 of deferred tax. By the end of this chapter you will be able to build it from the ground up.

**Law year.** FY2026 (1 April 2026 to 31 March 2027). The main rate is 25% (FY2026 by FA 2025 ss 13–14, which also set the 19% small profits rate); FA 2026 ss 11–12 set the FY2027 main rate at 25%, the small profits rate at 19% and the marginal relief fraction at 3/200. Every balance in this chapter is measured at 25%.

---

## Why the accounts need deferred tax.

Accounting rests on matching (accruals): income and the costs of earning it belong in the same period. Tax is a cost of earning profit, so the tax charge should broadly follow the profit that produced it.

Corporation tax does not cooperate. It recognises many items in a different year from the accounts:

| Item | Accounts | Tax | Authority |
|---|---|---|---|
| New main-rate plant | Depreciated over its useful life | Full expensing in year 1 | CAA 2001 s 45S |
| Bonus / cash LTIP unpaid 9 months after the period end | Accrued this year | Deducted when paid | CTA 2009 s 1288 |
| Pension contribution accrued | Accrued this year | Deducted when paid | FA 2004 s 196 |
| Contribution to an EBT | Charged when paid to the trust | Deducted when qualifying benefits are provided | CTA 2009 s 1290 |
| Share option charge | Fair value over vesting period | No deduction; Part 12 relief on acquisition of the shares | CTA 2009 s 1038; Part 12 |

If the tax line showed only current tax, the reported rate would swing from year to year for reasons unrelated to how profitable the company is.

**Analogy: the bill in the post.** The timing difference has already happened: the profit has been earned, or the cost spent. The tax consequence has not landed, but it is on its way and its amount is known with reasonable confidence. A prudent householder who knows the gas bill is in the post does not pretend the winter was free.

**The precise rule.** A **deferred tax liability** (DTL) records tax that will become payable in future periods because of differences existing at the balance sheet date. A **deferred tax asset** (DTA) records tax that will be saved in future periods. The **movement** in those balances is the deferred tax charge or credit. It is recognised in profit or loss when the underlying item went through profit or loss, and in other comprehensive income or equity when the underlying item went there.

The charge is a movement, not a balance. The N25 question asked for both. Always compute opening position, closing position and the difference.

There is a cash story too: a large DTL tells a reader that the company has paid less tax so far than its profits suggest and will pay more later. Lenders and analysts read the deferred tax note for exactly that reason.

---

## Temporary differences and timing differences.

There are two accounting languages for deferred tax in the UK, and a group tax adviser must speak both.

**IAS 12 *Income Taxes*** governs Tarnmoor's consolidated accounts (a listed group reports under UK-adopted international accounting standards) and any subsidiary using **FRS 101** (IFRS recognition and measurement with reduced disclosure; chapter 5 tells Calder's move to FRS 101 from 1 April GY2).

IAS 12 is a **balance sheet** approach. For each asset and liability it compares the **carrying amount** with the **tax base** (broadly, the amount deductible for tax in future):

- carrying amount of an asset > tax base → **taxable temporary difference** → DTL;
- carrying amount of an asset < tax base, or a liability that will be deductible when settled → **deductible temporary difference** → potential DTA.

**FRS 102 Section 29** (Calder's framework until 31 March GY2) is a **profit and loss** approach. It recognises deferred tax on **timing differences** (gains and losses recognised in the accounts in a different period from the tax computation) and then **adds** items that are not strictly timing differences: deferred tax on fair value adjustments in a business combination, and on revaluations. The ACCA calls this the "timing differences plus" approach [ICAEW helpsheet and ACCA In Practice: secondary].

**Permanent differences** create no deferred tax in either language: a regulatory fine (CTA 2009 s 1303 territory), depreciation on a building that attracts no allowance, customer entertaining. They change the effective rate permanently.

For most items in a trading company the two languages give the same answer: plant (NBV less TWDV), unpaid bonuses and pension accruals work the same way. They part company at the edges: share schemes, the IAS 12 initial recognition exception, and business combinations.

> **Exam lens: which standard?**
> - **Grade:** deferred tax **1 (core)**; impact of accounting standards **1** (2026 grid, v2 extract). The 2026 Prospectus says an understanding of "deferred tax, profit recognition and share schemes" is expected for LCG.
> - **Read the question:** M26 Q6 concerned "a new company reporting under IFRS": an IAS 12 question. Use its vocabulary (carrying amount, tax base, temporary difference).
> - **Check the 2027 grid** when published; no change in grade is expected but none is confirmed.

---

## Liabilities always, assets only when probable.

The recognition rules are deliberately asymmetrical.

**Liabilities.** IAS 12 requires a DTL for **all** taxable temporary differences, subject to a short list of exceptions; Section 29 does the same for timing differences. A company cannot decline to book a DTL because it hopes the difference will never reverse or plans more full expensing to keep it rolling. The M26 examiners' report made the point: liabilities are always provided.

**Assets.** A DTA is recognised only to the extent that it is **probable** that taxable profit will be available to absorb the deduction. Section 29 applies the same idea (and para 29.7 adds, for losses, that their existence is itself evidence against future profits [ICAEW helpsheet: secondary]). It is a judgement, and it is where the auditors spend their time.

IAS 12 gives two sources of comfort:

1. **Taxable temporary differences** (para 28): sufficient taxable temporary differences relating to the **same taxation authority** and the **same taxable entity**, expected to reverse in the same period as the deductible difference or in periods to which a resulting loss can be carried back or forward. So an asset can be recognised up to the amount of suitable liabilities. This was the M26 Q6 point: a tax loss can be recognised as an asset to offset the liability from accelerated capital allowances.
2. **Forecast taxable profit** (paras 29, 34–36): here the standard is stern. "The existence of unused tax losses is strong evidence that future taxable profit may not be available" (para 35). An entity with a history of recent losses needs sufficient taxable temporary differences or "convincing other evidence".

**Exceptions to the liability rule** that matter here:

- **Goodwill** (para 15(a)): no DTL on the initial recognition of goodwill.
- **Initial recognition exception** (paras 15(b), 24): no deferred tax for an asset or liability first recognised in a transaction that is not a business combination and affects neither accounting nor taxable profit. The **May 2021 amendment** (*Deferred Tax related to Assets and Liabilities arising from a Single Transaction*; annual periods beginning on or after 1 January 2023) removed the exception where the transaction gives rise to **equal taxable and deductible temporary differences**. Leases and decommissioning obligations are the main examples: a lessee recognises deferred tax on both the right-of-use asset and the lease liability.
- **Pillar Two** (para 4A): below.

**Measurement rules:** deferred tax is **never discounted** (para 53); DTAs and DTLs are offset in the balance sheet only where they relate to taxes levied by the same authority and there is a legally enforceable right of set-off [IAS 12 para 74: not opened; general statement].

---

## Which rate, and when.

Deferred tax is measured at the rate expected to apply when the difference reverses, using rates and laws **enacted or substantively enacted** by the balance sheet date (IAS 12 para 47; FRS 102 para 29.12).

**Substantive enactment in the UK.** A rate is substantively enacted when the Bill containing it has passed all its House of Commons stages (the Lords can debate a rate but cannot change it), or when it is in a resolution having statutory effect under the Provisional Collection of Taxes Act 1968 [ICAEW; professional sources: secondary].

**The real illustration: 2021.** The March 2021 Budget announced a rise in the main rate from 19% to 25% from 1 April 2023. The Finance Bill completed its Commons stages on **24 May 2021** and received Royal Assent on **10 June 2021** (as FA 2021). UK GAAP and IFRS reporters with balance sheet dates on or after 24 May 2021 remeasured deferred tax at 25% for differences expected to reverse after 1 April 2023 (US GAAP reporters used Royal Assent). A DTL built up at 19% rose by almost a third (25/19 = 1.316) and the increase went straight through the tax charge. For balance sheets dated before 24 May 2021 the change was a non-adjusting post-balance sheet event, disclosed if material. That is the origin of the line "effect of changes in tax rates" in many reconciliations.

**FY2026 and FY2027.** FA 2026 (Royal Assent 18 March 2026) ss 11–12 fix FY2027 at 25% main rate, 19% small profits rate and 3/200 marginal relief fraction. For a large company, 25% is enacted for every reversal the examiner is likely to set. Use it, and say why.

**Marginal relief companies** measure at the rate they expect to pay on reversal (in 2021 practice, "up to 25%"). Every Tarnmoor company pays at the main rate (with nine associated companies in GY2, divisor 10, the limits are £5,000 and £25,000 per company), so the point never arises in the story.

**Allowance changes are not rate changes.** FA 2026 s 28 cut the main pool WDA from 18% to 14% for CT chargeable periods beginning on or after 1 April 2026 (hybrid rate for straddling periods). That does not remeasure existing deferred tax, because the rate of tax is unchanged; it changes the pattern of reversal, which matters to scheduling of DTAs, not to measurement.

---

## The fixed asset difference.

In most trading companies the largest balance comes from capital allowances:

> **Fixed asset timing difference = NBV of assets qualifying for capital allowances − TWDV (pools and single asset pools)**, × 25% = DTL (or DTA if TWDV exceeds NBV).

**The trap is "qualifying".** Land never attracts allowances; including it creates a phantom difference (the M25 examiners reported that deferred tax answers sometimes wrongly included land). A building with no allowances is outside the comparison. The N25 suggested answer excluded £92,000k of land and buildings before comparing qualifying NBV £31,250k with TWDV £2,990k (difference £28,260k; DTL £7,065k, down from £8,375k: a credit of £1,310k). Buildings attracting SBA need more care and practice varies [flag: not researched].

### Worked example: full expensing and deferred tax (Tarnmoor Engineering, GY2; invented)

TEL claims full expensing of **£9.0m** on new plant in GY2 (chapter 8). Ignoring depreciation in the year for simplicity:

| £000 | Current tax | Deferred tax | Total |
|---|---|---|---|
| Effect of full expensing £9,000 × 25% | (2,250) | 2,250 | 0 |

The plant sits in the accounts near cost; its tax base is nil. **Full expensing is a cash benefit, not a reduction in the effective tax rate.** The company gains time, and the value of money over that time.

The **40% FYA** (CAA 2001 s 45U; main-rate plant, new and unused, expenditure on or after 1 January 2026; plant for leasing allowed under s 46(4B)) works the same way on a smaller scale. TEL's **£800,000** of test rigs leased to customers: FYA £320,000 in GY2; the £480,000 balance joins the main pool after the WDA for the period and draws 14% from GY3 (CAA 2001 s 58(5)). Relief of £320,000 against a modest first-year depreciation charge, so a DTL builds.

**Reversal.** When a fully expensed asset is sold, the special balancing charge (CAA 2001 s 59A) brings the tax into current tax and the DTL unwinds. A company that keeps investing may see its DTL grow for years, which is why it is tempting, and wrong, to think it will never be paid.

> **Going further: talking to the board about full expensing.** Boards often hear "full expensing saves 25%". It saves 25% *now*, and costs it back later through lower future allowances or a balancing charge. The tax function's job is to translate this into the cash flow forecast (lower instalments, which for a very large company fall in months 3, 6, 9 and 12 of the period) while making clear that the reported ETR will not move. Present value is the real benefit.

---

## Short-term differences.

The second family is short-term. These are the ones candidates forget (N25, M25), so learn the list:

| Item | Tax rule | Deferred tax |
|---|---|---|
| Remuneration (bonus, cash LTIP) unpaid 9 months after the period end | Deductible in the period paid (CTA 2009 s 1288) | DTA on the accrual |
| Pension contributions accrued, unpaid | Deductible when paid (FA 2004 s 196); spreading of large increases (s 197) | DTA on the accrual and on any amount spread forward |
| Employee benefit contributions (EBT etc.) | Deductible when qualifying benefits are provided, within 9 months, otherwise later; 5-year cut-off; tax and NIC paid within 12 months (CTA 2009 ss 1290–1297; chapter 7) | DTA while relief is deferred |
| General provisions (relief only when the expenditure is incurred or a loss specifically identified) | Deduction deferred | DTA |
| Specific provision deductible when made | Tax follows the accounts | **None** |
| Lease transition adjustment spread (FA 2019 Sch 14 Part 3; chapter 5) | Spread over the weighted average remaining lease term | Difference on the unspread balance |

**Direction.** Accelerated allowances → **liabilities** (relief has come early). Accrued costs relieved later → **assets** (relief still to come). If you find yourself creating a liability from an unpaid bonus, stop. The M26 examiners reported candidates confusing assets with liabilities.

Short-term DTAs are usually easy to recognise: a profitable company paying its bonuses and pensions next year will have the profit to absorb the deductions. Recognition is a live judgement mainly for losses.

---

## Calder's first year end in the group.

Calder's numbers, all invented, for its year to **31 March GY2**. Calder still reports under **FRS 102** for this year; FRS 101 applies from 1 April GY2 and does not affect these balances.

### Worked example: Calder's current tax (year to 31 March GY2; £000)

| | £000 | Note |
|---|---|---|
| Profit before tax (includes RDEC income £400k above the line) | 3,800 | Invented (story) |
| Add: depreciation of qualifying plant | 600 | Replaced by capital allowances; Calder's heavy plant has long useful lives, so its depreciation is low against its allowances |
| Less: capital allowances | (1,800) | Chapter 8 |
| Add: LTIP and pension accruals unpaid at the year end (paid more than 9 months later / paid basis) | 800 | CTA 2009 s 1288; FA 2004 s 196 |
| Less: opening accruals paid in the year | (400) | Deductible when paid |
| **Taxable total profits** | **3,000** | Invented (story) |
| Corporation tax at 25% | 750 | |
| Less: RDEC set off (step 1) | (400) | CTA 2009 Part 13 Ch 1A (s 1042I) |
| **Payable** (large, not very large: QIPs in months 7, 10, 13 and 16, 4 × £187,500 on the £750k before the RDEC; chapter 3) | **350** | |

(The adjusted trading profit before RDEC of £2.6m (chapter 10) is £3,000k less the taxable RDEC of £400k. Calder has no permanent differences this year: a story simplification.)

### Worked example: Calder's deferred tax (£000, 25%)

| | 31 March GY1 (opening) | 31 March GY2 (closing) | Movement |
|---|---|---|---|
| Qualifying NBV | | 14,000 | |
| TWDV | | (8,400) | |
| **Fixed asset timing difference** | 4,400 | 5,600 | |
| DTL at 25% | 1,100 | 1,400 | **300 charge** |
| Short-term differences: LTIP accrual 600; pension accrual 200 | (400) | (800) | |
| DTA at 25% | (100) | (200) | **(100) credit** |
| **Net DTL** | **1,000** | **1,200** | **200 charge** |

The DTA is recoverable: Calder is profitable, and the reversing DTL alone would cover it.

**Journal:** Dr deferred tax charge (P&L) £200,000; Cr deferred tax liability £200,000 (net presentation; the DTA and DTL relate to the same company and authority).

### Worked example: Calder's tax note and rate reconciliation (£000)

| Tax charge | £000 |
|---|---|
| Current tax: UK CT for the year | 750 |
| Deferred tax: origination and reversal of timing differences | 200 |
| **Total tax charge** | **950** |

| Reconciliation | £000 |
|---|---|
| Profit before tax | 3,800 |
| × 25% | 950 |
| Permanent differences | 0 |
| **Total tax charge** | **950** (ETR **25.0%**) |

Current tax alone is 750/3,800 = **19.7%** of profit. Deferred tax has done its job: timing differences have dropped out of the reported rate. That answers the opening question.

**Where does the RDEC go?** The merged-scheme RDEC is taxable income in the computation and, in common practice, is presented **above the tax line** (as other income or a reduction in R&D costs, typically as a government grant), so it sits in profit before tax and the tax on it sits in current tax [practice and secondary commentary; not a statutory point]. Setting it against the CT liability is a payment mechanism, not a reduction of the tax charge.

In the invented story, Nadia Kerr, Tarnmoor's CFO, likes the result: low cash tax because of the allowances, a 25% book rate, no surprises.

> **Exam lens: laying out a deferred tax answer.**
> - **Past appearances:** M24 Q2(b) (4 of 15 marks: deferred tax on vehicles only; some computed it for all assets); M25 Q2(b) (5 of 15: deferred tax movement; land wrongly included, bonus and pension differences missed); N25 Q1(b) (3 of 20: total tax charge and closing balance; "only a small number of candidates calculated the deferred tax charge"); **M26 Q6** (10 marks: a new IFRS company with full expensing, unpaid pensions, a tax loss and the recognition criteria).
> - **Style:** "Calculate" requirements; 0.5–1 mark per point: fixed asset difference, short-term difference, rate, recognition comment, movement, total charge.
> - **Layout:** fixed asset and short-term differences on separate lines; opening, closing, movement; then current + deferred = total. £ or £000 throughout, never both.
> - **Traps:** liabilities always provided; recognise a loss asset to offset a liability; a new company has **no b/f balances**; include short-term differences; land usually has no CA difference; compute the **charge**, not just balances.

---

## Losses and the asset nobody books.

Tax losses carried forward reduce future tax, so in principle they support a DTA. In practice, this is where the recognition test bites hardest.

**Brackenwell (invented).** Tarnmoor bought Brackenwell Sensors Ltd on **1 July GY2**. Its pre-change losses were **£8.6m** (£5.3m + £0.7m + £2.6m). Potential DTA at 25%: **£2.15m**. Tarnmoor recognises **none**:

1. **General:** a company with a history of losses needs convincing other evidence of future profit (IAS 12 para 35); a venture-funded developer rarely has it.
2. **Tax law:** after a change in ownership, CTA 2010 Part 14 restricts the use of pre-change losses where (among other things) there is a major change in the nature or conduct of the trade; Brackenwell's switch to captive supplier makes that likely, and chapter 14 explains why the losses may never be usable. The accounts carry the asset at nil and disclose the unrecognised losses.

**The loss restriction and scheduling.** Carried-forward losses can be set against profits up to the **£5m deductions allowance** plus **50%** of profits above it (CTA 2010 s 269ZD and related provisions); a group shares one allowance, allocated by nomination. A group recognising a loss asset must schedule forecasts; the longer the horizon, the less is probable.

### Worked example: a new company with a loss (labelled hypothetical, modelled on M26 Q6)

Suppose a new company reporting under IFRS buys plant for £4.0m, full expenses it, and depreciates it by £0.4m in year 1. It has a tax loss of £2.0m and an unpaid pension accrual of £0.2m at the year end.

| £000 | Carrying amount | Tax base | Temporary difference | Deferred tax at 25% |
|---|---|---|---|---|
| Plant | 3,600 | 0 | 3,600 taxable | 900 DTL |
| Pension accrual (liability) | (200) | 0 | 200 deductible | (50) DTA |
| Tax loss carried forward | — | — | 2,000 | (500) DTA |
| **Net DTL** | | | | **350** |

The DTA of £550k is recognised in full: the £900k DTL relates to the same company and authority and will reverse to generate taxable profit (para 28). A new company has **no opening balances**, so the deferred tax charge is the whole **£350k**. The examiners' three errors on M26 Q6 (paraphrased): treating the temporary difference as accounting loss minus tax loss; asking for b/f balances; confusing assets with liabilities.

> **Going further: loss assets and judgement.** The decision to recognise a loss DTA is an accounting estimate the auditors will test hard (forecasts, the £5m allowance and its group allocation, the Part 14 rules, the trade-specific streaming of losses). Tax functions should keep a loss "utilisation schedule" by company and reconcile it to the group allowance nomination each year.

---

## Share schemes, revaluations and other awkward items.

**Share schemes.** The IFRS 2 / FRS 102 Section 26 charge is recognised over the vesting period but is **not deductible** (CTA 2009 s 1038). **Part 12** gives a deduction in the AP in which the employee acquires the shares, equal to market value less any consideration (chapter 7). So the accounting charge comes early and the tax deduction comes late, in a different amount.

Under IAS 12 the employer recognises a DTA on the **estimated future deduction**, measured on the share price at the reporting date for the portion earned to date. If the estimated deduction exceeds the cumulative remuneration expense, the tax effect of the excess goes to **equity**, not profit or loss (IAS 12 paras 68A–68C, as described by KPMG and Deloitte: **not opened**). A rising share price increases the asset; a falling one shrinks it. Contrast US GAAP, which takes excess benefits through profit or loss.

**Revaluations and investment property.** If land or investment property is revalued upwards, the carrying amount exceeds the tax base. IAS 12 para 51C presumes that investment property at fair value under IAS 40 is recovered **through sale** (rebuttable for depreciable property held to consume its benefits over time); deferred tax is measured on the sale basis. Guidance on FRS 102 (paras 29.15–29.16, as described by ICAEW and practitioners) measures deferred tax on non-depreciable revalued assets and investment property at the rates and allowances applying on **sale** [secondary]. For a UK company, that means the chargeable gain, after **indexation frozen at December 2017**.

**Roll-over relief.** The ICAEW helpsheet says deferred tax is still provided on a revaluation even if the company expects to roll the gain over, because roll-over only postpones the tax [secondary].

**Uncertain tax positions.** IFRIC 23 *Uncertainty over Income Tax Treatments* (annual periods beginning on or after 1 January 2019) asks whether it is **probable that the taxation authority will accept** a treatment, assuming it examines the point with full knowledge. If not, the company reflects the uncertainty using the **most likely amount** or the **expected value**, whichever better predicts the resolution. Where the dispute is only about timing, a provision in current tax is matched by a deferred tax asset and the total charge moves little. A provision of this kind can trigger notification under the **uncertain tax treatment** rules (FA 2022 Sch 17; chapter 4; in the invented story, TEL's GY2 provision on its £24m ERP costs).

---

## Fair values when a company is bought.

On a business combination the consolidated accounts restate the target's identifiable assets and liabilities at acquisition-date fair value (IFRS 3). A **share purchase changes nothing in the target's tax position**: there is no step-up in the tax base. So each fair value uplift creates a temporary difference in the group accounts (IAS 12 para 19), and the resulting deferred tax is part of the acquisition accounting, adjusting goodwill (para 66). No deferred tax is recognised on goodwill itself (para 15(a)): it is a residual, and grossing it up would only increase it again.

### Worked example: Calder's customer relationships in Tarnmoor's group accounts (invented)

| £000 | |
|---|---|
| Customer relationships recognised on acquisition (fair value) | 4,000 |
| Tax base (internally generated by Calder; no tax value) | 0 |
| Taxable temporary difference | 4,000 |
| **DTL at 25%** (recognised in the acquisition balance sheet) | **1,000** |
| Effect on goodwill | +1,000 |

After acquisition the group amortises the asset over **10 years** (invented): **£400k a year** (£300k for the 9 months of GY1). Calder gets no deduction, because the asset does not exist in Calder. The DTL unwinds by **£100k a year** (£75k in GY1), a deferred tax credit that exactly offsets the tax effect of the amortisation, so the reported rate stays at 25%. None of this touches Calder's own computation, returns or instalments.

**Contrast an asset purchase**, which gives the buyer new tax bases under the intangible fixed assets regime (CTA 2009 Part 8), subject to the restrictions on goodwill and customer-related intangibles (chapter 11). A share purchase buys the target's history, including its tax bases.

**Brackenwell** is the mirror image: at acquisition the group judged its losses irrecoverable and recognised no DTA, so goodwill was correspondingly higher. How a later recognition would be accounted for is governed by IAS 12 and IFRS 3 and is a matter for the auditors, beyond this paper.

> **Exam lens: acquisitions.** Not examined M23–M26 as such, but a natural "tax accounting" add-on to a share acquisition question (chapters 20 and 31). Key points: no tax base step-up on a share deal; DTL on fair value uplifts; no DTL on goodwill; the target's own tax unaffected.

---

## Explaining the rate.

IAS 12 para 81(c) requires an explanation of the relationship between tax expense and accounting profit in one or both of two forms: a **numerical reconciliation** between tax expense and accounting profit multiplied by the applicable rate(s), or a reconciliation between the **average effective tax rate** and the applicable rate, together with the basis on which the applicable rate is computed. Para 85 says the entity uses the rate that provides the most meaningful information; most UK groups use the UK rate of 25%.

Timing differences fully provided at 25% **do not appear** in the reconciliation. What remains: permanent disallowances; overseas rate differences; unrecognised losses and other unrecognised DTAs; rate changes; prior year adjustments; top-up taxes; CFC charges.

### Worked example: Tarnmoor's simplified ETR reconciliation, GY2 (invented)

| | £000 | % of PBT |
|---|---|---|
| Consolidated profit before tax | 100,000 | |
| Tax at the UK rate of 25% | 25,000 | 25.00 |
| Overseas rate: TVS profit £30,000k at Vallaria's 20% | (1,500) | (1.50) |
| Overseas rate: TCM profit £3,300k at Marrovia's 9% | (528) | (0.53) |
| UK CFC charge on TPLC in respect of TCM | 132 | 0.13 |
| Expenses not deductible (fines, customer gifts, capital deal costs) £2,000k | 500 | 0.50 |
| CIR disallowance £2,300k: carried forward, no DTA recognised | 575 | 0.58 |
| TPLC management expenses carried forward (CFC threshold), no DTA recognised: 825 × 25% | 206 | 0.21 |
| **Total tax charge** | **24,385** | **24.39** |

TPLC's surplus management expenses that the CFC threshold traps (CTA 2010 s 105(3A); chapter 13) carry forward with no asset recognised.

Not in the list: full expensing, unpaid bonuses, pension accruals, the customer relationship amortisation. All timing; all absorbed by deferred tax.

*Simplifications:* top-up tax under the Pillar Two rules (Marrovia) is omitted (chapter 30 computes Tarnmoor's); the equity-accounted Helmside loss and the consortium relief claimed for it are treated as offsetting; intra-group interest eliminates on consolidation, and the overseas lines use each company's own profit.

**Disallowed interest and deferred tax.** CIR disallowances carried forward can be reactivated (chapter 28; Tarnmoor reactivates £1.96m in GY3). In principle the carried-forward amount is a deductible item supporting a DTA if reactivation is probable. In GY2 Tarnmoor judges future interest capacity too uncertain and recognises none (invented judgement).

> **Going further: the reconciliation as a control.** Tom Hesketh (invented head of tax) reviews the reconciliation line by line before the audit committee sees it: an unexplained item usually means an error in the provision. Year-on-year movements in each line should be explicable by events (an acquisition, a rate change, a new CFC charge).

---

## Pillar Two and the emergency exception.

On **23 May 2023** the IASB issued *International Tax Reform: Pillar Two Model Rules* (amendments to IAS 12). The central feature was a **mandatory temporary exception**, effective immediately and retrospectively.

**Why.** The OECD GloBE rules impose top-up tax where a group's jurisdictional effective rate falls below 15%; the UK implemented them in F(No.2)A 2023 Part 3 (multinational top-up tax; domestic top-up tax). Top-up tax depends on jurisdictional ETRs computed under the GloBE rules' own mechanics, including their own deferred tax. Applying IAS 12's ordinary deferred tax requirements to it would have been extraordinarily hard to do consistently in time.

**The amendments:**

| Paragraph | Requirement | Effective |
|---|---|---|
| 4A | Neither recognise nor disclose information about DTAs and DTLs related to Pillar Two income taxes | Immediately, retrospectively (IAS 8) |
| 88A | Disclose that the exception has been applied | Immediately |
| 88B | Disclose current tax expense (income) related to Pillar Two income taxes **separately** | Annual periods beginning on or after 1 January 2023 |
| 88C–88D | Where legislation is enacted or substantively enacted but not yet in effect, disclose known or reasonably estimable information about exposure (may be an indicative range) | Annual periods beginning on or after 1 January 2023 (not interim periods ending on or before 31 December 2023) |

**UK adoption.** The UK Endorsement Board adopted the amendments on **19 July 2023**. The FRC amended **FRS 102** (Section 29) and **FRS 101** in **July 2023** with an equivalent temporary exception and targeted disclosures (IAS Plus dates the FRC announcement 12 July 2023; the FRC document says only "July 2023"). The exception was described as temporary, but no end date was set (FRC: "no specified end date" [secondary]).

**Tarnmoor.** With consolidated revenue far above €750m, any top-up tax (such as multinational top-up tax on low-taxed Marrovian profits) is **current tax**, disclosed separately; no deferred tax is recognised for it. The rules belong to chapter 30.

> **Exam lens: Pillar Two in a tax accounting tail.** Pillar Two (MTT/DTT) is **awareness (3)** and was not examined M23–M26. If a tax accounting requirement touches it, one or two sentences on the IAS 12 exception (no deferred tax; separate current tax disclosure) score better than a description of the GloBE computation.

---

## The tax function, the board and the examiner.

In a group like Tarnmoor, deferred tax is a quarterly discipline. The tax function:

- prepares a **tax provision** for each reporting entity (current and deferred) at each reporting date, for both the statutory accounts (FRS 101/102) and group reporting (IFRS);
- **trues up** the provision when returns are filed (12 months after the period end), booking prior year adjustments;
- maintains a **fixed asset deferred tax schedule** (qualifying NBV against pool TWDVs by company) and a **short-term differences schedule** (bonuses, pensions, EBCs, provisions);
- supports the **senior accounting officer** (FA 2009 Sch 46; chapter 4): Tarnmoor's CFO must certify each year that the UK companies have appropriate tax accounting arrangements; an unreconciled deferred tax balance is a warning sign;
- documents **uncertain positions** (IFRIC 23) and checks the UTT notification triggers.

**Three recurring board conversations:**

1. **The ETR.** Full expensing and the 40% FYA lower cash tax, not the rate. The rate falls only through permanent items (overseas rate differences, non-taxable income, reliefs with no reversal).
2. **Loss assets.** Recognising Brackenwell's losses would have flattered the balance sheet by £2.15m. The function's job is an honest forecast, scheduled against the £5m allowance and the Part 14 rules, and resistance to pressure to recognise what the law will probably take away.
3. **Rate changes.** A rate change becomes a remeasurement when the Bill clears the Commons. Model it before the vote.

> **Exam lens: the whole topic.**
> - **Frequency:** M24 Q2(b), M25 Q2(b), N25 Q1(b), M26 Q6: growing; "a tax-accounting tail" is now common after a computation.
> - **Marks:** 3–5 marks as a tail; 10 marks standalone (M26).
> - **What scores:** both categories of difference; 25% with a reason (enacted); the movement and the total charge; a recognition sentence for any DTA; exclusion of land; no b/f balances for a new company.
> - **What wastes time:** describing IAS 12 in general terms without numbers; computing deferred tax on all assets when only one class is asked (M24).

---

## What to take away.

- Deferred tax is an **accounting** measure, not a tax. HMRC never assesses it.
- **Total tax charge = current tax + deferred tax**; deferred tax is the **movement** in the balances. The examiner wants the charge, not just balances.
- **Two languages:** IAS 12 (carrying amount v tax base: temporary differences) and FRS 102 s 29 (timing differences plus business combinations and revaluations). Permanent differences create no deferred tax.
- **Liabilities always** (except goodwill, the initial recognition exception, Pillar Two); **assets when probable**; a reversing DTL in the same company and authority is the strongest support; unused losses are strong evidence against forecast profits; **no discounting**.
- **Rate:** enacted or substantively enacted (UK: Bill through the Commons). **25%** for FY2026 and FY2027 (FA 2026 ss 11–12).
- **Fixed asset difference** = qualifying NBV − TWDV, excluding land. Full expensing creates a DTL equal to the tax it saves: cash, not ETR.
- **Short-term differences** usually create DTAs: bonuses unpaid at 9 months, pension accruals, EBCs, general provisions, unspread lease transition amounts.
- **Calder (invented), 31 March GY2:** NBV £14.0m − TWDV £8.4m = £5.6m → DTL £1.4m; short-term £0.8m → DTA £0.2m; opening DTL £1.1m, DTA £0.1m; **deferred tax charge £0.2m**; current tax £750,000; **total £950,000 = 25% × PBT £3.8m**.
- **Brackenwell:** losses £8.6m, potential DTA £2.15m, **not recognised** (Part 14; history of losses).
- **Acquisitions:** fair value uplifts create deferred tax in the group accounts only; Calder's customer relationships £4.0m → DTL £1.0m, increasing goodwill and unwinding £0.1m a year; no DTL on goodwill.
- **ETR reconciliation** shows only permanent and rate items: Tarnmoor GY2 (simplified) **24.39%**.
- **Pillar Two exception** (IASB 23 May 2023; UKEB 19 July 2023; FRC July 2023): no deferred tax on top-up taxes; current top-up tax disclosed separately.

The next chapter takes the profit we have learned to account for and turns it into a full large company computation, line by line, the way the examiner sets it every sitting.

---

## Key rules and figures

| Rule | Detail | Source |
|---|---|---|
| CT main rate FY2026 / FY2027 | 25% (19% small profits; 3/200) | FA 2025 ss 13–14; FA 2026 ss 11–12 |
| Measurement rate | Enacted or substantively enacted at the balance sheet date | IAS 12 para 47; FRS 102 para 29.12 |
| UK substantive enactment | Bill through all Commons stages; or PCTA 1968 resolution | ICAEW / practice (secondary) |
| DTL recognition | All taxable temporary differences (exceptions: goodwill, IRE, Pillar Two) | IAS 12 paras 15, 4A |
| DTA recognition | To the extent probable; taxable temporary differences of the same entity and authority; losses strong evidence against | IAS 12 paras 24, 28, 34–35 |
| Discounting | Never | IAS 12 para 53 |
| Single transaction amendment | Leases and decommissioning; periods beginning on or after 1 January 2023 | IAS 12 (May 2021) |
| Business combinations | DTL on fair value uplifts; adjusts goodwill; none on goodwill | IAS 12 paras 15(a), 19, 66 |
| Investment property at FV | Presumed recovered through sale | IAS 12 para 51C |
| Share options | DTA on estimated deduction; excess over cumulative expense to equity | IAS 12 paras 68A–68C (secondary) |
| Rate reconciliation | Amounts and/or rates; basis of applicable rate | IAS 12 paras 81(c), 85 |
| Uncertain tax treatments | Probable acceptance? Most likely amount / expected value | IFRIC 23 (from 1 January 2019) |
| Pillar Two exception | No DT; disclose use; separate current tax | IAS 12 paras 4A, 88A–88D (23 May 2023); UKEB 19 July 2023; FRC July 2023 |
| Unpaid remuneration | 9 months | CTA 2009 s 1288 |
| Pension contributions | Paid basis; spreading | FA 2004 ss 196–197 |
| Share option charge | Not deductible; Part 12 relief on acquisition | CTA 2009 s 1038; Part 12 |
| Full expensing; 40% FYA; WDA | 100%; 40% from 1 January 2026; main pool 14% from 1 April 2026 | CAA 2001 ss 45S, 45U; FA 2026 ss 28–29 |
| Loss restriction | £5m allowance + 50% of excess | CTA 2010 Part 7ZA (s 269ZD) |
| Calder GY2 (invented) | DTL £1.4m; DTA £0.2m; charge £0.2m; total £950,000 | invented (story); this chapter |
| Tarnmoor GY2 ETR (invented, simplified) | 24.39% on PBT £100m | this chapter |

## Statutory and other references

**Statute:** CTA 2009 ss 46, 1038, 1288, 1290–1297, Part 8, Part 12, Part 13 Ch 1A (merged RDEC); CTA 2010 Part 7ZA (s 269ZD), Part 14; CAA 2001 ss 45S, 45U, 46(4B), 58(5), 59A; FA 2004 ss 196–197; FA 2009 Sch 46; FA 2019 Sch 14 Part 3; FA 2022 Sch 17; F(No.2)A 2023 Part 3; FA 2025 ss 13–14; FA 2026 ss 11, 12, 28, 29; Provisional Collection of Taxes Act 1968.

**Accounting standards and interpretations:** IAS 12 *Income Taxes* (paras 4A, 15, 19, 24, 28, 34–35, 47, 51C, 53, 66, 68A–68C, 81(c), 85, 88A–88D); IAS 12 amendments *Deferred Tax related to Assets and Liabilities arising from a Single Transaction* (May 2021) and *International Tax Reform: Pillar Two Model Rules* (23 May 2023); IFRIC 23 *Uncertainty over Income Tax Treatments*; IFRS 2; IFRS 3; IAS 40; FRS 101; FRS 102 Section 29 (paras 29.7, 29.12, 29.15–29.16) and the FRC's July 2023 Pillar Two amendments.

**Exam sources:** CIOT LCG November 2025 Q1 (question, suggested answer, examiners' report); May 2026 Q6; May 2025 Q2; May 2024 Q2 (tax.org.uk past papers pages).

**Cases:** none central to this chapter (deferred tax is an accounting measure; the tax-follows-the-accounts cases are in chapter 5).
