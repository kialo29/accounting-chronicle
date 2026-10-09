# Book bible: The Living Law: Groups and Borders (CTA Advanced Technical, Taxation of Larger Companies and Groups)

**As built, 9 October 2026.**

*Final bible, consolidated after the book was finished: prologue, introduction, chapters 1–32, conclusion and note on sources (`chapters/`), continuity rulings R1–R29 (`continuity-rulings.md`), the amended running-case ledger (`calder-ledger.md`, 212 checks in `ledger-check.py`, 0 failures), every notes file (`notes/00-notes.md` to `notes/32-notes.md`, `notes/framing-notes.md`) and the seven independent technical reviews (`review/review-A.md` to `review/review-G.md`). It replaces the planning-stage bible of the same date. Where this file and a chapter differ, the chapter as finally reviewed governs; where this file and a continuity ruling differ, the ruling governs; story numbers are canonical in `calder-ledger.md`.*

**Companion files produced at consolidation.** `author-notes-fact-check-flags.md` (every point still open or resting on a single, secondary or unverified source, with priority); `pronunciation-guide.md` (merged TTS guide); `appendix-sources.md` (sources by chapter); `README.md` (guide to the package).

**Law year.** Financial year 2026 (1 April 2026 to 31 March 2027) under Finance Act 2026 (2026 c. 11, Royal Assent **18 March 2026**); 2026/27 for income tax points. Every Tarnmoor computation applies this law whatever Group Year the story has reached. FY2026 rates were set by FA 2025 ss 13–14; FA 2026 ss 11–12 set FY2027 (review B).

**How the book was verified.** The research phase opened the primary sources behind law sheets 1–5 and exam-intel (marked V there). During the build **WebFetch was unavailable**; writers, the continuity editor and reviewers verified by **WebSearch**, whose results show extracts (sometimes truncated) of legislation.gov.uk, GOV.UK manuals, Find Case Law and CIOT pages. Status codes below: **V** = statute, judgment or official text seen (in the research files or a search extract); **V-HMRC** = HMRC guidance seen (taught as "HMRC's view"); **S** = secondary only; **U** = unverified; **book's reading** = reasoned from sources, labelled in the text; **I** = invented.

**Contents**
1. Cast: A. real people and cases (as finally corrected); B. the invented Tarnmoor group and the Hartleys (as built)
2. Glossary (merged; term, meaning, chapter)
3. Established facts (as built; rows changed at consolidation marked)
4. Coverage (what TKS taught; which chapter owns what, as built; debates)
5. Open threads and verification flags (status of every planning flag; open items)
6. Pronunciation (pointer)

---

## 1. Cast

### 1A. Real people and cases

No words are put in anyone's mouth that are not quoted from a source seen at writing time. "Not confirmed" means the detail must not be stated. Chapter numbers are where the person or case is used (P = prologue; I = introduction; C = conclusion; N = note on sources).

**Judges, officials and other people**

| Person | Role and dates (as used) | Chapters | Status |
|---|---|---|---|
| Lord Loreburn LC | *De Beers v Howe* (1906): "the real business is carried on where the central management and control actually abides" (at 458) | 22 | V (as quoted in *Wood v Holden*) |
| Lord Radcliffe | *Unit Construction v Bullock* [1960] AC 351 (HL): CMC a matter of "actuality" | 22 | V (INTM120060 extract) |
| Chadwick LJ; Moore-Bick LJ; Sir Christopher Staughton | The *Wood v Holden* court [2006] EWCA Civ 26 (26 January 2006); Chadwick LJ gave the judgment | 22 | V |
| David Richards, Newey and Nugee LJJ | The *Development Securities* court [2020] EWCA Civ 1705. **Lead authorship not confirmed** (R28.1): name the panel only; "one member of the court" had "very considerable reservations" about the FTT's reasoning | 22 | V (panel) / U (lead judge) |
| Newey LJ | Member of the *Development Securities* court (lead authorship unconfirmed) and of the *JTI* court (lead authorship unconfirmed; one search summary said Newey LJ) | 12, 22 | V (membership) |
| Lord Briggs | Judgment in *Fowler v HMRC* [2020] UKSC 22 (20 May 2020; unanimous, with Lord Hodge, Lady Black, Lady Arden, Lord Hamblen): OECD Commentaries persuasive "as the cogency of their reasoning deserves" | 2, 24 | V |
| Peter Jackson, Nugee and Falk LJJ | The *BlackRock* court (11 April 2024; heard 5–6 March 2024). Falk LJ gave the main judgment; Nugee LJ at [192] quotes Falk LJ's "sole raison d'être" | P, 12, 27 | V |
| Judge John Brooks | FTT in *BlackRock* [2020] UKFTT 443 (TC), 3 November 2020 | P | V |
| Michael Green J and Judge Rupert Jones | UT in *HMRC v BlackRock HoldCo 5, LLC* [2022] UKUT 199 (TCC), 19 July 2022 | P | V |
| Lord Hodge, Lord Hamblen, Lady Simler | Supreme Court panel refusing permission in *BlackRock* (UKSC 2024/0070), *Kwik-Fit* and *JTI*, list dated 13 October 2024 (a Sunday as printed) | P, 12 | V |
| Andrews and Falk LJJ, Sir Launcelot Henderson | The *Kwik-Fit* court (3 May 2024) | 12 | V |
| Lewison, Newey and Baker LJJ | The *JTI* court (13 June 2024); Lewison LJ noted *Rossendale* (para 85). Lead authorship unconfirmed (R28.2): chapter 12 names no judge | 12 | V (panel) |
| Sir Stephen Richards and Arden LJ | Agreed in *Fidex* [2016] EWCA Civ 385; **lead judge not checked** (not named in the text) | 12 | V (quote para 74) / U (lead judge) |
| Judge Redston | UT permission decision in *Syngenta* [2025] UKUT 338 (TCC), 9 October 2025 | 12 | V |
| Lord Hamblen and Lady Rose | Joint judgment in *HMRC v NCL Investments Ltd* [2022] UKSC 9 (Lord Reed, Lord Briggs, Lord Sales agreeing) | 5 | V (press summary) |
| Salmon LJ | *Odeon Associated Theatres v Jones* (1971) 48 TC 257: two-step approach to commercial accounting (paraphrased from BIM31095; quote not used) | 5 | S |
| Knox J | *Johnston v Britannia Airways Ltd* (1994) 67 TC 99: engine overhaul provision | 5 | S |
| Sir Nicolas Browne-Wilkinson V-C | *Marson v Morton* (1986): badges of trade a question of fact (citation not verified; facts not stated) | 7 | S |
| Lord Hoffmann | *McKnight v Sheppard* [1999] 1 WLR 1333: fines not deductible (punishment rationale, paraphrased) | 7 | S |
| Widgery J | *Kenmir Ltd v Frizzell* [1968] 1 All ER 414 at 418 (going concern test) | 9 | V (via *Haymarket*) |
| Judge Heidi Poon; Julian Sims | FTT in *Haymarket Media Group* [2022] UKFTT 168 (TC); Judge Poon also in *Castlelaw* [2020] UKFTT 34 (TC) | 4, 9 | V |
| Lord Hodge DP, Lord Stephens, Lady Rose, Lord Richards, Lady Simler | The *Centrica* panel [2024] UKSC 25 (16 July 2024) | 13 | V |
| Mann J | *Dawsongroup plc v HMRC* [2010] EWHC 1061 (Ch), 11 May 2010 | 13 | V |
| Tuckey LJ | *Johnston Publishing* [2008] EWCA Civ 858, para 46: "one must start by trying to give meaning to all the words used"; appeal from Lindsay J | 17 | V |
| Floyd, Henderson and Baker LJJ | The *Farnborough Airport Properties* court [2019] EWCA Civ 118 (8 February 2019) | 15 | V (search summaries) |
| Vos MR, Snowden and Whipple LJJ | The *Delinian* court (3 November 2023) | 18 | V |
| Michael Green J and Judge Phyllis Ramshaw | UT in *M Group Holdings* [2023] UKUT 213 (TCC), 31 August 2023 | 18, 20 | V |
| Henderson LJ (Arden and Sales LJJ) | *Leekes Ltd v HMRC* [2018] EWCA Civ 1185, 23 May 2018 | 19 | V |
| Lord Walker | *Progress Property Co Ltd v Moorgarth Group Ltd* [2010] UKSC 55 | 19 | V |
| Lord Millett | *IRC v Laird Group plc* [2003] UKHL 54: paying a dividend is not a transaction in securities | 19 | S (CTM36810) |
| Asplin, Warby and Falk LJJ | The *Tower One St George Wharf* Court of Appeal [2025] EWCA Civ 1588 (10 December 2025) | 21 | V (listing) / S (holding) |
| Lord Reed | Judgment in *Anson v HMRC* [2015] UKSC 44 (1 July 2015) | 24 | V |
| Arden, Pitchford and Tomlinson LJJ | *Bayfine UK v HMRC* [2011] EWCA Civ 304, reversing Peter Smith J | 24 | V |
| Winston Churchill; Ernest Blythe (Earnán de Blaghd) | Signed the UK–Irish Free State double income tax agreement, 14 April 1926 (Churchill as Chancellor of the Exchequer) | 24 | V (Irish statute book reproduction) |
| John Avery Jones and Charles Hellier | Special Commissioners in *DSG Retail Ltd v HMRC* [2009] UKFTT 31 (TC), released 31 March 2009 | 27 | V |
| The Chancellor (of the High Court), Longmore and Goldring LJJ; Evans-Lombe J | The *Vodafone 2* Court of Appeal (22 May 2009); Evans-Lombe J at first instance (4 July 2008) | 26 | V |
| Advocate General Medina | Opinion of 11 April 2024 in the CFC State aid appeals | 26 | S |
| Green J | *Glencore Energy UK Ltd v HMRC* [2017] EWHC 1476 (Admin), judgment 29 June 2017 | 30 | V |
| Gloster, Sales and Singh LJJ | *Glencore* Court of Appeal [2017] EWCA Civ 1716 (2 November 2017): appeal dismissed, Sales LJ giving the lead judgment | 30 | V (review F) |
| George Osborne | Chancellor; announced DPT in the Autumn Statement of 3 December 2014 | 30 | S |
| Judge Popplewell | FTT in *HMRC v AML Tax (UK) Ltd* [2022] UKFTT 174 (TC), 29 April 2022 | 4 | V (headnote) |
| James Callaghan | Chancellor; 1965 Budget creating corporation tax (TKS recap) | 1 | V (TKS) |

**Cases (as finally cited)**

