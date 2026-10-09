# Chapter 12: Loan relationships and derivatives

Between 11 April and 13 June 2024 the Court of Appeal decided three corporation tax cases about interest. In each one, a group had lent money from one of its companies to another. In each one, the group said the borrowing served a commercial end. And in each one, HMRC won. That October, the Supreme Court refused permission to appeal in all three.

Those cases are the sharp end of a much larger body of law. Every company that borrows or lends, issues a bond, pays an arrangement fee, writes off a loan or hedges a price with a derivative is inside it. So this chapter asks a plain question. The tax system follows the accountant on debt. When does it stop following?

This is the financing chapter of Part Two. Loan relationships are **core (grade 1)** on the Advanced Technical paper; derivatives and hedging, and relationships treated as loan relationships, are **non-core (grade 2)**. *The Living Law* (TKS), chapter 21, introduced the basic code. Here we take it to the depth the examiner expects, with the groups, the cases and the traps.

**Law year.** Financial year 2026 (1 April 2026 to 31 March 2027) under Finance Act 2026; 2026/27 for the income tax withholding point. Statutes: Corporation Tax Act 2009 (CTA 2009), Corporation Tax Act 2010 (CTA 2010), Taxation (International and Other Provisions) Act 2010 (TIOPA 2010), the Loan Relationships and Derivative Contracts (Disregard and Bringing into Account of Profits and Losses) Regulations 2004, SI 2004/3256 ("the Disregard Regulations").

---

## The 1996 bargain

Start with the problem the code was built to solve. Before 1996, the tax treatment of company debt turned on labels. Was a payment interest, or a premium? Was a loss on a loan capital, or revenue? The answers decided whether anything was taxed or relieved at all, and clever drafting could move a return from one label to another.

Finance Act 1996 (Part IV, Chapter II) replaced the labels with a single idea for companies. **Debt is income.** Every profit, loss, interest payment and cost connected with lending money is a credit or a debit in computing income, and the amounts come from the accounts. The Court of Appeal's judgment in *Greene King plc v HMRC* [2016] EWCA Civ 782 sets out the original 1996 provisions. The rules now live in **CTA 2009 Part 5** (ss 292–476).

**Recap from *The Living Law*, chapter 21.** A loan relationship is a money debt, owed to or by a company, that arises from a transaction for the lending of money (s 302). Trading debits are those on borrowing for the trade; trading credits arise only where lending is integral to the trade, as for a bank (ss 297, 301). Everything else goes into a non-trading pot, which produces either a **non-trading loan relationship (NTLR) profit** or an **NTLR deficit**.

**The Advanced Technical layer.**

| Rule | Detail | Authority |
|---|---|---|
| Matters taxed | Profits and losses on the relationships and related transactions (excluding interest and expenses); interest; expenses incurred directly in bringing a relationship into existence, in related transactions, in making payments, or in securing receipts | CTA 2009 s 306A |
| Abortive and pre-loan costs | Brought in by a separate rule | s 329 |
| Accounting basis | Amounts recognised in **profit or loss** under GAAP | ss 307(2), 308(1) |
| Other comprehensive income | Left out until recycled into profit or loss | s 308(1A) |
| Period mismatch | Accounting period ≠ period of account: time-apportion | s 307; CTA 2010 s 1172 |
| Measurement | Any GAAP-compliant basis; "amortised cost basis" = amortised cost using the effective interest method (adjusted for fair value hedges) | s 313(1), (4) |
| Mandated basis | Connected companies: **amortised cost** | s 349 |

So the starting rule is simple. Find the debt, find the amounts in profit or loss, and tax them as income. The rest of this chapter is about where Parliament stops the accountant at the door. Think of **three bouncers**:

1. the **connected companies rules**, which make a group's two sides of a debt mirror each other;
2. the **unallowable purpose rule** (s 441), which turns away debits that exist for a tax advantage;
3. the **Disregard Regulations**, which decide how derivatives that hedge risks are let in.

Each bouncer has its own guest list, and the examiner tests all three.

---

## What goes into the pot

The pot holds more than interest. Discounts and premiums accrue over the life of a loan under the effective interest method. Profits and losses on selling or repaying a loan are credits and debits. Fees and other costs of raising finance are debits, spread as the accounts spread them. And exchange gains and losses on a loan go in too (s 328(1)).

**Fees are the classic examination point.** When a company borrows to buy a business, the arrangement fee is not part of the cost of the shares, and for an investment holding company it is not a management expense either. It is a loan relationship debit under s 306A. The examiners reported, after the May 2023 sitting (Q6, 10 marks), that some candidates missed exactly this.

Our **invented** group, Tarnmoor, shows how it works. Tarnmoor plc (TPLC), the listed parent, drew £30m on a revolving credit facility (RCF) from its bank on 1 April GY1 to buy Calder Valve Engineering Ltd, and drew £24m more on 1 July GY2 to buy Brackenwell Sensors Ltd. In our invented case each drawing carried an arrangement fee of **£300,000**, so **£600,000** in all.

> **Worked example 12.1: TPLC's RCF fees (invented)**
>
> The accounts spread each fee over the expected life of its drawing using the effective interest method. The group expected to pay most of the facility down quickly (the RCF was reduced to £20m throughout GY3), so the amortisation is front-loaded.
>
> | £000 | GY1 | GY2 | GY3 | Total |
> |---|---|---|---|---|
> | Fee 1 (£30m drawing, paid 1 April GY1) | 250 | 50 | — | 300 |
> | Fee 2 (£24m drawing, paid 1 July GY2) | — | 200 | 100 | 300 |
> | **Loan relationship debit (non-trading)** | **250** | **250** | **100** | **600** |
>
> TPLC does not trade, so these are non-trading debits (s 301). They are kept apart from TPLC's management expenses (chapter 13). These amortisation amounts (£0.25m, £0.25m, £0.1m) feed the CIR figures in chapter 28.

**Exchange movements** follow the same logic. Section 328 brings exchange gains and losses on loan relationships into account, except translation differences on a functional-currency translation recognised in other comprehensive income (s 328(3)).

> **Worked example 12.2: an exchange gain (labelled hypothetical, not a story fact)**
>
> Suppose a UK company lent euros to a foreign subsidiary and over a year the sterling value of the loan rose by **£2.4m**. That is a taxable exchange gain of £2.4m: CT at 25% **£600,000**, although no cash moved. (Loan assets cannot be matched with shares; the matching rule below applies to liabilities and derivatives hedging shares.)

