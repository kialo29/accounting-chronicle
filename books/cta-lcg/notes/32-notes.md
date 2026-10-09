# Notes: Chapter 32, The Advanced Technical craft

**Interpretation and assumptions.** A craft chapter, not question practice: the paper's shape, the day, RM Assessment Master and the spreadsheet rule, the three resources (tables, OECD Model, Croner-i/Tolley), timing, reading requirements, how marks are made (marking guides, assumptions, moderation), layouts, the nine examiner messages plus a trap atlas gathered from every Exam lens box in chapters P–30, learning from past papers and banded scripts, the JP rules, pass rates, the pending 2027 grid/tables and 2028 changes (context only). Opens on the documented spreadsheet sentence in the October 2026 Candidate Instructions. Tarnmoor used once (TEL GY2, canonical figures) to illustrate £ v £000; no new story facts. Chapter 31 is not yet written: referred to by number and title only. No TKS chapter on exam technique is recorded in the bible, so no TKS recap is given (gap noted).

## Sources by section

- **Whole chapter:** `research/exam-intel.md` (all sections, compiled from CIOT primary sources opened 9 October 2026: LCG page, exams page, Candidate Instructions October 2026, Exam Regulations October 2026, FAQs, legislation page, key dates, tax tables page and 2026 tables, Prospectus 2026, 2026 grid, past paper pages and PDFs M23–M26, Prizes and Results PDFs, JP FAQ, CTA Handbook 2028, 2028 grids). URLs as listed in exam-intel.
- **Exam lens boxes** in reading editions 00–30 (extracted with awk; 131 boxes) for the trap atlas, layouts and frequency mapping; chapter 2 ("Research in the exam room") and chapter 7 (four habits; RM note) script and reading edition, to avoid contradiction.
- **Book files:** book-plan §0, §2, §3, §5 (ch 32 entry), §11; book-bible §3.1–3.5, §5.2; continuity rulings R1 (QIP counting), R3 (TEL GY2 figures), R10 (SAO on UK incorporation), R16.
- **WebSearch (7 of 12 used, standard mode):**
  1. `CIOT CTA RM Assessment Master spreadsheet "not copied to the answer box will not be marked"`: no relevant hit (tolleytraining, accountingweb, gov.uk); confirmed nothing new.
  2. `tax.org.uk CTA tax tables 2027`: no CIOT 2027 tables found (third-party 2026/27 tables only). Supports "2027 tables not yet published".
  3. `tax.org.uk key dates CTA May 2027 Advanced Technical Taxation of Larger Companies 4 May 2027`: https://www.tax.org.uk/key-dates-and-deadlines (4 May 2027 2.30pm session includes Cross Border and Environmental Taxes; LCG line truncated).
  4. `"Taxation of Larger Companies" "2.30PM" key dates deadlines CTA 2027` (tax.org.uk only): https://www.tax.org.uk/key-dates-and-deadlines and https://www.tax.org.uk/examentry : 27 October 2026 2.30pm, **4 May 2027 2.30pm**, **26 October 2027 2.30pm**, each "Advanced Technical Cross Border and Environmental Taxes / Advanced Technical Taxation of Larger Companies and Groups"; one line on the exam entry page also gives **28 October 2027 2.30pm** (conflict flagged).
  5. `CIOT CTA exams "RM Assessment Master" October 2026 candidate instructions spreadsheet`: https://www.tax.org.uk/ctaexams ("From the October 2026 sitting, a new software system … delivered by RM"); https://www.tax.org.uk/cta-faqs-testcentre (closed book; "Candidates cannot access anything other than Online Legislation and the Tax Tables"; Croner-i or Tolley's).
  6. `tax.org.uk candidate instructions test centre spreadsheet answer box copy paste timer flash 10 minutes` (tax.org.uk only): https://www.tax.org.uk/ctaexams ("candidates will need to have practiced using RM before going to the Test Centre. A practice test will be available on the website before each exam session"); candidate-instructions page extract still dated for an earlier session.
  7. `CIOT prospectus 2027 CTA syllabus grid 2027 Finance Act 2026 Advanced Technical` (tax.org.uk only): https://www.tax.org.uk/prospectus-and-syllabus (2026 prospectus and syllabus only); https://www.tax.org.uk/ctareview (2028 timetable).
- **Python** (scratch `lcg-ch32/calc.py`): 2.1 min/mark; 42/31.5/21; checkpoint table from 2.30pm (3.12, 3.43:30, 4.15, 4.57, 5.39, 6.00; flash 5.50); pass rates recomputed (1,343/2,039 = 65.9%); TEL GY2 26,000,000 − 17,095,000 = 8,905,000; CT 2,226,250; QIP 556,562.50. `ledger-check.py`: 132 checks, 0 failures (no canonical number touched).

## Fact-check flags

