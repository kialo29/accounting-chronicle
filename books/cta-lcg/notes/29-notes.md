# Notes: Chapter 29, Hybrid mismatches

**Interpretation and assumptions.** Teach TIOPA 2010 Part 6A at core depth (FY2026 law; no FA 2025/FA 2026 amendment) through its two outcomes, primary/secondary responses and chapter map, with Project Undertow (GY4, rejected) as the running case; I added a UK debt/equity first step (equity notes and the hybrid capital instrument election) and the CFC/hybrid interaction (s 259BD) because the plan's analysis would otherwise be legally incomplete, while keeping every ledger number.

Files: `chapters/29-hybrid-mismatches.txt` (script, 6,111 words by `wc -w`), `chapters/29-hybrid-mismatches-reading.md` (reading edition, about 6,040 words). Scratch: `/tmp/claude-0/-home-user-accounting-chronicle/7222567c-185b-51e3-b4bc-bb4854026617/scratchpad/lcg-ch29/calc.py`.

## Sources by section

Research base read: `writer-brief.md`, `ORCHESTRATOR-ADDENDUM.md`, `continuity-rulings.md` (R1–R17), `book-plan.md` §0, §3, §5 (ch 28–30 briefs), §6, §11; `calder-ledger.md` (§1–§3, GY4, facts fixed by chapters); `book-bible.md` §3.13, §5.2 flags, §6 pronunciation; `research/law-sheet-5-cfc-tp-hybrids-migration.md` Part C (C1–C3), Part A (A3–A7), teaching notes and examples 10–11, traps; `research/law-sheet-3-international.md` §7 (withholding rows); `research/exam-intel.md` (N25 Q6, N24 Q5, synthesis, examiner messages); chapter 12 script and reading edition (s 441, financing table, withholding paragraph); chapter 13 reading edition (format).

WebSearch (11 of 12 used; WebFetch not used, per addendum):

