# Notes: Chapter 7, The large company computation

**Interpretation and assumptions.** Wrote the AT-level CT computation chapter per plan §5 (owned topics: badges for companies, employment costs, Part 20 items, income not otherwise charged, QCDs, LFL lessee deductions, rates/MR/straddle, the full TEL GY2 computation). Kept all ledger figures; designed TEL's GY2 adjustments so PBT reconciles to the canonical £42.0m; taught the QCD, EBT, pension spreading, LFL and MR points as labelled hypotheticals so the ledger's TTP and CT are untouched (now TTP £8,905,000 and CT £2,226,250 after continuity ruling R3; originally £8.08m / £2.02m). TKS files unavailable (addendum): TKS recaps limited to what the bible §4.1 and ledger §1 record.

**Files:** `chapters/07-large-company-computation.txt` (script, 8,699 words after the continuity fixes; target 8,500 ±10%); `chapters/07-large-company-computation-reading.md` (reading edition, 8,430 words). Computations: scratch `.../scratchpad/lcg-ch07/calc.py` (all assertions pass); `ledger-check.py` re-run: 96 checks, 0 failures (no canonical number changed).

---

## Sources by section

Law sheet items marked V restated without new search: LS4 §3 (Part 12 ss 1007–1038A; s 1288–1289; ss 1290–1297; FA 2004 ss 196–197), LS4 §6 (s 979–982), LS4 §11 (CTA 2010 ss 189–217; benefits limits; FA 2026 s 56, Sch 9 tainted donations), LS4 §1.5 (CTA 2010 ss 377, 377A, 379; CAA 2001 ss 70H, 70I), LS4 §1.1 (s 46), LS4 teaching notes (*NCL*, *Dextra* via IHTM42959, *RFC 2012* title), bible §3.2 (rates, MR limits, 3/200, 26.5%, associated companies), exam-intel (paper tables, examiner remarks, traps 22–24, RM Assessment Master rule).

WebSearch (12 used; `mode: standard`):
1. `"Corporation Tax Act 2009" section 79 additional payments redundancy cessation "part of the trade"` → https://legislation.gov.uk/ukpga/2009/4/section/79/2010-04-06?view=plain ; https://www.gov.uk/hmrc-internal-manuals/business-income-manual/bim47210 (s 79: trade or part permanently ceases; extra payment allowed if deductible but for cessation; cap 3 × redundancy payment; payments after cessation treated as made on last day; BIM47210: s 76 entitlement first; *George Peters & Co Ltd v Smith*).
2. `CTA 2009 section 1300 gifts exception conspicuous advertisement food drink tobacco £50` → https://www.legislation.gov.uk/ukpga/2009/4/section/1300 ; https://gov.uk/hmrc-internal-manuals/business-income-manual/bim45070.
3. `CTA 2009 section 1298 business entertainment employees incidental section 1299` → https://legislation.gov.uk/ukpga/2009/4/section/1299 ; BIM45000, BIM45040 (Case A ordinary course of business; Case B employees unless also for others and incidental). The £150 annual-event figure is from secondary sources (accotax, mah.uk.com) and used only to say it is irrelevant to the company deduction.
4. `McKnight v Sheppard 1999 House of Lords fine...` → https://www.gov.uk/hmrc-internal-manuals/business-income-manual/bim37965 ; casemine commentary; https://caselaw.nationalarchives.gov.uk/ukut/tcc/2023/218 (fines not deductible, legal costs deductible; Lord Hoffmann's punishment rationale paraphrased; citation [1999] 1 WLR 1333 / [1999] STC 669).
5. `CTA 2009 section 1303 penalties interest...` → https://legislation.gov.uk/ukpga/2009/4/section/1303 ; https://www.gov.uk/hmrc-internal-manuals/business-income-manual/bim42520.
6. `ScottishPower v HMRC Court of Appeal 2025 Ofgem...` → https://caselaw.nationalarchives.gov.uk/ewca/civ/2025/3 ; rpclegal.com; simmons-simmons.com; lexisnexis.com ([2025] EWCA Civ 3; FTT largely HMRC, UT wholly HMRC, CA for ScottishPower; not fines or penalties; "replacement" principle rejected; ~£28m; settlements 2013–2016).
7. `Supreme Court HMRC v ScottishPower redress payments judgment 2026` → https://www.1cor.com/london/2026/05/18/laura-inglis-appears-in-the-supreme-court-today-in-hmrc-v-scottish-power/ ; freshfields.com; cms.law; supremecourt.uk appellant's case PDF (UKSC/2025/0047; heard 18–19 May 2026; judgment reserved; no judgment found as at 9 October 2026).
8. `"Macdonald v Dextra Accessories" [2005] UKHL 47...` → swarb.co.uk (HL 7 Jul 2005); https://caselaw.nationalarchives.gov.uk/ewca/civ/2004/22 ; lawgazette; https://gov.uk/hmrc-internal-manuals/inheritance-tax-manual/ihtm42959 (potential emoluments, FA 1989 s 43(11); trustee made loans; unanimous HL; pre-27 November 2002 per HMRC).
9. `"Corporation Tax Act 2010" section 105 "gross profits" group relief...` → https://legislation.gov.uk/ukpga/2010/4/section/105 ; https://gov.uk/hmrc-internal-manuals/company-taxation-manual/ctm80142 ; Explanatory Notes (s 99(1)(d)–(g) amounts surrenderable only to the extent they exceed surrendering company's profits; "profit-related threshold" for periods ending on or after 20 March 2013 including CFC apportionments; QCDs surrendered first).
10. `Marson v Morton 1986 badges of trade Browne-Wilkinson...` → ACCA "Badges of trade" (2011); BIM60025; BIM20250 (question of fact; badges not comprehensive; no single factor decisive). Secondary only; facts of the case reported inconsistently, so none stated.
11. `Ryall v Hoare 1923 Case VI ... Scott v Ricketts` → nothing relevant. **Dropped**: no case examples given for income not otherwise charged.
12. `Eclipse Film Partners No 35 LLP v HMRC [2015] EWCA Civ 95` → taxjournal.com (19 and 25 February 2015); mondaq; HMRC press release on mynewsdesk (not trading; question for tribunal of fact; speculation an indication not essential; HMRC estimate £635m).

