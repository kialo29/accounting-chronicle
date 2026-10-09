# Book bible: The Living Law: Groups and Borders (CTA Advanced Technical, Taxation of Larger Companies and Groups)

*Starting bible, 9 October 2026 (planning stage). Compiled from the LCG research files (`research/exam-intel.md`, `research/lcg-grid-extract-v2.txt`, law sheets 1 to 5, all opened 9 October 2026) and the verified TKS files (`/home/claude/cta-tks/book-bible.md`, `rates-2026-27.md`, `hartley-ledger.md`, `continuity-rulings.md`). After every chapter, the writer's notes carry a bible update; at each consolidation the updates are merged here. Where this bible and a later chapter conflict, the chapter (and any continuity ruling) wins and this file is corrected.*

**Law year.** Financial year 2026 (1 April 2026 to 31 March 2027) under Finance Act 2026 (2026 c. 11, Royal Assent **18 March 2026**); 2026/27 for income tax points. Every Tarnmoor computation applies this law whatever Group Year the story has reached.

**Status codes used below.** **V** = verified in a primary or official source opened in the research (9 October 2026) or in the TKS build; **S** = secondary only (firm, professional body or HMRC paraphrase of a non-statutory source); **U** = unverified (do not use as fact without checking); **I** = invented for the running case.

**Companion working documents.** `book-plan.md` (plan and chapter briefs), `calder-ledger.md` (canonical story facts; **the authority for running-case numbers**), `writer-brief.md` (instructions), `ledger-check.py` (re-computes the ledger), later `continuity-rulings.md`, `notes/NN-notes.md`, `review/`.

**Contents**
1. Cast: A. real people and cases; B. the invented Tarnmoor group and the Hartleys
2. Glossary (seeded, with owning chapter)
3. Established facts (rates, thresholds, dates, exam facts; each with source and status)
4. Coverage (what TKS already taught; which chapter owns which topic; debates)
5. Open threads and verification flags
6. Pronunciation

---

## 1. Cast

### 1A. Real people and cases

No words are put in anyone's mouth that are not quoted from a source opened at writing time. "Not checked" means the detail was not confirmed in the research and must not be stated. Planned first chapter shown; later chapters may refer back.

**Judges, officials and other people**

| Person | Dates / role | In the book | First (planned) | Status |
|---|---|---|---|---|
| Lord Loreburn LC | Lord Chancellor; *De Beers v Howe* (1906): "the real business is carried on where the central management and control actually abides" (at 458) | Residence | 22 | V (as quoted in *Wood v Holden*; TKS) |
| Chadwick LJ | Gave the judgment in *Wood v Holden* [2006] EWCA Civ 26 | Residence: boards influenced, not usurped | 22 | V |
| Newey LJ | Lead judgment in *HMRC v Development Securities plc* [2020] EWCA Civ 1705; also sat in *JTI* | Residence; unallowable purpose | 22, 12 | V |
| Lord Briggs | Gave the judgment in *Fowler v HMRC* [2020] UKSC 22 (OECD Commentaries persuasive "as the cogency of their reasoning deserves") | Treaty interpretation | 2, 24 | V |
| Peter Jackson, Nugee and Falk LJJ | The *BlackRock* court (11 April 2024); Nugee LJ at [192] quotes Falk LJ's "sole raison d'être" | Prologue; unallowable purpose | P | V |
| Andrews and Falk LJJ, Sir Launcelot Henderson | The *Kwik-Fit* court (3 May 2024) | Unallowable purpose | 12 | V |
| Lewison, Newey and Baker LJJ | The *JTI* court (13 June 2024); Lewison LJ noted *Rossendale* on viewing schemes as a whole (para 85) | Unallowable purpose | 12 | V |
| Sir Stephen Richards and Arden LJ | Agreed in *Fidex* [2016] EWCA Civ 385; **the lead judge was not checked** | Unallowable purpose ("But for this tax avoidance scheme there would have been no debit at all", para 74) | 12 | V (quote); U (lead judge) |
| Judge Redston | Gave the UT permission decision in *Syngenta* [2025] UKUT 338 (TCC), 9 October 2025 | Unallowable purpose (pending) | 12 | V |
| Vos MR, Snowden and Whipple LJJ | The *Delinian* court (3 November 2023) | Share exchanges; purpose | 18 | V (R) |
| Tuckey LJ | *Johnston Publishing* [2008] EWCA Civ 858, para 46: "one must start by trying to give meaning to all the words used" | Degrouping | 17 | V |
| Widgery J | *Kenmir Ltd v Frizzell* [1968] 1 All ER 414 at 418: "the vital consideration is whether the effect of the transaction was to put the transferee in possession of a going concern..." | Successions | 9 | V (via *Haymarket Media* [2022] UKFTT 168 (TC)) |
| Salmon LJ | *Odeon Associated Theatres v Jones* (1971) 48 TC 257: "the ordinary principles of commercial accounting must, as far as practicable, be observed" | Tax follows the accounts | 5 | S (BIM31095) |
| Lord Millett | *IRC v Laird Group plc* [2003] UKHL 54: paying a dividend is not a transaction in securities | Transactions in securities | 19 | S (CTM36810) |
| John Avery Jones and Charles Hellier | Special Commissioners in *DSG Retail Ltd v HMRC* [2009] UKFTT 31 (TC), released 31 March 2009 | Transfer pricing | 27 (or P alternative) | V |
| The Chancellor, Longmore and Goldring LJJ | The *Vodafone 2* court (22 May 2009); Evans-Lombe J at first instance (4 July 2008) | CFC history | 26 | V |
| Advocate General Medina | Opinion of 11 April 2024 in the CFC State aid appeals | CFC history | 26 | S |
| James Callaghan | Chancellor; 1965 Budget creating corporation tax (TKS chapter 20 told it) | Recap only | 1 | V (TKS) |

**Cases (with verified citations; Find Case Law URLs in the law sheets)**

| Case | Citation and date | Point | Planned chapter | Status |
|---|---|---|---|---|
| *BlackRock HoldCo 5, LLC v HMRC* | [2024] EWCA Civ 330 (11 April 2024); SC refused permission (SC list date printed as 13 October 2024; the SC page gives [2024] EWCA Civ 419) | $4bn intra-group loans; TP failed for HMRC; unallowable purpose succeeded; all debits attributable | P, 12, 27, 28 | V (citation discrepancy flagged: use 330) |
| *Kwik-Fit Group Ltd v HMRC* | [2024] EWCA Civ 434 (3 May 2024); SC refused permission | Intra-group restructuring to use NTLR credits; debits attributable to unallowable purpose; HMRC accepted denial would end once the target losses were used (paras 101–103) | 12 | V |
| *JTI Acquisition Company (2011) Ltd v HMRC* | [2024] EWCA Civ 652 (13 June 2024); SC refused permission | Acquisition debt; tax advantage "bolted on" (paras 81–83) | 12 | V |
| *Fidex Ltd v HMRC* | [2016] EWCA Civ 385 (21 April 2016) | Accounting-transition scheme (Project Zephyr) | 12 | V |
| *Greene King plc v HMRC* | [2016] EWCA Civ 782 (27 July 2016) | Interest strip scheme; FA 1996 origin of the code quoted | 12 | V (holding to re-read) |
| *Union Castle Mail Steamship Co Ltd v HMRC* | [2020] EWCA Civ 547 (22 April 2020) | Derivative amounts recognised in equity on a scheme; £39.1m debit; appeals dismissed | 5, 12 | V (partly) |
| *Syngenta Holdings Ltd v HMRC* | [2024] UKFTT 998 (TC) (1 November 2024); UT permission [2025] UKUT 338 (TCC) (9 October 2025) | Unallowable purpose; **no UT substantive decision found at 9 October 2026** | 12 | V (pending) |
| *HMRC v NCL Investments Ltd* | [2022] UKSC 9 | IFRS 2 debits deductible; HMRC lost on every ground | 5, 7 | V |
| *GDF Suez Teesside Ltd v HMRC* | [2018] EWCA Civ 2075 | "Fairly represent" overrode GAAP-compliant accounts (Enron claims) | 5 | V |
| *Centrica Overseas Holdings Ltd v HMRC* | [2024] UKSC 25 | About £2.53m of fees on the Oxxio disposal: expenses of management but capital; capital test as s 53; FA 2004 s 38 origin of the exclusion | 13 | V |
| *Delinian Ltd (formerly Euromoney Institutional Investor plc) v HMRC* | [2023] EWCA Civ 1281 (3 November 2023); UT [2022] UKUT 205 (TCC) | Share exchange; "a" purpose not "a main" purpose; arrangements as a whole; the email | 18 | V (R) |
| *Johnston Publishing (North) Ltd v HMRC* | [2008] EWCA Civ 858 | Associated companies leaving together; led to FA 2011 Conditions A and B | 17 | V |
| *M Group Holdings Ltd v HMRC* | [2023] UKUT 213 (TCC) | Hive-down; para 15A; "a group needs more than one company"; gain about £53.2m, tax about £10.6m | 18, 20 | V (R) |
| *Marren v Ingles* | 54 TC 76; [1980] STC 500; [1980] 1 WLR 983; [1980] 3 All ER 95 | Right to unascertainable consideration is a chose in action | 18 | S (court not stated in sources: commonly HL: verify) |
| *Marson v Marriage* | 54 TC 59 (Fox J) | s 48 and ascertainable contingent consideration | 18 | S |
| *Kenmir Ltd v Frizzell* | [1968] 1 All ER 414 | Going concern test | 9 | V (via *Haymarket Media Group Ltd v HMRC* [2022] UKFTT 168 (TC)) |
| *De Beers Consolidated Mines Ltd v Howe* | [1906] AC 455 (HL) | CMC | 22 | V |
| *Wood v Holden* | [2006] EWCA Civ 26 | Eulalia Holding BV Dutch resident; Ron Wood Greetings Card Holdings sale (1996, £23.7m): **not the musician** | 22 | V |
| *Unit Construction Co Ltd v Bullock* | [1960] AC 351 | Parent usurped the Kenyan subsidiaries' boards | 22 | V (as cited) |
| *HMRC v Development Securities plc* | [2020] EWCA Civ 1705 | Jersey companies UK resident; decisions really made by the UK parent; one member of the court had "very considerable reservations" about the FTT's reasoning | 22 | V |
| *HMRC v Smallwood* | [2010] EWCA Civ 778 | Tie-breaker, not a "snapshot"; KPMG "Round the World" scheme via a Mauritius trustee | 22 | V |
| *Fowler v HMRC* | [2020] UKSC 22 | Treaty interpretation; Commentaries | 2, 24 | V |
| *Indofood International Finance Ltd v JP Morgan Chase Bank NA* | [2006] EWCA Civ 158 | Beneficial ownership; interposed Netherlands company | 24 | V |
| *Bayfine UK v HMRC* | [2011] EWCA Civ 304 | UK–US Art 23 read purposively | 24 | V (summary only: re-read) |
| *Anson v HMRC* | [2015] UKSC 44 | Same income for credit | 24 | V |
| *HMRC v FCE Bank plc* | [2012] EWCA Civ 1290 | UK–US Art 24(5) non-discrimination; group relief | 15, 24 | V |
| *Glencore Energy UK Ltd v HMRC* | [2017] EWHC 1476 (Admin) | DPT charging notice £21,129,349 plus interest; judicial review | 30 | V |
| *Cadbury Schweppes plc v IRC* | Case C-196/04, [2006] ECR I-7995 (12 September 2006) | "Wholly artificial arrangements" | 26 | V (as cited in *Vodafone 2* and [2008] EWHC 1569 (Ch)) |
| *Vodafone 2 v HMRC* | [2009] EWCA Civ 446 (22 May 2009); [2008] EWHC 1569 (Ch) | Conforming interpretation of the old CFC rules | 26 | V |
| *Test Claimants in the Thin Cap Group Litigation v HMRC* | [2011] EWCA Civ 127; ECJ C-524/04 (13 March 2007) | Thin cap and freedom of establishment | 27 | V |
| *DSG Retail Ltd v HMRC* | [2009] UKFTT 31 (TC) (31 March 2009) | First TP case at the tribunal; Dixons; Isle of Man captive (DISL); Cornhill fronting May 1986–April 1997; point-of-sale advantage | 27 | V |
| CFC State aid | Commission Decision (EU) 2019/1352 (2 April 2019); General Court T-363/19 and T-456/19 (8 June 2022); Court of Justice C-555/22 P, C-556/22 P, C-564/22 P (19 September 2024) | Finance company exemption; decision annulled | 26 | S (UK steps V: SI 2024/1307; FA 2026 s 51) |
| *HMRC v Marks and Spencer plc* | [2014] UKSC 11 | Cross-border group relief (TKS chapter 24 told it) | 15 (recap) | V (TKS) |
| *Leekes Ltd v HMRC* | [2018] EWCA Civ 1185 | Streaming on succession (TKS chapter 22) | 19 (recap) | V (TKS) |
| *Odeon*; *Gallagher v Jones* (1993) 66 TC 77; *Johnston v Britannia Airways* (1994) 67 TC 99 | — | Accounts as the basis of profit | 5 | S (BIM31095) |
| *Macdonald v Dextra Accessories Ltd* | [2005] UKHL 47 | EBT contributions; HMRC: contributions before 27 November 2002 | 7 | S |
| *RFC 2012 plc v Advocate General for Scotland* | [2017] UKSC 45 | Rangers EBT (TKS chapter 3) | 7 (recap) | V (title) |
| *Purchase v Tesco Stores Ltd* | (1984) 58 TC 46 | "Major": more than significant, less than fundamental | 14 | S (CTM06370) |
| *Rolls-Royce Motors Ltd v Bamford* | (1976) 51 TC 344 | Gradual change | 14 | S |
| Peeters Picture Frames case | (1983) 56 TC 436 | Not a major change on special facts; **name uncertain ("Williams" or "Willis v Peeters")** | 14 | S/U |
| *IRC v Parker* (1966) 43 TC 396; *IRC v Joiner* (1975) 50 TC 499; *Williams v IRC* (1979) 54 TC 257; *IRC v Laird Group plc* [2003] UKHL 54 | — | Transactions in securities | 19 | S (CTM36810) |
| *Ayerst v C & K (Construction) Ltd* | (1974) 50 TC 651 | Liquidation strips beneficial ownership | 14 | S (CTM36125) |
| *Progress Property Co Ltd v Moorgarth Group Ltd* | [2010] UKSC 55 | Undervalue transfer and distribution (company law) | 19 | V (title only; holding U) |
| *HMRC Inspector of Taxes v Camas plc* [2004] EWCA Civ 541; *Dawsongroup plc v HMRC* [2010] EWHC 1061 (Ch) | — | Expenses of management | 13 | V (titles) |
| *Get Onbord* [2024] UKFTT 617 (TC); *Tills Plus* [2024] UKFTT 614 (TC) | — | What is R&D (TKS chapter 21) | 10 (recap) | V (TKS) |
| Not to be used without verification | *IRC v Cleary* [1968] AC 766; *Page v Lowther* (1983) 57 TC 199; *Gallaher* (s 171 EU); *Prudential* (degrouping); *Barclays Mercantile v Mawson* [2004] UKHL 51 (LFL context) | — | — | U |

