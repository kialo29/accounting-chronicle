# Chapter 4: Governance and the anti-avoidance architecture

In August 2025 HMRC charged a company with an offence no company in Britain had been charged with before. The company was an accountancy firm in Stockport. The charge was failing to prevent the criminal facilitation of tax evasion, under s 45 of the Criminal Finances Act 2017. According to the published reports (law firm commentaries), it was linked to an alleged fraud involving R&D tax credit repayments, and six individuals, including a former director, were charged with separate offences such as cheating the public revenue and money laundering. **These are allegations only.** Nothing has been proved, and the reports say the trial is listed for 27 September 2027, after your exam.

The offence had been in force since 30 September 2017. For almost eight years it sat unused, and commentators called it a paper tiger. The striking thing about it is this: a company can commit the offence without any director knowing anything, without the company gaining a penny, and without the company itself evading any tax. Its crime is to have failed to prevent someone acting for it from helping someone else to evade.

This chapter asks a question that sounds managerial but is pure law: **who, inside a large group, answers to HMRC for the tax, and what does the law make them do?** It closes Part One. On the LCG paper the senior accounting officer (SAO) rules, tax strategy publication and the corporate criminal offence (CCO) are **core (grade 1)**; DOTAS, follower notices (FNs), accelerated payment notices (APNs), the GAAR, avoidance versus evasion and Part 14B are **non-core (grade 2)**; notification of uncertain tax treatment (UTT) and alternative dispute resolution (ADR) are **awareness (grade 3)**. It builds on *The Living Law*, chapter 3 (avoidance, evasion and the courts). Law: **FY2026**.

---

## The ladder of accountability

For most of the twentieth century HMRC's question to a company was: *is this return right?* The modern question to a large group is: *are your systems the kind that produce right returns, and who will put their name to that?* Large groups are too big to audit line by line, so the law moved upstream. It now regulates the people and processes that produce the numbers, and it makes the group say publicly how it approaches tax. A group like Tarnmoor files dozens of returns across many taxes every year; an inspector cannot check every journal. Regulating systems scales where checking returns does not, and naming a person, publishing an attitude and flagging uncertainty all change behaviour before the return is filed. Whether transparency actually changes behaviour is one of the book's debates: supporters point to better-resourced tax functions and fewer surprises on enquiry; critics to box-ticking certificates and boilerplate strategies.