---

## Fact-check flags

1. **ScottishPower Supreme Court judgment pending** (UKSC/2025/0047, heard 18–19 May 2026). Both editions say "judgment reserved when this chapter was written; check the outcome". Re-check before publication; if decided, update the section "Entertaining, gifts, fines and crimes".
2. **Calder's ex gratia payment: deductibility on general principles where only part of the trade ceases** is this book's view on invented facts (labelled in both editions); the s 79 cap (£27,036) is given as the fallback. HMRC's specific view on part-closures (BIM472xx beyond BIM47210) not opened. Bible flag **20 (ss 76–81)**: **partly resolved** (s 79 verified via legislation.gov.uk search extract and BIM47210; s 76 described from BIM47210; ss 77, 78, 80, 81 not opened and not taught).
3. **Bible flag 24 (s 105 restriction on surrender of excess QCDs): resolved** (legislation.gov.uk s 105; CTM80142; Explanatory Notes): only the excess over the surrendering company's profits (now "profit-related threshold") is surrenderable; QCDs treated as surrendered first.
4. **Bible flag 55 (TPLC recharge income characterisation): still open.** Chapter treats TPLC's £2.2m GY2 recharge to TVS as income not otherwise charged (s 979), labelled as Tom's/the book's working assumption. No change to ledger figures (TPLC excess ME £6.3m = £8.5m − £2.2m either way). **Settled by continuity ruling R17** (s 979 is the book's working assumption; s 105 outcome identical either way); surrender now capped by R3 at £5,475,000.
5. **Marson v Morton**: secondary sources only (ACCA, HMRC BIM summaries via search); report citation (often given as 59 TC 381) **not verified** and removed; facts not stated because sources conflict.
6. **Section numbers not verified and therefore removed** from the reading edition: CTA 2010 s 3, s 8 (straddle apportionment), s 18B (MR formula), CTA 2009 s 297 (trading LR debits), FRS 102 s 26. References now point to "CTA 2010 Part 2" and "CTA 2009 Part 5". The MR formula wording relies on bible §3.2 (V) and TKS.
7. **s 1290(1A) five-year rule**: stated as "a period beginning more than 5 years after the end of the period of contribution" (LS4 and bible say "a period starting more than 5 years after the period of contribution"). Wording "after the end of" is from memory of the statute: **check s 1290(1A)** (substance unaffected for teaching).
8. **Main rate rise 19% → 25% on 1 April 2023** used as a labelled real-calendar straddle illustration, attributed to TKS chapter 20; not re-verified in this session (well established; FA 2021).
9. **£150 annual staff function exemption** (employee side) mentioned only to say it is irrelevant to the company's deduction; source secondary (accountancy firm pages). ITEPA section not cited.
10. **Statutory meaning of "paid" (ITEPA ss 18–19)** described at a high level from LS4 (V reference); the directors' rules summarised, not quoted.
11. **Part 12 and tax-advantaged schemes**: deliberately not taught (story options are non tax-advantaged); whether/how Part 12 relief applies on CSOP/SAYE exercises not verified.
12. **ScottishPower details** (about £28m; settlements 2013–2016; nominal penalties) from law firm commentary and the CA citation page; the "replacement" principle summary is from RPC/Simmons commentary.
13. **TEL QIP dates (14th of months 3, 6, 9, 12)** stated in the reading edition; chapter 3 owns QIPs and bible flag 6 (whether the £20m is divided, and whether the divisor is associated or related 51% group companies) remains **open**. TEL is very large on any divisor, so nothing turns on it here.
14. **RDEC surrender to TEL**: chapter signposts that Brackenwell's surrendered RDEC discharges part of TEL's £2,226,250 (R3; R2/R7: £600,000 discharged, net £1,626,250, QIPs still on the full liability); the net payable is **not computed** (ledger flags PAYE cap check; chapter 10 owns it).
15. **2027 grid**: all items here graded 1 on the 2026 grid; check the 2027 grid when published (no grade change expected to matter; 2028 grid keeps badges at 1).
16. Exam-intel quote used verbatim: M26 ER "whilst the marginal rate of tax between the thresholds is 26.5%, this is not the rate that should be applied in full" (exam-intel teaching notes give this full form; the paper table shows it with an ellipsis). Check against the M26 ER PDF before publication.

