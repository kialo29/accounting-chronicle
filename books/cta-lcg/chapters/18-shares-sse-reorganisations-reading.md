# Chapter eighteen: Shares: the exemption, reorganisations and earn-outs

During the sale of one of its businesses, a group managing director at Euromoney Institutional Investor plc (the company later renamed Delinian) set out the idea in an email. The deal was to have been paid in shares and cash. It became shares and redeemable preference shares in the buyer. The email explained why: "The preference shares are the mechanism to avoid paying tax on the capital gain for the cash element of the transaction."

HMRC could hardly have asked for a clearer document. It denied share exchange relief and amended Euromoney's return, claiming a little over £10.48m of corporation tax. The case went through three courts, and Euromoney won every time. The law then asked whether avoiding tax was a *main* purpose of the arrangements as a whole. The tribunal found that it was *a* purpose, but not a main one, because the preference shares were a small part of a large commercial deal. The Court of Appeal agreed in November 2023 (*Delinian Ltd (formerly Euromoney Institutional Investor plc) v HMRC* [2023] EWCA Civ 1281). Parliament has since rewritten the rule (FA 2026 s 37), and you will meet the new version later in this chapter.

The story asks the question this chapter answers. When a company parts with shares, the law can give three quite different answers. It can **tax** the gain. It can **exempt** the gain, and refuse the loss. Or it can say that **nothing has happened**, and carry the old cost into the new shares. Which answer applies, and in what order you test them, is one of the most examined skills on the paper.

This chapter belongs to Part Three, The Group. Share pooling and identification, gilts and qualifying corporate bonds, reorganisations, conversions, stock dividends, the substantial shareholding exemption (SSE) and *Marren v Ingles* are all **core (grade 1)** on the LCG grid; TCGA 1992 ss 151E–151G are **non-core (grade 2)**. The chapter builds on *The Living Law* (TKS), chapter 23, which taught company gains, the matching rules and the outline of the SSE, and on chapter 16 of that book, which met the same ideas from the individual's side.

Most of the law is in the Taxation of Chargeable Gains Act 1992 (TCGA 1992), with the SSE in its Sch 7AC. A few rules sit in CTA 2009 and CTA 2010. Finance Act 2026 rewrote the share exchange anti-avoidance rule (s 137) and made no change to the SSE. We apply the law for FY2026 throughout.

---

## Three answers, and the order you ask the questions.

The examiner rewards candidates who test things in the right order. A company that disposes of shares should run five questions:

| Step | Question | Rule | If yes |
|---|---|---|---|
| 1 | Which shares have been disposed of? | TCGA 1992 ss 105–108 | Identify the acquisition and its cost |
| 2 | Is the asset really a debt? | TCGA 1992 ss 115–117 (s 117(A1)) | Loan relationship rules (CTA 2009 Part 5; chapter 12); gains code steps aside |
| 3 | Does the SSE apply? | Sch 7AC | Gain not chargeable; loss not allowable; **tested before** the no-disposal rules (para 4) |
| 4 | Is it a reorganisation, conversion or exchange? | ss 126–138A | No disposal; old cost carried into the new holding |
| 5 | Otherwise | TCGA 1992 ss 38, 42, 53 | Ordinary computation; indexation frozen at December 2017 |

Notice steps 3 and 4. Students who learnt reorganisations first tend to reach for "no disposal" as soon as they see shares swapped for shares. For a company with a qualifying holding that is the wrong answer: **the exemption wins**.

**Our invented group, Tarnmoor.** Tarnmoor plc (TPLC), its companies, its people and every number about them are invented for teaching. Three of its stories run through the chapter:

1. TPLC's **12% stake in Coldwater Instruments plc** (an invented AIM-quoted instrument maker), part of which it sells in GY4;
2. the **Helmside share exchange** on 1 March GY5, when TPLC issues its own shares to buy its joint venture partner's 40% of Helmside Energy Ltd (HEL);
3. the **cash earn-out** on Tarnmoor Engineering Ltd's (TEL's) sale of Tarnmoor Actuators Ltd (TAL) in GY6, and the receipts in GY7 and GY8.

---

## Which shares did you sell.

Companies and individuals do not match share disposals in the same way, and the difference is a favourite trap.

**Company identification rules (TCGA 1992 ss 105–107):**

1. **Same day** (s 105): securities of the same class acquired and disposed of on the same day in the same capacity are matched first.
2. **The 10-day rule** (s 107(3)): acquisitions in the **10 days before** the disposal, earliest first. These shares never enter the pool.
3. **The s 104 pool** (s 107(4)): the single pooled holding.
4. (The 1982 holding and later acquisitions follow, rarely relevant now.)

An individual instead matches with acquisitions in the **30 days after** a disposal. A company has **no 30-day rule**.

The 10-day rule closed a simple trick: a company with a pool carrying a large indexed cost could buy a few shares and sell almost at once, choosing which cost the sale came out of. Now shares bought just before a sale are matched with it.

**The indexed pool (s 110).** A company's s 104 pool carries two figures: **qualifying expenditure** (cost) and the **indexed pool**. Each "operative event" first increases the indexed pool by (RE − RL)/RL. Since FA 2018, **RE is the RPI for December 2017** (278.1), and the indexed rise is nil for any month after December 2017 (TCGA 1992 s 110; s 53(1B)). So a pool gets one final top-up to December 2017 and then freezes; shares bought later enter at cost only. (The syllabus examines s 110 itself only for TOMC; for LCG you need the pooling principle.)

Indexation can reduce a gain to nil but **cannot create or increase a loss** (s 53(2A)). The examiners reported after M25 that the weak spot in an otherwise good share question was "using indexation to enhance a loss".

