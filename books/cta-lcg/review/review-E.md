# Technical review E: chapters 22–26 (Part Four, across borders)

*Reviewer E, 9 October 2026. Scope: audio scripts, reading editions and notes for chapters 22 (residence and migration), 23 (inbound: PEs and withholding), 24 (treaties and DTR), 25 (outbound: branch or subsidiary) and 26 (CFCs). Stage 0 applied the continuity rulings R18–R29 first. All story computations were re-run in Python (scratch `reviewE/calc.py`): every figure in both editions agrees with the amended ledger. `ledger-check.py`: 212 checks, 0 failures (before and after fixes). 14 WebSearch calls were used (budget 25).*

**Brief §11 scans (all five scripts, after fixes):** no digits, symbols, quotation marks, dashes used as punctuation, semicolons or stray colons; no unspaced acronyms (C F C, C T, I G, D T T P, B E P S and O E C D are declared and spaced). R16 production-word scan: scripts clean; one hit in the chapter 24 reading edition ("Law sheet 3"), now fixed. Word counts after fixes (target ± 10%): ch 22 **8,162** (7,500; max 8,250); ch 23 **7,671** (7,500); ch 24 **8,024** (7,500; max 8,250); ch 25 **6,709** (6,500); ch 26 **9,357** (9,000).

**Exam lens:** grades match the v2 grid (company residence/PE/branch 1; non-resident and dual resident companies 1; migration 2; DTT and DTR 1; distributions received 1; unremittable income 1; Part 22 1; deduction of income tax 1; CFC 1; member State transfers 2; international movements of capital 2; Patent Box 3). Past-paper references (N23 Q1, N24 Q2, N24 Q6, N25 Q1–Q3, M23 Q2–Q3, M24 Q5, M25 Q1, M25 Q4, M26 Q5) match exam-intel.

---

## Stage 0: continuity rulings R18–R29 applied

