# Prologue: One loan, two answers.

On 11 April 2024, at 10.00am, the Court of Appeal handed down a judgment remotely. Its front page records the time. The case was *BlackRock HoldCo 5, LLC v HMRC* [2024] EWCA Civ 330.

The case was about one set of loans, worth about $4bn, made inside one group of companies. Two rules of UK corporation tax looked at those loans. The first rule asked what strangers would have done, and it found nothing wrong. The second rule asked why the borrower had borrowed, and it took away every pound of the interest deductions. The taxpayer won the first argument and lost the case.

This prologue tells that story and then stops. It opens a book written for the CTA Advanced Technical paper, **Taxation of Larger Companies and Groups**. The law throughout is the law for **FY2026** (1 April 2026 to 31 March 2027). You met the basic loan relationship rules, and group relief, in *The Living Law* (TKS), chapters 21 and 24. Here the same rules meet a group on a far larger scale.

## A British link in an American chain.

In 2009 the BlackRock group bought the business of Barclays Global Investors. Part of the money for that acquisition travelled down a chain of companies formed in Delaware. Each was a limited liability company, and the judgments number them like stepping stones. The one that matters is **LLC5**.

LLC5 was a Delaware company. But it was managed and controlled in the UK, so for corporation tax it was a UK-resident company. Its US parent, **LLC4**, put cash and shares into it. In return LLC4 took common shares and **loan notes of about $4bn**. LLC5 then put the money and shares into the next company down the chain, **LLC6**, and took **preference shares**. LLC6 used the funds towards the purchase.

| Step | Who | What moved | UK tax result for LLC5 |
|---|---|---|---|
| 1 | LLC4 → LLC5 | Cash and shares in; LLC5 issues common shares and ~$4bn loan notes | Interest on the notes: loan relationship debits (CTA 2009 Part 5) |
| 2 | LLC5 → LLC6 | Cash and shares in; LLC6 issues preference shares to LLC5 | Preference dividends: exempt |
| 3 | LLC6 | Funds used towards the acquisition | — |
| 4 | LLC5 → UK group companies | Non-trading deficit surrendered as group relief, for no payment | Deficit used against other UK companies' profits |

Picture the chain as a sandwich: American bread on top, American bread underneath, and one British filling in the middle. The filling had a very particular taste.

Look at LLC5's tax position. Its income was the dividends on its preference shares, and those dividends were **exempt** from UK tax. Its expense was the interest on the loan notes, a deductible **debit** under the loan relationship rules. So each year LLC5 had no taxable income and a large non-trading deficit. It surrendered that deficit, as **group relief**, to other BlackRock companies in the UK, without asking for payment.

Commentators put the deductions claimed at about **£654m** (Macfarlanes; Bloomberg Tax). HMRC refused them on two grounds: **transfer pricing** and the **unallowable purpose rule**. The case climbed through three courts. On each rule the answer changed at least once.

| Court | Date and judges | Transfer pricing | Unallowable purpose | Result |
|---|---|---|---|---|
| First-tier Tribunal, [2020] UKFTT 443 (TC) | 3 November 2020; Judge John Brooks | Taxpayer: an independent lender would have lent the same amount on the same interest terms, with covenants that would have been given | Two main purposes (commercial and tax), but all debits apportioned to the commercial purpose | Taxpayer wins |
| Upper Tribunal, [2022] UKUT 199 (TCC) | 19 July 2022; Michael Green J and Judge Rupert Jones | HMRC: covenants absent from the actual deal could not be imported | HMRC: the commercial benefit a by-product of a tax-driven decision; all debits to the tax purpose | HMRC wins |
| Court of Appeal, [2024] EWCA Civ 330 | 11 April 2024 (heard 5–6 March 2024); Peter Jackson, Nugee and Falk LJJ (main judgment Falk LJ) | **Taxpayer**: FTT's finding restored | **HMRC**: tax-advantage main purpose; all debits attributable to it | **HMRC wins** |
| Supreme Court | Permission refused (Lord Hodge, Lord Hamblen, Lady Simler); "does not raise an arguable point of law"; list dated 13 October 2024 | — | — | CA decision stands |

