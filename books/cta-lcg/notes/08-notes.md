# Notes: Chapter 8, Plant and machinery for larger companies

**Interpretation and assumptions (one line).** Chapter 8 teaches CAA 2001 Part 2 plant and machinery allowances at AT depth for FY2026 (FA 2026: 14% WDA, 40% FYA), built around TEL's canonical GY2 allowances (£16.0m) and Calder's GY3 sale of plant to TVS (special balancing charge split fixed here); SBA, fixtures, LFLs, successions and R&D allowances are only signposted (chapters 9 and 10).

**Files.** `chapters/08-plant-and-machinery.txt` (script, 8,120 words by `wc -w`; target 7,500 ± 10%); `chapters/08-plant-and-machinery-reading.md` (reading edition, 8,010 words). Computations: `/tmp/claude-0/-home-user-accounting-chronicle/7222567c-185b-51e3-b4bc-bb4854026617/scratchpad/lcg-ch08/calc.py` (all figures re-run; `ledger-check.py`: 96 checks, 0 failures; no canonical number changed).

---

## Sources by section

Research files (opened): `book-plan.md` §0, §3, §5 (ch 7–9), §6, §11; `calder-ledger.md` (all); `book-bible.md` §3.1–3.5, §3.16, §4.1, §5.2, §6; `research/law-sheet-2-gains-reorgs-ca-stamp.md` §14.1–14.4, §16, §17 (teaching notes and traps 16–24); `research/law-sheet-1-ct-core.md` (tax-EBITDA excludes CAs, line 314); `research/law-sheet-4-accounting-misc.md` (LFL lessee, deferred tax, s 1233); `research/exam-intel.md` §1, §3 (M23–M26 tables, synthesis, examiner messages); `research/lcg-grid-extract-v2.txt` p7 (CA rows). TKS files not available (addendum); TKS recap kept to bible §4.1 (TKS ch 12 content list).

WebFetch not used (broken). **WebSearch: 12 calls (budget 12), all `mode: standard`:**

