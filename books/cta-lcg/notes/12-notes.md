# Chapter 12 notes: Loan relationships and derivatives

**Interpretation and assumptions.** Chapter 12 per plan §5 (8,500-word target): CTA 2009 Parts 5–7 at AT depth, built on the "three bouncers" analogy (connected companies, s 441, Disregard Regulations), with the Brackenwell notes (s 361/361D), the rejected GY2 debt pushdown, TFL's treasury, TPLC's deficits and the RCF fees as story steps. CIR, TP of loans, hybrids and withholding are signposted only (chapters 28, 27, 29, 23). FY2026 law throughout.

**Word counts.** Script `chapters/12-loan-relationships-and-derivatives.txt`: **8,505** (target 8,500 ±10%). Reading edition: **9,347**. 16 sections (15 + "What to take away"), each 400–770 words.

---

## Sources by section

Research files opened: `book-plan.md` (§0, §3, §5 ch 11–14, §6, §8–§11), `calder-ledger.md` (all), `book-bible.md` (§1, §3.1–3.9, §3.15–3.16, §4, §5, §6), `ORCHESTRATOR-ADDENDUM.md`, `research/law-sheet-1-ct-core.md` (§0, §2, §3, §10–12), `research/law-sheet-4-accounting-misc.md` (§1.1–1.3, teaching notes, traps), `research/exam-intel.md` (§3 paper tables, synthesis, traps), `research/lcg-grid-extract-v2.txt` (rows p6 253–256, p7 277), `ledger-check.py` (read and run: 96 checks, 0 failures; not edited).

WebSearch (9 of 12 allowed; WebFetch not used per addendum):

| # | Query | Results relied on | Used for |
|---|---|---|---|
| 1 | Disregard Regulations 2004/3256 regulation 6 "fair value hedge" regulations 7, 8 and 9 apply CFM | https://www.gov.uk/government/publications/corporation-tax-hedging-derivative-contracts-and-disregard-regulations/overview-of-disregard-regulations ; https://www.gov.uk/hmrc-internal-manuals/corporate-finance-manual/cfm57075 ; https://legislation.gov.uk/uksi/2004/3256/regulation/6/made | Default since 2015 = follow the accounts; elect-in under reg 6A; designated fair value hedges taxed per accounts; automatic case where the hedged item is not taxed per accounts (connected debt); reg 7 effect "in line with the hedged risk"; reg 9 accruals |
| 2 | CFM57071 derivative contracts hedging default approach designated fair value hedge follow the accounts regulation 6A election | https://www.gov.uk/hmrc-internal-manuals/corporate-finance-manual/cfm57360 ; /cfm57370 ; /cfm57072 ; /cfm57041 | Election scope (any combination of regs 7, 8, 9; same treatment per contract type; in writing); reg 9A history and revocation (SI 2015/1961); lock-in for new adopters |
| 3 | "Greene King plc v HMRC" [2016] EWCA Civ 782 interest strip ... | https://caselaw.nationalarchives.gov.uk/ewca/civ/2016/782 ; taxjournal.com summaries | Scheme outline and "partial failure" (secondary). Used only for the FA 1996 origin (LS1 V) |
| 4 | Syngenta Holdings Ltd v HMRC Upper Tribunal 2026 unallowable purpose decision | https://caselaw.nationalarchives.gov.uk/ukut/tcc/2025/338 ; Slaughter and May note | No UT substantive decision found; apportionment ground reported as the main issue (secondary) |
| 5 | "Fidex" [2016] EWCA Civ 385 ... | https://www.gov.uk/tax-and-chancery-tribunal-decisions/fidex-limited-v-the-commissioners-for-hm-revenue-and-customs-2014-ukut-0454-tcc | UT 2014 summary confirms FA 1996 Sch 9 para 13 (old unallowable purpose) and para 19A context. Lead CA judge still not found |
| 6 | CTA 2009 section 463B non-trading deficit claim "within 2 years" ... | https://www.legislation.gov.uk/ukpga/2009/4/section/463C/data.html ; https://www.gov.uk/hmrc-internal-manuals/corporate-finance-manual/cfm32050 | s 463C: claims under s 463B(1) within 2 years after the end of the deficit period (or longer if HMRC allows); pre-2017 equivalent s 459 |
| 7 | corporate rescue exemption loan relationships section 361D section 322(5B) ... | https://www.gov.uk/hmrc-internal-manuals/corporate-finance-manual/cfm35570 ; /cfm35580 ; /cfm35530 ; /cfm33191 | s 361D: acquisitions on or after 18 November 2015; s 362A parallel exception; s 322(5B) releases on or after 1 January 2015; full release disapplies s 361 |
| 8 | JTI Acquisition Company (2011) Ltd v HMRC [2024] EWCA Civ 652 facts ... | https://caselaw.nationalarchives.gov.uk/ewca/civ/2024/652 ; https://www.gov.uk/hmrc-internal-manuals/corporate-finance-manual/cfm38167 ; Weil, Slaughter and May, LexisNexis summaries | US group (Joy) acquisition vehicle; LeTourneau Technologies; loan notes to a US group company; interest surrendered as group relief; FTT no commercial purpose upheld (secondary) |
| 9 | Kwik-Fit Group Ltd v HMRC [2024] EWCA Civ 434 facts trapped losses ... | Simmons & Simmons, BDO, Weil, Freshfields, Tax Journal summaries; CFM38167 | Speedy 1: about £48m pre-2017 NTLR deficits; 25 years to about 3; new loans, assignments, rate increases; advantage = deductions to paying companies (secondary) |
| 10 | CFM relevant non-lending relationships interest on trade debts non-trading credit section 481 ... | https://www.gov.uk/hmrc-internal-manuals/corporate-finance-manual/cfm41020 ; /cfm41060 ; legislation.gov.uk Part 6 Ch 2 | s 479 routes in (interest, exchange, impairment of business payments, releases). Trading/non-trading character of interest on trade debts **not** confirmed: removed from the text |

