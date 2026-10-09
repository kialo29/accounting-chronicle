# Notes: Chapter 21, Stamp taxes for groups

**Interpretation and assumptions.** Taught stamp duty (and SDRT as background), SDLT and LBTT for groups at awareness (grade 3) depth with AT-level nuances (contingency principle, convertible loan capital, s 77A, Sch 7 guards and para 4ZA, *Tower One*), on FY2026 / FA 2026 law, anchored on the Tarnmoor story's five share deals, three intra-group land transfers and the GY6 sale and leaseback; gains consequences of the same transactions are signposted only (chapters 16–20). Chapters 15–20 were not yet written when this chapter was drafted (parallel batch), so recaps rely on the plan, ledger and continuity rulings.

Files: `chapters/21-stamp-taxes-groups.txt` (4,772 words by `wc -w`; target 4,500 ± 10%), `chapters/21-stamp-taxes-groups-reading.md` (6,823 words). Scratch: `scratchpad/lcg-ch21/calc.py`.

## Sources by section

WebFetch unavailable; **12 WebSearch calls** used (standard mode; the full budget). Order: 1 contingency principle; 2 s 79(5); 3 s 77A; 4 para 4ZA; 5 SDLT arrangements (SDLTM23017); 6 *Tower One*; 7 SDRT listing relief; 8 dividends in specie; 9 LBTT rates; 10 SDLT NPV 3.5%; 11 FA 2003 s 125 / 1 December 2003; 12 Sch 7 paras 4–5. Law sheet V items restated without new searches.

