# Chapter twenty-eight: The corporate interest restriction

In October 2015 the OECD published its final report on BEPS Action 4, *Limiting Base Erosion Involving Interest Deductions and Other Financial Payments*. HMRC's Corporate Finance Manual still quotes its opening line (CFM95130): "It is an empirical matter of fact that money is mobile and fungible."

That sentence is the whole problem in miniature. A pound borrowed in London can be spent in Lisbon. A pound lent by one group company to another is the same pound whichever company signs the loan. So a multinational group can choose where its interest falls, and it will naturally choose the country where a deduction is worth most. Transfer pricing tests whether each loan's terms are what strangers would agree. The unallowable purpose rule tests why a company borrowed. Neither asks the question this chapter answers: **how much interest, in total, should the UK let one group deduct?**

This is the third gate from the prologue. Chapter 12 taught the second (unallowable purpose, CTA 2009 ss 441–442) and chapter 27 the first (transfer pricing, TIOPA 2010 Part 4). The corporate interest restriction (CIR) is **core (grade 1)** on the LCG grid. It appeared at four of the seven sittings from May 2023 to May 2026, and twice it was the heart of a 20-mark question. *The Living Law* (TKS) only signposted it, so we build it from the ground up.

**Statutes in this chapter:** Taxation (International and Other Provisions) Act 2010 (TIOPA 2010) Part 10 (ss 372–498) and Sch 7A (administration), inserted by F(No.2)A 2017 Sch 5; Finance Act 2026 ss 61 (reporting companies) and 62 (tax-EBITDA); CTA 2009 ss 86A, 142, 145, 147. We apply the law for **FY2026**.

---

## Money is mobile and fungible

The Action 4 report identified three ways interest erodes a country's tax base (CFM95130):

1. a group can place **more of its third-party debt in high-tax countries**;
2. it can use **intra-group loans** to create deductions larger than the group's actual third-party interest;
3. it can use debt to fund the generation of **tax-exempt income**.

Each piece of the UK rule answers one of those risks:

| Risk | UK answer | Where |
|---|---|---|
| Too much debt against UK earnings | **Fixed ratio**: net interest capped at 30% of UK tax-EBITDA | s 397 |
| UK deductions above the group's real external interest | **Debt cap**: allowance never more than the group's adjusted net third-party interest (plus excess debt cap b/f) | ss 397, 400 |
| Debt funding exempt income | **Tax-EBITDA** counts only amounts within the UK charge to CT | ss 405–407 |
| Genuinely highly geared sectors | **Group ratio** election; **public infrastructure exemption** | ss 398–399; ss 432–449 |
| Small groups | **£2m de minimis** floor on interest capacity | s 392 |

The rule applies to periods of account beginning on or after **1 April 2017** (straddling periods were split) and replaced the **worldwide debt cap** (old TIOPA Part 7), which compared UK interest with the group's external interest and nothing else (CFM95110).

The OECD work ran from an interim report (2014) through the final report (October 2015) to an update (December 2016). Its recommended fixed ratio rule let each country choose a benchmark ratio of net interest to tax-based EBITDA within a **corridor of 10% to 30%**, optionally supplemented by a group ratio rule, a de minimis threshold and carry-forwards, with special treatment for highly geared public-benefit infrastructure (secondary summaries: EY and Deloitte alerts, October 2015). The UK chose the top of the corridor and adopted every optional element.

Think of the restriction as a **ration book**. Each year the group receives interest coupons worth 30% of its UK earnings. Coupons it does not spend can be kept for five years. Interest that cannot find a coupon is not destroyed: it waits in a queue, with no expiry date, until a later year has coupons to spare. Every rule that follows is a detail of how the coupons are counted, who holds the queue, and who fills in the forms.

Two features make this regime different from everything in Part Two of this book. It works at the level of the **group**, not the company. And its answer, once found, must be **pushed back down** into individual company returns: the group computes one disallowance and then decides which companies bear it.

---

## The group that counts

The unit is the **worldwide group** (ss 473–474; CFM95330): the **ultimate parent** and every subsidiary consolidated in its accounts under IFRS (or equivalent), wherever resident. It is not the 75% group relief group and not the gains group; chapter 1 showed how many guest lists a large group keeps. This is the one the accountants write.

Take our invented group, **Tarnmoor**. Everything about Tarnmoor, its companies, people and numbers, is made up for teaching. Tarnmoor plc (TPLC) is a listed engineering group with its head office in Leeds. Its worldwide group includes its UK trading, property, finance and holding companies, Tarnmoor Vallaria SA (TVS) and Tarnmoor Capital Ltd (TCM) in the invented countries of Vallaria and Marrovia, Tarnmoor Ireland Ltd (TIL), and even the dormant Tarnmoor Pumps Ltd. **Helmside Energy Ltd**, the hydrogen joint venture in which TPLC holds 45% from GY1 to GY4, sits **outside** it because it is not consolidated.

The calculation runs for the worldwide group's **period of account** (here TPLC's year to 31 December). Only **UK group companies** (companies within the charge to CT) contribute tax-interest and tax-EBITDA. TVS's interest and earnings count for nothing in the UK measures, although its results are part of the consolidated accounts from which the group measures (ANGIE, group-EBITDA) are taken.

**Joiners and leavers.** A company that leaves (TWS on its demerger on 1 July GY5) counts only to the day it goes. A company that joins brings its own carried-forward disallowed amounts, which the CTA 2010 Part 14 loss-buying rules can reach after a change in ownership (CFM98693).

**Non-coterminous periods.** Where a company's accounting period does not coincide with the group's period of account, amounts for the part outside it (a **"disregarded period"**) are left out, on a just and reasonable basis (s 382(7)–(8) for tax-interest; s 406(6) for tax-EBITDA). HMRC's guidance (Corporate Finance Manual) says time apportionment will be suitable in most cases, that a common-sense approach applies where it would distort, and that apportionments must be consistent. The same applies to joiners and leavers.

> **Worked example 28.1: Calder's contributions (invented)**
>
> | £m | Calder AP | Tax-EBITDA of AP | Fraction in TPLC's period | Contribution |
> |---|---|---|---|---|
> | GY1 | 1 Apr GY1–31 Mar GY2 | 4.4 | 9/12 | **3.3** |
> | GY2 | 1 Apr GY1–31 Mar GY2 | 4.4 | 3/12 | 1.1 |
> | GY2 | 1 Apr GY2–31 Mar GY3 | 4.8 | 9/12 | 3.6 |
> | GY2 total | | | | **4.7** |
> | GY3 | 1 Apr GY2–31 Mar GY3 | 4.8 | 3/12 | 1.2 |
> | GY3 | 9-month AP 1 Apr–31 Dec GY3: trading 3.2 + IFA realisation credit 6.0 − restructuring 1.8 | 7.4 | all | 7.4 |
> | GY3 total | | | | **8.6** |
>
> Brackenwell Sensors Ltd (BSL), bought on 1 July GY2, contributes only its post-acquisition amounts (GY2: −£2.6m).

---

## Tax-interest, and the group's net figure

The restriction bites on **net** interest. For each UK group company we gather **tax-interest expense amounts** (s 382) and **tax-interest income amounts** (s 385). Section 382 sets three conditions:

| Condition | Amounts | Notes |
|---|---|---|
| A | **Relevant loan relationship debits** (s 383) and credits (s 386) | Exchange gains and losses, impairment losses and reversals of impairment are excluded (CFM95630) |
| B | **Relevant derivative contract debits** (s 384) and credits | Only derivatives whose underlying subject matter is interest rates, price or income indices, currency or corporate debt (or subordinate or small other elements) (CFM95650) |
| C | **Financing cost implicit** in amounts under a **finance lease**, **debt factoring** or similar, and a **service concession arrangement** accounted for as a financial liability | HMRC's example: payments of £600,000 over five years for an asset costing £500,000 give £20,000 a year of tax-interest for **both lessor and lessee** (CFM95660) |

Each company nets its own amounts to a **net tax-interest expense** or **net tax-interest income**. Then (s 390):

**Aggregate net tax-interest expense (ANTIE)** = total of companies' net tax-interest expense − total of companies' net tax-interest income (if positive; if negative, the group has **aggregate net tax-interest income**, ANTII).

Interest between two UK group companies is an expense of one and income of the other: it **cancels** in the aggregate. Interest paid to or received from a non-UK group company does not.

> **Worked example 28.2: Tarnmoor's ANTIE (invented)**
>
> *GY1 by company (£m)*
>
> | Company | Tax-interest expense | Tax-interest income | Net |
> |---|---|---|---|
> | TEL (TFL loan £200m × 6%; trading) | 12.00 | — | 12.00 |
> | TWS (£40m × 6%) | 2.40 | — | 2.40 |
> | TES (£70m × 6%) | 4.20 | — | 4.20 |
> | TPLC (TFL loan £120m × 6% = 7.20; RCF £30m × 6% × 9/12 = 1.35; fee amortisation 0.25) | 8.80 | — | 8.80 |
> | TFL (notes £550m × 5.5% = 30.25; income from UK companies 25.80 and TVS 7.20) | 30.25 | (33.00) | (2.75) |
> | **ANTIE** (27.40 − 2.75) | | | **24.65** |
>
> *Short form, all three years (£m)*
>
> | | GY1 | GY2 | GY3 |
> |---|---|---|---|
> | TFL notes interest | 30.25 | 30.25 | 30.25 |
> | Less interest from TVS (non-UK) | (7.20) | (7.20) | (7.20) |
> | TPLC RCF interest | 1.35 | 2.52 | 1.20 |
> | TPLC RCF arrangement fee amortisation | 0.25 | 0.25 | 0.10 |
> | TEL long funding lease finance charge (chapter 9) | — | — | 0.09 |
> | **ANTIE** | **24.65** | **25.82** | **24.44** |
>
> GY2 RCF: £30m × 6% + £24m × 6% × 6/12 = £2.52m. GY3: £20m × 6%. TFL's loans to TEL, TWS, TES, TPLC and (from 1 July GY2) BSL cancel. TIL's £20m interest-free loan from TPLC produces no tax-interest while TIL is UK resident (the UK-to-UK exemption, s 164A: chapter 27). TEL's GY3 lease (10-year finance lease of a refurbished machining centre from an unconnected lessor; finance charge 6% × £1,500,000 = £90,000) meets Condition C.

**Two simplifications.** TFL's interest rate swap (a hedge of its notes) would also produce tax-interest amounts; its settlements are left out of every figure in this book. And interest paid to a group's own overseas companies counts as fully as bank interest, because only UK companies are measured. That is precisely why the debt cap exists.

**Derivatives in the group figures.** For the group measures (ANGIE, QNGIE, group-EBITDA), the law makes "relevant assumptions", including that Disregard Regulations elections (reg 6A) have effect for every group derivative, so that hedging derivatives and hedged items are matched (ss 420–421; CFM96080). This book's figures leave the swap out entirely.

---

## Tax-EBITDA

Interest capacity is measured against earnings before interest, tax, depreciation and amortisation, built from **tax** numbers. A company's tax-EBITDA is its **"adjusted corporation tax earnings"** (ss 405–407): the amounts that enter its taxable total profits (**Condition A**), or would if it had enough profits (**Condition B**, which captures losses). The result can be negative (CFM95720).

Exclude:

| Excluded | Why | Reference |
|---|---|---|
| Tax-interest expense and income | Interest cannot count towards the measure of interest | s 407 |
| Capital allowances and balancing charges | Mirrors depreciation in accounting EBITDA; full expensing does not cut capacity | s 407 |
| Relevant intangibles debits (amortisation, 4% write-downs, losses on disposal) and credits **only to the extent they reverse earlier debits** (s 735 credits so far as cost exceeds TWDV) | Mirrors amortisation; a genuine gain over cost stays in | ss 407–408 |
| Losses and deficits brought forward or carried back; group relief (s 137) and Part 5A relief | Belong to other periods or companies | s 407 |
| **Qualifying tax reliefs**: merged-scheme RDEC and ERIS additional deductions, creative-sector reliefs, land remediation, **QCDs**, the **Patent Box** deduction (s 357A) | Incentives should not also shrink interest capacity | s 407(3); CFM95735 |
| **FA 2026 s 62**: capital expenditure deducted under CTA 2009 **s 86A** (flood and coastal erosion contributions), **s 142** (waste disposal site preparation), **s 145** (site restoration), **s 147** (cemeteries and crematoria) | Capital spending that the CT code happens to relieve as revenue | s 407(1)(b) as amended; periods of account ending on or after **31 December 2021**; revised IRRs effective if received **before 1 October 2026** |

**Chargeable gains.** HMRC's guidance (CFM95720) is that net chargeable gains entering TTP count; capital losses count only so far as they are actually set against gains in the period (the exclusion for losses of other periods does not apply to capital losses, but capital losses are excluded from Condition B). Unused capital losses add nothing and take nothing away. A gain **rolled over**, or a **no gain, no loss** transfer within the gains group, contributes nothing, because nothing enters TTP. (The extract seen was truncated: treat the detail as HMRC's view.)

> **Worked example 28.3: Tarnmoor's tax-EBITDA (invented; £m)**
>
> | Company | GY1 | GY2 | GY3 | Comment |
> |---|---|---|---|---|
> | TEL | 50.0 | 54.0 | 58.0 | Trading profit before interest and CAs (GY2: £42.0m before CAs + £12.0m trading interest = £54.0m; chapter 7) |
> | TWS | 12.0 | 12.5 | 13.0 | |
> | TES | 13.0 | 13.5 | 14.8 | GY3 = property and other profits 14,311,000 + net gains 489,000 |
> | Calder (CVE) | 3.3 | 4.7 | 8.6 | WE 28.1; GY3 includes the £6.0m IFA realisation credit |
> | TIL | 3.0 | 3.2 | 3.4 | UK resident until 30 June GY4 |
> | TFL | (0.6) | (0.6) | (0.6) | Running costs; its interest is excluded |
> | TPLC | (5.9) | (6.3) | (6.0) | Current management expenses less recharge income (GY1: −8.0 + 2.1) |
> | BSL | — | (2.6) | (3.5) | Post-acquisition only |
> | **Aggregate tax-EBITDA** | **74.8** | **78.4** | **87.7** | |

