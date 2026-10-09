# Notes: Chapter 6, Deferred tax and the tax charge

**Interpretation.** A core-grade tax accounting chapter taught from first principles (TKS did not teach deferred tax), built around the canonical Calder 31 March GY2 balances, with IAS 12 as the main language (Tarnmoor's IFRS group accounts; FRS 101) and FRS 102 s 29 as the second; Pillar Two rules left to chapter 30, CA mechanics to chapters 8–9, losses law to chapter 14. Assumption: story PBT and the GY2 group reconciliation figures are invented here (listed under ledger additions).

**Files.** `chapters/06-deferred-tax.txt` (script, 6,567 words; target 6,000 ±10%, upper end); `chapters/06-deferred-tax-reading.md` (reading edition, about 7,000 words). Computations: scratch `lcg-ch06/calc.py` and `calc2.py` (Python, fractions); `ledger-check.py` re-run: 96 checks, 0 failures (no canonical number changed).

## Sources by section

**Research files:** law sheet 4 §2 (deferred tax; IAS 12 summary V; Pillar Two exception V/S; FRS 102 s 29 S; rates V), §FA 2026 changes (ss 11, 12, 28, 29 V), trap 1; exam-intel §3 (M24 Q2, M25 Q2, N25 Q1, M26 Q6 tables), synthesis table, trap 21, Prospectus 2026 quote; grid v2 (deferred tax 1; impact of accounting standards 1); bible §3.2, §3.5, §3.13, §3.15; ledger §6–7 (GY1–GY3).

**WebSearch (12 of 12 used; extracts relied on):**
1. "IAS 12 paragraph 81(c) numerical reconciliation …": IFRS taxonomy illustrative example (ifrs.org/content/dam/ifrs/standards/taxonomy/2024/illustrative-examples/ixbrl-example10-2024-03-27.xhtml); AASB text (standards.aasb.gov.au/node/694); paras 81(c), 84, 85.
2. "IAS 12 Pillar Two amendments 23 May 2023 … UK endorsement 19 July 2023 FRC …": iasplus.com/en-gb/news/2023-en-gb/july/ukeb-adopts-amendments-to-ias-12…; iasplus.com/en-gb/news/2023-en-gb/july/frc-amends-frs-102-and-frs-101…; FRC PDF Amendments-to-FRS-102-and-FRS-101_July2023.pdf; icas.com news; mindthegaap-uk.forvismazars.com/?p=2171. UKEB adoption 19 July 2023 now **V (IAS Plus reporting UKEB)**; FRC "July 2023" V (IAS Plus dates its article 12 July 2023: exact FRC issue date unconfirmed).
3. "'substantively enacted' UK Finance Bill third reading … 24 May 2021": whitingsllp.co.uk/deferred-tax-rate-to-increase/; bdo.global FA 2021 deferred tax newsletter; icaew.com news in brief 2 June 2021; SEC filing R11.htm. 24 May 2021 (Commons) and 10 June 2021 (Royal Assent) **V (multiple secondary sources agree)**.
4. "IAS 12 paragraph 15 … goodwill; paragraph 19 …; paragraph 66": IAS 12 text copies (ktkt.uel.edu.vn ias12_en.pdf; legislation.gov.uk/eur/2004/2236 annex; eur-lex 2022/1392). Paras 15(a), 15(b), 19, 66 S+ (consistent standard text reproductions).
5. "IAS 12 paragraph 68B 68C share options …": KPMG "tax effects share based payments"; Deloitte DART E.9. **S** (para text not opened; labelled in reading edition).
6. "IAS 12 paragraph 35 … paragraph 28 … paragraph 53": ESMA public statement esma32-63-743; IFRS IC staff papers; ifrs.org html standard ias12 (2024). Paras 28, 35, 53 S+ (consistent quotations).
7. "RDEC merged scheme accounting above the line …": accountingweb.co.uk; ACCA "A new approach for R and D investment" (Oct 2024); KPMG Ireland guidance. **S** (practice, labelled "in common practice").
8. "FRS 102 section 29 'timing differences plus' … 29.15 …": icaew.com TAS helpsheet "Deferred tax under FRS 102"; accaglobal.com In Practice Oct 2022; accountingweb node 114195. **S**.
9. "CIOT May 2026 examiners report … question 6 deferred tax": tax.org.uk/may-2026-past-exam-papers-scripts-suggested-answers (listing only). Nothing new; M26 Q6 comments taken from exam-intel (V there, paraphrased; no direct quotation used).
10. "IFRIC 23 … effective 1 January 2019 …": ifrs.org IFRIC 23 illustrative examples; iasplus.com IFRIC 23 page; BDO July 2017. Effective date and measurement methods V (consistent).
11. "IAS 12 paragraph 4A … 88A–88D; single transaction amendment effective …": eur-lex 2023/2468; ifrs.org news May 2021 "IASB clarifies accounting for deferred tax on leases and decommissioning obligations". Paras 4A, 88A–88D and effective dates V; single-transaction amendment effective for annual periods beginning on or after 1 January 2023 V.
12. "IAS 12 paragraph 51C investment property … FRS 102 29.16": ifrs.org IFRIC agenda decision November 2011 (rebuttable presumption); accountingweb FRS 102 thread. 51C V (agenda decision); FRS 102 29.16 **S**.

## Fact-check flags

1. **Calder PBT £3.8m (new story fact)**, derived so that TTP £3.0m reconciles with the ledger: PBT 3,800 + qualifying depreciation 600 − CAs 1,800 + closing accruals 800 − opening accruals 400 = 3,000. The ledger's CAs (£1.8m) and fixed asset difference movement (4.4 → 5.6) force qualifying depreciation of **£0.6m**, which is low against £14.6m of plant (about 4%). Plausible only if much of the plant is long-life; flag for the orchestrator. Calder assumed to have **no permanent differences** in that AP (simplification; e.g. depreciation on the works building ignored).
2. **RDEC presentation** above the line: practice/secondary, labelled; not a statutory point.
3. **FRS 102 paragraph detail** (29.7, 29.12, 29.15–29.16; "timing differences plus") secondary (ICAEW, ACCA, AccountingWeb); one search result (LearnSignal) contradicted the AccountingWeb reading of 29.15; the ICAEW helpsheet (via law sheet 4) supports provision on revaluations. Labelled "professional guidance".
4. **IAS 12 paras 68A–68C** (share options to equity) secondary only (KPMG, Deloitte): labelled in the reading edition; the script states the rule without paragraph numbers.
5. **IAS 12 para 74** (offset) not searched: stated generally.
6. **SBA buildings and deferred tax**: deliberately not taught ("practice varies"); not researched. Possible later addition (TCGA s 37B add-back of SBA on disposal) **UNVERIFIED**.
7. **March 2021 Budget announcement** of the 25% rate stated from general knowledge (not in the search extracts, which confirm only the 24 May / 10 June dates and the 1 April 2023 effective date). Low risk; reviewer may confirm.
8. **Pillar Two exception "no end date"**: FRS 102 "no specified end date" per Forvis Mazars (S); IAS 12 described the same way in the text ("no end date was set"). Not checked against any IASB decision after 2023: **check before publication** whether the IASB has since set an end date.
9. **M26 Q6 examiner comments**: paraphrased from exam-intel (no direct quotation). N25 quotation ("only a small number of candidates calculated the deferred tax charge") is exact per law sheet 4.
10. **Group ETR reconciliation (GY2)** is a simplified, labelled illustration: Pillar Two top-up omitted (chapter 30); Helmside equity-accounted loss and consortium relief assumed offsetting; TVS PBT £30m invented.
11. **Bible §5.2 flag 23** (IAS 12 paras 68A–68C, 81(c); FRS 102 Pillar Two paragraph numbers): **partly resolved**: para 81(c) and paras 4A/88A–88D verified via search; 68A–68C still secondary; FRS 102 Pillar Two paragraph numbers not found (FRC document cited as July 2023 only).
12. **2027 grid**: deferred tax assumed still grade 1 (check when published).
13. Section lengths: two sections are slightly under the brief's 400-word floor in the script ("Two numbers for one year." 365, after an opening of 200; "Which rate, and when." 394; "The tax function…" about 395), to keep the whole script within the word target.

## Contradictions with plan, bible or ledger

- None with the ledger: all canonical Calder deferred tax figures used unchanged (NBV £14.0m; TWDV £8.4m; DTL £1.4m; short-term £0.8m; DTA £0.2m; opening DTL £1.1m / DTA £0.1m; charge £0.2m), and CT £750,000 / RDEC £400,000 / payable £350,000.
- Plan brief said the ETR reconciliation is "for Tarnmoor GY2": done, simplified. Calder's own reconciliation added (exactly 25%).
- Plan's IAS 12 Pillar Two "UK endorsement 19 July 2023 [S]": now verified (IAS Plus report of UKEB adoption).
- Ledger arithmetic note (not a contradiction): Calder's AP to 31 March GY2 implies qualifying depreciation of only £0.6m (flag 1). **Resolved by continuity ruling R12** (heavy long-life plant; special rate pool); note added beside the depreciation line.
- Group ETR GY2 omitted TPLC's management expenses trapped by the s 105(3A) profit-related threshold. **Resolved by continuity ruling R3**: reconciling line £206k (0.21%) added; total £24,385k; ETR 24.39%.
- Calder's current tax table described Calder as a very large company (QIPs in months 3, 6, 9, 12). **Resolved by continuity ruling R1**: large, not very large, in its AP to 31 March GY2 (four QIPs of £187,500 in months 7, 10, 13, 16, on CT before the RDEC: R2).
- Production words ("ledger") in source cells and asides. **Resolved by continuity ruling R16**.

## Pronunciation guide

| Written | Say it |
|---|---|
| IAS twelve | "I A S twelve" (spaced letters; declared in script) |
| IFRIC | not used in the script (said "the accounting interpretation on uncertainty over income tax treatments") |
| Vallaria / Marrovia | vuh-LAIR-ee-uh / muh-ROH-vee-uh |
| Calder | KAWL-der |
| Brackenwell | BRACK-un-well |
| Nadia Kerr | NAH-dee-uh KER |
| Tom Hesketh | tom HESS-keth |
| Tarnmoor | TARN-moor |

## Bible update

**Cast (real):** none new (no cases). Institutions: IASB (Pillar Two amendments 23 May 2023; single-transaction amendment May 2021); UK Endorsement Board (adopted 19 July 2023); FRC (FRS 102/101 amendments July 2023).

**Invented facts fixed:** Calder PBT £3.8m (AP to 31 March GY2) with RDEC presented above the line, no permanent differences, qualifying depreciation £0.6m; Tarnmoor GY2 consolidated PBT £100m; TVS GY2 profit £30m (Vallaria 20%); Tarnmoor GY2 expenses not deductible £2.0m; no DTA recognised on the GY2 CIR disallowance; Tarnmoor GY2 total tax charge £24.385m (ETR 24.39%, simplified, Pillar Two omitted; amended by R3, was £24.179m / 24.18%); customer relationships £4.0m amortised over 10 years in group accounts (£0.4m a year; £0.3m in GY1), DT unwinding £0.1m a year (£75k GY1); Brackenwell potential DTA £2.15m unrecognised at and after acquisition (goodwill correspondingly higher). Nadia Kerr and Tom Hesketh appear briefly.

**Glossary terms explained (chapter 6):** current tax; deferred tax; temporary difference; timing difference; tax base; carrying amount; deferred tax liability; deferred tax asset; permanent difference; substantively enacted; effective tax rate reconciliation; Pillar Two exception (IAS 12); initial recognition exception; single-transaction amendment; uncertain tax treatment (IFRIC 23); "timing differences plus".

**Established facts (with source):** UK substantive enactment = Commons stages complete (or PCTA 1968 resolution) [S]; FA 2021 rate rise substantively enacted 24 May 2021, Royal Assent 10 June 2021 [V secondary-consistent]; IAS 12 single-transaction amendment effective for annual periods beginning on or after 1 January 2023 [V]; IAS 12 paras 4A, 88A–88D (88B–88D for annual periods beginning on or after 1 January 2023; not interim periods ending on or before 31 December 2023) [V]; UKEB adoption 19 July 2023 [V]; FRC FRS 102/101 amendments July 2023 [V month]; IFRIC 23 effective for annual periods beginning on or after 1 January 2019; most likely amount or expected value [V]; IAS 12 para 51C sale presumption for fair-valued investment property [V]; IAS 12 para 53 no discounting [V consistent]; para 81(c) two forms plus basis of applicable rate [V].

**Debates covered:** L9 (should tax follow the accounts?) from the reverse side: deferred tax as the accounts following the tax; the Pillar Two exception as standard-setters admitting a gap (L5 signposted).

**Threads:** opened none; Brackenwell's unrecognised loss asset handed to chapter 14; UTT provision (TEL ERP) linked to chapter 4; GY2 Marrovian top-up left to chapter 30.

## Ledger additions (for calder-ledger.md §8)

| Fact | Value |
|---|---|
| Calder PBT, AP to 31 March GY2 | **£3.8m** (includes RDEC £0.4m above the line); qualifying depreciation **£0.6m**; accrual add-back £0.8m, opening accruals paid £0.4m; no permanent differences |
| Calder total tax charge, AP to 31 March GY2 | Current £750,000 + deferred £200,000 = **£950,000** (ETR 25.0%; current tax 19.7% of PBT) |
| Calder net DTL | 31 March GY1 £1.0m; 31 March GY2 **£1.2m** |
| Tarnmoor consolidated PBT GY2 | **£100.0m** (simplified illustration) |
| TVS profit GY2 | **£30.0m** (taxed at 20%) |
| Tarnmoor GY2 non-deductible expenses | **£2.0m** (illustrative aggregate) |
| Tarnmoor GY2 total tax charge | **£24.385m (exact £24,385,250); ETR 24.39%** (Pillar Two top-up excluded; includes TPLC's £825,000 carried-forward management expenses, no DTA, £206,250) (amended by R3) |
| CIR disallowance GY2 | no DTA recognised (judgement) |
| Customer relationships (Calder) in group accounts | FV £4.0m; DTL £1.0m; amortised over **10 years** (£0.4m a year; £0.3m GY1); DT credit £0.1m a year (£75,000 GY1) |
| Brackenwell losses | potential DTA **£2.15m** (25% × £8.6m), unrecognised |
| TEL full expensing GY2 | illustrative DTL effect £2.25m (ignoring depreciation) |

## Continuity fixes applied

| Ruling | File | Before → after |
|---|---|---|
| R3 | `chapters/06-deferred-tax-reading.md`, Tarnmoor GY2 ETR reconciliation table | New line after the CIR line: "TPLC management expenses carried forward (CFC threshold), no DTA recognised: 825 × 25% \| 206 \| 0.21"; total **24,179 / 24.18** → **24,385 / 24.39** (exact £24,385,250; recomputed in Python) |
| R3 | `chapters/06-deferred-tax-reading.md`, after the table | Added the optional sentence: "TPLC's surplus management expenses that the CFC threshold traps (CTA 2010 s 105(3A); chapter 13) carry forward with no asset recognised." |
| R3 | `chapters/06-deferred-tax-reading.md`, "What to take away" and Key rules row | 24.18% → 24.39% |
| R3 | `chapters/06-deferred-tax.txt`, reconciliation passage | New paragraph after the interest line: "One more line. Tarnmoor plc's surplus management expenses that the controlled foreign company threshold traps, eight hundred and twenty five thousand pounds, carry forward with no asset recognised, as chapter thirteen explains. That adds about two hundred and six thousand pounds." |
| R3 | `chapters/06-deferred-tax.txt`, reconciliation total | "about twenty four point two million pounds, an effective rate of about twenty four point two per cent" → "about twenty four point four million pounds, an effective rate of about twenty four point three nine per cent" |
| R3 | `chapters/06-deferred-tax.txt`, "What to take away" | "about twenty four point two per cent" → "about twenty four point three nine per cent" |
| R12 | `chapters/06-deferred-tax-reading.md`, Calder current tax table | Note on "Add: depreciation of qualifying plant 600": "Replaced by capital allowances" → "Replaced by capital allowances; Calder's heavy plant has long useful lives, so its depreciation is low against its allowances" |
| R1 (consequential) | `chapters/06-deferred-tax-reading.md`, Calder current tax table | "**Payable** (very large company QIPs: months 3, 6, 9, 12)" → "**Payable** (large, not very large: QIPs in months 7, 10, 13 and 16, 4 × £187,500 on the £750k before the RDEC; chapter 3)". Not listed in R1's "Fix needed in" but contradicted R1/R2's canonical position; script has no equivalent statement. |
| R16 | `chapters/06-deferred-tax-reading.md`, full expensing example | "GY2 (ledger)" → "GY2 (chapter 8)" |
| R16 | `chapters/06-deferred-tax-reading.md`, Calder current tax table | Source "Ledger (chapter 8)" → "Chapter 8"; "Ledger" (TTP row) → "Invented (story)" |
| R16 | `chapters/06-deferred-tax-reading.md`, note under the table | "£2.6m in the ledger" → "£2.6m (chapter 10)" |
| R16 | `chapters/06-deferred-tax-reading.md`, Key rules row "Calder GY2" | Source "ledger; this chapter" → "invented (story); this chapter" |
| R3 | `notes/06-notes.md`, Bible update and Ledger additions | £24.179m / 24.18% → £24.385m / 24.39% |