## What strangers would have done.

Start with transfer pricing. The rules now live in **TIOPA 2010 Part 4**. They apply where provision is made between two connected persons (the participation condition) on terms that differ from the **arm's length provision**. If the actual provision gives one of them a potential UK tax advantage, that person's profits are computed as if the arm's length provision had been made (s 147). The arm's length provision can even be **no provision at all**, where strangers would never have dealt (s 151(2)).

HMRC argued exactly that: no independent lender would have lent $4bn to LLC5 on those terms.

The **First-tier Tribunal** disagreed. Judge John Brooks found that an independent lender would have made loans of the same amount, on the same interest terms, provided it received **covenants** (the promises a borrower gives to protect its lender), and that those covenants would have been given.

The **Upper Tribunal** reversed him: you cannot import covenants that never existed in the real deal. Without them the comparison failed, and HMRC won.

The **Court of Appeal** reversed the Upper Tribunal. Falk LJ's reasoning, as the commentaries summarise it: in the real deal the lender belonged to the same group as everyone else in the chain. A stranger lending to LLC5 would face risks the group lender did not, because other group companies might act in ways that damaged the loan. An independent lender would protect itself, so the hypothetical deal must include that protection. The covenants were part of a fair comparison, not an invention, and the FTT's finding was restored. **On transfer pricing, BlackRock won.**

Commentators read one passage of Falk LJ's judgment (para 63 is the one cited) as a hint that HMRC might have done better by looking at the **borrower's** side: would LLC5, if independent, have wanted to borrow at all? That argument was not run and the case did not decide it. Chapter 27 returns to it.

## Why this company borrowed.

**The law says** (CTA 2009 s 441): if a loan relationship has an **unallowable purpose** in an accounting period, the debits are disallowed **so far as attributable** to that purpose **on a just and reasonable apportionment**. A purpose is unallowable if it is not among the company's **business or other commercial purposes** (s 442). A **tax avoidance purpose** counts as commercial only if it is **not the main purpose or one of the main purposes**. The tax advantage need not be the company's own: a tax advantage for **any other person** counts.

The **FTT** found that LLC5 had two main purposes, one commercial and one to obtain a tax advantage, but apportioned all the debits to the commercial purpose. The **UT** treated the commercial benefit as a by-product of a tax-driven decision and apportioned all the debits to the tax purpose.

The **Court of Appeal** agreed with the UT's result, though not with all of its reasoning. It was common ground that purpose is a question of the company's own **subjective intention**. The court began with a plain question: why did LLC5 enter into the loans? The answer was to obtain a tax advantage.

The court did not say that every deductible interest payment is suspect. Falk LJ was careful: awareness that interest is deductible does not make tax a main purpose, and nor does the size of the deduction on its own; something more is needed. Here there was more. LLC5's board did see a commercial margin (dividends in would exceed interest out). But the tax advantage belonged to the group, and the group's plan was why LLC5 was there. Nugee LJ, at [192], repeated Falk LJ's description of taking the loans to obtain that advantage as LLC5's "sole raison d'être".

Then came the **apportionment**. On a "but for" approach, without the tax advantage the loans would not have been made, so **all the debits** were attributable to the unallowable purpose (paras 186–187, 193). None was deductible. The approach echoes *Fidex Ltd v HMRC* [2016] EWCA Civ 385 ("But for this tax avoidance scheme there would have been no debit at all", para 74).

The Supreme Court refused permission to appeal. The Court of Appeal's judgment stands.

