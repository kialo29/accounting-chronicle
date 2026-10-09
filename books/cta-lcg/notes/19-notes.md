# Chapter 19 notes: Reconstructions, demergers and distributions

**Interpretation and assumptions.** One chapter teaching, at AT depth for FY2026: distributions paid (CTA 2010 Part 23) and received (CTA 2009 Part 9A); winding-up and strike-off distributions (ss 1030–1030B); CTA 2010 Part 22 Chs 1–2 (trade transfers, L − A, s 954); schemes of reconstruction (Sch 5AA, s 136, s 139 and its FA 2026 recast); demergers (ss 1073–1099, TCGA s 192); transactions in securities (Part 15); and the June 2026 consultation (proposals only). Story steps: Tarnwater demerger (1 July GY5), TAL hive-down (1 February GY6), Tarnmoor Pumps strike-off (GY7). The SSE, degrouping, the TAL sale and stamp taxes are signposted to chapters 17, 18, 20, 21.

**Files.** Script `chapters/19-reconstructions-demergers-distributions.txt` (7,393 words; target 7,500). Reading edition `chapters/19-reconstructions-demergers-distributions-reading.md` (about 9,150 words). Scratch computations: session scratchpad `lcg-ch19/calc.py` (all figures re-run; `ledger-check.py` 132 checks, 0 failures; no canonical number changed).

---

## Sources by section

Law sheets used (V items restated without new search): LS2 §4 (Sch 5AA, s 136, s 137/138, s 139 and FA 2026 s 38, s 103K), §9 (s 179, s 192(3)–(4)), §11 (demergers: ss 1074–1078, 1081, 1086, 1088, 1091; s 192; June 2026 consultation incl. Annex E "in the majority of cases, SSE would apply"; "not currently well-used"), §12 (SSE paras 3, 4, 15A, 19), §14.4 (s 948, ss 265–267); LS4 §7 (Part 15: ss 732–739, 743–749, 746(5); cases via CTM36810, S), §8 (ss 1030, 1030A, 1030B), §9 (Part 22 Chs 1, 2), §10 (s 1000, s 1020/1021, s 1027A, Part 9A ss 931A–931S, s 1305 title). Exam intel: M23 Q4, N24 Q3, M24 Q3, M26 Q5, "not seen M23–M26" row; grid v2 rows (company reconstructions 1; demergers 1; companies in liquidation or administration 1; transactions in securities 1; Part 22 1; company distributions 1; distributions received 1; transfers concerning companies of different member States 2).