1. `"Capital Allowances Act 2001" section 51C "only one annual investment allowance" group of companies financial year parent undertaking` → https://www.legislation.gov.uk/ukpga/2001/2/section/51C ; https://www.legislation.gov.uk/ukpga/2001/2/section/51D/data.htm ; https://www.icas.com/landing/tax/annual-investment-allowance-to-share-or-not-to-share . Relied on: single AIA for parent undertaking and subsidiaries for chargeable periods ending in the financial year; parent status tested at the end of the subsidiary's chargeable period; CA 2006 s 1162 meaning; allocation as they think fit.
2. `"Capital Allowances Act 2001" section 59A ... relevant proportion ...` → https://www.legislation.gov.uk/ukpga/2001/2/chapter/5/crossheading/special-balancing-charge-in-cases-of-temporary-full-expensing-etc/2024-04-06/data.htm ; https://www.legislation.gov.uk/ukpga/2001/2/section/59B?view=plain ; https://www.legislation.gov.uk/ukpga/2001/2/section/59C/data.html ; https://www.gov.uk/government/publications/capital-allowances-full-expensing/... Relied on: s 59A relevant proportion (FE expenditure ÷ total expenditure subject to any FYA or allocated to a pool, as amended by FA 2024); s 59B halves the numerator; TDR reduced by the charge; s 59C main-purpose anti-avoidance.
3. `full expensing made permanent Autumn Statement 22 November 2023 Finance Act 2024 ...` → https://www.gov.uk/government/publications/capital-allowances-permanent-full-expensing/capital-allowances-permanent-full-expensing-for-companies-investing-in-plant-and-machinery (22 November 2023; uncapped; cars, leasing, second-hand excluded); Deloitte, Bishop Fleming (secondary: Finance Bill 2023-24 → FA 2024).
4. `policy paper "Capital allowances: new first-year allowance and reducing main rate writing-down allowances" ...` → https://www.gov.uk/government/publications/new-first-year-allowance-and-main-rate-of-writing-down-allowances/capital-allowances-new-first-year-allowance-and-reducing-main-rate-writing-down-allowances (26 November 2025; 18% → 14%; 40% FYA for leasing and unincorporated businesses; affected: historic pools, non-FYA spend); Deloitte Taxscape (6 April 2026 for income tax: secondary).
5. `"Capital Allowances Act 2001" section 247 ... section 248 "property business"` → https://www.legislation.gov.uk/ukpga/2001/2/section/247/data.html ; https://www.legislation.gov.uk/ukpga/2001/2/part/2/chapter/19/2020-12-31 . Relied on: trade (s 247) and property business (s 248) allowances as expenses, charges as receipts. **Resolves bible §5.2 flag 29 (s 247 part).**
6. `company capital allowances claim "Schedule 18" Finance Act 1998 paragraph 82 ...` → https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca11140 ; https://legislation.gov.uk/ukpga/1998/36/schedule/18/part/IX/enacted ; https://www.gov.uk/hmrc-internal-manuals/cotax-manual/com53010 . Relied on: claims made/amended/withdrawn only by amending the return (para 81); para 82 time limits (first anniversary of filing date; 30 days after enquiry completion); CA11140 "in practice usually 2 years after the end of the AP".
7. `"Capital Allowances Act 2001" section 5 "unconditional" "more than 4 months" ...` → https://www.legislation.gov.uk/ukpga/2001/2/section/5 ; https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca11800 (s 5(1)–(4)).
8. `HMRC capital allowances manual private use by employee or director company ...` → https://gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca27100 ; https://www.gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca27500 . Relied on: CA27100 (asset provided as part of remuneration accepted as for the qualifying activity; claim accepted; *G H Chambers (Northiam Farms) Ltd v Watmough* for blatant incongruity). **Resolves bible §5.2 flag 32 as HMRC's view.**
9. `"Corporation Tax Act 2009" section 815 election computer software ...` → https://legislation.gov.uk/ukpga/2009/4/section/815/enacted?view=plain ; https://www.gov.uk/hmrc-internal-manuals/corporate-intangibles-research-and-development-manual/cird25180 ; /cird25140 . Relied on: s 813 hardware-bundled software outside Part 8; s 815 election (writing, 2 years after the AP, irrevocable, per CIRD25180).
10. `"Dundas Heritable" Upper Tribunal 2019 UKUT ...` → https://www.gov.uk/tax-and-chancery-tribunal-decisions/the-commissioners-for-hm-revenue-and-customs-v-dundas-heritable-limited-2019-ukut-0208-tcc ; https://assets.publishing.service.gov.uk/media/5d1b54b640f0b609e0f06b25/HMRC_v_Dundas_Heritable_Ltd.pdf ; Tax Journal; Ross Martin. Relied on: [2019] UKUT 208 (TCC), decided 2 July 2019; pub/bar company; returns for years to 31 March 2012 and 2013 filed 3 February 2015 and 26 November 2015; enquiries opened in time cured the late claims; HMRC's appeal dismissed.
11. `Spring Budget 15 March 2023 full expensing announced replaces super-deduction ...` → https://gov.uk/government/publications/full-expensing/spring-budget-2023-full-expensing ; https://www.gov.uk/government/publications/spring-budget-2023-factsheet-cutting-simplifying-tax-for-businesses-to-invest-and-grow/... (1 April 2023 to 31 March 2026; built on the super-deduction); date 15 March 2023 from the Mortgage Solutions URL date (secondary).
12. `CA11800 capital expenditure incurred "four months" ...` → https://gov.uk/hmrc-internal-manuals/capital-allowances-manual/ca11800 ; https://www.legislation.gov.uk/ukpga/2001/2/section/5 . Relied on: s 5(5) more than 4 months → due date; s 5(4) one-month rule (ownership by period end); s 5(6) anti-acceleration.

Law-sheet **V** items restated without new search: s 45S/45T/46/52 (FE and 50%); s 45U/45V/46(4B)–(4C) (40% FYA; GOV.UK balance to main pool); FA 2026 s 28 hybrid formula and examples (re-computed in Python); s 104A/104D; s 33A list (partly read); ss 38A, 51A–51E; s 52A; ss 83–86; ss 90–102; s 104AA, s 268A; ss 71–72; s 67 (incl. (2A)–(2C)); s 70; ss 205–208, 269; ss 234–240; s 253 with CTA 2009 s 1233; ss 214, 217, 218; CTA 2010 s 948; TIOPA s 407 (LS1). R items: zero-emission car FYA to 31 March 2027 (FA 2026 s 30); small pools £1,000; CGS thresholds from 29 July 2026 (SI 2026/765).

---

## Fact-check flags

