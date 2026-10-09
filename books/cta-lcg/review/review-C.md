# Technical review C: chapters 11 to 14

Reviewer C, 9 October 2026. I reviewed the scripts, reading editions and notes for chapters 11 (intangibles and IP), 12 (loan relationships and derivatives), 13 (companies with investment business) and 14 (losses). I checked them against `writer-brief.md`, `ORCHESTRATOR-ADDENDUM.md`, `continuity-rulings.md` (R1 to R17), `calder-ledger.md`, law sheets 1 and 4, `exam-intel.md` and the v2 grid.

I used 19 WebSearch calls (standard mode). I re-ran every computation in Python (scratch file `scratchpad/review-C/calc.py`). Every story and worked-example figure agrees with the ledger and with R3, R4, R8, R9 and R13. I found no arithmetic errors.

**Overall verdict.** None of the four chapters contains a statement of wrong law. The batch-1 continuity rulings have been applied correctly:
- R3: the s 105(3A) threshold, £5,075,000 and £11,665,000.
- R4: s 408 and Calder's £6.0m credit.
- R6: no reg 6A election for TFL.
- R8: Brackenwell's losses are restricted under Part 14 Chapter 2.
- R13: the two arrangement fees.
- R16: no production words.

The main problems are:
- one LIKELY contradiction between chapters on how Chapter 2A ranks against Chapter 3;
- one missing core time limit (the s 45A claim);
- several citation and precision points.

Every grade matches the v2 grid. Every past-paper reference matches `exam-intel.md`.

Audio scans after the fixes: no digits, symbols, dashes, stray colons or unspaced acronyms. The only production-word hits are the ordinary phrase "cost ledger" in chapter 13, which R16 allows.

## Chapter 11: Intangible assets and IP

| # | Class | Location | Finding | Correction (applied) | Source |
|---|---|---|---|---|---|
| 11.1 | MINOR (flag resolved) | Reading, "The 6× cap" paragraph: "(The s 879O formula is an image on legislation.gov.uk; the rule is taken from s 879M's wording.)" | The formula can now be stated. RA = (A × N) ÷ B, where A is the qualifying IP spend, B is the relevant-asset spend and N = 6. If RA is below 1, each debit is multiplied by RA. The chapter's worked example 11.4 (0.8; £780,000) is **correct**. **Law sheet 1 §4's "A ÷ (B × N) < 1" is inverted**: it should read (A × N) ÷ B < 1. Bible flag 12 and the chapter's notes flag 2 are now resolved. | Stated RA, s 879M(3), s 879O(2) and (6), and HMRC's example (IP £1m, relevant asset £10m, RA 0.6). Example 11.4 row relabelled "RA = (A × 6) ÷ B"; key-rules row and references updated. | CIRD44086, CIRD44093 (gov.uk, search extracts); practitioner summary of s 879O(6) |
| 11.2 | MINOR | Reading "(about 15½ years for the whole cost)"; script "about fifteen and a half years" | 100 ÷ 6.5 = 15.4 years. | Changed to "just over 15 years" in both editions. | Python |
| 11.3 | MINOR | Reading references | Chapter 15A was inserted by FA 2019 Sch 9; the CIRD44000-series pages were missing from the references. | Added. | legislation.gov.uk FA 2019 Sch 9 (search extract); CIRD44075 |
| 11.4 | Confirmed, no change | Restriction 1 row (8 July 2015 to 31 March 2019, and chargeable in the 29 October 2018 to 31 March 2019 window) | Correct. | — | CIRD44075, CIRD44077, CIRD44078 |
| 11.5 | Confirmed, no change | s 782A (FA 2019 s 26; degroupings on or after 7 November 2018; SSE-qualifying share disposal; no onward-disposal arrangement; covers s 783) | Correct. | — | CIRD40570, CIRD40575 |
| 11.6 | Confirmed, no change | Royalty withholding under ITA 2007 s 906 and s 911; Patent Box formula using the small profits rate where TTP is charged at that rate | Matches law sheet 3 (V) and law sheet 1 §5 (V). | — | LS3; LS1 §5 |