**Real companies named in cases:** BlackRock, Kwik-Fit, JTI, Fidex, Greene King, Union Castle and Ladbrokes, Syngenta, NCL Investments, GDF Suez Teesside (Teesside Power), Centrica (Oxxio), Euromoney/Delinian, Johnston Publishing, M Group Holdings, Haymarket Media, De Beers, Eulalia Holding BV and Ron Wood Greetings Card Holdings, Development Securities, Indofood, JP Morgan Chase, Bayfine, FCE Bank, Glencore Energy UK, Cadbury Schweppes, Vodafone, DSG Retail (Dixons), Cornhill Insurance, ITV (State aid), Marks and Spencer, Leekes, Tesco, Rolls-Royce Motors, Laird Group, Camas, Dawsongroup. Name them only as the judgments do; no invented detail.

### 1B. The invented Tarnmoor group and the Hartleys

**Everything in this section is invented for teaching** (except Ireland, its 12.5% trading rate and the UK–Ireland treaty with the MLI). The scripts say so on first appearance in each chapter. **The full canonical facts are in `calder-ledger.md`; that file wins over this summary.**

| Entity or person | Fixed facts (summary) | Chapters |
|---|---|---|
| **Tarnmoor plc (TPLC)** | UK-listed (LSE main market), widely held, Leeds head office; ultimate parent; year end 31 December; company with investment business (management expenses £8.0m GY1, £8.5m GY2); RCF borrower; Helmside consortium member (45%); CIR reporting company; Pillar Two UPE; CFC charge on TCM (£132,000 a year GY1–GY4; £204,000 GY5) | 1–4, 12–15, 18–21, 26–31 |
| **Tarnmoor Engineering Ltd (TEL)** | Main UK trading company; revenue £630m (GY1); GY2 trading profit before CAs £42.0m, CAs £16.0m, TTP £8.08m, CT £2.02m; buys the distribution centre (£5.2m, GY3); TVS's UK sales via key-account engineers (GY4); hives down and sells the actuators business (GY6) | 3, 4, 7–9, 12, 15–21, 23, 27, 28 |
| **Calder Valve Engineering Ltd (CVE)** | TKS's invented regional manufacturer; FY2026 TTP £2.0m, no associates, CT £500,000 in four QIPs; acquired by TPLC 1 April GY1 for £32m from the Oldroyd family; very large in its first group AP (TTP £3.0m incl. RDEC £400,000; CT payable £350,000); FRS 101 from 1 April GY2; Project Ashlar; Vallarian installation PE (August GY2–September GY3); process valves division closed (Dan redundant 30 September GY3); business sold to TVS 1 October GY3 (£6.0m intangibles, settled at £8.0m in GY6; £1.4m plant); 9-month AP to 31 December GY3; Patent Box and £1.2m royalty from GY4; bilateral APA from GY6 | 1, 3, 5–11, 15, 17, 20, 24, 25, 27 |
| **Tarnmoor Estates Ltd (TES)** | Property company; depot sale (gain £2,277,500; £0.8m chargeable after group roll-over); lease assignment (gain £351,200); 30-year lease grant (premium £2.0m; income element £840,000); receives Calder's works; transfers the water-systems factory to TWS; head office sale and leaseback (£14.0m) | 9, 13, 15–17, 21, 28 |
| **Tarnmoor Finance Ltd (TFL)** | £550m 5.5% listed notes; lends at 6% (TEL £200m, TWS £40m, TES £70m, TPLC £120m, TVS £120m); swap; Project Undertow issuer (rejected) | 12, 23, 27–29 |
| **Tarnmoor Water Systems Ltd (TWS)** | Demerged 1 July GY5 (value £180m) as Tarnwater plc; SDLT clawback £289,500 | 17, 19, 21 |
| **Brackenwell Sensors Ltd (BSL)** | Founder Dr Asha Varma; acquired 1 July GY2 (£22.2m shares + £1.8m for £3.0m notes); ERIS credit £943,950 before acquisition; RDEC £600,000 after; pre-change losses £8.6m restricted; pre-entry capital loss £0.4m | 3, 6, 10, 12, 14, 15, 17, 20 |
| **Helmside Energy Ltd (HEL)** | JV from 1 January GY1: TPLC 45%, Greyfell Utilities plc 40%, Northlight Infrastructure Fund LP 15%; losses £4.0m, £3.0m, £1.0m; profit £2.5m GY4; 85% subsidiary from 1 March GY5 (share exchange 2m TPLC shares at £8.00) | 14, 15, 18, 21, 28 |
| **Tarnmoor Vallaria SA (TVS)** | Vallarian subsidiary (20% rate); borrows from TFL (£120m) and TCM (£60m); buys Calder's process-valve business; licensee of the Ashlar patents; UK PE question (GY4) | 11, 23–27, 30 |
| **Tarnmoor Capital Ltd (TCM)** | Marrovian finance company (9% rate; no treaty); equity £60m then +£30m; CFC with Ch 9 75% exemption | 26, 29, 30 |
| **Tarnmoor Ireland Ltd (TIL)** | Irish-incorporated; UK resident by CMC until migration on 30 June GY4; exit charges; payment plan £525,000 (6 × £87,500); UK warehouse gain £0.8m postponed (s 187B); then a CFC with no chargeable profits | 11, 22, 23, 26, 27 |
| **Tarnmoor Actuators Ltd (TAL)** | Hive-down vehicle (1 February GY6); sold 31 December GY6 to Brennock Industries Inc for £48.0m + earn-out (valued £3.0m); degrouping gain £2.5m exempt; SDLT clawback £364,500; buyer's stamp duty £240,000 | 9, 11, 17–21 |
| **Tarnmoor Pumps Ltd** | Dormant; struck off GY7 (£18,000 distribution) | 3, 19 |
| **Moorgate Logistics LLP** | TES 50% with an unconnected developer from GY4 | 15 |
| **Greyfell Utilities plc; Northlight Infrastructure Fund LP; Coldwater Instruments plc; Brennock Industries Inc; the Oldroyd family** | Outsiders (invented) | 15, 18, 20 |
| **Nadia Kerr** | TPLC CFO; SAO | 1, 4, 6 |
| **Tom Hesketh** | Group head of tax | 1–4, 12, 22, 26–29 |
| **Graham Pike** | Calder's finance director | 3, 5, 10 |
| **Dr Asha Varma** | Brackenwell founder and CTO | 10, 12, 14 |
| **Dan Hartley** (TKS) | Born 1988; chartered engineer in Calder's process valves division; Project Ashlar (60% of his time; £72,000 qualifying cost in Calder's first group AP); interviewed in the TP functional analysis; redundant 30 September GY3 (TKS chapter 9 package) | 1, 10, 27, 31 |
| **Jess Hartley** (TKS) | Sells Ridgeway Holdings to TPLC for £4.5m on 1 April of the Ridgeway year; MD of RC for two years (£90,000; retention bonus £60,000) | 31 |
| **Ridgeway Holdings Ltd / Ridgeway Cycles Ltd** (TKS) | RH (passive holding company, assumed) → RC (Skipton; Dublin branch; 31 March year end; UK profit about £400,000; branch about £200,000) | 31 |
| **Vallaria; Marrovia** | Invented countries (TKS). Vallaria: OECD-style treaty (interest 10%, dividends 15% (TKS); royalties 5%, 12-month construction PE, older dependent agent wording (this book)); CT 20%. Marrovia: no treaty; royalty withholding 30% (TKS); CT 9% | 22–30 |

