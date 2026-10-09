# Notes: Chapter 22, Where a company lives, and how it leaves

**Interpretation and assumptions.** Opens Part Four; teaches company residence (incorporation, CMC, the board cases, treaty residence, MLI Art 4, s 18, DRIC consequences) at AT depth and migration on the post-1 January 2020 rules, told through TIL's GY4 migration with ledger numbers unchanged; PE/non-resident chargeability (ch 23), treaties (ch 24), branch exemption (ch 25), CFC (ch 26) and TP (ch 27) are signposted only; Irish domestic law is not discussed.

**Files.** Script `chapters/22-residence-and-migration.txt` (8,138 words; target 7,500 ±10%). Reading edition `chapters/22-residence-and-migration-reading.md` (8,027 words). Scratch calculations `scratchpad/lcg-ch22/calc.py` (all story numbers recomputed; `ledger-check.py`: 132 checks, 0 failures; no canonical number changed).

---

## Sources by section

Research files: law sheet 3 §1, §13, §14; law sheet 5 Part D (D1–D4) and teaching notes; law sheet 2 §10; exam-intel (N23 Q1, N24 Q2, N24 Q6, N25 Q3, M26 Q5; traps 13, 18); bible §1 cast, §3 established facts, §4.1, §5.2 flags; continuity rulings R1 (QIP divisor 10 in GY4), R10 (SAO), R16. Chapters read for continuity: 1, 2 (s 164A memo), 3 (AP end; CTM92815 short-AP instalments), 4 (SAO/UTT), 11 (TIL customer list), 12 (Disregard Regulations), 14 (format).

