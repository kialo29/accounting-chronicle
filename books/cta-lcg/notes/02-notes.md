# Notes: Chapter 2, Where corporate tax law lives

**Interpretation and assumptions (one line).** Taught as the book's "how we know" chapter: the statute map (CTA 2009/2010, TIOPA, TCGA, CAA, TMA, FA 1998 Sch 18, free-standing FA schedules, five key SIs, treaties via TIOPA s 2), FA 2026's dynamic references to OECD texts (s 164 TIOPA, s 20 CTA 2009, s 1140A CTA 2010) with the "just guidance" misconception, treaty reading (*Fowler*, MLI PPT), accounts as a source (s 46; *NCL*; *GDF Suez*), HMRC guidance and its UTT edge, clearances (statutory, non-statutory, FA 2026 advance tax certainty, APAs), case law and EU echo, legislation.gov.uk dating and commencement, the Tarnmoor s 164A research memo (GY1), and exam-room research; WebFetch unavailable, so verification used 13 WebSearch calls (one over budget) plus the law sheets' V items.

**Files.** Script `chapters/02-where-corporate-tax-law-lives.txt` (5,890 words by `wc -w`; target 5,500 ± 10%); reading edition `chapters/02-where-corporate-tax-law-lives-reading.md` (about 7,580 words). 11 sections plus opening (section lengths 404–873 words in the script).

---

## Sources by section

Law sheets and research files used throughout: `research/law-sheet-3-international.md` (§§2.1, 2.2, 4, 13, 14), `research/law-sheet-5-cfc-tp-hybrids-migration.md` (B1, B3, B4, B6, B7, teaching notes), `research/law-sheet-1-ct-core.md` (§8, §9, §10), `research/law-sheet-4-accounting-misc.md` (§1.1, §1.2, teaching notes), `research/exam-intel.md` (§§0, 1, 3, 5, traps), `research/lcg-grid-extract-v2.txt`, `book-bible.md` §§1A, 3, 4.1, 5.2, `calder-ledger.md` §§3, 5, 6.