**Story-time rule:** Group Years, never calendar years; the Ridgeway year is "some years later" (book-plan §6.2 explains the TKS constraints).

---

## 2. Glossary (seeded; alphabetical)

"Owner" is the chapter planned to explain the term in full; other chapters give a one-line reminder. Meanings are FY2026 law and are working definitions for writers, to be refined when the owning chapter is written. TKS terms already explained in *The Living Law* are marked (TKS n) and get a short recap only.

| Term | Working meaning | Owner |
|---|---|---|
| 10-day rule | Company share matching: acquisitions in the 10 days before a disposal matched first, kept out of the pool (TKS 16, 23) | 18 (recap) |
| 40% first-year allowance | CAA s 45U: 40% on new, unused main-rate plant from 1 January 2026; any business; leasing allowed (except overseas); no special balancing charge | 8 |
| 40/55 joint venture test | A dividend from a company controlled by two persons is in the controlled-company exempt class if the recipient holds at least 40% and the other at least 40% but no more than 55% (s 931E); the CFC "40% rule" is a parallel test | 15 (25, 26) |
| 75% exemption (CFC) | Chapter 9: 75% of qualifying loan relationship profits exempt, so 25% passes (6.25% effective at 25%) | 26 |
| Accelerated payment notice | Notice requiring disputed tax in an avoidance case to be paid within 90 days | 4 |
| Advance pricing agreement | Written agreement with HMRC under TIOPA Part 5 fixing how TP (or PE attribution) applies for future periods | 27 |
| Advance tax clearance (major projects) | FA 2026 ss 266–274: binding clearance for 5 years for qualifying investment projects of at least £1bn UK expenditure | 2 |
| Affected persons | The two parties to provision under TIOPA s 147 | 27 |
| Aggregate net tax-interest expense (ANTIE) | Sum of UK group companies' net tax-interest expense (s 390) | 28 |
| Allocation of deductions | TIOPA s 52: a company may allocate deductions to profits as it thinks fit, to maximise credit relief | 24 |
| Allowable deductions (company gains) | TCGA s 38 costs; enhancement must be reflected in the asset at disposal | 16 |
| Allowance statement | The SBA statement a buyer needs to continue claiming | 9 |
| Alternative dispute resolution | HMRC mediation in disputes; non-statutory; no effect on appeal rights (grade 3) | 4 |
| Amortised cost basis | Loan relationship measurement using the effective interest method; compulsory for connected companies relationships | 12 |
| Anti-fragmentation | No preparatory or auxiliary exception where complementary activities of closely related persons form a cohesive operation (s 1143(2A)–(2C)) | 23 |
| Appropriate tax accounting arrangements | The SAO's main duty: arrangements enabling accurate tax returns | 4 |
| Appropriation to stock | TCGA s 161: capital asset moved to trading stock is deemed sold at market value unless an election is made | 16 |
| Arm's length principle | Related parties' profits computed as if independent parties had dealt on comparable terms | 27 |
| Arrangements (group relief) | Arrangements for a change of ownership can end a group or consortium relationship for relief purposes before completion | 15 |
| Assignment (lease) | Transfer of an existing lease; never a premium income event; short-lease status judged at that date | 16 |
| Associated company | Company under common control at any time in the AP; divides the rate limits and QIP thresholds (TKS 20) | 3 (recap) |
| Associated companies leaving together | s 179 exception: no degrouping charge where Condition A or B (relationship from acquisition to leaving) is met | 17 |
| Associated person (CCO) | Employee, agent or other person performing services for or on behalf of the body | 4 |
| Assumed taxable total profits | A CFC's profits computed as if it were UK resident under the CT assumptions | 26 |
| Augmented profits | TTP plus exempt distributions from non-51% companies (TKS 20) | 3 (recap) |
| Authorised OECD approach | The 2010 OECD Report's method of attributing profits to a PE as a separate and independent enterprise | 23 (introduced 2) |
| Badges of trade (company context) | Indicators distinguishing trading from investment; for groups, property, treasury and holding activities (TKS 11) | 7 |
| Balancing payment (TP) | Payment between parties reflecting a TP adjustment; not taxable or deductible up to the adjustment | 27 |
| Beneficial ownership | Treaty concept: the recipient entitled to the income in substance (*Indofood*); also lost by a company on winding up (*Ayerst*) | 24 (14) |
| Branch exemption election | CTA 2009 s 18A election to exempt all foreign PE profits and losses; irrevocable; from the next AP (TKS 26) | 25 |
| Business restructuring (TP) | Cross-border reorganisation of functions, assets and risks requiring arm's length compensation | 27 |
| Capital investment from the UK | CFC Ch 5 test (s 371EC): non-trading finance profits from funds derived from UK connected capital | 26 |
| Central management and control | Where the highest level of a company's management is actually exercised; determines residence of a non-UK-incorporated company | 22 |
| Chargeable company (CFC) | UK resident company with a relevant interest whose apportioned share plus connected and associated persons' shares is at least 25% | 26 |
| Chargeable payment (demerger) | Payment within 5 years of an exempt demerger, not for genuine commercial reasons; taxed as income and revives s 179 | 19 |
| Change in ownership | More than half of the ordinary share capital acquired (CTA 2010 s 719 conditions A–C) | 14 |
| Change of accounting basis | Change of accounting policy or of view of the law between periods; adjustment on day one of the new basis (CTA 2009 ss 180–187) | 5 |
| Chose in action | A legal right (for example to unascertainable future consideration) that is itself a chargeable asset (*Marren v Ingles*) | 18 |
| Claim notification (R&D) | Advance notice required for a first claim or after a 3-year gap, within 6 months after the period of account ends | 10 |
| Closely related | One person controls the other or both are under common control (s 1143(2CA)); a closely related agent acting exclusively for the group is not independent | 23 |
| Clawback (SDLT) | Withdrawal of group, reconstruction or acquisition relief when the purchaser leaves the group or control changes within 3 years | 21 |
| Comparable uncontrolled price | TP method comparing the controlled price with prices between independent parties | 27 |
| Company with investment business | Company whose business consists wholly or partly of making investments (s 1218B) | 13 |
| Compensating adjustment | Claim by the disadvantaged UK person to be taxed on the arm's length basis (s 174) | 27 |
| Competent authority agreement | Under MLI Art 4, the two tax authorities settle the treaty residence of a dual resident company | 22 |
| Connected companies relationship | Loan relationship between companies connected (control) at any time in the AP | 12 |
| Consortium; consortium company; member | A company not a 75% subsidiary, at least 75% owned by companies each owning at least 5% (the members) | 15 |
| Contribution allowance | CA for a person contributing to another's capital expenditure for its own trade | 9 |
| Corporate criminal offence | Failure to prevent facilitation of UK or foreign tax evasion by an associated person (Criminal Finances Act 2017 ss 45–46) | 4 |
| Corporate interest restriction | TIOPA Part 10: limits a worldwide group's UK net interest deductions | 28 |
| Corporate rescue exception | No deemed release (s 361D) or release credit (s 322 condition E) where release follows a material risk of insolvency within 12 months; for s 361D, release within 60 days | 12 |
| Corporate transformation | The LCG syllabus's term for reorganisations, acquisitions, disposals and demergers | 20 |
| Cost plus | TP method: supplier's costs plus an arm's length mark-up | 27 |
| Country-by-country report | Annual report of an MNE group (≥ €750m) showing revenue, profit, tax and activity by jurisdiction | 27 |
| Creditable tax (CFC) | Foreign tax and UK tax attributable to income in chargeable profits, apportioned (s 371PA) | 26 |
| Credit limit (R × IG) | TIOPA s 42: credit cannot exceed the UK rate times the income or gain after allocated deductions, source by source | 24 |
| CT exit charge payment plan | TMA Sch 3ZB: 6 equal annual instalments for an eligible company migrating to a relevant EEA state | 22 |
| CT61 | Quarterly return accounting for income tax deducted by a UK company; due within 14 days | 23 |
| Current tax; deferred tax | Tax payable for the period; accounting measure of future tax effects of timing or temporary differences | 6 |
| Customer Compliance Manager | HMRC's relationship manager for large businesses [verify current terminology] | 4 |
| De minimis amount (CIR) | £2m a year: interest capacity is never less than this | 28 |
| Deduction/non-inclusion | Hybrid outcome: a payment deductible for the payer is not included as ordinary income by the payee | 29 |
| Deductions allowance (group) | £5m a year shared by the group under Part 7ZA, only if all members nominate a company; allocation statement | 14 |
| Deemed release | s 361: a company buying a connected-to-be company's debt below its carrying value is treated as releasing the shortfall, taxing the debtor | 12 |
| Degrouping charge | s 179: company leaving within 6 years with an asset acquired at no gain/no loss is deemed to have sold and reacquired it at market value at acquisition; since 2011 added to share-sale proceeds (TKS 24) | 17 |
| Demerger (direct, indirect, cross-border division) | Exempt distribution splitting trading activities between shareholders (CTA 2010 ss 1076–1078) | 19 |
| Dependent agent; principal role | Domestic PE where a person habitually concludes, or plays the principal role leading to, contracts routinely concluded without material modification (s 1141(1)(b), FA 2026) | 23 |
| Depreciatory transaction | Transaction reducing the value of shares in a group company; losses reduced (s 176); no motive test | 17 |
| Derivative contract | Option, future or contract for differences meeting the accounting condition; taxed under CTA 2009 Part 7 | 12 |
| Disguised interest | A return economically equivalent to interest taxed as a loan relationship profit (ss 486A–486E) | 12 |
| Disregard Regulations | SI 2004/3256: fair value movements on hedging derivatives left out and brought in on a hedging basis in specified cases | 12 |
| Distribution (s 1000 categories) | Dividends and other distributions in respect of shares (A–H) | 19 |
| DOTAS; hallmark | Disclosure of tax avoidance schemes; the descriptions that make arrangements notifiable (TKS 3) | 4 |
| Double deduction | Hybrid outcome: one amount deductible in two jurisdictions | 29 |
| Dual inclusion income | Income taxed in both relevant jurisdictions, against which hybrid deductions may be set | 29 |
| Dual resident investing company | Dual resident non-trading company barred from group relief surrender and NGNL receipt | 15 |
| Due diligence; tax deed; warranty; indemnity | Acquisition protections for pre-completion tax risks | 20 |
| Earn-out; s 138A earn-out right | Deferred, usually unascertainable consideration; if in shares, a deemed security unless elected out | 18 |
| Effective 51% subsidiary | More than 50% of profits available for distribution and of assets on a winding up (gains groups) | 17 |
| Effective tax mismatch outcome (UTPP) | The corresponding tax is less than 80% of the UK CT on the provision | 30 |
| Eligible company (exit plans) | Company with TFEU art 49 / EEA art 31 rights migrating to a relevant EEA state | 22 |
| Employee benefit contribution | Contribution to an EBT or similar; deduction only as qualifying benefits are provided within the time limits | 7 |
| ERIS (enhanced R&D intensive support) | Loss-making R&D-intensive SMEs: 86% extra deduction; 14.5% payable credit (TKS 21) | 10 |
| Exempt period (CFC) | First 12 months after a company first comes under UK control | 26 |
| Excluded territories (CFC) | Exemption for CFCs in listed territories with limited "bad" income | 26 |
| Exit charge | Deemed disposal at market value on ceasing UK residence (TCGA s 185 and parallels) | 22 |
| Fixed ratio method; fixed ratio debt cap | Interest allowance = lower of 30% tax-EBITDA and ANGIE plus excess debt cap | 28 |
| Fixed value requirement; pooling requirement | Fixtures conditions for a buyer's claim (ss 187A–187B) | 9 |
| Fixed-rate election (intangibles) | 4% a year writing-down election (s 730), 2 years, irrevocable | 11 |
| Full expensing | 100% FYA for companies on new main-rate plant (s 45S) (TKS 12) | 8 |
| Functional analysis | Identifying functions performed, assets used and risks assumed by each party | 27 |
| Functional currency; designated currency | Currency of the primary economic environment; election for tax computations (CTA 2010 Part 2 Ch 4) [research] | 5 |
| GAAP; FRS 101; FRS 102; IFRS | Accounting frameworks; FRS 101 applies IFRS recognition with reduced disclosure; FRS 102 based on IFRS for SMEs | 5 |
| Gains group; principal company | Principal company and its 75% (and effective 51%) subsidiaries (s 170) | 17 |
| Gateway (CFC) | Chapters 3–8 deciding which profits pass through to the charge | 26 |
| Global anti-base erosion (GloBE) rules | OECD Pillar Two rules implemented by MTT and DTT | 30 |
| GloBE information return | Pillar Two return; 15 months (18 for the first) | 30 |
| Group (definitions family) | Different tests for different regimes (51%, 75%, 75% + effective 51%, worldwide, control) | 1 |
| Group allowance allocation statement | Statement by the nominated company allocating the £5m deductions allowance | 14 |
| Group payment arrangement | One UK group company pays CT on behalf of 51% group members with the same accounting date (TMA s 59F) | 3 |
| Group ratio method | Interest allowance by the group's third-party interest/EBITDA ratio (election) | 28 |
| Group roll-over | s 175: gains groups' trades treated as one for roll-over | 17 |
| Group tax function | The company's in-house tax team | 1 |
| Guarantee (TP); implicit support | FA 2026: a participator guarantee enabling borrowing is never arm's length (s 153A); implicit support is not a guarantee | 27 |
| Hive-down | Transfer of a trade and assets into a new subsidiary before selling its shares | 20 |
| Hybrid entity; hybrid instrument | Entity seen as a person in one territory and transparent in another; instrument treated differently by two territories | 29 |
| Hybrid rate (WDA) | Day-weighted rate for periods straddling 1 April 2026, rounded up to 2 decimal places | 8 |
| Imported mismatch | UK deduction denied where it funds a hybrid mismatch elsewhere not capable of counteraction | 29 |
| Income element (lease premium) | Part of a premium for a lease of 50 years or less taxed as property income: P × (50 − (n − 1))/50 | 16 |
| Income inclusion rule | Pillar Two rule taxing a parent on low-taxed subsidiaries' profits | 30 |
| Income not otherwise charged | CTA 2009 Part 10 Ch 8 sweeping charge | 7 |
| Independent agent | Agent of independent status acting in the ordinary course of its business: no PE (s 1142) | 23 |
| Indexation (frozen) | Relief for RPI to December 2017 only; cannot create or increase a loss | 16 |
| Interest allowance; interest capacity | Basic allowance plus net interest income; capacity adds available unused allowance and is never below £2m | 28 |
| Interest restriction return (full; abbreviated) | CIR return; full needed to allocate, reactivate or carry forward; abbreviated election kills unused allowance | 28 |
| International Controlled Transactions Schedule | Planned annual TP transaction report (FA 2026 s 48; regulations not yet made) | 27 |
| International movement of capital | Reportable events over £100m involving foreign subsidiaries' shares or debentures (FA 2009 Sch 17) | 25 |
| Investee trading requirement | SSE: investee must be trading (and afterwards only if the buyer is connected) | 18 |
| L − A restriction | Part 22 Ch 1: losses transferred reduced where liabilities left behind exceed assets left plus consideration | 19 |
| Large company; very large company | QIP categories: augmented profits over £1.5m / £20m, divided by associates | 3 |
| Lease percentage table | Sch 8 para 1 curve restricting the cost of a lease with 50 years or less unexpired | 16 |
| Link company | A consortium member through whose group another company claims or surrenders consortium relief | 15 |
| Linked enterprise; partner enterprise | SME test aggregation: linked (control) in full; partner (25%–50%) proportionately | 10 |
| Local File; Master File | TP documentation required for €750m groups under SI 2023/818 | 27 |
| Long funding lease; funding lease | Plant lease (over 7 years) meeting a funding test; the lessee claims CAs | 9 |
| Long-life asset | Plant with a life of 25 years or more, above the (divided) £100,000 limit; special rate pool | 8 |
| Low profit margin exemption | CFC exempt if accounting profit before interest ≤ 10% of relevant operating expenditure | 26 |
| Low profits exemption | CFC exempt if profits ≤ £50,000, or ≤ £500,000 with non-trading income ≤ £50,000 | 26 |
| Low value-adding services | Supportive services priced by a simplified approach at cost plus 5% | 27 |
| Major change in the nature or conduct of a trade; major change in the business | Change of customers, markets, products or (Ch 2A) scale within the statutory window after a change in ownership | 14 |
| Management expenses | Expenses of managing an investment business, not capital, deducted from total profits (s 1219) | 13 |
| Matched interest (CFC) | Chapter 9 exemption linked to the worldwide group's net interest (s 371IE) [read before use] | 26 |
| Merged scheme (RDEC) | 20% taxable R&D expenditure credit for APs from 1 April 2024 | 10 |
| Migration | Company ceasing to be UK resident | 22 |
| Mixed membership partnership | Partnership with individual and non-individual partners; ITTOIA s 850C / CTA 2009 s 1264A | 15 |
| Mixer cap | Underlying tax relief capped at (D + PA) × M% (s 58 Step 3) | 24 |
| Multilateral Instrument | OECD convention modifying treaties (UK in force 1 October 2018) | 24 (2) |
| Multinational top-up tax; domestic top-up tax | UK Pillar Two taxes (F(No.2)A 2023 Parts 3 and 4) | 30 |
| Mutual agreement procedure | Treaty process between competent authorities to resolve taxation not in accordance with the treaty | 24 |
| Nexus fraction | Patent Box restriction for acquired IP and connected-party R&D | 11 |
| No gain, no loss transfer | Intra-group disposal at a value giving neither gain nor loss (s 171) | 17 |
| Non-trading finance profits | CFC Ch 5 profits from finance not part of a trade | 26 |
| Notional tax deduction (RDEC) | Step 2: unused credit reduced at 25% (main rate companies including marginal relief) or 19% | 10 |
| NTLR deficit | Excess of non-trading loan relationship debits (TKS 22) | 12 |
| OECD Model Tax Convention; Commentary | Model treaty and commentary; the 18 November 2025 version referred to by UK statute; the 2017 articles supplied in the exam | 2, 24 |
| Opening negative amount | Branch exemption: net PE losses of the previous 6 years that must be matched by PE profits before exemption bites | 25 |
| Overlapping period | Period common to surrendering and claimant companies' APs while both in the group | 15 |
| Overseas restriction (R&D) | Overseas subcontractor and EPW costs excluded unless s 1138A conditions met | 10 |
| Ownership proportion | Consortium: lowest of the member's share of shares, profits, assets and votes | 15 |
| Para 15A hive-down rule | SSE holding period treated as met where the assets were used in a group trade | 18 |
| Part disposal (A/(A+B)) | Cost apportioned by proceeds over proceeds plus value retained | 16 |
| Part 12 relief | Corporate deduction for employee share acquisitions: market value less amount paid | 7 |
| Part 14A; Part 14B | Transfer of deductions TAAR; carried-forward loss arrangement TAAR (tax value exceeds non-tax value) | 14 |
| Participation condition | One party participates in the management, control or capital of the other, or both are under common participation | 27 |
| Patent Box | Election to tax relevant IP profits at 10% via a deduction (CTA 2010 Part 8A) | 11 |
| PAYE cap (RDEC) | Payable credit limited to £20,000 + 300% of relevant PAYE and NIC | 10 |
| Pension spreading | Deduction of exceptional employer contributions spread over up to 4 periods (FA 2004 s 197) | 7 |
| Permanent establishment | Fixed place of business or dependent agent through which a company carries on business | 23 |
| Persistent late filing | Third successive late CT return: £1,000 / £2,000 | 3 |
| Pillar Two | OECD global minimum tax at 15% | 30 |
| Post-transaction valuation check | Form CG34 agreement of a valuation before filing | 16 |
| Potential advantage (TP) | Smaller UK profits or larger losses from non-arm's length provision | 27 |
| Pre-entry loss | Capital loss realised before a company joined the group (Sch 7A) | 17 |
| Preparatory or auxiliary | Activities not creating a PE (s 1143) | 23 |
| Primary response; secondary response | Which jurisdiction neutralises a hybrid mismatch first | 29 |
| Principal purpose test | MLI Art 7: treaty benefit denied where obtaining it was one of the principal purposes | 24 |
| Proceeds not reinvested | Roll-over: the amount of proceeds not reinvested, chargeable up to the gain | 16 |
| Profit split; TNMM; resale price | TP methods | 27 |
| Provision (TP) | The terms of a transaction or series between affected persons | 27 |
| Public infrastructure exemption; qualifying infrastructure company | CIR carve-out for infrastructure companies electing in | 28 |
| Qualifying benefit | Payment from an EBT giving rise to income tax and NIC charges, or other listed benefits (s 1292) | 7 |
| Qualifying change of ownership | Joining or leaving a group or a change of control for ss 184A–184I | 17 |
| Qualifying corporate bond (company) | Any loan relationship asset (s 117(A1)) | 18 |
| Qualifying IP assets; relevant assets | Patents, registered designs, copyright etc.; goodwill and customer-related assets | 11 |
| Qualifying loan relationship | CFC Ch 9: creditor relationship with a connected non-UK qualifying company | 26 |
| Qualifying private placement | Unlisted debt security exempt from withholding (s 888A) | 23 |
| Qualifying resources | Funds that let Ch 9's full exemption apply | 26 |
| Quarterly instalment payments | CT paid in instalments by large and very large companies | 3 |
| Quoted Eurobond | Listed interest-bearing security; interest paid gross (s 882) | 23 |
| Reactivation | Disallowed interest brought back where the group later has spare capacity | 28 |
| Realisation (intangibles) | Disposal of an intangible giving a credit or debit | 11 |
| Reallocation election | s 171A: gain or loss treated as another group company's, within 2 years | 17 |
| Reasonable belief | Payer may pay gross (s 930) or at a treaty rate on royalties (s 911) on a reasonable belief | 23 |
| Reasonable prevention procedures | CCO defence | 4 |
| Refund surrender | Part 22 Ch 4: a group company's CT repayment surrendered to another before it is paid | 3 |
| Reinvestment relief (intangibles) | Deferral where proceeds are reinvested in chargeable intangibles within the window | 11 |
| Related (hybrids) | Same control group or 25% investment | 29 |
| Related party (intangibles) | Control or major interest relationships; market value rule, arm's length for cross-border TP transfers from 2026 | 11 |
| Relevant EEA state | EU member or state with equivalent recovery assistance (Sch 3ZB) | 22 |
| Relevant interest (CFC) | Interest of a UK company not held through another UK company (s 371OC) | 26 |
| Relevant IP profits | Profits within Patent Box | 11 |
| Relevant non-lending relationship | Money debt not from lending brought into Part 5 (s 479) | 12 |
| Relevant operating expenditure | LPM exemption base, excluding goods not used in the territory and related-person expenditure | 26 |
| Reporting body | UK corporate parent obliged to report international movements of capital | 25 |
| Reporting company (CIR) | Company appointed to file the interest restriction return (FA 2026: per period, more than half of eligible companies) | 28 |
| Right-of-use asset; spreading period | Lessee asset under IFRS 16 / FRS 102 (2024); FA 2019 Sch 14 spreads transition adjustments | 5 |
| s 137 main purpose test | FA 2026 recast: counteraction where a main purpose of arrangements is to avoid CGT or CT; 5% exception gone | 18 |
| s 138 clearance | Advance clearance that s 137 will not apply | 18 |
| s 140 postponement | Deferral of gains when a UK company's foreign PE trade is transferred to a non-resident company for shares (≥ 25%) | 25 |
| s 187B postponement | Exit gain on UK land deferred to actual disposal | 22 |
| s 198 election | Joint fixtures value election (2 years; capped at the seller's cost) | 9 |
| s 931R election | Election that a distribution is not exempt (2 years) | 25 |
| Safe harbour (Pillar Two) | Transitional CbCR and other simplifications | 30 |
| Scheme of reconstruction | Sch 5AA: merger, division or restructuring meeting conditions 1, 2 and 3 or 4 | 19 |
| Senior accounting officer; SAO certificate | Officer responsible for appropriate tax accounting arrangements; annual certificate | 4 |
| Separate and independent enterprise | PE attribution hypothesis (s 21) | 23 |
| Separate entity principle | Each company is a separate taxpayer | 1 |
| Share exchange | s 135 exchange treated as a reorganisation | 18 |
| Shell company | Company with no trade, investment business or property business (Part 14 Ch 5A) | 14 |
| Short lease (CA) | Lease of 7 years or less (s 70I) | 9 |
| Short-life asset | Elective single asset pool (2 years; 8-year cut-off) | 8 |
| Significant increase in capital | Investment company change of ownership test: at least £1m and 125% | 13 |
| Significant people functions | People functions relevant to assets and risks (AOA; CFC Ch 4) | 26 |
| SME exemption (TP) | Small and medium-sized enterprises exempt from TP (s 166) | 27 |
| Special balancing charge | Charge on disposal of fully expensed (s 59A) or 50% FYA (s 59B) plant | 8 |
| Special tax site | Freeport or investment zone site with 100% FYA and 10% SBA (grade 3) | 9 |
| Stewardship activities | Shareholder activities not chargeable as services [TPG Ch VII not opened] | 27 |
| Streaming (branch exemption) | Matching a territory's negative amount only against that territory | 25 |
| Structures and buildings allowance | 3% straight line on post-29 October 2018 construction (TKS 12) | 9 |
| Substantial shareholding exemption | Gains and losses on substantial trading shareholdings exempt (Sch 7AC) (TKS 23) | 18 |
| Succession; connected-party election | Market value on succession; election for TWDV between connected parties (ss 265–267) | 9 |
| Surrenderable amounts | Amounts available for group relief | 15 |
| Surplus management expenses | Unrelieved management expenses carried forward (claim) | 13 |
| Tainted donation | Donation linked to financial assistance to a non-charity (outcome test from 6 April 2026) | 7 |
| Tax-EBITDA; group-EBITDA | UK companies' adjusted CT earnings before interest, CAs and specified reliefs; consolidated EBITDA | 28 |
| Tax design condition | UTPP: reasonable to assume the arrangements were designed to reduce, eliminate or delay UK tax | 30 |
| Tax exemption (CFC) | Local tax at least 75% of corresponding UK tax | 26 |
| Tax strategy | Board-approved published statement of a large business's approach to tax | 4 |
| Temporary difference; timing difference; tax base | IAS 12 and FRS 102 deferred tax concepts | 6 |
| Thin capitalisation | Excessive debt tested under TP | 27 |
| Threshold ladder | The book's table of size thresholds | 1 |
| Tie-breaker | Treaty rule deciding residence of a dual resident | 22 |
| TP notice | HMRC notice applying TP to a medium enterprise, deeming participation (s 148A), or disapplying s 164A | 27 |
| Trading profits safe harbour | CFC Ch 4 exclusion if five conditions are met | 26 |
| Transactions in securities | CTA 2010 Part 15 counteraction of CT advantages | 19 |
| Transactions in UK land | CTA 2010 Part 8ZB: gains treated as trading profits in conditions A–D | 16 |
| Transfer of trade without change of ownership | CTA 2010 Part 22 Ch 1 | 19 |
| Treaty Passport | Scheme for treaty-resident lenders to receive UK interest at treaty rates | 23 |
| UK related | Group relief: UK resident or within UK CT through a PE | 15 |
| UK representative | A non-resident's UK PE treated as its representative (Part 22 Ch 6) | 23 |
| UK-to-UK exemption | TIOPA s 164A: TP disapplied between UK companies taxed at the same rate (from 1 January 2026) | 27 |
| Unallowable purpose | Loan relationship purpose outside business or commercial purposes; debits disallowed (s 441) | 12 |
| Unassessed transfer pricing profits | FA 2026 CT charge at CT rate + 6% replacing DPT | 30 |
| Uncertain tax treatment | Notification by large businesses of positions over £5m meeting a trigger | 4 |
| Underlying tax | Foreign tax on profits out of which a dividend is paid (TKS 26) | 24 |
| Undertaxed profits rule | Pillar Two backstop rule (from 31 December 2024) | 30 |
| Unilateral relief | Credit given by UK law where no treaty applies | 24 |
| Unremittable income | Overseas income that cannot be transferred; claim to defer (ss 1274–1278) | 25 |
| Unused interest allowance | Spare allowance carried forward up to 5 years | 28 |
| Value shifting | Transactions moving value out of assets (ss 29–31) | 17 |
| Withholding (yearly interest) | Duty to deduct income tax (20% in 2026/27; 22% from 2027/28) | 23 |
| Worldwide group | Ultimate parent and its consolidated subsidiaries (CIR; Pillar Two) | 28 (1) |

---

## 3. Established facts

Every figure here comes from the research files (opened 9 October 2026) or the verified TKS files. **Source** abbreviations: **LS1–LS5** = law sheets 1–5; **EI** = exam-intel; **TKS** = `/home/claude/cta-tks/book-bible.md` §3 or `rates-2026-27.md`. Status as in the header (V / S / U).

### 3.1 Exam facts

| Fact | Value | Source | Status |
|---|---|---|---|
| Paper | CTA Advanced Technical, Taxation of Larger Companies and Groups (formerly Taxation of Major Corporates to November 2022) | EI §3 | V |
| Format | 3 h 30 min; normally six questions of 10/15/20 marks; 100 marks; pass 50%; usual mix three 20s, two 15s, one 10 | EI §1 | V |
| Core rule | At least 70% of the CT element from core (grade 1) material | EI §1; grid | V |
| Grades | 1 core, 2 non-core, 3 awareness (v2 grid extract) | grid | V |
| Law for 2027 | FA 2026 (pattern; TKS syllabus "FA2026 for exams in 2027"); **no 2027 LCG grid or prospectus published** | EI §2 | V pattern / derived |
| Sittings | 27 Oct 2026 (FA 2025); **4 May 2027, 2.30pm**; **26 Oct 2027, 2.30pm** | EI §1 | V |
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
| Associated companies | Control test from 1 April 2023; dormant and passive holding companies excluded; non-UK companies count | TKS | V |
| Loss restriction | £5m deductions allowance per company or group per 12 months; 50% of profits above it; capital losses within it from 1 April 2020 | LS1 §7; TKS | V |
| Group deductions allowance | One £5m; only if all CT-chargeable members nominate one company; allocation statement; a member allocated nothing has nil | LS1 §7 | V |
| RDEC | 20% (ring fence 49%); APs from 1 April 2024; notional tax 25% for main-rate companies including marginal relief companies, 19% otherwise; PAYE cap £20,000 + 300% | LS1 §6; TKS | V |
| ERIS | 86% extra deduction (186%); payable credit 14.5%; intensity 30% (one-year grace); NI de minimis State aid (s 1112J) | LS1 §6 | V |
| R&D payments for surrendered RDEC | Ignored for CT and not distributions, up to the credit surrendered (FA 2026 s 31; payments from 26 November 2025) | LS1 §6 | V |
| Overseas R&D restriction | s 1138A; FA 2026 s 34: relaxation ERIS-only, claims from 30 October 2024 | LS1 §6 | V |
| R&D claim notification | First claim or none in 3 years; window to 6 months after the period of account; otherwise invalid; additional information form for claims from 8 August 2023 | LS1 §6; TKS | V (guidance) |
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
| QIPs | Large: augmented profits > £1.5m (divided by associates, time-apportioned); months 7, 10, 13, 16. Very large: > £20m; months 3, 6, 9, 12 (APs from 1 April 2019). **Whether the £20m is divided by associates and the large-company first-year exemption (£10m) must be verified** (SI 1998/3175; CTM92520) | TKS; LS1 §8 | V / U |
| QIP interest | 6.25% underpaid / 3.50% overpaid from 29 December 2025 | TKS | V |
| Late payment / repayment interest | 7.75% / 2.75% from 9 January 2026 (Bank Rate 3.75%; next decision 5 November 2026) | TKS | V |
| Payment and filing | 9 months and 1 day after the AP end; return 12 months after the period of account end (long period rules: **verify** FA 1998 Sch 18 para 14) | TKS; EI | V / U |
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
| SAO | UK-incorporated company; turnover > £200m and/or balance sheet > £2bn, alone or aggregated with UK group companies, in the preceding financial year; deadlines 6 months (plc) / 9 months; from financial years beginning on or after 21 July 2009 | LS1 §8 | V |
| Tax strategy | UK groups etc. with turnover > £200m or balance sheet > £2bn in the previous FY, **or** UK entities of a €750m CbC group; 51% group test; publish before the end of the FY after first qualifying, then within 15 months | LS1 §8 | V |
| UTT | 51% group CT-paying members: UK turnover > £200m and/or balance sheet > £2bn; two triggers (provision; departure from HMRC's known position); £5m threshold; returns required on or after 1 April 2022; deadline later of CT filing date and accounts filing deadline; 2026 consultation (12 March–4 June 2026) proposes extension and a third trigger (not law) | LS1 §8 | V |
| CCO | Criminal Finances Act 2017 ss 45–46; in force 30 September 2017; defence of reasonable prevention procedures; unlimited fine | LS1 §8 | V |
| CbC reporting | Consolidated revenue €750m (SI 2016/237 reg 3) | LS5 | V |
| TP records | Master File and Local File for UK members of €750m groups; APs from 1 April 2023 (SI 2023/818); UK-UK transactions excluded from Local File | LS5 | V |
| CIR de minimis | £2m net interest a year | LS1 §1 | V |
| Pillar Two | Revenue "exceeds" €750m in 2 of the previous 4 periods (F(No.2)A 2023 s 129); HMRC guidance "750 million euros or more" (**discrepancy flagged**) | LS3 §10 | V |
| International movements of capital | Reportable events over £100m; within 6 months; from 1 July 2009 | LS3 §8 | V |
| TP SME exemption | Small < 50 staff and turnover or balance sheet ≤ €10m; medium < 250 staff and turnover ≤ €50m or balance sheet ≤ €43m; linked and partner enterprises; unchanged by FA 2026 | LS5 B3 | V / S |

### 3.5 Capital allowances (FY2026)

| Item | Value | Source | Status |
|---|---|---|---|
| Main pool WDA | 14% for CT chargeable periods beginning on or after 1 April 2026 (FA 2026 s 28); hybrid rate by days, rounded **up** to 2 dp (1 Jan–31 Dec 2026: 14.99%; 1 Oct 2025–30 Sep 2026: 16.00%; 1 Jul 2025–30 Jun 2026: 17.01%) | LS2 §14 | V |
| Special rate WDA | 6% | LS2 | V |
| AIA | £1m; one per group (parent undertaking and subsidiaries) and for related companies | LS2 | V |
| Full expensing / 50% FYA | s 45S: companies; from 1 April 2023; new and unused; not cars or (most) leasing; permanent | LS2 | V |
| Special balancing charge | s 59A: disposal value × FE expenditure ÷ total expenditure; s 59B: half for 50% assets | LS2 | V |
| 40% FYA | s 45U: from 1 January 2026; main rate; new and unused; leasing allowed (s 46(4B)) except overseas; not cars; any business; no special balancing charge | LS2 | V |
| Zero-emission cars / charge points | 100% FYA to 31 March 2027 (CT) | TKS | V |
| Cars | Main rate ≤ 50g/km or electric; otherwise special rate | LS2 | V |
| Long-life assets | 25 years; £100,000 limit divided by 1 + associated companies; reduced (not increased) for short (long) periods | LS2 | V |
| Short-life assets | Election 2 years after the period end (CT); 8-year cut-off | LS2 | V |
| SBA | 3% over 33⅓ years; construction from 29 October 2018; excludes land and plant; demolition ends it; special tax sites 10% over 10 years | LS2 | V |
| Fixtures | Fixed value requirement from 1 April 2012; pooling requirement from 1 April 2014 (CT); s 198/199 elections within 2 years, capped at the seller's qualifying cost | LS2 | V |
| Long funding leases | Funding lease (finance lease test; 80% lease payments; 65% useful life) that is not short (7 years or less); lessee claims; lessee's return election (s 70H) | LS2; LS4 | V |
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
| "Substantial" non-trading activities | HMRC practice: more than 20% | TKS | V (practice) |
| Gains group | 75% + effective 51% (s 170) | LS2 | V |
| s 171A election | Within 2 years after the end of the transferring company's AP | LS1; LS2 | V |
| Roll-over window | 12 months before to 3 years after; company provisional relief to the 4th anniversary of the AP end | LS2; TKS | V |
| Degrouping | 6 years from the intra-group acquisition; market value at acquisition; since 19 July 2011 (or 1 April 2011 by election) added to share-sale proceeds where leaving on a share disposal | LS2 | V |
| s 190 recovery | 51% group; unpaid 6 months; notice within 3 years | LS2 | V |
| Lease table points | 50 years 100; 25 years 81.100; 10 years 46.695; 1 year 5.983 | LS2 | V |
| Lease premium income element | P × (50 − (n − 1))/50 for leases of 50 years or less (CTA 2009 ss 217–221) | LS2 | V (formula; A/(A+B) treatment U) |
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
| Goodwill relief | 6.5% for relevant assets acquired from 1 April 2019 with qualifying IP; cap 6 × IP expenditure; nil for 8 July 2015–31 March 2019 cases and related-individual acquisitions | LS1 §4 | V |
| Reinvestment window | 12 months before to 3 years after | LS1 §4 | V |
| Degrouping | 6 years; s 782A switched off on SSE-qualifying share sales (FA 2019) | LS1 §4 | V |
| Cross-border related-party transfers | Arm's length price (FA 2026 Sch 6 paras 25, 28), transfers and grants on or after 1 January 2026 | LS1 §4 | V |
| Patent Box | 10% special IP rate via deduction RP × (MR − 10%)/MR; nexus for elections after 30 June 2016 | LS1 §5 | V |

### 3.8 Loan relationships and derivatives

| Item | Value | Source | Status |
|---|---|---|---|
| Deemed release exceptions | Equity-for-debt (s 361C); corporate rescue (s 361D: release within 60 days; material risk within 12 months) | LS1 §2 | V |
| Release of unconnected debt | Conditions A–E (s 322) | LS1 §2 | V |
| Late interest | Only s 375 (close company participators; corporate creditors only in non-qualifying territories) and s 378 (pension scheme loans); ss 374, 377 omitted (FA 2015 s 25) | LS1 §2 | V |
| NTLR deficits | Current year; carry back 12 months against NTLR profits only; carry forward against total profits with a 2-year claim | LS1 §2 | V |
| Unallowable purpose | Debits disallowed so far as attributable (just and reasonable); tax advantage for any person | LS1 §2 | V |
| Disregard Regulations | Regs 6, 6A, 7–9; reg 9A revoked; reg 6A election timing for new adopters | LS1 §3 | V |
| Change of accounting practice | SI 2004/3271; 10-year spreading of prescribed amounts (reg 3A as amended); IFRS 9 own-credit 5 years (40/25/15/10/10%) | LS4 §1.3 | S (amended text not on legislation.gov.uk) |

### 3.9 Corporate interest restriction

| Item | Value | Source | Status |
|---|---|---|---|
| Start | Periods of account starting on or after 1 April 2017 | LS1 §1 | V |
| De minimis | £2m a year (pro rata) | LS1 §1 | V |
| Fixed ratio | 30% of aggregate tax-EBITDA, capped by the fixed ratio debt cap (ANGIE + excess debt cap b/f from the preceding period) | LS1 §1 | V |
| Group ratio | QNGIE ÷ group-EBITDA (100% if negative, over 100% or EBITDA nil) | LS1 §1 | V |
| Disallowed interest | Carried forward indefinitely (lost on cessation, small or negligible) | LS1 §1 | V |
| Unused allowance | 5 years; nil if an abbreviated return applies or no return is made | LS1 §1 | V |
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
| Non-resident company charge | s 5 CTA 2009: UK land dealing/development; UK PE trade; UK property business and other UK property income (from 6 April 2020) | LS3 §2 | V |
| Non-resident gains | UK land and UK-property-rich assets from 6 April 2019; FA 2026 s 40 cells (from 26 November 2025) | LS2; LS3 | V |
| PE definition (FA 2026) | New dependent agent ("principal role") test; closely related agents not independent; purpose clause s 1140A; chargeable periods beginning on or after 1 January 2026 | LS3 §2.1 | V |
| PE attribution (FA 2026) | ss 20(1A)–(1E), 21 rewritten; ss 22–23, 25–32 omitted; same date | LS3 §2.2 | V |
| Branch exemption | s 18A from 19 July 2011; irrevocable; all PEs; s 18S updated to the 18 November 2025 OECD Model | LS3 §3 | V |
| DTR credit limit | s 42 R × IG source by source; mixer cap (D + PA) × M% for underlying tax (s 58); onshore pooling and EUFT repealed for distributions from 1 July 2009 | LS3 §5 | V |
| DTR anti-avoidance | ss 81–88; s 81 substituted by FA 2018 s 31 (self-executing) | LS3 §5 | V |
| Part 9A | Distributions from 1 July 2009; s 931R election within 2 years | LS3; LS4 | V |
| Unremittable income | Claim within 2 years after the AP end | LS3 §6 | V |
| Withholding on yearly interest | 20% for 2026/27 (**secondary: verify wording**); **22% savings basic rate from 2027/28** (FA 2026 ss 5–6, Sch 1 para 29) | LS3 §7 | V / S |
| Royalties to non-residents | Basic rate (s 906); treaty rate on reasonable belief (s 911) | LS3 §7 | V |
| EU I&R Directive relief | Repealed for payments from 1 June 2021 (FA 2021 s 34) | LS3 §7 | V |
| CT61 | Quarterly; within 14 days of the quarter end | LS3 §7 | V |
| Treaty Passport | DTTP1 (lender; normally 5 years); DTTP2 (borrower); withhold until HMRC direction | LS3 §7 | V |
| Notional tax credit for non-residents | Abolished from 2026-27 (FA 2026 s 42; ITTOIA s 399 omitted) | LS3; LS4 | V |
| Migration notice | TMA s 109B conditions A–D before migrating; penalties s 109C–D; recovery s 109E (6 months; 3 years; 51% group; controlling directors; 30 days) | LS5 D2 | V |

### 3.11 CFCs

| Item | Value | Source | Status |
|---|---|---|---|
| Regime | TIOPA Part 9A, inserted 17 July 2012 (FA 2012 Sch 20) | LS5 | V |
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
| Registration | Within 6 months after the end of the first qualifying AP | LS3 §10 | V |
| GIR / UK return | 15 months; 18 for the first; floor 30 June 2026 | LS3 §10 | V |
| Transitional CbCR safe harbour | APs commencing on or before 31 December 2026 and ending on or before 30 June 2028; simplified ETR 15% / 16% / 17% (periods beginning on or after 1 January 2026); de minimis revenue < €10m and profit < €1m | LS3 §10 | V |
| FA 2026 Sch 8 | General commencement APs beginning on or after 31 December 2025 (retrospection election) | LS3 §10 | V |
| DPT | FA 2015 Part 3; APs from 1 April 2015; 25%, then 31% for APs from 1 April 2023; **repealed for APs beginning on or after 1 January 2026** | LS3 §9 | V |
| UTPP | TIOPA ss 217A–217T; CT rate + 6%; effective tax mismatch < 80%; tax design condition; preliminary notice within 4 years; 30-day representations; assessment within 60 days; 15-month amendment period; pay first; no reliefs | LS3 §9 | V |
| IAS 12 Pillar Two exception | 23 May 2023 (IASB); UK endorsement 19 July 2023; FRS 102/101 July 2023 | LS4 §2 | V / S |

### 3.14 Demergers, distributions, transactions in securities, liquidation, stamp taxes

| Item | Value | Source | Status |
|---|---|---|---|
| Demerger conditions | A–M (ss 1081–1085); clearance s 1091 (SP 13/1980 still cited) | LS2 §11 | V |
| 2026 distributions consultation | 23 June–14 September 2026; proposals only | LS2 §11 | V |
| Transactions in securities | CTA 2010 Part 15; circumstances C, D, E (A omitted by FA 2010); clearance 30 + 30 days; counteraction no later than 6 years after the AP | LS4 §7 | V |
| Liquidation / administration APs | Ends immediately before winding up starts (then 12 months); ends immediately before the day of administration | LS1 §7; LS4 §8 | V |
| Final-year rates | Fixed rate, else proposed, else penultimate year's (ss 626–633); repayment interest ≤ £2,000 not taxable (s 633) | LS4 §8 | V |
| Stamp duty / SDRT | 0.5% (rounded up to £5); £1,000 threshold; 30 days; 1.5% depositary receipts; SDRT listing relief 3 years for listings from 27 November 2025 | TKS; LS2 | V |
| Stamp duty group relief | FA 1930 s 42: 75% of shares, profits, assets; arrangements denial | LS2 §15 | V |
| s 77 share-for-share relief | Whole share capital; shares only; mirror image; no disqualifying arrangements (s 77A, FA 2016 s 137) | LS2 §15 | V |
| s 76 acquisition relief | Repealed (FA 2012) | LS2 | V |
| SDLT non-residential | 0% to £150,000; 2% to £250,000; 5% above; lease NPV 0%/1%/2% (£150,000; £5m); 14 days | TKS | V |
| SDLT group relief clawback | 3 years; market value at the original effective date | LS2 | V |
| SDLT acquisition relief | 0.5% cap; cash ≤ 10% of nominal value; not land dealing | LS2 | V |
| SDLT sale and leaseback | s 57A; not if both in the same SDLT group | LS2 | V |
| CT sale and leaseback | CTA 2010 Part 19; Ch 2: new lease ≤ 15 years after assignment of a lease ≤ 50 years: (16 − N)/15 taxed | LS4 §1.6 | V |
| LBTT | Group relief LBT(S)A 2013 Sch 10; rates **not verified** | LS2 | V / U |

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

**After FA 2026 (not law for 2027 sittings):** draft Finance Bill 2026-27 (13 July 2026: Pillar Two "side-by-side" package; reform of the foreign PE exemption; stablecoins; error correction; deliberate defaulters; information powers) [V collection list only]; Autumn Budget 28 October 2026.

### 3.17 Legislative and story dates

See `book-plan.md` §9 (master timeline) and `calder-ledger.md` §7 (story events). Spellings and spoken names: `book-plan.md` §11.

---

## 4. Coverage

### 4.1 What *The Living Law* (TKS) already taught, and how LCG uses it

Writers **recap** (one to three sentences, naming the TKS chapter) and then teach at Advanced Technical depth. Never re-tell a TKS story at length.

| TKS chapter | TKS covered (TKS Direct level) | LCG chapters that build on it | Recap, then go further on |
|---|---|---|---|
| 2 Where tax law lives | Statute, interpretation (*Pepper v Hart*, *R (O)*), tribunals, HMRC guidance, research, AI | 2 | OECD materials written into statute; accounting as a source; exam legislation access |
| 3 Planning, avoidance and evasion | *Ramsay* line, GAAR, DOTAS, FNs/APNs, CFA 2017 | 4, 12 | DOTAS penalties (FA 2026), CCO procedures, purpose tests in corporate rules |
| 4 Adviser's conscience | PCRT, AML | 4 (one line) | — |
| 5 Compliance machine | CTSA, iXBRL, QIPs, CT penalties (with the persistent-penalty wording error), Calder's FY2026 QIPs | 3 | Very large companies; associated-company division; group payment arrangements; group enquiry windows; FA 2026 penalties correctly |
| 9 Benefits, NIC, leaving package | Termination payments; Dan's redundancy (employee side) | 7 | Employer deductions |
| 11 Is it a trade? | Badges; adjustment of profits; capital v revenue | 7, 13 | Company context; investment v trade |
| 12 Capital allowances | Plant; pools; AIA; FE; 40% FYA; 14% and hybrid rates; SBA basics; succession election | 8, 9 | Special balancing charges; HP; LLA division; LFLs; fixtures; SBA second-hand; successions; contributions |
| 20 CT foundations | Residence (*De Beers*), APs, long periods, pro forma, rates, MR, associated companies, distributions | 1, 3, 7, 22 | Large-company thresholds; AP events; distribution categories |
| 21 Inside TTP | Company trading profits; loan relationships (basics); IFAs (basics); property income; QCDs; R&D merged scheme and ERIS | 5, 7, 10–12, 16 | Connected parties; unallowable purpose; derivatives; goodwill restrictions; Patent Box; RDEC steps; linked enterprises |
| 22 When companies lose | s 37, 45A, 45F, the restriction, NTLR deficits, change of ownership (outline), streaming (*Leekes*) | 14 | Group allowance nomination; Part 14 chapters; Part 14A/14B; liquidation |
| 23 Company gains | Indexation, matching, SSE, roll-over, capital losses, QCBs, purchase of own shares | 16, 18 | Leases; group roll-over; para 15A; para 4; s 137 recast; earn-outs |
| 24 Groups | 75% group relief; non-coterminous periods; gains groups; s 171A; group roll-over; pre-entry losses; degrouping; consortia (outline); *Marks and Spencer*; *Johnston Publishing*; *Farnborough* | 15, 17 | Consortium in full; arrangements; DRIC; depreciatory transactions; value shifting; anti-gain buying; s 190 |
| 25 Close companies | Close company rules; extraction | — (out of LCG scope) | — |
| 26 Companies abroad | Residence, tie-breaker (MLI Art 4 UK–Ireland), PE, branch v subsidiary, s 18A basics (opening negative amount), DTR (credit, s 42, s 52, underlying tax basics, expense relief), Part 9A, s 140, Ridgeway's Dublin branch | 22–25, 31 | FA 2026 PE and attribution; withholding; treaties in depth; CFC; migration; the Dublin branch decision |
| 30 Stamp taxes | Stamp duty, SDRT, SDLT, group relief and clawback | 21 | Reconstruction and acquisition reliefs; s 77; sale and leaseback; groups |
| 31 Interaction | Ridgeway's hypothetical £4m sale | 31 | The real sale to Tarnmoor at £4.5m (buyer's side) |

TKS **did not** teach (signposted only): transfer pricing, CFCs, CIR, Pillar Two, hybrids, DPT, migration, deferred tax, demergers, transactions in securities, management expenses in depth, Part 14 in depth. These need full teaching from first principles at AT level.

### 4.2 Which LCG chapter owns which topic

| Chapter | Owns |
|---|---|
| P | *BlackRock* story |
| I | Four questions; paper map; conventions; how to use the book |
| 1 | Larger company concept; threshold ladder; group-definitions matrix; tax function; Tarnmoor introduced |
| 2 | Sources: statute, SIs, OECD materials in statute, accounting as source, HMRC guidance, advance clearances, cases, exam research |
| 3 | CTSA for large groups; APs and long periods; QIPs (large, very large, associates); GPAs; refund surrender; enquiries; discovery; penalties (FA 2026); interest |
| 4 | SAO; tax strategy; UTT; CCO; DOTAS (FA 2026 penalties); APNs/FNs; GAAR; ADR; promoter rules (outline) |
| 5 | GAAP and s 46; change of basis; COAP; leases (IFRS 16/FRS 102; FA 2019 Sch 14); revenue; provisions; s 996; functional currency; Part 20 outline |
| 6 | Current and deferred tax; IAS 12/FRS 102 s 29; ETR; Pillar Two exception; business combinations |
| 7 | CT computation; badges (company); employment costs (s 1288, EBCs, pensions, Part 12); entertaining and gifts; QCDs (tainted donations); income not otherwise charged; LFL lessee revenue deductions |
| 8 | P&M at AT depth (FE, 50%, 40%, hybrid rates, AIA sharing, special balancing charges, cars, LLA, SLA, software, HP, lessee plant, partial use, entertainment, VAT adjustments, giving effect) |
| 9 | SBA (AT); fixtures; LFLs (CA); successions; connected sales; ss 561–581; contributions; anti-avoidance; freeports |
| 10 | Merged RDEC; ERIS; linked enterprises; overseas restriction; claim notification; R&D allowances |
| 11 | IFAs (AT); goodwill; reinvestment; group transfers and degrouping; related parties; cross-border arm's length; Patent Box |
| 12 | Loan relationships (AT): connected parties, releases, corporate rescue, late interest, unallowable purpose, NTLR deficits, Part 6, derivatives, Disregard Regulations, financing transactions |
| 13 | Investment companies; management expenses; *Centrica*; surplus ME; investment company change of ownership |
| 14 | Losses (AT); restriction and group allowance; Part 14 (all chapters except Ch 3); Part 14A/14B; liquidation and administration |
| 15 | Group relief (AT); consortium relief; JVs; corporate partners; DRIC |
| 16 | Company gains computation; leases; premiums; property income; roll-over (single company); appropriations; Part 8ZB; s 48; valuations |
| 17 | Gains groups; s 171, 171A, 173, 175; pre-entry losses; ss 184A–184I; depreciatory transactions; value shifting; degrouping; s 190 |
| 18 | Company share matching; QCBs; SSE (AT); reorganisations; share exchanges and s 137/s 138; stock dividends; earn-outs |
| 19 | Distributions (paid and received, Part 9A rules); schemes of reconstruction; s 136/s 139; Part 22 Chs 1–2; demergers; transactions in securities; strike-off |
| 20 | Acquisition process; share v asset; joining-group checklist; selling a subsidiary |
| 21 | Stamp duty, SDRT, SDLT for groups; reconstruction and acquisition reliefs; sale and leaseback |
| 22 | Company residence (AT); dual residence; migration (exit charges, notice, payment plans) |
| 23 | Non-resident companies; PE definition and attribution (FA 2026); Part 22 Chs 5–7; withholding |
| 24 | Treaties (OECD articles, MLI, interpretation); DTR (AT) |
| 25 | Branch exemption (AT); s 140 and ss 140A–140L; foreign dividends; branch v subsidiary; unremittable income; international movements of capital |
| 26 | CFCs |
| 27 | TP and APAs |
| 28 | CIR |
| 29 | Hybrids |
| 30 | Pillar Two; DPT to UTPP |
| 31 | The Ridgeway deal (application) |
| 32 | Exam craft |
| 33, 34 | Conclusion; note on sources |

### 4.3 Debates planned

See `book-plan.md` §8 (L1–L12). Each is stated at its strongest on each side; no personal verdict on live political questions.

---

## 5. Open threads and verification flags

### 5.1 Story threads open at planning stage

| Thread | Opened | To close in |
|---|---|---|
| Brackenwell's restricted losses (£8.6m) and whether the trade later changes back | 14 | 20 or later (optional) |
| Calder's TP dispute: MAP corresponding adjustment in Vallaria (GY7) | 27 | 27 |
| TIL's payment plan instalments; eventual sale of the UK warehouse (postponed gain) | 22 | optional (31 or conclusion) |
| TAL earn-out receipts (GY7–GY8) and their treatment | 18, 20 | 18 (after verification) |
| Moorgate Logistics LLP results | 15 | 15 |
| TKS open thread: Ridgeway's Dublin branch election | TKS 26 | **31** |
| Dan Hartley after redundancy | TKS 9 | left open (31 one line) |

### 5.2 Verification flags (consolidated from exam-intel and law sheets 1–5)

**Exam and syllabus**
1. **No 2027 LCG grid or prospectus** published (9 October 2026). Build on the 2026 grid; check the 2027 grid and the **2027 tax tables** (expected around January 2027) and correct Exam lens grades before release.
2. The final (non-draft) 2025 grid was not found; the 2025 → 2026 comparison is against the January 2024 draft.
3. No transitional rules for the 2028 CTA change; the JP-specific form of the LCG paper from May 2028 is not published.
4. M26 examiners' report PDF headed "November 2025" (CIOT typo); no reading time mentioned anywhere; M26 dropped the presentation-marks line.
5. **Consortium in the grid:** law sheet 4's statement that LCG excludes consortia is wrong (law sheet 1 §0; N24 Q2). Teach consortium in full.

**Corporation tax core (LS1, LS4)**
6. **QIP thresholds:** whether the £20m very large threshold is divided by associates, and the large-company first-year exemption (£10m divided by associates; "not large in the previous period"): verify SI 1998/3175 regs 3–4 and CTM92520 (affects Calder GY1 and RC in the Ridgeway year).
7. **Long periods of account:** filing dates and enquiry windows for periods over 12 and over 18 months (FA 1998 Sch 18 para 14) not opened.
8. ***BlackRock* citation:** Find Case Law [2024] EWCA Civ 330; the Supreme Court permission list prints [2024] EWCA Civ 419 and the date 13 October 2024 (a Sunday). Use 330; check the SC date.
9. *Fidex* lead judge not checked; *Greene King* and *Union Castle* holdings summarised from limited paragraphs; *Syngenta* UT decision pending (check before publication).
10. FA 2026 s 216 DOTAS penalty commencement inferred (Royal Assent); FA 2015 s 25 and F(No.2)A 2015 commencement dates not opened.
11. R&D claim notification statutory paragraphs (FA 1998 Sch 18 para 83E ff) not opened; PAYE cap exemption conditions (CIRD140000) not re-read; **ERIS surrenderable loss cap (186%?) and whether a company acquired mid-period loses SME status for the whole AP** not verified.
12. Patent Box guidance last updated 2020 (mechanics from s 357A only); s 879O formula is an image (rely on s 879M).
13. CTA 2009 ss 455B–455D (regime TAAR) and CTA 2010 group mismatch rules not opened.
14. Tax strategy statutory paragraphs (FA 2016 Sch 19) not opened (GOV.UK guidance relied on).
15. **s 394 (unused allowance) after reactivation** and **s 407 treatment of chargeable gains and allowable capital losses in tax-EBITDA**: verify for the chapter 28 story (GY3).
16. The SAO "preceding financial year" test for companies joining a group mid-year (Calder, Brackenwell, Ridgeway) not checked.
17. Functional currency rules (CTA 2010 Part 2 Ch 4, ss 5–17) not researched.
18. Peeters Picture Frames case name ("Williams" or "Willis v Peeters"); *Purchase v Tesco*, *Rolls-Royce v Bamford*, the TiS cases and *Ayerst* known only through HMRC manuals; *IRC v Cleary* and *Page v Lowther* not verified.
19. LFL lessee: statutory basis for denying FYAs on deemed s 70A expenditure not verified (N25 suggested answer put LFL plant in the main pool without FYA).
20. CTA 2009 ss 76–81 (redundancy payments on cessation) not opened.
21. Company stock dividends: CTM17005 cites TCGA s 141, which legislation.gov.uk does not find (repeal unverified).
22. COAP Regulations as amended (reg 3A onwards) not on legislation.gov.uk (HMRC manuals relied on).
23. IAS 12 paragraph detail (paras 68A–68C, 81(c)) and FRS 102 paragraph numbers for the Pillar Two exception not opened.
24. Charitable donations: the s 105 restriction on surrender of excess QCDs not opened.

**Gains, reorganisations, CAs, stamp (LS2)**
25. **s 140A "relevant state"** definition after SI 2019/689 not located; ss 140A–140L post-Brexit scope unclear.
26. **TMA Sch 3ZB** still EEA-limited on legislation.gov.uk (with unapplied effects); CTM34133–34134 out of date; whether a CAA balancing charge is "qualifying CT" in a plan (story assumes not).
27. **Lease premiums:** whether A in A/(A+B) is the full premium or the capital part when part is taxed as income (TES's GY4 grant) and Sch 8 paras 2–4 not opened.
28. **Earn-out right and the SSE:** treatment of later receipts on a *Marren* right after an SSE-exempt share sale (TAL) not verified; *Marren v Ingles* court not stated (commonly HL).
29. CAA s 247 and the allowance-buying rules (ss 212A–212S) not opened; integral features list (s 33A(5)) partly read.
30. Intangibles degrouping on an exempt demerger (CTA 2009 s 780 exceptions) not checked (story avoids by giving TWS no intangibles).
31. LBTT non-residential rates not verified; freeport and investment zone sunset dates per site not checked.
32. Company private use of plant taxed as an employee benefit rather than restricting allowances: practice point, unverified.
33. *Prudential* (degrouping) and *Gallaher* not verified: do not cite.
34. Stamp duty on a demerger distribution (no consideration) and on contingent consideration: not researched (story avoids contingent consideration in stamp computations).
35. s 719 "acquires" where the acquirer already holds shares (TPLC 45% → 85% of Helmside) and the consortium "arrangements" rules (ss 154–155) not checked.

**International (LS3, LS5)**
36. OECD Model (18 November 2025 version), Commentary, TPG 2022 (Chapters V, VI, VII, IX, X) and the 2010 AOA report **not opened** (oecd.org blocked): rely on statute and INTM; say so.
37. **Pillar Two threshold wording:** statute "exceeds" €750m (F(No.2)A 2023 s 129) v HMRC guidance "750 million euros or more".
38. **QDMTT and the CFC rules:** whether a foreign QDMTT counts as local tax (s 371NB) or creditable tax (s 371PA) not found; the story does not depend on it. Irish QDMTT and Irish domestic residence law **not researched**: do not state them.
39. Excluded territories regulations (SI 2012/3024) not opened (INTM225100 from 2016 relied on); whether the CFC exempt period applies to a migrating company not checked (story avoids).
40. **s 371IE matched interest exemption** mechanics: read before applying to TCM.
41. Relief claim for a foreign TP adjustment relating to a UK PE (FA 2026): section not located.
42. MLI generalisation beyond UK–Ireland unverified; HMRC INTM153270 MAP text out of date where MLI arbitration applies.
43. Withholding rate for 2026/27 under s 874 (20%) is secondary; FA 2026's 22% from 2027/28 verified.
44. TIOPA ss 89–95 current status not checked; s 259B still lists DPT (loose end).
45. EU State aid dates and case numbers secondary (CJEU press release reproduction; KPMG).
46. UK-to-UK TP extension in 2004 (history) not verified from a primary source; the 30-day TP records production period not in SI 2023/818.
47. ICTS start date (APs from 1 January 2027) from the consultation; regulations not made.
48. OECD "side-by-side" Pillar Two package: not in FA 2026; in the draft Finance Bill 2026-27 (not law).
49. UTPP "effective tax mismatch outcome": how the corresponding amount is computed (chapter 30's 80% Vallaria point) to verify.

**Story-specific checks**
50. Calder FRS 102 → FRS 101 change of basis classification (+£0.4m day-one adjustment).
51. Helmside GY4: claimant-profit measure for consortium relief flowing from a member (ss 137–143).
52. TPLC's base cost of Helmside shares acquired for its own new shares (£16.0m assumed).
53. RH as a passive holding company after acquisition (s 18F) and RC's first-year QIP exemption.
54. Branch exemption opening negative amount for RC: Years 1–2 losses against Years 3–4 profits within the 6-year look-back (ss 18J–18N).
55. TPLC's recharge income characterisation (income not otherwise charged or trading) and its effect on s 105 gross profits.

### 5.3 Corrections to the TKS book found during LCG research

| TKS item | Correction | Source |
|---|---|---|
| TKS wording on CT late filing ("£1,000 each if late three times in a row") | Consistent in substance with the statute (£1,000 within 3 months, £2,000 in total otherwise; FA 1998 Sch 18 para 17 as amended by FA 2026 s 265). No TKS correction needed; this book uses the statutory form | LS1 §8, §11 |
| TKS bible §3.11/30: stamp duty and SDLT | No correction found | — |
| TKS chapter 26: s 18S | Now refers to the OECD Model approved 18 November 2025 (FA 2026 Sch 7 para 2); no change to TKS content needed | LS3 §2.2 |

---

## 6. Pronunciation

New names and terms a TTS voice may mangle (TKS list in `/home/claude/cta-tks/pronunciation-guide.md` still applies: Vallaria vuh-LAIR-ee-uh, Marrovia muh-ROH-vee-uh, Ridgeway RIJ-way, De Beers duh BEERZ, Loreburn LOR-burn, Calder KAWL-der).

| Written | Say it | Chapters |
|---|---|---|
| Tarnmoor | TARN-moor | all |
| Tarnwater | TARN-waw-ter | 19, 21 |
| Brackenwell | BRACK-un-well | 3, 10, 12, 14, 15, 17, 20 |
| Helmside | HELM-side | 14, 15, 18, 28 |
| Greyfell | GRAY-fell | 15, 18 |
| Northlight | NORTH-lite | 15 |
| Coldwater | KOHLD-waw-ter | 18 |
| Brennock | BREN-uck | 20 |
| Moorgate | MOOR-gate | 15 |
| Oldroyd | OLD-royd | 1, 20 |
| Nadia Kerr | NAH-dee-uh KER | 1, 4, 6 |
| Tom Hesketh | tom HESS-keth | 1–4, 12, 22, 26–29 |
| Graham Pike | GRAY-um pike | 3, 5, 10 |
| Asha Varma | AH-shuh VAR-muh | 10, 12, 14 |
| Ashlar | ASH-lar | 10, 11, 24, 27 |
| Undertow | UN-der-toh | 29 |
| BlackRock HoldCo | BLACK-rock HOLD-koh | P, 12, 27, 28 |
| Kwik-Fit | KWIK-fit | 12 |
| Syngenta | sin-JEN-tuh | 12 |
| Fidex | FY-dex | 12 |
| Delinian | deh-LIN-ee-un | 18 |
| Euromoney | YOO-roh-mun-ee | 18 |
| Centrica | SEN-trik-uh | 13 |
| Oxxio | OCK-see-oh | 13 |
| Glencore | GLEN-kor | 30 |
| Indofood | IN-doh-food | 24 |
| Bayfine | BAY-fine | 24 |
| Anson | AN-sun | 24 |
| Smallwood | SMAWL-wood | 22 |
| Cadbury Schweppes | KAD-bree SHWEPS | 26 |
| Vodafone | VOH-duh-fone | 26 |
| Nugee | NEW-jee | P |
| Falk | FAWK | P, 12 |
| Lewison | LOO-ih-sun | 12 |
| Redston | RED-stun | 12 |
| Medina | meh-DEE-nuh | 26 |
| Chadwick | CHAD-wick | 22 |
| Widgery | WIJ-er-ee | 9 |
| Kenmir | KEN-meer | 9 |
| Frizzell | frih-ZEL | 9 |
| Marren v Ingles | MARR-en versus ING-ulz | 18 |
| Ayerst | AIR-st | 14 |
| Peeters | PAY-terz | 14 |
| Dextra | DEX-truh | 7 |
| Camas | KAM-us | 13 |
| Eulalia | yoo-LAY-lee-uh | 22 |
| Mauritius | muh-RISH-us | 22 |
| Teesside | TEEZ-side | 1, 2 (if mentioned) |
| GloBE | GLOHB (the word "globe") | 30 |
| E B I T D A | ee bee eye tee dee ay | 28 |
| O E C D | oh ee see dee | 2, 22–30 |
| C F C | see eff see | 26 |
| S D R T | ess dee ar tee | 21 |
| sui generis (if used) | SOO-ee JEN-er-is | — |
| per cent | pur SENT | all |
| Multilateral Instrument | mul-tee-LAT-er-ul IN-struh-ment | 22, 24 |
| ultimate parent entity | UL-tih-mut PAIR-unt EN-tih-tee | 30 |
| Leeds | LEEDZ | 1 |
| Skipton | SKIP-tun | 31 |
| Dublin | DUB-lin | 31 |