Groups manage this in two ways. They hedge the currency, which brings in the derivative rules later in this chapter. Or, where a company borrows in a foreign currency to fund a holding of shares in that currency, the Disregard Regulations (regs 3 and 4) can **match** the exchange movements on the liability (or currency contract) with the shares, so that the movements are left out of income. The matching rule exists because the shares are capital assets whose exchange movement is not taxed as it accrues.

---

## Tarnmoor's treasury

For FY2026, the law we apply throughout, Tarnmoor's debt sits mainly in one company. In our invented case, **Tarnmoor Finance Ltd (TFL)** is the group treasury company. Before the story begins it issued **£550m of listed 5.5% notes**: interest **£30.25m** a year. Because the notes are listed and pay interest, they are **quoted Eurobonds**, so the interest can be paid without deducting income tax (ITA 2007 s 882): chapter 23.

TFL lends every pound on at 6%.

> **Worked example 12.3: TFL's loan relationship profit (invented, every year)**
>
> | Borrower | Loan £m | Interest at 6% £m | Character in the borrower |
> |---|---|---|---|
> | Tarnmoor Engineering Ltd (TEL) | 200 | 12.00 | Trading debit (borrowing for the trade) |
> | Tarnmoor Water Systems Ltd (TWS) | 40 | 2.40 | Trading debit |
> | Tarnmoor Estates Ltd (TES) | 70 | 4.20 | Non-trading debit (property investment) |
> | Tarnmoor plc (TPLC) | 120 | 7.20 | Non-trading debit (no trade) |
> | Tarnmoor Vallaria SA (TVS) | 120 | 7.20 | Vallarian company: outside UK CT; TP applies (ch 27) |
> | **Total** | **550** | **33.00** | |
>
> | TFL (£m) | |
> |---|---|
> | Non-trading credits: interest receivable | 33.00 |
> | Non-trading debits: interest on the notes (£550m × 5.5%) | (30.25) |
> | Running costs | (0.60) |
> | **Taxable total profits** | **2.15** |
> | CT at 25% | 0.5375 |
>
> TFL's lending is not a banking trade, so its credits and debits are non-trading (s 297). The swap's net settlements are left out of the book's figures for simplicity.

The same interest can be trading for one company and non-trading for another. TEL's £12.0m is a trading debit; it reduces the trade profit (TEL GY1: tax-EBITDA £50.0m − CAs £14.0m − £12.0m = £24.0m before reliefs). TWS's £2.4m is trading for the same reason (TTP £7.1m = 12.0 − 2.5 − 2.4). TES's £4.2m is non-trading (TES TTP £8.4m = 13.0 − 0.4 − 4.2). TPLC's £7.2m is non-trading.

That distinction matters three times over: it decides where a **deficit** goes; it decides which debits the **corporate interest restriction** disallows first (TIOPA 2010 s 377: NTLR debits first; chapter 28); and it decides whether a loss is trading or non-trading when the group plans its claims.

Two more features complete the picture. TFL has an **interest rate swap** designated in its accounts as a **fair value hedge** of the notes (see "Derivatives and the hedging rules"). And the loan to TVS crosses a border, so **transfer pricing** applies to it (chapter 27). The loans between UK companies fall within the **UK-to-UK exemption** (TIOPA 2010 s 164A, inserted by FA 2026 Sch 6), which applies for chargeable periods commencing on or after 1 January 2026.

---

## When both sides belong to the group

Here is the first bouncer. Inside a group, one board controls both sides of a debt. Left to the accounts, the creditor could write a loan down and claim a debit, while the debtor kept the full liability and recognised no income. The group would have a deduction with no matching receipt. The connected companies rules stop that by forcing the two sides to mirror each other.

| Rule | Detail | Authority |
|---|---|---|
| Connection | One company controls the other, or both are under the control of the same person | CTA 2009 s 466 |
| When | A connection at **any time** in the accounting period makes the relationship connected for the **whole** period; indirect connection through a series of loans also counts | s 348 |
| Basis | **Amortised cost** compulsory, even if the accounts use fair value (hedging assumption in s 349(2A)) | s 349 |
| Related transactions | Credits cannot be less, and debits cannot be more, than if a related transaction had not occurred | s 352 |
| Creditor | No impairment loss or release debit (exceptions: debt-for-equity s 356; insolvent creditor s 357); exchange losses unaffected | s 354 |
| Debtor | No release credit, unless a deemed release (ss 361, 362) | s 358 |

Every loan from TFL to a group company is a connected companies relationship.

**Why the rigidity?** If a group could choose the measurement basis for loans between its own companies, it would choose whichever one gave a debit today and a credit never. Amortised cost means the debtor's liability and the creditor's asset are measured on the same footing, so what one side loses the other gains.

> **Worked example 12.4: fair value ignored (labelled hypothetical)**
>
> Suppose a parent lends £10m to a subsidiary at a fixed rate and market rates then rise. At fair value the loan asset would fall, and an unconnected lender using fair value would book a loss. Between connected companies tax ignores that fall: the creditor recognises interest at the effective rate on amortised cost, the debtor deducts the same, and the two figures match year after year. The connected rules do not stop the group using fair value in its accounts; they stop it being taxed.

**A practical warning.** Connection is about **control**, not the 75% group relief test or the 51% group payment arrangement test. The examiner likes a company owned at, say, 60%: outside group relief, but connected for loan relationship purposes.

---

## No bad debt, no free release

**The creditor side.** A company with a connected creditor relationship brings in **no impairment loss and no release debit** (s 354). If TEL lent money to a struggling fellow subsidiary and wrote the loan down, the write-down would be added back; if TEL then forgave the loan, the release would be added back too. Two exceptions: a **debt-for-equity swap** (s 356: release in exchange for ordinary shares in the debtor) and an **insolvent creditor** (s 357). Exchange losses are not affected.

**The debtor side.** A debtor in a connected relationship (amortised cost) brings in **no credit** when the debt is released (s 358). Together: **symmetry**. The creditor gets no debit, the debtor pays no tax, and the group is left where it started. This is what makes intra-group rescues tax-neutral.

**The misconception.** People assume a bad debt is a bad debt, and that relief follows the loss. Between connected companies, relief does not follow the loss, because the matching income never arises either.

**Outside a group** a release normally gives the debtor a taxable credit: that is the point of following the accounts. But s 322 lifts the credit if any condition applies:

| Condition | When the debtor brings in no release credit |
|---|---|
| A | Release is part of a statutory insolvency arrangement |
| B | Release in consideration of ordinary shares in the debtor (not "relevant rights") |
| C | Debtor in insolvent liquidation, administration, receivership (or foreign equivalent), and the relationship is **not** connected |
| D | Bank resolution instruments |
| E | **Corporate rescue:** not a deemed release, and a material risk that within 12 months the company would be unable to pay its debts without the release (s 322(5B); HMRC: releases on or after 1 January 2015) |

A related rule (s 323A) gives no credit on a change in carrying value when a debt is **substantially modified** or replaced in the same distress; later reversal debits are barred.

**Why the generosity?** Because taxing a distressed company on the very debts it cannot pay would kill the rescue the creditors are trying to achieve. The tax bill would simply become one more debt the company could not meet.

> **Exam lens: connected companies and releases**
>
> - **Grade:** loan relationships (CTA 2009 Part 5, excluding the chapters the grid lists) **1 (core)**.
> - **Past appearances:** **M24 Q6** (20 marks): a two-company computation with a **reversed intra-group debt write-off**; the examiners reported candidates were weaker on the connected-party reversal. **N24 Q4** (20 marks): impairments of a **trade debt** (deductible) and a **loan to a fellow subsidiary** (not deductible), plus interest on a loan to buy shares. **M23 Q6** (10 marks): a loan **arrangement fee** as a loan relationship debit; some missed it.
> - **Style:** "Calculate, with explanations": in a computation, show the add-back with a one-line reason ("connected companies relationship: no impairment debit, s 354"); 0.5–1 mark per point.
> - **Traps:** treating an intra-group write-off as deductible; forgetting the debtor side (no credit, s 358); applying the 75% group test instead of control; forgetting s 322 condition C does not apply to connected debts.

---

## Buying the debt cheaply

The connected companies symmetry has a gap, and the **deemed release** rule closes it.

> **Worked example 12.5: why s 361 exists (labelled hypothetical)**
>
> A target owes £10m to outside lenders; the debt trades at £4m because the market doubts repayment. A group buys the debt for £4m, buys the shares, then releases the debt. Without s 361: debtor and creditor are connected, so the release produces no credit (s 358) and no debit (s 354). A £6m debt has vanished untaxed. Had the outside lenders released it themselves, the debtor would normally have been taxed.
>
> With s 361: the acquiring creditor is treated as releasing the shortfall at the moment of acquisition, so the debtor brings in a credit of **£10m − £4m = £6m**, before the connected protection takes effect.

**The rule (s 361).** Where a company acquires a creditor relationship for less than the debtor's carrying value, from a party it is not connected with, and immediately afterwards creditor and debtor are connected, the creditor is treated as releasing the shortfall, and the **debtor** is taxed on the deemed release.

**The exceptions** (in the form given by F(No.2)A 2015; the old ss 361A and 361B are repealed):

| Exception | Conditions | Authority |
|---|---|---|
| Equity-for-debt | Acquisition at arm's length; consideration **only** ordinary shares of the acquiring company or a company connected with it | s 361C |
| **Corporate rescue** | (1) acquisition at **arm's length**; (2) the acquirer, or a company connected with it, **releases the debt within 60 days** of acquiring it; (3) reasonable to assume that, without the release and related arrangements, there would be a **material risk** that within the next **12 months** the debtor would be **unable to pay its debts** (cash-flow or balance-sheet test). HMRC: acquisitions on or after **18 November 2015** | s 361D; CFM35570 |
| Parties becoming connected while the creditor holds impaired debt | Deemed release, with a parallel rescue exception | ss 362, 362A |

The design is careful. The law is not against groups buying distressed debt. It is against a group using the connected companies rules to make a commercial gain disappear. Where the purchase is part of a genuine rescue and the group follows through quickly, the law lets the rescue proceed without a tax charge on money the company never had.

---

## Brackenwell's notes

Brackenwell Sensors Ltd (BSL), in our invented case, was a loss-making sensor developer founded by **Dr Asha Varma**. Before Tarnmoor bought it, its venture investors held **£3.0m** of its convertible notes. On **1 July GY2** TPLC bought BSL's shares (£22.2m; stamp duty £111,000) and, the same day, bought the notes from the (unconnected) venture investors for **£1.8m**, at arm's length.

Immediately afterwards TPLC and BSL were connected, and TPLC had paid £1.8m for a debt carried at £3.0m: the deemed release rule's exact target.

> **Worked example 12.6: the Brackenwell notes (invented)**
>
> | £ | Without an exception | Corporate rescue exception applies (actual) |
> |---|---|---|
> | BSL's carrying value of the notes | 3,000,000 | 3,000,000 |
> | Consideration paid by TPLC | (1,800,000) | (1,800,000) |
> | Shortfall | 1,200,000 | 1,200,000 |
> | **Deemed release credit in BSL (s 361)** | **1,200,000** | **nil (s 361D)** |
> | CT at 25% (before any loss relief) | 300,000 | nil |
>
> **Conditions for s 361D, as met:** arm's length purchase from unconnected investors; release by TPLC **within 60 days** (by **29 August GY2**); board minutes and BSL's cash-flow forecasts recorded a **material risk** that BSL could not pay its debts within 12 months without the release.
>
> **The actual release (accounting entries and tax):**
>
> | Company | Accounts | Tax | Authority |
> |---|---|---|---|
> | TPLC (creditor) | Writes off the notes: loss £1,800,000 | No release debit (connected creditor relationship) | s 354 |
> | BSL (debtor) | Release of liability: gain £3,000,000 | No release credit (connected debtor relationship) | s 358 |
>
> Whether BSL's old losses could have absorbed a £1.2m credit is a chapter 14 question (Part 14 restrictions after the change of ownership); the group did not rely on them. The book treats the notes as plain debt in TPLC's hands: their conversion rights fell away with the release.

**Three practical lessons.** First, the 60-day clock starts on acquisition, so the release must be planned **before completion**. Second, the material risk condition is a matter of **evidence**, made at the time in board papers and forecasts. Third, the exceptions are **conditions, not elections**: if they fail, the credit arises whether or not anyone notices.

**The alternatives.** Had TPLC paid the investors in its own **ordinary shares**, s 361C would have been available and no 60-day release would have been needed. Had TPLC kept the notes and released them six months later, neither exception would apply: a £1.2m credit in BSL on 1 July GY2. Had the investors released the notes before the sale, BSL would have faced a release credit from **unconnected** lenders, relieved only if one of s 322's conditions A–E applied. Much the same commercial result, three different tax outcomes. That is why the tax function sits at the deal table.

