# Notes: Chapter 14, Losses in the larger company

**Interpretation and assumptions.** Wrote ch 14 per plan §5 as an AT-depth losses chapter organised around the "2017 bargain" (flexible / restricted / fragile), with Brackenwell's £8.6m as the spine, Helmside's £1.2m and TPLC's GY1 deficits as the other story uses, and labelled hypotheticals for Part 7ZA, the no-major-change counterfactual and liquidation; WebFetch unavailable, all 12 WebSearch calls used; no TKS files available (recaps kept to bible §4.1).

Files: `chapters/14-losses.txt` (7,969 words; target 8,000), `chapters/14-losses-reading.md` (about 8,140 words).

---

## Sources by section

Research files: law sheet 1 §7, §10, §11 (traps 20–24), §12; law sheet 4 §4, §5, §8, teaching notes (change of ownership; liquidation), traps 9, 12, 15, 18; exam-intel paper tables (N23 Q4, M24 Q3, M24 Q6, N24 Q2, N25 Q4, M26 Q4) and traps list; grid v2 (p6 rows: loss relief 1; companies in liquidation or administration 1; change in company ownership 1; tax avoidance involving carried forward losses 2); bible §3.2, §3.14, §4.1, §5.2; ledger §3, §6, §7 (GY1, GY2, GY4).

WebSearch (12 calls, all `standard`):