(Ten searches in all, within the 12 allowed.)

---

## Fact-check flags

1. **TFL swap and the Disregard Regulations (CONTRADICTION corrected).** Plan §5 and ledger §6 say TFL's swap is "designated as a fair value hedge of the notes (Disregard Regulations apply)". HMRC guidance (CFM57040/57075/57360 via search) says that since 2015 regs 7–9 apply only by reg 6A election, or automatically where the hedged item is not taxed in line with the accounts (for example connected debt); a designated fair value hedge is generally taxed per the accounts. The chapter therefore says TFL **has made no election and needs none; tax follows the accounts**. Law sheet 1 §3's summary of reg 6 condition (b) ("the contract is a designated fair value hedge") is inconsistent with that guidance; the regulation text as amended was not opened. **Reviewer: open SI 2004/3256 reg 6 (as amended) to confirm.**
2. **RCF arrangement fee (CONTRADICTION resolved by a new fact).** Plan/ledger say "arrangement fee £0.3m" but fix amortisation of £0.25m (GY1) + £0.25m (GY2) + £0.1m (GY3) = £0.6m, which also feeds the canonical CIR figures (ANTIE, ANGIE). The chapter fixes **two fees of £300,000** (one per drawing: 1 April GY1 and 1 July GY2), amortised front-loaded under the effective interest method: fee 1 £250,000 (GY1) + £50,000 (GY2); fee 2 £200,000 (GY2) + £100,000 (GY3). All ledger amortisation amounts and CIR figures are unchanged.
3. **Kwik-Fit facts** (Speedy 1, about £48m, 25 → 3 years; advantage characterisation) and **JTI facts** (LeTourneau Technologies; US lender; group relief) are from secondary commentary via search, not the judgments; labelled in the script ("as the reported facts describe it", "as commentators read the judgment"). The JTI search summary said the lead judgment was by **Newey LJ**, not Lewison LJ; the chapter names no judge. The "bolted on" wording is LS1-verified (paras 81–83) but the search could not confirm it: script uses it as narration, reading edition quotes it with "per law sheet 1". **Reviewer: confirm paras 81–83.**
4. ***Fidex***: lead judge still unverified (bible flag 9): not named. Para 74 quote used (LS1 V). Predecessor rule FA 1996 Sch 9 para 13 confirmed via the 2014 UT summary.
5. ***Syngenta***: no UT substantive decision found (search, October 2026). Apportionment ground per commentary (secondary). **Check before publication** (bible flag 9 remains open).
6. ***Greene King***: used only for the FA 1996 origin; holding not taught (bible flag 9 partly open).
7. ***Union Castle***: described per LS4 (claimed £39.1m debit from amounts in equity; appeals of Union Castle and Ladbrokes dismissed). Not re-read.
8. **Supreme Court refusals**: stated as "October 2024" (LS1: list dated 13 October 2024, a Sunday; bible flag 8 date point still open). *BlackRock* cited as [2024] EWCA Civ 330 (bible flag 8 ruling followed).
9. **Withholding rate 20% for 2026/27** (ITA 2007 s 874) stated as the basic rate; still secondary per bible flag 43. 22% from 2027/28 is V.
10. **Election timing under reg 6A** (6 months; non-SAO 12 months; lock-in) from LS1 V plus CFM search; the exact lock-in period not stated in the text.
11. **Cash pooling** paragraph is a practice point (plan "[verify]"), labelled "not separately verified" in the reading edition.
12. **Alternative finance "Islamic principles"** and **shares with guaranteed returns** descriptions are outline only (Part 6 headings verified, text not opened).
13. **"From 2016 amounts in profit or loss"** attributed to HMRC's manual (CFM76010; S).
14. **Close company status of Tarnmoor subsidiaries** ("a subsidiary controlled by a widely held listed parent is not close") stated from general principle; CTA 2010 Part 10 not opened.
15. **Brackenwell convertible notes**: treated as plain debt in TPLC's hands (embedded derivative/bifurcation rules not considered); stated in both editions.
16. **Interest on trade debts**: trading or non-trading character not verified; text says only that it is a loan relationship credit.
17. **FA 2015 s 25 commencement** (ss 374, 377 omitted) still not opened; no date given in text (bible flag 10 partly open). F(No.2)A 2015 dates now sourced to HMRC guidance: s 361D from 18 November 2015; s 322(5B) from 1 January 2015 (bible flag 10 partly resolved).
18. **Grid exclusions in Part 5** (chapters 7, 10, 11, 13, 14): LS1 describes Ch 7 as "group relief: consortium debts"; not verified; the chapter does not name the excluded chapters' contents.