1. **s 51C "financial year"**: the search extract confirmed the single AIA for chargeable periods ending in a financial year and the end-of-subsidiary's-period parent test, but not which company's financial year (I assumed the parent's Companies Act financial year, i.e. TPLC's calendar year). The Calder consequences (pre-acquisition year outside; two Calder periods ending in GY3 sharing one AIA) depend on it. **Partly verified; check s 51C(5)–(7) text.**
2. **Short-period WDA reduction (s 56(3)) and AIA proportioning**: AIA proportioning is V (law sheet); the WDA reduction (Calder's 9-month 10.5%) is from statute knowledge, not re-opened. **UNVERIFIED (not searched; standard rule).**
3. **Partial FYA claims (s 52(4)) and unclaimed balance to pool**: stated in both editions; not re-opened. **UNVERIFIED (standard rule).**
4. **s 45T "disqualifying arrangements"** paraphrased as "broadly arrangements with a main purpose of securing the allowance": text not opened. Labelled "broadly". **UNVERIFIED wording.**
5. **s 269 business entertainment**: "includes hospitality of any kind" and the hospitality-trade exception paraphrased; the staff-hospitality "incidental" qualification deliberately omitted (not verified). Directors as employees (s 269(5)) V.
6. **s 13**: deemed amount (market value or lower cost) deliberately not stated (not verified); only "deemed expenditure, no FYA" taught (s 46 exclusion 8 V).
7. **Full expensing legislative origin**: s 45S as F(No.2)A 2023 inferred from the ss 59A–59C amendment notes; FA 2024 removal of the end date from secondary sources (Bishop Fleming) plus the policy paper. **S.**
8. **Spring Budget 2023 date (15 March 2023)**: secondary (dated URL). **S.**
9. **Income tax commencement of 14% (6 April 2026)**: secondary (Deloitte). **S.**
10. ***G H Chambers (Northiam Farms) Ltd v Watmough***: named only as cited in CA27100; no citation given. **Citation UNVERIFIED.**
11. **HP interest relief route** (trading deduction or loan relationship debit) not specified: script says only "a finance cost, relieved as such".
12. **Software FYA eligibility**: I removed a draft claim that elected software "can compete for the first-year allowances"; not verified.
13. **s 948 and s 59A**: whether a Part 22 Ch 1 transfer carries each asset's s 59A history is labelled "confirm on the facts" (reading edition Going further). **UNVERIFIED.**
14. **AIA for a target acquired just before its year end** sharing the group AIA for pre-acquisition spending: derived from the s 51C test date (reading edition only). **Derived.**
15. **CGS threshold changes (29 July 2026; computers removed)**: R (bible §3.5); not re-opened.
16. **Integral features list**: only items in the law sheet's partial read used (electrical and lighting, cold water, heating, air cooling); lifts, escalators, solar shading not mentioned.
17. **Exam grid**: built on the 2026 grid; **check the 2027 grid and 2027 tax tables** (the 2026 tables show 18%; FA 2026 = 14% and 40% FYA). Grade changes would not alter this chapter's content except if VAT adjustments moved.

**Bible §5.2 flags touched:** 19 (LFL lessee FYA): not used, left to chapter 9 (still open). 29 (s 247): **resolved** (s 247/248 confirmed); allowance buying left to chapter 9 (open). 32 (company private use): **resolved as HMRC's view** (CA27100). 26 (CAA balancing charge in an exit plan): not touched.

---

## Contradictions with plan, bible or ledger

- **Ledger GY2 "The group AIA is allocated to Calder and TES (TEL needs none)".** Kept the allocation, but TEL does have AIA-eligible spend (its £0.5m second-hand milling line). The chapter presents TEL's nil allocation as a choice: Calder's second-hand plant competes on equal terms and Calder's period ends nine months earlier, so its relief reduces earlier instalments. Suggest the ledger wording "TEL gets none (its second-hand plant ranks behind Calder's)".
- No other contradictions. TEL's £16.0000m total, pools and c/f balances match the ledger exactly.

---

## Pronunciation guide

| Written | Say it |
|---|---|
| Tarnmoor | TARN-moor |
| Calder | KAWL-der |
| Vallaria | vuh-LAIR-ee-uh |
| Tom Hesketh | tom HESS-keth |
| Dundas Heritable | dun-DASS HER-it-uh-bul |
| Northiam | NOR-thee-um |
| Watmough | WOT-moh (uncertain; alternatively WAT-muff) |
| G H Chambers | jee aitch CHAME-berz |
| E B I T D A | spelled letter by letter |
| chillers | CHILL-erz |

---

## Bible update

