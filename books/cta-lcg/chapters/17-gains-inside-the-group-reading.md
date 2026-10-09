# Chapter seventeen: Gains inside the group

On 23 July 2008 the Court of Appeal gave judgment in *Johnston Publishing (North) Ltd v HMRC* [2008] EWCA Civ 858. The taxpayer had begun life as a company bought off the shelf, and it had joined a large group. An asset had come to it from another company in that group, free of tax, as assets moving inside a group usually do. Later the two companies left the group together. HMRC said that leaving triggered a charge on the asset's gain; its provisional figure for that gain, as reported at the time, was £280m.

The law then had an exception for associated companies leaving together. The two companies were associated when they left, but they had not been associated when the asset moved between them. The court decided for HMRC: both moments mattered. In the words of Tuckey LJ (para 46), "one must start by trying to give meaning to all the words used."

Three years later Parliament rewrote that exception. In the same Finance Act it changed what the charge itself does for most groups, turning what had been a tax bill into something that is usually exempt. This chapter explains how that happened, and the larger question behind it: **when the companies in a group pass assets, gains and losses among themselves, when does the law look through the walls between them, and what happens when a company walks out of the house?**

This is the third chapter of Part Three. Every topic in it is **core (grade 1)** on the LCG grid: groups and transactions within groups, losses attributable to depreciatory transactions, anti-gain buying, companies leaving groups, recovery of tax otherwise than from the taxpayer company, value shifting (ss 29–30 and s 31) and stock in trade. It builds on *The Living Law* (TKS), chapter 24, which introduced gains groups, the s 171A election, group roll-over, pre-entry losses and the degrouping charge. Here we take each of them to Advanced Technical depth and add the anti-avoidance rules that chapter only signposted.

Nearly all the law is in the Taxation of Chargeable Gains Act 1992 (TCGA 1992; "the Gains Act" in the audio edition). We apply the law for **FY2026**. Finance Act 2026 made no change to ss 170–192, Sch 7A or ss 184A–184I.

---

## Why a group needs its own gains rules

*The Living Law*, chapter 24, pictured a group as a family of separate wallets living under one roof. For gains a slightly different picture helps: a family that owns several houses and moves **furniture** between them as its needs change. Nobody pays rent and nobody sells anything to anybody.

Tax law starts from the opposite place. Each company is a separate person. When one company hands a building to its sister, that is a disposal; the two are connected, so the market value rule would normally apply (TCGA 1992 ss 17–18), and the transferor would be taxed on a gain it never turned into cash.

So s 171 lets assets move inside a group at **no gain, no loss**. The relief is automatic and generous, and it creates an obvious game: move a building into a new subsidiary, then sell the subsidiary's shares instead of the building. HMRC's manual (CG45400) describes it: the arrangement was "commonly referred to as enveloping or the envelope trick" and was used extensively after the Finance Act 1965 brought companies' gains into tax. The **degrouping charge** (s 179) is the answer: a company leaving the group within six years of receiving an asset at no gain, no loss is treated as having sold and reacquired it at its market value on the day it received it.

The rest of the code follows the same pattern: a relief because the group is one business, then a rule to stop the relief being used as a tool.

| Relief (the family discount) | Counterweight (settling up) |
|---|---|
| s 171 no gain, no loss transfers | s 179 degrouping charge |
| s 171A reallocation of gains and losses | Sch 7A pre-entry losses; ss 184A–184I anti-buying rules |
| s 175 group roll-over | s 175(2C): no roll-over into assets acquired intra-group |
| Free movement of value inside the group | s 176 depreciatory transactions; s 177 dividend stripping; ss 29–31 value shifting |
| Tax assessed on the company that realises the gain | s 190 recovery from other group companies |

---

## Who belongs to the gains group

**Section 170** builds the group from the top down:

1. A **principal company**, its **75% subsidiaries**, their 75% subsidiaries and so on down the chain (75% = beneficial ownership of three quarters of the ordinary share capital, directly or indirectly).
2. Every member must also be an **effective 51% subsidiary** of the principal company: the principal company must be beneficially entitled to **more than 50% of the profits available for distribution** and **more than 50% of the assets on a winding up** (s 170(7)).
3. A 75% subsidiary cannot itself be a principal company (subject to s 170(5)); a company can be in **only one** gains group, with tie-breakers in s 170(6).
4. **Residence is irrelevant to membership** (s 170(2)): overseas companies are members, although what they can do with an asset depends on the UK charge (next section).
5. A company does not leave merely because it or another member goes into liquidation (s 170(11); chapter 14).

> **Worked example 17.1 (general illustration): the effective 51% test down a chain**
>
> | Tier | Direct holding | Principal company's effective interest | Gains group member? |
> |---|---|---|---|
> | Subsidiary | 75% | 75.00% | Yes |
> | Sub-subsidiary | 75% of tier 1 | 56.25% | Yes (> 50%) |
> | Third tier | 75% of tier 2 | 42.19% | **No** (≤ 50%), although every link is 75% |
>
> (Effective interest here assumes profit and asset entitlements follow the ordinary shares.)

**Tarnmoor's gains group.** Our invented group, Tarnmoor, is a listed engineering group; everything about it is made up for teaching. Tarnmoor plc (TPLC) is the principal company.

| Company | Gains group member | Note |
|---|---|---|
| TEL, TES, TFL, TWS, Tarnmoor Pumps (dormant) | Throughout (TWS until the 1 July GY5 demerger) | 100% subsidiaries |
| TVS (Vallaria), TCM (Marrovia) (invented countries) | Throughout | Non-resident members |
| TIL | Throughout | Irish-incorporated; UK resident until 30 June GY4 |
| Calder (CVE) | From 1 April GY1 | Acquired |
| Brackenwell (BSL) | From 1 July GY2 | Acquired |
| Helmside (HEL) | **From 1 March GY5** (85%) | Consortium company (45%) before |
| TAL | 1 February GY6 to 31 December GY6 | TEL's 100% subsidiary; sold |