| Rung | Regime | Who is accountable | Grade |
|---|---|---|---|
| 1 | Senior accounting officer (FA 2009 Sch 46) | A named individual: systems and an annual certificate | 1 |
| 2 | Tax strategy publication (FA 2016 Sch 19) | The head of the group (the board's published attitude) | 1 |
| 3 | Notification of uncertain tax treatment (FA 2022 Sch 17) | The company: flag large uncertain positions unprompted | 3 |
| 4 | Corporate criminal offence (CFA 2017 ss 45–46) | The company, in the criminal courts | 1 |

Beside the ladder stands the **anti-avoidance architecture**: DOTAS (disclosure before HMRC has looked), FNs and APNs (stop the user keeping the money while appeals run), the GAAR (a general backstop), and the promoter rules.

The thresholds are those on chapter 1's threshold ladder: SAO, tax strategy and UTT all start at **turnover > £200m or balance sheet > £2bn**. The examiner's favourite point is that **each regime aggregates a different set of companies** (table at the end of the UTT section).

**Our invented case.** Tarnmoor plc is a widely held, LSE-listed engineering group with its head office in Leeds; every person and company in it is invented. Its CFO, **Nadia Kerr**, is the SAO for every UK company; **Tom Hesketh** is group head of tax. Consolidated revenue GY1 **£1,180m**; Tarnmoor Engineering Ltd (TEL) alone turned over **£630m**. Every rung applies.

---

## Who must have a senior accounting officer

The rules are in **FA 2009 Sch 46** and apply for financial years beginning on or after **21 July 2009**. In these rules "financial year" means the company's Companies Act financial year, not the CT financial year.

**Qualifying company** (Sch 46 para 15; SAOG11210–11290). Both conditions:

1. **Incorporated in the UK** under the Companies Act 2006 (or a former Companies Act). **Tax residence is irrelevant**: HMRC's guidance (SAOG11260) says the regime is "based upon the country of incorporation".
2. In the **preceding financial year**, relevant turnover **> £200m** and/or relevant balance sheet total **> £2bn**.

**Groups.** If the company was a **member of a group at the end of its preceding financial year**, its figures are aggregated with those of the **other UK-incorporated companies in that group** (SAOG11240, SAOG11270). A group is a company and its **51% subsidiaries** (CTA 2010 s 1154). HMRC's guidance adds: **intra-group turnover is included**; in aggregating balance sheets, **investments in other UK group companies are excluded**. Members with different year ends aggregate the figures for the financial years in force at the end of the relevant preceding year (SAOG11290).

Once the aggregate passes the threshold, **every UK-incorporated company in the group is a qualifying company**, however small, dormant ones included. Each needs an SAO and each must be notified.

The acquisition point deserves slow reading. Calder has a 31 March year end and joins Tarnmoor on 1 April GY1. For Calder's financial year starting that day, the preceding financial year ended on 31 March GY1, the day before the deal, when Calder belonged to the Oldroyd family and to no group; its own turnover (about £64m a year) was far below £200m. So Calder is **not** a qualifying company for its first year in the group, even though it is part of one of the largest groups in the story. For its next financial year (from 1 April GY2) the test looks at 31 March GY2, when Calder was firmly inside Tarnmoor: it qualifies from then on. HMRC's further guidance on joining and leaving (SAOG11300 onwards) is not covered here; the conclusion follows from the "member of a group at the end of the preceding year" rule in SAOG11240.

> **Worked example: Tarnmoor's SAO coverage (invented case)**
>
> Test applied at the end of each company's *preceding* financial year. Aggregate UK turnover far exceeds £200m every year (TEL alone £630m).
>
> | Company | Incorporated | In 51% group? | Qualifying company? |
> |---|---|---|---|
> | Tarnmoor plc (TPLC) | England | Head | Yes, every year |
> | TEL, TES, TFL, TWS | England | 100% | Yes (TWS until the GY5 demerger) |
> | Tarnmoor Pumps Ltd (dormant) | England | 100% | **Yes**: dormant companies are not excluded |
> | Tarnmoor Ireland Ltd (TIL) | **Ireland** | 100% | **No**: UK resident (CMC in Leeds) until GY4, but not UK-incorporated |
> | Tarnmoor Vallaria SA, Tarnmoor Capital Ltd | Vallaria, Marrovia (invented) | 100% | No: not UK-incorporated |
> | Helmside Energy Ltd | England | **45%** GY1–GY4 | No: not a 51% subsidiary (from GY6, see below) |
> | Calder Valve Engineering Ltd (31 March year end; acquired 1 April GY1) | England | From 1 April GY1 | FY 1 April GY1–31 March GY2: **No** (at 31 March GY1 it was owned by the Oldroyd family and in no group; own turnover about £64m). FY from 1 April GY2: **Yes**. Its 9-month FY to 31 December GY3: Yes |
> | Brackenwell Sensors Ltd (31 December; acquired 1 July GY2) | England | From 1 July GY2 | GY2: **No** (not in the group at 31 December GY1). GY3 onwards: **Yes** |
> | Helmside after 1 March GY5 (85%) | England | From 1 March GY5 | GY5: No (45% at 31 December GY4). GY6 onwards: Yes |
>
> The reasoning (company by company: incorporation, 51% membership at the end of the preceding year, which year's figures) is exactly what the examiner rewards.

> **Exam lens: SAO (grade 1)**
> - **N23 Q5 (10 marks):** which companies count towards the thresholds (a 50% UK subsidiary excluded; a company incorporated in Greece but UK resident), the main duty, the certificate, notification, penalties. The examiners: thresholds known but misapplied; **show workings, because marks are available even when the conclusion is wrong**.
> - **Traps:** using tax residence instead of incorporation; using a 75% test instead of 51%; forgetting dormant companies; testing the current year instead of the preceding year; forgetting that a newly acquired company is tested on its group membership at the end of its preceding financial year.
> - **Layout:** a table of companies with columns for incorporation, 51% membership, figures used and conclusion.

---

## The main duty, the certificate and the penalties

The SAO is the director or officer with overall responsibility for the company's financial accounting arrangements. One person may act for many companies.

**Main duty** (Sch 46 para 1): take reasonable steps to ensure the company **establishes and maintains appropriate tax accounting arrangements**; take reasonable steps to **monitor** them; and **identify any respects in which they are not appropriate**. HMRC describes appropriate arrangements as those allowing the company's liabilities to be "calculated accurately in all material respects" (SAOG10300; para 14). Taxes covered: CT (including QIPs), VAT, PAYE, IPT, SDLT, SDRT, PRT, customs and excise duties and the bank levy.

*Analogy:* the SAO signs the boiler's safety certificate; he or she does not light the boiler. Nadia does not prepare returns: she makes sure there is a properly designed, tested system for producing them, and says honestly whether it worked.

**Paperwork:**

| Obligation | Who | Deadline |
|---|---|---|
| Notify HMRC of the SAO's name (para 3) | Company | End of the Companies Act **accounts filing period**: **6 months** after the year end (public company), **9 months** (private) |
| Certificate: whether the company had appropriate tax accounting arrangements throughout the year; if not, the shortcomings (para 2) | SAO | Same |

Groups may file combined notifications and certificates (by the earliest deadline among the companies covered). A **qualified certificate is not a failure**: it is the regime working.

**Penalties** (Sch 46 paras 4–8): fixed **£5,000** each.

| Failure | Liable |
|---|---|
| Failing to notify the SAO's name | Company |
| Breach of the main duty | SAO personally |
| No certificate, or late | SAO personally |
| Certificate inaccurate carelessly or deliberately | SAO personally |

No reduction for disclosure or cooperation. A reasonable excuse can defeat a penalty **except for an inaccurate certificate**.

**Cases (as reported; full judgments not opened).** *Thathiah v HMRC* [2017] UKFTT 601 (TC): the first SAO penalty appeal; HMRC lost. The FTT held that HMRC had focused on whether the officer had a reasonable excuse rather than whether he had breached the main duty; errors, even material or repeated ones, do not automatically show a breach of the duty to take reasonable steps. *Castlelaw (No 628) Ltd and Irene Douglas v HMRC* (FTT, 2020, TC07540): penalties on the company and its SAO for **omitting a dormant company from the group notification** were upheld, though the tribunal said HMRC should have considered its discretion on the facts; HMRC's guidance was then updated to say penalties should not normally be charged where a dormant company is omitted and the risk is low.

> **Worked example: Tarnmoor's SAO deadlines (invented case)**
>
> | Company and financial year | Status | Notification and certificate due |
> |---|---|---|
> | TPLC, year to 31 December GY1 | plc | 30 June GY2 (6 months) |
> | TEL and other private UK companies, year to 31 December GY1 | Ltd | 30 September GY2 (9 months) |
> | Calder, year 1 April GY2–31 March GY3 (first qualifying year) | Ltd | 31 December GY3 |
> | Calder, 9 months 1 April–31 December GY3 | Ltd | 30 September GY4 |
> | Brackenwell, year to 31 December GY3 (first qualifying year) | Ltd | 30 September GY4 |
>
> Tarnmoor Pumps (dormant) stays on Nadia's list every year.

> **Going further: what "reasonable steps" look like in a group tax function**
> Process maps for each tax and each company; documented controls (reconciliations of tax ledgers, review of instalment forecasts, sign-off of returns); a risk register; testing by internal audit; a tracker for new acquisitions (Calder and Brackenwell enter the certificate on the dates above, but their systems need bringing up to group standard from the day they are bought); and evidence of how shortcomings were fixed. A qualified certificate with a remediation plan is better governance, and better protection, than an unqualified certificate that is wrong.

---

## Publishing a tax strategy

**FA 2016 Sch 19** (the tax strategy rules) requires large groups and companies to publish a tax strategy on the internet, free of charge, annually, for financial years beginning after **15 September 2016**.

**Two routes in** (GOV.UK, "Large businesses: publish your tax strategy", updated 30 July 2024):

1. **Size:** a UK group, sub-group, company or partnership whose turnover was **> £200m** or balance sheet **> £2bn** in the **previous financial year**. Groups aggregate all UK members (51% group).
2. **CbC route:** UK entities of an MNE group meeting the CbC reporting threshold (global revenue **€750m**).

HMRC treats the routes as **mutually exclusive**: in its guidance, a UK company in an MNE group with global turnover below €750m need not publish even if it personally exceeds £200m.

**Who:** the **head of the group** (the member that is not a 51% subsidiary of another member); if the head is not UK-incorporated, the top UK company. Any UK member may actually publish.

**Content:** the group's approach to **risk management and governance** for UK tax; its **attitude to tax planning**; the **level of risk** it is prepared to accept; its **approach to dealings with HMRC**; and a statement that it is published in compliance with para 16(2) (the guidance gives the required wording).

**Timing** (para 16(3)): before the **end of the financial year** to which it relates; and, where a strategy was published for the previous year, **not more than 15 months** after the previous one.

**Penalties** (para 18 onwards): **£7,500** for failure to publish a compliant strategy; a further **£7,500** if still unpublished 6 months after it was due; then **£7,500 for each further month**. HMRC usually issues a non-statutory 30-day warning first.

**Different year ends.** HMRC's guidance: a member with a different year end uses its **latest financial year ending before the end of the head company's latest financial year**; **do not apportion** overlapping periods.

> **Worked example: different year ends (HMRC's guidance example; real calendar, labelled)**
>
> | Entity | Year end | Turnover |
> |---|---|---|
> | Head company | 31 December 2017 | £150m |
> | UK subsidiary | 31 March 2017 | £80m |
> | **Aggregate for the group's year to 31 December 2017** | | **£230m** |
>
> £230m > £200m, so the group must publish a strategy for its financial year ending **31 December 2018**. The subsidiary's figure is **not** time-apportioned.

> **Worked example: Tarnmoor (invented case)**
> Tarnmoor qualifies by both routes: GY1 consolidated revenue £1,180m ≈ **€1,357m** at the story's assumed €1.15 per £ (never a real rate), and UK turnover far above £200m. TPLC, as head of the group, publishes the group's strategy **by 31 December each year**. Among other things it states that the group **does not use marketed tax avoidance schemes**. Calder's figures in any aggregation would be its accounts for the year to 31 March ending within Tarnmoor's year, unapportioned.

> **Going further: writing a strategy that means something**
> The statute prescribes topics, not content. A useful strategy says concretely how tax risk is governed (who owns it, how it reaches the audit committee), what the group will and will not do (Tarnmoor: no marketed schemes; transfer pricing at arm's length; reliefs claimed as Parliament intended), how it decides on uncertain positions (external advice above a threshold; UTT review), and how it works with HMRC (real-time discussion with the CCM). Because the strategy is public, it becomes a standard the group can be held to by investors, journalists and HMRC. A strategy that promises more than the group does is a reputational risk; one that says nothing is a missed opportunity. Keep it consistent with the SAO certificate, the UTT register and the CCO risk assessment: they describe the same governance from different angles.

> **Exam lens: tax strategy (grade 1)**
> - **M25 Q3 (15 marks):** thresholds where group companies have different year ends, publication requirements, penalties. The examiners: rules known, but candidates **apportioned subsidiary figures instead of using the accounts for the year ending in the parent's financial year**.
> - **Traps:** apportioning; forgetting the CbC route; putting the duty on the wrong company; confusing "before the end of the financial year" with a filing deadline; mixing up SAO and strategy penalties (£5,000 fixed v £7,500 escalating).

---

## Uncertain tax treatment, two triggers and five million pounds

**FA 2022 Sch 17** applies to returns required to be filed on or after **1 April 2022** (para 33). The purpose: HMRC would rather hear about a large uncertain position when the return is filed than find it years later.

**Qualifying company** (paras 2–5): in the **previous financial year**, relevant **UK turnover > £200m** and/or **UK balance sheet total > £2bn**, aggregated across the members of its **51% group that are within the charge to CT**. Taxes: CT, income tax (including PAYE and partnership returns) and VAT.

**Triggers** (para 10): only two.

1. **Provision trigger:** the company has recognised a **provision in its accounts** reflecting the probability that a different tax treatment will be applied.
2. **Known position trigger:** the treatment relies on an interpretation or application of the law **not in accordance with the way HMRC is known to interpret or apply it** (published guidance, or dealings with the company).

**Threshold** (para 11): notification only where the **tax advantage** in the relevant period from the uncertain amount (aggregating related amounts) exceeds **£5m**. (HMRC's manual, UTT14100, is summarised in the search extract as "£5m or more"; the statute says over £5m. The difference never matters in this book's story.)

**Exemption** (para 18): no notification where it is reasonable to conclude that **HMRC already has all, or substantially all, of the information** (for example through discussion with the Customer Compliance Manager or a disclosure under another regime such as DOTAS).

**Deadline** (para 9): for CT, by the **later of the CT return filing date and the Companies Act accounts filing deadline**.

**Penalties** (paras 20–21): **£5,000** first failure; **£25,000** second; **£50,000** further (counting failures in the 3 preceding financial years).

**Proposed, not law:** a consultation (12 March to 4 June 2026) proposed extending UTT to SDLT, NICs, CIS, IHT and CGT, bringing wealthy individuals and trusts into scope, and adding a further trigger.

**Who is aggregated: the three governance regimes compared**

| Regime | Companies aggregated | Test year | Thresholds |
|---|---|---|---|
| SAO | UK-**incorporated** companies in the 51% group (any residence) | Preceding financial year; group membership at its end | Turnover > £200m and/or balance sheet > £2bn |
| Tax strategy | UK members of the 51% group (figures for years ending in the head's year, unapportioned); or CbC route | Previous financial year | > £200m / > £2bn, or €750m CbC |
| UTT | Members of the 51% group **within the charge to CT** (UK turnover and balance sheet) | Previous financial year | > £200m / > £2bn |

So **TIL** (Irish-incorporated, UK resident until GY4) is **outside** the SAO aggregation but **inside** the UTT aggregation while it is within the charge to CT.

---

## A notification in practice

**Misconception: "UTT means telling HMRC whenever you're unsure."** It does not. Uncertainty alone triggers nothing: the statute needs one of **two** triggers, an advantage over **£5m**, and no exemption. The draft legislation once had a third trigger (a substantial possibility that a tribunal would find the treatment incorrect); it was removed before Royal Assent (secondary sources). The 2026 consultation would add a further trigger: proposed, not law.

> **Worked example: TEL's ERP costs, GY2 (invented case)**
>
> TEL finishes implementing a new enterprise resource planning (ERP) system. Implementation costs **£24m** are deducted as revenue expenditure; the point is arguable and, with the auditors' agreement, TEL books a provision against the risk that the deduction is denied.
>
> | Test | Application | Result |
> |---|---|---|
> | Qualifying company? | TEL's own UK turnover £630m > £200m (previous year) | Yes |
> | Trigger | Provision in the accounts (trigger 1). If HMRC's published guidance took the capital view, trigger 2 would also apply: one notification covers it | Met |
> | Tax advantage in the period | £24,000,000 × 25% = **£6,000,000** | > £5m |
> | Exemption | HMRC has not been given the information | Not available |
> | Deadline | Year end 31 December GY2; accounts due 30 September GY3 (9 months); CT return due 31 December GY3; later date | **31 December GY3** |
>
> Notification is required; Tom files it with the return.

The notification is made online. HMRC's statutory notice requires, among other things, the company's name, the tax regime, tax references and the periods affected, and says an incomplete notification will not be accepted as valid. Most of TEL's advantage is **timing** (if the costs are capital, relief may come later through capital allowances or the intangibles rules), but the statutory question is the advantage in the period of the return: £6m in GY2.

> **Going further:** notification is **not an admission**: it records that a position is uncertain, not that it is wrong. The provision that triggered it also feeds the accounts (chapter 6 covers the current tax charge and uncertain tax provisions). Good practice is a group-wide register of uncertain positions, reviewed at each year end against the two triggers and the £5m threshold, aggregated across related amounts, and cross-checked with the tax provision.

> **Exam lens: UTT (grade 3)**
> Not examined M23–M26. At awareness level know: the thresholds and 51% CT group; the two triggers; £5m; the exemption; the deadline; penalties £5,000/£25,000/£50,000; the 2026 consultation is not law. **Trap:** confusing UTT and SAO aggregation.

---

## The corporate criminal offence

**Criminal Finances Act 2017 Part 3** (ss 44–52), in force **30 September 2017**. The offences are modelled on the failure to prevent bribery offence in the Bribery Act 2010 (s 7), and the defence mirrors its "adequate procedures".

**Three stages:**

1. **Criminal tax evasion** by a taxpayer (anyone: customer, supplier, employee).
2. **Criminal facilitation** of that evasion by an **associated person** of the relevant body, acting in that capacity.
3. The relevant body **failed to prevent** the facilitation.

**Associated person** (s 44): an employee, an agent, or any other person who performs services for or on behalf of the body, acting in that capacity: sales agents, distributors, consultants, contractors. **Relevant body:** a body corporate or partnership.

| | s 45: UK tax | s 46: foreign tax |
|---|---|---|
| Evasion | UK tax evasion offence | Offence under foreign law |
| Extra conditions | — | **Dual criminality** (criminal abroad and would be criminal in the UK); **UK nexus**: the body is incorporated under UK law, or carries on business (or part) in the UK, or any part of the facilitation takes place in the UK |
| Defence | **Reasonable prevention procedures** (or not reasonable to expect any); burden on the body | Same |
| Penalty | Unlimited fine (indictment) | Same |

The offence does **not** require the company to benefit, the board to know, or the company to be dishonest. The individuals (evader and facilitator) remain liable for their own offences.

> **Exam lens: CCO (grade 1)**
> Not examined M23–M26. Expect: the three stages; associated person; s 46's dual criminality and UK nexus; the defence and HMRC's six principles; unlimited fine. **Trap:** assuming the company must benefit or the board must know.

---

## Reasonable prevention procedures

HMRC's official guidance (GOV.UK, "Corporate offences for failing to prevent criminal facilitation of tax evasion") is not law, but it is the likely yardstick. Six guiding principles:

| Principle | What it means |
|---|---|
| Risk assessment | Assess the nature and extent of exposure to associated persons facilitating evasion; drives everything else |
| Proportionality of procedures | Procedures proportionate to the risk and to the nature, scale and complexity of the business |
| Top level commitment | Senior management visibly committed |
| Due diligence | Risk-based checks on associated persons |
| Communication (including training) | Policies embedded and understood |
| Monitoring and review | Procedures checked and improved |

Risk factors include country, sector, transaction and business opportunity risk.

> **Worked example: the Marrovian agent, GY3 (invented case)**
> A Marrovian customer of TEL rings TEL's whistleblowing line: TEL's self-employed local sales agent (commission-paid) has offered to split an invoice so part of the price can be paid offshore and left out of the customer's Marrovian return.
> - **Associated person?** Yes: he performs services for TEL.
> - **Which offence?** s 46 (foreign tax). **UK nexus:** TEL is UK-incorporated. **Dual criminality** and an actual evasion and facilitation offence would have to be shown under Marrovian law (Marrovia is invented: the story does not describe its criminal law); in the story the customer refused and reported it at once.
> - **Protection:** TEL's risk assessment had rated Marrovian agents high risk; agency contracts prohibited facilitation and allowed termination; agents had been trained; the whistleblowing line worked.
> - **Response:** agent dismissed; other Marrovian agents reviewed and findings recorded; legal advice on reporting (a judgement for lawyers, not answered here).

> **Going further:** the same evidence that protects TEL under the CFA 2017 supports Nadia's SAO certificate and the tax strategy's statements on risk. Keep records (training logs, contract clauses, investigation files): a defence of reasonable procedures is proved from documents, not memory.

---

## Avoidance, evasion and the disclosure rules

*The Living Law*, chapter 3, drew the line. **Evasion** is illegal and involves dishonesty. **Avoidance** uses the law to reduce tax, sometimes as Parliament never intended: lawful, but it often fails. Since *WT Ramsay Ltd v IRC* (HL, 1981) the courts read tax statutes purposively and view transactions realistically, confirmed by the Supreme Court in *RFC 2012 plc v Advocate General for Scotland* [2017] UKSC 45 (Rangers). The profession's **PCRT** standards forbid members to create, encourage or promote planning that is contrary to the clear intention of Parliament, or highly artificial or highly contrived and exploiting shortcomings in the legislation.

**DOTAS** (FA 2004 Part 7; s 306): arrangements are **notifiable** if they fall within a prescribed description (**hallmark**) and are expected to give a tax advantage as **a main benefit**.

| Hallmark (selected) | Test |
|---|---|
| Confidentiality | A promoter might reasonably be expected to want to keep the arrangements (or how they secure the advantage) confidential from HMRC or other promoters |
| Premium fee | A fee attributable to a significant extent to the tax advantage, or contingent on obtaining it |
| Standardised tax products | "Plug and play" schemes with standardised documentation and transactions |
| Others | Specified loss schemes, leasing arrangements, employment income and financial products |

Case: *HMRC v AML Tax (UK) Ltd* [2022] UKFTT 174 (TC): the premium fee hallmark was not met where no premium fee was in fact paid (summary from secondary sources).

**Mechanics:** the promoter normally notifies within **5 days** of making the scheme available or of its first implementation; HMRC issues a **scheme reference number (SRN)**; the promoter passes it to clients; users report it on their returns. Where there is no promoter (in-house schemes), the user notifies.

**Penalties (FA 2026 s 216: new FA 2004 s 315, replacing TMA 1970 s 98C):** initial daily "applicable rate" up to **£600** (or **£5,000 a day** after an order under s 306A or s 314A), and up to **£1m** where the amount would otherwise be inappropriately low; **£5,000** fixed maximum for many information duties; s 313 other-party failures **£5,000 / £7,500 / £10,000**. Penalty proceedings already under way continue under the old rules (FA 2026 s 219). No separate commencement date was found (commencement on Royal Assent is inferred); secondary sources describe the reform as letting HMRC issue penalties directly rather than seeking tribunal approval.

**Discovery:** a **20-year** time limit applies where the loss of tax is connected with DOTAS non-compliance (FA 1998 Sch 18 para 46).

---

## Follower notices and accelerated payment notices

**FA 2014 Part 4.** Disclosure tells HMRC about a scheme; it does not collect the tax.

**Follower notice** (ss 204–218): conditions: an enquiry or appeal is open; the return or claim relies on particular arrangements; HMRC is of the opinion that a **final judicial ruling** in another case, on relevantly similar arrangements, would deny the advantage. The taxpayer must take **corrective action** (give up the advantage). If it does not and loses, **penalty 30%** of the denied advantage (s 208; **20%** under s 208A).

*R (Haworth) v HMRC* [2021] UKSC 25 (2 July 2021): HMRC issued an FN (and an APN) relying on *HMRC v Smallwood* [2010] EWCA Civ 778 in a round-the-world trust scheme case. The Supreme Court unanimously dismissed HMRC's appeal against the quashing of the notice. As commentators summarise it, HMRC may give an FN only where it considers there is no real scope for a reasonable person to disagree that the earlier ruling denies the advantage; a higher threshold than the Court of Appeal's "substantial degree of confidence".

**Accelerated payment notice** (ss 219–229): conditions: an enquiry or appeal is open, and **either** an FN has been given, **or** the arrangements are DOTAS-notifiable, **or** a GAAR counteraction notice has been given. Pay within **90 days** (or **30 days** after HMRC determines any representations, if later) (s 223). No appeal against the notice; if the taxpayer later wins, the tax is repaid with interest.

> **Going further:** for a large group, an APN turns a marketed scheme's saving from an interest-free loan into a cash cost from day one; an FN forces a quick decision between corrective action (amend and pay) and risking the 30% penalty against a ruling that, after *Haworth*, HMRC must believe is decisive.

---

## The general anti-abuse rule

**FA 2013 Part 5** (ss 206–215), from **17 July 2013**. *The Living Law*, chapter 3, told how it grew out of Graham Aaronson's report for the government.

**Stage 1: tax arrangements** (s 207(1)): it would be reasonable to conclude that obtaining a tax advantage was **the main purpose, or one of the main purposes**.

**Stage 2: abusive** (s 207(2)): entering into or carrying out the arrangements **cannot reasonably be regarded as a reasonable course of action** in relation to the relevant tax provisions, having regard to all the circumstances (**double reasonableness**), including whether the result is consistent with the provisions' principles and policy, whether the means involve **contrived or abnormal steps**, and whether the arrangements **exploit shortcomings** in the legislation. Statutory **indicators of abuse** include income or profits for tax purposes significantly less than the economic amount, and deductions or losses significantly greater; arrangements in line with **established practice HMRC had accepted** point the other way.

The GAAR connects to the rest of the architecture. A GAAR counteraction notice is one of the conditions for an APN, so a group facing the GAAR may also face paying the tax up front. The Advisory Panel is independent of HMRC; its opinion is not binding, but the tribunal must take it into account, and a published Panel opinion that an arrangement is abusive is a powerful signal for every user of similar arrangements.

**Consequences:** counteraction on a **just and reasonable** basis (s 209); referral to the independent **GAAR Advisory Panel**, whose opinion the tribunal must take into account (s 211); **penalty 60%** of the counteracted advantage (s 212A, FA 2016).

**Scope:** CT (including amounts charged as if they were CT), income tax, CGT, IHT, SDLT and other listed taxes.

**Why it exists alongside the TAARs:** targeted rules reach only the schemes their drafters foresaw. The GAAR is for the egregious scheme nobody foresaw; ordinary planning (debt versus equity, claiming allowances, making elections) is not abusive. *Ramsay* asks what the statute, read purposively, means for the facts; the GAAR asks whether the arrangement is abusive even if it works on that reading. In practice the corporate code's specific purpose tests (unallowable purpose, chapter 12; share exchange main purpose tests, chapter 18; Part 14B, chapter 14) usually decide a corporate case first.

> **Exam lens: avoidance and anti-avoidance (grade 2)**
> DOTAS, APNs/FNs, GAAR and avoidance v evasion: none examined M23–M26. Most likely as a few marks inside a scenario (a promoter's proposal; a TAAR question). Know the conditions, the time limits (5 days; 90 days; 20-year discovery), the penalty rates (30%; 60%) and *Haworth*. **Trap:** treating the GAAR as the first line of attack where a targeted rule applies.

---

## The loss refresh pitch

> **Worked example: the promoter's proposal, GY3 (invented case)**
> Brackenwell's pre-acquisition losses of **£8.6m** are fenced off by the change of ownership rules (chapter 14); at 25% they would be worth **£2.15m**. A promoter offers to "refresh" them through a pre-packaged series of intra-group steps routing income and deductions. His fee is a **percentage of the tax saved**, and he requires a **confidentiality agreement** before explaining the steps.
>
> | Layer | Analysis |
> |---|---|
> | DOTAS | Premium fee and confidentiality hallmarks: very likely notifiable; SRN on the return; 20-year discovery window |
> | APN | DOTAS-notifiable arrangements are an APN condition: tax payable up front once under enquiry |
> | Targeted rule | CTA 2010 **Part 14B** (ss 730E–730H, tax avoidance involving carried-forward losses; grade 2): aimed at arrangements to unlock carried-forward losses; chapter 14 |
> | GAAR | Contrived, pre-packaged steps; backstop with a 60% penalty |
> | Tax strategy | Conflicts with Tarnmoor's published statement that it does not use marketed avoidance schemes |
> | SAO | Nadia must consider whether such a position fits appropriate tax accounting arrangements |
> | UTT | If provided for and over £5m, notifiable |
>
> Tom's board paper recommends that the group decline, record the approach and send a short written refusal. The board declines in a single meeting. The architecture works not only by defeating schemes but by making them unattractive before anyone has to defeat them.

**FA 2026 Part 6** continues the pressure on promoters: a prohibition on promoting certain marketed avoidance arrangements (s 159 onwards), promoter action notices and anti-avoidance information notices. Non-core background: know that it exists. (Commencement dates not verified.)

---

## Working with HMRC when things are disputed

HMRC's large business directorate gives many of the largest groups a named **Customer Compliance Manager** (CCM); HMRC's UTT guidance refers to businesses raising uncertain issues through the CCM. Early conversations mean agreed positions and fewer surprises on enquiry.

**Litigation and Settlement Strategy (LSS)** (HMRC internal manual, LSS10000 onwards): as HMRC describes it, each dispute is resolved on its own merits, **not as part of a package deal**; HMRC will not settle for less than the tax it believes the law requires simply to save costs; strong cases are settled for what a tribunal would likely award, weak ones conceded.

**ADR (grade 3)** (GOV.UK, "Tax disputes: alternative dispute resolution"): non-statutory; an HMRC mediator not involved in the case helps narrow issues or reach agreement; available during a compliance check when talks stall, or after an appealable decision; **does not affect rights of appeal or review**. HMRC also has guidance for large or complex cases.

Behind it all sit the formal routes (*The Living Law*, chapter 2): statutory review by an HMRC officer not involved in the decision, or appeal to the First-tier Tribunal. ADR runs alongside them and the appeal continues if it fails. Litigation is public, slow and expensive and may set a precedent for a whole sector; settlement is private but must follow the LSS, so issues cannot be traded.

> **Going further: choosing the route**
> For a group tax function the decision is commercial as well as technical: the size of the issue, the strength of the argument, whether the point recurs every year (a recurring issue may be worth settling for the future, or litigating for certainty), the publicity of a hearing, management time, and the precedent for other companies in the sector. ADR is most useful where the dispute is about facts or evidence rather than a pure point of law, and where the relationship with the CCM matters for the future. Record the decision and its reasoning: it is part of the governance the SAO certifies and the strategy describes.

In the invented story, HMRC opens an enquiry into Calder's return for its 9-month period in GY3 (opened 1 June GY5); chapter 27 tells how that transfer pricing dispute ends.

> **Exam lens: ADR (grade 3)**
> Recognition only: what ADR is, when it is available, and that it does not affect appeal rights.

---

## How the examiner tests governance

- **N23 Q5 (10 marks):** SAO: which companies count; main duty; certificate; notification; penalties. Show workings.
- **M25 Q3 (15 marks):** tax strategy with different year ends: use the accounts for the year ending in the parent's year; do not apportion.
- **Compliance and governance** appeared at nearly every sitting M23–M26 (with enquiries, instalments and notification; chapter 3): a 10–15 mark "admin" question is very common.
- **Not seen M23–M26:** CCO, DOTAS, GAAR, FNs/APNs, UTT, ADR.

**Style:** explain and apply; no letter, report or email format; 0.5–1 mark per point (for example 0.5 for "must be UK-incorporated", 1 for applying it to the foreign-incorporated company, 0.5 for the deadline, 1 per penalty correctly stated). Deal with every company given. Answer the tax in the requirement only.

**Method for any threshold question:** list each company → incorporation → 51% membership (at which date) → which year's figures → aggregate → conclusion → consequences (deadlines, penalties).

---

## What to take away

**Rung 1, SAO (FA 2009 Sch 46):** UK-incorporated (residence irrelevant); preceding-year turnover > £200m or balance sheet > £2bn, aggregated with UK-incorporated members of the 51% group at the end of that year; then every UK-incorporated member qualifies, dormant included; a joiner that did not qualify alone is outside for its first financial year in the group. Main duty (reasonable steps; appropriate tax accounting arrangements); certificate; notification; deadlines 6 months (plc) / 9 months; £5,000 fixed penalties, no reduction, reasonable excuse except for an inaccurate certificate.

**Rung 2, tax strategy (FA 2016 Sch 19):** > £200m / > £2bn (51% UK group) or €750m CbC route; head of group publishes before the end of the financial year and within 15 months of the last; four content elements; £7,500 + £7,500 at 6 months + £7,500 a month; different year ends: latest year ending in the head's year, unapportioned.

**Rung 3, UTT (FA 2022 Sch 17, grade 3):** £200m / £2bn across CT-paying members of the 51% group; two triggers; £5m; exemption where HMRC has the information; due with the later of the CT filing date and accounts deadline; £5,000 / £25,000 / £50,000.

**Rung 4, CCO (CFA 2017 ss 45–46):** evasion → facilitation by an associated person → failure to prevent; s 46 needs dual criminality and UK nexus; defence of reasonable prevention procedures (six principles); unlimited fine; first corporate charge August 2025 (allegations untried).

**Anti-avoidance:** DOTAS (hallmarks; 5 days; SRN; FA 2026 penalties; 20-year discovery); FN 30% (*Haworth* limits); APN 90 days; GAAR (double reasonableness; Panel; 60%).

The chapter's question was who answers for the tax inside a large group. The law gives everyone a part: a named officer for the systems, the board for the published attitude, the company for its uncertain positions, and the company again, in the criminal courts, for the people who act for it.

Part Two turns from who answers for the tax to how the profit is measured. Chapter 5 begins where every corporate computation begins: with the accounts.

---

## Key rules and figures

| Rule | Figure / test | Authority |
|---|---|---|
| SAO qualifying company | UK-incorporated; preceding FY turnover > £200m and/or balance sheet > £2bn, aggregated with UK-incorporated 51% group members at the end of that FY | FA 2009 Sch 46 paras 15–16; CTA 2010 s 1154; SAOG11240–11290 |
| SAO start | Financial years beginning on or after 21 July 2009 | FA 2009 Sch 46 |
| SAO deadlines | End of accounts filing period: 6 months (public), 9 months (private) | Sch 46 paras 2–3 |
| SAO penalties | £5,000 fixed each; no reduction; no reasonable excuse for an inaccurate certificate | Sch 46 paras 4–8 |
| Tax strategy | > £200m / > £2bn (51% UK group) or €750m CbC; FYs beginning after 15 September 2016 | FA 2016 Sch 19 |
| Tax strategy timing | Before the end of the FY; within 15 months of the previous | Sch 19 para 16(3) |
| Tax strategy penalties | £7,500; £7,500 at 6 months; £7,500 per further month | Sch 19 para 18 onwards |
| UTT | > £200m / > £2bn (CT-paying 51% group members); returns due on or after 1 April 2022 | FA 2022 Sch 17 paras 2–5, 33 |
| UTT triggers and threshold | Provision; departure from HMRC's known position; advantage > £5m | Sch 17 paras 10–11 |
| UTT penalties | £5,000 / £25,000 / £50,000 | Sch 17 paras 20–21 |
| CCO | In force 30 September 2017; unlimited fine | CFA 2017 ss 45–46; SI 2017/739 |
| DOTAS | Promoter notifies within 5 days (normally); penalties up to £600 a day (£5,000 a day after an order), up to £1m | FA 2004 Part 7; s 315 (FA 2026 s 216) |
| Discovery (DOTAS failure) | 20 years | FA 1998 Sch 18 para 46 |
| Follower notice penalty | 30% (20% under s 208A) | FA 2014 ss 208, 208A |
| APN | Pay within 90 days (or 30 days after representations) | FA 2014 s 223 |
| GAAR | From 17 July 2013; double reasonableness; penalty 60% | FA 2013 ss 206–215, 212A |
| Tarnmoor UTT (GY2) | £24m × 25% = £6m > £5m: notify by 31 December GY3 | invented case |

## Statutory and case references

**Statute and guidance**
- Finance Act 2009 Sch 46 (senior accounting officers), paras 1–3, 4–8, 14–16; HMRC SAOG10300, SAOG11210–11290, SAOG13400, SAOG15700, SAOG18200.
- Corporation Tax Act 2010 s 1154 (51% subsidiary); Part 14B ss 730E–730H.
- Finance Act 2016 Sch 19 (tax strategy), paras 16(2), 16(3), 18; GOV.UK "Large businesses: publish your tax strategy" (updated 30 July 2024).
- Finance Act 2022 Sch 17 (uncertain tax treatment), paras 2–5, 8–11, 18, 20–21, 33; HMRC UTT manual (UTT14100); HMRC notice under para 86 on how to notify; consultation of 12 March 2026 (not law).
- Criminal Finances Act 2017 Part 3, ss 44–52; SI 2017/739; GOV.UK "Corporate offences for failing to prevent criminal facilitation of tax evasion".
- Finance Act 2004 Part 7 (s 306; s 315 as substituted by FA 2026 s 216); FA 2026 ss 159 onwards, 216–219.
- Finance Act 1998 Sch 18 para 46.
- Finance Act 2014 Part 4: ss 204–218 (follower notices; ss 208, 208A), ss 219–229 (APNs; s 223).
- Finance Act 2013 Part 5, ss 206–215 (s 207, s 209, s 211, s 212A).
- HMRC Litigation and Settlement Strategy (LSS10000); ADR guidance (ADRG02600; GOV.UK "Tax disputes: alternative dispute resolution").

**Cases**
- *WT Ramsay Ltd v IRC* [1982] AC 300 (HL, decided 1981) (recap).
- *RFC 2012 plc v Advocate General for Scotland* [2017] UKSC 45 (recap).
- *HMRC v Smallwood* [2010] EWCA Civ 778.
- *Thathiah v HMRC* [2017] UKFTT 601 (TC) (as reported).
- *Castlelaw (No 628) Ltd and Irene Douglas v HMRC* (FTT, 2020, TC07540) (as reported; neutral citation not verified).
- *R (Haworth) v HMRC* [2021] UKSC 25.
- *HMRC v AML Tax (UK) Ltd* [2022] UKFTT 174 (TC) (as reported).