| Case | Citation and date | Point taught | Chapters | Status |
|---|---|---|---|---|
| *BlackRock HoldCo 5, LLC v HMRC* | [2020] UKFTT 443 (TC); [2022] UKUT 199 (TCC); [2024] EWCA Civ 330 (11 April 2024); SC permission refused (list 13 October 2024; the list's "[2024] EWCA Civ 419" is a listing error, also attached to *Simkova*) | $4bn intra-group loan notes; TP limb failed for HMRC (CA restored the FTT); unallowable purpose succeeded; all debits attributable; deductions about £654m (commentators) | P, 12, 27, 28 | V (£654m and TP reasoning secondary) |
| *Kwik-Fit Group Ltd v HMRC* | [2024] EWCA Civ 434 (3 May 2024); SC permission refused | Speedy 1's about £48m of pre-2017 NTLR deficits; time to use cut from 25 years to about 3; debits attributable to unallowable purpose | 12 | V (facts secondary) |
| *JTI Acquisition Company (2011) Ltd v HMRC* | [2024] EWCA Civ 652 (13 June 2024); SC permission refused | US group (Joy Global) acquisition vehicle; loan from a US group company; interest surrendered as group relief; tax advantage "bolted on" (paras 81–83) | P, 12 | V (facts secondary) |
| *Fidex Ltd v HMRC* | [2016] EWCA Civ 385 (21 April 2016); UT [2014] UKUT 454 (TCC) | Project Zephyr; FA 1996 Sch 9 para 13; "But for this tax avoidance scheme there would have been no debit at all" (para 74) | 12 | V |
| *Greene King plc v HMRC* | [2016] EWCA Civ 782 | Used only for the FA 1996 origin of the code | 12 | V |
| *Union Castle Mail Steamship Co Ltd v HMRC* | [2020] EWCA Civ 547 | £39.1m debit from amounts in equity; appeals (with Ladbrokes) dismissed | 5, 12 | V (partly) |
| *Syngenta Holdings Ltd v HMRC* | [2024] UKFTT 998 (TC); UT permission [2025] UKUT 338 (TCC) | Unallowable purpose apportionment; **no UT substantive decision found at 9 October 2026** | 12 | V (pending) |
| *HMRC v NCL Investments Ltd* | [2022] UKSC 9 | IFRS 2 debits deductible; "What matters is the character of the Debits..." | 2, 5, 7 | V |
| *GDF Suez Teesside Ltd v HMRC* | [2018] EWCA Civ 2075 | "Fairly represent" overrode GAAP-compliant accounts | 2, 5 | V (judges not named) |
| *Odeon*; *Gallagher v Jones* (1993) 66 TC 77, [1994] Ch 107; *Johnston v Britannia Airways* (1994) 67 TC 99 | — | Accounts as the basis of profit; boat lease rentals; engine overhaul provision (BIM46550) | 5 | S |
| *Salomon v A Salomon and Co Ltd* | [1897] AC 22 (HL) | Separate legal personality (decision date given only as "reported in 1897") | 1 | S |
| *Fowler v HMRC* | [2020] UKSC 22 | Treaty interpretation; Commentaries | 2, 24 | V |
| *Lankhorst-Hohorst* | Court of Justice, 2002 | Common account of the 2004 UK-to-UK TP extension (causal link labelled, not stated as fact) | 2, 27 | S |
| *Cadbury Schweppes plc v IRC* | C-196/04, Grand Chamber, 12 September 2006 | "Wholly artificial arrangements"; objective factors (facts not stated) | 2, 26 | V |
| *WT Ramsay Ltd v IRC* | [1982] AC 300 (HL, 12 March 1981) | Recap | 4 | V |
| *RFC 2012 plc v Advocate General for Scotland* | [2017] UKSC 45 | Rangers EBT (recap) | 4, 7 | V |
| *Thathiah v HMRC* | [2017] UKFTT 601 (TC) | First SAO penalty appeal; HMRC lost | 4 | S |
| *Castlelaw (No 628) Ltd and Irene Douglas v HMRC* | [2020] UKFTT 34 (TC), 17 January 2020 | SAO penalties for omitting a dormant company upheld; HMRC then updated SAOG18850 | 4 | V (review A) |
| *R (Haworth) v HMRC* | [2021] UKSC 25 (2 July 2021) | Follower notice threshold: "no scope for a reasonable person to disagree" | 4 | V |
| *HMRC v AML Tax (UK) Ltd* | [2022] UKFTT 174 (TC) | DOTAS premium fee hallmark **met** (hypothetical test); arrangements notifiable (corrected by review A) | 4 | V |
| *R (Archer) v HMRC* | [2019] EWCA Civ 1021 | APN: representations first, then judicial review only | 4 | V |
| First corporate charge under CFA 2017 s 45 | Reported August 2025 (Stockport accountancy firm; alleged R&D repayment fraud; trial listed 27 September 2027) | Chapter 4 opening; **firm not named** in the text (allegations) | 4 | S |
| *Macdonald v Dextra Accessories Ltd* | [2005] UKHL 47 (7 July 2005) | EBT contributions (potential emoluments) | 7 | S+ |
| *Marson v Morton* | (Ch D, 1986) | Badges of trade a question of fact | 7 | S |
| *Eclipse Film Partners No 35 LLP v HMRC* | [2015] EWCA Civ 95 (17 February 2015) | Not trading; HMRC estimate £635m (HMRC press release) | 7 | S |
| *McKnight v Sheppard* | [1999] 1 WLR 1333; [1999] STC 669 (HL) | Fines not deductible; legal costs deductible | 7 | S |
| *ScottishPower (SCPL) Ltd v HMRC* | [2025] EWCA Civ 3 (17 January 2025); UKSC/2025/0047 heard 18–19 May 2026, **judgment reserved at 9 October 2026** | Regulatory redress payments (about £28m) deductible; not penalties | 7 | V (citation) / S (detail); **open** |
| *George Peters & Co Ltd v Smith* | — | Payments as part of a share sale outside s 79 (BIM47210) | 7 | S |
| *HMRC v Dundas Heritable Ltd* | [2019] UKUT 208 (TCC), 2 July 2019 | Late CA claims cured by enquiries opened in time | 8 | V |
| *G H Chambers (Northiam Farms) Ltd v Watmough* | — (cited in CA27100) | Personal-choice assets | 8 | U (citation) |
| *Barclays Mercantile Business Finance Ltd v Mawson* | [2004] UKHL 51 | Irish Sea pipeline leaseback (~£91m); background to the LFL regime | 9 | S |
| *Kenmir Ltd v Frizzell*; *Haymarket Media Group Ltd v HMRC* | [1968] 1 All ER 414; [2022] UKFTT 168 (TC), 18 May 2022 | Going concern (successions) | 9 | V |
| *Get Onbord Ltd v HMRC*; *Tills Plus Ltd v HMRC* | [2024] UKFTT 617 (TC); [2024] UKFTT 614 (TC) | What is R&D (taxpayer won; HMRC won) | 10 | S |
| *Centrica Overseas Holdings Ltd v HMRC* | [2024] UKSC 25 (16 July 2024) | £2,529,697 of Oxxio disposal fees: expenses of management but capital; trader's capital test | 13, 20, 31 | V |
| *Camas plc v Atkinson* | [2004] EWCA Civ 541 | Pre-2004 abortive bid costs as management expenses | 13 | V (title) / S |
| *Dawsongroup plc v HMRC* | [2010] EWHC 1061 (Ch) | Delisting costs (~£433,000) not expenses of management | 13 | V |
| *Capital and National Trust v Golder*; *Sun Life Assurance Society v Davidson* | — (names via CTM08190) | Acquisition costs | 13 | S |
| *Purchase v Tesco Stores Ltd* | (1984) 58 TC 46 | "Major" change: more than significant, less than fundamental | 14 | S (CTM06370) |
| *Williams v Peeters Picture Frames Ltd* (HMRC's spelling) / *Willis v Peeters Picture Frames Ltd* | (1983) 56 TC 436; [1983] STC 453 | Not a major change on its special facts | 14 | S (both names given) |
| *Ayerst v C & K (Construction) Ltd* | [1976] AC 167; 50 TC 651 (HL, 21 May 1975) | Liquidation strips beneficial ownership | 14 | V (review C) |
| *Leekes Ltd v HMRC* | [2018] EWCA Civ 1185 | Streaming on succession | 14 (recap), 19 | V |
| *HMRC v Marks and Spencer plc* | [2013] UKSC 30; [2014] UKSC 11 | Cross-border group relief (recap) | 15 | V (TKS) |
| *Farnborough Airport Properties Co v HMRC* | [2019] EWCA Civ 118; UT [2017] UKUT 394 (TCC) | Receiver over Piccadilly Hotels 2 Ltd's property = arrangements; £10,627,709 losses denied | 15 | V |
| *HMRC v FCE Bank plc* | [2012] EWCA Civ 1290 (17 October 2012); UT [2011] UKUT 420 (TCC) | UK–US treaty Art 24(5); group relief through a US parent (parent not named) | 15, 24 | V |
| *HMRC v South Eastern Power Networks* | [2019] UKUT 367 (TCC) | s 146B consortium relief halving applied | 15 | S |
| *Delinian Ltd (formerly Euromoney Institutional Investor plc) v HMRC* | [2023] EWCA Civ 1281; UT [2022] UKUT 205 (TCC) | Share exchange for redeemable preference shares; "a" purpose not "a main" purpose; HMRC amendment £10,483,731.87 (reported) | 18, 20 | V (amount secondary) |
| *M Group Holdings Ltd v HMRC* | [2023] UKUT 213 (TCC) | Medinet: para 15A unavailable before a group existed; gain about £53.2m | 18, 20 | V |
| *Stanton v Drayton Commercial Investment Co Ltd* | (1982) 55 TC 286 (HL, 8 July 1982) | Consideration in shares = agreed value (CG52562) | 18 | V-HMRC |
| *Marren v Ingles* | (1980) 54 TC 76; [1980] STC 500; [1980] 1 WLR 983 | Right to unascertainable consideration is a chose in action; **House of Lords per secondary sources** (R28.3) | 16, 18, 20 | S (court) |
| *Marson v Marriage* | 54 TC 59 | Ascertainable contingent consideration (s 48) | 18 | S |
| *Johnston Publishing (North) Ltd v HMRC* | [2008] EWCA Civ 858 (23 July 2008) | Associated companies leaving together; HMRC's reported provisional figure £280m | 17 | V (£280m secondary) |
| *Progress Property Co Ltd v Moorgarth Group Ltd* | [2010] UKSC 55 | Arm's length sale at an undervalue not an unlawful distribution | 19 | V |
| *IRC v Parker* (1966) 43 TC 396; *IRC v Joiner* (1975) 50 TC 499; *Williams v IRC* (1979) 54 TC 257; *IRC v Laird Group plc* [2003] UKHL 54 | — | Transactions in securities | 19 | S (CTM36810) |
| *Spring Capital Ltd v HMRC* | FTT 2019 | L − A restriction applied (reading edition only) | 19 | S |
| *Underground Electric Railways* | HL, 1906 (as cited in STSM021120) | Contingency principle | 20, 21 | S |
| *Tower One St George Wharf Ltd v HMRC* | [2024] UKUT 373 (TCC); [2025] EWCA Civ 1588 | SDLT group relief denied (main purpose of a CT advantage); CA reversed UT on s 53 but applied s 75A | 21 | S / V (listing) |
| *HC-One No.1 Ltd v HMRC* | [2026] UKFTT 678 (TC) | Winding-up exception and a solvent MVL (appeal status unknown) | 21 | S |
| *De Beers Consolidated Mines Ltd v Howe* | [1906] AC 455 (HL) | CMC | 22 | V |
| *Unit Construction Co Ltd v Bullock* | [1960] AC 351 | Parent's London board controlled the African subsidiaries (**not** "Kenya" or "a representative in East Africa": R28.4) | 22 | V (INTM extract) |
| *Wood v Holden* | [2006] EWCA Civ 26 | Eulalia Holding BV Dutch resident; the £23.7m sale (23 July 1996) was by Copsewood Investments Ltd to Eulalia, which sold on to Birthdays Group Ltd (21 October 1996, £30,799,384); Woods assessed under TCGA s 13 (review E); not the musician | 22 | V |
| *HMRC v Development Securities plc* | [2020] EWCA Civ 1705 | Jersey companies UK resident: decisions in fact taken by the UK parent | 22 | V |
| *HMRC v Smallwood* | [2010] EWCA Civ 778 | Tie-breaker not a snapshot; "Round the World" scheme via a Mauritius trustee | 22 | V |
| *National Grid Indus BV* | C-371/10 (CJEU, 2011) | Exit taxes and payment deferral | 22 | S |
| *HMRC v Joint Administrators of Lehman Brothers International (Europe)* | [2019] UKSC 12 (13 March 2019) | Statutory interest is yearly interest (s 874) | 23 | V |
| *Goslings and Sharpe v Blake*; *Bebb v Bunny*; *Gateshead Corporation v Lumsden* | — (SAIM9075) | Yearly v short interest (reading edition only) | 23 | S |
| *Indofood International Finance Ltd v JP Morgan Chase Bank NA* | [2006] EWCA Civ 158 | Beneficial ownership; interposed Netherlands company | 24 | V (facts secondary) |
| *Bayfine UK v HMRC* | [2011] EWCA Civ 304 | UK–US Art 23 read purposively; claim £35,888,482 | 24 | V |
| *Anson v HMRC* | [2015] UKSC 44 | Same income for credit (Delaware LLC) | 24 | V |
| *Vodafone 2 v HMRC* | [2008] EWHC 1569 (Ch); [2009] EWCA Civ 446 (22 May 2009) | Conforming interpretation of the old CFC rules | 26 | V |
| CFC State aid | Commission Decision (EU) 2019/1352 (2 April 2019); General Court T-363/19, T-456/19 (8 June 2022); Court of Justice C-555/22 P, C-556/22 P, C-564/22 P (19 September 2024: annulled) | Finance company exemption saga | 2, 26 | S (19 September 2024 multi-source); UK steps V (SI 2024/1307; FA 2026 s 51) |
| *DSG Retail Ltd v HMRC* | [2009] UKFTT 31 (TC) | First TP case at the tribunal; Dixons' Isle of Man captive (DISL); Cornhill fronting May 1986–April 1997 | 27 | V |
| *Test Claimants in the Thin Cap Group Litigation v HMRC* | C-524/04 (13 March 2007); [2011] EWCA Civ 127 | Thin cap and freedom of establishment (CA holding not stated) | 27 | V |
| *Glencore Energy UK Ltd v HMRC* | [2017] EWHC 1476 (Admin); [2017] EWHC 1587 (Admin); [2017] EWCA Civ 1716 (appeal dismissed) | DPT charging notice £21,129,349 plus interest; judicial review refused: statutory review and appeal an adequate alternative remedy | 30 | V |
| Not used (unverified or not needed) | *IRC v Cleary* [1968] AC 766; *Page v Lowther*; *Gallaher*; *Prudential*; *Prizedome*; *Rolls-Royce Motors v Bamford* | — | — | U / not cited |

**Real companies and bodies named** (only as the sources describe them): those in the cases above, plus ITV and London Stock Exchange group companies (State aid appellants), Barclays Global Investors (BlackRock), Copsewood Investments, Eulalia Holding BV, Birthdays Group, Capital Data and Diamond Topco (Delinian), Medinet Clinical Services (M Group), Piccadilly Hotels 2 (Farnborough), Teddington Studios (Haymarket), Bord Gáis Éireann (BMBF), LeTourneau Technologies and Joy Global (JTI), Speedy 1 (Kwik-Fit), Oxxio, Deutsche Bank, PwC and De Brauw (Centrica). Institutions: The National Archives (legislation.gov.uk; Find Case Law), HMRC Large Business, ICAEW Tax Faculty (TAXwire; TAXline), CIOT (*Tax Adviser*; Technical Newsdesk), IASB, UK Endorsement Board, FRC, OECD, Revenue Scotland, RM (exam software).

### 1B. The invented Tarnmoor group and the Hartleys (as built)

**Everything in this section is invented for teaching** (except Ireland, its 12.5% trading rate and the UK–Ireland treaty with the MLI). Each script says so on first appearance in each chapter. **The full canonical facts are in `calder-ledger.md` (amended by R1–R29); that file wins over this summary.** The planning-stage figures that rulings superseded are listed in §1C.

| Entity or person | Fixed facts (as built) | Chapters |
|---|---|---|
| **Tarnmoor plc (TPLC)** | UK-listed (LSE main market), widely held (pension funds, insurers, private investors), Leeds head office; ultimate parent; year end 31 December; company with investment business (management expenses £8.0m GY1 = services to TVS £2.0m + strategic review £0.3m + other £5.7m; £8.5m GY2); post-decision Calder deal fees £0.9m capital (*Centrica*; board decision 3 February GY1); recharge income non-trading (s 979, book's assumption); RCF borrower (two £300,000 arrangement fees: R13); Helmside consortium member (45%); CIR reporting company; Pillar Two UPE and filing member; CFC charge on TCM £132,000 a year GY1–GY4, £204,000 GY5 (paid 9 months and 1 day after the AP: TPLC is not large, R29). **s 105(3A) cap (R3):** profit-related threshold = recharge income + £825,000 apportioned CFC profits; ME surrendered £5,075,000 (GY1), £5,475,000 (GY2); £825,000 a year carried forward and **stranded** (s 188BE, book's reading): £3.3m by end GY4, + £1,275,000 GY5. Standing deductions allowance nomination (R9). Publishes its tax strategy by 31 December each year ("does not use marketed tax avoidance schemes") | 1–4, 6, 12–15, 18–21, 26–31 |
| **Tarnmoor Engineering Ltd (TEL)** | Main UK trading company; revenue £630m (GY1). **GY1:** TTP **£10,535,000**, CT **£2,633,750** (R3). **GY2:** PBT £23.5m; trading profit before CAs £42.0m; CAs £16.0m (special rate pool b/f £7.72m; FYA balances pooled after WDA: R18); group and consortium relief £17.095m; TTP **£8,905,000**; CT **£2,226,250**; QIPs 4 × £556,562.50 on the full liability; £600,000 discharged by Brackenwell's surrendered RDEC: net **£1,626,250** (R2, R7); UTT notification (£24m ERP, £6m advantage). GY3: long funding lease (finance charge £90,000: tax-interest, R20); distribution centre £5.2m (SBA £34,000; integral features 6% WDA £36,000); s 171A election with TES. GY4: TVS's UK key-account engineers (domestic dependent agent PE; no treaty PE); buy-sell distributor from GY5. GY6: hives down actuators into TAL (1 February; no arrangements to sell then); blocked Marrovian receipt £400,000 (s 173, R23); sells TAL 31 December | 1, 3, 4, 6–10, 12, 15–21, 23, 25, 27, 28, 32 |
| **Calder Valve Engineering Ltd (CVE)** | TKS's invented regional manufacturer; FY2026 TTP £2.0m, CT £500,000 in four QIPs. Acquired by TPLC 1 April GY1 for £32m from the Oldroyd family (stamp duty £160,000). **First group AP (to 31 March GY2): large, not very large** (QIP divisor 1: associates counted on 31 March GY1); 4 × £187,500 on CT before RDEC of £750,000 (14 October GY1; 14 January, 14 April, 14 July GY2); RDEC £400,000; net CT £350,000 (R1, R2); PBT £3.8m; CAs £1.8m (R&D allowance £0.5m + P&M £1.3m); heavy long-life plant (R12). **Very large from its AP beginning 1 April GY2** (divisor 9). FRS 101 from 1 April GY2 (+£400,000 change of basis; four £25,000 instalment increases). Project Ashlar (Dan £72,000 of £2.0m qualifying expenditure). Vallarian refinery PE (August GY2–September GY3; loss £300,000 relieved, £75,000; profit £900,000, credit £180,000, top-up £45,000); no s 18A election. Process valves division closed (provision £1.8m; Dan redundant 30 September GY3; his package £97,812 inside it, R15). 1 October GY3: know-how and customer contracts to TVS for £6.0m (CT £1.5m; credit stays in CIR tax-EBITDA, R4), plant £1.4m (special balancing charges £1.0m). 9-month AP to 31 December GY3 (QIP divisor 10). Patent Box from GY4 (royalty £1.2m; Patent Box CT £90,000; WHT £60,000 credited; UK CT £30,000). GY5 enquiry; GY6 TP settlement at £8.0m (adjustment £2.0m, CT £500,000 plus interest); bilateral APA on the royalty from GY6 | 1, 3, 5–11, 15, 17, 20, 24, 25, 27, 28 |
| **Tarnmoor Estates Ltd (TES)** | Property company (investment business; s 463B claims). GY2: s 198 office fixtures £400,000 covered by the group AIA for the year to 31 March GY3 (R11); QIP overpayment £569,375, refund surrender £400,000 to TEL. GY3: receives Calder's works (SDLT relief £269,500); depot sold 30 April (gain £2,277,500; £800,000 chargeable after group roll-over; £500,000 reallocated to TEL under s 171A); **lease assignment gain £189,000** (assumed indexation factor 0.250; R19); net gains GY3 **£489,000**; transfers the water-systems factory to TWS (SDLT relief £289,500, later clawed back); flood wall SBA £9,000 a year. GY4: **30-year lease grant**: premium £2.0m, income element £840,000, part-disposal cost **£290,000**, gain **£870,000**, CT £427,500 (R19); Moorgate Logistics LLP 50% (share £400,000 taxable). GY6: head office sale and leaseback (£14.0m; buyer's SDLT £689,500; leaseback NPV £10,365,670) | 3, 9, 12, 13, 15–17, 21, 28 |
| **Tarnmoor Finance Ltd (TFL)** | £550m 5.5% listed notes (quoted Eurobonds; £30.25m interest); lends at 6% (TEL £200m, TWS £40m, TES £70m, TPLC £120m, TVS £120m); TTP £2.15m, CT £537,500 a year; interest rate swap in a designated fair value hedge with **no reg 6A election** (follows the accounts: R6); not a banking company (story assumption); nominated company in the group payment arrangement from GY3; Project Undertow issuer (rejected) | 2, 3, 12, 23, 27–29 |
| **Tarnmoor Water Systems Ltd (TWS)** | Demerged 1 July GY5 (value £180m) as Tarnwater plc: direct demerger, s 1091 clearance, TPLC's market value disposal exempt under the SSE (R24); SDLT clawback £289,500 | 17, 19, 21 |
| **Brackenwell Sensors Ltd (BSL)** | Founder Dr Asha Varma; acquired 1 July GY2 (SPA 1 May; joins the group relief group on completion): £22.2m shares (stamp duty £111,000) + £1.8m for £3.0m convertible notes (holders' conversion right: stamp duty **£9,000**; deal £120,000: R22); notes released by 29 August GY2 (s 361D corporate rescue). Pre-acquisition ERIS credit £943,950 (tax deed protects TPLC). GY2 RDEC £600,000 (step 2 £114,000 + step 5 £486,000) all surrendered to TEL, which pays £600,000 (R7); loss split £2.6m / £2.6m. **Pre-change losses £8.6m restricted under Part 14 Ch 2 (s 673)**, not Ch 2A (R8); Ch 2C bar to 31 December GY7; DTA £2.15m unrecognised. Pre-entry capital loss £0.4m (Sch 7A). Vallarian university royalty £50,000 (5% under s 911) | 3, 6, 10, 12, 14, 15, 17, 20, 21, 23 |
| **Helmside Energy Ltd (HEL)** | JV from 1 January GY1: TPLC 45%, Greyfell Utilities plc 40%, Northlight Infrastructure Fund LP 15% (£1 ordinary shares, identical rights); losses £4.0m, £3.0m, £1.0m (consortium relief to TEL via TPLC as link company: £1.8m, £1.35m, £0.45m; 25p per £). GY4 profit £2.5m; **1 December GY4 heads of terms are s 155 arrangements: TPLC surrenders £536,250**, not £585,000 (R21); Helmside TTP £763,750, CT £190,937.50; pays TPLC £134,062.50. 85% subsidiary from 1 March GY5 (share exchange: 2,000,000 TPLC shares at £8.00; Greyfell's gain exempt under the SSE; TPLC's pool £25.0m; stamp duty £80,000) | 14, 15, 18, 21, 28 |
| **Tarnmoor Vallaria SA (TVS)** | Vallarian subsidiary (20%); borrows from TFL (£120m) and TCM (£60m); buys Calder's process-valve business (GY3; re-priced at £8.0m in the GY6 settlement; Vallaria's corresponding adjustment GY7); licensee of the Ashlar patents (royalty £1.2m); UK sales through TEL's engineers (GY4; service fee unpriced); CFC tax exemption every year (80%) | 11, 23–27, 30 |
| **Tarnmoor Capital Ltd (TCM)** | Marrovian finance company (9%; no treaty; no domestic minimum tax); equity £60m, + £30m on 1 January GY5; Marrovian team decides lending; CFC with the Ch 9 75% exemption: charge £132,000 (GY1–GY4), £204,000 (GY5); Pillar Two ETR 13.0%: IIR top-up £66,000 a year GY1–GY4, £102,000 GY5 (R25) | 26, 29, 30 |
| **Tarnmoor Ireland Ltd (TIL)** | Irish-incorporated; UK resident by CMC until migration on 30 June GY4 (notice 1 March; HMRC approved the plan with a TPLC guarantee in May GY4); CT1 £850,000, CT2 £325,000; payment plan £525,000 = 6 × £87,500 (1 April GY5–GY10); UK warehouse gain £0.8m postponed (s 187B; no election out); then a non-resident landlord within CT and a CFC with no chargeable profits; outside SAO throughout (R10); s 164A ends at migration (TP £0.6m GY4, £1.2m a year from GY5: R29) | 2, 11, 22, 23, 26, 27 |
| **Tarnmoor Actuators Ltd (TAL)** | Hive-down vehicle (1 February GY6; no buyer or arrangements then; Brennock approached summer GY6); sold 31 December GY6 to Brennock Industries Inc for £48.0m + earn-out capped at £6.0m (valued £3.0m; receipts GY7 £2.0m and GY8 £2.5m: gains £1.5m, CT £375,000 on the accepted view); para 15A SSE; degrouping gain £2.5m added to consideration (£53.5m, exempt); s 782A switches off the intangibles degrouping charge; SDLT clawback £364,500; **buyer's stamp duty £270,000** on £54.0m (R22); QIP thresholds for its 11-month AP £125,000 / £1,666,667 / £833,333 | 9, 11, 17–21 |
| **Tarnmoor Pumps Ltd** | Dormant (never counts for QIPs); struck off GY7: s 1030A distribution £18,000; TPLC gain £17,900, CT £4,475; no SSE; £100 share capital *bona vacantia* | 3, 19 |
| **Moorgate Logistics LLP** | TES 50% with an unconnected developer from GY4; GY4 TES taxable share £400,000 | 15 |
| **Coldwater Instruments plc** | AIM-quoted; TPLC 12% (pool £8.4m); sells 4% on 30 September GY4 (gain £2,160,000 exempt); remaining 8% exempt under the main SSE until about September GY9 | 18 |
| **Greyfell Utilities plc; Northlight Infrastructure Fund LP; Brennock Industries Inc; the Oldroyd family** | Outsiders (invented) | 15, 18, 20, 21 |
| **Nadia Kerr** | TPLC CFO; SAO for every UK-incorporated group company | 1, 4, 6, 28, 31 |
| **Tom Hesketh** | Group head of tax: s 164A memo (GY1), board papers (pushdown, Undertow, branch, election), annual CFC review, degrouping register, migration protocol | 1–4, 12, 13, 21–31 |
| **Graham Pike** | Calder's finance director (QIP question; claim notification April GY2; branch election question, summer GY3) | 3, 5, 10, 25 |
| **Dr Asha Varma** | Brackenwell founder and CTO | 10, 12, 14 |
| **Dan Hartley** (TKS) | Born 1988; process valves engineer; Project Ashlar (60% of his time; £72,000); redundant 30 September GY3 (statutory £9,012; holiday pay £3,800; PENP £25,000; ex gratia £60,000 incl. £10,000 pension contribution); interviewed in the GY5 functional analysis ("the drawings tell you what to make, not how to make it run": invented); later working elsewhere (left open) | 1, 5, 7, 10, 27, 31 |
| **Jess Hartley** (TKS) | Sells Ridgeway Holdings to TPLC for £4.5m on 1 April of the Ridgeway year (stamp duty £22,500; TPLC base cost £4,522,500; her gain £4,338,000); MD of RC for two years (£90,000; retention bonus £60,000 paid 1 April RY+2, deductible £30,000 in each of AP2 and AP3) | 31 |
| **Ridgeway Holdings Ltd / Ridgeway Cycles Ltd** (TKS) | RH passive (CTA 2010 s 18F; holds only RC shares, no cash) → RC (Skipton; Dublin branch; 31 March year end; UK profit about £400,000; branch about £200,000). RC: AP1 QIP divisor 1, not large; AP2 large but within the reg 3(5) grace; QIPs from AP3 (4 × £25,000). **RC elects under s 18A during AP1, effective 1 April RY+1** (nil opening negative amount; saving £25,000 a year before up to £15,000 CIR and £5,000 Pillar Two interaction costs). Brand and customer relationships £0.8m: DTL £200,000. SAO from AP2 | 31 |
| **Vallaria; Marrovia** | Invented countries. Vallaria: CT 20%; OECD-style treaty (interest 10%, dividends 15% (TKS); royalties 5%; 12-month construction PE; older dependent agent wording; MLI-style preamble and PPT: R29). Marrovia: CT 9%; no treaty; royalty withholding 30% (TKS); treats Undertow-type notes as equity (invented); no domestic minimum tax | 22–30 |

**Story-time rule:** Group Years (GY1 = Tarnmoor's year to 31 December in which Calder joins on 1 April), never calendar years; the Ridgeway year ("RY") is "some years later", after GY7. Exchange rate €1.15 per £ is assumed for illustration only.

### 1C. Stale planning figures superseded (do not use)

| Planning figure (starting bible, plan or ledger) | As built | Authority |
|---|---|---|
| Calder "very large in its first group AP"; QIPs months 3, 6, 9, 12; GY1 QIP divisor 9 (£166,667 / £2,222,222) | Large, not very large (divisor 1); 4 × £187,500 in months 7, 10, 13, 16 on CT before RDEC; 31 December companies' GY1 QIP divisor 8 (£187,500 / £2,500,000); divisor 9 is the marginal relief count | R1, R2 |
| QIPs computed on net CT after RDEC | RDEC not taken into account (CIRD89870) | R2 |
| TEL GY1 TTP £9.71m, CT £2,427,500 | TTP £10,535,000; CT £2,633,750 | R3 |
| TEL GY2 TTP £8.08m, CT £2,020,000, QIPs 4 × £505,000; group relief £17.92m | TTP £8,905,000; CT £2,226,250; QIPs 4 × £556,562.50; group relief £17,095,000 | R3 |
| TPLC surrenders whole excess ME (£5.9m / £6.3m); total to TEL £12.49m (GY1) | £5,075,000 / £5,475,000 (s 105(3A)); total £11,665,000 (GY1); £825,000 a year stranded | R3 |
| Group ETR GY2 24.18% (£24,179k) | 24.39% (£24,385k) | R3 |
| CIR GY3: ANTIE £24.35m, reactivation £1.96m, c/f £2.55m; Calder's £6.0m credit possibly excluded (reactivation £0.16m) | As filed: ANTIE £24.44m, ANGIE £31.64m, reactivation £1.87m, c/f £2.64m; revised (GY6): aggregate £89.7m, allowance £26.91m, reactivation £2.47m, c/f £2.04m; £6.0m credit stays in | R4, R5, R20 |
| TES lease assignment gain £351,200; TES GY3 net gains £651,200 | £189,000 (assumed indexation 0.250); £489,000 | R19 |
| TES GY4 lease grant part-disposal cost £500,000 or £337,209 | £290,000 (CG70960); gain £870,000 | R19 |
| Helmside GY4 consortium surrender £585,000 | £536,250 (s 155 arrangements from 1 December GY4) | R21 |
| Brennock's stamp duty £240,000 | £270,000 (cash £48.0m + earn-out cap £6.0m) | R22 |
| BSL stamp duty £111,000 | £120,000 (+ £9,000 on the convertible notes) | R22 |
| BSL RDEC surrender £486,000 | £600,000 (step 2 £114,000 + step 5 £486,000) | R7 |
| BSL losses restricted under Part 14 Ch 2A | Part 14 Ch 2 (s 673); Ch 2C bar to 31 December GY7 | R8 |
| TFL swap: "Disregard Regulations apply" | No reg 6A election; follows profit or loss | R6 |
| RCF "arrangement fee £0.3m" | Two fees of £300,000 | R13 |
| TEL GY2 special rate pool b/f £6.0m; WDAs on FYA balances in the year of spend | £7,720,000; FYA balances pooled after the WDA (s 58(5)) | R18 |
| Group AIA "for GY2" (parent's calendar year) | AIA year = year to 31 March (Interpretation Act) | R11 |
| TEL blocked Marrovian receipt: Part 18 claim within 2 years | CTA 2009 ss 173–175 | R23 |
| Tarnwater: TPLC's disposal "within the SSE in priority to s 192(2)(a)" | Market value disposal exempt under the SSE; s 192(2) is a shareholder-level rule | R24 |
| CFC regime "in force 17 July 2012" | Royal Assent; applies to CFC APs beginning on or after 1 January 2013 | R28.7 |
| Newey LJ "lead judgment" in *Development Securities* | Panel only; authorship unconfirmed | R28.1 |
| Group deductions allowance: TPLC "nominated each year" | Standing nomination; GAAS each AP | R9 |
| Exam-intel trap 15 (include foreign-incorporated UK residents for SAO) | Wrong for SAO (UK incorporation) | R10 |
| QIP interest 6.25% looked like Bank Rate + 1% | Bank Rate + 2.5% since 6 April 2025 (6.25% correct) | R26 |
| R11 guidance: RC shares the AIA with 31 December periods "ending nine months earlier" | Three months earlier (review G; corrected in the rulings file) | review G |

---

## 2. Glossary (merged, as built)

All terms explained in the book, from the seeded list and every chapter's notes, deduplicated and in alphabetical order. "Chapter" is where the term is explained in full; other chapters recap it in a line. Meanings are FY2026 law. TKS terms recapped only are marked (TKS n). Rn = continuity ruling.

| Term | Meaning (FY2026 law) | Chapter |
|---|---|---|
| 10-day rule | Company share matching: acquisitions in the 10 days before a disposal matched first, kept out of the pool (TKS 16, 23) | 18 (recap) |
| 40% first-year allowance | CAA s 45U: 40% on new, unused main-rate plant from 1 January 2026; any business; leasing allowed (except overseas); no special balancing charge | 8 |
| 40/55 joint venture test | A dividend from a company controlled by two persons is in the controlled-company exempt class if the recipient holds at least 40% and the other at least 40% but no more than 55% (s 931E); the CFC "40% rule" is a parallel test | 15 (25, 26) |
| 75% exemption (CFC) | Chapter 9: 75% of qualifying loan relationship profits exempt, so 25% passes (6.25% effective at 25%) | 26 |
| Accelerated payment notice | Notice requiring disputed tax in an avoidance case to be paid within 90 days | 4 |
| Accounting profits (CFC) | Exemption for profits ≤ £500,000 with non-trading income ≤ £50,000 measured on accounting profits (ignoring TP differences ≤ £50,000) | 26 |
| Additional information form | Form required with every R&D claim from 8 August 2023 (SI 2023/813; Sch 18 para 83EA, paragraph number unverified) | 10 |
| Adjusted net group-interest expense (ANGIE) | Group's net third-party interest per the consolidated accounts, adjusted (s 413); includes finance lease charges | 28 |
| Advance pricing agreement | Written agreement with HMRC under TIOPA Part 5 fixing how TP (or PE attribution) applies for future periods | 27 |
| Advance Tax Certainty Service (major projects) | FA 2026 ss 266–274: binding clearance for up to 5 years for qualifying investment projects of at least £1bn UK expenditure; service launched 1 July 2026 (secondary); TP, valuation, purpose tests and GAAR outside its published scope | 2 |
| Affected persons | The two parties to provision under TIOPA s 147 | 27 |
| Aggregate net tax-interest expense (ANTIE) | Sum of UK group companies' net tax-interest expense (s 390) | 28 |
| Aggregate net tax-interest income (ANTII) | Sum of UK group companies' net tax-interest income | 28 |
| Allocation of deductions | TIOPA s 52: a company may allocate deductions to profits as it thinks fit, to maximise credit relief | 24 |
| Allowable deductions (company gains) | TCGA s 38 costs; enhancement must be reflected in the asset at disposal | 16 |
| Allowance buying | CAA Part 2 Ch 16A (ss 212A–212S, from 21 July 2009): a relevant excess of allowances cannot be used by new owners after a qualifying change | 9 |
| Allowance statement | The SBA statement a buyer needs to continue claiming | 9 |
| Alternative amount election | Election in a connected sale or succession to use a lower amount (CAA 2001 s 569) | 9 |
| Alternative dispute resolution | HMRC mediation in disputes; non-statutory; no effect on appeal rights (grade 3) | 4 |
| Amortised cost basis | Loan relationship measurement using the effective interest method; compulsory for connected companies relationships | 12 |
| Anti-diversion rule (branch) | ss 18G–18I: branch profits diverted from the UK excluded from exemption, aligned with CFC tests | 25 |
| Anti-fragmentation | No preparatory or auxiliary exception where complementary activities of closely related persons form a cohesive operation (s 1143(2A)–(2C)) | 23 |
| Appropriate tax accounting arrangements | The SAO's main duty: arrangements enabling accurate tax returns | 4 |
| Appropriation in transit (s 173) | Stock to capital (or the reverse) on an intra-group transfer treated through the s 161/s 173 rules | 17 |
| Appropriation to stock | TCGA s 161: capital asset moved to trading stock is deemed sold at market value unless an election is made | 16 |
| Arbitration (MLI Part VI) | Mandatory binding arbitration of unresolved MAP cases where both states opted in (UK–Ireland: yes) | 24 |
| Arm's length principle | Related parties' profits computed as if independent parties had dealt on comparable terms | 27 |
| Arrangements (group relief) | Arrangements for a change of ownership can end a group or consortium relationship for relief purposes before completion | 15 |
| Assignment (lease) | Transfer of an existing lease; never a premium income event; short-lease status judged at that date | 16 |
| Assimilated law | Retained EU law renamed by the REUL Act 2023; supremacy of EU law ended at the end of 2023 | 2 |
| Associated companies leaving together | s 179 exception: no degrouping charge where Condition A or B (relationship from acquisition to leaving) is met | 17 |
| Associated company | Company under common control (CTA 2010 ss 18E–18F, 450–451); dormant and passive holding companies ignored. For marginal relief it counts if associated at any time in the AP; for QIPs HMRC counts associates on the day before the AP begins (CTM92530; R1) | 3 (recap; 1, 31) |
| Associated person (CCO) | Employee, agent or other person performing services for or on behalf of the body | 4 |
| Assumed taxable total profits | A CFC's profits computed as if it were UK resident under the CT assumptions | 26 |
| Augmented profits | TTP plus exempt distributions from non-51% companies (TKS 20) | 3 (recap) |
| Authorised OECD approach | The 2010 OECD Report's method of attributing profits to a PE as a separate and independent enterprise | 23 (introduced 2) |
| Available total profits | Claimant's total profits after its own reliefs (s 140; s 137(4)(b)) | 15 |
| Badges of trade (company context) | Indicators distinguishing trading from investment; for groups, property, treasury and holding activities (TKS 11) | 7 |
| Balancing payment (TP) | Payment between parties reflecting a TP adjustment; not taxable or deductible up to the adjustment | 27 |
| Beneficial ownership | Treaty concept: the recipient entitled to the income in substance (*Indofood*); also lost by a company on winding up (*Ayerst*) | 24 (14) |
| Branch exemption election | CTA 2009 s 18A election to exempt all foreign PE profits and losses; irrevocable; from the next AP (TKS 26) | 25 |
| Business entertainment use | Plant used for business entertainment does not qualify (s 269) | 8 |
| Business restructuring (TP) | Cross-border reorganisation of functions, assets and risks requiring arm's length compensation | 27 |
| "But for" apportionment | Attributing loan relationship debits to an unallowable purpose to the extent they would not have arisen but for it (s 441; *BlackRock*, all debits) | P, 12 |
| Capital investment from the UK | CFC Ch 5 test (s 371EC): non-trading finance profits from funds derived from UK connected capital | 26 |
| Capital reduction demerger | Demerger effected by a reduction of capital and new holding company; considered and rejected for Tarnwater | 19 |
| Carrying amount | The amount at which an asset or liability is recognised in the balance sheet | 6 |
| Central management and control | Where the highest level of a company's management is actually exercised; determines residence of a non-UK-incorporated company | 22 |
| Change in ownership | More than half of the ordinary share capital acquired (CTA 2010 s 719 conditions A–C) | 14 |
| Change of accounting basis | Change of accounting policy or of view of the law between periods; adjustment on day one of the new basis (CTA 2009 ss 180–187) | 5 |
| Change of accounting policy | A change in the accounting framework or policy (not an error correction or a change required by new legislation); triggers the Ch 14 adjustment (BIM34050) | 5 |
| Changes to legislation box; outstanding effects | legislation.gov.uk's banner saying how far a revised text is up to date and which amendments are not yet applied | 2, 34 |
| Chargeable company (CFC) | UK resident company with a relevant interest whose apportioned share plus connected and associated persons' shares is at least 25% | 26 |
| Chargeable intangible asset | An intangible fixed asset whose realisation would be within Part 8 | 11 |
| Chargeable payment (demerger) | Payment within 5 years of an exempt demerger, not for genuine commercial reasons; taxed as income and revives s 179 | 19 |
| Chose in action | A legal right (for example to unascertainable future consideration) that is itself a chargeable asset (*Marren v Ingles*) | 18 |
| Claim notification (R&D) | Advance notice required for a first claim or after a 3-year gap, within 6 months after the period of account ends | 10 |
| Clawback (SDLT) | Withdrawal of group, reconstruction or acquisition relief when the purchaser leaves the group or control changes within 3 years | 21 |
| Clogged loss | Loss on a disposal to a connected person usable only against gains on disposals to the same person (s 18) | 16 |
| Closely related | One person controls the other or both are under common control (s 1143(2CA)); a closely related agent acting exclusively for the group is not independent | 23 |
| Closure notice | HMRC's notice ending an enquiry and stating its conclusions and amendments | 3 |
| COAP Regulations; prescribed amounts | SI 2004/3271: spreading of prescribed loan relationship transition amounts over 10 years (amended text not on legislation.gov.uk) | 5 |
| Commentary (OECD) | The OECD's explanation of the Model; persuasive on treaty meaning (*Fowler*); a statutory aid for the FA 2026 PE rules | 2, 24 |
| Company with investment business | Company whose business consists wholly or partly of making investments (s 1218B) | 13 |
| Comparable uncontrolled price | TP method comparing the controlled price with prices between independent parties | 27 |
| Compensating adjustment | Claim by the disadvantaged UK person to be taxed on the arm's length basis (s 174) | 27 |
| Competent authority agreement | Under MLI Art 4, the two tax authorities settle the treaty residence of a dual resident company | 22 |
| Conditions A–D (CFC gateway) | Ch 3 entry conditions that switch off the gateway (no UK-managed assets or risks, etc.) | 26 |
| Connected companies relationship | Loan relationship between companies connected (control) at any time in the AP | 12 |
| Consortium conditions 1–3 | The ownership routes on which a consortium claim can be based (claimant or surrenderer consortium-owned, or via a link company) | 15 |
| Consortium; consortium company; member | A company not a 75% subsidiary, at least 75% owned by companies each owning at least 5% (the members) | 15 |
| Contingency principle (stamp duty) | Contingent consideration with a stated maximum is charged on the maximum; no refund if less is paid (STSM021120; R22) | 20, 21 |
| Contracted-out R&D | Merged scheme: the company that decides to undertake the R&D claims; 65% of unconnected contractor payments (CIRD138000) | 10 |
| Contribution allowance | CA for a person contributing to another's capital expenditure for its own trade | 9 |
| Control group; structured arrangement | Hybrids: persons consolidated or 50% connected; arrangements priced for or designed to secure the mismatch (s 259CA) | 29 |
| Corporate criminal offence | Failure to prevent facilitation of UK or foreign tax evasion by an associated person (Criminal Finances Act 2017 ss 45–46) | 4 |
| Corporate interest restriction | TIOPA Part 10: limits a worldwide group's UK net interest deductions | 28 |
| Corporate loss refreshing (Part 14B) | TAAR (FA 2015; APs beginning on or after 18 March 2015) where the expected tax value of arrangements exceeds their non-tax value | 14 |
| Corporate partner | A company that is a partner in a firm; CT rules compute its share (CTA 2009 s 1259) | 15 |
| Corporate rescue exception | No deemed release (s 361D) or release credit (s 322 condition E) where release follows a material risk of insolvency within 12 months; for s 361D, release within 60 days | 12 |
| Corporate transformation | The LCG syllabus's term for reorganisations, acquisitions, disposals and demergers | 20 |
| Corresponding adjustment | The other state's reduction of tax following a TP adjustment (Art 9(2)) | 24, 27 |
| Cost plus | TP method: supplier's costs plus an arm's length mark-up | 27 |
| Counteraction notice | HMRC notice counteracting a CT advantage under Part 15 (within 6 years) | 19 |
| Country-by-country report | Annual report of an MNE group (≥ €750m) showing revenue, profit, tax and activity by jurisdiction | 27 |
| Covenant | A lender's protection promised by a borrower (financial and other undertakings); hypothesised covenants were the heart of *BlackRock*'s TP limb | P |
| Covered taxes; GloBE income; ETR (GloBE) | Taxes counted for Pillar Two; the GloBE measure of profit; ETR = covered taxes ÷ GloBE income per jurisdiction | 30 |
| Credit limit (R × IG) | TIOPA s 42: credit cannot exceed the UK rate times the income or gain after allocated deductions, source by source | 24 |
| Creditable tax (CFC) | Foreign tax and UK tax attributable to income in chargeable profits, apportioned (s 371PA) | 26 |
| CT advantage; circumstances C, D, E | Part 15 transactions in securities: the counteracted advantage and the three statutory circumstances (A repealed) | 19 |
| CT exit charge payment plan | TMA Sch 3ZB: 6 equal annual instalments for an eligible company migrating to a relevant EEA state | 22 |
| CT600B | Supplementary pages for CFCs, foreign PE exemption, and hybrid and other mismatches | 26, 29 |
| CT61 | Quarterly return accounting for income tax deducted by a UK company; due within 14 days | 23 |
| Current tax; deferred tax | Tax payable for the period; accounting measure of future tax effects of timing or temporary differences | 6 |
| Customer Compliance Manager | HMRC Large Business official assigned to the largest businesses (around 2,000; most with turnover over £200m) (GOV.UK) | 1, 4 |
| De minimis amount (CIR) | £2m a year: interest capacity is never less than this | 28 |
| Debt-for-equity exception | No release credit where a debt is released in consideration of shares (s 322(4)); s 361C equity-for-debt exception to deemed release | 12 |
| Deduction/non-inclusion | Hybrid outcome: a payment deductible for the payer is not included as ordinary income by the payee | 29 |
| Deductions allowance (group) | £5m a year shared by the group under Part 7ZA, only if all members are covered by a nomination of one company (a standing document, CTM05180); a group allowance allocation statement for each AP (CTM05200) | 14 |
| Deemed management expenses | Capital allowances and certain other amounts treated as management expenses (Part 16 Ch 3; s 1233) | 13 |
| Deemed release | s 361: a company buying a connected-to-be company's debt below its carrying value is treated as releasing the shortfall, taxing the debtor | 12 |
| Degrouping charge | TCGA s 179: company leaving within 6 years with an asset acquired at no gain, no loss is deemed to have sold and reacquired it at market value at acquisition; since 19 July 2011 added to the share-sale consideration where it leaves on a share disposal (s 179(3D)), so the SSE can cover it | 17 |
| Degrouping register | A tax function's record of intra-group transfers with 6-year (gains) and 3-year (SDLT) diary dates | 17, 21 |
| Demerger (direct, indirect, cross-border division) | Exempt distribution splitting trading activities between shareholders (CTA 2010 ss 1076–1078) | 19 |
| Demerger clearance and return | s 1091 advance clearance (30 days; not retrospective); return within 30 days of the distribution (CTM17260) | 19 |
| Dependent agent; principal role | Domestic PE where a person habitually concludes, or plays the principal role leading to, contracts routinely concluded without material modification (s 1141(1)(b), FA 2026) | 23 |
| Depreciating asset; holdover | Asset with a life of 60 years or less; roll-over into it is a holdover crystallising within 10 years (s 154) | 16 |
| Depreciatory transaction | Transaction reducing the value of shares in a group company; losses reduced (s 176); no motive test | 17 |
| Derivative contract | Option, future or contract for differences meeting the accounting condition; taxed under CTA 2009 Part 7 | 12 |
| Discovery assessment | Assessment outside the enquiry window: 4 years, 6 if careless, 20 if deliberate (recap TKS 5) | 3 |
| Disguised interest | A return economically equivalent to interest taxed as a loan relationship profit (ss 486A–486E) | 12 |
| Disposal value statement requirement | Fixtures condition requiring the seller's disposal value to be fixed by election or tribunal | 9 |
| Disregard Regulations | SI 2004/3256: since 2015 regs 7–9 bring hedging derivatives in on a hedging basis only by reg 6A election or in HMRC's automatic cases (list not exhaustive); otherwise the derivative follows profit or loss (R6). TFL: no election | 12 |
| Disregarded period | Part of a company's period outside the worldwide group's period of account; time apportionment usually suitable | 28 |
| Distribution (s 1000 categories) | Dividends and other distributions in respect of shares (A–H) | 19 |
| Dividend stripping; depreciatory transaction | Value taken out of a subsidiary before a share loss; losses reduced (s 176–177) | 17 |
| DOTAS; hallmark | Disclosure of tax avoidance schemes; the descriptions that make arrangements notifiable (TKS 3) | 4 |
| Double deduction | Hybrid outcome: one amount deductible in two jurisdictions | 29 |
| Double reasonableness | GAAR test: arrangements whose entry or carrying out cannot reasonably be regarded as a reasonable course of action (FA 2013 s 207) | 4 |
| DTA tax avoidance arrangements | ITA 2007 s 917A: treaty royalty rate denied for connected payees with a main purpose of obtaining it | 23 |
| Dual inclusion income | Income taxed in both relevant jurisdictions, against which hybrid deductions may be set | 29 |
| Dual resident company | Resident in the UK and another state; treaty tie-breaker decides; s 18 makes a treaty non-resident non-resident for UK purposes | 22 |
| Dual resident investing company | Dual resident non-trading company barred from group relief surrender and NGNL receipt | 15 |
| Due diligence; tax deed; warranty; indemnity | Acquisition protections for pre-completion tax risks | 20 |
| Earn-out; s 138A earn-out right | Deferred, usually unascertainable consideration; if in shares, a deemed security unless elected out | 18 |
| Effective 51% subsidiary | More than 50% of profits available for distribution and of assets on a winding up (gains groups) | 17 |
| Effective tax mismatch outcome (UTPP) | The corresponding tax is less than 80% of the UK CT on the provision; exactly 80% is not a mismatch (INTM489135) | 30 |
| Effects A and B (potential advantage) | TP: the actual provision gives smaller UK profits or larger losses than the arm's length provision | 27 |
| Eligible company (exit plans) | Company with TFEU art 49 / EEA art 31 rights migrating to a relevant EEA state | 22 |
| Employee benefit contribution | Contribution to an EBT or similar; deduction only as qualifying benefits are provided within the time limits | 7 |
| Enhancement expenditure | Capital expenditure reflected in the state or nature of the asset at disposal (TCGA s 38(1)(b)) | 16 |
| Enquiry window | 12 months from delivery; for a member of a group other than a small group, 12 months from the filing date (Sch 18 para 24) | 3 |
| Equity note | Perpetual or very long security held by an associated or funded company: its interest is a distribution (CTA 2010 s 1015 Condition E) | 29 |
| ERIS (enhanced R&D intensive support) | Loss-making R&D-intensive SMEs: 86% extra deduction; 14.5% payable credit (TKS 21) | 10 |
| ETR reconciliation | IAS 12 para 81(c) reconciliation of the tax charge to profit at the applicable rate (two forms allowed) | 6 |
| Excepted loan relationship arrangements; preliminary notice | UTPP exception for provision wholly from loan arrangements; HMRC's first step, within 4 years | 30 |
| Excepted payment | Interest payments outside the s 874 duty (s 930 reasonable belief; ss 933–937) | 23 |
| Excluded territories (CFC) | Exemption for CFCs in listed territories with limited "bad" income | 26 |
| Exempt ABGH distributions | Distributions excluded from the s 1222 rule reducing management expenses (s 1222(4)) | 13 |
| Exempt distribution (demerger) | A demerger distribution meeting conditions A–M (ss 1081–1085) | 19 |
| Exempt period (CFC) | First 12 months after a company first comes under UK control | 26 |
| Exit charge | Deemed disposal at market value on ceasing UK residence (TCGA s 185 and parallels) | 22 |
| Expense relief | Foreign tax deducted as an expense instead of credited (TIOPA s 27 election; s 112) | 24 |
| Expenses of a capital nature (management expenses) | Excluded from s 1219 relief; *Centrica*: the trader's capital test applies (s 1219(3)(a)) | 13 |
| Filing date | Generally 12 months after the end of the period of account; for periods over 18 months, 30 months after its start (FA 1998 Sch 18 para 14; CTM93040) | 3 |
| Find Case Law | The National Archives' free judgments service, launched April 2022 | 2, 34 |
| Fixed ratio method; fixed ratio debt cap | Interest allowance = lower of 30% tax-EBITDA and ANGIE plus excess debt cap | 28 |
| Fixed value requirement; pooling requirement | Fixtures conditions for a buyer's claim (ss 187A–187B) | 9 |
| Fixed-rate election (intangibles) | 4% a year writing-down election (s 730), 2 years, irrevocable | 11 |
| Follower notice; corrective action | Notice after a final judicial ruling in another case requiring the taxpayer to settle; failure to take corrective action attracts a penalty (30%, 20% in one case) | 4 |
| Frozen gain | Gain held over on a QCB exchange that crystallises on disposal (s 116(10)) | 18 |
| Full exemption (Ch 9) | 100% exemption for qualifying loan relationship profits funded from qualifying resources | 26 |
| Full expensing | 100% FYA for companies on new main-rate plant (s 45S) (TKS 12) | 8 |
| Full treaty territory | Territory with a treaty containing a non-discrimination article covering PEs (s 18R) | 25 |
| Functional analysis | Identifying functions performed, assets used and risks assumed by each party | 27 |
| Functional currency; designated currency | Currency of the primary economic environment; designated currency election for UK resident investment companies (CTA 2010 Part 2 Ch 4, ss 5–17; s 9A Condition B not verified) | 5 |
| FYA balance pooling (s 58(5)) | Expenditure on which an FYA is made joins the pool only after the period's WDA, drawing WDA from the next period (R18) | 8 |
| GAAP; FRS 101; FRS 102; IFRS | Accounting frameworks; FRS 101 applies IFRS recognition with reduced disclosure; FRS 102 based on IFRS for SMEs | 5 |
| GAAR Advisory Panel | Independent panel whose opinion HMRC must obtain before counteracting under the GAAR (s 211) | 4 |
| Gains group; principal company | Principal company and its 75% (and effective 51%) subsidiaries (s 170) | 17 |
| Gateway (CFC) | Chapters 3–8 deciding which profits pass through to the charge | 26 |
| Global anti-base erosion (GloBE) rules | OECD Pillar Two rules implemented by MTT and DTT | 30 |
| GloBE information return | Pillar Two return; 15 months (18 for the first) | 30 |
| Gross profits (s 105) | The surrendering company's profits before the s 99 amounts; with apportioned CFC profits they form the profit-related threshold | 15 |
| Group (definitions family) | Different tests for different regimes (51%, 75%, 75% + effective 51%, worldwide, control) | 1 |
| Group allowance allocation statement | Statement by the nominated company allocating the £5m deductions allowance | 14 |
| Group payment arrangement | One UK group company pays CT on behalf of 51% group members with the same accounting date (TMA s 59F) | 3 |
| Group ratio debt cap; excess debt cap | Caps on the allowance; excess debt cap carried forward to the next period | 28 |
| Group ratio method | Interest allowance by the group's third-party interest/EBITDA ratio (election) | 28 |
| Group relief for carried-forward losses (Part 5A) | Post-1 April 2017 carried-forward losses surrendered to group members, subject to restrictions (s 188BE: not where the company could use them itself) | 15 |
| Group roll-over | s 175: gains groups' trades treated as one for roll-over | 17 |
| Group tax function | The company's in-house tax team | 1 |
| Guarantee (TP); implicit support | FA 2026: a participator guarantee enabling borrowing is never arm's length (s 153A); implicit support is not a guarantee | 27 |
| Hallmark; scheme reference number | DOTAS descriptions (confidentiality, premium fee, etc.) that make arrangements notifiable; the number HMRC issues to a notified scheme | 4 |
| Head of group (tax strategy) | The UK company (or top UK company) that publishes the group tax strategy (FA 2016 Sch 19) | 4 |
| Hire purchase (CAs) | Buyer treated as owner (s 67); capital element qualifies when the asset is brought into use | 8 |
| Hive-down | Transfer of a trade and assets into a new subsidiary before selling its shares | 20 |
| Hybrid capital instrument | Debt with equity features whose coupons stay deductible if the issuer elects within 6 months (CTA 2009 s 475C; ineffective with a tax main purpose) | 29 |
| Hybrid entity; hybrid instrument | Entity seen as a person in one territory and transparent in another; instrument treated differently by two territories | 29 |
| Hybrid rate (WDA) | Day-weighted rate for periods straddling 1 April 2026, rounded up to 2 decimal places | 8 |
| Hybrid transfer; hybrid payer; hybrid payee | Repo-type transfers; entities seen differently by two territories as payer or payee (reverse hybrid) | 29 |
| IFRS 2 charge | Accounting charge for share-based payments; not deductible as such; Part 12 relief instead (*NCL* for recharged amounts) | 7 |
| Impairment; release | Writing down of a loan asset; forgiveness of a debt (credits and debits governed by the connected companies rules) | 12 |
| Imported mismatch | UK deduction denied where it funds a hybrid mismatch elsewhere not capable of counteraction | 29 |
| Income element (lease premium) | Part of a premium for a lease of 50 years or less taxed as property income: P × (50 − (n − 1))/50 (CTA 2009 ss 217–221); the capital part is a part disposal using HMRC's method (CG70960) | 16 |
| Income inclusion rule | Pillar Two rule taxing a parent on low-taxed subsidiaries' profits | 30 |
| Income not otherwise charged | CTA 2009 Part 10 Ch 8 sweeping charge | 7 |
| Independent agent | Agent of independent status acting in the ordinary course of its business: no PE (s 1142) | 23 |
| Indexation (frozen) | Relief for RPI to December 2017 only; cannot create or increase a loss | 16 |
| Indexed pool | Pre-2018 share pool with indexation frozen at December 2017 (s 110; unrounded ratio, CG51621) | 18 |
| Informal strike-off | Dissolution with a pre-dissolution distribution up to £25,000 treated as capital (s 1030A; from 1 March 2012) | 19 |
| Initial recognition exception; single-transaction amendment | No deferred tax on initial recognition of certain assets and liabilities; narrowed in May 2021 for transactions giving equal temporary differences (periods from 1 January 2023) | 6 |
| Intangibles group; tax-neutral transfer | 75% group for Part 8; transfers between members at tax written-down value (s 775) | 11 |
| Interest allowance; interest capacity | Basic allowance plus net interest income; capacity adds available unused allowance and is never below £2m | 28 |
| Interest reactivation cap | Interest allowance less ANTIE, floored at nil (TIOPA s 373(3)); unused allowance b/f does not add to it | 28 |
| Interest restriction return (full; abbreviated) | CIR return; full needed to allocate, reactivate or carry forward; abbreviated election kills unused allowance | 28 |
| International Controlled Transactions Schedule | Planned annual TP transaction report (FA 2026 s 48; regulations not yet made) | 27 |
| International movement of capital | Reportable events over £100m involving foreign subsidiaries' shares or debentures (FA 2009 Sch 17) | 25 |
| Investee trading requirement | SSE: investee must be trading (and afterwards only if the buyer is connected) | 18 |
| Joint venture look-through (SSE) | Holdings in JV companies looked through for the trading tests | 18 |
| Juridical v economic double taxation | Same income taxed twice in the same person's hands v the same profits taxed in two persons' hands | 24 |
| L − A restriction | Part 22 Ch 1: losses transferred reduced where liabilities left behind exceed assets left plus consideration | 19 |
| Large company; very large company | QIP categories: augmented profits over £1.5m / £20m, each divided by 1 + associated companies counted on the day before the AP begins and time-apportioned; large companies get a first-year grace (profits ≤ £10m divided, not large in previous 12 months); very large never | 3 |
| Larger company | The book's working term (not statutory) for a company or group above one or more thresholds that switch on extra regimes | 1 |
| LBTT | Scotland's land tax; group relief LBT(S)A 2013 Sch 10; non-residential 0% / 1% / 5% (£150,000 / £250,000) | 21 |
| Lease percentage table | Sch 8 para 1 curve restricting the cost of a lease with 50 years or less unexpired | 16 |
| Legislation Day; TIIN | Summer publication of draft Finance Bill clauses (13 July 2026); tax information and impact note | 33, 34 |
| Link company | A consortium member through whose group another company claims or surrenders consortium relief | 15 |
| Linked enterprise; partner enterprise | SME test aggregation: linked (control) in full; partner (25%–50%) proportionately | 10 |
| Linked person | Part 14 Ch 6 aggregation rule for changes in ownership | 14 |
| Linking rule | No dividend exemption where the payer obtained a deduction abroad (CTA 2009 s 931D(c)) | 29 |
| Litigation and Settlement Strategy | HMRC's published framework for resolving tax disputes | 4 |
| Loan capital exemption; convertible loan capital | FA 1986 s 79(4) exemption for loan capital; denied by s 79(5) where the holder has a conversion right | 21 |
| Local File; Master File | TP documentation required for €750m groups under SI 2023/818 | 27 |
| Long funding lease; funding lease | Plant lease (over 7 years) meeting a funding test; the lessee claims CAs | 9 |
| Long-life asset | Plant with a life of 25 years or more, above the £100,000 limit divided by 1 + associated companies; special rate pool; can still take the 50% FYA (CA23174ac) | 8 |
| Loss buying; gain buying | Acquiring a company for its losses or gains to set against group amounts (TCGA ss 184A–184I) | 17 |
| Low profit margin exemption | CFC exempt if accounting profit before interest ≤ 10% of relevant operating expenditure | 26 |
| Low profits exemption | CFC exempt if profits ≤ £50,000, or ≤ £500,000 with non-trading income ≤ £50,000 | 26 |
| Low value-adding services | Supportive services priced by a simplified approach at cost plus 5% | 27 |
| Major change in the nature or conduct of a trade; major change in the business | Change of customers, markets, products or (Ch 2A) scale within the statutory window after a change in ownership | 14 |
| Management expenses | Expenses of managing an investment business, not capital, deducted from total profits (s 1219) | 13 |
| Marginal rate (26.5%) | The effective rate on the slice of profits between the marginal relief limits; not the rate applied to the whole profit (M26 examiners) | 7 |
| Mark-to-market spreading election | CTA 2009 s 186: spreading of a change-of-basis adjustment over 6 periods on a move to mark to market | 5 |
| Marking guide; banded scripts | Examiners' allocation of marks (0.5–1 per point); CIOT example scripts by mark band (M24 onward) | 32 |
| Matched interest (CFC) | CFC Ch 9: the excess of the UK share of the CFC's matched interest profits over the group's ANTIE is exempt (s 371IE as substituted by F(No.2)A 2017); nil for TCM | 26 |
| Merged scheme (RDEC) | 20% taxable R&D expenditure credit for APs from 1 April 2024 | 10 |
| Migration | Company ceasing to be UK resident | 22 |
| Migration time | The moment a company ceases to be UK resident; ends an AP | 22 |
| Mixed membership partnership | Partnership with individual and non-individual partners; ITTOIA s 850C / CTA 2009 s 1264A | 15 |
| Mixer cap | Underlying tax relief capped at (D + PA) × M% (s 58 Step 3) | 24 |
| Most appropriate method | The TP method best suited to the facts (TPG Ch II) | 27 |
| Multilateral Instrument | OECD convention modifying treaties (UK in force 1 October 2018) | 24 (2) |
| Multinational payee; transparent establishment | Payee whose PE income is untaxed; PE treated as transparent (Chs 8–9 of Part 6A) | 29 |
| Multinational top-up tax; domestic top-up tax | UK Pillar Two taxes (F(No.2)A 2023 Parts 3 and 4) | 30 |
| Mutual agreement procedure | Treaty process between competent authorities to resolve taxation not in accordance with the treaty | 24 |
| Nexus fraction | Patent Box restriction for acquired IP and connected-party R&D | 11 |
| No gain, no loss transfer | Intra-group disposal at a value giving neither gain nor loss (s 171) | 17 |
| Nominated company (GPA) | The UK group company that pays CT for members of a group payment arrangement (TMA s 59F); liability stays with each company | 3 |
| Non-consenting company | Company that has not consented to the reporting company's appointment; may elect for pro rata allocation (s 375) | 28 |
| Non-derecognition liability | CTA 2009 s 1305B (FA 2026 s 63), APs beginning on or after 26 November 2025 | 5 |
| Non-discrimination | Treaty article barring less favourable taxation of nationals, PEs and foreign-owned companies (*FCE Bank*) | 24 |
| Non-resident landlord scheme | Withholding from rents to non-resident landlords unless HMRC approves gross payment; continues for companies after 6 April 2020 | 23 |
| Non-Statutory Clearance Service | HMRC's clearance route where there is genuine uncertainty; not for planning or avoidance; statutory clearance takes precedence | 2 |
| Non-trading finance profits | CFC Ch 5 profits from finance not part of a trade | 26 |
| Non-trading member (s 175(2B)) | A group member that does not trade can roll over if the asset was used only for a group trade | 17 |
| Notice of consent | Surrendering company's consent to a group relief claim; for consortium claims all members consent (Sch 18 para 70); cannot be amended | 15 |
| Notional capital allowances | Branch exemption profits computed with notional CAs (s 18C) | 25 |
| Notional tax deduction (RDEC) | Step 2: unused credit reduced at 25% (main rate companies including marginal relief) or 19% | 10 |
| NTLR deficit | Excess of non-trading loan relationship debits (TKS 22) | 12 |
| OECD Model Tax Convention; Commentary | Model treaty and commentary; the 18 November 2025 version referred to by UK statute; the 2017 articles supplied in the exam | 2, 24 |
| Once out, always out | Safe harbour rule: a group that fails a transitional safe harbour cannot return to it | 30 |
| Online legislation (exam) | Croner-i or Tolley student legislation products in the exam; tags with section numbers or topic names only | 2, 32 |
| Opening negative amount | Branch exemption: net PE losses of the 6 years before the first exempt AP not matched by later PE profits, which must be matched before exemption bites (ss 18J–18N; INTM284020); the draft FB 2026-27 would repeal it (proposed) | 25 |
| Options realistically available | Business restructuring test: compensation is due where an independent party would have had a better option | 27 |
| Order in Council | The route by which a treaty takes effect in UK law (TIOPA 2010 ss 2, 5(2), 6) | 2 |
| Ordinary income (hybrids) | Income brought into account in computing taxable income at the full marginal rate; CFC-charged income may count (s 259BD) | 29 |
| Overlapping period | Period common to surrendering and claimant companies' APs while both in the group | 15 |
| Overseas restriction (R&D) | Overseas subcontractor and EPW costs excluded unless s 1138A conditions met | 10 |
| Ownership condition; tax condition (Part 22) | 75% common ownership at some time in the year before and on or within 2 years after the transfer (s 941); successor within the charge | 19 |
| Ownership proportion | Consortium: lowest of the member's share of shares, profits, assets and votes | 15 |
| Para 15A hive-down rule | SSE holding period treated as met where the assets were used in a group trade | 18 |
| Para 4ZA (SDLT) | Vendor-leaving rule: clawback after a later change of control of the purchaser (FA 2008 s 96) | 21 |
| Part 12 relief | Corporate deduction for employee share acquisitions: market value less amount paid | 7 |
| Part 14A; Part 14B | Transfer of deductions TAAR; carried-forward loss arrangement TAAR (tax value exceeds non-tax value) | 14 |
| Part disposal (A/(A+B)) | Cost apportioned by proceeds over proceeds plus value retained; on a lease grant HMRC uses the capital part over the full premium plus reversion (CG70960) | 16 |
| Participation condition | One party participates in the management, control or capital of the other, or both are under common participation | 27 |
| Passive holding company | Company with only 51% subsidiary shares and dividends passed on (CTA 2010 s 18F); ignored for associated companies | 31 |
| Past-owner cap | Buyer's fixtures claim limited to the past owner's disposal value (s 185) | 9 |
| Patent Box | Election to tax relevant IP profits at 10% via a deduction (CTA 2010 Part 8A) | 11 |
| Patent Box election | Election within 12 months after the filing date; 5-year bar after revocation (CIRD260100, 260110) | 11 |
| PAYE cap (RDEC) | Payable credit limited to £20,000 + 300% of relevant PAYE and NIC | 10 |
| Payment condition (R&D) | Expenditure counts only once paid (CIRD132000) | 10 |
| Payment for group relief | Payment not exceeding the amount surrendered: ignored for CT and not a distribution (s 183; s 188FA for Part 5A) | 15 |
| Pension spreading | Deduction of exceptional employer contributions spread over up to 4 periods (FA 2004 s 197) | 7 |
| Permanent difference | An item in profit never taxed or deducted; affects the ETR, never deferred tax | 6 |
| Permanent establishment | Fixed place of business or dependent agent through which a company carries on business | 23 |
| Persistent late filing | Third successive late CT return: £1,000 / £2,000 | 3 |
| Pillar Two | OECD global minimum tax at 15% | 30 |
| Pillar Two exception (IAS 12) | Mandatory exception from deferred tax on Pillar Two top-up taxes (IAS 12 paras 4A, 88A–88D; IASB 23 May 2023; UK endorsement 19 July 2023; FRS 101/102 July 2023) | 6 |
| Place of effective management | Older treaty tie-breaker test, replaced in modern treaties by competent authority agreement (MLI Art 4) | 22 |
| Point-in-time version | The text of a provision as it stood on a chosen date (legislation.gov.uk); does not show pending effects | 2, 34 |
| Post-transaction valuation check | Form CG34 agreement of a valuation before filing | 16 |
| Potential advantage (TP) | Smaller UK profits or larger losses from non-arm's length provision | 27 |
| Pre-entry loss | Capital loss realised before a company joined the group (Sch 7A) | 17 |
| Preamble (MLI Art 6) | Treaty statement that it is not intended to create opportunities for non-taxation | 24 |
| Premium; grant; reversion | Lump sum on the grant of a lease; creation of a lease out of a superior interest; the landlord's retained interest | 16 |
| Preparatory or auxiliary | Activities not creating a PE (s 1143) | 23 |
| Presumed carelessness (para 3C) | FA 2007 Sch 24 para 3C: inaccuracy presumed careless where TP records are not kept (F(No.2)A 2023 Sch 5) | 27 |
| Primary response; secondary response | Which jurisdiction neutralises a hybrid mismatch first | 29 |
| Principal purpose test | MLI Art 7: treaty benefit denied where obtaining it was one of the principal purposes | 24 |
| Principal role | FA 2026 dependent agent test: playing the principal role leading to contracts routinely concluded without material modification (s 1141(1)(b)) | 23 |
| Prior period adjustment | Error correction in the accounts; outside the change-of-basis rules | 5 |
| Proceeds not reinvested | Roll-over: the amount of proceeds not reinvested, chargeable up to the gain | 16 |
| Profit split; TNMM; resale price | TP methods: profit split (often residual); transactional net margin method (net profit indicator); resale price (gross margin) | 27 |
| Profit-related threshold | CTA 2010 s 105(3A): gross profits plus CFC chargeable profits apportioned to the company; only management expenses (and other s 99(1)(d)–(g) amounts) above it can be surrendered | 13, 15 |
| Provision (TP) | The terms of a transaction or series between affected persons | 27 |
| Provision trigger; known position trigger | The two UTT triggers: a provision in the accounts for the uncertainty; a treatment contrary to HMRC's known position | 4 |
| Public infrastructure exemption; qualifying infrastructure company | CIR carve-out for infrastructure companies electing in | 28 |
| Purchase price allocation; measurement period | Fair value allocation of consideration on an acquisition; IFRS 3's one-year window to finalise it | 31 |
| Qualified domestic minimum top-up tax (QDMTT) | A domestic minimum tax meeting GloBE standards; credited against GloBE top-up; UK DTT is one | 30 |
| Qualifying activity | The trade or other activity for which plant is used (CAA 2001 s 15) | 8 |
| Qualifying benefit | Payment from an EBT giving rise to income tax and NIC charges, or other listed benefits (s 1292) | 7 |
| Qualifying change of ownership | Joining or leaving a group or a change of control for ss 184A–184I | 17 |
| Qualifying company (SAO) | UK-incorporated company meeting the £200m turnover / £2bn balance sheet tests alone or aggregated with UK-incorporated group members at the end of the preceding financial year (SAOG11240–11270) | 4 |
| Qualifying corporate bond (company) | Any loan relationship asset (s 117(A1)) | 18 |
| Qualifying expenditure (R&D) | Staffing, externally provided workers and contracted-out R&D (65% where unconnected), consumables, software, data and cloud | 10 |
| Qualifying IP assets; relevant assets | Patents, registered designs, copyright etc.; goodwill and customer-related assets | 11 |
| Qualifying loan relationship | CFC Ch 9: creditor relationship with a connected non-UK qualifying company | 26 |
| Qualifying net group-interest expense (QNGIE) | ANGIE excluding related-party, results-dependent and equity-note interest (group ratio method) | 28 |
| Qualifying private placement | Unlisted debt security exempt from withholding (s 888A) | 23 |
| Qualifying resources | Funds that let Ch 9's full exemption apply | 26 |
| Quarterly instalment payments | CT paid in instalments by large and very large companies | 3 |
| Quoted Eurobond | Listed interest-bearing security; interest paid gross (s 882) | 23 |
| R&D allowance | 100% capital allowance for capital expenditure on R&D (CAA 2001 Part 6); land excluded | 10 |
| R&D intensity | Relevant R&D expenditure ÷ total relevant expenditure; ERIS needs 30% (one-year grace) | 10 |
| Reactivation | Disallowed interest brought back where the group later has spare capacity | 28 |
| Realisation (intangibles) | Disposal of an intangible giving a credit or debit | 11 |
| Reallocation election | TCGA s 171A: a gain or loss treated as another gains-group company's; first enacted FA 2000, current rules for gains and losses from 21 July 2009; within 2 years after the end of the AP | 17 |
| Reasonable belief | Payer may pay gross (s 930) or at a treaty rate on royalties (s 911) on a reasonable belief | 23 |
| Reasonable prevention procedures | CCO defence | 4 |
| Refund surrender | Part 22 Ch 4: a group company's CT repayment surrendered to another before it is paid | 3 |
| Regime anti-avoidance rule (CIR) | TIOPA s 461: counteracts relevant avoidance arrangements | 28 |
| Reinvestment relief (intangibles) | Deferral where proceeds are reinvested in chargeable intangibles within the window | 11 |
| Related (hybrids) | Same control group or 25% investment | 29 |
| Related company (Part 22 Ch 7) | Company from which HMRC may collect a non-resident's unpaid CT | 23 |
| Related party (intangibles) | Control or major interest relationships; market value rule, arm's length for cross-border TP transfers from 2026 | 11 |
| Relevant assets (goodwill) | Goodwill and customer-related intangibles; relief only within the 6.5% rule and the 6× cap (Ch 15A) | 11 |
| Relevant body; dual criminality | CCO: the corporate body liable; for the foreign offence (s 46) the conduct must be an offence in both countries | 4 |
| Relevant day | The start of the next AP as expected when a s 18A election is made; the election has effect from then (s 18F; INTM281020) | 25 |
| Relevant EEA state | EU member or state with equivalent recovery assistance (Sch 3ZB) | 22 |
| Relevant interest (CFC) | Interest of a UK company not held through another UK company (s 371OC) | 26 |
| Relevant IP profits | Profits within Patent Box | 11 |
| Relevant maximum; qualifying profits; relevant profits | Part 7ZA: the cap on carried-forward relief = deductions allowance + 50% of (qualifying profits − allowance) (CTM05030) | 14 |
| Relevant non-lending relationship | Money debt not from lending brought into Part 5 (s 479) | 12 |
| Relevant operating expenditure | LPM exemption base, excluding goods not used in the territory and related-person expenditure | 26 |
| Relevant state | EU member state or EEA state with recovery assistance (Sch 3ZB); for s 140A/140C the UK or a member State (SI 2019/689 reg 6) | 22, 25 |
| Reporting body | UK corporate parent obliged to report international movements of capital | 25 |
| Reporting company (CIR) | Company appointed to file the interest restriction return: from periods of account ending on or after 31 March 2026 appointed per period by more than half of eligible companies (FA 2026 s 61) | 28 |
| Restriction amount (6× cap) | RA = (A × 6) ÷ B, A qualifying IP spend, B relevant-asset spend; debits scaled by RA if below 1 (s 879O; CIRD44093) | 11 |
| Reverse premium | Inducement paid by a landlord to a tenant: revenue receipt (CTA 2009 ss 96–98, 250) | 16 |
| Revised interest restriction return | Required where figures have become incorrect; within 3 months (Sch 7A para 8(4)–(5); CFM98645) | 28 |
| Right-of-use asset; spreading period | Lessee asset under IFRS 16 / FRS 102 (2024); FA 2019 Sch 14 spreads transition adjustments | 5 |
| RM Assessment Master; spreadsheet rule | CIOT exam software from October 2026; calculations left in the spreadsheet and not copied into the answer box are not marked | 32 |
| Rolled-up indexation | Indexation carried through no gain, no loss transfers; cannot create or increase a later loss (s 56(3)) | 17 |
| Routine return; marketing assets return | Patent Box steps removing a routine 10% return and a notional marketing royalty from relevant IP profits | 11 |
| s 137 main purpose test | FA 2026 recast: counteraction where a main purpose of arrangements is to avoid CGT or CT; 5% exception gone | 18 |
| s 138 clearance | Advance clearance that s 137 will not apply | 18 |
| s 140 postponement | Deferral of gains when a UK company's foreign PE trade is transferred to a non-resident company for shares (≥ 25%) | 25 |
| s 16A capital loss TAAR | Losses from arrangements with a main purpose of securing a tax advantage are not allowable (from 6 December 2006) | 18 |
| s 187B postponement | Exit gain on UK land deferred to actual disposal | 22 |
| s 190 recovery | HMRC's power to collect unpaid CT on gains from other 51% group members (notice within 3 years) | 17 |
| s 198 election | Joint fixtures value election (2 years; capped at the seller's cost) | 9 |
| s 42 group relief (stamp duty) | Relief for transfers between associated bodies corporate (75% of shares, profits, assets; arrangements denial) | 21 |
| s 75; s 77; s 77A | Stamp duty reconstruction relief; share-for-share relief; disqualifying arrangements (from 29 June 2016; FA 2020 amendment) | 21 |
| s 782A switch-off | No intangibles degrouping charge where the leaving company is sold under an SSE-qualifying share disposal (FA 2019 s 26; from 7 November 2018) | 11 |
| s 931R election | Election that a distribution is not exempt (2 years) | 25 |
| Safe harbour (Pillar Two) | Transitional CbCR and other simplifications | 30 |
| Scheme of reconstruction | Sch 5AA: merger, division or restructuring meeting conditions 1, 2 and 3 or 4 | 19 |
| SDLT connected company rule | Market value charge on transfers to a connected company (FA 2003 s 53) | 21 |
| SDRT listing relief | 3-year SDRT holiday for companies listed on or after 27 November 2025 (FA 2026 s 85), with exclusions | 21 |
| Secondary adjustment | Further adjustment to reflect cash where a primary TP adjustment is made; the UK makes none (INTM423090) | 27 |
| Senior accounting officer; SAO certificate | Officer responsible for appropriate tax accounting arrangements; annual certificate | 4 |
| Separate and independent enterprise | PE attribution hypothesis (s 21) | 23 |
| Separate entity principle | Each company is a separate taxpayer | 1 |
| Series of transactions | Linked disposals to connected persons within 6 years valued together (s 19) | 16 |
| Share exchange | s 135 exchange treated as a reorganisation | 18 |
| Share sale v asset sale | Buyer inherits the company's history v buys assets with a fresh cost; the seller's tax differs | 20 |
| Shell company | Company with no trade, investment business or property business (Part 14 Ch 5A) | 14 |
| Short lease (CA) | Lease of 7 years or less (s 70I) | 9 |
| Short lease (gains) | Lease with 50 years or less unexpired at the transaction date; Sch 8 rules apply even if long at acquisition (CG71141) | 16 |
| Short-life asset | Elective single asset pool (2 years; 8-year cut-off) | 8 |
| Side-by-side package | OECD package (January 2026) letting qualifying domestic minimum systems run alongside GloBE; in the draft FB 2026-27 (proposed, not law) | 30 |
| Significant increase in capital | Investment company change of ownership test: at least £1m and 125% | 13 |
| Significant people functions | People functions relevant to assets and risks (AOA; CFC Ch 4) | 26 |
| SME (R&D) | Fewer than 500 staff and turnover ≤ €100m or balance sheet ≤ €86m, with linked and partner enterprises (CIRD91400–91700) | 10 |
| SME exemption (TP) | Small and medium-sized enterprises exempt from TP (s 166) | 27 |
| Special balancing charge | Charge on disposal of fully expensed (s 59A) or 50% FYA (s 59B) plant | 8 |
| Special securities; exempt class | Securities whose interest is a distribution (s 1015, Conditions A–H); classes of distribution exempt under Part 9A | 19, 25 |
| Special tax site | Freeport or investment zone site with 100% FYA and 10% SBA (grade 3) | 9 |
| Specific and general provisions | Provisions for identified liabilities (deductible if they meet the accounting and BIM46510 conditions) v general provisions (not deductible) | 5 |
| Step 2 amount | The notional tax deducted at RDEC step 2; may be surrendered to a group member or carried forward (s 1042L(3)) | 10 |
| Step-up | Fresh tax cost on assets bought directly | 20 |
| Stewardship activities | Shareholder activities not chargeable as intra-group services (TPG Ch VII, not opened; taught as applied in N23 Q6) | 27 |
| Stock dividend (company) | Shares received instead of a cash dividend: bonus-issue treatment for a company (HMRC; TCGA s 142 as substituted by FA 1998 s 126) | 18 |
| Streaming (branch exemption) | Matching a territory's negative amount only against that territory | 25 |
| Structures and buildings allowance | 3% straight line on post-29 October 2018 construction (TKS 12) | 9 |
| Substance-based income exclusion; excess profit; top-up percentage | Payroll and tangible asset carve-out; profit above it; 15% minus the jurisdictional ETR | 30 |
| Substantial modification; related transactions | Loan relationship terms changed so much that the old debt is treated as replaced (s 323A); disposals and acquisitions of rights under a relationship (s 352) | 12 |
| Substantial shareholding exemption | Gains and losses on substantial trading shareholdings exempt (Sch 7AC) (TKS 23) | 18 |
| Substantively enacted | UK: rate enacted when the Commons stages are complete (or a PCTA 1968 resolution); FA 2021's 25% on 24 May 2021 | 6 |
| Succession; connected-party election | Market value on succession; election for TWDV between connected parties (ss 265–267) | 9 |
| Surplus dual inclusion income | Dual inclusion income not used in the period, usable later (Ch 12A, ss 259ZMA–259ZMF) | 29 |
| Surplus management expenses | Unrelieved management expenses carried forward (claim) | 13 |
| Surrenderable amounts | Amounts available for group relief | 15 |
| Synthesised text | HMRC's consolidated reading of a treaty as modified by the MLI | 24 |
| Tainted donation | Donation linked to financial assistance to a non-charity (outcome test from 6 April 2026) | 7 |
| Tax avoidance purpose | A main purpose of securing a tax advantage for any person (s 442), making it an unallowable purpose | 12 |
| Tax deed (tax covenant) | Pound-for-pound indemnity from the seller for pre-completion tax | 20 |
| Tax design condition | UTPP: reasonable to assume the arrangements were designed to reduce, eliminate or delay UK tax | 30 |
| Tax exemption (CFC) | Local tax at least 75% of corresponding UK tax | 26 |
| Tax Law Rewrite Project | The 1996–2010 restatement of direct tax law producing seven Acts, CAA 2001 to TIOPA 2010; not generally intended to change the law | 2 |
| Tax strategy | Board-approved published statement of a large business's approach to tax | 4 |
| Tax-adjusted trading profit | Profit before tax adjusted for disallowable items and non-trading items, before capital allowances | 7 |
| Tax-EBITDA; group-EBITDA | UK companies' adjusted CT earnings before interest, CAs and specified reliefs; consolidated EBITDA | 28 |
| Tax-geared late filing penalty | 10% of unpaid tax if a return is 18 months late, 20% if more than 2 years late (Sch 18 para 18) | 3 |
| Taxed receipt (tenant deduction) | A trading tenant deducts the landlord's premium income element over the lease (CTA 2009 ss 62–67) | 16 |
| Temporary difference; timing difference; tax base | IAS 12 and FRS 102 deferred tax concepts | 6 |
| Terminal relief; terminal loss | s 45F relief for carried-forward losses against the 3 years ending with cessation; s 39 terminal loss carry-back | 14 |
| Thin capitalisation | Excessive debt tested under TP | 27 |
| Third company (s 155) | A company not, apart from the arrangements, in the same group as the consortium-owned company; arrangements under which it could get 75% control break the consortium (book's reading for a member) | 15 |
| Threshold ladder | The book's table of size thresholds | 1 |
| Tie-breaker | Treaty rule deciding residence of a dual resident | 22 |
| Timing differences plus | FRS 102 s 29's basis for deferred tax (timing differences plus revaluations and business combination differences) | 6 |
| Total disallowed amount; statement of allocated interest restrictions | The period's disallowance and the reporting company's allocation to companies (Sch 7A para 22) | 28 |
| TP notice | HMRC notice applying TP to a medium enterprise, deeming participation (s 148A), or disapplying s 164A | 27 |
| Trading company or group (SSE) | No substantial non-trading activities; HMRC's 20% yardstick | 18 |
| Trading finance profits; group treasury election | CFC Ch 6 trading finance profits; election within 20 months after the AP | 26 |
| Trading profits safe harbour | CFC Ch 4 exclusion if five conditions are met | 26 |
| Transactions in securities | CTA 2010 Part 15 counteraction of CT advantages | 19 |
| Transactions in UK land | CTA 2010 Part 8ZB: gains treated as trading profits in conditions A–D | 16 |
| Transfer of deductions (Part 14A) | TAAR stopping companies acquired with deductions transferring them via arrangements | 14 |
| Transfer of trade without change of ownership | CTA 2010 Part 22 Ch 1 | 19 |
| Transfer Pricing Guidelines | OECD 2022 Guidelines, referred to dynamically by TIOPA s 164 as amended by FA 2026 | 2, 27 |
| Treaty Passport | Scheme for treaty-resident lenders to receive UK interest at treaty rates | 23 |
| Truing up | Correcting earlier instalments as the forecast liability changes; interest runs from each instalment date | 3 |
| UK property rich; substantial indirect interest | Company deriving 75% of gross asset value from UK land; 25% interest within 2 years (TCGA Sch 1A) | 23 |
| UK related | Group relief: UK resident or within UK CT through a PE | 15 |
| UK representative | A non-resident's UK PE treated as its representative (Part 22 Ch 6) | 23 |
| UK-to-UK exemption | TIOPA s 164A: TP disapplied between UK companies taxed at the same rate (from 1 January 2026) | 27 |
| Ultimate parent entity; filing member | Pillar Two group parent; the UK member that files the GloBE information return and UK return | 30 |
| Unallowable purpose | Loan relationship purpose outside business or commercial purposes; debits disallowed (s 441) | 12 |
| Unassessed transfer pricing profits | FA 2026 CT charge at CT rate + 6% replacing DPT | 30 |
| Uncertain tax treatment | Notification by large businesses of positions over £5m meeting a trigger | 4 |
| Uncertain tax treatment (IFRIC 23) | Accounting for uncertain positions on the most likely amount or expected value (periods from 1 January 2019); distinct from the UTT notification regime | 6 |
| Underlying tax | Foreign tax on profits out of which a dividend is paid (TKS 26) | 24 |
| Undertaxed profits rule | Pillar Two backstop rule (from 31 December 2024) | 30 |
| Unilateral relief | Credit given by UK law where no treaty applies | 24 |
| Unrelieved foreign tax (PE) | Excess credit on PE profits carried forward or back 3 years for the same PE (s 73; INTM163040) | 24 |
| Unremittable amount (trade) | A trade receipt blocked abroad: deduction not creating a loss (CTA 2009 s 173), brought back when remittable (s 175) | 25 |
| Unremittable income | Foreign income that cannot be transferred: Part 18 claim to defer (ss 1274–1278; 2 years). A blocked receipt of a UK trade is relieved instead under CTA 2009 ss 173–175 (R23) | 25 |
| Unused interest allowance | Spare allowance after ANTIE and reactivations carried forward up to 5 years (CFM98240); lost if an abbreviated return applies | 28 |
| Usurped v influenced board | The CMC distinction between a board whose decisions are made elsewhere (*Unit Construction*, *Development Securities*) and one merely influenced (*Wood v Holden*) | 22 |
| Value shifting | Transactions moving value out of assets (ss 29–31) | 17 |
| Warranty; indemnity | Statement of fact (damages need loss in value; qualified by disclosure); promise to pay (not cut down by disclosure) | 20 |
| Wasting asset | Asset with a predictable life of 50 years or less; leases follow Sch 8 | 16 |
| Withholding (yearly interest) | Duty to deduct income tax at the basic rate for the year of payment (ITA 2007 s 874): 20% in 2026/27; savings basic rate 22% from 2027/28 (FA 2026 ss 5–6) | 23 |
| Worldwide group | Ultimate parent and its consolidated subsidiaries (CIR; Pillar Two) | 28 (1) |
| Year of grace | A large (not very large) company's first-year exemption from QIPs: profits ≤ £10m (divided by associates) and not large in the previous 12 months (reg 3(5); CTM92530) | 3, 31 |
| Yearly interest; short interest | Interest on a loan intended to last a year or more (withholding) v short loans (no statutory definition; SAIM9075) | 23 |

---

## 3. Established facts (as built)

Every figure here comes from the research files (opened 9 October 2026), the TKS figures carried into the starting bible, or the chapter writers' and reviewers' verification (WebSearch extracts; WebFetch was unavailable). **Source** abbreviations: **LS1–LS5** = law sheets 1–5; **EI** = exam-intel; **TKS** = the TKS figures recorded in the starting bible (the TKS files themselves were not available during the build); **Rn** = continuity ruling; **ch n** = the chapter (and its notes) that verified the point. Status: **V** (statute or official source seen), **V-HMRC** (HMRC guidance seen: taught as HMRC's view), **S** (secondary), **U** (unverified), **book's reading** (reasoned, labelled in the text). Rows changed or added at consolidation are marked *(as built)*.

### 3.1 Exam facts

| Fact | Value | Source | Status |
|---|---|---|---|
| Paper | CTA Advanced Technical, Taxation of Larger Companies and Groups (formerly Taxation of Major Corporates to November 2022) | EI §3 | V |
| Format | 3 h 30 min; normally six questions of 10/15/20 marks; 100 marks; pass 50%; usual mix three 20s, two 15s, one 10 | EI §1 | V |
| Core rule | At least 70% of the CT element from core (grade 1) material | EI §1; grid | V |
| Grades | 1 core, 2 non-core, 3 awareness (v2 grid extract) | grid | V |
| Law for 2027 | FA 2026 (pattern; TKS syllabus "FA2026 for exams in 2027"); **no 2027 LCG grid, prospectus or tax tables published** at 9 October 2026 (re-searched by ch 32 and framing pieces) *(as built)* | EI §2; ch 32 | V pattern / derived |
| Sittings | 27 Oct 2026 (FA 2025); **4 May 2027, 2.30pm**; **26 Oct 2027, 2.30pm** (confirmed on the CIOT key dates and exam entry pages; one exam entry line says **28 October 2027**: conflict open, ch 32 tells Kian to check his entry confirmation) *(as built)* | EI §1; ch 32; review F | V (conflict flagged) |
| Software | RM Assessment Master from October 2026; spreadsheet below the answer box; workings left in the spreadsheet not marked; formulae invisible | EI §1 | V |
| Resources | Tax tables (paper + PDF); OECD Model (2017 articles) PDF only; Croner-i or Tolley online legislation (student products; no notes; tags with section numbers or topic names allowed, no pro formas or formulae) | EI §1 | V |
| Rubric | Workings to the nearest month and pound; prior-year law assumed to continue; later law not penalised; LBTT allowed for Scots law candidates; M26 dropped the presentation-marks line | EI §1 | V |
| Timing | About 2.1 minutes per mark (derived) | EI §1 | derived |
| Tax tables 2026 | FA 2025 figures (18% WDA); 2027 tables not yet published | EI §1 | V |
| Pass rates | M23 70%; N23 61%; M24 62%; N24 59%; M25 65%; N25 67%; M26 74% | EI §3 | V |
| Style | No letter/report/email format in LCG AT 2023–2026; "Calculate, with explanations", "Explain", "Discuss", "Recommend" | EI §3 | V |
| JP | PR&E before AT; TKS before or with AT (TKS first recommended); AT pass valid 7 sessions | EI §4 | V |
| 2028 | LCG AT continues (4–6 questions); CIR, hybrids, IFAs to grade 2; leases and R&D-intensive SMEs not examined; AI evaluation learning outcome; JP-specific 2028 form **not published** | EI §4 | V / U |
| Grid notes | Note 2: Law, PR&E, Principles of Accounting knowledge expected; the 2026 grid's page headers still say "2025 sittings" (left-over header) | EI §0 | V |
| Grid changes 2025 draft → 2026 | IFAs 2 → 1; "R&D intensive companies" 1; CT relief for employment expenses 1; DPT 2 → 3; MTT/DTT added at 3; CCO row at 1 (compared against the **draft** 2025 grid only) | EI §2 | V (vs draft) |
| Consortium | LCG examines consortium relief (the grid's "excluding consortia" note applies to the Awareness module; N24 Q2 was 20 marks on group and consortium relief). **Law sheet 4's trap 18 says the opposite and is wrong** | LS1 §0; EI §3 | V |

### 3.2 Corporation tax rates and limits (FY2026)

| Item | Value | Source | Status |
|---|---|---|---|
| Main rate; small profits rate | 25%; 19% (FY2026 by FA 2025 s 13; FY2027 maintained by FA 2026 ss 11–12) | TKS; LS4 | V |
| Marginal relief | Limits £50,000 / £250,000; fraction 3/200; marginal rate 26.5%; limits divided by 1 + associated companies and time-apportioned | TKS | V |
| Associated companies | Control test from 1 April 2023; dormant and passive holding companies (CTA 2010 s 18F) excluded; non-UK companies count. **Two counting dates** *(as built)*: marginal relief and small profits rate count a company associated **at any time in the AP**; QIP thresholds count associates **on the day before the AP begins** (or its first day if the previous day fell in no AP) | TKS; CTM92530, COM95001; R1 | V / V-HMRC (QIP date; SI 1998/3175 reg 3 as amended not seen) |
| Loss restriction | £5m deductions allowance per company or group per 12 months; 50% of profits above it; capital losses within it from 1 April 2020 | LS1 §7; TKS | V |
| Group deductions allowance | One £5m; only if all CT-chargeable members are covered by a nomination of one company; the nomination is a **standing document** (continues until replaced, revoked in writing or the nominee leaves); a group allowance allocation statement for **each AP** by the first anniversary of the nominee's filing date; a member allocated nothing has nil *(as built)* | LS1 §7; CTM05180, CTM05200; R9 | V / V-HMRC |
| RDEC | 20% (ring fence 49%); APs from 1 April 2024; notional tax 25% for main-rate companies including marginal relief companies, 19% otherwise; PAYE cap £20,000 + 300% | LS1 §6; TKS | V |
| ERIS | 86% extra deduction (186%); payable credit 14.5%; intensity 30% (one-year grace); NI de minimis State aid (s 1112J) | LS1 §6 | V |
| ERIS surrenderable loss *(as built)* | Lower of the unrelieved trading loss and 186% of related qualifying expenditure (CIRD122000); a company acquired mid-period is large for the whole AP on HMRC's view (CIRD92000; secondary) | ch 10 | V-HMRC / S |
| R&D payments for surrendered RDEC | Ignored for CT and not distributions, up to the credit surrendered (FA 2026 s 31; payments from 26 November 2025). Whether it covers a payment for a **step 2 amount** surrender is not verified (R7; story assumes it does) *(as built)* | LS1 §6; R7 | V / U (step 2 point) |
| Overseas R&D restriction | s 1138A; FA 2026 s 34: relaxation ERIS-only, claims from 30 October 2024 | LS1 §6 | V |
| R&D claim notification | First claim or none in 3 years; window to 6 months after the period of account; otherwise invalid (CTA 2009 s 1142A, inserted by F(No.2)A 2023 Sch 1 for APs beginning on or after 1 April 2023); additional information form for claims from 8 August 2023 (SI 2023/813); claims within 2 years beginning with the last day of the period of account (CIRD81800) *(as built)* | LS1 §6; ch 10; review B | V |
| s 455 | 35.75% (loans from 6 April 2026) (owner-manager point; rarely LCG) | TKS | V |
| Informal strike-off | £25,000 (s 1030A); 2 years (s 1030B) | LS4 §8 | V |
| Pension spreading | Only if CCCP > 210% of CPCP; relevant excess (CCCP − 110% CPCP) under £500,000 no spreading; £500,000 to under £1m: 2 periods; £1m to under £2m: 3; £2m or more: 4 | LS4 §3 | V |
| Unpaid remuneration | Deductible when paid if not paid within 9 months of the period end (s 1288) | LS4 §3 | V |
| EBCs | Qualifying benefits within 9 months; no deduction for a period starting more than 5 years after; IT and NIC paid within 12 months (s 1290, F(No.2)A 2017 s 37) | LS4 §3 | V |
| QCD benefits limits | 25% of a payment of £100 or less; £25 + 5% above £100; aggregate £2,500 per charity per AP | LS4 §11 | V |
| Tainted donations | Outcome test from 6 April 2026 (FA 2026 s 56, Sch 9) | LS4 §11 | V |
| Non-derecognition liabilities | New CTA 2009 s 1305B (FA 2026 s 63): APs beginning on or after 26 November 2025 | LS1 §9; LS4 | V |

### 3.3 Administration, payment and penalties

| Item | Value | Source | Status |
|---|---|---|---|
| QIPs *(as built)* | Large: augmented profits > £1.5m; months 7, 10, 13, 16. Very large: > £20m; months 3, 6, 9, 12 (APs beginning on or after 1 April 2019; SI 2017/1072). **£1.5m, £20m and the £10m first-year limit are all divided by 1 + associated companies** (APs beginning on or after 1 April 2023; previously related 51% group companies) and time-apportioned; associates counted on the day before the AP begins. Large companies have a first-year grace (profits ≤ £10m divided, not large in the previous 12 months, reg 3(5)); **very large companies have none**; £10,000 de minimis (reg 3(4)). The RDEC is **not** taken into account in computing QIPs (CIRD89870; R2). Short-AP very large dates per CTM92815. Penalty for knowingly or recklessly underpaying: up to twice the interest (reg 13; EM8330) | CTM92520, CTM92530, CTM92800, CTM92815, COM95001, CIRD89870; R1, R2 | V-HMRC (SI 1998/3175 reg 3 as amended not seen; COM30110 extract says "ending" on or after 1 April 2023 where CTM92530 says "beginning": open) |
| QIP interest *(as built)* | **Bank Rate + 2.5%** on underpayments (margin raised from + 1% on 6 April 2025) = **6.25%**; **Bank Rate − 0.25%** on overpayments = **3.50%**; both from 29 December 2025 (Bank Rate 3.75% since 18 December 2025; held 17 September 2026; next decision 5 November 2026). QIP interest runs to the normal due date, then late payment interest (in outline; reg 7 with TMA s 87A not re-verified) | TKS; ch 3; review A; R26 | V (secondary reproductions of HMRC's published rates) |
| Late payment / repayment interest *(as built)* | **Bank Rate + 4%** (raised from + 2.5% on 6 April 2025) = **7.75%**; repayment **Bank Rate − 1%** (minimum 0.5%) = **2.75%**; both from 9 January 2026 | TKS; R26 | V (secondary reproductions) |
| Payment and filing *(as built)* | 9 months and 1 day after the AP end; return 12 months after the end of the period of account; for a period of account over 18 months, 30 months after its start; 3 months after a late notice if later (FA 1998 Sch 18 para 14) | TKS; EI; CTM93040; ch 3 | V (statute via HMRC and ICAS extracts) |
| Group payment arrangements | TMA s 59F; 51% group; same accounting date; UK nominated company; liability stays with each company | LS1 §8 | V |
| Refund surrender | CTA 2010 ss 963–966; joint notice before the refund | LS4 §9 | V |
| Notification | Coming within charge: 3 months (FA 2004 s 55); chargeability: 12 months after AP end (Sch 18 para 2) | LS1 §8 | V |
| **Late filing (FA 2026 s 265)** | Returns with a filing date on or after 1 April 2026: **£200** if delivered within 3 months of the filing date, **£400** otherwise; third successive failure **£1,000 / £2,000**; tax-geared **10%** if not delivered within 18 months after the AP end, **20%** if more than 2 years after | LS1 §8 | V |
| **Statutory form of CT late filing penalties** | FA 1998 Sch 18 para 17 as amended by FA 2026 s 265 (checked on legislation.gov.uk, 9 October 2026): **£200 if filed within 3 months of the filing date, £400 otherwise; third successive failure £1,000 within 3 months, £2,000 otherwise**. The TKS book's wording ("£200 then a further £200"; "each fixed £200 penalty becomes £1,000") gives the same totals; use the statutory form in this book | LS1 §8; legislation.gov.uk |
| Late payment penalty extension | FA 2026 s 264: Sch 56 item 18 extended to TMA s 56(3)(b) amounts; amounts payable from 1 April 2026 | LS1 §8 | V |
| Enquiry window | 12 months from delivery; **for a member of a group other than a small group, 12 months from the filing date**; late or amended returns to the quarter day after the first anniversary | LS1 §8 | V |
| Discovery | 4 / 6 (careless) / 20 years (deliberate, failure to notify, DOTAS failures) after the AP end | LS1 §8 | V |
| Inaccuracy penalties | 30% / 70% / 100% of PLR; disclosure reductions (TKS) | TKS; LS5 | V |
| Records | Up to £3,000 per AP (Sch 18 para 23) | LS5 | V |
| CIR return penalties | £500 within 3 months after the filing date, £1,000 otherwise; new £1,000 for an unappointed filer (with exceptions) | LS1 §1 | V |
| UTT penalties | £5,000 first; £25,000 second; £50,000 further (within 3 preceding years); £5,000 for a post-filing provision trigger | LS1 §8 | V |
| SAO penalties | £5,000 fixed each (company failing to notify; SAO main duty; SAO certificate); no reduction | LS1 §8 | V |
| Tax strategy penalties | £7,500; another £7,500 if 6 months late; then £7,500 a month; 30-day warning | LS1 §8 | V |
| DOTAS penalties (FA 2026 s 216, new FA 2004 s 315) | Daily applicable rate £600 (or £5,000 a day after an order), up to £1m where inappropriately low; £5,000 fixed maximum for many information duties; £5,000 / £7,500 / £10,000 for s 313 failures; commencement inferred as Royal Assent | LS1 §8 | V (commencement inferred) |
| Follower notices; APNs | FN penalty 30% (20% under s 208A); APN pay within 90 days (or 30 days after determination of representations) | LS1 §8 | V |
| GAAR penalty | 60% of the counteracted advantage | LS1 §8 | V |
| Advance tax clearances | FA 2026 ss 266–274: projects of at least £1bn UK expenditure; binding 5 years | LS1 §8 | V |

### 3.4 Governance thresholds

| Regime | Threshold / rule | Source | Status |
|---|---|---|---|
| SAO *(as built)* | UK-incorporated company (tax residence irrelevant); turnover > £200m and/or balance sheet > £2bn, alone or aggregated with UK-incorporated group companies (51%, CTA 2010 s 1154), in the preceding financial year; a joiner qualifies for a financial year only if it was a group member at the **end of its preceding financial year**; deadlines 6 months (plc) / 9 months; from financial years beginning on or after 21 July 2009. Exam-intel trap 15 ("include UK-resident companies incorporated abroad") is wrong for SAO | LS1 §8; SAOG11240, SAOG11260, SAOG11270; R10 | V / V-HMRC |
| Tax strategy *(as built: financial years beginning **on or after** 15 September 2016, FA 2016 s 161)* | UK groups etc. with turnover > £200m or balance sheet > £2bn in the previous FY, **or** UK entities of a €750m CbC group; 51% group test; publish before the end of the FY after first qualifying, then within 15 months | LS1 §8 | V |
| UTT | 51% group CT-paying members: UK turnover > £200m and/or balance sheet > £2bn; two triggers (provision; departure from HMRC's known position); £5m threshold; returns required on or after 1 April 2022; deadline later of CT filing date and accounts filing deadline; 2026 consultation (12 March–4 June 2026) proposes extension and a third trigger (not law) | LS1 §8 | V |
| CCO | Criminal Finances Act 2017 ss 45–46; in force 30 September 2017; defence of reasonable prevention procedures; unlimited fine | LS1 §8 | V |
| CbC reporting | Consolidated revenue €750m (SI 2016/237 reg 3) | LS5 | V |
| TP records | Master File and Local File for UK members of €750m groups; APs from 1 April 2023 (SI 2023/818); UK-UK transactions excluded from Local File | LS5 | V |
| CIR de minimis | £2m net interest a year | LS1 §1 | V |
| Pillar Two *(as built)* | Revenue "exceeds" €750m in 2 of the previous 4 periods (F(No.2)A 2023 s 129; HMRC's manual MTT01100 also says "exceeds"); only GOV.UK's "check if you need to report" guidance says "750 million euros or more" (**discrepancy taught, not resolved**) | LS3 §10; ch 30; R28.9 | V |
| International movements of capital | Reportable events over £100m; within 6 months; from 1 July 2009 | LS3 §8 | V |
| TP SME exemption | Small < 50 staff and turnover or balance sheet ≤ €10m; medium < 250 staff and turnover ≤ €50m or balance sheet ≤ €43m; linked and partner enterprises; unchanged by FA 2026 | LS5 B3 | V / S |

### 3.5 Capital allowances (FY2026)

| Item | Value | Source | Status |
|---|---|---|---|
| Main pool WDA | 14% for CT chargeable periods beginning on or after 1 April 2026 (FA 2026 s 28); hybrid rate by days, rounded **up** to 2 dp (1 Jan–31 Dec 2026: 14.99%; 1 Oct 2025–30 Sep 2026: 16.00%; 1 Jul 2025–30 Jun 2026: 17.01%) | LS2 §14 | V |
| Special rate WDA | 6% | LS2 | V |
| AIA *(as built)* | £1m; one per group (parent undertaking and subsidiaries) and for related companies; shared across members' chargeable periods **ending in the same financial year, the year to 31 March** (s 51C read with the Interpretation Act 1978 Sch 1: book's reading); parent test at the end of each subsidiary's chargeable period | LS2; R11 | V / book's reading |
| Full expensing / 50% FYA | s 45S: companies; from 1 April 2023; new and unused; not cars or (most) leasing; permanent | LS2 | V |
| Special balancing charge | s 59A: disposal value × FE expenditure ÷ total expenditure; s 59B: half for 50% assets | LS2 | V |
| 40% FYA | s 45U: from 1 January 2026; main rate; new and unused; leasing allowed (s 46(4B)) except overseas; not cars; any business; no special balancing charge | LS2 | V |
| FYA balances *(as built)* | Expenditure on which a 40% or 50% FYA (or a partial FYA) is made joins the pool only **after** the period's WDA, drawing WDA from the next period (CAA 2001 s 58(5)(a)); expenditure with no FYA (AIA excess, second-hand plant, LFL deemed expenditure) is pooled and gets WDA in the same period. Long-life assets can take the 50% FYA (general exclusion 5 catches only Sch 3 para 20 expenditure; CA23174ac) | ch 8; review B; R18 | V |
| Zero-emission cars / charge points | 100% FYA to 31 March 2027 (CT) | TKS | V |
| Cars | Main rate ≤ 50g/km or electric; otherwise special rate | LS2 | V |
| Long-life assets | 25 years; £100,000 limit divided by 1 + associated companies; reduced (not increased) for short (long) periods | LS2 | V |
| Short-life assets | Election 2 years after the period end (CT); 8-year cut-off | LS2 | V |
| SBA | 3% over 33⅓ years; construction from 29 October 2018; excludes land and plant; demolition ends it; special tax sites 10% over 10 years | LS2 | V |
| Special tax sites *(as built)* | Enhanced SBA and plant FYA sunset 30 September 2031 (English freeports), 30 September 2034 (Scottish and Welsh freeports, investment zones): check each site's designation | GOV.UK sunset policy paper; ch 9; review B | V |
| Fixtures | Fixed value requirement from 1 April 2012; pooling requirement from 1 April 2014 (CT); s 198/199 elections within 2 years, capped at the seller's qualifying cost | LS2 | V |
| Long funding leases | Funding lease (finance lease test; 80% lease payments; 65% useful life) that is not short (7 years or less); lessee claims; lessee's return election (s 70H); no AIA/FYA on transfer and long funding leaseback (s 70DA). *(as built)* Whether a lessee can take full expensing on new plant is **unsettled** (story uses a second-hand machine); the lessee's finance charge is tax-interest for the CIR (TIOPA s 382 Condition C) | LS2; LS4; ch 9, 28 | V / U (FE point) |
| Successions | s 265 market value, no AIA/FYA; ss 266–267 connected election within 2 years at TWDV; not for a DRIC or where s 561 applies | LS2 | V |
| Connected sales | No AIA/FYA; cost capped at seller's disposal value (ss 217–218) | LS2 | V |
| R&D allowances | 100% (CAA Part 6) | LS1; LS2 | V |
| Small pools | £1,000 | TKS | V |
| CGS thresholds (VAT adjustments) | Land and buildings £600,000+ from 29 July 2026 (SI 2026/765); computers removed | TKS | V |

### 3.6 Chargeable gains (companies)

| Item | Value | Source | Status |
|---|---|---|---|
| Indexation | Frozen at December 2017 (RPI 278.1); cannot create or increase a loss | LS2; TKS | V |
| Verified indexation factor (for examples) | June 2004 → December 2017: **0.489** | TKS ch 23 | V |
| Company matching | Same day; 10 days before (earliest first); s 104 pool (indexed to Dec 2017); s 108 relevant securities | LS2 | V |
| QCBs (companies) | Any loan relationship asset (s 117(A1)); gilts and QCBs exempt (s 115) | LS2 | V |
| SSE | ≥ 10% shares, profits and assets for 12 months in the 6 years before; investee trading (and afterwards only if buyer connected or para 15A); losses not allowable; 51% group aggregation; para 4 priority; para 5 anti-avoidance | LS2 | V |
| Earn-out receipts after an SSE-exempt sale *(as built)* | Completion value of a *Marren v Ingles* right is within the SSE; later receipts are disposals of the right, chargeable (with a loss on a shortfall): **generally accepted view, not settled** (no HMRC statement found) | ch 18, 20; R22 | S |
| Stock dividends (companies) *(as built)* | Bonus-issue treatment on HMRC's view; TCGA s 142 as substituted by FA 1998 s 126 (old ss 141–142) for share capital issued on or after 6 April 1998; CTM17005's s 141 citation is out of date | ch 18; review D | V |
| "Substantial" non-trading activities | HMRC practice: more than 20% | TKS | V (practice) |
| Gains group | 75% + effective 51% (s 170) | LS2 | V |
| s 171A election *(as built)* | Within 2 years after the end of the transferring company's AP; no statutory power to extend (CG45357); first enacted FA 2000; current rules for gains and losses accruing on or after 21 July 2009 (CG45356; law sheet 2's "from FA 2009" superseded) | LS1; LS2; R28.6 | V / V-HMRC |
| Roll-over window | 12 months before to 3 years after; company provisional relief to the 4th anniversary of the AP end | LS2; TKS | V |
| Degrouping | 6 years from the intra-group acquisition; market value at acquisition; since 19 July 2011 (or 1 April 2011 by election) added to share-sale proceeds where leaving on a share disposal | LS2 | V |
| s 190 recovery | 51% group; unpaid 6 months; notice within 3 years | LS2 | V |
| Lease table points | 50 years 100; 25 years 81.100; 10 years 46.695; 1 year 5.983 | LS2 | V |
| Lease premium income element *(as built)* | P × (50 − (n − 1))/50 for leases of 50 years or less (CTA 2009 ss 217–221). Part disposal on the grant: HMRC's method puts the **capital part of the premium** over **the full premium plus the value of the reversion** (CG70960). Indexation on an assigned lease runs on the **restricted** (Sch 8) cost (CG17380) | LS2; ch 16; R19 | V / V-HMRC |
| Demerger chargeable payments | Within 5 years | LS2 | V |
| s 137 recast | Issues on or after 26 November 2025; main purpose; just and reasonable counteraction; 5% exception abolished; transitional protection (application before 26 November 2025, clearance, issue before 26 January 2026 or within 60 days) | LS2 | V |
| s 139 recast | Transfers on or after 26 November 2025; covers IT as well as CGT and CT; clearance on the acquirer's application | LS2 | V |
| s 138A earn-out election (company) | Within 2 years of the end of the AP in which the right is conferred; irrevocable | LS2 | V |
| Exit charge payment plans | 6 equal annual instalments; application within 9 months of the end of the migration AP; first instalment 9 months and 1 day after; realisation method removed for APs ending on or after 1 January 2020 | LS2; LS5 | V |
| s 187 repeal | Migrations on or after 1 January 2020 (FA 2019 Sch 8 para 9) | LS5 | V |
| s 187B | UK land deemed disposal on migration postponed to actual disposal; election out within 2 years; from 6 April 2019 (annotation) | LS5 | V |
| Part 8ZB | Disposals on or after 5 July 2016; indirect 50% test | LS4 | V |

### 3.7 Intangibles and Patent Box

| Item | Value | Source | Status |
|---|---|---|---|
| Regime start | 1 April 2002 (Part 8); acquisitions from 1 July 2020 (any seller) | LS1 §4 | V |
| Fixed-rate election | 4%; within 2 years of the end of the AP of acquisition; irrevocable | LS1 §4 | V |
| Goodwill relief *(as built)* | 6.5% for relevant assets acquired from 1 April 2019 with qualifying IP; cap 6 × IP expenditure: restriction amount **RA = (A × 6) ÷ B** (A qualifying IP spend, B relevant-asset spend), debits × RA if RA < 1 (s 879M(3), s 879O(2), (6); CIRD44093: law sheet 1's formula was inverted); nil for 8 July 2015–31 March 2019 cases and related-individual acquisitions | LS1 §4; ch 11; review C | V / V-HMRC |
| Reinvestment window | 12 months before to 3 years after | LS1 §4 | V |
| Degrouping | 6 years; s 782A switched off on SSE-qualifying share sales (FA 2019) | LS1 §4 | V |
| Cross-border related-party transfers | Arm's length price (FA 2026 Sch 6 paras 25, 28), transfers and grants on or after 1 January 2026 | LS1 §4 | V |
| Patent Box | 10% special IP rate via deduction RP × (MR − 10%)/MR; nexus for elections after 30 June 2016 | LS1 §5 | V |
| Intangibles in CIR tax-EBITDA *(as built)* | Amortisation, 4% debits and disposal losses excluded; a realisation credit is excluded **only to the extent the asset's cost exceeds its tax written-down value** (TIOPA s 408; CFM95805 is HMRC's looser summary): a gain over cost stays in tax-EBITDA | R4; ch 11, 28 | V |

### 3.8 Loan relationships and derivatives

| Item | Value | Source | Status |
|---|---|---|---|
| Deemed release exceptions | Equity-for-debt (s 361C); corporate rescue (s 361D: release within 60 days; material risk within 12 months) | LS1 §2 | V |
| Commencement *(as built)* | s 361D corporate rescue: acquisitions on or after 18 November 2015; s 322(5B): releases on or after 1 January 2015 (CFM35570, CFM33191); NTLR deficit claims under s 463B within 2 years (s 463C) | ch 12 | V-HMRC / V |
| Release of unconnected debt | Conditions A–E (s 322) | LS1 §2 | V |
| Late interest | Only s 375 (close company participators; corporate creditors only in non-qualifying territories) and s 378 (pension scheme loans); ss 374, 377 omitted (FA 2015 s 25) | LS1 §2 | V |
| NTLR deficits | Current year; carry back 12 months against NTLR profits only; carry forward against total profits with a 2-year claim | LS1 §2 | V |
| Unallowable purpose | Debits disallowed so far as attributable (just and reasonable); tax advantage for any person | LS1 §2 | V |
| Disregard Regulations *(as built)* | Since 2015 regs 7–9 apply only by **reg 6A election** or in HMRC's **automatic cases** (designated fair value hedges, hedges of fair-valued loan relationships, certain avoidance cases: list not exhaustive); where the hedged item is taxed in line with the accounts the derivative follows profit or loss; reg 9A revoked (SI 2015/1961) | LS1 §3; CFM57040, CFM57075, CFM57360; R6 | V-HMRC (amended reg 6 not seen) |
| Change of accounting practice | SI 2004/3271; 10-year spreading of prescribed amounts (reg 3A as amended); IFRS 9 own-credit 5 years (40/25/15/10/10%) | LS4 §1.3 | S (amended text not on legislation.gov.uk) |

### 3.9 Corporate interest restriction

| Item | Value | Source | Status |
|---|---|---|---|
| Start | Periods of account starting on or after 1 April 2017 | LS1 §1 | V |
| De minimis | £2m a year (pro rata) | LS1 §1 | V |
| Fixed ratio | 30% of aggregate tax-EBITDA, capped by the fixed ratio debt cap (ANGIE + excess debt cap b/f from the preceding period) | LS1 §1 | V |
| Group ratio | QNGIE ÷ group-EBITDA (100% if negative, over 100% or EBITDA nil) | LS1 §1 | V |
| Disallowed interest | Carried forward indefinitely (lost on cessation, small or negligible) | LS1 §1 | V |
| Unused allowance *(as built)* | 5 years; arises only after the allowance has been used against ANTIE and **reactivations** (CFM98240, CFM98620, CFM95250); nil if an abbreviated return applies or no return is made | LS1 §1; R5, R20 | V / V-HMRC |
| Reactivation cap *(as built)* | Interest allowance less ANTIE, nil if negative (TIOPA s 373(3)); brought-forward unused allowance does not create reactivation capacity | R20; CFM98620; review F | V (secondary copy of statute) / V-HMRC |
| Gains in tax-EBITDA *(as built)* | Net chargeable gains included; capital losses count only when actually set against gains (Condition A), not when unused (CFM95720, extract truncated) | R5; ch 28 | V-HMRC |
| Finance lease charges *(as built)* | Tax-interest (s 382 Condition C) and a relevant expense in ANGIE (CFM95660, CFM95930) | ch 28; R20 | V / V-HMRC |
| Revised returns *(as built)* | A revised IRR is **required** where figures become incorrect, within 3 months (Sch 7A para 8(4)–(5); CFM98530, CFM98645); a revision driven by an enquiry closure can override the 36-month limit (CFM98800) | R20; review F | V (extract) / V-HMRC |
| Default disallowance order | NTLR debits; non-trading derivative debits; trading LR debits; trading derivative debits; finance leases etc. | LS1 §1 | V |
| Reporting company (FA 2026 s 61) | Periods of account ending on or after 31 March 2026: per period; no time limit; no notice; more than half of eligible companies; return optional unless allocating, carrying forward, reactivating or electing; HMRC may appoint after 18 months; para 1A regularisation from periods ending on or after 31 March 2024 | LS1 §1 | V |
| Old rules | Periods ending on or before 30 March 2026: notice within 12 months; at least 50% | LS1 §1 | V |
| Filing date | 12 months after the period end; no effect after 36 months | LS1 §1 | V |
| Tax-EBITDA exclusions (FA 2026 s 62) | Capex deducted under CTA 2009 ss 86A, 142, 145, 147 excluded; periods ending on or after 31 December 2021; revised IRRs effective if received before 1 October 2026 | LS1 §1 | V |

### 3.10 International

| Item | Value | Source | Status |
|---|---|---|---|
| Treaty non-residence | CTA 2009 s 18 (from 30 November 1993) | LS3 §1 | V |
| MLI | In force for the UK 1 October 2018; UK–Ireland: Arts 3, 4, 6, 7, 13, 15, 16, 17 and Part VI arbitration; **no Art 12** | LS3 | V |
| MLI Art 12 *(as built)* | UK reported to have reserved on the whole of Art 12 (secondary); UK–Ireland has no Art 12 (V) | ch 23 | S |
| Royalties for one asset from several jurisdictions *(as built)* | TIOPA s 47 applies s 44(2) under double taxation arrangements: treated as income from a single asset, credits aggregated; reach to unilateral relief (N25 Q1) not confirmed | ch 24, 32; review E | V / U |
| s 140 relevant state *(as built)* | SI 2019/689 reg 6: "relevant state" in s 140A = the UK or a member State (s 140L(10)); s 140C reworded ("a member State") | ch 25; review E | V |
| Non-resident company charge | s 5 CTA 2009: UK land dealing/development; UK PE trade; UK property business and other UK property income (from 6 April 2020) | LS3 §2 | V |
| Non-resident gains | UK land and UK-property-rich assets from 6 April 2019; FA 2026 s 40 cells (from 26 November 2025) | LS2; LS3 | V |
| PE definition (FA 2026) | New dependent agent ("principal role") test; closely related agents not independent; purpose clause s 1140A; chargeable periods beginning on or after 1 January 2026. *(as built)* Whether s 1140A's reference to the 18 November 2025 OECD Model follows later versions (as TIOPA s 164 and CTA 2009 s 20 do) is **not confirmed**; anti-fragmentation inserted by FA 2019 s 21 | LS3 §2.1; ch 2, 23 | V / U (s 1140A dynamic) |
| PE attribution (FA 2026) | ss 20(1A)–(1E), 21 rewritten; ss 22–23, 25–32 omitted; same date | LS3 §2.2 | V |
| Branch exemption | s 18A from 19 July 2011; irrevocable; all PEs; s 18S updated to the 18 November 2025 OECD Model | LS3 §3 | V |
| DTR credit limit | s 42 R × IG source by source; mixer cap (D + PA) × M% for underlying tax (s 58); onshore pooling and EUFT repealed for distributions from 1 July 2009 | LS3 §5 | V |
| DTR anti-avoidance | ss 81–88; s 81 substituted by FA 2018 s 31 (self-executing) | LS3 §5 | V |
| Part 9A | Distributions from 1 July 2009; s 931R election within 2 years | LS3; LS4 | V |
| Unremittable income *(as built)* | Part 18 (foreign income): claim within 2 years after the AP end. A blocked receipt of a **UK trade** is relieved under CTA 2009 **ss 173–175** (deduction not creating a loss; brought back when remittable), not Part 18 (BIM42750; R23); s 173 claim mechanics and s 174 not seen | LS3 §6; ch 25; R23 | V / U (s 173 claim) |
| Withholding on yearly interest *(as built)* | ITA 2007 s 874: deduction at the **basic rate** for the tax year of payment = **20% for 2026/27**; **22% savings basic rate from 2027/28** (FA 2026 ss 5–6, Sch 1 para 29) | LS3 §7; ch 23, 29 | V |
| Royalties to non-residents | Basic rate (s 906); treaty rate on reasonable belief (s 911) | LS3 §7 | V |
| EU I&R Directive relief | Repealed for payments from 1 June 2021 (FA 2021 s 34) | LS3 §7 | V |
| CT61 | Quarterly; within 14 days of the quarter end | LS3 §7 | V |
| Treaty Passport | DTTP1 (lender; normally 5 years); DTTP2 (borrower); withhold until HMRC direction | LS3 §7 | V |
| Notional tax credit for non-residents | Abolished from 2026-27 (FA 2026 s 42; ITTOIA s 399 omitted) | LS3; LS4 | V |
| Migration notice | TMA s 109B conditions A–D before migrating; penalties s 109C–D; recovery s 109E (6 months; 3 years; 51% group; controlling directors; 30 days) | LS5 D2 | V |

### 3.11 CFCs

| Item | Value | Source | Status |
|---|---|---|---|
| Regime *(as built)* | TIOPA Part 9A, inserted by FA 2012 Sch 20 (Royal Assent 17 July 2012); **applies to CFC APs beginning on or after 1 January 2013** (Sch 20 para 49); old regime from FA 1984 | LS5; ch 26; R28.7 | V |
| Chargeable company | ≥ 25% apportionment with connected and associated persons | LS5 | V |
| Charge | Appropriate rate (main rate assumed) × P% of chargeable profits − Q% creditable tax; in the AP in which the CFC's AP ends | LS5 | V |
| >50% investment rule | s 371RG; CFC APs from 1 January 2019 | LS5 | V |
| 40% rule | UK controller ≥ 40% and non-UK controller 40%–55% | LS5 | V |
| Exempt period | 12 months | LS5 | V |
| Excluded territories threshold | Greater of 10% of accounting profits and £50,000 | LS5 | V |
| Low profits | ≤ £50,000; or ≤ £500,000 with non-trading income ≤ £50,000; pro-rated | LS5 | V |
| Low profit margin | Profit before interest ≤ 10% of relevant operating expenditure | LS5 | V |
| Tax exemption | Local tax ≥ 75% of corresponding UK tax (break-even 18.75% at 25%) | LS5 | V |
| Trading profits safe harbour | Premises; ≤ 20% UK income (banks 10%); ≤ 20% UK management expenditure (or 50% per asset); no significant UK IP in the AP or previous 6 years; ≤ 20% exports of UK goods | LS5 | V |
| 5% incidental rule | NTFP ≤ 5% of trading/property profits (s 371CC) | LS5 | V |
| Ch 9 | 75% exemption (25% passes); full exemption for qualifying resources; business premises required; matched interest s 371IE | LS5 | V |
| Matched interest *(as built)* | s 371IE (substituted by F(No.2)A 2017): only the excess of the UK share of matched interest profits over the group's ANTIE is exempt; nil ANTIE gives full exemption (INTM219380) | ch 26 | V |
| CFC charge and QIPs *(as built)* | CTM92825 includes CFC tax in a very large company's total liability; QIP status turns on profits, so TPLC (nil TTP) pays its CFC charge 9 months and 1 day after its AP (book's reading) | ch 26; R29 | V-HMRC / book's reading |
| Group treasury election | Within 20 months after the AP | LS5 | V |
| Accounting profits TP | Ignore TP difference ≤ £50,000 | LS5 | V |
| State aid | Commission 2 April 2019; General Court 8 June 2022; Court of Justice 19 September 2024 (annulled); SI 2024/1307 in force 31 December 2024; FA 2026 s 51 (deemed in force 2 December 2025) | LS5 | S / V |
| Exempt period amendments | Return amendment window 12 months after the filing date (s 371JG) | LS5 | V |
| s 371SD(5A) | CFCs cannot use the UK-to-UK TP exemption (from 1 January 2026) | LS5 | V |

### 3.12 Transfer pricing

| Item | Value | Source | Status |
|---|---|---|---|
| Interpretation | OECD Model Art 9 (18 November 2025) and TPG 2022 as amended (s 164, FA 2026) | LS5 B1 | V |
| Commissioners' sanction | Removed from 18 March 2026 | LS5 | V |
| Financing participation | At the time or within 6 months | LS5 | V |
| FA 2026 participation changes | s 148A TP notices; s 161 acting together; s 162A common management; s 162B anti-avoidance; from 1 January 2026 | LS5 | V |
| UK-to-UK exemption | s 164A; chargeable periods commencing on or after 1 January 2026 | LS5 | V |
| Guarantees | s 153A; s 153B election within 4 years; new borrowing from 1 January 2026; all arrangements from periods commencing on or after 1 January 2028 (or by election) | LS5 | V |
| Compensating adjustment claims | Within 2 years (ss 176–178) | LS5 | V |
| MAP solutions | Given effect despite any enactment; consequential claims within 12 months (s 124) | LS5 | V |
| APAs | TIOPA Part 5; past periods not before 27 July 1999; FA 2025 s 22 retrospective | LS5 | V |
| LVAS mark-up | 5% (INTM440071) | LS5 | V (manual) |
| Presumed carelessness | FA 2007 Sch 24 para 3C (F(No.2)A 2023, 11 July 2023) | LS5 | V |
| ICTS | FA 2026 s 48; consultation 16 June–31 July 2026; intended for APs beginning on or after 1 January 2027; regulations not made | LS5 | V / S |

### 3.13 Hybrids, Pillar Two, DPT/UTPP

| Item | Value | Source | Status |
|---|---|---|---|
| Hybrids | TIOPA Part 6A; payments from 1 January 2017; FA 2021 relaxations (from 10 June 2021; Ch 12A from 1 January 2021); **no FA 2025/FA 2026 amendment**; s 259B still lists DPT | LS5 C | V |
| MTT / IIR | APs commencing on or after 31 December 2023 | LS3 §10 | V |
| UTPR | APs commencing on or after 31 December 2024 (FA 2025 Sch 4) | LS3 §10 | V |
| Side-by-side package *(as built)* | OECD package January 2026; in the draft Finance Bill 2026-27 (13 July 2026): **proposed, not law** | ch 30 | V (GOV.UK policy paper) |
| Registration | Within 6 months after the end of the first qualifying AP | LS3 §10 | V |
| GIR / UK return | 15 months; 18 for the first; floor 30 June 2026 | LS3 §10 | V |
| Transitional CbCR safe harbour | APs commencing on or before 31 December 2026 and ending on or before 30 June 2028; simplified ETR 15% / 16% / 17% (periods beginning on or after 1 January 2026); de minimis revenue < €10m and profit < €1m | LS3 §10 | V |
| FA 2026 Sch 8 | General commencement APs beginning on or after 31 December 2025 (retrospection election) | LS3 §10 | V |
| DPT | FA 2015 Part 3; APs from 1 April 2015; 25%, then 31% for APs beginning on or after 1 April 2023 (FA 2021 s 8; straddles split); **repealed for APs beginning on or after 1 January 2026**; announced in the Autumn Statement of 3 December 2014 (secondary) | LS3 §9; ch 30 | V |
| UTPP *(as built)* | TIOPA ss 217A–217T; CT rate + 6% (31%); conditions in **ss 217C–217E** (INTM489105): effective tax mismatch outcome (corresponding tax < 80%; **exactly 80% is not a mismatch**, INTM489135), tax design condition (not a main purpose test; INTM489140), not wholly excepted loan relationship arrangements (INTM489150); preliminary notice within 4 years; 30-day representations; assessment within 60 days; 15-month amendment period; pay first; no reliefs | LS3 §9; ch 30; R28.8 | V / V-HMRC |
| IAS 12 Pillar Two exception | 23 May 2023 (IASB); UK endorsement 19 July 2023; FRS 102/101 July 2023 | LS4 §2 | V / S |

### 3.14 Demergers, distributions, transactions in securities, liquidation, stamp taxes

| Item | Value | Source | Status |
|---|---|---|---|
| Demerger conditions | A–M (ss 1081–1085); clearance s 1091 (SP 13/1980 still cited) | LS2 §11 | V |
| 2026 distributions consultation | 23 June–14 September 2026; proposals only | LS2 §11 | V |
| Transactions in securities | CTA 2010 Part 15; circumstances C, D, E (A omitted by FA 2010); clearance 30 + 30 days; counteraction no later than 6 years after the AP | LS4 §7 | V |
| Liquidation / administration APs | Ends immediately before winding up starts (then 12 months); ends immediately before the day of administration | LS1 §7; LS4 §8 | V |
| Final-year rates | Fixed rate, else proposed, else penultimate year's (ss 626–633); repayment interest ≤ £2,000 not taxable (s 633) | LS4 §8 | V |
| Stamp duty / SDRT | 0.5% (rounded up to £5); £1,000 threshold; 30 days; 1.5% depositary receipts; SDRT listing relief 3 years for listings from 27 November 2025 (FA 2026 s 85). *(as built)* **Contingency principle**: contingent consideration with a stated maximum is charged on the maximum, no refund (STSM021120); convertible loan capital is outside the loan capital exemption (FA 1986 s 79(5); STSM041070); a dividend in specie of shares has no consideration (STSM021130) | TKS; LS2; ch 20, 21; R22 | V / V-HMRC |
| Stamp duty group relief | FA 1930 s 42: 75% of shares, profits, assets; arrangements denial | LS2 §15 | V |
| s 77 share-for-share relief | Whole share capital; shares only; mirror image; no disqualifying arrangements (s 77A, FA 2016 s 137) | LS2 §15 | V |
| s 76 acquisition relief | Repealed (FA 2012) | LS2 | V |
| SDLT non-residential | 0% to £150,000; 2% to £250,000; 5% above; lease NPV 0%/1%/2% (£150,000; £5m); 14 days | TKS | V |
| SDLT group relief clawback | 3 years; market value at the original effective date | LS2 | V |
| SDLT acquisition relief | 0.5% cap; cash ≤ 10% of nominal value; not land dealing | LS2 | V |
| SDLT sale and leaseback | s 57A; not if both in the same SDLT group | LS2 | V |
| CT sale and leaseback | CTA 2010 Part 19; Ch 2: new lease ≤ 15 years after assignment of a lease ≤ 50 years: (16 − N)/15 taxed | LS4 §1.6 | V |
| LBTT *(as built)* | Group relief LBT(S)A 2013 Sch 10; non-residential 0% / 1% / 5% (bands £150,000 / £250,000, from 25 January 2019); lease NPV 0% / 1% / 2% (£150,000 / £2m, from 7 February 2020) | LS2; Revenue Scotland; ch 21 | V (official guidance; revision currency unconfirmed) |

### 3.15 Accounting

| Item | Value | Source | Status |
|---|---|---|---|
| FRS 102 (2024 amendments) | Periods beginning on or after 1 January 2026: leases on balance sheet (modified retrospective only); five-step revenue | LS4 §1.4 | S |
| Lease transition spreading | FA 2019 Sch 14 Part 3: weighted average remaining lease term; covers FRS 102 adopters | LS4 §1.4 | V |
| Change of basis | Adjustment on day one of the new basis; no general spreading (CTA 2009 s 181) | LS4 §1.2 | V |
| Deferred tax rate | 25% enacted for FY2026 and FY2027 | LS4 §2 | V |
| IAS 12 | Temporary differences; May 2021 single-transaction amendment | LS4 §2 | V |

### 3.16 FA 2026 changes relevant to LCG (checklist)

s 5–6 (savings basic rate 22% from 2027/28; withholding); ss 11–12 (FY2027 rates); s 28 (14% WDA); s 29 (40% FYA); s 30 (EV FYA to 31 March 2027); s 31 (RDEC surrender payments); s 34 (overseas R&D, ERIS only); s 36 (s 103K CIS); **s 37 (s 137 recast)**; **s 38 (s 139 recast)**; s 40 (cells, Sch 1A); s 42 (non-resident dividend credit); **s 46 and Sch 5 (DPT repealed; UTPP)**; **s 47 and Sch 6 (TP reform; UK-to-UK exemption; intangibles at arm's length; guarantees)**; s 48 (ICTS power); **s 49 and Sch 7 (PE definition and attribution)**; s 50 and Sch 8 (Pillar Two); s 51 (CFC State aid interest); s 56 and Sch 9 (tainted donations); **s 61 (CIR reporting companies)**; s 62 (CIR tax-EBITDA capex); s 63 (s 1305B); s 85 (SDRT listing relief); s 159 ff (promotion offence etc.); ss 216–219 (DOTAS penalties); s 264 (late payment penalty); **s 265 (late filing penalties)**; ss 266–274 (advance clearances). **Not changed:** loss relief, Part 5/5A/7ZA, Part 14, unallowable purpose, Part 8 (except Sch 6), Patent Box, R&D rates, SAO, tax strategy, UTT, CCO, SSE, ss 171/179/Sch 7A/ss 184A–I/190, demergers, full expensing, AIA, SBA, fixtures, LFLs, FA 1930 s 42, SDLT Sch 7, hybrids, Part 9A, the branch exemption (except s 18S), TIOPA Part 2 DTR (LS1 §9; LS2 §16; LS3 §12; LS4; LS5).

**After FA 2026 (not law for 2027 sittings):** draft Finance Bill 2026-27 (13 July 2026; technical consultation closed 7 September 2026): Pillar Two "side-by-side" package; **compulsory foreign branch exemption for APs beginning on or after 1 January 2027** (s 18A(1) substituted; opening negative amount rules (ss 18J–18O) replaced by loss restriction transitional rules; anti-avoidance from 13 July 2026; policy paper 21 May 2026; an oil and gas earlier start disputed between sources); stablecoins; error correction; deliberate defaulters; information powers. Autumn Budget **28 October 2026** (not yet held at 9 October 2026; secondary); Bank Rate decision 5 November 2026. HMRC consultation on standardised, fully tagged CT computations (10 March–2 June 2026; pilot October 2027, mandatory September 2028: proposed). ICTS regulations (FA 2026 s 48) not made. Corporate Tax Roadmap (30 October 2024): 25% main rate cap "for this Parliament" (a commitment, not law). *(as built)*

### 3.17 Legislative and story dates

See `book-plan.md` §9 (master timeline) and `calder-ledger.md` §7 (story events). Spellings and spoken names: `book-plan.md` §11.


### 3.18 Canonical story figures changed or fixed by rulings (as built)

Invented (I). The ledger is the authority; this table records the figures most often quoted across chapters.

| Item | As built | Ruling |
|---|---|---|
| QIP divisors, 31 December companies | GY1 **8** (large £187,500; very large £2,500,000); GY2 **9** (£166,667 / £2,222,222); GY3–GY7 **10** (£150,000 / £2,000,000); RY+1 onward **11** | R1; ch 31 |
| Marginal relief divisors | GY1 9 (limits £5,556 / £27,778); GY2–GY4 10; GY5–GY6 11; GY7 10; Ridgeway year 11 | R1 |
| Calder QIPs | AP to 31 March GY2: divisor **1**, large; 4 × **£187,500** (14 October GY1; 14 January, 14 April, 14 July GY2) on £750,000; AP to 31 March GY3: divisor 9, very large (14 June, 14 September, 14 December GY2; 14 March GY3; each + £25,000 for the change of basis); 9-month AP: divisor 10, very large threshold £1,500,000 (14 June, 14 September, 14 December GY3) | R1, R2, R14 |
| TAL; RC; TIL; Helmside | TAL divisor 11 (11-month AP: £125,000 / £1,666,667 / £833,333); RC AP1 divisor 1 (not large), AP2 grace, AP3 QIPs 4 × £25,000; TIL migration AP very large (threshold £1,000,000; 14 March, 14 June GY4); Helmside GY4 divisor 1 (not large) | R1, R29; ch 20, 22, 31 |
| TEL GY1 | Group relief from TPLC £11,665,000 (ME £5,075,000 + NTLR £6,590,000) + Helmside £1.8m; TTP **£10,535,000**; CT **£2,633,750** (£2,508,750 without the TPLC TP adjustment) | R3, R29 |
| TEL GY2 | Group and consortium relief £17,095,000 (TPLC ME £5,475,000; NTLR £7,670,000; BSL £2,600,000; Helmside £1,350,000); TTP **£8,905,000**; CT **£2,226,250**; QIPs 4 × **£556,562.50**; RDEC from BSL £600,000; net **£1,626,250** | R3, R7 |
| TES/TEL refund surrender (GY2) | TEL paid 4 × £456,562.50 = £1,826,250 against £2,226,250 (short £400,000); TES overpaid £569,375, surrenders £400,000, repaid £169,375; saving £13,291 | R3 |
| s 105(3A) (TPLC) | Threshold GY1 £2,925,000, GY2 £3,025,000; ME surrendered £5,075,000 / £5,475,000; £825,000 a year carried forward and stranded (£3.3m by end GY4; + £1,275,000 GY5) | R3 |
| Group ETR GY2 | £24,385k; **24.39%** (Pillar Two top-up £66,000 excluded; 24.45% with it) | R3, R25 |
| TES lease assignment (GY3) | Allowable cost £648,800; indexation (assumed factor **0.250**) £162,200; gain **£189,000**; TES net gains **£489,000**; property and other profits £14,311,000 (tax-EBITDA £14.8m unchanged) | R5, R19 |
| TES lease grant (GY4) | Income element £840,000; part-disposal cost **£290,000**; gain **£870,000**; reversion cost £1,210,000; CT £427,500 | R19 |
| CIR GY1 / GY2 | Aggregate tax-EBITDA £74.8m / £78.4m; ANTIE £24.65m / £25.82m; disallowed **£2.21m** / **£2.30m** (allocated to TPLC) | ledger |
| CIR GY3 **as filed** (GY4) | Aggregate tax-EBITDA £87.7m (Calder £8.6m incl. the £6.0m IFA credit); ANTIE **£24.44m** (incl. TEL's £90,000 lease finance charge); ANGIE £31.64m; 30% £26.31m; reactivation **£1.87m**; c/f **£2.64m**; no unused allowance; TPLC NTLR deficit £10.37m to TEL | R4, R5, R20 |
| CIR GY3 **revised** (GY6; canonical) | Calder £10.6m; aggregate **£89.7m**; allowance **£26.91m**; reactivation **£2.47m**; c/f **£2.04m**; extra £0.6m TPLC deficit stranded (TEL's claim window closed 31 December GY5; tax forgone £150,000) | R20 |
| Helmside GY4 | Full-year ceiling £585,000; claimed **£536,250** (11/12); Helmside TTP £763,750, CT £190,937.50; payment £134,062.50; £48,750 of TPLC ME to TEL | R21 |
| Stamp duty | Calder £160,000; BSL £120,000 (£111,000 + £9,000); Helmside £80,000; TAL (Brennock) **£270,000**; RH £22,500; total £652,500 (Tarnmoor companies £382,500). SDLT group relief £923,500; clawed back £654,000; kept £269,500 | R22 |
| TAL consideration | £48.0m + earn-out right £3.0m + degrouping gain £2.5m = **£53.5m**, exempt; earn-out receipts GY7 £2.0m (gain £0.5m), GY8 £2.5m (gain £1.0m); CT £375,000 (accepted view) | R22 |
| Calder TP settlement (GY6) | £8.0m (HMRC argued £9.5m); adjustment £2.0m; CT £500,000 plus interest (QIP rate from the 9-month AP instalment dates to 1 October GY4, then late payment interest); no penalty; no balancing payment; UTPP gate not met (exactly 80%) | R20, R26; ch 30 |
| Pillar Two (Marrovia) | ETR 13.0%; IIR top-up £66,000 a year GY1–GY4; £102,000 GY5 (no SBIE; labelled simplification) | R25 |
| Interest rates | Bank Rate 3.75%; QIP debit 6.25% (BR + 2.5%); QIP credit 3.50% (BR − 0.25%); late payment 7.75% (BR + 4%); repayment 2.75% (BR − 1%) | R26 |
| Blocked receipt | TEL £400,000 (GY6) deducted under s 173; brought back GY7 (s 175); £100,000 CT deferred | R23 |
| Undertow (rejected, GY4) | £80m notes at 7% (£5.6m coupon); adviser's CFC charge £350,000, claimed saving £1,050,000; full CFC charge £1.4m less £1.12m withholding credit = £280,000; deduction worth £1.4m denied on the hybrid rules alone | R29; ch 29 |
| TCM CFC charge | £132,000 a year GY1–GY4 (chargeable £825,000; creditable £74,250); GY5 £204,000 (£1,275,000; £114,750); £816,000 without the Ch 9 claim | ledger; ch 26 |
| TIL migration | CT1 £850,000; CT2 £325,000 (£300,000 trading + £25,000 balancing charge outside the plan); plan 6 × £87,500 (1 April GY5–GY10); warehouse gain £800,000 postponed (s 187B) | ch 22 |
| Ridgeway | Price £4.5m; stamp duty £22,500; RC CT £125,000 before the election, about £100,000 after; election saving £25,000 a year (net £5,000–£25,000 after CIR and Pillar Two interactions); DTL £200,000 | ch 31 |


---

## 4. Coverage (as built)

### 4.1 What *The Living Law* (TKS) taught, and how this book used it

The TKS files themselves (`/home/claude/cta-tks/`) were **not available** during the build (orchestrator addendum). Every TKS recap was therefore limited to what the starting bible (§4.1) and the ledger (§1) recorded; no TKS chapter content was invented. Gaps noted by writers: no TKS chapter on exam technique (ch 32); the 1926 UK–Irish agreement told fresh rather than as a recap (ch 24); Jess's TKS journey generalised (ch 31).

| TKS chapter | LCG chapters that recap it | LCG went further on (as built) |
|---|---|---|
| 2 Where tax law lives | 2 | OECD texts written into statute (s 164, s 20; s 1140A unconfirmed); accounts as a source; legislation.gov.uk dating; exam research |
| 3 Planning, avoidance and evasion | 4, 12 | DOTAS penalties (FA 2026), *AML Tax*, CCO, GAAR indicators, APN representations, purpose tests |
| 5 Compliance machine | 3 | QIP counting dates (R1), very large companies, GPAs, refund surrender, group enquiry windows, FA 2026 penalties |
| 9 Benefits and leaving package | 5, 7 | Calder's provision and the employer's deduction for Dan's package |
| 11 Is it a trade? | 7, 13 | Badges in the company context; investment v trade |
| 12 Capital allowances | 8, 9 | Special balancing charges; s 58(5); AIA sharing; LLA; LFLs; fixtures; SBA; successions |
| 20 CT foundations | 1, 3, 7, 22 | Threshold ladder; associated companies; marginal relief; residence |
| 21 Inside TTP | 5, 7, 10–12, 16 | Unallowable purpose; derivatives; goodwill; Patent Box; RDEC steps; linked enterprises |
| 22 When companies lose | 14 | Group allowance; Part 14 chapters; Part 14A/14B; liquidation |
| 23 Company gains | 16, 18 | Leases; group roll-over; para 15A; s 137 recast; earn-outs |
| 24 Groups | 15, 17 | Consortium relief in full; arrangements (s 155); depreciatory transactions; value shifting; s 190 |
| 26 Companies abroad | 22–25, 31 | FA 2026 PE; withholding; treaties; CFC; migration; Ridgeway's Dublin branch (elects) |
| 30 Stamp taxes | 21 | Contingency principle; s 77A; Sch 7 guards; sale and leaseback |
| 31 Interaction | 31 | The real sale to Tarnmoor at £4.5m (buyer's side) |

TKS did not teach (taught here from first principles): transfer pricing, CFCs, CIR, Pillar Two, hybrids, DPT/UTPP, migration, deferred tax, demergers, transactions in securities, management expenses, Part 14 in depth.

### 4.2 Which chapter owns what (as built)

Word counts and file names are in `README.md`. Grades are from the 2026 grid (1 core, 2 non-core, 3 awareness).

| Piece | Owns (as built) | Key story steps |
|---|---|---|
| P | *BlackRock* through three courts; TP v unallowable purpose v CIR | — |
| I | Four questions; the paper; how to use the book; conventions | Tarnmoor introduced |
| 1 | Separate entity; group-definitions matrix; threshold ladder (two QIP/MR counts); tax function; paper map | Calder acquired; Dan |
| 2 | Statute map; dynamic OECD references; treaties; accounts as source; HMRC guidance; clearances (NSC; Advance Tax Certainty Service); case law; legislation.gov.uk dating; exam research | s 164A memo (GY1) |
| 3 | APs and filing dates; QIPs (large/very large; counting date; grace; RDEC; short APs); truing up; GPAs; refund surrender; enquiries; discovery; penalties; interest (R26) | Calder QIPs; TES refund surrender; BSL returns |
| 4 | SAO; tax strategy; UTT; CCO; DOTAS; FNs/APNs; GAAR; promoters; ADR/LSS | TEL UTT; CCO incident; promoter declined |
| 5 | s 46; GAAP; Part 20; provisions; change of basis; COAP; leases; functional currency | Calder FRS 101; restructuring provision |
| 6 | Current and deferred tax; IAS 12 / FRS 102 s 29; ETR reconciliation; Pillar Two exception | Calder DT; group ETR 24.39% |
| 7 | CT computation pro forma; employment costs; Part 12; entertaining/fines (*ScottishPower* pending); QCDs; income not otherwise charged; MR | TEL GY2 computation; Dan's package |
| 8 | P&M at AT depth (FE, 50%, 40%, hybrid rates, s 58(5), AIA sharing, special balancing charges, LLA, cars, HP, software, giving effect) | TEL GY2 pools; Calder plant sale |
| 9 | SBA; fixtures; LFLs; successions; connected sales; contributions; allowance buying; special tax sites | Distribution centre; LFL; flood wall; TES fixtures |
| 10 | Merged RDEC (seven steps); ERIS; SME/linked; overseas restriction; claim notification; R&D allowance | Project Ashlar; BSL credit to TEL |
| 11 | Part 8 at AT depth; goodwill (6.5%, 6× cap); reinvestment; group transfers; degrouping (s 782A); related parties; Patent Box | Calder sale to TVS; TAL patents; Patent Box |
| 12 | Loan relationships and derivatives: connected parties, releases, corporate rescue, unallowable purpose (2024 trilogy), NTLR deficits, Part 6, Disregard Regulations | BSL notes; rejected pushdown; TFL swap |
| 13 | Management expenses; *Centrica*; s 105(3A); surplus ME; investment company change of ownership | TPLC ME and threshold |
| 14 | Losses at AT depth; Part 7ZA group allowance; Part 14 (Chs 2, 2A–2E, 3, 5A, 6); Part 14A/14B; liquidation | BSL's £8.6m; Helmside; loss refresh declined |
| 15 | Group relief AT; consortium relief (link company; s 155 arrangements); Part 5A; JVs; corporate partners; DRIC | TPLC/TEL surrenders; Helmside GY1–GY4; Moorgate |
| 16 | Company gains; leases and premiums (CG70960); roll-over/holdover; s 161; Part 8ZB; s 48 | Depot; lease assignment; lease grant |
| 17 | Gains groups: ss 170–177, 171A, 175, Sch 7A, ss 184A–184I, depreciatory transactions, value shifting, s 179, s 190 | Works; factory; group roll-over; s 171A; BSL loss; TAL degrouping |
| 18 | Share matching; QCBs; SSE at AT depth; reorganisations; share exchanges; new s 137/s 138; stock dividends; earn-outs | Coldwater; Helmside exchange; TAL earn-out |
| 19 | Distributions (paid and received); Part 22 Chs 1–2; reconstructions; s 139 recast; demergers; transactions in securities; strike-off | Tarnwater demerger; TAL hive-down; Pumps strike-off |
| 20 | Share v asset; DD and SPA; acquisition costs; joining and selling checklists; hive-down and para 15A | Calder and BSL joining; TAL sale |
| 21 | Stamp duty, SDRT, SDLT, LBTT for groups (grade 3; SDRT ungraded): contingency principle, s 79(5), s 77A, Sch 7 guards, sale and leaseback | Five share deals; three land transfers; head office |
| 22 | Residence (CMC cases, treaty residence, s 18); migration (exit charges, s 109B notice, Sch 3ZB plans, s 187B) | TIL migration |
| 23 | Non-resident companies; PE definition (FA 2026) and attribution; Part 22 Chs 5–7; withholding; NRL | TVS UK PE; BSL royalty; TIL landlord |
| 24 | Treaties (Model, MLI, PPT, beneficial ownership, non-discrimination, MAP); DTR (credit limit, s 47, allocation, PE carry-forward, underlying tax) | Refinery PE credit; Calder royalty |
| 25 | Branch exemption (s 18A, relevant day, TONA, anti-diversion); Part 9A; s 140; unremittable income (ss 173–175 v Part 18); international movements of capital; draft compulsory exemption (proposed) | Calder's branch decision; blocked receipt |
| 26 | CFCs (order of attack; gateway; Ch 9; s 371IE; exemptions; State aid saga) | GY5 CFC review (TCM, TVS, TIL) |
| 27 | TP and APAs (participation; s 164A; methods; *DSG*; services; financing; restructurings; relief; MAP; documentation; ICTS) | TPLC recharge; TIL loan; Calder settlement and APA |
| 28 | CIR (all steps; reactivation; unused allowance; revised returns; PIE; s 461) | GY1–GY3 CIR; GY6 revision |
| 29 | Hybrids (Part 6A; equity notes; HCI; s 259BD) | Project Undertow |
| 30 | Pillar Two (MTT/DTT; safe harbours; side-by-side proposed); DPT to UTPP | Marrovia top-up; UTPP check |
| 31 | The Ridgeway deal: every regime applied to one acquisition | RH/RC acquisition; s 18A election |
| 32 | Exam craft: RM Assessment Master, spreadsheet rule, resources, timing, marking, trap atlas | — |
| 33, 34 | Conclusion (four questions answered; debates revisited; what is coming); note on sources (where the law lives; what could not be opened; keeping up) | — |

### 4.3 Debates (plan §8) as covered

Each side given at its strongest; no personal verdict on live controversies.

| # | Debate | Covered in |
|---|---|---|
| L1 | Separate entity or single economic unit | 1, 14, 15, 28, 30; C |
| L2 | Reach of unallowable purpose | P, 12; C |
| L3 | Arm's length principle | P, 2, 11, 26, 27; C |
| L4 | DPT v UTPP | 23, 30; C |
| L5 | Global minimum tax | 6, 26, 30; C |
| L6 | Interest restriction design | 28 (and 12); C |
| L7 | R&D relief: incentive v fraud and error | 10; C |
| L8 | CFC rules and EU law | 2, 26; C |
| L9 | Should tax follow the accounts? | 5, 6, 7, 11, 12; C |
| L10 | Does transparency change behaviour? | 3, 4, 27; C |
| L11 | Territoriality | 25, 26, 31; C |
| L12 | Certainty or fairness (purpose tests) | 14, 17, 18, 19, 20, 21; C |

---

## 5. Open threads and verification flags (as built)

### 5.1 Story threads

| Thread | Status |
|---|---|
| Brackenwell's restricted losses (£8.6m) | Closed: permanently restricted (Part 14 Ch 2 triggered; later revival does not undo it) (ch 14; R8) |
| Calder's TP dispute and MAP corresponding adjustment | Closed: GY6 settlement at £8.0m; Vallaria's corresponding adjustment GY7; APA from GY6 (ch 27) |
| TIL's payment plan; UK warehouse gain | Plan instalments run to 1 April GY10; postponed £800,000 awaits a sale (none fixed): open, optional |
| TAL earn-out receipts (GY7–GY8) | Closed on the "accepted view" label (ch 18) |
| Moorgate Logistics LLP | Closed: GY4 used; later years not needed (ch 15) |
| Ridgeway's Dublin branch election (TKS) | Closed: RC elects under s 18A during AP1, effective 1 April RY+1 (ch 31) |
| Dan Hartley after redundancy | Left open (one line in ch 31) |
| CCO incident reporting decision (GY3) | Left open (legal advice) (ch 4) |
| TVS's GY4 service fee to TEL; TEL's distributor margin from GY5 | Unpriced (R29) |
| CIR after GY3 | No figures exist for GY4 onward; disallowed amounts carried forward (no figure) (R20) |
| Coldwater remaining 8% | Exempt until about September GY9 if Coldwater keeps trading (ch 18) |

### 5.2 Planning-stage verification flags: status

R = resolved (source); P = partly resolved; O = open (carried to `author-notes-fact-check-flags.md`).

| # | Flag | Status | Resolution or what remains |
|---|---|---|---|
| 1 | No 2027 LCG grid, prospectus or tax tables | **O** | Still unpublished at 9 October 2026 (ch 32, framing searches). Check when published (expected around January 2027) |
| 2 | Final 2025 grid not found | O | Comparison remains against the January 2024 draft (note on sources says so) |
| 3 | 2028 transitional rules; JP form of the paper | O | Unpublished; context only |
| 4 | M26 report typo heading; no reading time; presentation line dropped | R | Noted in ch 32 |
| 5 | Consortium in the grid | R | Examinable (N24 Q2); taught in full (ch 15); law sheet 4 trap 18 wrong |
| 6 | QIP thresholds: £20m divided? £10m grace? | R / P | R1: all three divided by associates counted the day before the AP; no grace for very large (CTM92520, CTM92530, CTM92800, COM95001). Residual: SI 1998/3175 reg 3 text not seen; COM30110 says "ending on or after 1 April 2023" where CTM92530 says "beginning"; whether a grace year counts as "large" for the next AP (ch 31) |
| 7 | Long periods of account | R | Sch 18 para 14 (CTM93040; ICAS): 30 months from start for periods over 18 months (ch 3) |
| 8 | *BlackRock* citation and SC date | R | Use [2024] EWCA Civ 330; SC list 13 October 2024; "419" is a listing error (P; ch 12) |
| 9 | *Fidex* lead judge; *Greene King*/*Union Castle* holdings; *Syngenta* | P / O | *Fidex* lead judge not checked (no judge named); *Greene King* used only for FA 1996 origin; **Syngenta UT decision pending** |
| 10 | FA 2026 s 216 commencement; FA 2015 s 25; F(No.2)A 2015 dates | P / O | s 361D (18 November 2015) and s 322(5B) (1 January 2015) resolved (CFM); s 216 and FA 2026 s 159 commencement and FA 2015 s 25 open |
| 11 | R&D claim notification paragraphs; PAYE cap exemption; ERIS cap; SME on acquisition | R / P | 186% cap (CIRD122000); s 1142A inserted by F(No.2)A 2023 Sch 1; acquired company large for the whole AP (CIRD92000: HMRC's view, secondary); PAYE cap exemption wording secondary; paras 83EA/83EB numbering unverified |
| 12 | Patent Box guidance date; s 879O image | R / O | s 879O resolved (RA = (A × 6) ÷ B; CIRD44093; review C). Patent Box small-claims threshold (£1m v £3m) unresolved: not stated |
| 13 | CTA 2009 ss 455B–455D; CTA 2010 group mismatch rules | O | Not used |
| 14 | Tax strategy (FA 2016 Sch 19) | R | Paras 16(2)–(3), 18 seen; "on or after 15 September 2016" (FA 2016 s 161); different year ends per GOV.UK guidance (ch 4) |
| 15 | s 394 after reactivation; s 407 gains and capital losses | R | R5, R20: CFM98240, CFM98620 (HMRC's view); CFM95720 (capital losses only when used) |
| 16 | SAO joiners | R | R10: group member at the end of the preceding FY (SAOG11240/11270); SAOG11300 not opened |
| 17 | Functional currency | P | ss 5–8, 9A, 11 via explanatory notes and CFM; s 9A Condition B unverified (ch 5) |
| 18 | *Peeters*; *Tesco*; TiS cases; *Ayerst*; *Cleary*; *Page v Lowther* | P | Both *Williams*/*Willis* forms given ([1983] STC 453); *Ayerst* HL 21 May 1975, [1976] AC 167 (review C); *Tesco* and TiS cases secondary; *Cleary*/*Page* not used |
| 19 | LFL lessee FYA | O | No express bar found except s 70DA; KPMG says lessees can claim; labelled "not settled"; story uses a second-hand machine (ch 9) |
| 20 | CTA 2009 ss 76–81 | P | s 79 verified (cap £27,036 fallback); ss 77, 78, 80, 81 not opened (ch 7) |
| 21 | Stock dividends: s 141 | R | FA 1998 s 126 substituted s 142 for old ss 141–142; CTM17005 out of date (review D) |
| 22 | COAP amended text | O | HMRC manuals relied on; reg 3A not on legislation.gov.uk (ch 5) |
| 23 | IAS 12 paragraph detail; FRS 102 Pillar Two paragraphs | P | Paras 4A, 81(c), 88A–88D verified; 68A–68C secondary; FRS 102 paragraph numbers not found; whether the IASB has set an end date for the Pillar Two exception not checked |
| 24 | s 105 and excess QCDs | R | s 105(3A) profit-related threshold; QCDs surrendered first (ch 7; R3) |
| 25 | s 140A "relevant state" | R | SI 2019/689 reg 6: s 140L(10) = UK or a member State; s 140C reworded (ch 25; review E). Ch 9's sentence on the post-Brexit reach of ss 561/140A still says "unclear" (see author notes) |
| 26 | Sch 3ZB; balancing charge in a plan | R / O | Balancing charge not qualifying CT (ch 22); QIP treatment of tax later deferred under a plan open |
| 27 | Lease premium part disposal | R | CG70960 (R19): £290,000 |
| 28 | Earn-out right after an SSE sale; *Marren* court | P | Practitioner "accepted view" taught and labelled (no HMRC statement); House of Lords per secondary sources (R28.3) |
| 29 | CAA s 247; allowance buying | R / P | s 247/248 verified (ch 8); ss 212A–212S scope and thresholds verified via explanatory notes; ss 212N–212S mechanics not opened (ch 9) |
| 30 | Intangibles degrouping on an exempt demerger | O | Avoided (TWS holds no transferred intangibles) |
| 31 | LBTT rates; freeport sunsets | R | Revenue Scotland 0/1/5% (ch 21); sunsets 30 September 2031 / 2034 (ch 9; review B) |
| 32 | Company private use of plant | R | HMRC's view (CA27100) (ch 8) |
| 33 | *Prudential*; *Gallaher* | O | Not cited |
| 34 | Stamp duty on a demerger distribution; contingent consideration | R | STSM021130 (dividend in specie: no consideration); STSM021120 (stated maximum) (ch 20, 21; R22) |
| 35 | s 719 for TPLC 45% → 85%; consortium arrangements | R / O | Arrangements resolved (s 155; R21); s 719 point immaterial (no Helmside losses after GY4), left open |
| 36 | OECD texts not opened | O | Stated in the text and the note on sources |
| 37 | Pillar Two threshold wording | O | Statute and MTT01100 "exceeds"; GOV.UK guidance "or more": taught as a discrepancy |
| 38 | QDMTT and the CFC rules; Irish QDMTT and residence law | O | No HMRC guidance found; Irish law not stated (ch 26, 30, 31) |
| 39 | SI 2012/3024 (Ireland?); exempt period for a migrating company | O | Not confirmed (chs 26, 31); not relied on |
| 40 | s 371IE matched interest | R | Ch 26 (legislation.gov.uk extract; INTM219380) |
| 41 | Relief for a foreign TP adjustment relating to a UK PE | O | Section not located (ch 23) |
| 42 | MLI generalisation; INTM153270 currency | O | UK reservation on all of Art 12 secondary (ch 23); stated in ch 24 |
| 43 | Withholding 20% for 2026/27 | R | s 874 "basic rate" (ch 23, 29) |
| 44 | TIOPA ss 89–95 status; s 259B lists DPT | O | Both unresolved (ch 24, 29) |
| 45 | EU State aid dates | P | 19 September 2024 multi-source; 2 April 2019, 8 June 2022 and AG Medina secondary (ch 26) |
| 46 | 2004 UK-to-UK TP history; 30-day records | P | FA 2004, chargeable periods from 1 April 2004 resolved (ch 2); *Lankhorst-Hohorst* link labelled; 30-day production period not in SI 2023/818 (open) |
| 47 | ICTS start date | O | Consultation 16 June–31 July 2026; intended APs from 1 January 2027; regulations not made (ch 27) |
| 48 | Side-by-side | R | In the draft FB 2026-27: proposed, not law (ch 30) |
| 49 | UTPP effective tax mismatch computation | R | INTM489135: exactly 80% is not a mismatch (ch 30) |
| 50 | Calder FRS 102 → FRS 101 classification | R | Change of accounting policy (BIM34050); +£0.4m mechanism invented (ch 5) |
| 51 | Helmside GY4 claimant-profit measure | R | s 143/s 144; then s 155 arrangements (R21) |
| 52 | TPLC base cost of Helmside shares | R | *Stanton v Drayton*; CG52562: £16.0m (ch 18) |
| 53 | RH passive; RC's first-year QIP position | R / P | s 18F (extract); AP1 divisor 1 (R1); AP2 grace and AP3 QIPs on HMRC's and practitioners' reading (reg 3(5) text not seen) |
| 54 | Opening negative amount for RC | R | INTM284020: losses matched by Year 3: nil (ch 31) |
| 55 | TPLC recharge characterisation | R (numbers) | R17: s 979 book's assumption; s 105 outcome identical either way |

### 5.3 Continuity open items (rulings file) at consolidation

The rulings file's "Open verification items" 1–26 are carried into `author-notes-fact-check-flags.md` with their status after reviews D–G. Resolved since that list: item 12 (*Marren* court: HL per secondary sources), 19 (s 140C wording; para 19 period before a hive-down company existed: CG53080C), 20 (s 47), 23 (*Glencore* CA outcome), 24 (*Tower One*), 25 (s 141), and item 10 (s 373(3), via a secondary copy of the statute and CFM98620).

### 5.4 Corrections to the TKS book found during LCG research

| TKS item | Correction | Source |
|---|---|---|
| CT late filing ("£1,000 each if late three times in a row") | Same totals as the statute (£1,000 within 3 months; £2,000 otherwise: FA 1998 Sch 18 para 17 as amended by FA 2026 s 265); this book uses the statutory form | LS1 §8 |
| s 18S | Now refers to the OECD Model approved 18 November 2025 (FA 2026 Sch 7 para 2); no TKS change needed | LS3 §2.2 |
| Stamp duty and SDLT | No correction found | — |

---

## 6. Pronunciation

The merged, alphabetical guide for the text-to-speech voice is `pronunciation-guide.md` (every notes file's guide plus the TKS names). The conventions for spoken statute names, sections and acronyms are in `book-plan.md` §11 and `writer-brief.md` §7.