> **Worked example 18.1: company matching (hypothetical; not a Tarnmoor story fact; £)**
>
> A company (not a Tarnmoor company) holds shares in a listed company, a 3% portfolio stake (so the SSE does not apply):
>
> | Date | Event | Shares | Cost | Indexed pool |
> |---|---|---|---|---|
> | June 2004 | Purchase | 100,000 | 150,000 | 150,000 |
> | Dec 2017 | Indexation to December 2017: 150,000 × 0.489 | | | 73,350 |
> | Later (after 2017) | Purchase (no indexation) | 50,000 | 200,000 | 200,000 |
> | | **s 104 pool** | **150,000** | **350,000** | **423,350** |
>
> It then buys **20,000** shares for £60,000 and, **5 days later**, sells **60,000** shares at £3.00 (proceeds £180,000).
>
> | Matching | 10-day acquisition | s 104 pool |
> |---|---|---|
> | Shares | 20,000 | 40,000 |
> | Proceeds (£3.00) | 60,000 | 120,000 |
> | Cost (pool: 350,000 × 40/150) | (60,000) | (93,333) |
> | Unindexed gain | nil | 26,667 |
> | Indexation (423,350 × 40/150 = 112,893; less cost 93,333) | — | (19,560) |
> | **Chargeable gain** | **nil** | **7,107** |
>
> Pool carried forward: 110,000 shares; cost £256,667; indexed pool £310,457.
>
> **Variant at £2.00 a share** (proceeds £120,000): 10-day shares: £40,000 − £60,000 = **loss £20,000**; pool shares: £80,000 − £93,333 = **loss £13,333**, and the £19,560 of indexation is simply lost (s 53(2A)). Total allowable loss £33,333.
>
> The factor 0.489 (June 2004 to December 2017) is the three-decimal factor used throughout this book; the exam supplies RPI figures in the tax tables.

**Tarnmoor.** TPLC bought its Coldwater shares in two tranches before the story began, both after December 2017, so there is no indexation in the pool:

| Tranche | Shares | % of Coldwater (40,000,000 shares) | Cost £ |
|---|---|---|---|
| 1 | 3,200,000 | 8% | 4,800,000 |
| 2 | 1,600,000 | 4% | 3,600,000 |
| **s 104 pool** | **4,800,000** | **12%** | **8,400,000** |

> **Exam lens: matching and pooling**
>
> - **Grade:** share pooling, identification of securities and indexation **1** (core; s 110 for TOMC only).
> - **Past appearances:** **M25 Q5** (20 marks: share disposals by an investment company: SSE across group members and the 12-month look-back, pooling and matching, base cost after a share-for-share exchange, b/f capital losses; "good", but weak on base cost after the exchange and on using indexation to enhance a loss).
> - **Traps:** the 30-day rule (individuals only); letting indexation create or increase a loss; indexing post-2017 acquisitions; forgetting that 10-day shares stay out of the pool.
> - **Layout:** a pool table with shares, cost and indexed pool columns; then a gains computation per matched acquisition. Use £ throughout (not £000).

---

## Bonds, gilts and the loan relationship wall.

**s 115:** gains on gilt-edged securities and qualifying corporate bonds (QCBs) are not chargeable gains. **s 117(A1):** for corporation tax, a QCB is **any asset representing a loan relationship of a company**. So when a company holds gilts, bonds, loan notes or any other debt claim, every profit and loss is a loan relationship credit or debit (chapter 12), usually following the accounts.

**Shares exchanged for loan notes.** For a company, loan notes received are QCBs by definition, so ss 127–131 do not give "paper for paper" (s 116(1)–(7); for CT every loan relationship asset is assumed to be a s 132 security when testing this, s 116(4A)). Under **s 116(10)** the gain on the shares is computed at the exchange and **held over**, to accrue when the notes are later disposed of or redeemed; the notes themselves are loan relationships. **If the SSE applies to the shares, it takes priority over s 116(10)** (Sch 7AC para 4): a frozen gain that would have been exempt is simply exempt.

**Conversions.** A company converting a loan note into shares has a loan relationship until conversion; the new shares are treated as acquired for the note's market value (s 116). s 108's identification rules for "relevant securities" (QCBs and some others: FIFO within 12 months, then LIFO) rarely matter to a company, because the debt is taxed as income.

**ss 151E–151G (non-core, grade 2).** s 151E: a Treasury power to bring certain loan relationship exchange gains and losses into TCGA; s 151F is blank (repealed); s 151G: a power to amend TCGA when the CTA 2009 s 533 conditions for non-qualifying shares change. Recognise them; there is nothing to compute.

> **Exam lens: gilts and QCBs**
>
> - **Grade:** gilt-edged securities and QCBs **1**; miscellaneous ss 151E–151G **2**.
> - **Traps:** treating a company's loan notes as a s 135 security; computing a chargeable gain on a company's bond (it is a loan relationship); forgetting that the SSE overrides s 116(10).

---

## Why the exemption exists.

*The Living Law*, chapter 23, told the origin story. Briefly: the SSE arrived in **Finance Act 2002**, for disposals on or after **1 April 2002**. The case made for it was competitiveness: other European holding company locations already exempted gains on selling trading subsidiaries, and without an equivalent the UK was a poor place for a group's holding company.