| Section | Sources |
|---|---|
| Opening (demerger, s 192(3), clawback) | Ledger GY5; plan ch 17/19 briefs; LS2 §15 (Sch 7 paras 3–4, V) |
| Two taxes | LS2 §15 (stamp duty/SDRT rates R; SDLT rates R; VAT in consideration R). Search 11 "Finance Act 2003 section 125 abolition of stamp duty except ... stock or marketable securities SDLT implementation date 1 December 2003": https://legislation.gov.uk/uksi/2003/2816/note/made (explanatory note: implementation date 1 December 2003, order made 12 November 2003; stamp duty only on instruments relating to stock or marketable securities under FA 1999 Sch 13). Search 10 "SDLT lease net present value temporal discount rate 3.5% ...": legislation.gov.uk FA 2003 Sch 5 extract ("3.5% or such other rate as may be specified by regulations"); rent bands 0/1/2% (£150,000; £5m) per bible §3.14 (V, TKS) and commercial calculators |
| Share deals: contingency principle | Search 1 "HMRC stamp taxes manual contingent consideration maximum amount ... STSM": https://www.gov.uk/hmrc-internal-manuals/stamp-taxes-shares-manual/stsm021120 ; https://gov.uk/hmrc-internal-manuals/stamp-taxes-shares-manual/stsm021100 (capped → maximum; minimum only → minimum; wholly unascertainable → nil; *Underground Electric Railways* (HL) cited; duty not varied when the contingency resolves; "wait and see" not for contingent consideration) **V-HMRC** |
| Share deals: convertible notes | Search 2 "Finance Act 1986 section 79(5) loan capital exemption ... right of conversion": https://www.legislation.gov.uk/ukpga/1986/41/section/79 (listed; text not seen in full); https://www.gov.uk/hmrc-internal-manuals/stamp-taxes-shares-manual/stsm041070 ; https://www.gov.uk/hmrc-internal-manuals/stamp-taxes-shares-manual/stsm021230 (s 79(5) disapplies s 79(4) where conversion right at execution; HMRC: right must be exercisable by the holder) **V-HMRC** |
| Stamp duty reliefs | LS2 §15 (s 42 V; s 75 V; s 76 repealed V; s 77 V). Search 3 "Finance Act 1986 section 77A disqualifying arrangements ...": https://www.gov.uk/hmrc-internal-manuals/stamp-taxes-shares-manual/stsm042460 ; STSM042470, 042500, 042510, 042520–042550; Mazars blog (instruments executed on or after 29 June 2016; purpose of securing control of acquiring company; CTA 2010 s 1124; FA 2020 amendment from 22 July 2020 excluding persons holding ≥ 25% of the target throughout the relevant period; relevant merger arrangements carve-out) **V-HMRC (extract) / S** |
| SDLT group relief and guards | LS2 §15 (s 53 V; Sch 7 paras 1–2 V). Search 5 "SDLTM23040 ... arrangements ...": https://www.gov.uk/hmrc-internal-manuals/stamp-duty-land-tax-manual/sdltm23017 (practical likelihood not relevant; no inference merely from moving land to a property-holding company), SDLTM23030 **V-HMRC (extract)**. Search 6 "Tower One St George Wharf ...": https://caselaw.nationalarchives.gov.uk/ewca/civ/2025/1588 (listing); KPMG https://kpmg.com/uk/en/home/insights/2024/12/tmd-tower-one-sdlt-group-relief-and-the-effective-date-of-a-transaction.html ; Simmons & Simmons https://www.simmons-simmons.com/en/publications/cm3ztt751045kugzgeshcysa8/sdlt-group-relief-and-tax-avoidance ; https://www.simmons-simmons.com/en/publications/cmkpnpmse00k2u7k8rwx3jgxw/complex-statutory-construction-the-court-s-approach-in-tower-one (UT [2024] UKUT 373 (TCC) upheld FTT; main purpose of CT advantage (base cost step-up); failure of the step irrelevant; s 441 case law applied; MV ~£200m v ~£30m; CA [2025] EWCA Civ 1588, 10 December 2025: taxpayer no longer contended for group relief; CA reversed UT on s 53/54 MV but applied s 75A) **S (commentary); CA listing seen** |
| Three-year string | LS2 §15 (paras 3–4, 7–11 V). Search 4 "SDLTM group relief withdrawal vendor leaves group paragraph 4ZA ...": https://gov.uk/hmrc-internal-manuals/stamp-duty-land-tax-manual/sdltm23080 , https://www.gov.uk/hmrc-internal-manuals/stamp-duty-land-tax-manual/sdltm23081 , https://www.legislation.gov.uk/ukpga/2008/9/section/96 (para 4ZA inserted by FA 2008 s 96; vendor leaving; later change of control of purchaser within 3 years), SDLTM23084 (winding-up exception unaffected by 4ZA) **V-statute (extract) / V-HMRC**. Search 12 "Finance Act 2003 Schedule 7 paragraph 4 ... section 75 ... paragraph 5 recovery": https://www.legislation.gov.uk/ukpga/2003/14/schedule/7/2003-09-27 ; https://gov.uk/hmrc-internal-manuals/stamp-duty-land-tax-manual/sdltm23100 (para 4(3)-type s 75 exception; para 5 recovery after 6 months from vendor and companies above the purchaser) **V-HMRC (extract)**; *HC-One No.1 Ltd v HMRC* [2026] UKFTT 678 (TC) via https://www.taxadvisermagazine.com/article/hc-one-v-hmrc-solvent-liquidations-and-sdlt **S** |
| Sale and leaseback | LS2 §15 (s 57A V); LS4 §1.6 (Part 19 Chs 1–4 V; (16 − N)/15 V) |
| Scotland | Search 9 "Revenue Scotland LBTT non-residential rates ...": https://revenue.scot/node/1026 (lease guidance: 0% / 1% / 5% at £150,000 / £250,000 from 25 January 2019; lease NPV bands 0% / 1% / 2% at £150,000 / £2m from 7 February 2020), https://revenue.scot/node/1149/revisions/4542/view **V (official guidance; revision currency not confirmed)**; LS2 §15 (Sch 10 V structure) |
| SDRT listing relief | Search 7 "SDRT relief newly listed companies ... 89C": https://www.gov.uk/hmrc-internal-manuals/stamp-taxes-shares-manual/stsm042600 , STSM042610, STSM042605; CMS https://cms.law/en/gbr/legal-updates/autumn-budget-2025-stamp-duty-reserve-tax-three-year-holiday-for-new-listings (3 years; listed on or after 27 November 2025; Exclusion A mergers/takeovers of listed companies; Exclusion B new holding company over an existing listing; ends on change of control; not the 1.5% charge) **V-HMRC (extract)** |
| Dividends in specie (demerger) | Search 8 "STSM dividend in specie ...": https://www.gov.uk/hmrc-internal-manuals/stamp-taxes-shares-manual/stsm021130 (dividend of shares declared in specie: no consideration, no charge; cash dividend satisfied in shares: charge on debt released; market value rule for listed securities from 29 October 2018) **V-HMRC** (used in notes only; see flag 6) |
| Exam lens | `research/exam-intel.md` (N25 Q5, N23 Q2, N24 Q5 marking guide 3 marks, M23 Q4; traps list item 25); `research/grid.tsv` rows p11 and p6 (grades; SDRT row blank for LCG AT, graded 3 for LCG APS) |


