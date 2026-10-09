# Notes: Chapter 23, Inbound: non-resident companies, permanent establishments and withholding

**Interpretation and assumptions.** I wrote chapter 23 to plan §5 as an AT-depth inbound chapter. It is built on the FA 2026 rewrite of the PE agent test ("the agent who never signs"), with the three-step routine (domestic test, treaty test, answer). TVS's GY4 UK sales are the spine, Part 22 Chs 5–7 cover collection, ITA 2007 Part 15 withholding uses the group's real payment flows (TFL, BSL, Undertow), and TIL after migration is the inbound landlord case. WebFetch was unavailable; I used all 12 WebSearch calls (standard mode). The script heading uses a comma ("Inbound, non-resident companies...") because the script rules allow only one heading colon.

**Files.** Script `chapters/23-inbound-pe-withholding.txt`: **7,671 words** (`wc -w`; target 7,500 ± 10%), with an opening plus 15 sections. Section lengths run from about 410 to 780 words; "Independent agents" (about 400) and "Domestic law meets the treaty" (about 440) are the shortest. Reading edition `chapters/23-inbound-pe-withholding-reading.md`: **8,208 words**.

---

## Sources by section

**Research files.**
- Law sheet 3: §0 (grid), §2 (s 5, s 19, s 2B; s 1141 current and old; ss 1142, 1143; INTM153060/153080; UK–Ireland MLI no Art 12), §2.2 (ss 20–21; omitted ss 22–23, 25–32), §7 (ITA Part 15: ss 874, 878–879, 882, 888A, 903, 906, 911, 917A existence, 930, 933–937, Treaty Passport, DT Company form, FA 2021 s 34, CT61, dividends), §9 (DPT repeal and UTPP: signpost only), §12, §13 (*Glencore*), §14 (traps 1–5, 10–12).
- Law sheet 4: §9 (Part 22 Chs 5, 6, 7) and §10 (FA 2026 s 42).
- Law sheet 2: TCGA s 2B rows and Sch 1A (75%; FA 2026 s 40 cells).
- Exam-intel: paper tables (N25 Q2, N24 Q6, M23 Q3, M26 Q5, N23 Q1), traps 19–20 and examiner messages.
- Grid v2: p6 "Company residence and chargeable profits of non-UK resident companies and concept of PE/branch" 1; p6 Part 22 (excluding Chs 3, 8, ss 990–995) 1; p7 "Deduction of income tax" 1; p5 "Non-resident and dual resident companies" 1.
- Chapter 2 (reading edition and notes) for the s 1140A treatment and the draft FB 2026-27 s 1140A amendment. Chapters 11 and 12 for the Calder licence, BSL royalty and TFL notes.
- Ledger §1–§7 and rulings R1–R17 (R10: TIL outside SAO).

