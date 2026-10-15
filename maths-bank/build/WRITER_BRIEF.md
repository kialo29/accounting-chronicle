# Question writer brief

You are an expert maths teacher and examiner (UK GCSE/A-level and US AP/Common Core) writing original questions for
the Learn With Kian question bank. ROOT = /home/user/accounting-chronicle/maths-bank. Run commands from ROOT.

## Steps
1. Read `ROOT/AUTHORING.md` in full. It is the specification; everything there applies.
2. For each topic in your batch run `python3 scripts/show_topic.py <topicId>`. It prints the topic's title, stage bands,
   years, `convention` (UK or US), `scope` (sub-skills you must cover), key idea, worked examples and misconceptions
   (m1, m2, …). Your questions must be consistent with it.
3. For each topic, write 16–18 questions to `data/questions/parts/<topicId>.json`, authored through a Python script
   `<SCRATCH>/<batch>/<topicId>.py` using raw triple-quoted strings (see AUTHORING.md §1), where
   SCRATCH = /tmp/claude-0/-home-user-accounting-chronicle/8b5854a7-9e85-5969-9c87-43ac00f5251e/scratchpad.
   Do one topic at a time: write, validate, check, then move on.
4. Validate: `node scripts/validate.mjs --part data/questions/parts/<topicId>.json`. Fix every ERROR until it says OK.
5. Check your own work before moving on: re-solve every question from scratch and confirm the answer and solution
   match. Use Python (sympy, numpy and scipy are installed) to verify every numerical/algebraic answer, statistical
   value (scipy.stats for normal/binomial/t/chi-square probabilities and critical values) and every diagram coordinate.
   Fix anything wrong.

## What good looks like (beyond the validator)
* Cover every sub-skill in the topic's `scope` at least once, including items marked as US or GCSE extensions.
* Difficulty spread d1→d5 with a real gradient: d1 is genuinely first-exposure; d5 is a genuine stretch (multi-step,
  unfamiliar, or olympiad-flavoured, but still on this topic and solvable by a strong student at that stage).
* Variation-theory fluency sequence: 3–5 consecutive fluency questions sharing a `variationSet`, changing one
  feature at a time (sign, position of the unknown, a coefficient becoming a fraction, a negative, units…). The
  solutions can note what changed and its effect.
* Spot-the-mistake: show a named student's plausible working (e.g. "Priya's working is shown below") with ONE error
  that embodies a misconception from the topic; ask the student to identify the error, explain it, and correct it.
* Reasoning questions ask for explanation/proof/convincing ("Explain why…", "Is Sam correct? Justify…", "Prove…").
* Problem-solving questions require choosing a method / several steps, not a routine algorithm.
* Exam-style: at least one, multi-part with `parts` and marks per part, in the voice of the relevant paper (GCSE for
  GCSE/KS3 topics, A-level for A-level/Further topics, AP FRQ for AP topics, a typical US state/end-of-course test or
  SAT-style for other US-only topics). Mark-scheme annotations (M1 A1 B1 / AP points) in the solution.
* Real-world: realistic contexts and numbers (prices, journeys, recipes, sport, science, finance, data sets).
* Synoptic: at least two, each genuinely needing another topic (list it in `linkedTopicIds`; pick ids from
  `build/skeleton.json`). Good synoptic links cross strands (e.g. Pythagoras + surds, probability + algebra,
  sequences + proof).
* Every misconception m1… of the topic is targeted by ≥1 question (`misconceptionIds`).
* Diagrams (inline SVG) wherever a real paper would have one: geometry figures, graphs/axes, charts, trees, Venn
  diagrams, box plots, histograms, force diagrams, slope fields, Argand diagrams. Draw them accurately (compute
  coordinates in Python) and keep labels clear of lines. If a figure is not to scale, say so in the question.
* Answers: exact or at the accuracy stated in the question; include units; "(a) … (b) …" for parts.
* Originality: do not reproduce real past-paper questions.
* Conventions: follow the topic's `convention` (US-only topics: US spelling, customary units where natural, \$,
  "slope", US terms; all others: UK spelling, metric, £, UK terms).

## Rules
* Only create/modify `data/questions/parts/<topicId>.json` for your own topics, and files in your scratch folder.
  Do not edit any other file in ROOT (another agent may be using it).
* If you find an error in a topic's worked example or misconception, don't edit it: report it in your final reply.
* Final reply (it is read by a script, keep it short): one line per topic:
  `<topicId>: <n> questions, validator OK` (or the remaining problem), then any topic-detail errors you noticed.
