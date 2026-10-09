# Chapter seven: The large company computation.

On the morning our invented group, Tarnmoor, published its results for Group Year Two (GY2), an analyst rang the investor relations team with a simple question. Tarnmoor Engineering Ltd (TEL), the group's main UK trading company, had made a profit before tax of £23.5m. The main rate of corporation tax is 25%. So why was its current tax bill about £2m, and not nearly £6m?

The call was passed to Tom Hesketh, the group's head of tax. Like everyone and everything at Tarnmoor, he is invented for teaching. His answer took twenty minutes. This chapter takes a little longer, because it is the full answer.

This is the third chapter of Part Two, on measuring profit. Chapter 5 showed that tax starts from the accounts; chapter 6 showed how the accounts then report the tax. This chapter is the engine room between them: the corporation tax computation of a large company, at the depth the Advanced Technical paper expects. Every topic in it is **core (grade 1)** in the syllabus grid, and every LCG sitting since May 2023 has carried a computation question worth 15 or 20 marks. It builds on *The Living Law* (TKS), chapters 20 and 21, which set out the basic pro forma and the rates. Throughout, the law is that for **FY2026** (1 April 2026 to 31 March 2027).

---

## A checkpoint, not a calculator.

Start with the misconception, because the analyst held it and so do many people who should know better: **"a large company simply pays 25% of its accounting profit."** It is easy to see why. The headline rate is 25%, the accounts show a profit, and the tax note even reconciles one to the other. But the accounting profit is where the computation starts, not where it ends.

Three things separate accounting profit from tax. First, the accounts measure profit under GAAP, while tax overrides GAAP where the law says so. Second, some reliefs pass *between* companies: in a group, losses and expenses in one company reduce profits in another. Third, the rate rules themselves (marginal relief, associated companies, straddling years) depend on facts the accounts do not show.

Think of the computation as a customs checkpoint. Everything in the profit and loss account passes through it. Some items are **stopped** (a fine; whisky given to customers). Some are **held at the barrier and released later**, because tax allows them only when cash moves (unpaid bonuses; pension contributions). Some are **swapped for a different document**, because tax has its own measure (capital allowances for depreciation; Part 12 share relief for the IFRS 2 charge). The officer at the checkpoint is the law.

*The Living Law*, chapters 20 and 21, set out the shape: corporation tax is charged on a company's taxable total profits (TTP) for an accounting period; those profits gather income under several headings and chargeable gains, less reliefs. At AT level the shape is the same, but every line has more rules behind it.

Two statutes do most of the work: the **Corporation Tax Act 2009** (CTA 2009: computing income) and the **Corporation Tax Act 2010** (CTA 2010: rates, reliefs, charitable donations). Pensions come from the **Finance Act 2004**.

**The AT pro forma (single company)**

| Step | Line | Authority / chapter |
|---|---|---|
| 1 | Profit before tax (per accounts) | CTA 2009 s 46 |
| 2 | ± adjustments, each labelled with reason | ss 53, 54; Part 20; this chapter |
| 3 | = Tax-adjusted trading profit before CAs | |
| 4 | − Capital allowances (+ balancing charges) | CAA 2001; chapters 8–9 |
| 5 | = Trading profits | |
| 6 | + Property income; NTLR profits; non-trading IFA gains; income not otherwise charged; chargeable gains | chapters 11–13, 16–18; CTA 2009 s 979 |
| 7 | = Total profits | |
| 8 | − Current-year and brought-forward losses (with the £5m allowance) | chapter 14 |
| 9 | − Qualifying charitable donations | CTA 2010 s 189 |
| 10 | − Group and consortium relief | chapter 15 |
| 11 | = TTP | |
| 12 | CT at 25% / 19% / marginal relief; RDEC set-off; payment dates (QIPs) | CTA 2010 Part 2 (rates and marginal relief; TKS ch 20); chapters 3, 10 |

Spoken once, so you can hear its rhythm: begin with profit before tax; make the adjustments, each labelled with its reason; that gives the tax-adjusted trading profit before capital allowances; deduct capital allowances to reach trading profits; add the other sources; that is total profits; then the reliefs in statutory order (losses of the same period and losses brought forward, then qualifying charitable donations, and group relief last); what remains is TTP. Apply the rate, with marginal relief if it applies, set off any expenditure credit, and work out when the tax is paid. The analyst's mistake was to stop at line 1 and jump to line 12.

Capital allowances belong to chapters 8 and 9, R&D to 10, intangibles to 11, loan relationships to 12, losses and group relief to 14 and 15. This chapter owns the trading adjustments, employment costs, entertaining and gifts, fines, income not otherwise charged, charitable donations, the lessee's side of long funding leases, and the rates; then it assembles TEL's GY2 computation.

---

## Trade or investment, for a company.

Before any adjustment, ask whether the company trades at all. For a company the answer decides:

- capital allowances against a trade **v** management expenses for investment business (chapter 13);
- **trading** loan relationship debits **v** non-trading debits with different loss rules (chapter 12);
- flexible trading loss relief **v** the narrower investment-company reliefs (chapter 14);
- the SSE's trading conditions (chapter 18), the R&D reliefs (which need a trade: chapter 10) and the transactions in UK land rules (CTA 2010 Part 8ZB: chapter 16).

*The Living Law*, chapter 11, taught the badges of trade (subject matter, length of ownership, frequency, supplementary work, circumstances of sale, motive). Two cases show how the courts use them:

- ***Marson v Morton*** (Ch D, 1986): Sir Nicolas Browne-Wilkinson V-C stressed that whether there is a trade is a question of fact on all the circumstances; the badges are not a comprehensive list and no single one is decisive (as summarised in HMRC's BIM20205 and secondary sources).
- ***Eclipse Film Partners No 35 LLP v HMRC*** [2015] EWCA Civ 95 (17 February 2015): a partnership that acquired film rights and sub-licensed them to a distributor, playing no meaningful part in marketing or distribution, was not trading. Whether a trade exists is for the tribunal of fact; speculation indicates trade but is not essential. HMRC estimated about £635m of tax protected (HMRC's estimate, not a finding).

*Marson v Morton* concerned a single purchase and sale of land, which is why it is cited so often for property: the sale of an investment does not become trading just because a profit was made or planning permission obtained. *Eclipse* concerned a highly structured arrangement financed by borrowing, and shows the opposite pressure: taxpayers who *want* a trade (for loss relief or interest relief) must show real commercial activity.

*Eclipse* matters for groups because activity, money and paperwork are not enough: the company itself must do something commercial.

**In our invented group** the question arises company by company (each is a separate taxpayer):

| Company | Activity | Likely classification |
|---|---|---|
| TEL | Designs, makes and sells valves, actuators, pumps | Trading |
| Tarnmoor plc (TPLC) | Holds shares, raises money, directs the group | Company with investment business |
| Tarnmoor Estates (TES) | Owns and lets sites, mostly to group companies | Investment business; dealing or Part 8ZB if it bought to develop and sell |
| Tarnmoor Finance (TFL) | Borrows on the bond market, lends to the group | Trading or non-trading loan relationships: chapter 12 |

The classification is a fact-finding exercise, not a label chosen for convenience. A holding company that also provides management services does not become a trader by sending invoices; a property company that buys a site, obtains planning permission and sells to a developer may become one. In a group the tax team keeps a short note for each company explaining its classification, because HMRC enquiries into losses, the SSE and R&D claims often start with the question "does this company trade?".

> **Exam lens: badges and classification.** Grade **1** (Badges of Trade; Trading income). Rarely a standalone question, but the classification drives every later line (M24 Q1: most candidates failed to identify that the parent had an investment business). Trap: computing trading profits for a holding company. Say *why* a company trades or invests before computing.

---

## From profit before tax to trading profit.

**CTA 2009 s 46(1):** trade profits "must be calculated in accordance with generally accepted accounting practice, subject to any adjustment required or authorised by law". Chapter 5 explored the first half; this chapter lives in the second. The general adjustments are **s 53** (no deduction for capital items) and **s 54** (expenses must be incurred wholly and exclusively for the trade); **Part 20 (ss 1288–1309)** adds specific rules.

**Method.** Start from profit **before tax** (not operating profit). Add back items deducted that tax disallows or delays. Deduct items tax allows that the accounts did not deduct, and items taxed elsewhere or not at all (dividends received; an accounting profit on selling plant). The M26 examiners noted candidates adding items that should have been deducted: mark every line + or −.

- **Depreciation** is added back; CAs replace it (chapter 8). An accounting **profit on disposal** of plant is deducted; the proceeds come off the pool. **Building depreciation** is added back; SBA may replace part (chapter 9).
- **Interest:** TEL borrowed £200m from TFL at 6% for its trade: £12.0m a year, a **trading loan relationship debit** (CTA 2009 Part 5; chapter 12), left in with no adjustment. The CIR disallowance falls on TPLC, not TEL (chapter 28).
- **Impairments:** a specific impairment of a customer's trade debt follows the accounts and is deductible; an impairment of a loan to a fellow subsidiary is a connected-company loan relationship debit, generally with **no debit** (chapter 12). N24 Q4 turned on this contrast.
- **Legal and professional costs** follow purpose: collecting trade debts, defending a patent or a customer claim is revenue; acquiring or improving a capital asset is capital. TEL's **£70,000 planning appeal** for a factory extension is capital: added back, and not SBA expenditure.
- **No adjustment, but say so:** TEL expensed **£24m** of ERP implementation costs as revenue. Tax follows; HMRC might argue part is capital, which is why the uncertainty was notified under the UTT rules (chapter 4).

> **Going further: building the adjustment schedule.** In practice the tax team maps every P&L nominal code to a tax treatment each year, reviews new codes, and agrees capital/revenue splits with the finance team for projects (ERP, refurbishments, restructurings). Provisions need a GAAP-compliance check (chapter 5). Large one-off items go to the UTT review (chapter 4).

---

## Pay that waits.

**CTA 2009 s 1288:** where remuneration is charged in the accounts for a period of account but **not paid within 9 months after the end of that period**, it is deductible only for the period in which it is paid (and never if never paid). Provisions for future remuneration count. If the computation is made before the 9 months have run, assume unpaid and amend later (**s 1289(3)**). "Paid" follows ITEPA 2003 ss 18–19: the earliest of actual payment, entitlement, and (for directors) further moments such as crediting in the company's records.

**Why:** to stop an accrual deducted now for pay received (and taxed) much later, or never.

**In our invented case (TEL, GY2):**

| Item | Charged in GY2 accounts | Paid | Within 9 months (by 30 Sept GY3)? | Treatment |
|---|---|---|---|---|
| Annual bonus | £2.0m | 31 March GY3 | Yes | Deductible GY2: no adjustment |
| Cash LTIP (vested 31 Dec GY2) | £1.4m | 15 November GY3 | No | Add back £1.4m in GY2; deduct in GY3 |

The 9 months run from the end of the **period of account**: Calder's 9-month AP to 31 December GY3 had its window to 30 September GY4.

The November 2025 examiners set exactly this trap: an LTIP bonus unpaid at 9 months. Note that the rule bites on the *timing* of the deduction, not its amount: the £1.4m is not lost, it moves to GY3. That timing difference also produces a deferred tax asset in TEL's accounts (chapter 6). Two refinements matter at this level. First, the 9 months run from the end of the period of account, so a short period moves the deadline. Second, the rule is about remuneration: share awards have their own regime (Part 12), and contributions to trusts for employees have theirs (ss 1290–1297).

> **Going further.** Check the payroll calendar against large accruals at the year end. Paying in month 9 keeps the deduction in the year of charge; paying in month 10 moves it a year, which matters if the company is about to become loss-making, change rate, or leave the group. Employer's NIC on bonuses is a separate deduction question; check the treatment applied in the accounts.

---

## Money held in trust for employees.

Employee benefit trusts (EBTs) were long used to take a deduction now and defer or avoid employees' tax.

- ***Macdonald v Dextra Accessories Ltd*** [2005] UKHL 47 (7 July 2005): contributions to an EBT whose trustee paid no emoluments but made loans to beneficiaries were "potential emoluments" (FA 1989 s 43(11)), so not deductible until paid out as emoluments. HMRC's guidance (IHTM42959) applies *Dextra* to contributions made **before 27 November 2002**; the statutory rule governs later ones.
- ***RFC 2012 plc v Advocate General for Scotland*** [2017] UKSC 45 (the Rangers case; TKS chapter 3): remuneration routed through a trust is still the employee's earnings.

The pattern of the story is one of Parliament and the courts closing a timing gap step by step. In *Dextra* the companies had deducted the contributions when they paid them into the trust, while the trustee made loans rather than paying salaries, so nobody was taxed on pay. The House of Lords looked at what the money was held *for*. The statutory rule now in s 1290 generalised that answer, and the 2017 amendments added two further locks: a long-stop on how long a deduction can wait, and a requirement that the employee's tax is actually paid. The result is a deduction that tracks the employee's taxable receipt.

**CTA 2009 ss 1290–1297 (employee benefit contributions):**

| Rule | Detail |
|---|---|
| Basic rule (s 1290(2)) | Deductible only so far as qualifying benefits are provided (or qualifying expenses paid) in the period or within **9 months** after it; otherwise when provided (s 1290(3)) |
| 5-year cut-off (s 1290(1A), F(No.2)A 2017 s 37) | No deduction for a period beginning more than 5 years after the end of the period of contribution |
| Tax paid (s 1290(2B), (3B)–(3E)) | Where benefits give rise to both IT and NIC, deduction only if those are paid within **12 months** after the period end |
| Qualifying benefits (s 1292) | Payments giving IT and NIC charges; termination payments; EFRBS payments; Part 7A "relevant steps". Loans are not qualifying benefits |
| Exclusions (s 1290(4)) | Registered pension schemes; Part 11 and Part 12 share relief |

> **Worked example (hypothetical, not story).** Suppose TEL contributes **£1.0m** to an EBT in GY2. By 30 September GY3 the trustee pays **£600,000** of cash bonuses through payroll, with PAYE and NIC paid on time. Deduction GY2: **£600,000**. The remaining **£400,000** is deductible only when paid out as qualifying benefits, and never for a period beginning more than 5 years after the end of GY2.

---

## Pensions, paid and sometimes spread.

**FA 2004 s 196:** employer contributions to a registered pension scheme are **not capital** and, so far as deductible, are deducted **in the period in which they are paid**. Accrued but unpaid contributions are added back; earlier accruals paid this year are deducted.

**In our invented case:** TEL's employer contributions are paid on the 22nd of the following month.

| £m | GY1 | GY2 |
|---|---|---|
| Contributions **paid** in the year | 11.0 | 11.5 (incl. £0.6m GY1 accrual) |
| Accrual at year end (unpaid) | 0.6 | 0.9 |
| Accounts charge GY2 (11.5 − 0.6 + 0.9) | | 11.8 |
| Computation GY2: add back accrual | | +0.9 |
| Computation GY2: deduct GY1 accrual paid | | −0.6 |

**Why spreading exists.** A company might pay one enormous contribution, perhaps to repair a defined benefit deficit, and wipe out a year's profits (or move profits between years with very different rates or loss positions). Section 197 spreads the deduction for genuinely exceptional contributions, but only when two tests are both met. The examiners say it is over-applied.

**Spreading (FA 2004 s 197)** applies only if **both** tests are met:

1. contributions paid in the current chargeable period (CCCP) **exceed 210%** of those paid in the previous period (CPCP); and
2. the **relevant excess** (CCCP − 110% × CPCP) is **at least £500,000**.

| Relevant excess | Spreading |
|---|---|
| Under £500,000 | None |
| £500,000 to under £1m | Half this period, half next |
| £1m to under £2m | Thirds: this period and the next two |
| £2m or more | Quarters: this period and the next three |

(CPCP is adjusted for unequal period lengths; cost-of-living increases for pensioners and funding of future service for new members are excluded from CCCP; s 198 deals with cessation.)

**TEL:** 210% × £11.0m = £23.1m; £11.5m paid: **no spreading**.

> **Worked example (hypothetical).** CPCP **£1.0m**; CCCP **£2.6m**.
> Test 1: £2.6m > 210% × £1.0m = £2.1m ✓.
> Relevant excess: £2.6m − (110% × £1.0m) = **£1.5m** (thirds band).
> Deferred: 2/3 × £1.5m = £1.0m (**£0.5m** treated as paid in each of the next two periods).
> Deduction this period: £2.6m − £1.0m = **£1.6m**.

> **Exam lens: employment costs.** Grade **1** (CT relief for expenses relating to employment including remuneration, benefits, pension contributions). Appearances: M23 Q1 (pension spreading of a one-off contribution), M24 Q6 (spreading of an earlier excess), M25 Q2 (unpaid bonuses and pensions), N25 Q1 (LTIP unpaid at 9 months; pensions). **N25 examiners:** many candidates spread pensions when the rules were not triggered (the N25 suggested answer's short explanation simplifies the statutory two-part test). Traps: deduct prior-year accruals paid this year; run both s 197 tests; the 9 months run from the end of the period of account.

---

## Shares for staff.

Under IFRS 2 (and its UK GAAP equivalents) a company charges the fair value of share options over the vesting period though no cash leaves it. **CTA 2009 Part 12** instead ties the company's deduction to the employee's gain.

**Why Part 12 exists.** The IFRS 2 charge is an estimate of the value of the option at grant, spread over vesting, and bears no relation to what the employee eventually receives. Part 12 swaps it for a deduction equal to the employee's actual gain, given when the employee acquires the shares, so the company's relief mirrors the employee's income tax charge in amount and timing.

| Condition (ss 1007–1009) | Detail |
|---|---|
| Employer | Within the CT charge on the business for which the employee works |
| Shares | Ordinary, fully paid, not redeemable; listed, or in a company not under the control of another company, or in a company controlled by a listed company |
| Whose shares | Employer, its parent, or a consortium member owning the employer or its parent (s 1008) |
| Employee | Subject to an ITEPA charge on acquisition, or the restricted-shares conditions met (s 1009) |

- **Amount (ss 1010, 1018):** market value when acquired less consideration given (NIC transferred to the employee is not consideration).
- **Timing (s 1013):** the AP in which the shares are **acquired** (for options, exercise, not grant); a trading deduction, or a management expense for a company with investment business.
- **No other deduction (s 1038, substituted by FA 2013 s 40):** nothing for providing the shares or options, including the IFRS 2 charge; **set-up and administration costs, borrowing costs and acquisition fees, stamp duty and SDRT remain deductible** (s 1038(6)).
- **Lapsed options (s 1038A):** nothing, unless the employee is chargeable on an amount.
- Contrast ***HMRC v NCL Investments Ltd*** [2022] UKSC 9 (chapter 5): IFRS 2 debits allowed under the earlier law (periods to 2012).

**In our invented case:** TPLC's option plan (not tax-advantaged; employees taxed on exercise).

| TEL GY2 | £m |
|---|---|
| IFRS 2 charge in accounts: add back | +1.1 |
| Part 12 relief: MV at exercise less exercise prices, options exercised by TEL employees in GY2: deduct | −0.8 |

Relief goes to **TEL as employer**, though the shares are in TPLC. The timing difference is a deferred tax item (chapter 6).

> **Exam lens: share schemes.** Grade **1** (Relief for employee share acquisition schemes). Trap: deducting the IFRS 2 charge, or giving relief at grant. Add back the charge; deduct MV less price paid in the year of exercise; scheme costs stay deductible; lapses give nothing.

> **Going further.** The deduction moves with the share price and exercise behaviour: forecast it with the reward team, not from the accounts. Make sure the charge and the employees sit in the company with profits to absorb the relief.

---

## When people leave.

On **30 September GY3**, Calder Valve Engineering (Calder) closed its process valves division and **Dan Hartley** (invented, as in TKS) was made redundant after 12 years' service (*The Living Law*, chapter 9, covered his side).

| Calder's payments to Dan (paid 30 September GY3) | £ |
|---|---|
| Statutory redundancy | 9,012 |
| Holiday pay | 3,800 |
| Post-employment notice pay | 25,000 |
| Ex gratia (of which £10,000 paid into his pension) | 60,000 |
| **Total (excluding the legal fee paid direct)** | **97,812** |

**CTA 2009 ss 76–79:**

- **s 76:** a statutory redundancy payment, or an approved contractual payment in its place, is deductible where it would not otherwise be.
- **s 79:** where a trade **or part of a trade** permanently ceases, an **additional payment** that would have been deductible but for the cessation is allowed, **up to 3 × the redundancy payment**; a payment after cessation is treated as made on the last day of trading. HMRC (BIM47210) says entitlement under s 76 must come first, and that payments made as part of a bargain for the sale of shares do not qualify (*George Peters & Co Ltd v Smith*, per BIM47210).

**Why the cap?** On a cessation the usual justification for a payment, that it serves the continuing trade, has gone. Without s 79 an ex gratia payment made only because the business is closing might not be deductible at all; Parliament allows a generous but limited amount anyway. HMRC's manual stresses that s 79 only rescues payments that would have been deductible but for the cessation.

**Calder's position.** Its trade continued; one division closed. **In our invented case** the payments were made to secure an orderly closure and protect Calder's standing with the remaining workforce, so they are deductible under the ordinary rules (ss 46, 54) as expenses of the continuing trade. That is this book's view on the invented facts. If HMRC argued the extras were made only because part of the trade ceased, s 79 would still allow additional payments up to 3 × £9,012 = **£27,036**. The £10,000 pension element follows the paid basis (FA 2004 s 196). All paid within Calder's 9-month AP to 31 December GY3, so all deductible in that AP, within the restructuring costs provided for (chapter 5).

---

## Entertaining, gifts, fines and crimes.

**CTA 2009 s 1298:** no deduction for business entertainment or gifts. **s 1299** exceptions for entertainment:

- **Case A:** entertainment of a kind the company provides in the ordinary course of business, for payment or free to advertise to the public generally;
- **Case B:** entertainment for **employees**, unless also provided for others and the employees' part is incidental to that.

**s 1300** exception for gifts: a gift carrying a **conspicuous advertisement** for the company, **not** food, drink, tobacco or exchangeable vouchers, with the company's gifts to that person in the AP costing **no more than £50**.

| TEL GY2 item | £000 | Treatment |
|---|---|---|
| Staff party | 120 | Deductible (s 1299 Case B); the £150 per head figure is an employee income tax exemption, irrelevant to the company's deduction |
| Customer hospitality at a trade fair (incl. hosting staff) | 50 | Add back (business entertainment) |
| Branded whisky to customers | 30 | Add back (drink excluded whatever the branding) |
| Branded pens, diaries (under £50 per recipient) | — | Would be allowed |

**Fines and penalties.** Not in the statute: disallowed by case law. ***McKnight v Sheppard*** [1999] 1 WLR 1333 (HL): a stockbroker's Stock Exchange fines were not deductible, but his legal costs of defending the proceedings were (wholly and exclusively to preserve the trade). Lord Hoffmann explained that a fine is meant to punish and a deduction would pass part of it to taxpayers generally (paraphrase). TEL's **£250,000** fine after a health and safety prosecution: **add back**; its legal costs of defence: deductible.

The principle in *McKnight* is a public policy rule, not a statutory one, which is why its edges are argued case by case. A regulator's penalty is plainly within it; the costs of defending the proceedings are plainly outside it; a payment to customers agreed with a regulator sits between the two.

**Being litigated: *ScottishPower*.** Between 2013 and 2016 ScottishPower settled investigations by the energy regulator, paying nominal penalties and about **£28m** to consumers and consumer organisations. The FTT largely, and the UT wholly, agreed with HMRC that the payments were not deductible. In ***ScottishPower (SCPL) Ltd v HMRC*** [2025] EWCA Civ 3 (January 2025) the Court of Appeal held they were not fines or penalties, so nothing prevented deduction, and rejected the idea that a payment takes the treatment of what it replaces. The Supreme Court (UKSC/2025/0047) heard HMRC's appeal on 18–19 May 2026 and had **reserved judgment** when this chapter was written. **Check the outcome before the exam.**

**Statute:**
- **s 1303:** no deduction for listed tax penalties and interest (for example FA 2007 Sch 24 and FA 2008 Sch 41 penalties; VAT penalties). Absence from the list does not make a penalty deductible (HMRC, BIM42520).
- **s 1304:** no deduction for a payment whose making is a criminal offence (such as a bribe), or a payment in response to blackmail. The failure-to-prevent offences are in chapter 4.

> **Exam lens: Part 20 items.** Grade **1** (General calculation rules, Part 20 CTA 2009). Appearances: N24 Q4 (whisky gifts), N25 Q1 (gifts and entertainment, penalties), M26 Q4 (entertaining and gifts). **M26 examiners:** candidates applied employee limits to staff entertaining. Branded drink disallowed; branded pens allowed.

---

## Income the other rules miss.

**CTA 2009 Part 10 Ch 8, s 979:** corporation tax is charged on income "not otherwise" within the charge: the successor of old Schedule D Case VI.

**Why a sweeper?** A tax built on named headings leaks at the joins. The residual charge means the question is never *whether* income is taxed, only under which heading, and the heading decides what can be set against it and how losses behave.

- It charges **income**, not capital; gains go to the gains rules.
- It does not apply to **annual payments** (Part 10 Ch 7) or exempt income.
- **s 980:** commercial woodlands; **s 981:** certain gains on financial futures; **s 982:** priority rules.

In a group, the sweeper earns its place at head office, where income often arises that is neither trading, property nor financing.

**In our invented case:** TPLC charges Tarnmoor Vallaria SA (TVS; Vallaria is an invented country) for management services: **£2.2m in GY2**, at arm's length. TPLC does not trade; the fees are not property income or a loan relationship credit, so Tom treats them as **income not otherwise charged**. TPLC's management expenses (£8.5m) are set first against its own profits, including that income, leaving **£6.3m** to surrender to TEL; CTA 2010 s 105 limits surrender of excess management expenses to the excess over the surrendering company's own profits (chapters 13 and 15). *(Classification is the book's working assumption; bible flag 55 remains open on whether the recharge could be trading.)*

> **Exam lens.** Grade **1** (Income not otherwise charged, Part 10 Ch 8). Recognition marks: name the charge and why it applies.

---

## Giving to charity.

**CTA 2009 s 1301B:** a qualifying charitable donation (QCD) is not deductible in computing income: add back any charge in the accounts. Relief is under **CTA 2010 Part 6**, from total profits.

Relief is given from total profits rather than as a trading expense because a donation is not, in principle, an expense of earning profits: it is a use of them. The order matters most in the exam. Because QCDs come *before* group relief, a company that will claim group relief should still deduct its own donations first; because they cannot create a loss or be carried forward, a donation in a year of low profits can simply be wasted unless the excess is surrendered.

| Rule | Detail | Reference |
|---|---|---|
| Qualifying payment | Money; not repayable; payer not a charity; no associated acquisition; not a disqualifying distribution; benefits within limits | ss 190–195 |
| Benefits limits | 25% of a gift of £100 or less; £25 + 5% of the excess above £100; aggregate benefits to that charity in the AP ≤ **£2,500** | s 197 |
| Gifts of investments and land | Listed shares and similar, or a qualifying interest in land: market value less consideration is a QCD on a claim (land needs a charity certificate) | ss 203–217 |
| Order | After all other reliefs **except group relief**; cannot create a loss | s 189 |
| Excess | Not carried forward (except an investment company, for its investment business, as a management expense: CTA 2009 s 1223); surrenderable as group relief (s 99(1)(d)) only so far as it exceeds the surrendering company's profits (s 105, now the "profit-related threshold"), and QCDs are treated as surrendered first | ss 99, 105 |
| Charity-owned companies | May treat a payment as made in an AP within the 9 months before | s 199 |
| **Tainted donations (FA 2026 s 56, Sch 9)** | Donations made **on or after 6 April 2026**: outcome test replaces the purpose test in s 939C(5). Condition B: a linked person who is not a charity receives **financial assistance** (loan, guarantee, indemnity or any investment, arm's length or not) from the charity or a connected charity under or in connection with the arrangements. Associated donation rules (new s 939FB). A tainted donation gets no relief (s 939F) | CTA 2010 Part 21C |

> **Worked example (hypothetical, not story).** Suppose TEL had given **£200,000** to an engineering education charity in GY2: added back in the trading computation; deducted from total profits before group relief. TTP £26.0m − £0.2m − £17.92m = **£7.88m** (instead of £8.08m); CT £1.97m: saving **£50,000**. In the story TEL made no such gift.

> **Going further.** Give listed shares rather than cash where held (relief at market value); place the gift in a company with profits; check, from 6 April 2026, that no charity in the arrangement lends to or invests in any group company.

> **Exam lens.** Grade **1** (Charitable donations relief). Traps: deducting the donation in the trading computation; letting QCDs create a loss or carrying them forward; forgetting s 105 on surrender.

---

## Leases the lessee pays for.

Under a **long funding lease** the lessee is treated as owning the plant and gets capital allowances on deemed expenditure (CAA 2001 s 70A; chapter 9). This chapter owns the other half: the revenue deduction for rentals is limited so the capital is not relieved twice.

| Lease | Lessee's revenue deduction | Reference |
|---|---|---|
| Long funding **finance** lease | Capped at the finance charge / interest expense under GAAP | CTA 2010 s 377 |
| Right-of-use lease (remeasurement of the liability) | Deduction adjusted | s 377A |
| Long funding **operating** lease | Reduced by the time-apportioned expected fall in value | s 379 |

**Why the lessee "owns" the plant:** a long funding lease is, in economic substance, a purchase financed by borrowing. The allowances go to the party bearing the economics of ownership, and the revenue deduction is cut back so the capital is not relieved twice: capital through allowances, financing cost through the P&L.

Gateways: a lease of **7 years or less** is a short lease and cannot be a long funding lease (CAA 2001 s 70I); the lessee's return for the initial period must treat it as one (s 70H), and that choice cannot be corrected later as an error, so the treatment must be decided when the lease is signed.

> **Worked example (hypothetical).** TEL leases a machine for 10 years under a long funding finance lease. Rentals charged in the year **£500,000**, of which finance charge **£120,000**. Deductible as rental: **£120,000**; add back **£380,000** (relieved through CAs). **N25 examiners:** candidates put long funding lease plant in the special rate pool; it belonged in the main pool.

> **Exam lens.** Grade **1** (Leasing plant and machinery: long funding leases only). N25 Q1.

---

## Rates, marginal relief and the straddle.

**FY2026:** main rate **25%**; small profits rate **19%**; lower limit **£50,000**; upper limit **£250,000**; both divided by **1 + associated companies** and time-apportioned for short APs. Marginal relief (CTA 2010 Part 2; TKS chapter 20):

> MR = (U − A) × N/A × 3/200, where U = upper limit, A = augmented profits (TTP plus exempt distributions other than from group companies), N = TTP.

**The 26.5% trap.** The M26 examiners: "whilst the marginal rate of tax between the thresholds is 26.5%, this is not the rate that should be applied in full."

> **Worked example (hypothetical).** Stand-alone company, TTP **£150,000**, no dividends.
> CT at 25%: £37,500. MR: 3/200 × (£250,000 − £150,000) = £1,500. **CT £36,000.**
> Check: 19% × £50,000 = £9,500 + 26.5% × £100,000 = £26,500 = £36,000.

The same answer comes from charging 19% on the first £50,000 and 26.5% on the next £100,000: the marginal rate applies to the slice, never to the whole.

**Large groups.** TEL in GY2 has **9 associated companies** (divisor 10): limits **£5,000** and **£25,000**; every member with real profits pays 25%. Calder's 9-month AP to 31 December GY3 (divisor 10): limits **£3,750** and **£18,750**. MR questions therefore come in small groups (M26 Q4: the best answers used group relief to keep profits in the 19% band).

**Straddling financial years.** Rates are set for financial years from 1 April. Profits of an AP that straddles 1 April are apportioned by time, and each FY's rates and limits applied (TKS chapter 20). *Real-calendar example (labelled):* a year ended 31 December 2026 has **90 days** in FY2025 and **275 days** in FY2026; rates and limits are identical, so the split changes nothing (say so). The split mattered when the main rate rose from 19% to 25% on 1 April 2023 (TKS chapter 20). FY2027 keeps the same rates (FA 2026 ss 11–12), so every Tarnmoor computation uses one set of figures.

> **Exam lens: calculation of liability.** Grade **1** (Calculation of liability; Companies with small profits). M24 Q6 (straddling FY, marginal relief: "many missed marginal relief"), M26 Q4 (the 26.5% remark). Traps: divisor ignores dormant and passive holding companies but includes non-UK companies; apportion limits for short APs; apply 26.5% only to the slice.

---

## Tarnmoor Engineering's computation, start to finish.

> **Worked example: TEL, year ended 31 December GY2 (all figures £000).** Invented case; FY2026 law.
>
> | | £000 | Reason / authority |
> |---|---:|---|
> | Profit before tax | 23,500 | Accounts (CTA 2009 s 46) |
> | **Add:** | | |
> | Depreciation: plant and machinery | 15,000 | Capital; CAs instead (s 53; CAA 2001) |
> | Depreciation: buildings | 1,200 | Capital; SBA where available |
> | Cash LTIP accrued, paid 15 Nov GY3 (outside 9 months) | 1,400 | s 1288; deduct in GY3 |
> | Pension contributions accrued, unpaid at year end | 900 | Paid basis, FA 2004 s 196 |
> | IFRS 2 share option charge | 1,100 | s 1038 |
> | Fine (health and safety prosecution) | 250 | *McKnight v Sheppard* |
> | Customer hospitality | 50 | s 1298 |
> | Branded whisky gifts | 30 | ss 1298, 1300 (drink) |
> | Legal fees: planning appeal for factory extension | 70 | Capital, s 53 |
> | **Total added** | **20,000** | |
> | **Deduct:** | | |
> | GY1 pension accrual paid in GY2 | (600) | FA 2004 s 196 |
> | Part 12 relief on options exercised | (800) | ss 1010, 1013 |
> | Accounting profit on disposal of plant | (100) | Proceeds to CA pool (chapter 8) |
> | **Total deducted** | **(1,500)** | |
> | **Tax-adjusted trading profit before CAs** | **42,000** | after the £12,000 trading LR debit to TFL |
> | Capital allowances (chapter 8) | (16,000) | |
> | **Trading profits = total profits** | **26,000** | no other income |
> | Group relief: TPLC excess management expenses | (6,300) | chapter 15 |
> | Group relief: TPLC NTLR deficit (after CIR disallowance) | (7,670) | chapters 12, 28 |
> | Group relief: Brackenwell post-acquisition loss | (2,600) | chapter 15 |
> | Consortium relief: Helmside (link company route) | (1,350) | chapter 15 |
> | **TTP** | **8,080** | |
> | **CT at 25%** (9 associates: upper limit £25,000; no MR) | **2,020** | |
>
> **No adjustment (each worth stating):** annual bonus £2,000 paid 31 March GY3 (within 9 months); staff party £120 (s 1299 Case B); trading LR debit £12,000 (CTA 2009 Part 5); ERP costs £24,000 (revenue per accounts; UTT, chapter 4); specific trade debt impairment; legal costs of defending the prosecution.
>
> **Payment:** very large company (chapter 3): QIPs of **£505** each (£000) due 14 March, 14 June, 14 September and 14 December GY2. Brackenwell's surrendered RDEC then discharges part of the liability (chapter 10).
>
> **Cross-check:** TEL's tax-EBITDA for CIR (chapter 28) = £42,000 + £12,000 = **£54,000**.

Told in words: profit before tax of £23.5m; add back £20.0m (depreciation £16.2m, the unpaid LTIP £1.4m, unpaid pensions £0.9m, the IFRS 2 charge £1.1m, and £0.4m between the fine, hospitality, whisky and planning fees); deduct £1.5m (last year's pension accrual £0.6m, Part 12 relief £0.8m, the accounting profit on plant £0.1m). That gives £42.0m before capital allowances, already after the £12.0m of trading interest to TFL. Capital allowances of £16.0m (chapter 8 builds them line by line) leave trading profits of £26.0m, which are also total profits because TEL has no other income. Group relief of £17.92m (chapter 15) comes from three places: TPLC's excess management expenses and NTLR deficit, Brackenwell's post-acquisition loss, and consortium relief from the Helmside hydrogen joint venture. TTP is £8.08m and CT £2.02m, paid in four very large company instalments of £505,000 during the year itself (chapter 3).

**The answer to the analyst (£m):**

| Step | Profit | Tax at 25% |
|---|---:|---:|
| Profit before tax | 23.50 | 5.875 |
| + net adjustments (20.0 − 1.5) | +18.50 | +4.625 |
| − capital allowances | −16.00 | −4.000 |
| − group and consortium relief | −17.92 | −4.480 |
| **TTP / CT** | **8.08** | **2.020** |

CT is about 8.6% of profit before tax. That is not a gap in the law: it is the law working as designed, with much of the relief bought by losses and expenses elsewhere in the same group.

> **Going further: the tax function's year-end checklist for the computation.**
> - **Remuneration:** list every bonus, LTIP and commission accrual with its expected payment date; flag anything paid after month 9 (s 1288) and diarise the later deduction.
> - **EBTs:** reconcile contributions to benefits paid out in the period and the following 9 months; confirm PAYE and NIC on those benefits were paid within 12 months; track the 5-year long-stop for undistributed balances.
> - **Pensions:** reconcile the accounts charge to cash paid; run both s 197 tests every year a large or special contribution is paid, and keep the workings for the CPCP comparison (adjusting for period length).
> - **Share plans:** obtain exercise data (dates, market values, prices paid) from the plan administrator by employing company; add back IFRS 2; keep scheme set-up and administration invoices separate because they stay deductible.
> - **Entertaining and gifts:** split staff from customer events at the coding stage; record gift recipients so the £50 per-person test can be shown.
> - **Fines and settlements:** read the settlement documents: a fine is disallowed, but a compensatory payment may not be (*ScottishPower*); legal costs of defence are usually deductible.
> - **Donations:** confirm the recipient is a charity, check benefits against the s 197 limits, and from 6 April 2026 ask whether the charity, or a connected charity, has lent to, guaranteed, indemnified or invested in any group company.
> - **Group interaction:** confirm group relief surrenders and claims (chapter 15) and consortium shares; the CIR disallowance allocation (chapter 28); the RDEC surrender (chapter 10); and QIP true-ups when forecasts change (chapter 3).

> **Going further: interaction with other regimes.** Every adjustment in this chapter moves at least one other number. Timing adjustments (LTIP, pensions, Part 12) create deferred tax balances (chapter 6). Disallowances such as fines and entertaining are permanent differences that appear in the effective tax rate reconciliation (chapter 6). Tax-EBITDA for the corporate interest restriction is built from the same adjusted profits before capital allowances and interest, so an error in the adjustments flows straight into the interest capacity (chapter 28). And the adjusted profit is also the starting point for the QIP forecasts on which very large companies pay four times during the year (chapter 3).

---

## How the examiner sets it.

> **Exam lens: the CT computation.** Grade **1** throughout. **Every LCG paper M23–M26** has a 15–20 mark computation: M23 Q1, N23 Q4, M24 Q6, N24 Q4, M25 Q2, M25 Q4, N25 Q1, M26 Q4. Requirement style: "Calculate, with explanations"; 0.5–1 mark per point; single company or two-company group; increasingly a tail on QIPs, current and deferred tax (N25 Q1, M25 Q2).
>
> **Recurring items:** bonuses/LTIPs unpaid at 9 months; pensions (spreading tested, usually not triggered); staff v customer entertaining; branded drink v pens; fines and penalties; donations; trade debt v intra-group loan impairments; long funding leases; capitalised revenue expenditure (N23 Q4: handled badly); then CAs, losses, MR.
>
> **Habits that earn marks:** list every item, including nil adjustments, with a short reason; follow the statutory order of reliefs; keep **£ or £000 consistent** within a table (M26 examiners); apply MR properly, with associated companies and any straddle.
>
> **Favourite companions:** CAs, losses, QIPs and deferred tax; in group questions, group relief or a property disposal. Practise carrying the adjusted profit forward into all of them.
>
> **Reported traps (M23–M26):** spreading pensions when neither test is met; employee entertaining limits applied to the company; LFL plant as special rate; missing MR in a small group or applying 26.5% to everything; skipping the tax charge tail.
>
> **Four habits.** (1) List every item, including those needing no adjustment, with a few words of reason: nil adjustments earn marks too. (2) Follow the statutory order of reliefs. (3) Never mix £ and £000 in one table. (4) Deal with the rate properly, and never apply 26.5% to the whole profit.
>
> **RM Assessment Master (from October 2026):** "Calculations left in the spreadsheet and not copied to the answer box will not be marked." Build or copy the computation into the answer box.

---

## What to take away.

A large company does not pay 25% of its accounting profit. It pays 25% of TTP, after a checkpoint that stops some items, delays others and swaps some for tax's own measures, and after reliefs that may come from elsewhere in the group. The computation starts at profit before tax under CTA 2009 s 46; capital is out (s 53); expenses must be wholly and exclusively for the trade (s 54). Whether a company trades is a question of fact (*Marson v Morton*; *Eclipse 35*). Remuneration unpaid 9 months after the period end is deductible when paid (s 1288); EBCs only as qualifying benefits are provided within 9 months, with a 5-year cut-off and a 12-month tax-paid condition (s 1290). Pensions are deductible when paid; spreading only if CCCP > 210% of CPCP **and** the excess over 110% is at least £500,000 (halves, thirds, quarters at £500k, £1m, £2m). Part 12 relief is MV less price paid in the year of acquisition; the IFRS 2 charge is added back. Redundancy costs are deductible while the trade continues; on a cessation, extras up to 3× statutory (s 79). Entertainment and gifts are disallowed, except staff entertaining (any cost) and branded non-consumable gifts up to £50 a head. Fines are disallowed (*McKnight*); *ScottishPower* awaits the Supreme Court. Income not otherwise charged sweeps up the rest (s 979). QCDs come off after other reliefs but before group relief, cannot create a loss, are not carried forward (except for investment companies), and since 6 April 2026 are tested for taint by outcome. Long funding lease lessees deduct only the finance charge. FY2026 rates: 25% / 19%; limits £50,000 / £250,000 ÷ (1 + associates); 26.5% only on the slice.

Sixteen million pounds of capital allowances did a great deal of work in TEL's answer. The next chapter opens that line and shows how the allowances for plant and machinery are built.

---

## Key rules and figures

| Topic | Rule / figure | Reference |
|---|---|---|
| Starting point | GAAP subject to adjustment required or authorised by law | CTA 2009 s 46 |
| Unpaid remuneration | Not paid within 9 months of period-of-account end: deductible when paid | CTA 2009 ss 1288–1289 |
| EBCs | Qualifying benefits within 9 months; 5-year cut-off; IT/NIC paid within 12 months | CTA 2009 ss 1290–1297 |
| Pensions | Paid basis; spreading if CCCP > 210% CPCP and excess (CCCP − 110% CPCP) ≥ £500,000 | FA 2004 ss 196–198 |
| Share relief | MV less consideration, AP of acquisition; no IFRS 2 deduction; set-up/admin costs allowed; lapses nil | CTA 2009 ss 1007–1038A |
| Redundancy | s 76 statutory/approved contractual; s 79 extras on cessation up to 3 × statutory | CTA 2009 ss 76, 79 |
| Entertaining | Disallowed; employees excepted unless incidental to others' | CTA 2009 ss 1298–1299 |
| Gifts | Allowed only if branded, not food/drink/tobacco/vouchers, ≤ £50 per recipient per AP | CTA 2009 s 1300 |
| Fines | Not deductible (case law); legal defence costs deductible | *McKnight v Sheppard* |
| Tax penalties; crime | Listed penalties/interest disallowed; criminal payments and blackmail disallowed | CTA 2009 ss 1303, 1304 |
| Income not otherwise charged | Sweeper charge on income | CTA 2009 s 979 |
| QCDs | After other reliefs, before group relief; no loss; no c/f (except investment cos); benefits 25% / £25 + 5% / £2,500; tainted donations outcome test from 6 April 2026 | CTA 2010 ss 189–217, 939A–939FB; FA 2026 s 56, Sch 9 |
| Excess QCD surrender | Only the excess over the surrendering company's profits (profit-related threshold) | CTA 2010 ss 99(1)(d), 105 |
| LFL lessee | Finance lease: finance charge only; operating lease: reduced by expected fall in value | CTA 2010 ss 377, 377A, 379 |
| Rates FY2026 | 25% / 19%; £50,000 / £250,000 ÷ (1 + associates); 3/200; marginal rate 26.5% | CTA 2010 Part 2; FA 2025 s 13; FA 2026 ss 11–12 |
| TEL GY2 | PBT £23.5m → £42.0m → CAs £16.0m → £26.0m → GR £17.92m → TTP £8.08m → CT £2.02m | ledger |
| Dan's package (Calder) | £97,812 deductible in the 9-month AP to 31 Dec GY3; s 79 safety net £27,036 | ledger; this chapter |

## Statutory and case references

**Statute:** CTA 2009 ss 46, 53, 54, 76, 79, 979–982, 1007–1010, 1013, 1018, 1038, 1038A, 1223, 1288–1290, 1292, 1298–1300, 1301B, 1303, 1304; CTA 2010 Part 2 (rates, marginal relief), ss 99, 105, 189–217, 377, 377A, 379, 939A–939FB; FA 2004 ss 196–198; CAA 2001 ss 70A, 70H, 70I; F(No.2)A 2017 s 37; FA 2013 s 40; FA 2026 ss 11–12, 56, Sch 9; ITEPA 2003 ss 18–19.

**Cases:**
- *Marson v Morton* (Ch D, 1986) (report citation not checked)
- *Eclipse Film Partners No 35 LLP v HMRC* [2015] EWCA Civ 95
- *Macdonald (HM Inspector of Taxes) v Dextra Accessories Ltd* [2005] UKHL 47
- *RFC 2012 plc (in liquidation) v Advocate General for Scotland* [2017] UKSC 45
- *HMRC v NCL Investments Ltd* [2022] UKSC 9
- *McKnight (HM Inspector of Taxes) v Sheppard* [1999] 1 WLR 1333 (HL)
- *ScottishPower (SCPL) Ltd v HMRC* [2025] EWCA Civ 3 (appeal to the Supreme Court, UKSC/2025/0047, heard May 2026, judgment reserved)
- *George Peters & Co Ltd v Smith* (cited via HMRC BIM47210)

**HMRC guidance:** BIM20205, BIM42520, BIM45000–45070, BIM47210; IHTM42959; CTM80142.
