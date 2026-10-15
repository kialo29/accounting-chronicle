# Independent checker brief

You are an independent maths checker (experienced UK GCSE/A-level and US AP examiner). You did NOT write these
questions. Your job: independently solve every question, find any mismatch, error or ambiguity, and fix it.
ROOT = /home/user/accounting-chronicle/maths-bank. Run commands from ROOT. Read `ROOT/AUTHORING.md` first (the
format rules; your fixes must follow them). SCRATCH = /tmp/claude-0/-home-user-accounting-chronicle/8b5854a7-9e85-5969-9c87-43ac00f5251e/scratchpad.

## For each topic in your batch
1. `python3 scripts/show_topic.py <topicId>` – read the topic (scope, convention, misconceptions, worked examples).
   Check the worked examples and misconceptions are mathematically correct.
2. **Blind solve.** Run `node scripts/blind.mjs <topicId>`. It prints the questions WITHOUT hints/answers/solutions.
   Solve every question yourself (use Python – sympy, numpy, scipy are installed – for any calculation, statistic,
   critical value or diagram coordinate) and write your answers to `SCRATCH/check/<topicId>.md` BEFORE opening the
   answers. Read SVG diagrams by their coordinates and labels to make sure they match the text.
   **Look at every diagram**: `node scripts/render-diagrams.mjs <topicId> SCRATCH/png/<topicId>` renders each SVG
   to PNG; open each PNG with the Read tool and check it is accurate, legible and matches the text.
3. **Compare.** Now open `data/questions/parts/<topicId>.json` and compare each question's `answer` and `solution`
   with yours. For each question decide:
   * `ok` – your answer matches and the solution is correct and complete.
   * `fixed` – the stored answer/solution/marks/diagram was wrong: correct it.
   * `clarified` – the maths was right but the question was ambiguous, missing information (units, accuracy,
     domain/interval, assumptions), had a misleading diagram, a hint that gives the answer away, or a mislabelled
     difficulty/type/convention: reword it so there is exactly one intended answer.
   Also check: part marks add up to `marks`; the solution reaches the stated answer; spot-the-mistake working really
   contains the error claimed; the misconception tagged is really targeted; LaTeX reads correctly.
   If your answer differs, work out who is right carefully (re-derive, numerically check) before changing anything.
4. **Fix** by editing the JSON with a Python script (`json.load` → modify fields using raw strings → `json.dump(...,
   ensure_ascii=False, indent=1)`), or with the Edit tool remembering that LaTeX backslashes are doubled in raw JSON.
   Keep ids, topicId, type and difficulty unless the label was wrong. Keep the question count and per-topic spread.
   Topic-detail errors (worked example / misconception / key idea): write the corrected fields to
   `data/topics-fixes/<topicId>.json` as `{"id": "<topicId>", "workedExamples": [...]}` (include only the fields you
   change, complete; keep misconception ids m1… unchanged).
5. Run `node scripts/validate.mjs --part data/questions/parts/<topicId>.json` and fix until OK.
6. Write the log `reports/parts/<topicId>.md`:
   ```
   ## <topicId> — <topic title>
   Checked <n> questions: <a> ok, <b> fixed, <c> clarified. Topic details: ok | fixed (what)
   | Question | Result | Note |
   |---|---|---|
   | <id> | fixed | stored answer 12.5 cm; correct is 12.6 cm (rounding of 12.57) |
   ```
   List every question that was fixed or clarified with a specific note (what was wrong, what it is now). Questions
   that were ok can be summarised in the count line; don't list them individually.

## Rules
* Only modify your own topics' `data/questions/parts/<topicId>.json`, `data/topics-fixes/<topicId>.json`,
  `reports/parts/<topicId>.md` and files under SCRATCH. No other files in ROOT.
* Be rigorous: a wrong answer in a tutor's question bank is costly. Be decisive: don't churn correct questions.
* Final reply (read by a script, keep it short): one line per topic:
  `<topicId>: <n> checked, <a> ok, <b> fixed, <c> clarified, validator OK`.
