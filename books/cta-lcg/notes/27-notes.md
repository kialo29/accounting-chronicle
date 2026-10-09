# Notes: Chapter 27, Transfer pricing and advance pricing agreements

**Interpretation and assumptions (one line).** Taught TIOPA 2010 Parts 4–5 from first principles (TKS did not teach TP) at AT depth on FA 2026 law: why (arm's length, Art 9, debate L3), history (2004 extension, *Test Claimants*, Roadmap, s 164A), the s 147 building blocks, participation (incl. FA 2026 ss 148A, 161, 162A, 162B), exemptions (dormant, SME, s 164A), methods, *DSG Retail*, services/stewardship/LVAS, financing (thin cap, guarantees, implicit support), business restructurings (Calder), relief (s 174, ss 195–196, MAP, s 124), APAs, documentation (SI 2023/818, para 3C, CbC, ICTS), exam; every Tarnmoor step in the plan's running-case list used with ledger numbers; CIR, UTPP, hybrids and PE attribution signposted only.

Files: `chapters/27-transfer-pricing.txt` (script, 9,227 words; target 9,000 ±10%), `chapters/27-transfer-pricing-reading.md` (10,588 words). Scratch computations: `/tmp/claude-0/-home-user-accounting-chronicle/7222567c-185b-51e3-b4bc-bb4854026617/scratchpad/lcg-ch27/calc.py`.

---

## Sources by section

**Research files:** law sheet 5 Part B (B1–B8), teaching notes (*DSG Retail*, *Test Claimants*, *BlackRock*, Roadmap quote), worked examples 7–9, traps 9–13 and 17, open points; law sheet 1 (s 845(4ZA) row; *BlackRock*); law sheet 3 §9 (UTPP, signpost only); exam-intel (M23 Q3, N23 Q6, N24 Q5, M25 Q4, M26 Q1, M26 Q5; synthesis; traps); grid v2 (row "Transfer pricing and advance pricing agreements" = 1); bible §3.4, §3.12, §1A (*DSG*, *Test Claimants*, *BlackRock*), §5.2; ledger §1–§8; continuity rulings R1, R3, R4, R10 and open items list.
**Chapters read for recap and consistency:** prologue (BlackRock TP limb; "Chapter 27 returns to it" on the borrower's side), ch 1 (SME note; group definitions), ch 2 (s 164A memo, open questions, 2004 history), ch 3 (Calder enquiry window, 1 June GY5), ch 4 (tax strategy wording), ch 8 (Calder plant to TVS), ch 11 (Calder sale £6.0m, CT £1.5m, s 845(4ZA), Patent Box figures), ch 12 (TFL loans, *BlackRock*), ch 13 (TPLC recharge, services list, s 105(3A), HMRC 2025 letter campaign).

**WebSearch (12 of 12 used; standard mode):**
1. `TIOPA 2010 section 164A "qualifying UK to UK provision" "same rate" legislation.gov.uk` → https://www.gov.uk/hmrc-internal-manuals/international-manual/intm414320 ; https://www.gov.uk/hmrc-internal-manuals/international-manual/intm414330 (s 164A(2)(a)–(d) criteria, s 164A(5) excluded company; TP notices generally after enquiry). Statute text not returned.
2. `INTM414320 UK-to-UK exemption criteria "rate of corporation tax" ...` → INTM414320; https://www.rsmuk.com/insights/tax-voice/uk-to-uk-transfer-pricing-exemption-what-does-it-mean-for-me (disapplied where "different rates of corporation tax (ie small profits rate v main rate)" or different currencies); INTM450105 (Local File UK-UK). Nothing on nil-profit companies, "throughout", or the banking company definition.
3. `"164A" "UK to UK provision" ... "excluded company" "banking company" ...` → INTM414020, INTM414320, INTM414330, DLA Piper; inconclusive on the rate condition and the banking definition.
4. `... Country-by-Country Reporting) Regulations 2016 regulation 3 "750 million" "previous period" ...` → https://www.legislation.gov.uk/uksi/2016/237/data.html (reg 2 "filing deadline" 12 months after the end of the period; APs from 1 January 2016); secondary summaries (Roedl, Steptoe, IAS Plus) for "previous period". Reg 3 text truncated.
5. `HMRC INTM low value-adding intra-group services simplified approach 5% ...` → PwC Malta, tpcases.com (TPG Ch VII reproductions): 5% on relevant cost, pass-through excluded, not a benchmark outside the definition. Excluded-activity list not returned.
6. `TIOPA 2010 section 195 "balancing payments" ...` → https://legislation.gov.uk/ukpga/2010/8/part/4/chapter/6/enacted/data.htm (s 195 Conditions A–D, s 196 relief up to the available compensating adjustment, not a distribution; enacted text); https://www.gov.uk/hmrc-internal-manuals/international-manual/intm412140 (no obligation to make a balancing payment).
7. `HMRC Statement of Practice 2/2010 advance pricing agreements ...` → https://gov.uk/hmrc-internal-manuals/international-manual/intm422020 ; https://www.gov.uk/hmrc-internal-manuals/international-manual/intm422070 ; https://www.gov.uk/hmrc-internal-manuals/international-manual/intm422090 (30-month target; bilateral 36+; critical assumptions; annual report); Simmons & Simmons and KPMG on the 2023 guidance (open enquiries generally block an APA).
8. `International Controlled Transactions Schedule regulations 2026 HMRC response ...` → Saffery, Crowe, CIOT (Tax Adviser), Forvis Mazars, Simmons & Simmons, KPMG: consultation 16 June–31 July 2026; intended APs from 1 January 2027; no government response or regulations found; one source expects first reports by 30 September 2028.
9. `OECD Model Tax Convention Article 25 "within three years from the first notification" ...` → tpcases.com / tpguidelines.com (TPG Ch IV reproductions: 3-year period from first notification; Art 9(2) within MAP); https://gov.uk/hmrc-internal-manuals/international-manual/intm423090 (secondary adjustments); INTM423060; Tax Journal on SP 1/2018.
10. `HMRC INTM business restructuring transfer pricing "realistically available" ...` → tpcases.com / tpguidelines.com (TPG Ch IX paras 9.29–9.30 reproductions; options realistically available; transfer of something of value compensated); International Tax Review (loss of profit potential alone not compensated).
11. `HMRC country-by-country reporting UK penalties £300 ...` → https://www.gov.uk/government/publications/compliance-checks-country-by-country-reporting-penalties-ccfs59/compliance-checks-country-by-country-reporting-penalties-ccfs59 (obligations penalised); IEIM300200; Azets (£300, £60 a day, up to £3,000: secondary).
12. `HMRC transfer pricing statistics 2024 to 2025 ...` → https://www.gov.uk/government/publications/transfer-pricing-and-diverted-profits-tax-statistics-2024-to-2025 (landing page only); KPMG, EY, Saffery, Simmons & Simmons, Pie summaries: TP yield £3,387m (2023-24 £1,786m); 143 settlements; average 41 months; MAP 115 concluded, 24.8 months; APAs average 44 months.

---

## Fact-check flags

1. **s 164A "same rate" condition for TPLC (nil taxable profits): UNVERIFIED (search returned nothing conclusive).** Statute text not seen; INTM414320 extract gives only "criteria at s 164A(2)(a)–(d)"; RSM gives SPR v main rate as the example. Taught as "not settled in the material checked"; Tom relies on s 164A with arm's length evidence as a fallback. Bible flag carried from ch 2 (item 9 in rulings' open list): **still open**.
2. **"Banking company" definition (TFL): UNVERIFIED.** Kept as a labelled story assumption (no deposits, no banking business). **Still open.**
3. **TIL and s 164A in the migration period (TPLC's GY4 straddles 30 June GY4): book's reading.** Text treats the exemption as ceasing when TIL ceases to be UK resident, so TP applies from 1 July GY4 (consistent with the ledger's £0.6m for July–December). Whether s 164A requires residence "throughout" a chargeable period was not found. If it does, TPLC's whole GY4 would be outside s 164A (a further £0.6m for January–June, though TIL, then UK resident, could claim s 174). **Open; for reviewers and ch 22.**
4. **CbC measurement period** (ch 1 open item): secondary sources say €750m in the **previous** period; reg 3 text truncated. Labelled "as the regulations are usually summarised". **Partly resolved (secondary).** Filing deadline 12 months: V (reg 2 extract).
5. **CbC penalties** (£300; £60 a day; up to £3,000): **secondary** (Azets); labelled "as advisers summarise them".
6. **Stewardship not chargeable / LVAS excluded activities:** TPG Ch VII not opened; stewardship taught as the Guidelines' position as applied in N23 Q6 marking (bible flag on stewardship: **still U**, labelled). Raw-materials exclusion **not asserted**; the story frames TPLC's purchasing as indirect supplies so it fits HMRC's LVAS definition (INTM440071) on any reading.
7. **MAP 3-year limit:** from TPG Ch IV reproductions (Art 25 text not opened); labelled "under the Model's wording". The UK–Vallaria treaty is invented and follows the Model (ledger §2).
8. **Business restructurings (TPG Ch IX):** secondary reproductions; labelled "as commentators reproduce it".
9. **HMRC TP statistics** (£3,387m yield; 41 months; MAP 24.8 months; APA 44 months): secondary summaries of the March 2026 release; labelled "advisers summarising".
10. **APA practice** (30 months / 36+): INTM422090 extract (V-HMRC). "Open enquiry generally blocks an APA": secondary (Simmons & Simmons); labelled.
11. **ICTS:** consultation dates and intended start V (law sheet 5, consultations); no regulations or government response found (search 8); "first reports by 30 September 2028" single secondary source, reading edition only, labelled.
12. **s 195–196** read from the **enacted** text (later amendments not checked); FA 2026 Sch 6 amended guarantor claims (ss 191–194) but s 195 Condition B is assumed unchanged.
13. **APA section allocation:** ss 220–226 cited as a block (effect, ending, void, past periods); individual subsection allocation not verified.
14. ***Lankhorst-Hohorst*** link to the 2004 extension: kept as "the common account, not something the statute says" (as ch 2); case number not given.
15. ***Test Claimants*:** only what law sheet 5 records (ECJ 13 March 2007, restriction where targeted at intra-group lending; CA [2011] EWCA Civ 127). The text says the CA "gave its own decision in the litigation in 2011" without stating its holding.
16. **Interest on Calder's £500,000:** regime described (from the instalment dates); no figure and no rate given (bible's QIP 6.25% figure looked inconsistent with Bank Rate + 1% at 3.75%: **reviewers please check bible §3.3 QIP interest rate**).
17. **CIR ripple of the settlement (not story; for continuity):** the £2.0m TP adjustment is taxable profit of Calder's 9-month AP to 31 December GY3 and, on R4's reading of s 408, part of tax-EBITDA. If chapter 28's GY3 figures were revised: aggregate £89.7m; 30% £26.91m; reactivation £2.56m; disallowances c/f £1.95m (ledger: £87.7m / £26.31m / £1.96m / £2.55m). The chapter only flags "whether and how the GY3 interest restriction return is revisited is chapter 28's subject". **Continuity editor to decide** (suggest: ch 28 keeps GY3 as filed and adds one sentence that a revised return may be needed after the GY6 settlement, subject to time limits not researched).
18. **SME exemption references:** s 167 (election; non-qualifying territory) cited without subsection numbers; s 172 and Recommendation 2003/361/EC as law sheet (statute V; thresholds via HMRC manual and tax tables).
19. **Bible §5.2 flags touched:** 36 (OECD texts not opened: carried, stated in text); 46 (2004 history: date resolved by ch 2; causal link still labelled); 47 (ICTS: still regs not made; status re-checked, no change); 41 (relief claim for foreign TP adjustment relating to a UK PE: not used, left for ch 23); 37 (Pillar Two "exceeds" v "or more": not touched; CbC uses "at least €750m" per SI 2016/237 reg 3 as law sheet).

## Contradictions

- **None with the ledger.** All story numbers are ledger numbers or derived from them (recharge £2.0m/£1.6m/£2.1m/£500,000/£125,000; TVS loan £120m at 6%; TIL £600,000 and £1.2m; Calder £6.0m/£9.5m/£8.0m/£2.0m/£500,000; royalty £1.2m at 6%; APA from GY6; MAP GY7; €1,357m). `ledger-check.py` re-run: 132 checks, 0 failures (not edited).
- **Plan wording "TPLC self-assesses a £0.5m adjustment (CT £125,000)":** TPLC pays no CT itself; after R3 the £125,000 is collected through TEL's smaller group relief (TEL GY1 CT £2,633,750 v £2,508,750 without the adjustment). Taught that way; consistent with R3.
- **Plan's history line** linked the 2004 extension to *Test Claimants*; the ECJ judgment (2007) post-dates the 2004 extension. Followed chapter 2 (common account: *Lankhorst-Hohorst* 2002), and presented *Test Claimants* as the later litigation of the UK's earlier rules.
- **Exam-intel N24 Q5** paraphrase ("thresholds divided by the 51% group companies") is not used (R1/R17 say associated companies).

## Pronunciation guide

| Written | Say it |
|---|---|
| Lankhorst-Hohorst | LANK-horst HOH-horst |
| DSG (spaced "D S G" in script) | dee ess jee |
| Dixons | DIX-unz |
| Cornhill | KORN-hill |
| John Avery Jones | jon AY-vuh-ree JOHNZ |
| Charles Hellier | charlz HEL-ee-er |
| Isle of Man | ile uv MAN |
| Ashlar | ASH-lar |
| Vallaria / Vallarian | vuh-LAIR-ee-uh / vuh-LAIR-ee-un |
| Tarnmoor | TARN-moor |
| BlackRock HoldCo | BLACK-rock HOLD-koh |
| S M E | ess em ee |
| O E C D | oh ee see dee |
| know-how | NOH-how |
| stewardship | STYOO-urd-ship |

## Bible update

**Cast (real):** *DSG Retail Ltd v HMRC* [2009] UKFTT 31 (TC), Special Commissioners John Avery Jones and Charles Hellier, released 31 March 2009; Dixons; Isle of Man captive Dixons Insurance Services Ltd; Cornhill fronting May 1986–April 1997; CUPs rejected (point of sale advantage); business facilities below arm's length (ICTA s 770, Sch 28AA); profit split / return on capital; quantum adjourned (law sheet 5, V). *Test Claimants in the Thin Cap Group Litigation* (C-524/04, 13 March 2007; [2011] EWCA Civ 127) (V as recorded). *BlackRock* TP limb (as prologue). *Lankhorst-Hohorst* (2002) as common account.
**Invented facts fixed (story):** see Ledger additions.
**Glossary terms explained (ch 27):** arm's length principle; provision; affected persons; participation condition (A financing / B ordinary); potential advantage (Effects A and B); SME exemption (TP); UK-to-UK exemption; TP notice (s 148A, s 164A, s 168); comparable uncontrolled price; resale price method; cost plus; transactional net margin method; profit split (residual); most appropriate method; functional analysis; low value-adding services; stewardship (shareholder) activities; thin capitalisation; guarantee (TP; s 153A, s 153B election); implicit support; compensating adjustment; balancing payment; secondary adjustment; MAP and corresponding adjustment; business restructuring; options realistically available; advance pricing agreement (unilateral, bilateral); Master File; Local File; presumed carelessness (para 3C); country-by-country report; International Controlled Transactions Schedule.
**Established facts fixed (with source):** s 195 Conditions A–D and s 196 relief (enacted text, search 6); INTM412140 no obligation to make balancing payments; INTM422070/422090 APA practice (30 months; bilateral 36+); CbC filing deadline 12 months (SI 2016/237 reg 2); HMRC TP statistics 2024-25 (secondary).
**Debates:** L3 (arm's length principle) introduced with both sides (separate-entity fiction v the only bilateral test; formulary apportionment needs global agreement); no verdict. L10 (transparency: CbC, ICTS) touched.
**Open threads:** closed: "Calder's TP dispute: MAP corresponding adjustment in Vallaria (GY7)". Created/left open: s 164A rate condition for nil-profit companies; banking company definition; s 164A in a migration period; CIR ripple of the settlement (flag 17).

## Ledger additions (new story facts fixed by this chapter)

- **GY1:** TPLC's £1.6m charge to TVS was "carried over from an old budget"; TPLC's purchasing for TVS is of **indirect supplies only** (software licences, travel, insurance), not raw materials; engineering standards = common manuals and audits. Classified LVAS. The £125,000 is collected through TEL: TEL GY1 CT £2,633,750 with the adjustment v £2,508,750 without (derived from R3).
- **GY1 onward:** Tom relies on s 164A for TFL → TPLC but holds arm's length evidence for 6% (the market evidence used for the TVS loan). TFL → TVS 6% tested against comparable bond yields of similarly rated industrial borrowers, allowing for TVS's stand-alone credit standing and implicit support; no guarantee; within range.
- **GY4 onward:** TIL loan adjustment taxed through TPLC's smaller NTLR deficit surrendered to TEL: tax effect **£150,000** (GY4) and **£300,000** a year (GY5 onward). TIL's £20m funded its Irish distribution business (story assumption; so no s 174 claim by TIL after migration).
- **Calder enquiry:** HMRC's £9.5m = adjustment **£3.5m** (CT £875,000) argued on (1) renewals ignored in the valuation and (2) Calder's realistic option to continue. Functional analysis interviews in **GY5** (Dan among the engineers, two years after his redundancy; agreed to come back for an afternoon); findings as in the reading edition's worked example 27.8; Dan's (invented) line "the drawings tell you what to make, not how to make it run". Settlement **£8.0m in GY6**; interest from Calder's 9-month AP instalment dates (14 June, 14 September, 14 December GY3) (amount not fixed); **no balancing payment** by TVS; TVS sought relief from the Vallarian competent authority; **GY7** corresponding adjustment treating TVS as having paid £8.0m.
- **APA:** bilateral application prepared by Tom's team after the royalty began (GY4); could not finish while the enquiry was open; agreed after the GY6 settlement; covers the royalty **from GY6** (term not fixed). Calder still documents the royalty in its Local File.
- **Documentation:** TPLC files the CbC report within 12 months of each 31 December; Master File prepared centrally; Local Files for cross-border dealings (TPLC: TVS services, TIL loan from GY4; TFL: TVS loan; Calder: TVS sale and royalty).
- **Not story (labelled hypotheticals):** Calder valve at £900 v £1,000 (CUP illustration); 220 staff / €60m / €40m SME example; resale £1,000 / 25%; cost plus £400 / 20%; TNMM £10m / £1.5m / 3%; residual split £10m; inbound £100m at 9% / £60m at 7% (TP £4.8m; CIR £0.6m).

## Continuity fixes applied (R18–R29; reviewer F, stage 0)

- **R20 (GY3 CIR revised return):** reading edition, "Going further: the restructuring ripple", CIR bullet now says the reporting company must file a revised GY3 interest restriction return within three months of the settlement (reactivation £1.87m → £2.47m; TEL's group relief claim for the extra deficit out of time). Script: one sentence added after the settlement paragraph ("The settlement also reopened the group's interest restriction return for Group Year Three, as chapter twenty eight explains."). **Flag 17 resolved by R20** (figures 89.7 / 26.91 / 2.47 / 2.04, not 2.56 / 1.95).
- **R26 (interest):** reading edition, "Interest runs on the £500,000": now "until the normal due date, 1 October GY4, and then late payment interest until paid". Script: "at the instalment rate until the normal due date and at the late payment rate after that". **Flag 16 withdrawn:** 6.25% = Bank Rate 3.75% + 2.5% (R26).
- **R29 (s 164A and TIL; TPLC GY1 adjustment):** text already consistent (s 164A ceases at migration; £0.6m / £1.2m; £125,000 through TEL's smaller group relief). Flag 3 remains open as R29 records (book's reading).
- Contradictions: resolved by continuity rulings R20, R26 and R29.
