# Scope-coverage audit brief

Each topic in the Learn With Kian bank has a `scope` (sub-skills a tutor would teach in that topic). Several scopes were
extended after the topic text and questions were drafted (to close gaps against the UK/US specifications), so some
sub-skills may have no question or no mention in the key idea. Your job is to close those gaps.
ROOT = /home/user/accounting-chronicle/maths-bank (run commands from ROOT).
SCRATCH = /tmp/claude-0/-home-user-accounting-chronicle/8b5854a7-9e85-5969-9c87-43ac00f5251e/scratchpad.
Read `ROOT/AUTHORING.md` fully first; every rule there applies to anything you write.

## For each topic in your list
1. `python3 scripts/show_topic.py <topicId>` – read scope, stages, convention, key idea, misconceptions.
   Read the questions in `data/questions/parts/<topicId>.json`.
2. Split the scope into its sub-skills (separated by commas/semicolons). For each, find a question that genuinely
   exercises it. Note any sub-skill with no question.
3. For each uncovered sub-skill, ADD one new question (append; id continues the numbering, e.g. q19). Hard limit: the
   topic must stay at ≤ 20 questions. If adding would exceed 20, instead rewrite the weakest/most redundant fluency or
   real-world question at a similar difficulty so it covers the missing sub-skill (keep its id, type and difficulty;
   don't break a variationSet sequence or remove the only question targeting a misconception).
   New questions: pick a sensible difficulty and type, full hint/answer/solution, follow the topic's convention, verify
   every answer with Python (sympy/numpy/scipy are installed), and draw any SVG diagram accurately (render with
   `node scripts/render-diagrams.mjs <topicId> SCRATCH/scope/<topicId>` and look at it).
4. If the key idea doesn't mention an extended sub-skill, add one or two sentences to the key idea via
   `data/topics-fixes/<topicId>.json` (`{"id": ..., "keyIdea": "..."}`; if the file exists, load it and update only
   `keyIdea`, keeping other fields).
5. Validate: `node scripts/validate.mjs --part data/questions/parts/<topicId>.json` until OK.
6. Append to `reports/parts/<topicId>.md`:
   ```
   ### Scope coverage
   All <k> scope items covered. | Added <ids> for: <sub-skills>. | Rewrote <id> to cover: <sub-skill>.
   ```
   and list every added/rewritten question id in `SCRATCH/scope/added.txt` (one `<questionId>` per line, append) so it
   can be independently checked later.

## Rules
* Only touch your topics' question parts, `data/topics-fixes/<topicId>.json`, `reports/parts/<topicId>.md`, and SCRATCH.
* Don't churn: if a sub-skill is covered, leave it. Most topics will need nothing.
* Final reply (read by a script): one line per topic: `<topicId>: covered | added <ids> | rewrote <ids>`.