> **Going further: running a debt purchase in a share deal**
>
> - Map every debt of the target before signing: who holds it, at what carrying value, at what price it will be acquired, and whether the buyer will be connected immediately afterwards.
> - Choose the route: refinance at par (no shortfall), equity-for-debt (s 361C), or rescue (s 361D with a diary note for day 60).
> - Evidence the material risk: cash-flow forecast, balance sheet, board minute; keep it with the tax file for the enquiry window.
> - Check the debtor side if neither exception applies: is the credit trading or non-trading, and what reliefs can shelter it (subject to the Part 14 change of ownership rules: chapter 14)?
> - Consider stamp duty on the shares (chapter 21) and the loss restrictions (chapter 14) in the same memo.

> **Exam lens: deemed releases and corporate rescue**
>
> - **Grade:** 1 (within loan relationships).
> - **Past appearances:** not the main focus of an LCG question M23–M26; a natural add-on to any "acquisition of a loss-making target" scenario.
> - **Traps:** taxing the **creditor** (it is the debtor that is taxed); forgetting the 60-day window; describing the rescue test loosely ("the company was struggling") rather than as a material risk of inability to pay debts within 12 months; confusing s 322 (actual release by an unconnected lender) with s 361 (deemed release on acquisition).

---

## Interest paid late

For years one of the most common traps in company tax was **late-paid interest**. The rule's aim was sensible: a debtor accruing interest it did not pay could deduct it year after year, while a creditor outside the charge to CT paid nothing until the cash arrived, if it ever did. So in certain cases the debtor's deduction was deferred until payment.

The general rule (s 373) still exists. If interest is not paid within **12 months** after the end of the accounting period in which it accrues, and the creditor does not bring the full amount into account as it accrues, the debtor gets relief only when the interest is paid. But it now applies only in two kinds of case:

| Case | Conditions | Authority |
|---|---|---|
| Close company | Debtor is a **close company**; creditor is a participator, an associate of one, or a company controlled by (or with a major interest held by) a participator. Carve-outs for certain SME debtor and collective investment scheme cases. If the **creditor is a company**, only if it is resident in a **non-qualifying territory** (broadly, no suitable treaty) | s 375; s 375(4A) |
| Pension scheme loans | Loans by trustees of an occupational pension scheme to the employer (or certain connected companies) | s 378 |

The connected companies case (s 374) and the major-interest case (s 377) were **omitted by FA 2015 s 25**. Connected UK companies accrue interest in the normal way.

For Tarnmoor the point is quickly answered: a subsidiary controlled by a widely held listed parent is not a close company, so the late interest rules do not apply to its intra-group debts.

Where the rule does apply, the debit moves from the period of accrual to the period of payment: nothing is lost, only delayed. In an answer: (1) identify the close company and the participator link; (2) check the 12-month window; (3) if the creditor is a company, check its residence before applying the deferral at all.

---

## The purpose test

Now the second bouncer, and the most powerful: **CTA 2009 ss 441–442**.

| Element | Rule | Authority |
|---|---|---|
| Effect | If a loan relationship has an unallowable purpose in an accounting period, the debits for that period are disallowed so far as attributable to that purpose on a **just and reasonable apportionment** | s 441 |
| Unallowable purpose | A purpose that is not among the company's **business or other commercial purposes** | s 442 |
| Tax avoidance purpose | Counts as a business purpose **only if** it is not the main purpose, or one of the main purposes, for which the company is party to the loan | s 442 |
| "Any other person" | A tax avoidance purpose is any purpose of securing a tax advantage for **the company or any other person** | s 442 |
| Outside the charge | Purposes of activities not within the charge to CT are not business purposes | s 442 |

**What the test examines.** The purpose of **being a party** to the loan, **period by period** and **loan by loan**. A loan taken for good reasons can acquire an unallowable purpose later if it is restructured for tax; a tainted loan can become clean when its purpose changes. The apportionment is a judgement for the tribunal, not a formula, and the answer can be all of the debits. The rule disallows debits; it does not reduce the lender's matching credits, which is why a failed plan inside a group usually costs more than doing nothing.

**The leading earlier case.** *Fidex Ltd v HMRC* [2016] EWCA Civ 385 (21 April 2016) concerned a scheme, "Project Zephyr", that used the move to international accounting standards to produce a debit on bonds. It was decided under the predecessor rule, FA 1996 Sch 9 para 13. The scheme failed. In the words of the Court of Appeal (para 74): "But for this tax avoidance scheme there would have been no debit at all." Once a debit exists only because of the scheme, all of it is attributable to the scheme.

That **"but for"** reasoning became the template. The hard question, which the 2024 cases answered, is what happens when there is a real commercial transaction in the picture too.

---

## Three cases in nine weeks