**Cast introduced (real cases):**
- *HMRC v Dundas Heritable Ltd* [2019] UKUT 208 (TCC) (Upper Tribunal, 2 July 2019): late CA claims in late returns cured by HMRC opening enquiries (FA 1998 Sch 18 para 82 enquiry limb). Chapter 8. Status V (GOV.UK tribunal decisions page; secondary summaries).
- *G H Chambers (Northiam Farms) Ltd v Watmough*: cited by HMRC (CA27100) for restricting allowances on assets of personal choice. Chapter 8. Citation U.

**Invented facts fixed (see ledger additions).**

**Glossary terms explained (owner chapter 8):** full expensing; special rate FYA (50%); special balancing charge; 40% first-year allowance; hybrid rate; AIA group sharing (s 51C single AIA, parent test at end of subsidiary's period); long-life asset (25 years; £100,000 ÷ (1 + associates); all or nothing); short-life asset (recap: 2-year election, 8-year cut-off); hire purchase (CA: s 67 deemed ownership; capital element when brought into use); business entertainment use (s 269). Also explained: qualifying activity; qualifying expenditure; s 5 timing (unconditional obligation; 1-month; 4-month; anti-acceleration); software election (CTA 2009 s 815).

**Established facts fixed (with source):**
- FA 2026 hybrid examples re-computed: 14.99% / 16.00% (15.9945) / 17.01% (17.0027); £1m pool at 14.99% = £149,900.
- s 59A relevant proportion denominator = total expenditure subject to that or any other FYA or allocated to a pool (FA 2024 amendment); s 59C anti-avoidance (legislation.gov.uk via search).
- Full expensing timeline: Spring Budget 2023 (1 April 2023–31 March 2026); permanent from the Autumn Statement 22 November 2023 (FA 2024); 40% FYA and 14% announced at Budget 26 November 2025 (policy paper).
- s 5(5): more than 4 months → incurred on the due date (CA11800).
- CA claims: para 81 (amend the return), para 82 limits; CA11140.
- CA27100: company's claim on assets provided to employees is accepted (HMRC's view).

**Debates covered:** policy of generous FYAs versus a cut WDA on historic pools (policy paper); HMRC view on employee-use assets (personal choice limit).

**Open threads:** chapter 9 should (a) give TES's £0.4m s 198 fixtures the GY2 AIA (this chapter's allocation) and (b) settle the LFL lessee FYA point (flag 19). Chapter 10 / 7 should keep Calder's £0.6m AIA (year to 31 March GY2) inside the ledger's £1.8m CAs for that AP. Chapter 11/27: the £1.4m plant DV split below.

---

## Ledger additions (for `calder-ledger.md` §8)

| Fact | Value |
|---|---|
| TEL GY2 purchases (descriptions) | £9.0m new machining centres (FE); £1.2m new chillers and test-hall electrical systems (special rate, 50% FYA); £0.8m new test rigs hired to UK utility customers on two-year hires (40% FYA; TEL as lessor keeps allowances); £0.5m second-hand milling line from an unconnected competitor closing a site (main pool, no AIA); £0.3m disposal proceeds of old plant never fully expensed |
| TEL GY2 pools c/f (ledger-consistent) | Main pool £34,554,800; special rate pool £6,204,000 |
| Group AIA, GY2 | £1,000,000: TES £400,000 (office fixtures acquired GY2, not new); Calder £600,000 (second-hand plant, AP to 31 March GY2); TEL nil |
| Calder AIA, AP to 31 March GY1 | Own £1m AIA (pre-acquisition period; outside the group) |
| Calder GY3 sale of plant to TVS (1 October GY3), DV £1.4m | FE machines DV £900,000 → s 59A charge £900,000; long-life heavy test bed (50% FYA) DV £200,000 → s 59B charge £100,000 and £100,000 off the special rate pool; older main-pool plant DV £300,000 → main pool deduction. Total special balancing charges **£1,000,000** (CT at 25% £250,000) in Calder's 9-month AP to 31 December GY3; each DV below original cost |
| Calder 9-month AP | WDA rate 10.5% (9/12 × 14%); AIA cap £750,000; both Calder periods ending in GY3 share the GY3 group AIA |
| Hypotheticals (not story facts) | £500,000 split machine (AIA £200,000 / FE £300,000; DV £250,000 → charge £150,000, pool £100,000); £300,000 30-year furnace (LLA limit £10,000 in GY2); £40,000 120g/km car (WDA £2,400); hospitality launch (40 of 60 days customer use) |