> **Status note.** The facts above come from the judgments as summarised on Find Case Law, the Judiciary press summary and practitioner commentaries. The **"sole raison d'être"** words and the paragraph references (97, 186–187, 192–193) were checked against the judgment (9 October 2026). The Supreme Court's permission list prints the date **13 October 2024** (a Sunday) and the citation [2024] EWCA Civ 419; Find Case Law's citation is [2024] EWCA Civ 330, which this book uses.

## Why one loan can get two answers.

The two rules ask different questions, so they can give different answers about the same loan.

| | Transfer pricing (TIOPA 2010 Part 4) | Unallowable purpose (CTA 2009 s 441) |
|---|---|---|
| Question | Are the terms what independent parties would have agreed? | Why did this company enter into the loan relationship? |
| Nature of the test | Objective: a market comparison | Subjective: the company's purposes |
| Ignores | Motive | Whether the rate was fair |
| Effect | Profits computed on arm's length provision (can be no loan at all) | Debits disallowed so far as attributable (just and reasonable) |
| *BlackRock* outcome | Taxpayer won | HMRC won: 100% of debits disallowed |

Transfer pricing is a **valuer's** question; unallowable purpose is a **detective's** question. A loan can pass the market test perfectly and still fail on purpose.

**Misconception: "If an intra-group loan is priced at arm's length, the interest is safe."** Arm's length pricing gets you through the first gate only. *BlackRock* is the proof: the pricing passed, and every pound of the deduction still went.

*BlackRock* was not alone. Within weeks the Court of Appeal decided two more cases on the same rule, both for HMRC: *Kwik-Fit Group Ltd v HMRC* [2024] EWCA Civ 434 (3 May 2024: an intra-group reorganisation of loans so that trapped losses could be used) and *JTI Acquisition Company (2011) Ltd v HMRC* [2024] EWCA Civ 652 (13 June 2024: borrowing to fund a real acquisition, where the tax advantage was "bolted on" to a commercial deal and still everything was disallowed). The Supreme Court refused permission in all three on the same list. Chapter 12 tells the other two stories and the case still on its way up (*Syngenta*).

There is also a gate that BlackRock's 2009 loans never had to pass. The **corporate interest restriction** (TIOPA 2010 Part 10) applies for periods of account starting on or after **1 April 2017**. It caps a worldwide group's net UK interest deductions, under the default fixed ratio method at **30% of aggregate tax-EBITDA** (subject to the debt cap), with a **£2m** de minimis. A group borrowing like this in FY2026 would meet all three gates. Chapter 28 teaches the third.

