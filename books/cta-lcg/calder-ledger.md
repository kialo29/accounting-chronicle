# Calder ledger: canonical running-case facts for *The Living Law: Groups and Borders* (all invented)

*Canonical as of 9 October 2026 (planning stage); **amended 9 October 2026 after batch 1 by `continuity-rulings.md` R1–R17** (amended entries are marked "(amended by Rn)"; the rulings file overrides this ledger where they differ). Every chapter writer must use these facts. If a lesson needs a different number, say so in the script ("for this example, suppose...") and keep it out of the story. New story facts a chapter fixes go into its notes' bible update and, at the next consolidation, into the section "Facts fixed by chapters" at the end of this file. Continuity rulings (to be created as `continuity-rulings.md` after the first batch) override this ledger where they conflict. All numbers below were re-computed in Python (script `ledger-check.py` in this folder; 132 checks after the batch 1 extension, 0 failures).*

**Everything here is invented except:** Ireland, its 12.5% trading rate and the UK–Ireland treaty as modified by the MLI (real, as in TKS); the Hartleys' TKS history (invented, carried over from `/home/claude/cta-tks/hartley-ledger.md` and the TKS bible §1B).

**Law:** every computation applies FY2026 law (1 April 2026 to 31 March 2027) and 2026/27 for income tax points, whatever Group Year the story has reached. Story periods are treated as falling wholly under the FA 2026 rules (PE, attribution, TP, UK-to-UK exemption, UTPP, 14% WDA, 40% FYA, CIR reporting companies). Real commencement dates are taught with labelled real-calendar examples only.

**Story time:** Group Years **GY1, GY2, ...** = Tarnmoor plc's accounting years to 31 December. No calendar year is ever named. The **Ridgeway year** comes "some years later" (after GY7; not numbered).

---

## 1. TKS facts that bind this book

| Fact | Value | TKS source |
|---|---|---|
| Calder Valve Engineering Ltd | Invented regional manufacturer; large company; **31 March year end** | TKS bible §1B |
| Calder FY2026 (year to 31 March 2027) | TTP **£2,000,000**; **no associated companies**; large in the prior year; CT **£500,000** in four QIPs of **£125,000** (14 October 2026; 14 January, 14 April, 14 July 2027); pay bill **£12m**; apprenticeship levy **£45,000** | TKS ch 5 |
| Consequence | Calder was independent until at least 31 March 2027: Tarnmoor buys it on **1 April** at the start of GY1 | this book |
| Dan Hartley | Born 1988; chartered engineer at Calder; story salary £98,000 in 2026/27; later "a pay rise takes him to £100,000", salary sacrifice, an electric car (£45,000 list price) under salary sacrifice; **redundancy on 30 September after 12 years' service when Calder closes his division**: statutory redundancy £9,012; holiday pay £3,800; ex gratia £60,000 of which **£10,000 paid by Calder into his pension**; PENP £25,000; legal fee paid direct | TKS chs 8–10, 31; bible "Dan's later positions" |
| Dan's other TKS facts | Permanent workplace Calder's works, 28 miles from home; IMechE £300; seconded to an invented client's plant on Teesside (expected 18 months, extended to 30 months) from 2026/27: **by GY1 the secondment has ended** | TKS ch 8 |
| Calder illustrations in TKS chapter 23 | Warehouse bought June 2004 / Airedale Alloys plc pool / 30% Aire Seals Ltd: **labelled illustrations, not story facts**; this book never uses them; **Calder held no shareholdings at acquisition** | TKS bible §1B illustrations |
| Ridgeway at the Ridgeway year | Jess owns **100% of Ridgeway Holdings Ltd** (base cost £162,000); RH → Ridgeway Cycles Ltd; Wharfe Wheels already sold (TKS ch 24); RC: 31 March year end; Skipton second unit; UK trading profit about **£400,000** a year; **Dublin showroom branch, no s 18A election**; branch Year 1 loss £80,000, Year 2 loss £30,000, Year 3 profit £120,000, Year 4 profit £200,000; Irish tax at 12.5% (£25,000 on £200,000); RC CT £125,000 in branch Year 4 | TKS chs 24, 26 |
| TKS chapter 31 | A **hypothetical** £4,000,000 offer for the group "if a buyer came back tomorrow" (no sale in TKS) | TKS ch 31 |
| Invented countries | **Vallaria**: modern OECD-style treaty with the UK; withholding **interest 10%, dividends 15%** (TKS). **Marrovia**: **no UK treaty**; withholds **30%** on royalties (TKS ch 26) | TKS chs 19, 26 |

## 2. New fixed facts about invented countries (this book)

