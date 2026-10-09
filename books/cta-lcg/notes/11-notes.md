# Chapter 11 notes: Intangible assets and intellectual property

**Interpretation and assumptions.** Chapter 11 per plan §5 (7,000 words; script 7,344, reading edition 7,763), teaching CTA 2009 Part 8 at AT depth plus Patent Box at awareness level, on FY2026 law; story uses only ledger facts (Calder's GY3 sale to TVS, TIL's customer list, TAL's patents, Calder's Patent Box) plus labelled hypotheticals; no TKS files were available (addendum), so the TKS recap is limited to "TKS chapter 21 introduced the regime" as the bible §4.1 records.

## Sources by section

Research files: `research/law-sheet-1-ct-core.md` §4 (IFAs, V), §5 (Patent Box, V), §9–§12; `research/exam-intel.md` (N23 Q4, M24 Q3, synthesis tables, traps); `research/lcg-grid-extract-v2.txt` (IFAs grade 1 p6; Patent Box grade 3 p7); `research/law-sheet-2...` (s 179 contrast, s 156ZB); `research/law-sheet-3...` (s 906/s 911, TIOPA s 164A); `research/law-sheet-5...` (TIOPA s 147 intangibles non-money consideration); `book-bible.md` §3.7, §5.2; `calder-ledger.md`; `book-plan.md` §5 ch 11, §6, §9, §11.

WebSearch (10 of 12 used; WebFetch not used per addendum). Queries and the URLs whose extracts were relied on:

1. `"Corporation Tax Act 2009" section 775 transfers within a group "tax-neutral" chargeable intangible asset legislation.gov.uk` → https://www.legislation.gov.uk/ukpga/2009/4/section/775/data.html (three conditions; TIOPA Part 4 disapplied; exclusions incl. DRIC and s 18A branch-exemption assets; no outstanding effects). Used for: tax-neutral transfers section.
2. `CTA 2009 section 739 realisation of asset not shown in balance sheet...` → https://www.legislation.gov.uk/cy/ukpga/2009/4/part/8/chapter/4 ; https://www.legislation.gov.uk/ukpga/2009/4/section/739/2019-02-12 ; https://www.legislation.gov.uk/ukpga/2009/4/section/736/data.html ; CIRD13230. Used for: s 734(3) (asset with no balance sheet value treated as having one), s 736 (proceeds − cost), s 739 and s 739(1A) (FA 2018: non-cash consideration).
3. `CTA 2009 section 782A degrouping intangibles relevant share disposal...` → CIRD40510, CIRD40560, CIRD40570, CIRD40575 (gov.uk); ICAEW Taxline 2023 article. Used for: s 782A from 7 November 2018 (FA 2019 s 26); charge accrues in the leaving company (s 780); covers s 783; HMRC's stated purpose.
4. `Patent Box R&D fraction nexus formula...` → https://www.gov.uk/hmrc-internal-manuals/corporate-intangibles-research-and-development-manual/cird275000 (formula (D+S1)×1.3/(D+S1+A+S2), capped at 1; A includes licence fees).
5. `gov.uk "Corporation Tax: the Patent Box" election...` → CIRD260100 (election deadline: last day for amending the return, i.e. 12 months after the filing date), CIRD260110 (5-year bar after revocation), CIRD201010 (start 1 April 2013; full benefit from 1 April 2017), policy paper on the small-profits-rate formula amendment (2023).
6. `corporation tax goodwill amortisation relief removed 8 July 2015 Summer Budget policy paper...` → https://www.gov.uk/government/publications/restriction-of-corporation-tax-relief-for-business-goodwill-amortisation (quote: "brings the UK regime in line with other major economies, reduces distortion and levels the playing field for merger and acquisition transactions"); TIIN on the 2019 reform (assets.publishing.service.gov.uk file 767836) for the reinstatement rationale.
7. `TIOPA 2010 section 407 tax-EBITDA "intangible fixed assets"...` → https://www.gov.uk/hmrc-internal-manuals/corporate-finance-manual/cfm95805 ; CFM95800.
8. `CFM95805 interest restriction tax-EBITDA intangibles realisation credit...` → CFM95805 again (excluded credits "mainly ... gains on the disposal of an intangible fixed asset and ... reversal of excluded amounts"; excluded debits mainly amortisation incl. 4% and losses on disposal).
9. `CTA 2009 section 758 reinvestment relief...` → CIRD20130, CIRD20150 (claim; 4-year time limit; provisional declaration), CIRD20210 (full reinvestment), CIRD20220 (partial: expenditure − cost), CIRD20235, CIRD20240.
10. `Patent Box relevant IP profits steps routine return 10%...` → CIRD275000, CIRD220470, CIRD220480, CIRD220490; https://www.gov.uk/government/publications/the-patent-box-calculating-relevant-profits .
11. `CTA 2009 section 729 "writing down on accounting basis" debit formula...` → https://www.legislation.gov.uk/ukpga/2009/4/notes/division/2/8/1/3 ; s 729 revised page (inputs L, WDV, AV defined; formula image not rendered).

