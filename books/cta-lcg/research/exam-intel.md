# Exam intelligence: CTA Advanced Technical, Taxation of Larger Companies and Groups (LCG)

Compiled 9 October 2026. Every fact below comes from a CIOT page or PDF opened on 9 October 2026, unless marked otherwise. "Verified" means read in the primary CIOT source. "Derived" means my own arithmetic or inference from verified facts. "Unverified" means not confirmed.

Short URLs used below:
- LCG page: https://www.tax.org.uk/taxation-of-larger-companies-groups
- Exams page: https://www.tax.org.uk/ctaexams
- Candidate Instructions (Oct 2026): https://assets-eu-01.kc-usercontent.com/220a4c02-94bf-019b-9bac-51cdc7bf0d99/eaca48ab-768c-4028-bc0f-23d4fabeab5d/Candidate%20Instructions%20-%20CTA%20October%202026.pdf
- Exam Regulations (Oct 2026): https://assets-eu-01.kc-usercontent.com/220a4c02-94bf-019b-9bac-51cdc7bf0d99/ae2dfc30-a39e-442e-95d9-396e13d9966a/CTA%20Exam%20Regulations%20October%202026.pdf
- FAQs: https://www.tax.org.uk/cta-faqs-testcentre
- Legislation page: https://www.tax.org.uk/taxlegislation
- Key dates: https://www.tax.org.uk/key-dates-and-deadlines
- Tax tables page: https://www.tax.org.uk/taxtables
- Prospectus 2026: https://assets-eu-01.kc-usercontent.com/220a4c02-94bf-019b-9bac-51cdc7bf0d99/6d2db44f-43c1-4bdd-8bbb-93046030b970/CIOT%20Prospectus%202026.pdf
- 2026 syllabus grid (same file as /root/lcg/syl2026.pdf, md5 identical): https://assets-eu-01.kc-usercontent.com/220a4c02-94bf-019b-9bac-51cdc7bf0d99/c125f83c-c67f-48de-b83f-625079efa748/2026%20Syllabus%20with%20cover.pdf
- Past papers index: https://www.tax.org.uk/pastpapers

---

## 0. Correction to the shared grid extract (important for all researchers)

`/home/claude/cta-lcg/research/lcg-grid-extract.txt` and `grid.tsv` are **missing four LCG rows** on page 7 of the 2026 grid PDF (printed "Page 6"), under the heading "Miscellaneous Matters and Anti-avoidance". The parser dropped the heading and the four rows after it. I checked the rendered page image and the column header on page 2. The marks are in the "Taxation of Larger Companies & Groups" Advanced Technical column:

| Row (2026 grid) | LCG AT | LCG APS | Status |
|---|---|---|---|
| Migration of company (post 1 January 2020 only) | 2 | 2 | verified (page image) |
| Controlled foreign companies | **1 (core)** | 1 | verified (page image) |
| Transfer pricing and advance pricing agreements (Awareness: basic principles only) | **1 (core)** | 1 | verified (page image) |
| Hybrid mismatch | **1 (core)** | 1 | verified (page image) |

So the 2026 grid **does list CFCs, transfer pricing and hybrids as core**. The extract made it look as if they were missing. The rows after these (Patent Box 3, CIR 1, Joint ventures 1, Deduction of income tax 1, International movements of capital 2, DPT 3, MTT 3, DTT 3, uncertain tax treatment 3) are in the extract correctly.

Other notes on the grid:
- Every page header of the "CTA Syllabus 2026" grid still reads "Syllabus Grids for 2025 sittings". The cover and the file name say 2026, and the PDF was created on 9 January 2026. This looks like a header left over from the previous year. Verified.
- Note 2 of the grid says that for all Advanced Technical papers, candidates are expected to have a good knowledge of the Law, Professional Responsibilities and Ethics, and Principles of Accounting manuals, and may be examined on related terms and concepts. Verified.

---

## 1. Exam format, software, permitted materials

| Item | Detail | Source | Status |
|---|---|---|---|
| Duration | 3 hours 30 minutes. Awareness is 3 h 15 m. No separate reading time is mentioned anywhere. | LCG page; Key dates page | verified |
| Structure | "Normally six" questions, each worth 10, 15 or 20 marks. Pass mark 50%. Every past paper from May 2023 to May 2026 had six questions worth 100 marks in total. | LCG page; past papers | verified |
| Mark mix seen | M23: 20/15/15/20/20/10. N23: 20/15/15/20/10/20. M24: 20/15/15/10/20/20. N24: 15/20/15/20/20/10. M25: 20/15/15/20/20/10. N25: 20/15/15/20/20/10. M26: 20/15/15/20/20/10. Usually three 20s, two 15s and one 10. | Question papers (links in section 3) | verified |
| Paper aim | "Scenarios will typically be based around multinational groups and larger companies that may be listed, with no individual controlling shareholders." Candidates "are not expected to have deep knowledge of all tax areas but should be able to identify what the potential tax issues are". | LCG page | verified |
| Syllabus elements | (1) Corporation tax, including CT on chargeable gains. (2) Capital allowances. (3) Stamp duty and SDLT at awareness level. At least 70% of the CT element comes from "core" material. | LCG page | verified |
| Test centres | Exams are sat in test centres on Windows devices with one 24-inch monitor. There are about 20 to 25 terminals per room. | Exams page; FAQs | verified |
| **Software: change from October 2026** | **RM Assessment Master** replaces Exam4. The regulations withdraw the Exam4 install, upload and recovery-code instructions for the October 2026 session. Every question paper from M23 to M26 says "type your answer … as indicated by the Exam4 guidance", so the RM change is new. | Exams page; Exam Regulations Oct 2026; Candidate Instructions | verified |
| Screen layout (RM) | The question scenario is on the left, with exhibits as thumbnails. The requirements appear at the bottom of the scenario and at the top right. The answer box sits under the requirements. **A spreadsheet (SpreadJS, Excel-like) sits below the answer box.** Workings must be copied into the answer box with Ctrl+C and Ctrl+V. **"Calculations left in the spreadsheet and not copied to the answer box will not be marked"**, and examiners cannot see cell formulae, so all workings must be shown in full. There is an on-screen calculator, a flag/bookmark function, and a timer that turns red and flashes 10 minutes before the end. That is the only time warning. | Candidate Instructions pp 2–3 | verified |
| Resources inside RM | The "open book" icon gives the Tax Tables (PDF), the **OECD Model Convention (PDF)**, and URL links to the Croner-i and Tolley student legislation. | Candidate Instructions p 2; FAQs | verified |
| OECD Model | Needed for Advanced Technical LCG, Human Capital and Individuals, and for APS LCG and Individuals. It is available **only as an on-screen PDF**, with no hard copy. The document published is the 2017 OECD MTC articles. | Tax tables page; FAQs | verified |
| Closed book | "The exams are closed book … Candidates cannot access anything other than Online Legislation and the Tax Tables." No hard-copy materials are allowed. The only exception is the TKS pre-prepared research, which does **not** apply to LCG. | Exams page; FAQs; Regs | verified |
| Legislation | Online only, from **Croner-i or Tolley's Digital Library**. These are student-only products bought in advance, and work subscriptions will not work. **You cannot make notes in either product.** Highlighting and other built-in features are allowed. Tags and folder headings may contain a section number and/or topic name, for example "Corporate rescue exception = CTA 2009 (s 361D)". They must **not** reproduce pro-formas or formulae, and invigilators may spot-check. | Legislation page; FAQs | verified |
| Login | Write your legislation username and password on the printed Candidate Information email. No other notes are allowed on it. | Candidate Instructions p 5–6 | verified |
| Tax tables | A **hard copy on the desk** plus a PDF inside RM. The 2026 tables cover FY2025 and FY2024 CT rates, the EU SME definition (including R&D and transfer pricing notes), RDEC 20%, ERIS 186%, the 14.5% credit, capital allowance rates (AIA £1m, 18% / 6% WDAs, SBA 3%, full expensing 100% and 50% FYA), HMRC interest rates (including CT instalment rates), the **lease percentage table**, **RPI** for indexation, and stamp duty/SDRT and SDLT/LBTT rates. | Tax Tables 2026 PDF: https://assets-eu-01.kc-usercontent.com/220a4c02-94bf-019b-9bac-51cdc7bf0d99/881517b6-bcff-446e-908e-fd8ceea51b1b/CTA%20Tax%20Tables%202026.pdf | verified |
| 2027 tax tables | The tax tables page only offers "Tax Tables 2026" at present. The 2027 tables, which would reflect FA 2026, are not yet published. | Tax tables page | verified (absence as at 9 Oct 2026) |
| Permitted items | Pens, pencils, erasers, your own **physical calculator** (basic or scientific, memory may be checked), ear plugs only, a printed candidate email, still water or non-fizzy drinks, and quiet snacks with no nuts. **No watches of any kind.** Two sheets of note paper are provided and more are available on request. Note paper is not marked and stays in the room. | Candidate Instructions pp 5–10 | verified |
| Timing rules | Arrive at least 30 minutes early (60 is recommended). You will not be admitted if more than 30 minutes late. You may not leave in the first 45 minutes or the last 10 minutes. | Candidate Instructions p 8; FAQs | verified |
| Question-paper rubric | "All workings should be shown and made to the nearest month and pound unless the question specifies otherwise." "You may assume that [prior year] legislation (including rates and allowances) continues to apply for [next year] and future years. Candidates answering by reference to more recently enacted legislation or tax cases will not be penalised." Scots law candidates may answer by reference to LBTT. | All papers M23–M26 | verified |
| Presentation marks | M23 to N25 papers say "Additional marks may be awarded for presentation." The **M26 paper omits this line.** | Question papers | verified |
| Errors in questions | Chief examiner's advice: re-read the question; if you still think there is an error, state it and your assumption, then answer on that basis. Results are moderated, and the pass mark may be adjusted for paper difficulty. | M25 and N25 examiners' reports | verified |
| Timing guidance | No official per-question timing has been published. At 210 minutes for 100 marks, budget about 2.1 minutes per mark: 20 marks ≈ 42 min, 15 ≈ 31–32 min, 10 ≈ 21 min. | Derived | derived |