| Item | Value |
|---|---|
| Vallarian corporation tax rate | **20%** (consistent with TKS's Ines example) |
| UK–Vallaria treaty: royalties | withholding **5%** |
| UK–Vallaria treaty: Art 5 | building site or construction project is a PE if it lasts **more than 12 months**; dependent agent wording is the older text ("has, and habitually exercises, an authority to conclude contracts in the name of the enterprise"); no MLI Art 12 |
| UK–Vallaria treaty: Art 9 | corresponding adjustments and MAP (Art 25) as in the OECD Model |
| Vallarian domestic law | Not otherwise described; Vallaria's own loss relief, dividend and exit rules are **ignored** (story simplification, say so) |
| Marrovian corporation tax rate | **9%** |
| Marrovian law on Project Undertow's notes | treats them as **equity**; receipt exempt as a dividend (invented) |
| Story exchange rate | **€1.15 per £**, **assumed for illustration only** (never a real rate); all Tarnmoor story figures are in pounds; exchange rates are otherwise ignored |

## 3. The group (structure and ownership)

| Entity | Short form | Incorporated / resident | Owner(s) | Year end | Notes |
|---|---|---|---|---|---|
| Tarnmoor plc | TPLC | England; UK | Widely held; LSE main market; no controlling shareholder | 31 Dec | Company with investment business; head office Leeds; share price **£8.00** at 1 March GY5 |
| Tarnmoor Engineering Ltd | TEL | England; UK | TPLC 100% | 31 Dec | Main UK trading company |
| Calder Valve Engineering Ltd | CVE | England; UK | Oldroyd family (individuals, no other companies) until 31 March GY1; TPLC 100% from **1 April GY1** | 31 Mar; **9-month AP 1 April–31 December GY3**; 31 Dec from GY4 | Very large company from its first group AP |
| Tarnmoor Estates Ltd | TES | England; UK | TPLC 100% | 31 Dec | Property company (investment business) |
| Tarnmoor Finance Ltd | TFL | England; UK | TPLC 100% | 31 Dec | Treasury company |
| Tarnmoor Water Systems Ltd | TWS | England; UK | TPLC 100% until **1 July GY5** demerger; then listed as **Tarnwater plc** | 31 Dec | |
| Brackenwell Sensors Ltd | BSL | England; UK | Founders and venture investors until 30 June GY2; TPLC 100% from **1 July GY2** | 31 Dec | Founder: Dr Asha Varma |
| Helmside Energy Ltd | HEL | England; UK | From 1 January GY1: TPLC 45%, Greyfell Utilities plc 40%, Northlight Infrastructure Fund LP 15%; from **1 March GY5**: TPLC 85%, Northlight 15% | 31 Dec | Consortium company GY1–GY4 (all four ownership ratios equal to shareholdings); 75% subsidiary from 1 March GY5 |
| Tarnmoor Vallaria SA | TVS | Vallaria; Vallaria | TPLC 100% | 31 Dec | |
| Tarnmoor Capital Ltd | TCM | Marrovia; Marrovia | TPLC 100%: equity **£60m** pre-story, plus **£30m** subscribed 1 January GY5 | 31 Dec | Office and staff in Marrovia (business premises condition met); board meets in Marrovia |
| Tarnmoor Ireland Ltd | TIL | Ireland; **UK (CMC in Leeds)** until **30 June GY4**; Ireland from then | TPLC 100% | 31 Dec | UK and Irish competent authorities had agreed (pre-story) that TIL was UK resident for treaty purposes; after migration they agree Ireland |
| Tarnmoor Actuators Ltd | TAL | England; UK | TEL 100% from **1 February GY6**; sold **31 December GY6** | 31 Dec | |
| Tarnmoor Pumps Ltd | — | England; UK | TPLC 100% | — | Dormant throughout; struck off GY7 |
| Moorgate Logistics LLP | — | England | TES 50%; unconnected developer 50%; from GY4 | 31 Dec | |
| Ridgeway Holdings Ltd / Ridgeway Cycles Ltd | RH / RC | England; UK | Jess 100% → TPLC 100% from **1 April of the Ridgeway year** | 31 Mar | RH assumed a passive holding company (verify) |

**Associated companies: two counts (amended by R1).** *Marginal relief / small profits rate* (associated at any time in the AP; divisor = count): GY1 **9**; GY2 **10**; GY3 **10**; GY4 **10**; GY5 **11**; GY6 **11**; GY7 **10**; Ridgeway year **11** (RH passive). MR limits GY1 £5,556 / £27,778. *Quarterly instalments* (associated companies, control test, counted **as at the day before the AP begins**: CTM92530, COM95001, HMRC's view; £1.5m, £20m and the £10m first-year limit all divided; no grace for very large): 31 December companies GY1 **8** (large **£187,500**, very large **£2,500,000**); GY2 **9** (£166,667 / £2,222,222); GY3–GY7 **10** (£150,000 / £2,000,000). Calder AP 1 Apr GY1–31 Mar GY2 **1** (£1.5m / £20m: **large**); AP 1 Apr GY2–31 Mar GY3 **9** (very large £2,222,222); 9-month AP GY3 **10** (very large £1,500,000 after × 9/12). TAL's AP from 1 Feb GY6 **11**. RC's first group AP (Ridgeway year) **1**. Full table: `continuity-rulings.md` R1.

## 4. People (invented)

| Person | Facts |
|---|---|
| Nadia Kerr | TPLC's CFO; SAO for every UK-incorporated group company (TIL, Irish-incorporated, is outside SAO: R10) |
| Tom Hesketh | Group head of tax |
| Graham Pike | Calder's finance director before and after the acquisition |
| Dr Asha Varma | Brackenwell's founder and CTO; stays after the acquisition |
| The Oldroyd family | Calder's former owners (individuals; no other companies); sell for £32m cash |
| Dan Hartley | Process valves division engineer; Project Ashlar 60% of his time in Calder's AP to 31 March GY2 (qualifying staffing cost **£72,000**, being 60% of about **£120,000** of employment costs); interviewed in the GY5 TP enquiry's functional analysis; redundant **30 September GY3** (TKS package above); later career left open |
| Jess Hartley | Sells RH to TPLC for £4.5m; stays as RC's managing director for **two years** on **£90,000** a year; **retention bonus £60,000** payable 24 months after completion |

## 5. Scale (headline figures)

| Item | GY1 | GY2 | GY3 | GY4 | GY5 | GY6 | GY7 |
|---|---|---|---|---|---|---|---|
| Consolidated revenue (£m) | 1,180 | 1,260 | 1,290 | 1,320 | 1,240 | 1,210 | 1,150 |
| at €1.15 per £ (€m, assumed) | 1,357 | 1,449 | 1,484 | 1,518 | 1,426 | 1,392 | 1,322 |
| Group-EBITDA (£m) | 170 | 182 | 196 | — | — | — | — |

GY1 revenue split (£m): TEL 630; TVS 330; TWS 110; Calder 48 (9 months; about 64 a year); TIL 60; TES third-party rents 2. Employees about 6,000 (TEL about 3,000; Calder about 300 before the GY3 restructuring). UK turnover far above £200m every year (TEL alone £630m).

## 6. Financing (pre-story unless dated)

- **TFL notes:** £550m, 5.5%, listed (quoted Eurobonds): interest **£30.25m** a year. TFL lends at **6%**: TEL **£200m** (£12.0m), TWS **£40m** (£2.4m), TES **£70m** (£4.2m), TPLC **£120m** (£7.2m), TVS **£120m** (£7.2m). TFL admin costs **£0.6m**; TFL TTP about **£2.15m** a year (33.0 − 30.25 − 0.6).
- **TPLC RCF (bank):** **£30m** drawn 1 April GY1 (Calder); **£24m** more drawn 1 July GY2 (Brackenwell); reduced to **£20m** throughout GY3; interest 6%; **two arrangement fees of £300,000** (amended by R13): fee 1 on the £30m drawing (1 April GY1) amortised £250,000 GY1 + £50,000 GY2; fee 2 on the £24m drawing (1 July GY2) amortised £200,000 GY2 + £100,000 GY3; totals **£0.25m** (GY1), **£0.25m** (GY2), **£0.1m** (GY3). TPLC non-trading debits GY1 £8.80m; GY2 £9.97m.
- **TCM:** lends **£60m** to TVS at 6% (pre-story onwards; £3.6m a year) and **£30m** to TIL at 6% from 1 January GY5 (£1.8m a year); expenses £0.3m a year.
- **TPLC → TIL:** **£20m** interest-free loan (pre-story).
- **TFL → BSL:** £8m from 1 July GY2 (UK-to-UK; within s 164A).
- Swaps and derivatives: TFL interest rate swap designated as a fair value hedge of the notes; **no reg 6A election: tax follows the accounts** (non-trading; HMRC's guidance) (amended by R6); swap net settlements left out of all story figures. TEL copper futures with a reg 6A election made pre-story.

## 7. Events by Group Year (canonical numbers)

### GY1
- **1 January:** Helmside formed (share capital £20m: TPLC £9m, Greyfell £8m, Northlight £3m).
- **1 April: Calder acquired** for **£32.0m** cash (RCF £30m + £2m cash). Stamp duty **£160,000** (TPLC). Deal costs in TPLC: **£0.3m** pre-decision strategic review (management expense) and **£0.9m** post-decision (capital; not deductible) [writer verifies the *Centrica* boundary on the facts]. Calder's associates for marginal relief: 8 (divisor 9); for QIPs its first group AP has divisor 1 (R1).
- **Acquisitions by TIL and TES in GY1:** TIL buys a UK warehouse (let to an unconnected logistics company) for **£3.0m** and **8%** of an unconnected Irish valve distributor for **£0.9m**; TES buys a freehold warehouse for **£1.5m** (granted on a 30-year lease in GY4) and the water-systems factory for **£4.6m** (transferred to TWS in GY3). TPLC's 12% of Coldwater Instruments plc is held from before the story or bought early (after December 2017; writer of chapter 18 fixes dates and costs).
- **Calder AP 1 April GY1–31 March GY2:** adjusted trading profit before RDEC **£2.6m**; Project Ashlar qualifying expenditure **£2.0m** (includes Dan's £72,000 and 65% × £400,000 = **£260,000** subcontract to Brackenwell, then unconnected); **RDEC £400,000** (taxable); **TTP £3.0m**; CT **£750,000**; step 1 set-off leaves **£350,000** payable; **large, not very large** (QIP divisor 1: associates counted on 31 March GY1, when it had none) (amended by R1): four instalments of **£187,500** on CT before RDEC of £750,000 (the RDEC does not reduce QIPs, CIRD89870; amended by R2), due **14 October GY1, 14 January, 14 April, 14 July GY2**; the £400,000 credit is recovered via an early-filed return (summer GY2) and applied to the next AP's instalments; Calder is very large from AP 1 April GY2; first R&D claim: claim notification within 6 months of 31 March GY2. Annual tax-EBITDA **£4.4m**; CAs **£1.8m**; R&D allowance on a **£0.5m** test rig (100%) [within the £1.8m? writer decides and records]. Deferred tax at 31 March GY2 (FRS 101 basis from 1 April GY2 does not affect this year): qualifying NBV **£14.0m**, TWDV **£8.4m**: DTL **£1.4m**; short-term differences (LTIP accrual £0.6m; pension accrual £0.2m): DTA **£0.2m**; opening (31 March GY1) DTL £1.1m, DTA £0.1m: **deferred tax charge £0.2m**.
- **TPLC:** management expenses **£8.0m** (after excluding the £0.9m capital deal costs); recharge to TVS: cost **£2.0m**, charged **£1.6m**, TP adjustment to cost + 5% = **£2.1m** (+**£0.5m**; CT £125,000); interest to TFL £7.2m; RCF £1.35m + fee £0.25m = **£1.6m**; CIR disallowance **£2.21m** allocated to TPLC's non-trading LR debits; excess management expenses over gross profits £5.9m (8.0 − 2.1), but surrender capped at the excess over the **profit-related threshold** (gross profits £2.1m + TCM CFC apportionment £825,000 = £2,925,000: CTA 2010 s 105(3A)): **£5,075,000** surrendered, **£825,000** carried forward (stranded) (amended by R3); NTLR deficit **£6.59m** (8.8 − 2.21) surrendered to TEL in full. Recharge income treated as non-trading (s 979; book's assumption).
- **TEL:** tax-EBITDA **£50.0m**; CAs **£14.0m**; trading LR debit **£12.0m**; TTP before reliefs **£24.0m**; group relief from TPLC **£11.665m** (ME £5.075m + NTLR £6.59m); consortium relief from Helmside **£1.8m** (link company route); **TTP £10.535m; CT £2,633,750** (amended by R3; was £9.71m / £2,427,500).
- **Helmside:** loss **£4.0m**: TEL (via TPLC as link company) **£1.8m**; Greyfell **£1.6m**; **£0.6m** stays in Helmside.
- **TCM CFC charge on TPLC:** profit £3.3m; chargeable (25% after the Ch 9 75% exemption) £825,000; creditable tax £74,250; charge **£132,000** (same each year GY1–GY4). The £825,000 apportioned enters TPLC's s 105(3A) profit-related threshold every year GY1–GY4 (R3).
- **CIR (worldwide period GY1):** aggregate tax-EBITDA **£74.8m** (TEL 50.0; TWS 12.0; TES 13.0; Calder 3.3 (9/12 × 4.4); TIL 3.0; TFL −0.6; TPLC −5.9); ANTIE **£24.65m** (TFL 30.25 − 7.2 TVS interest; TPLC 1.6); ANGIE **£31.85m**; group-EBITDA £170m; fixed ratio 30% = **£22.44m**; group ratio 18.74% × 74.8 = £14.01m (lower); **disallowed £2.21m**. TPLC appointed reporting company (more than half of eligible companies); full IRR.
- Other company TTPs GY1 (before group relief): TWS **£7.1m** (12.0 − CAs 2.5 − interest 2.4); TES **£8.4m** (13.0 − 0.4 − 4.2); TIL **£2.7m** (3.0 − 0.3); TFL **£2.15m**.
- **Dan** joins Project Ashlar.

### GY2
- **TIL** buys an Irish distributor's business, including its customer list, for **£3.0m** (relevant asset acquired with a business that has no qualifying IP: **no debits**, s 879I; tax value £3.0m).
- **1 April:** Calder adopts FRS 101: change of basis, revenue adjustment **+£0.4m** taxed in the AP beginning 1 April GY2 (no spreading; a change of accounting policy on HMRC's view, BIM34050; ch 5).
- **1 May:** Brackenwell SPA signed (conditional). **1 July: Brackenwell acquired**: **£22.2m** for shares (stamp duty **£111,000**) + **£1.8m** for its **£3.0m** convertible notes (bought from the venture investors). TPLC **releases the notes within 60 days** (by 29 August GY2); board minutes record a material risk that BSL could not pay its debts within 12 months: **corporate rescue exception** (s 361D): no deemed release credit (which would have been **£1.2m**); TPLC no debit (s 354).
- **Brackenwell before acquisition (year to 31 December GY1, standalone SME, 45 staff):** relevant R&D £3.5m / total relevant expenditure £5.0m = **70%**; qualifying expenditure **£3.5m**; extra deduction **£3.01m**; trading loss **£4.2m** → **£7.21m**; surrenderable loss **£6.51m** (186% × £3.5m: cap verified, CIRD122000, ch 10); payable credit **£943,950**; loss c/f **£0.7m**. Earlier losses brought forward **£5.3m**. Two late CT returns in its history (pre-story). Pre-entry capital loss **£0.4m** (shares in a failed spin-out). Licence of a sensor patent from a Vallarian university: royalty **£50,000** a year (s 906/s 911: treaty rate 5% applied on reasonable belief).
- **Brackenwell GY2 (year to 31 December):** large (linked to Tarnmoor) for the whole GY2 AP (HMRC's view, CIRD92000; ch 10); merged RDEC on qualifying **£3.0m** = **£600,000**; notional tax at 19% leaves **£486,000** (PAYE cap to check); (amended by R7) **both** the step 2 amount **£114,000** and the step 5 amount **£486,000** are surrendered to TEL (**£600,000** in all); TEL pays BSL £600,000, ignored for CT (FA 2026 s 31; HMRC's guidance); £600,000 of TEL's GY2 CT is discharged by the credit. BSL relevant PAYE/NIC about £900,000 a year (cap £2,720,000, not restrictive). Trading loss after RDEC **£5.2m**, time-apportioned: pre-acquisition **£2.6m** (1 January–30 June), post-acquisition **£2.6m** surrendered to TEL. **Pre-change losses £8.6m** (5.3 + 0.7 + 2.6): restricted under **CTA 2010 Part 14 Ch 2 (s 673; split under s 674)** (major change in the nature or conduct of the trade: BSL becomes a captive supplier to Calder and TEL; Ch 2A gives way under s 676AB) (amended by R8) and barred from Part 5A surrender to **31 December GY7** (Ch 2C); valued at nil in the price; unrecognised deferred tax asset.
- **Calder AP 1 April GY2–31 March GY3:** annual tax-EBITDA **£4.8m**. **Vallarian installation project** (a refinery contract) from **August GY2**: the PE's loss in this AP **£0.3m** (relieved in the UK).
- **TEL GY2:** tax-adjusted trading profit before CAs **£42.0m** (after the £12.0m trading LR debit); CAs **£16.0m** (below); trading profits **£26.0m**; group relief: TPLC ME **£5.475m** (s 105(3A) cap) + NTLR deficit **£7.67m** + BSL **£2.6m**; consortium **£1.35m**; total **£17.095m**; **TTP £8.905m; CT £2,226,250** (amended by R3; was £17.92m / £8.08m / £2,020,000); QIPs due 4 × £556,562.50; RDEC surrendered by BSL discharges £600,000 (R7): net **£1,626,250**. **UTT:** £24m ERP implementation costs deducted as revenue with a provision: advantage **£6m** > £5m: notification.
- **TEL GY2 capital allowances (total £16.0000m):** full expensing **£9.0m**; 50% FYA on **£1.2m** special rate plant = **£0.6m** (balance £0.6m to special rate pool); 40% FYA on **£0.8m** test rigs leased to customers = **£0.32m** (balance £0.48m to main pool); main pool b/f **£39.5m** + £0.48m + £0.5m second-hand plant − £0.3m disposal (old, non-FE plant) = **£40.18m**, WDA 14% **£5.6252m** (c/f £34.5548m); special rate pool b/f **£6.0m** + £0.6m = £6.6m, WDA 6% **£0.396m** (c/f £6.204m); SBA on a **£1.96m** factory extension **£0.0588m**. (amended by R11) TEL takes **no AIA**: s 51C's "financial year" is the year to 31 March, and the AIA for the year to 31 March GY3 goes to special rate spending first: TES £400,000 (office fixtures) and Calder £600,000 (second-hand special rate plant, AP to 31 March GY3).
- **TPLC GY2:** management expenses **£8.5m**; recharge income (arm's length) **£2.2m**; interest to TFL £7.2m; RCF £2.52m + fee £0.25m = **£2.77m**; CIR disallowance **£2.30m** allocated to TPLC; surrenders ME **£5,475,000** (threshold £2.2m + £825,000 = £3,025,000; £825,000 carried forward, stranded: cumulative £1.65m) and NTLR deficit **£7.67m** to TEL (amended by R3).
- **Helmside:** loss **£3.0m**: TEL **£1.35m**; Greyfell £1.2m; £0.45m stays.
- **TES:** buys an office building with a **s 198 election** fixing fixtures at **£0.4m** (all integral features; covered by **£400,000 AIA**, R11); overpays QIPs and **surrenders the refund to TEL** (s 963): overpaid £569,375; surrenders £400,000; TEL paid 4 × £456,562.50 = £1,826,250 against £2,226,250 (amended by R3).
- **CIR GY2:** tax-EBITDA **£78.4m** (TEL 54.0; TWS 12.5; TES 13.5; Calder 4.7 (3/12 × 4.4 + 9/12 × 4.8); TIL 3.2; TFL −0.6; TPLC −6.3; BSL −2.6); ANTIE **£25.82m**; ANGIE **£33.02m**; group-EBITDA £182m; 30% = **£23.52m**; **disallowed £2.30m**.
- **Rejected proposal:** sell BSL from TPLC to Calder for £24m funded by a TFL loan (unallowable purpose).

### GY3
- **1 April:** Calder's works (bought **March 2019** for **£4.2m**; no indexation) transferred to TES at no gain, no loss; market value **£5.6m**; SDLT group relief saves **£269,500**; TES leases it back to Calder.
- **30 April:** TES sells its **depot** (bought **June 2004** for **£2.5m**; indexation factor **0.489** (TKS-verified) = **£1,222,500**) for **£6.0m**: gain **£2,277,500**.
- **15 June:** Calder announces the closure of its process valves division; restructuring provision **£1.8m** in the 9-month AP.
- **1 September:** TEL buys a **new distribution centre** from a developer for **£5.2m** (land £1.2m; integral features £0.6m; structure £3.4m); first use 1 September: SBA **£102,000** a year, **£34,000** for GY3. Group roll-over of the depot gain: proceeds not reinvested **£0.8m** chargeable in TES; **£1,477,500** rolled over; TEL's base cost **£3,722,500**.
- **September:** the Vallarian installation project ends (14 months: August GY2–September GY3; a treaty PE). PE profit in Calder's 9-month AP **£0.9m**; Vallarian tax 20% **£180,000** (Vallarian loss relief ignored: story simplification); UK CT 25% **£225,000**; credit £180,000; UK top-up **£45,000**. Calder does **not** elect for the branch exemption.
- **30 September:** **Dan's redundancy** (TKS package; deductible for Calder in the 9-month AP).
- **1 October:** Calder sells its process-valve **customer contracts and manufacturing know-how** (Part 8 assets created after 2002; no tax cost) to TVS for **£6.0m** (realisation credit £6.0m; arm's length price required: FA 2026 cross-border rule) and the related **plant** for **£1.4m** (CA disposal values; includes some full-expensed plant: special balancing charge, writer fixes the split). Dan among the engineers whose know-how was documented.
- **1 October:** TES transfers the **water-systems factory** (TES cost **£4.6m**, bought GY1) to TWS at no gain, no loss; market value **£6.0m**; SDLT group relief **£289,500**.
- **TES lease assignment (GY3):** leasehold office bought with exactly **50 years** unexpired for **£800,000**; assigned with **25 years** unexpired for **£1.0m**: allowable cost **£648,800** (81.100%); gain **£351,200**.
- **Helmside GY3:** loss **£1.0m**: TEL (link company route) **£0.45m**; Greyfell £0.4m; **£0.15m** stays (Helmside's carried-forward losses now £1.2m).
- **s 171A:** TEL realises a **£0.5m** capital loss on listed shares; TES and TEL elect to treat **£0.5m** of TES's £0.8m chargeable gain as TEL's.
- **Calder 9-month AP (1 April–31 December GY3):** trading tax-EBITDA **£3.2m**; IFA realisation credit **£6.0m**; restructuring costs **£1.8m**; CIR-period contribution with 3/12 of the previous AP: **£8.6m**.
- **CCO incident** (Marrovian sales agent; reasonable prevention procedures); **promoter's "loss refresh" scheme** for BSL's losses declined (DOTAS hallmarks; Part 14B; GAAR).
- **CIR GY3:** tax-EBITDA **£87.7m** (TEL 58.0, in which the £0.5m gain reallocated under s 171A and TEL's £0.5m capital loss net to nil; TWS 13.0; TES 14.8 = property and other profits £14,148,800 + net gains £651,200 (depot £0.3m kept + lease assignment £351,200) (amended by R5: net gains count, unused capital losses do not); Calder 8.6 **including the £6.0m IFA realisation credit, which s 408 does not exclude** (no tax cost, no past debits) (confirmed by R4); TIL 3.4; TFL −0.6; TPLC −6.0; BSL −3.5); ANTIE **£24.35m** (RCF £20m × 6% = £1.2m + fee £0.1m); ANGIE **£31.55m**; group-EBITDA £196m; 30% = **£26.31m**; no disallowance; **reactivation £1.96m**; disallowances c/f **£2.55m**; **no unused interest allowance** generated (all spare capacity reactivated; R5, HMRC's view).

### GY4
- Calder on a calendar year; joins the **group payment arrangement**.
- Ashlar **patents granted**; Calder **elects into Patent Box**; licence to TVS at **6% of Ashlar sales**: royalty **£1.2m** a year; Vallarian withholding 5% **£60,000**. Simplified Patent Box: relevant IP profits **£0.9m**; deduction **£540,000**; tax **£90,000** (10%).
- **TIL migration:** notice under TMA s 109B on **1 March GY4**; migration time **30 June GY4**; AP 1 January–30 June GY4. Ordinary trading profit **£1.2m**. Exit items: stock (book £1.1m, value £1.4m) **£0.3m**; customer list (cost £3.0m, no debits under s 879I; value £4.2m) **£1.2m**; 8% shareholding in an unconnected Irish distributor (cost £0.9m, bought GY1; value £1.5m) **£0.6m**; plant (pool £0.4m; value £0.5m) balancing charge **£0.1m**; UK warehouse (cost £3.0m, bought GY1; value £3.8m) gain **£0.8m postponed** (s 187B). **CT1 £850,000; CT2 £325,000; payment plan £525,000 = 6 × £87,500** plus interest (first due 9 months and 1 day after 30 June GY4); the £25,000 on the balancing charge is outside the plan [verify]. After migration: TIL lets the warehouse to an unconnected logistics company (UK property business); TP on the £20m interest-free loan from TPLC: **£0.6m** for July–December GY4, **£1.2m** a year from GY5.
- **TVS UK PE question:** TVS sells Ashlar valves to UK utilities; TEL's key-account engineers play the principal role: domestic dependent agent PE (s 1141(1)(b)); no PE under the invented treaty's older Art 5(5); from **GY5** TEL becomes a buy-sell distributor.
- **Project Undertow (rejected):** TFL to issue **£80m** perpetual notes to TCM at **7%** (coupon **£5.6m**): D/NI (deduction worth **£1.4m** denied); withholding 20% **£1.12m** (22% from 2027/28); CFC, TP, CIR, s 441.
- **TES 30-year lease grant:** freehold warehouse (cost **£1.5m**, bought GY1); premium **£2.0m**; reversion value **£4.0m**; income element **£840,000**; capital part **£1.16m**; part-disposal cost £500,000 (A = full premium) or £337,209 (A = capital part): **verify and record**.
- **Helmside:** profit **£2.5m**; own c/f losses **£1.2m**; TTP £1.3m; TPLC surrenders current-year excess ME down, limited to **£585,000** (45%) [verify the measure].
- **TPLC sells 4% of Coldwater Instruments plc** (12% → 8%): SSE (writer fixes dates and costs: acquired after December 2017).
- **Moorgate Logistics LLP** formed (TES 50%).
- **1 December:** heads of terms with Greyfell.

### GY5
- **1 January:** TPLC subscribes **£30m** for TCM shares; TCM lends **£30m** to TIL.
- **1 March: Helmside share exchange:** TPLC issues **2,000,000 shares at £8.00 = £16.0m** to Greyfell for its 40%; Greyfell's gain exempt (SSE priority over s 135); TPLC's base cost £16.0m [verify]; stamp duty **£80,000** (no s 77 relief). Helmside becomes an 85% subsidiary (75% group).
- **1 June:** HMRC opens an enquiry into Calder's GY3 return (filed by 31 December GY4; window to 31 December GY5 as a large-group company).
- **1 July: Tarnwater demerger:** TWS (value **£180m**) distributed to TPLC's shareholders (s 1076; s 1091 clearance); TPLC's disposal within the SSE; no s 179 charge (s 192(3)); **SDLT clawback £289,500** on the water-systems factory (transferred 1 October GY3, within 3 years).
- **CFC review:** TCM profit **£5.1m** (interest £5.4m − £0.3m); chargeable £1,275,000 (enters TPLC's s 105(3A) threshold for GY5, R3); creditable tax £114,750; **charge £204,000**; TVS exempt (tax exemption: 20% = 80%); TIL: tax exemption fails (12.5% = 50%; QDMTT point unverified); gateway: no chargeable profits (Ch 4 Condition B; deposit interest **£60,000** under the 5% rule).
- **Pillar Two (simplified, labelled):** Marrovia GloBE income £5.1m; Marrovian tax £459,000; pushed-down CFC charge £204,000 (within cap £306,000); ETR **13.0%**; top-up **£102,000** (IIR).

### GY6
- **1 February: TAL hive-down** from TEL (Part 22 Ch 1; TCGA s 171; CTA 2009 s 775): factory (TEL cost **£5.0m**, bought after 2017; value **£7.5m**); patents (TWDV **£1.2m**; value **£4.0m**); plant at TWDV; stock; contracts.
- **1 October: head office sale and leaseback:** TES sells to an unconnected pension fund for **£14.0m**; 15-year leaseback at **£0.9m** a year (commercial); buyer's SDLT **£689,500**; s 57A relief on the leaseback.
- **TP settlement:** Calder's GY3 transfer re-priced at **£8.0m** (HMRC had argued £9.5m): adjustment **£2.0m**; CT **£500,000** plus interest; no penalty. **Bilateral APA** on the TVS royalty from GY6.
- **December:** TAL pays TEL a pre-sale dividend of **£2.0m** from post-hive-down profits.
- **31 December: TAL sold** to Brennock Industries Inc for **£48.0m** cash plus a cash earn-out up to **£6.0m** (valued **£3.0m** at completion); para 15A SSE; degrouping gain **£2.5m** added to TEL's proceeds (exempt); patents' s 780 charge switched off by s 782A; TAL's factory base cost becomes £7.5m; **SDLT clawback £364,500** (TAL; indemnified by TEL in the SPA); buyer's stamp duty **£240,000**. Earn-out receipts' treatment: **verify**.
- **Unremittable income (labelled):** a Marrovian customer's payment to TEL blocked during GY6.

### GY7
- MAP corresponding adjustment in Vallaria for the TP settlement.
- **Tarnmoor Pumps Ltd** struck off; pre-dissolution distribution **£18,000** (s 1030A; capital for TPLC; no SSE: not trading).

### The Ridgeway year (later; not numbered)
- **1 April:** TPLC buys **100% of Ridgeway Holdings Ltd** from Jess for **£4.5m** cash. Stamp duty **£22,500**.
- RC: UK trade profit about **£400,000**; Dublin branch profit about **£200,000**; Irish tax **£25,000**; pre-election UK CT **£125,000** (25% × £600,000 − £25,000). RC's marginal relief divisor 11 (irrelevant: profits above the upper limit). For QIPs RC's associates are counted on 31 March, the day before its first group AP (amended by R1): RH is passive and ignored, so **divisor 1**: large threshold £1.5m; profits £600,000: **not large, no QIPs**. TP now applies (not an SME). SAO, tax strategy, UTT, CIR, Pillar Two coverage extended.
- **Dublin branch:** recommendation **elect under s 18A** from RC's next AP; six-year look-back nets Years 1–2 losses (£110,000) against Years 3–4 profits (£320,000): no opening negative amount [verify ss 18J–18N]; annual saving about **£25,000**. Alternatives: s 140 incorporation into a new Irish subsidiary of RC (then a CFC); transfer to TIL fails s 140 (RC would hold under 25%).
- Consolidated fair value uplift on RC's brand and customer relationships **£0.8m**: DTL **£200,000** (group accounts only).
- Jess: MD for two years, £90,000 a year; retention bonus £60,000 payable 24 months after completion.
- Dan: working elsewhere; one line.

## 8. Facts fixed by chapters (to be filled in at each consolidation)

*Batch 1 consolidation (prologue, chapters 1–14), 9 October 2026, as amended by `continuity-rulings.md`. "Ch" = the chapter that fixed the fact. Labelled hypotheticals in the chapters ("for this example, suppose...") are **not** story facts and are not listed, except where a later writer might mistake them (marked "not story").*

### Standing facts (all Group Years)
- Tarnmoor's consolidated revenue exceeded €750m (at the assumed rate) before GY1: CbC, TP records and Pillar Two apply from GY1 (story assumption). TPLC's shareholders: pension funds, insurers and private investors. (Ch 1)
- Consolidated accounts under IFRS; **every UK subsidiary reports under FRS 101** (Calder from 1 April GY2). (Ch 5)
- Calder adopted FRS 102 (2024 amendments) in its year to 31 March 2027 (TKS ch 5's year); its lease transition numbers in ch 5 are a labelled hypothetical, not story. (Ch 5)
- TFL takes no deposits and is **not a banking company**; **no Tarnmoor company is close**. (Ch 2, 12)
- TPLC publishes the group tax strategy by 31 December each year; it states the group **does not use marketed tax avoidance schemes**. (Ch 4)
- SAO (R10): Nadia Kerr for every UK-incorporated company; first qualifying years: Calder FY from 1 April GY2; Brackenwell GY3; Helmside GY6; TIL never (Irish-incorporated); Tarnmoor Pumps every year. (Ch 4)
- Group deductions allowance (R9): **standing nomination of TPLC** from the start of GY1, signed by every UK company; joiners countersign (Calder 1 April GY1; Brackenwell 1 July GY2; Helmside 1 March GY5); TPLC files a GAAS for each AP; **GY1–GY4 whole £5m to TEL**. (Ch 14)
- Calder carries on a **single engineering trade**; the GY3 division closure is not a cessation. (Ch 14)
- Calder's plant is mainly heavy long-life plant (special rate pool); if pools are needed, use R12's balances at 31 March GY2 (main pool c/f £1,655,500; special rate pool c/f £6,744,500; TWDV £8.4m). (R12)
- TPLC's recharge income from TVS is **non-trading income not otherwise charged** (CTA 2009 s 979; book's assumption). (Ch 7, 13)
- TPLC's management expenses above the s 105(3A) threshold that cannot be surrendered are **stranded** (no Part 5A use; no DTA): cumulative £825,000 (GY1), £1.65m (GY2), £2.475m (GY3), £3.3m (GY4), plus £1,275,000 in GY5. (Ch 13; R3)
- TEL pays pension contributions on the 22nd of the following month; TPLC's share option plan is not tax-advantaged (employees taxed on exercise). (Ch 7)
- TES's company-level costs (board, audit) are claimed as management expenses (no amount fixed); TES claims under s 463B to set its NTLR deficit (£4.2m interest) against its own property profits each period. (Ch 12, 13)
- TFL: CT on TTP £2.15m = **£537,500** a year; no reg 6A election (R6). TEL copper futures: reg 6A election (pre-story). (Ch 12)
- QIP divisors (R1): 31 December companies GY1 8, GY2 9, GY3–GY7 10; Calder 1 / 9 / 10 for its three APs from 1 April GY1; TAL 11; RC 1. Marginal relief divisors as §3. (Ch 3)

### Before GY1 / Calder's last independent year
- Calder's AP to 31 March GY1 is outside the Tarnmoor group for the AIA: Calder used its own £1m AIA. (Ch 8; R11)
- Calder had been large in its last standalone years. (Ch 3)

### GY1
- **First weeks:** Tom Hesketh's s 164A research memo for Nadia Kerr: no TP adjustment on TFL's four UK loans (£430m; £25.8m interest a year); the TVS loan stays in TIOPA Part 4; the TIL loan is within s 164A while TIL is UK resident; the TPLC "same rate" point is left open (chapter 27). (Ch 2)
- **January:** TPLC's strategic review (market mapping, long list, no target chosen) **£0.3m**, revenue. **3 February:** board decision to make an offer for Calder. Post-decision fees **£0.9m** = due diligence **£450,000** + SPA legal **£300,000** + corporate finance **£150,000** (capital). TPLC GY1 management expenses £8.0m = services to TVS £2.0m + strategic review £0.3m + other head office £5.7m. (Ch 13)
- **1 April:** RCF fee 1 **£300,000** (amortised £250,000 GY1, £50,000 GY2). (Ch 12; R13)
- **TPLC (R3):** profit-related threshold **£2,925,000**; ME surrendered **£5,075,000**; carried forward **£825,000**; NTLR debits £8.80m; deficit £6.59m surrendered; total to TEL **£11,665,000**. (Ch 13, 14)
- **TEL (R3):** TTP **£10,535,000**; CT **£2,633,750**. Pensions paid £11.0m; GY1 pension accrual £600,000 paid January GY2. (Ch 1, 7)
- **Calder, AP 1 April GY1–31 March GY2:** PBT **£3.8m** (RDEC £0.4m presented above the line); qualifying depreciation **£0.6m**; accruals added back £0.8m, opening accruals paid £0.4m; no permanent differences; total tax charge **£950,000** (current £750,000 + deferred £200,000; ETR 25.0%); net DTL £1.0m (31 March GY1) → **£1.2m** (31 March GY2). (Ch 6)
- Calder's R&D: qualifying expenditure £2.0m = staffing **£1,500,000** (Dan £72,000 + others £1,428,000) + Brackenwell contract 65% × £400,000 = **£260,000** + consumables **£180,000** + software, data and cloud **£60,000**; test bay repairs excluded (not R&D); the £500,000 test rig is capital (R&D allowance). CAs **£1.8m** = R&D allowance **£500,000** + P&M **£1,300,000** (AIA £600,000 + WDAs £700,000). Claim notification window to 30 September GY2; **filed April GY2**. (Ch 8, 10; R11, R12)
- Calder's QIPs (R1, R2): **large**; 4 × **£187,500** on 14 October GY1, 14 January, 14 April, 14 July GY2; RDEC £400,000 recovered via an early return (summer GY2) and applied to the next AP's instalments; net CT £350,000. (Ch 3)
- Calder AIA £600,000 (second-hand plant) from the AIA year to 31 March GY2 (shared with the 31 December companies' GY1 periods; balance £400,000 not fixed). (Ch 8; R11)
- Group accounts: Calder's customer relationships at fair value **£4.0m**; DTL £1.0m; amortised over **10 years** (£0.3m in GY1; £0.4m a year); deferred tax credit £75,000 GY1, £100,000 a year. (Ch 6)
- Marginal relief limits per company (divisor 9): £5,556 / £27,778. (Ch 1)
- Brackenwell (pre-acquisition): its return for the year to 31 December GY1 (carrying the £943,950 payable credit claim) was unfiled at completion; its two previous returns were late. (Ch 3)

### GY2
- **1 April:** Calder's FRS 101 change of basis: group IFRS 15 policies bring forward revenue on part-completed installation contracts: **+£400,000** receipt (s 181) taxed in the AP to 31 March GY3; CT **£100,000**; each of Calder's very large instalments (14 June, 14 September, 14 December GY2; 14 March GY3) up **£25,000**. Calder very large in that AP (QIP divisor 9); six Calder instalments fall in calendar GY2. (Ch 3, 5)
- Calder, AP to 31 March GY3: AIA **£600,000** on second-hand special rate plant (AIA year to 31 March GY3). (R11)
- **Brackenwell:** integration plan agreed before completion: BSL becomes a captive developer and supplier for Calder and TEL; external sales run down: major change in the nature or conduct of the trade (Part 14 Ch 2, R8). BSL kept its 31 December AP (not shortened at completion: a missed planning point). GY2 loss split by months **£2.6m / £2.6m** (day basis would give £2,578,630 / £2,621,370). Potential DTA on £8.6m (**£2.15m**) unrecognised at and after acquisition (goodwill correspondingly higher). Ch 2C bar to **31 December GY7**. (Ch 6, 10, 14)
- **BSL notes:** released by **29 August GY2**; s 361D evidence: board minutes and BSL cash-flow forecasts; TPLC's write-off £1.8m (no debit, s 354); BSL's release £3.0m (no credit, s 358); notes treated as plain debt. (Ch 12)
- **BSL GY2 RDEC (R7):** £600,000 = step 2 amount £114,000 + step 5 £486,000, all surrendered to TEL; TEL pays £600,000 (ignored for CT); BSL PAYE/NIC about £900,000 a year; cap £2,720,000. (Ch 10)
- BSL's GY1 return filed by Tarnmoor before 31 December GY2 (persistent-failure penalty avoided). (Ch 3)
- **1 July:** RCF fee 2 **£300,000** (amortised £200,000 GY2, £100,000 GY3); TPLC GY2 NTLR debits **£9.97m**. (Ch 12; R13)
- **Rejected debt pushdown:** originated by Calder's finance team; £24m at 6% = £1.44m interest a year; Calder CT saving £360,000, TFL extra CT £360,000; board declined and minuted. (Ch 12)
- **TPLC (R3):** threshold £3,025,000; ME surrendered **£5,475,000**; £825,000 carried forward; NTLR deficit £7.67m. (Ch 13)
- **TEL computation (£000):** PBT **23,500**; add-backs **20,000** (plant depreciation 15,000; buildings depreciation 1,200; cash LTIP vested 31 Dec GY2, paid 15 November GY3, 1,400; pension accrued unpaid 900 (paid February GY3); IFRS 2 charge on TPLC options 1,100; health and safety fine 250; trade-fair hospitality 50; branded whisky gifts 30; planning appeal legal fees 70); deductions **1,500** (GY1 pension accrual paid January GY2 600; Part 12 relief 800; accounting profit on old plant 100); = **42,000** before CAs; no adjustment for: bonus 2,000 paid 31 March GY3, staff party 120, ERP 24,000, a specific trade debt impairment, defence legal costs. Pensions paid £11.5m (accounts charge £11.8m). Group relief **£17.095m**; TTP **£8,905,000**; CT **£2,226,250**; QIPs due 4 × **£556,562.50**; credit from BSL £600,000; net **£1,626,250**. (Ch 7; R3)
- **TEL plant (Ch 8):** £9.0m new machining centres (FE); £1.2m new chillers and test-hall electrical systems (special rate, 50% FYA); £0.8m new test rigs hired to UK utility customers on two-year hires (40% FYA; TEL as lessor); £0.5m second-hand milling line from an unconnected competitor (main pool, no AIA); £0.3m proceeds of old non-FE plant. Pools c/f: main **£34,554,800**; special rate **£6,204,000**. SBA extension contracted after 29 October 2018, in use throughout GY2. (Ch 8, 9)
- **TES office:** seller's original fixtures cost **£700,000**; s 198 value **£400,000**; all integral features; **AIA £400,000** (R11). (Ch 9)
- **TES/TEL refund surrender (R3):** TES overpaid **£569,375** (tax on the expected £2,277,500 depot gain; sale slipped to 30 April GY3); TEL paid 4 × **£456,562.50** = **£1,826,250** against **£2,226,250** (short £400,000; £100,000 per date); TES surrenders **£400,000** (s 963; reg 9) and is repaid **£169,375**; simplified interest saving **£13,291** (months 19/16/13/10 to 1 October GY3); rule of thumb £11,000 a year. (Ch 3)
- **TEL UTT:** £24m ERP costs; provision booked with the auditors' agreement; advantage £6.0m; notification due and filed **31 December GY3** with the return. (Ch 4)
- **Group accounts GY2 (simplified illustration):** consolidated PBT **£100.0m**; TVS profit **£30.0m** (20%); TCM profit £3.3m (9%); CFC charge £132,000; non-deductible expenses **£2.0m**; CIR disallowance £2.3m (no DTA); TPLC's £825,000 carried-forward ME (no DTA, £206,250); total tax charge **£24,385k; ETR 24.39%** (Pillar Two top-up excluded) (amended by R3; was £24,179k / 24.18%). TEL full expensing illustrative DTL effect £2.25m. (Ch 6)
- Dr Varma's remark at the integration meeting (invented, labelled). (Ch 14)

### GY3
- **Group payment arrangement** for the 31 December UK companies from GY3, **TFL nominated**; Calder joins from GY4. (Ch 3)
- **TEL long funding lease** from **1 January GY3**: refurbished (second-hand) machining centre; 10-year finance lease from an unconnected lessor; PV of minimum lease payments **£1,500,000**; rentals **£203,802** a year in arrears; implicit rate 6%; GY3 finance charge **£90,000**; capital element £113,802; main pool addition £1.5m; no FYA. (Ch 9)
- **TES flood wall** (riverside site let to TEL), in use from **1 January GY3**: cost **£500,000**; local authority grant **£200,000** (capital: reduces qualifying expenditure, s 532/538A); SBA on **£300,000**: **£9,000** a year. (Ch 9)
- **TEL distribution centre** (1 September): price split supported by a surveyor's report; integral features in the special rate pool, WDA 6% **£36,000** in GY3 (the 50% FYA point is unsettled and not taken). (Ch 9; R17)
- **Calder restructuring provision £1.8m** (9-month AP): redundancy and notice pay £1,200,000 (Dan's £94,012 inside it: R15) + onerous castings supply contract £400,000 + outplacement and retraining £200,000; paid by 31 December GY3 £1,300,000; provided £500,000 (redundancy pay £200,000 paid March GY4; onerous contract £200,000; outplacement £100,000); all deductible in the 9-month AP; no asset write-down. Dan's £10,000 pension contribution paid **30 September GY3**. Dan's package deductible **£97,812** (statutory £9,012; holiday £3,800; PENP £25,000; ex gratia £60,000 including the £10,000 pension contribution); s 79 fallback cap £27,036. (Ch 5, 7)
- **Calder 9-month AP:** QIP divisor 10; very large threshold £1,500,000; instalments 14 June, 14 September, 14 December GY3; WDA 10.5%; AIA cap £750,000 (AIA year to 31 March GY4); MR limits £3,750 / £18,750. (Ch 3, 7, 8; R11)
- **Calder plant sold to TVS (1 October), DV £1.4m:** FE machines £900,000 → s 59A charge £900,000; long-life heavy test bed (50% FYA) £200,000 → s 59B charge £100,000 and £100,000 off the special rate pool; older main-pool plant £300,000 → main pool deduction. Special balancing charges **£1,000,000** (CT £250,000). (Ch 8)
- **Calder IFA sale (1 October):** CT on the £6.0m credit **£1.5m**; no reinvestment relief claimed (Tom finds nothing worth claiming). Credit stays in CIR tax-EBITDA (R4). (Ch 11)
- **CCO incident:** a self-employed, commission-paid **Marrovian sales agent** of TEL offered to split an invoice so part of the price was paid offshore; the **customer refused and reported it** via TEL's whistleblowing line; agent dismissed; other Marrovian agents reviewed; legal advice on reporting (outcome open). (Ch 4)
- **Promoter scheme:** fee a percentage of the tax saved; confidentiality agreement demanded; proposal: TEL pays BSL a large upfront fee for future development work and BSL restarts a small external sales channel; Tom's board paper; board declines in one meeting; written refusal sent (two locks: Ch 2 already triggered; Part 14B Conditions A–D). (Ch 4, 14)
- SAO: Calder's first certificate (FY to 31 March GY3) due 31 December GY3. (Ch 4)
- Calder's GY3 return: filing date 31 December GY4; enquiry window to 31 December GY5; discovery limits 31 December GY7 / GY9 / GY23. (Ch 3)
- **CIR GY3 composition (R5):** TES £14.8m = £14,148,800 + net gains £651,200; TEL's reallocated £0.5m gain and £0.5m capital loss net to nil; no unused interest allowance. (R5)

### GY4
- SAO certificates due 30 September GY4: Calder's 9-month FY; Brackenwell's GY3. (Ch 4)
- **Patent Box:** Calder's saving **£135,000** a year (CT £225,000 without the box v £90,000); implied TVS Ashlar valve sales about **£20m** a year (royalty £1.2m at 6%; reading edition only). (Ch 11)
- **Helmside:** own £5m deductions allowance (not in a 75% group); c/f losses £1.2m fully relieved; TTP before consortium relief £1.3m. (Ch 14)

### GY5 onward
- GY5: TCM's £1,275,000 apportionment enters TPLC's s 105(3A) threshold (R3). Helmside countersigns the deductions allowance nomination on 1 March GY5 (R9).
- GY6: TAL patents: had s 782A not applied, a £2.8m degrouping credit (CT £700,000) would have arisen (labelled counterfactual, **not story**); TAL keeps WDV £1.2m. (Ch 11)
- GY7: Brackenwell's Ch 2C bar ends 31 December GY7. (Ch 14)

### Not story facts (labelled hypotheticals a later writer might mistake)
- Ch 2: 5.5% arm's length rate illustration. Ch 7: TEL £1.0m EBT contribution; pension spreading £1.0m/£2.6m; £200,000 QCD (now TTP £8.705m, CT £2,176,250); LFL £500,000/£120,000; stand-alone £150,000 company. Ch 8: £500,000 split machine; £300,000 furnace; £40,000 car. Ch 12: £2.4m exchange gain; £10m deemed release; TEL copper futures £400,000 gain. Ch 13: activist takeover of TPLC; capital-test cases. Ch 14: BSL GY4 £4.0m profit; Part 7ZA £14m/£20m example.