## Fact-check flags

1. **Resolved by R4 (ledger stands):** TIOPA s 408 excludes s 735 credits only to the extent cost exceeds TWDV; Calder's £6.0m credit (no tax cost, no past debits) stays in tax-EBITDA (Calder £8.6m; aggregate £87.7m; reactivation £1.96m; c/f £2.55m). Chapter text corrected; the original flag follows for the record. **CONTRADICTION WITH LEDGER (for chapter 28): Calder's £6.0m IFA realisation credit in CIR tax-EBITDA.** Ledger GY3 includes the £6.0m credit in Calder's tax-EBITDA contribution (£8.6m = 1.2 + 3.2 + 6.0 − 1.8). HMRC's CFM95805 says excluded "relevant intangibles debits and credits" (TIOPA s 407, defined in s 408) are mainly amortisation (including 4%), losses **and gains on disposal of IFAs**, and reversals. If so, Calder's contribution is **£2.6m**, aggregate tax-EBITDA **£81.7m**, 30% = **£24.51m**; ANTIE £24.35m; still no disallowance, but **reactivation £0.16m (not £1.96m)** and disallowances c/f **£4.35m (not £2.55m)** (computed in Python; group ratio lower at about 16.1% so fixed ratio governs). The chapter states the HMRC-guidance position without numbers and refers to chapter 28. s 408 Columns 1–2 not read (extract only): chapter 28's writer/orchestrator should verify and issue a ruling. Also unverified: whether royalty credits (s 722) stay in tax-EBITDA (CFM95805 extract truncated); not stated in the chapter.
2. **Law sheet 1 §4 formula for the 6× cap appears inverted.** It writes "A ÷ (B × N) < 1"; the rule as taught (relief limited to relevant-asset cost up to 6 × IP spend, i.e. proportion 6A/B) follows s 879M's wording and the law sheet's own explanation. s 879O formula is an image (bible flag 12): still open; exact statutory formula not seen.
3. **s 729 accounts-basis scaling:** inputs (L, WDV, AV) verified from legislation.gov.uk extract; the combination L × WDV/AV is inferred (formula image not rendered). Stated in words ("scaled by the ratio").
4. **Patent Box small claims threshold:** CIRD220470 extract (QRP ≤ £1m route) and GOV.UK guidance (£3m) conflict; the chapter mentions small claims without a figure. Pre-grant ("patent pending") profits: the 6-year point **UNVERIFIED** and omitted. Relevant IP income categories in the reading edition (sales, licence fees/royalties, infringement income, notional royalties) are from general knowledge of s 357CC: outline only, not individually verified.
5. **Patent Box rationale:** phrased as a description of the incentive's effect, not a quoted government purpose (no primary statement opened). BEPS Action 5 attribution of the nexus approach is standard but the OECD report was not opened (oecd.org blocked).
6. **Section numbers not individually re-opened:** s 712, 713, 715, 741 (definitions), s 753 (non-trading loss relief), s 783/789/791/792/795 (from law sheet 1 §4 list, V headings), Ch 6 numbering. Ch 10 (ss 800–816) per law sheet headings. Software CA election mentioned without a section number.
7. **Reinvestment claim time limit:** "4-year claim time limit" is HMRC's manual (CIRD20150); the script says "the ordinary time limit for claims".
8. **History:** pre-2002 position (goodwill capital; patents and know-how capital allowances; trade marks nothing) stated from general knowledge, at a high level; FA 2002 Sch 29 origin confirmed by legislation.gov.uk explanatory notes to s 729 (based on FA 2002 Sch 29 para 9). The 2014 incorporation restriction date was **not** used (unverified).
9. **Accounting statements:** IFRS (no amortisation of goodwill/indefinite-life intangibles) and FRS 102 (all intangibles finite life) from general accounting knowledge, not re-opened. The plan's idea of tying the 4% election to Calder's FRS 101 adoption was dropped (FRS 101 goodwill amortisation interacts with the Companies Act true-and-fair override: not researched).
10. **Exam lens:** grades from the v2 grid; N23 Q4 and M24 Q3 from exam-intel; "very well answered overall" paraphrases exam-intel's "Very good overall". Check the 2027 grid (IFAs could move before the 2028 change).
11. **Bible §5.2 flags touched:** flag 12 (Patent Box guidance dated 2020; s 879O image): partly addressed (mechanics now also from CIRD260100/260110/275000/201010); s 879O still open. Flag 30 (intangibles degrouping on an exempt demerger): not touched (TWS has no intangibles). Flag 15 (s 407 treatment of gains): extended by flag 1 above to IFA realisation credits.
12. **Reinvestment relief in the story:** the chapter says Tom finds nothing worth claiming and no claim is made, without fixing the date of TIL's GY2 customer-list purchase (it may or may not fall within the window from 1 October GY2). If a later chapter fixes that date, the story line still holds (no claim made).
13. **Plan departure:** none on substance. The degrouping counterfactual (£2.8m credit, £700,000 CT) ignores write-downs between 1 February and 31 December GY6 (labelled).