WebSearch calls (**13 used, one over the addendum's budget of 12**; all `mode: standard`):

1. `TIOPA 2010 section 164A "qualifying UK to UK provision" conditions legislation.gov.uk` → https://www.gov.uk/hmrc-internal-manuals/international-manual/intm414320 ; https://www.gov.uk/hmrc-internal-manuals/international-manual/intm414330 (purpose: compensating adjustments under s 174 usually make UK-to-UK pricing neutral; HMRC TP notice to avoid a net loss of tax, generally after a notice of enquiry).
2. `TIOPA section 164 transfer pricing guidelines "as amended" OECD 2022 Finance Act 2026 Treasury designate order previously` → https://www.gov.uk/hmrc-internal-manuals/international-manual/intm414120 (FA 2026: Model and TPG interpretative aids whether or not a treaty is in place; most recent versions; Treasury opt-out); https://www.legislation.gov.uk/uksi/2018/266/article/2/made (July 2017 TPG designated, APs from 1 April 2018); https://www.legislation.gov.uk/ukpga/2016/24/section/75 ; https://www.legislation.gov.uk/ukpga/2011/11/section/58 (designation mechanism); SI 2022/1147 (2022 TPG, CT APs from 1 January 2023) known from the search summary only.
3. `Tax Law Rewrite Project 1996 completed 2010 ...` → https://www.legislation.gov.uk/ukpga/2010/8/notes (TIOPA the seventh and final Rewrite Bill; Royal Assent 18 March 2010; does not generally change the law); https://lawcom.gov.uk/?p=2333 (list of seven Acts); https://en.wikipedia.org/wiki/Tax_Law_Rewrite_Project (July 1996 blueprint; secondary).
4. `National Archives "Find Case Law" service launched April 2022 ...` → https://inforrm.org/2022/04/19/news-national-archives-launches-new-find-case-law-service/ ; https://www.gov.uk/government/news/court-judgments-made-accessible-to-all-at-the-national-archives ; https://www.lawgazette.co.uk/law/official-court-judgments-database-goes-live/5112223.article .
5. `HMRC non-statutory clearance service guidance genuine uncertainty ...` → https://www.gov.uk/guidance/non-statutory-clearance-service-guidance (via mirror https://govdiff.njk.onl/update/2026-08-26T11:36:00+01:00/www.gov.uk/guidance/non-statutory-clearance-service-guidance): genuine uncertainty; not a confirmation service; no tax planning or avoidance; statutory clearance takes precedence.
6. `Finance Act 2026 advance tax certainty major projects clearance "£1 billion" ...` → https://www.gov.uk/guidance/advance-tax-certainty-service ; https://www.gov.uk/government/publications/advance-tax-certainty-service-major-investment-projects-with-certainty-in-advance/advance-tax-certainty-service ; https://www.icaew.com/insights/tax-news/2026/may-2026/advance-tax-certainty-service-express-an-interest-from-1-june-2026 (ss 266–274; launch 1 July 2026; EOIs from 1 June 2026); https://www.lexisnexis.co.uk/tolley/tax/commentary/simons-taxes/administration-compliance/a6-107b-advance-tax-certainty-for-major-projects (exclusions: TP, valuation, purpose tests, GAAR); https://taxsummaries.pwc.com/United-Kingdom/Corporate/Significant-developments .
7. `Retained EU Law (Revocation and Reform) Act 2023 assimilated law supremacy ...` → https://www.legislation.gov.uk/ukpga/2023/28 ; https://www.pinsentmasons.com/out-law/guides/retained-eu-law-uk-after-brexit (supremacy not part of domestic law after end of 2023; "assimilated law").
8. `legislation.gov.uk "Changes to legislation" ...` → e.g. https://www.legislation.gov.uk/ukpga/2004/33/section/116 (box wording; outstanding effects; point-in-time views do not show pending effects).
9. `INTM414320 UK-to-UK exemption ...` → https://www.gov.uk/hmrc-internal-manuals/international-manual/intm414320 ; https://www.rsmuk.com/insights/tax-voice/uk-to-uk-transfer-pricing-exemption-what-does-it-mean-for-me (election out may be wanted; secondary); https://www.uk-acc.bdo.global/en-gb/insights/tax/corporate-international-tax/uk-transfer-pricing-how-it-works (exclusions; secondary).
10. `Fowler v HMRC [2020] UKSC 22 ...` → https://caselaw.nationalarchives.gov.uk/uksc/2020/22 ; https://mta-sts.supremecourt.uk/cases/docs/uksc-2018-0226-press-summary.pdf (20 May 2020; unanimous; Lord Briggs; ITTOIA s 15; Art 14 employment v Art 7; 2011/12 and 2012/13). The "cogency" quote is V from law sheet 3 (judgment opened in research).
11. `Finance Act 2004 transfer pricing extended to UK-to-UK ...` → https://www.legislation.gov.uk/ukpga/2004/12/section/37 ; https://legislation.gov.uk/ukpga/2004/12/part/3/chapter/2 ; https://www.gov.uk/hmrc-internal-manuals/international-manual/intm413250 (UK-to-UK extension for chargeable periods beginning on or after 1 April 2004; Lankhorst-Hohorst 2002 link not stated by any source).
12. `TIOPA 2010 section 2 "Giving effect to arrangements" ...` → https://www.legislation.gov.uk/ukpga/2010/8/section/2 (Order in Council; s 5(2) draft approved by the Commons; effect under s 6). Also used for the s 1140A check: query `"1140A" Corporation Tax Act 2010 ... "from time to time"` → https://assets.publishing.service.gov.uk/media/6a50bbbcc3d64d94cacab753/foreign_branch_exemption_draft_legislation.pdf (draft FB 2026-27 would add s 1140A(6) for APs from 1 January 2027) and LexisNexis PE guidance. 13. (listed with 12 above) the s 1140A query. *Budget overrun: 13 searches against a cap of 12; the 13th was used to check the plan's [V] claim for s 1140A.*

By section: Opening (FA 2026 and TIOPA Royal Assent dates: LS5 header, search 3); Statute book (LS3/LS5/LS1/LS4 sections; search 3, 12; SIs from bible §§3.3–3.4, LS5 B7, LS4 §1.1); Parliament points at Paris (LS3 §2.1–2.2, §4; LS5 B1; searches 2, 12); Treaties (LS3 §4, §13; search 10); Accounts (LS4 §1.1, §1.2, teaching notes); HMRC's view and asking first (LS5 B4; LS1 §8, §10; searches 5, 6); Case law (bible §1A; LS5 teaching notes; searches 4, 7); Reading the law (LS3 header and §14 trap 1; search 8; draft FB 2026-27 via the s 1140A search); Tarnmoor (ledger §§3, 5, 6; LS5 B3, B7, teaching notes; searches 1, 9, 11; Python); Exam room (EI §1, §3).

**Computations (Python, scratch `lcg-ch02/calc.py`):** UK-to-UK loans 200 + 120 + 70 + 40 = £430m; interest at 6% = 12.0 + 7.2 + 4.2 + 2.4 = £25.8m; TVS £120m → £7.2m; TFL total £550m lent (interest £33.0m), notes interest £30.25m, TFL TTP £2.15m (ledger agrees); UK share 78.18%; hypothetical 0.5% × £200m = £1.0m, CT 25% = £250,000 each side, net nil; marginal relief upper limit with 9 associates £27,777.78. `ledger-check.py`: 96 checks, 0 failures (no canonical number changed).

---

## Fact-check flags

1. **s 1140A CTA 2010: dynamic reference not confirmed.** The plan (§5 ch 2) says all three provisions refer to OECD texts "as amended from time to time" [V]. Law sheet 3 confirms this for CTA 2009 s 20(1A)–(1E) and law sheet 5/INTM414120 for TIOPA s 164; for s 1140A the sources confirm only the reference to Art 5 of the 18 November 2025 Model and Commentary. The text says "in the two most important" provisions the reference is dynamic, and the reading edition table marks s 1140A "not confirmed". **UNVERIFIED** (search returned nothing conclusive).
2. **Exact wording of s 164A conditions not read in full.** Conditions taken from law sheet 5 B3 (verified there from legislation.gov.uk) and INTM414320 search extracts. Two story checks are deliberately left open in the text: (a) how the "same rate" condition applies where one party (TPLC) has no taxable profits; (b) whether TFL could be a "banking company" (story assumption: it takes no deposits and is not). Chapter 27 should resolve both from the statutory text.
3. **TIL and s 164A.** The chapter says the £20m interest-free loan from TPLC qualifies while TIL is UK resident; this matches the ledger (TP on the loan only from migration, GY4). Not checked: whether s 164A's residence condition is affected by TIL's Irish incorporation (dual residence under Irish law not researched, bible flag 38) or by a "throughout the period" requirement in the migration AP. Flag for chapters 22 and 27.
4. **Previous TPG designations** (SI 2018/266 for APs from 1 April 2018; SI 2022/1147 for CT APs from 1 January 2023) come from search summaries; SI 2018/266 art 2 appeared as a legislation.gov.uk result; SI 2022/1147 not opened. Secondary.
5. **Advance tax certainty service:** statute (ss 266–274; ≥ £1bn; 5 years) V (law sheet 1); launch 1 July 2026 and the scope exclusions (TP, valuation, purpose tests, GAAR) are from ICAEW/Lexis/PwC summaries: labelled "published scope" in the script and "secondary" in the reading edition.
6. **Lankhorst-Hohorst link** to the 2004 UK-to-UK extension: no source states the causation; labelled in both editions as the common account, not statute. The FA 2004 extension and date are verified (bible flag 46: **resolved** for the date and statute; causal link still unverified). The text does not name the member state whose rule was challenged.
7. **TCGA 1992 s 138** (share exchange clearance) cited in the reading edition table from general knowledge and the plan's section conventions; not separately opened. The script names no section number.
8. **FRS 102 periodic review** effects (leases on balance sheet; transition amount) are secondary (ICAEW, law sheet 4 S); labelled as ICAEW commentary.
9. **EU State aid dates** (2 April 2019; 19 September 2024) secondary (bible flag 45 carried forward); labelled "as reported".
10. **OECD texts not opened** (bible flag 36 carried forward): stated in the script and reading edition.
11. **Tribunal chamber names** (Tax Chamber; Tax and Chancery Chamber) and the precedent statement (FTT decisions bind no later tribunal) are standard recap from TKS chapter 2, not re-verified here.
12. **Draft Finance Bill 2026-27 s 1140A amendment** (foreign PE exemption reform, APs from 1 January 2027 in the draft): from the GOV.UK draft legislation PDF via search; labelled "proposed, not law" in the reading edition only.
13. **2027 grid / tax tables:** not published at 9 October 2026; Exam lens grades from the 2026 grid (no grade change would matter for this chapter).

**Bible §5.2 flags touched:** 36 (carried forward, stated in text); 45 (carried forward, labelled); 46 (date and statute **resolved**: FA 2004 ss 30–37, chargeable periods beginning on or after 1 April 2004, legislation.gov.uk and INTM413250 via search; causal link to *Lankhorst-Hohorst* still unverified and labelled). Flag 8 (*BlackRock* citation): chapter uses [2024] EWCA Civ 330 only by name.

## Contradictions

- **Plan §5 ch 2** marks the "as amended from time to time" wording [V] for all three FA 2026 provisions; only s 164 and s 20 are confirmed (flag 1). The chapter is written to the narrower, verified position.
- **Plan §5 ch 2** lists "advance tax clearances for major projects": the GOV.UK name of the service is the **Advance Tax Certainty Service**; the script calls it "the advance tax certainty service for major projects".
- No contradiction with the ledger. The ledger's "TFL → BSL £8m from 1 July GY2 (UK-to-UK; within s 164A)" is not mentioned (avoids pre-empting the Brackenwell acquisition).

## Pronunciation guide

| Written | Say it |
|---|---|
| Lankhorst-Hohorst | LANK-horst HOH-horst |
| Croner-i | KROH-ner EYE |
| Tolley | TOL-ee |
| Fowler | FOW-ler (rhymes with "howler") |
| Briggs | BRIGZ |
| G D F Suez Teesside | jee dee eff SOO-ez TEEZ-side |
| N C L Investments | en see el |
| Cadbury Schweppes | KAD-bree SHWEPS |
| Syngenta | sin-JEN-tuh |
| D S G Retail | dee ess jee |
| Tarnmoor; Tom Hesketh; Nadia Kerr; Vallaria | TARN-moor; tom HESS-keth; NAH-dee-uh KER; vuh-LAIR-ee-uh |
| synthesised | SIN-thuh-sized |
| R M Assessment Master | ar em |

## Bible update

**Cast (real):** *Fowler v HMRC* [2020] UKSC 22, judgment 20 May 2020, unanimous, Lord Briggs (with Lord Hodge, Lady Black, Lady Arden, Lord Hamblen agreeing, per search extract); facts: South African resident diver, UK continental shelf, 2011/12–2012/13, ITTOIA s 15 deeming did not move income from the employment article (Art 14) to business profits (Art 7). *Lankhorst-Hohorst* (Court of Justice, 2002): national thin cap rules could in principle breach freedom of establishment (named only). *HMRC v NCL Investments* and *GDF Suez Teesside* used as in the bible (first use here; planned owner chapter 5). Find Case Law (National Archives, launched April 2022).

**Invented facts fixed:** In the first weeks of GY1 Tom Hesketh's team writes a research memo on s 164A at Nadia Kerr's request; conclusion: no TP adjustment on TFL's four UK loans (£430m, £25.8m interest a year); TVS loan stays in Part 4; TIL loan within s 164A while TIL is UK resident; story assumption TFL is not a banking company; TPLC rate-condition point left open.

**Glossary (term, meaning, chapter 2):** Tax Law Rewrite Project (1996–2010 restatement producing seven Acts); Order in Council (route by which treaties take effect, TIOPA s 2); OECD Model Tax Convention (template treaty; 18 November 2025 version referred to by UK law; 2017 articles in the exam PDF); Commentary (OECD explanation of the Model; persuasive per *Fowler*; statutory aid for PE rules); Transfer Pricing Guidelines (OECD 2022, dynamic reference in s 164); Multilateral Instrument (introduced; in force for UK 1 October 2018; owned by 24); principal purpose test (introduced; owned by 24); authorised OECD approach (introduced; owned by 23); Advance Tax Certainty Service (FA 2026 ss 266–274); Non-Statutory Clearance Service; "Changes to legislation" box and outstanding effects ("changes not yet applied"); point-in-time version; as enacted vs revised text; assimilated law; Croner-i / Tolley online legislation; UK-to-UK exemption (introduced; owned by 27).

**Established facts (with source):** FA 2026 RA 18 March 2026; TIOPA 2010 RA 18 March 2010 (explanatory notes); Rewrite blueprint July 1996, seven Acts CAA 2001 to TIOPA 2010; TIOPA ss 2, 5(2), 6 (treaties); TPG designation history (secondary); INTM414120 description of the new s 164; FA 2004 UK-to-UK TP from 1 April 2004; NSC "genuine uncertainty"; ATCS launch 1 July 2026 (secondary); Find Case Law April 2022; REUL Act 2023 (supremacy, assimilated law).

**Debates:** L3 (arm's length principle) touched via the UK-to-UK reversal of 2004; sovereignty versus alignment in dynamic OECD references (new mini-debate, both sides stated; no verdict). L8 (CFC and EU law) introduced in outline.

**Open threads:** s 164A rate condition (TPLC) and banking company definition (TFL) for chapter 27; TIL's s 164A status at migration for chapters 22/27.

## Ledger additions

- GY1 (first weeks): s 164A research memo (Tom Hesketh for Nadia Kerr). No new numbers: £430m and £25.8m are sums of ledger §6 figures.
- Story assumption: **TFL is not a "banking company"** (takes no deposits) for s 164A.
- The 5.5% arm's length rate in the illustration is a labelled hypothetical, **not** a story fact.
