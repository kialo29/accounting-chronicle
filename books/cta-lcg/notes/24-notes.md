# Notes: chapter 24, Treaties and double tax relief

**Interpretation and assumptions.** Chapter 24 owns treaty reading (OECD Model articles, MLI, PPT, beneficial ownership, non-discrimination, MAP) and TIOPA 2010 Part 2 credit relief at AT depth; branch exemption and dividend exemption (ch 25), withholding mechanics (ch 23) and TP (ch 27) are signposted only. Built on chapters 1, 2 (treaty route, *Fowler*), 10 and 11 (Ashlar, Patent Box, TVS royalty) and the ledger/rulings; TKS content recapped only as the bible §4.1 records it (TKS ch 26: credit, s 42, s 52, underlying tax basics, expense relief). Files: `chapters/24-treaties-and-dtr.txt` (7,973 words; target 7,500 ± 10%), `chapters/24-treaties-and-dtr-reading.md` (about 7,850 words). Computations: scratch `.../scratchpad/lcg-ch24/calc.py`.

## Sources by section

Research files: law sheet 3 §§0, 3, 4, 5, 5.1, 12, 13, 14 (status V unless noted); exam-intel (N25 Q1, N25 Q2, M25 Q4, N23 Q1, M26 Q5; traps 17, synthesis); grid v2 (rows "Double tax treaties – application of OECD model and supplied extracts" 1; "Double tax relief" 1); bible §§1A, 2, 3.7, 3.10, 4.1, 5.2, 6; ledger §§1–2, GY2–GY7; continuity rulings R1–R17 (none directly affects this chapter); chapters 2 and 11 reading editions.

