# Notes: Chapter 18, Shares: the exemption, reorganisations and earn-outs

**Interpretation and assumptions.** Wrote ch 18 per plan §5 as an AT-depth chapter built on a five-step "order of attack" for a company's share disposal (matching → debt/QCB → SSE → reorganisation/exchange → computation), with three Tarnmoor spines (Coldwater part-sale GY4; Helmside share exchange 1 March GY5; TAL earn-out receipts GY7–GY8) and labelled hypotheticals for matching, stock dividends and the new s 137 (Northlight variation). WebFetch unavailable; 9 of 12 WebSearch calls used; no TKS files (recaps kept to bible §4.1 and the plan's TKS chapter numbers 23 and 16).

Files: `chapters/18-shares-sse-reorganisations.txt` (8,688 words; target 8,000 ± 10%), `chapters/18-shares-sse-reorganisations-reading.md` (about 8,560 words).

---

## Sources by section

Research files: law sheet 2 §1–4, §6, §8 (SSE group rows), §9 (s 179(3A) cross-ref), §12, §16–19 (teaching notes on *Delinian*, *Marren*, SSE, *M Group*; traps 3–6, 10); exam-intel paper tables (M25 Q5, N23 Q2, N23 Q4, M24 Q3, N24 Q3) and traps list (3, 25); grid v2 p5–p6 rows (share pooling 1; gilts and QCBs 1; reorganisation 1; conversion 1; company reconstructions 1; stock dividends 1; ss 151E–151G 2; SSE 1; *Marren v Ingles* 1); bible §1A, §3.6, §3.14, §4.1, §5.2, §6; ledger §3, §7 (GY4–GY6), §8; continuity rulings (R16 production words).

WebSearch (9 calls, all `standard`):