| Ruling | Chapter | Action |
|---|---|---|
| R20 | 26 reading (TCM worked example) | ANTIE GY3 "£24.35m" → **£24.44m**; notes flag 11 updated |
| R29 (TPLC and the CFC charge) | 26 both editions | The "this book does not resolve it for TPLC" caveat replaced: TPLC (nil TTP) is not large; its CFC charge is due 9 months and 1 day after its AP (book's reading); one script sentence added; notes flag 9 resolved |
| R23 | 25 notes | Contradiction 1 (s 173, not Part 18) marked resolved by R23; text already correct |
| R28.1, R28.4 | 22 notes | *Development Securities* practice and *Unit Construction* version confirmed; flags 9–10 closed |
| R28.7, R25 | 26 | Already consistent (Part 9A applies to CFC APs from 1 January 2013; Pillar Two GY5 figures) |
| R29 (other items) | 23, 24, 25 | TVS service fee unpriced (23); Vallaria treaty PPT and Calder royalty £30,000 (24); branch decision and draft-Bill "proposed" label (25): all consistent |

Grep of all ten files for superseded figures (£351,200, £651,200, £585,000 claimed, £240,000 TAL duty, £24.35m, 1.96m/2.55m reactivation) found only the R20 item above. Each notes file now has a "Continuity fixes applied" section.

---

## Chapter 22: Where a company lives, and how it leaves

| # | Class | Location | Finding | Correction | Source |
|---|---|---|---|---|---|
| 22.1 | **LIKELY** | Reading "Usurped, or merely influenced": "In 1996 he and his wife sold their shares for £23.7m through a chain of companies ending with a Dutch company, Eulalia"; script: "he and his wife sold their shares ... for twenty three point seven million pounds" | The £23.7m sale (23 July 1996) was by Copsewood Investments Ltd (a BVI company in the Woods' structure) **to** Eulalia; Eulalia sold on to Birthdays Group Ltd on 21 October 1996 for £30,799,384; the Woods were assessed under TCGA s 13 | Both editions reworded (offshore holding company sold to Eulalia for £23.7m; Eulalia sold on a few months later; s 13 assessment in the reading edition). **Fixed** | Find Case Law [2006] EWCA Civ 26 (judgment opening, search extract) |
| 22.2 | MINOR | Reading s 109E row ("within a 3-year time limit ... controlling directors"); script recovery paragraph | Time limit runs 3 years from a "relevant time" (broadly when the tax is finally determined; plan-based rule where a plan exists); targets include controlling directors of a company **controlling** the migrating company | Both editions updated. **Fixed**; notes flag 3 resolved | legislation.gov.uk TMA s 109E (point-in-time versions); CTM34190 |
| 22.3 | MINOR | Script: old s 187 postponed the charge "until it sold them, or until the parent relationship ended" | Postponement related to foreign **trading** assets and crystallised on a disposal within six years | Script wording tightened. **Fixed** | Law sheet 5 Part D (s 187, repealed) |
| 22.4 | MINOR | Reading "Paying over six years": Sch 3ZB "amended by FA 2019 Sch 8 Part 1 for APs ending on or after 1 January 2020" | Commencement of Sch 8 Part 1 not confirmed (only Part 2's 1 January 2020 migration test was seen) | Reworded to describe what Part 1 did (replaced paras 11–17 with the six-instalment rule) without the date. **Fixed** | legislation.gov.uk FA 2019 Sch 8 and Sch 3ZB para 11 (extracts) |

Checked and correct: CTA 2009 ss 10(1)(g), 14, 18 (from 30 November 1993); TCGA ss 185, 187 (repealed for migrations on or after 1 January 2020), 187B (automatic; 2-year election out); exit items ss 41/162, 333, 609, 859; Sch 3ZB (CT1 − CT2; 9 months; six equal instalments; acceleration; CTM34132 eligibility, labelled); DRIC rules; MLI Art 4 (UK–Ireland, UK CT from 1 April 2020); *De Beers* quotation; *Smallwood*; *Development Securities* (panel only, per R28). TIL computation (TTP £3.4m; CT1 £850,000; CT2 £325,000; plan £525,000 = 6 × £87,500 from 1 April GY5; QIP threshold £1,000,000; warehouse £800,000 postponed; illustration £1.5m) verified.

## Chapter 23: Inbound: non-resident companies, PEs and withholding

| # | Class | Location | Finding | Correction | Source |
|---|---|---|---|---|---|
| 23.1 | MINOR | Reading: "Anti-fragmentation (s 1143(2A)–(2C), added by FA 2019)"; Key rules table | Inserting provision is FA 2019 **s 21** (confirmed) | Section number added (two places). **Fixed** | legislation.gov.uk FA 2019 s 21 (extract) |
| 23.2 | MINOR | Reading "Treaty Passport": borrower files DTTP2 "as soon as possible" | Loan-agreement practice uses a 30-day filing period; the GOV.UK wording was not retrieved | Not changed (law sheet wording kept); listed as unverified | Law sheet 3 §7; lawinsider drafting extracts |

Checked and correct: FA 2026 PE agent test and commencement (chargeable periods beginning on or after 1 January 2026, with real-calendar examples); s 1140A; ss 1142(1A), 1143(2CA); omitted CTA 2009 ss 22–23, 25–32; s 5 heads and dates; TCGA s 2B and Sch 1A (75%; 25% in 2 years); Part 22 Chs 5–7; ITA s 874 at 20% for 2026/27 and 22% from 2027/28 (interest only); exits (ss 878–879, 882/987, 888A, 933–937, 930); ss 903, 906, 911, 917A; FA 2021 s 34; CT61. *Lehman* [2019] UKSC 12. TVS domestic PE / no treaty PE analysis consistent with ledger and R29. Numbers (BSL £2,500; Undertow £1.12m / £1.232m; TFL £6.05m counterfactual; NRL illustration £5,000) verified.

## Chapter 24: Treaties and double tax relief

| # | Class | Location | Finding | Correction | Source |
|---|---|---|---|---|---|
| 24.1 | **LIKELY** | Reading "The N25 wrinkle": "This book could not confirm the statutory reasoning ... (s 44's 'particular transaction, arrangement or asset' points the other way ...)"; script "examination wrinkle" paragraph | There is a statutory basis: **TIOPA 2010 s 47** applies s 44(2) where treaty royalties are paid in respect of an asset in more than one foreign jurisdiction, treating them as income from a single asset with credits aggregated. Saying the statute "points the other way" was misleading | Both editions now cite s 47, note that N25 Q1 was a non-treaty case and that s 47's reach to unilateral relief is not confirmed; Key rules row updated. **Fixed**; open item 20 largely resolved | legislation.gov.uk TIOPA 2010 s 47 (extract) |
| 24.2 | MINOR | Reading MAP table, source column: "Law sheet 3" | R16 production word | Replaced with "INTM153270". **Fixed** | R16 |
| 24.3 | MINOR | Reading "How a treaty reaches a tax return": examiners' N23 remark in quotation marks | Exam-intel records a paraphrase, not the report's words | Quotation marks removed. **Fixed** | exam-intel §3 |

Checked and correct: TIOPA ss 2, 5(2), 6; MLI (1 October 2018; UK–Ireland articles; no Art 12); Model articles; *Indofood*, *FCE Bank*, *Anson*, *Bayfine* (opening words of the quotation corroborated); s 18(3A); s 19 time limits; s 33; s 42 R × IG; s 44; ss 72–78; s 52 allocation; s 57(3), s 58 mixer cap; ss 81–88. All worked examples recomputed: refinery credit £180,000 / top-up £45,000; variation £15,000 lost; royalty with Patent Box £90,000 CT, £60,000 credit, £30,000 payable (R29); Marrovian variation £270,000 / £135,000 wasted; allocation £60,000 / £104,444 / £160,000 credit (CT £140,000 / £95,556 / £40,000); taxed dividend £312,500 credit, £87,500 wasted.

## Chapter 25: Outbound: branch or subsidiary

| # | Class | Location | Finding | Correction | Source |
|---|---|---|---|---|---|
| 25.1 | MINOR | Reading "Incorporating a branch": "Whether every reference in s 140C was also reworded was not confirmed" | SI 2019/689 reg 6 also amended s 140C ("another" → "a" member State; "other than the United Kingdom" omitted) | Sentence replaced. **Fixed**; bible flag 25 / open item 19 (s 140C limb) resolved | legislation.gov.uk SI 2019/689 reg 6 (2020-12-31 version, extract) |
| 25.2 | MINOR | Reading Exam lens boxes: M23 Q2 and M26 Q5 remarks in quotation marks | Paraphrases in exam-intel, not the reports' words | Quotation marks removed ("not mentioning obvious points ..." kept: exam-intel quotes it). **Fixed** | exam-intel §3 |

Checked and correct: s 18A election (all PEs; relevant day; revocable only before it; irrevocable after); s 18C, 18P, 18R, 18S; TONA ss 18J–18N (6-year look-back; streaming in the first relevant return); s 18(3A); ss 18G–18I outline; draft Finance Bill 2026-27 labelled proposed (R29); Part 9A exempt classes, s 931D(c), s 931R (2 years); TCGA s 140 (25%; 6 years); ss 173–175 (confirmed against BIM42750: deduction not creating a loss; excess carried forward) v Part 18 (2-year claim); FA 2009 Sch 17 (£100m; 6 months; TMA s 98). Calder figures (−£75,000 / +£45,000; £150,000 project tax; counterfactual £120,000, saving £30,000; board paper £150,000 v £288,000 / £180,000), s 140 example (£750,000 postponed; £62,500 CT) and the dividend example (£288,000 either way) verified.

## Chapter 26: Controlled foreign companies

| # | Class | Location | Finding | Correction | Source |
|---|---|---|---|---|---|
| 26.1 | **ERROR** (continuity) | Reading WE 26.8: "ANTIE ... £24.35m (GY3)" | Superseded by R20 (as filed £24.44m) | Changed to £24.44m. **Fixed (Stage 0)** | R20 |
| 26.2 | **LIKELY** (continuity) | Reading "Running the regime": "this book does not resolve it for TPLC"; script silent | R29 settles it: TPLC (nil TTP) is not large; charge due 9 months and 1 day after the AP | Both editions updated. **Fixed (Stage 0)** | R29; CTM92825 |
| 26.3 | MINOR | Reading low profit margin: ROE exclusions cited to "s 371MC" | HMRC describes s 371MC as the main-purpose anti-avoidance rule; ROE is defined in s 371MB | Citation corrected; anti-avoidance line added. **Fixed** | INTM225800 (extract) |
| 26.4 | MINOR | Both editions: "profits are measured before interest" | Clarify: before **deduction** of interest; interest **income** stays in (so a finance company such as TCM cannot strip out its own interest income) | Both editions clarified. **Fixed** | INTM225800, INTM225900 (extracts) |
| 26.5 | MINOR | Reading Exam lens boxes and text: four M24/M25 examiners' remarks in quotation marks | Paraphrases in exam-intel | Quotation marks removed. **Fixed** | exam-intel §3 |

Checked and correct: CFC definition and control tests (40% rule; > 50% investment from 1 January 2019); entity exemptions (12 months; greater of 10% and £50,000; £50,000 / £500,000; 10% of ROE; 75% / 18.75%); Ch 3 Conditions A–D; Ch 4 safe harbour; Ch 5 5% rule and s 371EC; Ch 9 (QLRs; business premises; 75% = 6.25%; s 371IE excess over ANTIE); 25% test; apportionment; creditable tax; s 371UD omitted; s 105(3A) link (R3); State aid chronology (EU dates labelled secondary; UK steps verified); s 371SD(5A); F(No.2)A 2023 s 179 push-down cap. TCM GY5 (£5.1m; £1,275,000; £114,750; £204,000; £816,000 without the claim; 4.0% / 13.0%), GY1–GY4 £132,000, Pillar Two cap £306,000 and top-up £102,000, and all labelled examples (£80,000 / £320,000; 56%; 84%; ROE £3,750,000; local tax 72%) verified.

---

## Counts

| Chapter | ERROR | LIKELY | MINOR | Fixed |
|---|---|---|---|---|
| 22 | 0 | 1 | 3 | all 4 |
| 23 | 0 | 0 | 2 | 1 (23.2 left as unverified) |
| 24 | 0 | 1 | 2 | all 3 |
| 25 | 0 | 0 | 2 | all 2 |
| 26 | 1 | 1 | 3 | all 5 |

## Needs orchestrator ruling

- **None that changes a canonical number.**
- Suggested (outside this group's files): chapter 32 reading edition (DTR row, line ~349, and the N25 paragraph) could cite **TIOPA 2010 s 47** as the basis for treating royalties for one asset as one source, to match chapter 24. Bible §5.2 flag 25 (s 140C) and the open item 20 (s 47) can be updated.

## Could not verify (14 searches used)

1. Whether Ireland is on the SI 2012/3024 Part 1 excluded territories list (truncated extracts only); TIL's result does not depend on it.
2. QDMTT as "local tax" (s 371NB) or creditable tax (s 371PA) for UK CFC purposes: no HMRC guidance found (bible flag 38 stays open).
3. Exempt period for a migrating company (s 371JB): not searched further; not relied on.
4. FA 2019 Sch 8 Part 1 commencement for the Sch 3ZB payment changes; how QIPs treat tax later deferred under a plan.
5. CAA 2001 s 61(2) table item giving market value on a deemed discontinuance (reviewer's knowledge: the residual "any other event" item); not seen in the search extract.
6. HMRC's DTTP2 filing period (30 days in loan documentation; GOV.UK page not retrieved).
7. Whether TIOPA s 47 extends to unilateral relief (N25 Q1 was a non-treaty case).
8. The second limb of the *Bayfine* "primary purposes" quotation (opening words corroborated only).
9. CTA 2009 s 174 and any s 173 claim time limit; UK reservation on the whole of MLI Art 12 (secondary); *Cadbury Schweppes* facts (deliberately omitted).

Sources (searches this review): legislation.gov.uk TMA s 109E (https://www.legislation.gov.uk/ukpga/1970/9/section/109E/2019-02-12) and CTM34190; FA 2019 Sch 8 and TMA Sch 3ZB para 11 (https://www.legislation.gov.uk/ukpga/1970/9/schedule/3ZB/paragraph/11/data.html); Find Case Law *Wood v Holden* (https://caselaw.nationalarchives.gov.uk/ewca/civ/2006/26); TIOPA 2010 s 47 (https://www.legislation.gov.uk/ukpga/2010/8/section/47); FA 2019 s 21 (https://www.legislation.gov.uk/ukpga/2019/1/section/21/data.html); SI 2019/689 reg 6 (https://www.legislation.gov.uk/uksi/2019/689/regulation/6/2020-12-31); INTM225800 (https://gov.uk/hmrc-internal-manuals/international-manual/intm225800) and INTM225900; BIM42750; Find Case Law *Bayfine* [2011] EWCA Civ 304 and RPC / Templetax summaries; SI 2012/3024 (https://www.legislation.gov.uk/uksi/2012/3024); INTM226100/226150 and MTT25511 (QDMTT search).
