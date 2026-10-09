# Chapter nineteen: Reconstructions, demergers and distributions

On **23 June 2026**, HMRC and HM Treasury published a consultation with a long title: *Modernising the taxation of distributions and repayments of capital from companies*. Buried in its chapter on demergers was a candid admission. The relief that lets a trading group split itself in two, it said, is "not currently well-used".

That is a striking thing for a government to say about its own law. The demerger rules have existed since 1980. They promise something remarkable: a group can hand a whole subsidiary to its shareholders, worth perhaps hundreds of millions of pounds, and nobody is treated as having received a dividend or sold anything. So why do advisers so often go round them? The answer lies in their conditions, and in the other routes the law offers. This chapter is about all of those routes, and about the rule underneath them: the definition of a distribution.

Here is the question to hold on to. **How can a business be divided between companies, or between owners, without the tax system treating the division as a sale or a dividend? And what stops that freedom being used to dress up income as capital?**

This is the fifth chapter of Part Three. Company distributions, company distributions received, companies in liquidation or administration (the distribution part), company reconstructions, demergers, CTA 2010 Part 22 and transactions in securities are all **core (grade 1)** on the LCG grid. None has been examined as a full question from M23 to M26, which is exactly why a prepared candidate should know them. *The Living Law* (TKS), chapter 20, taught the distribution categories in outline, and chapter 22 told *Leekes* on losses after a transfer of trade. TKS did not teach demergers or transactions in securities, so we start those from first principles.

Most of the law is in the Corporation Tax Act 2010 (CTA 2010); some sits in the Corporation Tax Act 2009 (CTA 2009) and the Taxation of Chargeable Gains Act 1992 (TCGA 1992). We apply the law for **FY2026**, including the Finance Act 2026 (FA 2026) changes to company reconstructions. The examples use our invented group, Tarnmoor. Its companies, people and numbers are invented for teaching, as they are throughout this book.

---

## What the law calls a distribution

Begin with the word itself, because every route in this chapter is a way of avoiding it, or of making it harmless. A distribution is a payment by a company to its members, in their capacity as members. **CTA 2010 s 1000(1)** lists the categories:

| Category | What it catches | Reference |
|---|---|---|
| A | Any dividend, including a capital dividend | s 1000(1) para A |
| B | Any other distribution of assets in respect of shares, **except** so far as it repays capital or is matched by new consideration | para B |
| C | Redeemable share capital issued otherwise than for new consideration (bonus redeemable shares) | para C |
| D | Securities issued otherwise than for new consideration (bonus securities) | para D |
| E | Interest on securities **above a reasonable commercial return** (only the excess) | para E |
| F | Interest on **special securities** (for example results-dependent interest) | para F; s 1015 |
| G | Transfers of assets or liabilities to members at an undervalue | para G; s 1020 |
| H | Bonus issues following a repayment of share capital | para H; s 1022 |

C and D stop a company issuing paper that can later be cashed in as a disguised dividend. E and F reach into debt.

**Why it matters in a large group.** Dividends between group companies are usually exempt (next section), so why care? Because the label changes the **payer's** position too: a distribution is never deductible (CTA 2009 s 1305). If interest is recharacterised as a distribution, the payer loses its deduction; and the recipient's exemption does not cover E or F amounts (CTA 2009 s 931D).

> **Worked example 19.1: category E interest (invented for this purpose; not a Tarnmoor story fact)**
>
> | £ | Amount |
> |---|---|
> | Loan from a connected lender | 10,000,000 |
> | Interest paid at 12% | 1,200,000 |
> | Reasonable commercial return at 7% | (700,000) |
> | **Category E distribution (excess)** | **500,000** |
> | Deduction lost by the payer at 25% | 125,000 |
>
> The £500,000 is not deductible for the payer (CTA 2009 s 1305) and, being a para E distribution, is not exempt for a recipient within CT (CTA 2009 s 931D). The £700,000 commercial element remains interest under the loan relationship rules.

**Transfers at an undervalue (s 1020).** If a company transfers an asset (or a liability) to a member and the market value of the benefit exceeds the new consideration given, the excess is a distribution. The old exception for transfers between a company and its group members (s 1021) was **repealed by FA 2012 s 33**, so an undervalue transfer from a subsidiary up to its parent is a distribution of the shortfall even inside a group. Section 1020 looks only upwards, at members: a transfer between **sister companies** is outside it, although the gains rules (chapter 17) and transfer pricing (chapter 27) must still be checked.

**Company law runs alongside.** A company paying a distribution needs distributable reserves, and cannot return capital to shareholders except by a formal reduction. In *Progress Property Co Ltd v Moorgarth Group Ltd* [2010] UKSC 55, one group company had sold a subsidiary to a fellow subsidiary at a price later shown to be too low. The Supreme Court (Lord Walker giving the leading judgment) held that a genuine arm's length commercial sale made in good faith is not an unlawful distribution merely because hindsight reveals an undervalue: substance, not a retrospective valuation, decides. (Holding taken from the Supreme Court's press summary and law reports' summaries.)

**Two more definitions.** Under **s 1027A**, a reserve arising from a reduction of share capital (including share premium) is treated for CT as profits, not capital: a company cannot reduce capital and call the payout a repayment of capital. Under **s 1030**, a distribution in respect of share capital **in a winding up** is not an income distribution: it is capital. Hold that thought.

---

## Receiving a distribution

Since 1 July 2009, **CTA 2009 Part 9A** has charged every distribution a company receives (s 931A) and then exempted most of them.

**Large (non-small) companies (s 931D).** A distribution is exempt if:
1. it falls into an **exempt class** (ss 931E–931I);
2. it is **not** a para E or F distribution; and
3. **no deduction** is allowed to a non-UK resident in respect of it.

| Exempt class | Test | Reference |
|---|---|---|
| Controlled companies | Recipient controls the payer; or the **40/55 JV test** (two persons together control; recipient holds ≥ 40%; the other ≥ 40% and ≤ 55%) | s 931E |
| Non-redeemable ordinary shares | Distributions in respect of such shares | s 931F |
| Portfolio holdings | Recipient holds < 10% of the issued share capital (or class), of profits **and** of assets on a winding up | s 931G |
| Relevant profits | Dividends not derived from transactions designed to reduce UK tax | s 931H |
| Shares accounted for as liabilities | Narrow case (s 521C not applying only because of its condition (f)) | s 931I |