1. **Spreadsheet rule, screen layout, timer, flag, practice test:** rest on exam-intel's reading of the Candidate Instructions (October 2026) PDF, marked verified there; WebSearch confirmed the RM change and the practice test but its extracts did not reproduce the spreadsheet sentence. Re-read the Candidate Instructions for May 2027 when issued (they may be revised).
2. **Autumn 2027 date conflict:** CIOT pages give 26 October 2027 2.30pm (key dates; exam entry) but one exam entry line gives 28 October 2027 2.30pm. Text says "check your own entry confirmation". Resolve before publication.
3. **2027 grid, prospectus and tax tables:** not published as at 9 October 2026 (searches 2 and 7). Every grade cited is the 2026 grid; tables cited are 2026 (18% WDA). Check when published (expected around January 2027).
4. **Timing (2.1 min/mark; checkpoints):** derived, labelled; assumes a 2.30pm start; whether the RM timer counts up or down is not stated in exam-intel (text gives both elapsed and remaining minutes and clock times, and does not state the direction).
5. **Rubric for 2027:** "assume 2026/27 legislation continues" is derived from the pattern, labelled.
6. **"Spend a minute on the resources; tell the invigilator if anything fails"** and "read the requirement first": book's advice, not CIOT rules (labelled in the reading edition).
7. **Paraphrases v quotes:** examiners' comments marked as quotes only where exam-intel records exact words (26.5% remark; depreciatory/value shifting; N25 royalties sentence; M26 "obvious points"; N23 Q6 "style"); other comments are given as reported paraphrases.
8. **N24 Q5 "51% group companies"** (chapter 1 flag for ch 32): resolved in favour of associated companies per R1; the reading edition's compliance box says the marking-guide summary uses the old wording.
9. **Exam-intel trap 15** ("include UK-resident companies incorporated abroad"): not taught; SAO taught on UK incorporation per R10.
10. **Scripts banded from M24:** exam-intel says M24–M26; fine. M26 ER typo heading ("November 2025") repeated as a note.
11. Tag map statute locations (TIOPA Parts 2, 4, 6A, 9A, 10, Sch 7A; CTA 2009 Part 2 Ch 3A, Part 5, Part 8, Part 13, s 1219, s 1288, s 361D, s 354, s 441; CTA 2010 Parts 4, 5, 7ZA, 14, 22; TCGA ss 152, 171, 171A, 175, 179, Schs 7AC, 8; CAA ss 45S, 45U, 51C, 198) taken from earlier chapters' verified references; not re-searched.
12. Bible §5.2 flags 1, 3, 4 (exam) carried forward: still open (no 2027 grid; no 2028 transitional/JP rules; M26 presentation line dropped and ER typo noted).

## Contradictions

- None with the ledger. Plan §5 says the usual mix is "20/15/15/20/20/10": correct as the modal order (4 of 7 papers), stated as such.
- Plan §3 lists "No separate reading time"; consistent.
- Exam-intel trap 15 conflicts with R10 (SAO): followed R10.

## Pronunciation guide

| Written | Say it |
|---|---|
| RM Assessment Master | AR EM uh-SESS-ment MAH-ster |
| SpreadJS | SPRED jay ess |
| Croner-i | KROH-ner EYE |
| Tolley | TOL-ee |
| Tarnmoor | TARN-moor |

## Bible update

- **Cast:** no new real people or cases.
- **Glossary (owned here):** RM Assessment Master (CIOT exam software from October 2026; spreadsheet below the answer box; uncopied calculations not marked); marking guide (0.5–1 mark per point); banded scripts (M24–M26 example scripts by mark band); spreadsheet rule; tags (legislation product bookmarks: section number/topic only).
- **Established facts confirmed:** sittings 4 May 2027 and 26 October 2027 at 2.30pm (with the 28 October line conflict); practice test published before each sitting; no 2027 prospectus/grid/tables as at 9 October 2026.
- **Debates:** none; misconceptions tackled: "the marker sees my spreadsheet working" and "AT depth means writing everything you know".
- **Threads:** exam craft thread closed (ch 32). Handover to the conclusion.

## Ledger additions

None (only canonical TEL GY2 figures used: total profits £26,000,000; group and consortium relief £17,095,000; TTP £8,905,000; CT £2,226,250; QIPs 4 × £556,562.50).

## Continuity fixes applied (R18–R29; reviewer F, stage 0)

No "Fix needed in" item names chapter 32. Following the rulings' guidance for chapter 32 (reading edition only; the script is at the top of its word band):
- Trap atlas rows added: FYA balance pooled after the period's WDA (R18, CAA 2001 s 58(5)); stamp duty on a capped earn-out charged on the stated maximum (R22); earn-out receipts after an SSE sale "generally accepted view, not settled" (R22); blocked foreign trade receipts under CTA 2009 ss 173–175, not Part 18 (R23). These rows are marked "book" in the Sitting column (not examiners' evidence).
- Favourite combinations: TP + CIR now mentions the GY6 revised interest restriction return and group relief time limits as the interaction example (R20).
- R19: the chapter never states £351,200 or £651,200 (checked). R26: the chapter quotes no interest rates (checked).

## Technical review fixes (review F)

- No errors found. Verified this review: autumn 2027 sitting 26 October 2027, 2.30pm (CIOT exam entry page; the 28 October line is still flagged); pass rates and time plan recomputed (Python). Script unchanged (5,990 words; ceiling 6,050).

## Technical review fixes (review G)

- Per review E: the DTR trap-atlas row and the N25 paragraph (reading edition) now cite **TIOPA 2010 s 47** (royalties for one asset paid from more than one jurisdiction under double taxation arrangements treated as income from a single asset), with chapter 24's caveat that N25 Q1 involved unilateral relief. Script: two sentences added after the N25 examiners' remark. Script now **6,023 words** (band 4,950–6,050).
