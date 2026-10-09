# Technical review F: chapters 27, 28, 29, 30 and 32

Reviewer F, 9 October 2026. I reviewed the scripts, reading editions and notes for chapter 27 (transfer pricing and APAs), chapter 28 (corporate interest restriction), chapter 29 (hybrid mismatches), chapter 30 (the global minimum and the end of DPT) and chapter 32 (the Advanced Technical craft). Chapter 31 was being written in parallel and was not touched.

I checked them against `writer-brief.md`, `ORCHESTRATOR-ADDENDUM.md`, `continuity-rulings.md` (R1 to R29), `calder-ledger.md`, law sheets 1, 3 and 5, `exam-intel.md` and the v2 grid.

I used 16 WebSearch calls (standard mode; budget 25). I re-ran every computation in Python (scratch folder `scratchpad/review-F/`). The checks covered:
- chapter 27: the methods examples, WE 27.5 and 27.6, the TIL loan, the royalty and Patent Box figures, and the € conversion;
- chapter 28: the ANTIE, tax-EBITDA, ANGIE and group ratio tables for GY1 to GY3, the excess debt cap, pro rata allocation, the TP-into-CIR effects, the de minimis, QIC and s 86A examples, and the R20 revised return;
- chapter 29: Case 2 scaling, DII, and every Undertow outcome at 20% and 22%;
- chapter 30: the CFC push-down, ETR, top-up, safe-harbour euro figures and the UTPP premium;
- chapter 32: the time plan, pass rates and TEL's GY2 £/£000 table.

I found no arithmetic errors. Every grade matches the v2 grid: TP, CIR, hybrids and CFC are 1; DPT, MTT and DTT are 3. Every past-paper reference matches `exam-intel.md`.

## Stage 0: continuity fixes applied before review (R18–R29)

