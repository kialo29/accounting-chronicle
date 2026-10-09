# Technical review D: chapters 15 to 21

Reviewer D, 9 October 2026. I reviewed the scripts, reading editions and notes for chapters 15 (group relief, consortia and JVs), 16 (company gains: property and leases), 17 (gains inside the group), 18 (shares, the SSE, reorganisations and earn-outs), 19 (reconstructions, demergers and distributions), 20 (buying and selling companies) and 21 (stamp taxes for groups). I checked them against:
- `writer-brief.md` and `ORCHESTRATOR-ADDENDUM.md`;
- `continuity-rulings.md` (R1 to R29) and the amended `calder-ledger.md`;
- law sheets 1, 2 and 4, `exam-intel.md` and the v2 grid.

**Searches and computations.** I used 16 WebSearch calls (standard mode), listed under "Sources" below. I re-ran every story and worked-example computation in Python (`scratchpad/reviewD/calc.py`). Every figure agrees across the script, the reading edition, the ledger and rulings R3, R19, R21 and R22. I found no arithmetic errors.

## Stage 0: continuity fixes applied (R18 to R29)

| Ruling | Fix | Files |
|---|---|---|
| R19 | Chapter 17, s 171A worked example: TES net gains GY3 changed from £351,200 + £300,000 = £651,200 to £189,000 + £300,000 = **£489,000**. The change is in the reading edition (worked example and key figures table) and in the script ("four hundred and eighty nine thousand pounds"). Chapter 16 notes flag 1 is marked "adopted by R19". | 17 (both editions, notes); 16 notes |
| R21 | Chapter 15 is the source of this ruling. Contradiction 1 in its notes is marked "adopted by R21". A grep confirms that chapter 18 never uses £585,000. | 15 notes; 18 checked |
| R22 | Chapter 20 script, "What to take away": "joined fifty three point five million pounds of exempt proceeds" changed to "was added to the consideration, making fifty three point five million pounds, all of it exempt". Flag 1 is marked resolved in the notes for chapters 20 and 21. | 20 script and notes; 21 notes |
| R24 | Chapter 19 is the source of this ruling. Flag 1 in its notes is marked resolved. | 19 notes |
| R27 | Contradictions 3 and 4 in the chapter 15 notes are marked "already fixed (R27)". | 15 notes |
| R28 | Point 3 (*Marren v Ingles*): chapter 18 now says "the House of Lords held" (applied in Stage 2, item 18.1). Point 6 (s 171A history): chapter 17 is already correct. | 18, 17 |
| R29 | Checked, and already consistent in chapters 15–21: BSL joins on completion; no £150,000 "cash saving"; TAL's thresholds £125,000 / £1,666,667 / £833,333; the depot let to TEL; no arrangements at the 1 February GY6 hive-down (but see 19.1); Coldwater's main SSE; Helmside base cost £16.0m. | all |

Each of the seven notes files now has a "Continuity fixes applied (R18–R29; reviewer D)" section.

## Chapter 15: Group relief, consortia and joint ventures