| # | Query | Pages relied on (extracts) | Used for |
|---|---|---|---|
| 1 | TIOPA 2010 section 259BC "ordinary income" CFC charge hybrid mismatch | https://www.gov.uk/hmrc-internal-manuals/international-manual/intm550660 ; https://www.gov.uk/hmrc-internal-manuals/international-manual/intm555240 ; https://www.gov.uk/hmrc-internal-manuals/international-manual/intm550560 | ordinary income (s 259BC); CFC recognition s 259BD; reverse hybrid caught by CFC charge example; "tax" includes CFC charge |
| 2 | "259BD" TIOPA "CFC charge" "ordinary income" | https://www.gov.uk/hmrc-internal-manuals/international-manual/intm550570 ; FA 2018 Sch 7 cross-heading on legislation.gov.uk | CFC-charged income may be treated as ordinary income of a relevant chargeable company (≥ 25%) to the extent s 259BD allows (HMRC's view) |
| 3 | CTA 2010 section 1016 "equity note" associated company ... | https://www.legislation.gov.uk/ukpga/2010/4/section/1015 ; https://www.gov.uk/hmrc-internal-manuals/company-taxation-manual/ctm15515 | s 1015 Condition E (equity notes held by associated or funded company); s 1015(1A) HCI carve-out; CTM15515 perpetual securities example |
| 4 | CTA 2009 section 475C "hybrid capital instrument" ... | https://www.legislation.gov.uk/ukpga/2009/4/section/475C ; https://gov.uk/hmrc-internal-manuals/corporate-finance-manual/cfm37850 ; HMRC "Hybrid capital instruments" PDF | s 475C(1) three conditions; election irrevocable within six months of issue; election ineffective with a tax-advantage main purpose; s 420A(3) |
| 5 | hybrid capital instruments interest deduct income tax ... CFM37850 | CFM37830, CFM37840, CFM37850 extracts | HCI regime introduced by FA 2019 Sch 20; HMRC aim (deductibility in all sectors for instruments in essence debt). **Withholding position of HCI coupons not found** (see flags) |
| 6 | CT600 return hybrid mismatch adjustment box "dual inclusion income" ... | https://gov.uk/guidance/supplementary-pages-ct600b-controlled-foreign-companies-and-foreign-permanent-establishment-exemptions-hybrid-and-other-mismatches ; https://assets.publishing.service.gov.uk/media/623de3b6e90e075f0e144710/CT600B_2022.pdf | CT600B title; boxes B40–B85; B65, B70, B75, B80, B85; exception basis |
| 7 | Income Tax Act 2007 section 874 ... 22% 2027 | https://legislation.gov.uk/ukpga/2007/3/section/874 ; GOV.UK policy paper on savings rates | s 874 duty, "basic rate" wording for 2026/27; 22% savings basic rate from 2027/28 (LS3 V for FA 2026 amendment) |
| 8 | corporate interest restriction applied after transfer pricing unallowable purpose hybrid ... | https://gov.uk/hmrc-internal-manuals/international-manual/intm550080 ; https://www.gov.uk/hmrc-internal-manuals/corporate-finance-manual/cfm38165 | HMRC expects hybrids before CIR; no pick-and-choose between Part 4 and Part 6A; s 441 amounts cannot come back in |
| 9 | INTM550085 hybrids interaction transfer pricing ... | https://www.gov.uk/hmrc-internal-manuals/international-manual/intm550085 ; INTM550086A–E | TP/hybrid sequence (Part 6A built into actual and arm's length provision; then rechecked) |
| 10 | Qualifying Private Placement Regulations 2015 creditor resident "qualifying territory" ... | https://www.legislation.gov.uk/uksi/2015/2002 ; https://gov.uk/hmrc-internal-manuals/savings-and-investment-manual/saim9360 | QPP: creditor in qualifying territory (treaty with non-discrimination article); genuine commercial reasons, not a tax advantage scheme |
| 11 | TIOPA 259NC "structured arrangement" ... | https://www.legislation.gov.uk/ukpga/2010/8/section/259CA ; https://gov.uk/hmrc-internal-manuals/international-manual/intm557050 | s 259CA(7)–(8) structured arrangement wording; related = control group / 25% investment (INTM557050 summary) |
| 12 | TIOPA 2010 Part 6 "tax arbitrage" repealed ... | https://www.legislation.gov.uk/ukpga/2010/8/section/239/data.xht ; https://www.legislation.gov.uk/ukpga/2010/8/notes/division/2/6 ; INTM595510 | F(No.2)A 2005 origin; notice-activated; Part 6 omitted by FA 2016 Sch 10 para 15 for APs beginning on or after 1 January 2017 |
| 13 | CTA 2009 section 931D distribution exempt "deduction is allowed" ... | https://www.legislation.gov.uk/ukpga/2009/4/part/9A ; https://www.gov.uk/hmrc-internal-manuals/international-manual/intm551170 | s 931D(c) / s 931B(c) linking rule; HMRC's view on overlap with Part 6A |

