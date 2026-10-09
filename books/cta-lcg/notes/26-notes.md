# Notes: chapter 26, Controlled foreign companies

**Interpretation and assumptions.** A full Advanced Technical chapter on TIOPA 2010 Part 9A for FY2026, opened on the CJEU State aid judgment (19 September 2024) as the documented moment, structured on the "order of attack", with the GY5 annual CFC review (TCM, TVS, TIL) as the running case and labelled hypotheticals (law sheet 5 examples 1–6) for variants; Pillar Two, TP, CIR and hybrids are signposted only (chapters 27–30); R3 (CFC apportionment in TPLC's s 105(3A) threshold; s 371UD repealed) is taught as the "pair" in both editions.

**Files.** Script `chapters/26-controlled-foreign-companies.txt` (9,307 words; target 9,000 ±10%); reading edition `chapters/26-controlled-foreign-companies-reading.md` (9,410 words); 16 sections plus heading. Computations: scratch `lcg-ch26/calc.py` (session scratchpad), all figures re-run.

## Sources by section

Law sheet 5 Part A (A1–A10) and its worked examples 1–6 and traps 1–8 (items marked verified there are restated without new searches); exam-intel §3 (M23–M26 tables, synthesis, trap 9); bible §1A, §3.11, §4.1, §5.2; ledger §2, §3, §6, §7 (GY1, GY5), §8; continuity rulings R3, R16; chapters 2, 6 and 13 reading editions (consistency of the State aid dates, the GY2 ETR line and the s 105(3A) teaching).

WebSearch (standard mode), 10 of 12 used:
1. `TIOPA 2010 section 371IE matched interest profits CFC aggregate net tax-interest expense` → legislation.gov.uk s 371IE (data.xht / data.htm extracts); INTM219380 (example 25 v 9: 16 exempt), INTM219360, INTM219370; INTM219250 (pre-2017 formula, not relied on). Used for the matched interest mechanics (s 371IE(3)–(5), (8); F(No.2)A 2017 substitution; worldwide group periods of account beginning on or after 1 April 2017). **Resolves bible flag 40.**
2. `Court of Justice 19 September 2024 C-555/22 P ...` → ieu-monitoring reproduction of CJEU press release (Luxembourg, 19 September 2024); KPMG TaxNewsFlash and UK TMD pages; Simmons & Simmons; curia.europa.eu. Confirms annulment, joined cases C-555/22 P (UK), C-556/22 P (ITV), C-564/22 P (LSEGH Luxembourg and London Stock Exchange Group Holdings Italy); reference framework error; AG Medina's opinion to the same effect. Still secondary (no curia judgment text opened). **Bible flag 45: partly resolved (19 September 2024 now multi-source; 2 April 2019 and 8 June 2022 remain secondary).**
3. `Cadbury Schweppes C-196/04 ... IFSC Dublin 10% ...` → curia press release cp060072en; vlex; tpcases; Cleary Gottlieb note. Confirms date 12 September 2006, Grand Chamber, reference from the Special Commissioners, "wholly artificial arrangements", objective factors (premises, staff, equipment), tax motive not enough. **IFSC/10%/Irish treasury subsidiaries NOT confirmed: not stated in the chapter.**
4. `"Vodafone 2" [2009] EWCA Civ 446 Luxembourg subsidiary ...` → caselaw.nationalarchives.gov.uk/ewca/civ/2009/446 (title); Chartered Accountants Ireland digest; Inner Temple Library (WLR Daily); Dorsey; ukscblog. Confirms 22 May 2009; the Chancellor accepted HMRC's submission that an exception could be read in; High Court had held conforming interpretation impossible; Vodafone 2 Ltd / VIL Luxembourg / Mannesmann (2000) facts (secondary; reading edition only, labelled).
5. `new CFC regime Finance Act 2012 Schedule 20 accounting periods beginning on or after 1 January 2013 old regime introduced Finance Act 1984` → legislation.gov.uk FA 2012 s 180 notes; Sch 20 paras 49, 50, 58. Confirms CFC APs beginning on or after 1 January 2013, transitional rules, origin in 1984.
6. `HMRC INTM CFC tax exemption local tax QDMTT ... creditable tax` → INTM230100; MTT31020; Oxford CBT blog; oecdpillars. **QDMTT as local tax (s 371NB) or creditable tax (s 371PA): still not found in HMRC CFC guidance (bible flag 38 remains OPEN).** Taught as an open point.
7. `TIOPA s 371JB exempt period ... becomes non-UK resident` → INTM224175 (three conditions), INTM224200 (start conditions), INTM224400/224450. **Whether a migrating company gets an exempt period: not settled (bible flag 39, second limb, remains OPEN)**; TIL's file "does not rely on it" (labelled).
8. `CT600B supplementary pages controlled foreign companies ...; CFC charge included quarterly instalment payments total liability` → GOV.UK "Supplementary pages CT600B: controlled foreign companies and foreign permanent establishment exemptions, hybrid and other mismatches"; CT600B 2022 PDF; CTM92825 ("total liability ... includes tax charged on controlled foreign companies", very large companies); COM95020; CTM92640. **Law sheet's "secondary" CT600B form name now verified.**
9. `Controlled Foreign Companies (Excluded Territories) Regulations 2012 SI 2012/3024 ... Ireland` → legislation.gov.uk SI 2012/3024 (made 3 December 2012; in force 1 January 2013; Part 1 list truncated); INTM225070, INTM225100. **Whether Ireland is listed: UNVERIFIED (search returned nothing conclusive).** Chapter labels it as unchecked for TIL.
10. `old UK CFC rules ICTA 1988 section 748 exemptions ...` → INTM254220 (list of old exclusions), INTM254610 (ADP: 90% within 18 months; abolished for periods beginning on or after 1 July 2009), INTM255100 (de minimis £50,000), INTM255170 (motive test), INTM254470; Jones Day 2012. The "lower level of taxation / three quarters" test for the old regime **not verified**: chapter says only "taxed at a low level".

## Fact-check flags

1. **Ireland on the excluded territories list (SI 2012/3024 Sch Part 1): UNVERIFIED.** TIL's conclusion (nil chargeable profits) does not depend on it; the text says it would need checking.
2. **Exempt period for a migrating company (TIL): UNVERIFIED** (INTM224200's description suggests it may be available; the statute s 371JB was not seen). Not relied on.
3. **QDMTT and the tax exemption / creditable tax: OPEN** (bible flag 38). Taught as an open point; no Irish law stated.
4. **EU dates:** 19 September 2024 (several secondary sources reproducing the CJEU press release); 2 April 2019 (Decision (EU) 2019/1352) and 8 June 2022 (T-363/19, T-456/19) and AG Medina 11 April 2024 remain **secondary** (law sheet). The script says the European dates come "from the court's press release and professional reports of it". "Years from 2013 to 2018" (scope of the decision) secondary.
5. ***Cadbury Schweppes* facts** (which subsidiaries, where, what rate) **not verified**: deliberately omitted.
6. ***Vodafone 2* bench:** "the Chancellor of the High Court" (not named), Longmore and Goldring LJJ (law sheet V; Chancellor's role from search extract). Vodafone/Mannesmann/Luxembourg facts secondary (reading edition only, labelled).
7. **Old regime "lower level of taxation" (three quarters) not verified**: not stated. Old exclusions from INTM254220 (V-HMRC). "Public quotation" exclusion deliberately omitted (not in INTM254220's list).
8. **"On the usual account of the policy"** (finance company exemption as a competitiveness measure) is the law sheet's teaching note, not a sourced quotation: labelled in both editions.
9. **CFC charge and instalments:** CTM92825 (very large companies) includes CFC tax in total liability (V-HMRC extract). Whether TPLC (nil TTP) is itself "large" for QIPs is **not resolved** (reading edition says so). Ledger/R1 do not fix TPLC's QIP status.
10. **TCM creditable tax = 9% × chargeable profits**: a just and reasonable attribution of Marrovian tax to the 25% charged (as in the ledger and law sheet example 1). Statute s 371PA (V) does not prescribe the attribution method.
11. **Matched interest for GY5:** Tarnmoor's ANTIE for GY5 is not fixed (GY1–GY3 are £24.65m, £25.82m, £24.35m); the chapter says "about £25m a year"; the conclusion (no matched interest exemption) holds for any ANTIE above £1,275,000.
12. **Recovery and joint appeals:** section numbers within ss 371UA–371UF not individually verified (reading edition cites the range; s 371UC for substitution per law sheet).
13. **Exempt period extension** "by HMRC notice given before it ends" (law sheet V). Script phrasing: "can be extended only by H M R C's notice given before the period ends, so a group that needs more time must ask early".
14. **Low profit margin "before interest"** and ROE exclusions: law sheet V (s 371MB, s 371MC).
15. **Check the 2027 grid** for the CFC grade when published (2026 and 2028 grids both 1; no change expected).

**Bible §5.2 flags touched:** 38 (QDMTT) open; 39 (SI 2012/3024 not opened; migrating company exempt period) open, with partial evidence (INTM225070/225100; INTM224200); 40 (s 371IE) **resolved**; 45 (EU dates) partly resolved.

## Contradictions

- **None with the ledger or rulings.** All TCM figures match the ledger (GY1–GY4 £825,000 / £74,250 / £132,000; GY5 £1,275,000 / £114,750 / £204,000) and R3 (apportionment enters the s 105(3A) threshold; s 371UD repealed). `ledger-check.py`: 132 checks, 0 failures (not edited).
- **Plan brief ch 26:** "s 371IE assumed not to reduce it further because the UK group has large net interest expense: verify" → **verified** (s 371IE(4): only the excess of the UK share of matched interest profits over ANTIE is exempt).
- **Plan brief ch 26 / law sheet A1:** "CT600B" marked secondary → verified (GOV.UK guidance title).
- **Plan "in force 17 July 2012"** (bible §3.11 "inserted 17 July 2012") is the Royal Assent/insertion date; the regime **applies to CFC APs beginning on or after 1 January 2013** (FA 2012 Sch 20 para 49). Both editions use the application date. Suggest the bible adds the 1 January 2013 date.
- **Plan brief, TIL tax exemption with QDMTT:** taught only as a generic hypothetical ("even a 15% rate would reach only 60%"), no Irish law stated (bible flag 38).
- **Plan exam lens "M24 Q5 ... kept discussing exemptions"; "M25 Q1 ... poor"**: used as recorded in exam-intel.

## Pronunciation guide

| Written | Say it |
|---|---|
| Cadbury Schweppes | KAD-bree SHWEPS |
| Vodafone | VOH-duh-fone |
| Medina | meh-DEE-nuh |
| Marrovia / Marrovian | muh-ROH-vee-uh / muh-ROH-vee-un |
| Vallaria / Vallarian | vuh-LAIR-ee-uh / vuh-LAIR-ee-un |
| Tarnmoor | TARN-moor |
| Tom Hesketh | tom HESS-keth |
| Undertow | UN-der-toh |
| Longmore | LONG-mor |
| Goldring | GOLD-ring |
| de minimis | day MIN-ih-mis |
| C F C | see eff see |
| C T six hundred B | see tee six hundred bee |
| I T V | eye tee vee |
| Luxembourg | LUX-um-burg |

## Bible update

**Cast (real):**
- *Cadbury Schweppes plc v IRC* (C-196/04), Grand Chamber, 12 September 2006, reference from the Special Commissioners: "wholly artificial arrangements"; objective factors (premises, staff, equipment). V (date, holding).
- *Vodafone 2 v HMRC* [2008] EWHC 1569 (Ch) (Evans-Lombe J, 4 July 2008: conforming interpretation impossible); [2009] EWCA Civ 446 (22 May 2009; the Chancellor, Longmore and Goldring LJJ: implied exception for CFCs actually established and carrying on genuine economic activities). V.
- CFC State aid: Commission Decision (EU) 2019/1352 (2 April 2019; S); General Court T-363/19, T-456/19 (8 June 2022; S); AG Medina (11 April 2024; S); Court of Justice C-555/22 P (UK), C-556/22 P (ITV), C-564/22 P (LSEGH Luxembourg and London Stock Exchange Group Holdings Italy) (19 September 2024; multiple secondary sources).
- ITV and the London Stock Exchange group named only as appellants.

**Invented facts used or fixed (all GY5 unless stated):** Tom Hesketh runs an annual CFC review of each overseas subsidiary before the return; TCM's own Marrovian team makes the lending decisions (no UK SPFs); TVS's Vallarian tax base reconciled by Tom's team to the UK computation (80%); TIL's Dublin staff manage all its assets and risks including the letting of its UK warehouse; TIL buys most of its stock from TEL; TIL's deposit interest (£60,000) is on trading working capital; TIL trading profits before interest and tax about £2.4m in GY5.

**Glossary terms explained (chapter 26):** controlled foreign company; control (legal, economic, joint, accounting); 40% rule; > 50% investment rule; chargeable company; relevant interest; apportionment; creditable tax; CFC charge; assumed taxable total profits; gateway; Conditions A–D; significant people functions; trading profits safe harbour; non-trading finance profits; 5% incidental rule; capital investment from the UK; trading finance profits and group treasury election; qualifying loan relationship; qualifying resources; full exemption; 75% exemption; matched interest (matched interest profits; relevant proportion); exempt period (subsequent period condition; chargeable company condition); excluded territories; low profits exemption; low profit margin exemption; relevant operating expenditure; tax exemption (local tax amount; corresponding UK tax; designer rate); accounting profits (CFC).

**Established facts fixed (with source):** Part 9A applies to CFC APs beginning on or after 1 January 2013 (FA 2012 Sch 20 para 49; V); old regime from 1984 (FA 2012 notes; V); old exclusions and ADP abolition for periods beginning on or after 1 July 2009 (INTM254220, INTM254610; V-HMRC); s 371IE as substituted by F(No.2)A 2017 (worldwide group periods of account beginning on or after 1 April 2017): nil ANTIE → full exemption; otherwise excess of relevant proportion over ANTIE exempt; ANTIE ignores banking/insurance amounts (V-statute extract; INTM219380); CT600B title (GOV.UK; V); CTM92825 includes CFC tax in very large company instalment liability (V-HMRC); SI 2012/3024 made 3 December 2012, in force 1 January 2013 (V).

**Debates covered:** L8 (CFC rules and EU law: *Cadbury Schweppes*, *Vodafone 2*, the 2012 gateway, the State aid saga and reversal) introduced and developed; L3 touched (SPF/AOA basis); L5 touched (Pillar Two push-down; 13.0% ETR signpost); L11 touched (territoriality: the CJEU's "whole system" baseline).

**Open threads:** none created. Closed: none. Chapter 30 should use the same GY5 TCM figures (Marrovian tax £459,000; CFC charge £204,000 within the £306,000 cap; ETR 13.0%; top-up about £102,000).

## Ledger additions

- GY5 (standing practice): Tom Hesketh's annual CFC review of each overseas subsidiary before the return. (Ch 26)
- TCM: its own Marrovian team makes and manages the lending decisions (no UK significant people functions); full exemption unavailable (UK equity is not qualifying resources); Ch 9 claim each year by TPLC; matched interest nil (ANTIE far above the 25% passing). Without the claim GY5 charge would be £816,000 (saving £612,000); effective UK rate 4.0%. (Ch 26)
- TVS: Vallarian tax on a reconciled base = 80% of corresponding UK tax: tax exemption every year. (Ch 26)
- TIL (from 30 June GY4): Dublin staff manage all assets and risks, including the letting of the UK warehouse (Ch 3 Condition B); buys most of its stock from TEL (related person; fails low profit margin); deposit interest £60,000 on trading working capital; **GY5 trading profits before interest and tax about £2.4m** (5% = £120,000); excluded territories and exempt period points left unchecked in the file. (Ch 26)
