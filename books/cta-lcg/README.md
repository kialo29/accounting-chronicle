# The Living Law: Groups and Borders

A story-led textbook for Kian's **CTA Advanced Technical paper, Taxation of Larger Companies and Groups (LCG)**: most likely sitting **4 May 2027, 2.30pm** (fallback 26 October 2027: see the date warning below), examined on **Finance Act 2026** (financial year 2026). It is the sequel to *The Living Law* (the TKS book). Every rule is taught with why it exists, how it works at Advanced Technical depth, its edges, the real cases and how the examiners test it, told through one invented UK-listed group, **Tarnmoor plc**, over seven "Group Years", and ending with the Hartleys' Ridgeway Cycles being bought by Tarnmoor. No practice questions (use the CIOT past papers).

**Status:** finished and reviewed, **as built 9 October 2026**.

## What is in the folder

| Path | What it is |
|---|---|
| `chapters/NN-slug.txt` | **Audio scripts**: plain text for a text-to-speech voice (numbers in words, no symbols, acronyms spaced and declared). One per piece |
| `chapters/NN-slug-reading.md` | **Reading editions**: the same chapters for the page, with digits, statutory references, case citations, worked examples, "Going further" and "Exam lens" boxes, and a key rules table |
| `build/order.txt` | Reading order (36 pieces) |
| `build/The-Living-Law-Groups-and-Borders-full-audio-script.txt` | All scripts in order, one file (for the TTS app) |
| `build/The-Living-Law-Groups-and-Borders-reading-edition.md` / `.html` / `.pdf` | All reading editions in order: Markdown, self-contained HTML with a contents list, and PDF |
| `build/build.sh`, `build/style.css` | Rebuilds the compiled files (pandoc for HTML; headless Chromium for PDF) |
| `book-bible.md` | The as-built reference: real cast and cases, the invented group, merged glossary, established facts, coverage, and the status of every verification flag |
| `author-notes-fact-check-flags.md` | **Everything still open or resting on a single, secondary or unverified source**, by chapter, with priority; top section "Check before the May 2027 sitting" |
| `pronunciation-guide.md` | Names and terms a TTS voice may mangle, with sound-it-out spellings |
| `appendix-sources.md` | Sources by chapter (statutes, HMRC manual pages, cases, commentary), marked by how each was verified |
| `calder-ledger.md`, `ledger-check.py` | Canonical numbers for the invented story, and the script that re-computes them (212 checks, 0 failures) |
| `continuity-rulings.md` | Rulings R1–R29 that settled conflicts between chapters (they override the plan) |
| `book-plan.md`, `writer-brief.md`, `ORCHESTRATOR-ADDENDUM.md` | Planning documents (kept as the record; the plan carries an "as built" status line) |
| `notes/` | Each chapter writer's notes: sources, fact-check flags, contradictions, pronunciation, bible and ledger updates, and every later fix |
| `review/` | The seven independent technical reviews (A–G) and the batch issue logs |
| `research/` | The research base: exam intelligence, the 2026 syllabus grid extract (v2), law sheets 1–5 |

## Reading (and listening) order

Follow `build/order.txt`: prologue, introduction, chapters 1–32, conclusion, a note on sources. The book has five Parts: **One, The Larger Company** (1–4); **Two, Measuring Profit** (5–14); **Three, The Group** (15–21); **Four, Across Borders** (22–30); **Five, Putting It Together** (31–32). Chapter 31 applies everything to one acquisition; chapter 32 is exam craft (the RM software, the spreadsheet rule, timing, marking and a trap atlas).

Suggested use: listen to the script on the commute, then read the chapter's reading edition for the worked examples, the Exam lens boxes and the key rules table. The scripts say once or twice per chapter where "the full working is in the reading edition".

## Word counts

Counted with `wc -w` on each file. At about 150 words a minute the scripts run to roughly 27–28 hours of audio (estimate).