**Why TPLC is negative.** Its current-year management expenses are amounts in TTP, so they count. Management expenses **brought forward** do not: they belong to the year they arose in (TPLC's stranded £825,000 a year, chapter 13, never enters tax-EBITDA).

**Calder's £6.0m (GY3).** Calder sold its process-valve know-how and customer contracts to TVS for £6.0m. Those assets had no tax cost and had produced no debits, so the s 408 exclusion (credits only to the extent cost exceeds TWDV) removes nothing. The credit raises Calder's TTP **and** the group's interest capacity. HMRC's summary at CFM95805 ("mainly" gains on disposal) is looser than the statute (chapter 11). Calder's special balancing charges of £1.0m on the plant sold (chapter 8) are capital allowance charges: **excluded**.

**TES's gains (GY3).** The depot gain of £2,277,500 was partly rolled over (£1,477,500: nothing enters TTP). Of the £800,000 chargeable, **£500,000** was reallocated to TEL by s 171A election and matched there by TEL's £500,000 capital loss on listed shares (net nil in TEL); TES keeps **£300,000**. Add the lease assignment gain of **£189,000** (after indexation: chapter 16): TES's net gains are **£489,000**. The no gain, no loss transfers of Calder's works and the water-systems factory contribute nothing.

> **Exam lens: tax-interest and tax-EBITDA**
> - **Grade:** CIR **1 (core)** (2026 grid; falls to 2 only in the 2028 grid).
> - **Past appearances:** M26 Q1 (20 marks): "very few adjusted ANTIE and Tax-EBITDA correctly"; some "wrongly adjusted Tax-EBITDA for the disallowed interest and the QIC". M24 Q1: a minority misapplied ANTIE and ANGIE.
> - **Traps:** adding back capital allowances but forgetting balancing charges; deducting the RDEC, QCDs or Patent Box deduction; using brought-forward losses; reducing tax-EBITDA for disallowed interest (it is computed before interest, so a disallowance never changes it); counting a rolled-over gain; ignoring Condition C (finance leases).
> - **Layout:** a company-by-company table for each measure, then the group total.

---

## Thirty per cent, and the debt cap

**Basic interest allowance (fixed ratio method, the default)** = the **lower** of (s 397):

- **30% × aggregate tax-EBITDA**; and
- the **fixed ratio debt cap** = **adjusted net group-interest expense (ANGIE)** + **excess debt cap** generated in the **immediately preceding** period (s 400(1)).

**ANGIE** (ss 410–413) starts from the **net group-interest expense** in the consolidated income statement: relevant expense amounts less relevant income amounts, defined in line with tax-interest (s 411; CFM95930 lists financing charges implicit in finance leases), with capitalised interest left out (s 410(5A)) and adjustments in s 413. Because it is consolidated, intra-group interest cancels: ANGIE is what the group pays the outside world.

**Excess debt cap** (s 400(3)–(7)): (relevant debt cap − 30% of aggregate tax-EBITDA), floored at nil, but no more than the **carry-forward limit** = excess debt cap brought forward + the **total disallowed amount** of the current period. It goes forward one period at a time (and can roll on). In plain terms, a group banks spare debt cap only in a year in which the 30% rule is actually restricting it.

**Interest allowance** = basic interest allowance + **ANTII**, if any (s 396(1)).

**Interest capacity** = interest allowance + unused interest allowance **available** from earlier periods (s 393), **but never less than the de minimis amount of £2m** (pro rata for a period of account longer or shorter than a year) (s 392).

**Total disallowed amount** = ANTIE − interest capacity, if positive (s 373).

The debt cap is irrelevant to Tarnmoor (WE 28.5): its ANGIE is far above 30% of its UK earnings. It bites on a **different** kind of group: one with little external debt that funds a UK subsidiary with large intra-group loans. Such a subsidiary can be restricted well below 30%.

---

## The floor that is not a bonus

**Misconception: "every group gets £2m of interest free of restriction, and 30% on top."** Wrong. Interest capacity is the allowance plus available unused allowance, **but never less than £2m** (s 392(1)–(3)). It is a **floor**, not an extra. A group whose 30% figure is £22m has £22m of capacity, not £24m.

Why people believe it: for small groups the floor *behaves* like an allowance. If net interest is under £2m, nothing is disallowed, whatever the earnings, and most groups never look further.

> **Worked example 28.4: the floor (labelled hypothetical, not story)**
>
> A UK group: ANTIE **£2,500,000**; aggregate tax-EBITDA **£5,000,000**.
>
> | | £ |
> |---|---|
> | 30% × £5,000,000 | 1,500,000 |
> | Interest capacity: greater of £1,500,000 and £2,000,000 | 2,000,000 |
> | **Disallowed** (2,500,000 − 2,000,000) | **500,000** |
>
> Not nil (the floor is not a bonus) and not £1,000,000 (the floor does lift capacity).

N24 Q5 tested exactly this judgement: a newly acquired UK company in a US group was probably not restricted, but appointing a reporting company and filing a return would protect the position. A group under the floor should still keep evidence that its net interest is below £2m (GOV.UK guidance), and may choose to file a **full** return anyway to bank **unused allowance** for later years (an abbreviated return or no return makes it nil: below).

---

## The group ratio and the other elections

Some groups are genuinely highly geared: property, utilities and infrastructure businesses borrowing from banks against stable income. Their real external interest may exceed 30% of earnings. The **group ratio method** (s 398) is their safety valve.

- **Group ratio percentage** (s 399) = **QNGIE ÷ group-EBITDA**. **QNGIE** (s 414) is ANGIE less related-party interest, interest on results-dependent securities and on equity notes (CFM96020), so a group cannot inflate its ratio by borrowing from its own shareholders. **Group-EBITDA** (s 416) is consolidated profit before tax, adjusted for net group-interest, depreciation and amortisation. If the ratio is negative, over 100%, or group-EBITDA is nil, it is **100%**.
- **Basic interest allowance (group ratio)** = the lower of group ratio % × aggregate tax-EBITDA and the **group ratio debt cap** (QNGIE + excess debt cap b/f) (s 400(2)).
- It needs a **group ratio election** in the interest restriction return, for that period.

**Other elections (headings; know they exist):** blended group ratio (for groups with investors in different structures, ss 401–404); **group-EBITDA (chargeable gains)** election (s 422: gains measured on a basis closer to the UK rules; HMRC's guidance at CFM96620 says it is **irrevocable**); interest allowance (alternative calculation) election (ss 423–426); non-consolidated investment election (ss 427–429); consolidated partnerships election (s 430). Do not compute them unless asked.

For Tarnmoor the group ratio never helps (WE 28.5): its ratio of 16–19% is well under 30%. An engineering group with modest gearing is exactly the group the fixed ratio was designed for.

> **Exam lens: fixed ratio, group ratio and the floor**
> - **Past appearances:** M26 Q1: "Fixed ratio only"; some candidates still computed the group ratio, earning nothing. M24 Q6 (20 marks): an interest allowance brought forward inside a two-company CT computation.
> - **Traps:** the £2m de minimis as an addition; forgetting that the debt cap is the lower limb for lowly geared groups with intra-group funding; confusing ANTIE (UK companies, tax numbers) with ANGIE (consolidated, accounts numbers); applying the group ratio without an election.
> - **Style:** "Calculate, with explanations, the CIR disallowance"; 0.5–1 mark per step.

---

## Tarnmoor's first restriction

In our invented case, Tarnmoor came into GY1 with **nothing brought forward** under the restriction: no unused allowance, no disallowed amounts and no excess debt cap.

> **Worked example 28.5: Tarnmoor's CIR, GY1–GY3 (invented; worldwide group period = TPLC's calendar year; GY3 as filed in GY4; £m)**
>
> | Step | GY1 | GY2 | GY3 (as filed) |
> |---|---|---|---|
> | 1. ANTIE (WE 28.2) | 24.65 | 25.82 | 24.44 |
> | 2. Aggregate tax-EBITDA (WE 28.3) | 74.80 | 78.40 | 87.70 |
> | 3. 30% of tax-EBITDA | 22.44 | 23.52 | 26.31 |
> | 4. ANGIE (third-party: notes 30.25 + RCF + fee; GY3 + lease 0.09) | 31.85 | 33.02 | 31.64 |
> | 5. Excess debt cap b/f | — | 2.21 | 4.51 |
> | 6. Fixed ratio debt cap (4 + 5) | 31.85 | 35.23 | 36.15 |
> | 7. **Basic interest allowance** (lower of 3 and 6) | **22.44** | **23.52** | **26.31** |
> | 8. ANTII | — | — | — |
> | 9. Interest allowance (7 + 8) | 22.44 | 23.52 | 26.31 |
> | 10. Unused allowance b/f | — | — | — |
> | 11. **Interest capacity** (9 + 10; not less than £2m) | **22.44** | **23.52** | **26.31** |
> | 12. **Total disallowed amount** (1 − 11) | **2.21** | **2.30** | nil |
> | 13. Interest reactivation cap (9 − 1) | — | — | 1.87 |
> | 14. Disallowed amounts b/f (TPLC) | — | 2.21 | 4.51 |
> | 15. **Reactivated** (lower of 13 and 14) | — | — | **1.87** |
> | 16. **Disallowed amounts c/f** (TPLC) | **2.21** | **4.51** | **2.64** |
> | 17. Unused allowance generated | nil | nil | nil |
> | 18. Excess debt cap generated: (6 − 3), limited to 5 + 12 | 2.21 | 4.51 | 4.51 |
> | *Memo: group-EBITDA* | *170* | *182* | *196* |
> | *Memo: group ratio % (QNGIE = ANGIE: all third-party)* | *18.74%* | *18.14%* | *16.14%* |
> | *Memo: group ratio allowance (% × tax-EBITDA)* | *14.01* | *14.22* | *14.16* |
>
> **Tax effect at 25%:** GY1 disallowance £552,500; GY2 £575,000; GY3 reactivation saves £467,500; £2.64m as filed (£2.04m after the GY6 revision: below) still waiting.
>
> Excess debt cap working (s 400): GY1 31.85 − 22.44 = 9.41, limited to 0 + 2.21 = **2.21**; GY2 35.23 − 23.52 = 11.71, limited to 2.21 + 2.30 = **4.51**; GY3 36.15 − 26.31 = 9.84, limited to 4.51 + nil = **4.51**.

**How the board sees it (invented).** Nadia Kerr, TPLC's CFO, sees the restriction in the tax note (each year's disallowance is a reconciling item because no DTA is recognised: chapter 6) and in the treasury forecast, where every new borrowing proposal now carries the question whether UK earnings will grow fast enough to carry it. In GY2 the board accepted a second year of restriction as the price of buying Brackenwell: a business decision the tax function priced in advance.

