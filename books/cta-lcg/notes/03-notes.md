# Notes: Chapter 3, Returns, payments and enquiries

**Interpretation and assumptions (one line).** CTSA for larger companies and groups at AT depth (APs, filing dates, QIPs large/very large with the associated-company divisor and its counting date, truing up, GPAs, refund surrenders, enquiry windows, discovery, penalties and interest), told through Calder's entry into Tarnmoor; FY2026 law; where verification contradicted the ledger's provisional QIP facts, the verified (HMRC guidance) position is used and flagged below.

Files: `chapters/03-returns-payments-enquiries.txt` (audio script, 7,054 words; target 7,000), `chapters/03-returns-payments-enquiries-reading.md` (reading edition, 7,273 words). Computations: scratch `.../scratchpad/lcg-ch03/calc.py` (all figures re-run). `ledger-check.py` re-run: 96 checks, 0 failures (not edited).

---

## Sources by section

Research files (opened): `research/law-sheet-1-ct-core.md` §8, §9, §11, §12; `research/law-sheet-4-accounting-misc.md` §9 (Part 22 Ch 4); `research/exam-intel.md` (paper tables M23–M26; traps 13, 14; style); `research/lcg-grid-extract-v2.txt` (grades); `book-bible.md` §3.2–3.4, §4.1, §5.2; `calder-ledger.md`; `book-plan.md` §0, §3, §5 (ch 3), §6, §11. TKS files not available (addendum).

WebSearch (12 of 12 used; WebFetch not used):

1. `CTM92520 very large company quarterly instalment £20 million threshold associated companies divided` → https://www.gov.uk/hmrc-internal-manuals/company-taxation-manual/ctm92520 ; https://www.gov.uk/hmrc-internal-manuals/company-taxation-manual/ctm92800 ; COM95001. Relied on: very large > £20m from APs beginning on or after 1 April 2019; divided by associates and scaled for short APs; months 3, 6, 9, 12; "the period of grace referred to in CTM92530 will not apply in determining if a company is very large"; £10,000 liability floor.
2. `quarterly instalment payments associated companies counted ... CTM92800 OR CTM03570 OR "18E"` → CTM92530; CTM03580; CTM03940; gofile.co.uk QIP and associated companies pages; haysmac.com. Relied on: CTM92530 counting at the day before the AP begins; CTM03580 (associated for part of an AP counts, for SPR/MR).
3. `CTM92530 quarterly instalments special cases associated companies "previous accounting period" ...` → https://www.gov.uk/hmrc-internal-manuals/company-taxation-manual/ctm92530 ; COM95001. Relied on: reg 3(4) £10,000 de minimis; reg 3(5) £10m and not large in previous 12 months; £10m reduced by associated companies (APs after 31 March 2023) "counted ... as at the day before the start of the accounting period, or on the first day of the accounting period if the previous day did not fall within an accounting period".
4. `legislation.gov.uk uksi 1998/3175 regulation 3 ...` → legislation.gov.uk CTA 2010 Part 3 crossheading (2014 version); lawplayer SI 2017/1072; CTM03560. Relied on only for: SI 2017/1072 substituted reg 3 with large and very large definitions; reg 3(5) (2011) applied CTA 2010 ss 24–30 "with modifications". **Reg 3's current text not retrieved.**
5. `"Finance Act 1998" Schedule 18 paragraph 14 filing date period of account more than 12 months "30 months"` → https://gov.uk/hmrc-internal-manuals/company-taxation-manual/ctm93040 ; https://www.icas.com/landing/tax/corporation-tax-returns-for-extended-accounting-periods-practical-issues ; COM130070. Relied on: para 14(1) four dates (12 months after AP end; 12 months after POA end if POA ≤ 18 months; 30 months after POA start if > 18 months; 3 months after notice), latest wins; para 14(2) relevant POA = POA in which the AP's last day falls.
6. `CTA 2010 section 963 surrender of tax refund within group ...` → https://www.legislation.gov.uk/ukpga/2010/4/section/963 (and Explanatory Notes); COM122020; CTM92740; CTM92750; CTM92760; COM95060. Relied on: s 963(1)–(2) (surrender of all or part; joint notice); group = group relief (75%) group; same AP; membership from start of AP to notice; notice before refund; QIP reg 9 gives the recipient the actual payment dates (CTM92740).
7. `very large company quarterly instalments accounting period less than 12 months ... regulation 5A CTM92810` → CTM92810 (12-month example: 14 March/June/September/December 2020); CTM92800 ("very large in the first accounting period that they exceed the threshold").
8. `CTM92815 very large companies due dates accounting period less than 12 months instalments` → https://gov.uk/hmrc-internal-manuals/company-taxation-manual/ctm92815 ; CTM92820. Relied on: final instalment 14 days after the end of the preceding month where the AP ends on a month end (i.e. 14th of the last month); first instalment 2 months 13 days after the start; later at 3-month intervals; dates on or after the final date drop out. Applied to Calder's 9-month AP: 14 June, 14 September, 14 December GY3.
9. `HMRC CIRD RDEC expenditure credit quarterly instalment payments ...` → https://www.gov.uk/hmrc-internal-manuals/corporate-intangibles-research-and-development-manual/cird89870 ; hcrlaw.com RDEC page; pkf-francisclark.co.uk; Tax Adviser magazine. Relied on: CIRD89870: RDEC not taken into account in calculating QIPs; claimed in the return; can then be used to discharge future QIPs; merged-scheme RDEC counts towards QIP status (Tax Adviser, secondary).
10. `HMRC interest rates late payment repayment 2026 corporation tax quarterly instalment interest rate current` → https://www.gov.uk/government/news/hmrc-revises-interest-rates-for-late-payments ; pie.tax; rossmartin.co.uk; accounts-os.com. Relied on: 7.75%/2.75% from 9 January 2026; QIP 6.25%/3.50% from 29 December 2025; late = Bank Rate + 4 (from 6 April 2025); repayment Bank Rate − 1, floor 0.5%. No later change found (one secondary source says Bank Rate held at 3.75% in June 2026).
11. `quarterly instalment payments penalty "regulation 13" ...` → https://www.gov.uk/hmrc-internal-manuals/enquiry-manual/em8330 ; COM95070; COM95012; EM8310. Relied on: penalty where a company "knowingly or recklessly" pays the wrong amount (or fraudulent/negligent reg 6 claim); maximum twice the reg 7 interest; only after the return is filed and the normal due date passed (COM95070).
12. `corporation tax quarterly instalment payments introduced accounting periods ending on or after 1 July 1999 transitional 60% 72% 88% ...` → https://gov.uk/hmrc-internal-manuals/cotax-manual/com95005 ; COM30110; https://www.legislation.gov.uk/uksi/1998/3175/made ; mondaq (KPMG 1999). Relied on: APs ending on or after 1 July 1999; 60% / 72% / 88% / 100% (APs ending on or after 1 July 2002); introduced alongside CTSA and phased over four years.

