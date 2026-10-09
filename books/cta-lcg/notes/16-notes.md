# Notes: Chapter 16, Company gains: property and leases

**Interpretation.** Single-company property gains at AT depth (framework, disposals, deductions, indexation, part disposals, wasting assets and plant, s 48/s 280, leases and premiums, company property income, roll-over and holdover, s 161, Part 8ZB), with the Tarnmoor TES events of GY3–GY4; group mechanics (s 171, s 171A, s 175 conditions) left to chapter 17 and signposted. Law FY2026; story in Group Years only.

**Files.** Script `chapters/16-company-gains-property-leases.txt` (7,867 words; target 8,000). Reading edition `chapters/16-company-gains-property-leases-reading.md` (8,363 words). Computations: scratch `lcg-ch16/calc.py`, `calc2.py` (session scratchpad). `ledger-check.py` re-run: 132 checks, 0 failures (no canonical number edited; see the contradiction below).

---

## Sources by section

Research files: law sheet 2 §§1, 6, 8, 13, 16–19 (V items restated without new search: s 2B and FA 2026 Sch 7 para 28; Sch 1A and FA 2026 s 40; s 2A/s 16(2A) via CG40200; Part 7ZA; s 53(1B)/(2A); s 42; Sch 8 paras 1 and 5; s 48 and CG14930; s 280 and CG14910; CG34 and SAV guidance; s 155; s 156ZB; s 152(3); s 161; s 173; s 175(2B)); law sheet 4 §7 (Part 8ZB: ss 356OA–356OL, FA 2016 ss 77, 81; s 5B CTA 2009; V); exam-intel §3 (M23 Q4, N24 Q1, N25 Q5, M26 Q3, M26 Q4) and traps 1–5; grid v2 extract lines 138–252 (grades); bible §3.6 (0.489 factor, lease table points, roll-over window, Part 8ZB date); continuity rulings R3, R5, R9, R11, R16; chapters 3, 9, 13, 14 reading editions (TES refund surrender £569,375; distribution centre split and SBA; TES's s 463B claim; capital losses and Part 7ZA).

WebSearch (standard mode), 9 calls:
1. "HMRC capital gains manual grant of short lease out of freehold premium part disposal fraction amount charged as income excluded A/(A+B)": **CG70960** https://www.gov.uk/hmrc-internal-manuals/capital-gains-manual/cg70960 (numerator = premium not chargeable as property income; denominator = full premium + value retained; worked example £450,000 × 315,000/(350,000 + 500,000) = £166,765); also CG70950, CG71370.
2. "TCGA 1992 section 154 depreciating asset held over gain ten years …": s 154 (enacted text page https://legislation.gov.uk/ukpga/1992/12/section/154/enacted/data.xht), CG60295, CG60285 (three crystallising events; 60-year definition; switch to non-depreciating asset).
3. "reverse premium CTA 2009 section 96 section 250 …": https://legislation.gov.uk/ukpga/2009/4/section/250 ; …/section/96 ; BIM41055 (revenue receipt; trade or property business; connected non-arm's-length all at once, s 250(5)).
4. "CTA 2009 section 62 tenants under taxed leases …": https://www.legislation.gov.uk/ukpga/2009/4/part/3/chapter/5/data.htm (ss 62–67: trading tenant's daily deduction over the receipt period).
5. "TCGA 1992 section 45 wasting assets exemption capital allowances … s 262 …": CG15440, CG15445, CG15451, CG76721, CG76900 (s 44(1)(c); s 45 exemption lost if CAs; s 47; s 41; s 262 may still apply).
6. "HMRC capital gains manual leases wasting asset indexation … restricted expenditure": CG17380 (indexation on expenditure after wasting restriction), CG71140, CG71141 (P1/P3 formula; separate enhancement computation).
7. "HMRC CG manual long lease more than 50 years at acquisition becomes short lease …": CG71141 extract (short-lease rules apply even if the lease was long at acquisition). **The P1 value for a lease longer than 50 years at acquisition was not confirmed**: not stated in the chapter.
8. "TCGA 1992 section 38(1)(b) enhancement … reflected in the state or nature …": secondary extracts (taxationweb, fiscari) consistent with the statutory wording quoted; statute text not seen directly.
9. "TCGA 1992 section 18 … section 19 series of transactions …": CG14561 (clogged losses), CG14570, CG14650, CG14700–CG14702, CG14740; s 19 text https://www.legislation.gov.uk/ukpga/1992/12/section/19 (6-year linked period; appropriate portion of aggregate market value; s 19(4) re-run).

---

## Fact-check flags

1. **Adopted by continuity ruling R19** (gain £189,000; TES GY3 net gains £489,000; ledger and chapters 17 and 28 aligned). **CONTRADICTION (canonical number changed): TES's GY3 lease assignment needs indexation.** The ledger (GY3) and R5 give a gain of £351,200 (£1.0m − £800,000 × 81.100/100) with no indexation. But a lease bought with exactly 50 years unexpired and assigned with 25 years unexpired was held for 25 years, so it was bought 25 years before GY3. GY3 is after 1 April 2027 at the earliest and, on the TKS facts (Dan at Calder in 2026/27; redundancy at 12 years' service on 30 September GY3), no later than about 2038; so the lease was bought by about 2013 at the latest, before December 2017, and **indexation must apply** (on the restricted cost: CG17380). Because no Group Year can be dated, the chapter **assumes an indexation factor of 0.250** (labelled in both editions as "a round figure chosen for the story"; in the exam compute from RPI): indexation £162,200; **gain £189,000**. Consequences for other files (fix needed, continuity pass):
   - Ledger §7 GY3 "TES lease assignment … gain £351,200" → add indexation (assumed factor 0.250) £162,200; gain **£189,000**.
   - R5 / ledger GY3 CIR line: TES net gains GY3 £300,000 + £189,000 = **£489,000** (was £651,200); to keep TES's tax-EBITDA at £14.8m, "property and other profits" become **£14,311,000** (was £14,148,800). Aggregate tax-EBITDA, ANTIE, reactivation and every CIR total unchanged.
   - `17-gains-inside-the-group-reading.md` lines ~179 and ~521 (and any script equivalent): £351,200 → £189,000; £651,200 → £489,000.
   - `28-corporate-interest-restriction-reading.md` line ~136 (TES composition 14,148,800 + 651,200 → 14,311,000 + 489,000) and the TES gains paragraph near line ~148 (and script equivalents).
   - `ledger-check.py` lines 65 (`TES GY3 net gains` 0.6512; `TES GY3 split` 14.1488 + 0.6512) and 74 (`assign` 351200) encode the old figures as arithmetic; they still pass, but should be updated to 0.489 / 14.311 and to 1.0e6 − 648,800 − 0.25 × 648,800 = 189,000 (I did not edit the script).
   - Alternative if the editor prefers a real calendar: name a pre-story purchase month and compute the factor from RPI, accepting that this implies GY3's calendar year. I chose the assumed factor to avoid dating the story.
2. **Lease grant part-disposal cost (bible §5.2 flag 27; plan "verify"): RESOLVED, and neither of the plan's two figures is right.** HMRC's guidance (CG70960) uses the capital part of the premium in the numerator and the **full premium plus reversion** in the denominator: cost £1,500,000 × 1,160,000/6,000,000 = **£290,000**; gain **£870,000** (plan's alternatives £500,000 / £337,209 shown in the reading edition "for comparison only (not HMRC's method)"). Taught as HMRC's guidance; the statutory basis in Sch 8 paras 2–5 was not opened. Ledger §7 GY4 "part-disposal cost … verify and record": record **£290,000; gain £870,000**; property income £840,000; CT £427,500 (25% × £1,710,000).
3. Sch 8 para 4 (sub-lease out of a short lease) formula not opened: stated in outline only and labelled in the reading edition.
4. RPI for June 2004 not re-verified; the 0.489 factor is the TKS-verified figure (bible §3.6) and is used as such.
5. s 38(1)(b) wording ("reflected in the state or nature of the asset at the time of the disposal") from consistent secondary extracts; the statute page itself was not seen. Treated as reliable (standard wording); flag for the reviewer.
6. s 17, s 18(2)–(3), s 22, s 24, s 28, s 39, s 286(5)–(6), s 152(1)/(6)–(7), s 153, s 153A, s 210 CTA 2009, CTA 2010 s 62 and FA 1998 Sch 18 para 55: stated from standard knowledge consistent with the law sheets and CG extracts; not separately searched (search budget). Low risk; reviewer may spot-check s 153A (company lapse at 4th anniversary: law sheet 2 R/V) and CTA 2010 s 62.
7. "Freehold is not a depreciating asset": consistent with the CG60285/s 154 extract; one secondary extract suggested a building alone might be, which the chapter does not teach.
8. CG34 "at least 3 months before the filing date": law sheet 2 V (HMRC guidance), taught as HMRC's guidance.
9. s 262 marginal relief (5/3 of the excess over £6,000): standard rule, not searched; CG15440 confirms s 262 can apply to CA plant.
10. Part 8ZB: Budget day 16 March 2016 named as the start of the anti-forestalling period (law sheet 4: FA 2016 s 81(4)–(12), V; Budget date as general knowledge).
11. Exam lens grades from the 2026 grid; **check the 2027 grid** (leases leave the syllabus from 2028 only).
12. Bible §5.2 flags touched: **27 resolved** (CG70960); none other open for this chapter.

## Contradictions

- **Ledger/R5 lease assignment gain £351,200 → £189,000** (flag 1). Affects chapters 17 and 28 as listed.
- **Plan ch 16 brief, item (4):** offered £500,000 or £337,209 as the part-disposal cost; HMRC's method gives **£290,000** (flag 2).
- No contradiction with chapters 3, 9, 13, 14 or 17 on the depot and roll-over (chapter 17 also states TES let the depot to TEL throughout its ownership).

## Pronunciation guide

- Tarnmoor: TARN-moor. Calder: KAWL-der.
- "Part eight Z B": part AYT zed BEE.
- "C G thirty four": see jee THIR-tee for.
- "A over A plus B": ay OH-ver ay plus bee.
- reversion: rih-VER-shun. chattel: CHAT-ul. appropriation: uh-proh-pree-AY-shun.
- "nought point four eight nine": nawt point for ayt nyn.

## Bible update

**Cast.** No new real people. Case signposted: *Marren v Ingles* 54 TC 76 (chapter 18). Real legislative history used: FA 2016 s 77 (Part 8ZB, disposals from 5 July 2016; anti-forestalling from 16 March 2016); FA 2018 indexation freeze (s 53(1B)).

**Invented facts fixed (story).**
- TES's depot sale: contracts exchanged **unconditionally on 30 April GY3** (completion later); TES had let the depot to TEL, used **only for TEL's trade throughout TES's ownership** (consistent with ch 17).
- Roll-over window for the depot: 30 April GY2 to 30 April GY6.
- TES's leasehold office: held **as an investment, not used in any group trade** (no roll-over); assigned in GY3 to an **unconnected buyer**; **assumed indexation factor 0.250**; indexation £162,200; **gain £189,000**.
- TES's GY1 freehold warehouse: **run-down** when bought; local values rose fast; GY4 30-year lease granted to an **unconnected logistics operator** for £2.0m premium plus a yearly rent; income element **£840,000**; cost **£290,000**; gain **£870,000**; cost carried forward with the reversion **£1,210,000**; TES taxable £1,710,000, CT **£427,500**; tenant's deduction £28,000 a year for 30 years.
- No indexation on the warehouse (bought GY1, after 2017).

**Glossary terms explained (term, meaning, chapter 16).** Indexation allowance (frozen at December 2017; cannot create or increase a loss); allowable deductions; enhancement expenditure (reflected in the asset at disposal); part disposal (A/(A+B)); wasting asset; lease (short: ≤ 50 years at the transaction date; long); lease percentage table; premium; income element (P × (50 − Y)/50); assignment; grant; reversion; roll-over relief (company, AT depth); proceeds not reinvested; depreciating asset; holdover; appropriation to stock (s 161 election); transactions in UK land (Part 8ZB, Conditions A–D, pre-intention carve-out); post-transaction valuation check (CG34); clogged loss; series of transactions; reverse premium; taxed receipt (tenant deduction).

**Established facts (with source).** CG70960 part-disposal method for short-lease grants (HMRC); indexation on restricted lease cost (CG17380); short-lease rules apply even if long at acquisition (CG71141); depreciating asset ≤ 60 years, three crystallising events (s 154; CG60295); reverse premiums revenue (CTA 2009 ss 96–98, 250; BIM41055); trading tenant deduction (CTA 2009 ss 62–67); s 45/s 47/s 262 interaction (CG15440–CG15451, CG76721); s 19 6-year linked transactions (CG14650).

**Debates.** None live; the purpose-test thread (Part 8ZB main purpose conditions) noted.

**Open threads.** Created: none. Closed: GY4 lease grant part-disposal treatment (verified).

## Ledger additions (for §8)

- GY3: TES depot contract exchanged unconditionally 30 April GY3; depot let to TEL and used only for its trade throughout TES's ownership.
- GY3: **TES lease assignment: indexation (assumed factor 0.250) £162,200; gain £189,000** (replaces £351,200: flag 1); TES net gains GY3 £489,000; TES "property and other profits" £14,311,000 within unchanged tax-EBITDA £14.8m.
- GY4: TES 30-year grant to an unconnected logistics operator: income £840,000; part-disposal cost £290,000 (CG70960); gain £870,000; reversion base cost £1,210,000; CT £427,500; tenant deduction £28,000 a year.
- Not story (labelled hypotheticals): demolished extension (£3.0m/£0.6m/£5.0m, gain £1.35m); strip of land (£1.2m, £500,000, £1.5m); plant table (£80,000 press, test cell, compressor); roll-over variations (£4.0m, £3.5m); holdover into £6.0m fixed plant; field appropriated to stock (£400,000 → £1.0m).

## Continuity fixes applied (R18–R29; reviewer D, 9 October 2026)

- **R19:** the chapter is the source (gain £189,000 with the labelled assumed indexation factor 0.250; GY4 grant cost £290,000, gain £870,000). Flag 1 marked "adopted by R19". No text change.
- **R29 (TES's depot):** let to TEL and used only for TEL's trade; consistent with chapter 17. No change.
- Other rulings: nothing in this chapter.

## Technical review fixes (review D)

See `review/review-D.md` for sources.

- **MINOR (16.1):** reading, Part 8ZB refinements: "No double charge (s 356OC)" → "(ss 356OB–356OC)". The exact home of the exclusion is still unverified; the pre-intention carve-out (s 356OL) is also unverified.
- Everything else was confirmed: R19 figures, CG70960 grant, roll-over, lease table, s 153A, s 154, s 161, s 280, chattels and Part 8ZB dates. Script unchanged (7,867 words).