**The 2017 reforms (F(No.2)A 2017, disposals on or after 1 April 2017):** the **investing company trading requirement was repealed** (old para 18); the holding window became **12 months in the 6 years** before the disposal; the investee need be trading **immediately after** only if the buyer is connected or para 15A is relied on; and a separate exemption for qualifying institutional investors (para 3A) was added (CG53000; outside LCG's focus).

**The misconception: "the SSE is a relief you claim".** It is not. There is no claim, election or time limit. If the conditions are met, the gain is not a chargeable gain and **the loss is not an allowable loss**, whether the company wants that or not (Sch 7AC para 1; TCGA 1992 s 2A(2) as HMRC's CG40200 explains). A group holding a subsidiary that has fallen in value cannot keep the loss if the conditions are met at the date of disposal. Think of the SSE as a **wall around a qualifying holding**: neither gains nor losses get out.

**Why the symmetry.** A gain on shares in a trading company largely reflects profits the company has made, or will make, and those profits bear corporation tax inside the company; taxing the gain again would tax the same profits twice. If gains are kept out on that reasoning, losses must be kept out too, or groups would sell their failures and keep their successes.

---

## The substantial shareholding.

**The holding test (paras 7–9).** The investing company must have held a **substantial shareholding** throughout a **12-month period beginning not more than 6 years before the disposal**. Substantial means at least **10%** of:
- the ordinary share capital; **and**
- the profits available for distribution to equity holders; **and**
- the assets available to equity holders on a winding-up.

**Group aggregation (paras 9, 26).** Holdings of members of the investing company's **51% group** are aggregated (not the 75% gains group). If TPLC held 6% and TEL 5% of a company, each would be treated as holding 11%. M25 Q5 tested a holding spread across group members.

**Extensions of the holding period.** Time held by a group transferor on a no gain, no loss transfer counts (para 10); earlier holdings that became the present shares through a reorganisation (para 14) or demerger (para 15) count; and the hive-down rule (para 15A, below). A "twelve-month period" ends with the day before the first anniversary of its first day (para 28; CG53008).

> **Worked example 18.2: the Coldwater sale, GY4 (invented; £)**
>
> On **30 September GY4** TPLC sells 1,600,000 Coldwater shares (4% of Coldwater) at £3.10.
>
> | | £ |
> |---|---|
> | Proceeds (1,600,000 × £3.10) | 4,960,000 |
> | Cost from the s 104 pool (8,400,000 × 1,600,000/4,800,000) | (2,800,000) |
> | Gain (no indexation: post-2017 acquisitions) | 2,160,000 |
> | **Chargeable gain** | **nil: exempt (Sch 7AC para 1)** |
> | CT that would otherwise have been due at 25% | 540,000 |
>
> **SSE conditions:** TPLC held 12% of shares, profits and assets (one class of ordinary shares) for well over 12 months in the 6 years before the sale; Coldwater is a trading company throughout (next section).
>
> **Pool carried forward:** 3,200,000 shares (8%); cost **£5,600,000**.
>
> **The sell-by date.** The last 12-month period throughout which TPLC held at least 10% ended with the partial sale, so it began on or about 30 September GY3. A later sale of the remaining 8% is within the SSE if it occurs **not more than 6 years after that period began**, that is until about the end of September **GY9**, and only if Coldwater remains a qualifying (trading) company from the start of that period to the sale. After that, a gain on the 8% is chargeable and a loss allowable, on the £5.6m cost.

---

## The company you sell must trade.

**The investee requirement (paras 19–24).** The company invested in must be a **qualifying company** (a trading company, or the holding company of a trading group or trading subgroup) throughout the period from the **start of the latest 12-month period** by reference to which the holding test is met, to the disposal (para 19(1); CG53106). It must also be a qualifying company **immediately after the disposal only if** the buyer is connected with the seller, or the holding period relies on para 15A (para 19(2)).

**Trading company (para 20).** A company carrying on trading activities whose activities do not include, to a substantial extent, activities other than trading activities. "Substantial" is undefined; **HMRC's view is that it means more than 20%**, judged on indicators such as income, assets, expenses and management and staff time (HMRC practice, not law). In a group, the members' activities are taken together and **intra-group activities are ignored** (para 21(5)), so a group finance company lending within the group does not taint it.

**Joint venture look-through (paras 23–24).** Where a group member holds at least 10% of a joint venture company, the group is treated as carrying on a share of the JV's activities rather than holding an investment.

**Tarnmoor's evidence.** TPLC cannot see Coldwater's management accounts. Tom Hesketh, the group head of tax, files Coldwater's published annual reports with a note testing its cash, investment property and non-trading income against HMRC's 20% yardstick: Coldwater makes and sells instruments, and its cash is working capital. The note sits with the GY4 computation, because an enquiry into an exempt gain starts with that question.

> **Exam lens: the SSE conditions**
>
> - **Grade:** SSE **1** (core).
> - **Past appearances:** **M25 Q5** (20 marks; above); **N23 Q4** (20 marks: CT computation including **SSE on Irish shares: a loss is ignored**; "many computed the SSE loss unnecessarily"); **N23 Q2** (15 marks: a 50% JV sold with an earn-out; SSE); **M24 Q3** (15 marks: degrouping charge added to proceeds and SSE; well answered); **N24 Q3** (15 marks: SSE with pre-sale dividends, depreciatory transactions and value shifting).
> - **Style:** state each condition and apply it to the facts: 10% of shares, profits and assets; 12 months in 6 years; group aggregation (51%); investee trading (and when afterwards); conclusion. Half to one mark per point.
> - **Traps:** testing the *seller's* trading status (repealed in 2017); requiring the investee to trade after an unconnected sale; using the 75% group for aggregation; computing an SSE loss; calling the SSE a claim; forgetting that a holding below 10% can still qualify for up to 6 years.

---

## The wall stands in front of every door.

**Para 4: priority.** Whether there is a disposal for SSE purposes is decided **ignoring s 116(10), s 127 and s 192(2)(a)**. If the SSE then applies, those rules are disapplied. Without para 4, a company could use s 127 (via s 135) to defer a gain it would rather have exempt, or to keep a loss alive in the new shares. With it, the gain is exempt now, the loss is gone now, and the new shares are acquired at their value.

**Subsidiary exemptions.**
- **Para 2:** assets related to shares (options over shares, securities convertible into shares) held by a company that meets the main exemption conditions.
- **Para 3:** a run-off rule. If the main exemption would have applied to a disposal at some time in the previous **2 years**, and the investee has since ceased to be a qualifying company, a disposal may still be exempt where the seller (or its group) controlled the investee.
- **Para 3A:** qualifying institutional investors (outside LCG's focus).

**Para 5: anti-avoidance.** No exemption where, under arrangements whose **sole or main benefit** is that a gain will be exempt, an untaxed gain accrues after the investing company acquired control of the investee or after a major change in the investee's trading activities. The classic target: buy control of a company, move a valuable asset into it without a charge, sell the shares under the SSE.

**Para 6: exclusions.** No-gain/no-loss disposals (for example to another group company: chapter 17) and disposals already exempt under other rules.

**Failing the SSE to keep a loss.** A group can fail a condition (sell before 12 months, or after the investee has stopped trading). But **TCGA 1992 s 16A** (inserted by FA 2007 s 27, from 6 December 2006) denies a loss that accrues in connection with arrangements one of whose main purposes is to secure a tax advantage (CG15835, CG40241; HMRC's company guidance CG-APP8A, CG-APP9). A loss arising because a group genuinely sold early for commercial reasons is different; the evidence of purpose decides.

---

## Hive-downs and the M Group lesson.

A hive-down moves a business into a new subsidiary, which is then sold. The buyer gets a clean company; the seller hopes for an exempt share sale instead of taxable asset sales. The obstacle is the 12-month holding test.

**Para 15A.** Where the shares sold were acquired from another member of the seller's group, or the company sold acquired a trading asset from another group member, the seller is treated as having held the shares throughout any period during which the asset was used in a trade by a member of the seller's group. Where the holding period relies on para 15A, the investee must also be trading immediately after the sale (para 19(2)).

**The case.** *M Group Holdings Ltd v HMRC* [2023] UKUT 213 (TCC) (Upper Tribunal, 31 August 2023). The taxpayer had carried on its business as a stand-alone company. It formed a subsidiary in **June 2015**, hived its trade down in **September 2015**, and sold the subsidiary for about **£54m** in **May 2016**, less than 12 months after formation. It argued that para 15A let it count the years in which it had itself used the trade's assets. The Upper Tribunal disagreed: para 15A counts use by a **member of a group**, and before the subsidiary existed the seller was a single company, not a group. The holding test failed and a gain of about **£53.2m** (tax about £10.6m) was chargeable. The disposal fell under the pre-2017 rules (a 2-year window), but the "member of the group" wording the case turned on remains in para 15A. Commentators called for a change in the law; FA 2026 made none.

**Tarnmoor.** When TEL hives its actuators business down into the new TAL on **1 February GY6**, TEL has long been a member of the Tarnmoor group and has used the actuator assets in its trade for years. When it sells TAL on **31 December GY6**, eleven months later, para 15A counts that use: the holding test is met, and TAL must (and does) trade immediately after the sale. Chapter 20 works through the sale; chapter 17 explains the degrouping gain that is added to the exempt proceeds (TCGA 1992 s 179(3A)).

> **Going further: hive-down planning.** If the seller is a single company, form the subsidiary early (12 months of group existence before the sale), or wait. Map the trading assets used by group members and the dates of use; para 15A needs a trading asset used in a group trade. Remember the other hive-down rules: CTA 2010 Part 22 Ch 1 for losses and capital allowances, TCGA 1992 s 171 and CTA 2009 s 775 for the asset transfers, and the degrouping and SDLT clawback consequences of the sale (chapters 17, 19–21).

---

## Reorganisations, when nothing happens.

**Meaning (s 126).** A reorganisation or reduction of share capital, including allotments to existing holders in proportion to their holdings (bonus and rights issues, paid or not) and alterations of rights where there is more than one class. Paying off redeemable share capital is not a reduction, and a redemption other than for shares or debentures (outside a liquidation) is a disposal.

**No disposal (s 127).** The original shares and the new holding are one asset, acquired when the originals were acquired.

**Consideration (s 128).** New consideration (a rights issue) is added to cost; non-arm's-length consideration counts only up to the relevant increase in value. Cash received is a part disposal.

**More than one class (ss 129–130).** Cost is apportioned by market value; if any class is quoted within 3 months, values on the first day of dealing are used (s 130).

**Conversions (s 132), premiums (s 133), compensation stock (s 134).** Conversions of securities are treated as reorganisations (including conversions forced by compulsory acquisition). A small conversion premium is deducted from cost rather than treated as a part disposal (with an election where the premium exceeds allowable cost). s 134 freezes the gain on shares compulsorily exchanged for gilts (recognition only).

**Stock dividends received by a company.** s 142's rule (cost = the cash equivalent; not a reorganisation) applies only where ITTOIA 2005 s 410 applies: individuals, trustees and personal representatives. **HMRC's view (CTM17005; CG58750)** is that a stock dividend received by a company "is thus generally not income through any route" and the company "acquires no additional CG base cost": it is treated like a bonus issue, within ss 126–127. (CTM17005 cites "TCGA92/S141(1)"; that section could not be located on legislation.gov.uk, and its status is unconfirmed.)

> **Worked example 18.3: a scrip alternative (hypothetical; not a story fact)**
>
> Suppose Coldwater offered a scrip alternative of 1 new share for every 50 held, and TPLC took shares. TPLC would receive 64,000 shares (3,200,000/50, after the GY4 sale). Its holding would rise to 3,264,000 shares; its **cost stays £5,600,000** (no additional base cost); its 8% proportion is unchanged. For SSE purposes nothing changes: the new shares are part of the same holding (s 127).

**Why the base cost after an exchange matters.** If the SSE applied to an exchange, the new shares cost their **market value** at the exchange; if it did not and s 127 applied (via s 135), they cost what the **old shares cost**. The M25 examiners singled out "base cost after the exchange" as the weak area.

> **Exam lens: reorganisations and stock dividends**
>
> - **Grade:** reorganisation or reduction of share capital **1**; conversion of securities **1**; stock dividends **1**; company reconstructions **1** (chapter 19).
> - **Traps:** giving a company's stock dividend a cash-equivalent cost (that is s 142, for individuals); treating a bonus issue as a disposal; forgetting to apportion cost between classes; treating cash on a reorganisation as tax-free (it is a part disposal).

---

## Paper for paper, and the Helmside exchange.

**Share exchange (s 135).** Company B issues shares or debentures to the holders of shares or debentures in company A, in exchange for them, where:
- **Case 1:** B holds, or will hold as a result, **more than 25%** of A's ordinary share capital;
- **Case 2:** B issues them under a **general offer** made initially on a condition which, if satisfied, would give B **control** of A;
- **Case 3:** B holds, or will hold, the **greater part of the voting power** in A.

Then ss 127–131 apply as if A and B were the same company (s 135(3)), **subject to s 137** (s 135(6), as amended by FA 2026 s 37(2)). The seller's new shares stand in the old shares' shoes. **s 136** does the same for a scheme of reconstruction (Sch 5AA; chapter 19).

> **Worked example 18.4: the Helmside share exchange, 1 March GY5 (invented; £)**
>
> **Facts.** Helmside Energy Ltd was formed on 1 January GY1 with share capital of £20m in £1 ordinary shares: TPLC 9,000,000 (45%), Greyfell Utilities plc 8,000,000 (40%; an invented listed utility, unconnected with Tarnmoor), Northlight Infrastructure Fund LP 3,000,000 (15%; an invented partnership). Heads of terms with Greyfell: 1 December GY4. On **1 March GY5** TPLC issues **2,000,000 new TPLC shares at £8.00 (£16,000,000)** to Greyfell for its 8,000,000 Helmside shares. TPLC then holds 85%; Helmside joins the 75% group (chapter 15).
>
> **Greyfell (the seller).**
>
> | Test | Application |
> |---|---|
> | s 135 Case 1? | Yes: TPLC will hold more than 25% (85%) |
> | SSE: ≥ 10% of shares, profits, assets for 12 months in 6 years? | Yes: 40% since 1 January GY1 |
> | SSE: Helmside a trading company from the start of the latest 12-month period to the disposal? | Yes |
> | Para 4 | SSE decided ignoring s 127 (and so s 135); SSE applies; s 127 disapplied |
>
> | | £ |
> |---|---|
> | Consideration: market value of TPLC shares received | 16,000,000 |
> | Cost of Helmside shares (subscribed 1 January GY1) | (8,000,000) |
> | Gain | 8,000,000 |
> | **Chargeable gain** | **nil: exempt** |
> | Greyfell's base cost of its 2,000,000 TPLC shares | 16,000,000 |
>
> Had s 135 applied instead, Greyfell's TPLC shares would have carried its £8.0m cost and the £8.0m gain would have waited for their sale, which (2m shares in a widely held listed company being almost certainly below 10%) would not be exempt. The SSE is better for Greyfell than deferral.
>
> **TPLC (the acquirer).** Issuing its own shares is not a disposal. Its cost for the 40% is the value of the consideration given, the agreed value of the shares issued in an arm's-length bargain: *Stanton v Drayton Commercial Investment Co Ltd* (1982) 55 TC 286 (HL), applied by HMRC in CG52562.
>
> | TPLC's Helmside holding | Shares | Cost £ |
> |---|---|---|
> | Subscribed 1 January GY1 | 9,000,000 | 9,000,000 |
> | Acquired from Greyfell 1 March GY5 | 8,000,000 | 16,000,000 |
> | **Pool (85%)** | **17,000,000** | **25,000,000** |
>
> **Stamp duty.** 0.5% × £16,000,000 = **£80,000**, payable by TPLC within 30 days. Share-for-share relief (FA 1986 s 77) is not available: TPLC does not acquire the whole issued share capital (Northlight keeps 15%). Chapter 21.
>
> **If Greyfell were connected with TPLC** (for example as persons acting together to control Helmside, s 286(7)), nothing would change here: the price is market value anyway, and Helmside continues to trade after the sale (para 19(2)).

> **Exam lens: share exchanges**
>
> - **Grade:** reorganisations **1**; company reconstructions **1**.
> - **Past appearances:** **N23 Q2** (15 marks, 12/3: a s 135 share-for-share exchange with cash; "few explained s.135 conditions"); **M25 Q5** (share-for-share exchange base cost).
> - **Traps:** applying s 135 to a corporate seller that qualifies for the SSE; omitting the Case 1/2/3 test; wrong base cost for the new shares; forgetting that cash received is a part disposal; forgetting stamp duty (and that s 77 needs the *whole* share capital, shares only).

---

## Purpose, and the new section one three seven.

**The old s 137** (until 25 November 2025) denied s 135/136 treatment unless the exchange was effected for **bona fide commercial reasons** and did not form part of a scheme or arrangements of which the **main purpose, or one of the main purposes,** was avoiding CGT or CT. Holders of **5% or less** of the target were outside it.

**The *Delinian* story.** Euromoney sold its business Capital Data to Diamond Topco. The consideration was originally to be ordinary shares and cash; at Euromoney's suggestion the cash was replaced by **redeemable preference shares** in the buyer. The exchange would be within s 135 (no disposal); once the preference shares had been held for 12 months, their redemption for cash was expected to fall within the SSE. HMRC denied s 135, arguing that the preference share arrangement was a scheme with a main purpose of avoidance, and amended the return (an increase in CT of £10,483,731.87, as reported in commentary). The FTT found avoidance was **a** purpose but not **a main** purpose of the arrangements as a whole; the Upper Tribunal ([2022] UKUT 205 (TCC)) and the Court of Appeal (Vos MR, Snowden and Whipple LJJ; 3 November 2023) agreed. The Court held that the question is whether the exchange forms part of a scheme or arrangements with a main avoidance purpose, looking at the arrangements as a whole, not at a selected piece of them.

**FA 2026 s 37: the new s 137** (issues of shares or debentures **on or after 26 November 2025**):
1. It applies to **arrangements relating to** an exchange or reconstruction within s 135 or s 136 where **the main purpose, or one of the main purposes,** of the arrangements is to reduce or avoid **CGT or CT** (not income tax: contrast the new s 139, chapter 19) (s 137(1)).
2. Counteraction is by **just and reasonable adjustments** (s 137(1A)), which may disapply s 135 or 136 "insofar as is required" (s 137(1B)), by assessment or modification of an assessment (s 137(1C)). "Arrangements" is widely defined (s 137(7)).
3. The **5% exception is abolished** (old s 137(2)–(3) omitted), and the old "bona fide commercial reasons" limb has gone.

**Transitional protection** (FA 2026 s 37(6)–(7)): a s 138 application made before 26 November 2025, clearance given, and the issue before 26 January 2026 or within 60 days of the clearance if later.

**Status.** Commentators (including the CIOT's *Tax Adviser* magazine, 24 March 2026) read the new wording as a response to *Delinian*; HMRC's Budget explanatory note (TIIN, 26 November 2025) does not name the case. Under the new rule HMRC could target the preference share arrangement and adjust only the tax on the cash element. There is **no case law on the new wording yet**.

**HMRC's view (CG52632):** arrangements that lead to tax **never being paid**, rather than merely deferred, are tax avoidance for these rules (citing *Delinian*, paras 52–54, which dismissed the company's cross-appeal). Deferral is what s 135 is for; permanent escape is what s 137 is for.

> **Worked example 18.5: where the new s 137 would bite (hypothetical variation; did not happen)**
>
> Suppose Northlight had also exchanged its 15% for TPLC shares. Northlight is a partnership, so each partner is treated as disposing of its share of the holding. Partners that are not companies cannot use the SSE and would rely on s 135 (Case 1 is met). Under the old law, any partner holding 5% or less of Helmside would have been outside s 137 altogether; under the new law **every partner is within it**, and each must be confident that no main purpose of the arrangements relating to the exchange is avoidance. A s 138 clearance would be the natural protection.

---

## Clearance before the issue.

**s 138 (as amended by FA 2026 s 37(5)).** s 137 does not apply if, **before the issue**, HMRC (on the application of either company) notify that they are satisfied the exchange or scheme "will be effected without arrangements in respect of which section 137 applies". HMRC have **30 days** to reply or to ask for further particulars (and 30 days from receiving them); if HMRC refuse or do not reply, the applicant may require the application to go to the **tribunal** within 30 days. A clearance is **void** if the application did not fully and accurately disclose all material facts and considerations. New s 138(6) extends "shares or debentures" to interests and options within ss 135(5), 136(5) and 147.

**Practice** (GOV.UK "Apply for statutory clearance for a transaction"; CG52631, updated 30 July 2026):
- Build the clearance into the deal timetable: the clearance must precede the issue.
- A clearance is narrow: it does **not** confirm that s 135 or 136 applies, or whether loan notes are QCBs.
- One application to HMRC's Clearance and Counteraction Team can cover s 138, s 139(5), CTA 2010 s 1091, CTA 2010 s 748 and others.

**Without a clearance**, the shareholder files on the basis that s 135 applies. If HMRC disagree, they make their just and reasonable adjustments by assessment or by amending a self assessment (s 137(1C)), within the usual enquiry and discovery limits. The best evidence is the commercial record made at the time; the worst is an email like Euromoney's.

**Tarnmoor.** No application was made for the Helmside exchange: Greyfell relied on the SSE, not s 135, and Northlight was not part of the deal. Tom Hesketh's board paper recorded why, so that the decision not to seek clearance was itself on the file.

> **Going further: share exchanges after FA 2026.** For any share-for-share deal: (1) identify each seller's route (SSE, s 135, or neither); (2) list the arrangements "relating to" the exchange (preference shares, redemptions, pre-sale dividends, loan notes) and the tax each affects; (3) record the commercial drivers contemporaneously (*Delinian* turned on the evidence of purpose); (4) decide on clearance early; (5) remember stamp duty and SDRT on the target shares (chapter 21) and the buyer's base cost (*Stanton v Drayton*).

---

## Earn-outs, and a right that outlives the sale.

**Unascertainable consideration: *Marren v Ingles*** (1980) 54 TC 76; [1980] STC 500; [1980] 1 WLR 983. An individual sold shares in a private company for an immediate payment plus a further sum that depended on the company's later quotation and its price on the first day of dealing; the amount could not be known at the date of sale. The courts held that the right to the further sum was itself an asset, a **chose in action**; its value at the date of sale formed part of the consideration for the shares; and each later receipt was a capital sum derived from that right (TCGA 1992 s 22), a disposal or part disposal of it, not the satisfaction of a debt (s 251) (CG14990; CG14970).

**Ascertainable (even if contingent) consideration: s 48.** A fixed sum payable on a condition is brought into the original disposal in full, without discount for postponement or risk, with an adjustment if it later proves irrecoverable (s 48(1); *Marson v Marriage* 54 TC 59, as summarised in HMRC guidance). **For companies,** s 48(1) does not apply to consideration consisting of rights under a **creditor relationship** (for example loan notes); these are brought in at fair value and the loan relationship rules take over (s 48(2)–(4); chapter 16).

**Consequences of a *Marren* right** (the N23 Q2 points):
- the original computation is closed at the date of sale using the right's value, and **never reopened**;
- each receipt is a separate (part) disposal of the right, using A/(A+B) with B the value of the right that remains (s 42; SVM107160: HMRC's valuation team can be asked to agree the residual value after each instalment);
- the receipts get **none of the reliefs** that applied to the original shares;
- the election to carry a loss on the right back against the original gain (ss 279A–279D) is for individuals: **not available to companies**;
- payment of the tax by instalments under s 280 is not available for unascertainable consideration (CG14910).

**Earn-outs in paper: s 138A.** An "earn-out right" is a right to be issued shares or debentures in the acquirer, unascertainable when conferred and dischargeable only by such an issue. If the exchange would be within s 135 (unaffected by s 137), the right is treated as a non-QCB security of the acquirer: the exchange is paper for paper and the later issue a conversion. The seller may **elect out** (s 138A(2A)); a company must do so **within 2 years of the end of the accounting period** in which the right is conferred; the election is **irrevocable**. A right satisfiable in cash *or* shares at the buyer's option is not an earn-out right.

## The Tarnmoor earn-out.

> **Worked example 18.6: the TAL earn-out (invented; £)**
>
> **The sale (chapter 20).** On 31 December GY6 TEL sells TAL to Brennock Industries Inc (an invented US buyer) for **£48,000,000** cash plus a cash earn-out of up to **£6,000,000**, measured on the business's results over the next two years. The right is valued at **£3,000,000** at completion. With the degrouping gain of **£2,500,000** added to TEL's proceeds (TCGA 1992 s 179(3A); chapter 17), the consideration of **£53,500,000** is within the SSE (para 15A). TEL's base cost of the earn-out right: **£3,000,000**.
>
> **The receipts.** On the generally accepted view followed in this book, the right is not shares and not an asset related to shares within para 2, so the SSE covers only its value at completion; later receipts are chargeable.
>
> | | GY7 | GY8 |
> |---|---|---|
> | Receipt (A) | 2,000,000 | 2,500,000 |
> | Value of the right remaining after the receipt (B) | 2,000,000 | nil |
> | Cost: 3,000,000 × A/(A + B) | (1,500,000) | |
> | Cost: remaining | | (1,500,000) |
> | **Chargeable gain (TEL)** | **500,000** | **1,000,000** |
> | CT at 25% | 125,000 | 250,000 |
>
> Total receipts £4,500,000 against a right valued at £3,000,000: gains **£1,500,000**, CT **£375,000**.
>
> **If the business had disappointed** (for example a single receipt of £2,000,000): a **capital loss of £1,000,000** on the right. Because a gain on the right would be chargeable, the loss is allowable on the same reasoning (s 2A(2) does not deny it), but only against TEL's chargeable gains (current or future, within Part 7ZA) or, by a s 171A election, a group company's gains; never against income, and never carried back (no company equivalent of ss 279A–279D).
>
> **Status flag.** HMRC's manuals (CG14970–CG14990; Sch 7AC guidance) do not, so far as this book has found, address an SSE share sale followed by receipts on a *Marren* right; practitioner commentary takes the view applied here. Treat it as the accepted view, not settled law.

> **Exam lens: earn-outs**
>
> - **Grade:** *Marren v Ingles* **1**; post-transaction valuations **1** (chapter 16).
> - **Past appearances:** **N23 Q2** (15 marks: a 50% JV sold with an earn-out; "many wrongly reopened the original computation when the earn-out was paid").
> - **Traps:** reopening the original computation; treating the right's later receipts as exempt under the SSE; treating an ascertainable contingent sum as a *Marren* right (it is s 48); giving a company the individual's loss carry-back; forgetting s 138A for share earn-outs (and its 2-year election for companies).
> - **Layout:** (1) original disposal: cash + value of right = proceeds; (2) each receipt: part disposal of the right with A/(A+B).

---

## Going further, and how the examiner tests it.

> **Going further: standing tasks for a large group**
>
> 1. **Keep every share pool current**, including pools whose disposals have all been exempt. The SSE can lapse (Coldwater's sell-by date, about September GY9), and the base cost matters on that day.
> 2. **Keep an SSE register**: for each holding, the percentage of shares, profits and assets across the 51% group; the date the 10% threshold was first and last met; the 6-year expiry date; the evidence of the investee's trading status.
> 3. **Evidence trading status**: management accounts for subsidiaries, tested against HMRC's 20% yardstick; published accounts (and, where possible, a letter) for minority stakes.
> 4. **Hive-downs**: confirm the seller is already in a group, or that there will be 12 months of group existence before the sale (*M Group*).
> 5. **Deals in shares**: decide early whether any seller relies on s 135; build s 138 clearance into the timetable; assume the 5% exception has gone.
> 6. **Earn-outs**: compare a fixed contingent sum (s 48: within the original exempt disposal) with a formula-based right (*Marren*: a separate, taxable asset); compare cash with shares (s 138A helps a seller outside the SSE); agree the completion value, and the residual value after each instalment, with HMRC's Shares and Assets Valuation team (form CG34 for post-transaction checks).
> 7. **Never plan to fail the SSE just to keep a loss** without considering s 16A.
> 8. **Deferred tax**: where a sale would be exempt, there is usually no deferred tax on the holding; a chargeable earn-out right or a holding past its SSE sell-by date may.

> **Exam lens: shares overall**
>
> - **Grades (2026 grid, LCG AT):** share pooling and identification 1; gilts and QCBs 1; reorganisation or reduction of share capital 1; conversion of securities 1; company reconstructions 1; stock dividends 1; ss 151E–151G 2; SSE 1; *Marren v Ingles* 1. At least 70% of the CT element comes from core material. Check the 2027 grid when published.
> - **Past appearances:** M25 Q5 (20); N23 Q2 (15, 12/3); N23 Q4 (20; SSE loss on Irish shares); M24 Q3 (15; degrouping into SSE); N24 Q3 (15; SSE with pre-sale dividends and value shifting).
> - **Style:** technical prose plus computations; "Calculate, with explanations" or "Explain"; 10, 15 or 20 marks; 0.5–1 mark per point; no letter or report format.
> - **Reported traps:** indexation creating or increasing a loss (M25); base cost after an exchange (M25); computing an SSE loss (N23 Q4); reopening the original computation on an earn-out (N23 Q2); not explaining the s 135 conditions (N23 Q2); stamp duty confused with SDLT (N23 Q2).
> - **Layouts:** the five-step order of attack; pool tables in £; SSE conditions as a checklist with a conclusion; exchange base cost table; earn-out in two stages.

---

## What to take away.

- **Order of attack:** matching → debt or share → SSE → reorganisation/exchange → ordinary computation.
- **Matching (companies):** same day; previous 10 days (earliest first; outside the pool); s 104 pool. No 30-day rule. Pool indexation frozen at December 2017; it reduces a gain to nil but never creates or increases a loss.
- **Debt:** for a company any loan relationship asset is a QCB (s 117(A1)); gilts and QCBs are outside TCGA (s 115); shares for loan notes: s 116(10) frozen gain, unless the SSE applies (para 4).
- **SSE:** ≥ 10% of shares, profits and assets; 12 months in the 6 years before; 51% group aggregation; investee trading from the start of the latest qualifying 12 months to the sale, and afterwards only if the buyer is connected or para 15A is used; seller need not trade; automatic; gains exempt and losses not allowable; para 4 priority over ss 116(10), 127 and 192(2)(a); para 5 anti-avoidance; para 15A hive-downs (*M Group*: a single company is not a group).
- **Coldwater:** GY4 sale of 4%: exempt gain £2,160,000 (CT saved £540,000); remaining 8% (cost £5.6m) exempt until about September GY9.
- **Reorganisations:** s 127 no disposal; new consideration added; cash a part disposal; classes apportioned by value; company stock dividends: no added cost (HMRC's view).
- **Exchanges:** s 135 Cases 1–3; subject to s 137. Helmside: Greyfell's £8.0m gain exempt (SSE first); TPLC's cost £16.0m (*Stanton v Drayton*); Helmside pool £25.0m for 85%; stamp duty £80,000.
- **New s 137 (FA 2026 s 37):** issues on or after 26 November 2025; arrangements relating to the exchange; main purpose; just and reasonable counteraction; no 5% exception. s 138 clearance before the issue; 30 days; void without full disclosure.
- **Earn-outs:** *Marren* right valued into the original proceeds; later receipts are disposals of the right; outside the SSE on the accepted view; s 138A for share earn-outs (company election within 2 years). TAL: receipts £4.5m against £3.0m: gains £1.5m; CT £375,000.

So the law does not ask whether shares were swapped or sold. It asks, in a fixed order, what kind of holding this is and why the deal was shaped as it was.

The Helmside exchange swapped shares in a company. Chapter nineteen, on reconstructions, demergers and distributions, turns to deals that split a group itself, beginning with the Tarnwater demerger.

---

## Key rules and figures

| Rule | Figure / effect | Reference |
|---|---|---|
| Company matching | Same day; 10 days before (earliest first); s 104 pool | TCGA 1992 ss 105, 107 |
| Indexed pool | RE = RPI December 2017 (278.1); no indexation after | s 110; s 53(1B) |
| Indexation and losses | Cannot create or increase a loss | s 53(2A) |
| QCB for companies | Any loan relationship asset | s 117(A1); s 115 |
| QCB reorganisations | Frozen gain on shares exchanged for QCBs | s 116(10) |
| SSE holding | ≥ 10% shares, profits and assets; 12 months beginning ≤ 6 years before disposal | Sch 7AC paras 7–8 |
| SSE group | 51% group aggregation | paras 9, 26 |
| SSE investee | Qualifying (trading) company from start of latest 12 months to disposal; immediately after only if connected buyer or para 15A | para 19 |
| "Substantial" non-trading | More than 20% (HMRC's view) | para 20; HMRC practice |
| SSE priority | Over ss 116(10), 127, 192(2)(a) | para 4 |
| SSE losses | Not allowable | para 1; s 2A(2) |
| Subsidiary exemptions | Assets related to shares; 2-year run-off | paras 2, 3 |
| SSE anti-avoidance | Sole or main benefit; untaxed gain after control or major change | para 5 |
| Hive-down | Group use of trading asset counts; single company is not a group | para 15A; *M Group* |
| Capital loss TAAR | Main purpose of tax advantage: loss not allowable | s 16A (FA 2007 s 27) |
| Reorganisation | No disposal; consideration added; cash a part disposal | ss 126–131 |
| Conversions, premiums | Reorganisation treatment; small premium reduces cost | ss 132–133 |
| Company stock dividend | No added base cost; not income (HMRC's view) | CTM17005; CG58750 |
| Share exchange | Case 1 > 25%; Case 2 general offer for control; Case 3 voting majority | s 135 |
| New s 137 | Issues on or after 26 Nov 2025; main purpose; just and reasonable; no 5% exception | FA 2026 s 37 |
| Clearance | Before issue; 30 days; tribunal; void if disclosure incomplete | s 138 |
| Acquirer's cost of target shares | Agreed value of shares issued (arm's length) | *Stanton v Drayton*; CG52562 |
| Earn-out (unascertainable) | Separate chose in action; receipts are disposals of the right | *Marren v Ingles*; s 22; CG14990 |
| Ascertainable contingent sum | In full in original disposal; companies: creditor relationships at fair value | s 48 |
| Share earn-out | Deemed security; company election out within 2 years of AP end | s 138A |
| ss 151E–151G | Treasury powers (non-core) | TCGA 1992 |
| Story: Coldwater | Pool 4.8m shares, £8.4m; GY4 sale 1.6m at £3.10; exempt gain £2.16m; remaining £5.6m; SSE to about Sept GY9 | invented (story) |
| Story: Helmside exchange | 2m TPLC shares at £8.00 = £16.0m; Greyfell gain £8.0m exempt; TPLC pool £25.0m (85%); stamp duty £80,000 | invented (story) |
| Story: TAL earn-out | Right £3.0m; GY7 £2.0m (gain £0.5m); GY8 £2.5m (gain £1.0m); CT £375,000 | invented (story) |

## Statutory and case references

**Statute.** TCGA 1992 ss 2A, 16A, 22, 38, 42, 48, 53, 104–110, 115–117, 126–138A, 142, 151E–151G, 171, 179(3A), 251, 279A–279D, 280, 286; Sch 5AA; Sch 7AC paras 1–10, 14, 15, 15A, 19–24, 26, 28. FA 2026 s 37. FA 2007 s 27. FA 1986 s 77. ITTOIA 2005 s 410. CTA 2009 Part 5, s 533, s 775. CTA 2010 Part 22 Ch 1.

**HMRC manuals and guidance.** CG14910, CG14970, CG14990 (deferred consideration); CG15835, CG40241, CG-APP8A, CG-APP9 (s 16A); CG40200 (s 2A); CG52562 (cost of shares acquired); CG52631, CG52632 (s 137 and clearance); CG53000, CG53008, CG53106 (SSE); CG58750 and CTM17005 (stock dividends); SVM107160 (valuing deferred consideration); GOV.UK "Apply for statutory clearance for a transaction"; CG34 post-transaction valuation checks.

**Cases.** *Delinian Ltd (formerly Euromoney Institutional Investor plc) v HMRC* [2023] EWCA Civ 1281 (3 November 2023); [2022] UKUT 205 (TCC). *M Group Holdings Ltd v HMRC* [2023] UKUT 213 (TCC) (31 August 2023). *Marren v Ingles* (1980) 54 TC 76; [1980] STC 500; [1980] 1 WLR 983. *Marson v Marriage* 54 TC 59. *Stanton v Drayton Commercial Investment Co Ltd* (1982) 55 TC 286 (HL).