## Contradictions with plan, bible or ledger

- **Plan's suggested £0.2m QCD in TEL's GY2 computation was not used as a story fact**: a TEL QCD would reduce TTP to £7.88m and CT to £1.97m, contradicting the ledger (TTP £8.08m; CT £2,020,000). Taught instead as a labelled hypothetical. No contradiction remains.
- **Associated companies wording**: the ledger's "GY2–GY4 10" is the divisor (count including the company itself); the chapter says TEL has **9 associated companies (divisor 10)**, consistent with plan §6.3 ("each company's divisor is the count shown").
- **Law sheet 4 trap 18** says consortia are outside LCG; bible §3.1 corrects it (V). This chapter refers to Helmside consortium relief per the ledger; no conflict.
- No other contradictions found.
- **TPLC's surrender capped by the s 105(3A) profit-related threshold** (TCM's £825,000 CFC apportionment): TPLC ME surrender GY2 £5,475,000 (not £6.3m); TEL group relief £17.095m, TTP £8,905,000, CT £2,226,250. Resolved by continuity ruling R3.
- Production references in the reading edition ("ledger" source cells; "bible flag 55"). Resolved by continuity ruling R16.

## Pronunciation guide

| Written | Say it |
|---|---|
| Tarnmoor | TARN-moor |
| Marson v Morton | MAR-sun versus MOR-tun |
| Browne-Wilkinson | BROWN WIL-kin-sun |
| Eclipse | ih-KLIPS |
| Dextra | DEX-truh |
| McKnight v Sheppard | mik-NITE versus SHEP-erd |
| Hoffmann | HOFF-mun |
| ScottishPower | SKOT-ish POW-er |
| Ofgem (not used in script) | OFF-jem |
| Hesketh | HESS-keth |
| Calder | KAWL-der |
| Brackenwell | BRACK-un-well |
| Helmside | HELM-side |
| Vallaria | vuh-LAIR-ee-uh |
| I F R S two | eye eff ar ess two |
| ex gratia | ex GRAY-shuh |

## Bible update

**Cast (real cases introduced):**
- *Marson v Morton* (Ch D, 1986), Sir Nicolas Browne-Wilkinson V-C: badges of trade, question of fact, list not comprehensive. Status S. Ch 7.
- *Eclipse Film Partners No 35 LLP v HMRC* [2015] EWCA Civ 95 (17 February 2015): not trading; question for tribunal of fact; speculation an indication not essential; HMRC estimate £635m. Status S (multiple commentaries, citation consistent). Ch 7.
- *Macdonald v Dextra Accessories Ltd* [2005] UKHL 47 (7 July 2005): upgrade from S to **S+** (holding confirmed by several sources; potential emoluments, FA 1989 s 43(11); trustee loans). Ch 7.
- *McKnight v Sheppard* [1999] 1 WLR 1333; [1999] STC 669 (HL): fines not deductible; legal costs deductible; Lord Hoffmann on punishment. Status S (BIM37965 and commentary). Ch 7.
- *ScottishPower (SCPL) Ltd v HMRC* [2025] EWCA Civ 3: regulatory redress payments (~£28m) deductible; not penalties; UKSC/2025/0047 heard 18–19 May 2026, judgment reserved. Status V (citation) / S (detail). Ch 7. **Open thread: Supreme Court outcome.**
- *George Peters & Co Ltd v Smith*: payments as part of a bargain for sale of shares not within s 79 (per BIM47210). Status S. Ch 7 (signpost to ch 20).
- *RFC 2012* (recap) and *NCL* (cross-reference) as in bible.