**What the restriction is really measuring.** Tarnmoor's interest has hardly moved; its earnings have. The group borrowed in the UK partly to fund TVS. The £7.2m TVS pays back is outside the UK figures, but so are TVS's earnings. The 30% rule does not ask whether the borrowing was sensible. It asks whether the UK earnings can carry it.

---

## Who bears the disallowance

The group has one disallowance; the companies have tax returns.

- **Allocation in a full return.** The reporting company's **statement of allocated interest restrictions** (Sch 7A para 22) lists the companies and the amount allocated to each. The total must equal the total disallowed amount; an allocation cannot be negative and, on HMRC's guidance, cannot exceed the company's own net tax-interest expense; a company with net tax-interest income is treated as nil (CFM98580, CFM97720). Each listed company leaves that amount of tax-interest expense out of its CT computation (s 375).
- **Order within a company** (s 377(2)), unless the company elects otherwise (s 377(3)): (1) non-trading loan relationship debits; (2) non-trading derivative debits; (3) trading loan relationship debits; (4) trading derivative debits; (5) finance lease, debt factoring and service concession amounts.
- **No reporting company, or no full return:** a **pro rata** allocation by net tax-interest expense (s 376; Sch 7A para 24; CFM98590).
- **Non-consenting companies:** a company that did not consent to the reporting company's appointment may elect that the reporting company's allocation does not apply to it, taking the pro rata share instead (s 375; CFM98580).

**Carry forward** (s 378): a disallowed amount is carried forward by the **company**, **indefinitely**, and treated as a tax-interest expense of a later period only if reactivated. It is **lost** if the company's trade (or investment business) **ceases** or becomes **small or negligible** (or, for a trade, uncommercial and non-statutory). On a change in ownership, the loss-buying rules (CTA 2010 Part 14) can bite on it too (CFM98693).

> **Worked example 28.6: allocating GY1's £2,210,000 (invented)**
>
> | Company | Net tax-interest expense £ | Pro rata share £ | Reporting company's allocation £ |
> |---|---|---|---|
> | TEL | 12,000,000 | 967,883 | — |
> | TWS | 2,400,000 | 193,577 | — |
> | TES | 4,200,000 | 338,759 | — |
> | TPLC | 8,800,000 | 709,781 | **2,210,000** |
> | TFL | net income | nil | — |
> | **Total** | **27,400,000** | **2,210,000** | **2,210,000** |
>
> GY2: **£2,300,000**, again all to TPLC (net tax-interest expense £9,970,000).

**Why TPLC?** In the year itself the group's CT is the same either way: every company pays 25%, and losses flow by group relief. The difference is the future. Disallowed amounts stay with the company and die with its business. **TWS is demerged and listed as Tarnwater plc on 1 July GY5** (chapter 19): any disallowance parked there would leave the group with it. TEL's would sit in its trading debits. TPLC, the listed parent, will be there as long as the group is, and its investment business will not become small or negligible. So the queue is kept in the one company certain to stay, and within it the default order hits its non-trading loan relationship debits first.

**Knock-on: TPLC's deficit.** The CIR comes first; the deficit is what remains (chapters 12 and 14).

> | £m | GY1 | GY2 | GY3 |
> |---|---|---|---|
> | TPLC non-trading loan relationship debits | 8.80 | 9.97 | 8.50 |
> | Less CIR disallowance allocated | (2.21) | (2.30) | — |
> | Add reactivated amounts (treated as tax-interest expense of the period) | — | — | 1.87 |
> | **Debits brought into account** | **6.59** | **7.67** | **10.37** |
> | Non-trading credits | nil | nil | nil |
> | **NTLR deficit** (surrendered to TEL as group relief; chapter 15 for GY3) | **6.59** | **7.67** | **10.37** |

