# Appendix: sources by chapter

*As built, 9 October 2026. Consolidated from the "Sources by section" lists in every notes file and the source lists of reviews A–G, deduplicated within each chapter. Sources used throughout are listed once at the top.*

**How to read the marks**

| Mark | Meaning |
|---|---|
| **[LS]** | Verified in the research phase: the primary source was opened when the law sheets or exam-intel were compiled (9 October 2026) and the item is marked V there |
| **[E]** | Seen during the build **only in a WebSearch extract** (title, URL and a short, sometimes truncated, quotation). WebFetch was unavailable, so no page was read in full |
| **[2nd]** | Secondary source (professional firm, magazine, commentary, encyclopaedia), via search extract |
| **[ref]** | Cited from general knowledge or another source; not itself opened |

**URL patterns.** Statutes: `https://www.legislation.gov.uk/ukpga/{year}/{chapter}/section/{n}` (CTA 2009 = 2009/4; CTA 2010 = 2010/4; TIOPA 2010 = 2010/8; TCGA 1992 = 1992/12; CAA 2001 = 2001/2; TMA 1970 = 1970/9; FA 1998 = 1998/36; ITA 2007 = 2007/3; FA 2026 = 2026/11; F(No.2)A 2023 = 2023/30). HMRC manuals: `https://www.gov.uk/hmrc-internal-manuals/{manual}/{page}` (e.g. `company-taxation-manual/ctm92530`, `international-manual/intm489135`, `corporate-finance-manual/cfm98620`). Judgments: `https://caselaw.nationalarchives.gov.uk/{court}/{year}/{number}` (e.g. `ewca/civ/2024/330`).

---

## Throughout