## Contradictions

- Ledger GY3 CIR (Calder £8.6m including the £6.0m IFA credit): see flag 1. Correction proposed: Calder £2.6m; aggregate £81.7m; reactivation £0.16m; c/f £4.35m (subject to ch 28 verification of s 408). Resolved by continuity ruling R4 (ledger stands; proposal withdrawn).
- Law sheet 1 §4 cap formula: see flag 2.
- No contradiction found with the bible §3.7 figures.

## Pronunciation guide

| Written | Say it |
|---|---|
| Tarnmoor | TARN-moor |
| Calder | KAWL-der |
| Vallaria / Vallarian | vuh-LAIR-ee-uh / vuh-LAIR-ee-un |
| Ashlar | ASH-lar |
| Brackenwell | BRACK-un-well |
| Brennock | BREN-uck |
| Hesketh | HESS-keth |
| nexus | NEK-sus |
| amortisation | uh-MOR-tie-ZAY-shun |
| realisation | REE-uh-lie-ZAY-shun |
| degrouping | dee-GROOP-ing |
| F R S one oh two | eff ar ess one oh two |

## Bible update

**Cast introduced (real):** none (no case law used). Documents: HM Treasury/HMRC policy paper *Restriction of CT relief for business goodwill amortisation* (2015); TIIN *Reform of tax relief for goodwill amortisation in the corporate intangibles regime* (FA 2019).

**Invented facts used (all from the ledger):** Calder's 1 October GY3 sale (£6.0m; nil tax cost; trading credit; CT £1.5m); TIL customer list (£3.0m, no debits); TAL patents (WDV £1.2m, MV £4.0m; s 782A); Calder Patent Box from GY4 (RP £0.9m; deduction £540,000; CT £90,000); royalty £1.2m (6%); WHT £60,000. Tom Hesketh considers and rejects a reinvestment claim (new invented beat, no numbers).

**Glossary terms explained (chapter 11):** intangible fixed asset (AT depth); chargeable intangible asset; fixed-rate election (4%); realisation; non-trading gain/loss on intangibles; relevant assets (goodwill and customer-related); qualifying IP assets; the 6× cap; reinvestment relief (intangibles); intangibles group; tax-neutral transfer; intangibles degrouping charge; s 782A switch-off; related party (intangibles); arm's length price v market value (FA 2026); Patent Box; relevant IP profits; routine return; marketing assets return; nexus (R&D) fraction; Patent Box election.