| # | Class | Location | Finding | Correction (applied) | Source |
|---|---|---|---|---|---|
| 15.1 | LIKELY | Reading, "Relief up, and relief down", **Down** paragraph: "...the consortium company's available total profits for the overlapping period (s 143)" | The wrong section is cited. s 143 limits a **member's** claim (relief going up). The limit on a consortium company's claim (relief going down) is **s 144**: the ownership proportion of the claimant's available total profits. | Changed to "(s 144; s 143 governs the claim going up)". The script cites no section here. | legislation.gov.uk crossheading "limitations on group relief if claim based on consortium condition 1, 2 or 3" (s 144 text in the search extract); CTM80540 (s 143) |
| 15.2 | MINOR | Reading: "**Several claims for the same months (s 142).**" | s 142 defines the overlapping period. The prior-claims rule is in **s 140(3)–(6)** for the claimant and in s 139 for the surrendering company. | Corrected. | legislation.gov.uk ss 140, 142 (search extract); CTM80235, CTM80245 |
| 15.3 | MINOR | Reading: "relief its own group could give is taken into account first (s 149; CTM80585)" | Where the surrendering consortium company is in a group, the cap is in **s 148** (the excess over the group's potential relief). s 149 is the claimant-side counterpart. | Changed to "ss 148–149". s 148 added to the references. | legislation.gov.uk s 148 (search extract) |
| 15.4 | MINOR | Opening, both editions: "quietly left the British statute book" on 27 October 2021 | The rules were repealed by FA 2022, enacted the following year, with effect from that date. They did not leave the statute book on Budget day. | Both editions now say "quietly stopped working". The reading edition adds "enacted the following year". | CTM81502 (writer's search 14) |
| 15.5 | Confirmed, no change | s 105(3A) profit-related threshold, including CFC apportionments, for surrender periods ending on or after 20 March 2013 (FA 2013); s 371UD repealed by F(No.2)A 2015 | Correct. | — | CTM80142; PwC note (search 3); R3 |
| 15.6 | Confirmed, no change | s 142(2), which excludes periods when the group condition is not met; *Farnborough* [2019] EWCA Civ 118; *FCE Bank*; ss 146A–146B (12 July 2010); ss 155A–155B (1 March 2012); Sch 18 paras 70 and 74; s 183; Part 5A | Consistent with the writer's verified sources and the law sheets. | — | notes 15; LS1 §7; LS4 §6 |
| 15.7 | Confirmed, no change | Exam lens: N24 Q2, M23 Q5, M24 Q6, M26 Q4; grades 1 | These match exam-intel and the v2 grid. | — | exam-intel §3 |

## Chapter 16: Company gains: property and leases

| # | Class | Location | Finding | Correction (applied) | Source |
|---|---|---|---|---|---|
| 16.1 | MINOR | Reading, Part 8ZB refinements: "**No double charge (s 356OC)**" | s 356OC is the provision that treats the gain as trading profit. The trigger, with its subsection (3) carve-out, is in s 356OB. The exact home of the exclusion is not confirmed. | Changed to "(ss 356OB–356OC)". | legislation.gov.uk Part 8ZB (search extract) |
| 16.2 | Confirmed, no change | Depot £2,277,500; lease assignment £189,000 (assumed indexation factor 0.250, labelled); 30-year grant: income £840,000, cost £290,000 (CG70960), gain £870,000; roll-over £800,000 / £1,477,500 / £3,722,500; lease table; s 217; s 153A (4th anniversary for companies); s 154 (60 years / 10 years); s 161 (2-year election); s 280; chattels £6,000 and 5/3; Part 8ZB from 5 July 2016 | Correct. Python re-run. | — | R19; LS2; Python |
| 16.3 | Confirmed, no change | Exam lens: M26 Q3, M26 Q4, N25 Q5, N24 Q1, M23 Q4; leases leave the syllabus from 2028 | These match exam-intel (2028 Handbook exclusions). | — | exam-intel §3–4 |

## Chapter 17: Gains inside the group

| # | Class | Location | Finding | Correction (applied) | Source |
|---|---|---|---|---|---|
| 17.1 | ERROR (continuity; fixed in Stage 0) | Reading s 171A worked example, and the key figures table: "£351,200 … = **£651,200**". Script: "six hundred and fifty one thousand, two hundred pounds" | Superseded by R19. | £189,000 / **£489,000** in both editions. | R19 |
| 17.2 | Confirmed, no change | s 170 (effective 51% test; 75%³ = 42.19%); s 171 exclusions; s 56(3) rolled-up indexation; s 171A (FA 2000; 21 July 2009 rewrite); s 175(2B)–(2C); Sch 7A (FA 2011); ss 184A–184I (FA 2006 s 70); s 176 and s 177; s 31 (FA 2011 Sch 9); s 179 Conditions A and B; s 179(3A)–(3H) (19 July 2011); s 190 (51% group); s 192(3)–(4) | Consistent with law sheet 2 (V). | — | LS2 §8–9 |

## Chapter 18: Shares: the exemption, reorganisations and earn-outs

| # | Class | Location | Finding | Correction (applied) | Source |
|---|---|---|---|---|---|
| 18.1 | MINOR (R28.3) | Both editions, *Marren v Ingles*: "The courts held" | The case was decided by the House of Lords ([1980] 1 WLR 983), as chapter 20 already says. My search did not reach a primary source. | "The House of Lords held". The reading edition adds "(the court as reported in secondary sources)". | R28.3; chapter 20 notes |
| 18.2 | MINOR | Reading, worked example 18.1, indexed pool built with the rounded factor 0.489 (notes flag 10) | s 110 indexes a pool by the unrounded ratio (RE − RL)/RL. The three-decimal rounding belongs to s 54, and HMRC's pool example (CG51621) uses an unrounded factor. The example is hypothetical, so the effect is only a few pounds. | Added a sentence explaining the strict rule. Figures kept. | CG51621, CG17274 (search 9) |
| 18.3 | MINOR | Reading: stock dividends parenthesis, "that section [s 141] could not be located … status unconfirmed" (open item 25) | Resolved. FA 1998 s 126 substituted a single new s 142 for the old ss 141 and 142, for share capital issued on or after 6 April 1998. CTM17005's citation is out of date. | Parenthesis rewritten. | legislation.gov.uk FA 1998 s 126 (search 10) |
| 18.4 | MINOR | Reading, para 15A paragraph | Para 15A also treats the company sold as a qualifying company for the deemed period, including time before it existed (open item 19). | One clause added, labelled "as HMRC's guidance at CG53080C and commentators describe it". | CG53080C; Simmons & Simmons commentary (search 5) |
| 18.5 | Confirmed, no change | Matching example (gain £7,107; pool c/f £256,667 / £310,457); Coldwater £2,160,000 exempt, CT £540,000, window to about September GY9 (para 7 look-back; para 19 from the start of the latest 12 months); Helmside exchange (SSE priority; *Stanton v Drayton*; £25.0m pool; stamp duty £80,000); new s 137 (26 November 2025; 5% exception gone); s 138; s 138A; earn-out gains £0.5m / £1.0m, CT £375,000 ("accepted view" label kept: search 12 found no HMRC statement) | Correct. | — | LS2 §4, §12; R22; Python |

## Chapter 19: Reconstructions, demergers and distributions

| # | Class | Location | Finding | Correction (applied) | Source |
|---|---|---|---|---|---|
| 19.1 | **ERROR** (contradicts canonical facts; undermines the SDLT teaching) | Reading, "The actuators hive-down": "Early in GY6, TEL decides to sell its actuators business to Brennock Industries Inc…". Script: "Early in Group Year Six, Tarnmoor Engineering decides to sell its actuators business. The buyer… Brennock Industries…" | R29 and the ledger (§8 GY6) fix these facts: on 1 February GY6 there was no buyer, no heads of terms and no arrangement. The board decided to run actuators as a separate company and review the options later. Brennock first approached in the summer of GY6. Chapters 20 and 21 depend on this. A decision to sell to Brennock before the hive-down would be "leaving arrangements" under FA 2003 Sch 7 para 2(2)(b), which would deny the £364,500 of SDLT group relief at the outset. | Both editions rewritten to the canonical facts (board decision to run it separately; no buyer on 1 February; Brennock approaches in the summer; sale on 31 December). | R29; ledger §8 GY6; chapters 20 and 21 |
| 19.2 | MINOR | Reading, Part 22 effects: "ss 944A–944E adapt the rules for post-1 April 2017 losses" (notes flag 2) | Partly resolved. On HMRC's guidance the successor relieves inherited post-2017 losses under s 45A (or s 45B), not only by streaming. *Leekes* streaming remains the rule for pre-2017 losses. | One labelled parenthesis added (CTM06110–CTM06120). | HMRC CTM06110, CTM06120, CTM06065 extracts (search 14) |
| 19.3 | Confirmed, no change | s 1021 repealed by FA 2012 s 33 (s 1002 also repealed; s 1020(2A) added) | Correct. | — | legislation.gov.uk FA 2012 s 33 (search 8) |
| 19.4 | Confirmed, no change | *Leekes* (CA, 23 May 2018; Henderson LJ with Arden and Sales LJJ); s 1030A (£25,000; 1 March 2012; SI 2012/266); Tarnmoor Pumps (gain £17,900; CT £4,475); L − A example; demerger conditions A–F (Condition A wording per LS2 V; enacted text "member State" confirmed); s 1091 / 30 days; chargeable payments 5 years; Tarnwater (R24); TiS circumstances C, D, E; *Laird*; June 2026 consultation as "proposed, not law" | Correct or consistent with the V sources. | — | notes 19; LS2 §11; search 15 |

## Chapter 20: Buying and selling companies

| # | Class | Location | Finding | Correction (applied) | Source |
|---|---|---|---|---|---|
| 20.1 | LIKELY (continuity; fixed in Stage 0) | Script, "What to take away": "degrouping gain joined fifty three point five million pounds of exempt proceeds" | This suggested the £2.5m was on top of £53.5m. | Wording per R22.4. | R22 |
| 20.2 | MINOR | Reading, worked example 20.5 point 1: "TAL was trading before and immediately after the sale (para 19)" | TAL existed for only 11 months. The answer should show that para 15A also deems it a qualifying company for the earlier part of the 12 months. | Sentence added, labelled as HMRC's guidance and commentary. | CG53080C (search 5) |
| 20.3 | Confirmed, no change | *M Group* (UT, 31 August 2023; dates); *Centrica* [2024] UKSC 25; late filing £1,000 / £2,000 (FA 2026 s 265); R1 divisors and thresholds; Calder QIPs 4 × £187,500; BSL stamp duty £111,000 + £9,000; TAL: SSE, degrouping £2.5m, s 782A, SDLT £364,500, s 31 carve-out, stamp duty £270,000 (contingency principle); counterfactual £1,325,000 | Correct. Python re-run. | — | R1, R22; bible §3; notes 13 and 20 |
| 20.4 | Confirmed, no change | Exam lens: M23 Q6, M24 Q3, N24 Q3, N24 Q5 (4/3/6.5/3.5/3) | These match exam-intel. | — | exam-intel §3 |

## Chapter 21: Stamp taxes for groups

| # | Class | Location | Finding | Correction (applied) | Source |
|---|---|---|---|---|---|
| 21.1 | MINOR | Reading, *Tower One* Court of Appeal sentence | Confirmed: [2025] EWCA Civ 1588, 10 December 2025. The company no longer argued for group relief. The court reversed the UT on the s 53 market value point but applied s 75A (open item 24). | Panel added (Asplin, Warby and Falk LJJ). Status label kept. | Find Case Law listing; Simmons & Simmons, KPMG, Lexis summaries (search 4) |
| 21.2 | Confirmed, no change | Stamp duty totals £652,500; SDLT relieved £923,500, clawed back £654,000, kept £269,500; head office £689,500; leaseback NPV £10,365,670 and £155,813; acquisition relief £439,500; LBTT £268,500; Part 19 Ch 2 (16 − N)/15 = £400,000; SDLT and LBTT rate bands; s 57A (not within a group); Sch 7 para 2 guards; para 3 clawback at original market value; contingency principle; s 77/77A; SDRT listing relief (FA 2026 s 85) | Correct. Python re-run. | — | R22; LS2 §15; Python |
| 21.3 | Confirmed, no change | All stamp tax rows graded 3; SDRT ungraded for LCG AT | These match the v2 grid. | — | grid v2 p11 |

## Audio and production-word scans (after fixes)

The brief §11 scans found nothing in any of the seven scripts:
- digits or symbols;
- stray colons;
- dashes used as punctuation;
- undeclared or unspaced acronyms.

The R16 production-word scan (ledger, bible, plan, brief, ruling, law sheet, exam-intel) also found nothing in either edition. `ledger-check.py`: 212 checks, 0 failures.

Script word counts:

| Chapter | Words | Target ±10% |
|---|---|---|
| 15 | 8,383 | 8,500 (7,650–9,350) |
| 16 | 7,867 | 8,000 (7,200–8,800) |
| 17 | 8,697 | 8,000 (7,200–8,800) |
| 18 | 8,690 | 8,000 (7,200–8,800) |
| 19 | 7,422 | 7,500 (6,750–8,250) |
| 20 | 7,286 | 7,000 (6,300–7,700) |
| 21 | 4,772 | 4,500 (4,050–4,950) |

Chapters 17 and 18 are close to their upper limit. Later additions there should be offset by cuts.

## Needs orchestrator ruling

None. No canonical story number was changed. Item 19.1 restores the canonical facts.

## Could not verify (carried forward)

- **Earn-out receipts after an SSE share sale** (open item 12). No HMRC statement was found (search 12). The chapters keep the "accepted view, not settled law" label.
- ***Marren v Ingles* court.** House of Lords on secondary sources only (search 6 returned nothing primary).
- **A consortium member as the s 155 "third company"** (open item 11). The statute's wording supports it, but no HMRC example was found (search 13). It stays labelled as the book's reading.
- **s 171A reallocation and Sch 7A para 7** (chapter 17, flag 1). Nothing conclusive (search 7). It stays labelled as the book's reading.
- **Two Part 8ZB points.** The exact section for the pre-intention carve-out (cited as s 356OL) and for the no-double-charge rule.
- **s 154(3).** The "other effects" are not listed in the chapter, and their full text was not seen.
- **Two SDLT points.** The text of Sch 7 para 4 (the s 75 exception) was not opened: chapter 21 labels it the book's summary. *HC-One* appeal status: secondary only.
- **STSM021120.** The wording on capped consideration was not re-read. The rule as stated matches R22 and the chapter's own sources.
- **Commencement wording of the FA 2022 repeal of the EEA group relief rules** beyond CTM81502.
- **2027 LCG grid.** Not published. Every Exam lens says "check the 2027 grid".

## Sources (WebSearch, standard mode)

1. CTA 2010 s 144, consortium condition 1, claimant owned by the consortium: legislation.gov.uk Part 5 Ch 4 crossheading; s 146, s 148; CTM80525.
2. CTA 2010 s 140 prior claims and s 142: legislation.gov.uk ss 138–142; CTM80235, CTM80245.
3. s 105(3A), CFC and 20 March 2013: CTM80142; PwC technical note; legislation.gov.uk s 105.
4. *Tower One St George Wharf* CA: caselaw.nationalarchives.gov.uk/ewca/civ/2025/1588; Simmons & Simmons; KPMG; Lexis; Ross Martin.
5. Sch 7AC para 15A and para 19: CG53080B, CG53080C, CG53104, CG53106; Simmons & Simmons "SSE and hive-downs"; ICAEW Taxline.
6. *Marren v Ingles* House of Lords: no primary result.
7. s 171A and Sch 7A: CG47689, CG47693 (nothing on the point).
8. s 1021 and FA 2012 s 33: legislation.gov.uk FA 2012 s 33; HMRC "company distributions" policy paper.
9. Pool indexation rounding: CG51620, CG51621, CG17274; OpenTuition forum (secondary).
10. TCGA s 141: legislation.gov.uk FA 1998 s 126; CG51585.
11. SDLT para 4 and s 75 or indirect demergers: SDLTM23000 index; Tax Journal demergers guide; Simmons & Simmons and Tax Adviser on *HC-One*.
12. Earn-outs and the SSE: CG14990, CG13000; Tax Journal "Ask the expert" (2013); Taxation (2002); ACCA.
13. s 155 "third company": legislation.gov.uk s 155; CTM80600, CTM80587–80588.
14. ss 944A–944C: CTM06065, CTM06110, CTM06120, CTM06855, CTM06860.
15. s 1081 Condition A: legislation.gov.uk s 1081 (enacted); BDO guide.
16. Part 8ZB sections: legislation.gov.uk ss 356OA–356OI (extracts); FA 2016 ss 77, 81.
