# Technical review B: chapters 6 to 10

Reviewer B, 9 October 2026. Scope: scripts (`.txt`), reading editions (`-reading.md`) and notes for chapters 6 (deferred tax), 7 (large company computation), 8 (plant and machinery), 9 (buildings, fixtures, leasing, successions) and 10 (R&D). Method: full read of both editions; law checked against the law sheets (V items) and 11 WebSearch calls (standard mode; listed at the end); every computation re-run in Python (scratch `review-B/calc.py`); brief §11 TTS scans and R16 production-word scan run on all ten files; grades checked against `research/lcg-grid-extract-v2.txt`; past-paper references checked against `research/exam-intel.md`.

**Overall.** The five chapters are accurate and well built. Arithmetic is right everywhere (ETR 24.39%, Calder DT, TEL computation, hybrid rates, MR, pension spreading, LFL annuity, ERIS and RDEC figures all reproduce exactly). Batch 1 rulings R1, R2, R3, R7, R11, R12, R15 are correctly implemented. Scripts are clean on the digit, symbol, dash, colon and acronym scans. The one substantive legal error runs through chapters 6, 8 and 9: **writing down allowances were given, in the period of expenditure, on the balance of expenditure left after a 40% or 50% FYA.** CAA 2001 s 58(5)(a) says no part of first-year qualifying expenditure on which an FYA is made is allocated to a pool for the chargeable period in which it is incurred. The balance joins the pool after the WDA and draws WDA from the next period.

Classification: **ERROR** = wrong law, number or fact; **LIKELY** = probably wrong or misleading; **MINOR** = style, clarity, audio or production slip. "R" = reading edition; "S" = script.

---

## Chapter 6: Deferred tax and the tax charge

| # | Class | Location | Finding | Correction | Source |
|---|---|---|---|---|---|
| 6.1 | ERROR | R, "Worked example: full expensing and deferred tax": "£480,000 to the main pool, on which the 14% WDA gives £67,200 in GY2: total relief £387,200" | The 60% balance after a 40% FYA is not pooled in the period of expenditure, so no WDA in GY2 | "£480,000 joins the main pool after the WDA and draws 14% from GY3 (CAA 2001 s 58(5)): relief in GY2 £320,000" | CAA 2001 s 58(5) (legislation.gov.uk/ukpga/2001/2/section/58) |
| 6.2 | ERROR | R, Calder current tax table "CTA 2009 Part 3 Ch 6A"; references list "Part 3 Ch 6A (RDEC)" | FA 2024 abolished the old RDEC in Part 3 Ch 6A; the merged scheme credit is CTA 2009 Part 13 Ch 1A (ss 1042A ff) | Cite "CTA 2009 Part 13 Ch 1A (s 1042I step 1)" | CIRD111000 (via search); LS1 §6 (V) |
| 6.3 | LIKELY | R, "Which rate, and when": "with 10 associated companies in GY2, the limits are £5,000 and £25,000" | GY2 marginal relief count is nine associated companies, divisor 10 | "with nine associated companies (divisor 10) in GY2" | R1, R17; ledger §3 |
| 6.4 | MINOR | R, Exam lens "Traps (exam-intel trap 21)"; Exam lens "(exam-intel synthesis)"; Calder table note "Story fact fixed in this chapter" | Production words (R16) | Delete the bracketed references; note → "Invented (story)" | R16 |
| 6.5 | MINOR | R, Law year line and key rules row "FA 2025 s 13"; S, take-away "For the financial year twenty twenty six and ... twenty twenty seven the main rate ... is enacted, by the Finance Act twenty twenty six" | FY2026 rates are set by FA 2025 ss 13 (main rate) and 14 (small profits rate); FA 2026 ss 11–12 set FY2027 | R: "FA 2025 ss 13–14"; S: FY2026 by the Finance Act twenty twenty five, FY2027 by the Finance Act twenty twenty six | legislation.gov.uk/ukpga/2025/8/section/13 (search extract) |
| 6.6 | MINOR | S word count 6,610 | Above the plan target 6,000 + 10% (6,600) | Trim to within range | Plan ch 6 |

Verified without change: IAS 12 paras 4A, 15, 24, 28, 35 (quotation exact), 47, 51C, 53, 66, 81(c), 85, 88A–88D; May 2021 amendment and its effective date; 2021 substantive enactment (24 May 2021; Royal Assent 10 June 2021); FA 2026 Royal Assent 18 March 2026; ETR reconciliation (£24,385,250; 24.39%; R3 line present); M26 Q6 hypothetical (net DTL £350k); grades (deferred tax 1); past papers (M24 Q2(b) 4 marks, M25 Q2(b) 5, N25 Q1(b) 3, M26 Q6 10).