## Fact-check flags

1. **Resolved by continuity ruling R22** (£270,000 canonical; ledger, bible and ledger-check amended). **CONTRADICTION (ledger/plan): TAL buyer's stamp duty.** Ledger GY6 and plan ch 20/21 give Brennock's stamp duty as **£240,000** (0.5% × £48.0m cash). On HMRC's contingency principle (STSM021120), a capped earn-out is charged on its **maximum**: £48.0m + £6.0m = £54.0m → **£270,000**. The chapter teaches £270,000 and names £240,000 and £255,000 as traps. `ledger-check.py` line 15 checks sd(48e6) = 240,000 (arithmetic still passes; the legal base is wrong). **Fix needed:** ledger GY6 and bible §1B TAL row → £270,000; chapter 20 (both editions) if it states £240,000; ledger-check line 15 → sd(54e6) = 270,000.
2. **New story fact: stamp duty on BSL's convertible notes £9,000** (FA 1986 s 79(5): conversion right at execution; HMRC's view that the holder must be able to exercise it). Total BSL stamp duty **£120,000**. Chapter 20 (and ch 12 reading, which says "stamp duty £111,000" for the shares only: consistent as far as it goes) should add the £9,000 if it lists the deal's stamp duty. Assumption fixed: the notes gave the **holders** the conversion right.
3. **Story fact fixed: TAL hive-down "no arrangements".** At 1 February GY6 the board minute recorded a decision to run the actuators business as a separate company and review options later in the year; no buyer, heads of terms or agreement to sell. This is needed for SDLT group relief to be available at the hive-down (Sch 7 para 2(2)(b)) and so for the ledger's clawback. **Chapter 20 must not have a buyer or heads of terms in place on 1 February GY6.**
4. **Indirect demerger alternative keeping SDLT group relief** (Sch 7 para 4 s 75 exception): **book's reading**, labelled in both editions; the para 4(2)–(3) wording was seen only in HMRC/secondary extracts, and whether FA 1986 s 75 applies to an indirect (s 1077) demerger was not verified. Check before release.
5. **Tower One**: holdings from secondary commentary (KPMG, Simmons & Simmons) plus the Find Case Law listing of the CA judgment; the judgments were not opened. The reading edition labels the status and gives the reported MV figures as "published commentary reports". The script makes no quote and states only the core holding.
6. **Bible flag 34 (stamp duty on a demerger distribution; contingent consideration): resolved.** Contingent consideration: STSM021120 (flag 1). Demerger distribution: STSM021130 says a dividend declared in specie of shares has no chargeable consideration (no stamp duty), but a cash dividend satisfied in shares is charged on the debt released. Not taught in the chapter (word budget); chapter 19 may use it: TPLC's TWS distribution, if declared in specie, attracts no stamp duty.
7. **Bible flag 31 (LBTT non-residential rates): resolved** from Revenue Scotland guidance (0% / 1% / 5%; bands £150,000 / £250,000 from 25 January 2019); revision currency of the revenue.scot pages not confirmed.
8. **SDRT grade:** the 2026 grid (grid.tsv) leaves SDRT ungraded for LCG AT (graded 3 for LCG APS); SDLT returns/payment/compliance rows also ungraded for LCG AT. Taught as background. Check the 2027 grid.
9. **SDRT listing relief applied to Tarnwater:** book's reading of HMRC's description of Exclusions A and B; the s 89C text was not seen. Labelled. One source described the inserting provision as a Finance Bill "clause 82"; the bible/law sheet (R) cite **FA 2026 s 85**, which the chapter uses.
10. **SDLT clawback further return deadline** (FA 2003 s 81) not verified: omitted (row ungraded for LCG AT).
11. **Para 5 recovery** from "controlling directors" not confirmed: omitted (vendor and companies above the purchaser only).
12. **Stamp duty pinpoint references** (Stamp Act 1891 late-stamping sections; FA 1999 Sch 13 paragraph numbers; FA 2003 s 76 for the 14-day return) not verified: given at Act/Part level only.
13. **Head office facts fixed (new, invented):** freehold; TES had not opted to tax (no VAT on the £14.0m). Leaseback NPV £10,365,670 at 3.5%; SDLT on rent without s 57A **£155,813** (illustrative, relieved).
14. **Calder's leaseback lease**: group relief on the grant of the lease (TES → CVE) stated without a rent figure; chapter 17 may fix the rent.
15. *Underground Electric Railways*: name only, as cited in STSM021120; year and citation not verified (not given).
16. HMRC's market value rule for listed securities (29 October 2018), from STSM021130 extract: mentioned once in a Going further bullet as "HMRC's manual notes".

