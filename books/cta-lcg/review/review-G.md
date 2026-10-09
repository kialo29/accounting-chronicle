# Technical review G: chapter 31 (the Ridgeway deal), introduction (00b), conclusion (33), a note on sources (34); chapter 32 s 47 follow-up

*Reviewer G, 9 October 2026. Both editions and the notes of each piece read in full; chapter 31's notes and `framing-notes.md`; `continuity-rulings.md` R1–R29; amended `calder-ledger.md`. Every rule chapter 31 applies was checked against the owning chapter's reading edition (grep of chapters 3, 6, 7, 8, 11, 17, 20, 21, 25, 26, 27, 28, 32) and against the rulings. All numbers recomputed in Python (scratch `reviewG/calc.py`). WebSearch: 4 calls (budget 15). WebFetch not used (unavailable).*

## Chapter 31: The Ridgeway deal

| # | Class | Location | Finding | Correction | Source |
|---|---|---|---|---|---|
| 31.1 | LIKELY | Reading, group regimes table, AIA row: "the 31 December RY periods of Tarnmoor's companies, which ended nine months earlier"; script: "the December periods of Tarnmoor's companies that ended nine months earlier" | RC's AP1 ends 31 March RY+1; the 31 December RY periods end **three** months before it (nine months into AP1). The same slip is in R11's guidance. | "three months earlier (nine months into RC's AP1)"; script "three months earlier". **Fixed** | Arithmetic; CAA 2001 s 51C; R11 |
| 31.2 | LIKELY | Reading, "Two other doors": "Postponement is all it gives. The branch's goodwill and customer relationships are intangible fixed assets, dealt with under CTA 2009 Part 8 ..., not the gains rules"; WE 31.7 "Gains postponed; IFA credits and CA balancing adjustments"; script equivalent | Omits the parallel Part 8 relief: CTA 2009 **ss 827–830** postpone the intangibles credit on a transfer of a non-UK trade carried on through a PE to a non-UK company for shares/securities (all assets or all but cash; transferor ≥ 25%; genuine commercial purpose, s 831; clawback on disposal of the shares or realisation within 6 years, s 829). An examiner would expect it next to s 140. | Paragraph added (reading); one sentence (script); WE 31.7 cell, key rules row, references and take-away updated. **Fixed** | legislation.gov.uk/ukpga/2009/4/section/827 and /829, /830; CIRD42050 (search extracts) |
| 31.3 | MINOR | Reading, "What the shares bring": degrouping reasoned first on s 179(2), s 170(10) as an afterthought; script cites only "associated companies leaving together" | The primary answer is TCGA s 170(10): RH (principal company) joins Tarnmoor's group, so the groups are the same and no company leaves a group. s 179(2) is the fallback. | Reordered (reading); script reworded. **Fixed** | TCGA 1992 s 170(10); chapter 17 (s 179(2)) |
| 31.4 | MINOR | Reading, WE 31.6, "Exempt period: Not relevant (a new company, not a newly acquired one)" | Correct, but unreasoned. | Now: a newly formed company meets the initial condition only if it already carried on a business or is an acquisition vehicle (INTM224200). **Fixed** | INTM224200 (search extract) |
| 31.5 | MINOR | Reading, WE 31.3, AP3 payment cell "3/12 × CT ≈ £100,000 = 4 × £25,000" | Garbled arithmetic notation. | "QIPs on forecast CT of about £100,000: each 3/12 of it, 4 × £25,000". **Fixed** | SI 1998/3175 reg 5 (3/n rule); chapter 3 |
| 31.6 | MINOR | Script "What to take away": 646 words; "The Dublin branch should elect" | Over the 300–500 guide; the company, not the branch, elects. | Recap trimmed to about 500 words (597 with the closing answer and the turn to chapter 32), every figure kept; "Ridgeway Cycles should elect". Script now 6,984 words. **Fixed** | Brief §6; CTA 2009 s 18A |