## Chapter 7: The large company computation

| # | Class | Location | Finding | Correction | Source |
|---|---|---|---|---|---|
| 7.1 | MINOR | R, TEL worked example ends at "CT at 25%" | The brief's layout runs TTP → CT → RDEC set-off → payable; the £600,000 credit surrendered by Brackenwell (R7) is only mentioned in prose | Add rows: credit surrendered by Brackenwell (600); CT after credit 1,626.25; QIPs still on the full liability | Writer brief §8; R2, R7 |
| 7.2 | MINOR | R, key rules row "FA 2025 s 13" | s 14 sets the small profits rate and fraction | "FA 2025 ss 13–14" | legislation.gov.uk/ukpga/2025/8/section/13 |

Verified without change: s 46, s 1288–1289, s 1290 (5-year cut-off, 12-month tax-paid rule), FA 2004 ss 196–197 (two tests; bands; worked example £1.6m), Part 12 (ss 1007–1038A), ss 76/79 (£27,036), ss 1298–1300, s 1303–1304, s 979, QCD rules and FA 2026 s 56 outcome test, CTA 2010 ss 377/379, marginal relief (formula, £36,000 example, 26.5% quotation), straddle example (90/275 days). TEL computation reproduces exactly (add-backs £20.0m; deductions £1.5m; £42.0m; GR £17.095m; TTP £8.905m; CT £2,226,250; QIPs £556,562.50; 9.47% of PBT). Cases: *Eclipse 35* [2015] EWCA Civ 95 and HMRC's £635m estimate (HMRC press release via search); *ScottishPower* [2025] EWCA Civ 3, 17 January 2025, UKSC/2025/0047 heard 18–19 May 2026, **no judgment found as at 9 October 2026** (search). RM Assessment Master quotation matches exam-intel.

## Chapter 8: Plant and machinery

| # | Class | Location | Finding | Correction | Source |
|---|---|---|---|---|---|
| 8.1 | ERROR | R and S, "Tarnmoor's sixteen million pounds" (TEL GY2 computation), "14%, and the hybrid rate" ("After additions and disposals it stands at £40.18m; 14% gives £5,625,200"), S para beginning "In our invented group, every story period..." | WDAs given in GY2 on the £480,000 balance of the 40% FYA rigs (main pool) and the £600,000 balance of the 50% FYA chillers (special rate pool). s 58(5)(a) bars pooling FYA expenditure in the period it is incurred. Overstated WDAs £103,200 (main 14% × £480,000 = £67,200; special 6% × £600,000 = £36,000). The script elsewhere (40% section) correctly says the balance "draws writing-down allowances from the next period", so the chapter contradicted itself | Show the FYA balances transferred to the pools **after** the WDA. To keep the canonical total of **£16,000,000** (used by chapters 7, 10, 3 and the ledger), restate the ch-8-only special rate pool b/f from £6,000,000 to **£7,720,000**. New figures: main pool before WDA £39,700,000, WDA £5,558,000, c/f £34,622,000 (after adding £480,000); special rate pool WDA 6% £463,200, c/f £7,856,800 (after adding £600,000); total 9,000,000 + 600,000 + 320,000 + 5,558,000 + 463,200 + 58,800 = 16,000,000. "At 18%" comparator £7,146,000 | CAA 2001 s 58(5) (legislation.gov.uk extract); see "Needs orchestrator ruling" |
| 8.2 | ERROR | R, "Worked example: the LLA trap" (WDA on balance at 6% £9,000; relief £159,000; overstated by £141,000); S "roughly one hundred and forty thousand pounds" | Same s 58(5) point | Right column: FYA £150,000; balance to pool, WDA from the next period; relief £150,000; misclassification overstates first-year relief by £150,000 | s 58(5) |
| 8.3 | MINOR | R, 40% FYA bullet "the 60% balance goes to the main pool (GOV.UK guidance)" | Incomplete: timing missing | Add "after the WDA for the period, so it draws WDA from the next period (s 58(5))"; same for the 50% FYA balance | s 58(5) |
| 8.4 | MINOR | R, chapter and section headings | No full stops (brief §6; other chapters use them) | Add full stops | Writer brief §6 |

