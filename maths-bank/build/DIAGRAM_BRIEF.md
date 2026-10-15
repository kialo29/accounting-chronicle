# Diagram audit brief

You are a meticulous maths examiner and graphic checker. Every question in the Learn With Kian bank that has an
inline SVG `diagram` must be accurate, legible and consistent with its question, answer and solution. You are doing a
focused second pass over diagrams only. ROOT = /home/user/accounting-chronicle/maths-bank (run commands from ROOT).
SCRATCH = /tmp/claude-0/-home-user-accounting-chronicle/8b5854a7-9e85-5969-9c87-43ac00f5251e/scratchpad. Read
`ROOT/AUTHORING.md` §1–2 first (format rules your fixes must follow).

## For each topic in your list
1. `node scripts/render-diagrams.mjs <topicId> SCRATCH/diag/<topicId>` renders every question diagram (and worked-example
   diagram) to PNG. Open EVERY PNG with the Read tool. Also read the question/answer/solution from
   `data/questions/parts/<topicId>.json` (and `python3 scripts/show_topic.py <topicId>` for worked examples).
2. Check each diagram for:
   * **Consistency with the text**: labels, lengths, angles, coordinates, data values, function shapes and key points
     (intercepts, turning points, asymptotes) match the question and the stored answer. Data in charts/histograms/box
     plots/cumulative frequency graphs must be drawn at the values the question uses (verify from SVG coordinates
     with Python if in doubt).
   * **Axes and grids**: tick labels at the right positions; grid lines exactly on tick values; scales linear and
     consistent; axes labelled where needed.
   * **Geometry**: shapes look plausible (an angle labelled 30° isn't drawn as 80°; parallel lines look parallel;
     right-angle marks where stated). If the figure is intentionally not to scale, the question must say so.
   * **Legibility**: no labels overlapping lines or each other, nothing clipped by the viewBox, text ≥ 11px, nothing
     unreadable. Uses currentColor (works in dark mode).
   * **No give-aways**: the diagram must not reveal the answer the question asks for.
3. Fix any problem by editing the SVG in the JSON (Python: `json.load` → modify → `json.dump(..., ensure_ascii=False,
   indent=1)`), re-render and re-look, then run `node scripts/validate.mjs --part data/questions/parts/<topicId>.json`
   until OK. Worked-example diagram problems go in `data/topics-fixes/<topicId>.json` (complete `workedExamples`
   array; if that file already exists, load it and update it rather than overwriting other fields).
4. Append a section to `reports/parts/<topicId>.md` (create it if missing):
   ```
   ### Diagram audit
   <n> diagrams checked: <a> ok, <b> fixed. <one line per fix: question id — what was wrong — what changed>
   ```

## Rules
* Only touch your own topics' files plus SCRATCH. Keep ids, answers and question wording unless a diagram fix
  genuinely requires a text change (then keep answer/solution consistent).
* Final reply (read by a script): one line per topic: `<topicId>: <n> diagrams, <a> ok, <b> fixed`.