**WebSearch calls (12, all standard).**
1. `"Income Tax Act 2007" section 874 duty to deduct yearly interest "basic rate" 2026-27 "savings basic rate" legislation.gov.uk` → https://legislation.gov.uk/ukpga/2007/3/section/874. The extract says the deduction is at the basic rate in force for the tax year of payment, and lists the persons who must deduct. The pre-2027/28 wording is confirmed; 20% is the 2026/27 basic rate (bible §3).
2. `HMRC Savings and Investment Manual SAIM9070 yearly interest "short interest" ...` → https://gov.uk/hmrc-internal-manuals/savings-and-investment-manual/saim9075 and https://gov.uk/hmrc-internal-manuals/savings-and-investment-manual/saim9076. These give: the distinction since 1806; no statutory definition; intention is the key factor; *Goslings and Sharpe v Blake* (CA), *Bebb v Bunny*, *Gateshead Corporation v Lumsden*; rolled-over loans; INTM413210.
3. `Non-Resident Landlord Scheme non-resident companies corporation tax from 6 April 2020 NRL2 ...` → https://www.gov.uk/government/publications/income-tax-changes-to-the-regulations-for-the-non-residents-landlord-scheme/guidance-note ; buzzacott.co.uk ; rossmartin.co.uk ; crowe.com. These show that the scheme continues for companies after 6 April 2020, tax deducted is offset against CT, CIR applies and HMRC registered companies automatically. NRL2 and the approval mechanics were **not** confirmed.
4. `United Kingdom MLI reservation Article 12 dependent agent ...` → https://research.bond.edu.au/en/studentTheses/the-multilateral-convention-to-implement-tax-treaty-related-measu/ (the UK reserved on Art 12), plus Rödl and Wolters Kluwer blogs on how Art 12 works. **Secondary only.**
5. `BEPS Action 7 2015 final report ...` → KPMG Flash News (November 2015), Rödl, Deloitte alert (7 October 2015), Chartered Accountants Ireland. These cover the October 2015 report, commissionaire arrangements, the principal role wording, the narrowed Art 5(6) and the need for additional Art 7 guidance. **Secondary.**
6. `"Income Tax Act 2007" section 917A ...` → https://www.legislation.gov.uk/ukpga/2007/3/section/917A?view=plain ; https://www.legislation.gov.uk/ukpga/2016/24/section/41 ; https://www.gov.uk/hmrc-internal-manuals/international-manual/intm630210. These cover the connected payee (participation condition), DTA tax avoidance arrangements with a main purpose test contrary to object and purpose, full domestic rate, no set-off under CTA 2010 ss 967–968, payments from 17 March 2016, and the override of TIOPA s 6. **V-statute.**
7. `"Income Tax Act 2007" section 987 "quoted Eurobond" ...` → https://legislation.gov.uk/ukpga/2007/3/section/987. Definition: issued by a company; listed on a recognised stock exchange or admitted to trading on an MTF operated by a regulated recognised stock exchange (FA 2018; "regulated" from 31 December 2020); carries a right to interest. **V-statute.**
8. `TCGA 1992 Schedule 1A "substantial indirect interest" 25% ...` → https://www.gov.uk/hmrc-internal-manuals/capital-gains-manual/cg73936 ; https://gov.uk/hmrc-internal-manuals/capital-gains-manual/cg73934 ; https://www.gov.uk/hmrc-internal-manuals/capital-gains-manual/cg73938 ; CG73930/73932. These give 75% of gross asset value; 25% at some time in the 2 years before disposal; connected persons attributed (para 10); a trading exemption (para 4). **V-HMRC.**
9. `HMRC International Manual authorised OECD approach attribution ... dependent agent PE arm's length fee` → https://gov.uk/hmrc-internal-manuals/general-insurance-manual/gim10210 ; https://www.gov.uk/hmrc-internal-manuals/international-manual/intm450021 ; INTM267040/267050 (titles only); https://kluwertaxblog.com/2016/07/21/oecd-discussion-draft-on-permanent-establishment-profit-attribution-back-to-the-future/ ; Hong Kong DIPN 60. These give the AOA two steps (V-HMRC via GIM10210) and the dependent agent PE attribution debate (**secondary**).
10. `Finance Act 2026 Schedule 7 permanent establishment new claim relief "transfer pricing" adjustment ...` → https://www.gov.uk/hmrc-internal-manuals/international-manual/intm414510 (compensating adjustments and PEs; placeholder) and INTM412130. The statutory section was **not located** (bible flag 41 still open).
11. `"section 1140A" Corporation Tax Act 2010 ... "from time to time"` → https://gov.uk/hmrc-internal-manuals/international-manual/intm261030 (PE definition and attribution updated for chargeable periods beginning on or after 1 January 2026) and https://gov.uk/hmrc-internal-manuals/international-manual/intm264200 (domestic law and treaty law). The April 2025 draft legislation PDF cross-referred to the 21 November 2017 Model. Whether s 1140A is dynamic is **not resolved**.
12. `"[2019] UKSC 12" Lehman Brothers International (Europe) statutory interest "yearly interest" ...` → https://mta-sts.supremecourt.uk/cases/docs/uksc-2018-0013-press-summary.pdf ; https://mta-sts.supremecourt.uk/cases/docs/uksc-2018-0013-judgment.pdf ; taxjournal.com ; ukscblog.com ; pwc.co.uk update (15 March 2019). These give: unanimous; appeal dismissed; statutory interest is yearly interest within s 874; judgment 13 March 2019; on appeal from [2017] EWCA Civ 2124; surplus around £7bn (secondary).