**Anti-avoidance** (ss 931J–931Q) targets schemes manipulating the controlled company or portfolio classes, quasi-preference and quasi-redeemable shares, schemes in the nature of loan relationships, deductible distributions, payments for distributions, non-arm's length payments and diverted trade income. **Small companies** (micro or small enterprises) are exempt only where the payer is resident in the UK or a qualifying territory and the distribution is not part of a tax advantage scheme (ss 931B, 931C, 931S).

**The election out (s 931R).** A company may elect that a distribution is **not exempt**, by the **second anniversary of the end of the AP** in which it is received, typically to secure a lower foreign withholding rate or foreign tax credit (chapter 25 works the choice).

**In our invented case** the rules almost never bite. TPLC's dividends from its wholly owned subsidiaries are exempt under s 931E; its holding in Coldwater Instruments plc (12%, later 8%) pays ordinary dividends on non-redeemable ordinary shares (s 931F); and Tarnmoor Actuators Ltd's (TAL) £2.0m dividend to TEL in December GY6 is exempt under s 931E (chapter 20 tells the sale). The work lies in spotting the exceptions: disguised interest, a payer with a foreign deduction, or a dividend engineered into a class.

> **Exam lens: distributions paid and received**
> - **Grade:** company distributions **1**; company distributions received **1**.
> - **Past appearances:** pre-sale dividends and the exempt distribution carve-out from value shifting in **N24 Q3** (15 marks; examiners: candidates "missed that value shifting does not apply to a reduction caused solely by an exempt distribution"); an intra-group transfer at undervalue in **M24 Q3** (sale of a subsidiary). Dividend exemption as part of an overseas subsidiary question in **M26 Q5**.
> - **Style:** a paragraph of explanation per item; 0.5–1 mark per point.
> - **Traps:** saying a large company's dividend is exempt without naming the class; forgetting that E and F distributions are neither deductible nor exempt; treating an undervalue transfer to a parent as outside s 1020 (s 1021 has gone); forgetting the s 931R election when foreign tax credit is in play.

---

## The quiet end of a company

Large groups accumulate dormant companies the way old houses accumulate keys. Each must file; each sits on the senior accounting officer's list (chapter 4). Sooner or later someone asks why it still exists.

**Two ways to close a solvent company.** A formal **liquidation** appoints a liquidator; under s 1030 what shareholders receive in the winding up is capital. (Chapter 14 covers the accounting periods and group consequences of a winding up.) The cheaper route is an application to the registrar to **strike the company off** (Companies Act 2006 s 1003). For many years HMRC's Extra-Statutory Concession C16 let shareholders treat pre-strike-off distributions as capital. Since **1 March 2012** the rule has been statutory (CTA 2010 ss 1030A–1030B, inserted by SI 2012/266), with a cap:

- **s 1030A:** a distribution made in anticipation of dissolution under CA 2006 s 1000 or s 1003 is **not a distribution** (so it is capital) if (A) the company intends to secure, or has secured, the collection of its debts and the payment of its liabilities, and (B) the **total** of such distributions does not exceed **£25,000**.
- **s 1030B:** if the company is **not dissolved within 2 years** of the distribution, or does not collect its debts and pay its liabilities, the distribution is treated as an income distribution throughout.

**The misconception to clear first: "capital treatment is always a favour".** The rule was designed for individuals, for whom capital usually beats income. For a **corporate** shareholder the arithmetic can run the other way: a dividend would usually be exempt, but a capital receipt is a chargeable disposal unless the SSE applies.

> **Worked example 19.2: striking off Tarnmoor Pumps Ltd (invented story, GY7)**
>
> Tarnmoor Pumps Ltd has been dormant throughout the story. In GY7 the group decides to strike it off. Its reserves are **£18,000**, held in cash. TPLC's base cost for its shares is **£100**, subscribed after December 2017 (no indexation). Before applying, Tarnmoor Pumps distributes the £18,000 to TPLC.
>
> | TPLC, GY7 | £ |
> |---|---|
> | Capital distribution (s 1030A: total ≤ £25,000; TCGA s 122) | 18,000 |
> | Less base cost (whole cost: nothing of value remains) | (100) |
> | **Chargeable gain** | **17,900** |
> | **CT at 25%** | **4,475** |
>
> - **No SSE:** Tarnmoor Pumps does not trade, so the investee trading requirement fails (TCGA Sch 7AC para 19), and the para 3 run-off exemption cannot apply after years of dormancy.
> - **The comparison:** the same £18,000 paid as an ordinary dividend would have been exempt for TPLC (CTA 2009 s 931E). Tom Hesketh, the group's invented head of tax, notes that paying a dividend first would have needed board approval and a check against the value shifting rule (TCGA s 31; chapter 17), all to save under £5,000. The group pays the tax.
> - **The irony of s 1030B:** if the strike-off stalled beyond 2 years, the payment would become an income distribution, exempt for TPLC. A sanction for individuals is a relief for a parent company.
> - **Share capital:** the £100 of share capital cannot lawfully be returned before dissolution without a formal reduction of capital; anything left in a company when it is struck off passes to the Crown as *bona vacantia*. Practitioners plan the last balances accordingly.

> **Exam lens: liquidations and strike-off**
> - **Grade:** companies in liquidation or administration **1** (the AP and group points are in chapter 14).
> - **Past appearances:** not as a standalone question M23–M26; N24 Q2 tested a holding company in liquidation for group relief (chapter 14).
> - **Traps:** the £25,000 is a **total** of pre-dissolution distributions, not per shareholder; the 2-year dissolution condition; assuming capital is better for a company; forgetting that s 1030 (formal liquidation) has no cap.

---

## Moving a trade inside the group

Now we move from closing companies to reshaping them. A group often moves a trade from one company to another: tidying up after an acquisition, or preparing a business for sale. If every such move were a cessation and a fresh start, the old company would face balancing charges on its plant, and its unused trading losses would die with the trade. **CTA 2010 Part 22 Chapter 1** prevents that for transfers within common ownership. It applies **automatically**: no claim is needed.

**The ownership condition (s 941).** (a) On the transfer, **or at some time in the 2 years beginning immediately after it**, a **75% interest** in the transferred trade belongs to certain persons; and (b) at some time in the **1 year ending immediately before** the transfer, a 75% interest belonged to **the same persons**. A trade carried on by a company is treated as belonging to the company's owners, so inside a group the test is normally met through the common parent. Because limb (a) can be met **at the moment of transfer**, a later sale of the successor does not undo it: the basis of the classic hive-down.