**Bible §5.2 flags touched:** 8 (followed: use 330; SC day not stated), 9 (Fidex judge open; Syngenta pending, re-checked; Greene King and Union Castle not taught beyond research), 10 (partly resolved as above), 13 (ss 455B–455D not used), 22 (COAP not used), 43 (still secondary).

## Contradictions with plan, bible or ledger

- Ledger §6 / plan §5: TFL swap "Disregard Regulations apply" → **no election; follows the accounts** (flag 1).
- Ledger §6 / plan §5: "arrangement fee £0.3m" vs £0.6m of amortisation → **two £0.3m fees** (flag 2).
- Law sheet 1 §3 reg 6 summary (designated fair value hedge as an automatic gateway) → inconsistent with HMRC guidance (flag 1).
- Bible §1A lists the *JTI* court as Lewison, Newey and Baker LJJ (correct as a panel); search suggests Newey LJ gave the lead judgment, whereas LS1's teaching note implies Lewison LJ's remarks at para 85. Not used in the chapter.

## Pronunciation guide

| Written | Say it |
|---|---|
| Fidex | FY-dex |
| Zephyr (Project Zephyr) | ZEF-er |
| Kwik-Fit | KWIK-fit |
| Syngenta | sin-JEN-tuh |
| LeTourneau | luh-TOOR-noh |
| Union Castle | YOON-yun KAH-sul |
| Brackenwell | BRACK-en-well |
| Hesketh (Tom) | HESS-keth |
| Asha Varma | AH-shuh VAR-muh |
| Eurobond | YOOR-oh-bond |
| amortised | uh-MOR-tized |
| Disregard Regulations | dis-ri-GARD |

## Bible update

**Cast (real cases, as used):** *Fidex Ltd v HMRC* [2016] EWCA Civ 385 (Project Zephyr; under FA 1996 Sch 9 para 13; para 74 quote); *Greene King plc v HMRC* [2016] EWCA Civ 782 (FA 1996 origin only); *Union Castle* [2020] EWCA Civ 547; *BlackRock* [2024] EWCA Civ 330 (brief; prologue owns); *Kwik-Fit* [2024] EWCA Civ 434 (Speedy 1, about £48m pre-2017 deficits: S); *JTI* [2024] EWCA Civ 652 (LeTourneau Technologies; US lender: S); *Syngenta* [2024] UKFTT 998 (TC), [2025] UKUT 338 (TCC) (pending at October 2026).

