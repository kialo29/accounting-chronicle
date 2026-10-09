# Notes: Chapter 28, The corporate interest restriction

**Interpretation and assumptions.** Full AT-depth chapter on TIOPA 2010 Part 10 and Sch 7A (core), built around Tarnmoor's GY1–GY3 CIR figures; fixed ratio throughout; labelled hypotheticals for the de minimis, PIE (Helmside, GY5) and FA 2026 s 62 (TEL flood contribution). **One deliberate departure from the canonical GY3 figures** (TEL's lease finance charge, see Contradictions 1). Story assumption fixed here: Tarnmoor entered GY1 with no CIR amounts brought forward.

Files: `chapters/28-corporate-interest-restriction.txt` (8,268 words; target 8,000), `chapters/28-corporate-interest-restriction-reading.md` (9,092 words). Python: scratchpad `lcg-ch28/calc.py` (all CIR steps GY1–GY3, pro rata allocation, TP effects, PIE, de minimis, s 62). `ledger-check.py`: 132 checks, 0 failures (ledger not edited).

## Sources by section

Research files: law sheet 1 §1 (CIR rows, all V), §10 (Action 4 story, V), §11 traps 1–8; law sheet 5 B5 (TP before CIR, M26 marking point [S]), A5 (s 371IE); exam-intel (M26 Q1, M24 Q1, M24 Q6, N24 Q5, M23 Q3; trap 16); book-bible §3.9; continuity rulings R3, R4, R5, R6, R13, R15; chapters 0, 1, 5, 6, 7, 9, 11, 12, 13, 14 reading editions (recaps checked).