**Do not confuse the guest lists** (chapter 1's matrix):

| Purpose | Group test | Authority |
|---|---|---|
| No gain, no loss; s 171A; group roll-over; pre-entry losses; degrouping | 75% + effective 51%; any residence | TCGA 1992 s 170 |
| SSE aggregation and group | 51% group | TCGA 1992 Sch 7AC para 26 |
| Recovery of unpaid tax on gains | **51% group** | TCGA 1992 s 190(13) |
| Group relief | 75% + equity holder tests; UK related companies only | CTA 2010 ss 151–152 |
| SDLT / stamp duty group relief | 75% of share capital, profits and assets | FA 2003 Sch 7; FA 1930 s 42 |

Collection reaches further than relief: a 60% subsidiary can never receive an asset at no gain, no loss, but can be made to pay a fellow member's gains tax.

---

## No gain, no loss

**Section 171(1).** A disposal of an asset by one member of a gains group to another is treated as made for whatever consideration gives the transferor **neither a gain nor a loss**. It is **automatic** (no claim, no election) and it **overrides market value** (s 171(1); the connected-person rules and the actual price on the transfer documents are ignored).

**The UK-charge condition (s 171(1A)).** Each company must be UK resident, or a non-resident company that is chargeable on that asset (because it is used by a UK permanent establishment, or is UK land within s 2B(4)), before and after the transfer. A transfer that takes the asset out of the UK charge is taxed on the ordinary rules. When Calder sold its process-valve **plant** to TVS on 1 October GY3, that sale was outside s 171 for the same reason chapter 11 gave for the know-how sold with it (CTA 2009 s 775 condition 3).

**Excluded disposals (s 171(2)–(3)):**

| Excluded | Why |
|---|---|
| Disposal in satisfaction of an intra-group debt | Not a transfer of value within the family |
| Redemption of redeemable shares | Treated under the share rules |
| Capital distributions (s 122) | Shareholder-level event |
| Disposals to or by investment trusts, VCTs, qualifying friendly societies, UK REITs | Special regimes |
| Disposal **to a dual resident investing company** | Anti-avoidance |
| Satisfaction of an option granted when not grouped | Not an intra-group bargain |
| A share exchange within s 135 | The share exchange rules apply instead (chapter 18) |

**What the transferee inherits.** The transferor's cost, including **indexation to December 2017** for pre-2018 assets, which is rolled into the deemed consideration (s 56(2)). But HMRC's manual (CG45305; CG46101) explains that indexation rolled up this way **cannot create or increase a loss** on the transferee's later disposal (s 56(3)); indexation for all disposals stops at December 2017 (s 53(1B)).

> **Worked example 17.2 (invented story, GY3): two transfers at no gain, no loss**
>
> | £ | Calder's works → TES (1 April GY3) | Water-systems factory → TWS (1 October GY3) |
> |---|---|---|
> | Transferor's cost | 4,200,000 (bought March 2019) | 4,600,000 (bought GY1) |
> | Indexation | nil (acquired after December 2017) | nil |
> | Deemed consideration = transferee's base cost | **4,200,000** | **4,600,000** |
> | Market value at transfer | 5,600,000 | 6,000,000 |
> | Gain deferred inside the asset | **1,400,000** | **1,400,000** |
> | SDLT group relief (chapter 21) | 269,500 saved | 289,500 (later clawed back) |
>
> TES leases the works back to Calder. TWS uses the factory in its water-infrastructure trade. In our invented case, when the factory moved there were **no arrangements** for TWS to leave the group; the demerger idea came later (chapter 19). Both transfers go on the group's degrouping register (see "Running the gains group").

> **Exam lens: gains groups and no gain, no loss transfers**
>
> - **Grade:** groups and transactions within groups **1**; non-resident and dual resident companies **1**.
> - **Past appearances:** N25 Q5 (20 marks, group property: a factory acquired by intra-group NGNL transfer; "many used market value instead of NGNL cost"); M23 Q5 (20 marks, JV at 75% v 65%: "few saw that a no-gain transfer means a lower base cost later"); M23 Q4 (20 marks, group property; "rarely considered group capital losses").
> - **Traps:** market value instead of the transferor's cost; forgetting the effective 51% test; assuming a transfer to a non-resident member is NGNL; letting rolled-up indexation create a loss.

---

## Trading stock on the move

**Section 173** borrows the appropriation rules in **s 161** (chapter 16) when an asset changes character as it moves:

- **Capital asset → transferee's trading stock.** The transfer is at no gain, no loss; the transferee is then treated as **appropriating** the asset to stock at **market value** (a chargeable gain or allowable loss), **unless it elects under s 161(3)** to bring the asset into stock at market value **reduced by the gain** (or increased by the loss), so that the difference falls into trading profit instead. Election: within **2 years after the end of the accounting period** of the appropriation (CT).
- **Transferor's trading stock → transferee's capital asset.** The transferor is treated as appropriating the asset out of stock immediately before the transfer. For the trading computation that appropriation is at **market value**, and the transferee's capital gains cost then starts from that value (s 161(2)).

> **Worked example 17.3 (labelled hypothetical, not story): land into a group developer**
>
> Suppose TES transfers a plot (cost £2,000,000; market value £3,000,000) to a group development subsidiary that will build and sell as trading stock.
>
> | £ | No election | s 161(3) election |
> |---|---|---|
> | Developer's cost on the NGNL transfer | 2,000,000 | 2,000,000 |
> | Deemed appropriation to stock at market value | 3,000,000 | 3,000,000 |
> | **Chargeable gain now** | **1,000,000** | nil |
> | Stock value brought into the trade | 3,000,000 | 2,000,000 |
> | Extra trading profit when the buildings are sold | — | 1,000,000 |
>
> A group with capital losses to use may prefer the gain now; otherwise the election keeps the profit in the trade until the cash arrives.

M23 Q4 (20 marks) tested the reverse direction: a building transferred from a **development company** (appropriation from stock to fixed assets at **market value**), which candidates missed. When an asset changes character as it moves, find the appropriation first, then apply s 171.

---

## Moving the gain, not the asset

Before 2000, a group wanting to set one member's loss against another's gain transferred the asset physically to the loss-maker just before the outside sale: legal fees, sometimes stamp duty, and occasionally a degrouping problem. The Finance Act 2000 introduced an election to treat the asset as transferred without the paperwork. For gains and losses accruing **on or after 21 July 2009** the rule was rewritten (CG45356) as a straightforward **reallocation**.

**Sections 171A–171B (current rules):**

| Condition / effect | Detail |
|---|---|
| Who | Companies A and B, members of the same gains group when the gain or loss accrues to A |
| B must be eligible | An NGNL transfer of the asset from A to B would have been possible (in practice B UK resident or trading through a UK PE) |
| Election | **Joint**, within **2 years after the end of A's accounting period** in which the gain or loss accrued; no statutory power to extend (CG45357; late elections accepted only in limited cases) |
| Amount | All or part, but elections together cannot exceed the whole gain or loss |
| Effect | The gain or loss is treated as accruing to B at the same time |
| Payments | A payment between the companies for the election, up to the amount of the gain or loss, is **ignored for CT and is not a distribution** |
| Scope | Since 2009 it also reaches deemed gains (for example, degrouping gains accruing to a company: CG45455) |

> **Worked example 17.4 (invented story, GY3): TES and TEL elect under s 171A**
>
> TEL realises a **£500,000** capital loss on a portfolio of listed shares in GY3 and has no gains of its own. TES has a chargeable gain of **£800,000** on the depot after group roll-over (next section). TES and TEL elect to treat **£500,000** of TES's gain as TEL's.
>
> | £ | No election | With election |
> |---|---|---|
> | TES chargeable gain | 800,000 | 300,000 |
> | TEL: gain reallocated | — | 500,000 |
> | TEL: current-year capital loss | (500,000) unused, c/f | (500,000) |
> | TEL net gain | nil (loss c/f 500,000) | nil |
> | CT on TES's gain at 25% | 200,000 | **75,000** |
> | **Tax saved now** | | **125,000** |
>
> - TEL's loss is a **current-year** loss: set against current gains in full; the Part 7ZA restriction applies only to losses carried forward (chapter 14). Without the election, the loss could be used only against TEL's own future gains, within the restriction.
> - TES pays TEL **£125,000** for the use of the loss; it is below £500,000, so it is ignored for CT.
> - Deadline: **31 December GY5**; filed with the GY3 returns.
> - TES's net gains for GY3: £300,000 + lease assignment gain £351,200 (chapter 16) = **£651,200** (the figure chapter 28 uses in tax-EBITDA).

---

## One trade for roll-over

Chapter 16 taught roll-over relief for a single company: window **12 months before to 3 years after** the disposal (s 152(3)); the chargeable amount is the **proceeds not reinvested**, up to the gain.

**Section 175** takes it into the group:

- **s 175(1):** all the trades carried on by members of a gains group are treated as **a single trade**.
- **s 175(2A):** a disposal by one member and an acquisition by another are treated as by the same person, on a claim by **both** companies.
- **s 175(2B):** a **non-trading member** (typically a property company) qualifies if the assets it disposes of or acquires are used **only for the trades of other members**.
- **s 175(2C):** **no roll-over** into a new asset acquired from another member at no gain, no loss.
- **s 175(2):** UK-resident companies (or UK PE trades); dual resident investing companies excluded.

> **Worked example 17.5 (invented story, GY3): TES's depot rolled into TEL's distribution centre**
>
> In our invented case TES (non-trading; a company with investment business, chapter 13) has let the depot to TEL throughout its ownership, and TEL has used it only for its trade. The distribution centre is used only for TEL's trade.
>
> | £ | |
> |---|---|
> | Proceeds (30 April GY3) | 6,000,000 |
> | Cost (June 2004) | (2,500,000) |
> | Indexation June 2004 – December 2017: 0.489 × 2,500,000 | (1,222,500) |
> | **Gain** (chapter 16) | **2,277,500** |
> | Reinvested: TEL's distribution centre (1 September GY3; land, integral features and structure) | 5,200,000 |
> | Proceeds not reinvested (6,000,000 − 5,200,000) | 800,000 |
> | **Chargeable in TES** (lower of gain and proceeds not reinvested) | **800,000** |
> | **Rolled over** (2,277,500 − 800,000) | **1,477,500** |
> | **TEL's base cost** (5,200,000 − 1,477,500) | **3,722,500** |
>
> - Reinvestment 4 months after the disposal: within the window. Both TES and TEL sign the claim.
> - Order: roll-over first; then the s 171A election moves £500,000 of the £800,000 to TEL.
> - The rolled-over gain sits in TEL's building. The SBA on the structure (chapter 9) runs separately; allowances claimed are added to TEL's proceeds on a sale.

**If TES had let the depot outside the group** (to an unconnected tenant or a 50% JV), there would have been no group trade to roll into. N24 Q1 (15 marks) tested exactly this: candidates "wrongly deferred a gain on property leased outside the group against group reinvestment" and taxed the gain rather than the proceeds not reinvested.

> **Exam lens: s 171A and group roll-over**
>
> - **Grade:** groups and transactions within groups **1**; replacement of business assets **1**.
> - **Past appearances:** N24 Q1 (15 marks: group roll-over and holdover; property leased to a group company v a 50% JV; assignments treated as grants); M26 Q3 (15 marks: roll-over with partial reinvestment; relief section weak); M23 Q4 (group-level roll-over).
> - **Style:** compute the gain, then the relief, then the base cost of the new asset; state who claims and by when.
> - **Traps:** chargeable amount from the gain rather than the proceeds; assets used outside the group; rolling into an asset bought intra-group (s 175(2C)); forgetting that both companies claim; missing the 2-year s 171A deadline.

---

## Losses that arrive with a new member

**Schedule 7A** stops a group buying capital losses. Since **FA 2011 Sch 11**, a **pre-entry loss** is simply an allowable loss that **accrued to a company before it joined** the group; the earlier time-apportionment and market-value rules for later losses on assets held at entry (paras 2–5) were omitted.

**Permitted uses (Sch 7A para 7).** A pre-entry loss may be deducted only from gains:

| (a) | on disposals made by the company **before** it joined (in the same or a later period) |
|---|---|
| (b) | on assets the company **held when it joined** |
| (c) | on assets acquired after entry **from outside the group** and used in a trade the company carried on before entry and has carried on ever since |

Para 6 sets the order of set-off, integrated with the Part 7ZA restriction (para 6(1A)–(1C)). Sch 7A does not apply where s 184A applies (para 1(1)), and a new holding company inserted over an existing group with the same shareholders does not create an "entry" (para 1(6)–(7)).

> **Worked example 17.6 (invented story): Brackenwell's £400,000 pre-entry loss**
>
> Before Tarnmoor bought it, BSL realised a capital loss of **£400,000** on shares in a failed spin-out. It joined the group on **1 July GY2**.
>
> | Para 7 route | BSL's position | Usable? |
> |---|---|---|
> | (a) Gains before entry | No disposals 1 January–30 June GY2 | No |
> | (b) Assets held at entry | Patents and know-how are Part 8 intangibles (not TCGA assets); laboratory equipment is plant with capital allowances | No gains in prospect |
> | (c) Outside assets used in the continuing sensor trade | Only if BSL later buys, say, a building from a third party for its trade and sells it at a gain | Possible, not planned |
> | NGNL transfer of a gain asset into BSL | Asset acquired from inside the group after entry | **Blocked** |
> | s 171A reallocation of another member's gain | On the **book's reading**, the reallocation assumes the asset passed to BSL from inside the group just before the disposal, so the gain is not on an asset held at entry | **Blocked (book's reading)** |
>
> If ever used, the loss falls within Part 7ZA. The group allocates its whole £5m deductions allowance to TEL (chapter 14), so BSL could relieve only 50% of a qualifying gain. Valued at nil in the price; no deferred tax asset. The pattern matches CTA 2010 Part 14 Chs 2B and 2D for trading losses (chapter 14).

---

## Buying gains and buying losses

Schedule 7A is mechanical: it asks when a loss accrued and ignores motive. **Sections 184A–184I**, inserted by **FA 2006 s 70** (which repealed the old pre-entry gains Schedule, Sch 7AA), turn on **purpose**.

| Rule | Effect |
|---|---|
| **Qualifying change of ownership** (s 184C) | A company joins a group, leaves one, or comes under control; exceptions for a new holding company with identical shareholders and internal moves of a 75% subsidiary |
| **s 184A loss buying** | Losses accruing (or on assets held) before the change cannot be deducted if the change is connected with arrangements a main purpose of which is a **tax advantage** involving the deduction of those losses |
| **s 184B gain buying** | Where the change is connected with arrangements a main purpose of which is to secure a tax advantage by deducting losses from a gain on a **pre-change asset**, no loss can be deducted from that gain other than the company's own pre-change losses |
| s 184D | "Tax advantage" defined |
| **ss 184G–184H** (TAAR) | Schemes converting income into capital to use capital losses, or securing income deductions alongside loss use; operate by HMRC notice (s 184I timing) |

HMRC's view of the purpose test (CG47025): a main purpose of any participant counts. HMRC's example (CG47337): a seller sells a subsidiary to a buyer with surplus capital losses, the buyer then buys the subsidiary's business hoping its losses will absorb the gain; s 184B stops the gain being sheltered. On priority, HMRC's manual (CG47021) says the anti-avoidance rules take priority where there is a tax-avoidance purpose, and Sch 7A applies to ordinary mergers and acquisitions.

**Tarnmoor.** BSL was bought for its sensors, not its losses: Sch 7A, not s 184A, governs its £400,000. Calder's works are a **pre-change asset** of Calder (held when Calder joined on 1 April GY1); no group company has capital losses earmarked for them, and the acquisition was commercial, so s 184B has nothing to bite on. The board minutes on each acquisition record the commercial reasons.

> **Exam lens: pre-entry losses and anti-gain buying**
>
> - **Grade:** anti-gain buying **1**; pre-entry losses sit within groups and transactions within groups **1**.
> - **Past appearances:** not examined as a main topic M23–M26; expect a part-requirement in an acquisition or sale question.
> - **Traps:** applying the pre-2011 time-apportionment rules; treating Sch 7A as a purpose test (it is not); forgetting that s 184B protects the target's own pre-change losses; forgetting Part 7ZA when a pre-entry loss is used.

---

## Depreciatory transactions and dividend stripping

A group can make a subsidiary's shares worth less without selling anything, then sell the shares at a loss and set it against real gains elsewhere.

**Section 176:**

- Applies to a disposal of shares or securities in a company whose value has been **materially reduced by a depreciatory transaction** (on or after 31 March 1982).
- **Depreciatory transaction:** a disposal of assets between group members **otherwise than at market value**; or any other transaction to which the company (or its 75% subsidiary) and one or more other group members were parties, including a cancellation of share capital under CA 2006 s 641.
- **Effect:** any **loss** is reduced by a just and reasonable amount. **No motive test. Losses only:** a gain is never increased.
- **Later gain relief:** where a loss is reduced, a gain on a disposal of shares in another company that was party to the transaction, within **6 years**, can be reduced by up to the amount of the loss disallowed.
- A **negligible value claim** counts as a disposal.

**Section 177 (dividend stripping):** a company holding at least **10%** of a class of shares (with connected holdings), not a dealer, receives a distribution that materially reduces the holding's value: s 176 applies as if the distribution were a depreciatory transaction, **even outside a group**, except to the extent the payment is brought into the gain or loss computation.

> **Worked example 17.7 (labelled hypothetical, not story): a depreciatory transaction**
>
> | £ | |
> |---|---|
> | Parent's cost of shares in subsidiary X | 10,000,000 |
> | X sells a building (market value 5,000,000) to sister Y for 2,000,000: value moved out of X | 3,000,000 |
> | Parent sells X for | 7,000,000 |
> | Loss before s 176 | (3,000,000) |
> | s 176 reduction (just and reasonable; up to 3,000,000) | 3,000,000 |
> | **Allowable loss** | **nil** |
> | Later sale of Y's shares at a gain within 6 years: gain reducible by up to | 3,000,000 |
>
> The intra-group building transfer is itself at no gain, no loss (s 171). The reason for it is irrelevant to s 176.

Where a share disposal falls within the **SSE**, a loss is not allowable anyway, so ss 176–177 matter most for disposals outside it: investment companies, holdings failing the 12-month test, non-trading companies.

---

## Value shifting

| Section | Scope | Test | Effect |
|---|---|---|---|
| **s 29** | Any person | (2) a person with control exercises it so value passes out of shares or rights owned by them (or a connected person) into other shares or rights; (4) favourable lease adjustments after a sale and leaseback; (5) extinguishing rights | Treated as a disposal (at arm's length consideration) |
| **s 30** | Tax-free benefit schemes | Scheme materially reduces an asset's value and confers a tax-free benefit | Consideration increased; **does not apply to a company's disposal of shares or securities** (s 30(2)) |
| **s 31** | Company disposals of shares or securities | Arrangements materially reduce the value of the shares (or of a "relevant asset" owned by a group member at the disposal); **a main purpose is a tax advantage** (avoiding CT on gains, for anyone); arrangements **do not consist solely of an exempt distribution** (s 31(1)(c)) | Consideration increased by a just and reasonable amount, taking account of the arrangements and any CT charge or relief |

Section 31 was substituted by **FA 2011 Sch 9** for the old ss 31–34. HMRC's manual (CG48500–CG48540) explains that the exempt distribution limb points to the exempt classes in **CTA 2009 s 931H**, applied in the same way for all companies; that the typical target is a drain-out dividend combined with transactions designed to create distributable reserves before a sale; that ancillary steps of paying a dividend are part of the distribution, but a dividend combined with other steps can be caught; and that the adjustment reflects the overall consequences: arrangements reducing consideration by 200 but triggering a degrouping gain of 50 may justify an adjustment of 150.

> **Worked example 17.8 (labelled hypothetical, not story): a drain-out caught by s 31**
>
> A group's property investment subsidiary Z (not trading, so no SSE) has shares costing £20,000,000, worth £50,000,000. Before selling, the group moves one of Z's properties to a sister company at a value that creates £12,000,000 of distributable reserves; Z pays a £12,000,000 dividend to its parent; the parent sells Z for £38,000,000.
>
> | £ | Without s 31 | With s 31 (full uplift) |
> |---|---|---|
> | Consideration | 38,000,000 | 38,000,000 + 12,000,000 |
> | Cost | (20,000,000) | (20,000,000) |
> | Gain | 18,000,000 | 30,000,000 |
> | Extra CT at 25% | | **3,000,000** |
>
> The arrangements are not solely an exempt distribution (they include the reserve-creating transfer), and their main purpose is plain. The just and reasonable amount could be less than £12m if, for example, the arrangements triggered other charges (HMRC's 200/50/150 example). Contrast an ordinary dividend of genuinely earned profits: **outside s 31**.

**Tarnmoor in GY6.** In December TAL pays TEL a **£2.0m** dividend out of post-hive-down profits before TEL sells TAL on 31 December. It is an exempt distribution and nothing more; and because the share sale is within the SSE there is no CT on gains to avoid. s 176/s 177 are irrelevant: there is no loss.

| | Depreciatory transactions (s 176) | Value shifting (s 31) |
|---|---|---|
| Motive | **None required** | **Main purpose of a tax advantage** |
| Bites on | **Losses** only (plus later-gain relief) | Gains (consideration increased) |
| Dividends | Via s 177 (10% holdings) | **Solely an exempt distribution: excluded** |
| Group needed | Yes (s 177 extends outside groups) | No (but reaches assets of the vendor group) |

> **Exam lens: depreciatory transactions and value shifting**
>
> - **Grade:** losses attributable to depreciatory transactions **1**; value shifting ss 29–30 **1**; s 31 **1**.
> - **Past appearance:** **N24 Q3** (15 marks: disposals of subsidiaries after pre-sale transactions; depreciatory transactions, value shifting including exempt distributions, SSE, pre-sale dividends). The examiners reported that candidates confused depreciatory transactions, which "do not consider motive and only apply to losses", with value shifting, which is "motive based", and missed that value shifting does not apply where the reduction comes solely from an exempt distribution.
> - **Traps:** using s 30 for a company share disposal; treating an ordinary dividend as value shifting; looking for a motive under s 176; ignoring the SSE (no loss, no gain to protect).

---

## The degrouping charge

**Section 179(1)–(3):**

- Company A acquired an asset from another member **at no gain, no loss** (s 171).
- A **leaves the group within 6 years** of that acquisition, owning the asset (otherwise than as trading stock), or an **associated company also leaving** owns it (or property deriving from it, s 179(10)(c)).
- A is treated as having **sold and reacquired the asset at its market value immediately after its acquisition**: the value is taken **at the date of the intra-group transfer**, not the date of leaving. Growth after the transfer belongs to whoever owns the company then.

**Departures that are not "leaving" (or not yet):**

- Ceasing to be a member only because another member ceases to exist (s 179(1)).
- The principal company joining another group (s 179(5)–(8)): no charge then, but a charge if, within the 6 years, the transferee stops being a 75% / effective 51% subsidiary of members of the new group.
- An **exempt demerger distribution** (s 192(3)), unless a chargeable payment is made within **5 years** (s 192(4)).

**Associated companies leaving together.** Associated means one is a 75% subsidiary of the other, or both are 75% subsidiaries of a third company (s 179(10)). After *Johnston Publishing* (Court of Appeal, 23 July 2008, on appeal from Lindsay J, which held that association at the time of the intra-group transfer was required as well as on leaving), **FA 2011 Sch 10** rewrote the exception as:

- **Condition A:** both companies have been 75% and effective 51% subsidiaries of another company **from the date of the acquisition** until immediately after they leave;
- **Condition B:** one has been such a subsidiary of the other for that whole period.

Second-group rules (s 179(2A)–(2B), with anti-avoidance in (2AB)) keep the exposure alive if the pair later separates inside the buyer's group within the 6 years.

> **Worked example 17.9 (labelled hypothetical, not story): selling the parent of the transferee**
>
> Suppose Tarnmoor had sold **TEL itself** in GY6 with TAL still beneath it. TAL acquired the actuators factory from TEL on 1 February GY6 and was TEL's 100% subsidiary from that day until after the sale. **Condition B is met: no degrouping charge** on that sale. The factory's deferred £2.5m stays inside the sold sub-group, exposed under the second-group rules for the rest of the 6 years.

**Leaving without a share sale by the group (s 179(4)).** Where A leaves for another reason (for example, a share issue to an outsider dilutes the group below 75%), the degrouping gain accrues to **A itself**, at the later of the start of its accounting period in which it leaves and the deemed reacquisition time (CG45425).

---

## Since 2011, the bill moves into the sale price

Before FA 2011 the degrouping gain always accrued to the leaving company, so a share buyer inherited a hidden tax bill and priced it. **FA 2011 Sch 10**, for companies leaving **on or after 19 July 2011** (or from 1 April 2011 by election), changed the rule:

- If A leaves **because of a disposal of shares by a group member** (in A or in a company above it), the degrouping gain or loss **does not accrue to A**. It is **added to (or deducted from) the consideration** for that share disposal (s 179(3A), (3D)). Where s 127 applies to the share disposal, the adjustment goes to base cost instead (s 179(3E)). Several disposals: joint election to allocate (s 179(3F)–(3G)).
- If the share disposal is within the **SSE**, HMRC's manual (CG45420) confirms the exemption applies to **the whole gain, including the degrouping element**; a degrouping **loss** is equally swallowed.
- A's base cost in the asset becomes **market value at the original transfer date**.
- A claim to reduce a degrouping charge exists (s 179ZA; CG45430); HMRC notes it may be academic where the SSE applies. The Sch 7AC para 5 anti-avoidance rule can still treat an added degrouping gain as untaxed in unusual cases (for example, a sale to a connected party to exploit the uplift).

**Misconception: "a degrouping charge is always a tax cost."** Since 2011, for a trading subsidiary sold within the SSE, it usually costs nothing and gives the buyer a higher base cost. The family picture changes: the bill for the furniture is folded into the house's sale price, and if the sale is tax free, so is the bill.

> **Worked example 17.10 (invented story, GY6): Tarnmoor Actuators**
>
> | £ | |
> |---|---|
> | TEL's cost of the actuators factory (bought after 2017; no indexation) | 5,000,000 |
> | Transfer to TAL at NGNL, 1 February GY6: TAL's base cost | 5,000,000 |
> | Market value at 1 February GY6 | 7,500,000 |
> | TAL leaves on 31 December GY6 (11 months: within 6 years), still holding the factory | |
> | **Degrouping gain** (7,500,000 − 5,000,000) | **2,500,000** |
> | Accrues to TAL? | **No** (s 179(3A)): TAL leaves on TEL's share disposal |
> | Added to TEL's consideration for the TAL shares (£48.0m cash + earn-out right valued at £3.0m) | +2,500,000 |
> | SSE on TEL's disposal (para 15A hive-down rule: chapters 18 and 20) | whole gain exempt |
> | CT if the SSE had failed (25% × 2,500,000, as part of the share gain) | 625,000 |
> | **TAL's base cost in the factory after leaving** | **7,500,000** |
>
> SDLT is separate: group relief on the hive-down is clawed back (**£364,500**, chapter 21), indemnified by TEL in the SPA.

**Gains and intangibles compared** (chapter 11):

| | TCGA 1992 s 179 | CTA 2009 s 780 |
|---|---|---|
| Window | 6 years | 6 years |
| Value | Market value at the intra-group acquisition | Market value at the transfer |
| On a share sale by a group member | Added to the **seller's** proceeds (s 179(3D)) | Charge stays with the **leaving company** |
| If that share sale is within the SSE | Exempt with the sale | **Switched off** (s 782A) |
| Buyer's cost after an SSE sale | **Uplifted** to market value at transfer | **No uplift** (TAL's patents keep WDV £1.2m) |

**The demerger exception in the story.** TWS leaves the group on **1 July GY5** in the Tarnwater demerger, an exempt distribution under CTA 2010 s 1076 (chapter 19). That is within 6 years of the 1 October GY3 factory transfer, but **s 192(3)** disapplies s 179 for a company leaving only because of an exempt demerger distribution. A **chargeable payment within 5 years** would revive the charge (s 192(4)). The deferred **£1.4m** travels with TWS in the factory's **£4.6m** cost. SDLT does not forgive: the **£289,500** relief is clawed back (chapter 21).

> **Exam lens: companies leaving groups**
>
> - **Grade:** companies leaving groups **1**.
> - **Past appearance:** **M24 Q3** (15 marks, split 7/5/3: sale of a subsidiary after an intra-group transfer at undervalue; degrouping charge added to proceeds and SSE; then change of ownership losses and enquiries): "well answered. Degrouping and SSE were identified."
> - **Style:** state the transfer date, the 6-year test, market value at transfer, who bears the gain (seller's proceeds since 2011), the SSE consequence and the leaving company's new base cost; mention SDLT clawback and the intangibles regime if the facts include them.
> - **Traps:** measuring the gain at the leaving date; charging the leaving company on a share sale; computing an SSE loss; forgetting the associated-companies conditions run from the transfer date; forgetting s 192(3) on a demerger.

---

## Collecting the tax from the rest of the group

**Section 190** (recovery of tax otherwise than from the taxpayer company):

| Element | Rule |
|---|---|
| Trigger | CT on a chargeable gain unpaid **6 months** after it became payable |
| Who can be served | (a) the company that was the **principal company** of the group when the gain accrued; (b) any company in the group that **owned the asset (or part) in the 12 months** before the gain; (c) for a non-resident taxpayer, a **controlling director** |
| Time limit | Notice within **3 years** of the final determination of the liability |
| Amount | The lower of the unpaid tax and the tax on that gain |
| Payment | Within **30 days** of the notice |
| Afterwards | Recoverable from the taxpayer company; **no deduction** for the payer |
| Group | **51% group** (s 190(13)) |

The intangibles code has a parallel power (CTA 2009 s 795; chapter 11).

> **Worked example 17.11 (labelled hypothetical, not story):** suppose TES had not paid the CT on the £300,000 of depot gain it kept (£75,000). Six months after the due date HMRC could serve notice on TPLC (principal company when the gain accrued); TPLC pays within 30 days and recovers from TES. In practice the provision matters on the sale of a subsidiary: buyers and sellers seek protection from each other's unpaid gains tax in the tax deed (chapter 20).

---

## Running the gains group, and how it is examined

> **Going further: the gains tasks of a group tax function**
>
> 1. **Keep a degrouping register.** Every NGNL transfer, with date, transferee, cost and market value on the day; that value is what a degrouping charge will use years later.
>
> | Asset | From → to | Date | Transferee's cost (£) | Market value at transfer (£) | Deferred gain (£) | Exposure | Outcome |
> |---|---|---|---|---|---|---|---|
> | Calder's works | CVE → TES | 1 April GY3 | 4,200,000 | 5,600,000 | 1,400,000 | 6 years from 1 April GY3 | TES stays in the group |
> | Water-systems factory | TES → TWS | 1 October GY3 | 4,600,000 | 6,000,000 | 1,400,000 | 6 years from 1 October GY3 | Demerger 1 July GY5: s 192(3), no charge |
> | Actuators factory | TEL → TAL | 1 February GY6 | 5,000,000 | 7,500,000 | 2,500,000 | 6 years from 1 February GY6 | TAL sold 31 December GY6: added to TEL's proceeds; SSE |
>
> 2. **Prefer the election to the lorry.** To match a gain with a loss, s 171A does it without conveyancing, SDLT or new degrouping exposure.
> 3. **Watch the six years.** Transfers more than 6 years before a sale never degroup; inside 6 years the result usually depends on the SSE: check it first.
> 4. **Document purpose and sources.** Record the source of every pre-sale dividend (s 31's exempt distribution carve-out); minute the commercial reasons for each acquisition (ss 184A–184B).
> 5. **Read the target's history** in due diligence: intra-group assets received within 6 years; pre-entry capital losses; open s 190 exposures; SDLT clawback windows. These go into the price, warranties and tax deed (chapter 20).
> 6. **Roll-over hygiene.** Keep evidence that property held by TES is used only for group trades (s 175(2B)); both companies sign the claim.
> 7. **Ethics.** Most of these rules now turn on purpose. TPLC's published tax strategy says the group does not use marketed tax avoidance schemes; a gains plan that works only if nobody asks why it was done is the kind of plan that strategy rules out.

> **Exam lens: how gains inside groups are examined**
>
> - **Grades:** all core (1): groups and transactions within groups; depreciatory transactions; anti-gain buying; companies leaving groups; non-resident and dual resident companies; recovery of tax otherwise than from the taxpayer company; value shifting (ss 29–30 and s 31); stock in trade; replacement of business assets. At least 70% of the CT element comes from core material.
> - **Past appearances:** M24 Q3 (degrouping into the SSE; well answered); N24 Q3 (depreciatory transactions v value shifting; confused); N24 Q1 (group roll-over and holdover; property let outside the group); N25 Q5 (NGNL cost, not market value; group roll-over and holdover; SDLT add-on marks missed); M23 Q4 (appropriation at market value; group roll-over; "rarely considered group capital losses"); M23 Q5 (lower base cost after an NGNL transfer).
> - **Style:** technical prose with computations; 10, 15 or 20 marks; 0.5–1 mark per point; no letter or report format. Set out each transfer (date, cost, value) and then each consequence in order. Keep £ throughout a computation.
> - **Traps:** market value instead of NGNL cost; the degrouping gain measured at leaving; charging the leaving company on a share sale; computing SSE losses; a motive test for s 176 or s 31 applied to an ordinary dividend; roll-over into property used outside the group; the 51% group for s 190 and the SSE v 75% for s 170.

---

## What to take away

- **Gains group (s 170):** principal company + 75% subsidiaries down the chain, each an **effective 51%** subsidiary (75% × 75% = 56.25% in; 75%³ = 42.19% out); any residence; one group only; survives liquidation (s 170(11)). Recovery (s 190) and the SSE use a **51% group**.
- **No gain, no loss (s 171):** automatic; overrides market value; asset must stay in the UK charge; exclusions include transfers to a DRIC and s 135 exchanges; transferee takes the transferor's cost and indexation to December 2017, which cannot create a loss. **Calder's works:** TES's cost £4.2m (value £5.6m). **Water-systems factory:** TWS's cost £4.6m (value £6.0m).
- **Trading stock (s 173 with s 161):** appropriation at market value, or a 2-year election to keep the difference in trading profit.
- **Reallocation (ss 171A–171B):** joint election within 2 years of the end of the AP; payments up to the amount ignored. **TES → TEL £500,000; tax saved £125,000; deadline 31 December GY5.**
- **Group roll-over (s 175):** trades treated as one; both claim; non-trading landlord qualifies if the asset is used only for group trades; nothing rolled into an asset acquired intra-group. **Depot:** gain £2,277,500; chargeable £800,000; rolled over £1,477,500; TEL's base cost **£3,722,500**.
- **Pre-entry losses (Sch 7A):** losses accrued before entry; usable only against pre-entry gains, assets held at entry, or outside assets used in the continuing trade. **BSL's £400,000** likely never used.
- **Anti-buying (ss 184A–184I):** purpose-based; qualifying change of ownership; s 184B keeps the target's own pre-change losses available.
- **Depreciatory transactions (s 176):** losses only; no motive; 6-year later-gain relief. **Dividend stripping (s 177):** 10% holdings, even outside groups.
- **Value shifting (s 31):** main purpose of a tax advantage; consideration increased; **solely an exempt distribution is outside it**.
- **Degrouping (s 179):** leaving within **6 years** holding the asset; market value **at the transfer**; associated companies escape only under Conditions A or B (from the transfer onwards: *Johnston Publishing*). Since FA 2011, a departure on a share sale adds the gain to the **seller's proceeds**: **TAL's £2.5m** exempt within the SSE; TAL's factory cost £7.5m. **Demerger (s 192(3)):** no charge on TWS.

So the walls between the companies in a group are real, but the law opens doors in them, and then watches who walks out carrying what.

The doors in this chapter mostly lead to share sales, and the shareholding exemption kept appearing behind them. Chapter eighteen, on shares, the exemption, reorganisations and earn-outs, opens that door properly.

---

## Key rules and figures

| Rule | Figure / effect | Reference |
|---|---|---|
| Gains group | 75% subsidiaries down the chain; effective 51% of principal company; any residence; one group | TCGA 1992 s 170 |
| Gains group in liquidation | Survives | s 170(11) |
| No gain, no loss | Automatic; overrides market value; UK charge condition; exclusions | s 171(1), (1A), (2), (3) |
| Rolled-up indexation | Carried in; cannot create or increase a loss | ss 56(2)–(3), 53(1B); CG45305 |
| Trading stock in transit | Appropriation at market value; s 161(3) election within 2 years of AP end | ss 173, 161 |
| Reallocation election | Joint; 2 years after end of transferor's AP; payments up to the amount ignored | ss 171A–171B; CG45356 |
| Group roll-over | Single trade; both claim; non-trading member (s 175(2B)); no roll-over into NGNL asset (s 175(2C)); window 12 months before to 3 years after | ss 152(3), 175 |
| Pre-entry losses | Accrued before entry; para 7 uses; Part 7ZA order | Sch 7A paras 1, 6, 7 (FA 2011 Sch 11) |
| Anti-loss / anti-gain buying | Qualifying change of ownership + main purpose tax advantage | ss 184A–184I (FA 2006 s 70) |
| Depreciatory transactions | Losses reduced; no motive; later gain within 6 years reducible | s 176 |
| Dividend stripping | 10% holding; distribution treated as depreciatory | s 177 |
| Value shifting (companies) | Main purpose; consideration increased; solely exempt distribution excluded | s 31 (FA 2011 Sch 9); s 30(2); CTA 2009 s 931H |
| Degrouping charge | 6 years; market value at intra-group acquisition | s 179(1)–(3) |
| Associated companies leaving together | Conditions A and B from acquisition to leaving | s 179(2) ff (FA 2011 Sch 10) |
| Share-sale leaver | Gain added to seller's consideration; SSE can exempt; asset rebased | s 179(3A)–(3H); CG45420 |
| Other leaver | Gain accrues to leaving company | s 179(4); CG45425 |
| Demerger | No s 179 charge; chargeable payment within 5 years revives it | s 192(3)–(4) |
| Recovery from group | Unpaid 6 months; notice within 3 years; 30 days; 51% group | s 190 |
| Story: Calder's works | Cost £4.2m (March 2019); value £5.6m; NGNL to TES 1 April GY3; SDLT relief £269,500 | invented (story) |
| Story: water-systems factory | Cost £4.6m (GY1); value £6.0m; NGNL to TWS 1 October GY3; no s 179 on the GY5 demerger; SDLT clawback £289,500 | invented (story) |
| Story: depot and roll-over | Gain £2,277,500; chargeable £800,000; rolled over £1,477,500; TEL's base cost £3,722,500 | invented (story) |
| Story: s 171A | £500,000 of TES's gain to TEL's £500,000 loss; tax saved £125,000; TES pays TEL £125,000 (ignored); TES keeps £300,000; TES net gains GY3 £651,200 | invented (story; this chapter) |
| Story: BSL pre-entry loss | £400,000; Sch 7A (not s 184A); no use in prospect | invented (story) |
| Story: TAL degrouping | £7.5m − £5.0m = £2.5m added to TEL's proceeds; SSE; TAL's factory cost £7.5m; SDLT clawback £364,500 | invented (story) |

## Statutory and case references

**Statute.** TCGA 1992 ss 17–18, 29, 30, 31, 53(1B), 56(2)–(3), 122, 135, 152(3), 161, 170, 171, 171A, 171B, 173, 175, 176, 177, 179, 179ZA, 184A–184I, 190, 192(3)–(4), Sch 7A (paras 1, 6, 7), Sch 7AC (paras 5, 15A, 26); CTA 2009 ss 775, 780, 782A, 795, 931H; CTA 2010 s 1076; FA 2000 (original s 171A); FA 2006 s 70; FA 2009 (s 171A rewrite); FA 2011 Schs 9, 10 and 11.

**HMRC manuals.** CG45305, CG46101 (NGNL and indexation); CG45356, CG45357, CG45455 (s 171A); CG45400, CG45420, CG45425, CG45430, CG45440 (degrouping); CG47021, CG47025, CG47321, CG47334, CG47337 (anti-buying rules); CG48500–CG48540 (s 31 value shifting).

**Cases.** *Johnston Publishing (North) Ltd v HMRC* [2008] EWCA Civ 858 (23 July 2008; on appeal from Lindsay J).
