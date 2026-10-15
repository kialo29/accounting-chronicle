# Learn With Kian — Maths Question Bank

One merged question bank covering **UK KS3 → GCSE (Foundation + Higher) → A-level Maths → A-level Further Maths core
pure** and **US Common Core Grades 6–8 → Algebra 1 → Geometry → Algebra 2 → Precalculus → AP Calculus AB/BC → AP
Statistics**, with a self-contained offline app for browsing, searching, building worksheets and planning learning paths.

## Open it

Double-click **`index.html`** (or drag it into Chrome, Edge, Safari or Firefox). It works offline: all data, KaTeX and its
fonts are embedded in that one file. (The interface fonts load from Google Fonts when you're online and fall back to
system fonts offline.)

* **Browse**: topic cards by strand; search box searches topic text and every question, hint, answer and solution.
  Filters: strand, stage band (KS3, GCSE-F, GCSE-H, A-level, Further, US 6–8, Algebra 1, Geometry, Algebra 2,
  Precalculus, AP Calculus, AP Statistics), UK year / US grade, topic, difficulty 1–5, question type, "has diagram".
* **Topic page**: key idea, worked examples, common misconceptions, prerequisites and "leads to" as clickable chips,
  then questions grouped by difficulty. Each question has separate **Hint**, **Answer** and **Worked solution** buttons.
  "+ Worksheet" adds a question to your hand-picked list.
* **Worksheet**: pick topics, difficulties, types, number of questions, order and working space → a clean worksheet and
  a separate answer sheet (answers only, or with full worked solutions). **Print worksheet** / **Print answer sheet**
  open the print dialog; choose "Save as PDF" for a PDF. "Pick different questions" reshuffles.
* **Learning path**: choose a target topic; it lists the prerequisite chain in teachable order (direct prerequisites,
  2 or 3 levels back, or everything back to Year 7). Tick topics a student already knows to hide them.
* Light / dark / system theme toggle in the header. Works on phones and laptops.

## What's in the box

| Path | Contents |
|---|---|
| `index.html` | The app (≈10 MB, fully self-contained) |
| `data/topics.json` | 234 topics: id, title, strand, stage bands, UK years / US grades, convention, scope, prerequisites, leadsTo, key idea, worked examples, misconceptions |
| `data/questions/<strand>.json` | Questions by strand: number, ratio-proportion, algebra, geometry-measures, probability, statistics, calculus, pure, mechanics, further |
| `data/questions/parts/<topicId>.json` | The same questions, one file per topic (the editable source) |
| `data/topics-parts/`, `data/topics-fixes/` | Topic details as authored per strand, and corrections made during verification (merged into `topics.json`) |
| `reports/verification.md` | How everything was verified, statistics, and every fix made |
| `reports/parts/<topicId>.md` | Per-topic checker, diagram-audit and scope-coverage logs |
| `AUTHORING.md` | The schema and authoring rules (LaTeX, diagrams, pedagogy) — read before adding questions |
| `scripts/` | Build, validation and test tools (below) |

### Question schema
`id`, `topicId`, `difficulty` (1 first exposure → 5 stretch), `type` (fluency, reasoning, problem-solving,
spot-the-mistake, exam-style, real-world, synoptic), `question`, optional `parts` (label, prompt, marks), `marks`
(exam-style), optional `calculator`, `hint`, `answer`, `solution`, `linkedTopicIds`, optional `misconceptionIds`,
optional `variationSet`, optional `diagram` (inline SVG). Maths is LaTeX in `$…$` / `$$…$$`; `\$` is a literal dollar.

## Editing and rebuilding

Requires Node 18+ and Python 3. Once: `npm install` (installs KaTeX and an XML validator used by the scripts).

```bash
# after editing data/questions/parts/*.json or data/topics-parts/*.json / data/topics-fixes/*.json
npm run build                         # all four steps below in one go
python3 scripts/build_topics.py      # -> data/topics.json (leadsTo computed from prerequisites)
python3 scripts/build_questions.py   # -> data/questions/<strand>.json
node scripts/validate.mjs            # schema, ids, cross-refs, LaTeX (KaTeX parse), SVG, per-topic spread
node scripts/build-app.mjs           # -> index.html
node scripts/smoke-test.mjs          # optional: headless-browser test of the app (needs Playwright)
python3 scripts/build_report.py      # -> reports/verification.md
```

Single-topic helpers: `node scripts/validate.mjs --part data/questions/parts/<topicId>.json`,
`python3 scripts/show_topic.py <topicId>`, `node scripts/blind.mjs <topicId>` (questions without answers),
`node scripts/render-diagrams.mjs <topicId> <outDir>` (diagrams to PNG).

The taxonomy itself (topic list, titles, stage tags, years, scope) lives in `scripts/skeleton.py`.