WebSearch (11 of 12 used; standard mode):
1. `HMRC International Manual double taxation relief royalties trade income credit "particular transaction, arrangement or asset" TIOPA section 44` → **CIRD260160** (https://www.gov.uk/hmrc-internal-manuals/corporate-intangibles-research-and-development-manual/cird260160): ss 44–48 DTR for WHT on patent royalties up to CT on the transaction, arrangement or asset; "The Patent Box deduction will be bought into the DTR calculation and by reducing the CT chargeable may result in a restriction of the DTR available" (HMRC's typo "bought" kept with [*sic*]). INTM342510 (treaty benefit must be claimed).
2. `HMRC manual double taxation relief royalties several licensees treated as single source credit aggregated trade "one source"` → nothing conclusive (DT manual pages; PAYE81045). **N25 "one source" basis UNVERIFIED.**
3. `TIOPA 2010 section 73 unrelieved foreign tax permanent establishment carried forward carried back three years claim` → **INTM163040** (https://www.gov.uk/hmrc-internal-manuals/international-manual/intm163040): carry forward without limit; back to APs beginning in 3 years before; same PE; claim within 4 years (6 years for APs ending on or before 31 March 2010); s 76 separate PEs; software note on order of use (secondary).
4. `"Indofood International Finance" v JP Morgan Chase Bank [2006] EWCA Civ 158 ...` → secondary summaries (charteredaccountants.ie TaxSource digest; theglobaltreasurer.com; Slaughter and May note): Mauritian issuer; Indonesia–Mauritius 10% v 20%; Dutch Newco interposition; not beneficial owner; "administrator of the income"; international fiscal meaning.
5. `"Bayfine UK" v HMRC [2011] EWCA Civ 304 ...` → https://caselaw.nationalarchives.gov.uk/ewca/civ/2011/304 (extract), RPC and Tax Journal summaries: US parent, two UK subsidiaries, forward contracts, disregarded entity, claim £35,888,482, Arden, Pitchford and Tomlinson LJJ reversing Peter Smith J; purposive reading; no unilateral relief.
6. `Anson v HMRC [2015] UKSC 44 ...` → Burges Salmon, Ross Martin, NatLawReview, Find Case Law listing: 1 July 2015; Lord Reed; Delaware LLC; same income; HMRC Brief 15 (2015) fact-specific.
7. `HMRC v FCE Bank plc [2012] EWCA Civ 1290 ...` → Orbitax, Tax Journal briefings, gov.uk UT decision [2011] UKUT 420 (TCC): CA dismissed HMRC's appeal 17 October 2012; pre-2000 rule requiring UK-resident parent; Art 24(5) 1975 UK–US treaty; US parent (the Ford link is not stated in the extracts: **not named**).
8. `TIOPA 2010 section 124 mutual agreement procedure ... INTM423000 MAP three years` → **INTM423040, INTM423070**: s 124(2) effect "notwithstanding anything in any enactment"; s 124(3) forms of relief; s 124(4) consequential claims within 12 months; s 125(3) 6-year domestic limit or longer per treaty; 3 years from TPG summary.
9. `"Taxation (International and Other Provisions) Act 2010" section 6 ...` → legislation.gov.uk contents: s 6 heading "The effect given by section 2 to double taxation arrangements"; s 2 Order in Council wording. **s 6 operative text not seen**: the chapter does not paraphrase it.
10. `first UK double taxation agreement 1926 Irish Free State League of Nations 1928 model convention history` → irishstatutebook.ie (1967 Act schedule reproducing the 14 April 1926 agreement, signed Churchill / de Blaghd; subject to confirmation by both parliaments; aims); gov.ie Irish Treaty Series (1928, 1948 amendments); Cambridge/Jogarajan (1928 models: 27 countries, 22–31 October 1928); a Dublin tax historian's description as "the UK's first international double taxation agreement" (secondary).
11. `TIOPA 2010 section 19 time limit claim credit relief ...` → **INTM162560** (4 years after the AP, or 1 year after the end of the AP in which foreign tax paid, for APs ending on or after 1 April 2010), **INTM162570** (s 79: 6 years from an adjustment), INTM167170; F(No.2)A 2023 s 38 (nominal-rate claims; not used).

(Total WebSearch calls = 11; search 2 was inconclusive.)

## Fact-check flags

1. **N25 Q1 "royalties as one source" — UNVERIFIED statutory basis** (search returned nothing conclusive). Taught as the examiners' approach on those facts, with the s 44 tension stated. Reviewer: check the N25 suggested answer and TIOPA s 44/s 42 reasoning.
2. **MLI Art 16 "3 years from first notification"**: law sheet 3 (UK–Ireland synthesised text, V) gives 3 years; "first notification" wording from a TPG summary (secondary).
3. **Indofood facts** are from secondary summaries (the judgment was verified in law sheet 3 for the holding). The reason the Dutch interposition was proposed (commonly said: termination of the Indonesia–Mauritius treaty) is **not stated** because unverified. No quotation used from the judgment.
4. **FCE Bank**: the US parent's identity is not stated (not in extracts).
5. **1926 agreement**: date, signatories and aims from the Irish statute book reproduction (primary); "first international DTA" attributed to a historian (secondary). Ernest Blythe's title not stated beyond "signed for the Irish side". Churchill described as Chancellor of the Exchequer (general knowledge; he held the office 1924–29).
6. **Art 3(2)** (undefined terms take domestic meaning unless context requires otherwise) taught from the OECD Model's standard wording; not in the law sheet's INTM table (oecd.org blocked). Low risk.
7. **Art 23A/23B "UK treaties give credit"**: INTM153250 (V). The Model's own dividend/interest caps are not stated (unverified).
8. **TIOPA s 9 / s 14 details** (unilateral Rule 1; Rule 6 10% voting control) rely on law sheet headings (V headings only).
9. **ss 84–88 types** described from the law sheet's list of headings; "underlying-tax schemes tested as if UK resident" from law sheet (V). ss 89–95 current status **not checked** (said so).
10. **Patent Box simplification** (whole royalty profit = relevant IP profits) carried from chapter 11 and labelled; the £300,000 attributable costs are a new invented figure.
11. **Expense relief**: s 27 (election that credit is not given) and s 112 (deduction) from law sheet (V via TKS).
12. Bible §5.2 flags touched: **36** (OECD texts not opened: still open; the chapter relies on INTM descriptions); **42** (MLI beyond UK–Ireland unverified; INTM153270 out of date where arbitration applies: carried and stated in text); **44** (ss 89–95 status: still open). Plan "[verify how s 42 and s 357A interact]": **resolved** by CIRD260160 (HMRC's view).

## Contradictions

- None with the ledger or rulings. The plan brief's story lead ("1926 UK–Irish Free State agreement (TKS chapter 26 recap)") is not recorded in the bible as TKS content, so the chapter tells it fresh rather than as a TKS recap (per addendum).
- Plan brief lists "s 42 R × IG source by source ... royalties from several payers as one source (N25 Q1: credits aggregated) [verify the statutory basis]": not verified (flag 1).

## Pronunciation guide

| Written | Say it |
|---|---|
| Indofood | IN-doh-food |
| Bayfine | BAY-fine |
| Anson | AN-sun |
| FCE Bank | eff see ee bank (script spells "F C E") |
| Ernest Blythe | ER-nist BLYTHE |
| Delaware | DEL-uh-wair |
| Mauritius / Mauritian | muh-RISH-us / muh-RISH-un |
| Vallaria / Vallarian | vuh-LAIR-ee-uh / vuh-LAIR-ee-un |
| Marrovia / Marrovian | muh-ROH-vee-uh / muh-ROH-vee-un |
| Ashlar | ASH-lar |
| I G (credit limit) | eye gee |

## Bible update

**Cast (real).** Winston Churchill (Chancellor of the Exchequer; signed the UK–Irish Free State double income tax agreement, 14 April 1926; ch 24). Ernest Blythe / Earnán de Blaghd (signed for the Irish Free State; ch 24). Lord Reed (*Anson*, 1 July 2015; ch 24). Arden, Pitchford, Tomlinson LJJ (*Bayfine*, CA 2011, reversing Peter Smith J; ch 24). *Indofood* [2006] EWCA Civ 158 (Mauritian issuer; Dutch Newco; ch 24). *FCE Bank* [2012] EWCA Civ 1290 (CA dismissed HMRC's appeal 17 October 2012; UT [2011] UKUT 420 (TCC); 1975 UK–US treaty Art 24(5); pre-2000 group relief; ch 24). *Anson* [2015] UKSC 44 (Delaware LLC; ch 24). *Bayfine* [2011] EWCA Civ 304 (claim £35,888,482; ch 24).

**Glossary (owned, ch 24).** Double tax treaty; juridical v economic double taxation; OECD Model articles (1–5, 7, 9–13, 23A/23B, 24, 25); synthesised text; beneficial ownership; principal purpose test; preamble (MLI Art 6); non-discrimination; mutual agreement procedure; arbitration (MLI Part VI); corresponding adjustment (shared with 27); credit relief; unilateral relief; expense relief; minimisation; credit limit (R × IG); source by source; allocation of deductions; unrelieved foreign tax (PE carry forward/back); underlying tax; mixer cap; DTR anti-avoidance (self-executing).

**Established facts (with sources).** TIOPA s 19 claim time limit 4 years / 1 year after AP of payment (INTM162560); s 79 6 years after adjustment (INTM162570); PE unrelieved tax: forward without limit, back to APs beginning in 3 years before, same PE, claim 4 years (INTM163040); MAP: s 124(2)–(4), s 125(3) 6 years (INTM423040/423070); Patent Box deduction enters DTR calc and may restrict it (CIRD260160); League of Nations 1928 models (27 countries, 22–31 October 1928; secondary).

**Debates covered.** Beneficial ownership v PPT (anti-treaty-shopping tools); purposive reading of relief articles (*Bayfine*); "same income" (*Anson*).

**Threads.** TP MAP corresponding adjustment (GY6–GY7) signposted to ch 27. Branch exemption decision signposted to ch 25.

## Ledger additions (new story facts)

- **UK–Vallaria treaty** contains the MLI-style **preamble and principal purpose test** (Arts 6–7 pattern) (story assumption; ch 24).
- **Calder royalty (GY4 onwards):** attributable costs **£300,000** (patent fees, licence management, share of overheads), royalty profit **£900,000** (= the simplified relevant IP profits of ch 11); Patent Box CT on it **£90,000**; Vallarian WHT **£60,000** fully credited; UK CT payable on the royalty **£30,000**; total tax £90,000 (10%). Calder supplies HMRC certificates of residence when asked.
- **Calder refinery PE:** AP to 31 March GY3 contains 8 months of the project (Aug GY2–Mar GY3; PE loss £0.3m, no Vallarian tax); 9-month AP contains 6 months (Apr–Sep GY3; profit £0.9m; credit £180,000; top-up £45,000). Matches the ledger.
- **Not story facts** (labelled hypotheticals): PPT conduit via a third-country holding company; Vallarian over-measurement variant (£1.2m; £15,000 lost); Marrovian licensee at 30% (£270,000 / £135,000 wasted); s 52 allocation example (UK £500,000; TVS £900,000; Marrovian £500,000 gross / £400,000 profit / £150,000 WHT; deductions £1,000,000; credit £60,000 bad / £104,444 pro rata / £160,000 good; CT payable £140,000 / £95,556 / £40,000; £50,000 lost); taxed TVS dividend under s 931R (£1.0m; WHT £150,000; UT £250,000; UK CT £312,500; credit £312,500; £87,500 wasted).

`ledger-check.py` re-run: 132 checks, 0 failures (no canonical numbers changed).

## Continuity fixes applied (rulings R18–R29)

- No "Fix needed in" item in R18–R29 names chapter 24. R29 confirms this chapter's facts (UK–Vallaria treaty preamble and PPT; Calder's royalty: costs £300,000, profit £900,000, Patent Box CT £90,000, WHT £60,000 credited, UK CT £30,000): both editions consistent. R28.5 (*FCE Bank*): consistent with chapter 15. Grep for superseded figures: none.

## Technical review fixes (review E)

- **N25 "royalties as one source" (flag 1, open item 20): statutory basis found.** TIOPA 2010 **s 47** applies s 44(2) where double taxation arrangements apply and royalties are paid in respect of an asset in more than one foreign jurisdiction: the royalties are treated as income from a single asset and the credits aggregated. Both editions now cite it (reading: "The N25 wrinkle" and Key rules table; script: the examination wrinkle paragraph), noting that N25 Q1 was a non-treaty (unilateral) case and that s 47's reach to unilateral relief is not confirmed. Source: https://www.legislation.gov.uk/ukpga/2010/8/section/47 (search extract).
- R16: "Law sheet 3" removed from the MAP table's source column (reading).
- Examiners' N23 remark no longer shown in quotation marks (it is a paraphrase from the research summary).
- *Bayfine* quotation: the opening words ("the primary purposes of the Treaty are, on the one hand, to eliminate double taxation") corroborated by a secondary source; the second limb was not seen verbatim (kept, with ellipsis).
- Word count after fixes: script 8,024 (target 7,500 ± 10%).