---

## Coming back: reactivation and unused allowance

**GY3.** Tax-EBITDA jumps to £87.7m (Calder's know-how sale helps); 30% is £26.31m. ANTIE falls to £24.44m because the RCF was paid down to £20m, even after TEL's £90,000 lease finance charge. Spare allowance: **£1.87m**.

- **Reactivation** (ss 373(3)–(5), 379–380): where the group's interest allowance exceeds ANTIE, and companies hold disallowed amounts from earlier periods, those amounts are reactivated up to the **interest reactivation cap** = **interest allowance − ANTIE** (floored at nil). The cap is measured against **this period's allowance**; unused allowance brought forward can cover current interest but does not create reactivation capacity.
- **Compulsory and prompt.** HMRC's guidance: a group must reactivate at the earliest opportunity and cannot hold over capacity to a later period; a group cannot have both disallowances and reactivations in the same period of account (straddling company periods are netted under s 381) (CFM98620, CFM98700).
- **Full return needed.** Reactivation requires a **full** return stating the group is subject to reactivations, with a **statement of allocated interest reactivations** (Sch 7A para 25; CFM98610).
- **Effect in the company.** The reactivated amount is brought into account as a tax-interest expense of the listed company's relevant accounting period (s 380). TPLC reactivates **£1.87m** of its own queue; its GY3 non-trading debits rise from £8.50m to **£10.37m** (CT value **£467,500**). **£2.64m** remains in the queue. The reactivated amount is not counted again in the group's ANTIE for GY3 (the book's reading of the structure; ANTIE £24.44m above excludes it).

**Unused interest allowance** (ss 393–395). If the interest allowance exceeds the sum of ANTIE and reactivations, the excess is unused allowance. It is **available** in later periods for up to **5 years**, time-apportioned where a receiving period straddles the five-year point (s 395). It is **nil** if an **abbreviated return** election has effect for the originating period, the receiving period or any period in between, or if **no return** is submitted for any of them (s 393).

**GY3: no unused allowance.** HMRC's guidance is that the year's spare capacity must first be applied to reactivate (CFM98620, CFM95250); all £1.87m was used, so on HMRC's guidance (CFM98240: the allowance carried forward is what is left after the amounts used in the originating period) nothing is banked. Had there been nothing to reactivate, £1.87m of unused allowance would have arisen, available in GY4 to GY8, provided full returns were filed throughout.

**A return revisited (GY6).** The GY3 figures above are the return **as filed** in GY4. In GY6 HMRC's enquiry into Calder's know-how sale settles (chapter 27): the price rises from £6.0m to £8.0m, adding **£2.0m** to Calder's taxable profit for its 9-month AP to 31 December GY3 and, because a sale adjustment is ordinary profit, to its tax-EBITDA (Calder £8.6m → £10.6m). A figure in the GY3 return is now wrong, so TPLC, as reporting company, **must** file a **revised** interest restriction return within **3 months** (TIOPA Sch 7A para 8(4); HMRC's example at CFM98645).

> | GY3 (£m) | As filed (GY4) | Revised (GY6) |
> |---|---|---|
> | Aggregate tax-EBITDA | 87.70 | 89.70 |
> | 30% = interest allowance | 26.31 | 26.91 |
> | ANTIE | 24.44 | 24.44 |
> | Reactivation cap (allowance − ANTIE) = reactivated | 1.87 | **2.47** |
> | Disallowed amounts c/f (TPLC) | 2.64 | **2.04** |
> | TPLC GY3 non-trading debits (8.50 + reactivation) | 10.37 | 10.97 |

TPLC then amends its own GY3 CT return to bring in the extra **£0.6m** reactivation (HMRC's guidance gives the later of 3 months after the revised return and the normal amendment window: CFM98640). But the extra deficit cannot follow the first £10.37m to TEL: TEL's GY3 group relief claim could be made only until **31 December GY5** (one year after its filing date; FA 1998 Sch 18 para 74; TEL's return was not under enquiry), and that window has closed. HMRC's manual warns of exactly this trap (CFM98645). TPLC carries the £0.6m forward, where (as with its carried-forward management expenses, chapter 13) it is **stranded** on this book's reading of CTA 2010 s 188BE: tax value forgone **£150,000**. Still no unused allowance arises. The lesson for the exam: a TP settlement can raise interest capacity years later, but the time limits decide whether the group can use it.

**Deferred tax.** Disallowed interest carried forward is a deductible temporary difference; a deferred tax asset is recognised only if future reactivation (spare capacity) is probable. At the end of GY2 Tarnmoor recognised none (chapter 6); that remains a judgement, not a rule.

> **Exam lens: allocation, carry forward and reactivation**
> - **Past appearances:** M24 Q1 (20 marks; 11 for the CIR calculation): ANTIE, ANGIE, an interest-free loan with TP, and **b/f disallowance reactivation**. M24 Q6: allowance b/f in a computation.
> - **Traps:** "disallowed interest expires after five years" (no: that is unused **allowance**; disallowed interest has no time limit); reactivating with brought-forward allowance; electing an abbreviated return and then using unused allowance; forgetting the default order hits **non-trading** debits first, which shrinks an NTLR deficit.
> - **Layout:** finish the computation with a line for reactivation (or disallowance), then allocation by company.

> **Going further: allocating and reactivating well**
> 1. **Allocate for the future, not the year.** Put disallowances where they will survive: a company whose business will not cease or become small or negligible, and which will not leave the group (demerger, sale). Avoid companies with ring-fenced or restricted losses, where an extra disallowance may simply reduce a loss that will never be used.
> 2. **Reactivate where relief is worth most now.** The reporting company chooses which companies' queues reactivate; choose those with taxable profits (or with deficits that group relief can use at once).
> 3. **Model capacity.** A disposal gain, a services TP adjustment or an IFA credit raises tax-EBITDA; a debt repayment cuts ANTIE. Tarnmoor's GY3 reactivation followed both.
> 4. **Keep the return chain unbroken.** Any period without a full return (or with an abbreviated return) kills unused allowance across it.
> 5. **Check acquisitions.** A target's own disallowed amounts come with it but can be hit by the Part 14 loss-buying rules (CFM98693); a target joining mid-period contributes only post-acquisition amounts.

---

## The reporting company and the return

**Old rules (periods of account ending on or before 30 March 2026).** A reporting company was appointed **by notice to HMRC within 12 months** of the end of the first period of account to which it related, authorised by **at least 50%** of eligible companies, and the appointment continued (Sch 7A para 1, pre-FA 2026 text). Groups that missed the deadline had no reporting company and so no full return: no allocation of their choice, no reactivation, no elections. HMRC had appointed reporting companies for such groups; in **June 2023** it announced it would do so only in limited circumstances; after representations from professional bodies, including the ICAEW, it reconsidered (ICAEW report, April 2025). At the Budget on 26 November 2025 the government announced legislation to "simplify administration" (policy paper, *Corporate interest restriction: reporting companies*), now **FA 2026 s 61**.

**New rules (FA 2026 s 61; periods of account ending on or after 31 March 2026):**

| Point | Rule | Reference |
|---|---|---|
| Appointment | A member appoints a reporting company **for each period of account** | Sch 7A para 1 |
| Deadline / notice | **No time limit; no notice to HMRC** | para 1 |
| Authorisation | **More than half** of eligible companies (UK group companies at some time in the period, not dormant throughout) | para 1 |
| Evidence | Name and UTR of the reporting company, the list of authorising companies and a statement that they were eligible and more than half, **in the return** (the para 20 content changes take effect from a date set by HMRC regulations) | para 20 |
| Regularisation | A return filed by a company not yet appointed is validated by a later appointment, treated as made just before the return: periods of account ending on or after **31 March 2024** | para 1A |
| Is a return compulsory? | A group-appointed reporting company "may" submit; one appointed by HMRC (para 4) or as replacement (para 5) "must". HMRC: needed to allocate disallowances to specific companies, carry forward unused allowance, reactivate, or elect | para 7(1)–(3); GOV.UK "Submit a CIR return" (14 April 2026) |
| HMRC appointment | If no return **18 months** after the period of account | para 4 |
| Filing date | **12 months** after the end of the period of account (or 3 months after an HMRC appointment, if later); no effect after **36 months** | para 7(4)–(6) |
| Late return penalty | **£500** if within 3 months of the filing date; **£1,000** otherwise (now also for a company that "submits" late) | para 29; FA 2026 s 61(15) |
| Unappointed filer | **£1,000**, unless appointed within 18 months of the period end, or HMRC was told unprompted, or reasonable excuse | paras 11A, 11B |

**Real-calendar example (labelled).** A group with a period of account ending **31 December 2025** is under the **old** rules: appointment by notice within 12 months (by 31 December 2026), at least 50% of eligible companies. A group whose period of account ends **31 March 2026** is under the **new** rules.

**Full and abbreviated returns.** A **full** return contains the group computation, allocations and any elections; an **abbreviated** return carries basic information only and suits a group sure it is not restricted, at the cost that unused allowance for the period is nil (s 393). Where allowance may matter, file a full return.

**Tarnmoor's practice (invented).** Tom Hesketh, the group head of tax, treats the appointment as year-end routine: the parent's board paper lists every eligible UK company, each board authorises TPLC, and TPLC files a **full** return every year: it has disallowances to allocate in GY1 and GY2 and a reactivation to claim in GY3. Each company's own CT return then reflects its allocated disallowance or reactivation, with amendments if figures move.

> **Exam lens: administration**
> - **Past appearances:** M26 Q1 (8 marks of admin: reporting company, IRR): "adequate but padded with irrelevant detail". N24 Q5 (3.5 marks): "probably no restriction but file to protect the position; reporting company; abbreviated IRR". M24 Q1: admin good.
> - **Traps:** "at least 50%" (old) v "**more than half**" (new); the 12-month notice deadline survives only for periods ending on or before 30 March 2026; a return is optional only if nothing needs allocating, carrying forward, reactivating or electing; the two penalties are flat amounts, not tax-geared.
> - **Style:** short, precise points; no padding.

---

## Infrastructure

Some businesses are debt-financed by design: a toll road, a network, a hospital built under a public contract. Thirty per cent of earnings would cripple them, and their debt is not the base erosion Action 4 targeted. The **public infrastructure exemption** (Part 10 Ch 8, ss 432–449) takes them out.

- **Qualifying infrastructure company (QIC)** (s 433): elects in; **all or all but an insignificant proportion** of its income derives from **qualifying infrastructure activities** (public infrastructure assets) and the same holds for its assets (public infrastructure income test and assets test); and it is **fully taxed in the UK** (CFM97190, CFM97210).
- **Effect:** interest on **third-party** debt (and QIC-to-QIC debt) is left out of tax-interest where the creditor's **recourse is limited** to the income, assets, shares or debt of QICs (ss 438–441; CFM97320); in exchange the QIC's **tax-EBITDA is nil**. Grandfathering exists for certain loans made before 13 May 2016.
- **Election** (s 434): on HMRC's guidance, made **before the end of the accounting period** it is to cover; **revocation** cannot take effect for a period beginning within **five years** of the start of the first period it covered (anti-cycling); joint elections (s 435) have their own rule (CFM97240, CFM97290).

**The M26 point:** where a QIC sits inside a larger group, **adjust both sides**: remove its qualifying interest from ANTIE **and** its earnings from aggregate tax-EBITDA.

> **Worked example 28.7: a QIC inside Tarnmoor (labelled hypothetical, not story)**
>
> Suppose that after TPLC takes control of Helmside (1 March GY5) its hydrogen plant met the statutory tests and Helmside elected to be a QIC. Suppose Helmside paid **£2.8m** of interest on limited-recourse bank debt and had tax-EBITDA of **£6.0m**.
>
> | £m | Effect |
> |---|---|
> | ANTIE | −2.8 |
> | Aggregate tax-EBITDA | −6.0 |
> | 30% allowance | −1.8 |
> | **Net improvement in headroom** (2.8 − 1.8) | **+1.0** |
>
> Whether a real plant meets the tests is a question of fact; this is an illustration only.

---

## Where the restriction meets other rules

**Order.** The CIR comes **last**. Transfer pricing first fixes the arm's length amount and rate (thin capitalisation is TP: chapter 27); the unallowable purpose rule removes debits attributable to a tax avoidance purpose (chapter 12); the hybrid rules counteract mismatches (chapter 29). Amounts disallowed by those rules are not brought into account, so they never become tax-interest (CFM38155 notes that s 441 can even reach exchange and impairment debits, which tax-interest excludes anyway). From the other side, in deciding whether there is a potential UK tax advantage for transfer pricing, the CIR is **disregarded** (TIOPA s 155(6)).

**The M26 rule.**
- An **interest** TP adjustment changes tax-interest: it moves **ANTIE**, not tax-EBITDA.
- A **services** (or goods) TP adjustment changes ordinary profit: it moves **tax-EBITDA**.

> **Worked example 28.8: Tarnmoor's TP adjustments in the CIR (invented)**
>
> **(a) Services, GY1.** TPLC charged TVS £1.6m for low value-adding services costing £2.0m; arm's length cost + 5% = £2.1m (chapter 27). The **£0.5m** adjustment is in TPLC's TTP, so in tax-EBITDA.
>
> | £m | Without the adjustment | As filed |
> |---|---|---|
> | TPLC tax-EBITDA | (6.4) | (5.9) |
> | Aggregate tax-EBITDA | 74.3 | 74.8 |
> | 30% | 22.29 | 22.44 |
> | ANTIE | 24.65 | 24.65 |
> | Disallowed | 2.36 | 2.21 |
>
> The adjustment cost **£125,000** of CT but cut the disallowance by **£150,000** (worth **£37,500** at 25%).
>
> **(b) Interest, GY4 onward (direction only).** TPLC's £20m interest-free loan to TIL becomes cross-border when TIL migrates on 30 June GY4; TP imputes 6%: **£0.6m** for July–December GY4 and **£1.2m** a year from GY5 (chapter 27). That is a loan relationship credit of TPLC (CTA 2009 s 446), so **tax-interest income**: it reduces ANTIE by those amounts and leaves tax-EBITDA untouched. (Tarnmoor's GY4 CIR is not computed in this book.)

**Leases.** Since lessees brought most leases onto the balance sheet (IFRS 16; FRS 101), FA 2019 Sch 14 paras 18–19 adjusted Part 10 to match (chapter 5). The profession's reading (ICAEW) is that a lease's financing cost is tax-interest where the lease would have been a **finance lease** under the old classification, and not where it would have been an operating lease, so the old classification must be kept on file. TEL's machining centre lease is a finance lease on any view (chapter 9): its £90,000 counts in GY3 (Condition C) and is fifth in the s 377 order if TEL were ever allocated a disallowance.

> **Worked example 28.9: flood defences and FA 2026 s 62 (TES story; TEL hypothetical)**
>
> - **TES's flood wall (story, GY3; chapter 9):** cost £500,000 less local authority grant £200,000; SBA £9,000 a year on £300,000. SBA is a capital allowance: **excluded** from tax-EBITDA. The grant reduces qualifying expenditure; it never touches tax-EBITDA.
> - **Suppose (not story)** TEL instead contributed **£300,000** to an Environment Agency flood scheme protecting its works, deductible under **CTA 2009 s 86A**. Before FA 2026 s 62 the deduction reduced tax-EBITDA, and the 30% allowance by **£90,000**. Now it is excluded (periods of account ending on or after 31 December 2021).

**CFCs.** The CFC finance company rules' **matched interest** exemption looks at the worldwide group's ANTIE (TIOPA s 371IE; chapter 26).

**Deferred tax.** Carried-forward disallowances support a DTA only if reactivation is probable (above; chapter 6).

**Regime anti-avoidance rule (s 461).** A tax advantage from **relevant avoidance arrangements** is counteracted by just and reasonable adjustments (by assessment, amendment or disallowance of a claim, or otherwise). Arrangements are caught where **(A)** a main purpose is to enable a company to obtain a tax advantage and **(B)** the advantage is attributable to leaving tax-interest expense out of account (or less of it, or in a different period), increasing reactivations, or similar effects (s 461(3)–(5)). HMRC's guidance (CFM98010): the advantage must come from eliminating or reducing a restriction, reactivating or increasing a reactivation, or shifting either between periods; the rule does not apply where another rule (for example the CTA 2010 Part 14 deduction-buying rules) already neutralises the advantage; "tax advantage" (s 461(7)) is broad.

> **Exam lens: interactions and PIE**
> - **Past appearances:** M26 Q1 (TP adjustments into ANTIE and tax-EBITDA; a QIC to carve out); M23 Q3 (15 marks: TP and CIR on a loan from a US company; "time was wasted on DPT, which does not apply to loan relationships"); N24 Q5 (TP now applying, CIR "file to protect the position").
> - **Traps:** the M26 marking point (interest TP adjustments reduce ANTIE but not tax-EBITDA; adjust both for a QIC; no group ratio when told not to); reducing tax-EBITDA for the CIR disallowance; raising DPT (abolished for APs beginning on or after 1 January 2026 and never relevant to loans); hybrids with no hybrid element.

> **Going further: the tax function's CIR calendar**
> - **Before the year end:** forecast ANTIE and tax-EBITDA; model disposals, refinancing and TP adjustments; consider whether a group ratio or other election helps; decide whether a QIC election is wanted (it must be made before the end of the QIC's accounting period).
> - **At the year end:** list eligible companies; obtain authorisations (more than half) for the reporting company for this period; agree the allocation policy (who bears disallowances; who reactivates).
> - **Company CT returns (12 months):** reflect allocations and reactivations; amend if the IRR changes.
> - **IRR (12 months after the period of account):** full return whenever there is anything to allocate, carry forward, reactivate or elect; never abbreviated where unused allowance may be needed.
> - **Ethics and judgement:** allocation and election choices are legitimate planning within the statute; arrangements whose main purpose is to manufacture capacity or reactivations meet s 461 and, beyond it, the unallowable purpose rule and the GAAR (chapter 4).

---

## How the examiner tests it

| Sitting | Question | What was tested | What the examiners said |
|---|---|---|---|
| M26 | Q1, 20 marks (8/6/6) | Merger forming a new worldwide group under a new UK topco; reporting company and IRR; PIE conditions; fixed ratio calculation with TP adjustments and a QIC | Admin and PIE adequate but padded; calculation poor: "very few adjusted ANTIE and Tax-EBITDA correctly"; group ratio computed when told not to; tax-EBITDA wrongly adjusted for disallowed interest and the QIC |
| M24 | Q1, 20 marks (5/11/4) | Investment company expenses; CIR calculation (ANTIE, ANGIE, interest-free loan and TP, b/f disallowance reactivation); CIR admin | Most missed the investment business; a minority misapplied ANTIE and ANGIE; admin good |
| M24 | Q6, 20 marks | Two-company computation including CIR allowance b/f | Good on CAs and losses |
| N24 | Q5, 20 marks (CIR 3.5) | Newly acquired UK company in a US group: probably no restriction, but file to protect; reporting company; abbreviated IRR | Some covered TP in depth and ignored easier points |
| M23 | Q3, 15 marks | Loan from a US company: TP (participation, thin cap), CIR, withholding | Main issues TP and CIR; time wasted on DPT |

**Grade:** CIR **1 (core)** on the 2026 grid (which Kian's May 2027 sitting is expected to follow; check the 2027 grid when published). It falls to **2** only on the 2028 grid.

**Style:** technical prose and computations; "Calculate, with explanations"; 0.5–1 mark per point; recommendation marks where asked (for example which company should bear the disallowance). No letter format.

**Template (keep £ or £000 consistent):**

1. ANTIE: each UK company's net tax-interest (TP and s 441 adjustments first; QIC interest out); total.
2. Tax-EBITDA: each company's TTP before interest, CAs, intangibles debits, b/f losses, group relief and qualifying reliefs (services TP adjustments in; QIC nil); total.
3. 30% of tax-EBITDA.
4. Fixed ratio debt cap: ANGIE + excess debt cap b/f.
5. Basic allowance: lower of 3 and 4 (group ratio only if elected).
6. Interest allowance: + ANTII.
7. Capacity: + unused allowance b/f; not less than £2m.
8. Disallowance (or reactivation up to allowance − ANTIE).
9. Allocation by company, and s 377 order within each.
10. Carry-forwards: disallowed amounts (indefinite), unused allowance (5 years, full returns), excess debt cap (one period).

---

## What to take away

The CIR answers one question: how much net interest should the UK let a whole group deduct? It is the UK's response to BEPS Action 4 and has applied to periods of account beginning on or after 1 April 2017. The unit is the **worldwide group** for its period of account; only UK companies contribute, with straddling periods apportioned on a just and reasonable (usually time) basis.

The tested figure is **ANTIE**: tax-interest covers loan relationship amounts (without exchange movements or impairment), interest-type derivative amounts and the financing cost in finance leases, factoring and service concessions; UK-to-UK interest cancels. Tarnmoor: **£24.65m** (GY1), **£25.82m** (GY2), **£24.44m** (GY3). The earnings measure is **tax-EBITDA**, excluding interest, CAs, intangibles debits and clawback credits, other periods' losses, group relief, qualifying reliefs and (FA 2026 s 62) ss 86A/142/145/147 capex: **£74.8m**, **£78.4m**, **£87.7m**.

The fixed ratio allowance is the lower of **30%** of tax-EBITDA and the **debt cap** (ANGIE + excess debt cap b/f); the group ratio is an election; capacity is allowance + unused allowance b/f, **never less than £2m**. Tarnmoor lost **£2.21m** (GY1) and **£2.30m** (GY2), allocated by TPLC to its own non-trading debits; in GY3 it reactivated **£1.87m** as filed, leaving **£2.64m** waiting, and created no unused allowance. After the GY6 transfer pricing settlement TPLC filed a revised GY3 return (within 3 months): reactivation **£2.47m**, **£2.04m** still waiting, though the extra £0.6m deficit came too late for TEL's group relief claim.

Disallowed interest waits without limit; unused allowance lasts five years and needs full returns; reactivation needs a full return and must be taken at once. Under FA 2026, for periods ending on or after 31 March 2026, a reporting company is appointed per period, with no deadline or notice, by **more than half** of eligible companies; the IRR is due 12 months after the period; penalties £500 / £1,000 and £1,000 for an unappointed filer. TP and other interest rules come first; an interest adjustment moves ANTIE, a services adjustment moves tax-EBITDA; a QIC comes out of both.

So: about 30% of what the group earns here, never more than it really pays outsiders, never less than £2m. Everything else is the machinery for counting that fairly across many companies and many years.

The next chapter follows money that tries a different trick: chapter 29, on hybrid mismatches, deals with payments that two countries see differently, so that one deduction is claimed twice or matched by nothing.

---

## Key rules and figures

| Rule | Figure / detail | Reference |
|---|---|---|
| Commencement | Periods of account beginning on or after 1 April 2017 | F(No.2)A 2017 Sch 5; CFM95110 |
| Worldwide group | Ultimate parent + consolidated subsidiaries | ss 473–474 |
| Tax-interest | LR amounts (excl. FX, impairment); interest-type derivatives; finance lease, factoring, service concession financing costs | ss 382–386 |
| ANTIE | Net of UK companies' net expense and net income | s 390 |
| Tax-EBITDA | TTP amounts excl. interest, CAs, intangibles debits (and credits reversing them), other-period losses, group relief, qualifying reliefs; FA 2026 s 62 capex exclusion | ss 405–408 |
| Fixed ratio | Lower of 30% × tax-EBITDA and debt cap (ANGIE + excess debt cap b/f) | ss 397, 400 |
| Excess debt cap | Debt cap − 30% EBITDA, limited to b/f excess + current disallowance; one period | s 400 |
| Group ratio | QNGIE ÷ group-EBITDA (100% if negative or > 100%); election | ss 398–399, 414, 416 |
| De minimis | £2m a year: a floor on capacity | s 392 |
| Disallowed interest | Carried forward indefinitely; lost on cessation or small or negligible | s 378 |
| Default disallowance order | NTLR; non-trading derivatives; trading LR; trading derivatives; leases etc. | s 377 |
| Reactivation | Up to interest allowance − ANTIE; full return; earliest opportunity | ss 373, 379–380 |
| Unused allowance | 5 years; nil with abbreviated return or no return | ss 393–395 |
| Reporting company (FA 2026) | Per period; no deadline or notice; more than half of eligible companies; periods ending on or after 31 March 2026 (para 1A from 31 March 2024) | Sch 7A paras 1, 1A |
| IRR | Due 12 months after period; no effect after 36 months; HMRC may appoint after 18 months | Sch 7A paras 4, 7 |
| Penalties | £500 (within 3 months) / £1,000; £1,000 unappointed filer | Sch 7A paras 11A, 11B, 29 |
| PIE | QIC election; limited-recourse third-party interest out; tax-EBITDA nil; 5-year anti-cycling | ss 432–449 |
| TP interaction | TP first; CIR ignored for TP advantage; interest adj → ANTIE; services adj → tax-EBITDA | s 155(6) |
| Anti-avoidance | Regime TAAR: main purpose + CIR-derived advantage; just and reasonable counteraction | s 461 |
| Tarnmoor GY1 / GY2 / GY3 | ANTIE 24.65 / 25.82 / 24.44; tax-EBITDA 74.8 / 78.4 / 87.7; allowance 22.44 / 23.52 / 26.31; disallowed 2.21 / 2.30 / nil; reactivated GY3 1.87; c/f 2.21 / 4.51 / 2.64 (£m; GY3 as filed). Revised GY6: tax-EBITDA 89.7; allowance 26.91; reactivated 2.47; c/f 2.04 | invented (story) |

---

## Statutory and case references

- Taxation (International and Other Provisions) Act 2010 Part 10: ss 372–376 (overview, total disallowed amount, allocation, pro rata), 377 (order), 378–381 (carry forward, reactivation, netting), 382–386 (tax-interest), 390 (ANTIE), 392–400 (capacity, unused allowance, allowance, fixed ratio, group ratio, debt caps), 401–404 (blended group ratio), 405–408 (tax-EBITDA), 410–416 (net group-interest, ANGIE, QNGIE, group-EBITDA), 420–430 (derivatives and elections), 432–449 (public infrastructure), 461 (anti-avoidance), 473–474 (worldwide group); Sch 7A paras 1, 1A, 4, 5, 7, 8 (revised returns), 11A, 11B, 20, 22, 24, 25, 29.
- TIOPA 2010 s 155(6) (TP: CIR disregarded); s 164A (UK-to-UK exemption); s 371IE (CFC matched interest).
- Finance (No. 2) Act 2017 Sch 5 (CIR inserted); Finance Act 2019 Sch 14 paras 18–19 (leases); Finance Act 2026 s 61 (reporting companies) and s 62 (tax-EBITDA capex); Finance Act 1998 Sch 18 para 74 (group relief claim time limit); CTA 2010 s 188BE (Part 5A restriction).
- Corporation Tax Act 2009 ss 86A, 142, 145, 147 (FA 2026 s 62 items); s 446 (TP adjustments in loan relationships); ss 441–442 (unallowable purpose).
- HMRC manuals: CFM95110, CFM95130, CFM95250, CFM95330, CFM95630, CFM95650, CFM95660, CFM95720, CFM95735, CFM95805, CFM95930, CFM96020, CFM96080, CFM96620, CFM97190, CFM97210, CFM97240, CFM97290, CFM97320, CFM98010, CFM98320, CFM98580, CFM98590, CFM98610, CFM98620, CFM98640, CFM98645, CFM98693, CFM98700, CFM98240, CFM38155.
- GOV.UK: *Restriction on Corporation Tax relief for interest deductions* (updated 24 April 2026); *Submit a corporate interest restriction return* (updated 14 April 2026); policy paper *Corporate interest restriction: reporting companies* (26 November 2025).
- OECD, BEPS Action 4 Final Report (October 2015), as quoted at CFM95130 (OECD site not consulted).
- Cases: no reported decision on Part 10 was found. For the three gates, see *BlackRock HoldCo 5, LLC v HMRC* [2024] EWCA Civ 330 (prologue).