| Case | Facts (as recorded in the sources noted) | Outcome |
|---|---|---|
| *BlackRock HoldCo 5, LLC v HMRC* [2024] EWCA Civ 330 (11 April 2024) | US group acquisition; LLC5, a Delaware LLC resident in the UK, took on about $4bn of intra-group loans to buy preference shares (prologue) | Taxpayer **won** on transfer pricing (the loans could have been made at arm's length) but **lost** on unallowable purpose: a main tax avoidance purpose, and on the facts all debits attributable to it |
| *Kwik-Fit Group Ltd v HMRC* [2024] EWCA Civ 434 (3 May 2024) | Reported facts (secondary commentary): one company (Speedy 1) held about £48m of pre-2017 NTLR deficits usable only against its own non-trading profits; expected use about 25 years, cut to about 3 by reorganising intra-group loans (new loans, assignments, higher rates) so that interest income flowed to it | Appeals dismissed: debits on the new loans attributable to an unallowable purpose. As commentators read it, the advantage was the deductions made available to the paying companies while the receiving company's income was sheltered. HMRC accepted that once the target losses were used, continued denial would no longer be just and reasonable (paras 101–103) |
| *JTI Acquisition Company (2011) Ltd v HMRC* [2024] EWCA Civ 652 (13 June 2024) | UK company set up by a US group to buy a US business (LeTourneau Technologies), borrowing from a group company; interest surrendered as group relief (secondary commentary) | Appeal dismissed: the FTT's finding of no commercial purpose for the borrower's part stood; the tax advantage was "bolted on" to a commercial deal (paras 81–83); debits wholly attributable |

In **October 2024** the Supreme Court refused permission to appeal in all three cases.

**The chapter's misconception.** "Interest on money borrowed to buy a company must be deductible, because buying a company is commercial." The Court of Appeal has closed that argument. The test looks at the **borrower's purpose in being party to the loan**, not the purpose of the acquisition. A commercial deal can carry a loan whose own purpose is tax.

**The debate.** The profession argues that the trilogy leaves groups uncertain: ordinary acquisition finance with a tax benefit attached is common, and the line between a tax-efficient structure and a main purpose is hard to draw. HMRC's view is that the rule asks a factual question and the tribunals answer it. **Still being litigated:** *Syngenta Holdings Ltd v HMRC* [2024] UKFTT 998 (TC) (FTT for HMRC, 1 November 2024); the Upper Tribunal gave permission to appeal on some grounds ([2025] UKUT 338 (TCC), October 2025). Commentators report the main question is whether a genuine business purpose must lead to **apportionment** rather than total disallowance. No Upper Tribunal decision had been published by October 2026.

> **Exam lens: unallowable purpose**
>
> - **Grade:** 1 (s 441 is within Part 5).
> - **Past appearances:** no LCG question M23–M26 was built around s 441, but it is the natural "discuss" point in any intra-group debt, debt pushdown or acquisition finance scenario, and the 2024 trilogy is recent enough to be topical.
> - **Style:** "Explain whether the interest will be deductible": state the test (business or commercial purpose; tax avoidance main purpose; any person), apply it to the facts, and conclude on apportionment.
> - **Traps:** arguing that a commercial acquisition guarantees deductibility (*JTI*); looking only at the borrower's own advantage (s 442: any person); forgetting that s 441 can apply even where transfer pricing is satisfied (*BlackRock*); raising DPT/UTPP (not relevant to loan relationships: M23 Q3).

---

## The plan Tarnmoor turned down

In our invented case, the test arrived at Tarnmoor in **GY2**, a few months after the Brackenwell deal. The idea came from Calder's own finance team, whose results were measured on Calder's profit after tax: TPLC would sell BSL to Calder for **£24m**, and Calder would borrow the price from TFL at **6%**.

> **Worked example 12.7: the debt pushdown (invented; rejected)**
>
> | £ a year | As pitched (deduction allowed) | If s 441 disallows all debits |
> |---|---|---|
> | Calder: interest debit (£24m × 6%) | (1,440,000) | (1,440,000) disallowed |
> | Calder: CT effect at 25% | (360,000) | nil |
> | TFL: interest credit | 1,440,000 | 1,440,000 |
> | TFL: CT effect at 25% | 360,000 | 360,000 |
> | **Group CT effect** | **nil** | **+360,000** |
>
> TP would not have questioned the rate (UK-to-UK exemption, s 164A), and the CIR is measured across the worldwide group, so neither rule stood in the way. The purpose test did.

Tom Hesketh's analysis for the board made three points:

1. **Commercial.** BSL already supplied sensors to Calder and TEL; owning it from Calder changed nothing about that supply. Calder had no need of the money and no business reason to borrow it. On any honest reading the only purpose of Calder becoming a debtor was the deduction.
2. **The group view.** TFL would be taxed on the same £1.44m. The group's bill would barely move; Calder's would. That is still a tax advantage, for Calder: s 442 counts an advantage for the company or any other person, and, as commentators read *Kwik-Fit*, deductions made available to one company can be the advantage even where the receiving side is not better off. The rule asks what the company was trying to do, not whether the group came out ahead.
3. **The case law.** On the reasoning of *JTI* and *Kwik-Fit*, a tribunal would very likely find a main tax avoidance purpose and attribute **all** the debits to it. Calder's deduction would be disallowed while TFL's income stayed taxable: a neutral position turned into a £360,000 a year cost.

The board declined and minuted why.

> **Going further: documenting purpose**
>
> - Purpose is a question of fact, decided years later from documents. For every material intra-group loan, the board paper should state the business case: what the money is for, why this company borrows it, why debt rather than equity.
> - Record refusals too. Groups offered plans whose only case is tax should be able to show they said no.
> - Senior accounting officer and tax strategy duties (chapter 4) make "we never thought about it" an uncomfortable answer.
> - Debt pushdowns are not automatically bad: borrowing in the company that owns and runs the acquired business, to fund that acquisition, usually has an evident commercial purpose. The question is always the borrower's purpose in being party to the loan.

---

## When the debits outrun the credits

When a company's non-trading debits exceed its non-trading credits, it has a **non-trading deficit**. For deficits of accounting periods beginning on or after **1 April 2017** (CTA 2009 Part 5 Chapter 16A, ss 463A–463I):

| Route | Rule | Claim / time limit | Authority |
|---|---|---|---|
| 1 Current year | Set against **any profits** of the deficit period | Claim within **2 years** after the end of the deficit period | ss 463B(1)(a), 463C, 463D |
| 2 Carry back | Against **NTLR profits only** of the previous **12 months** | Same claim and time limit | ss 463B(1)(b), 463C, 463E–463F |
| 3 Group relief | Current-year deficit surrendered to a group company | Group relief claim (chapter 15) | CTA 2010 Part 5 (s 99) |
| 4 Carry forward | Unclaimed and unsurrendered amount carried forward; set against **total profits** of a later period; surrenderable under Part 5A; within the **Part 7ZA** restriction (£5m deductions allowance + 50% of profits above it) | Claim within **2 years** after the end of the later period; confined to non-trading profits if the company has ceased its investment business (or it has become small or negligible) | ss 463G, 463H; CTA 2010 Parts 5A, 7ZA |

Pre-1 April 2017 deficits (Chapter 16, ss 456–463) were carried forward only against the company's own later non-trading profits: exactly the kind of trapped deficit behind *Kwik-Fit*.

**Two warnings.** The carry-back is narrow: it cannot touch trading profits of the earlier year. And even the **current-year set-off needs a claim**; a deficit nobody claims simply rolls forward.

> **Worked example 12.8: TPLC's deficits (invented)**
>
> | £m | GY1 | GY2 |
> |---|---|---|
> | Interest payable to TFL (£120m × 6%) | 7.20 | 7.20 |
> | RCF interest: GY1 £30m × 6% × 9/12; GY2 £30m × 6% + £24m × 6% × 6/12 | 1.35 | 2.52 |
> | Arrangement fee amortisation (WE 12.1) | 0.25 | 0.25 |
> | **Non-trading debits** | **8.80** | **9.97** |
> | Less: CIR disallowance (allocated to NTLR debits first; chapter 28) | (2.21) | (2.30) |
> | Non-trading credits | nil | nil |
> | **NTLR deficit surrendered to TEL as group relief** | **6.59** | **7.67** |
>
> **TES** is the other pattern: its £4.2m of non-trading interest exceeds its non-trading credits, so it **claims** (s 463B) to set the deficit against its own property profits of the same period.

**Layout in the exam.** Total the non-trading credits and debits (including fees, exchange movements and non-trading derivative amounts); take out disallowed amounts (s 441, CIR); state the deficit; then walk through the options in order with the time limit for each claim, and say what each would achieve (tax saved at 25% this year against a refund for last year).

> **Exam lens: NTLR deficits**
>
> - **Grade:** 1.
> - **Past appearances:** **N25 Q4** (20 marks, 4/8/8): a new subsidiary, including the options for relieving **trading losses and NTLR deficits**. **M24 Q6** (20 marks): **NTLR deficit group relief** in a two-company computation.
> - **Traps:** carrying back a deficit against **trading** profits (only NTLR profits); forgetting that current-year set-off is a **claim**; forgetting Part 7ZA on carried-forward deficits; confusing NTLR deficits with trading losses in the s 37 sense.

---

## Debts that are not loans

**CTA 2009 Part 6** extends the loan relationship rules to things that are not loans in the ordinary sense. It is **non-core (grade 2)**; the grid excludes Chapters 3, 4, 5, 6A, 9, 10 and 11. The idea: the same economic return should get the same tax treatment, whatever its legal form.

| Part 6 chapter | What it catches | Authority |
|---|---|---|
| Ch 2: relevant non-lending relationships | A money debt not arising from lending (for example a trade debt) comes into Part 5 where (a) interest is payable on it, (b) exchange gains or losses arise, (c) an impairment loss or release debit arises on an unpaid business payment, or (d) a debt for which a trading or property deduction was given is released | ss 478–486 (s 479) |
| Ch 2A: disguised interest | A return "economically equivalent to interest" (a return on an investment of money at a reasonably commercial rate, reflecting the time value of money, with no practical likelihood it will cease) is taxed as a loan relationship profit on an amortised cost basis; exclusions where the return is otherwise taxed, where there is no tax avoidance main purpose, and for excluded shares | ss 486A–486E |
| Ch 2B: transferred income streams | A company that sells a right to income (such as interest) for a lump sum is taxed on the lump sum as the income it replaces | Part 6 Ch 2B (headings) |
| Ch 6: alternative finance arrangements | Finance structured to comply with Islamic principles treated in the same way as interest | Part 6 Ch 6 (headings) |
| Ch 7: shares with guaranteed returns | Shares designed to produce an interest-like return treated as a creditor relationship (outline) | Part 6 Ch 7 (headings) |

> **Worked example 12.9: interest on overdue customer accounts (labelled hypothetical)**
>
> Suppose TEL charges interest on customer accounts paid more than 60 days late. The balances are trade debts, not loans. Because interest is payable on them, they are **relevant non-lending relationships** (s 479), and the interest is a loan relationship credit rather than a sales receipt. TEL's dollar receivables, revalued at the year end, produce exchange gains and losses also brought in under these rules.

> **Exam lens: Part 6**
>
> - **Grade:** 2 (non-core).
> - **Style:** a recognition point inside a computation or a "discuss" requirement: an overdue debt with interest, a preference share with a fixed redemption premium, a sale of a stream of payments. Marks come for naming the rule and saying it brings the return into the loan relationship regime.

---

## Derivatives and the hedging rules

Derivatives are the third bouncer's territory: **CTA 2009 Part 7** (ss 570–710), **non-core (grade 2)**.

| Rule | Detail | Authority |
|---|---|---|
| Definition | A **relevant contract** (option, future, contract for differences) that meets an **accounting condition** (in essence, treated as a derivative in the accounts) and is not excluded by its underlying subject matter; interest rate swaps, currency contracts and commodity futures are the everyday examples | ss 576, 577, 579, 589 |
| Accounts basis | Credits and debits are amounts recognised in **profit or loss** (including amounts recycled from OCI) | ss 595, 597 |
| Trading / non-trading | Trading derivatives in trade profits; non-trading derivatives into the NTLR pot | ss 573, 574 |

The courts have patrolled the edges. *Union Castle Mail Steamship Co Ltd v HMRC* [2020] EWCA Civ 547 (22 April 2020) concerned a scheme producing a claimed debit of about **£39.1m** on derivative contracts from amounts recognised in **equity** rather than in profit or loss; the appeals (Union Castle and Ladbrokes) were dismissed. HMRC's manual (CFM76010) explains that since 2016 the loan relationship and derivative rules focus on amounts in profit or loss.

**The Disregard Regulations (SI 2004/3256).** The problem: a company hedges a risk (say the price of a commodity it buys) with a derivative at fair value, whose movements hit profit or loss now, while the hedged purchase affects profit only later. Tax following the accounts would tax the derivative's swings before the matching cost arrives.

| Point | Rule | Authority |
|---|---|---|
| Default (periods from 2015) | **Follow the accounts**: regs 7–9 do not apply automatically | HMRC CFM57040, CFM57360 (guidance) |
| Election | A company may elect (reg 6A) for regs 7 (currency contracts), 8 (commodity and debt contracts) and/or 9 (interest rate contracts) to apply; in writing; same treatment for the same type of contract | reg 6A; CFM57370 |
| Effect of regs 7 and 8 | Fair value movements on the hedging derivative left out and brought back into account **in line with the hedged item** | regs 7, 8 |
| Effect of reg 9 | Interest rate contracts brought in on an **appropriate accruals basis** | reg 9 |
| Election timing | New adopters of fair value accounting: within the later of 6 months after the start of the first relevant period or 6 months after first holding a fair-valued derivative (non-SAO companies: up to 12 months after the period end); otherwise prospective; initial lock-in | reg 6A |
| Automatic case | Where the hedged item is **not** taxed in line with the accounts (for example connected company debt), the regulations apply without an election (HMRC guidance) | reg 6; CFM57075 |
| Anti-avoidance | Regs 7–9 can apply where a main purpose is to avoid them | reg 6; CFM57371 |
| Matching with shares | Exchange movements on liabilities and currency contracts hedging shares | regs 3, 4 |
| Cash flow hedges | Reg 9A (the old default for designated cash flow hedges) **revoked** (SI 2015/1961) | — |

> **Worked example 12.10: Tarnmoor's two derivatives**
>
> **TEL's copper futures** (invented; election made when TEL first used derivatives, before the story). TEL hedges copper purchases for its trade, so the futures are **trading** derivatives (s 573). Suppose, for illustration only, a year-end fair value gain of **£400,000**:
>
> | £ | With reg 6A election (actual) | Without an election |
> |---|---|---|
> | Fair value gain in profit or loss | 400,000 | 400,000 |
> | Taxed this year | nil (disregarded; brought in when the hedged copper purchases reach profit or loss, reg 8) | 400,000 |
> | CT at 25% this year | nil | 100,000 |
>
> **TFL's interest rate swap.** Designated as a **fair value hedge** of the external notes. In a fair value hedge the accounts already adjust the notes for the hedged risk, so the two movements offset in profit or loss. TFL has made **no election**. On HMRC's guidance it **needs none**: tax follows the accounts. The swap's amounts are **non-trading** (TFL does not trade), in the same pot as the interest.

> **Exam lens: derivatives and the Disregard Regulations**
>
> - **Grade:** derivatives and hedging, basic principles **2 (non-core)**. (From 2028, derivatives beyond knowing they are treated like loan relationships leave the syllabus; the 2027 sittings are under the current grid.)
> - **Past appearances:** **N23 Q3** (15 marks, 7/8): a **fuel future not hedge-accounted**: fair value through profit or loss, taxed as it arises unless the company has elected; only a minority mentioned the Disregard Regulations. **N25 Q3** (migration): some candidates **wrongly discussed** the Disregard Regulations, which were not relevant.
> - **Traps:** saying the regulations apply automatically to every hedge (default since 2015 is to follow the accounts); forgetting trading/non-trading classification; raising them where no hedging derivative exists.

---

## Financing the group

The examiner's narrative syllabus names **loan relationships and derivative contracts and common financing transactions** as part of this paper. Here is how the pieces fit.

**Debt or equity.** Interest on debt is in principle deductible; dividends are not. That asymmetry is why every regime in Part Four exists:

| Regime | Question it asks of the same interest | Chapter |
|---|---|---|
| Unallowable purpose (s 441) | Why is this company party to this loan? | 12 |
| Transfer pricing (TIOPA 2010 Part 4) | Would an independent lender have lent this much, on these terms? (cross-border; UK-to-UK exempt from 2026) | 27 |
| Corporate interest restriction (TIOPA 2010 Part 10) | Is the group's net UK interest within 30% of tax-EBITDA (or the group ratio), subject to the debt cap? | 28 |
| Hybrid mismatches (TIOPA 2010 Part 6A) | Is the payment deducted here but not included there? | 29 |
| Withholding (ITA 2007 Part 15) | Must income tax be deducted on payment? | 23 |

A debit can survive one rule and fall to another: *BlackRock* won on transfer pricing and lost on purpose.

**Acquisition finance.** The arrangement fee is a loan relationship debit, spread as the accounts spread it (M23 Q6). The interest follows the accounts, subject to s 441. Where the target owes debt to outsiders, decide **before completion** whether to buy, refinance or release it (s 361 and the 60-day rescue window).

**Bonds.** Listed interest-bearing bonds are quoted Eurobonds and pay gross (ITA 2007 s 882). Yearly interest paid to lenders abroad on other debt may require deduction of income tax: **20%** for 2026/27 (ITA 2007 s 874; basic rate). **Coming next (enacted):** 22% from 2027/28 (FA 2026 ss 5–6). Chapter 23.

**Cash pooling.** In a physical pool, balances are swept into a header account daily, so each participant has a loan relationship with the header company: connected companies relationships, amortised cost, transfer pricing where a border is crossed, and exchange movements where currencies differ. (Practice point; not separately verified.)

> **Going further: the tax function's financing calendar and checklist**
>
> | Item | Deadline or trigger | Authority |
> |---|---|---|
> | NTLR deficit claims (current year, carry back) | 2 years after the end of the deficit period | s 463C |
> | Carried-forward deficit claim | 2 years after the end of the later period | s 463G |
> | Disregard Regulations election | Within the reg 6A window | SI 2004/3256 reg 6A |
> | Corporate rescue release | Within 60 days of acquiring the debt | s 361D |
> | Group allowance for carried-forward deficits | Nomination and allocation statement (chapter 14) | CTA 2010 Part 7ZA |
> | CIR return and allocation of disallowances | Chapter 28 | TIOPA 2010 Sch 7A |
>
> Tom Hesketh's five questions for any new intra-group loan (invented): **Is it connected? Is the purpose documented? Does it cross a border? How does it affect the CIR? Will any payment need income tax deducted?** Treasury decides the funding, the accountants the measurement basis and hedge designation, the lawyers the loan terms and release deeds, corporate finance the timetable. The tax team's job is to see the tax answer before each choice is made: the "identify the issues and coordinate the specialists" skill the paper claims to test.

> **Exam lens: financing transactions**
>
> - **Past appearances:** **M23 Q3** (15 marks): a loan from a US company that might take 60% control: TP (participation condition, thin capitalisation), CIR and withholding; the examiners reported time **wasted on DPT, which does not apply to loan relationships** (DPT is now repealed and replaced by UTPP: chapter 30). **M23 Q6** (10 marks): acquisition costs including the arrangement fee.
> - **Favourite combinations:** TP with CIR (M23 Q3, M26 Q1, N24 Q5); computations with intra-group write-offs and NTLR group relief (M24 Q6).
> - **Approach:** on a financing question, think loan relationships, transfer pricing, CIR and withholding first; keep £ and £000 consistent within each working.

---

## What to take away

- **Debt is income** (FA 1996; CTA 2009 Part 5). Interest, discounts, fees, profits and losses on loans and exchange movements are credits and debits; amounts in profit or loss under GAAP; OCI amounts wait until recycled; trading debits on borrowing for the trade, everything else non-trading.
- **First bouncer: connected companies.** Control at any time in the period; amortised cost compulsory; creditor no impairment or release debit (exceptions: debt-for-equity, insolvent creditor); debtor no release credit. Symmetry. Reversing an intra-group write-off is a favourite examination point.
- **Deemed release (s 361):** buying a debt below carrying value and becoming connected taxes the **debtor** on the shortfall, unless **equity-for-debt** (s 361C) or **corporate rescue** (s 361D: arm's length; release within **60 days**; material risk of inability to pay debts within **12 months**). Unconnected releases: taxable on the debtor unless one of **s 322 conditions A–E**. Brackenwell: £3.0m notes bought for £1.8m; deemed release £1.2m avoided; TPLC no debit, BSL no credit.
- **Late-paid interest:** only close company participator cases (corporate creditors only in non-qualifying territories) and pension scheme loans. Tarnmoor is not close.
- **Second bouncer: s 441.** Debits disallowed so far as attributable to an unallowable purpose; tax advantage for **any person**; per loan, per period; just and reasonable apportionment, which can be 100%. *Fidex* ("but for"); *BlackRock*, *Kwik-Fit*, *JTI* (2024; permission refused October 2024); *Syngenta* pending. Tarnmoor rejected a £24m debt pushdown (Calder saving £360,000 a year; group cost £360,000 a year if disallowed).
- **NTLR deficits (post-2017):** current year; carry back 12 months against NTLR profits only; group relief; carry forward against total profits (Part 5A, Part 7ZA). Claims within **2 years**. TPLC surrendered £6.59m (GY1) and £7.67m (GY2) to TEL.
- **Third bouncer: the Disregard Regulations.** Derivatives follow profit or loss; since 2015 regs 7–9 apply only by **election** (reg 6A) or automatically where the hedged item is not taxed in line with the accounts, or in the other automatic cases HMRC lists. TEL's copper futures: elected. TFL's fair value hedge: follows the accounts.
- **Grades:** loan relationships **1**; relationships treated as loan relationships **2**; derivatives and hedging **2**.

Next: one kind of company sits at the centre of all this borrowing, and its costs are among the most misunderstood on the paper. Chapter 13 turns to companies with investment business.

---

## Key rules and figures

| Topic | Rule or figure | Authority |
|---|---|---|
| Matters taxed | Profits/losses, interest, expenses directly incurred; abortive and pre-loan costs | CTA 2009 ss 306A, 329 |
| Accounting basis | Profit or loss under GAAP; OCI only when recycled | ss 307, 308 |
| Exchange | In loan relationships except OCI translation differences; matching with shares | s 328; SI 2004/3256 regs 3–4 |
| Connected companies | Control (s 466) at any time in the AP; amortised cost | ss 348, 349, 466 |
| Creditor | No impairment/release debit (exceptions s 356, s 357) | s 354 |
| Debtor | No release credit | s 358 |
| Deemed release | Shortfall taxed on the debtor | ss 361, 362 |
| Exceptions | Equity-for-debt; corporate rescue (60 days; 12 months; arm's length); HMRC: from 18 Nov 2015 | ss 361C, 361D, 362A |
| Unconnected release | No credit if conditions A–E (E: corporate rescue, releases from 1 Jan 2015) | s 322 |
| Distressed modification | No credit | s 323A |
| Late interest | 12 months after AP end; s 375 (close; s 375(4A)) and s 378 only; ss 374, 377 omitted | ss 373–378; FA 2015 s 25 |
| Unallowable purpose | Just and reasonable attribution; main purpose; any person | ss 441–442 |
| NTLR deficits | Current year / 12-month carry back (NTLR profits only) / group relief / c/f against total profits; 2-year claims | ss 463A–463I |
| Part 6 | Relevant non-lending relationships; disguised interest | ss 479, 486A–486E |
| Derivatives | Relevant contract + accounting condition; profit or loss | ss 576–579, 595 |
| Disregard Regulations | Elect-in (reg 6A); regs 7, 8, 9; reg 9A revoked | SI 2004/3256 |
| Withholding on yearly interest | 20% (2026/27); 22% from 2027/28 (enacted) | ITA 2007 s 874; FA 2026 ss 5–6 |
| Tarnmoor (invented) | TFL notes £550m at 5.5% (£30.25m); lends £550m at 6% (£33.0m); TTP £2.15m | invented (story) |
| | RCF fees £300,000 + £300,000; debits £250,000 (GY1), £250,000 (GY2), £100,000 (GY3) | this chapter |
| | BSL notes: £3.0m bought for £1.8m on 1 July GY2; deemed release £1.2m avoided (s 361D); released by 29 August GY2 | invented (story) |
| | Rejected pushdown: £24m at 6% = £1.44m a year; £360,000 | invented (story) |
| | TPLC NTLR deficit surrendered: £6.59m (GY1), £7.67m (GY2) | invented (story) |

## Statutory and case references

**Statute and regulations**
- Finance Act 1996, Part IV Chapter II and Sch 9 para 13 (original code; old unallowable purpose rule)
- CTA 2009 Part 5: ss 292–476, especially ss 297, 301, 302, 306A, 307, 308, 313, 322, 323A, 328, 329, 348, 349, 352, 354, 356, 357, 358, 361, 361C, 361D, 362, 362A, 373, 375, 378, 441, 442, 456–463, 463A–463I, 466
- CTA 2009 Part 6: ss 477–486E (esp. ss 479, 486A–486E); Part 7: ss 570–710 (esp. ss 573, 574, 576, 577, 579, 589, 595, 597)
- CTA 2010 Part 5 (s 99), Part 5A, Part 7ZA; s 1172
- TIOPA 2010 s 164A (UK-to-UK exemption, FA 2026 Sch 6); Part 10 (CIR, s 377 ordering)
- ITA 2007 ss 874, 882
- FA 2015 s 25 (omission of ss 374, 377); F(No.2)A 2015 (ss 361C, 361D, s 322 condition E)
- FA 2026 ss 5–6 (22% from 2027/28)
- SI 2004/3256 (Disregard Regulations) regs 3, 4, 6, 6A, 7, 8, 9 (9A revoked by SI 2015/1961)

**HMRC guidance (guidance, not law)**
- CFM35570, CFM35580 (ss 361D, 362A); CFM33191 ff (s 322(5B)); CFM32050 (deficit claims); CFM38167 (unallowable purpose case law); CFM41020 (relevant non-lending relationships); CFM57040, CFM57075, CFM57360, CFM57370, CFM57371 (hedging); CFM76010

**Cases**
- *Fidex Ltd v HMRC* [2016] EWCA Civ 385
- *Greene King plc v HMRC* [2016] EWCA Civ 782
- *Union Castle Mail Steamship Co Ltd v HMRC* [2020] EWCA Civ 547
- *BlackRock HoldCo 5, LLC v HMRC* [2024] EWCA Civ 330
- *Kwik-Fit Group Ltd v HMRC* [2024] EWCA Civ 434
- *JTI Acquisition Company (2011) Ltd v HMRC* [2024] EWCA Civ 652
- *Syngenta Holdings Ltd v HMRC* [2024] UKFTT 998 (TC); permission [2025] UKUT 338 (TCC) (pending)