WebSearch (10 of 12 used, standard mode):
1. "CT exit charge payment plan quarterly instalment payments qualifying corporation tax Schedule 3ZB interest CTM34132": https://www.legislation.gov.uk/ukpga/1970/9/schedule/3ZB/paragraph/11/data.html (six equal instalments; first on the day after the 9 months following the migration AP; 5 anniversaries). No source on QIP interaction.
2. "Corporation Tax (Instalment Payments) regulations exit charge payment plan total liability": nothing on QIP interaction (https://legislation.gov.uk/ukpga/2013/29/schedule/49/paragraph/2/data.xht; FA 2019 Sch 8 enacted).
3. TCGA s 187B: https://www.legislation.gov.uk/cy/ukpga/2019/1/schedule/1/paragraph/67/enacted (s 187B as substituted: gain or loss does not accrue on the s 185(2) deemed disposal; accrues on later disposal of whole or part; election out within 2 years, subss (5)–(6)). Enacted text only; current English text not seen.
4. CAA on ceasing to be within charge: https://www.gov.uk/hmrc-internal-manuals/oil-taxation-manual/ot42550 (company ceasing to be within the charge in respect of a trade treated as permanently discontinuing; s 577(2) applies s 61(1)(f)); https://www.gov.uk/hmrc-internal-manuals/company-taxation-manual/ctm08450 (CTA 2009 s 41(2)). Market value for retained plant: forum post only (see flag 4).
5. *Unit Construction*: https://Www.gov.uk/hmrc-internal-manuals/international-manual/intm120060 and Jersey Law Review (Chadwick) https://www.jerseylaw.je/publications/jglr/Pages/JLR0706_Chadwick.aspx (African subsidiaries; articles required local management; parent's London board exercised control; Lord Radcliffe; "actuality").
6. HMRC CMC guidance: https://gov.uk/hmrc-internal-manuals/international-manual/intm120200 (SP 1/90 wording quoted); https://www.gov.uk/hmrc-internal-manuals/international-manual/intm120150 (examples where HMRC would not usually review); INTM120180, INTM120185 (pandemic) via extracts.
7. *Development Securities*: https://www.pwc.com/jg/en/services/tax/updates/court-of-appeal-reverses-tribunal-decision-jersey-spvs-uk-tax-resident.html ; https://www.devereuxchambers.co.uk/assets/docs/news/20201215_A3_2019_1916_Development_Securities_v_HMRC_-_Approved_Judgment.pdf ; https://www.rpclegal.com/thinking/tax-take/development-securities-court-of-appeal-considers-company-tax-residence/ (panel David Richards, Newey, Nugee LJJ; FTT → UT → CA restored FTT; options at overvalue; 2004 scheme).
8. *National Grid Indus* (C-371/10): https://www.internationaltaxreview.com/article/2941182/where-now-for-exit-taxes-after-national-grid-decision ; https://www.hoganlovells.com/~/media/hogan-lovells/pdf/publication/dutch-exit-tax-rules-restrict-freedom-of-establishmentecj-says_pdf.pdf (secondary).
9. *Wood v Holden*: https://caselaw.nationalarchives.gov.uk/ewca/civ/2006/26 (listing: Chadwick LJ, Moore-Bick LJ, Sir Christopher Staughton; 26 January 2006); https://www.accaglobal.com/gb/en/technical-activities/technical-resources-search/2013/january/tc-holden-v-wood.html (Special Commissioners for HMRC; Park J reversed; CA upheld).
10. SSE and s 185: no source on the SSE point; https://www.gov.uk/hmrc-internal-manuals/capital-gains-manual/cg42370 (s 185(2) deemed disposal; s 185(4) UK PE assets); https://www.gov.uk/hmrc-internal-manuals/capital-gains-manual/cg13430 (Sch 3ZB from 11 December 2012); CTM34130.

---

## Fact-check flags

1. **QIPs and Sch 3ZB (UNVERIFIED, two searches returned nothing conclusive).** Whether a very large company's instalment liability for the migration AP includes tax later deferred under a plan. Script says only that TIL "had been paying ... by instalments"; reading edition states the gap openly. TIL's instalment dates (14 March, 14 June GY4) rest on chapter 3's CTM92815 reading.
2. ***National Grid Indus*** date (2011) and holding: secondary sources only; the book does not assert that FA 2013 was enacted *because of* it ("soon afterwards"). ATAD link to FA 2019 Sch 8 from law sheet 5 teaching notes (secondary in substance).
3. **TMA s 109E** three-year time limit: start date not verified; text says "within a three-year time limit". "Controlling director ... of a company controlling it" removed (not verified).
4. **CAA disposal value for plant retained on a deemed discontinuance** = market value: disposal event verified (OT42550: s 577(2), s 61(1)(f)); the s 61 table item giving market value not seen (forum source). Stated without label; reviewer to confirm s 61(2) table item.
5. **CTA 2009 s 162** "open-market" wording: law sheet 5 verifies s 162 governs; the exact subsection wording relied on memory of the provision. Reviewer to confirm.
6. **SSE on a s 185 deemed disposal**: not verified; the text avoids the point (TIL's holding is 8%) and only says the SSE is "the first question" for shares.
7. **TMA Sch 3ZB**: legislation.gov.uk shows unapplied effects (law sheet 5); para numbers as in law sheet 5. Bible flag 26 (balancing charge outside the plan): **resolved** on law sheet 5's verified reading of para 2 (exit charge provisions listed: TCGA s 185; CTA 2009 s 162 via s 41(2)(b), ss 333, 609, 859; CAA not listed).
8. **Post-Brexit eligibility**: CTM34132 (V-HMRC) + book's reasoning that UK-incorporated companies lack Art 49 TFEU rights: labelled "HMRC's view" and "the book's reading".
9. ***Development Securities* lead judgment:** bible §1 says Newey LJ gave the lead judgment; search extract suggests David Richards LJ framed the key question ("by whom and where was the decision taken"). Authorship unconfirmed: the chapter names the panel (reading edition) and attributes nothing to a named judge. The "very considerable reservations" remark is attributed to "one member of the court" (law sheet 3, V).
10. ***Unit Construction*:** law sheet 3 teaching note says "a parent's representative in East Africa effectively ran Kenyan subsidiaries"; INTM/Jersey Law Review extracts say the parent's London board exercised control over "African subsidiaries". Chapter follows the extracts; "Kenya" not stated.
11. ***Smallwood*** facts (Mauritian trustee replaced and UK trustees reappointed within one tax year): law sheet 3 gives the scheme and the "snapshot" holding (V); the trustee sequence is my summary of the scheme as described in the judgment's "Round the World" label: reviewer to confirm against [2010] EWCA Civ 778.
12. **Exam-intel trap 18** says "land acquired after 5 April 2019 automatically postponed". s 187B (enacted text) applies to any interest in UK land deemed disposed of under s 185(2) after its commencement; the chapter teaches the statutory rule and notes the N25 land was acquired after that date.
13. INTM120150 and INTM120185 content from search extracts (V-HMRC extract).
14. Check the 2027 grid when published (migration grade 2 matters for depth; no change expected).
15. Bible §5.2 flags: **26** resolved as above (Sch 3ZB caveat stands); **38** respected (no Irish domestic law or QDMTT); **39** (CFC exempt period for a migrating company) untouched: carried to chapter 26. Continuity rulings open item 9, "s 164A for TIL around migration": **resolved** on chapter 2's conditions (both parties must be UK-resident companies): the exemption ceases at migration; full Part 4 applies (chapter 27).

## Contradictions

- Bible §1 (Newey LJ as lead in *Development Securities*): unconfirmed; see flag 9.
- Law sheet 3 §13 *Unit Construction* summary: see flag 10.
- Plan ch 22 brief "verify that a CAA balancing charge is not qualifying CT": resolved (not qualifying), consistent with the ledger's £25,000 outside the plan.
- No conflict with the ledger's TIL numbers; all reproduced exactly.

## Pronunciation guide

| Written | Say it |
|---|---|
| Eulalia | yoo-LAY-lee-uh |
| Loreburn | LOR-burn |
| Radcliffe | RAD-cliff |
| Chadwick | CHAD-wick |
| Staughton (reading edition only) | STAW-tun |
| Smallwood | SMAWL-wood |
| Mauritius | muh-RISH-us |
| National Grid Indus | NASH-uh-nul grid IN-dus |
| Tarnmoor | TARN-moor |
| Hesketh | HESS-keth |
| Schedule three Z B | SHED-yool three zed bee |

## Bible update

**Cast (real):** Lord Radcliffe (*Unit Construction Co Ltd v Bullock* [1960] AC 351, HL: CMC a matter of "actuality"); panel in *Wood v Holden* [2006] EWCA Civ 26 (Chadwick LJ, Moore-Bick LJ, Sir Christopher Staughton; 26 January 2006; Special Commissioners for HMRC, Park J reversed, CA upheld Park J); panel in *HMRC v Development Securities plc* [2020] EWCA Civ 1705 (David Richards, Newey, Nugee LJJ; FTT → UT reversed → CA restored FTT); *National Grid Indus BV* (C-371/10), CJEU 2011 (secondary).
**Glossary (owned):** central management and control (highest level of control; question of fact; SP 1/90); usurped v influenced board; place of effective management; tie-breaker; competent authority agreement (MLI Art 4); treaty non-residence (s 18); dual resident company; dual resident investing company (consequences); migration; migration time; exit charge (s 185 and parallels: ss 41/162, 333, 609, 859, CAA); s 187B postponement; migration notice (s 109B conditions A–D); CT exit charge payment plan (CT1 − CT2; six instalments); eligible company; relevant state (EU/EEA).
**Established facts fixed:** SP 1/90 is at INTM120200; Sch 3ZB in force from 11 December 2012 (CG13430); s 187B election out within 2 years (s 187B(5)–(6), enacted text); CAA s 577(2) deemed discontinuance (OT42550).
**Debates covered:** board influence v control (*Wood v Holden* v *Development Securities*); EU-shaped exit rules surviving Brexit (UK companies outside the plans).
**Threads:** TIL's plan instalments run to 1 April GY10 (open; optional mention in ch 31/conclusion); the warehouse's postponed £800,000 awaits a sale (open; no sale fixed).

## Ledger additions (new story facts, for §8)

- TIL's board reconstituted with effect from the end of 30 June GY4 (Irish-resident majority; Leeds executives step down; meetings in Dublin); Tom Hesketh's governance protocol ("decisions are made in the room, not before it").
- s 109B notice 1 March GY4 proposed: Sch 3ZB plan for qualifying CT; the rest paid on the ordinary timetable with a **TPLC guarantee**; **HMRC approved in May GY4**.
- TPLC's £20m loan to TIL is **repayable on demand**: fair value = face value; **no s 333 credit or debit**; TIL has **no derivatives**.
- TIL's warehouse net rents for 1 January–30 June GY4 **ignored for simplicity** in the migration computation.
- CT2 split: £300,000 (trading profit) + £25,000 (balancing charge).
- TIL very large in the migration AP: threshold £20m ÷ 10 × 6/12 = **£1,000,000**; instalments **14 March and 14 June GY4** (CTM92815).
- Plan: application deadline **31 March GY5**; instalments of £87,500 on **1 April GY5, GY6, GY7, GY8, GY9, GY10**.
- **No s 187B election** (deadline 30 June GY6).
- From 1 July GY4 a new AP: TIL non-resident, within CT on its UK property business; leaves group relief; stays in the gains group.
- Labelled illustration only (not a story fact): warehouse sold for £4.5m → actual gain £700,000 + postponed £800,000 = £1.5m.