| File stem | Piece | Part | Script words | Reading edition words |
|---|---|---|---|---|
| 00-prologue | Prologue: One loan, two answers | — | 2,118 | 2,852 |
| 00b-introduction | Introduction | — | 2,849 | 3,054 |
| 01-one-company-or-many | 1 One company or many? | One: The Larger Company | 6,025 | 6,742 |
| 02-where-corporate-tax-law-lives | 2 Where corporate tax law lives | One: The Larger Company | 5,896 | 7,578 |
| 03-returns-payments-enquiries | 3 Returns, payments and enquiries | One: The Larger Company | 7,132 | 7,248 |
| 04-governance-anti-avoidance | 4 Governance and the anti-avoidance architecture | One: The Larger Company | 7,674 | 7,678 |
| 05-tax-follows-the-accounts | 5 Tax follows the accounts | Two: Measuring Profit | 6,678 | 7,453 |
| 06-deferred-tax | 6 Deferred tax and the tax charge | Two: Measuring Profit | 6,596 | 7,094 |
| 07-large-company-computation | 7 The large company computation | Two: Measuring Profit | 8,699 | 8,486 |
| 08-plant-and-machinery | 8 Plant and machinery for larger companies | Two: Measuring Profit | 8,226 | 8,435 |
| 09-buildings-fixtures-leasing-successions | 9 Buildings, fixtures, leasing and successions | Two: Measuring Profit | 8,172 | 8,415 |
| 10-research-and-development | 10 Research and development | Two: Measuring Profit | 7,831 | 7,748 |
| 11-intangibles-and-ip | 11 Intangible assets and intellectual property | Two: Measuring Profit | 7,398 | 7,920 |
| 12-loan-relationships-and-derivatives | 12 Loan relationships and derivatives | Two: Measuring Profit | 8,532 | 9,378 |
| 13-investment-companies | 13 Companies with investment business | Two: Measuring Profit | 6,025 | 5,861 |
| 14-losses | 14 Losses in the larger company | Two: Measuring Profit | 8,069 | 8,391 |
| 15-group-relief-consortia-jvs | 15 Group relief, consortia and joint ventures | Three: The Group | 8,383 | 9,293 |
| 16-company-gains-property-leases | 16 Company gains: property and leases | Three: The Group | 7,867 | 8,363 |
| 17-gains-inside-the-group | 17 Gains inside the group | Three: The Group | 8,697 | 8,523 |
| 18-shares-sse-reorganisations | 18 Shares: the exemption, reorganisations and earn-outs | Three: The Group | 8,690 | 8,667 |
| 19-reconstructions-demergers-distributions | 19 Reconstructions, demergers and distributions | Three: The Group | 7,422 | 9,209 |
| 20-buying-and-selling-companies | 20 Buying and selling companies | Three: The Group | 7,286 | 7,878 |
| 21-stamp-taxes-groups | 21 Stamp taxes for groups | Three: The Group | 4,772 | 6,828 |
| 22-residence-and-migration | 22 Where a company lives, and how it leaves | Four: Across Borders | 8,162 | 8,101 |
| 23-inbound-pe-withholding | 23 Inbound: non-resident companies, PEs and withholding | Four: Across Borders | 7,671 | 8,212 |
| 24-treaties-and-dtr | 24 Treaties and double tax relief | Four: Across Borders | 8,024 | 7,898 |
| 25-outbound-branch-or-subsidiary | 25 Outbound: branch or subsidiary | Four: Across Borders | 6,709 | 7,355 |
| 26-controlled-foreign-companies | 26 Controlled foreign companies | Four: Across Borders | 9,357 | 9,480 |
| 27-transfer-pricing | 27 Transfer pricing and advance pricing agreements | Four: Across Borders | 9,267 | 10,622 |
| 28-corporate-interest-restriction | 28 The corporate interest restriction | Four: Across Borders | 8,411 | 9,504 |
| 29-hybrid-mismatches | 29 Hybrid mismatches | Four: Across Borders | 6,110 | 6,044 |
| 30-global-minimum-and-dpt | 30 The global minimum and the end of diverted profits tax | Four: Across Borders | 5,454 | 6,748 |
| 31-the-ridgeway-deal | 31 The Ridgeway deal | Five: Putting It Together | 6,984 | 8,866 |
| 32-the-advanced-technical-craft | 32 The Advanced Technical craft | Five: Putting It Together | 6,023 | 7,740 |
| 33-conclusion | Conclusion | — | 3,097 | 3,208 |
| 34-a-note-on-sources | A note on sources | — | 2,264 | 2,241 |
| **Total** | 36 pieces | | **248,570** | **269,113** |

The compiled files: full audio script 248,570 words; combined reading edition 269,143 words (the extra 30 are the title block).

## How it was verified

- **Research base first.** Before writing, the research phase opened the primary sources behind the five law sheets and the exam-intelligence file (CIOT pages, Candidate Instructions, past papers and examiners' reports M23–M26, the 2026 grid). Items marked V there were the starting point.
- **WebSearch extracts, not full pages.** During the build **WebFetch was unavailable**, so writers, the continuity editor and reviewers checked statute, HMRC manuals, judgments and CIOT pages through **WebSearch**, which shows a page's title and a short (sometimes truncated) extract. The OECD's website could not be opened at all. The text labels what it could not confirm ("HMRC's view", "as reported", "this book's reading", "not settled", "proposed, not law").
- **Numbers.** Every computation was run in Python; story numbers live in `calder-ledger.md` and are re-checked by `ledger-check.py`.
- **Continuity rulings.** Two continuity passes produced rulings R1–R29 (for example: the instalment counting date, the s 105(3A) cap on Tarnmoor plc's management expenses, the GY3 interest restriction as filed and revised, the £270,000 stamp duty on the capped earn-out). Every chapter was fixed to match.
- **Seven independent technical reviews** (A: prologue and 1–5; B: 6–10; C: 11–14; D: 15–21; E: 22–26; F: 27–30 and 32; G: 31 and the framing pieces) re-checked every rule against the research files or a primary-source extract and re-ran every computation; their corrections are applied in both editions and recorded in the notes.

## Open flags: where to look

- **`author-notes-fact-check-flags.md`** lists every open point by chapter with priority. Start with its top section, **"Check before the May 2027 sitting"**: the 2027 grid and tax tables (not yet published; the book uses the 2026 grid, and the 2026 tables still show the 18% WDA), the Autumn Budget on 28 October 2026, the Finance Bill 2026-27 (the compulsory branch exemption and Pillar Two "side-by-side" are proposed, not law), Bank Rate changes to the interest rates, ***ScottishPower*** in the Supreme Court (judgment reserved), ***Syngenta*** in the Upper Tribunal, the **October 2027 sitting date** (26 October on most CIOT pages; one line says 28 October: check your entry confirmation), the instalment regulation's associated-company wording (**COM30110 says periods "ending", CTM92530 "beginning", on or after 1 April 2023**), and the May 2027 Candidate Instructions (the spreadsheet rule).
- **`book-bible.md` §5** shows how each planning-stage flag was resolved (with its source or ruling) or that it remains open.
