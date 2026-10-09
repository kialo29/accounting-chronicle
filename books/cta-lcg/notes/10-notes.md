# Notes: Chapter 10, Research and development

**Interpretation and assumptions.** Chapter 10 as briefed in plan §5 (merged RDEC, ERIS, linked enterprises, overseas restriction, claim notification, R&D allowances), FY2026 law, using the ledger's Calder (Project Ashlar) and Brackenwell numbers unchanged; new story numbers are limited to the split of Calder's £2.0m qualifying expenditure, Brackenwell's PAYE/NIC (£0.9m), the inclusion of the £0.5m R&D allowance within Calder's £1.8m CAs, and the surrender of BSL's £114,000 step 2 amount to TEL (all listed below). TKS files were unavailable (addendum): TKS recaps limited to "*The Living Law*, chapter twenty one, introduced the merged scheme and ERIS" (bible §4.1).

**Files.** `chapters/10-research-and-development.txt` (script, 7,768 words; target 7,500 ± 10%); `chapters/10-research-and-development-reading.md` (reading edition, 7,656 words by `wc -w`, including tables); scratch computations in the session scratchpad `lcg-ch10/calc.py`, `calc2.py`.

---

## Sources by section

**Research base (local):** LS1 §6 (R&D rows, all V except as noted), §9 (FA 2026 ss 31, 34), §10 (teaching note, GOV.UK rationale quote), §11 traps 17–19; exam-intel (M24 Q4, M25 Q2, N25 Q1, N25 Q4, N23 Q6; trap 12; tax tables row; 2028 exclusions); grid v2 (rows "Research & development intensive companies" 1, "Research and development expenditure credit" 1, "Research and Development Allowances" 1); bible §3.2, §4.1, §5.2 flag 11; ledger §4, §7 GY1–GY2.

