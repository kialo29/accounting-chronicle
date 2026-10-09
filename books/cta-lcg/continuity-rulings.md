# Continuity rulings after batch 1 (prologue, chapters 1–14) and batches 2–3 (chapters 15–30)

*Issued 9 October 2026 by the continuity editor. These rulings override `calder-ledger.md`, `book-plan.md` (including §6.6 and the chapter briefs) and `book-bible.md` where they conflict. The ledger has been amended to match (entries marked "(amended by Rn)"), and `ledger-check.py` has been extended (0 failures). All numbers were recomputed in Python (scratch `continuity/calc.py`).*

**Verification route.** WebFetch is unavailable; 17 WebSearch calls (standard mode) were used, aimed at legislation.gov.uk and GOV.UK manual extracts. Status labels: **V-statute** = statutory text seen in a search extract; **V-HMRC** = HMRC manual text seen in an extract (teach as "HMRC's view" or "HMRC's guidance says"); **book's reading** = reasoned from sources, not confirmed: teach with a label.

**How fixers use this file.** "Fix needed in" names each file and the change. "Both editions" means the script (`.txt`, numbers in words, no digits) and the reading edition (`-reading.md`). Update the chapter's notes file too: add a line under "Contradictions" saying "Resolved by continuity ruling Rn". Re-run `python3 ledger-check.py` after editing.

---

## R1. Instalment (QIP) thresholds: who counts, and when

**Issue.** The ledger and plan treated Calder as very large in its first group AP (divisor 9 at once), and gave single "divisors" per Group Year that are really marginal relief counts. Chapter 3 found that HMRC counts associated companies for QIPs before the AP begins. Chapter 1 used the ledger position. The plan's brief also said "51% group companies" for QIPs.

**Ruling.**
1. QIP thresholds (£1.5m large, £20m very large, £10m first-year limit) are divided by 1 + the number of **associated companies** (control test), not related 51% group companies, for APs beginning on or after 1 April 2023.
2. For QIPs, associates are **counted as at the day before the AP begins** (or on its first day if the previous day fell in no AP). For the small profits rate and marginal relief, a company counts if associated **at any time** in the AP. Teach both timings.
3. Very large companies get no first-year grace; large companies get it only if profits are within £10m (divided) and they were not large in the previous 12 months.

**Canonical consequences.**

| Company / AP | QIP count date | QIP divisor | Large £ | Very large £ | MR divisor (unchanged) |
|---|---|---|---|---|---|
| 31 Dec companies, GY1 | 31 Dec before GY1 (TPLC, TEL, TES, TFL, TWS, TVS, TCM, TIL) | **8** | 187,500 | 2,500,000 | 9 |
| 31 Dec companies, GY2 | 31 Dec GY1 (+ Calder) | **9** | 166,667 | 2,222,222 | 10 |
| 31 Dec companies, GY3, GY4 | 31 Dec GY2 / GY3 (+ BSL) | **10** | 150,000 | 2,000,000 | 10 |
| 31 Dec companies, GY5 | 31 Dec GY4 (Helmside not yet; TWS still in) | **10** | 150,000 | 2,000,000 | 11 |
| 31 Dec companies, GY6 | 31 Dec GY5 (HEL in, TWS out) | **10** | 150,000 | 2,000,000 | 11 |
| 31 Dec companies, GY7 | end of 31 Dec GY6 (TAL sold that day; COM95001 counts those "existing at the end of the immediately preceding AP") | **10** | 150,000 | 2,000,000 | 10 |
| Calder, AP 1 Apr GY1–31 Mar GY2 | 31 Mar GY1 (Oldroyds; no other companies) | **1** | 1,500,000 | 20,000,000 | 9 |
| Calder, AP 1 Apr GY2–31 Mar GY3 | 31 Mar GY2 | **9** | 166,667 | 2,222,222 | 10 |
| Calder, 9-month AP to 31 Dec GY3 | 31 Mar GY3 | **10** | 112,500 | 1,500,000 | 10 |
| TAL, first AP from 1 Feb GY6 | 1 Feb GY6 (first day: no previous AP) | **11** | 136,364 | 1,818,182 | 11 |
| RC, first group AP (Ridgeway year) | 31 Mar (Jess's group; RH passive, ignored) | **1** | 1,500,000 | 20,000,000 | 11 |

Dormant Tarnmoor Pumps never counts. Calder's first group AP: augmented profits £3.0m > £1.5m: **large, not very large**; large before (TKS), so no grace; instalments **14 October GY1, 14 January, 14 April, 14 July GY2**, each **£187,500** (see R2). Calder is very large from its AP beginning 1 April GY2: instalments 14 June, 14 September, 14 December GY2, 14 March GY3 (chapter 5's £25,000 increases fall on these dates: consistent). Nine-month AP: three instalments, 14 June, 14 September, 14 December GY3. Six Calder instalments fall in calendar GY2.

**Authority.** CTM92530 (counting "as at the day before the start of the accounting period"; £10m limit divided by associated companies for periods beginning after 31 March 2023) and COM95001 ("usually the number existing at the end of the immediately preceding AP"): https://www.gov.uk/hmrc-internal-manuals/company-taxation-manual/ctm92530 , https://www.gov.uk/hmrc-internal-manuals/cotax-manual/com95001 ; CTM92520 and CTM92800 (very large; no grace) **V-HMRC**. The amended text of SI 1998/3175 reg 3 was **not** found (search returned only the 1998, 2000, 2014 and 2017 SIs): teach the counting date as "HMRC's manuals say". Marginal relief timing: CTA 2010 Part 3A (bible §3.2, V).

**Fix needed in.**
- `01-one-company-or-many` both editions: the GY1 threshold passage (script "Now the instalment rung..." and "Watch what that does to Calder..."; reading "QIP thresholds for each Tarnmoor company in GY1 (divisor 9)" and the "Calder before and after" table; "What to take away" sentence "a divisor of 9, a very large threshold of £2,222,222, and Calder turned from large to very large overnight"; key figures row "Tarnmoor GY1 | ... divisor 9; large £166,667; very large £2,222,222"). Replace with: marginal relief divisor 9 at once (limits £5,556 / £27,778); QIP divisor for the 31 December companies 8 in GY1 (£187,500 / £2,500,000), because HMRC's manual counts associates on the day before the AP begins; Calder's first group AP divisor 1: still **large**, months 7, 10, 13, 16, four instalments of £187,500; very large (divisor 9, £2,222,222) from its next AP, "one period later". In the "Calder before and after" table set: associated companies for QIPs 0 (divisor 1) / for marginal relief 8 (divisor 9); thresholds £1,500,000 and £20,000,000; status **Large**; instalments months 7, 10, 13, 16: 4 × £187,500. Threshold-map bullet: "when Tarnmoor buys Brackenwell on 1 July GY2, the marginal relief count rises to 10 at once; the QIP thresholds fall to £2,000,000 / £150,000 from GY3"; replace "the count is 11 in GY5 and GY6 and 10 in GY7" with "the marginal relief count is 11 in GY5 and GY6 and 10 in GY7; the QIP count stays at 10". Keep the "51% vs associated" note. Notes `01-notes.md`: mark flag 1 resolved by R1.
- `03-returns-payments-enquiries` reading: delete the paragraph beginning "The plan for this book had assumed..." (production note); in the paragraph after the divisor table replace "the ledger's divisors apply" with "the divisors are". Otherwise chapter 3 is the model: no change.
- `10-research-and-development` reading, Worked example (line beginning "Net benefit to the group: £400,000 − ..."): replace "Calder is very large in this AP (augmented profits £3.0m > £20m ÷ 9 = £2,222,222: chapter 3), so it pays by instalments in months 3, 6, 9 and 12" with "Calder is large, not very large, in this AP (its associates are counted on 31 March GY1, when it had none: chapter 3), so it pays four instalments of £187,500 in months 7, 10, 13 and 16; the credit does not reduce them (CIRD89870)". Script: check for any equivalent sentence and align. Notes `10-notes.md` flag 18: resolved by R1.

**Guidance for later chapters.** Always state which count you use (QIP: day before the AP; marginal relief: any time in the AP). Chapter 20 (buying companies): use Calder as the example of "very large one period later". Chapter 31: RC's first group AP has QIP divisor 1 (RH is a passive holding company; RC had no other associates on 31 March); on £600,000 of profits RC is not large anyway (no instalments); for marginal relief its divisor is 11 (irrelevant: profits above the upper limit). TAL (chapter 19/20): QIP divisor 11 for its only AP. Helmside: QIP divisor 1 for GY5 (not controlled by anyone on 31 Dec GY4), 10 from GY6.

---

## R2. The RDEC does not reduce instalments

**Issue.** Plan and ledger computed Calder's instalments on the net £350,000.

**Ruling.** On HMRC's guidance the expenditure credit is not taken into account in computing QIPs; it is claimed in the return and can then discharge later liabilities, including later QIPs. Calder's QIPs for AP 1 April GY1–31 March GY2 are on CT of **£750,000** (4 × **£187,500**); the £400,000 credit is recovered when the return is filed (early, in summer GY2) and goes towards the next AP's instalments. Net CT for the AP stays **£350,000**. By the same reasoning, TEL's GY2 instalments are computed on its full liability (R3: £2,226,250); the £600,000 of credit surrendered by Brackenwell (R7) discharges the liability once claimed.

**Authority.** CIRD89870: https://www.gov.uk/hmrc-internal-manuals/corporate-intangibles-research-and-development-manual/cird89870 (**V-HMRC**, via chapter 3's search extract). Applying it to a credit *surrendered to* TEL is the **book's reading**.

**Fix needed in.** Chapters 1 and 10 as in R1. Chapter 3: none. Chapter 7: none beyond R3. Chapter 10: when describing TEL's use of the £600,000, add "the surrendered credit discharges TEL's liability when Brackenwell's claim is made; TEL's instalments are still based on its full liability".

**Guidance.** Chapters 15, 20, 31: never net an RDEC off an instalment computation.

---

## R3. Surrender of TPLC's management expenses: the profit-related threshold (s 105(3A))

