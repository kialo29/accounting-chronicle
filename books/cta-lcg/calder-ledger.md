# Calder ledger: canonical running-case facts for *The Living Law: Groups and Borders* (all invented)

*Canonical as of 9 October 2026 (planning stage). Every chapter writer must use these facts. If a lesson needs a different number, say so in the script ("for this example, suppose...") and keep it out of the story. New story facts a chapter fixes go into its notes' bible update and, at the next consolidation, into the section "Facts fixed by chapters" at the end of this file. Continuity rulings (to be created as `continuity-rulings.md` after the first batch) override this ledger where they conflict. All numbers below were re-computed in Python (96 checks, 0 failures; script `ledger-check.py` in this folder).*

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

**Associated companies (divisor = count):** GY1 **9**; GY2 **10**; GY3 **10**; GY4 **10**; GY5 **11**; GY6 **11**; GY7 **10**; Ridgeway year **11** (RH passive) or 12. Thresholds: GY1 large **£166,667**, very large **£2,222,222**; GY2–GY4 large **£150,000**, very large **£2,000,000**; GY5–GY6 large **£136,364**, very large **£1,818,182**; Ridgeway year (divisor 11) large **£136,364**, very large **£1,818,182**, first-year test **£909,091**. **Flag:** whether the £20m threshold is divided by associates, and the first-year rule, must be verified (SI 1998/3175; CTM92520) before use.

## 4. People (invented)

| Person | Facts |
|---|---|
| Nadia Kerr | TPLC's CFO; SAO for every UK group company |
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
- **TPLC RCF (bank):** **£30m** drawn 1 April GY1 (Calder); **£24m** more drawn 1 July GY2 (Brackenwell); reduced to **£20m** throughout GY3; interest 6%; arrangement fee **£0.3m** (amortised: **£0.25m** in GY1 and GY2, **£0.1m** in GY3; writer may set the method but must keep these amounts).
- **TCM:** lends **£60m** to TVS at 6% (pre-story onwards; £3.6m a year) and **£30m** to TIL at 6% from 1 January GY5 (£1.8m a year); expenses £0.3m a year.
- **TPLC → TIL:** **£20m** interest-free loan (pre-story).
- **TFL → BSL:** £8m from 1 July GY2 (UK-to-UK; within s 164A).
- Swaps and derivatives: TFL interest rate swap designated as a fair value hedge of the notes; TEL copper futures with a reg 6A election made pre-story.

## 7. Events by Group Year (canonical numbers)