**By section.**
- Opening: LS3 §2.1 (s 1141 old and new wording, FA 2026 Sch 7).
- What the UK taxes: LS3 §2; LS2 s 2B rows; search 8.
- Fixed place: LS3 §2.1; INTM153060; exam-intel (M26 Q5; N25 Q2).
- Agent: LS3 §2.1; searches 5 and 11; ch 2.
- Independent agents: LS3 §2.1. The "usual factors" are general (OECD Commentary not opened) and are labelled as the usual factors.
- Preparatory and anti-fragmentation: LS3 §2.1; exam-intel N25 Q2.
- Treaty: LS3 §2.1 (INTM153060/153080; UK–Ireland); search 4; exam-intel N23 Q1.
- TVS story: ledger GY4.
- Attribution: LS3 §2.2; search 9.
- Part 22: LS4 §9; LS5/bible (TMA ss 109B–109F contrast).
- Withholding: LS3 §7; searches 1, 2, 12.
- Exits: LS3 §7; searches 7 and 1.
- Royalties: LS3 §7; search 6; LS4 §10 (FA 2026 s 42).
- Landlord: LS3 §2; search 3; ledger GY4 (TIL).

**Python.** `scratchpad/lcg-ch23/calc.py` covers:
- BSL royalty: £10,000 at 20%; £2,500 at 5%; net £47,500; exposure £7,500.
- Undertow: £5.6m coupon; £1.12m at 20%; £1.232m at 22%.
- TFL notes: £30.25m interest; counterfactual £6.05m withheld at 20%.
- UK loans: £430m giving £25.8m of interest.
- Hypothetical PE: £800,000 attributed, CT £200,000.
- TIL illustration: rent £200,000, NRL £40,000; profit £180,000, CT £45,000; payable £5,000.

The script `calc.py` used rent less expenses at one stage; the text uses the simpler basic rate on gross rent (£40,000). I re-checked that this matches the reading edition. `ledger-check.py`: 132 checks, 0 failures; no canonical number was changed.

---

## Fact-check flags