| Ruling | Chapter | Change (both editions unless stated) |
|---|---|---|
| R19 | 28 | TES GY3 split restated as £14,311,000 + net gains £489,000. The lease assignment gain is now £189,000 after indexation (it was £351,200), and net gains are now £489,000 (they were £651,200). Script: "four hundred and eighty nine thousand pounds of net gains"; "after indexation". |
| R20 | 28 | WE 28.5 GY3 column labelled "as filed". New passage "A return revisited (GY6)" in the reading edition: Calder 8.6 → 10.6; Sch 7A para 8(4) revised return within 3 months; aggregate £89.7m; allowance £26.91m; reactivation £2.47m; c/f £2.04m; TPLC debits £10.97m; TEL's Sch 18 para 74 window closed, so the extra £0.6m is stranded (book's reading; £150,000). Four sentences carry the same content in the script. Other edits: the unused-allowance point now cites CFM98240 (HMRC's view); the tax-effect line, key-figures row, takeaway and references are updated. |
| R20 | 27 | The "restructuring ripple" CIR bullet now states the revised return and the £1.87m → £2.47m reactivation, with TEL's group relief out of time. Script: one sentence added. |
| R26 | 27 | Interest on the £500,000 runs from the instalment dates to the normal due date (1 October GY4), then at the late payment rate. |
| R28.8 | 30 | UTPP conditions cited as ss 217C–217E (s 217D on the mismatch; INTM489105), in the text, the key-rules table and the references. |
| R29 | 27, 29 | Checked: already consistent (s 164A ceases at migration; the £125,000 is collected through TEL; Undertow's £350,000, £1,050,000 and £280,000 figures and the three reasons). |
| R18, R19, R20, R22, R23 (guidance) | 32 | Reading edition only, because the script is at the top of its band. Trap-atlas rows added: FYA balance pooled after the WDA (s 58(5)); stamp duty on a capped earn-out uses the stated maximum; earn-out receipts after an SSE sale are the "accepted view"; blocked trade receipts are dealt with under ss 173–175, not Part 18. "Favourite combinations" now cites the GY6 TP → CIR → group relief example. |

Each chapter's notes now has a "Continuity fixes applied" section. `ledger-check.py`: 212 checks, 0 failures.

## Chapter 27: Transfer pricing and advance pricing agreements

| # | Class | Location | Finding | Correction (applied) | Source |
|---|---|---|---|---|---|
| 27.1 | MINOR | Reading, key rules row "UK-to-UK exemption", status cell: "V (conditions via law sheet and INTM414320)" | Production word (R16). | "V (conditions via INTM414320)". | R16 |
| 27.2 | MINOR | Script, takeaway: "Section one six four A applies from chargeable periods commencing" | Brief §13: say "for", not "from", with a "periods commencing" rule. | "applies for chargeable periods commencing". | writer-brief §13 |
| 27.3 | Confirmed, no change | Para 3C presumption; "Since July twenty twenty three" | Inserted by F(No.2)A 2023 Sch 5 (Royal Assent 11 July 2023). It applies to CT APs beginning on or after 1 April 2023, and the records duty sits in FA 1998 Sch 18 para 21. The £3,000 penalty under para 23 is correctly cited. | — | legislation.gov.uk F(No.2)A 2023 Sch 5 Part 3 (search extract); INTM450070 |
| 27.4 | Confirmed, no change | BlackRock TP limb; *DSG Retail*; *Test Claimants*; SME thresholds; LVAS 5%; APA practice; ICTS status; five TP sittings since M23 | These match law sheet 5 (V), the bible, the prologue and exam-intel. | — | LS5 Part B; exam-intel |
| 27.5 | Confirmed, no change | R26 rates | The chapter gives no rate and describes the regime only. This is consistent with R26. | — | R26 |

## Chapter 28: The corporate interest restriction

| # | Class | Location | Finding | Correction (applied) | Source |
|---|---|---|---|---|---|
| 28.1 | LIKELY | Script, "Money is mobile and fungible": "The United Kingdom legislated within months of that update, which is why the regime starts in April twenty seventeen." | The causal claim is misleading. The UK had announced the April 2017 start before the OECD's December 2016 update. F(No.2)A 2017 then enacted the rule later in 2017, with effect from 1 April 2017. | "The United Kingdom had already announced its own rule, to start in April twenty seventeen, and it legislated later that year." | Reading edition (F(No.2)A 2017 Sch 5; CFM95110) |
| 28.2 | MINOR | Reading Exam lens boxes: "(law sheet trap 1)", "(trap 2)", "law sheet trap 6", "(trap 4)", "(trap 7)", "exam-intel trap 16" | Production references (R16). | Removed. Trap 16 is now described as "the M26 marking point". | R16 |
| 28.3 | Confirmed, no change | Reactivation cap = interest allowance − ANTIE, floored at nil (s 373(3)) | The statutory text (LawPlayer copy of Part 10) and CFM98620 agree. Brought-forward unused allowance does not create reactivation capacity. Notes flag 3 is resolved. | — | Search: lawplayer.com TIOPA Part 10; CFM98620 |
| 28.4 | Confirmed, no change | R20 revised return | Sch 7A para 8(4): a revised return is **required** where figures have become incorrect. Para 8(5): it must be received within 3 months. A closure-notice-driven revision overrides the para 8(3) 36-month limit (CFM98800). | — | legislation.gov.uk Sch 7A para 8 (extract); CFM98530; CFM98800 |
| 28.5 | Confirmed, no change | QIC election "before the end of the accounting period"; revocation not effective for a period beginning within 5 years | Correct as HMRC's guidance. | — | CFM97240 (search extract) |
| 28.6 | Confirmed, no change | All GY1–GY3 CIR figures; pro rata £967,883 / £193,577 / £338,759 / £709,781; WE 28.8 (2.36 v 2.21) | Recomputed. | — | Python |

## Chapter 29: Hybrid mismatches

| # | Class | Location | Finding | Correction (applied) | Source |
|---|---|---|---|---|---|
| 29.1 | ERROR (citation) | Reading, end of "Imported mismatches": "Chapter 13 (ss 259MA–259MD) is a targeted anti-avoidance rule"; references "259MA–259MD" | Part 6A Chapter 13 is a single section, **s 259M** (relevant avoidance arrangements; just and reasonable counteraction; s 259M(6) carve-out). Chapter 12A runs ss 259ZMA–259ZMF. | Text: "Chapter 13 (s 259M) ... (relevant avoidance arrangements, counteracted on a just and reasonable basis)". References: "259M" and "Ch 12A, ss 259ZMA–259ZMF, including s 259ZMB". The script names no sections, so it is unchanged. | INTM561500; legislation.gov.uk TIOPA Part 6A Ch 13; FA 2021 Sch 7 Part 6 / INTM561210 (search extracts) |
| 29.2 | Confirmed, no change | s 259BD: CFC-charged income may be ordinary income of a relevant chargeable company (≥ 25%), to the extent s 259BD allows | Matches INTM550570. The chapter's "C v D" outcome table is properly labelled as turning on this point. | — | INTM550570 (search extract) |
| 29.3 | Confirmed, no change | Undertow arithmetic, withholding (20%; 22% from 2027/28), CFC Ch 9 QLR exclusion for a UK debtor, s 931D(c) linking rule, order s 259A(20) | Consistent with LS5 (V), the ledger and R29. | — | LS5 Part C; Python |

## Chapter 30: The global minimum and the end of diverted profits tax

| # | Class | Location | Finding | Correction (applied) | Source |
|---|---|---|---|---|---|
| 30.1 | LIKELY | Both editions, *Glencore*: "later commentary cites that decision for the same principle" | The outcome was unverified (notes flag 5), so the text hedged. The Court of Appeal in fact **dismissed** Glencore's appeal ([2017] EWCA Civ 1716, 2 November 2017; Gloster, Sales and Singh LJJ; Sales LJ gave the lead judgment). It held that the statutory review and appeal were a suitable alternative remedy, and that judicial review was appropriate only in an exceptional case. Green J's judgment date of 29 June 2017 is confirmed. | Reading edition states the dismissal and its ground, and the references add "appeal dismissed". Script: "Glencore appealed, and later that year the Court of Appeal dismissed the appeal on the same ground. Judicial review would be right only in an exceptional case." (4 words shorter.) | caselaw.nationalarchives.gov.uk/ewca/civ/2017/1716; Pinsent Masons; HSF; Devereux Chambers note (search extracts) |
| 30.2 | MINOR | Script, takeaway: "the profits do not arise wholly from loans" | Over-simplified. The exception is for **excepted loan relationship arrangements**. | "wholly from excepted loan arrangements". | INTM489150, INTM489215 |
| 30.3 | MINOR (not fixed: canonical) | Reading WE 30.1, GY7: "€1,322m" | £1,150m × 1.15 = €1,322.5m, which conventional rounding makes €1,323m. GY3's €1,483.5m was rounded **up** to 1,484, so the row is internally inconsistent. The figure is in ledger §7. No conclusion depends on it. | See "Needs orchestrator ruling". | Python |
| 30.4 | Confirmed, no change | DPT 31% | FA 2021 s 8 amended FA 2015 s 79 for APs beginning on or after 1 April 2023, with straddling periods split. | — | legislation.gov.uk FA 2021 s 8 (search extract) |
| 30.5 | Confirmed, no change | UTPP: preliminary notice within 4 years; three conditions in s 217C(1) (ETMO, TDC, not wholly excepted loan relationships); rate in s 217A | Matches HMRC's manual. | — | INTM489215, INTM489105, INTM489115 (search extracts) |
| 30.6 | Confirmed, no change | UTPR in F(No.2)A 2023 Part 3 Ch 9A (s 229A onward), inserted by the Finance Bill 2024-25 Sch 4 (FA 2025) | Confirmed. The exact range "ss 229A–229J" was not seen. | — | KPMG; Tax Adviser; MTT62210 (search extracts) |

## Chapter 32: The Advanced Technical craft

| # | Class | Location | Finding | Correction | Source |
|---|---|---|---|---|---|
| 32.1 | Confirmed, no change | Autumn 2027 sitting: 26 October 2027, 2.30pm | The CIOT exam entry page confirms 26 October 2027 in the 2.30pm slot with Cross Border and Environmental Taxes. The chapter's "check your entry confirmation" for the 28 October line stays. | — | tax.org.uk/examentry, /key-dates-and-deadlines (search extract) |
| 32.2 | Confirmed, no change | Paper shape, day rules, RM screen, tables contents, mark mix, pass rates (1,343 / 2,039 = 65.9%), time plan, TEL GY2 £/£000 table, 2028 changes | Every item matches exam-intel (verified CIOT sources) and Python. | — | exam-intel; Python |
| 32.3 | Confirmed, no change | "14% for chargeable periods beginning on or after 1 April 2026, with hybrid rates for straddling periods" | Consistent with the bible, chapter 8 and review B. | — | bible §3; ch 8 |

## Audio and production-word scans (after all fixes)

The brief §11 scans (symbols, digits, colons, dashes, unspaced acronyms) and the R16 production-word scan are clean on all five scripts. The R16 grep is clean on all five reading editions; the only remaining hit is the ordinary verb "brief the SAO" in chapter 30. Script word counts against target ±10%:

| Chapter | Count | Target |
|---|---|---|
| 27 | 9,267 | 9,000 |
| 28 | 8,411 | 8,000 |
| 29 | 6,110 | 6,000 |
| 30 | 5,454 | 5,000, ceiling 5,500 |
| 32 | 5,990 | 5,500, ceiling 6,050 |

## Needs orchestrator ruling

- **WE 30.1 / ledger §7 revenue row:** GY7 £1,150m at €1.15 = €1,322.5m. The ledger shows €1,322m, apparently banker's rounding, while GY3's €1,483.5m is shown as €1,484m. Conventional rounding gives **€1,323m**. This is trivial and no conclusion depends on it. If changed, it needs changing in the ledger, `ledger-check.py` (if tested) and chapter 30's reading edition (and any other chapter quoting it).

## Could not verify (labels kept in the text)

- **TIOPA s 164A(2)(a)–(d) text:** how the "same rate" condition reads for a nil-profit company (TPLC), the "banking company" definition, and whether residence is needed "throughout" a period (TIL in GY4). Two searches returned only INTM414320's outline and advisers' summaries. Chapter 27's "not settled" and "book's reading" labels stand.
- **CbC (SI 2016/237):** the prior-period measurement of the €750m threshold and the penalty amounts (£300; £60 a day; £3,000). These appear only in secondary summaries, and one gives £30. CC/FS59 and IEIM300200 extracts list the failures but not the amounts. They stay labelled "as advisers summarise them".
- **Sch 7A para 8(5) start date** for the 3-month window ("becoming aware" per CFM98530, not seen verbatim). R20's "within three months of the settlement" is consistent.
- **F(No.2)A 2023 ss 229A–229J range** (UTPR) and **FA 2016 Sch 10 para 15** commencement wording for the repeal of old Part 6: not seen.
- **Stranding of TPLC's extra £0.6m GY3 deficit** (s 188BE reading; R20): book's reading, labelled.