Verified without change: s 45S conditions and general exclusions; **long-life assets do qualify for the 50% FYA** (general exclusion 5 catches only expenditure that would be LLA expenditure but for the Sch 3 para 20 transitional rule: HMRC CA23174ac via search), so Calder's long-life test bed and the s 59B charge (£100,000) stand; ss 59A–59C; split-asset example (£150,000 / £100,000); 40% FYA (s 45U, s 46(4B)–(4C), no special balancing charge); hybrid rates 14.99% / 16.00% / 17.01% (days 90/275, 182/183, 274/91) and £149,900; 9-month 10.5% and AIA £750,000; R11 AIA allocation; cars and FA 2026 s 30; s 5 timing; s 67; s 269; CA27100; *Dundas Heritable* [2019] UKUT 208 (TCC) (pub and bar operator; years to 31 March 2012 and 2013; enquiry limb of para 82: search); grades (all 1; VAT adjustments 2).

## Chapter 9: Buildings, fixtures, leasing and successions

| # | Class | Location | Finding | Correction | Source |
|---|---|---|---|---|---|
| 9.1 | ERROR | R, "Tarnmoor's distribution centre", alternative column "If the 50% FYA is available": "WDA 6% on this addition 18,000"; total "318,000" | The £300,000 balance is not pooled in the period of the FYA, so no WDA in GY3. (The script already says £300,000 now and £300,000 to the pool: correct.) | WDA on the balance "nil in GY3 (s 58(5))"; total £300,000 | s 58(5) |
| 9.2 | MINOR | R, heading "# Chapter 9: ..." and section headings | Digit in chapter heading; no full stops | "Chapter nine: Buildings, fixtures, leasing and successions." and full stops | Writer brief §6 |
| 9.3 | MINOR | R and S, special tax sites: "The P&M FYA end date per site was not confirmed" | The government's sunset-extension policy paper gives the same new dates (30 September 2031 England; 30 September 2034 Scotland, Wales, investment zones) for the special tax site reliefs generally | Say so, while keeping "check the site's designation" | GOV.UK policy paper "Extension to freeport and investment zones special tax site sunset dates" (search) |

Verified without change: SBA rules (s 270AA, 270AB, 270BC, 270BD, 270IA; 3% from April 2020; TCGA s 37B add-back; demolition), TEL distribution centre (£3.4m; £102,000; £34,000; day check £34,093), TES flood wall (£300,000; £9,000), ss 187A–187B dates, s 198 (TES £400,000 with AIA per R11), TCGA s 41 restriction example (£200,000 loss), LFL tests and TEL LFL (rental £203,802; finance charge £90,000; WDA £210,000 on a second-hand LFL with no FYA, correctly in the same period), *BMBF v Mawson*, *Kenmir v Frizzell* / *Haymarket*, successions (ss 265–267, s 948), grades (all 1; allowance buying and freeports 3); freeport SBA sunset dates confirmed.

## Chapter 10: Research and development

| # | Class | Location | Finding | Correction | Source |
|---|---|---|---|---|---|
| 10.1 | LIKELY | R, WE 10.2 "Group economics: ... BSL's loss (and the group relief it surrenders to TEL) is £600,000 smaller"; S "its loss is six hundred thousand pounds smaller, and so is the loss it can surrender to Tarnmoor Engineering as group relief" | BSL's GY2 loss (after the taxable credit) is time-apportioned £2.6m / £2.6m, so the credit reduces the post-acquisition surrender by only £300,000; the other £300,000 reduces restricted pre-acquisition losses. The £450,000 figure values the whole £600,000 at 25% | Reword: the loss is £600,000 smaller, half falling on the surrender to TEL and half on restricted pre-acquisition losses; valued at 25% throughout that costs £150,000 (net £450,000, 15%); because the pre-acquisition half may never be usable, the near-term cost is lower. Canonical £450,000 kept | Ledger §7 GY2 (time apportionment); R7 |
| 10.2 | MINOR | R, "The debate (L7)" | Production label | Delete "(L7)" | R16 |

Verified without change: merged scheme in CTA 2009 Part 13 Ch 1A for APs beginning on or after 1 April 2024 (SI 2024/286 confirmed by search); 20% rate; net 15% / 16.2%; seven steps; 25%/19% notional tax; PAYE cap £20,000 + 300%; FA 2026 ss 31 and 34; ERIS (86%, 14.5%, 30%, 186% cap, 26.97%); R&D SME ceilings; **s 1142A was inserted by F(No.2)A 2023 Sch 1 paras 2(6), 20** for APs beginning on or after 1 April 2023 (resolves notes flag 5); SI 2023/813 (made 17 July 2023, in force 8 August 2023); claim time limit (two years beginning with the last day of the period of account; 42 months for long periods; para 83E(5) discretion and SP 5/01: CIRD81800 via search); HMRC statistics September 2026 (£8.2bn provisional; 40,325 claims, down 17%; SME claims down 19%, large up 4%: confirmed by search); all Calder and BSL figures (£400,000; £350,000; £943,950; £600,000; £114,000; £2,720,000).