## Chapter 12: Loan relationships and derivatives

| # | Class | Location | Finding | Correction (applied) | Source |
|---|---|---|---|---|---|
| 12.1 | MINOR | Script: "the exemption for wholly domestic transactions that applies from chargeable periods beginning on or after" | Brief §13 wording point: say "for", not "from". | Now reads "which applies for chargeable periods beginning on or after". | writer-brief §13 |
| 12.2 | MINOR | Reading table row "Automatic case"; script "H M R C's guidance identifies one main automatic case" | R6 says HMRC's list of automatic cases is wider: designated fair value hedges, hedges of fair-valued loan relationships, and avoidance cases. Where the hedged item is itself taxed in line with the accounts, the derivative follows profit or loss. The row read as a single case. | Row relabelled "Automatic cases (HMRC's guidance; not exhaustive)", with the wider list added. Script now says the list "is not closed". TFL conclusion unchanged. | R6; CFM57071, CFM57075 |
| 12.3 | Confirmed, no change | Opening and "Three cases in nine weeks" | *BlackRock* 11 April, *Kwik-Fit* 3 May and *JTI* 13 June 2024 are correct. The Supreme Court refused permission in all three, listed **13 October 2024**, so "October 2024" is correct. Kwik-Fit facts match the secondary reports: Speedy 1, about £48m of trapped deficits, 25 years cut to about 3, the advantage being the paying companies' deductions. JTI facts match: Joy Global, a $550m intra-group loan, debits surrendered as group relief. | — | supremecourt.uk PTA October 2024 list; ICLR; KPMG; Lexis, Weil and HLC summaries |
| 12.4 | Confirmed, no change | Past-paper references (M23 Q6, M24 Q6, N24 Q4, N23 Q3, N25 Q3, N25 Q4, M23 Q3) | All match exam-intel. | — | exam-intel §3 |

## Chapter 13: Companies with investment business

| # | Class | Location | Finding | Correction (applied) | Source |
|---|---|---|---|---|---|
| 13.1 | LIKELY | Reading, Effect paragraph: "Chapter 2A ... runs alongside"; script "Chapter two A of the same Part runs alongside for reliefs from periods beginning on or after the first of April, twenty seventeen" | This is misleading and contradicts chapter 14 and R8. Chapter 2A does **not** apply where Chapter 2 or Chapter 3 can apply (s 676AB). | Both editions now say Chapter 2A gives way where Chapter 3 (or Chapter 2) applies (s 676AB; CTM06775). | R8; CTM06775 |
| 13.2 | MINOR | Reading, Worked example 13.2: "a **loan relationship debit** (CTA 2009 s 307)" | The provision that brings fees and expenses into charge is s 306A; s 307 is the accounting-basis rule. | Changed to s 306A. | LS1 §2 (V) |
| 13.3 | MINOR | Script, Dawsongroup: "The flotation disappointed" | The notes' sources do not support this. It is invented scene detail about a real case (brief §4). | Deleted. | notes 13 (search 8) |
| 13.4 | MINOR | Script: "the accountants P w C" | Inconsistent spacing for TTS. | Changed to "P W C". | brief §7 |
| 13.5 | Confirmed, no change | *Centrica* (16 July 2024; panel; £2,529,697; trader's s 53 test); s 1222(4) exempt ABGH distributions; Part 14 Ch 3 (£1m and 125%, from FA 2014 s 37; 8-year window, formerly 6 per CTM06370's companion guidance) | Correct. | — | notes 13 sources; FA 2014 s 37 explanatory notes (search extract); HMRC manual extract on the s 677 periods |

## Chapter 14: Losses in the larger company

