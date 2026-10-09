# Notes: Chapter 1, "One company or many?"

**Interpretation and assumptions.** Chapter 1 is the set-up chapter: separate entity principle, a group-definitions matrix and a threshold ladder (both owned here), the misconception "the consolidated tax charge is the group's tax bill", who does the work (tax function, SAO, board, auditors, HMRC LB/CCMs, specialists), Tarnmoor introduced at 1 April GY1 with Calder's acquisition and Dan's first appearance, and a brief paper map (chapter 32 owns craft). All regime detail is signposted to later chapters. FY2026 law; Group Years only. TKS files were not available: TKS recaps are limited to what the bible and ledger record (Calder's TKS ch 5 figures; *Salomon* as told in TKS ch 20; the "family of wallets" analogy from TKS ch 24; Dan in TKS chs 8–10).

**Files.** Script `chapters/01-one-company-or-many.txt` (5,762 words; target 5,500 ±10%). Reading edition `chapters/01-one-company-or-many-reading.md` (6,371 words). Scratch computations: `/tmp/claude-0/-home-user-accounting-chronicle/7222567c-185b-51e3-b4bc-bb4854026617/scratchpad/lcg-ch01/calc.py`.

---

## Sources by section

**Research files opened (9 October 2026):** `writer-brief.md`, `ORCHESTRATOR-ADDENDUM.md`, `book-plan.md` §0–§6, §11 and the chapter 1 brief; `calder-ledger.md` (all); `book-bible.md` §1, §3.1–3.6, §3.9–3.14 (grep), §4, §5, §6; `research/exam-intel.md` (§0–§5, synthesis, traps); `research/law-sheet-1-ct-core.md` §0, §1, §7, §8; `research/law-sheet-2-gains-reorgs-ca-stamp.md` §8, §12, §15 (group tests); `research/law-sheet-3-international.md` §10; `research/law-sheet-5-cfc-tp-hybrids-migration.md` A2, A7, B1–B3, B7; `research/lcg-grid-extract-v2.txt`.

**WebSearch (8 of 12 used; WebFetch not used per addendum):**
1. `CTM92520 very large companies £20 million threshold divided associated companies quarterly instalment payments` → https://www.gov.uk/hmrc-internal-manuals/company-taxation-manual/ctm92520 ; https://www.gov.uk/hmrc-internal-manuals/company-taxation-manual/ctm92800 ; ICAEW taxguide 02/23 (secondary). Relied on: very large > £20m for APs beginning on or after 1 April 2019 (SI 2017/1072); thresholds divided by associated companies from 2023 (replacing related 51% group companies); no year of grace for very large.
2. `"Corporation Tax (Instalment Payments) Regulations 1998" regulation 3 "associated companies" ...` → https://www.legislation.gov.uk/uksi/2017/1072/made ; COM95001 / COM30110 (HMRC Cotax manual). Relied on: £10m "becoming large" limit reduced by 51% companies (APs ending on or before 31 March 2023) / associated companies (after). Statutory text of reg 3 as amended **not** seen.
3. `HMRC Large Business directorate Customer Compliance Manager ...` → https://www.gov.uk/guidance/hm-revenue-and-customs-large-business ; https://www.gov.uk/government/publications/hmrc-annual-report-and-accounts-2025-to-2026-technical-notes/large-business-compliance-technical-note ; https://www.gov.uk/hmrc-internal-manuals/tax-compliance-risk-management/tcrm1000 ; SAOG16200. Relied on: LB works with around 2,000 of the largest businesses, most with turnover > £200m; each has a CCM; TCRM risk spectrum (low to high).
4. `"Salomon v A Salomon and Co Ltd" [1897] AC 22 House of Lords` → secondary pages (Wikipedia, law teaching sites). Relied on only for the citation [1897] AC 22 (HL) and the holding. The script says "decided by the House of Lords and reported in eighteen ninety seven" to avoid the decision-date discrepancy (sources give 16 November 1896 or 1897).
5. `TIOPA 2010 section 473 "worldwide group" "ultimate parent" ...` → https://gov.uk/hmrc-internal-manuals/corporate-finance-manual/cfm95330interestrestriction ; CFM95150 ; CFM95340. Relied on: worldwide group = ultimate parent + consolidated subsidiaries (IAS consolidation); definitions in Part 10 Ch 11 (s 473 ultimate parent; s 474 relevant entity).
6. `"... Country-by-Country Reporting) Regulations 2016" regulation 3 €750 million "previous period" ...` → https://www.legislation.gov.uk/uksi/2016/237/data.html (title only). Inconclusive on the measurement period (see flags).
7. `CTA 2010 section 151 group relief "75% subsidiary" "equity holder" ...` → https://www.legislation.gov.uk/ukpga/2010/4/section/151/data.html. Relied on: s 151(4) profits and assets tests; Ch 6 equity holders.
8. `CTA 2010 section 18E associated company control "passive" holding company dormant ...` → https://www.legislation.gov.uk/ukpga/2010/4/part/3A/crossheading/the-lower-limit-and-the-upper-limit ; ACCA In Practice February 2023 (secondary). Relied on: control by reference to ss 450–451; a company carrying on no trade or business ignored; s 18F passive holding company.

**Section-by-section sources**
- Opening / Meet Tarnmoor: ledger §1, §3, §4, §5, §7 GY1; plan §6; CIOT LCG page quote (exam-intel §1, V).
- Why one company stays one taxpayer: *Salomon* (search 4); FA 1965 (bible §9 timeline, V); bridges (LS1 §7; LS2 §8, §15, V).
- Tax charge misconception: ledger GY1 (TEL CT £2,427,500; Calder CT £750,000, RDEC £400,000); exam-intel synthesis (N25 Q1, M25 Q2, M24 Q2, M26 Q6).
- Group-definitions matrix: LS1 §7 (consortium s 153, ss 132–133, 143), §8 (GPAs s 59F; UTT 51% group; tax strategy 51% test); LS2 §8 (s 170 V; s 190(13) V; Sch 7AC para 26 V), §15 (FA 1930 s 42 V; FA 2003 Sch 7 V); LS1 §1 (CIR s 373); LS3 §10 (s 129 V); LS5 A2 (CFC control V), B2 (s 148 V), B3 (SME V/S), B7 (CbC, TP records V); searches 5, 7, 8; LS1 §8 (Sch 18 para 24 V).
- Threshold ladder: bible §3.2–3.4 (V); LS1 §1 (s 392(3) V), §7 (deductions allowance V), §8 (SAO, tax strategy, UTT V; FA 2026 ss 266–274 V); LS3 §8 (international movements of capital V); searches 1–3.
- Who does the work: search 3; LS1 §8 (SAO deadlines V); exam-intel §5 (LCG page quotes V).
- How the paper is built: exam-intel §1–§3 (all V; timing derived).

---

## Fact-check flags

1. **Resolved by continuity ruling R1** (QIP count taken on the day before the AP begins, CTM92530/COM95001; GY1 QIP divisor 8 for 31 December companies, Calder 1; text updated, see "Continuity fixes applied"). Original flag: **QIP divisor (bible §5.2 flag 6): partly resolved.** HMRC's manuals (CTM92520/CTM92800; COM95001 as summarised by search) say both the £1.5m and £20m thresholds, and the £10m first-year limit, are divided by associated companies for periods from 2023 (previously related 51% group companies). Very large companies have no year of grace. **The amended text of SI 1998/3175 reg 3 was not seen** (search returned only the as-made 1998 and 2017 SIs). The script labels this "H M R C's guidance says"; the reading edition marks the divisor as "guidance". Exact commencement wording (APs beginning or ending on or after 1 April 2023) not confirmed: the text says only "since twenty twenty three". Chapter 3 should verify reg 3 and the first-year rule.
2. **Contradiction with plan §5 chapter 1 brief:** the brief lists "51% for QIP associates". On current law (per HMRC guidance) QIP thresholds are divided by **associated companies** (control test), not related 51% group companies. Chapter written on the associated-company basis. For Tarnmoor the count is the same (9 in GY1) either way, so no ledger number changes. Note also that exam-intel's summary of the **N24 Q5 marking guide** says "thresholds divided by the 51% group companies": either the guide used the old wording or exam-intel paraphrased; the reading edition's Exam lens says only "thresholds divided across the group". Flag for chapter 3 and chapter 32.
3. **CbC measurement period UNVERIFIED** (search returned nothing conclusive): whether SI 2016/237 reg 3 tests €750m in the previous period or the current period. The chapter states only "€750m consolidated revenue". Chapter 27 to verify.
4. **HMRC terminology (plan [verify]): resolved.** "Large Business directorate", "Customer Compliance Manager", "around 2,000" businesses, "most businesses with turnover above £200m" (GOV.UK, search 3). The TCRM risk spectrum is stated generally ("from low to high"); the exact category labels were not verified and are not given.
5. ***Salomon* date:** sources disagree on 1896/1897 for the decision; the text uses only the report citation [1897] AC 22 and "reported in eighteen ninety seven". Secondary sources only (no Find Case Law entry for a 19th-century HL case).
6. **SAO and foreign-incorporated UK-resident companies:** the chapter states SAO applies to UK-incorporated companies (LS1 §8, V via SAOG11231), so TIL is outside it. Whether such a company's turnover counts in **aggregating** the £200m test was not checked and is not stated. Exam-intel's N23 Q5 note ("a Greek-incorporated but UK-resident company") suggests the examiners tested this; chapter 4 should read the N23 Q5 answer. Bible flag 16 (SAO "preceding financial year" for joiners): **still open**, signposted to chapter 4.
7. **Grid row count:** plan §4 says "about 120 graded rows, roughly 95 core". A Python count of `lcg-grid-extract-v2.txt` gives 138 graded rows (104 grade 1, 15 grade 2, 19 grade 3, plus one "70%" artefact). The chapter avoids a number ("most rows are core"). Recommend the plan's figure be corrected or explained (some rows are sub-rows or headings).
8. **Pillar Two threshold wording** (bible flag 37): the reading edition shows both "exceeds" (statute) and HMRC's "or more"; the script says "exceeds". Still open as a discrepancy, not resolved.
9. **TP SME thresholds** are from INTM412080 (secondary for the numbers; statute refers to the Commission Recommendation). Labelled S in the reading edition.
10. **"Since the associated company rules returned in twenty twenty three"**: associated companies returned with the small profits rate from 1 April 2023 (bible §3.2, V); the QIP link is guidance-based (flag 1).
11. **Story assumption added:** Tarnmoor's revenue has exceeded €750m "for years" before GY1, so Pillar Two applies from GY1 (the ledger gives no pre-story revenue). Labelled as an assumption in both editions.
12. **"Regional engineering business owned by one family"**: Calder's location is not fixed beyond "regional manufacturer" (TKS) and Dan's 28-mile commute; the chapter avoids naming a town or region. The Oldroyd family is named only in the reading edition table.
13. Group relief for "UK related" companies: definition (UK resident, or non-resident with a UK PE) is from TKS-level knowledge recorded in the bible (V, TKS); section number (s 134) deliberately not cited.
14. Consolidated tax charge / deferred tax explanation: general accounting principle, no figure relied on; chapter 6 owns detail.

**Bible §5.2 flags touched:** 6 (partly resolved, see 1); 16 (open, signposted); 37 (open); 1 (2027 grid: Exam lens tells Kian to check the 2027 grid; no grade change matters for this chapter).

---

## Contradictions with plan, bible or ledger

- Plan ch 1 brief "51% for QIP associates": superseded by associated companies (flag 2). Bible §3.3 already says "divided by associates": consistent with this chapter. Resolved by continuity ruling R17 (associated companies) and R1.
- GY1 QIP divisor 9 and Calder "very large overnight": Resolved by continuity ruling R1 (QIP divisor 8 for 31 December companies; Calder large in its first group AP, 4 × £187,500; very large one period later). Resolved by continuity ruling R2 (RDEC does not reduce QIPs).
- TEL GY1 CT £2,427,500: Resolved by continuity ruling R3 (£2,633,750 on TTP £10.535m).
- Plan §4 graded-row count (flag 7).
- None with the ledger: all story numbers used are ledger numbers (revenue £1,180m; €1,357m; divisor 9; £166,667 and £2,222,222; Calder £32m, TTP £3.0m, CT £750,000, RDEC £400,000, payable £350,000; TEL CT £2,427,500; ANTIE £24.65m; disallowance £2.21m; TFL notes interest £30.25m; Brackenwell count 10 and £2,000,000/£150,000; GY5–GY6 count 11; GY7 10). `ledger-check.py` re-run: 96 checks, 0 failures (not edited).

---

## Computations (Python, `calc.py`)

- 1,180 × 1.15 = 1,357.0 (€m); GY2–GY7: 1,449; 1,483.5; 1,518; 1,426; 1,391.5; 1,322.5 (ledger rounds to whole €m).
- Divisor 9: £1.5m/9 = £166,666.67 → £166,667; £20m/9 = £2,222,222.22 → £2,222,222; £50,000/9 = £5,555.56 → £5,556; £250,000/9 = £27,777.78 → £27,778. Divisor 10: £150,000; £2,000,000. Divisor 11: £136,364; £1,818,182.
- Stamp duty 0.5% × £32m = £160,000. Calder alone: £2.0m × 25% = £500,000 = 4 × £125,000. Calder GY1: £3.0m × 25% = £750,000; less RDEC £400,000 = £350,000. TEL: £9.71m × 25% = £2,427,500.
- Script numbers match the reading edition and ledger (checked by reading both after the final edit).

---

## Pronunciation guide

| Written | Say it |
|---|---|
| Tarnmoor | TARN-moor |
| Calder | KAWL-der |
| Oldroyd (reading edition only) | OLD-royd |
| Helmside | HELM-side |
| Greyfell | GRAY-fell |
| Northlight | NORTH-lite |
| Brackenwell | BRACK-un-well |
| Vallaria / Vallarian | vuh-LAIR-ee-uh / vuh-LAIR-ee-un |
| Marrovia / Marrovian | muh-ROH-vee-uh / muh-ROH-vee-un |
| Nadia Kerr | NAH-dee-uh KER |
| Tom Hesketh | tom HESS-keth |
| Graham Pike | GRAY-um pike |
| Salomon | SAL-uh-mun |
| Teesside | TEEZ-side |
| de minimis | day MIN-ih-mis |
| Pillar Two | PILL-er too |

---

## Bible update

**Cast introduced (real):** *Salomon v A Salomon and Co Ltd* [1897] AC 22 (HL): separate legal personality (recap of TKS ch 20); secondary sources only; decision date not stated.

**Invented facts fixed or used (first appearance):** Tarnmoor plc (Leeds; LSE main market; widely held, "pension funds, insurers and thousands of private investors" — new descriptive detail); Nadia Kerr, Tom Hesketh, Graham Pike, Dan Hartley introduced; Calder as "a regional engineering business owned by one family", 300 staff, £32m; Brackenwell named as "an invented sensor developer".

**Glossary terms explained (chapter 1):**
- *Larger company*: the book's working term (not statutory) for a company or group above one or more of the thresholds that switch on extra regimes.
- *Separate entity principle*: each company is a separate taxpayer computing, filing and paying its own CT; no group return.
- *Group (as a family of definitions)*: associated companies; 51% group; 75% group relief group; consortium; gains group; stamp duty/SDLT groups; worldwide group; Pillar Two and CbC consolidated groups; TP participation; CFC control; "group other than a small group".
- *Worldwide group* (introduced; full definition chapter 28): ultimate parent plus subsidiaries consolidated under international accounting standards (TIOPA 2010 Part 10 Ch 11; CFM95330).
- *Group tax function*: the in-house team that prepares and reviews company returns, instalments, TP documentation, CIR returns and the tax numbers in the accounts, and maps thresholds.
- *Threshold ladder*: the chapter 1 table of size thresholds (reading edition), reused by later chapters.
- *Customer Compliance Manager*: HMRC Large Business official assigned to each of the largest businesses.

**Established facts fixed (with source):**
- HMRC Large Business directorate works with around 2,000 of the UK's largest businesses, most with turnover above £200m; each has a CCM (GOV.UK, V).
- QIP thresholds divided by associated companies from 2023 (HMRC guidance; statute not seen: S/V-guidance).
- Very large companies: no first-year exception (HMRC guidance).
- Worldwide group definition (CFM95330, V-guidance; s 473 not opened).
- CTA 2010 s 151(4) equity holder tests (legislation.gov.uk extract, V).
- Associated companies: control (ss 450–451), dormant ignored, s 18F passive holding companies (legislation.gov.uk crossheading, V).

**Debates covered:** L1 (separate entity v single economic unit) introduced: the UK bridges rather than abandons the separate entity; CIR and Pillar Two as the move towards unit taxation.

**Open threads:** created: none new. Signposted: SAO for joiners (ch 4); QIP regulation text (ch 3); CbC measurement period (ch 27).

**Misconception tackled:** "The consolidated tax charge is the group's tax bill."

---

## Ledger additions (for `calder-ledger.md` §8)

- Tarnmoor's consolidated revenue exceeded €750m (at the assumed rate) in the accounting periods before GY1, so Pillar Two applies from GY1 (assumption; no pre-story figure fixed).
- Tarnmoor plc's shareholders: pension funds, insurers and private investors (descriptive only).
- Calder described as "owned by one family" (the Oldroyds) with "same 300 staff" on acquisition (consistent with ledger §5).
- Derived thresholds used: GY1 marginal relief limits per company £5,556 / £27,778 (divisor 9).

---

## Continuity fixes applied (9 October 2026)

All figures recomputed in Python (scratch `lcg-fix-ch01-02/calc.py`): £1.5m ÷ 8 = £187,500; £20m ÷ 8 = £2,500,000; £20m ÷ 9 = £2,222,222; £50,000 / £250,000 ÷ 9 = £5,556 / £27,778; ÷ 10 = £150,000 / £2,000,000; Calder £3.0m × 25% = £750,000 = 4 × £187,500; TEL £24.0m − £5.075m − £6.59m − £1.8m = £10.535m × 25% = £2,633,750. New word counts: script 6,013 (was 5,762; target 5,500 ±10%); reading edition 6,726 (was 6,371). Brief §11 scans clean; `ledger-check.py` 132 checks, 0 failures.

| Ruling | File | Before → after |
|---|---|---|
| R3 | script | TEL GY1 liability "about two point four three million pounds" → "about two point six three million pounds" |
| R3 | reading | TEL GY1 CT "£2,427,500 (TTP £9.71m × 25%)" → "£2,633,750 (TTP £10.535m × 25%)" |
| R1 | script | Associated companies paragraph: "So each company's thresholds are divided by nine..." → marginal relief counts a company associated at any time in the period, so limits divided by nine at once; instalment thresholds count on a different day |
| R1 | script | First rung: added "Its manuals count them on the day before the accounting period begins, not at any time in the period as for marginal relief" |
| R1 | script | "Now the instalment rung...": divisor nine, very large about £2.22m, large about £167,000 → marginal relief divisor nine at once; December companies counted on 31 December before GY1: divisor eight, large £187,500, very large £2,500,000 |
| R1, R2 | script | "Watch what that does to Calder...": "Calder is now very large, and pays in months three, six, nine and twelve" → counted on 31 March (no associates), divisor one, stays large, four instalments of £187,500 in months 7, 10, 13, 16; research credit does not reduce them (chapter 3); very large (divisor nine, about £2.22m) from its next period, "one period later" |
| R1 | script | Threshold map: "the count rises to ten, and every company's very large threshold falls to two million pounds" → marginal relief count ten at once; instalment count catches up from GY3 (£2,000,000 / £150,000 for a full year) |
| R1 | script | Joiner checklist: "now, as Calder does, must pay on another, earlier one" → "then, as Calder does from its second group period, have to pay on another, earlier one" |
| R1 | script | What to take away: "a divisor of nine ... very large threshold of about two point two two million ... large to very large overnight" → marginal relief divisor nine at once; instalment count on the day before each period; December companies divide by eight; Calder large in first group period, very large one period later |
| R1 | reading | "Applying the guest lists": "each company's thresholds are divided by 9" → marginal relief limits divided by 9 at once (associated at any time in the AP); QIP count on a different day; table header "Associated (divisor 9)" → "Associated (marginal relief divisor 9)" |
| R1 | reading | Ladder rows: marginal relief "(associated at any time in the AP)"; QIP rows "counted on the day before the AP begins", authority + CTM92530; first-year exception "not large in the previous period" → "previous 12 months" |
| R1 | reading | Exam lens traps: added "or counting on the wrong day (QIPs: the day before the AP begins; marginal relief: any time in the AP)" |
| R1 | reading | Worked example: "QIP thresholds for each Tarnmoor company in GY1 (divisor 9)" (£166,667 / £2,222,222 / £5,556 / £27,778) → "two counts" table: marginal relief divisor 9 (£5,556 / £27,778); QIP divisor 8 (£187,500 / £2,500,000), with the CTM92530/COM95001 explanation |
| R1, R2 | reading | "Calder before and after": associated 8 (divisor 9) → QIPs 0 (divisor 1) / marginal relief 8 (divisor 9); thresholds £166,667 / £2,222,222 → £1,500,000 / £20,000,000; status Very large → **Large** (no first-year exception); instalments "Months 3, 6, 9, 12" → months 7, 10, 13, 16: 4 × £187,500 (14 October GY1; 14 January, 14 April, 14 July GY2), RDEC does not reduce them (CIRD89870); follow-on sentence → very large one period later (divisor 9, £2,222,222) from AP beginning 1 April GY2 |
| R1 | reading | Threshold map bullets: Brackenwell "count rises to 10 and every company's very large threshold falls to £2,000,000 ... large £150,000" → "marginal relief count rises to 10 at once; the QIP thresholds fall to £2,000,000 / £150,000 from GY3"; "the count is 11 in GY5 and GY6 and 10 in GY7" → "the marginal relief count is 11 in GY5 and GY6 and 10 in GY7; the QIP count stays at 10". "51% vs associated" note in the matrix kept |
| R1 | reading | Joiner's checklist: "now on an earlier timetable" → "on an earlier timetable once the QIP count catches up (for Calder, one period later)" |
| R1 | reading | What to take away: "a divisor of 9, a very large threshold of £2,222,222, and Calder turned from large to very large overnight" → marginal relief divisor 9 (£5,556 / £27,778); QIP divisor 8 (£187,500 / £2,500,000); Calder large (divisor 1; 4 × £187,500 in months 7, 10, 13, 16), very large (divisor 9, £2,222,222) one period later |
| R1 | reading | Key rules rows: marginal relief "associates at any time in the AP"; QIP rows "associates on the day before the AP begins", + CTM92530; key figures row "Tarnmoor GY1 ... divisor 9; large £166,667; very large £2,222,222" → MR divisor 9; QIP divisor 8 (£187,500 / £2,500,000); Calder QIP divisor 1 (large: 4 × £187,500), very large from AP beginning 1 April GY2 (divisor 9; £2,222,222) |
| R1, R2 | reading | References: HMRC manuals + CTM92530, COM95001, CIRD89870 |
| R16 | both | Scanned for production words (ledger, continuity, bible, ruling, the plan, law sheet): no hits in chapter text (the two "brief" hits are ordinary English) |
| R1 | notes | Flag 1 marked resolved by R1; Contradictions lines added for R1, R2, R3, R17 |

Not changed: the "Computations" and "Contradictions … none with the ledger" paragraphs above record the original drafting position (TEL £2,427,500; divisor 9) and are superseded by this section.