- Research files: `research/law-sheet-1-ct-core.md` (LS1), `law-sheet-2-gains-reorgs-ca-stamp.md` (LS2), `law-sheet-3-international.md` (LS3), `law-sheet-4-accounting-misc.md` (LS4), `law-sheet-5-cfc-tp-hybrids-migration.md` (LS5) **[LS]**; `research/exam-intel.md` (CIOT LCG page, exams page, Candidate Instructions October 2026, Exam Regulations, FAQs, key dates, tax tables 2026, Prospectus 2026, past papers and examiners' reports M23–M26, Prizes and Results, JP FAQ, CTA Handbook 2028, 2028 grids) **[LS]**; `research/lcg-grid-extract-v2.txt` (2026 grid) **[LS]**.
- Finance Act 2026 (2026 c. 11, Royal Assent 18 March 2026) **[LS]**; FA 2025 ss 13–14 (FY2026 rates) **[E]** (review B).
- Continuity rulings R1–R29 and the running-case ledger (book files; every story number re-run in Python, `ledger-check.py` 212 checks, 0 failures).
- Not opened at any stage: oecd.org (blocked): OECD Model (18 November 2025), Commentary, TPG 2022, 2010 AOA report, BEPS reports. BAILII (blocks bots; one review A citation for *Castlelaw* came via a search result pointing to BAILII).

---

## Prologue: One loan, two answers

- **Cases.** *BlackRock HoldCo 5, LLC v HMRC* [2020] UKFTT 443 (TC) **[2nd]** (Slaughter and May; ICLR); [2022] UKUT 199 (TCC) **[E]** (Find Case Law; tpcases.com); [2024] EWCA Civ 330 **[E]** (Find Case Law; judiciary.uk press summary) and **[LS]** (LS1 §2: [192], paras 186–187, 193); Supreme Court permission refused, UKSC 2024/0070 **[E]** (supremecourt.uk PTA October 2024; news Aug–Sep 2024). *Kwik-Fit* [2024] EWCA Civ 434, *JTI* [2024] EWCA Civ 652, *Fidex* para 74 **[LS]**.
- **Statute.** CTA 2009 ss 441–442; TIOPA 2010 ss 147, 151(2); CIR start, 30%, £2m **[LS]**.
- **Other.** Macfarlanes; Bloomberg Tax (£654m); BDO; DLA Piper; Ashurst; PwC The Suite; Slaughter and May *Tax and the City* May 2024; Freshfields; City AM **[2nd]**. HMRC tax avoidance litigation decisions page **[E]**.

## Introduction, conclusion, a note on sources

- Autumn Budget date 28 October 2026 (professionalpensions.com; evelyn.com; lbc.co.uk) **[2nd]**.
- GOV.UK collection "Finance Bill 2026-27 draft legislation and technical tax documents" (13 July 2026) **[E]**; ICAEW; CIPP **[2nd]**.
- CIOT *Tax Adviser*, Technical Newsdesk **[E]**; ICAEW Tax Faculty TAXwire / TAXline **[E]**.
- GOV.UK "Corporate tax roadmap 2024" (30 October 2024) **[E]**.
- GOV.UK "HM Revenue and Customs: Large Business"; TCRM1000 **[E]**.
- OECD Model 2025 update (approved 18 November 2025; published 19 November 2025): KPMG, Loyens & Loeff, Taxmann **[2nd]**.
- legislation.gov.uk "Changes to legislation" and point-in-time pages **[E]**; Find Case Law launch (GOV.UK press release; Inforrm, 19 April 2022) **[E]**.
- GOV.UK consultation "Modernising and standardising company tax returns" (10 March–2 June 2026); Deloitte Business Tax Briefing (13 March 2026); ICAEW; ATT **[E]/[2nd]**.
- CIOT 2027 grid, tables, prospectus: searched, not found.

## Chapter 1: One company or many?

- **Statute.** CTA 2010 s 151 (s 151(4)) **[E]**; CTA 2010 Part 3A cross-heading (ss 18E–18F; control ss 450–451) **[E]**; SI 2017/1072 (as made) **[E]**; SI 2016/237 (title page only) **[E]**; group tests (s 170, s 190(13), Sch 7AC para 26, FA 1930 s 42, FA 2003 Sch 7, TIOPA ss 148, 371RB–371RE, F(No.2)A 2023 s 129) **[LS]**.
- **HMRC.** CTM92520, CTM92800, COM95001, COM30110 **[E]**; CFM95330, CFM95150, CFM95340 **[E]**; GOV.UK "HM Revenue and Customs: Large Business"; Large business compliance technical note (ARA 2025–26); TCRM1000; SAOG16200 **[E]**; INTM412080 (SME thresholds) **[ref]**.
- **Cases.** *Salomon v A Salomon and Co Ltd* [1897] AC 22 **[2nd]**.
- **Other.** ICAEW Taxguide 02/23; ACCA *In Practice* February 2023 **[2nd]**.

## Chapter 2: Where corporate tax law lives

- **Statute.** TIOPA 2010 ss 2, 5(2), 6 **[E]**; TIOPA s 164 (as amended), CTA 2009 s 20(1A)–(1E) **[LS]**; CTA 2010 s 1140A (reference to the 2025 Model; dynamism not confirmed) **[E]**; s 164A conditions **[LS]** (LS5 B3) with INTM414320/414330 **[E]**; FA 2004 s 37 and Part 3 Ch 2 (UK-to-UK TP from 1 April 2004) **[E]**; FA 2016 s 75, FA 2011 s 58 (TPG designation) **[E]**; SI 2018/266 art 2 **[E]**; SI 2022/1147 **[ref]**; Retained EU Law (Revocation and Reform) Act 2023 **[E]**; TIOPA explanatory notes (Rewrite; Royal Assent 18 March 2010) **[E]**; FA 2026 ss 266–274 **[LS]**.
- **HMRC.** INTM414120, INTM413250 **[E]**; GOV.UK Non-statutory clearance service guidance (via govdiff mirror) **[E]**; Advance tax certainty service guidance **[E]**.
- **Cases.** *Fowler v HMRC* [2020] UKSC 22 **[E]** and **[LS]** (quote); press summary **[E]**; *NCL*, *GDF Suez Teesside*, *Cadbury Schweppes* **[LS]**.
- **Other.** Law Commission list of Rewrite Acts **[E]**; Wikipedia (Tax Law Rewrite Project) **[2nd]**; Find Case Law launch (Inforrm; GOV.UK; Law Gazette) **[E]**; ICAEW (advance tax certainty, May 2026); LexisNexis Simon's Taxes A6.107B; PwC Tax Summaries **[2nd]**; Pinsent Masons (REUL) **[2nd]**; RSM and BDO on s 164A **[2nd]**; draft FB 2026-27 foreign branch exemption PDF (assets.publishing.service.gov.uk) **[E]**.

## Chapter 3: Returns, payments and enquiries

- **Statute.** SI 1998/3175 (as made) and SI 2017/1072 **[E]** (reg 3 as amended **not seen**); FA 1998 Sch 18 para 14 (via CTM93040 and ICAS) **[E]**; CTA 2010 s 963 and explanatory notes **[E]**; TMA s 59F; FA 2004 s 55; Sch 18 paras 2, 17 (FA 2026 s 265), 18, 23, 24, 46; FA 2026 s 264; FA 2007 Sch 24 **[LS]**.
- **HMRC.** CTM92520, CTM92530, CTM92800, CTM92810, CTM92815, CTM92820, CTM03580, CTM03940, CTM03560, CTM93040, COM95001, COM95005, COM30110, COM130070, COM122020, COM95060, COM95070, COM95012, CTM92740, CTM92750, CTM92760, CIRD89870, EM8310, EM8330 **[E]**; GOV.UK "HMRC revises interest rates for late payments" **[E]**.
- **Other.** gofile.co.uk; haysmac.com; ICAS (extended accounting periods); hcrlaw.com; PKF Francis Clark; *Tax Adviser*; pie.tax; Ross Martin; accounts-os.com; Mondaq (KPMG 1999); lawplayer (SI 2017/1072) **[2nd]**.

## Chapter 4: Governance and the anti-avoidance architecture

- **Statute.** FA 2009 Sch 46 and explanatory notes **[E]**; FA 2016 Sch 19 (paras 16(2), 16(3), 18) and s 161 **[E]**; FA 2022 Sch 17 paras 8, 18 **[E]**; FA 2004 s 315 (old text) **[E]**; FA 2013 s 207 and explanatory notes (review A) **[E]**; Criminal Finances Act 2017 ss 44–46 **[LS]**/**[2nd]**; FA 2014 s 222 **[ref]**; FA 2026 s 216 **[LS]**.
- **HMRC.** SAOG10100, SAOG11240, SAOG11260, SAOG11270, SAOG11290, SAOG18850 **[E]**; UTT14100; HMRC notice under FA 2022 Sch 17 para 86 **[E]**; GOV.UK "Corporate offences for failing to prevent criminal facilitation of tax evasion" **[E]**; LSS10000; ADRG02600 **[E]**; GOV.UK "Large businesses: publish your tax strategy" **[E]**.
- **Cases.** *R (Haworth) v HMRC* [2021] UKSC 25 **[E]**; *HMRC v AML Tax (UK) Ltd* [2022] UKFTT 174 (TC) **[E]** (headnote, review A); *Castlelaw (No 628) Ltd* [2020] UKFTT 34 (TC) **[E]** (review A); *Thathiah* [2017] UKFTT 601 (TC) **[2nd]**; *R (Archer) v HMRC* [2019] EWCA Civ 1021 **[2nd]**; *WT Ramsay* [1982] AC 300 **[2nd]**; *RFC 2012* [2017] UKSC 45 **[LS]** (title).
- **Other.** RPC, Simmons & Simmons, Hogan Lovells, HSF Kramer, Azets (first s 45 charge, August 2025) **[2nd]**; Mazars, regfollower (DOTAS) **[2nd]**; LexisNexis (FA 2026 Part 6) **[2nd]**; Tax Journal "The DOTAS conundrum"; Burges Salmon, Devereux, HSF on *Haworth*; Ross Martin and Pinsent Masons on SAO cases; ICAEW PCRT Q&A; IFA and ACCA helpsheets; Kingsley Napley; *Tax Adviser* **[2nd]**.

## Chapter 5: Tax follows the accounts

- **Statute.** CTA 2009 s 46, ss 180–187, s 996, Part 20 (s 1301B, s 1305B), ss 307–308, 313, 349, 595, 597, s 328; FA 2019 Sch 14 Part 3; CTA 2010 s 1127; FA 2013 s 40 **[LS]**; CTA 2009 s 55 (enacted) **[E]**; CTA 2010 s 6 and explanatory notes; FA 2011 Sch 7; F(No.2)A 2015 s 34 **[E]**; SI 2004/3271 (as made **[LS]**; as amended **not available**).
- **HMRC.** BIM31095, BIM31020, BIM46510, BIM46550, BIM46555, BIM46565, BIM42701, BIM34050, BIM34065, BIM34135, CFM64510, CFM64520, CFM64330, CFM64170, CFM64445, CFM86220 **[E]**; BLM17050, BLM50005, BLM50010, BLM52005; CFM20030, CFM76010, CFM76080, CFM76090 **[LS]** (S).
- **Cases.** *HMRC v NCL Investments* [2022] UKSC 9 **[LS]** and press summary **[E]**; *GDF Suez Teesside* [2018] EWCA Civ 2075 **[LS]**; *Union Castle* [2020] EWCA Civ 547 **[LS]**; *Odeon* (1971) 48 TC 257, *Gallagher v Jones* (1993) 66 TC 77, *Johnston v Britannia Airways* (1994) 67 TC 99 **[E]** (via BIM) / **[2nd]**.
- **Other.** FRC FRS 102 page; Hillier Hopkins; Haysmac (periodic review) **[2nd]**; ICAEW article 23 March 2026 **[2nd]** (via LS4); UKSC blog **[2nd]**; NUS Singapore Journal (Gallagher) **[2nd]**.

## Chapter 6: Deferred tax and the tax charge

- **Standards.** IAS 12 paras 4A, 15, 19, 24, 28, 35, 47, 51C, 53, 66, 81(c), 84, 85, 88A–88D (IFRS taxonomy example; AASB copy; eur-lex 2022/1392 and 2023/2468; legislation.gov.uk/eur/2004/2236 annex; ifrs.org) **[E]**; IAS 12 paras 68A–68C (KPMG; Deloitte DART) **[2nd]**; IFRIC 23 (ifrs.org; IAS Plus; BDO) **[E]**; IFRIC agenda decision November 2011 (para 51C) **[E]**; FRS 102 s 29 (ICAEW TAS helpsheet; ACCA *In Practice*; AccountingWEB) **[2nd]**.
- **Dates.** IASB Pillar Two amendments 23 May 2023; UKEB adoption 19 July 2023 (IAS Plus); FRC amendments July 2023 (FRC PDF; ICAS; Forvis Mazars) **[E]/[2nd]**; FA 2021 rate: substantively enacted 24 May 2021, Royal Assent 10 June 2021 (Whitings; BDO; ICAEW; SEC filing) **[2nd]**.
- **Other.** AccountingWEB, ACCA, KPMG Ireland (RDEC presentation) **[2nd]**; ESMA statement esma32-63-743; IFRS IC staff papers **[E]**; CIOT May 2026 past papers listing **[E]**; CTA 2009 Part 13 Ch 1A (s 1042I) (review B) **[E]**.

## Chapter 7: The large company computation

- **Statute.** CTA 2009 s 79 (2010 version) **[E]**; ss 1298–1300, 1303 **[E]**; CTA 2010 s 105 and explanatory notes **[E]**; CTA 2009 Part 12 (ss 1007–1038A), ss 1288–1297, ss 979–982; FA 2004 ss 196–197; CTA 2010 ss 189–217, 377, 377A, 379; CAA 2001 ss 70H, 70I; FA 2026 s 56, Sch 9 **[LS]**.
- **HMRC.** BIM47210, BIM45070, BIM45000, BIM45040, BIM37965, BIM42520, BIM60025, BIM20250, CTM80142, IHTM42959 **[E]**.
- **Cases.** *ScottishPower (SCPL) Ltd v HMRC* [2025] EWCA Civ 3 **[E]**; UKSC/2025/0047 (appellant's case PDF; 1 Crown Office Row note, 18 May 2026) **[E]**; *Macdonald v Dextra* [2005] UKHL 47 (swarb; [2004] EWCA Civ 22 on Find Case Law; Law Gazette) **[E]/[2nd]**; *McKnight v Sheppard* (BIM37965; casemine; [2023] UKUT 218 (TCC) citing it) **[E]/[2nd]**; *Eclipse Film Partners No 35* [2015] EWCA Civ 95 (Tax Journal; Mondaq; HMRC press release) **[2nd]**; *Marson v Morton* (ACCA; BIM summaries) **[2nd]**; *George Peters & Co v Smith* (BIM47210) **[E]**.
- **Other.** RPC, Simmons & Simmons, LexisNexis, Freshfields, CMS (*ScottishPower*) **[2nd]**; accotax, mah.uk.com (£150 function) **[2nd]**.

## Chapter 8: Plant and machinery

- **Statute.** CAA 2001 s 51C, s 51D **[E]**; ss 59A, 59B, 59C (2024 crossheading) **[E]**; s 5 **[E]**; ss 247, 248 **[E]**; s 58(5) (review B) **[E]**; FA 1998 Sch 18 Part IX (paras 81–82) **[E]**; CTA 2009 s 815 (enacted) **[E]**; Interpretation Act 1978 Sch 1 (R11) **[E]**; CAA ss 45S, 45T, 45U, 45V, 46, 52, 104A, 104D, 33A, 38A, 51A–51E, 52A, 83–86, 90–102, 104AA, 268A, 71–72, 67, 70, 205–208, 269, 234–240, 253, 214, 217, 218; CTA 2010 s 948; FA 2026 ss 28–30 **[LS]**.
- **HMRC.** CA11140, CA11800, CA27100, CA27500, CA23174ac, CA23165, COM53010, CIRD25140, CIRD25180 **[E]**; GOV.UK policy papers: permanent full expensing; new 40% FYA and 14% WDA (26 November 2025); Spring Budget 2023 full expensing **[E]**.
- **Cases.** *HMRC v Dundas Heritable Ltd* [2019] UKUT 208 (TCC) (GOV.UK decision page and PDF; Tax Journal; Ross Martin) **[E]**; *G H Chambers (Northiam Farms) Ltd v Watmough* (via CA27100) **[ref]**.
- **Other.** ICAS on AIA sharing; Deloitte; Bishop Fleming; Mortgage Solutions (date) **[2nd]**.

## Chapter 9: Buildings, fixtures, leasing and successions

- **Statute.** CAA 2001 ss 270BD, 270BC, 270BE, 270IA (and FA 2022 s 13), 70DA, 212B, 212C, Part 11 (ss 532, 536, 537, 538A) **[E]**; FA 2009 and FA 2010 explanatory notes **[E]**; ss 270AA, 270AB, 187A–187B, 198–199, 265–267, 561–561A, 573, 575 **[LS]**.
- **HMRC.** CA93650, CA93500, CA93150, CA94010, CA94751, BLM62110, BLM42010 **[E]**; GOV.UK "Claiming capital allowances for structures and buildings"; freeport enhanced SBA guidance; HS252 2026; sunset-extension policy paper **[E]**.
- **Cases.** *Haymarket Media Group Ltd v HMRC* [2022] UKFTT 168 (TC) **[E]**; *Kenmir v Frizzell* [1968] 1 All ER 414 **[LS]** (via *Haymarket*); *Barclays Mercantile v Mawson* [2004] UKHL 51 (Taxation magazine; Mondaq) **[2nd]**.
- **Other.** KPMG (leasing and full expensing); ACCA (full expensing exclusions); Pinsent Masons SBA guide; AccountingWEB forum (s 37B) **[2nd]**; Michelmores, Ross Martin (*Haymarket*) **[2nd]**.

## Chapter 10: Research and development

- **Statute.** CTA 2009 s 1142A (inserted by F(No.2)A 2023 Sch 1) **[E]** (review B); SI 2023/813; SI 2003/282 directions; SI 2024/286 **[E]**; FA 1998 Sch 18 para 83E (83EA, 83EB numbering **[E]**, unconfirmed); CTA 2009 Part 13 Ch 1A, s 1112B–1112J, s 1138A; FA 2026 ss 31, 34 **[LS]**.
- **HMRC.** CIRD122000, CIRD112100, CIRD89810, CIRD91400, CIRD91500, CIRD91700, CIRD92000, CIRD132000, CIRD138000, CIRD112300, CIRD140000, CIRD111000, CIRD81800, CIRD181000, CIRD183000 **[E]**; CT600L guidance; GOV.UK SME guidance; policy paper "Merger of current SME and RDEC schemes"; Finance Bill 2023-24 explanatory notes **[E]**; HMRC R&D Tax Credits Statistics September 2026 **[E]**; HMRC RDEC evaluation (17 November 2020); HMRC Working Paper 17 (2015) **[E]**.
- **Cases.** *Get Onbord* [2024] UKFTT 617 (TC); *Tills Plus* [2024] UKFTT 614 (TC) (ICAEW Taxline; Stewarts; Bloomberg Tax; Tax Insider) **[2nd]**.
- **Other.** Saffery; ACCA (October 2024); Taxation (17 November 2008); TaxationWeb; Taylor Wessing; Slaughter and May "The Lens"; BDO, TaxWatch, *The Accountant*, ABGI (error and fraud figures) **[2nd]**.

## Chapter 11: Intangible assets and intellectual property

- **Statute.** CTA 2009 s 775 **[E]**; Part 8 Ch 4 (ss 734(3), 736, 739, 739(1A)) **[E]**; s 729 and explanatory notes **[E]**; s 879M, s 879O (review C) **[E]**; FA 2019 Sch 9, s 26 **[E]**; TIOPA s 408 table (R4) **[E]**; CTA 2009 Part 8 generally; CTA 2010 Part 8A (s 357A) **[LS]**.
- **HMRC.** CIRD13230, CIRD40510, CIRD40560, CIRD40570, CIRD40575, CIRD20130, CIRD20150, CIRD20210, CIRD20220, CIRD20235, CIRD20240, CIRD44075, CIRD44077, CIRD44078, CIRD44086, CIRD44093, CIRD201010, CIRD220470, CIRD220480, CIRD220490, CIRD260100, CIRD260110, CIRD275000, CFM95800, CFM95805 **[E]**; GOV.UK "The Patent Box: calculating relevant profits"; policy paper on the small-profits-rate formula **[E]**; policy paper "Restriction of CT relief for business goodwill amortisation" (2015) and TIIN on the 2019 reform **[E]**.
- **Other.** ICAEW Taxline 2023 (s 782A) **[2nd]**.

## Chapter 12: Loan relationships and derivatives

- **Statute.** SI 2004/3256 reg 6 (as made) **[E]**; CTA 2009 s 463C **[E]**; Part 6 Ch 2 (s 479) **[E]**; CTA 2009 Parts 5–7 (ss 306A, 322, 349–362A, 374–378, 441–442, 463A–463I, 479–486E, 570–710) **[LS]**.
- **HMRC.** GOV.UK "Overview of Disregard Regulations" **[E]**; CFM57040, CFM57041, CFM57071, CFM57072, CFM57075, CFM57360, CFM57370, CFM32050, CFM33191, CFM35530, CFM35570, CFM35580, CFM38155, CFM38165, CFM38167, CFM41020, CFM41060 **[E]**.
- **Cases.** *Greene King* [2016] EWCA Civ 782 **[E]**; *Syngenta* [2025] UKUT 338 (TCC) **[E]**; *Fidex* UT [2014] UKUT 454 (TCC) (GOV.UK decision page) **[E]**; *JTI* [2024] EWCA Civ 652 **[E]**; *Kwik-Fit* (Simmons & Simmons, BDO, Weil, Freshfields, Tax Journal) **[2nd]**; Supreme Court PTA list October 2024 **[E]**; *BlackRock*, *Union Castle* **[LS]**.
- **Other.** Tax Journal; Slaughter and May; Weil; LexisNexis; KPMG; HLC **[2nd]**.

## Chapter 13: Companies with investment business

- **Statute.** CTA 2009 s 1222 **[E]**; s 1233 and explanatory notes; CAA 2001 s 253(2) **[E]**; CTA 2010 s 105 **[E]**; CTA 2010 s 688 **[E]**; CTA 2009 Part 16 (ss 1218B, 1219, 1220, 1223, 1225, 1229); CTA 2010 Part 14 Ch 3 (ss 677–691, 719, 723, 724A); TIOPA s 371UD (omitted F(No.2)A 2015 s 36) **[LS]**.
- **HMRC.** CTM08040, CTM08060, CTM08180, CTM08190, CTM08250, CTM08260, CTM08580, CTM08750, CTM80110, CTM80142, CTM82030 **[E]**.
- **Cases.** *Centrica Overseas Holdings Ltd v HMRC* [2024] UKSC 25 (Supreme Court press summary; Find Case Law press summary) **[E]** and **[LS]**; *Dawsongroup* [2010] EWHC 1061 (Ch) **[E]**; *Camas* [2004] EWCA Civ 541 **[E]** (title) / **[2nd]**; *Golder*, *Sun Life v Davidson* (via CTM08190) **[ref]**.
- **Other.** CIOT "HMRC one-to-many letters: management expenses"; Deloitte Business Tax Briefing (3 October 2025); KPMG; Saffery; *Tax Adviser* (*Centrica*); Addleshaw Goddard; PwC (profit-related threshold and CFC apportionments) **[2nd]**.

## Chapter 14: Losses in the larger company

- **Statute.** CTA 2010 s 673 (enacted) **[E]**; s 39 **[E]**; s 676CC, s 676DC **[E]**; s 730G **[E]**; FA 2015 Sch 3 explanatory notes; FA 2014 s 37 and notes **[E]**; FA 2019 Sch 10 **[E]**; TCGA s 170(11) (via CG45135) **[E]**; CTA 2010 Part 7ZA, Part 14, ss 45–45F, Part 14A **[LS]**.
- **HMRC.** CTM06750, CTM06715, CTM06720, CTM06725, CTM06735, CTM06775, CTM05180, CTM05200, CTM05030, CTM05040, CTM05260, CTM05270, CTM04830, CTM06370, CTM06380, SDLTM23084, CTM80205, CTM04130, CTM04135, CTM06065, CG45135, CG40460, CTM07505, CTM07510, CTM07520, CTM07545, CTM06815, CTM06825, CTM06835, CTM80151, CTM97750, CTM06355, CTM06030 **[E]**.
- **Cases.** *Ayerst v C & K (Construction) Ltd* [1976] AC 167 (swarb; vLex; Wikipedia; CTM06030) **[2nd]/[E]**; *Williams* (or *Willis*) *v Peeters Picture Frames* (CTM06370; Irish TaxSource) **[E]/[2nd]**; *Purchase v Tesco* (via LS4/CTM06370) **[ref]**; *Leekes* (recap) **[LS]**.
- **Other.** Tax Journal (*Farnborough*); Weil "tax groups and insolvency" **[2nd]**.

## Chapter 15: Group relief, consortia and joint ventures

- **Statute.** CTA 2010 s 154; FA 2013 s 31 explanatory notes **[E]**; s 155 (text incl. s 155(4)) **[E]**; ss 137, 138, 140, 142 **[E]**; ss 144, 146, 148 (review D) **[E]**; s 151 and Part 5 Ch 6 explanatory notes **[E]**; s 183 **[E]**; CTA 2009 s 799 **[E]**; FA 1998 Sch 18 para 74 (2018 version) and para 75A **[E]**; CTA 2010 s 130 explanatory notes **[E]**; SI 1999/2975 (title) **[E]**; FA 2022 s 24(3) (via CTM81502) **[E]**.
- **HMRC.** CTM80170, CTM80181, CTM80185, CTM80190, CTM80195, CTM80206, CTM80225, CTM80235, CTM80245, CTM80520, CTM80525, CTM80540, CTM80585, CTM80600, CTM80605, CTM80615, CTM80620, CTM80625, CTM80630, CTM80675, CTM80696, CTM82090, CTM82170, CTM82505, CTM82510, CTM82520, CTM82525, CTM82540, CTM81502, CTM97020, CTM97060, COM53100 **[E]**; GOV.UK policy paper "Abolition of cross-border group relief" **[E]**.
- **Cases.** *Farnborough Airport Properties* [2019] EWCA Civ 118 (Find Case Law; Linklaters, Pinsent Masons, Tax Journal, Slaughter and May) **[E]**; *HMRC v Eastern Power Networks* (GOV.UK PDF) **[E]**; *HMRC v South Eastern Power Networks* [2019] UKUT 367 (TCC) (Tax Journal; Devereux) **[2nd]**; *FCE Bank*, *Marks and Spencer* **[LS]**.

## Chapter 16: Company gains: property and leases

- **Statute.** TCGA s 154 (enacted) **[E]**; s 19 **[E]**; CTA 2009 ss 62–67, 96, 250 **[E]**; TCGA ss 2B, 2A, 16(2A), 38, 42, 44–47, 48, 53, 152–161, 173, 175(2B), 262, 280, Sch 1A, Sch 8 paras 1, 5; CTA 2010 Part 8ZB (ss 356OA–356OL; FA 2016 ss 77, 81); CTA 2009 s 5B **[LS]**; Part 8ZB extracts (review D) **[E]**.
- **HMRC.** CG70950, CG70960, CG71140, CG71141, CG71370, CG60285, CG60295, CG15440, CG15445, CG15451, CG76721, CG76900, CG17380, CG14561, CG14570, CG14650, CG14700–CG14702, CG14740, CG40200, CG14930, CG14910, BIM41055 **[E]**.
- **Other.** taxationweb; fiscari (s 38(1)(b) wording) **[2nd]**.

## Chapter 17: Gains inside the group

- **Statute.** FA 2006 s 70 **[E]**; s 171A versions (FA 2000 origin) and FA 2009 explanatory notes **[E]**; TCGA ss 170–177, 179 ((1A), (2)–(2B), (3A)–(3H), (4)–(10)), 184A–184I, 190, 192(3)–(4), 29–31, Sch 7A **[LS]**.
- **HMRC.** CG45440, CG45356, CG45357, CG45358, CG45455, CG48500, CG48520, CG48530, CG48540, CG46800, CG47681, CG47689, CG47693, CG45400, CG45420, CG45425, CG45430, CG47321, CG47334, CG47335, CG47025, CG47021, CG47337, CG45305, CG46101, CG17746, CG17767 **[E]**.
- **Cases.** *Johnston Publishing (North) Ltd v HMRC* [2008] EWCA Civ 858 (Find Case Law; CG45440) **[E]**; Chartered Accountants Ireland TaxSource digest; Taxation (9 January 2009) **[2nd]**; *Prizedome* (not used).
- **Other.** ICAEW Taxline 2023 (SSE and degrouping) **[2nd]**.

## Chapter 18: Shares: the exemption, reorganisations and earn-outs

- **Statute.** FA 2007 s 27 (s 16A) **[E]**; FA 1998 s 126 (review D) **[E]**; TCGA ss 104–110, 116, 117(A1), 126–138A, 135, 137 (FA 2026 s 37), 138, Sch 7AC paras 2–7, 15A, 18, 19, 26 **[LS]**.
- **HMRC.** CG14990, SVM107160, CG53000P, CG53008, CG53080B, CG53080C, CG53104, CG53106, CG53165, CG53170A, CG52562, CG52632, CG15835, CG40241, CG40249, CG51585, CG51620, CG51621, CG17274, CTM17005, CTM17030, CG58750, SAIM5150, BIM33325 **[E]**.
- **Cases.** *Delinian* [2023] EWCA Civ 1281 **[E]** (Find Case Law; RPC; Pinsent Masons; Mishcon; Simmons & Simmons) and **[LS]**; *M Group Holdings* [2023] UKUT 213 (TCC) **[E]**; *Stanton v Drayton* (1982) 55 TC 286 (via CG52562; lawcarenigeria) **[E]/[2nd]**; *Marren v Ingles* (GOV.UK CGT practice note 3) **[E]** (court via secondary); *Marson v Marriage* (via HMRC) **[ref]**.
- **Other.** *Tax Adviser* "Share exchanges: just and reasonable adjustments" (24 March 2026); Taxation 2002 "Capital gains: great expectations"; Tax Journal "Ask the expert" (2013); taxinsider; ACCA; RPC, Weil, Ross Martin, Simmons & Simmons on *M Group*; OpenTuition forum **[2nd]**.

## Chapter 19: Reconstructions, demergers and distributions

- **Statute.** CTA 2010 Part 22 Ch 1 (enacted) and explanatory notes **[E]**; ss 941, 944, 944E, 1081 (enacted), 1082, 1094 **[E]**; FA 2012 s 33 (review D) **[E]**; CTA 2010 Part 23 (s 1000, s 1020, s 1027A), ss 1030–1030B, 1073–1099; CTA 2009 Part 9A; TCGA s 136, s 139 (FA 2026 s 38), s 192, Sch 5AA; CTA 2010 Part 15 **[LS]**.
- **HMRC.** CTM06280, CTM06250, CTM06210, CTM06065, CTM06110, CTM06120, CTM06855, CTM06860, CTM17250, CTM17260, CTM17270, CTM17290, CTM36220, CTM36805, CTM36810, CTM36835, CTM36840, CTM36841, CG45620, CG53108 **[E]**; Statement of Practice 13 (1980) (GOV.UK) **[E]**; HMRC distributions consultation (23 June–14 September 2026, Annex E) **[LS]**.
- **Cases.** *Leekes Ltd v HMRC* [2018] EWCA Civ 1185 **[E]** (Find Case Law; Taxation; Tax Journal; PwC); *Progress Property v Moorgarth* [2010] UKSC 55 **[E]** (Find Case Law; press summary; WLR Daily); *IRC v Laird*, *Parker*, *Joiner*, *Williams v IRC* (via CTM36810) **[E]/[ref]**; *Spring Capital* (Ross Martin; Tax Journal) **[2nd]**.
- **Other.** BDO "Back to basics: statutory demergers" (2021); ICAEW Taxline; Price Bailey; CMS; Tax Journal practice guide; AccountingWEB; Ross Martin; Taxation 2001 **[2nd]**.

## Chapter 20: Buying and selling companies

- **Statute.** FA 1986 s 79 **[E]**; TCGA Sch 7AC paras 7, 8, 15A, 19, 26; s 179(3A)–(3H); s 31; s 176; s 190; CTA 2010 Part 22 Ch 1 / s 948; FA 2003 Sch 7 paras 1–3; CTA 2009 s 1288, s 1219; TIOPA ss 166, 172 **[LS]**.
- **HMRC.** STSM021100, STSM021120, STSM021230, STSM041050, STSM041060, STSM041070, BIM42955, BIM38380, BIM38390, CTM80165, CTM80205, CTM80206, CTM80625, CG14805, CG14815, CG14825, CG13010, CG53008 **[E]**.
- **Cases.** *M Group Holdings* [2023] UKUT 213 (TCC) (Find Case Law; GOV.UK decision page; Simmons & Simmons; ICAEW; RPC; Buzzacott; Weil) **[E]**; *Underground Electric Railways* (via STSM021120) **[ref]**; *Godden v Wilson's Stores* (via BIM42955; not cited) **[ref]**.
- **Other.** Burges Salmon; Pinsent Masons (contingency principle) **[2nd]**.

## Chapter 21: Stamp taxes for groups

- **Statute.** SI 2003/2816 explanatory note (SDLT implementation 1 December 2003) **[E]**; FA 2003 Sch 5 (3.5% discount rate) **[E]**; FA 1986 s 79 **[E]**; FA 2008 s 96 (para 4ZA) **[E]**; FA 2003 Sch 7 (2003 version) **[E]**; FA 1930 s 42; FA 1986 ss 75, 77, 77A; FA 2003 ss 53, 57A, Sch 7 paras 1–11; LBT(S)A 2013 Sch 10; CTA 2010 Part 19 **[LS]**.
- **HMRC.** STSM021100, STSM021120, STSM021130, STSM021230, STSM041070, STSM042460, STSM042470, STSM042500, STSM042510, STSM042520–042550, STSM042600, STSM042605, STSM042610, SDLTM23017, SDLTM23030, SDLTM23080, SDLTM23081, SDLTM23084, SDLTM23100 **[E]**; Revenue Scotland LBTT guidance (revenue.scot nodes 1026, 1149) **[E]**.
- **Cases.** *Tower One St George Wharf* [2024] UKUT 373 (TCC); [2025] EWCA Civ 1588 (Find Case Law listing **[E]**; KPMG; Simmons & Simmons; Lexis; Ross Martin **[2nd]**); *HC-One No.1 Ltd* [2026] UKFTT 678 (TC) (*Tax Adviser*) **[2nd]**.
- **Other.** Mazars (s 77A); CMS (SDRT listing relief) **[2nd]**.

## Chapter 22: Where a company lives, and how it leaves

- **Statute.** TMA Sch 3ZB para 11 **[E]**; FA 2019 Sch 1 para 67 (s 187B, enacted) and Sch 8 (enacted) **[E]**; FA 2013 Sch 49 para 2 **[E]**; TMA s 109E (point-in-time versions, review E) **[E]**; CTA 2009 ss 10(1)(g), 14, 18, 41, 162; TCGA ss 185, 187, 187B; TMA ss 109B–109F; Sch 3ZB **[LS]**.
- **HMRC.** INTM120060, INTM120150, INTM120180, INTM120185, INTM120200 (SP 1/90), OT42550, CTM08450, CG42370, CG13430, CTM34130, CTM34132, CTM34190 **[E]**.
- **Cases.** *Unit Construction v Bullock* [1960] AC 351 (INTM120060; Jersey Law Review, Chadwick) **[E]/[2nd]**; *Wood v Holden* [2006] EWCA Civ 26 (Find Case Law listing and judgment opening; ACCA) **[E]**; *Development Securities* [2020] EWCA Civ 1705 (PwC Jersey; Devereux approved judgment PDF; RPC) **[E]/[2nd]**; *National Grid Indus* C-371/10 (International Tax Review; Hogan Lovells) **[2nd]**; *De Beers*, *Smallwood* **[LS]**.

## Chapter 23: Inbound: non-resident companies, PEs and withholding

- **Statute.** ITA 2007 s 874 **[E]**; s 917A and FA 2016 s 41 **[E]**; s 987 **[E]**; FA 2019 s 21 (review E) **[E]**; CTA 2010 ss 1141–1143, Part 22 Chs 5–7; CTA 2009 ss 5, 19–21; TCGA s 2B, Sch 1A; ITA 2007 ss 878–879, 882, 888A, 903, 906, 911, 930, 933–937; FA 2021 s 34; FA 2026 s 42, Sch 7 **[LS]**.
- **HMRC.** SAIM9075, SAIM9076, INTM630210, INTM450021, INTM261030, INTM264200, INTM414510, INTM412130, CG73930, CG73932, CG73934, CG73936, CG73938, GIM10210, INTM153060, INTM153080 **[E]**; GOV.UK "Income tax: changes to the regulations for the non-residents landlord scheme" **[E]**.
- **Cases.** *HMRC v Lehman Brothers International (Europe)* [2019] UKSC 12 (Supreme Court press summary and judgment PDF; Tax Journal; UKSC blog; PwC) **[E]**; *Goslings and Sharpe v Blake*, *Bebb v Bunny*, *Gateshead Corporation v Lumsden* (via SAIM9075) **[ref]**.
- **Other.** Bond University thesis (UK MLI Art 12 reservation); Rödl; Wolters Kluwer; KPMG Flash News, Deloitte, Chartered Accountants Ireland (BEPS Action 7); Kluwer Tax Blog (2016 discussion draft); Hong Kong DIPN 60; Buzzacott, Ross Martin, Crowe (NRL); lawinsider (DTTP2 drafting) **[2nd]**.

## Chapter 24: Treaties and double tax relief

- **Statute.** TIOPA 2010 s 47 (review E) **[E]**; TIOPA contents (s 6 heading; s 2) **[E]**; TIOPA ss 9, 14, 18(3A), 19, 27, 33, 42, 44, 52, 57(3), 58, 72–78, 81–88, 112, 124–125; MLI (UK–Ireland synthesised text) **[LS]**; F(No.2)A 2023 s 38 **[E]** (not used).
- **HMRC.** CIRD260160, INTM342510, INTM163040, INTM423040, INTM423070, INTM162560, INTM162570, INTM167170, INTM153250, INTM153270 **[E]**.
- **Cases.** *Indofood* [2006] EWCA Civ 158 (Chartered Accountants Ireland digest; The Global Treasurer; Slaughter and May) **[2nd]** (holding **[LS]**); *Bayfine* [2011] EWCA Civ 304 (Find Case Law extract; RPC; Tax Journal; Templetax) **[E]**; *Anson* [2015] UKSC 44 (Burges Salmon; Ross Martin; NatLawReview; Find Case Law listing) **[E]/[2nd]**; *FCE Bank* [2012] EWCA Civ 1290; UT [2011] UKUT 420 (TCC) (Orbitax; Tax Journal; GOV.UK) **[E]/[2nd]**.
- **Other.** Irish statute book (1967 Act schedule reproducing the 14 April 1926 agreement); gov.ie Irish Treaty Series **[E]**; Cambridge / Jogarajan on the 1928 League of Nations models **[2nd]**.

## Chapter 25: Outbound: branch or subsidiary

- **Statute.** CTA 2009 ss 18A (and data version), 18F, 18L, 18M **[E]**; CTA 2009 s 1274 **[E]**; ss 173, 175 **[E]**; SI 2019/689 reg 6 (2020-12-31 version) **[E]**; CTA 2009 Part 9A Ch 3 (exempt classes) **[E]**; CTA 2009 ss 18A–18S, 931A–931S; TCGA ss 140, 140A–140L; CAA s 561; FA 2009 s 37, Sch 17 **[LS]**.
- **HMRC.** INTM281010, INTM281020, INTM281040, INTM282070, INTM284020, INTM284030, INTM284040, INTM285020, INTM285050, INTM286010, INTM286030, INTM286070, INTM286310, INTM287010, INTM653020, INTM653030, INTM654020, INTM255820, BIM42750, CG45713 **[E]**; HMRC technical note 2012 (branch exemption) **[E]**.
- **Draft legislation.** Foreign branch exemption draft legislation PDF (13 July 2026) **[E]**; policy paper (21 May 2026) **[E]**; KPMG, SWG, Paul Hastings, Haynes Boone / Bloomberg Tax **[2nd]**.

## Chapter 26: Controlled foreign companies

- **Statute.** TIOPA s 371IE (data versions) **[E]**; FA 2012 s 180 notes and Sch 20 paras 49, 50, 58 **[E]**; SI 2012/3024 (made 3 December 2012; Schedule truncated) **[E]**; TIOPA Part 9A (Chs 1–22) **[LS]**; F(No.2)A 2023 s 179 (push-down) **[LS]**.
- **HMRC.** INTM219250, INTM219360, INTM219370, INTM219380, INTM224175, INTM224200, INTM224400, INTM224450, INTM225070, INTM225100, INTM225800, INTM225900, INTM226100, INTM226150, INTM230100, INTM254220, INTM254470, INTM254610, INTM255100, INTM255170, MTT31020, MTT25511, CTM92825, COM95020, CTM92640 **[E]**; GOV.UK "Supplementary pages CT600B" and CT600B 2022 PDF **[E]**.
- **Cases.** *Cadbury Schweppes* C-196/04 (curia press release cp060072en; vLex; tpcases; Cleary Gottlieb) **[E]/[2nd]**; *Vodafone 2* [2009] EWCA Civ 446 (Find Case Law title; Chartered Accountants Ireland; Inner Temple Library; Dorsey; UKSC blog) **[E]/[2nd]**; CFC State aid judgments (ieu-monitoring reproduction of the CJEU press release, 19 September 2024; KPMG; Simmons & Simmons; curia) **[2nd]**.
- **Other.** Oxford CBT blog; oecdpillars (QDMTT) **[2nd]**; Jones Day 2012 **[2nd]**.

## Chapter 27: Transfer pricing and advance pricing agreements

- **Statute.** TIOPA Part 4 Ch 6 (ss 195–196, enacted) **[E]**; SI 2016/237 (reg 2) **[E]**; F(No.2)A 2023 Sch 5 Part 3 (para 3C) (review F) **[E]**; TIOPA Parts 4–5 (ss 146–217, 218–230), ss 148A, 153A–153B, 161, 162A–162B, 164, 164A, 166–168, 174, 220–226; SI 2023/818 **[LS]**.
- **HMRC.** INTM414020, INTM414320, INTM414330, INTM412140, INTM422020, INTM422070, INTM422090, INTM423060, INTM423090, INTM450070, INTM450105, IEIM300200 **[E]**; INTM440071 (LVAS) **[LS]**; GOV.UK CC/FS59 (CbC penalties) **[E]**; GOV.UK "Transfer pricing and diverted profits tax statistics 2024 to 2025" (landing page) **[E]**.
- **Cases.** *DSG Retail* [2009] UKFTT 31 (TC); *Test Claimants in the Thin Cap Group Litigation* (C-524/04; [2011] EWCA Civ 127); *BlackRock* **[LS]**.
- **Other.** tpcases.com / tpguidelines.com (TPG Chs IV, VII, IX reproductions); PwC Malta; International Tax Review; RSM; DLA Piper; Roedl; Steptoe; IAS Plus; Azets; Simmons & Simmons; KPMG; EY; Saffery; Pie; Crowe; Forvis Mazars; CIOT *Tax Adviser*; Tax Journal (SP 1/2018) **[2nd]**.

## Chapter 28: The corporate interest restriction

- **Statute.** TIOPA s 382 **[E]**; Part 10 Ch 10 (s 461) **[E]**; s 375 **[E]**; ss 420–421 cross-heading **[E]**; s 373(3) (LawPlayer copy of Part 10, review F) **[2nd]**/**[E]**; Sch 7A para 8 (extract, review F) **[E]**; TIOPA Part 10 and Sch 7A generally; FA 2026 ss 61–62 **[LS]**; FA 1998 Sch 18 para 74 **[E]** (ch 15).
- **HMRC.** CFM95110, CFM95130, CFM95250, CFM95630, CFM95650, CFM95660, CFM95720, CFM95735, CFM95805, CFM95905, CFM95920, CFM95930, CFM96020, CFM96080, CFM96620, CFM97190, CFM97210, CFM97240, CFM97290, CFM97320, CFM97720, CFM98010, CFM98230, CFM98240, CFM98320, CFM98530, CFM98535, CFM98580, CFM98590, CFM98610, CFM98620, CFM98640, CFM98645, CFM98700, CFM98800, CFM38155 **[E]**; GOV.UK policy paper "Corporate interest restriction: reporting companies" (26 November 2025) **[E]**.
- **Other.** ICAEW "HMRC relaxes its position on the corporate interest restriction" (April 2025); Tax Journal "corporate interest restriction penalties"; CIOT policy page; EY Global Tax News (14 October 2015); Deloitte (6 October 2015); Clifford Chance (BEPS Action 4) **[2nd]**. No CIR case law found.

## Chapter 29: Hybrid mismatches

- **Statute.** CTA 2010 s 1015 **[E]**; CTA 2009 s 475C **[E]**; ITA 2007 s 874 **[E]**; SI 2015/2002 (QPP) **[E]**; TIOPA s 259CA **[E]**; TIOPA s 239 and Part 6 explanatory notes **[E]**; CTA 2009 Part 9A (s 931D(c), s 931B(c)) **[E]**; FA 2018 Sch 7 cross-heading **[E]**; TIOPA Part 6A (FA 2016 Sch 10; FA 2021 Sch 7; FA 2022 s 26); ss 259A–259NF **[LS]**; s 259M and Ch 12A (review F) **[E]**.
- **HMRC.** INTM550080, INTM550085, INTM550086A–E, INTM550560, INTM550570, INTM550660, INTM551170, INTM555240, INTM557050, INTM561210, INTM561500, INTM595510, CTM15515, CFM37830, CFM37840, CFM37850, CFM38165, SAIM9360 **[E]**; HMRC "Hybrid capital instruments" PDF **[E]**; GOV.UK CT600B guidance and 2022 form **[E]**; GOV.UK policy paper on savings rates **[E]**.
- **Other.** OECD BEPS Action 2 Final Report (5 October 2015) **[LS]** (date via s 259KA(7D)); MHA, RSM **[2nd]**.

## Chapter 30: The global minimum and the end of diverted profits tax

- **Statute.** Draft legislation and explanatory notes, unassessed transfer pricing profits (April 2025) **[E]**; FA 2021 s 8 (review F) **[E]**; FA 2015 Part 3 (ss 79, 95, 101–102, 116); FA 2026 s 46, Sch 5; TIOPA ss 217A–217T; F(No.2)A 2023 Parts 3–4 (ss 129, 179, 264; Sch 14, Sch 16, Sch 16A); FA 2026 s 50, Sch 8 **[LS]**.
- **HMRC.** INTM489105, INTM489115, INTM489125, INTM489130, INTM489135, INTM489140, INTM489145, INTM489150, INTM489155, INTM489215, MTT01100, MTT01200, MTT15110, MTT15120, MTT32000, MTT62210 **[E]**; GOV.UK policy paper "Introduction of the side-by-side package and amendments to MTT and DTT" (13 July 2026) **[E]**.
- **Cases.** *Glencore Energy UK Ltd v HMRC* [2017] EWHC 1476 (Admin) (Find Case Law; Devereux; Tax Journal; HSF) **[E]**; [2017] EWHC 1587 (Admin) **[ref]**; [2017] EWCA Civ 1716 (Find Case Law; Pinsent Masons; HSF; Cambridge Law Journal) **[E]**.
- **Other.** AccountingWEB, Morgan Lewis, Pinsent Masons, Kroll (DPT announcement); KPMG UK and US (side-by-side); BDO, Pinsent Masons, Aprio (Model Rules); *Tax Adviser* **[2nd]**.

## Chapter 31: The Ridgeway deal

- **Statute.** CTA 2010 Part 3A cross-heading (s 18F) **[E]**; SI 2012/3024 (made) **[E]**; CTA 2009 ss 827, 829, 830 (review G) **[E]**; F(No.2)A 2023 s 232 (PE definition) **[E]**; draft FB 2026-27 foreign branch exemption PDF and L-Day explanatory note **[E]**; TCGA s 140 **[E]**; all other rules applied from the owning chapters and rulings.
- **HMRC.** CTM03945, CTM92530, COM95001, COM30110, INTM225100, INTM254580, INTM284020, INTM284030, INTM284040, INTM224200, CIRD42050 **[E]**.
- **Other.** Mondaq, Barnes Roffe, Gofile (grace-year example) **[2nd]**; Taxation 2002 "Revenue news" (Ireland and the old excluded territories list) **[2nd]**; KPMG UK draft guidance notes, Forvis Mazars, oecdpillars.com (Model Rules Art 4.3.2) **[2nd]**.

## Chapter 32: The Advanced Technical craft

- **CIOT pages.** tax.org.uk key dates and deadlines; exam entry; CTA exams (RM change; practice test); CTA FAQs (test centre; resources); prospectus and syllabus (2026 only); CTA review (2028 timetable) **[E]**; Candidate Instructions October 2026, past papers, examiners' reports, pass statistics **[LS]** (via exam-intel).
- **Book files.** All Exam lens boxes in chapters P–30 (131 boxes) and the trap atlas.