---

## Needs orchestrator ruling

1. **TEL GY2 pools (chapter 8; s 58(5)).** Fix 8.1 has been applied in chapter 8 (both editions) by restating the **special rate pool brought forward at 1 January GY2 from £6,000,000 to £7,720,000**, which keeps every canonical total unchanged (TEL capital allowances **£16,000,000**, trading profits £26.0m, TTP £8,905,000, CT £2,226,250). Changed components (used only in chapter 8 and its notes): main pool before WDA **£39,700,000**; main WDA **£5,558,000**; main pool c/f **£34,622,000** (was £34,554,800); special rate WDA **£463,200** (was £396,000); special rate pool c/f **£7,856,800** (was £6,204,000). Please (a) confirm the approach, (b) amend `calder-ledger.md` §7 GY2 ("TEL GY2 capital allowances") and §8 ("TEL plant ... Pools c/f"), and (c) update `ledger-check.py`'s `TEL CA total` check (currently `0.14*40.18 ... 0.06*6.6`; correct form `0.14*39.7 + 0.06*7.72`). If the orchestrator prefers to keep the £6.0m b/f instead, the canonical CA total becomes £15,896,800 and TEL's TTP/CT/QIPs (chapters 1, 3, 7, 10) would all move: not recommended.
2. **Guidance for later chapters (all CA computations):** the balance of expenditure after a 40% or 50% FYA (and after any partial FYA claim) enters the pool **after** the WDA for the period of expenditure (CAA 2001 s 58(5)). Expenditure with no FYA (AIA excess, second-hand plant, LFL deemed expenditure such as TEL's GY3 machine) is pooled and gets WDA in the same period. Worth a line in the next continuity rulings.
3. **BSL group economics (chapter 10, fix 10.1).** The canonical "group net benefit £450,000" (R7) values the whole £600,000 reduction in BSL's GY2 loss at 25%, although half of it falls on pre-acquisition losses restricted under Part 14 Ch 2. The wording now says so; the number is unchanged. No action needed unless chapter 15 or 20 restates the benefit.

## Could not verify (search returned nothing conclusive, or not searched)

- FA 1998 Sch 18 paragraph numbers for the additional information form and claim removal (paras 83EA, 83EB): the search returned only the SI title pages (chapter 10 keeps them; unverified).
- Allowance buying details (chapter 9): FA 2010 Sch 4 commencement 21 July 2009, s 212LA thresholds (£50m / £2m) and the FA 2013 changes (awareness topic; not searched).
- CAA 2001 s 538A (SBA contribution rule) section number (chapter 9; not searched).
- TCGA 1992 s 140A "relevant state" after Brexit (chapter 9 already labels it unclear).
- FRC's July 2023 FRS 101/102 Pillar Two amendment date (chapter 6 already labels it secondary).
- *Marson v Morton* report citation (chapter 7 already says "not checked").
- *Dundas Heritable* exact filing dates (3 February and 26 November 2015): outcome, years and enquiry-limb reasoning confirmed; dates not seen.

## Searches used (11)

1. CAA 2001 s 58(5) allocation of FYA expenditure to pools → legislation.gov.uk/ukpga/2001/2/section/58 (s 58(5)(a) wording).
2. General exclusion 5 and long-life assets → gov.uk CA23174ac, CA23165; legislation.gov.uk s 46.
3. s 1142A inserting Act → legislation.gov.uk/ukpga/2009/4/section/1142A; F(No.2)A 2023 Sch 1; SI 2023/813; CIRD183000.
4. FA 2025 FY2026 rate → legislation.gov.uk/ukpga/2025/8/section/13.
5. *ScottishPower* Supreme Court → supremecourt.uk/cases/uksc-2025-0047; caselaw.nationalarchives.gov.uk/ewca/civ/2025/3.
6. SI 2024/286 → legislation.gov.uk/uksi/2024/286; CIRD111000.
7. Para 83E time limit → gov.uk CIRD81800, CIRD181000.
8. *Dundas Heritable* → gov.uk UT decision page [2019] UKUT 0208 (TCC).
9. HMRC R&D statistics September 2026 → gov.uk statistics release (29 September 2026).
10. *Eclipse 35* £635m → HMRC press release (mynewsdesk).
11. Freeport sunset dates → gov.uk sunset-extension policy paper; CA94751.