**Bible §5.2 flags touched:** 31 (resolved), 34 (resolved), 1 (2027 grid: still open).

## Contradictions

- **TAL stamp duty £240,000 (ledger, plan, bible §1B) v £270,000 (this chapter, STSM021120).** See flag 1. Correction proposed: £270,000.
- **BSL stamp duty:** ledger £111,000 (shares) is right for the shares; this chapter adds £9,000 on the convertible notes (new fact). Not a contradiction unless chapter 20 states a deal total of £111,000.
- Plan "Covers and owns" for ch 21 asked for SDRT listing relief and SDRT generally; the grid leaves SDRT ungraded for LCG AT: taught briefly as background (no contradiction in substance).
- No other conflicts with the plan, ledger, rulings R1–R17 or chapters 1–14 (ch 1 group-definitions rows for stamp duty and SDLT groups, ch 7 s 1038(6), ch 13 stamp duty not a management expense: all consistent).

## Pronunciation guide

| Written | Say it |
|---|---|
| Tarnwater | TARN-waw-ter |
| Brennock | BREN-uck |
| Greyfell | GRAY-fell |
| Northlight | NORTH-lite |
| Oldroyd | OLD-royd |
| Tower One St George Wharf | TOW-er wun saint JORJ worf |
| Underground Electric Railways | as written |
| S D R T / S D L T / L B T T | ess dee ar tee / ess dee el tee / el bee tee tee |
| leaseback | LEESS-back |
| depositary | dih-POZ-ih-tree |
| adjudicated | uh-JOO-dih-kay-tid |
| Revenue Scotland | REV-en-yoo SKOT-lund |

## Bible update

**Cast (real cases):**
- *Tower One St George Wharf Ltd v HMRC* [2024] UKUT 373 (TCC); CA [2025] EWCA Civ 1588 (10 December 2025): SDLT group relief denied under Sch 7 para 2(4A) for a main purpose of obtaining a CT advantage (base cost step-up); failure of the step irrelevant; s 441 case law applied; CA reversed UT on s 53/54 market value but applied s 75A. Status S (commentary) / CA listing seen. Ch 21.
- *HC-One No.1 Ltd v HMRC* [2026] UKFTT 678 (TC): para 4(4) winding-up exception applied to a solvent MVL of an intermediate parent; fact-specific; possibly appealed. S. Ch 21 (reading edition only).
- *Underground Electric Railways* (HL), as cited in STSM021120 for the contingency principle. Ch 21.

**Invented facts fixed:** BSL notes carried holders' conversion rights; stamp duty on notes £9,000 (BSL total £120,000); TAL buyer's stamp duty £270,000 (proposed correction); TAL hive-down with no arrangements to sell on 1 February GY6; head office a freehold, not opted to tax; leaseback NPV £10,365,670, SDLT on rent £155,813 relieved by s 57A; Calder claims SDLT group relief on its leaseback from TES; Tom's register of intra-group land transfers with 3-year diary dates.