1. `HMRC capital gains manual earn-out right substantial shareholding exemption Marren v Ingles later receipt chargeable company` → CG14990 (gov.uk/hmrc-internal-manuals/capital-gains-manual/cg14990), SVM107160 (SAV agrees initial and residual values after each tranche), CG53000P/CG53165/CG53170A (SSE pages; no earn-out page found), taxinsider "negotiating tax traps with earnouts" (secondary). Result: no HMRC page on SSE + *Marren* right.
2. `"earn-out" "substantial shareholding exemption" corporate seller right is not shares later payments taxable chose in action` → taxation.co.uk 2002 "Capital gains: great expectations"; taxjournal.com "ask expert receipt earn out corporate shareholder" (2013); wiki.private.law (unverified); accaglobal "Marren v Ingles". Secondary consensus: right's completion value within the SSE; later receipts derive from the right and are not exempt; companies have no carry-back election.
3. `"Marren v Ingles" House of Lords 1980 Lord Wilberforce chose in action deferred consideration` → GOV.UK CGT practice note 3 (chose in action). Court **not confirmed**.
4. `"Stanton v Drayton Commercial Investment" consideration shares issued by company acquisition cost value agreed CG manual` → CG52562 (https://www.gov.uk/hmrc-internal-manuals/capital-gains-manual/cg52562: acquiring company's cost is the amount specified in the contract "in accordance with the decision in Stanton v Drayton"); lawcarenigeria.com (Stanton v Drayton, HL, 8 July 1982, 55 TC 286); BIM33325.
5. `Schedule 7AC paragraph 7 "throughout a twelve-month period beginning not more than six years before ..."` → CG53106 (qualifying period runs from start of latest 12-month period meeting the holding test to disposal; para 18 repealed by F(No.2)A 2017 for disposals from 1 April 2017), CG53008 (twelve-month period: ends the day before the first anniversary). Para 7 text itself not returned (law sheet 2 V relied on).
6. `"M Group Holdings" [2023] UKUT 213 paragraph 15A hive-down ...` → caselaw.nationalarchives.gov.uk/ukut/tcc/2023/213; RPC, Weil, Ross Martin ("SSE legislation does not allow a single company to be a group"), Tax Journal ("time for a law change"), Simmons & Simmons. Facts: UT decision 31 August 2023; stand-alone until 2015; subsidiary formed June 2015; hive-down September 2015; sold for £54m May 2016; appeal dismissed.
7. `Delinian v HMRC [2023] EWCA Civ 1281 Euromoney preference shares "main purpose" ...` → caselaw.nationalarchives.gov.uk/ewca/civ/2023/1281; RPC; Pinsent Masons Out-Law; Mishcon; Simmons & Simmons; Tax Adviser "Share exchanges: just and reasonable adjustments" (24 March 2026: links *Delinian* and *Wilkinson* to the new s 137); **CG52632** (HMRC: non-payment rather than deferral is avoidance, citing paras 52–54). Facts: Capital Data sold to Diamond Topco; cash replaced by redeemable preference shares at Euromoney's suggestion; s 135 then SSE on redemption after 12 months; HMRC amendment £10,483,731.87 (secondary); FTT, UT, CA for taxpayer.
8. `TCGA 1992 section 16A restrictions on allowable losses "main purpose" tax advantage ...` → CG15835, CG40241 (s 16A from 6 December 2006; replaced s 8 rule for companies), CG-APP8A, CG-APP9, CG40249; legislation.gov.uk FA 2007 s 27.
9. `CTM17005 stock dividends received by companies ... section 141 repealed` → CTM17005, CG58750, SAIM5150, CTM17030. Did not resolve s 141's status; did not contradict law sheet 2's quoted CTM17005 text for companies.

Python: `scratchpad/lcg-ch18/calc.py` (Coldwater pool and sale; matching hypothetical at £3.00 and £2.00; Helmside gain, pool and stamp duty; TAL earn-out part disposals). `ledger-check.py` re-run: 132 checks, 0 failures (no canonical number changed).

---

## Fact-check flags

1. **Earn-out receipts and the SSE (bible flag 28; plan "must be verified").** No HMRC manual page found on an SSE share sale followed by receipts on a *Marren* right. Chapter applies the practitioner view (secondary: taxjournal 2013; taxation.co.uk 2002; taxinsider): completion value of the right is within the SSE; later receipts are disposals of the right (s 22), not shares and not "assets related to shares" (para 2), so chargeable; a shortfall is an allowable loss (book's reasoning via s 2A(2) symmetry; one secondary source suggested otherwise). **Labelled in both editions as "the generally accepted view ... not settled law".** Partly resolved; keep open for reviewers.
2. ***Marren v Ingles* court** still not confirmed (bible flag 28 second half). Script says "decided in nineteen eighty" and "the courts held"; reading edition gives the citations only. Facts (quotation condition) from law sheet 2 (ACCA summary, S).
3. ***Marson v Marriage*** 54 TC 59: secondary; year removed; cited only "as summarised in HMRC guidance".
4. **Euromoney's £10,483,731.87** amendment: secondary (commentary); script says "as reports of the case record"; reading edition "as reported in commentary".
5. **Delinian → new s 137 link**: now supported by CIOT *Tax Adviser* (24 March 2026), still not stated by the TIIN; both editions say "commentators ... read"; "government's explanatory note did not name the case" relies on law sheet 2 (R).
6. **SSE policy rationale** ("other European holding company locations already exempted...") and the "symmetry" paragraph: chapter's reasoning, unattributed; Brown's 2002 Budget is not named (TKS ch 23 told it; date not re-verified).
7. **HMRC's 20% "substantial" yardstick and its indicators** (income, assets, expenses, time): HMRC practice (law sheet R; bible V practice); indicators from general knowledge of HMRC practice, not re-opened. Labelled "H M R C's view".
8. **s 116(10) for companies** and the conversion rule (new shares at the note's market value): law sheet 2 V for s 116(1)–(7) and para 4 priority; the s 116(10) company application relies on the statute's general wording (law sheet marks the company point "R/individual-focused"). Low risk; reviewers may confirm with CG53720-series.
9. **s 138 "30 days from receiving particulars"**: inferred from the s 138 procedure as summarised (law sheet V gives 30 days to reply or request particulars); not re-read.
10. **Matching hypothetical:** uses the verified three-decimal factor 0.489 (June 2004 → December 2017) for the indexed pool; whether pool indexation is rounded to three decimals was not checked. Hypothetical only.
11. **Para 3 run-off** paraphrased from law sheet 2 ("2 years; investee no longer trades but was controlled"); condition detail not re-read.
12. **Para 5** wording "sole or main benefit ... untaxed gain after control or major change" from law sheet 2 V; the meaning of "untaxed" not expanded.
13. **Stock dividends (bible flag 21):** CTM17005's citation of "TCGA92/S141(1)" still unresolved; chapter teaches HMRC's view with label and flags s 141 in the reading edition.
14. ***M Group*: "the point it turned on remains in para 15A"** — book's reading of the current para 15A wording (law sheet V describes para 15A as "used by a group member"); "FA 2026 made no change" V (law sheet §16 item 11).
15. **Coldwater sell-by date** "about the end of September GY9": computed from paras 7 and 28 (12-month period ending with the 30 September GY4 sale, beginning on or about 30 September GY3); exact day-count left approximate in both editions.
16. **Greyfell's base cost (£16.0m)** for the TPLC shares: book's reasoning (SSE treats the exchange as a disposal; consideration given = value of Helmside shares, s 38). Low risk.
17. Check the 2027 grid: no grade change expected for these rows.

**Bible §5.2 flags touched.** Flag 21 (stock dividends, s 141): still open. Flag 28 (earn-out and SSE; *Marren* court): first half addressed as accepted view (secondary), second half open. Flag 52 (TPLC's base cost of Helmside shares acquired for its own shares): **resolved** — *Stanton v Drayton* (HL, 1982, 55 TC 286) applied by CG52562: cost = agreed value £16.0m. Flag 34 (stamp duty on contingent consideration): not touched (Helmside consideration fixed). Flag 35 (s 719 and the Helmside 45% → 85%): not touched.

---

## Contradictions with plan, bible or ledger

1. **Plan §5 ch 18 (Coldwater):** "a later sale of the remaining 8% within the **subsidiary exemption** window [verify para 7]". The later sale is within the **main** exemption, because para 7 looks back for any 12-month period of ≥ 10% beginning within 6 years; the subsidiary exemptions (paras 2–3) are not needed. Chapter teaches it that way.
2. **Plan §5 ch 18 (Delinian):** "the link to the 2026 recast is an inference, not stated by the TIIN". Still not stated by the TIIN, but now supported by CIOT *Tax Adviser* commentary (24 March 2026); chapter attributes it to commentators.
3. **Plan/bible "Delinian email" quote**: used exactly as recorded (R in bible); attributed to "a group managing director" as law sheet 2 records (no name).
4. No conflict with ledger numbers (£16.0m; £8.00; 2,000,000 shares; £80,000; £48.0m; £6.0m cap; £3.0m value; £2.5m degrouping gain). Helmside £20m share capital (ledger) taken as £1 shares (new fact below).

---

## Pronunciation guide

| Written | Say it |
|---|---|
| Delinian | deh-LIN-ee-un |
| Euromoney | YOO-roh-mun-ee |
| Diamond Topco | DY-mund TOP-koh |
| Marren v Ingles | MARR-en versus ING-gulz |
| Marson v Marriage | MAR-sun versus MARR-ij |
| Stanton v Drayton | STAN-tun versus DRAY-tun |
| Coldwater | KOHLD-waw-ter |
| Greyfell | GRAY-fell |
| Northlight | NORTH-lite |
| Brennock | BREN-uck |
| Helmside | HELM-side |
| chose in action | SHOHZ in action |
| M Group | EM group |

---

## Bible update

**Cast (real cases).**
- *Delinian Ltd (formerly Euromoney Institutional Investor plc) v HMRC* [2023] EWCA Civ 1281 (3 November 2023); UT [2022] UKUT 205 (TCC): Capital Data sold to Diamond Topco; cash replaced by redeemable preference shares; s 135 then SSE on redemption; avoidance a purpose but not a main purpose; HMRC's CG52632 reads paras 52–54 as "non-payment, not deferral, is avoidance". Ch 18.
- *M Group Holdings Ltd v HMRC* [2023] UKUT 213 (TCC) (31 August 2023): single company; subsidiary June 2015; hive-down September 2015; sold May 2016 for about £54m; para 15A unavailable before a group existed; gain about £53.2m. Ch 18 (ch 20 applies).
- *Stanton v Drayton Commercial Investment Co Ltd* (1982) 55 TC 286 (HL, 8 July 1982): consideration given by issuing shares = agreed value in an arm's-length bargain; CG52562. Ch 18 (new).
- *Marren v Ingles* (1980) 54 TC 76; [1980] STC 500; [1980] 1 WLR 983 (court unconfirmed). *Marson v Marriage* 54 TC 59. Ch 18.

**Glossary terms explained (ch 18):** 10-day rule (company matching); indexed pool; qualifying corporate bond (company: any loan relationship asset); frozen gain (s 116(10)); substantial shareholding exemption (AT depth: holding, investee, para 4 priority, paras 2, 3, 5, 6); investee trading requirement; trading company/group (HMRC 20% yardstick); JV look-through; para 15A hive-down rule; reorganisation (ss 126–131); conversion of securities; stock dividend (company: bonus-issue treatment, HMRC's view); share exchange (s 135 Cases 1–3); s 137 main purpose test (FA 2026 recast; just and reasonable adjustments; no 5% exception); s 138 clearance; earn-out; chose in action; s 138A earn-out right; s 16A capital loss TAAR.

**Established facts fixed (with source).** SSE from 1 April 2002 (FA 2002; law sheet V); F(No.2)A 2017 reforms for disposals from 1 April 2017 (CG53106, CG53000); s 16A from 6 December 2006 (FA 2007 s 27; CG40241); new s 137 for issues on or after 26 November 2025 with transitional protection (FA 2026 s 37; law sheet V); CG52562 acquirer's cost rule.

**Debates covered.** L12 (certainty or fairness: main purpose tests after *Delinian*; clearance as the route to certainty): introduced in ch 18 as planned, stated neutrally.

**Open threads.** TAL earn-out receipts (opened 18/20): **closed** in ch 18 (receipts GY7 £2.0m, GY8 £2.5m; see below), on the "accepted view" label. Coldwater: remaining 8% exempt to about September GY9 (open, optional).

---

## Ledger additions (new story facts fixed by ch 18)

- **Coldwater Instruments plc** (invented, AIM-quoted instrument maker; one class of ordinary shares; **40,000,000 shares** in issue): TPLC's holding bought **before the story, after December 2017** (no indexation): tranche 1 **3,200,000 shares (8%) for £4,800,000**; tranche 2 **1,600,000 shares (4%) for £3,600,000**; pool **4,800,000 shares (12%), cost £8,400,000**.
- **30 September GY4:** TPLC sells **1,600,000** Coldwater shares (4%) at **£3.10** = **£4,960,000**; cost **£2,800,000**; gain **£2,160,000**, **exempt** (SSE); CT otherwise £540,000. Pool c/f **3,200,000 shares (8%), cost £5,600,000**. Remaining 8% within the SSE until about **end of September GY9**, if Coldwater keeps trading. Tom Hesketh's trading-status note (published accounts; 20% yardstick) filed with the GY4 computation.
- **Helmside shares:** share capital £20m in **£1 ordinary shares**: TPLC 9,000,000; Greyfell 8,000,000; Northlight 3,000,000. **Greyfell's cost £8,000,000; gain £8,000,000 exempt (SSE, para 4 priority over s 135); Greyfell's base cost of its 2,000,000 TPLC shares £16,000,000.** TPLC's Helmside pool after 1 March GY5: **17,000,000 shares (85%), cost £25,000,000** (*Stanton v Drayton*; CG52562). **No s 138 clearance** sought (board paper records why).
- **TAL earn-out:** measured on the business's results over the two years after completion; TEL's base cost in the right **£3,000,000**. **GY7 receipt £2,000,000**, residual right then valued **£2,000,000** → cost £1,500,000, **gain £500,000, CT £125,000**. **GY8 final receipt £2,500,000** → cost £1,500,000, **gain £1,000,000, CT £250,000**. Total receipts **£4,500,000** (cap £6.0m); total gains **£1,500,000**; CT **£375,000** (chargeable on the accepted view; label).
- **Not story (labelled hypotheticals):** matching example (100,000 June 2004 shares £150,000; 50,000 post-2017 £200,000; 20,000 bought 5 days before; 60,000 sold at £3.00 → gain £7,107; at £2.00 → losses £33,333); Coldwater scrip alternative (1 for 50; 64,000 shares; cost unchanged); Northlight also exchanging (new s 137 applies to every partner); TAL shortfall (single £2.0m receipt → £1.0m allowable loss).

## Continuity fixes applied (R18–R29; reviewer D, 9 October 2026)

- **R21 guidance:** the chapter never uses £585,000 (grep). No change.
- **R22.4:** earn-out receipts GY7 £2.0m (gain £0.5m) and GY8 £2.5m (gain £1.0m), CT £375,000, labelled "accepted view": consistent. No change.
- **R28.3 (*Marren v Ingles*):** see the technical review fixes below.
- **R29:** Coldwater's remaining 8% exempt under the **main** SSE (para 7 look-back) to about September GY9: both editions already say so. TPLC's Helmside base cost £16.0m (*Stanton v Drayton*); pool £25.0m; no s 138 clearance: consistent. No change.