### Sitting dates (LCG Advanced Technical)

| Session | Date and time | Results | Source |
|---|---|---|---|
| "November 2026" session | **27 October 2026, 2.30pm** (shares the slot with Cross Border and Environmental Taxes) | Pass lists 20 January 2027 | Key dates page, verified |
| May 2027 | **4 May 2027, 2.30pm** | July 2027 | Key dates page, verified |
| "November 2027" session | **26 October 2027, 2.30pm** | January 2028 | Key dates page, verified |

Exam entry for November 2026 closed on 31 August 2026, with late entry until 11 September 2026. Student registration deadlines are 31 December for May and 30 June for November. Verified.

---

## 2. Which Finance Act, which sitting; 2027 grid

| Item | Detail | Source | Status |
|---|---|---|---|
| 2026 sittings | "Both the May and November 2026 examinations will be based on **Finance Act 2025**." No questions require statutes with Royal Assent after **31 July 2025**, statutory instruments made after that date, or cases released after it. | Prospectus 2026, p 14 | verified |
| What papers say | The M26 rubric says to assume 2025/26 legislation continues for 2026/27. N25 and M25 say to assume 2024/25 continues. N24 and M24 say 2023/24. M23 and N23 say 2022/23. **So year N exams test the Finance Act of year N–1.** | Question papers | verified |
| 2027 sittings | No 2027 prospectus and no "CTA Syllabus 2027" grid has been published. The prospectus-and-syllabus page still lists only the 2026 Prospectus, the CTA brochure and the "2026 Syllabus with cover". **However, the CIOT's Tax Knowledge and Skills syllabus is headed "FA2026 for exams in 2027"**, and the TKS page says "updated for FA 2026 for 2027 sittings". By the same pattern, **LCG in May and October 2027 will almost certainly be examined on FA 2026** (Royal Assent 18 March 2026 per the brief), with the cut-off probably 31 July 2026. | https://www.tax.org.uk/prospectus-and-syllabus ; https://www.tax.org.uk/tax-knowledge-and-skills ; TKS syllabus PDF https://assets-eu-01.kc-usercontent.com/220a4c02-94bf-019b-9bac-51cdc7bf0d99/34f10ade-37da-4344-b0cc-bc6abeff8f6e/Tax%20Knowledge%20and%20Skills%20Syllabus%20ACA%20CTA%20FA%202026%20update.pdf | FA2026 for 2027 verified for TKS; for LCG, derived and highly likely but not yet published |
| The 27 October 2026 sitting | This is still a "2026" sitting, so it is examined on FA 2025. | Prospectus 2026 | verified |
| LCG grid: 2025 to 2026 changes | I could only find the **draft** 2025 grid (dated January 2024, linked from the Advanced Technical page: https://assets-eu-01.kc-usercontent.com/220a4c02-94bf-019b-9bac-51cdc7bf0d99/d5e9a147-4f20-44e5-9028-5159a26f7093/2025%20Syllabus%20Draft.pdf), not the final 2025 grid. I compared it with the 2026 grid row by row and then visually. LCG AT changes: **Intangible fixed assets and intellectual property moved from 2 to 1 (core)**. "SME Research & development relief" (LCG APS 3) was replaced by "**Research & development intensive companies**", now LCG AT 1. "Corporation tax relief for expenses relating to employment" moved from LCG AT blank in the draft to 1. **Diverted Profits Tax moved from 2 to 3.** **Multinational Top-up Tax and Domestic Top-up Tax were added at 3.** Corporate Criminal Offence appears as its own LCG row at 1. CFC 1, TP 1, hybrids 1, migration 2 and CIR 1 are unchanged. | Draft 2025 grid vs 2026 grid, page images | verified against the draft only; the final 2025 grid was not found |

---

## 3. Past papers and examiners' reports (LCG AT, May 2023 to May 2026)

Name history: up to November 2022 the paper was "**Taxation of Major Corporates**" (code TOMC). It was renamed "Taxation of Larger Companies & Groups" for 2023 (LCG page: "name change for 2023"). Answer-file codes still use TOLC/TOLCG/ADTOLC. Verified.

Each sitting has a question paper, suggested answers **with a full marking guide** (from at least M26 and N25), and the examiners' report. The **M24 to M26 sittings also publish example candidate scripts banded by mark** (40–50, 50–60, 60–70, 70+). These are useful models for the book's worked answers.

### Pass rates (LCG Advanced Technical)

| Sitting | Passed / sat | Pass rate | Distinctions | Source |
|---|---|---|---|---|
| May 2023 | 202 / 288 | 70% | 6 | M23 Prizes and Results PDF |
| Nov 2023 | 133 / 219 | 61% | 6 | N23 Prizes and Results PDF |
| May 2024 | 191 / 309 | 62% | 8 | M24 Prizes and Results PDF |
| Nov 2024 | 150 / 255 | 59% | 4 | N24 Prizes and Results PDF |
| May 2025 | 212 / 328 | 65% | 0 stated | M25 Prizes and Results PDF |
| Nov 2025 | 181 / 269 | 67% | 0 stated | N25 Prizes and Results PDF |
| May 2026 | 274 / 371 | **74%** | 2 | M26 Prizes and Results PDF https://assets-eu-01.kc-usercontent.com/220a4c02-94bf-019b-9bac-51cdc7bf0d99/d2b81e0e-573f-4da0-8b7e-e08b66c07a5c/M26%20CTA%20Prizes%20and%20Results%20Information%203.pdf |

LCG is consistently among the highest-passing Advanced Technical papers. In May 2026, for comparison, OMB was 48% and Individuals 55%. The M24 chief examiner said that **Joint Programme candidates have the highest pass rates**, followed by the Tax Pathway, and that guaranteed-pass tuition schemes add 20 to 40 points. All verified. Note: the M26 examiners' report PDF is headed "EXAMINERS' REPORTS NOVEMBER 2025" on page 1, but its content matches May 2026. This looks like a CIOT typo.

### Paper-by-paper (summarised, not reproduced)

Sources by sitting:
- Pages: https://www.tax.org.uk/may-2023-past-exam-papers , /november-2023-past-exam-papers , /may-2024-past-exam-papers-scripts-suggested-answers , /november-2024-past-exam-papers , /may-2025-past-exam-papers-scripts-suggested-answers , /november-2025-past-exam-papers-scripts-suggested-answers , /may-2026-past-exam-papers-scripts-suggested-answers
- The question paper, answers and examiners' report PDFs are linked from those pages, for example M26 QP https://assets-eu-01.kc-usercontent.com/220a4c02-94bf-019b-9bac-51cdc7bf0d99/2e96a540-ac4f-4384-9a68-dc7698713f90/M26%20ADTECH%20Taxation%20of%20Larger%20Companies%20and%20Groups.pdf ; M26 answers …/d90dcb95-a5da-4240-bb95-98da3ffc1699/M26%20AT%20LCG%20suggested%20answers.pdf ; M26 ER …/49ed2c27-69d5-4103-b132-fd6d9c29e45a/M26%20CTA%20Examiners_%20Report.pdf

#### May 2026 (pass rate 74%)
| Q | Marks | Topic summary | Examiners' comments |
|---|---|---|---|
| 1 | 20 (8/6/6) | A merger forms a new worldwide group under a new UK topco. **CIR**: administration (reporting company, interest restriction return), the **public infrastructure exemption** conditions, and a CIR calculation where **transfer pricing adjustments** feed into ANTIE and Tax-EBITDA and a qualifying infrastructure company is carved out. Fixed ratio only. | Admin and PIE were adequate but padded with irrelevant detail. The calculation was poor: very few adjusted ANTIE and Tax-EBITDA correctly. Some calculated the group ratio despite being told not to, and some wrongly adjusted Tax-EBITDA for the disallowed interest and the QIC. Marking guide: an interest TP adjustment reduces ANTIE but not Tax-EBITDA; a services TP adjustment increases Tax-EBITDA. |
| 2 | 15 | **Capital allowances and SBA**: a warehouse bought from a developer (SBA on the price paid, excluding land and integral features), new versus second-hand plant (full expensing not available on second-hand), installation alterations, an office built in 2010 (only the alterations qualify for SBA, not planning permission), **hire purchase vans** (the whole capital element enters the pool at once), and disposals as either pool deductions or balancing charges (FE assets). | Generally well answered. Errors: the HP capital element, and SBA on the pre-October 2018 office. |
| 3 | 15 | **Chargeable gains**: a freehold factory (enhancement on a demolished workshop not allowable because not reflected in the asset at disposal), a **lease (short-lease depreciation table)**, plant (chattels/wasting asset rules), and **rollover relief with partial reinvestment**. | The relief section was weak. Candidates wasted time on holdover and computed the chargeable amount from gains instead of **proceeds not reinvested**. Some explained capital allowances, which was not asked. |
| 4 | 20 | A two-company group: an **investment company (management expenses)** landlord and a loss-making trading subsidiary. **Grant of a long lease (part disposal, indexation cannot create a loss)**, fixtures disposal value, entertaining and gifts, AIA and instalment timing, **group relief** "to minimise long-term costs", **b/f losses and the £5m deductions allowance** (no restriction, but a nomination is still needed), and marginal relief. | Common errors: applying employee limits to staff entertaining for CT; adding rather than deducting accounting profit; wrong part disposal; thinking indexation can increase a loss or that a capital loss can be set against income. The best answers used group relief to keep profits in the 19% band. "Whilst the marginal rate … is 26.5%, this is not the rate that should be applied in full." Keep units consistent (£ versus £000). |
| 5 | 20 | A UK construction company takes on its first overseas contract, either directly or through a local subsidiary: **PE (construction site over 12 months)**, branch taxation and DTR, the **foreign branch exemption election**, the subsidiary versus CMC/residence, **CFC**, and dividend exemption. TP excluded. | Many wrongly discussed residence or migration of the UK company. The best answers covered PE thresholds, the branch exemption and its timing (losses), the impact of the overseas rate, and the subsidiary through CMC and CFC. Some did TP even though it was excluded. Also: "not mentioning obvious points (e.g. how CFC legislation works)". |
| 6 | 10 | **Deferred tax** for a new IFRS company: ACAs with full expensing, unpaid pension contributions, a tax loss, asset recognition criteria, and the 25% rate. | Mixed. Many treated the temporary difference as accounting loss minus tax loss, asked for b/f balances for a new company, and confused assets with liabilities. Liabilities are always provided; a loss asset can be recognised to offset the ACA liability. |

#### November 2025 (pass rate 67%)
| Q | Marks | Topic | Examiners' comments |
|---|---|---|---|
| 1 | 20 (17/3) | A full **CT computation** with overseas royalties under WHT (non-treaty, so unilateral relief), an LTIP bonus unpaid at 9 months, pension contributions, gifts and entertainment, a donation, penalties, **R&D (merged scheme)**, a long funding lease, special rate items, **quarterly instalments**, then **current and deferred tax charge**. | Errors: spreading pensions when not needed; treating a long funding lease as special rate; including repairs in R&D. "Nearly all candidates failed to realise that the royalties can be treated as one source and the foreign tax credits aggregated." Most skipped or botched the tax charge; deferred tax missed short-term timing differences. |
| 2 | 15 (6/9) | **PE analysis** of four contracts (independent agent, preparatory and auxiliary activity, **anti-fragmentation**, a construction contract under 12 months) and the UK consequences of a PE: credit relief, the **branch exemption election** (timing, irrevocable), incorporation of the branch with **s.140C/s.140 gain postponement** (unverified section numbers; the guide says "conditions for chargeable gain postponement") and IP. | Few cited anti-fragmentation. Few saw that the incorporation gain could be postponed. Some treated a PE as a separate legal entity. |
| 3 | 15 | **Company migration**: residence tests and **exit charges** (deemed disposal, trading stock, machinery, derivatives, land, intangibles), **land acquired after 5 April 2019 automatically postponed**, exit charge payment plans, and notification to HMRC (notice, statement, penalties). | Common errors: missing the automatic postponement on land, wrongly discussing the disregard regulations, and weak admin and payment-plan detail. |
| 4 | 20 (4/8/8) | A new subsidiary: **admin on incorporation** (notification, accounting periods; the filing date is based on the period of account), **CA, SBA and R&D allowances** with instalment timing, and options to relieve **trading losses and NTLR deficits**. | Too much irrelevant detail on payments when there were losses. Some cut SBA to 1/9th of 3% instead of 1/12th. Few mentioned R&D allowances. |
| 5 | 20 | **Group property**: sale of a short lease, grant of a 30-year lease out of a freehold (premium split between income and capital), a factory acquired by **intra-group no gain/no loss transfer** with refurbishment where integral features had attracted CAs, the **fixtures s.198 joint election**, **SDLT**, and **group rollover and holdover**. | Short-lease status depends on the unexpired term **at the date of the transaction**. Many used market value instead of NGNL cost. A minority dealt with CAs and the fixtures election. CA-claimed expenditure is adjusted only in a loss. Few considered SDLT, so marks were missed. |
| 6 | 10 | **Hybrids**: hybrid entities and instruments, deduction/non-inclusion and double deduction mismatches, primary and secondary responses, and admin (CT600 return adjustments). | Mixed. Some thought a low-tax jurisdiction alone made something a hybrid and wrote generic anti-avoidance answers. |

#### May 2025 (pass rate 65%)
| Q | Marks | Topic | Examiners' comments |
|---|---|---|---|
| 1 | 20 | **CFC** status of five companies (an IP-holding company with no substance, a finance company, a newly acquired company, a marketing company, a captive insurer) and **apportionment calculations** (25% threshold, creditable tax, adjusting for gains and UK dividends, income tax suffered). | Poor. Candidates knew the control test, exemptions and gateways but could not apply them. Errors: not applying the shareholding %, mishandling creditable tax, not adjusting for gains and dividends. Few calculated the **low profit margin** correctly. The exempt period was well understood. |
| 2 | 15 (10/5) | A standalone plc: **CT computation** (impairment of land, unpaid bonuses and pensions, **R&D under the merged scheme with overseas subcontracting and cloud/software costs**, HP plant, cars), **very large company instalments with changing forecasts**, and **deferred tax movement**. | R&D marked leniently because of the rule change. Instalments were done badly: forecast changes were not trued up, and some candidates did not know the very large company rules. Deferred tax sometimes wrongly included land and missed bonus and pension timing differences. |
| 3 | 15 | **Tax strategy publication** (Sch 19 FA 2016 thresholds where group companies have different year ends, publishing requirements, penalties). | Rules known, but candidates **apportioned subsidiary figures instead of using the accounts for the year ending in the parent's financial year**. |
| 4 | 20 | **CT computation with transfer pricing** (an interest-free loan to an overseas subsidiary and an undercharged management fee), **DTR on royalties at different WHT rates**, loan to buy shares, **SBA on second-hand buildings** including conversion costs. | Generally good. TP marks were mostly for spotting the issue and explaining it. SBA qualifying expenditure was weak. |
| 5 | 20 | **Share disposals by an investment company**: **SSE** (a 10% holding across group members and the 12-month look-back), share pools and matching rules, **share-for-share exchange base cost**, capital losses b/f. | Good. Weak areas: base cost after the exchange, and using indexation to enhance a loss. |
| 6 | 10 (5/5) | **Enquiry windows** for a company in a large group (not a small group), including a **15-month period of account** that shifts filing and enquiry dates, and **discovery** time limits (careless behaviour). | Poor. Candidates applied the small-group time limits and missed the effect of the long period. |

#### November 2024 (pass rate 59%)
| Q | Marks | Topic | Examiners' comments |
|---|---|---|---|
| 1 | 15 | **Group rollover and holdover** on property disposals by a property-holding parent (assets leased to a group company versus a 50% JV, depreciating assets, a previously held-over gain crystallising, lease assignments). | Wrongly deferred a gain on property leased outside the group against group reinvestment. Treated **assignments** of short leases as **grants**. Taxed the gain rather than the proceeds not reinvested. |
| 2 | 20 | **Group and consortium relief over two years**: joining (conditional contracts and arrangements), leaving, a **holding company in liquidation**, a **dual resident investing company**, preference-share (equity holder) tests, the **link company**, and consortium surrender limits. | Poor. Wrong joining and leaving dates; DRIC prohibition missed; impact of liquidation missed; consortium % applied to the member's loss instead of the consortium company's profit; trading requirement and link company missed. |
| 3 | 15 | Disposals of subsidiaries after pre-sale transactions: **depreciatory transactions** (s.176), **value shifting** (ss.30–31, including exempt distributions), **SSE**, and pre-sale dividends. | Confused the depreciatory transaction rule (no motive test, losses only) with value shifting (motive-based). Missed that value shifting does not apply to a reduction caused solely by an exempt distribution. |
| 4 | 20 (15/5) | A **CT computation** with directors' bonuses, whisky gifts, impairments (trade debt versus loan to a fellow subsidiary), interest on a loan to buy shares, alterations for machinery installation, integral features later removed, used vans, cars, then **next-year disposal treatment of full-expensed assets** (part pool deduction, part balancing charge). | Well done. Part 2 was harder: splitting proceeds between pool and balancing charge. |
| 5 | 20 | A US multinational buys a UK SME: **UK compliance obligations and extra charges**. The marking guide gives: filing, and **quarterly instalments now that the company is in a large group** (thresholds divided by the 51% group companies, payment dates), 4 marks; **CbC reporting** conditions, exceptions and applying for an exception, 3; **TP now applies because the group is not an SME**, with the required analysis and **master file and local file** contents, 6.5; **CIR** (probably no restriction, but file to protect the position; reporting company; abbreviated IRR), 3.5; **stamp duty on the UK share purchase** (0.5%, 30 days, non-residents must pay), 3. | Good. Most identified TP, but some covered it in depth and ignored easier points. Some brought in hybrids without any trigger. |
| 6 | 10 | A non-UK company setting up in the UK through a branch or a subsidiary: **PE, CMC, UK residence, and when a non-resident company is chargeable**. | Very well answered. Higher marks went to answers tied to the scenario. |

#### May 2024 (pass rate 62%)
| Q | Marks | Topic | Examiners' comments |
|---|---|---|---|
| 1 | 20 (5/11/4) | A UK parent of a multinational: deductibility of admin expenses (**investment business / management expenses**, capital costs of a share sale), a **CIR calculation** (ANTIE, ANGIE, an interest-free loan and TP, b/f disallowance reactivation), and **CIR admin**. | Most did not identify that the company had an investment business. A minority misapplied ANTIE and ANGIE. Admin was good. |
| 2 | 15 (11/4) | **Capital allowances** for a hotel (kitchen equipment and installation, floor strengthening, restoration as repair, TVs, thermal insulation, paintings, cars under HP over 50 g/km) and **deferred tax on vehicles**. | Good. Some did not use a conventional CA layout. Deferred tax was computed for all assets instead of just vehicles. |
| 3 | 15 (7/5/3) | **Sale of a subsidiary**: an intra-group transfer at undervalue, the **degrouping charge** added to proceeds and SSE, preference shares, then **losses after change of ownership** (major change in the nature or conduct of trade), and **HMRC enquiry/discovery** on the loss return. | Well answered. Degrouping and SSE were identified, and the MCINOCOT rules discussed. Some answered pre-sale loss relief, which was not required. |
| 4 | 10 | **R&D**: a parent and an R&D subsidiary are **linked enterprises**, so the SME/large tests apply to both. **RDEC steps** (set-off order, net-value restriction / PAYE cap). | Poor. Missed that the companies were linked. Confused step 1 (CT set-off) with step 2 (net value restriction). |
| 5 | 20 | **CFC rules** across five overseas companies (the 25% interest threshold, exemptions, tax exemption rate comparisons, a tax-holiday company, **gateways** for the one with no exemption). | Good on the whole. Gateways weaker than exemptions. Confused the 25% apportionment threshold with the control tests. Kept discussing other exemptions after finding one that applied. |
| 6 | 20 | A **two-company CT computation**: rental income, a reversed intra-group debt write-off (**connected-party loan relationships**), **pension spreading** of an earlier excess, **full expensing and instalment timing** of plant built in stages, integral features, CIR allowance b/f, b/f losses, NTLR deficit group relief, the straddling FY and marginal relief. | Good on CAs and losses. Weaker on the connected-party write-off reversal and pension spreading. Many missed marginal relief. |

#### November 2023 (pass rate 61%)
| Q | Marks | Topic | Examiners' comments |
|---|---|---|---|
| 1 | 20 (9/3/8) | **Residence** of an Anglo-Belgian parent before and after board changes (incorporation, CMC, the **treaty tie-breaker extract supplied**: POEM), CT admin, and a **CFC finance company** (non-trading finance profits gateway, the 1% tax rate, the dividend paid). | Good. Some ignored the **supplied treaty article** and used the OECD Model text instead. Some strayed into DPT and CIR. |
| 2 | 15 (12/3) | Share disposals: a 50% JV sold with an **earn-out** (Marren v Ingles: the right to deferred consideration valued at the outset and later disposed of), **SSE**, a **share-for-share exchange (s.135)** with cash, a sale of listed shares, then **stamp duty** for the buyer. | Many wrongly reopened the original computation when the earn-out was paid. Few explained s.135 conditions. Some confused stamp duty with SDLT. |
| 3 | 15 (7/8) | **Derivatives**: a fuel futures contract not hedge-accounted (fair value through P&L, Disregard Regulations), then **CAs/SBA** for a training facility (land, levelling, buildings, simulator, second-hand plant). | Derivatives answers incomplete; a minority mentioned the Disregard Regulations. CAs good. |
| 4 | 20 | A loss-making retailer: **CT computation** (NMW fine, deferred bonuses, short leases, **IFAs: goodwill and registered designs acquired 2019**, gain on freehold, **SSE on Irish shares** (a loss is ignored), capitalised revenue expenditure, CAs and SLAs) and **loss relief** (12-month carry-back only). | Very good overall. Many computed the SSE loss unnecessarily. Capitalised revenue expenditure handled badly. Many still thought the temporary three-year carry-back applied. |
| 5 | 10 | **SAO**: which companies count towards the thresholds (a 50% UK sub excluded; a Greek-incorporated but UK-resident company), the main duty, certificate, notification and penalties. | Thresholds known but misapplied. Show workings, because marks can be earned even when the conclusion is wrong. |
| 6 | 20 | **Transfer pricing methods** for a manufacturer, a distributor and an R&D centre (CUP, resale price, cost plus; no profit methods), **OECD low-value services**, and **stewardship costs not recharged**. The examiners noted the "style … was different to that of previous sittings". | Theory good, application weak: functions and risks were not analysed. Most did not know the low-value services approach or the stewardship point. |

#### May 2023 (pass rate 70%)
| Q | Marks | Topic | Examiners' comments |
|---|---|---|---|
| 1 | 20 | A **CT computation**: pension spreading of a one-off contribution, a **general bad debt provision** (a credit, not a debit), legal costs, **SBA** on a new factory, CAs with instalment payments, and a balancing charge on FE plant. | Well answered. The common mistake was the bad debt credit direction. Disposal of FE plant gives a **balancing charge**. |
| 2 | 15 | Overseas PEs: stay non-exempt, make the **branch exemption election** (transitional loss rules), or **incorporate the PE** (exit charges, deferral). **Recommend.** | Good. The best answers covered the transitional rules and deferral of the incorporation gain. **Some failed to give the recommendation and lost marks.** |
| 3 | 15 | A loan from a US company that may take 60% control: **transfer pricing** (participation condition, thin capitalisation), **CIR**, WHT on interest to Bermuda, and related points. Candidates had to find the issues themselves. | The main issues were TP and CIR. **Time was wasted on DPT, which does not apply to loan relationships.** Hardest question on the paper. |
| 4 | 20 (18/2) | Property: grant of a 40-year lease, a building transferred from a **development company (appropriation from stock to fixed assets at market value)**, a factory hived down with the trade, the **fixtures s.198 elections**, and **rollover relief at group level**, plus CAs. | Confusion on lease premiums and part disposal. Missed the market value appropriation. Deducted fixtures amounts from gains computations. Rarely considered group capital losses. |
| 5 | 20 | **JV structures (75% versus 65%)**: a gains group versus a **consortium**, a property transfer (a rolled-over gain reduces base cost; a prior NGNL transfer), and trading loss utilisation. | Confusion over the second structure, and some missed the consortium. Few saw that a no-gain transfer means a lower base cost later. |
| 6 | 10 | **Acquisition costs**: due diligence (capital or revenue for an investment company), legal fees, a **loan arrangement fee under loan relationships**, compensation for loss of office, retention bonuses. | Generally good. Some missed the loan relationship treatment of the arrangement fee. |

#### Older context: November 2022 "Taxation of Major Corporates" (brief scan)
I scanned only the requirements: non-resident companies' UK tax and WHT on a proposed loan (15), a CT computation for a company with an overseas branch plus admin and payment (20), maximising capital allowances and loss relief (15), group losses (20), chargeable gains on share transactions (20), and a three-year forecast group CT liability (10). Source: https://assets-eu-01.kc-usercontent.com/220a4c02-94bf-019b-9bac-51cdc7bf0d99/a372db17-6700-4e6b-93df-9ae8a3c4ba4d/November%202022%20ADTECH%20Taxation%20of%20Major%20Corporates.pdf. Status: verified at requirement level only.

### Synthesis: what the paper looks like

**Topic frequency across the seven LCG papers (M23 to M26, 42 questions).** Derived from the tables above.

| Topic | Questions where it was the main focus or a major part | Comment |
|---|---|---|
| Full CT computation (single company or two-company group) | M23 Q1, N23 Q4, M24 Q6, N24 Q4, M25 Q2, M25 Q4, N25 Q1, M26 Q4 | **Every sitting has at least one 15–20 mark computation.** It usually includes CAs, timing of remuneration and pensions, entertaining and gifts, and losses. It increasingly ends with a tax-accounting tail (current and deferred tax, instalments). |
| Capital allowances and SBA | standalone: M24 Q2, M26 Q2, N23 Q3(b); embedded in nearly every computation and in N25 Q4, N25 Q5, M23 Q4 | Full expensing and 50% FYA, HP, second-hand assets, integral features, SBA on bought buildings and alterations, s.198 fixtures elections, balancing charges on FE assets. |
| Chargeable gains: property, leases, group rollover/holdover | M23 Q4, N24 Q1, N25 Q5, M26 Q3, M26 Q4 | Leases (grant versus assignment, short versus long, lease table, premium income element), NGNL intra-group transfers, appropriations, **rollover on proceeds not reinvested**. |
| Shares: SSE, pooling, reorganisations, earn-outs | N23 Q2, M25 Q5, M24 Q3, N24 Q3, N23 Q4 | SSE nearly every year, s.135/s.127 reconstructions, Marren v Ingles. |
| Groups: group relief, consortium relief, degrouping, depreciatory transactions, value shifting | N24 Q2, N24 Q3, M23 Q5, M24 Q3, M26 Q4, M24 Q6 | Joining and leaving dates, arrangements, consortium arithmetic, degrouping charge through SSE. |
| International: residence, PE, branch exemption, migration | M23 Q2, N23 Q1, N24 Q6, N25 Q2, N25 Q3, M26 Q5 | Examined at **every sitting since N24**. |
| CFC | N23 Q1(c), M24 Q5, M25 Q1, M26 Q5 (part) | Two full 20-mark CFC questions in three sittings. |
| Transfer pricing | M23 Q3, N23 Q6, M25 Q4 (part), N24 Q5, M26 Q1 (interaction) | Both methods/OECD theory and computational adjustments. |
| CIR | M23 Q3, M24 Q1, M26 Q1, M24 Q6 (b/f allowance) | Calculation and administration (reporting company, IRR). |
| Compliance and governance (SAO, tax strategy, enquiry/discovery, instalments, notification) | N23 Q5, M25 Q3, M25 Q6, M24 Q3(c), N24 Q5, N25 Q4(a), M26 Q1(a), N23 Q1(b) | **A 10–15 mark "admin" question is very common.** |
| R&D | M24 Q4, M25 Q2, N25 Q1 | Merged scheme and RDEC steps, linked enterprises. |
| Tax accounting (deferred tax, tax charge) | M24 Q2(b), M25 Q2(b), N25 Q1(b), M26 Q6 | Growing. A full 10-mark deferred tax question appeared in M26. |
| Loan relationships and derivatives | M23 Q6, M24 Q6, N23 Q3, N25 Q4 | Connected-party write-offs, arrangement fees, NTLR deficits, the Disregard Regulations. |
| Hybrids | N25 Q6 | 10-mark discursive. |
| Losses after change of ownership | M24 Q3(b) | |
| Stamp duty and SDLT | N23 Q2(b), N25 Q5 (marks for SDLT) | Small add-on marks, often missed. |
| Investment companies (management expenses) | M23 Q6, M24 Q1, M25 Q5, M26 Q4 | Easily overlooked, as M24 examiners noted. |
| Not seen M23–M26 | Patent Box, DPT, Pillar Two (all awareness or non-core), demergers, transactions in securities, liquidations, Corporate Criminal Offence, DOTAS/GAAR, IFAs as a standalone question | These are core or non-core but have not been tested recently. DPT is a known **trap**: candidates are penalised for raising it where it does not apply. |

**Favourite combinations.** CT computation with CAs and losses with instalments and deferred tax. TP with CIR (M23 Q3, M26 Q1, N24 Q5). PE with branch exemption with incorporation of the branch with CFC (M23 Q2, N25 Q2, M26 Q5). Residence with CFC (N23 Q1). Property gains with rollover with fixtures election with CAs with SDLT (M23 Q4, N25 Q5). Sale of a subsidiary with degrouping with SSE with loss restrictions on change of ownership with enquiries (M24 Q3). Investment company with group relief with lease premiums (M26 Q4).

**Typical scenarios.** A UK plc heading a multinational group. A US or EU parent acquiring a UK company. A new UK subsidiary or project company. JV and consortium structures. Overseas expansion by branch or subsidiary. Group property reorganisations (a central property company letting to trading subsidiaries). Disposals of subsidiaries after pre-sale planning. A company migrating abroad.

**Style.**
- Requirements use "Calculate, with explanations", "Explain", "Discuss", and occasionally "recommend". **No LCG AT question in 2023–2026 asked for a letter, report or email format.** The AT paper is technical prose and computations. The client-facing report format belongs to the APS paper.
- Roughly half the marks are computational, but explanation marks dominate. Marking guides give 0.5–1 mark per point, for example "Election only revocable after five years 0.5" or "Conditions for rollover relief 1.5".
- Discursive questions (TP methods, hybrids, PE, migration, CFC) carry 10–20 marks on their own.
- Tax-accounting tails are increasingly frequent.

**Recurring examiner messages** (M23 to M26 general comments and chief examiner's comments):
1. Answer the requirement asked. Time spent on excluded or unrelated topics earns nothing. Examples: TP when excluded (M26 Q5), DPT for loans (M23 Q3), hybrids with no loans (N24 Q5), residence when the question is about PEs (M26 Q5, N25 Q2), holdover when rollover was asked (M26 Q3), pre-sale loss relief (M24 Q3).
2. Do not restate the question. Do not pad with general detail (CIR admin, PIE).
3. Bank the easy marks on each question. Over-running for the last marks rarely pays.
4. Show workings. Marks are available even if the final figure is wrong (N23 Q5, M25 Q4).
5. Use a conventional CA computation layout (M24 Q2, N23 Q3).
6. Give a recommendation when asked (M23 Q2).
7. Use the **supplied treaty extract**, not the OECD Model, where one is given (N23 Q1).
8. Where the question says "tax consequences", consider all taxes in the syllabus. Where it names a tax, nothing else scores (N25 and M26 chief examiner).
9. Keep £ and £000 consistent (M26 Q4).

---

## 4. Joint Programme context

| Item | Detail | Source | Status |
|---|---|---|---|
| Revised ACA CTA JP (for ACA registrations from 1 July 2025) | CTA elements: **PR&E CBE**, then **Tax Knowledge & Skills (Direct or Indirect)**, then **one specialist paper**, either Advanced Technical or APS. For the Direct route the choices are OMB, **Larger Companies & Groups** or Individuals. Awareness, Law and Principles of Accounting are not required. 16 assessments in total. | JP FAQ https://www.tax.org.uk/aca-cta-joint-progamme-faq-1-july-2025-onwards | verified |
| First TKS sitting | November 2026 (sat 29 October 2026, 2.30pm). | JP FAQ; Key dates | verified |
| Order rules | **PR&E must be passed before sitting the AT or APS paper.** TKS must be sat before, or at the same sitting as, the specialist paper. The CIOT strongly recommends sitting TKS first, then the specialist paper at a later sitting. It also recommends the specialist paper before the ACA Advanced Level. | JP FAQ | verified |
| Failing the specialist paper | You may switch to a different specialist paper within the same Direct or Indirect route instead of resitting, subject to your employer. | JP FAQ | verified |
| Pass validity | TKS: 7 sessions. AT/APS: 7 sessions. PR&E: 9 sessions. JP registration lasts 4 years. | JP FAQ | verified |
| APS versus AT | APS fees are about 20% higher than AT. | JP FAQ | verified |
| Transitional rules (JP) | Students who began the old JP on the old ACA syllabus with only Principles of Taxation done must now do TKS plus one specialist AT or APS paper plus PR&E (the stamp taxes and IHT gap is bridged). Staying on the old JP was only available before TKS was introduced for the November 2026 sitting. | JP transitional rules (13 July 2026) https://assets-eu-01.kc-usercontent.com/220a4c02-94bf-019b-9bac-51cdc7bf0d99/a995f80f-09cb-49b4-a7f7-6ab48001afd8/ACA%20CTA%20JP%20transitional%20rules%20_website%20version_%2013%20July%202026.pdf | verified |
| Kian's realistic timetable | If TKS is sat on 29 October 2026 (results 20 January 2027), the earliest sensible LCG sitting is **4 May 2027 on FA 2026**, with 26 October 2027 also on FA 2026 as the fallback. Both are pre-2028, under the current structure and the current (2026-style) grid. The CIOT advises against sitting TKS and LCG together. | Derived from Key dates and JP FAQ | derived |

### The 2028 CTA structure (CTA review page and Handbook 2028)

| Item | Detail | Source | Status |
|---|---|---|---|
| Timing | The new structure applies to new candidates enrolling in autumn 2027. **First sittings are May 2028.** "Transitional rules will be published later in 2026" for those already studying. As at 9 October 2026 the CTA review page still says this, and **no transitional rules for the 2028 change are published.** | https://www.tax.org.uk/ctareview | verified (absence as at today) |
| Does LCG AT continue? | **Yes.** The Advisory stage (Level 7) has five specialisms: Individuals; IHT, Trusts & Estates; OMB; **Taxation of Larger Companies and Groups**; Indirect Taxation. Each has an Advanced Technical module and an APS module. Full CTA candidates will sit one AT and one APS paper, down from two AT papers. | CTA Handbook 2028 (Final) https://assets-eu-01.kc-usercontent.com/220a4c02-94bf-019b-9bac-51cdc7bf0d99/cb0b7ab2-e76f-4a6f-a56a-5a223a3d8b2e/CTA%20Handbook%202028_Final.pdf, pp 4–5, 59, 86–92 | verified |
| 2028 LCG AT format | 3.5 hours, **four to six questions** of 10, 15 or 20 marks, 100 marks in total, pass mark 50%. Assumed knowledge: the Knowledge-level modules "Corporate taxes" and "Chargeable Gains and Stamp Taxes". New learning outcome: "**Critically evaluate and communicate the output of information generated by other parties or by Artificial Intelligence**". | Handbook pp 86–87 | verified |
| 2028 LCG key principles | Residence; TTP including gains; overseas income and international transactions: "company migration, **controlled foreign companies, diverted profits tax**, double tax treaties and the OECD Model …, international movement of capital, multi-national and domestic top up tax (basic rules only), permanent establishments, and **transfer pricing**"; losses including consortia and worldwide groups; investment companies; intangibles, R&D and share schemes; anti-avoidance (change in ownership, CIR, depreciatory transactions, value shifting). Interaction of taxes: financing, reorganisations and reconstructions (successions, demergers, takeovers), share versus asset sale, liquidation and administration. | Handbook p 87 | verified |
| 2028 exclusions | **Not examined from 2028:** gains on sales and grants of **leases**; derivative contracts beyond knowing they are treated as loan relationships; EOTs and EBTs; **R&D intensive SMEs**. | Handbook p 87 | verified |
| 2028 grid changes vs 2026 (LCG AT) | **CIR 1 → 2**, **hybrid mismatch 1 → 2**, **IFAs 1 → 2** and IP Part 9 at 2, derivatives 2 → 3, **close companies added at 2**, a deductions allowance row added at 1, badges of trade 1, company purchase of own shares 3, R&D (CTA 2009 Part 13 Chapters 1, 1A, 8, 9) 1. CFC stays 1, TP and APAs 1, migration 2, DPT 3, MTT and DTT 3. Stamp duty is spelled out at 3 (including group, takeover and reconstruction reliefs). | Handbook grid pp 88–92; CTA syllabus grids 2028 https://assets-eu-01.kc-usercontent.com/220a4c02-94bf-019b-9bac-51cdc7bf0d99/bec9b3eb-e541-4e28-b54f-6c0a3b88034c/CTA%20syllabus%20grids%202028_FINAL.pdf | verified |
| JP under 2028 | The Handbook does not mention the Joint Programme. The JP FAQ says the 2025 JP redesign was made "to align the programme to the new CTA structure from 2028 … we should be able to avoid further substantive changes". It also says that from May 2028 the indirect papers will merge into one "Indirect Taxes" option at AT and APS level. **There is no explicit statement on what form the LCG specialist paper takes for JP students from May 2028.** By inference it would be the 2028 LCG AT module. | JP FAQ; Handbook | the JP-specific 2028 position is **unverified / not published** |
| Consultation | The response document confirms the 2028 timetable ("Transitional arrangements for existing CTA students" in 2028) and that JP questions will be answered "during the course of 2026". | https://assets-eu-01.kc-usercontent.com/220a4c02-94bf-019b-9bac-51cdc7bf0d99/16cefbda-78ff-49b5-9c72-3f1749394f46/CTA%20qualification%20consultation%20response%20document_FINAL.pdf | verified |

---

## 5. Syllabus narrative beyond the grid (current LCG page)

The LCG page's "Learning outcomes" section is the CIOT's narrative "detailed syllabus". All points below are verified on https://www.tax.org.uk/taxation-of-larger-companies-groups. Key points for the book's scope:

- **Technical skills listed explicitly:** "a sound knowledge of adjustments that will feature in the UK corporation tax computations of multinational companies and groups". Candidates should know specialist areas well enough to "coordinate the work of the firm's specialists". The list also covers accounting standards relevant to tax and "the tax consequences of adopting alternative accounting treatments"; **loan relationships and derivative contracts** plus "common financing transactions"; the corporate tax side of employee remuneration (shares, share option deductions, pensions); and **the taxation of intellectual property**.
- **Regulatory:** CTSA, the **Senior Accounting Officer**, dispute resolution and time limits, and DOTAS and other anti-avoidance rules.
- **Groups:** group loss relief, **consortium relief**, **transfers of trade within a group**, and the definition of a group. **Gains on share disposals inside and outside the gains group, de-grouping charges, and transfers of assets to an overseas group company.**
- **Structures:** branch versus subsidiary, **joint ventures, partnerships, company reconstructions**. "Candidates will not be examined on the overseas tax aspects of cross-border mergers."
- **"Explain and apply UK reporting and other UK company compliance concerning transfer pricing."** This is explicit evidence that TP is examinable in the current paper.
- **Overseas:** double tax relief, the **dividend exemption**, the **branch exemption**, **"controlled foreign companies legislation"**, **exchange gains and losses**, **profits accounted for in a foreign currency and the functional currency election**, and "**thin capitalisation and corporate interest restriction**". This is explicit evidence that **CFCs are examinable**.
- "Explain and apply significant cases and developments as they affect UK corporate tax."
- **Awareness:** broader issues where the main requirement is to spot the problem for a specialist; law relevant to a tax adviser (business disposals, IP, land law); **Stamp Taxes in a group context**.
- **Planning:** alternative treatments to defer or minimise tax, interaction of taxes, evasion versus avoidance, and strategies for **"corporate transformations"**.
- **Communication:** prepare advice with supporting calculations, recommend planning, **identify further information required** (tested directly in M26 Q6), and meet the CIOT's ethical guidance (ethics is "not specifically examined" in this paper).
- Prospectus 2026, p 14: "an understanding of current accounting issues relevant to tax such as **deferred tax, profit recognition and share schemes** is expected" specifically for LCG. Verified.

**Conclusion on TP and CFCs:** both are **definitely examinable and core**. The evidence is (a) the 2026 grid rows "Controlled foreign companies 1" and "Transfer pricing and advance pricing agreements 1", which the shared extract dropped (see section 0); (b) the LCG page narrative; (c) past papers: CFC in N23 Q1, M24 Q5 (20 marks), M25 Q1 (20 marks) and M26 Q5, and TP in M23 Q3, N23 Q6 (20 marks), M25 Q4, N24 Q5 and M26 Q1; (d) the 2028 grid keeps both at 1. Hybrids are core in 2026 (tested N25 Q6) and fall to 2 in 2028.

---

## Teaching notes (story material and why the exam looks like this)

- **Why LCG exists and who it is for.** The CIOT says the paper is aimed at corporate tax people in larger firms and big businesses. The scenarios are listed groups with no controlling individual, so owner-manager extraction points are irrelevant. The CIOT accepts that "many complex issues will be dealt with by specialists". The skill being examined is **spotting the issue and coordinating specialists**. That is a strong narrative frame for a Big Four trainee such as Kian. Source: LCG page.
- **The 2023 rename** from "Taxation of Major Corporates" to "Larger Companies & Groups" signals the shift towards group-level issues: groups, consortia, CIR and international matters.
- **Exam evolution as story material.** Moving from Exam4 to RM in October 2026 brings an in-exam spreadsheet. Examiners cannot see formulae, so any working not pasted into the answer box is lost. This is a concrete "craft" lesson for the book's exam-technique chapter.
- **The 2028 direction of travel.** The new learning outcome about "critically evaluat[ing] … output … generated by … Artificial Intelligence" is a quotable signal of where the profession is heading. CIR, hybrids and IFAs drop to non-core in 2028. Leases and R&D-intensive SMEs leave altogether. That tells the book what the CIOT sees as specialist rather than generalist knowledge. **Kian's 2027 sitting is still under the 2026-style grid, so the book must teach CIR, hybrids, IFAs and leases at full core depth.**
- **Examiner voice.** The reports make good chapter epigraphs, for example: "whilst the marginal rate of tax between the thresholds is 26.5%, this is not the rate that should be applied in full" (M26), or that candidates confused depreciatory transactions, which "do not consider motive and only apply to losses", with value shifting, which is "motive based" (N24).
- **Pass rates** (59–74%, rising to 74% in M26) and the M24 chief examiner's remark that JP candidates pass most often are reassuring context for Kian. They should not breed complacency: individual questions such as CFC apportionment in M25 Q1 and group relief over two years in N24 Q2 have been answered poorly.

## Traps and examiner favourites (evidence-based)

Each trap is followed by the sitting where the evidence comes from.
1. **Rollover relief** is chargeable on the *proceeds* not reinvested, not on the gain. (N24 Q1, M26 Q3)
2. **Short lease** status is judged on the unexpired term at the transaction date. An *assignment* is not a *grant*, so there is no income element on an assignment. Use the **lease percentage table**. (N24 Q1, N25 Q5, M26 Q3)
3. **Indexation cannot create or increase a loss**, and a capital loss cannot be set against income. (M25 Q5, N25 Q5, M26 Q4)
4. A **NGNL intra-group transfer** gives the transferee the transferor's cost, not market value. But an appropriation from trading stock before the transfer happens at market value. (M23 Q4, N25 Q5)
5. **Fixtures s.198 joint election** values go into the CA pool. They adjust the gains computation only where there is a loss. (M23 Q4, N25 Q5)
6. **Full-expensed asset disposals** give a balancing charge, or are split between pool deduction and charge in some cases. They are not simply a pool deduction. (M23 Q1, N24 Q4, M26 Q2)
7. **HP**: the whole capital element enters the pool when the asset is brought into use. (M26 Q2)
8. **SBA**: qualifying expenditure is the price paid to the developer, excluding land and integral features. Only alterations count on a pre-29 October 2018 building. Time-apportion correctly. (M25 Q4, N25 Q4, M26 Q2)
9. **CFC**: the 25% apportionment threshold is not the same as the control test. Stop once one exemption applies. Learn the **low profit margin** arithmetic and apportionment with creditable tax. (M24 Q5, M25 Q1)
10. **Consortium relief** is limited by the member's share of the *consortium company's* profit. Watch the link company, DRIC, liquidation and the joining and leaving date rules. (N24 Q2)
11. **Depreciatory transactions** have no motive test and apply to losses only. **Value shifting** is motive-based and excludes exempt distributions. (N24 Q3)
12. **Linked enterprises** in R&D size tests. Follow the RDEC set-off steps in order. (M24 Q4)
13. **Very large company instalments**, and truing up instalments when forecasts change. (M25 Q2)
14. **Enquiry windows** differ for companies that are members of a large group. A long period of account shifts the filing date. (M25 Q6) The filing date follows the period of account. (N25 Q4)
15. **Tax strategy and SAO thresholds**: use the right accounts, exclude non-qualifying companies, and include UK-resident companies incorporated abroad. (N23 Q5, M25 Q3)
16. **CIR**: TP adjustments on interest reduce ANTIE but not Tax-EBITDA. Adjust both for a QIC under the PIE. Do not attempt the group ratio when told it is not beneficial. (M26 Q1)
17. **DTR**: overseas royalties from different payers can be treated as one source, with credits aggregated. (N25 Q1)
18. **Exit charges on migration**: the gain on land acquired after 5 April 2019 is automatically postponed. Know the payment plans. (N25 Q3)
19. **Branch incorporation gains** can be postponed. The **branch exemption election** is irrevocable, covers all PEs, and its timing matters for losses. Apply anti-fragmentation in PE analysis. (M23 Q2, N25 Q2, M26 Q5)
20. **DPT**: do not raise it for loan relationships or where there are "no hallmarks". It is now awareness (3). (M23 Q3, N23 Q1, N24 Q5)
21. **Deferred tax**: liabilities are always provided. Recognise a loss asset to offset a liability. A new company has no brought-forward balances. Include short-term timing differences such as bonuses and pensions. Land usually has no CA-related difference. (M24 Q2, M25 Q2, N25 Q1, M26 Q6)
22. **Staff entertaining**: employee benefit limits are irrelevant to the CT deduction. (M26 Q4) Branded food and drink gifts are disallowed, while branded pens are allowed. (M26 Q4, N24 Q4, N25 Q1)
23. **Pension spreading** applies only where the rules are triggered. Do not spread automatically. (N25 Q1 versus M23 Q1 and M24 Q6)
24. **Marginal relief and straddling financial years** must be dealt with. (M24 Q6, M26 Q4)
25. **SDLT and stamp duty add-on marks** are routinely missed. (N25 Q5, N23 Q2)

## Gaps and things I could not verify
- The final (non-draft) 2025 grid. The 2025 to 2026 comparison is against the January 2024 draft.
- Any 2027 LCG grid or prospectus. Neither is published yet. The FA2026 basis for 2027 is inferred from the TKS syllabus and the past pattern.
- Transitional rules for the 2028 CTA change, and the JP-specific form of the LCG paper from May 2028. Neither is published as at 9 October 2026.
- Section numbers mentioned in passing (s.135, s.140, s.176, ss.30–31, s.198) come from the question and answer context, not from legislation.gov.uk. The technical researchers should verify them.