| # | Class | Location | Finding | Correction (applied) | Source |
|---|---|---|---|---|---|
| 14.1 | LIKELY (missing core rule) | Reading "Relief later, by carrying forward"; loss table; key rules; script; takeaway | The s 45A claim time limit was never stated, although the chapter's own Exam lens says to "show each claim separately with its time limit". The limit is 2 years after the end of the period in which the loss is used, or later if HMRC allows. | Added to both editions, the table, the key rules and the takeaway. | CTM04135 (search extract) |
| 14.2 | MINOR | Reading, s 45 and s 45B "automatic" | These losses are automatic, but since 2017 a company may claim not to use them in a period (same 2-year limit). | One-sentence parenthesis added (reading only). | CTM04135 |
| 14.3 | MINOR | Reading "(The window was 3 years for accounting periods ending before 1 April 2017: CTM06370.)" | The 5-year window applies only where **both** the change in ownership and the major change occur on or after 1 April 2017. | Added (CTM06370; F(No.2)A 2017 Sch 4 para 72). | CTM06370 (search extract) |
| 14.4 | MINOR | *Williams v Peeters Picture Frames Ltd* | HMRC (CTM06370) spells the name "Williams". Other reports give *Willis v Peeters Picture Frames Ltd* [1983] STC 453. The chapter's outcome (no major change, because the end customers were unchanged) matches. | Alternative citation added to the reading edition (two places). Script unchanged: it already says "the case it spells". | CTM06370; Irish TaxSource note on the case (search extract) |
| 14.5 | MINOR | *Ayerst*: script "a nineteen seventies case"; reading "50 TC 651, as cited by HMRC" | House of Lords, 21 May 1975, [1976] AC 167, 50 TC 651. | Both editions now give the court and year; the reading edition adds the AC citation. | swarb/vLex/Wikipedia summaries; CTM06030 |
| 14.6 | Confirmed, no change | Part 14B: APs beginning on or after 18 March 2015; covers s 45A losses; conditions A to E. FA 2014 s 37 inserted s 724A. Liquidation and administration periods; s 170(11). GAAS and nomination (R9). Brackenwell £8.6m (R8). Helmside £1.2m. TPLC £11,665,000 (R3). | Correct. | — | CTM07505 and CTM07545 (search extract); s 730F annotations; FA 2014 s 37 |

## Counts

| Chapter | ERROR | LIKELY | MINOR | Fixed |
|---|---|---|---|---|
| 11 | 0 | 0 | 3 | all |
| 12 | 0 | 0 | 2 | all |
| 13 | 0 | 1 | 3 | all |
| 14 | 0 | 1 | 4 | all |

Script word counts after the fixes, against targets of 7,000 / 8,500 / 5,500 / 8,000 (each ±10%):

| Chapter | Script | Reading edition |
|---|---|---|
| 11 | 7,398 | 7,920 |
| 12 | 8,532 | 9,370 |
| 13 | 6,025 (cap 6,050: little headroom) | 5,861 |
| 14 | 8,069 | 8,380 |

`ledger-check.py`: 132 checks, 0 failures.

## Needs orchestrator ruling

None. No canonical number changed.

For the research files (not my files): law sheet 1 §4's cap formula "A ÷ (B × N) < 1" should read "(A × N) ÷ B < 1", where A is the qualifying IP spend and B the relevant-asset spend (CIRD44093). Chapters 20 and 31, if they touch goodwill, should use the corrected form.

## Could not verify (left as written, labelled or secondary)

1. CTA 2010 s 105(3A): that the profit-related threshold applies "for surrender periods ending on or after 20 March 2013 (FA 2013)" (ch 13). The statute text was seen; the amending Act and date were not (the source is PwC via the ch 13 notes).
2. s 45F claim time limit of 2 years (ch 14): secondary commentary only. CTM04130's extract was cut short.
3. SI 2004/3256 reg 6 as amended: the list of automatic cases was not seen in the regulation text (R6 rests on HMRC guidance).
4. s 690 post-change period of 5 years (ch 13): HMRC's manual only, already labelled.
5. *JTI* "bolted on" at paras 81 to 83: law sheet V; searches did not surface the wording.
6. *Union Castle* £39.1m and the *Fidex* lead judge (not named in the text).
7. HMRC's September 2025 management expenses letter campaign: secondary, already labelled.
8. Patent Box small-claims threshold (£1m v £3m): not stated in the text, so no risk.