**Established facts fixed (with source):**
- s 782A applies to degroupings on or after 7 November 2018 (FA 2019 s 26) — CIRD40570/40575 extract.
- Intangibles degrouping charge accrues in the leaving company (s 780) — CIRD40560 / ICAEW.
- s 775 transfers: TIOPA Part 4 disapplied; exclusions include DRICs and s 18A branch-exemption assets — legislation.gov.uk s 775.
- Assets with no balance sheet value treated as having one (s 734(3)); s 739(1A) non-cash proceeds (FA 2018) — legislation.gov.uk.
- Reinvestment: full reinvestment relief = proceeds − cost; partial = expenditure − cost (s 758(2)–(3)) — CIRD20210/20220.
- Patent Box: start 1 April 2013, full 1 April 2017 (CIRD201010); election within 12 months after the filing date (CIRD260100); 5-year bar after revocation (CIRD260110); nexus fraction (D+S1)×1.3/(D+S1+S2+A) ≤ 1 (CIRD275000).
- CIR tax-EBITDA excludes relevant intangibles debits (amortisation, 4% debits, disposal losses) and realisation credits only to the extent of cost less TWDV — TIOPA s 408 (R4; CFM95805 is HMRC's looser summary).
- 2015 goodwill withdrawal rationale (policy paper quote above).

**Debates covered:** L9 (tax following the accounts) through the accounts-basis debit and the 4% fix; L3 (arm's length) touched via the FA 2026 single valuation standard; the asset-versus-share deal tension (feeds chapter 20).

**Open threads:** Calder's TP dispute (chapter 27); TIL exit charge on the customer list (chapter 22); the CIR treatment of Calder's £6.0m credit (chapter 28; flag 1).

## Ledger additions

- **Implied:** TVS's Ashlar valve sales about **£20m a year** from GY4 (royalty £1.2m at 6%) — stated in the reading edition only.
- **Patent Box saving** for Calder: **£135,000** a year (CT £225,000 without the box v £90,000).
- **TAL patents counterfactual** (labelled, not a story event): degrouping credit £2.8m, CT £700,000 if s 782A had not applied; after the sale TAL keeps WDV £1.2m (no uplift).
- **Calder GY3 sale:** CT on the £6.0m credit **£1.5m** at 25%; no reinvestment relief claimed.
- Proposed CIR correction (flag 1) for the orchestrator's continuity ruling: withdrawn (R4; ledger figures stand).
- `ledger-check.py` re-run: 96 checks, 0 failures (no canonical numbers changed).

---

## Continuity fixes applied (9 October 2026, after `continuity-rulings.md`)

| Ruling | File | Before → after |
|---|---|---|
| R4 | `11-intangibles-and-ip-reading.md` (Going further, CIR paragraph) | "HMRC's guidance (CFM95805) says it also ignores relevant intangibles debits and credits (s 407, defined in s 408): mainly amortisation, including 4% write-downs, losses and gains on disposals of IFAs, and reversals of excluded amounts. On that guidance, a large realisation credit like Calder's £6.0m raises taxable profits but not interest capacity." → tax-EBITDA ignores amortisation (including 4%) and losses on disposal; the s 408 table excludes s 735 realisation credits only to the extent cost exceeds TWDV ("amortisation in, amortisation out"); CFM95805 is HMRC's looser summary; Calder's £6.0m (no tax cost, no past debits) is a gain over cost and raises both taxable profits and interest capacity |
| R4 | `11-intangibles-and-ip-reading.md` (Key rules and figures, CIR row) | "Patent Box deduction and relevant intangibles debits and credits excluded from tax-EBITDA" → "Patent Box deduction and intangibles debits excluded from tax-EBITDA; realisation credits excluded only to the extent of cost less TWDV (s 408)" |
| R4 | `11-intangibles-and-ip.txt` (CIR paragraph) | "H M R C's guidance says it also ignores ... gains and losses on disposals of intangibles. So a large realisation credit, like Calder's six million pounds, raises taxable profit but, on that guidance, does not raise the interest capacity." → ignores amortisation, four per cent write-downs and losses on disposals; a realisation credit is left out only so far as it claws back earlier tax debits (cost less tax written-down value); "amortisation in, amortisation out"; H M R C's summary sounds wider but the statute is the test; Calder's six million pound credit raises both taxable profit and interest capacity |
| R4 | `notes/11-notes.md` | flag 1 marked resolved (ledger stands); Contradictions line "Resolved by continuity ruling R4"; Bible-update CFM95805 line and Ledger-additions proposal corrected/withdrawn |
| R16 | both editions | `grep -n -i -E "ledger|continuity|the plan for this book"`: no hits; no change |

No numbers changed (ledger GY3 CIR figures stand: Calder £8.6m; aggregate £87.7m; reactivation £1.96m; c/f £2.55m). §11 scans on the script: 0 symbol/digit hits (heading colon only), 0 dash hits, 0 unspaced acronyms. Word counts after fixes: script 7,400; reading edition 7,840. `ledger-check.py`: 132 checks, 0 failures.