WebSearch (11 of 12 used; standard mode; one call per numbered item):
1. `CTA 2010 section 945 "relevant liabilities" "relevant assets" ...` → legislation.gov.uk Part 22 Ch 1 enacted text (https://legislation.gov.uk/ukpga/2010/4/part/22/chapter/1/enacted) and Explanatory Notes; CTM06280, CTM06250, CTM06210 (https://www.gov.uk/hmrc-internal-manuals/company-taxation-manual/ctm06280 etc.); Ross Martin and Tax Journal on *Spring Capital* and *Houston Cox* (secondary). Used for: L and A definitions, A includes consideration, relief R − E, HMRC "primary counter to exploitation", three-step layout.
2. `CTA 2010 section 941 "one year" "two years" ...` → https://www.legislation.gov.uk/ukpga/2010/4/section/941 ; Explanatory Notes. Used for: ownership condition (on transfer or within 2 years after; same persons at some time in 1 year before); ss 939, 940, 943.
3. `CTA 2010 section 944 successor ... section 39 CTM06065` → enacted s 944 (s 39 disapplied for the predecessor's loss; successor relief under s 45 subject to s 37 claim and s 945); s 944E exists (https://www.legislation.gov.uk/ukpga/2010/4/section/944E/data.htm); CTM06065 updated June 2020 (Tax Journal manual update). Used for: effects of Part 22 Ch 1.
4. `CTA 2010 section 1082 direct demerger "Condition E" "Condition F" ...` → https://www.legislation.gov.uk/ukpga/2010/4/section/1082 ; BDO "Back to basics: statutory demergers" (2021). Used for: conditions E and F and the two F exceptions (s 1082(3), (4)).
5. `CTA 2010 demerger exempt distribution "within 30 days" return ...` → CTM17260, CTM17270, CTM17290 (https://www.gov.uk/hmrc-internal-manuals/company-taxation-manual/ctm17260 ...); s 1094 (https://www.legislation.gov.uk/ukpga/2010/4/section/1094/2022-11-30/data.html); ICAEW Taxline. Used for: 30-day decision, tribunal within 30 days (s 1094(3)–(5)), no retrospective clearance, s 1092 chargeable payment clearance, 30-day returns.
6. `direct demerger distributing company disposal ... substantial shareholding exemption section 192` → BDO 2021; Price Bailey; CMS; Tax Journal practice guide (secondary). Used for: distributing company disposes at market value; SSE usually exempts; shareholders' single-holding treatment.
7. `HMRC CTM36800 transactions in securities ...` → CTM36805, CTM36810, CTM36835, CTM36840, CTM36841. Used for: Part 15 scope ss 731–751; defence conditions A and B; "payment of a dividend is not a transaction in securities"; clearance before or after.
8. `section 1030A CTA 2010 £25,000 informal strike-off ESC C16 ...` → CTM36220 (https://www.gov.uk/hmrc-internal-manuals/company-taxation-manual/ctm36220); AccountingWEB, Ross Martin (secondary). Used for: 1 March 2012 start; replaces ESC C16; share capital cannot be distributed before strike-off (practitioner point).
9. `UK demerger legislation introduced "Finance Act 1980" ...` → Statement of Practice 13 (1980) on GOV.UK (https://www.gov.uk/government/publications/statement-of-practice-13-1980/statement-of-practice-13-1980); CTM17250; Taxation magazine 2001 (secondary). Used for: 1980 origin (March 1980 Budget); SP 13/1980 still published.
10. `Leekes Ltd v HMRC [2018] EWCA Civ 1185 ...` → Find Case Law (https://caselaw.nationalarchives.gov.uk/ewca/civ/2018/1185); Taxation; Tax Journal; PwC. Used for: 23 May 2018; Henderson LJ (Arden, Sales LJJ); streaming holding; Coles facts.
11. `Progress Property Co Ltd v Moorgarth Group Ltd [2010] UKSC 55 ...` → Find Case Law (https://caselaw.nationalarchives.gov.uk/uksc/2010/55) and press summary; WLR Daily. Used for: Lord Walker; genuine arm's length sale not an unlawful distribution despite undervalue.

---

## Fact-check flags

1. **Distributing company's position on a direct demerger.** The ledger/plan wording "TPLC's disposal of TWS shares is within the SSE in priority to s 192(2)(a)" is slightly off: s 192(2)(a) is a shareholder-level rule (no capital distribution under s 122). TPLC makes a market value disposal under the general rules and the SSE exempts it (secondary sources; HMRC consultation Annex E). The chapter teaches it that way and explains para 4 separately (priority over s 192(2)(a) for a corporate shareholder with a substantial holding in the distributor). Market value via TCGA s 17 is the book's reading (sources say "market value" without a section).
2. **Post-2017 losses on a Part 22 transfer (ss 944A–944E):** existence seen, content **not read**. The chapter says only that further provisions adapt the rules for post-1 April 2017 losses. UNVERIFIED detail.
3. **Conditions G–K and L–M:** taught in outline only; lettering per LS2 (s 1083 G–K; s 1085 L–M); exact wording not seen. Condition A wording after SI 2019/818 ("member State") kept as LS2 states; post-Brexit meaning not examined.
4. **Section numbers for demerger returns** (commonly cited as s 1095 / chargeable payment returns): not confirmed; the chapter cites CTM17260/CTM17290 instead of section numbers.
5. **Non-deductibility of a chargeable payment for the payer:** not verified; removed from the text.
6. **TiS "less bite since 2009" and the worked example 19.6** are the **book's reading** (labelled in both editions). The quasi-preference share premise is illustrative; HMRC guidance on post-2009 CT TiS cases was not found.
7. *Parker*, *Joiner*, *Williams*, *Laird* known only through CTM36810 (S); *Laird* = HL 2003, Lord Millett per LS4. *Spring Capital* (FTT 2019) secondary only; named in the reading edition only, labelled.
8. **1980 origin** of demergers: secondary (Taxation magazine) plus SP 13/1980; the FA 1980 section was not verified (the chapter names no section). The reported Budget date (29 March 1980 in the secondary source) was not used.
9. **s 1030A share capital point** (capital cannot lawfully be returned before dissolution without a reduction; residue *bona vacantia*): practitioner commentary (secondary) consistent with company law; stated briefly.
10. **Part 9A start date** stated as 1 July 2009 (bible timeline V; LS4 had marked the para 31 commencement U).
11. **Strike-off planning alternative** (dividend before strike-off) is hedged: value shifting (TCGA s 31 and its exempt-distribution carve-out) not analysed; chapter 17 owns it.
12. Exam: 2027 grid not published; grades from the 2026 grid (no grade change expected to matter; check when published).
13. Bible §5.2 flags touched: **18** (*IRC v Cleary* not used; TiS cases via CTM only: still open); **30** (intangibles degrouping on an exempt demerger: avoided, TWS has no transferred intangibles: still open); **34** (stamp duty on a demerger distribution: not stated, signposted to chapter 21: still open). Plan items "[verify whether a s 138 clearance is needed for a direct demerger]": a direct demerger is not a s 135/136 exchange, so s 138 is not engaged; the chapter mentions only s 1091 for Tarnwater (book's reading; not separately searched). *Progress Property* holding: **resolved** (search 11).

## Contradictions with plan, bible or ledger

- Ledger GY5 / plan ch 19 brief: "TPLC's disposal within the SSE in priority to s 192(2)(a)": see flag 1. Proposed correction: "TPLC's market value disposal of the TWS shares is exempt under the SSE; s 192(2) gives shareholders reorganisation treatment; para 4 gives the SSE priority over s 192(2)(a) only for a corporate shareholder of the distributor."
- LS4 trap 15 / bible glossary say Part 22 Ch 1 needs "75% common ownership at some point in the year before and within 2 years after": confirmed (s 941), with the refinement that the "after" limb can be met **on** the transfer.
- No conflict with chapters 9, 11, 14 (s 948 at TWDV; s 775 patents; no s 39/s 45F for the predecessor via CTM06065).

## Pronunciation guide

| Written | Say it |
|---|---|
| Tarnwater | TARN-waw-ter |
| Tarnmoor | TARN-moor |
| Brennock | BREN-uck |
| Coldwater | KOHLD-waw-ter |
| Leekes | LEEKS |
| Coles | KOHLZ |
| Moorgarth | MOOR-garth |
| Laird | LAIRD |
| Joiner | JOY-ner |
| Henderson | HEN-der-sun |
| bona vacantia (reading edition only) | BOH-nuh vuh-KAN-tee-uh |
| hive-down | HIVE-down |

## Bible update

**Cast (real cases and people).**
- *Leekes Ltd v HMRC* [2018] EWCA Civ 1185: CA, 23 May 2018; Henderson LJ (Arden and Sales LJJ); Coles's losses on a s 343 succession streamed against the transferred trade's profits only (V, Find Case Law plus secondary). Ch 19 (and TKS 22).
- *Progress Property Co Ltd v Moorgarth Group Ltd* [2010] UKSC 55: Lord Walker; genuine arm's length sale at an undervalue (in hindsight) not an unlawful distribution; substance decides (V via press summary/secondary). Ch 19.
- *IRC v Laird Group plc* [2003] UKHL 54 (Lord Millett); *IRC v Parker* (1966) 43 TC 396; *IRC v Joiner* (1975) 50 TC 499; *Williams v IRC* (1979) 54 TC 257: S via CTM36810. Ch 19.
- *Spring Capital Ltd v HMRC* (FTT 2019): L − A restriction applied; secondary only. Ch 19 (reading edition).
- Statement of Practice 13 (1980) (demerger clearance practice); ESC C16 (replaced 1 March 2012).

**Glossary (terms explained in ch 19).** Distribution (s 1000 categories A–H); special securities; exempt class; s 931R election; informal strike-off (s 1030A); transfer of trade without change of ownership; ownership condition; tax condition; L − A (relevant liabilities) restriction; hive-down (mechanics; ch 20 owns the deal); scheme of reconstruction (Sch 5AA conditions 1–4); s 136; s 139 (and its FA 2026 main purpose test); demerger (direct, indirect, cross-border division); exempt distribution; conditions A–M; chargeable payment; demerger clearance and return; transactions in securities; CT advantage; circumstances C, D, E; relevant company; counteraction notice; capital reduction demerger.

**Established facts fixed (with source).** Part 22 Ch 1 ownership condition timing (s 941, V); s 945 L/A definitions incl. consideration (V, enacted text); s 944(2) disapplies s 39 (V, enacted); s 1082 conditions E, F and exceptions (V); s 1094 30-day decision and tribunal route (V); demerger and chargeable-payment returns within 30 days (V-HMRC, CTM17260/17290); demerger clearance cannot be retrospective (V-HMRC, CTM17270); s 1030A from 1 March 2012 (V-HMRC CTM36220 and secondary).

**Debates covered.** L12 (certainty or fairness: s 139 recast and the 2026 consultation's purpose-test direction); policy debate on demerger design (tight statutory conditions v simpler relief with purpose tests; side doors).

**Open threads.** Created: none. Closed: the TAL hive-down's Part 22 treatment (no losses; plant at TWDV); Tarnmoor Pumps strike-off (GY7) computed.

## Ledger additions (new story facts fixed by chapter 19)

- **Tarnmoor Pumps Ltd (GY7):** reserves **£18,000** in cash (non-interest-bearing); share capital **£100**, subscribed by TPLC after December 2017 (no indexation); pre-dissolution distribution £18,000 (s 1030A); TPLC chargeable gain **£17,900**; CT **£4,475**; no SSE; the £100 share capital not distributed (passes to the Crown on dissolution). Tom Hesketh considered and rejected a pre-strike-off dividend (small amount; s 31 check).
- **Tarnwater demerger (1 July GY5):** routes considered and rejected: indirect demerger; capital reduction demerger. Direct demerger chosen; conditions A–F met as tabled; s 1091 clearance obtained before 1 July GY5; return to HMRC within 30 days. TPLC's shareholders "mostly pension funds and insurers". TWS holds no transferred intangibles. Shareholder base-cost illustration (£500,000; £6.80 / £1.20; £425,000 / £75,000) is **not story** (labelled).
- **TAL hive-down (1 February GY6):** the actuators business is **part** of TEL's trade (ss 951–952); Part 22 Ch 1 applies; no losses pass; decision to sell taken "early in GY6".
- Not story (labelled hypotheticals): category E £10m loan at 12% v 7% (£500,000; £125,000); L − A example (R £4.0m; L £3.0m; assets £1.2m; consideration £0.8m; E £1.0m; relief £3.0m); TiS circumstance D preference-share example.
