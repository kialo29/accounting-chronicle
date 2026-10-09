# Technical review A: Prologue and chapters 1–5

Reviewer A, 9 October 2026. Scope: `00-prologue`, `01-one-company-or-many`, `02-where-corporate-tax-law-lives`, `03-returns-payments-enquiries`, `04-governance-anti-avoidance`, `05-tax-follows-the-accounts` (scripts, reading editions, notes). Read against `writer-brief.md`, `ORCHESTRATOR-ADDENDUM.md`, `continuity-rulings.md` (R1–R17), the law sheets (V items), `exam-intel.md` and `lcg-grid-extract-v2.txt`.

**Method.** Every rule, date and figure checked against the law sheets; 13 WebSearch calls (standard mode) on points not marked V or flagged by the writers (chapter 4's memory points first). All computations re-run in Python (scratch): ch 1 thresholds (£5,556 / £27,778 / £187,500 / £2,500,000 / £2,222,222); ch 2 loans (£25.8m; 78%; £250,000 compensating adjustment); ch 3 truing up (£9,375 + £18,750 + £4,687.50 = £32,812.50; penalty cap £65,625), refund surrender (£569,375; £142,343.75; £169,375; £30,208 − £16,917 = £13,291; months 19/16/13/10), 9-month thresholds (£112,500 / £1,500,000 / £750,000), TEL QIPs (4 × £456,562.50 = £1,826,250; £2,226,250); ch 4 UTT (£24m × 25% = £6m), Brackenwell losses (£8.6m × 25% = £2.15m); ch 5 provision (1.8m / 1.3m / 0.5m), change of basis (£400,000 → £100,000 → 4 × £25,000), lease spreading (6 years, £15,000), euro example (£4.0m, £1.0m), COAP patterns. All correct and consistent between editions and with the ledger. `ledger-check.py`: 132 checks, 0 failures (before and after fixes).

**Audio scans (brief §11).** No digits, symbols, dashes or stray colons in any script. Capital acronyms: only GAAR and DOTAS (permitted, declared). Spaced-letter acronyms not declared: "J T I" (prologue), "U K" (ch 2, 21 uses), "R and D" (ch 3), "F R S" (ch 5), "P A Y E" (ch 4); "plc" in ch 1 and ch 5 scripts. R16 scan: one production word, "exam-intel" in ch 3 reading. Word counts before fixes: P 2,116 (target 2,200); 1: 6,013 (5,500); 2: 5,890 (5,500); 3: 7,066 (7,000); 4: 7,608 (7,000); 5: 6,653 (6,500). All within ±10%.

Classification: **ERROR** = wrong law, number or fact; **LIKELY** = probably wrong or misleading; **MINOR** = style, clarity or audio slip.

---

## Prologue: One loan, two answers

| # | Class | Location | Finding | Correction | Source |
|---|---|---|---|---|---|
| P1 | MINOR | `00-prologue.txt`, "J T I came on the thirteenth of June" | Undeclared spaced acronym; the case name is never given in full in the script | "J T I Acquisition Company came on the thirteenth of June..." | Brief §7 (acronyms) |

Verified without change: *BlackRock* dates, courts, judges and outcomes (FTT 3 Nov 2020; UT 19 July 2022; CA 11 April 2024, Peter Jackson, Nugee, Falk LJJ; SC permission refused 13 October 2024); *Kwik-Fit* (3 May 2024) and *JTI* (13 June 2024) and the joint SC refusal; ss 441–442 wording; CIR start date and £2m de minimis; DPT replaced by UTPP; exam references (M23 Q3, M26 Q1, N24 Q5). Law sheet 1 §2 and §10 (V).

## Chapter 1: One company or many?

| # | Class | Location | Finding | Correction | Source |
|---|---|---|---|---|---|
| 1.1 | MINOR | Reading, matrix row "CFC control": "Legal, economic or accounting control; > 50% investment rule" | Garbled: there is no "> 50% investment rule". Economic control is > 50% of proceeds, income or assets; accounting control carries a 50% apportionment condition; the distinctive extra is the 40% joint-venture rule (s 371RC) | "Legal or economic control (> 50% of proceeds, income or assets on a winding up), accounting control (with a 50% condition), and the 40% joint-venture rule"; authority ss 371RB–371RE | LS5 A2 (V) |
| 1.2 | MINOR | Script, "including Vallaria, Marrovia and the dormant Pumps company" | Names a country (Marrovia) instead of the company | "including Tarnmoor Vallaria, Tarnmoor Capital and the dormant Pumps company" | Ch 1 reading (TVS, TCM) |
| 1.3 | MINOR | Script, "Tarnmoor plc" (3 places) | "plc" is an undeclared abbreviation for TTS (ch 4 uses "P L C") | First use: "Tarnmoor P L C, a public limited company,"; later "Tarnmoor P L C" | Brief §7 |

Verified without change: R1 and R3 figures (MR divisor 9; QIP divisor 8; Calder divisor 1, large, 4 × £187,500; very large one period later; TEL £2,633,750); group definitions (s 190 recovery uses the 51% group, s 190(13), LS2 V); SDLT 3-year clawback; SME thresholds; SAO UK-incorporation (R10); £100m international movements of capital; CbC and TP records commencement; pass rates and paper format (EI); N24 Q5 marks (4 + 3 + 6.5 + 3.5 + 3 = 20).

## Chapter 2: Where corporate tax law lives

| # | Class | Location | Finding | Correction | Source |
|---|---|---|---|---|---|
| 2.1 | MINOR | Reading, statute map, CTA 2009 row: "The charge (s 5)" | CTA 2009 s 2 is the charge to CT; s 5 is its territorial scope | "The charge (s 2) and its territorial scope (s 5)" | CTA 2009 Part 2 Ch 1 (statute structure; LS3 lists s 5 as territorial scope) |
| 2.2 | MINOR | Script, "U K" used 21 times, never declared | Undeclared spaced acronym | Declare at first use: "entered the law of the United Kingdom, the U K," | Brief §7 |

Verified without change: Royal Assent dates (TIOPA 18 March 2010; FA 2026 18 March 2026); seven Rewrite Acts; TIOPA ss 2, 5(2), 6; FA 2026 s 164, s 20(1A)–(1E), s 1140A references (the s 1140A "dynamic" point is properly labelled unconfirmed); *Fowler* [2020] UKSC 22; MLI 1 October 2018; *NCL*; *GDF Suez Teesside*; Find Case Law April 2022; *Cadbury Schweppes*; State aid dates; s 164A conditions, commencement and s 371SD(5A) (LS3, LS5 V); FA 2004 extension of TP to UK-to-UK; old s 1141 wording; commencement table.

## Chapter 3: Returns, payments and enquiries

| # | Class | Location | Finding | Correction | Source |
|---|---|---|---|---|---|
| 3.1 | ERROR | Script, "Counting the family": "once Calder joins, nine Tarnmoor companies count in Group Year One. Each has eight associates, so each company's divisor is nine. For a twelve month period that brings the large threshold down to £166,667 ... very large ... £2,222,222" | Presents divisor 9 and the £166,667 / £2,222,222 thresholds as the GY1 instalment thresholds, contradicting the next paragraphs, the reading edition and R1 (QIP divisor 8 in GY1; 9 only from GY2) | Reword: the divisor of nine applies to marginal relief at once; for instalments it arrives a year later, in GY2 | R1; CTM92530 |
| 3.2 | MINOR | Script, "a claim for the payable credit under enhanced R and D intensive support" | Undeclared abbreviation | "enhanced research and development intensive support" | Brief §7 |
| 3.3 | MINOR | Reading, "How the examiner tests it": "(exam-intel: compliance and governance in ...)" | Production word (R16) | "(compliance and governance appeared in ...)" | R16 |

Verified without change: QIP history and phasing (COM95005); very large regime (SI 2017/1072, APs from 1 April 2019); grace and de minimis; counting dates (R1); RDEC and QIPs (R2); truing-up arithmetic; reg 13 penalty (twice the interest); short-AP instalment dates (CTM92815); GPA (51%, same date); refund surrender (75%, same AP, notice before refund); enquiry windows (Sch 18 para 24); discovery 4/6/20; FA 2026 s 265 late-filing amounts and commencement; s 264; **QIP interest 6.25% / 3.50% from 29 December 2025 confirmed by search** (3.75% Bank Rate after 18 December 2025); late payment 7.75%, repayment 2.75% from 9 January 2026.

## Chapter 4: Governance and the anti-avoidance architecture

The writer's memory points were checked first.

| # | Class | Location | Finding | Correction | Source |
|---|---|---|---|---|---|
| 4.1 | ERROR | Reading "Avoidance, evasion and the disclosure rules": "*HMRC v AML Tax (UK) Ltd* [2022] UKFTT 174 (TC): the premium fee hallmark was not met where no premium fee was in fact paid"; script "the First-tier Tribunal held that the premium fee hallmark was not met where no such fee was in fact paid" | Outcome reversed. The FTT (Judge Popplewell, 29 April 2022) allowed HMRC's application: the premium fee hallmark **was** met, the arrangements were notifiable and AML was a promoter. The hallmark is hypothetical: it asks whether a promoter might reasonably be expected to obtain a premium fee, not whether one was paid (*Curzon*, *Hyrax*) | State the correct outcome and the hypothetical test | https://caselaw.nationalarchives.gov.uk/ukftt/tc/2022/174 (headnote); taxjournal "The DOTAS conundrum: lessons from Hyrax and Curzon" |
| 4.2 | LIKELY | Reading and script, GAAR: "Statutory indicators of abuse include income or profits for tax purposes significantly less than the economic amount, and deductions or losses significantly greater" | Incomplete: s 207(4) has a third indicator (a claim to repayment or credit of tax, including foreign tax, that has not been and is unlikely to be paid), and all three count **only if it is reasonable to assume the result was not anticipated when the provisions were enacted**. The qualifier is the point an examiner looks for | Add the third indicator and the "not anticipated" qualifier; cite s 207(4)–(5) | FA 2013 s 207 (legislation.gov.uk extract and explanatory notes via search) |
| 4.3 | LIKELY | Reading and script, APN: "No appeal against the notice" | Correct but incomplete in a way that misleads: the statutory remedy is **written representations within 90 days (s 222)** on whether the conditions were met or the amount is right; otherwise only judicial review (*Archer* [2019] EWCA Civ 1021: representations are the alternative remedy to exhaust first) | Add s 222 representations and judicial review | Search: Tax Journal and RPC on APN challenges; *R (Archer) v HMRC* [2019] EWCA Civ 1021 |
| 4.4 | MINOR | Reading, cases: "*Castlelaw (No 628) Ltd and Irene Douglas v HMRC* (FTT, 2020, TC07540) ... neutral citation not verified" | Citation now verified: [2020] UKFTT 34 (TC), 17 January 2020 (Judge Heidi Poon); both appeals dismissed, no reasonable excuse; the tribunal could not review HMRC's discretion but said HMRC should have considered it; HMRC then updated SAOG18850 | Insert citation and date; refine the outcome wording | BAILII TC07540; Ross Martin; Tax Journal case note (via search) |
| 4.5 | MINOR | Reading and script, tax strategy: "financial years beginning after 15 September 2016" | FA 2016 s 161: Sch 19 has effect where the financial year begins **on or after** the day the Act was passed (15 September 2016) | "beginning on or after 15 September 2016" | legislation.gov.uk FA 2016 s 161 (search extract) |
| 4.6 | MINOR | Reading and script, *Haworth*: "no real scope [script: no real room] for a reasonable person to disagree" | The Supreme Court's formulation is "no scope for a reasonable person to disagree" | Use the court's words | Burges Salmon, Devereux, HSF notes on [2021] UKSC 25 (via search) |
| 4.7 | MINOR | Reading and script, PCRT: "planning that is contrary to the clear intention of Parliament, or highly artificial or highly contrived and exploiting shortcomings" | Close, but the Standard for Tax Planning speaks of arrangements that "set out to achieve results that are contrary to the clear intention of Parliament" or are "highly artificial or highly contrived and seek to exploit shortcomings"; in force from 1 March 2017 | Tighten the paraphrase; add the start date in the reading edition | ICAEW PCRT Q&A; IFA and ACCA helpsheets (via search) |
| 4.8 | MINOR | Script, "P A Y E" | Undeclared spaced acronym | "pay as you earn" | Brief §7 |
| 4.9 | MINOR | Reading, references: "*WT Ramsay Ltd v IRC* [1982] AC 300 (HL, decided 1981)" | Verified: decided 12 March 1981 (reported 1982); text "(HL, 1981)" correct | Add the full date in the references | Search (Ramsay principle sources) |

Verified without change: CCO (CFA 2017 ss 44–52, 30 September 2017, s 46 dual criminality and UK nexus, six principles); SAO (UK incorporation, preceding-year and joiner logic per R10, deadlines, £5,000 penalties); UTT (two triggers, > £5m, para 18 exemption, deadline, £5,000 / £25,000 / £50,000, consultation not law); DOTAS 5 days and FA 2026 s 315 penalties (LS1 V); FN 30% / 20%; APN 90 days; GAAR stages, Panel, 60% penalty, 17 July 2013; Part 14B; *Thathiah* [2017] UKFTT 601 (TC); *Haworth* date and outcome; *RFC 2012* [2017] UKSC 45. Grades match the v2 grid (SAO, strategy, CCO 1; DOTAS, FN/APN, GAAR, avoidance v evasion, Part 14B 2; UTT, ADR 3).

## Chapter 5: Tax follows the accounts

| # | Class | Location | Finding | Correction | Source |
|---|---|---|---|---|---|
| 5.1 | ERROR | Reading: "Tarnmoor Finance Ltd hedges its £550m listed notes with an interest rate swap designated as a fair value hedge: chapter 12 applies the Disregard Regulations to it"; script: "the Disregard Regulations take certain fair value swings on hedging derivatives out of the computation ... it matters for our invented group's treasury company" | Contradicts R6 and chapter 12: TFL has made no reg 6A election; since 2015 regs 7–9 apply only by election or in HMRC's automatic cases; on HMRC's guidance the swap follows profit or loss | Restate per R6 in both editions; qualify the table row "Disregard Regulations regs 6–9" | R6; CFM57075 |
| 5.2 | LIKELY | Reading, after the restructuring example: "Dan Hartley's package (statutory £9,012; holiday pay £3,800; ex gratia £60,000 ...; PENP £25,000) ... is part of the redundancy line" | R15: the holiday pay of £3,800 is ordinary pay, not part of the £1.2m redundancy and notice element | Remove holiday pay from the list and say it is ordinary pay | R15 |
| 5.3 | MINOR | Script, "numbered F R S one hundred to one hundred and five" | "F R S" not declared | "the Financial Reporting Standards, or F R S, numbered one hundred to one hundred and five" | Brief §7 |
| 5.4 | MINOR | Script, "Tarnmoor plc" | As 1.3 | "Tarnmoor P L C" | Brief §7 |

Verified without change: s 46(1)–(2); s 1127; s 996; Part 20 list including s 1301B and s 1305B (LS4 V; FA 2026 s 63, APs from 26 November 2025); *NCL* panel and quote (press summary, para [56]); *Odeon*, *Gallagher*, *Britannia Airways* (BIM31095, BIM46550); *GDF Suez*; *Union Castle*; Ch 14 mechanics (ss 180–187); R14 instalment dates; restructuring provision per R15; FRS 102 periodic review (1 January 2026); FA 2019 Sch 14 spreading; CTA 2010 ss 5–17.

---

## Needs orchestrator ruling

None. No correction changes a canonical story number.

## Could not verify (left as labelled in the text)

1. COAP own-credit spreading pattern (40/25/15/10/10) and reg 3A text (ch 5): HMRC manual only; amended SI not on legislation.gov.uk. Labelled [S].
2. *GDF Suez Teesside*: the subsidiary's jurisdiction and judges (ch 5): not re-opened. Labelled via law sheet.
3. CTA 2010 s 1140A: whether its OECD reference is dynamic (ch 2): still unconfirmed; the text says so.
4. SI 1998/3175 reg 3 as amended (counting date for QIP associates, chapters 1 and 3): taught as HMRC's reading (R1); still unseen.
5. Trial date for the first CCO prosecution (ch 4): from reports, labelled as allegations.
6. *Britannia Airways* "17,000 hours" (ch 5): HMRC manual extract only.

Sources (search extracts relied on): https://www.legislation.gov.uk/ukpga/2013/29/section/207 ; https://caselaw.nationalarchives.gov.uk/ukftt/tc/2022/174 ; https://www.taxjournal.com/articles/the-dotas-conundrum-lessons-from-hyrax-and-curzon ; https://www.bailii.org/uk/cases/UKFTT/TC/2020/TC07540.html ; https://rossmartin.co.uk/sme-tax-news/5450-hmrc-updates-sao-manual-following-ftt-decision ; https://www.gov.uk/hmrc-internal-manuals/senior-accounting-officers-guidance/saog18850 ; https://www.legislation.gov.uk/ukpga/2016/24/section/161 ; https://www.burges-salmon.com/articles/102h2o0/the-supreme-court-restricts-the-use-of-follower-notices-by-hmrc ; https://www.taxjournal.com/articles/apns-can-taxpayers-avoid-immediate-obligation-pay-10062015 ; https://www.rpclegal.com/thinking/tax-take/rowe-and-vital-nut-court-of-appeal-delivers-its-judgments-in-apn-judicial-review-challenge/ ; https://www.icaew.com/technical/tax/pcrt/pcrt-q-a ; https://rossmartin.co.uk/sme-tax-news/8772-hmrcs-interest-rate-decreases-again ; https://www.taxjournal.com/articles/hmrc-interest-rates-updated-following-base-rate-cut ; https://www.supremecourt.uk/press-summary/uksc-2020-0125.html ; https://en.wikipedia.org/wiki/Ramsay_principle .

## Summary of counts

| Chapter | ERROR | LIKELY | MINOR | Fixed |
|---|---|---|---|---|
| Prologue | 0 | 0 | 1 | all |
| 1 | 0 | 0 | 3 | all |
| 2 | 0 | 0 | 2 | all |
| 3 | 1 | 0 | 2 | all |
| 4 | 1 | 2 | 6 | all |
| 5 | 1 | 1 | 2 | all |