**Checked and correct** (owning chapter / ruling): stamp duty £22,500 (0.5%, rounded up to £5, buyer, 30 days; no FA 1930 s 42 relief from an individual; base cost £4,522,500; ch 21, R22); *Centrica* boundary (ch 13, 20); s 18F passive conditions and RH ignored; associated-company count 10 + RC = 11; MR "any time in the AP" (divisor 11; limits £4,545 / £22,727) v QIP count on the day before the AP (R1): AP1 divisor 1 (not large; CT due 1 January RY+2), AP2 divisor 11 (large £136,364; very large £1,818,182; grace limit £909,091; grace applies), AP3 QIPs 4 × £25,000 on 14 October RY+2, 14 January, 14 April, 14 July RY+3; 31 December companies' QIP divisor 11 from the AP beginning 1 January RY+1; very large has no grace (CTM92520/92800); s 18A (all PEs, profits and losses, full treaty attribution, s 18R), relevant day = start of next AP (s 18F; Jess's pre-completion election would have started 1 April RY), revocable only before it, s 18(3A) no credit, ss 18G–18I guard rail with the CFC low profits test, ONA 6-year look-back and matching (cumulative −80,000 / −110,000 / +10,000 / +210,000: nil ONA), s 164A carve-out for s 18A activities (ch 25, 27); CT £150,000 − £25,000 = £125,000 v £100,000, saving £25,000; CIR capacity £60,000 × 25% = £15,000 (book's reading of s 406, labelled; no CIR figure invented: R20); Pillar Two simplified top-up 2.5% × £200,000 = £5,000 (labelled); s 140 conditions (≥ 25%, securities, 6 years; ch 25); TIL route fails s 140 (25%) and s 171(1A) (non-resident, assets not chargeable); FA 2026 Sch 6 arm's length for cross-border IFA transfers (ch 11); s 140C caution (ch 25); CFC order of attack (CFC; exempt period; excluded territories not relied on; low profits £500,000 / £50,000; tax exemption 18.75%; ch 26); SAO from AP2, certificate 31 December RY+2 (R10); group relief from completion with overlapping periods and arrangements (R21); standing nomination (R9); RDEC 20% only, ERIS out (ch 10); TP SME exemption lost (ss 166, 172); CIR reporting company per period, more than half of eligible companies, periods ending on or after 31 March 2026 (FA 2026 s 61; LS1 V; ch 28); enquiry window 12 months from the filing date (non-small group); GPA same accounting date (ch 3); DTL £800,000 × 25% = £200,000, Dr goodwill, none on goodwill (IAS 12 paras 15(a), 19, 66; ch 6); retention bonus £30,000 deductible in AP2 and £30,000 in AP3 (s 1288; s 1289(3); ch 7, 20), AP1 DTA £7,500; Jess's gain £4,338,000; 2.1 minutes a mark (210/100; 42 minutes); N24 Q5 split 4/3/6.5/3.5/3, M23 Q2, M23 Q6, N25 Q2, M26 Q5 and the N25/M26 "tax consequences" remark (exam-intel). Draft FB 2026-27 compulsory exemption labelled proposed, not law (R29). §11 scans clean; R16 clean (only "integration plan", "brief RH's directors": ordinary uses).

## Introduction (00b)

| # | Class | Location | Finding | Correction | Source |
|---|---|---|---|---|---|
| I.1 | MINOR | Both editions: "Some years after the group's story begins, Tarnmoor buys her business" | Chapter 31 places the deal some years after GY7 ("after the events of the last thirty chapters"). | "Some years after the rest of the group's story"; script now names Ridgeway. **Fixed** | Ledger story time; chapter 31 |

Promises checked against the files: prologue first (the introduction opens on it); 32 chapters in five Parts with 4 / 10 / 7 / 9 / 2 chapters and the titles described; chapter 31 "one acquisition through every relevant rule"; conclusion and note on sources; thresholds table, paper facts (3h 30m; 6 questions; pass 50%; 70% core; 4 May / 26 October 2027 2.30pm; renamed from Taxation of Major Corporates for 2023; banded scripts from M24), sittings table (seven sittings M23–M26), Calder £32m, GY1 revenue £1,180m: consistent with exam-intel, the ledger and the chapters. (Chapter heading style in other chapters' files mixes digits and words: outside this review's files.)

## Conclusion (33)

| # | Class | Location | Finding | Correction | Source |
|---|---|---|---|---|---|
| C.1 | MINOR | Both editions, governance section: "One modest acquisition ... touched stamp duty, instalments, ... deferred tax and a foreign branch." | Written before chapter 31; omits the people floor and chapter 31's answer. | Adds "a retention bonus" and "Ridgeway Cycles elects for the branch exemption". **Fixed** | Chapter 31 |
| C.2 | MINOR | Script: "Ridgeway's choice in chapter thirty one would then no longer be a choice"; reading "What is coming" row silent | Chapter 31 says RC has no branch losses, so the draft would not change its answer. | Both editions: the draft would turn Ridgeway's election into a rule "with the same result on its facts". **Fixed** | Chapter 31 ("Coming next") |
| C.3 | MINOR | Reading, "Where profits are made", Exemption row: "Calder did not elect" | Now that chapter 31 exists, the story has an elected branch too. | "...; Ridgeway Cycles elects for its Dublin branch"; chapters 25, 31. **Fixed** | Chapter 31 |

Other statements spot-checked and consistent with the owning chapters and rulings: *BlackRock* (UKSC permission refused); TIL CT £850,000 and plan 6 × £87,500; Calder's Vallarian £180,000 / £45,000; disallowed £2.21m / £2.30m; TCM £204,000 and top-up £102,000 (GY5); UTPP 31%; s 164A from 1 January 2026; Pillar Two returns 15/18 months; QIP debit interest Bank Rate + 2.5% (R26); 2028 grid changes (exam-intel).

## A note on sources (34)

No findings. FA 2026 Sch 6 para 32 commencement (chapters 2, 27), the 2017 OECD Model articles supplied in the exam (exam-intel), Find Case Law launch, the "what this book could not open" examples (QIP counting date: my search again found only COM30110's description, not the amended reg 3 text) are all consistent.

## Chapter 32 (follow-up to review E)

| # | Class | Location | Finding | Correction | Source |
|---|---|---|---|---|---|
| 32.1 | MINOR | Reading, trap atlas DTR row and the N25 paragraph; script N25 remark | Did not give the statutory basis that chapter 24 now teaches. | Reading: row and paragraph cite **TIOPA 2010 s 47** (royalties for one asset paid from more than one jurisdiction under double taxation arrangements treated as from a single asset), with chapter 24's caveat that N25 Q1 was unilateral relief. Script: two sentences added ("Section forty seven of the International Act is the basis..."). Script 6,023 words (band 4,950–6,050). **Fixed** | Chapter 24 reading and script; review E |

## Counts

| Piece | ERROR | LIKELY | MINOR | Fixed |
|---|---|---|---|---|
| Chapter 31 | 0 | 2 | 4 | all |
| Introduction | 0 | 0 | 1 | all |
| Conclusion | 0 | 0 | 3 | all |
| Note on sources | 0 | 0 | 0 | — |
| Chapter 32 | 0 | 0 | 1 | all |

`python3 ledger-check.py`: 212 checks, 0 failures (no canonical number changed). Brief §11 scans (digits/symbols, dashes, acronyms, colons) and the R16 scan: clean on all five scripts; R16 clean on the reading editions (ordinary uses only).

## Needs orchestrator ruling

1. **R11 guidance** says RC "shares the AIA with Tarnmoor's 31 December periods ending nine months earlier": it should read **three** months earlier (31 December RY v 31 March RY+1). Text-only correction to `continuity-rulings.md`; no number changes.

## Could not verify

1. SI 1998/3175 reg 3 (grace year): COM30110 (search extract) confirms the test (profits ≤ £10m, divided; not large in the preceding 12 months) but not that a grace year counts as "large" for the next AP; chapter 31 keeps its "HMRC's and practitioners' reading" label. The extract also describes the associated-company division as for periods "ending on or after 1 April 2023", where R1/CTM92530 say "beginning": worth a check against the amended regulation.
2. Whether Ireland is listed in SI 2012/3024 Sch Part 1 (search returned the SI but not the list): label kept, not relied on.
3. CTA 2009 s 827 Condition B wording (search summary: consideration "mainly" shares or securities?): the text says only that the consideration must include shares or securities and the 25% holding; check the exact condition.
4. Pillar Two allocation of a main entity's tax to a PE (Model Rules Art 4.3.2; UK section not located) and Irish collection of any top-up: labelled.
5. CTA 2010 s 18F(4) redistribution condition (full text not seen); IFRS 3 one-year measurement period (not opened); FA 1998 Sch 18 para 24 as the enquiry-window provision (structure-based).
