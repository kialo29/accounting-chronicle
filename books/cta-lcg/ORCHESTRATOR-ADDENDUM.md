# Orchestrator addendum (9 October 2026): read with `writer-brief.md`. This file overrides the brief where they differ.

## Paths
- `/home/claude/cta-lcg/` is the working folder (it is a symlink to `/home/user/accounting-chronicle/books/cta-lcg/`). All paths in the brief work as written.
- Scratch work: use your own folder under `/tmp/claude-0/-home-user-accounting-chronicle/7222567c-185b-51e3-b4bc-bb4854026617/scratchpad/lcg-chNN/` (create it). Never put scratch files in `chapters/` or `notes/`.

## TKS files are NOT available
- `/home/claude/cta-tks/` does not exist in this environment (no TKS chapters, no `rates-2026-27.md`, no TKS bible, no Hartley ledger).
- Use instead: `book-bible.md` §1B (Hartleys), §3 (established FY2026 facts, including rates), §4.1 (what TKS taught) and §6 (pronunciation); `calder-ledger.md` §1 (TKS facts that bind this book).
- When you recap TKS, keep it to what the bible and ledger record. Do not invent TKS chapter content beyond them; refer to TKS chapters only by the numbers the plan/bible give. Record any gap in your notes.

## Web access in this environment (important for fact-checking)
- **WebFetch does not work** (DNS fails for legislation.gov.uk, gov.uk, caselaw.nationalarchives.gov.uk and others). Do not retry it.
- **WebSearch works** and returns titles, URLs and short extracts from the pages (including legislation.gov.uk, HMRC manuals on gov.uk, Find Case Law, tax.org.uk). This is your verification route.
- **Search budget: up to 12 WebSearch calls per chapter** (use `mode: "standard"`). Spend them on: (1) every law-sheet item marked **S** or **U** or **[verify]** that you intend to teach; (2) any figure, date, section number or case fact the law sheets do not mark **V**; (3) FA 2026 commencement points for your chapter. Items marked **V** in the law sheets may be restated without a new search.
- Craft searches to land on primary sources, e.g. `"CTA 2009" section 441 unallowable purpose legislation.gov.uk`, `INTM414020 HMRC manual`, `"[2024] EWCA Civ 330" BlackRock`.
- If a point cannot be verified, either leave it out or label it in the text ("HMRC's guidance says...", "this point is not settled"), and list it under fact-check flags in your notes with "UNVERIFIED (search returned nothing conclusive)".
- In your notes' source list, give the search query and the URLs whose extracts you relied on.

## Continuity
- `continuity-rulings.md` (R1–R17, after batch 1) now exists. **Read it in full, especially each ruling's "Guidance for later chapters"**. It overrides the plan; the ledger has been updated to match (§8 lists facts fixed by chapters 1–14). Chapters 1–14 are written in `chapters/` (reading editions `*-reading.md`): read the ones your chapter builds on so you recap accurately and do not contradict them.
- R16: never put production words such as "ledger", "bible", "the plan", "brief" or "ruling" in the chapter text.
- Do not edit shared files (plan, bible, ledger, ledger-check.py, this addendum, other chapters).

## Output check
- Both deliverables and the notes file are required. Run the self-checks in brief §11 with tools before finishing, and include the word counts (script `wc -w` and reading edition `wc -w`) in your final message.
- Script target: the plan's word count ±10%. Reading edition: about the same or somewhat longer.
- Final message: 5–10 lines only (files, word counts, top fact-check flags, contradictions, new ledger facts).
