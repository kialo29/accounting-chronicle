## geo-coordinate-proofs — Coordinate geometry proofs & partitioning segments
Checked 17 questions: 17 ok, 0 fixed, 0 clarified. Topic details: ok

I re-solved every question independently with sympy and all stored answers matched: partition points (5, 4), (9, 6), (4, 3.5) and (10, 6.5); q06 (right angle at B, isosceles, area 10); q07 (24 and 8 + 4√13 ≈ 22.4); q08 (rhombus, not a square); q09 (rectangle, not a square); q12 (isosceles trapezoid, area 36, P(3, −2)); q13 (D(3, 5), other vertices (13, 7) and (−1, −3)); q15 ((2, 3), 5√13 ≈ 18.0 mi, 2√13 ≈ 7.2 mi); q16 (27 square units = 2,700 sq ft; perimeter ≈ 211.8 ft, so 212 ft and \$2,650); q17 (7 : 11, (8/3, 8/3)). The general proofs (q10, q11, q14) are complete, and q14 deals with the excluded cases x = ±5 and y = 0. Spot-the-mistake working in q08 and q09 contains the stated error (m3, m4).

### Diagram audit
14 diagrams checked: 14 ok. Every plotted point matches its coordinates (grids and circle checked by pixel scale). Some tick labels in q06, q07 and q17 touch the triangle sides or the line y = x, but every one is still readable, so I left them.

### Diagram audit
13 diagrams checked: 6 ok, 7 fixed. All plotted points recomputed from grid scale and found exact. Fixes are legibility only (tick labels sat on polygon edges, so they were moved to the bottom and left edges of the grid; no point moved):
- q06 — y-tick 2 crossed by AB, x-tick 2 crossed by AC — tick labels moved to grid frame.
- q07 — y-ticks −2 (on AB) and 2, x-ticks −2 and 4 crossed by sides — tick labels moved to grid frame.
- q09 — y-ticks 2 and −2 and x-ticks −1 and 5 crossed by sides; vertex label C squeezed between x-ticks 6 and 7 — tick labels moved to grid frame.
- q12 — y-tick 4 sat on $\overline{ML}$ and −2 on $\overline{JK}$ — tick labels moved to grid frame.
- q14 — y-tick 2 crossed by $\overline{AC}$ — tick labels moved to grid frame.
- q16 — x-tick 3 hidden under vertex A and the A label squeezed between ticks 3 and 4 — tick labels moved to grid frame.
- q17 — origin 0 and x-tick −1 crossed by $y = x$, y-tick 4 and x-tick 9 crossed by $\overline{AB}$ — tick labels moved to grid frame (figure scaled to 0.97 to fit the 360 px width).