WebSearch (12 used, standard mode; WebFetch unavailable):
1. "TIOPA 2010 section 382 tax-interest expense amounts finance lease ..." → legislation.gov.uk s 382 (Conditions A, B, C; Condition C = finance lease, debt factoring, service concession accounted for as financial liability; banner "no known outstanding effects"); CFM95660 (lease example £600,000/£500,000 → £20,000 a year, lessor and lessee). **V-statute / V-HMRC.**
2. "s 394 unused interest allowance ... reactivated" → CFM98620, CFM98610, CFM98700, CFM98230 extracts (reactivation needs full return and statement of allocated reactivations; earliest opportunity; no disallowance and reactivation in same period; carry forward at company level, indefinite). s 394 text **not** seen. Extract described the reactivation cap loosely as "the interest allowance"; law sheet 1 (V) and R5 give allowance − ANTIE: used.
3. "CFM95720 ... chargeable gains allowable losses condition A condition B" → CFM95720 (Conditions A and B; can be negative; exclusion for other-period losses does not apply to capital losses; capital losses excluded from Condition B: extract truncated), CFM96620 (group-EBITDA chargeable gains election irrevocable), CFM95735. **V-HMRC (truncated).**
4. "section 461 ... relevant avoidance arrangements" → legislation.gov.uk Part 10 Ch 10; CFM98010 (Conditions A and B; scope; not where another rule neutralises; s 461(7) breadth). **V-statute extract / V-HMRC.**
5. "non coterminous ... disregarded period ... time basis" → HMRC CFM extract (s 382(7)–(8), s 385(8), s 406(6): disregarded periods; just and reasonable; time apportionment usually suitable); CFM98320. **V-HMRC.**
6. "First-tier Tribunal corporate interest restriction reporting company ..." → no tribunal decision found; ICAEW "HMRC relaxes its position on the corporate interest restriction" (April 2025: HMRC's June 2023 announcement that it would appoint reporting companies only in limited circumstances; reconsidered after representations); taxjournal "corporate interest restriction penalties"; CIOT policy page; GOV.UK policy paper (26 November 2025). **Secondary for the 2023 episode.**
7. "section 410 net group-interest expense ... finance lease" → CFM95905, CFM95920, CFM95930 (relevant expense amounts include financing charges implicit in finance leases), CFM96020 (QNGIE excludes related-party, results-dependent, equity notes); s 410(5A) capitalised interest. **V-HMRC.**
8. "relevant derivative contract debits ... regulations 7, 8 and 9" → CFM95650 (subject matters: interest rates, price or income indices, currency, corporate debt), CFM96080, ss 420–421 cross-heading (relevant assumptions: reg 6A elections deemed for group measures). **V-HMRC.**
9. "qualifying infrastructure company election s 434 ..." → CFM97240 (election before end of the AP; revocation not effective for a period beginning within 5 years of the first period), CFM97190, CFM97210, CFM97320, CFM97290 (joint elections). **V-HMRC.**
10. "allocated disallowance ... paragraph 22" → CFM98580 (statement; allocations sum to total; non-negative; cap sentence truncated), CFM97720 (cap at company's net tax-interest expense, "consistent with the general rules"), CFM98590 (pro rata; net income company = nil), legislation.gov.uk s 375 (non-consenting company election). **V-HMRC (cap via REIT page).**
11. "section 383 relevant loan relationship debit exchange loss impairment" → CFM95630 (exchange gains/losses and impairment losses and reversals excluded), CFM38155 (s 441 can reach them). **V-HMRC.**
12. "OECD BEPS Action 4 ... corridor 10% to 30%" → EY Global Tax News (14 October 2015), Deloitte alert (6 October 2015), Clifford Chance briefing: corridor 10–30%, group ratio supplement, optional de minimis and carry-forwards, infrastructure. **Secondary** (oecd.org not consulted).

## Fact-check flags

1. **Reactivated amounts not counted again in ANTIE** (GY3): book's reading of the structure (consistent with the canonical ANTIE). Statute (s 380 and the s 382 definitions) not seen. Script states it plainly; reading edition labels it "the book's reading".
2. **No unused allowance in GY3** (s 394): still the book's reading (R5), labelled in both editions; s 394 text not seen.
3. **Interest reactivation cap = interest allowance − ANTIE** (law sheet 1 V; R5). One search extract paraphrased the cap as "the interest allowance"; consequence taught ("brought-forward unused allowance does not create reactivation capacity") follows from the law-sheet definition. Reviewer: confirm s 373(5).
4. **Allocation cap at the company's net tax-interest expense**: HMRC via CFM97720/98580 extracts (main cap sentence truncated); labelled "on HMRC's guidance".
5. **Capital losses in tax-EBITDA**: CFM95720 extract truncated; labelled HMRC's view. Bible §5.2 flag 15 (s 407 gains and capital losses) → **resolved as HMRC's view** (net gains after losses actually used, including b/f capital losses used; unused capital losses ignored); s 394 limb → **still open** (book's reading).
6. **Para 20 IRR content** (authorising companies listed in the return): law sheet 1 says the para 20 changes take effect from a date set by HMRC regulations; both editions say so.
7. **Leases after IFRS 16**: tax-interest for leases that would have been finance leases is the ICAEW reading reported in chapter 5 [S]; labelled "the profession's reading". FA 2019 Sch 14 paras 18–19 cited from chapter 5, not re-opened.
8. **PIE section numbers**: s 433 (QIC) and s 434 (election), s 435 (joint) from search extracts; limited-recourse and tax-EBITDA-nil rules cited as ss 438–441 collectively (law sheet: "esp. ss 433, 438, 439, 441"); individual allocation not confirmed.
9. **Blended group ratio etc.**: headings only (law sheet V headings); described in one line each.
10. **HMRC's June 2023 stance and reconsideration**: from the ICAEW April 2025 item via search extract (secondary). Script says "announced ... reconsidered"; no dates beyond June 2023 and the Budget (26 November 2025) are stated.
11. **OECD corridor 10–30%** and interim (2014) / update (December 2016) dates: secondary (EY/Deloitte) and law sheet 1 §10.
12. **Exam lens grade**: CIR 1 on the 2026 grid; check the 2027 grid when published (it falls to 2 in the 2028 grid; no effect for May 2027 on current evidence).
13. **TFL swap**: settlements left out of all figures (ledger §6); group-measure "relevant assumptions" (ss 420–421) noted from CFM96080 extract; no number depends on it.
14. **No CIR case law** found (search 6); chapter names none and says so in the reading edition references.
15. R6 suggestion ("CIR assumes regs 7–9 apply for tax-interest: CFM98380"): the search found the assumption for the **group** measures (ss 420–421, CFM96080) and the closed 2018 transitional election, not for company tax-interest; chapter states only the group-measure point.

## Contradictions (with the plan, ledger and rulings)

1. **GY3 CIR figures change because of TEL's long funding lease (chapter 9).** Chapter 9 (batch 1) fixed a 10-year **finance lease** from an unconnected lessor from 1 January GY3 with a GY3 finance charge of **£90,000**. That cost is **tax-interest** (TIOPA s 382 Condition C, finance lease; CFM95660) and a relevant expense amount in ANGIE (s 411; CFM95930). The canonical GY3 CIR (set before chapter 9) omitted it. Chapter 9 also promised that chapter 28 would explain lease finance charges in the CIR, so it could not be left out. Chapter 28 therefore uses (Python-checked):
   - ANTIE GY3 **£24.44m** (was 24.35); ANGIE **£31.64m** (was 31.55); group ratio **16.14%** (was 16.10%; allowance at group ratio £14.16m);
   - interest reactivation cap and **reactivation £1.87m** (was 1.96); **disallowed amounts c/f £2.64m** (was 2.55); no unused allowance (unchanged conclusion);
   - TPLC GY3 non-trading debits **£8.50m + £1.87m = £10.37m**; reactivation CT value **£467,500**.
   GY1 and GY2 are unchanged. Tax-EBITDA unchanged (TEL's £58.0m is read as before the finance charge, which is tax-interest).
   **Fix needed in (if the orchestrator adopts this):** `calder-ledger.md` §7 GY3 CIR bullet and §8 GY3 "CIR GY3 composition" (and §5 note if any); `continuity-rulings.md` R4/R5 numbers (reactivation 1.96 → 1.87; c/f 2.55 → 2.64) as an amendment; `06-deferred-tax-reading.md` line ~323 "Tarnmoor reactivates £1.96m in GY3" → **£1.87m** (and any script equivalent in `06-deferred-tax.txt`); `ledger-check.py` if it tests 24.35 / 1.96 / 2.55 (I did not edit it; it still reports 0 failures because it reads the ledger only). `14-losses` says "some ... was reactivated in GY3": no number, no change. Plan §5 chapter 28 table superseded for GY3.
   If the orchestrator prefers the canonical 1.96 / 2.55, the alternative is to treat TEL's lease as outside the story's CIR figures (like the swap settlements), but then chapter 9's lease must be removed or the chapter must say the £90,000 is ignored; I recommend adopting the corrected figures.
2. **Chapter 14 WE 14.3** still shows TPLC surrendering £12,490k (pre-R3). Chapter 28 uses R3's figures implicitly (deficits £6.59m / £7.67m are unaffected). Pending R3 fix in chapter 14; not mine to edit.
3. **Plan wording** "group ratio % ... 16.10%" for GY3: superseded by 16.14% (contradiction 1).
4. **Bible §3.9 / plan**: "interest reactivation cap" description in plan ("Reactivation cap / reactivated 1.96 / 1.96") → 1.87 / 1.87.
5. Chapter 1 reading line 192 ("GY1 disallowance £2.21m, chapter 28"): consistent.

## Pronunciation guide

| Written | Say it |
|---|---|
| E B I T D A | ee bee eye tee dee ay |
| fungible | FUN-jih-bul |
| O E C D | oh ee see dee |
| Helmside | HELM-side |
| Tarnmoor | TARN-moor |
| Vallarian | vuh-LAIR-ee-un |
| Marrovia | muh-ROH-vee-uh |
| reactivation | ree-ak-tih-VAY-shun |
| de minimis | day MIN-ih-miss |
| Nadia Kerr | NAH-dee-uh KER |
| Tom Hesketh | tom HESS-keth |
| Brackenwell | BRACK-un-well |
| Lisbon | LIZ-bun |

## Bible update

**Cast introduced / used.** No real case on Part 10 (none found). Real documents: OECD BEPS Action 4 Final Report (October 2015), quoted at CFM95130 ("It is an empirical matter of fact that money is mobile and fungible"); HMRC's June 2023 announcement on appointing reporting companies and its later reconsideration (ICAEW, April 2025; secondary); policy paper *Corporate interest restriction: reporting companies* (26 November 2025). Invented: Nadia Kerr (board and treasury forecast view), Tom Hesketh (year-end appointment routine).

**Glossary terms explained (chapter 28):** corporate interest restriction; worldwide group (AT depth); disregarded period; tax-interest (Conditions A–C); net tax-interest expense/income; aggregate net tax-interest expense (ANTIE); aggregate net tax-interest income (ANTII); tax-EBITDA (Conditions A and B; qualifying tax reliefs); adjusted net group-interest expense (ANGIE); qualifying net group-interest expense (QNGIE); group-EBITDA; fixed ratio method; fixed ratio debt cap; excess debt cap and carry-forward limit; group ratio method and percentage; group ratio debt cap; basic interest allowance; interest allowance; interest capacity; de minimis amount; total disallowed amount; statement of allocated interest restrictions; non-consenting company; reactivation; interest reactivation cap; statement of allocated interest reactivations; unused interest allowance; reporting company; interest restriction return (full, abbreviated); public infrastructure exemption; qualifying infrastructure company; regime anti-avoidance rule (s 461).

**Established facts fixed (with source):** s 382 Conditions A–C (legislation.gov.uk); s 383 exclusions (CFM95630); s 384 subject matters (CFM95650); finance lease implicit cost in tax-interest and ANGIE (CFM95660, CFM95930); QNGIE exclusions (CFM96020); disregarded periods, time apportionment (CFM extract; s 382(8), s 406(6)); reactivation rules (CFM98610/98620/98700); group-EBITDA (chargeable gains) election irrevocable (CFM96620); QIC election timing and 5-year anti-cycling (CFM97240); s 461 conditions (CFM98010); OECD 10–30% corridor (secondary).

**Debates covered:** CIR as the group treated as one economic unit (L1 thread from chapter 1); the "thirty per cent of UK earnings" logic versus business judgement (Nadia's forecast); HMRC's summaries looser than statute (CFM95805 again; chapter 11).

**Open threads:** GY3 TPLC deficit of £10.37m to TEL (chapter 15 to surrender); £2.64m disallowed amounts c/f at end GY3 (later chapters may reactivate; GY4 CIR not computed); TIL loan TP income reduces ANTIE from GY4 (direction only); DTA on c/f disallowances (judgement; none recognised at end GY2).

## Ledger additions (new story facts fixed by chapter 28)

- **Pre-story:** Tarnmoor entered GY1 with **no** CIR disallowed amounts, unused interest allowance or excess debt cap brought forward.
- **GY3 CIR (corrected; see Contradiction 1):** ANTIE **£24.44m** (incl. TEL lease finance charge £0.09m); ANGIE **£31.64m**; group ratio 16.14%; reactivation **£1.87m** (TPLC); c/f **£2.64m**; no unused allowance.
- **Excess debt cap generated:** GY1 **£2.21m**; GY2 **£4.51m**; GY3 **£4.51m**. Fixed ratio debt caps: GY1 £31.85m; GY2 £35.23m; GY3 £36.15m.
- **Net tax-interest by company, GY1:** TEL £12.0m; TWS £2.4m; TES £4.2m; TPLC £8.8m (expense total £27.4m); TFL net income **£2.75m**.
- **Pro rata alternative (not used), GY1:** TEL £967,883; TWS £193,577; TES £338,759; TPLC £709,781.
- **Allocation rationale:** all disallowances to TPLC (stays in the group; TWS demerges GY5); default s 377 order (NTLR debits first).
- **TPLC non-trading debits GY3:** £8.50m + reactivated £1.87m = **£10.37m** (NTLR deficit £10.37m; surrender is chapter 15's).
- **TP effect on CIR, GY1:** services adjustment £0.5m raised tax-EBITDA by £0.5m and capacity by £0.15m; without it the disallowance would have been £2.36m (saving £37,500 CT against £125,000 TP cost).
- **Tax values:** GY1 disallowance £552,500; GY2 £575,000; GY3 reactivation £467,500.
- **Practice (invented):** TPLC appointed reporting company each year by authorisations from every eligible UK company; full IRR every year.
- **Not story (labelled):** de minimis example (£2.5m / £5m → £0.5m); Helmside QIC example (£2.8m interest, £6.0m tax-EBITDA, net +£1.0m); TEL £300,000 s 86A flood contribution (£90,000 of allowance protected by FA 2026 s 62).

## Continuity fixes applied (R18–R29; reviewer F, stage 0)

- **R19 (TES lease gain after indexation):** reading WE 28.3 TES comment now "property and other profits 14,311,000 + net gains 489,000"; "TES's gains (GY3)" paragraph now gives the lease assignment gain of £189,000 (after indexation: chapter 16) and net gains £489,000. Script: "four hundred and eighty nine thousand pounds of net gains"; "the gain on assigning a lease, after indexation". TES tax-EBITDA (£14.8m) and all CIR totals unchanged.
- **R20 (one canonical GY3 position):** WE 28.5 GY3 column labelled "as filed" (24.44 / 31.64 / 1.87 / 2.64 unchanged). New passage "A return revisited (GY6)" after "GY3: no unused allowance": Calder +£2.0m (8.6 → 10.6); TPLC must file a revised return within 3 months (Sch 7A para 8(4); CFM98645); revised aggregate £89.7m, allowance £26.91m, reactivation £2.47m, c/f £2.04m, TPLC NTLR debits £10.97m; TPLC amends its GY3 return (CFM98640) but TEL's Sch 18 para 74 window closed 31 December GY5, so the extra £0.6m deficit stays in TPLC (stranded on the book's s 188BE reading; tax forgone £150,000; CFM98645 warns). "Unused allowance" paragraph now cites HMRC's guidance (CFM98240) instead of "this book's reading of ss 394–396". Tax-effect line: "£2.64m as filed (£2.04m after the GY6 revision) still waiting". Key figures story row: revised GY6 figures added. Takeaway updated. References: Sch 7A para 8, CFM98240, CFM98640, CFM98645, FA 1998 Sch 18 para 74, CTA 2010 s 188BE. Script: four sentences added after "Two point six four million pounds stays in the queue for a later year"; unused-allowance sentence now cites HMRC's guidance; takeaway gives both positions. Python check (scratch `review-F/r20.py`): 89.7 × 30% = 26.91; 26.91 − 24.44 = 2.47; 4.51 − 2.47 = 2.04; 8.50 + 2.47 = 10.97.
- **Fact-check flag 2 (no unused allowance in GY3):** now **HMRC's view (V-HMRC, CFM98240)** per R20. **Flag 3 (reactivation cap):** s 373(3) per R20 (V-statute secondary copy / V-HMRC).
- **Contradiction 1:** adopted by R20. **Contradiction 2:** already fixed (R27). **R21:** the chapter never uses £585,000 (checked).