1. `"Corporation Tax Act 2010" section 676AC change in ownership major change ...` → https://gov.uk/hmrc-internal-manuals/company-taxation-manual/ctm06750 (s 676AC: major change in the business includes scale, beginning/ceasing a trade or business, change in nature of investments; gradual; related-company transfers disregarded); legislation.gov.uk s 673 enacted text (major change definition).
2. `CTM06700 ... loss buying "transferred company" Chapter 2A ...` → CTM06715 (Chs 2A–2E apply to changes on or after 1 April 2017), CTM06720 (group-based change in ownership; Ch 2E from 1 April 2021), CTM06725 (mid-period split; Ch 2A apportionment under s 685 via s 676AD), CTM06775 (**Ch 2A does not apply where Ch 2 or Ch 3 can apply**), CTM06735.
3. `CTM05140 OR CTM05150 group deductions allowance nominated company revoke ...` → CTM05180 (nomination need not be submitted; continues until new nomination, written revocation or nominee leaves the group), CTM05200 (GAAS deadline: first anniversary of nominated company's filing date; later dates for APs from 1 April 2021; no GAAS = no allowance for any company; revised statement within 30 days where over-allocated).
4. `CTM06370 major change ... "Purchase v Tesco" "Peeters Picture Frames" SP10/91` → CTM06370 (window 3 years for APs ending before 1 April 2017; 5 years after; *Williams v Peeters Picture Frames* (1983) 56 TC 436 facts; Special Commissioners' view in isolation), CTM06380 (SP 10/91, revised 22 April 1996). *Purchase v Tesco* not returned.
5. `CTM36125 liquidation beneficial ownership "Ayerst" group relief ...` → SDLTM23084 (*Ayerst v C&K (Construction) Ltd* 50 TC 651 cited: liquidator's appointment strips beneficial interest including shares; intermediate holding company liquidation breaks the group); CTM80205; taxjournal.com Farnborough article (HMRC view: insolvency procedures as change of control, s 154).
6. `"Corporation Tax Act 2010" section 45F terminal losses ...` → CTM04130 (s 45F: losses c/f under ss 45, 45A, 45B; profits of 3 years ending with cessation period; unrestricted); FA 2019 Sch 10 (straddling periods); CTM06065 (Part 22 Ch 1 transfer bars s 39 and s 45F claims); legislation.gov.uk s 39.
7. `"Taxation of Chargeable Gains Act 1992" section 170(11) ...` → CG45135 (commencement of winding up does not break gains group relationships; s 170(11)), CG40460.
8. `CTM05030 OR CTM05040 "relevant maximum" ...` → CTM05030 (steps; s 269ZB, ZC, ZD, ZF, ZFA; gains from 1 April 2020), CTM05040 (modified total profits), CTM05260 (example: qualifying 21, allowance 5, relevant 16, maximum 13), CTM05270, CTM04830.
9. `CTM07510 OR CTM07520 "tax avoidance involving carried-forward losses" Part 14B ...` → CTM07505 (FA 2015; APs beginning on or after 18 March 2015; "corporate loss refreshing"), CTM07510, CTM07520 (Conditions A–C detail), legislation.gov.uk s 730G (Condition D partly), FA 2015 Sch 3 explanatory notes (tax value / non-tax value; Condition E banking priority).
10. `CTM06810 OR CTM06800 Chapter 2C "relevant pre-acquisition losses" ...` → CTM06815 (Ch 2C: changes from 1 April 2017; 5 years from the end of the transferred company's AP in which the change occurs; applies even where business unchanged per search 2), CTM06825, CTM06835; legislation.gov.uk s 676CC, s 676DC.
11. `HMRC company taxation manual group relief "winding up" parent company liquidation ...` → CTM80151 (beneficial ownership; s 152; liquidation can affect it), CTM97750 (HMRC view: IP appointment means owners lose control, breaking group relationship), tax.weil.com "tax groups and insolvency" (secondary: administration/receivership generally do not strip beneficial ownership).
12. `"Corporation Tax Act 2010" section 721 ... OR section 724A ...` → CTM06355 (s 724A: new ultimate parent not a change if continuity conditions met), FA 2014 s 37 and notes (changes on or after 1 April 2014; s 724 covers insertion below the parent); s 721 (other interests such as voting power where s 719 anomalous).

Python: `scratchpad/lcg-ch14/calc.py` (GY2 split, £8.6m, Helmside £1.2m/£1.3m, Part 7ZA examples, BSL hypothetical, marginal relief limits by divisor, day-count check). `ledger-check.py` re-run: 96 checks, 0 failures (no canonical number changed).

---

## Fact-check flags

1. **Plan/ledger attribution corrected (Ch 2 not Ch 2A).** Plan §5 and ledger GY2 say Brackenwell's losses are restricted under "Ch 2A". HMRC (CTM06775) says Ch 2A does not apply where Ch 2 or Ch 3 can apply. A major change in the nature or conduct of a trade is a Ch 2 (s 673) case. The chapter attributes the restriction to **Ch 2** and explains the priority rule. See Contradictions.
2. **Ch 2A windows ("5 or 8 years depending on the relief")**: from law sheet 1 (marked V, citing s 676AF for 5 years); the exact section-by-section windows were not re-read. Stated generically.
3. ***Purchase v Tesco Stores Ltd* (1984) 58 TC 46**: secondary only (law sheet 4 via CTM06370); my search did not return it. Labelled "HMRC's manual draws on ... as HMRC summarises it". *Rolls-Royce Motors v Bamford* not used.
4. ***Williams v Peeters Picture Frames***: name as CTM06370 spells it (bible flag 18 partly resolved: HMRC's spelling is "Williams"; whether the reported name is "Willis" remains unchecked). Outcome ("held not to be a major change on the special facts") is from law sheet 4 (S); the search extract confirmed the facts and the Special Commissioners' in-isolation view but was cut off before the outcome. Labelled "as the manual reports it". The year (1983) is the TC citation year; the script gives no year.
5. ***Ayerst***: citation 50 TC 651 (HMRC SDLTM23084); court and year not verified, so the script says only "a nineteen seventies case" and the reading edition gives no year. Bible's "(1974)" not confirmed.
6. **Administration and beneficial ownership**: secondary (Weil commentary) only; labelled "not generally thought ... facts matter".
7. **HMRC's view that liquidation ends group relief through the company** rests on CTM80151 (beneficial ownership "can be affected"), SDLTM23084 and CTM97750 (IP appointment breaks group relationship); CTM36125 text itself not retrieved. Labelled "in HMRC's view".
8. **s 45A claim time limit** not verified (no search budget left); the chapter does not state one for s 45A (it does state 2 years for s 463G NTLR deficits, s 1223 management expenses and s 45F, all V in law sheets).
9. **s 45F order of set-off** (later periods first?) not verified; not stated. s 39 "later first" also not stated.
10. **Part 7ZA "group" definition** (whether Helmside, a consortium company, is outside any group) relies on the 75% subsidiary concept; s 269ZZB not opened. Low risk.
11. **Part 14B commencement** "accounting periods beginning on or after 18 March 2015" from CTM07505's wording ("for the purposes of calculating the profits of accounting periods beginning on or after 18 March 2015"); FA 2015 commencement section not opened.
12. **Ch 2C five-year measure** (from the end of the AP containing the change) from CTM06815 summary; statutory text (s 676CB/676CE) not opened. Gives "to the end of GY7" for Brackenwell.
13. **Pandemic three-year carry-back**: described only as "temporary ... has expired" (no dates), consistent with the N23 examiners' comment.
14. **"Inserting a new holding company at the top ... provided the shareholdings mirror"**: simplification of s 724A conditions (CTM06355 mentions continuity of shareholding and voting power).
15. **Policy rationale of the 2017 restriction** presented as the chapter's reasoning ("the logic is easy to see"), not attributed to government statements.
16. **M24 Q3(b) marks**: exam-intel gives Q3 as 15 (7/5/3); (b) is inferred to be the 5-mark part; the script says only "part of a fifteen-mark question".

**Bible §5.2 flags touched.** Flag 18: partly resolved (HMRC spells "Williams v Peeters Picture Frames"; *Tesco*, *Ayerst* remain secondary). Flag 35 (s 719 "acquires" for TPLC 45% → 85% of Helmside): **not resolved; avoided** (chapter says the question need not be answered because Helmside's losses were used in GY4); carry forward to ch 15/18. Flag 5 (consortium in grid): consistent (consortium relief referenced as examinable). Flag 55 (TPLC recharge income and s 105 gross profits): used ledger figures (excess ME £5.9m = £8.0m − £2.1m) without resolving characterisation; left to ch 13/15.

---

## Contradictions with plan, bible or ledger

1. **Ledger §7 GY2 and plan §5 ch 14**: "restricted (major change ...; Ch 2A)". **Correction:** the restriction is under **CTA 2010 Part 14 Ch 2 (s 673)**; Ch 2A gives way where Ch 2 applies (CTM06775). Ch 2C (Part 5A bar) applies in any case. Suggest ledger wording: "restricted under Part 14 Ch 2 (s 673); Ch 2C bars Part 5A surrender to the end of GY7". Resolved by continuity ruling R8.
2. **Plan §5 ch 14**: "Tarnmoor's members nominate TPLC each year". HMRC guidance: a nomination is a standing document (continues until replaced, revoked or the nominee leaves); it is the GAAS that is filed each period. The chapter uses a standing nomination from GY1, countersigned by joiners as group practice. Resolved by continuity ruling R9.
3. **Bible glossary / plan** describe Ch 2C as "pre-acquisition losses of a joiner not surrenderable under Part 5A for 5 years": consistent; CTM06815 adds that the 5 years run from the end of the AP in which the change occurs.
4. **Bible §1A** dates *Ayerst* "(1974)": not confirmed; chapter omits the year.
5. **TPLC's GY1 surrender of excess management expenses** (ledger and earlier text: whole excess over gross profits, £5.9m; total to TEL £12.49m): capped by CTA 2010 s 105(3A) at the excess over gross profits plus the £825,000 CFC apportionment from TCM: £5,075,000 surrenderable, £825,000 carried forward, total to TEL £11,665,000. Resolved by continuity ruling R3.

---

## Pronunciation guide

| Written | Say it |
|---|---|
| Brackenwell | BRACK-un-well |
| Helmside | HELM-side |
| Greyfell | GRAY-fell |
| Tarnmoor | TARN-moor |
| Tom Hesketh | tom HESS-keth |
| Asha Varma | AH-shuh VAR-muh |
| Peeters | PAY-terz |
| Ayerst | AIR-st |
| Leekes | LEEKS |
| Part seven Z A | part seven zed ay |
| section forty five F / B / A | forty five eff / bee / ay |
| Calder | KAWL-der |

---

## Bible update

**Cast (real cases).**
- *Williams v Peeters Picture Frames Ltd* (1983) 56 TC 436: HMRC's spelling (CTM06370); sale via a group distributor to the same end customers; Special Commissioners: major change in isolation; on the special facts held not major (as HMRC reports, S). Ch 14.
- *Purchase v Tesco Stores Ltd* (1984) 58 TC 46: "major" = more than significant, less than fundamental (HMRC summary; S). Ch 14.
- *Ayerst (Inspector of Taxes) v C & K (Construction) Ltd* 50 TC 651: liquidation strips beneficial ownership (cited by HMRC, SDLTM23084; year and court not confirmed). Ch 14.
- *Leekes* recap only.

**Invented facts fixed (story).**
- Group deductions allowance: **standing nomination of TPLC** with effect from the start of GY1, signed by every UK group company; joiners (Calder 1 April GY1; Brackenwell 1 July GY2) countersign as group practice; TPLC files the GAAS each year; **GY1–GY4: whole £5m allocated to TEL**.
- Brackenwell integration plan (agreed pre-completion): captive sensor developer/supplier for Calder and TEL; external industrial sales run down; group's analysis: major change (Ch 2, s 673).
- Brackenwell GY2 loss split by months (6/12) under s 674: £2.6m / £2.6m (ledger figure; day basis would give £2,578,630 / £2,621,370).
- Promoter's "loss refresh" (GY3) details: TEL to pay BSL a large upfront fee for future development work; BSL to restart a small external sales channel; board declines (two locks: Ch 2 already triggered; Part 14B Conditions A–D).
- Calder carries on a **single engineering trade**; the GY3 division closure is not a cessation (no s 39/s 45F).
- Dr Varma's remark at the integration meeting (invented, labelled).

**Glossary terms explained (ch 14).** Deductions allowance (group); group allowance allocation statement (GAAS); relevant maximum; qualifying profits; relevant profits; change in ownership (s 719 A–C); major change in the nature or conduct of a trade; major change in the business (Ch 2A); shell company (Ch 5A); linked person (Ch 6); transfer of deductions (Part 14A); Part 14B / corporate loss refreshing; tax value / non-tax value; beneficial ownership on liquidation; terminal relief (carried-forward losses, s 45F); terminal loss (s 39).

**Established facts fixed (with source).**
- Ch 2A priority: does not apply where Ch 2 or Ch 3 can apply (CTM06775).
- Chs 2A–2E: changes in ownership on or after 1 April 2017 (CTM06715).
- Ch 2C: 5 years from the end of the AP in which the change occurs; applies even if business unchanged (CTM06815).
- Major change window: 3 years for APs ending before 1 April 2017; 5 years after (CTM06370).
- Nomination: not submitted to HMRC; continues until replaced, revoked in writing or nominee leaves (CTM05180). GAAS deadline: first anniversary of nominee's filing date; later dates for APs from 1 April 2021; no GAAS = no allowance (CTM05200).
- Relevant maximum = allowance + 50% × (qualifying profits − allowance) (CTM05030, CTM05260).
- s 45F unrestricted; c/f losses under ss 45, 45A, 45B; 3 years ending with the cessation period (CTM04130); Part 22 Ch 1 transfers bar s 39/s 45F claims (CTM06065).
- TCGA s 170(11): winding up does not break gains groups (CG45135).
- s 724A (FA 2014 s 37): new top holding company disregarded, changes on or after 1 April 2014 (CTM06355).
- Part 14B: FA 2015; APs beginning on or after 18 March 2015; "corporate loss refreshing" (CTM07505).

**Debates.** L1 (separate entity v single unit) touched via one group allowance; L12 (purpose tests) via Part 14A/14B. No verdicts.

**Open threads.** Brackenwell's restricted losses: closed as permanent (Ch 2 triggered; any later revival does not undo it). Flag 35 (Helmside s 719) carried forward to ch 15/18.

---

## Ledger additions (for calder-ledger.md §8)

- **GAAS:** TPLC nominated (standing nomination from start of GY1; joiners countersign); TPLC files GAAS each year; GY1–GY4 allocation: **£5m to TEL**.
- **Brackenwell restriction:** under **Part 14 Ch 2 (s 673)** (not Ch 2A); Ch 2C bar runs to **31 December GY7**.
- **Helmside GY4:** own £5m deductions allowance (not in a 75% group); c/f losses £1.2m fully relieved; TTP before consortium relief £1.3m (ledger figure).
- **Calder:** single trade; GY3 division closure is not a cessation.
- **Labelled hypotheticals (not story facts):** BSL GY4 profit £4.0m with £1.0m allocation → relief £2.5m, TTP £1.5m, CT £375,000, c/f £6.1m; with £5m allocation → relief £4.0m, c/f £4.6m. Part 7ZA example: qualifying £14m, losses £20m → relief £9.5m, TTP £4.5m, CT £1.125m, c/f £10.5m.

## Continuity fixes applied

Figures recomputed in Python: excess 8,000,000 − 2,100,000 = 5,900,000; threshold 2,100,000 + 825,000 = 2,925,000; surrenderable 8,000,000 − 2,925,000 = 5,075,000; carried forward 825,000; total to TEL 6,590,000 + 5,075,000 = 11,665,000.

- R3, `14-losses-reading.md`, Worked example 14.3: "Excess management expenses 5,900; Surrendered to TEL 12,490" → "Excess over gross profits 5,900; less CFC chargeable profits apportioned to TPLC from Tarnmoor Capital Ltd (TCM), part of the profit-related threshold (825); **Excess management expenses surrenderable 5,075**; carried forward (s 1223) 825; **Surrendered to TEL (6,590 + 5,075) 11,665**".
- R3, reading, options bullet: "only to the extent they exceed TPLC's gross profits (CTA 2010 s 105; chapter 15)" → "only to the extent they exceed TPLC's profit-related threshold, gross profits plus apportioned CFC profits (CTA 2010 s 105(3A); chapter 15)".
- R3, reading, prose: "TPLC surrendered both amounts, £12.49m, to TEL." → "TPLC surrendered the deficit and the surrenderable management expenses, £11.665m in all, to TEL; the other £825,000 of management expenses carried forward."
- R3, reading, loss-types table (group relief column for excess management expenses): "Only the excess over the company's gross profits" → "Only the excess over the company's profit-related threshold (gross profits plus apportioned controlled foreign company (CFC) profits)" (consistency with the bullet; also first use of "CFC" in the chapter).
- R3, reading, Key rules and figures row "Story: TPLC GY1": "NTLR deficit £6.59m + excess ME £5.9m = £12.49m to TEL | ledger" → "NTLR deficit £6.59m + surrenderable ME £5.075m (excess £5.9m less CFC apportionment £825,000) = £11.665m to TEL; £825,000 ME c/f | invented (story)".
- R3, `14-losses.txt`: "...but only so far as they exceeded Tarnmoor plc's own gross profits, which chapter fifteen explains." → "...but only so far as they exceeded Tarnmoor plc's profit-related threshold, which chapter fifteen explains." plus three new sentences (threshold = gross profits plus apportioned controlled foreign company profits; eight hundred and twenty five thousand pounds apportioned from the Marrovian finance company, chapter thirteen; five million and seventy five thousand pounds surrendered, eight hundred and twenty five thousand pounds carried forward). "...surrendered both amounts to Tarnmoor Engineering, twelve point four nine million pounds in all." → "...surrendered the deficit and the surrenderable expenses to Tarnmoor Engineering, eleven point six six five million pounds in all."
- R16, reading: Worked examples 14.3 and 14.4 titles: removed "canonical ledger figures"; Key rules source cells "ledger" (Brackenwell, Helmside, TPLC rows) → "invented (story)".
- R8, R9: chapter already correct; no text change.