**Invented facts fixed:** see ledger additions. Calder's finance team (whose results are measured on Calder's post-tax profit) originated the GY2 pushdown idea; Tom Hesketh's board analysis; board declined and minuted. Tom Hesketh's five-question checklist for intra-group loans.

**Glossary terms explained (chapter 12):** connected companies relationship; amortised cost basis; fair value accounting; impairment; release; deemed release; corporate rescue exception; debt-for-equity / equity-for-debt exception; late-paid interest; unallowable purpose; tax avoidance purpose; NTLR deficit (AT depth); relevant non-lending relationship; disguised interest; derivative contract; hedging; Disregard Regulations; quoted Eurobond (introduced; chapter 23 owns). Also: substantial modification (s 323A); related transactions (s 352).

**Established facts (new, with source):**
- s 361D applies to acquisitions of impaired debt on or after 18 November 2015; s 362A parallel exception (CFM35570/35580: guidance).
- s 322(5B) corporate rescue exemption for releases on or after 1 January 2015 (CFM33191: guidance).
- s 463C: claims under s 463B(1) within 2 years after the end of the deficit period (legislation.gov.uk extract).
- Disregard Regulations: since periods from 2015 elect-in (reg 6A); default follow the accounts; automatic where hedged item not taxed per accounts; reg 9A revoked by SI 2015/1961 (CFM57040/57360/57072: guidance).

**Debates covered:** L2 (reach of unallowable purpose): profession (uncertainty for ordinary acquisition finance) v HMRC (factual question for tribunals); *Syngenta* apportionment point pending. L9 touched (Union Castle; profit or loss focus).

**Threads:** opened none; closed the GY2 rejected-proposal thread and the Brackenwell notes thread (chapter 14 picks up whether BSL's losses could have absorbed a credit: stated as not relied on).

## Ledger additions (for calder-ledger §8)

| Fact | Value |
|---|---|
| RCF arrangement fees | Two fees of **£300,000**: fee 1 on the £30m drawing (1 April GY1), fee 2 on the £24m drawing (1 July GY2). Effective interest amortisation, front-loaded: fee 1 £250,000 GY1, £50,000 GY2; fee 2 £200,000 GY2, £100,000 GY3. Totals £250,000 / £250,000 / £100,000 (unchanged) |
| TPLC non-trading debits | GY1 £8.80m (7.20 + 1.35 + 0.25); GY2 **£9.97m** (7.20 + 2.52 + 0.25); NTLR deficits surrendered £6.59m / £7.67m (unchanged) |
| TFL | CT on TTP £2.15m = **£537,500** a year; swap net settlements excluded from all figures; **no reg 6A election** (fair value hedge follows the accounts) |
| TEL copper futures | Trading derivatives; reg 6A election (pre-story). Illustration only (not story): £400,000 fair value gain, £100,000 CT deferred |
| BSL notes | Released by **29 August GY2** (within 60 days of 1 July); s 361D evidence: board minutes and BSL cash-flow forecasts; deemed release £1.2m avoided (£300,000 CT at 25% before any loss relief); TPLC write-off £1.8m (no debit, s 354); BSL release £3.0m (no credit, s 358); notes treated as plain debt |
| GY2 rejected pushdown | Originated by Calder's finance team; £24m at 6% = £1.44m a year; Calder CT saving £360,000; TFL extra CT £360,000; if disallowed, group cost £360,000 a year; board declined and minuted |
| TES | Claims (s 463B) to set its NTLR deficit (£4.2m interest) against its own property profits each period |
| Tarnmoor companies | None is close (late interest rules irrelevant) |
| Loans to TVS | No exchange movements in the story (story exchange rates ignored per ledger §2) |

Hypotheticals used and **not** story facts: £2.4m exchange gain (£600,000 tax); £10m/£4m/£6m deemed release; £10m fixed-rate loan; TEL late-payment interest on customer accounts.