1. **Withholding rate 2026/27 (bible flag 43): resolved in substance.** The s 874 extract (search 1) shows deduction "at the basic rate" for the tax year of payment. The basic rate for 2026/27 is 20% (bible §3). The 22% from 2027/28 was verified earlier (LS3).
2. **UK and MLI Article 12.** The UK–Ireland position is V (synthesised text, LS3). The statement that the UK reserved on the whole of Art 12 is **secondary** (a Bond University thesis). The text attributes it to "commentators report". Check the UK MLI position list before publication.
3. **BEPS Action 7** (October 2015; commissionaire target; principal role wording) is **secondary** (firm summaries). The OECD report was not opened. The text labels it.
4. **No domestic time limit for building sites.** This is the book's reading of s 1141(2) as summarised in LS3, which lists the site with no duration. The text says "a question of degree".
5. **Non-resident landlord scheme.** That it continues for companies after 2020, with deductions credited against CT, rests on the GOV.UK guidance note title plus professional summaries. **NRL2 and the approval process are not verified**, so the text says only that "HMRC has approved the landlord to receive the rent gross". The deduction base is simplified to basic rate on the rent (the regulations' net-of-expenses rules for agents were not checked). This is awareness-level material and outside the strict grid row.
6. **Bible flag 41** (relief claim where a foreign TP adjustment relates to a UK PE): **still open**. The reading edition mentions INTM414510 with "statutory route not located". The script is silent.
7. **s 1140A dynamic reference** (open from chapter 2): **still open**. The reading edition says "not confirmed". The script names only the 18 November 2025 version.
8. **AOA two steps:** V-HMRC (GIM10210), labelled "as HMRC's manuals describe it". **Dependent agent PE attribution debate:** secondary (Kluwer blog on the OECD 2016 discussion draft), labelled "commentators report".
9. **Lehman:** the holding, unanimity, citation and date are V. "Administration began in 2008" is general knowledge, and the reading edition says only "(which began in 2008)". The £7bn surplus is **secondary** ("reported at around £7bn"); the script says "several billion pounds". No judicial words are quoted.
10. **Yearly interest cases** are named only as HMRC summarises them in SAIM9075. No citations or dates were verified, and none are given.
11. **s 5 head (a) date.** "5 July 2016 (with CTA 2010 Part 8ZB)" comes from the plan timeline (V). The s 5(2) paragraph lettering was deliberately left out.
12. **CTA 2010 s 971** exceptions were not read; the text says "limited exceptions". The s 978 time limits are not stated. "Any excess is repaid" under s 967 is not stated (removed: not verified).
13. **s 1141(2) list** is paraphrased from LS3 ("installation for exploring natural resources; mine, well or quarry"), not the exact statutory text.
14. **s 888A QPP conditions** (in regulations) are not detailed, deliberately.
15. **The "usual factors" for agent independence** (legal and economic independence, risk, number of principals, instructions) come from general knowledge of the OECD Commentary (not opened) and are labelled "usual factors".
16. **The investment manager exemption changes** (FA 2026 Sch 7 paras 15–18) are in the plan's coverage list but **omitted** as peripheral to LCG and the story. A later reviewer may want one line.
17. **Grid:** grades are from the 2026 grid. Check the 2027 grid when published.

**Bible §5.2 flags touched:** 36 (OECD texts not opened: carried forward, stated in references); 41 (open, above); 42 (MLI generalisation: Art 12 generalisation now secondary-supported; still flagged); 43 (resolved, above); 44 (not touched); 49 (not touched: UTPP in chapter 30).

---

## Contradictions with plan, bible or ledger

- None with the ledger or rulings. The TVS GY4 analysis (domestic PE under s 1141(1)(b); no treaty PE under the older Art 5(5); buy-sell from GY5), the BSL royalty (s 906/s 911 at 5%), Undertow withholding (20%; 22% from 2027/28), the TFL notes (quoted Eurobonds) and TIL's post-migration UK property business all follow the ledger.
- **Plan wording "the plan's Art 5 older wording":** the plan quotes "has, and habitually exercises, an authority to conclude contracts in the name of the enterprise" for the invented treaty. The chapter uses exactly that wording, marked as an invented treaty term.
- **Plan item "UK–Ireland has no MLI Art 12, so the domestic test can be wider".** The chapter adds the secondary point that the UK reserved on the whole of Art 12, labelled as such.
- **Script heading:** the plan title's second colon ("Inbound: non-resident...") is rendered with a comma in the script, because of the TTS colon rule. The reading edition keeps the plan title.

---

## Pronunciation guide

| Written | Say it |
|---|---|
| Lehman | LEE-mun |
| Ashlar | ASH-lar |
| commissionaire | kuh-MISH-uh-NAIR |
| Goslings (not used in script) | GOZ-lingz |
| Vallaria / Vallarian | vuh-LAIR-ee-uh / vuh-LAIR-ee-un |
| Marrovia / Marrovian | muh-ROH-vee-uh / muh-ROH-vee-un |
| Tom Hesketh | tom HESS-keth |
| Brackenwell | BRACK-un-well |
| D T T P one | dee tee tee pee one |
| C T sixty one | see tee sixty one |
| eleven forty A | eleven forty AY |
| two C A (subsection) | two see ay |
| nine one seven A | nine one seven AY |
| eighteen oh six | eighteen oh six (the year 1806) |

---

## Bible update

**Cast: real cases and documents.**
- *HMRC v Joint Administrators of Lehman Brothers International (Europe)* [2019] UKSC 12, 13 March 2019 (UKSC, unanimous): statutory interest from an administration surplus is yearly interest within ITA 2007 s 874 (ch 23).
- *Goslings and Sharpe v Blake* (CA), *Bebb v Bunny*, *Gateshead Corporation v Lumsden*: yearly v short interest, as summarised in SAIM9075; reading edition only (ch 23).
- BEPS Action 7 Final Report (October 2015), secondary (ch 23).

**Invented facts fixed.** See "Ledger additions" below.

**Glossary terms explained (ch 23).**
- Permanent establishment (AT depth); fixed place of business; dependent agent; principal role; routinely concluded without material modification.
- Closely related (s 1143(2CA)); independent agent (s 1142(1A)); preparatory or auxiliary; anti-fragmentation.
- Separate and independent enterprise; authorised OECD approach (two steps).
- UK representative; related company (Part 22 Ch 7).
- Yearly interest (v short interest); excepted payment; reasonable belief (s 930; s 911); quoted Eurobond (s 987); qualifying private placement.
- Treaty Passport (DTTP1/DTTP2); DT Company form; CT61.
- Non-resident landlord scheme; UK property rich; substantial indirect interest; DTA tax avoidance arrangements (s 917A).

**Established facts (with source).**
- s 987 quoted Eurobond definition (MTF limb FA 2018; "regulated" from 31 December 2020): legislation.gov.uk.
- s 917A: connected payee; main purpose test; full rate; no s 967/968 set-off; from 17 March 2016: legislation.gov.uk, INTM630210.
- Sch 1A: 75% gross asset value; 25% within 2 years: CG73934/73936.
- Yearly interest since 1806 with no statutory definition: SAIM9075.
- NRL scheme continues for companies after 6 April 2020, with deductions credited against CT: GOV.UK guidance note (title) and secondary sources.

**Debates covered.** L4 (unilateral DPT avoided-PE limb to an in-CT dependent agent test): introduced, with DPT/UTPP signposted to chapter 30. A new strand: dependent agent PE attribution (fee exhausts profit v risk-based attribution), presented as disputed.

**Open threads.**
- Closed: TVS UK PE (GY4) and the switch to buy-sell from GY5.
- Created: TEL as buy-sell distributor from 1 January GY5. The distributor margin is chapter 27's TP question. The GY4 service fee from TVS to TEL has no figure; chapter 27 may fix it.

---

## Ledger additions (for calder-ledger.md §8)

- **GY4, TVS UK sales (Ch 23).** TEL's key-account engineers are based in Leeds. They visit UK water and energy utilities, scope jobs, propose specifications and negotiate prices, then send completed contracts to TVS's office in Vallaria, where they are signed. In the first six months no commercial term is changed. TVS has no UK office, warehouse or staff. TVS pays TEL a **service fee** for the engineers' time; no amount is fixed, and the TP pricing is chapter 27's. Tom Hesketh's memo concludes there is a domestic PE (s 1141(1)(b); TEL is not independent under s 1142(1A)) but no treaty PE under the invented treaty's older Art 5(5). The board switches TEL to **buy-sell distributor from 1 January GY5**.
- **BSL royalty (Ch 23).** £50,000 a year, paid each **31 December**. BSL holds the university's evidence of Vallarian residence. It deducts **£2,500** (5%) under s 911 and pays £47,500. The deduction goes on the CT61 for the quarter to 31 December, due **14 January**. s 917A does not apply because the licensor is unconnected.
- **TIL after migration (Ch 23).** The UK property business is within CT. TIL's (Tom's team's) application for **NRL approval to receive rent gross** is made. No rent figure is fixed.
- **Not story (labelled hypotheticals).** TVS parts store near Leeds (anti-fragmentation); £800,000 attributed PE profit (CT £200,000); TIL rent £200,000, profit £180,000, NRL £40,000, CT £45,000, payable £5,000; counterfactual £6.05m withholding on unlisted TFL notes.