**Issue.** The ledger has TPLC surrendering its whole excess of management expenses over gross profits (£5.9m GY1, £6.3m GY2). Chapter 13 verified that the surrender is limited to the excess over the **profit-related threshold**: gross profits **plus CFC chargeable profits apportioned to the company**. TPLC is apportioned TCM's chargeable profits of **£825,000** in every year GY1–GY4 (CFC charge £132,000 a year, ledger), and **£1,275,000** in GY5.

**Ruling.** The statute applies. Current-year group relief of TPLC's excess management expenses (and of any QCDs, property losses and non-trading intangibles losses) is capped at the excess over gross profits + apportioned CFC profits. NTLR deficits are not capped (s 99(1)(c) is outside s 105). The relief s 371UD once gave against a CFC charge was repealed by F(No.2)A 2015, so the £825,000 each year is carried forward under CTA 2009 s 1223.

| £ | GY1 | GY2 |
|---|---|---|
| TPLC management expenses | 8,000,000 | 8,500,000 |
| Recharge income (gross profits; non-trading, s 979) | 2,100,000 | 2,200,000 |
| CFC chargeable profits apportioned (TCM) | 825,000 | 825,000 |
| Profit-related threshold | 2,925,000 | 3,025,000 |
| **Maximum ME surrender** | **5,075,000** | **5,475,000** |
| ME carried forward (s 1223) | 825,000 | 825,000 |
| NTLR deficit surrendered (unchanged) | 6,590,000 | 7,670,000 |
| Total surrendered by TPLC to TEL | **11,665,000** | **13,145,000** |

**TEL (amended).**

| £ | GY1 | GY2 |
|---|---|---|
| TTP before reliefs | 24,000,000 | 26,000,000 |
| Group relief: TPLC ME | (5,075,000) | (5,475,000) |
| Group relief: TPLC NTLR deficit | (6,590,000) | (7,670,000) |
| Group relief: BSL post-acquisition loss | — | (2,600,000) |
| Consortium relief: Helmside | (1,800,000) | (1,350,000) |
| Total group and consortium relief | (13,465,000) | (17,095,000) |
| **TTP** | **10,535,000** | **8,905,000** |
| **CT at 25%** | **2,633,750** | **2,226,250** |

TEL GY2: very large; instalments due 4 × **£556,562.50** (14 March, June, September, December GY2). Chapter 3's surrender story keeps its £400,000 shortfall: TEL paid 4 × **£456,562.50** = **£1,826,250** on an early forecast against a liability of **£2,226,250**; TES surrenders £400,000; all chapter 3 interest figures (£142,343.75 / £100,000 per date; repaid £169,375; saving £13,291) are unchanged. After Brackenwell's £600,000 credit (R7), TEL's net GY2 cash tax is **£1,626,250**.

**Carried-forward ME is stranded.** On the book's reading of CTA 2010 s 188BE (HMRC: a company may not surrender carried-forward losses under Part 5A if it could deduct them from its own total profits), TPLC, whose recharge income each year can absorb carried-forward expenses, cannot route the £825,000 to TEL as group relief for carried-forward losses; using it against its own income only displaces current expenses that the s 105 cap then traps. Treat TPLC's carried-forward management expenses as **stranded**: cumulative **£825,000** (end GY1), **£1,650,000** (GY2), **£2,475,000** (GY3), **£3,300,000** (GY4), then **+£1,275,000** in GY5 if TPLC's excess still exceeds the threshold. No deferred tax asset is recognised on them.

**Group ETR (chapter 6).** Add a reconciling line for GY2: "TPLC management expenses carried forward (CFC threshold), no DTA recognised: 825 × 25% = **206** (0.21%)". Total tax charge **£24,385k** (exact £24,385,250); ETR **24.39%** (was £24,179k; 24.18%).

Not affected: CIR tax-EBITDA (TPLC −£5.9m GY1, −£6.3m GY2: current-year expenses count; carried-forward amounts are excluded); TPLC's NTLR deficits; the CFC charge itself; Helmside.