**Glossary terms explained (ch 21):** stamp duty (groups recap); SDRT; contingency principle (stamp duty); loan capital exemption and convertible loan capital; s 42 group relief (associated bodies corporate); s 75 reconstruction relief; s 77 share-for-share relief; s 77A disqualifying arrangements; SDLT connected company rule; SDLT group relief and its four guards; clawback (withdrawal); para 4ZA vendor-leaving rule; SDLT reconstruction relief; SDLT acquisition relief; sale and leaseback relief (s 57A); CT sale and leaseback (Part 19 Chs 1–2; commercial rent; (16 − N)/15); LBTT; SDRT UK listing relief.

**Established facts (with source):** stamp duty restricted to stock or marketable securities from 1 December 2003 (FA 2003 s 125; SI 2003/2816 note); SDLT NPV discount rate 3.5% (FA 2003 Sch 5); s 77A from 29 June 2016, FA 2020 amendment from 22 July 2020 (STSM042460); para 4ZA by FA 2008 s 96; para 5 recovery after 6 months (SDLTM23100); contingency principle (STSM021120); s 79(5) (STSM041070); LBTT non-residential 0/1/5% (£150,000 / £250,000) and lease 0/1/2% (£150,000 / £2m) (Revenue Scotland); SDRT listing relief exclusions (STSM042600–042610); dividends in specie (STSM021130).

**Debates covered:** none of the L-series directly; purpose tests thread (Tower One links SDLT para 2(4A) to s 441: plan §7 "purpose tests replacing mechanical rules").

**Open threads:** TAL earn-out (stamp duty fixed at the cap; no refund if less is paid) feeds chapter 18/20's flagged earn-out point. Bible §5.1 unchanged otherwise.

## Ledger additions

- GY2: stamp duty on BSL's £3.0m convertible notes bought for £1.8m: **£9,000** (FA 1986 s 79(5)); BSL deal stamp duty total **£120,000**.
- GY6 (1 February): no arrangements for TAL to leave the group at the hive-down (board minute: run as a separate company, review options later in the year; no buyer or heads of terms).
- GY6 (31 December): Brennock's stamp duty **£270,000** on £54.0m (cash £48.0m + earn-out cap £6.0m) — **replaces £240,000** (flag 1).
- GY6 (1 October): head office a freehold; no option to tax (no VAT); leaseback NPV **£10,365,670**; SDLT on rent without relief **£155,813** (relieved, s 57A); Part 19 Ch 1: no restriction (commercial rent).
- GY3 (1 April): CVE's lease from TES relieved by SDLT group relief (no rent fixed).
- Totals (invented): stamp duty paid across the story **£652,500**; SDLT group relief £923,500, clawed back £654,000, kept £269,500.
- Labelled hypotheticals (**not story**): TPLC → TEL Calder share transfer (s 42, £160,000); acquisition relief on £10m land (£489,500 v £50,000); Part 19 Ch 2 assignment for £1.0m with 10-year leaseback (£400,000 income); rounding demo £1,234,567 → £6,175; LBTT on £5.6m £268,500.

## Continuity fixes applied (R18–R29; reviewer D, 9 October 2026)

- **R22:** the chapter is the source (TAL £270,000; BSL notes £9,000; totals £652,500 / £923,500 / £654,000 / £269,500). Flag 1 marked "resolved by R22". No text change.
- **R29 (no arrangements at the TAL hive-down and the 1 October GY3 factory transfer):** consistent. No change.

## Technical review fixes (review D)

See `review/review-D.md` for sources.

- **MINOR (21.1):** reading, *Tower One* Court of Appeal: panel added (Asplin, Warby and Falk LJJ). The outcome as stated (no group relief argument; UT reversed on s 53; s 75A applied) is confirmed by Find Case Law and practitioner summaries. Open item 24 (Tower One) resolved. *HC-One* appeal status remains open.
- Everything else confirmed (Python re-run of every figure). Script unchanged (4,772 words).