**Glossary terms explained (ch 7):** tax-adjusted trading profit; employee benefit contribution; qualifying benefit; pension spreading (CCCP, CPCP, relevant excess); Part 12 relief; IFRS 2 charge; income not otherwise charged; tainted donation; badges of trade (company context); plus: augmented profits (recap), marginal rate (26.5% on the slice), long funding lease lessee deduction (finance charge cap).

**Established facts fixed (with source):**
- CTA 2009 s 79: extra payments on permanent cessation of a trade or part: allowed if deductible but for cessation, up to 3 × redundancy payment; payment after cessation treated as made on last day (legislation.gov.uk; BIM47210). V (search extract of statute).
- CTA 2009 s 1299: Case A (ordinary course of business / free advertising to public) and Case B (employees unless also for others and incidental). V.
- CTA 2009 s 1300 Case B: conspicuous advertisement; not food, drink, tobacco, exchangeable vouchers; ≤ £50 per person per AP (Treasury may amend). V.
- CTA 2009 s 1303: listed tax penalties and interest (incl. FA 2007 Sch 24, FA 2008 Sch 41, VAT penalties); absence from list does not make deductible (BIM42520). V/S.
- CTA 2010 s 105: s 99(1)(d)–(g) amounts surrenderable only above the surrendering company's profit-related threshold (gross profits plus CFC apportionments, periods ending on or after 20 March 2013); QCDs first. V. **Resolves bible flag 24.**

**Debates covered:** L9 (tax follows the accounts) touched via the checkpoint analogy and Part 12 v IFRS 2; public-policy limit on deductions (*McKnight* / *ScottishPower*) presented as being litigated, both sides stated, no verdict.

**Open threads:** created: ScottishPower UKSC outcome. Closed: none. Bible flag 20 partly resolved; 24 resolved; 55 still open.

## Ledger additions (new invented story facts fixed by chapter 7; all FY2026 law)

TEL, year ended 31 December GY2 (£000):
- Profit before tax **23,500**.
- Add-backs (total **20,000**): depreciation of plant and machinery **15,000**; depreciation of buildings **1,200**; cash LTIP vested 31 Dec GY2, paid **15 November GY3** (outside 9 months; deductible GY3) **1,400**; pension contributions accrued unpaid at 31 Dec GY2 (paid February GY3) **900**; IFRS 2 charge on TPLC options **1,100**; fine after a health and safety prosecution **250**; customer hospitality at a trade fair **50**; branded whisky gifts to customers **30**; legal fees on a planning appeal for a factory extension **70**.
- Deductions (total **1,500**): GY1 pension accrual paid January GY2 **600**; Part 12 relief on options exercised by TEL employees in GY2 **800**; accounting profit on disposal of old plant **100**.
- = tax-adjusted trading profit before CAs **42,000** (canonical); tax-EBITDA cross-check 42,000 + 12,000 = **54,000** (canonical).
- No-adjustment items: annual bonus **2,000** paid **31 March GY3**; staff party **120**; ERP costs **24,000** (ledger); specific trade debt impairment (no amount); legal costs of defending the prosecution (no amount).
- Pension contributions paid: GY1 **£11.0m**; GY2 **£11.5m** (no s 197 spreading). Accounts pension charge GY2 £11.8m. Contributions paid on the 22nd of the following month.
- TPLC option plan: not tax-advantaged; employees taxed on exercise. (No share price fixed.)
- QIPs: four of **£556,562.50** due 14 March, 14 June, 14 September, 14 December GY2 (amended by R3; was £505,000; on the full liability, R2; chapter 3 tells TEL's early-forecast underpayment).
- TPLC GY2 recharge income (£2.2m, ledger) characterised as **income not otherwise charged** (working assumption; flag 55).

Calder, 9-month AP to 31 December GY3: Dan's package paid **30 September GY3**, deductible in full in that AP: **£97,812** (statutory £9,012; holiday £3,800; PENP £25,000; ex gratia £60,000 incl. £10,000 pension contribution), excluding the legal fee (amount not fixed in TKS ledger). Fallback s 79 cap **£27,036**. Calder's MR limits for the 9-month AP (divisor 10): £3,750 / £18,750.

Labelled hypotheticals (NOT story facts): TEL £1.0m EBT contribution (£0.6m deductible GY2); pension spreading CPCP £1.0m / CCCP £2.6m (excess £1.5m; £1.6m now, £0.5m in each of next two periods); TEL £200,000 QCD (TTP £8,705,000, CT £2,176,250, saving £50,000; amended by R3, was £7.88m / £1.97m); LFL rentals £500,000 / finance charge £120,000; stand-alone company TTP £150,000, CT £36,000.