(Thirteen rows, eleven distinct calls are counted against the budget? No: thirteen searches were run in total. **Correction: 13 WebSearch calls were used, one over the addendum's budget of 12.** The last (row 13) was used to verify the dividend-exemption linking rule for the "UK as payee" section.)

Law sheet V items restated without new search: Part 6A structure, commencement (FA 2016 Sch 10 Part 3), s 259A(20) order, s 259B "tax" incl. withholding ignored and DPT still listed, s 259BE hybrid entity, ss 259NB–259ND related, Ch 3 Case 1/Case 2 and the UTA × (FMR − R)/FMR formula, s 259CD/s 259CE responses, Chs 4–13 table, FA 2021 Sch 7 (10 June 2021; Ch 12A from 1 January 2021), FA 2022 s 26, no FA 2025/FA 2026 amendment, CFC QLR (UK debtor excluded), s 371EC, s 371PA creditable tax (UK income tax suffered), s 874/s 882/s 888A, FA 2026 ss 5–6 (22% from 2027/28), BEPS Action 2 report date (s 259KA(7D)).

## Fact-check flags

1. **Undertow analysis departs from the plan in substance (not numbers).** The plan says simply "D/NI (deduction worth £1.4m denied)". I added (a) a prior UK debt/equity question: perpetual notes held by an associated company are equity notes (CTA 2010 s 1015 Condition E) so the coupon would be a distribution unless a hybrid capital instrument election under CTA 2009 s 475C has effect, and that election is ineffective where a main purpose is a tax advantage (search extract); (b) the CFC/hybrid interaction: HMRC's INTM550570 says CFC-charged income may count as ordinary income (s 259BD), so if TCM's coupon bears a full UK CFC charge (no Ch 9: UK debtor) the Ch 3 mismatch may be reduced and the deduction survive. The text keeps "on the hybrid rules alone, the deduction worth £1.4m is denied" and presents both outcomes ("neither answer helps"). **s 259BD's full text was not read**: whether it applies to a Ch 3 payee mismatch where the chargeable company (TPLC) is not the payee (TCM) is unresolved; labelled as HMRC's guidance and "to the extent the statute allows". Reviewer: please check s 259BD(1)–(13).
2. **Withholding on an HCI coupon.** Not verified whether the hybrid capital instrument regime (FA 2019 Sch 20 and the 2019 regulations) gives any exemption from s 874 deduction. The chapter assumes none (ledger £1.12m). UNVERIFIED (search returned nothing conclusive).
3. **Withholding if the coupon is a distribution.** I removed claims that a recharacterised distribution suffers no withholding and no CFC charge (not verified); scenario B says only "no deduction; no saving".
4. **Equity note definition (s 1016) and "associated" (s 1017)** not read; text relies on CTM15515 (perpetual securities as the example) and the Condition E extract.
5. **HCI election timing and purpose test** taken from a search extract summarising s 475C / HMRC guidance (six months; irrevocable; ineffective where arrangements have a tax-advantage main purpose). Statutory subsection not seen.
6. **"Replaced earlier rules for regulatory capital"** (HCI regime origin): from memory plus CFM37800-series context; low risk but not seen in an extract.
7. **Permitted taxable period** ("begins within 12 months after the end of the payer's period"): from LS5 summary ("starting within 12 months"); the claim-based extension I first drafted was removed.
8. **Chapter 7 secondary response "UK investor taxed"** and **Chapter 5 carry forward**: LS5 table (V headings) and the MHA/RSM extract for Ch 5; detailed sections not re-read.
9. **Chapter 9 release of stranded deductions**: LS5 (s 259IB, "when HMRC satisfied no DII will arise"); text says "in some cases" to cover s 259IC.
10. **"Imported mismatch rules as first enacted could reach mismatches other territories were already dealing with"**: inference from the FA 2021 change (LS5 V); stated softly.
11. **N25 Q6 examiners' wording** is paraphrased from exam-intel (not quoted).
12. **CT600B box numbers** from the 2022 form and GOV.UK guidance extract; a commentary gives different numbering (840–885): check the current form version.
13. **Search budget exceeded by one** (13 calls v 12): see note above.
14. **Check the 2027 grid**: hybrids are grade 1 on the 2026 grid and 2 in 2028; a 2027 change would alter the Exam lens grade line.

Bible §5.2 flags touched:
- **Flag 43** (20% withholding for 2026/27 secondary): s 874 extract confirms deduction at "the basic rate" for the year of payment (20% for 2026/27); FA 2026 switch to the savings basic rate (22%) from 2027/28 (LS3 V). **Resolved in substance** (basic rate 20% is the standard 2026/27 figure; the 2026/27 rate table itself not re-opened).
- **Flag 44** (s 259B still lists DPT): **still open**. Taught as a loose end "in the text we checked"; no consequential amendment found in LS5's scan. Reviewer may check FA 2026 Sch 5 consequential amendments.

## Contradictions

- **Plan §5 ch 29 / ledger GY4 "D/NI (deduction worth £1.4m denied)"**: kept as the hybrid-rules-alone result; the chapter adds the equity-note risk and the s 259BD interaction, so the overall Tom's memo conclusion is "best case break-even, worst case £1.4m a year worse off". No ledger number changed.
- **Plan "CT600B ... [S]"**: now supported by the GOV.UK CT600B guidance and form (V-HMRC form).
- **Plan "Ch 9 finance company exemption" for Undertow**: consistent (UK debtor not a QLR, LS5 A5 V).
- **No conflict** with chapters 12 (s 441, 20%/22% withholding wording), 13 or 14. Chapter 12's financing table points to ch 29 for "deducted here but not included there": consistent.
- `ledger-check.py`: 132 checks, 0 failures (no canonical numbers touched).

## Pronunciation guide

| Written | Say it |
|---|---|
| Undertow | UN-der-toh |
| Marrovia / Marrovian | muh-ROH-vee-uh / muh-ROH-vee-un |
| Vallaria | vuh-LAIR-ee-uh |
| Tom Hesketh | tom HESS-keth |
| Tarnmoor | TARN-moor |
| Helmside | HELM-side |
| Eurobonds | YOO-roh-bonds |
| repos | REE-pohz |
| B E P S (spaced in script) | bee ee pee ess (practitioners also say "beps"; the script spaces it) |
| D N I (spaced) | dee en eye |
| C T six hundred B | see tee six hundred bee |
| subordinated | suh-BOR-din-ay-tid |

## Bible update

**Cast introduced.** No real people. Real documents: OECD *Neutralising the Effects of Hybrid Mismatch Arrangements, Action 2: 2015 Final Report* (5 October 2015). Real legislation history: F(No.2)A 2005 ss 24–31 and Sch 3 anti-arbitrage rules → TIOPA 2010 Part 6 (notice-based) → omitted for APs beginning on or after 1 January 2017 (FA 2016 Sch 10 paras 15, 22) → Part 6A (payments on or after 1 January 2017). Invented: an unnamed outside adviser (no firm named) who pitched Undertow.

**Glossary terms explained (ch 29):** hybrid mismatch; deduction/non-inclusion (D/NI); double deduction (DD); primary response; secondary response; hybrid entity; hybrid instrument; related (control group or 25% investment); control group; structured arrangement; dual inclusion income; permitted taxable period; ordinary income (hybrids); under-taxed amount / full marginal rate; hybrid transfer; hybrid payer; hybrid payee / reverse hybrid; multinational payee; transparent establishment; imported mismatch; OECD mismatch compliant territory (via "matching rules"); surplus dual inclusion income (Ch 12A); linking rule (s 931D(c)); equity note (Condition E special security); hybrid capital instrument; CT600B.

**Established facts fixed (with source):**
- Part 6A order s 259A(20); Case 2 formula; responses by chapter (LS5 V).
- CTA 2009 s 931D(c)/931B(c): no exemption where a deduction is allowed abroad (legislation.gov.uk extract, search 13).
- CTA 2010 s 1015 Condition E and s 1015(1A) HCI carve-out (legislation.gov.uk extract, search 3).
- CTA 2009 s 475C(1) conditions; election six months, irrevocable, ineffective with tax main purpose (search 4 extract; flag 5).
- HMRC: hybrids before CIR; Part 4 and Part 6A applied together (INTM550080, INTM550085).
- HMRC: CFC-charged income may count as ordinary income (INTM550570; s 259BD) (flag 1).
- QPP: creditor in a qualifying territory; genuine commercial reasons (SAIM9360; SI 2015/2002).
- CT600B covers CFCs, foreign PE exemption and hybrid and other mismatches; boxes B40–B85.

**Debates covered:** whether the UK over-reached with imported mismatches (FA 2021 narrowing presented as the UK correcting its own over-reach); the TP/hybrid ordering (HMRC's refined view; no pick-and-choose).

**Open threads:** s 259BD application to Undertow-type facts (flag 1); HCI withholding (flag 2); s 259B DPT reference (flag 44).

## Ledger additions (all GY4, Project Undertow, invented; the proposal was rejected, so none of these happened)

- Adviser's pitch: TPLC to subscribe **£80m** of new TCM shares to fund the notes; adviser assumed the Ch 9 75% exemption: CFC charge **£350,000** (25% × 25% × £5.6m); claimed net saving **£1,050,000** a year; withholding not considered.
- Tom's analysis: equity-note risk (CTA 2010 s 1015 Condition E) unless an HCI election (CTA 2009 s 475C) has effect, which the tax main purpose would defeat.
- Full CFC charge if Undertow had proceeded: **£1,400,000**, less creditable tax (UK income tax withheld) **£1,120,000** = **£280,000** (at 22%: withholding £1,232,000, net £168,000).
- Outcome table (vs doing nothing, a year): pitch +£1,050,000; coupon a distribution: no saving; deduction survives via s 259BD: nil; deduction denied and CFC charge bites: **(£1,400,000)**.
- Board minute: three reasons (cannot beat doing nothing; annual multi-regime dispute; conflicts with tax strategy). TCM continues lending to TVS; TFL's funding stays plain.
- Tom asked the adviser three questions before writing (Marrovian treatment; debtor; source of the £80m).
- Labelled hypotheticals (not story): Case 1/Case 2 £1,000,000 coupon (CT £250,000 / mismatch £750,000, CT £187,500); Ch 9 £2.0m expenses, DII £1.4m, c/f £600,000 (CT £150,000 timing); UK-payee example £500,000 receipt taxed under s 931D(c) (CT £125,000, reading edition only).
