# Authoring guide (read fully before writing anything)

Learn With Kian maths question bank: one merged bank covering UK KS3 → A-level (+ Further core pure)
and US Grades 6–8 → AP Calculus/Statistics. Everything lives in `maths-bank/` (call it ROOT).

| Path | What |
|---|---|
| `build/skeleton.json` | The fixed list of 232 topics: id, title, strand, stages, years, convention, scope. **Do not add/rename topics.** |
| `data/topics-parts/<strand>.json` | Topic details written per strand (prerequisites, key idea, worked examples, misconceptions) |
| `data/topics.json` | Merged topics (built by `python3 scripts/build_topics.py`) |
| `data/questions/parts/<topicId>.json` | Questions for one topic (a JSON array) |
| `scripts/validate.mjs` | Validator. Run it on everything you write and fix every error. |

## 1. Text format (applies to every text field)

* Maths in LaTeX, rendered by KaTeX: inline `$...$`, display `$$...$$`. **Every** piece of maths, including single
  variables (`$x$`), numbers with operators (`$3 \times 4$`), units with powers (`$\text{cm}^2$`).
  Plain numbers in prose ("3 apples", "£4.50", "12 cm") may stay as text.
* A literal dollar sign (US money) is written `\$` – e.g. `\$4.50` – both inside and outside maths.
  An unescaped `$` always opens maths. UK money uses £.
* No LaTeX commands outside `$...$` (the validator rejects `\frac` etc. in prose).
* Line breaks: `\n` (a real newline in the string). Use `\n\n` between solution steps. `**bold**` is allowed.
* Tables: markdown pipe tables (header row, then `|---|---|`, then rows; same number of cells per row).
  Cells may contain `$...$`. Alternatively `$$\begin{array}{c|c} ... \end{array}$$`.
* Quoted student working (spot-the-mistake): start each line with `> ` to show it as an indented block.
* No raw HTML in text fields (it is escaped). Diagrams go in the `diagram` field.
* KaTeX supports: `\frac \dfrac \sqrt \times \div \pm \le \ge \ne \approx \pi \theta \degree` (or `^\circ`),
  `\text{}`, `\mathrm{}`, `\overrightarrow{AB}`, `\vec{a}`, `\mathbf{a}`, `\binom{n}{r}`, `\sum \int \lim`,
  `\begin{pmatrix} \end{pmatrix}`, `\begin{cases}`, `\begin{aligned}` (inside `$$`), `\overline{x}`, `\bar{x}`, `\hat{p}`,
  `\underline{}`, `\cancel{}`, `\%` (inside maths). Not supported: `\begin{tabular}`, `\SI`, `\qty`, `\degC`.
  Percent signs inside maths must be `\%`.

### JSON escaping – the #1 source of silent corruption
In a JSON string `"\frac"` becomes FORM-FEED + `rac`, `"\times"` becomes TAB + `imes`, `"\neq"` becomes NEWLINE + `eq`.
So **every LaTeX backslash must be doubled in raw JSON** (`"$\\frac{1}{2}$"`, literal dollar `"\\$5"`).

**Strongly recommended:** write a small Python script (in your scratch area, not in ROOT) that builds the list of
dicts using raw triple-quoted strings and dumps it:

```python
import json
Q = []
def q(**kw): Q.append(kw)
q(id="alg-linear-equations-q01", topicId="alg-linear-equations", difficulty=1, type="fluency",
  variationSet="v1",
  question=r"""Solve $3x + 5 = 20$.""",
  hint=r"""Undo the $+5$ first, then the $\times 3$.""",
  answer=r"""$x = 5$""",
  solution=r"""Subtract 5 from both sides:
$$3x = 15$$

Divide both sides by 3:
$$x = 5$$""", linkedTopicIds=[], misconceptionIds=["m1"])
json.dump(Q, open(OUT, "w"), ensure_ascii=False, indent=1)
```
(In a raw string `\n` stays as backslash-n, so for line breaks use real newlines inside the triple-quoted string;
don't type `\n` in raw strings. A raw string cannot end with a single backslash.)
If you edit JSON directly with an editor, double every backslash.

## 2. Diagrams (`diagram` field, optional, inline SVG)
* `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 W H" width="W" height="H">`, W ≤ 360, H ≤ 300.
* Must be well-formed XML (escape `&` as `&amp;`, `<` in text as `&lt;`). No scripts, no `<image>`, no external hrefs,
  no `<foreignObject>`, no CSS `<style>` blocks.
* Use `stroke="currentColor"`, `fill="none"` for lines/shapes and `fill="currentColor"` for text so the diagram works
  in light and dark mode. You may use one accent: `fill="#3b82f6" fill-opacity="0.2"` (or stroke `#3b82f6`) for shading.
* Text: `font-size="13"` to `14`, `font-family="sans-serif"`, use Unicode for symbols (θ, °, ², √, π, x, →).
  SVG text is not LaTeX – write `5 cm`, `θ`, `x²`.
* Diagrams must be geometrically sensible (angles look roughly right) and say "Not drawn to scale" in the question
  text if they are not accurate. Mark right angles with a small square.
* Use diagrams where a real exam would (geometry, graphs, charts, trees, Venn diagrams, force diagrams, box plots,
  histograms, slope fields…). Check coordinates carefully – an incorrect diagram is worse than none.

## 3. Question schema (`data/questions/parts/<topicId>.json` = JSON array)

```jsonc
{
  "id": "<topicId>-q01",            // q01, q02, ... in order, two digits
  "topicId": "<topicId>",
  "difficulty": 1,                  // 1-5, see below
  "type": "fluency",                // fluency | reasoning | problem-solving | spot-the-mistake | exam-style | real-world | synoptic
  "question": "…",                  // stem. For multi-part questions put the parts in "parts".
  "parts": [ {"label": "a", "prompt": "…", "marks": 2} ],   // optional; required for exam-style multi-part. marks per part required on exam-style.
  "marks": 5,                       // exam-style ONLY (total = sum of part marks). Omit for other types.
  "calculator": false,              // optional, exam-style only: false = non-calculator paper style
  "hint": "…",                      // a nudge, not the answer
  "answer": "…",                    // final answer(s) only, concise. Multi-part: "(a) … (b) …"
  "solution": "…",                  // full worked solution, step by step, with reasoning. Exam-style: annotate marks (M1, A1, B1 / AP "1 pt")
  "linkedTopicIds": [],             // other topic ids this uses (required, non-empty, for synoptic)
  "misconceptionIds": ["m2"],       // optional: which of the topic's misconceptions (m1..m4) this targets
  "variationSet": "v1",             // optional: groups a variation-theory fluency sequence
  "diagram": "<svg …>…</svg>"       // optional
}
```

### Difficulty (relative to the topic's own stage)
1 = first exposure / fluency · 2 = routine practice · 3 = solid standard exam level for that stage (e.g. GCSE grade 5–6,
a typical Algebra 1 test item, a typical A-level question) · 4 = demanding / high-grade · 5 = stretch: top-grade,
unfamiliar context or olympiad-flavoured.

### Per-topic requirements (validator enforces the starred ones)
* ★ 15–20 questions per topic (aim for 16–18).
* ★ Every difficulty 1–5 present. Suggested spread for 17: d1 ×3, d2 ×4, d3 ×4, d4 ×3, d5 ×3.
* ★ At least 4 types; aim to use all 7. Suggested: fluency 4–5, reasoning 2, problem-solving 2, spot-the-mistake 2,
  exam-style 2, real-world 2, synoptic 2.
* ★ At least 2 **synoptic** questions that genuinely need another topic (list it in `linkedTopicIds`). Other types may
  also list linked topics.
* ★ Every misconception of the topic (m1…) is targeted by at least one question (`misconceptionIds`). Spot-the-mistake
  questions are the natural home: show a plausible student's working containing that misconception and ask the
  student to find and correct the error.
* ★ A **variation-theory sequence**: at least 3 consecutive fluency questions sharing a `variationSet`, where only one
  feature changes between consecutive questions (e.g. $3x+5=20$ → $3x-5=20$ → $5+3x=20$ → $20=3x+5$), so the
  learner notices the effect of each change. The solution can briefly note what changed.
* ★ At least one **exam-style** question: multi-part (`parts`), real command words and mark allocations of the
  relevant board/paper — GCSE ("Work out", "Show that", "Give your answer to 3 significant figures", "Explain why",
  "Prove", "You must show your working"), A-level ("Show that", "Hence", "Find the exact value", "Prove that",
  "Given that…", answer "in the form…"), AP Calculus FRQ ("Justify your answer", "Explain the meaning of … in the
  context of the problem", "Using correct units", "Show the work that leads to your answer"), AP Statistics FRQ
  ("Identify the procedure, check conditions, compute, conclude in context", "Interpret … in context").
  Typical totals: GCSE 2–6 marks, A-level 5–12 marks, AP FRQ parts 1–3 points each.
  Mark scheme notation in the solution: M1 (method), A1 (accuracy), B1 (independent), dM1, ft.
* Write originals. Do not copy past-paper questions.
* Answers must be correct, unambiguous and match the solution exactly. Give exact answers where natural, or state the
  required accuracy in the question. State units. If a question has several valid answers, say so in the answer.
* Hints should nudge (first step / key fact), never give the answer.
* Solutions: full working, as a tutor would write it on a board, including *why* for reasoning questions. For
  spot-the-mistake: identify the incorrect line, explain the misconception, give the corrected working and answer.
* Real-world questions use believable contexts and numbers.

### Conventions
* Topics with `"convention": "US"` (US-only): US spelling (center, color), "slope", customary units where natural
  (in, ft, yd, mi, oz, lb, gal, °F) alongside metric, \$ money, US terminology (GCF, trapezoid, PEMDAS, Algebra 1
  vocabulary, AP notation, `\hat{p}`, `\bar{x}`).
* All other topics (UK and shared UK/US): UK spelling and terms (gradient, factorise, HCF, trapezium, BIDMAS, £, metric,
  "significant figures"). Shared topics may *mention* the US name once in the key idea ("gradient (US: slope)") but
  questions use UK conventions. For shared topics that include US-flavoured scope (e.g. "absolute value (US 6)"),
  include at least one question on that scope item.
* Use the topic's `scope` field to make sure every listed sub-skill appears in at least one question.

## 4. Topic details schema (`data/topics-parts/<strand>.json` = JSON array, one object per topic of that strand)

```jsonc
{
  "id": "alg-linear-equations",
  "prerequisites": ["alg-notation-simplifying", "num-negative-numbers"],  // ids from skeleton.json; direct prerequisites only (2-5 usually)
  "keyIdea": "…",                    // 60-150 words: the core idea a tutor would put on the board, with LaTeX
  "workedExamples": [ {"question": "…", "solution": "…"} ],              // 1-2, solution step by step; optional "diagram"
  "misconceptions": [ {"id": "m1", "text": "…", "correction": "…"} ]     // 2-4; ids m1, m2, … in order
}
```
* Prerequisites must be **direct** and must point to genuinely earlier/simpler topics so the prerequisite graph has no
  cycles (never list a topic that would itself need this one). Prefer topics in earlier stages/years. Cross-strand
  prerequisites are encouraged (e.g. calculus → algebra). `leadsTo` is computed automatically.
* Misconceptions must be specific and real (what students actually write), e.g. "Thinks $(a+b)^2 = a^2 + b^2$", not
  "Makes errors with brackets".

## 5. Validate
```
node scripts/validate.mjs --part data/questions/parts/<topicId>.json
node scripts/validate.mjs --topics-part data/topics-parts/<strand>.json
```
Fix every ERROR. KaTeX errors mean the LaTeX won't render – fix them.