Law sheet V items restated without new search: TMA s 59F (GPA: 51% group; UK nominated company; same accounting date; up to date; liability stays with each company); FA 2004 s 55; Sch 18 paras 2, 17 (as amended by FA 2026 s 265), 18, 23, 24, 46; FA 2026 s 264; FA 2007 Sch 24 percentages; interest rates (TKS V, confirmed by search 10).

---

## Fact-check flags

1. **QIP associated-company counting date (resolves bible §5.2 flag 6 in part; CONTRADICTS the plan and ledger).** HMRC's CTM92530 says associates are counted as at the day before the AP begins (the statement appears in the £10m context; GoFile and Haysmac say the same for the £1.5m threshold). The regulation's current text (reg 3 as substituted by SI 2017/1072 and amended for associated companies from 1 April 2023) was **not opened**. The script and reading edition label it "HMRC's manual says". A reviewer with legislation.gov.uk access should read SI 1998/3175 reg 3 (and any reg 3(5)/(6) modification of CTA 2010 s 18E timing) to confirm.
2. **£20m divided by associates: VERIFIED** (CTM92520, CTM92800). **First-year grace for large only: VERIFIED** (CTM92530 reg 3(5); CTM92520/92800: no grace for very large). £10m grace limit divided by associates: verified (CTM92530).
3. **RDEC and QIPs (new; CONTRADICTS the plan's working).** CIRD89870: the RDEC is not taken into account in QIPs. Calder's instalments are therefore on £750,000 (4 × £187,500), not on the net £350,000. Net CT for the AP remains £350,000 (ledger unchanged).
4. **Long periods (resolves bible §5.2 flag 7):** Sch 18 para 14 verified via CTM93040 and ICAS (secondary extract of the statute); the statute page itself was not opened.
5. **Refund surrender group test:** law sheet 4 said "Part 5 group relief definition" (V); confirmed by COM122020 (75% group relief group). Same-AP condition from COM122020. s 966 (payments for surrender) cited only as "dealt with by s 966" (content not opened).
6. **GPA allocation mechanics** ("single payment allocated among members once liabilities are known"): described as HMRC's guidance from general knowledge of the GOV.UK GPA page; not re-opened this session (search budget). Low risk; reviewer to confirm.
7. **Discovery protection** (careless/deliberate, or information made available; Sch 18 paras 41 onwards): stated "in broad terms" from general knowledge; paragraph numbers and wording not opened. Reviewer to confirm (Sch 18 paras 41–45).
8. **Reg 13 wording:** EM8330 says "knowingly or recklessly"; the regulation itself was not opened (it may say "deliberately or recklessly"). Both editions use "knowingly or recklessly".
9. **Very large short-AP dates** from CTM92815 (manual); regulation (reg 5A or equivalent) not opened. Instalment amount 3/n of total liability: standard rule, stated from the regulations' scheme (not re-opened).
10. **FA 2026 s 264** described exactly as law sheet 1 (V). Whether FA 2009 Sch 56 otherwise applies to CT was not asserted.
11. **Augmented profits** described in general terms (TTP plus exempt distributions other than from group companies); the precise exclusion (51% group / associated) not re-verified.
12. **No case law** in this chapter (no verified administrative cases in the law sheets; search budget spent on statute). The brief asks for real cases; this chapter uses documented regulatory history and examiners' reports instead. Consider adding *HMRC v Tooth* [2021] UKSC 17 (discovery) at review if verified.
13. **Notification under Sch 41**: percentages not stated (not verified).
14. Bible §5.2 flag 53 (RC's first-year QIP exemption in the Ridgeway year): on HMRC's counting date, RC's associates are counted on the day before its first AP after acquisition begins; since RH is acquired on 1 April (= RC's AP start), RC's divisor for that AP would be 1 (or its own Ridgeway-group count), not 11. **Chapter 31 should re-check** (likely: not large on £600,000 profits anyway, since £600,000 < £1.5m).
15. Check the 2027 grid: no grade change expected for these rows (all 1).

## Contradictions with plan, bible or ledger

- **C1 (ledger §7 GY1; plan ch 3 brief; plan §6.6; bible §1B Calder row):** "Calder very large in its first group AP (augmented profits £3.0m > £2,222,222): instalments in months 3, 6, 9, 12; CT after RDEC £350,000." **Correction:** on HMRC's counting date (31 March GY1, no associates) Calder's QIP divisor for AP 1 April GY1–31 March GY2 is 1: **large, not very large**; no grace (large before); instalments 14 October GY1, 14 January, 14 April, 14 July GY2 of **£187,500** each on CT before RDEC of **£750,000** (CIRD89870); RDEC £400,000 recovered via the return; net CT £350,000. Calder is **very large from AP 1 April GY2** (divisor 9 at 31 March GY2).
- **C2 (ledger §3 thresholds; plan §6.6 "GY1 £2.22m; GY2–GY4 £2.0m"):** these are marginal-relief divisors (associates at any time in the AP). For **QIPs**, 31 December companies count at the end of the previous year: **GY1 divisor 8 (£2,500,000 / £187,500)**, **GY2 divisor 9 (£2,222,222 / £166,667)**, **GY3–GY4 divisor 10 (£2,000,000 / £150,000)**; GY5 divisor 10 (Helmside joins 1 March GY5, after the count; TWS still counted at 31 Dec GY4); GY6 divisor 10 (HEL in, TWS out; TAL joins 1 Feb GY6, after the count). Ledger-check arithmetic is unaffected; the labels need a note.
- **C3 (plan ch 3 misconception):** "a company in its first year in a group can't be very large (associated companies divide the threshold at once)". On HMRC's reading the divisor does **not** apply at once for QIPs. The chapter uses instead: "every company gets a year's grace" (false for very large), plus the two-timings point (marginal relief at once; QIPs from the next AP).
- **C4 (law sheet 4 §9):** s 963 group "Part 5 group relief definition" is correct; the bible glossary wording is fine.

## Pronunciation guide

| Written | Say it |
|---|---|
| Tarnmoor | TARN-moor |
| Calder | KAWL-der |
| Brackenwell | BRACK-un-well |
| Oldroyd | OLD-royd |
| Graham Pike | GRAY-um pike |
| Tom Hesketh | tom HESS-keth |
| Vallaria | vuh-LAIR-ee-uh |
| H M R C | aitch em ar see |
| fifty nine F | fifty-nine eff |
| eighteen E to eighteen J | eighteen ee to eighteen jay |
| R and D | ar and dee |

## Bible update

**Cast introduced or used:** no new real people or cases. Invented: Graham Pike (Calder FD) asks the QIP question; Tom Hesketh sets up the GPA.

**Glossary terms explained (chapter 3):** large company; very large company; augmented profits (recap); associated company (recap, with the QIP counting date); year of grace (large-company first-year exemption); truing up; group payment arrangement; nominated company; refund surrender (Part 22 Ch 4; reg 9); filing date (follows the POA); enquiry window (group other than a small group); closure notice; discovery assessment (recap); persistent late filing; tax-geared late filing penalty.

**Established facts fixed (with source):**
- Very large regime: APs beginning on or after 1 April 2019; no grace (CTM92520, CTM92800).
- QIP associates counted at the day before the AP begins (CTM92530; HMRC view).
- De minimis £10,000 (reg 3(4)); grace £10m divided and not large in previous 12 months (reg 3(5)) (CTM92530).
- RDEC not taken into account in QIPs (CIRD89870).
- Very large short-AP dates (CTM92815).
- QIPs began for APs ending on or after 1 July 1999; 60/72/88/100% phasing to APs ending on or after 1 July 2002 (COM95005).
- Filing date rules incl. 30 months for POA > 18 months (Sch 18 para 14; CTM93040).
- s 963: 75% group, same AP, joint notice before refund; reg 9 (COM122020, CTM92740).
- Reg 13 QIP penalty: max 2 × interest (EM8330).
- Interest rates as bible §3.3 (confirmed).

**Debates:** none central; L10 (transparency) touched only via disclosure reducing discovery risk.

**Open threads:** created: Calder's GY3 enquiry (1 June GY5) foreshadowed for chapter 27. Closed: Brackenwell's persistent-penalty risk (return for year to 31 December GY1 filed on time).

## Ledger additions (new story facts fixed by this chapter)

1. Calder QIP status: AP 1 Apr GY1–31 Mar GY2 **large** (QIP divisor 1); instalments **£187,500** × 4 on **14 Oct GY1, 14 Jan GY2, 14 Apr GY2, 14 Jul GY2** (total £750,000); RDEC £400,000 claimed in an early-filed return (summer GY2) and applied against the next AP's QIPs; net CT £350,000 (unchanged).
2. Calder AP 1 Apr GY2–31 Mar GY3: **very large** (divisor 9 at 31 Mar GY2; threshold £2,222,222); forecast profits "comfortably above" the threshold (no figure fixed); instalments 14 Jun, 14 Sep, 14 Dec GY2, 14 Mar GY3. Six Calder instalment dates in calendar GY2.
3. Calder 9-month AP GY3: divisor 10 (9 associates at 31 Mar GY3); very large threshold £1,500,000; three instalments (one third each) on 14 Jun, 14 Sep, 14 Dec GY3; truing up after the 15 June announcement and 1 October sale.
4. QIP divisors for 31 December companies: GY1 8; GY2 9; GY3–GY6 10 (see C2).
5. **Group payment arrangement from GY3** for the 31 December UK companies, **TFL nominated**; Calder joins from GY4.
6. **GY2 refund surrender:** TES overpaid **£569,375** (tax at 25% on the expected £2,277,500 depot gain; sale slipped to 30 April GY3); TEL's instalments **4 × £405,000 = £1,620,000** against liability £2,020,000 (short **£400,000**); TES surrenders **£400,000** to TEL (s 963; reg 9) and is repaid **£169,375**; simplified interest saving **£13,291** (months 19/16/13/10 to 1 October GY3); rule of thumb £11,000 a year.
7. **Brackenwell:** its return for the year to 31 December GY1 (carrying the ERIS payable credit claim £943,950) was unfiled at completion (1 July GY2); its two previous returns were late; Tarnmoor files it before 31 December GY2; persistent penalty (£1,000/£2,000) avoided.
8. Calder's GY3 return: filing date 31 December GY4; enquiry window to 31 December GY5 (consistent with ledger GY5 entry); discovery limits 31 December GY7 / GY9 / GY23.
9. Calder had been large in its last standalone years (consistent with TKS "large in the prior year").