**WebSearch (13 calls, numbered 1–13 below; mode standard; WebFetch not used per addendum):**
1. `ERIS surrenderable loss "186%" related qualifying expenditure unrelieved trading loss ...` → relied on CIRD122000 (https://gov.uk/hmrc-internal-manuals/corporate-intangibles-research-and-development-manual/cird122000): surrenderable loss = lower of unrelieved loss and 186% of related QE; unrelieved loss after sideways and group relief, ignoring b/f and c/b; credit 14.5% not taxable; PAYE cap applies (CIRD140000). Secondary: Saffery, ACCA (Oct 2024).
2. `CIRD112100 merged scheme expenditure credit steps notional tax PAYE cap ...` → CIRD112100 (https://gov.uk/hmrc-internal-manuals/corporate-intangibles-research-and-development-manual/cird112100): pre-step use of b/f step 2 amount; steps 1–7 in order; step 3 cap £20,000 + 300%; step 7 conditions (s 1112H). CT600L guidance consistent.
3. `"step 2 amount" RDEC surrender "member of the same group" ...` → CIRD112100; CIRD89810; CT600L guidance (https://www.gov.uk/guidance/supplementary-pages-ct600l-research-and-development): step 2 amount surrenderable to group or carried forward (s 1042L(3)).
4. `HMRC CIRD R&D SME definition fewer than 500 staff ... 86 million linked partner` → CIRD91400, CIRD91500, CIRD91700 (gov.uk), GOV.UK SME guidance: < 500 staff; €100m / €86m; linked in full, partner pro rata; Recommendation ceilings 250 / €50m / €43m (so "doubled").
5. `HMRC CIRD SME status acquired by large company "two consecutive" ...` → CIRD92000 (https://gov.uk/hmrc-internal-manuals/corporate-intangibles-research-and-development-manual/cird92000) (extract cut off before the takeover example); Taxation (17 Nov 2008), TaxationWeb, Taylor Wessing, Slaughter and May "The Lens" (planning: end AP at completion). **Taught as "HMRC's view".**
6. `"Get Onbord" [2024] UKFTT 617 ... "Tills Plus" [2024] UKFTT 614` → ICAEW Taxline and Insights (2024), Stewarts, Bloomberg Tax, Tax Insider: Get Onbord taxpayer won (AI KYC tool; burden point); Tills Plus HMRC won (combining existing technology; expert report weak). Secondary only (Find Case Law not opened).
7. `HMRC research and development tax credits statistics September 2025 ... error and fraud` → GOV.UK R&D Tax Credits Statistics September 2026 (https://www.gov.uk/government/statistics/corporate-tax-research-and-development-tax-credit/research-and-development-tax-credits-statistics-september-2026): 2024–25 provisional £8.2bn, 40,325 claims, −17% (SME −19%, large +4%). Error and fraud 2020–21 16.7% (£1.13bn), SME 24.4% via BDO/TaxWatch/The Accountant reporting HMRC ARA 2022–23; ARA 2024–25 9.9% for 2022–23 (ABGI summary).
8. `HMRC evaluation RDEC scheme 2020 "for every £1" ...` → HMRC RDEC evaluation (published 17 November 2020; https://www.gov.uk/government/publications/evaluation-of-the-research-and-development-expenditure-credit): £2.40–£2.70; HMRC Working Paper 17 (2015): £1.53–£2.35 for £1 of tax forgone. SME 60p–£1.28 (parliamentary evidence only): **not used**.
9. `gov.uk merged scheme qualifying expenditure staffing costs externally provided workers ...` → CIRD132000 (payment condition); secondary vendor pages for categories, cloud/data from 1 April 2023, decider claims.
10. `CIRD reformed reliefs contracted out R&D "65%" ...` (gov.uk only) → CIRD138000, CIRD112300, draft guidance on contracting out and overseas restrictions (50% × 65% = 32.5% illustration), explanatory note: 65% of relevant (UK or s 1138A) portion for unconnected contractors; connected/electing (s 1135) differ.
11. `CIRD140000 PAYE NIC cap exemption conditions ...` → CIRD140000 (https://www.gov.uk/hmrc-internal-manuals/corporate-intangibles-research-and-development-manual/cird140000): cap s 1112B(2); exemption conditions from GOV.UK policy note / secondary (IP created or managed mainly by own staff; connected EPW and subcontract ≤ 15% of QE). Taught as "Broadly, HMRC's guidance says".
12. `R&D claim notification form "paragraph 83E" Schedule 18 ...` → legislation.gov.uk SI 2023/813 (content of claim notifications; s 1142A CTA 2009); F(No.2)A 2023 Sch 1 data page; HMRC directions under SI 2003/282 (electronic delivery, named officer); Sch 18 para 83E (2 years), 83EA (additional information), 83EB (removal of claims). Six-month window: GOV.UK claim notification guidance (LS1 §6, V guidance).
13. `Autumn Statement 22 November 2023 merged R&D scheme ... Finance Act 2024 ... Schedule 1` → GOV.UK policy paper "Merger of current SME and RDEC schemes"; Finance Bill 2023-24 explanatory notes; SI 2024/286 (appointed day). **FA 2024 Royal Assent date not confirmed: not stated.**

(Total WebSearch calls: **13**, one over the addendum's budget of 12; the thirteenth (Autumn Statement / FA 2024) confirmed the merged scheme's announcement and enactment route.)

---

## Fact-check flags

1. **Step 2 amount surrendered to TEL (new story fact).** LS1 §6 (V, CIRD112100) and CIRD112100/CT600L extracts say the step 2 amount may be surrendered to a group member or carried forward (s 1042L(3)). The script and reading edition surrender BSL's £114,000 step 2 amount to TEL as well as the £486,000 step 5 amount (total £600,000 discharging TEL's GY2 CT). Whether FA 2026 s 31's protection (s 1042N(5)–(6)) covers a payment for a **step 2** surrender, as opposed to a step 5 surrender, was **not verified**: the text assumes TEL's £600,000 payment is wholly protected. If a reviewer finds otherwise, change to "TEL pays £486,000 for the step 5 surrender" and treat the £114,000 separately.
2. **HMRC's whole-period view on acquisition** (BSL large for all of GY2): CIRD92000 extract cut off before the takeover example; relied on secondary summaries (2008, 2022). Labelled "HMRC's view" and "guidance rather than settled law". The July 2022 draft transitional proposal mentioned by Slaughter and May was not checked and is not taught. Resolves bible §5.2 flag 11 (second limb) as "HMRC's view, secondary-sourced".
3. **ERIS surrenderable loss cap 186%:** verified (CIRD122000). Resolves bible §5.2 flag 11 (first limb).
4. **PAYE cap exemption conditions:** CIRD140000 confirms the cap and that an exemption exists; condition wording (IP mainly by own staff; ≤ 15% connected EPW/subcontract) from GOV.UK policy note and secondary sources. Labelled "Broadly, HMRC's guidance says". Bible §5.2 flag 11 (CIRD140000 not re-read): partly resolved.
5. **Claim notification statutory basis:** s 1142A CTA 2009 (SI 2023/813 refers to it). Which Act inserted s 1142A was **not confirmed** (search suggested F(No.2)A 2023 Sch 1 for the RDEC equivalent s 104AA; claim notification may have been introduced by FA 2022): the text names no inserting Act. Six-month window and 3-year rule from GOV.UK guidance (LS1 V guidance) plus the s 104AA extract. Bible flag 11 (para 83E ff not opened): paras 83E, 83EA, 83EB now identified (via legislation.gov.uk extracts).
6. **Get Onbord and Tills Plus:** outcomes and reasoning from secondary sources (ICAEW, Bloomberg Tax, Stewarts); judgments not opened. No direct quotation used (the Bloomberg-reported Tills Plus sentence is paraphrased).
7. **Guidelines' "competent professional" and "advance in science or technology / scientific or technological uncertainty":** the uncertainty wording is corroborated by the Tills Plus reporting; "competent professional" is stated from general knowledge of the DSIT/BEIS Guidelines and was **not re-verified** in this session (no search budget left). Low risk; reviewer to confirm.
8. **R&D allowance details:** 100% and land excluded are V (LS1, plan). "Covers buildings used for research" (facilities for R&D) is from statute knowledge, **not re-verified**; "may claim less" V (LS1); "disposal value and balancing charge" V (LS1, generic). A claim that R&D allowances cover second-hand assets was removed as unverified.
9. **Externally provided workers at 65%:** secondary (vendor pages) plus CIRD112300 ("contracted-out R&D costs restricted to 65% of payments to unconnected contractors"); EPW 65% treated as settled on that basis. The merged-scheme condition that the staff provider operate PAYE/NIC was **removed** from the text (sources conflicted).
10. **Data and cloud costs "for APs beginning on or after 1 April 2023":** secondary (one adviser guide). Low risk.
11. **Statistics:** £8.2bn / 40,325 / −17% (provisional, HMRC official statistics Sept 2026 extract); 16.7% / £1.13bn / 24.4% (HMRC ARA 2022–23 via BDO and TaxWatch; secondary reporting of an official figure). Reading edition notes later estimates on different bases (9.9% for 2022–23) do not reconcile.
12. **Autumn Statement 22 November 2023; FA 2024 Sch 1; SI 2024/286:** verified via GOV.UK policy paper, explanatory notes and legislation.gov.uk note. FA 2024 Royal Assent date not stated.
13. **"SME definition doubled":** inference from CIRD91400 (250/€50m/€43m) vs R&D thresholds (500/€100m/€86m). The statutory section numbers for the SME definition (believed ss 1119–1120) were **removed** as unverified.
14. **Step 7 conditions** ("going concern", "no payment while under enquiry"): from the search summary of CIRD112100 and s 1112H; worded cautiously.
15. **UK-to-UK TP exemption and connected-party R&D:** stated with "usually" and "subject to conditions (chapter 27)". Not separately verified in this chapter.
16. **Tax tables:** the 2026 tables include RDEC 20%, ERIS 186%, 14.5% and the EU SME definition with R&D notes (exam-intel V). **Check the 2027 tables** (not yet published).
17. **2028 grid:** R&D-intensive SMEs dropped (exam-intel V); irrelevant to 2027 sittings.
18. **Calder instalments (WE 10.1 note):** uses the ledger's very large threshold £20m ÷ 9 = £2,222,222, which still carries ledger flag (bible §5.2 flag 6). Chapter 3 owns. **Resolved by R1** (and R2): Calder is large, not very large, in AP 1 April GY1–31 March GY2 (QIP divisor 1); 4 × £187,500 in months 7, 10, 13, 16; RDEC does not reduce QIPs (CIRD89870).

**Bible §5.2 flags touched:** flag 11 (claim notification paragraphs; PAYE cap exemption; ERIS 186% cap; SME status on acquisition): **186% cap resolved (CIRD122000)**; **acquisition timing: HMRC's view, secondary-sourced, labelled**; **PAYE cap: partly resolved**; **claim notification paragraphs: identified (s 1142A; Sch 18 paras 83E, 83EA, 83EB)**. Flag 6 (QIP thresholds) touched only in a WE note; carried forward.

---

## Contradictions with plan, bible or ledger

- **Plan §5 ch 10 brief vs law:** the brief calls step 2 "notional tax"; the brief places "surrender to group companies or carry forward" after step 2: this matches the law for the step 2 amount, but the main group surrender is **step 5** (after the PAYE cap at step 3 and other CT at step 4). The chapter teaches the full seven-step order from CIRD112100. No numbers change.
- **Ledger GY2 BSL:** "notional tax at 19% leaves £486,000 ... surrendered to TEL". The chapter adds the surrender of the £114,000 step 2 amount to TEL (flag 1). TEL's GY2 CT liability (£2,020,000) is unchanged; £600,000 of it is discharged by surrendered credit. **Chapter 3 (QIPs) and chapter 15 should note that £600,000 of TEL's GY2 CT is discharged by RDEC rather than paid in cash.**
- **Plan §5 ch 10 story lead "£1.53–£2.35 of extra R&D per £1"** is HMRC Working Paper 17 (2015); the plan attributes it to a TKS chapter 21 statistic. Used, attributed to the 2015 working paper, alongside the 2020 RDEC evaluation (£2.40–£2.70).
- **Ledger "BSL GY2 ... [verify SME loss timing]"**: kept (large for the whole GY2) on HMRC's view (flag 2).
- **Ledger "CAs £1.8m; R&D allowance on £0.5m test rig [within the £1.8m? writer decides]"**: decided **within** (£1.3m P&M allowances + £0.5m R&D allowance), consistent with tax-EBITDA £4.4m − CAs £1.8m = adjusted profit £2.6m.
- None with the bible's rates.
- Calder's instalment status in WE 10.1 (very large, months 3, 6, 9, 12): Resolved by continuity ruling R1 (large; 4 × £187,500, months 7, 10, 13, 16) and R2 (RDEC does not reduce QIPs).
- TEL's GY2 CT £2,020,000: Resolved by continuity ruling R3 (now £2,226,250) and R7 (£600,000 surrender of step 2 and step 5 amounts adopted; net £1,626,250).

---

## Pronunciation guide

| Written | Say it |
|---|---|
| Ashlar | ASH-lar |
| Brackenwell | BRACK-un-well |
| Asha Varma | AH-shuh VAR-muh |
| Graham Pike | GRAY-um pike |
| Get Onbord | get ON-bord |
| Tills Plus | TILLZ plus |
| E R I S | ee ar eye ess (spoken as letters) |
| R D E C | ar dee ee see |
| de minimis | day MIN-ih-miss |
| Windsor Framework | WIN-zer FRAME-wurk |
| Vallaria | vuh-LAIR-ee-uh |

---

## Bible update

**Cast (real):**
- *Get Onbord Ltd v HMRC* [2024] UKFTT 617 (TC): FTT 2024; AI "know your client" tool; taxpayer won; tribunal on evidential burden (once an overall advance is suggested, HMRC must produce material showing it was routine). Status S (secondary reporting). Ch 10.
- *Tills Plus Ltd v HMRC* [2024] UKFTT 614 (TC): FTT 2024; software combining existing technology; no evidence of an advance resolving scientific or technological uncertainty; HMRC won. Status S. Ch 10.
- HMRC Working Paper 17 (2015) (£1.53–£2.35 per £1); HMRC RDEC evaluation (17 November 2020; £2.40–£2.70); HMRC R&D statistics September 2026 (2024–25: £8.2bn provisional; 40,325 claims, −17%). Ch 10.
- Autumn Statement 22 November 2023 (merger announced); FA 2024 Sch 1; SI 2024/286.

**Invented facts fixed (see ledger additions).** Project Ashlar described (sensor-equipped smart process valve; uncertainty: sensor survival at pressure and heat, signal through steel). Graham Pike files Calder's claim notification in April GY2. Tom Hesketh declines a contingent-fee R&D review firm (undated; "in our invented case").

**Glossary terms explained (ch 10):** merged scheme; RDEC (AT depth; taxable; net 15%/16.2%); qualifying expenditure categories; payment condition; contracted-out R&D (the decider claims); overseas restriction (s 1138A); notional tax deduction and step 2 amount; PAYE cap and exemption; RDEC surrender (step 5; FA 2026 s 31 payments); ERIS (AT depth); surrenderable loss (lower of unrelieved loss and 186% of QE); R&D intensity (30%; one-year grace); SME (R&D: < 500, €100m/€86m); linked enterprise; partner enterprise; claim notification (s 1142A); additional information form (Sch 18 para 83EA); R&D allowance (CAA Part 6).

**Established facts fixed (with source):** ERIS surrenderable loss cap 186% of QE (CIRD122000; V); RDEC steps order 1–7 and pre-step use of b/f step 2 amount (CIRD112100; V); step 2 amount surrender or carry-forward (s 1042L(3); CIRD112100; V-guidance); unconnected contractor 65% of the UK/qualifying portion (CIRD138000; V); payment condition (CIRD132000; V); SME (R&D) thresholds (CIRD91400–91700; V); claim time limit 2 years (Sch 18 para 83E; V); additional information para 83EA and removal para 83EB (V, legislation.gov.uk extracts); SI 2023/813 content regulations (V); acquired company large for the whole AP (CIRD92000; HMRC view, S).

**Debates covered:** L7 (R&D relief: incentive value v fraud and error), both sides stated; no verdict.

**Open threads:** BSL's pending GY1 ERIS credit as an SPA point (chapter 20); connected-party contracted-out R&D between Calder and BSL after 1 July GY2 (not quantified).

---

## Ledger additions (proposed for `calder-ledger.md` §8)

| Fact | Value |
|---|---|
| Calder QE split, AP 1 April GY1–31 March GY2 | Staffing £1,500,000 (Dan £72,000 + others £1,428,000); Brackenwell contractor 65% × £400,000 = £260,000; consumables £180,000; software, data and cloud £60,000; total £2,000,000 |
| Calder excluded items | Test bay repairs (not R&D); £500,000 test rig (capital: R&D allowance) |
| Calder CAs £1.8m composition | R&D allowance £500,000 + P&M allowances £1,300,000 |
| Calder claim notification | Window to 30 September GY2; filed April GY2 |
| BSL relevant PAYE and NIC | about £900,000 a year (GY1 and GY2); PAYE cap £2,720,000 (not restrictive) |
| BSL GY2 RDEC use | £600,000: step 2 notional tax £114,000 (step 2 amount) and step 5 remainder £486,000 **both surrendered to TEL**; TEL pays BSL £600,000 (FA 2026 s 31 / s 1042N(5)–(6)); £600,000 of TEL's GY2 CT (£2,226,250 after R3) discharged by RDEC; group net benefit £450,000 |
| BSL GY1 ERIS | as ledger; unrelieved loss £7,210,000 (no other profits, no group) |
| BSL acquisition AP | BSL kept its 31 December AP; not shortened at completion (missed planning point) |

All figures re-run in Python (scratch `calc.py`, `calc2.py`); `ledger-check.py` re-run: 96 checks, 0 failures (no canonical number changed).

---

## Continuity fixes applied (9 October 2026, after `continuity-rulings.md`)

| Ruling | File | Before → after |
|---|---|---|
| R1, R2 | `10-research-and-development-reading.md` (WE 10.1 note) | "Calder is very large in this AP (augmented profits £3.0m > £20m ÷ 9 = £2,222,222: chapter 3), so it pays by instalments in months 3, 6, 9 and 12" → "Calder is large, not very large, in this AP (its associates are counted on 31 March GY1, when it had none: chapter 3), so it pays four instalments of £187,500 in months 7, 10, 13 and 16; the credit does not reduce them (CIRD89870)" |
| R1, R2 | `10-research-and-development.txt` | Checked: no equivalent instalment sentence for Calder in the script; no change |
| R3, R7 | `10-research-and-development-reading.md` (Surrender inside the group, story paragraph) | "whose GY2 CT is £2,020,000" → "whose GY2 CT is £2,226,250" |
| R3, R7 | `10-research-and-development-reading.md` (WE 10.2 table, total row) | "TEL's GY2 CT of £2,020,000" → "TEL's GY2 CT of £2,226,250" |
| R2 | `10-research-and-development-reading.md` (same paragraph) | added: "The surrendered credit discharges TEL's liability when Brackenwell's claim is made; TEL's instalments are still based on its full liability (our reading of HMRC's guidance at CIRD89870, which deals with a company's own credit)." |
| R3, R7 | `10-research-and-development.txt` (step five paragraph) | "a corporation tax bill of two million and twenty thousand pounds" → "a corporation tax bill of two million, two hundred and twenty six thousand, two hundred and fifty pounds" |
| R2 | `10-research-and-development.txt` (same paragraph) | added: "The surrendered credit discharges Tarnmoor Engineering's liability when Brackenwell's claim is made. Its instalments are still based on its full liability." |
| R1, R3, R7 | `notes/10-notes.md` | flag 18 marked resolved; two "Resolved by continuity ruling" lines under Contradictions; ledger-additions row TEL CT £2,020,000 → £2,226,250 |
| R16 | both editions | `grep -n -i -E "ledger|continuity|the plan for this book"`: no hits; no change |

Recomputed in Python: £8,905,000 × 25% = £2,226,250; less £600,000 = £1,626,250; £750,000 ÷ 4 = £187,500. §11 scans on the script: 0 symbol/digit hits (heading colon only), 0 dash hits, 0 unspaced acronyms. Word counts after fixes: script 7,796; reading edition 7,705. `ledger-check.py`: 132 checks, 0 failures.