**The tax condition (s 943).** Throughout the relevant period, the trade is carried on by a company **within the charge to CT** on it.

**Effects (ss 944, 948).**
1. **Capital allowances continue (s 948).** Allowances and charges are made to or on the successor as if it had always carried on the trade; the transfer itself gives **no allowances and no balancing charges**. Plant moves at TWDV (chapter 9 explains how this sits with CAA 2001 ss 265–267; where CAA s 561 applies, s 948 is disapplied).
2. **Losses pass forward (s 944(3)).** The successor is entitled to carry forward the predecessor's unused losses of the transferred trade, **subject to** any s 37 claim by the predecessor (s 944(4)) and to the liabilities restriction in **s 945**. Further provisions added from 2017 (ss 944A–944E) adapt the rules for post-1 April 2017 losses (on HMRC's guidance, CTM06110–CTM06120, the successor can relieve those under s 45A, or s 45B where that applies, rather than only by streaming), and the change in ownership rules (CTA 2010 Part 14; chapter 14) add their own limits where the successor later changes hands.
3. **No terminal relief for the predecessor (s 944(2)).** Section 39 (terminal loss carry-back) does not apply to a loss made by the predecessor in the transferred trade (and HMRC's CTM06065 adds the s 45F point: chapter 14).

**Part of a trade (ss 951–952).** A part of a trade transferred is treated as a separate trade, with receipts, expenses and assets apportioned on a just and reasonable basis.

**Streaming.** *Leekes Ltd v HMRC* [2018] EWCA Civ 1185 (Court of Appeal, 23 May 2018; Henderson LJ, with Arden and Sales LJJ). Leekes bought Coles, a loss-making furniture retailer, and hived its trade up into Leekes' own. Under ICTA 1988 s 343 (now Part 22 Ch 1) the court held that Coles's losses could be set only against profits of the **transferred** trade, so the successor had to stream its profits; it could not use them against the enlarged trade's profits. *The Living Law*, chapter 22, told the story; for older (same-trade) losses it is still the rule.

---

## The liabilities left behind

Picture a predecessor whose trade has made heavy losses and which owes a great deal. It transfers the trade, with the best assets, to a fellow subsidiary, and leaves its debts behind. Its creditors are never paid and may claim bad-debt relief, while the successor uses losses those unpaid debts helped create: relief twice. **Section 945** stops it.

- **L** = the predecessor's liabilities outstanding immediately before the transfer and **not transferred** to the successor (s 945(2)).
- **A** = the value of the predecessor's assets immediately before the transfer that are **not transferred**, **plus** the consideration given by the successor for the transfer (s 945(3); "relevant assets").
- If **L > A**, the excess **E = L − A** reduces the losses: the successor's relief is limited to **R − E**; if R ≤ E, nothing passes (s 945(4)–(5)).

> **Worked example 19.3: the L − A restriction (invented for this purpose; not a Tarnmoor story fact)**
>
> | £ | Amount |
> |---|---|
> | Predecessor's unused trading losses (R) | 4,000,000 |
> | Liabilities kept by the predecessor (L) | 3,000,000 |
> | Assets kept by the predecessor | 1,200,000 |
> | Consideration paid by the successor | 800,000 |
> | Relevant assets (A) | 2,000,000 |
> | Excess E = L − A | 1,000,000 |
> | **Losses passing to the successor (R − E)** | **3,000,000** |
>
> HMRC's three-step layout (CTM06280) is the same: total the retained liabilities, deduct the retained assets, deduct the consideration.

HMRC's guidance calls this the **relevant liabilities restriction** and describes it as the primary counter to exploitation where a subsidiary is sold shortly after receiving a trade (CTM06210, CTM06250). Tribunals have applied it strictly, with disputes over whether items such as a tax repayment due or a director's loan account are relevant assets or liabilities (for example *Spring Capital Ltd v HMRC* (FTT, 2019), known here from secondary reports only).

**Chapter 2: transfers to obtain balancing allowances (s 954).** Where a company ceases a trade, another company takes it over, and a **main purpose** of the cessation is to obtain a balancing allowance, the allowances and charges pass to the successor as if the trade had continued, with none on the transfer. A group cannot manufacture a loss on its plant by stopping and restarting.

> **Exam lens: CTA 2010 Part 22**
> - **Grade:** Part 22 CTA 2010 (excluding Chs 3 and 8 and ss 990–995) **1**. (Ch 4 refund surrenders: chapter 3; Chs 5–7: chapter 23.)
> - **Past appearances:** **M23 Q4** (20 marks: a factory hived down with the trade, in a property question). No standalone Part 22 question M23–M26.
> - **Traps:** treating Part 22 Ch 1 as a claim (it is automatic); giving the successor AIA or FYAs; offering the predecessor s 39 terminal relief; ignoring the L − A restriction; forgetting that consideration paid by the successor counts in A.

---

## The actuators hive-down

Early in GY6, TEL's board decides to run its actuators business as a separate company and to review the options for it later in the year. The business is part of TEL's single company, so the group first creates a new subsidiary, **Tarnmoor Actuators Ltd (TAL)**. On **1 February GY6** TEL transfers the actuators trade and assets into TAL. No buyer is in view on that date; Brennock Industries Inc, an invented US group, first approaches the group in the summer, and on **31 December GY6** TEL sells it TAL's shares.

That two-step, the **hive-down**, is a staple of corporate deals, and each regime meets it differently:

> **Worked example 19.4: the TAL hive-down, regime by regime (invented story, 1 February GY6)**
>
> | Asset or item | Rule | Effect at the hive-down | Chapter |
> |---|---|---|---|
> | The actuators trade (part of TEL's trade) | CTA 2010 Part 22 Ch 1; ss 941, 943, 951 | Ownership condition met (TEL owns the trade before and, through TAL, at the moment of transfer); both within CT | this chapter |
> | Plant | CTA 2010 s 948 | Passes at TWDV; no balancing charge, no AIA or FYA for TAL | 9 |
> | Trading losses | CTA 2010 ss 944–945 | None in the actuators business: nothing to pass; no L − A test needed | this chapter |
> | Factory (TEL cost £5.0m; value £7.5m) | TCGA s 171 | No gain, no loss: TAL's base cost £5.0m | 17 |
> | Patents (TWDV £1.2m; value £4.0m) | CTA 2009 s 775 | Tax-neutral: TAL takes WDV £1.2m | 11 |
> | Factory for SDLT | FA 2003 Sch 7 | Group relief, clawed back on the sale (£364,500) | 21 |
> | Later share sale | TCGA Sch 7AC (para 15A); s 179; CTA 2009 s 782A | Exempt; degrouping gain added to proceeds | 17, 18, 20 |

**Why not sell the assets?** A share sale by a group company can fall within the SSE; an asset sale cannot. The hive-down turns a business into shares. The SSE needs 12 months' holding, and **para 15A** treats it as met where the hived-down assets were used in the group's trade beforehand (chapters 18 and 20 apply it). A trainee who sees only one regime in a hive-down will miss most of the marks: plant, losses, factory, patents, stamp taxes and the share sale are six questions answered by six rule books about one commercial event.

> **Going further: running a hive-down**
> - **Sequence:** incorporate the NewCo; obtain board approvals in both companies; transfer the trade under a business transfer agreement that lists the assets and the liabilities that move (they drive the L − A test where losses exist); then, separately, the share sale.
> - **Records:** the TWDVs and pool balances passing under s 948; market values at the transfer date for the factory and the patents (they fix any degrouping charge within six years: chapters 11 and 17); the SDLT relief claim and its three-year clock.
> - **VAT:** usually a transfer of a going concern (outside this book).
> - **Losses:** where a loss-making trade is hived down before a sale, the successor keeps the losses only within the L − A limit and then faces Part 14 on the change in ownership (chapter 14).

---

## What makes a reconstruction

So far the business has stayed with the same owners. A **reconstruction** reorganises a business between companies and their shareholders, and may split one company's business into two.

**Scheme of reconstruction (TCGA 1992 Sch 5AA).** A scheme of merger, division or other restructuring that meets **conditions 1 and 2, and either 3 or 4**:

| Condition | Requirement |
|---|---|
| 1 | Ordinary shares in the successor(s) are issued **only** to holders of ordinary shares in the original company (or of the classes involved) |
| 2 | **Equal entitlement** per share (or per class): shareholders stand in the same proportions |
| 3 | **Continuity:** the whole or substantially the whole of the business is carried on by the successor(s) afterwards (businesses of controlled companies attributed to the controller) |
| 4 | Carried out under a **compromise or arrangement** under CA 2006 Part 26 or 26A (or a foreign equivalent), with no part of the business transferred to anyone else |

Preliminary reorganisations are disregarded, as are later issues.

**Relief at two levels.**
- **Shareholders: s 136.** Where, under a scheme of reconstruction, the successor issues shares or debentures to the original company's shareholders pro rata, they are treated as exchanging old shares for new: no disposal; the new holding stands in the shoes of the old (subject to s 137; chapter 18).
- **The company: s 139.** A transfer of the whole or part of a company's business to another company under a scheme of reconstruction is at **no gain, no loss** if (i) the transferor receives **no part of the consideration** (other than the transferee assuming liabilities), (ii) the assets are within the UK charge before and after (s 139(1A)), and (iii) the assets are not trading stock (and the transferee is not a unit trust, investment trust or VCT). Section 179(3D) does not prevent relief (s 139(1B)).

The family-business picture fits: one shop becomes two, the same family owns both in the same proportions, and both keep trading. Nobody has sold anything.

**Four rule books for one event.** The same reconstruction is tested for shareholders (s 136), for the company (s 139), for stamp duty (FA 1986 s 75 reconstruction relief) and for SDLT (FA 2003 Sch 7 para 7). Each has its own conditions and its own purpose test (chapter 21 for the stamp taxes). Ask all four questions every time.

---

## A purpose test for every reconstruction

Until recently s 139 carried a narrow anti-avoidance rule (bona fide commercial reasons, no main purpose of avoiding CGT or CT). **FA 2026 s 38** recast it:

- **New s 139(4A)–(4D):** where **the main purpose, or one of the main purposes**, of the arrangements is to reduce or avoid **capital gains tax, corporation tax or income tax**, the advantage is counteracted by **just and reasonable adjustments**, which may include disapplying s 139.
- **Income tax is new.** Section 137 (share exchanges and s 136 reconstructions; FA 2026 s 37) covers CGT and CT only (chapter 18). Section 139 now reaches income tax as well.
- **Clearance (s 139(5)):** on application by the **acquiring** company, using the s 138(2)–(5) procedure: HMRC have 30 days to reply or ask for particulars; on refusal the applicant may require the matter to go to the tribunal; clearance is void without full disclosure.
- **Recovery:** tax may be assessed on the acquirer if the transferor is wound up, and recovered from holders of the assets if unpaid 6 months after it is due (s 139).
- **Commencement:** arrangements involving the transfer of assets of a business **on or after 26 November 2025**, with transitional protection where a clearance application was made before that date, clearance was given, and the transfer took place before 26 January 2026 or within 60 days of the notification if later.
- **CIS (awareness):** FA 2026 s 36 recast TCGA s 103K in the same way, also covering income tax.

**The debate (certainty or fairness?).** Mechanical tests with narrow exceptions are being replaced by purpose tests across the corporate code: s 441 for loans (chapter 12), s 137 after *Delinian* (chapter 18), s 31 value shifting (chapter 17), and now s 139. The case for: a transaction designed to avoid tax should not get relief by fitting a template. The case against: a main purpose test asks a judge to weigh motives, so clearance matters far more than it did. For a large group a reconstruction without clearance is now a reconstruction with an open question in the accounts (and a possible uncertain tax treatment: chapter 4).

> **Exam lens: company reconstructions**
> - **Grade:** company reconstructions **1**; transfers concerning companies of different member States **2**.
> - **Past appearances:** share-for-share and reconstruction points sit inside share questions (N23 Q2, M25 Q5: chapter 18); no s 139 question M23–M26.
> - **Traps:** reproducing the pre-2026 s 137/s 139 tests (no 5% exception; no "bona fide commercial reasons" limb; s 139 now includes income tax); applying s 139 where the transferor receives consideration; forgetting Sch 5AA condition 2 (equal entitlement); forgetting the stamp taxes.

---

## Why demergers exist

A reconstruction under s 139 moves a business to a company owned by the same shareholders. A **demerger** goes further: it ends the group relationship. One group becomes two, each owned directly by the original shareholders.

Without special rules that is expensive. If TPLC handed a subsidiary's shares to its own shareholders: they would receive a distribution (for individuals, a taxable dividend); TPLC would dispose of the shares at market value; and any asset the subsidiary acquired intra-group in the previous six years would trigger a degrouping charge (TCGA s 179) as it left.

**Origin and purpose.** The rules date from **1980** (a March 1980 Budget announcement, as recorded in later practitioner accounts; HMRC still publishes **Statement of Practice 13 (1980)** on the clearance practice) and are now in **CTA 2010 ss 1073–1099** (Part 23 Ch 5) and **TCGA s 192**. The statute states its own purpose (s 1074; TCGA s 192(1)): to facilitate transactions by which trading activities carried on by a single company or group are divided "so as to be carried on by two or more companies not belonging to the same group, or by two or more independent groups".

**The misconception: "a demerger is just a big dividend".** It is not. An **exempt distribution is not a distribution** for the Corporation Tax Acts (**s 1075**). Shareholders have no income. For gains, **TCGA s 192(2)** says a s 1076 distribution is not a capital distribution (s 122) and applies **ss 126–130** as if the distributing company and the demerged subsidiary were one company and the distribution a reorganisation: the original base cost is split between the old shares and the new. And **s 192(3)** switches off the degrouping charge where a company leaves the group only because of an exempt distribution.

| Type | What happens | Reference |
|---|---|---|
| **Direct** | Parent transfers shares in one or more **75% subsidiaries** directly to its members | s 1076; conditions A–F (+ L–M) |
| **Indirect** | Parent transfers a **trade**, or shares in 75% subsidiaries, to one or more **transferee companies**, which issue shares to the parent's members | s 1077; conditions A–D, G–K (+ L–M) |
| **Cross-border division** | Linked to TCGA ss 140A(1A)/140C(1A) | s 1078 (rare) |

---

## The conditions for an exempt demerger

The conditions are lettered A to M. They fall into four groups, each with a reason.

**General conditions (s 1081), every demerger.**
- **A (residence):** each relevant company is UK resident, or resident in a member State, when the distribution is made (wording amended from 31 December 2020 by SI 2019/818).
- **B (trading):** the distributing company is a **trading company or a member of a trading group**; each subsidiary demerged is a **trading company or the holding company of a trading group**. The relief divides trades, not investments.
- **C (purpose):** the distribution is made **wholly or mainly to benefit some or all of the trading activities**. The evidence is the board paper: each business, with its own management, capital and strategy, will do better apart.
- **D (anti-avoidance):** the distribution is not part of a scheme or arrangement whose **main purpose or one of whose main purposes** is the **avoidance of tax** (including stamp duty and SDLT) or the **making of chargeable payments**; nor part of arrangements for **persons other than the distributing company's members to acquire control** of any relevant company, or for the **cessation or sale of a trade** after the distribution. A demerger to prepare a pre-arranged sale is exactly what condition D forbids.

**Direct demerger (s 1082).**
- **E:** the shares distributed are **not redeemable**, and are the **whole or substantially the whole** of the distributing company's holding of the subsidiary's ordinary share capital and confer the whole or substantially the whole of its voting rights. You cannot demerge half a subsidiary.
- **F:** **after** the distribution the distributing company is a **trading company or the holding company of a trading group**, except where (i) it is itself a 75% subsidiary (s 1082(3)), or (ii) it distributes two or more 75% subsidiaries and is then dissolved with no net assets available for distribution (s 1082(4)).

**Indirect demerger (s 1083), conditions G–K (outline).** The transferee companies issue shares only to the distributing company's members; they take the whole or substantially the whole of the transferred trade or holding; and they carry on the business rather than simply passing it on. Learn the purpose of the group of conditions; the exact wording of each lettered limb is in s 1083 and is not reproduced here.

**Distributing company itself a 75% subsidiary (conditions L and M, s 1085, outline).** The demerged shares must travel up and out through further exempt distributions until they reach the members of the top company: a demerger cannot leave them stranded halfway up a group.

---

## Clearance and the five-year shadow

**Clearance (ss 1091, 1093–1094).** If HMRC notify the company, **before** the distribution, that they are satisfied it will be an exempt distribution, it is treated as one (s 1091). HMRC must decide within **30 days** of the application, or of compliance with a request for further information (s 1094). If they refuse, or do not decide in time, the company may within **30 days** require the application to be sent to the **tribunal**, whose decision then counts as HMRC's (s 1094(3)–(5)). Clearance cannot be obtained retrospectively (CTM17270). A separate clearance (s 1092) confirms that a proposed payment is not a chargeable payment.

**One application, many clearances.** HMRC's Clearance and Counteraction Team accepts a single application covering, for example, CTA 2010 s 1091, TCGA ss 138 and 139(5), and the transactions in securities clearance (CTA 2010 s 748; ITA 2007 s 701). Clearance binds only on full and accurate disclosure, and it does not confirm matters outside the provision cleared.

**Chargeable payments (ss 1086, 1088).** For **5 years** after an exempt distribution, a **chargeable payment** is taxed as **income** (IT or CT) of the recipient. Broadly, it is a payment by a company concerned in the demerger to its members, in connection with their shares, that is not made for genuine commercial reasons or is part of a tax avoidance scheme; distributions and intra-group payments are excluded. A chargeable payment within 5 years also **revives the s 179 degrouping charge** (TCGA s 192(4)).

**Returns.** The distributing company must make a **return to HMRC within 30 days** of an exempt distribution, and a payer must report any payment that is, or may be, a chargeable payment within 30 days unless cleared (CTM17260, CTM17290).

> **Going further: the five-year register**
> For five years after a demerger the tax functions on **both** sides keep a register of payments to shareholders (buy-backs, special dividends, loans, fees to shareholder-related parties) and test each against the chargeable payment definition, seeking s 1092 clearance where in doubt. They also track the degrouping exposure that a chargeable payment would revive, and the SDLT three-year window on any pre-demerger property transfers.

---

## The Tarnwater demerger

In our invented case, **Tarnmoor Water Systems Ltd (TWS)** has grown into a business its owners would value differently from engineering: regulated water-company customers, long contracts, different capital needs. The board decides it should stand alone with its own listing. On **1 July GY5** TPLC distributes its entire holding in TWS, worth **£180m**, to its shareholders; TWS re-registers as a public company and lists as **Tarnwater plc**.

**The routes considered.**

| Route | How | Why rejected or chosen |
|---|---|---|
| Indirect demerger | TWS shares to a new company issuing shares to TPLC's members (s 1077; TCGA ss 139, 136) | A new company and two more relieving provisions, both now with main purpose tests; no advantage here |
| Capital reduction demerger | Insert a new holding company (share-for-share), then reduce its capital, distributing TWS (TCGA s 136/s 139 rather than s 1076) | Flexible (no trading conditions), but more steps and court process; the very route the June 2026 consultation proposes to close |
| **Direct demerger (chosen)** | TPLC distributes the TWS shares (s 1076) | Simplest; conditions met; clearance obtainable |

> **Worked example 19.5: the Tarnwater demerger (invented story, 1 July GY5)**
>
> **Conditions (Tom Hesketh's clearance application)**
>
> | Condition | Facts | Met? |
> |---|---|---|
> | A residence | TPLC and TWS UK resident | ✓ |
> | B trading | TPLC holding company of a trading group; TWS trading | ✓ |
> | C purpose | Board minutes: each business to focus, with its own management and capital | ✓ |
> | D anti-avoidance | No arrangements for a third party to acquire control; no planned sale or cessation; no chargeable payments planned | ✓ |
> | E shares | Whole of TPLC's holding; ordinary, non-redeemable | ✓ |
> | F afterwards | TPLC remains holding company of a trading group | ✓ |
> | L–M | Not relevant (TPLC is the top company) | — |
> | Clearance | s 1091 clearance received before 1 July GY5; return within 30 days | ✓ |
>
> **Consequences**
>
> | Party | Result | Authority |
> |---|---|---|
> | TPLC's shareholders (mostly pension funds and insurers) | No income: exempt distribution is not a distribution; reorganisation treatment; base cost split between TPLC and Tarnwater shares | CTA 2010 s 1075; TCGA s 192(2), ss 126–130 |
> | TPLC | Disposal of the TWS shares at market value (£180m) under the general rules; gain **exempt under the SSE** (≥ 10% held for ≥ 12 months; TWS trading) | TCGA s 17; Sch 7AC |
> | TWS (degrouping) | Water-systems factory acquired from TES on 1 October GY3 (within 6 years): **no s 179 charge** while no chargeable payment is made within 5 years | TCGA s 192(3)–(4) |
> | TWS (SDLT) | Group relief on the factory (within 3 years) **clawed back: £289,500** | FA 2003 Sch 7 para 3; chapter 21 |
> | Intangibles | TWS holds no transferred intangibles, so no CTA 2009 s 780 question arises | — |
>
> **A shareholder's base cost (illustrative figures, not story facts).** Suppose a pension fund holds TPLC shares costing **£500,000** and receives one Tarnwater share for each TPLC share; on the first day of dealing, TPLC trades at **£6.80** and Tarnwater at **£1.20**.
>
> | £ | Market value per share | Base cost |
> |---|---|---|
> | TPLC shares | 6.80 | 500,000 × 6.80/8.00 = **425,000** |
> | Tarnwater shares | 1.20 | 500,000 × 1.20/8.00 = **75,000** |
> | Total | 8.00 | 500,000 |

**Why the SSE, not s 192, covers TPLC.** Section 192(2) is a shareholder-level rule (it disapplies s 122 and treats the members as reorganising). The demerger code gives the **distributing company** no relief for its own disposal; in a direct demerger of a trading subsidiary the SSE usually does the work, as HMRC's June 2026 consultation (Annex E) acknowledges ("in the majority of cases, SSE would apply"). Where the SSE is unavailable (for example a non-trading subsidiary, which would anyway fail condition B, or a holding period shortfall), the distributing company has a chargeable gain. Separately, **Sch 7AC para 4** decides whether there is a disposal without regard to s 127, s 116(10) and **s 192(2)(a)**: the SSE takes priority over the no-disposal treatment where both could apply, which matters for a corporate shareholder with a substantial holding in the distributing company. None of TPLC's widely spread shareholders is in that position.

**SDLT does not forgive.** The gains code switches off the degrouping charge on an exempt demerger; the SDLT code does not switch off the clawback of group relief. The tax function priced the £289,500 into the board's decision.

> **Exam lens: demergers**
> - **Grade:** demergers **1**.
> - **Past appearances:** **not examined M23–M26**; core, so expect a demerger inside a reorganisation question, probably alongside pre-demerger property transfers.
> - **Style:** list the conditions and apply each to the facts (0.5–1 mark each); then the consequences for shareholders, the distributing company, degrouping, chargeable payments, clearance and SDLT.
> - **Traps:** calling an exempt demerger a dividend; condition D and pre-arranged sales or changes of control; forgetting that condition B excludes investment businesses; giving the distributing company s 192 relief (it relies on the SSE); chargeable payments within 5 years (income, and s 179 revived); SDLT clawback; the 30-day return.

---

## Transactions in securities

The last rule is the oldest kind of anti-avoidance in the corporate code. Its target: a company should not take value out of another company in a form that escapes tax, when the same value taken as income would have been taxed.

**The charge (CTA 2010 Part 15, ss 731–751).** A company is liable to counteraction if it obtains, or is in a position to obtain, a **CT advantage** from a **transaction in securities** (or the combined effect of two or more), in **circumstance C, D or E** (s 733). A **CT advantage** (s 732) is relief or increased relief, a repayment or increased repayment, the avoidance or reduction of a charge or assessment to CT, or the avoidance of a possible assessment.

| Circumstance | Outline | Reference |
|---|---|---|
| (A) | Abnormal dividends used for exemptions and reliefs: **omitted by FA 2010 Sch 12** | former s 735 |
| C | In consequence of a transaction whereby another person receives an **abnormal amount by way of dividend**, the company receives consideration representing distributable assets, future receipts or trading stock, and pays no CT on income on it | s 736 |
| D | The company receives consideration, not taxed as income, connected with the distribution, transfer or realisation of assets of a **relevant company** (or the application of such assets in discharging liabilities) | s 737 |
| E | The company receives **assets of a relevant company** in connection with the transactions and pays no CT on income on them | s 738 |

**Relevant company (s 739):** a company under the control of **not more than 5 persons**, or any **unquoted** company, unless it is controlled by one or more companies that are not themselves relevant companies.

**What counts as a transaction in securities.** The phrase is wide. As HMRC's manual records (CTM36810): the redemption of securities (*IRC v Parker* (1966) 43 TC 396); an agreement altering shareholders' rights in a liquidation (*IRC v Joiner* (1975) 50 TC 499); loans to individuals who later acquired the company (*Williams v IRC* (1979) 54 TC 257). But **paying a dividend is not, in itself, a transaction in securities** (*IRC v Laird Group plc* [2003] UKHL 54, Lord Millett). (These cases are known here through HMRC's summaries.)

**The defence (s 734).** The company must show **both** (A) that the transactions were effected for **genuine commercial reasons** or in the ordinary course of making or managing investments, **and** (B) that enabling CT advantages to be obtained was **not a main object**.

**Procedure.** Preliminary notification (s 743); the company may make a statutory declaration within **30 days** (s 744); a tribunal may determine whether there is a prima facie case (s 745); HMRC serve a **counteraction notice** making the adjustments (assessment, nullifying a repayment, recomputation). **No assessment more than 6 years after the AP** (s 746(5)). Appeals: s 750.

**Clearance (ss 748–749).** The company gives HMRC particulars; HMRC may ask for more information **within 30 days**, and must then notify within **30 days** whether they are satisfied that no counteraction notice ought to be served. Clearance binds for the transactions described only, and is **void** without full and accurate disclosure. It may be sought before or after the transactions.

**How much does this matter to a large group?** Less than it once did, in the book's reading. Since 2009 most dividends a large company receives are exempt (Part 9A), so a company usually gains nothing by taking value as capital rather than income. The rule still bites where the income route would have been taxed: a para E or F distribution, a dividend outside every exempt class, or a dividend for which a foreign deduction is given. Individual shareholders face the parallel income tax rules (ITA 2007 Part 13 Ch 1; clearance s 701), where most clearance applications arise.

> **Worked example 19.6: where Part 15 could bite (invented for this purpose; not a Tarnmoor story fact)**
>
> An unquoted company (a **relevant company**: three investors control it) has large reserves. One investor, a company, holds preference shares whose dividends fall outside every exempt class (for example under the quasi-preference share rules), so any dividend it received would be taxed. Instead of a dividend, the shareholders arrange for a NewCo to buy the investor's preference shares at a price that includes the unpaid dividend, funded from the unquoted company's own cash. The investor receives capital (perhaps sheltered by a capital loss) instead of taxable income: **circumstance D**. Unless it shows commercial reasons **and** no main object of a CT advantage, HMRC may counteract by treating the amount as income. The prudent course is a s 748 clearance before completion.

> **Exam lens: transactions in securities**
> - **Grade:** transactions in securities **1**.
> - **Past appearances:** **not examined M23–M26**.
> - **Style:** short, accurate technical prose: name the circumstance, test the relevant company, apply the two-limb defence, mention clearance and the 6-year limit.
> - **Traps:** citing circumstance A (repealed); treating a bare dividend as a transaction in securities (*Laird*); giving only one limb of the defence; confusing Part 15 with value shifting (chapter 17) or with the income tax TiS rules.

---

## Law in motion: the 2026 consultation

The June 2026 consultation (published 23 June 2026; closed **14 September 2026**) is **proposed, not law**. Answer on the conditions as they stand. But it shows where the pressure lies.

**Demergers (consultation chapter 3).**
- Remove condition A (residence); extend condition B beyond trading ("activity"); remove conditions C, G, L and M; relax I and K; replace "all or substantially all" with "all" in E, H and J.
- Give condition D explicit **5-year** limits for onward sales, changes of control and winding up.
- **Remove the automatic right to take a refused clearance to the tribunal.**

**Closing the side doors (chapter 2).** Freeze share capital on shares in **new holding companies** at the original subscription value, to stop **capital reduction demergers** and share-for-share exchanges followed by capital reductions from releasing value as capital. The paper is aimed mainly at shareholders within income tax ("not intended to affect corporate shareholders directly") but flags possible effects on intra-group share exchanges and the SSE.

**The debate.** A generous relief with tight conditions, or a simpler relief with purpose tests and fewer side doors? The consultation chooses the second. Whether Parliament follows is a question for a later Finance Act.

---

## How the examiner will test this

- **Grades (2026 grid; check the 2027 grid when published):** company distributions 1; distributions received 1; companies in liquidation or administration 1; company reconstructions 1; demergers 1; Part 22 CTA 2010 1; transactions in securities 1; transfers concerning companies of different member States 2.
- **History:** demergers, transactions in securities and liquidations not seen M23–M26; the hive-down appeared in **M23 Q4**; exempt distributions and pre-sale dividends in **N24 Q3** (value shifting ignores a fall in value caused only by an exempt distribution).
- **Style:** technical prose and computations; 15 or 20 marks; 0.5–1 mark per point; no letter format; a recommendation only when asked.
- **Method for a demerger:** conditions A–F (or G–K), applied to the facts; the arrangement that breaks D; then shareholders, distributing company, degrouping, chargeable payments, clearance and return, SDLT.
- **Method for a transfer of trade:** ownership and tax conditions; CAs at TWDV; losses forward; no s 39 for the predecessor; L − A restriction with the consideration in A.

---

## What to take away

- **Distributions:** categories A–H (s 1000). Disguised interest (E, F) is never deductible (CTA 2009 s 1305) and never exempt (s 931D). Since FA 2012, an undervalue transfer to a member is a distribution even inside a group (s 1020; s 1021 repealed). A reserve from a capital reduction counts as profits (s 1027A). Winding-up distributions are capital (s 1030).
- **Distributions received:** a large company is taxed unless the distribution falls in an exempt class (control or 40/55 JV; non-redeemable ordinary shares; portfolio < 10%; relevant profits) and is not E/F or deductible abroad. Election out by the second anniversary of the end of the AP (s 931R).
- **Strike-off:** pre-dissolution distributions up to **£25,000 in total** are capital if the company is dissolved within **2 years** (ss 1030A–1030B). For a parent that can cost tax: TPLC paid **£4,475** on Tarnmoor Pumps' **£18,000** (gain £17,900), where a dividend would have been exempt.
- **Part 22 Ch 1:** 75% common ownership in the year before and at or within 2 years after; both within CT; automatic. Plant at TWDV (s 948); losses forward (s 944) subject to the predecessor's s 37 claim; no s 39 for the predecessor; **R − (L − A)** (s 945): in example 19.3 an excess of £1.0m cut £4.0m of losses to £3.0m. *Leekes*: stream inherited same-trade losses.
- **Reconstructions:** Sch 5AA conditions 1 and 2 plus 3 or 4; s 136 (shareholders), s 139 (company: no consideration to the transferor; assets stay in the UK charge). From **26 November 2025**, s 139's main purpose test covers **CGT, CT and income tax**; clearance on the acquirer's application.
- **Demergers:** an exempt distribution is not a distribution (s 1075). Direct (s 1076: A–F) or indirect (s 1077: A–D, G–K); L–M where the distributor is a 75% subsidiary. Shareholders: reorganisation (s 192(2)). Distributing company: the SSE. No degrouping charge (s 192(3)) unless a chargeable payment within **5 years**. Clearance within 30 days (s 1091); return within 30 days. **SDLT clawback is not switched off: £289,500 on Tarnwater.**
- **Transactions in securities:** CT advantage; circumstance C, D or E; relevant company (≤ 5 controllers or unquoted); defence of commercial reasons **and** no main object; clearance 30 + 30 days; counteraction within 6 years.

So, how can a business be divided without the tax system treating the division as a sale or a dividend? By keeping the same owners in the same proportions, keeping the trade going, and showing the purpose is commercial. The law then looks through the paper.

Chapter twenty, on buying and selling companies, follows Tarnmoor Actuators out of the group and into Brennock's hands.

---

## Key rules and figures

| Rule | Figure / effect | Reference |
|---|---|---|
| Distribution categories | A–H | CTA 2010 s 1000 |
| Undervalue transfer to a member | Excess of benefit over new consideration; intra-group exception repealed | ss 1020, 1021 (FA 2012 s 33) |
| Capital reduction reserve | Treated as profits | s 1027A |
| Winding-up distribution | Capital | s 1030 |
| Strike-off distribution | Capital if total ≤ £25,000; dissolved within 2 years; from 1 March 2012 | ss 1030A, 1030B |
| Distributions not deductible | — | CTA 2009 s 1305 |
| Exempt classes (large companies) | Control / 40-55 JV; non-redeemable ordinary shares; portfolio < 10%; relevant profits; s 931I | CTA 2009 ss 931D–931I |
| Not exempt | E and F distributions; foreign-deductible distributions | s 931D |
| Election to tax | By 2nd anniversary of end of AP | s 931R |
| Part 22 Ch 1 ownership | 75% in the 1 year before and on or within 2 years after | CTA 2010 s 941 |
| Part 22 Ch 1 effects | CAs continue (s 948); losses forward (s 944(3)); no s 39 (s 944(2)) | ss 944, 948 |
| L − A restriction | Relief = R − (L − A); A includes consideration | s 945 |
| Balancing allowance avoidance | Allowances pass to successor | s 954 |
| Scheme of reconstruction | Conditions 1 and 2 + 3 or 4 | TCGA Sch 5AA |
| s 139 | No gain, no loss; no consideration to transferor; purpose test (CGT, CT, IT) from 26 November 2025 | TCGA s 139; FA 2026 s 38 |
| Exempt demerger | Not a distribution; direct A–F; indirect A–D, G–K; L–M | CTA 2010 ss 1075–1085 |
| Demerger clearance | Before the distribution; HMRC 30 days; tribunal within 30 days | ss 1091, 1094 |
| Chargeable payment | Within 5 years; taxed as income; revives s 179 | ss 1086, 1088; TCGA s 192(4) |
| Demerger: shareholders | Reorganisation; cost apportioned | TCGA s 192(2) |
| Demerger: degrouping | No s 179 charge | TCGA s 192(3) |
| TiS | CT advantage; circumstances C, D, E; relevant company; two-limb defence; clearance 30 + 30 days; 6-year limit | CTA 2010 ss 731–751 |
| Story: Tarnmoor Pumps (GY7) | £18,000 capital distribution; cost £100; gain £17,900; CT £4,475; no SSE | invented (story) |
| Story: TAL hive-down (1 Feb GY6) | Part 22 Ch 1; plant at TWDV; no losses; factory s 171; patents s 775 | invented (story) |
| Story: Tarnwater demerger (1 Jul GY5) | £180m; s 1076; s 1091 clearance; SSE for TPLC; no s 179; SDLT clawback £289,500 | invented (story) |

## Statutory and case references

**Statute.** CTA 2010 Part 15 (ss 731–751, especially 732–739, 743–750); Part 22 Ch 1 (especially ss 939–945, 948, 951–952) and Ch 2 (s 954); Part 23 (ss 1000, 1015, 1020, 1021 (repealed), 1022, 1027A, 1030, 1030A, 1030B) and Ch 5 (ss 1073–1099, especially 1074–1078, 1081–1086, 1088, 1091–1094). CTA 2009 Part 9A (ss 931A–931S) and s 1305. TCGA 1992 ss 17, 122, 126–130, 136, 137, 139, 103K, 171, 179, 192, Sch 5AA, Sch 7AC paras 3, 4, 15A, 19. CAA 2001 ss 265–267, 561. FA 2012 s 33; SI 2012/266; FA 2026 ss 36–38. ITA 2007 Part 13 Ch 1 (s 701). Companies Act 2006 ss 1000, 1003.

**HMRC manuals and guidance.** CTM06210, CTM06250, CTM06280 (relevant liabilities restriction); CTM06065 (trade transfers and terminal relief); CTM17250, CTM17260, CTM17270, CTM17280, CTM17290 (demergers); CTM36220 (dissolution distributions); CTM36800–CTM36841 (transactions in securities, especially CTM36810); CG52631; Statement of Practice 13 (1980); "Apply for statutory clearance for a transaction" (GOV.UK); *Modernising the taxation of distributions and repayments of capital from companies* (consultation, 23 June 2026).

**Cases.** *Progress Property Co Ltd v Moorgarth Group Ltd* [2010] UKSC 55; *Leekes Ltd v HMRC* [2018] EWCA Civ 1185; *IRC v Laird Group plc* [2003] UKHL 54 (via CTM36810); *IRC v Parker* (1966) 43 TC 396, *IRC v Joiner* (1975) 50 TC 499, *Williams v IRC* (1979) 54 TC 257 (via CTM36810); *Spring Capital Ltd v HMRC* (FTT, 2019; secondary report only).