### GY1
- **1 January:** Helmside formed (share capital £20m: TPLC £9m, Greyfell £8m, Northlight £3m).
- **1 April: Calder acquired** for **£32.0m** cash (RCF £30m + £2m cash). Stamp duty **£160,000** (TPLC). Deal costs in TPLC: **£0.3m** pre-decision strategic review (management expense) and **£0.9m** post-decision (capital; not deductible) [writer verifies the *Centrica* boundary on the facts]. Calder's associates: 8 (divisor 9).
- **Acquisitions by TIL and TES in GY1:** TIL buys a UK warehouse (let to an unconnected logistics company) for **£3.0m** and **8%** of an unconnected Irish valve distributor for **£0.9m**; TES buys a freehold warehouse for **£1.5m** (granted on a 30-year lease in GY4) and the water-systems factory for **£4.6m** (transferred to TWS in GY3). TPLC's 12% of Coldwater Instruments plc is held from before the story or bought early (after December 2017; writer of chapter 18 fixes dates and costs).
- **Calder AP 1 April GY1–31 March GY2:** adjusted trading profit before RDEC **£2.6m**; Project Ashlar qualifying expenditure **£2.0m** (includes Dan's £72,000 and 65% × £400,000 = **£260,000** subcontract to Brackenwell, then unconnected); **RDEC £400,000** (taxable); **TTP £3.0m**; CT **£750,000**; step 1 set-off leaves **£350,000** payable; **very large** (augmented profits £3.0m > £2,222,222): instalments in months 3, 6, 9, 12 [threshold flag]; first R&D claim: claim notification within 6 months of 31 March GY2. Annual tax-EBITDA **£4.4m**; CAs **£1.8m**; R&D allowance on a **£0.5m** test rig (100%) [within the £1.8m? writer decides and records]. Deferred tax at 31 March GY2 (FRS 101 basis from 1 April GY2 does not affect this year): qualifying NBV **£14.0m**, TWDV **£8.4m**: DTL **£1.4m**; short-term differences (LTIP accrual £0.6m; pension accrual £0.2m): DTA **£0.2m**; opening (31 March GY1) DTL £1.1m, DTA £0.1m: **deferred tax charge £0.2m**.
- **TPLC:** management expenses **£8.0m** (after excluding the £0.9m capital deal costs); recharge to TVS: cost **£2.0m**, charged **£1.6m**, TP adjustment to cost + 5% = **£2.1m** (+**£0.5m**; CT £125,000); interest to TFL £7.2m; RCF £1.35m + fee £0.25m = **£1.6m**; CIR disallowance **£2.21m** allocated to TPLC's non-trading LR debits; excess management expenses **£5.9m** (8.0 − 2.1) and NTLR deficit **£6.59m** (8.8 − 2.21) surrendered to TEL.
- **TEL:** tax-EBITDA **£50.0m**; CAs **£14.0m**; trading LR debit **£12.0m**; TTP before reliefs **£24.0m**; group relief from TPLC **£12.49m**; consortium relief from Helmside **£1.8m** (link company route); **TTP £9.71m; CT £2,427,500**.
- **Helmside:** loss **£4.0m**: TEL (via TPLC as link company) **£1.8m**; Greyfell **£1.6m**; **£0.6m** stays in Helmside.
- **TCM CFC charge on TPLC:** profit £3.3m; chargeable (25% after the Ch 9 75% exemption) £825,000; creditable tax £74,250; charge **£132,000** (same each year GY1–GY4).
- **CIR (worldwide period GY1):** aggregate tax-EBITDA **£74.8m** (TEL 50.0; TWS 12.0; TES 13.0; Calder 3.3 (9/12 × 4.4); TIL 3.0; TFL −0.6; TPLC −5.9); ANTIE **£24.65m** (TFL 30.25 − 7.2 TVS interest; TPLC 1.6); ANGIE **£31.85m**; group-EBITDA £170m; fixed ratio 30% = **£22.44m**; group ratio 18.74% × 74.8 = £14.01m (lower); **disallowed £2.21m**. TPLC appointed reporting company (more than half of eligible companies); full IRR.
- Other company TTPs GY1 (before group relief): TWS **£7.1m** (12.0 − CAs 2.5 − interest 2.4); TES **£8.4m** (13.0 − 0.4 − 4.2); TIL **£2.7m** (3.0 − 0.3); TFL **£2.15m**.
- **Dan** joins Project Ashlar.

### GY2
- **TIL** buys an Irish distributor's business, including its customer list, for **£3.0m** (relevant asset acquired with a business that has no qualifying IP: **no debits**, s 879I; tax value £3.0m).
- **1 April:** Calder adopts FRS 101: change of basis, revenue adjustment **+£0.4m** taxed on 1 April GY2 (no spreading) [verify classification].
- **1 May:** Brackenwell SPA signed (conditional). **1 July: Brackenwell acquired**: **£22.2m** for shares (stamp duty **£111,000**) + **£1.8m** for its **£3.0m** convertible notes (bought from the venture investors). TPLC **releases the notes within 60 days** (by 29 August GY2); board minutes record a material risk that BSL could not pay its debts within 12 months: **corporate rescue exception** (s 361D): no deemed release credit (which would have been **£1.2m**); TPLC no debit (s 354).
- **Brackenwell before acquisition (year to 31 December GY1, standalone SME, 45 staff):** relevant R&D £3.5m / total relevant expenditure £5.0m = **70%**; qualifying expenditure **£3.5m**; extra deduction **£3.01m**; trading loss **£4.2m** → **£7.21m**; surrenderable loss **£6.51m** (186% × £3.5m: **verify the cap**); payable credit **£943,950**; loss c/f **£0.7m**. Earlier losses brought forward **£5.3m**. Two late CT returns in its history (pre-story). Pre-entry capital loss **£0.4m** (shares in a failed spin-out). Licence of a sensor patent from a Vallarian university: royalty **£50,000** a year (s 906/s 911: treaty rate 5% applied on reasonable belief).
- **Brackenwell GY2 (year to 31 December):** large (linked to Tarnmoor) [verify SME loss timing]; merged RDEC on qualifying **£3.0m** = **£600,000**; notional tax at 19% leaves **£486,000** (PAYE cap to check); surrendered to TEL with a payment ignored by FA 2026 s 31. Trading loss after RDEC **£5.2m**, time-apportioned: pre-acquisition **£2.6m** (1 January–30 June), post-acquisition **£2.6m** surrendered to TEL. **Pre-change losses £8.6m** (5.3 + 0.7 + 2.6): restricted (major change: BSL becomes a captive supplier to Calder and TEL; Ch 2A) and barred from Part 5A surrender for 5 years (Ch 2C); valued at nil in the price; unrecognised deferred tax asset.
- **Calder AP 1 April GY2–31 March GY3:** annual tax-EBITDA **£4.8m**. **Vallarian installation project** (a refinery contract) from **August GY2**: the PE's loss in this AP **£0.3m** (relieved in the UK).
- **TEL GY2:** tax-adjusted trading profit before CAs **£42.0m** (after the £12.0m trading LR debit); CAs **£16.0m** (below); trading profits **£26.0m**; group relief: TPLC excess ME **£6.3m** + NTLR deficit **£7.67m** + BSL **£2.6m**; consortium **£1.35m**; total **£17.92m**; **TTP £8.08m; CT £2,020,000**. **UTT:** £24m ERP implementation costs deducted as revenue with a provision: advantage **£6m** > £5m: notification.
- **TEL GY2 capital allowances (total £16.0000m):** full expensing **£9.0m**; 50% FYA on **£1.2m** special rate plant = **£0.6m** (balance £0.6m to special rate pool); 40% FYA on **£0.8m** test rigs leased to customers = **£0.32m** (balance £0.48m to main pool); main pool b/f **£39.5m** + £0.48m + £0.5m second-hand plant − £0.3m disposal (old, non-FE plant) = **£40.18m**, WDA 14% **£5.6252m** (c/f £34.5548m); special rate pool b/f **£6.0m** + £0.6m = £6.6m, WDA 6% **£0.396m** (c/f £6.204m); SBA on a **£1.96m** factory extension **£0.0588m**. The group AIA is allocated to Calder and TES.
- **TPLC GY2:** management expenses **£8.5m**; recharge income (arm's length) **£2.2m**; interest to TFL £7.2m; RCF £2.52m + fee £0.25m = **£2.77m**; CIR disallowance **£2.30m** allocated to TPLC; surrenders excess ME **£6.3m** and NTLR deficit **£7.67m** to TEL.
- **Helmside:** loss **£3.0m**: TEL **£1.35m**; Greyfell £1.2m; £0.45m stays.
- **TES:** buys an office building with a **s 198 election** fixing fixtures at **£0.4m**; overpays QIPs and **surrenders the refund to TEL** (s 963).
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
- **CIR GY3:** tax-EBITDA **£87.7m** (TEL 58.0; TWS 13.0; TES 14.8 including the whole £0.8m chargeable gain, shown in TES's figure for simplicity although £0.5m is reallocated to TEL; **verify** how s 407 treats chargeable gains and allowable capital losses (law sheet 1 says capital losses are excluded under condition B) and adjust the split, not the story events, if needed; Calder 8.6; TIL 3.4; TFL −0.6; TPLC −6.0; BSL −3.5); ANTIE **£24.35m** (RCF £20m × 6% = £1.2m + fee £0.1m); ANGIE **£31.55m**; group-EBITDA £196m; 30% = **£26.31m**; no disallowance; **reactivation £1.96m**; disallowances c/f **£2.55m** [verify whether unused allowance also arises].

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
- **CFC review:** TCM profit **£5.1m** (interest £5.4m − £0.3m); chargeable £1,275,000; creditable tax £114,750; **charge £204,000**; TVS exempt (tax exemption: 20% = 80%); TIL: tax exemption fails (12.5% = 50%; QDMTT point unverified); gateway: no chargeable profits (Ch 4 Condition B; deposit interest **£60,000** under the 5% rule).
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
- RC: UK trade profit about **£400,000**; Dublin branch profit about **£200,000**; Irish tax **£25,000**; pre-election UK CT **£125,000** (25% × £600,000 − £25,000). RC's associates 10 (divisor 11): large threshold **£136,364**; very large **£1,818,182**; first-year test **£909,091**: no QIPs in RC's first group AP (not large in the previous AP; profits £600,000) [verify]. TP now applies (not an SME). SAO, tax strategy, UTT, CIR, Pillar Two coverage extended.
- **Dublin branch:** recommendation **elect under s 18A** from RC's next AP; six-year look-back nets Years 1–2 losses (£110,000) against Years 3–4 profits (£320,000): no opening negative amount [verify ss 18J–18N]; annual saving about **£25,000**. Alternatives: s 140 incorporation into a new Irish subsidiary of RC (then a CFC); transfer to TIL fails s 140 (RC would hold under 25%).
- Consolidated fair value uplift on RC's brand and customer relationships **£0.8m**: DTL **£200,000** (group accounts only).
- Jess: MD for two years, £90,000 a year; retention bonus £60,000 payable 24 months after completion.
- Dan: working elsewhere; one line.

## 8. Facts fixed by chapters (to be filled in at each consolidation)

*(empty at planning stage)*