> **Going further: the three gates for an intra-group loan (FY2026).**
> 1. **Transfer pricing** (TIOPA 2010 Part 4): amount, rate and terms at arm's length? Thin capitalisation is a transfer pricing question. Chapter 27.
> 2. **Unallowable purpose** (CTA 2009 ss 441–442): is a tax advantage, for the company or any other person, a main purpose? If so, how much of the debits is attributable to it on a just and reasonable basis? Chapter 12.
> 3. **Corporate interest restriction** (TIOPA 2010 Part 10): how much net interest can the group deduct in the UK in total? Chapter 28.
>
> Run them in that order in a computation: the transfer pricing and unallowable purpose disallowances come first, and the interest restriction then applies to what is left. (The detailed ordering and the treatment of each disallowance in tax-EBITDA are chapter 28's job.) The tax function's task is to record, at the time, why each group company borrows: purpose is tested subjectively, but tribunals find it from the evidence.

> **Exam lens.**
> - **Grades (2026 grid, v2 extract):** loan relationships (CTA 2009 Part 5, excluding Chapters 7, 10, 11, 13 and 14) **1, core**, so the unallowable purpose rule is core; transfer pricing and advance pricing agreements **1, core** (the row carries the words "Awareness – basic principles only"; chapter 27 deals with what that means); corporate interest restriction **1, core**. Check the 2027 grid when published.
> - **Past appearances:** **M23 Q3 (15 marks)** was a loan from a US company that might take 60% control: transfer pricing (participation condition, thin capitalisation) and CIR, plus withholding. The examiners said the main issues were TP and CIR and that time was wasted on DPT, which does not apply to loan relationships. TP with CIR came again in **M26 Q1** and **N24 Q5**.
> - **Style:** technical prose and computations; "Explain" or "Calculate, with explanations"; 0.5–1 mark per point; no letter format.
> - **Traps:** stopping after the pricing point; raising DPT (the M23 examiners said it does not apply to loan relationships; FA 2026 has since replaced it with the UTPP charge, chapter 30); forgetting that a tax advantage for *another* group company counts under s 441.

## The questions this book asks.

This one loan leads straight into the four questions that run through the book.

1. **Is a group one taxpayer or many?** LLC5 was a separate company with its own return. Yet its purpose was read through the group's plan, and its deficit was used by other companies through group relief.
2. **Where are profits made, and what stops them drifting?** A British link in an American chain created a UK deduction with no matching UK income. Much of this book is about the rules that watch borders.
3. **What does the law follow: the accounts, the deal or its own purpose?** The loan relationship rules start from the accounts; transfer pricing tests the deal against the market; the unallowable purpose rule overrides both when the purpose is wrong.
4. **What must a group's tax function spot?** An adviser who checked only the interest rate would have missed the point that decided the case. The examiner wants you to identify the issues, all of them, and know which specialist rule answers each.

So when you meet an intra-group loan, in practice or in the exam, ask three things. Are the terms what strangers would agree? Why did this company borrow? And how much of the group's interest can the UK take in total? Chapter 27 answers the first, chapter 12 the second and chapter 28 the third.

Most of this book follows an invented group of companies, **Tarnmoor**, whose story begins in chapter 1. Everything about Tarnmoor is made up. BlackRock is real, and so is every rule in this prologue.

Next comes the introduction, and a map of the ground ahead.

---

## Key rules and figures

| Item | Rule or figure | Source | Status |
|---|---|---|---|
| *BlackRock* loans | ~$4bn of loan notes issued by LLC5 to LLC4; deductions claimed ~£654m | CA judgment; commentaries | V (amount from commentaries) |
| Transfer pricing | Arm's length provision substituted where actual provision gives a potential UK tax advantage; can be no provision at all | TIOPA 2010 ss 147, 151(2) | V |
| Unallowable purpose | Debits disallowed so far as attributable (just and reasonable); tax avoidance main purpose; advantage for any person | CTA 2009 ss 441–442 | V |
| *BlackRock* result | TP: taxpayer; s 441: HMRC, 100% of debits disallowed | [2024] EWCA Civ 330 | V |
| 2024 trilogy | *BlackRock* (11 April), *Kwik-Fit* (3 May), *JTI* (13 June); SC refused permission in all three | CA judgments; SC list | V |
| CIR | Periods of account starting on or after 1 April 2017; 30% of tax-EBITDA (fixed ratio, subject to debt cap); £2m de minimis | TIOPA 2010 Part 10, ss 392, 397 | V |

## Statutory and case references

- CTA 2009 Part 5 (loan relationships); ss 441–442 (unallowable purpose).
- CTA 2010 Part 5 (group relief).
- TIOPA 2010 Part 4 (transfer pricing), ss 147, 151; Part 10 (corporate interest restriction), ss 392, 397.
- *BlackRock HoldCo 5, LLC v HMRC* [2020] UKFTT 443 (TC); *HMRC v BlackRock HoldCo 5, LLC* [2022] UKUT 199 (TCC); *BlackRock HoldCo 5, LLC v HMRC* [2024] EWCA Civ 330; Supreme Court permission refused (UKSC 2024/0070).
- *Fidex Ltd v HMRC* [2016] EWCA Civ 385.
- *Kwik-Fit Group Ltd v HMRC* [2024] EWCA Civ 434.
- *JTI Acquisition Company (2011) Ltd v HMRC* [2024] EWCA Civ 652.