**Authority.** CTA 2010 s 105(3)–(3A) (legislation.gov.uk extract: threshold = gross profits + CFC chargeable profits apportioned under TIOPA s 371BC step 3 where the CFC's AP ends in the surrender period): https://legislation.gov.uk/ukpga/2010/4/section/105 **V-statute**; CTM80142 **V-HMRC**; PwC "potential pitfall for companies with corporate losses and CFC apportionments" (s 371UD repealed F(No.2)A 2015). s 188BE: CTM82030 extract https://gov.uk/hmrc-internal-manuals/company-taxation-manual/ctm82030 **V-HMRC (extract)**; its application to TPLC is the **book's reading**.

**Fix needed in.**
- `01-one-company-or-many` both editions: TEL GY1 CT "£2,427,500 (TTP £9.71m × 25%)" → **£2,633,750 (TTP £10.535m × 25%)**; script "about two point four three million pounds" → "about two point six three million pounds".
- `03-returns-payments-enquiries` both editions: TEL final CT GY2 **£2,226,250** (was £2,020,000); instalments paid 4 × **£456,562.50** = **£1,826,250** (was 4 × £405,000 = £1,620,000); shortfall £400,000 and everything after it unchanged. Script: "Its liability came in at two million, two hundred and twenty six thousand, two hundred and fifty pounds, and its instalments had totalled one million, eight hundred and twenty six thousand, two hundred and fifty. It was four hundred thousand pounds short."
- `06-deferred-tax` both editions: add the reconciling line above; total 24,385; ETR 24.39% (script: "about twenty four point three nine per cent"); update the "What to take away" and key figures rows (24.18% → 24.39%). Optional one sentence: "TPLC's surplus management expenses that the CFC threshold traps carry forward with no asset recognised".
- `07-large-company-computation` both editions: TPLC's surrender in the recharge section: "Only the excess, six point three million pounds" → "Only the excess over its profit-related threshold, which adds the eight hundred and twenty five thousand pounds of Marrovian C F C profits apportioned to it, can be surrendered: five point four seven five million pounds" (declare/space C F C if used; or say "controlled foreign company profits"). TEL computation: group relief **£17.095m** (TPLC ME £5.475m + NTLR £7.67m + BSL £2.6m + Helmside £1.35m); **TTP £8.905m; CT £2,226,250**; QIPs 4 × **£556,562.50**; analyst table: −17.095 / −4.27375; TTP 8.905 / CT 2.22625; "CT is about 8.6% of profit before tax" → "about 9.5%". QCD hypothetical: TTP £26.0m − £0.2m − £17.095m = **£8.705m**, CT **£2,176,250**, saving £50,000 (unchanged). Key figures row and "What to take away" (script line "seventeen point nine two ... eight point oh eight ... two point oh two") updated. Change source cells "ledger" (R16).
- `10-research-and-development` both editions: TEL's GY2 CT "£2,020,000" / "two million and twenty thousand pounds" → **£2,226,250** / "two million, two hundred and twenty six thousand, two hundred and fifty pounds" (three places in the reading edition: lines ~178, ~194, any summary row).
- `13-investment-companies` both editions: keep the s 105(3A) teaching and numbers; delete the "Contradiction flag (for the continuity pass)" paragraph and the table row "Excess over gross profits only (the ledger's figure)" (relabel "Excess over gross profits"); state TEL's resulting TTP (GY1 £10,535,000; GY2 £8,905,000) if a sentence wants it; replace "available for later Part 5A surrender" (if present) with the stranded position above and the cumulative carry-forward.
- `14-losses` both editions: Worked example 14.3: "Excess management expenses 5,900" → split: "Excess over gross profits 5,900; less CFC apportionment in the profit-related threshold (825); **surrenderable 5,075**; carried forward 825"; total surrendered **11,665** (was 12,490); prose "£12.49m" → **£11.665m** ("eleven point six six five million pounds"); bullet "only to the extent they exceed TPLC's gross profits (CTA 2010 s 105)" → "only to the extent they exceed TPLC's profit-related threshold, gross profits plus apportioned CFC profits (CTA 2010 s 105(3A))"; key figures row updated.
- Notes 07, 13, 14: record R3.

**Guidance for later chapters.** Chapter 15: teach s 105(3A) with TPLC; GY3 and GY4 surrenders must apply the cap (TPLC's excess over recharge income less £825,000); Helmside GY4 consortium surrender of £585,000 is within the cap (*amended by R21: the amount claimed is £536,250, because s 155 arrangements break the consortium from 1 December GY4*); do not use Part 5A for TPLC's stranded expenses. Chapter 26: the CFC charge and the threshold are the pair to teach (s 371UD gone). Chapter 28: TPLC tax-EBITDA unchanged. Chapter 30: no effect on GloBE figures. Any GY5 TPLC surrender uses a threshold including £1,275,000.

---

## R4. CIR tax-EBITDA and Calder's £6.0m intangibles realisation credit

*Amended by R20 (second pass): the s 408 analysis stands, but the GY3 numbers below are superseded. As filed: ANTIE £24.44m (TEL's £90,000 lease finance charge is tax-interest), reactivation £1.87m, c/f £2.64m; after the revised return following the GY6 TP settlement: Calder £10.6m, aggregate £89.7m, 30% £26.91m, reactivation £2.47m, c/f £2.04m.*

**Issue.** Chapter 11 relied on CFM95805 ("excluded credits will mainly be gains on disposal") to say Calder's £6.0m credit drops out of tax-EBITDA, cutting GY3 aggregate tax-EBITDA to £81.7m and reactivation to £0.16m.

**Ruling.** The statute governs and the ledger stands. TIOPA 2010 s 408 lists as excluded credits only **s 735 credits, and only "to the extent that the cost of the asset exceeds its tax written-down value"** (the clawback of earlier debits). Credits on assets never written down for tax (s 736, and s 739 for assets not on the balance sheet) are **not** excluded. Calder's know-how and customer contracts had no tax cost and no debits, so the whole **£6.0m stays in tax-EBITDA**: Calder's GY3 contribution **£8.6m**, aggregate **£87.7m**, 30% **£26.31m**, ANTIE £24.35m, **reactivation £1.96m**, disallowances c/f **£2.55m** (unchanged). Teaching point: "amortisation in, amortisation out": a realisation credit is excluded only so far as it reverses excluded debits; a genuine gain over cost raises interest capacity. Present CFM95805's wording as HMRC's summary, which is looser than the statute.

**Authority.** TIOPA 2010 s 408 table (legislation.gov.uk extract): https://www.legislation.gov.uk/ukpga/2010/8/section/408 **V-statute**; CFM95805 https://gov.uk/hmrc-internal-manuals/corporate-finance-manual/cfm95805 (HMRC summary).

**Fix needed in.** `11-intangibles-and-ip` both editions: the CIR paragraph (reading "HMRC's guidance (CFM95805) says it also ignores relevant intangibles debits and credits ... a large realisation credit like Calder's £6.0m raises taxable profits but **not** interest capacity"; script "So a large realisation credit, like Calder's six million pounds, raises taxable profit but, on that guidance, does not...") → tax-EBITDA ignores amortisation, 4% debits and losses on disposal, and realisation credits only so far as they claw back earlier tax debits (the asset's cost less its tax written-down value); Calder's £6.0m on assets with no tax cost and no past debits is a gain over cost, so it raises **both** taxable profit and interest capacity (chapter 28). Key rules row: "relevant intangibles debits and credits excluded" → "intangibles debits excluded; realisation credits excluded only to the extent of cost less TWDV (s 408)". Notes `11-notes.md` flag 1: resolved by R4 (ledger stands).

**Guidance.** Chapter 28: use the ledger's GY3 figures; teach the s 408 rule with Calder. TAL (chapter 19/20): s 782A switch-off means no degrouping credit; nothing to exclude.

---

## R5. CIR: chargeable gains, capital losses and unused allowance in GY3

*Amended by R19 and R20 (second pass): TES's lease assignment gain is £189,000 after indexation, so TES's net gains are £489,000 and its property and other profits £14,311,000 (tax-EBITDA still £14.8m); reactivation and c/f figures as R20; nil unused allowance is now HMRC's view (CFM98240).*

**Issue.** Ledger GY3 put TES's whole £0.8m chargeable gain in its £14.8m tax-EBITDA although £0.5m is reallocated to TEL (s 171A) and matched by TEL's £0.5m capital loss, and flagged whether unused interest allowance arises.

**Ruling.**
1. Net chargeable gains are in tax-EBITDA; capital losses count only when actually set against gains in the period (Condition A), not when unused (Condition B). For GY3: TEL's reallocated £500,000 gain is offset by its £500,000 loss (nil in TEL's £58.0m); TES's own net gains are £300,000 (depot) + **£351,200** (lease assignment, GY3) = **£651,200**. TES's GY3 tax-EBITDA stays **£14.8m**, now composed of property and other profits before interest and allowances **£14,148,800** + net gains £651,200. Aggregate £87.7m unchanged.
2. Reactivation uses the year's spare capacity first: all £1.96m of excess capacity is reactivated, so **no unused interest allowance** is generated in GY3.

**Authority.** CFM95720 extract (capital losses outside the "other periods" exclusion; excluded from Condition B amounts) https://www.gov.uk/hmrc-internal-manuals/corporate-finance-manual/cfm95720 **V-HMRC (extract truncated)**; Tax Adviser magazine summary ("net chargeable gains included; allowable losses taken into account when utilised"). Reactivation: TIOPA s 373 interest reactivation cap = interest allowance − ANTIE; CFM98620 and CFM95250 ("capacity for the year must first be applied to reactivate"): **V-HMRC**; nil unused allowance is the **book's reading** of s 395–396.

**Fix needed in.** None in batch 1 (no batch-1 chapter states TES's GY3 split).

**Guidance.** Chapter 28: show TES's composition as above and the nil unused allowance with a "HMRC's guidance" label. Chapter 16/17: the £351,200 lease gain and the £0.8m/£0.5m s 171A election are GY3 events in TES and TEL; keep them.

---

## R6. TFL's interest rate swap and the Disregard Regulations

**Issue.** Ledger and plan: "designated fair value hedge of the notes (Disregard Regulations apply)". Chapter 12: since 2015 the regulations apply only by election (reg 6A) or in automatic cases; TFL made no election; tax follows the accounts.

**Ruling.** Chapter 12's position is canonical: **TFL has made no reg 6A election; the swap's amounts follow profit or loss** (non-trading). The swap is in a designated fair value hedge of TFL's notes, which are themselves taxed in line with the accounts, so the hedge adjustment on the notes and the swap's fair value movements offset in profit or loss. Teach the automatic cases neutrally: HMRC lists designated fair value hedges, hedges of loan relationships accounted for at fair value, and certain avoidance cases, and says that where the hedged item is taxed in line with the accounts (as TFL's notes are), the derivative simply follows the amounts in profit or loss. TEL's copper futures: reg 6A election (pre-story), unchanged.

**Authority.** HMRC "Overview of Disregard Regulations" and CFM57071/CFM57075 extracts: https://www.gov.uk/government/publications/corporation-tax-hedging-derivative-contracts-and-disregard-regulations/overview-of-disregard-regulations , https://www.gov.uk/hmrc-internal-manuals/corporate-finance-manual/cfm57075 **V-HMRC**. SI 2004/3256 reg 6 as amended: **not seen** (only the 2014 draft).

**Fix needed in.** `12-loan-relationships-and-derivatives` reading: in "TFL's interest rate swap" box, prefix the conclusion with "On HMRC's guidance"; in the key rules line "since 2015 regs 7–9 apply only by election (reg 6A) or automatically where the hedged item is not taxed in line with the accounts" add "or in the other automatic cases HMRC lists". Delete the italic "(This corr..." production aside in that box if it refers to the plan or ledger. Script: no change unless it states the automatic cases as exhaustive.

**Guidance.** Chapter 28 (CIR assumes regs 7–9 apply for tax-interest: CFM98380) may need a sentence on TFL; chapter 29: no hybrid point.

---

## R7. Brackenwell's GY2 expenditure credit: step 2 surrender and the payment

**Issue.** Chapter 10 surrendered both the £114,000 step 2 amount and the £486,000 step 5 amount to TEL (total £600,000), with TEL paying £600,000; the ledger had only £486,000.

**Ruling.** Adopt chapter 10. Brackenwell surrenders **£600,000** to TEL (step 2 amount £114,000 under the step 2 surrender-or-carry-forward rule; step 5 remainder £486,000). TEL pays Brackenwell **£600,000**, ignored for CT because it does not exceed the credit surrendered (FA 2026 s 31; payments on or after 26 November 2025). TEL's GY2 liability is now **£2,226,250** (R3), of which £600,000 is discharged by the credit, leaving **£1,626,250**. Group net benefit £450,000 unchanged.

**Authority.** CIRD112100 (steps; step 2 amount surrender or carry forward) **V-HMRC** (chapter 10); payment disregard: HMRC guidance via search extract ("ignored for Corporation Tax if it does not exceed the credit surrendered"; payments on or after 26 November 2025) **V-HMRC (secondary extract)**. FA 2026 s 31 text not seen: label "HMRC's guidance on the new rule".

**Fix needed in.** `10-research-and-development` both editions: TEL's CT figure per R3. Ledger amended.

**Guidance.** Chapter 15 (group payments for reliefs): TEL's payment for the credit; chapter 3's refund surrender is separate and unaffected.

---

## R8. Brackenwell's restricted losses: Part 14 Chapter 2, not 2A

**Ruling.** Brackenwell's **£8.6m** pre-change losses are restricted under **CTA 2010 Part 14 Ch 2 (s 673; the AP split under s 674)** because the major change is in the nature or conduct of its **trade**; Ch 2A gives way where Ch 2 or Ch 3 can apply (s 676AB). Ch 2C separately bars Part 5A surrender of its pre-acquisition losses to the end of **31 December GY7** (5 years from the end of the AP in which the change occurred).

**Authority.** CTM06775 (priority; cites s 676AB) https://www.gov.uk/hmrc-internal-manuals/company-taxation-manual/ctm06775 **V-HMRC**; s 676AA extract; CTM06815 (Ch 2C) **V-HMRC**.

**Fix needed in.** Ledger only (amended). Chapter 14 already correct; no other batch-1 chapter attributes the restriction to Ch 2A.

**Guidance.** Chapters 15 and 20: say "Part 14 Ch 2"; never "Ch 2A" for Brackenwell.

---

## R9. Group deductions allowance: a standing nomination

**Ruling.** TPLC holds a **standing nomination** from the start of GY1 (signed for every UK group company within the charge; joiners countersign as group practice: Calder 1 April GY1, Brackenwell 1 July GY2, Helmside on 1 March GY5 when it joins the 75% group, RC/RH in the Ridgeway year). The nomination continues until replaced, revoked in writing or TPLC leaves. TPLC files a **group allowance allocation statement for each AP**, by the first anniversary of its filing date. Allocation GY1–GY4: **whole £5m to TEL**. Helmside used its own £5m allowance while outside any group (GY4).

**Authority.** CTM05180, CTM05200 **V-HMRC** (chapter 14).

**Fix needed in.** None (chapter 14 correct). Plan wording "nominate TPLC each year" superseded.

**Guidance.** Chapter 15: allocate GY5 onwards explicitly (Helmside joins the group allowance from 1 March GY5; its AP straddles); chapter 31: RH and RC countersign.

---

## R10. Senior accounting officer: UK incorporation and joiners

**Ruling.** SAO turns on **UK incorporation**; tax residence is irrelevant. TIL (Irish-incorporated, UK resident until 30 June GY4) is outside the SAO aggregation and never a qualifying company. A joiner qualifies for a financial year if it was a group member at the **end of its preceding financial year**: Calder from its FY beginning 1 April GY2 (certificate due 31 December GY3; 9-month FY certificate due 30 September GY4), Brackenwell from GY3, Helmside from GY6, Tarnmoor Pumps every year. `research/exam-intel.md` trap 15 ("include UK-resident companies incorporated abroad") is wrong for SAO and must not be taught for SAO.

**Authority.** SAOG11260, SAOG11240, SAOG11270 **V-HMRC** (chapter 4). SAOG11300 (joining/leaving) not opened.

**Fix needed in.** None (chapters 1 and 4 consistent).

**Guidance.** Chapters 22 and 31: TIL's migration does not change SAO; RC (UK-incorporated) qualifies from its FY beginning the April after the first year-end at which it is in the group (it joins on 1 April, so its preceding FY ends 31 March the day before: RC is **not** a member at that date; first qualifying FY is the one beginning the following 1 April).

---

## R11. The group annual investment allowance: whose "financial year"

**Issue.** Chapter 8 assumed s 51C's "financial year" is the parent's Companies Act year (calendar GY), so it put Calder's year to 31 March GY2 and TES's year to 31 December GY2 in one "GY2 group AIA", and both Calder periods ending in GY3 in one AIA.

**Ruling.** CAA 2001 s 51C has no definition of its own and does not import CA 2006 s 390, so "financial year" has its Interpretation Act meaning: **the 12 months ending with 31 March**. A group shares one £1m AIA for all members' chargeable periods **ending in the same year to 31 March**, with the parent test applied at the end of each subsidiary's chargeable period. Canonical allocations:

| AIA year | Periods sharing it | Allocation |
|---|---|---|
| Year to 31 March GY2 | 31 Dec companies' GY1 periods; Calder AP to 31 March GY2 | **Calder £600,000** (second-hand plant; inside its £1.3m P&M allowances); balance £400,000 not fixed (any use is inside the canonical GY1 totals) |
| Year to 31 March GY3 | 31 Dec companies' GY2 periods; Calder AP to 31 March GY3 | **TES £400,000** (s 198 office fixtures, all integral features: special rate); **Calder £600,000** on **second-hand special rate plant** bought in its AP to 31 March GY3 (new fact); **TEL nil** ("special rate first": AIA displaces 6% WDA on the TES and Calder items but only 14% on TEL's second-hand milling line) |
| Year to 31 March GY4 | 31 Dec companies' GY3 periods; Calder 9-month AP to 31 Dec GY3 (its own cap £750,000) | not fixed |

Calder's pre-acquisition year to 31 March GY1 is outside the group (TPLC not its parent at that date): its own £1m AIA. Calder's two periods ending in calendar GY3 fall in **different** AIA years.

**Authority.** CAA 2001 s 51C (legislation.gov.uk extract: single AIA for chargeable periods ending in the financial year; parent test at the end of the subsidiary's period; "parent undertaking" from CA 2006 s 1162; no link to s 390) **V-statute**; Interpretation Act 1978 Sch 1 ("Financial year" for central taxes: "the twelve months ending with 31st March") **V-statute**. HMRC CA23088 not read in full: the application is the **book's reading**; label it in the text ("read with the Interpretation Act").

**Fix needed in.**
- `08-plant-and-machinery` both editions: "The group rule (s 51C)" paragraph: add that "financial year" means the year to 31 March (Interpretation Act 1978). Bullets: "Calder's year to 31 March GY2 ... shares the GY2 group AIA" → "shares the AIA for the year to 31 March GY2 with the other companies' GY1 periods"; "two periods ending in the same financial year ... both end in GY3" → "Calder's year to 31 March GY3 shares the AIA with the other companies' GY2 periods; its 9-month AP to 31 December GY3 falls in the next AIA year, with their GY3 periods (and is capped at £750,000)". Worked example retitled "the group AIA for the year to 31 March GY3": rows TES (year to 31 Dec GY2) £400,000 "second-hand integral features: special rate, no FYA"; CVE (AP to 31 March GY3) £600,000 "second-hand special rate plant: no FYA"; TEL (year to 31 Dec GY2) nil "its second-hand milling line is main rate (14%); special rate first". Add one line: "Calder's £600,000 of second-hand plant in its AP to 31 March GY2 used the previous AIA year's allowance". Going further "Year-end changes" bullet: rewrite as above. TEL computation note "no AIA (allocated to Calder and TES)" → "no AIA (the group allocated it to special rate spending in TES and Calder)". Script equivalents (paragraphs at "The group rule is the Advanced Technical point" and line "No annual investment allowance, because the group gave it to Calder and Tarnmoor Estates") aligned. Notes `08-notes.md` flag 1: resolved by R11.
- `09-buildings-fixtures-leasing-successions` both editions: make TES's treatment definite: "the group allocates £400,000 of its single annual investment allowance to Tarnmoor Estates, so the whole £400,000 is relieved at once"; table: Addition 400,000; **AIA (400,000)**; c/f nil; show the 6% WDA (£24,000) only as "without the AIA". Reading parenthesis "(chapter 8 allocates the group AIA to Calder and TES in GY2)" → "(chapter 8: the AIA for the year to 31 March GY3)".

**Guidance.** Chapters 16–20 and 31: when a target joins, test the parent relationship at the end of each of its chargeable periods and map those periods to years ending 31 March; RC (31 March year end) shares the AIA with Tarnmoor's 31 December periods ending nine months earlier.

---

## R12. Calder's depreciation (£0.6m) and capital allowances (£1.8m), AP to 31 March GY2

**Ruling.** All numbers stand: CAs **£1.8m** = R&D allowance **£0.5m** (test rig) + P&M **£1.3m** (AIA £0.6m + WDAs £0.7m); qualifying depreciation **£0.6m**; PBT £3.8m; deferred tax as ledger. The low depreciation is explained by Calder's **heavy long-life plant** (useful lives of about 25 years; long-life assets for tax, so in the special rate pool). If a later chapter needs Calder's pools, use these consistent balances: main pool before WDA **£1,925,000** (WDA 14% £269,500; c/f £1,655,500); special rate pool before WDA **£7,175,000** (WDA 6% £430,500; c/f £6,744,500); total WDA £700,000; c/f TWDV **£8,400,000**.

**Authority.** Arithmetic (Python); CAA 2001 ss 90–102 (long-life assets; bible/law sheet 2, V).

**Fix needed in.** `06-deferred-tax` reading (optional): beside "Add: depreciation of qualifying plant 600" add "Calder's heavy plant has long useful lives, so its depreciation is low against its allowances". No other change. Chapter 10: none.

**Guidance.** Chapter 8's special balancing charge on Calder's long-life test bed (GY3) is consistent with a special rate pool.

---

## R13. TPLC's RCF arrangement fees

**Ruling.** Two fees of **£300,000**: fee 1 on the £30m drawing (1 April GY1), amortised **£250,000** (GY1) + **£50,000** (GY2); fee 2 on the £24m drawing (1 July GY2), amortised **£200,000** (GY2) + **£100,000** (GY3). Totals £250,000 / £250,000 / £100,000: all CIR figures unchanged. TPLC non-trading debits: GY1 £8.80m; GY2 **£9.97m**.

**Authority.** Arithmetic; CTA 2009 s 306A (fees as loan relationship debits; law sheet 1, V).

**Fix needed in.** Ledger §6 (amended). Chapters 12 and 13 consistent; no change.

---

## R14. Calder instalment dates: chapters 3 and 5

**Ruling.** No conflict. Chapter 5's four £25,000 increases (tax on the £400,000 change-of-basis receipt) fall on Calder's very large instalments for AP 1 April GY2–31 March GY3: 14 June, 14 September, 14 December GY2 and 14 March GY3, as chapter 3 has them. The receipt is taxed in that AP (it arises on 1 April GY2, the first day of the first period on the new basis).

**Fix needed in.** None.

---

## R15. Dan's redundancy package and Calder's restructuring provision

**Ruling.** Dan's package is **inside** Calder's £1.8m restructuring cost, not on top of it: statutory redundancy £9,012, PENP £25,000 and the ex gratia £60,000 (including the £10,000 paid into his pension on 30 September GY3) sit in the **£1,200,000** "redundancy and notice pay" element; his holiday pay **£3,800** is ordinary pay. Chapter 7's total of **£97,812** deductible in the 9-month AP stands; never add it to the £1.8m (for example in CIR tax-EBITDA).

**Fix needed in.** None required; chapter 7 reading may add "(within the restructuring cost of chapter 5)".

---

## R16. Production notes must not appear in the book

**Issue.** Reading editions cite "ledger", "the ledger's figure", "continuity pass" and "the plan for this book".

**Ruling.** No production references in either edition. Replace "ledger" in source columns with "invented (story)" or the owning chapter; delete process asides.

**Fix needed in (reading editions).** `02` line ~322 (source cell "calder-ledger §6" → "invented (story)"); `03` lines ~122 and ~163 (R1); `06` lines ~131 "(ledger)", ~176 "Ledger (chapter 8)" → "chapter 8", ~179 "Ledger", ~184 "in the ledger", ~414 "ledger; this chapter"; `07` lines ~464–465 source cells; `09` lines ~48 "(ledger)", ~106 "the ledger figure" → "the figure used in this book", ~451; `12` lines ~61 "The ledger's amortisation amounts", ~517, ~519–521 source cells, and the "(This corr..." aside at ~428; `13` lines ~159, ~167 (R3); `14` lines ~158 and ~252 "canonical ledger figures" → "invented", ~466–468 source cells. Search each reading edition with `grep -n -i -E "ledger|continuity|the plan for this book"` and clear every hit except ordinary uses (a company's "cost ledger", "tax ledgers").

---

## R17. Smaller points settled

- **Associated companies vs 51% for QIPs** (plan ch 1 brief; exam-intel N24 Q5 paraphrase): associated companies (R1).
- **TEL's associated-company wording** (chapter 7): "nine associated companies (divisor 10)" in GY2 is the marginal relief count: correct.
- **Recharge income** (bible flag 55): TPLC's recharge to TVS is **non-trading income not otherwise charged (CTA 2009 s 979)**, the book's working assumption; s 105 outcome identical either way (R3).
- **TFL is not a banking company** and **no Tarnmoor company is close** (story assumptions; chapters 2, 12).
- **Calder carries on a single trade**; the GY3 division closure is not a cessation (chapter 14).
- **Calder's claim notification** for AP to 31 March GY2 filed April GY2 (window to 30 September GY2): consistent with R2's early return.
- **TEL's GY3 leased CNC machine** is second-hand (refurbished) so no FYA point arises (chapter 9).
- **Integral features in TEL's new distribution centre** (bought from the developer, GY3): the 50% FYA question is unsettled; the story takes the 6% WDA (£36,000 in GY3) and chapter 9 shows the alternative. Canonical: £36,000.
- **Pillar Two from GY1**: Tarnmoor's revenue exceeded €750m before GY1 (story assumption, chapter 1).

---

# Continuity rulings after batches 2–3 (chapters 15–30) and reviews A–C

*Issued 9 October 2026 by the continuity editor (second pass). Sources: every notes file 15–30, `review/batch23-issues-log.md`, review B's "Needs orchestrator ruling" (reviews A and C raised nothing outside R1–R17). Same status labels and fixer instructions as above. All numbers were recomputed in Python (scratch `continuity2/calc.py`); `calder-ledger.md` is amended in place ("(amended by Rn)") and §8 extended; `ledger-check.py` is extended (212 checks, 0 failures). 13 WebSearch calls were used (budget 25).*

*Earlier rulings amended by this pass: **R3** guidance (Helmside GY4 figure: R21), **R4** and **R5** (GY3 CIR numbers: R19, R20). Where an earlier ruling and a later one differ, the later one governs.*

---

## R18. First-year allowance balances are pooled after the period's WDA (CAA 2001 s 58(5)); TEL's GY2 pools restated

**Issue.** Review B (8.1, 8.2, 9.1) found WDAs given in the period of expenditure on the balance left after a 40% or 50% FYA. Chapter 8's fixer restated TEL's special rate pool brought forward so that the canonical GY2 total (£16,000,000) stands, and asked for a ruling.

**Ruling.** Confirmed. s 58(5)(a) bars allocating FYA expenditure to a pool in the chargeable period in which it is incurred; the balance joins the pool **after** that period's WDA and draws WDA from the next period. Expenditure with no FYA (AIA excess, second-hand plant, LFL deemed expenditure such as TEL's GY3 machining centre) is pooled and gets WDA in the same period. To keep every canonical total, TEL's special rate pool **b/f at 1 January GY2 is £7,720,000** (was £6,000,000; a chapter-8-only figure).

| TEL GY2 (£) | Main pool | Special rate pool |
|---|---|---|
| b/f | 39,500,000 | 7,720,000 |
| Second-hand plant / disposal | +500,000 / (300,000) | — |
| Before WDA | 39,700,000 | 7,720,000 |
| WDA 14% / 6% | (5,558,000) | (463,200) |
| FYA balances added after WDA | +480,000 (40% FYA rigs) | +600,000 (50% FYA chillers) |
| **c/f** | **34,622,000** | **7,856,800** |

Total CAs: FE £9,000,000 + 50% FYA £600,000 + 40% FYA £320,000 + WDAs £5,558,000 + £463,200 + SBA £58,800 = **£16,000,000** (unchanged; TEL trading profits £26.0m, TTP £8,905,000, CT £2,226,250 unchanged). The chapter 8 "at 18%" comparator is £7,146,000.

**Authority.** CAA 2001 s 58(5) (legislation.gov.uk extract, review B search 1) **V-statute**; general exclusion 5 and LLA (CA23174ac) **V-HMRC** (review B).

**Fix needed in.** `08-plant-and-machinery` and `09-buildings-fixtures-leasing-successions`: already applied by the review B fixer (verified: 7,720,000 / 34,622,000 / 7,856,800 present; the "318,000" alternative removed). Notes `08-notes.md`: add "Resolved by continuity ruling R18". Ledger §7 GY2 and §8 amended; `ledger-check.py` "TEL CA total" rewritten.

**Guidance for later chapters.** Chapter 31: RC's plant (if any FYA is claimed) follows s 58(5). Chapter 32: list "WDA on the FYA balance in the same period" as a marking trap.

---

## R19. TES's GY3 lease assignment needs indexation: gain £189,000; GY4 lease grant cost £290,000

**Issue.** The ledger and R5 gave the GY3 assignment gain as £351,200 with no indexation. Chapter 16 showed the lease was bought 25 years before GY3, which on the TKS chronology (Dan's 12 years' service at 30 September GY3; Dan at Calder in 2026/27) must be before December 2017. Chapter 16 also resolved the GY4 grant (bible flag 27).

**Ruling.**
1. Indexation applies to the restricted cost (CG17380). Because no Group Year may be dated, the story uses an **assumed indexation factor of 0.250**, labelled in both editions as a round figure chosen for the story (in the exam, compute from RPI). Allowable cost £800,000 × 81.100/100 = **£648,800**; indexation £162,200; **gain £189,000** (was £351,200). The lease was an investment, never used in a group trade (no roll-over); assigned to an unconnected buyer.
2. R5 amended: TES's GY3 net gains **£489,000** (£300,000 depot + £189,000 lease); TES tax-EBITDA unchanged at **£14.8m**, now **property and other profits £14,311,000** + net gains £489,000. Aggregate tax-EBITDA and all CIR totals are unaffected by this ruling.
3. GY4 30-year lease grant (HMRC's method, CG70960: capital part over full premium plus reversion): income element £2,000,000 × 21/50 = **£840,000**; capital part £1,160,000; part-disposal cost £1,500,000 × 1,160,000/6,000,000 = **£290,000**; **gain £870,000**; reversion cost c/f **£1,210,000**; TES taxable £1,710,000, CT **£427,500**; tenant (unconnected logistics operator) deducts £28,000 a year. The plan's £500,000 / £337,209 alternatives are wrong.

**Authority.** CG17380 (indexation on restricted lease cost) and CG70960 (premium part disposal) **V-HMRC** (chapter 16 searches); TCGA Sch 8 para 1 (lease percentage table) **V** (law sheet 2). The 0.250 factor is a **story assumption**.

**Fix needed in.**
- `17-gains-inside-the-group` reading line ~179: "lease assignment gain £351,200 (chapter 16) = **£651,200**" → "lease assignment gain £189,000 (chapter 16) = **£489,000**"; line ~521: "TES net gains GY3 £651,200" → "£489,000". Script line ~85: "net gains of six hundred and fifty one thousand, two hundred pounds" → "net gains of four hundred and eighty nine thousand pounds". Notes `17-notes.md` Contradictions: "TES net gains £651,200 (R5)" → "£489,000 (R19)"; add "Resolved by continuity ruling R19".
- `28-corporate-interest-restriction` reading line ~140 comment cell: "property and other profits 14,148,800 + net gains 651,200" → "property and other profits 14,311,000 + net gains 489,000"; "TES's gains (GY3)" paragraph (~152): "Add the lease assignment gain of **£351,200**: TES's net gains are **£651,200**" → "Add the lease assignment gain of **£189,000** (after indexation: chapter 16): TES's net gains are **£489,000**". Script line ~79: "six hundred and fifty one thousand, two hundred pounds of net gains" → "four hundred and eighty nine thousand pounds of net gains". Notes `28-notes.md`: record R19.
- `16-company-gains-property-leases`: none (it is the source); notes: mark flag 1 "adopted by R19".
- Ledger §7 GY3 and GY4 amended; `ledger-check.py` 'assign', 'TES GY3 net gains', 'TES GY3 split' replaced.

**Guidance.** Chapter 31 and 32: never restate £351,200 or £651,200. If a later chapter needs a dated RPI computation, use a labelled hypothetical, not TES's lease.

---

## R20. GY3 corporate interest restriction: one canonical position (TEL's lease charge; the GY6 TP settlement and the revised return)

**Issue.** Two later chapters changed the GY3 CIR set by the ledger (R4/R5: ANTIE £24.35m, reactivation £1.96m, disallowed c/f £2.55m). (a) Chapter 28: TEL's £90,000 GY3 finance charge on its long funding lease (chapter 9) is tax-interest (TIOPA s 382 Condition C) and a relevant expense in ANGIE; it was omitted. (b) Chapter 27: the GY6 TP settlement adds £2.0m to Calder's taxable profit for its 9-month AP to 31 December GY3, and (R4) to its tax-EBITDA. Chapter 27 computed £89.7m / £2.56m / £1.95m on the old ANTIE.

**Ruling.** Adopt both corrections, in story order.

| GY3 (£m) | As filed (GY4) | Revised return (GY6) |
|---|---|---|
| Aggregate tax-EBITDA | 87.70 | **89.70** (Calder 8.6 → 10.6) |
| ANTIE (incl. TEL lease charge 0.09) | 24.44 | 24.44 |
| ANGIE | 31.64 | 31.64 |
| 30% of tax-EBITDA | 26.31 | **26.91** |
| Fixed ratio debt cap (ANGIE + excess debt cap b/f 4.51) | 36.15 | 36.15 |
| Group ratio (16.14%) × tax-EBITDA (not elected) | 14.16 | 14.48 |
| Interest allowance (no unused allowance b/f) | 26.31 | 26.91 |
| Interest reactivation cap = allowance − ANTIE (s 373(3)) | 1.87 | **2.47** |
| Disallowed amounts b/f (TPLC: 2.21 + 2.30) | 4.51 | 4.51 |
| **Reactivated (TPLC)** | **1.87** | **2.47** |
| **Disallowed amounts c/f** | **2.64** | **2.04** |
| Unused interest allowance generated | nil | nil |
| Excess debt cap c/f | 4.51 | 4.51 |
| TPLC GY3 NTLR debits (8.50 + reactivation) | 10.37 | 10.97 |

1. **As filed.** TPLC files the GY3 full return (by 31 December GY4) with ANTIE £24.44m, reactivation **£1.87m** (CT value £467,500), c/f **£2.64m**. TPLC's GY3 NTLR deficit of **£10.37m** is surrendered to TEL as current-year group relief (s 99(1)(c); not within the s 105(3A) cap) (new story fact; TEL's GY3 TTP is not fixed).
2. **Revised return (GY6).** The settlement of HMRC's enquiry into Calder's GY3 return makes figures in the GY3 return incorrect, so TPLC, as reporting company, **must** file a revised return within **3 months** (TIOPA Sch 7A para 8(4); HMRC's example at CFM98645; CFM98535 for periods beginning on or after 1 April 2023). Revised: aggregate tax-EBITDA **£89.7m**; allowance **£26.91m**; reactivation **£2.47m** (+£0.6m); disallowed c/f **£2.04m**; still no unused allowance.
3. **Consequences.** TPLC amends its GY3 return to bring in the extra £0.6m reactivation (time limit: the later of 3 months after the revised return and the normal amendment window: CFM98640). TEL's GY3 group relief claim window has closed (FA 1998 Sch 18 para 74: latest date one year after TEL's filing date, 31 December GY5; TEL's return was not under enquiry), so the extra £0.6m of TPLC deficit **cannot be surrendered to TEL**: HMRC's manual warns of exactly this (CFM98645). TPLC carries it forward (CTA 2009 Part 5 Ch 16A); on R3's reading of s 188BE it is effectively **stranded**, like TPLC's carried-forward management expenses (tax value forgone £150,000; book's reading). This is the teaching point: a TP settlement can raise interest capacity, but the timing rules decide whether the group can use it.
4. **Unused allowance.** HMRC's guidance confirms the allowance is used first against ANTIE and reactivations, and only the remainder is carried forward (CFM98240: "amount A ... less the amounts used in the originating period"; CFM98620; CFM95250): nil in GY3 on both bases. R5's "book's reading" label becomes **HMRC's view (V-HMRC)**.
5. **Canonical for later chapters:** the **revised** position (reactivation £2.47m; disallowed amounts c/f at end GY3 **£2.04m**). The "as filed" figures are history that chapter 28 teaches first. No CIR figures exist for GY4 onward; chapter 31 must not invent a carry-forward balance for the Ridgeway year.

R4 amended: Calder's GY3 contribution is £8.6m as filed and **£10.6m** after the settlement; the s 408 analysis of the £6.0m credit is unchanged. R5 amended: reactivation and c/f as above.

**Authority.** TIOPA 2010 s 373(3) (cap = interest allowance (s 396) less ANTIE; nil if negative): statutory text via lawplayer reproduction and CFM98620 **V-statute (secondary copy)/V-HMRC**; s 382 Condition C and finance lease cost in ANGIE: CFM95660, CFM95930 **V-HMRC** (chapter 28); Sch 7A para 8(3)–(5): legislation.gov.uk extract (para 8(3): 36 months) and CFM98645, CFM98535, CFM98640 **V-HMRC**; CFM98240 (unused allowance) **V-HMRC**. The stranding of TPLC's extra deficit is the **book's reading**.

**Fix needed in.**
- `28-corporate-interest-restriction` both editions: keep the GY3 computation and WE tables as they stand (they show the **as filed** figures 24.44 / 31.64 / 1.87 / 2.64); label the GY3 column "as filed". After the paragraph "GY3: no unused allowance" add a short section **"A return revisited (GY6)"**: the GY6 TP settlement (chapter 27) adds £2.0m to Calder's GY3 TTP and tax-EBITDA; TPLC must file a revised GY3 return within three months (Sch 7A para 8(4); HMRC's example at CFM98645); revised aggregate £89.7m, allowance £26.91m, reactivation £2.47m, c/f £2.04m; TPLC amends its GY3 return, but TEL's group relief claim window has closed, so the extra £0.6m deficit stays in TPLC (stranded on this book's reading; CFM98645 warns of this trap). In the "unused allowance" paragraph replace "on this book's reading of ss 394–396" with "on HMRC's guidance (CFM98240)". Tax-effect line: "£2.64m (potential £660,000) still waiting" → "£2.64m as filed (£2.04m after the GY6 revision) still waiting". Key figures / story table row (line ~507): add "revised GY6: tax-EBITDA 89.7; reactivated 2.47; c/f 2.04". Script: after "Two point six four million pounds stays in the queue for a later year." add three or four sentences with the same content (numbers in words). Notes `28-notes.md`: Contradiction 1 "adopted by R20"; record the revision.
- `27-transfer-pricing` both editions: "Going further: the restructuring ripple", CIR bullet: replace "Whether and how the group's interest restriction return for GY3 is revisited is chapter 28's subject [flagged]" with "The reporting company must file a revised GY3 interest restriction return within three months of the settlement (chapter 28): reactivation rises from £1.87m to £2.47m, but TEL's group relief claim for the extra deficit is out of time." Script: if it states nothing about CIR, add one sentence. Notes `27-notes.md` flag 17: "Resolved by R20 (figures 89.7 / 26.91 / 2.47 / 2.04, not 2.56 / 1.95)".
- `06-deferred-tax` reading line ~323: "(chapter 28; Tarnmoor reactivates £1.96m in GY3)" → "(chapter 28; Tarnmoor reactivates £1.87m in GY3 as first filed, £2.47m after a later revision)". Script: check for "one point nine six" (none found) and align any equivalent.
- `26-controlled-foreign-companies` reading line ~358: "£24.35m (GY3)" → "£24.44m (GY3)".
- `continuity-rulings.md` R4/R5: amendment notes added (done).
- Ledger §7 GY3 CIR, §8 GY3 and GY6 amended; `ledger-check.py` antie3/angie3/react3/cf3 replaced and revised checks added.

**Guidance.** Chapter 31: the Ridgeway acquisition brings RC into the worldwide group; say only that the group's CIR position carries disallowed amounts forward from earlier years (no figure). Chapter 32: the GY6 revision is a good "interaction" example (TP → CIR → group relief time limits).

---

## R21. Helmside GY4: consortium relationship broken by s 155 arrangements; TPLC's surrender £536,250

**Issue.** Ledger, ledger-check and R3's guidance used £585,000 (45% × £1.3m). Chapter 15 found that the 1 December GY4 heads of terms (TPLC to buy Greyfell's 40%) are s 155 arrangements.

**Ruling.** Adopt chapter 15. TPLC is a "third company" (s 155(4): not, apart from the arrangements, in the same group as Helmside); arrangements under which Helmside could become its 75% subsidiary (Effect 1) exist from agreement in principle, **1 December GY4** (heads of terms naming price, structure and timetable, approved by both boards). Helmside is not owned by a consortium from that date; the overlapping period is **11 months**. TPLC surrenders **£536,250** (45% × £1,300,000 × 11/12; months, as the exam rubric uses); full-year ceiling £585,000 shown only as a comparison. Helmside TTP **£763,750**, CT **£190,937.50** (not large: QIP divisor 1; due 1 October GY5); Helmside pays TPLC **£134,062.50** (25p per £; s 183 disregard); the other **£48,750** of TPLC's surrenderable management expenses goes to TEL (within the s 105(3A) cap). No consortium or group relief for 1 January–28 February GY5; group relief from 1 March GY5.

**Authority.** CTA 2010 s 155 including s 155(4) "third company" (legislation.gov.uk extract; also CTM80615) **V-statute**; CTM80625/80630 (agreement in principle) **V-HMRC**. Treating a consortium member acquiring control as the third company is the **book's reading** of the statutory definition (no HMRC worked example seen).

**Fix needed in.**
- `14-losses` reading line ~84 (Part 7ZA check box): "(limited to 45% × £1.3m = £585,000)" → "(a full-year ceiling of 45% × £1.3m = £585,000, cut to £536,250 by the arrangements rules: chapter 15)". Script: no equivalent found; none.
- `15-group-relief-consortia-jvs`: none (source). Notes: Contradiction 1 "adopted by R21".
- R3 guidance amended (note added). Ledger §7 GY4 amended; ledger-check 'HEL GY4' relabelled as the ceiling and new checks added.

**Guidance.** Chapter 18 (share exchange) and chapter 28: never use £585,000 as the amount claimed. Chapter 31: the same arrangements analysis applies to any heads of terms with Jess (group relief between RC and Tarnmoor companies starts only on completion, 1 April).

---

## R22. Stamp duty on the TAL sale (£270,000), Brackenwell's notes (£9,000), and TEL's consideration for TAL

**Issue.** Ledger, plan and bible §1B: Brennock's stamp duty £240,000 (0.5% × £48.0m). Chapters 20 and 21 independently applied the contingency principle. Chapter 21 added duty on BSL's convertible notes. The log asked whether chapter 20's "TEL total consideration £53.5m" fits chapter 18's earn-out figures.

**Ruling.**
1. A capped earn-out is charged on its stated maximum: £48.0m + £6.0m = £54.0m × 0.5% = **£270,000** (Brennock pays; earn-out cap £6.0m on TAL's results over GY7 and GY8; no refund if less is paid). £240,000 (cash only) and £255,000 (cash + £3.0m value) are the traps chapter 21 names.
2. BSL's £3.0m convertible notes, bought for £1.8m, are convertible loan capital outside the loan capital exemption (FA 1986 s 79(5); holders had the conversion right): stamp duty **£9,000**. BSL deal stamp duty **£120,000** (£111,000 shares + £9,000 notes); Calder + BSL **£280,000**.
3. Story totals: stamp duty **£652,500** (Calder £160,000; BSL £120,000; Helmside £80,000; TAL £270,000 paid by Brennock; RH £22,500 in the Ridgeway year); paid by Tarnmoor companies £382,500. SDLT group relief **£923,500** claimed (£269,500 + £289,500 + £364,500), **£654,000** clawed back, **£269,500** kept. Buyer's SDLT on the head office £689,500 (not Tarnmoor's).
4. **No conflict on consideration.** TEL's consideration for the TAL shares at completion is £48.0m cash + earn-out right valued **£3.0m** (*Marren v Ingles*) + degrouping gain **£2.5m** added to the consideration (TCGA s 179(3D)) = **£53.5m**, all exempt (SSE, para 15A). The later receipts are disposals of the earn-out right (chapter 18, "generally accepted view, not settled"): GY7 £2.0m (gain £0.5m, CT £125,000), GY8 £2.5m (gain £1.0m, CT £250,000); total receipts £4.5m, gains £1.5m, CT **£375,000**. The stamp duty base (£54.0m) and the gains consideration (£53.5m) measure different things.

**Authority.** STSM021120 (contingency principle; stated maximum) **V-HMRC** (chapters 20, 21); FA 1986 s 79(5), STSM041070, STSM021230 **V**; TCGA s 179(3D) **V** (law sheet 2; chapter 17).

**Fix needed in.**
- `20-buying-and-selling-companies` script line ~231: "The two point five million pound degrouping gain joined fifty three point five million pounds of exempt proceeds" → "The two point five million pound degrouping gain was added to the consideration, making fifty three point five million pounds, all of it exempt." Reading: none (line ~400 correct; table line ~330 shows the £240,000 component correctly). Notes: flag 1 "resolved by R22".
- `21-stamp-taxes-groups`: none. Notes: flag 1 resolved by R22.
- `12-loan-relationships-and-derivatives` (optional): where BSL's stamp duty £111,000 is stated, add "(plus £9,000 on the convertible notes: chapter 21)".
- `book-bible.md` §1B TAL row: "buyer's stamp duty £240,000" → "£270,000 (cash £48.0m + earn-out cap £6.0m)".
- Ledger §7 GY2, GY6 amended; `ledger-check.py` 'TAL SD' replaced, new checks added.

**Guidance.** Chapter 31: RH purchase £4.5m cash, stamp duty **£22,500**; if the deal has any contingent element with a stated maximum, charge the maximum. Chapter 32: the cap rule is a classic trap; earn-out receipts after an SSE sale carry the "accepted view" label.

---

## R23. TEL's blocked Marrovian receipt (GY6) is relieved under CTA 2009 ss 173–175, not Part 18

**Ruling.** Adopt chapter 25. A receipt of TEL's UK trade that is unremittable because of foreign exchange restrictions is deducted from trading profits (s 173; not so as to create a loss) and brought back when it ceases to be unremittable (s 175); Part 18 (s 1275, two-year claim) is for other foreign income. Story: TEL's Marrovian customer pays **£400,000** for pumps into a blocked local account in GY6; s 173 deduction GY6; controls lift and the amount is brought back in **GY7** (s 175); £100,000 of CT deferred one year. The amount is now a story fact.

**Authority.** CTA 2009 ss 173, 175 (legislation.gov.uk extract) and BIM42750 **V** (chapter 25). s 173 claim mechanics and s 174 not seen (open item).

**Fix needed in.** Ledger §7 GY6 amended. Chapter 25: none (notes: "resolved by R23"). No other chapter states the old wording.

**Guidance.** Chapter 32: "Part 18 for trading receipts" is a named trap.

---

## R24. The Tarnwater demerger: how TPLC's disposal is exempt

**Ruling.** Adopt chapter 19's framing. On a direct demerger TPLC makes a **market value disposal** of the TWS shares under the general rules, and the **SSE** exempts it. TCGA s 192(2) is a **shareholder-level** rule (no capital distribution under s 122; reorganisation treatment for TPLC's shareholders). Sch 7AC para 4 gives the SSE priority over s 192(2)(a) only for a **corporate shareholder of the distributing company** with a substantial holding. s 192(3): no s 179 degrouping charge for TWS leaving by reason only of the exempt distribution (subject to s 192(4) and chargeable payments within 5 years). Story: s 1091 clearance obtained before 1 July GY5; demerger return within 30 days; TWS holds no transferred intangibles; SDLT clawback £289,500 on the water-systems factory (no arrangements existed on 1 October GY3).

**Authority.** CG45620 (s 192 reorganisation treatment), practitioner guides (market value disposal; SSE or s 139 needed), Sch 7AC para 15 / CG53108 (SSE through a demerger) **V-HMRC/secondary** (search this pass); chapter 19's sources.

**Fix needed in.** Ledger §7 GY5 amended ("TPLC's disposal within the SSE in priority to s 192(2)(a)" replaced). Chapters: none (no chapter uses the old wording; chapter 18's para 4 teaching is general and correct). Notes `19-notes.md`: flag 1 "resolved by R24".

---

## R25. Pillar Two top-up on Marrovia in GY1–GY4 (£66,000 a year) and chapter 6's reconciliation

**Ruling.** No contradiction: chapter 6 already labels its GY2 reconciliation as leaving Pillar Two top-up out (both editions). The canonical figures: GY1–GY4 TCM profit £3.3m, Marrovian tax £297,000 + pushed-down CFC charge £132,000 = £429,000, ETR **13.0%**, IIR top-up **£66,000 a year** (simplified: no substance-based income exclusion, as in GY5); GY5 **£102,000** (£765,000 in total = 15% of £5.1m). Chapter 6's total tax charge stays **£24,385k (24.39%)**; with the top-up it would be £24,451k (24.45%).

**Fix needed in.** `06-deferred-tax` both editions (optional precision): reading line ~321 "top-up tax under the Pillar Two rules (Marrovia) is omitted (chapter 30 computes Tarnmoor's)" → add "(£66,000 for GY2)"; script line ~199 add "about sixty six thousand pounds for Group Year Two". Ledger §7 GY1 and §8 amended.

**Guidance.** Chapter 31: RC and RH join the MNE group for Pillar Two at once; UK entities are covered by DTT (no figures needed).

---

## R26. Interest rates on corporation tax: the bible's rates stand

**Issue.** Chapter 27 (flag 16) doubted the bible's 6.25% for underpaid instalments, on the assumption that QIP debit interest is Bank Rate + 1%. Review A had confirmed 6.25% / 3.50%.

**Ruling.** The rates stand. From **6 April 2025** QIP debit interest is **Bank Rate + 2.5%** (raised from + 1%) and late payment interest **Bank Rate + 4%** (raised from + 2.5%); QIP credit interest is Bank Rate − 0.25%; repayment interest Bank Rate − 1% (minimum 0.5%). Bank Rate has been **3.75%** since 18 December 2025 (held on 17 September 2026; next decision 5 November 2026). So: QIP underpayments **6.25%** and overpayments **3.50%** from **29 December 2025**; late payment **7.75%** and repayment **2.75%** from **9 January 2026**. Every chapter statement found (chapter 3 both editions; bible §3) is correct. A grep of all chapters found no other rate statements (chapter 27 deliberately gives none).

Interest on Calder's £500,000 (chapter 27): QIP debit interest from each 9-month AP instalment date (14 June, 14 September, 14 December GY3) to the normal due date (**1 October GY4**), then late payment interest to payment (Instalment Regulations reg 7 with TMA s 87A; standard rule, not re-verified this pass: label "in outline"). No figure is fixed.

**Authority.** HMRC rate announcements as reported (Taxation / Tax Journal / professional summaries; GOV.UK news story "HMRC revises interest rates for late payments"): formula change from 6 April 2025; 6.25% / 3.50% from 29 December 2025; 7.75% / 2.75% from 9 January 2026 **V (secondary reproductions of HMRC's published rates)**; Bank Rate decisions 18 December 2025, 19 March 2026, 17 September 2026 (CIPP; reports of the MPC decision) **V-secondary**.

**Fix needed in.**
- `03-returns-payments-enquiries` reading table (lines ~337–340): add the formula to the QIP rows: "QIP underpayments (Bank Rate + 2.5%)" and "QIP overpayments (Bank Rate − 0.25%)"; optional note "the QIP and late payment margins rose on 6 April 2025". Script: optional one sentence.
- `27-transfer-pricing` reading, the "Interest runs on the £500,000" paragraph: replace "until paid" with "until the normal due date, 1 October GY4, and then late payment interest until paid". Notes `27-notes.md` flag 16: "withdrawn: 6.25% = Bank Rate 3.75% + 2.5% (R26)".
- Bible §3 rows: add the formulas. No ledger number changes (ledger-check gains rate checks).

**Guidance.** Chapters 31–32: quote rates as "when this book was written" and give the formula; re-check after the 5 November 2026 decision and before release.

---

## R27. Pre-R3 leftovers in chapters 13 and 14: checked

**Ruling.** Chapters 15 and 28 flagged leftover pre-R3 text (TPLC's £12.49m surrender; Part 5A use of TPLC's carried-forward expenses). A grep of both editions of chapters 13 and 14 shows the R3 fix has been applied: £11.665m / £5,075,000 / £825,000 stranded; chapter 13 states the general Part 5A route and then that it is closed for TPLC (s 188BE, book's reading). The only residue is chapter 14's £585,000 Helmside figure (R21).

**Fix needed in.** None beyond R21. Notes 15 (Contradictions 3–4) and 28 (Contradiction 2): mark "already fixed (R27)".

---

## R28. Judges, citations, dates and section numbers

1. ***HMRC v Development Securities plc*** [2020] EWCA Civ 1705: panel David Richards, Newey and Nugee LJJ. Authorship of the lead judgment is **not confirmed** (one secondary source says Newey LJ summarised the CMC case law). Chapter 22's practice stands: name the panel, attribute no proposition to a named judge, "one member of the court" for the reservations remark. **Fix:** `book-bible.md` §1A row "Newey LJ | Lead judgment in *Development Securities* ..." → "Member of the *Development Securities* court [2020] EWCA Civ 1705 (lead authorship unconfirmed) and of the *JTI* court". Chapter 22: none.
2. ***JTI*** [2024] EWCA Civ 652: panel Lewison, Newey and Baker LJJ (bible). Lead authorship unconfirmed; chapter 12 names no judge: keep it so. *Fidex* lead judge still unchecked (unchanged).
3. ***Marren v Ingles*** (1980) 54 TC 76; [1980] STC 500; [1980] 1 WLR 983: chapter 20's secondary sources say House of Lords; citations confirmed this pass; no judge to be named. Chapter 18's "the courts held" may stay or become "the House of Lords held" (label secondary).
4. ***Unit Construction v Bullock*** [1960] AC 351: follow the INTM/extract version (the London board in fact controlled the African subsidiaries); do not say "Kenya" or "a representative in East Africa" (law sheet 3's teaching note is superseded).
5. ***FCE Bank*** [2012] EWCA Civ 1290: chapters 15 and 24 consistent.
6. **TCGA s 171A election**: first enacted by FA 2000; current rules for gains and losses accruing on or after 21 July 2009 (CG45356) (law sheet 2's "from FA 2009" superseded).
7. **CFC regime start**: TIOPA Part 9A was inserted by FA 2012 (Royal Assent 17 July 2012) and **applies to CFC APs beginning on or after 1 January 2013** (FA 2012 Sch 20 para 49). **Fix:** bible §3.11 "Regime | TIOPA Part 9A, inserted 17 July 2012" → add "; applies to CFC accounting periods beginning on or after 1 January 2013".
8. **UTPP gateways**: HMRC's structure puts the conditions (ETMO, TDC) in TIOPA Part 4A **Ch 2, ss 217C–217E** (INTM489105). **Fix:** `30-global-minimum-and-dpt` reading lines ~216, ~334, ~346: "s 217C, with s 217D on the mismatch" may stay; "ss 217C–217D" → "ss 217C–217E" (and "ss 217C–217D conditions" → "ss 217C–217E conditions"). UTPP rate = CT rate + 6% (31%) confirmed.
9. **Pillar Two threshold**: chapters 1 and 30 consistently say the statute (F(No.2)A 2023 s 129) says "exceeds" €750m while HMRC guidance says "or more": keep.

---

## R29. Smaller points settled

- **BSL group economics (review B, 10.1):** the £450,000 group net benefit (R7) stays; chapter 10's wording (half the £600,000 loss reduction falls on restricted pre-acquisition losses) is correct. Chapters 15 and 20 must not restate the benefit as a cash saving of £150,000 on the surrender.
- **TPLC and the CFC charge (chapter 26 flag 9):** TPLC's own taxable total profits are nil, so it is not "large" for QIPs; its CFC charge (£132,000 GY1–GY4; £204,000 GY5) is paid 9 months and 1 day after the AP (book's reading; CTM92825 includes CFC tax in a very large company's total liability, but status turns on profits).
- **TAL's 11-month AP (1 February–31 December GY6):** QIP divisor 11 (R1); thresholds time-apportioned: large **£125,000**, very large **£1,666,667**, first-year limit **£833,333** (chapter 20).
- **s 164A and TIL:** the UK-to-UK exemption stops when TIL ceases to be UK resident (30 June GY4); TP applies to the £20m loan from 1 July GY4 (£0.6m for July–December GY4; £1.2m a year from GY5); taxed through TPLC's smaller NTLR deficit surrendered to TEL (tax £150,000 GY4; £300,000 a year from GY5). Whether s 164A requires residence throughout the period remains open (book's reading).
- **TPLC's GY1 TP adjustment (£500,000; CT £125,000)** is collected through TEL's smaller group relief: TEL's GY1 CT £2,633,750 with the adjustment v £2,508,750 without (R3 arithmetic); it raised GY1 tax-EBITDA by £0.5m and capacity by £0.15m (disallowance £2.21m v £2.36m without).
- **SDLT and the TAL hive-down:** no arrangements to sell on 1 February GY6 (no buyer, no heads of terms; board minute); Brennock first approached in summer GY6 (chapters 20 and 21 agree). Same for the water-systems factory on 1 October GY3 (chapter 17).
- **TES's depot** was let to TEL and used only for TEL's trade throughout TES's ownership (chapters 16 and 17 agree); contracts exchanged unconditionally 30 April GY3.
- **TVS's GY4 service fee to TEL** (chapter 23) stays unpriced; no later chapter may price it without a ruling.
- **Coldwater:** the remaining 8% is exempt under the **main** SSE (para 7 six-year look-back), not the subsidiary exemption (plan wrong).
- **TPLC's Helmside base cost** after the share exchange: £16.0m for the 40% (*Stanton v Drayton*; CG52562); pool £25.0m for 85%. No s 138 clearance.
- **BSL joins** the group relief group on completion (1 July GY2), not on the conditional SPA (1 May GY2).
- **Calder's branch decision:** no s 18A election (GY2 board paper; summer GY3 decision minuted); the PE loss of £300,000 gave £75,000 of relief; project-life tax £150,000.
- **Calder's royalty and DTR (GY4 onward):** attributable costs £300,000; royalty profit £900,000; Patent Box CT £90,000; Vallarian WHT £60,000 fully credited; UK CT payable **£30,000**.
- **Undertow (chapter 29):** the adviser assumed a CFC charge of £350,000 and claimed a net saving of £1,050,000 a year; the full CFC charge would be £1.4m less the £1.12m UK withholding credit = £280,000; the board rejected it for three minuted reasons.
- **UK–Vallaria treaty** has the MLI-style preamble and principal purpose test (chapter 24; ledger §2 amended).
- **Draft Finance Bill 2026-27:** compulsory foreign branch exemption for APs beginning on or after 1 January 2027 is **proposed, not law** (chapter 25); chapter 31 must present the s 18A election as current law and the proposal as "proposed".

---

## Open verification items for the technical reviewers

*Updated after the second pass. Resolved since batch 1: item 6 (unused allowance after reactivation: CFM98240, R20); s 1142A inserting Act (review B: F(No.2)A 2023 Sch 1); s 164A for TIL around migration (ceases at migration: R29, chapters 22 and 27); Patent Box small-claims point not reopened; QIP interest rates (R26).*

**Carried from batch 1**
1. SI 1998/3175 reg 3 (as amended for APs beginning on or after 1 April 2023): the statutory counting date for associated companies (R1 rests on CTM92530/COM95001).
2. CAA 2001 s 51C: "financial year" takes the Interpretation Act meaning; check HMRC CA23088's worked example (R11).
3. CTA 2010 s 188BE and the ordering of s 1223 carried-forward expenses: confirm TPLC's carried-forward management expenses cannot be surrendered under Part 5A while it has recharge income (R3); the same reading strands TPLC's extra GY3 deficit after the revised CIR return (R20).
4. FA 2026 s 31 text: does the payment disregard cover a step 2 amount surrender (R7)?
5. SI 2004/3256 reg 6 as amended: the list of automatic cases (R6).
6. CFM95720 full text on capital losses in tax-EBITDA (R5).
7. CIRD89870 applied to RDEC surrendered **to** a group company (R2).
8. Still open from batch 1 notes: CTA 2010 s 1140A dynamic reference (ch 2, 23); s 164A "same rate" condition for a nil-profit TPLC and the banking-company definition (ch 2, 27); s 164A where residence changes mid-period (ch 27); CbC €750m measurement period (secondary: previous period) and CbC penalties (ch 27); s 879O formula (ch 11); *Fidex* lead judge (ch 12); *JTI* lead judge (ch 12; R28); *Syngenta* UT outcome (ch 12); *ScottishPower* UKSC judgment (ch 7); FA 2026 ss 216 and 159 commencement (ch 4); Castlelaw citation, GAAR s 207 indicators, APN appeal rule, *Ramsay* date (ch 4); s 45A time limit and s 45F order (ch 14); *Ayerst* court and year (ch 14); s 1290(1A) wording (ch 7); CTA 2010 s 676CB/676CE text (ch 14); functional currency s 9A Condition B (ch 5); IAS 12 Pillar Two exception end date (ch 6); s 70C amount and LFL lessee full expensing (ch 9); 50% FYA on integral features bought new from a developer (ch 9); "competent professional" wording in the R&D Guidelines (ch 10); FA 1998 Sch 18 paras 83EA–83EB (ch 10); allowance-buying thresholds and s 538A (ch 9).

**New from chapters 15–30**
9. TIOPA Sch 7A para 8(4)–(5) statutory text (3-month window for a required revised return) and CFM98640 amendment window (R20; seen in HMRC extracts only).
10. TIOPA s 373(3) on legislation.gov.uk (seen via a reproduction and CFM98620) (R20).
11. CTA 2010 s 155: any HMRC example of a consortium **member** as the "third company"; ss 155A–155B not engaged (R21).
12. Earn-out receipts after an SSE-exempt share sale (chargeable on the practitioner view; no HMRC page found); *Marren v Ingles* court (House of Lords per secondary sources) (R22, R28).
13. STSM021120 wording on capped consideration; whether FA 1986 s 75 applies to an indirect (s 1077) demerger for the chapter 21 alternative.
14. CTA 2009 s 173 claim mechanics and time limit; s 174 (R23).
15. Instalment Regulations reg 7: QIP interest runs to the normal due date, then TMA s 87A interest (R26).
16. *Development Securities* lead judgment authorship (R28).
17. Sch 3ZB and QIPs for a migrating company's deferred tax; TMA s 109E start date; CTA 2009 s 162 wording; CAA s 61 table item for market value on a deemed discontinuance (ch 22).
18. SI 2012/3024: is Ireland on the excluded territories list? Exempt period for a migrating company (s 371JB); QDMTT as local tax for the CFC tax exemption and as creditable tax (ch 26; bible flags 38, 39).
19. TCGA s 140C post-Brexit wording (ch 25; flag 25); ss 944A–944E (post-2017 losses on a Part 22 transfer) (ch 19); para 19 qualifying period before a hive-down company existed (ch 20).
20. N25 Q1 "royalties as one source, credits aggregated": statutory basis under TIOPA s 44 (ch 24).
21. UK MLI position on Art 12 (secondary: reservation on the whole article) (ch 23); relief where a foreign TP adjustment relates to a UK PE (bible flag 41) (ch 23).
22. Draft Finance Bill 2026-27 (compulsory branch exemption from 1 January 2027): check the Autumn Budget (28 October 2026) and the Bill as introduced (ch 25); Bank Rate decision of 5 November 2026 (R26).
23. *Glencore* CA outcome and DPT announcement facts (ch 30); s 259B list and DPT (ch 29, flag 44); withholding on a hybrid capital instrument coupon (ch 29).
24. *Tower One* judgments (ch 21; commentary only); *HC-One* appeal status (ch 21); LBTT page currency (ch 21).
25. Stock dividends: CTM17005's citation of s 141 (ch 18, flag 21); *Prudential* and *Gallaher* (ch 17, flag 33).
26. Check the 2027 LCG grid when published (every chapter's Exam lens).
