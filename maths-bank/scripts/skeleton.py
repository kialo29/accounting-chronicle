"""Topic skeleton (ids, titles, strands, stage bands, years, scope).

This is the source of truth for the taxonomy *structure*. Topic content
(key idea, worked examples, misconceptions, prerequisites) is authored per
strand in data/topics-parts/<strand>.json and merged by scripts/build_topics.py.

Line format:  id | title | strand code | stage bands | UK years | US grades | scope
Years are "a-b" or "-" when the topic is not part of that system.
"""
import json, pathlib

STRANDS = {
    "N": "Number", "R": "Ratio & Proportion", "A": "Algebra", "G": "Geometry & Measures",
    "P": "Probability", "S": "Statistics", "C": "Calculus", "PU": "Pure (A-level)",
    "M": "Mechanics", "F": "Further",
}
STAGES = ["KS3", "GCSE-F", "GCSE-H", "A-level", "Further", "US-6-8", "US-Alg1", "US-Geo",
          "US-Alg2", "US-Precalc", "US-AP-Calc", "US-AP-Stats"]

RAW = r"""
num-place-value-ordering | Place value & ordering numbers | N | KS3,GCSE-F,US-6-8 | 7-8 | 6-6 | Integers and decimals; place value; ordering; inequality symbols; multiplying/dividing by powers of 10
num-negative-numbers | Negative numbers, integers & absolute value | N | KS3,GCSE-F,US-6-8 | 7-8 | 6-7 | Four operations with negatives; number line; rational numbers on the number line; absolute value as distance from zero (US 6)
num-written-methods | Written & mental calculation methods | N | KS3,GCSE-F,US-6-8 | 7-8 | 6-6 | Column addition/subtraction, long and short multiplication, long and short division, remainders in context, inverse operations
num-decimals-operations | Calculating with decimals | N | KS3,GCSE-F,US-6-8 | 7-8 | 6-7 | Four operations with decimals; multiplying/dividing by decimals; decimal place-value reasoning
num-order-of-operations | Order of operations (BIDMAS / PEMDAS) | N | KS3,GCSE-F,US-6-8 | 7-7 | 6-7 | Priority of operations, brackets, powers, fraction bars as grouping, calculator use
num-factors-multiples-primes | Factors, multiples, primes & prime factorisation | N | KS3,GCSE-F,GCSE-H,US-6-8 | 7-9 | 6-6 | Factors, multiples, primes, prime factor trees, product of prime factors in index form, divisibility
num-hcf-lcm | HCF & LCM (GCF & LCM) | N | KS3,GCSE-F,GCSE-H,US-6-8 | 7-10 | 6-6 | Highest common factor / greatest common factor, lowest common multiple; Venn diagram method; contextual problems
num-powers-roots | Squares, cubes, powers & roots | N | KS3,GCSE-F,US-6-8 | 7-8 | 6-8 | Square and cube numbers, square and cube roots, index notation, estimating roots
num-index-laws | Laws of indices (integer powers) | N | KS3,GCSE-F,GCSE-H,US-6-8,US-Alg1 | 8-10 | 8-9 | Multiplying/dividing powers, power of a power, zero index, laws with numbers and algebra
num-negative-fractional-indices | Negative, zero & fractional indices (rational exponents) | N | GCSE-H,A-level,US-Alg1,US-Alg2 | 10-12 | 8-11 | Negative indices, fractional indices, combining with index laws, rational exponents and radicals
num-standard-form | Standard form (scientific notation) | N | KS3,GCSE-F,GCSE-H,US-6-8 | 8-10 | 8-8 | Writing numbers in standard form, ordering, four operations in standard form, contextual problems
num-fractions-equivalence | Equivalent fractions, simplifying & ordering | N | KS3,GCSE-F,US-6-8 | 7-7 | 6-6 | Equivalent fractions, simplest form, improper fractions and mixed numbers, ordering fractions
num-fractions-add-subtract | Adding & subtracting fractions and mixed numbers | N | KS3,GCSE-F,US-6-8 | 7-8 | 6-7 | Common denominators, mixed numbers, fractions of amounts in context
num-fractions-multiply-divide | Multiplying & dividing fractions | N | KS3,GCSE-F,US-6-8 | 7-8 | 6-7 | Fraction of an amount, multiplying and dividing fractions and mixed numbers, reciprocals; one quantity as a fraction of another (including results greater than 1)
num-fdp-conversions | Converting fractions, decimals & percentages | N | KS3,GCSE-F,US-6-8 | 7-8 | 6-7 | Converting between forms, ordering mixed forms, terminating decimals
num-rounding | Rounding: decimal places & significant figures | N | KS3,GCSE-F,US-6-8 | 7-9 | 6-7 | Rounding to nearest 10/100, decimal places, significant figures, appropriate accuracy
num-estimation | Estimation & approximation | N | KS3,GCSE-F,GCSE-H,US-6-8 | 7-10 | 6-8 | Estimating calculations by rounding to 1 s.f., over/under-estimates, checking answers
num-error-intervals | Error intervals & truncation | N | GCSE-F,GCSE-H | 10-11 | - | Error intervals from rounding and truncation using inequality notation
num-bounds-calculations | Upper & lower bounds in calculations | N | GCSE-H | 10-11 | - | Bounds of sums, differences, products, quotients; appropriate degree of accuracy
num-surds | Surds & radicals: simplifying & rationalising | N | GCSE-H,A-level,US-Alg1,US-Alg2 | 10-12 | 9-11 | Simplifying surds, four operations, rationalising denominators (including conjugates)
num-recurring-decimals | Recurring decimals to fractions | N | GCSE-H,US-6-8 | 10-11 | 8-8 | Converting recurring decimals to fractions algebraically, proof of conversion
num-rational-irrational | Rational & irrational numbers; the real number system | N | KS3,GCSE-H,US-6-8,US-Alg1 | 9-11 | 8-9 | Classifying numbers, sums/products of rationals and irrationals, approximating irrationals on a number line
num-counting-product-rule | Systematic listing & the product rule for counting | N | GCSE-F,GCSE-H,US-6-8 | 9-11 | 7-7 | Systematic listing, product rule, counting with restrictions

rat-ratio-basics | Ratio notation & simplifying ratios | R | KS3,GCSE-F,US-6-8 | 7-8 | 6-6 | Ratio notation, simplifying, equivalent ratios, ratios with units, ratio tables (US), 1:n form
rat-ratio-sharing | Sharing in a ratio & ratio problems | R | KS3,GCSE-F,GCSE-H,US-6-8 | 7-10 | 6-7 | Sharing in a given ratio, given one part or the difference, ratio problems
rat-ratio-fractions-combining | Ratios, fractions & combining ratios | R | GCSE-F,GCSE-H | 9-11 | - | Linking ratio and fractions, combining ratios (a:b and b:c), ratio changes after transfers
rat-unit-rates-best-buys | Unit rates, best buys & conversions | R | KS3,GCSE-F,US-6-8 | 7-9 | 6-7 | Unit rates, unit pricing/best buys, currency and unit conversion graphs/rates
rat-direct-proportion | Direct proportion & proportional relationships | R | KS3,GCSE-F,US-6-8 | 8-10 | 7-8 | Unitary method, recipes, proportional graphs through origin, constant of proportionality (US 7)
rat-inverse-proportion | Inverse proportion | R | KS3,GCSE-F,GCSE-H,US-Alg2 | 9-11 | 10-11 | Inverse proportion problems (workers/time), recognising inverse proportion graphs, inverse variation
rat-proportion-equations | Proportion & variation equations | R | GCSE-H,A-level,US-Alg1,US-Alg2 | 10-12 | 9-11 | y proportional to x^n and 1/x^n, finding k, direct/inverse/joint variation (US)
rat-percentages-of-amounts | Percentages of amounts & as a percentage | R | KS3,GCSE-F,US-6-8 | 7-8 | 6-7 | Finding percentages of amounts with and without calculator, one quantity as a percentage of another
rat-percentage-change | Percentage change & multipliers | R | KS3,GCSE-F,GCSE-H,US-6-8 | 8-10 | 7-7 | Increase/decrease by a percentage, multipliers, percentage change, percent error (US)
rat-reverse-percentages | Reverse percentages | R | KS3,GCSE-F,GCSE-H | 9-11 | - | Finding the original value after a percentage change
rat-financial-maths | Simple interest, tax, discounts & financial maths | R | KS3,GCSE-F,US-6-8 | 8-10 | 7-7 | Simple interest, VAT/sales tax, tips, markups, discounts, commission, wages, bills
rat-compound-growth-decay | Compound interest, growth & decay | R | GCSE-F,GCSE-H,US-Alg1 | 10-11 | 9-9 | Compound interest, depreciation, repeated percentage change, growth/decay formulas
rat-speed-distance-time | Speed, distance & time | R | KS3,GCSE-F,GCSE-H,US-6-8 | 8-11 | 6-7 | Speed/distance/time calculations, average speed, unit conversions of speed
rat-density-pressure | Density, pressure & other compound measures | R | KS3,GCSE-F,GCSE-H,US-Geo | 9-11 | 10-10 | Density = mass/volume, pressure = force/area, rates such as flow rate; density in modelling contexts (US Geometry)
rat-scale-drawings-maps | Scale drawings & map scales | R | KS3,GCSE-F,US-6-8 | 7-9 | 7-7 | Map scales (1:n), scale drawings, scale factor on lengths

alg-notation-simplifying | Algebraic notation & simplifying expressions | A | KS3,GCSE-F,US-6-8 | 7-8 | 6-7 | Notation conventions, writing expressions from words, collecting like terms, simplifying products, equivalent expressions
alg-substitution-formulae | Substitution & using formulae | A | KS3,GCSE-F,US-6-8 | 7-9 | 6-7 | Substituting positive/negative/fractional values into expressions and formulae; substituting into given kinematics formulae such as v = u + at (GCSE)
alg-expand-factorise-single | Expanding single brackets & factorising | A | KS3,GCSE-F,US-6-8 | 7-9 | 6-7 | Distributive property, expanding and simplifying, factorising using highest common factor
alg-expand-double-triple | Expanding double & triple brackets | A | KS3,GCSE-F,GCSE-H,US-Alg1 | 9-11 | 9-9 | Product of two/three binomials, squaring brackets, grid and FOIL methods
alg-polynomial-operations | Polynomials: adding, subtracting & multiplying | A | US-Alg1,US-Alg2 | - | 8-10 | Polynomial vocabulary (degree, leading coefficient, standard form), adding/subtracting/multiplying polynomials; factoring by grouping, sum/difference of cubes, quadratic-form factoring, proving polynomial identities
alg-factorising-quadratics | Factorising quadratics & difference of two squares | A | GCSE-F,GCSE-H,A-level,US-Alg1 | 9-12 | 9-9 | x^2+bx+c, ax^2+bx+c, difference of two squares, factoring completely
alg-linear-equations | Solving linear equations | A | KS3,GCSE-F,US-6-8,US-Alg1 | 7-10 | 6-9 | One-step to multi-step, unknowns on both sides, brackets, fractions; no/infinitely many solutions
alg-forming-equations | Forming & solving equations from context | A | KS3,GCSE-F,GCSE-H,US-6-8,US-Alg1 | 8-11 | 7-9 | Forming equations from words, angles, perimeters, ages, consecutive integers
alg-linear-inequalities | Linear inequalities | A | KS3,GCSE-F,GCSE-H,US-6-8,US-Alg1 | 9-11 | 6-9 | Number lines, solving linear inequalities, integer solutions, double inequalities, compound inequalities
alg-inequality-regions | Graphical inequalities & regions | A | GCSE-H,A-level,US-Alg1 | 10-12 | 9-9 | Regions bounded by lines/curves, solid vs dashed boundaries, systems of inequalities
alg-rearranging-formulae | Changing the subject (literal equations) | A | KS3,GCSE-F,GCSE-H,US-Alg1 | 9-11 | 9-9 | Rearranging formulae including powers/roots and subject appearing twice
alg-identities-equations | Identities, equations, formulae & expressions | A | KS3,GCSE-F,GCSE-H | 8-11 | - | Distinguishing vocabulary, identity symbol, show that, finding unknown coefficients in identities
alg-algebraic-proof | Algebraic proof (GCSE) | A | GCSE-H | 10-11 | - | Proofs with odd/even/consecutive integers, show that, divisibility arguments
alg-sequences-linear | Sequences & linear nth term (arithmetic sequences) | A | KS3,GCSE-F,US-Alg1 | 7-10 | 8-9 | Term-to-term rules, nth term of arithmetic sequences, is a number a term, sequences as functions (US)
alg-sequences-quadratic-geometric | Quadratic, geometric & special sequences | A | KS3,GCSE-F,GCSE-H,US-Alg1 | 9-11 | 9-9 | Quadratic nth term, geometric sequences, Fibonacci-type, triangular numbers; geometric sequences as exponential functions (US Algebra 1)
alg-coordinates-midpoint-distance | Coordinates, midpoint & distance between points | A | KS3,GCSE-F,GCSE-H,US-6-8,US-Geo | 7-11 | 6-10 | Four quadrants, midpoints, distance formula, lengths of line segments
alg-straight-line-graphs | Straight-line graphs: gradient (slope) & intercept | A | KS3,GCSE-F,US-6-8,US-Alg1 | 8-10 | 8-9 | Plotting lines, y=mx+c, gradient/slope from graph, intercept, horizontal/vertical lines
alg-equation-of-a-line | Finding the equation of a line; parallel lines | A | GCSE-F,GCSE-H,A-level,US-Alg1 | 10-12 | 8-9 | Line from gradient and point or two points, point-slope and standard form (US), ax+by+c=0, parallel lines
alg-perpendicular-lines | Perpendicular lines | A | GCSE-H,A-level,US-Geo | 10-12 | 9-10 | Perpendicular gradients, perpendicular bisector equations
alg-real-life-graphs | Real-life graphs: distance–time, conversion & rates | A | KS3,GCSE-F,GCSE-H,US-6-8 | 7-11 | 6-8 | Interpreting graphs in context, distance-time, conversion graphs, gradient as a rate; dependent vs independent variables; linking a table, a graph and an equation (US 6)
alg-gradient-area-under-graph | Gradients of curves & areas under graphs | A | GCSE-H | 10-11 | - | Tangent estimates of gradient, area under graphs with trapezia, velocity-time interpretation
alg-simultaneous-linear | Simultaneous linear equations (systems) | A | KS3,GCSE-F,GCSE-H,A-level,US-6-8,US-Alg1,US-Alg2 | 9-12 | 8-11 | Elimination, substitution, graphical solution, forming from context, three variables (US Alg 2)
alg-simultaneous-nonlinear | Simultaneous equations: one linear, one non-linear | A | GCSE-H,A-level,US-Alg2 | 10-12 | 10-11 | Linear with quadratic or circle, interpreting intersections
alg-quadratic-equations-factorising | Solving quadratics by factorising & square roots | A | GCSE-F,GCSE-H,US-Alg1 | 10-11 | 9-9 | Zero product property, factorising to solve, square-root method
alg-quadratic-formula | The quadratic formula | A | GCSE-H,A-level,US-Alg1,US-Alg2 | 10-12 | 9-10 | Using the formula, surd answers, rounding, choosing a method
alg-completing-the-square | Completing the square & turning points | A | GCSE-H,A-level,US-Alg1,US-Alg2 | 10-12 | 9-10 | Completing the square, vertex form, turning points, solving by completing the square
alg-quadratic-graphs | Quadratic graphs: roots, intercepts & turning points | A | KS3,GCSE-F,GCSE-H,US-Alg1 | 9-11 | 9-9 | Plotting/sketching parabolas, roots, axis of symmetry, vertex, graphical solutions
alg-quadratic-inequalities | Quadratic inequalities | A | GCSE-H,A-level,US-Alg2,US-Precalc | 10-12 | 10-12 | Solving using sketches, set notation, interval answers; polynomial and rational inequalities with sign charts (US Precalc)
alg-graph-shapes | Recognising graphs: cubic, reciprocal & exponential | A | GCSE-F,GCSE-H | 10-11 | - | Shapes of linear, quadratic, cubic, reciprocal, exponential graphs; plotting from tables
alg-graph-transformations | Transformations of graphs | A | GCSE-H,A-level,US-Alg1,US-Alg2,US-Precalc | 11-12 | 9-11 | f(x)+a, f(x+a), af(x), f(ax), reflections, combined transformations, parent functions (US)
alg-functions-basics | Functions: notation, domain & range | A | KS3,GCSE-F,GCSE-H,A-level,US-6-8,US-Alg1 | 7-12 | 8-9 | Function notation, evaluating, domain/range, mappings, is it a function (vertical line test); function machines, inputs and outputs, reversing a function machine
alg-key-features-functions | Key features of functions & average rate of change | A | US-Alg1,US-Alg2,US-Precalc | - | 9-11 | Intercepts, increasing/decreasing intervals, relative max/min, end behavior, even/odd, average rate of change
alg-composite-inverse-functions | Composite & inverse functions | A | GCSE-H,A-level,US-Alg2,US-Precalc | 11-12 | 10-11 | Composite functions, inverse functions, graphs of inverses, domain restrictions, one-one/many-one; sum, difference, product and quotient of functions and their domains
alg-algebraic-fractions | Algebraic fractions (rational expressions) | A | GCSE-H,A-level,US-Alg2 | 10-12 | 10-11 | Simplifying, four operations, solving equations with algebraic fractions
alg-iteration | Iteration & iterative formulae | A | GCSE-H | 11-11 | - | Iterative formulae, rearranging to iterative form, change of sign
alg-circle-equations | Equations of circles & tangents | A | GCSE-H,A-level,US-Geo,US-Precalc | 11-12 | 10-11 | x^2+y^2=r^2, (x-a)^2+(y-b)^2=r^2, completing the square for centre/radius, tangents, chords
alg-absolute-value | Absolute value equations & inequalities | A | US-Alg1,US-Alg2 | - | 9-11 | Solving |ax+b|=c, absolute value inequalities (and/or), graphing absolute value functions
alg-piecewise-functions | Piecewise & step functions | A | US-Alg1,US-Alg2,US-Precalc | - | 9-11 | Evaluating, graphing, writing piecewise functions, step (greatest integer) functions
alg-linear-exponential-models | Linear vs exponential models | A | US-Alg1 | - | 9-9 | Constant difference vs constant ratio, writing models from data, interpreting parameters
alg-radical-equations | Radical equations & extraneous solutions | A | US-Alg1,US-Alg2 | - | 9-11 | Solving square-root and cube-root equations, extraneous solutions, rational exponent equations; graphing square-root and cube-root functions, domain and range, transformations
alg-synthetic-division | Synthetic division | A | US-Alg2,US-Precalc | - | 10-11 | Synthetic division by x-c, remainder theorem connection, finding zeros; Rational Root Theorem, Descartes rule of signs
alg-rational-functions | Rational functions: asymptotes, holes & graphs | A | US-Alg2,US-Precalc | - | 10-12 | Vertical/horizontal/slant asymptotes, holes, intercepts, graphing rational functions
alg-conic-sections | Conic sections: parabolas, ellipses & hyperbolas | A | US-Geo,US-Alg2,US-Precalc | - | 10-12 | Standard forms, focus/directrix, foci, vertices, identifying conics, completing the square; parabola from focus and directrix (US Geometry)

geo-angle-facts | Angle facts: lines, points & triangles | G | KS3,GCSE-F,US-6-8 | 7-8 | 7-7 | Measuring/drawing angles, angles on a line/at a point, vertically opposite, triangle angle sum, isosceles triangles, supplementary/complementary (US); exterior angle of a triangle equals the sum of the interior opposite angles
geo-parallel-lines-angles | Angles in parallel lines (transversals) | G | KS3,GCSE-F,US-6-8,US-Geo | 7-9 | 8-9 | Alternate, corresponding, co-interior (same-side interior) angles, reasons
geo-polygon-angles | Interior & exterior angles of polygons | G | KS3,GCSE-F,US-6-8,US-Geo | 8-10 | 8-9 | Interior angle sum, regular polygons, exterior angles, finding number of sides
geo-shape-properties | Properties of 2D shapes & symmetry | G | KS3,GCSE-F,US-6-8 | 7-8 | 6-7 | Triangles and quadrilaterals properties, line and rotational symmetry, classification hierarchies
geo-constructions-loci | Constructions & loci | G | KS3,GCSE-F,GCSE-H,US-6-8,US-Geo | 8-11 | 7-10 | Perpendicular bisector, angle bisector, perpendicular from a point, triangles, loci and regions; copying a segment/angle, parallel line through a point, inscribed equilateral triangle, square and regular hexagon; conditions that determine a unique triangle (US 7)
geo-units-measures | Units of measure & conversions (metric and customary) | G | KS3,GCSE-F,US-6-8,US-Alg1 | 7-10 | 6-9 | Metric conversions, customary units (US), area and volume unit conversions, time; dimensional analysis and conversion factors for rates, choosing units and accuracy (US Algebra 1)
geo-perimeter-area | Perimeter & area of 2D shapes | G | KS3,GCSE-F,US-6-8 | 7-9 | 6-7 | Rectangles, triangles, parallelograms, trapezia (trapezoids), compound shapes
geo-circles | Circumference & area of circles | G | KS3,GCSE-F,US-6-8 | 8-10 | 7-7 | Circumference, area, semicircles, quarter circles, answers in terms of pi; parts of a circle (centre, radius, chord, diameter, circumference, tangent, arc, sector, segment)
geo-arcs-sectors | Arc length & sector area | G | GCSE-F,GCSE-H,US-Geo | 10-11 | 9-10 | Arc length and sector area in degrees, perimeter of sectors, reverse problems
geo-3d-shapes-nets | 3D shapes, nets, plans & elevations | G | KS3,GCSE-F,US-6-8,US-Geo | 7-10 | 6-10 | Faces/edges/vertices, nets, plans and elevations, cross-sections (US 7); isometric drawings; solids generated by rotating 2D shapes (US Geometry)
geo-volume-prisms | Volume of cuboids, prisms & cylinders | G | KS3,GCSE-F,US-6-8,US-Geo | 8-10 | 6-9 | Volume of cuboids, prisms, cylinders, capacity, compound solids
geo-surface-area | Surface area of prisms & cylinders | G | KS3,GCSE-F,US-6-8 | 8-10 | 6-7 | Surface area of cuboids, prisms, cylinders using nets
geo-pyramids-cones-spheres | Pyramids, cones, spheres & frustums | G | GCSE-F,GCSE-H,US-6-8,US-Geo | 10-11 | 8-10 | Volume and surface area of pyramids, cones, spheres, hemispheres, frustums, Cavalieri's principle (US)
geo-transformations | Transformations: reflection, rotation, translation & enlargement | G | KS3,GCSE-F,GCSE-H,US-6-8,US-Geo | 7-11 | 8-10 | Reflection, rotation, translation by vectors, enlargement incl. fractional/negative scale factors, dilations, describing transformations; combinations of transformations, invariant points, what changes and what stays the same
geo-congruence | Congruent triangles | G | KS3,GCSE-F,GCSE-H,US-6-8,US-Geo | 8-11 | 8-10 | SSS, SAS, ASA/AAS, RHS (HL), proving congruence, congruence via rigid motions
geo-similarity | Similar shapes: lengths | G | KS3,GCSE-F,GCSE-H,US-6-8,US-Geo | 9-11 | 8-10 | Similar triangles, scale factors, AA similarity, finding missing lengths; SSS and SAS similarity, side-splitter theorem and converse, angle bisector theorem, geometric mean in right triangles (US Geometry)
geo-similarity-area-volume | Similarity: area & volume scale factors | G | GCSE-H,US-Geo | 10-11 | 10-10 | Area scale factor k^2, volume scale factor k^3, mass/capacity problems
geo-pythagoras | Pythagoras' theorem | G | KS3,GCSE-F,US-6-8,US-Geo | 9-10 | 8-9 | Finding hypotenuse/shorter side, converse, applications, distance on grid
geo-trig-right-angled | Right-angled trigonometry (SOHCAHTOA) | G | KS3,GCSE-F,GCSE-H,US-Geo | 9-11 | 9-10 | Sine, cosine, tangent ratios, missing sides and angles, angles of elevation/depression; sine and cosine of complementary angles (cofunctions)
geo-trig-exact-values | Exact trigonometric values & special triangles | G | GCSE-F,GCSE-H,A-level,US-Geo | 10-12 | 10-11 | Exact values for 0, 30, 45, 60, 90 degrees, 30-60-90 and 45-45-90 triangles
geo-3d-pythagoras-trig | 3D Pythagoras & trigonometry | G | GCSE-H,US-6-8,US-Geo | 11-11 | 8-10 | Space diagonals, angle between line and plane in cuboids/pyramids; 3D Pythagoras in US Grade 8 and Geometry
geo-sine-cosine-rules | Sine rule & cosine rule (Law of Sines/Cosines) | G | GCSE-H,A-level,US-Geo,US-Precalc | 11-12 | 10-11 | Sine rule, cosine rule, ambiguous case, choosing the rule, bearings problems
geo-area-triangle-sine | Area of a triangle using ½ab sin C | G | GCSE-H,A-level,US-Geo,US-Precalc | 11-12 | 10-11 | Area formula, reverse problems, segments, combined with sine/cosine rules; Heron's formula
geo-bearings | Bearings | G | KS3,GCSE-F,GCSE-H | 8-11 | - | Three-figure bearings, back bearings, bearings with scale drawings and trigonometry
geo-circle-theorems | Circle theorems | G | GCSE-H,US-Geo | 10-11 | 10-10 | All GCSE circle theorems (inscribed angles, tangents, cyclic quadrilaterals, alternate segment), proofs; arc measure, angles formed by chords/secants/tangents, intersecting chord, secant-secant and secant-tangent products (US Geometry)
geo-vectors | Vectors & vector geometry | G | GCSE-F,GCSE-H | 10-11 | - | Column vectors, vector arithmetic, magnitude, vector geometry proofs (parallel, collinear)
geo-logic-conditionals | Logic, conditional statements & reasoning | G | US-Geo | - | 9-10 | Conditional, converse, inverse, contrapositive, biconditional, inductive vs deductive reasoning, counterexamples
geo-foundations-definitions | Points, lines, planes & angle relationships | G | US-Geo | - | 9-9 | Undefined terms, notation for segments/rays/lines, segment and angle addition postulates, midpoints and bisectors, classifying angles, adjacent angles, linear pairs, vertical angles, precise definitions
geo-two-column-proofs | Two-column proofs | G | US-Geo | - | 9-10 | Statements and reasons, algebraic properties, segment/angle proofs, triangle congruence proofs, CPCTC
geo-quadrilateral-theorems | Parallelograms & special quadrilaterals: theorems & proofs | G | US-Geo | - | 9-10 | Parallelogram properties and converses, diagonal properties of rectangles, rhombuses and squares, isosceles trapezoids, trapezoid midsegment, kites, proving a quadrilateral is a parallelogram
geo-triangle-centers | Triangle centers, bisectors & the triangle inequality | G | US-Geo | - | 9-10 | Perpendicular/angle bisector theorems, medians, centroid, circumcenter, incenter, orthocenter, triangle inequality, midsegments
geo-coordinate-proofs | Coordinate geometry proofs & partitioning segments | G | US-Geo | - | 9-10 | Classifying polygons with slope/distance, proving properties with coordinates, partitioning a segment in a ratio, perimeter/area on the plane

prob-basic-probability | Probability scale & single events | P | KS3,GCSE-F,US-6-8 | 7-9 | 7-7 | Probability scale, equally likely outcomes, P(not A), sum of probabilities = 1
prob-sample-spaces | Listing outcomes & sample space diagrams | P | KS3,GCSE-F,US-6-8 | 8-10 | 7-7 | Systematic listing, sample space diagrams, two-event outcomes, compound events (US 7)
prob-relative-frequency | Relative frequency, expected outcomes & simulation | P | KS3,GCSE-F,US-6-8 | 8-10 | 7-7 | Experimental probability, expected frequency, fairness, simulation; frequency trees (building, completing and reading them)
prob-venn-set-notation | Venn diagrams & set notation | P | KS3,GCSE-F,GCSE-H,US-Geo | 8-11 | 9-10 | Sets, union, intersection, complement, Venn diagram probabilities
prob-tree-diagrams | Tree diagrams & independent events | P | GCSE-F,GCSE-H,US-6-8,US-Geo | 10-11 | 7-10 | Tree diagrams, independent events, with/without replacement
prob-conditional | Conditional probability | P | GCSE-H,A-level,US-Geo,US-AP-Stats | 11-13 | 10-12 | Conditional probability from trees, tables, Venn diagrams, formula P(A|B)=P(A∩B)/P(B)
prob-rules-formal | Probability rules: addition, multiplication & independence | P | A-level,US-Geo,US-AP-Stats | 12-13 | 10-12 | General addition rule, mutually exclusive vs independent, testing independence
prob-permutations-combinations | Permutations & combinations | P | A-level,US-Geo,US-Alg2,US-Precalc,US-AP-Stats | 12-12 | 10-12 | Factorials, nPr, nCr, arrangements with restrictions, probability with combinations
prob-discrete-random-variables | Discrete random variables & expected value | P | A-level,US-AP-Stats | 12-12 | 11-12 | Probability distributions, expected value, variance and SD of discrete RVs, fair games; (A-level Maths: distributions and probabilities only; mean/variance is AP and Further)
prob-combining-random-variables | Combining & transforming random variables | P | US-AP-Stats | - | 11-12 | Linear transformations of RVs, sums/differences of independent RVs, means and variances
prob-binomial | The binomial distribution | P | A-level,US-AP-Stats | 12-12 | 11-12 | Conditions, binomial probabilities, cumulative probabilities, mean and SD (AP)
prob-geometric-distribution | The geometric distribution | P | US-AP-Stats | - | 11-12 | Conditions, P(X=k), cumulative, mean and SD
prob-normal-distribution | The normal distribution & z-scores | P | A-level,US-Alg2,US-AP-Stats | 13-13 | 10-12 | Normal curve properties, standardising, z-scores, finding probabilities and inverse normal, empirical rule, normal approx to binomial

stat-data-collection | Types of data, populations & samples | S | KS3,GCSE-F,US-6-8 | 7-10 | 6-7 | Qualitative/quantitative, discrete/continuous, statistical questions (US 6), populations and samples, random samples to draw inferences (US 7); capture-recapture estimates of population size
stat-sampling-methods | Sampling methods & bias | S | GCSE-F,A-level,US-AP-Stats | 10-12 | 11-12 | Simple random, systematic, stratified, cluster, quota, opportunity; sources of bias
stat-experimental-design | Experimental design & observational studies | S | US-Alg2,US-AP-Stats | - | 10-12 | Observational study vs experiment, randomization, control, blocking, matched pairs, confounding, scope of inference; simulation-based margin of error and randomization tests
stat-averages-range | Mean, median, mode & range | S | KS3,GCSE-F,US-6-8 | 7-9 | 6-6 | Averages and range from lists, choosing averages, missing values from mean
stat-averages-frequency-tables | Averages from frequency tables & grouped data | S | KS3,GCSE-F,GCSE-H,A-level | 9-12 | - | Mean/median/mode from frequency tables, estimated mean from grouped data, modal class, interpolation
stat-charts-diagrams | Bar charts, pictograms, pie charts & line graphs | S | KS3,GCSE-F,US-6-8 | 7-9 | 6-6 | Drawing and interpreting bar charts, composite/dual bar charts, pictograms, pie charts, line graphs
stat-stem-leaf-dot-plots | Stem-and-leaf diagrams, dot plots & simple histograms | S | KS3,GCSE-F,US-6-8 | 8-10 | 6-6 | Ordered and back-to-back stem-and-leaf, dot plots, equal-width histograms (US 6)
stat-quartiles-box-plots | Quartiles, IQR, box plots & outliers | S | GCSE-H,A-level,US-6-8,US-Alg1,US-AP-Stats | 10-12 | 6-12 | Quartiles, IQR, box plots, five-number summary, 1.5 IQR outlier rule; data cleaning (missing values, errors, deciding whether to remove outliers)
stat-cumulative-frequency | Cumulative frequency graphs | S | GCSE-H,A-level,US-AP-Stats | 10-12 | 11-12 | Cumulative frequency tables and curves, estimating median/quartiles/percentiles; cumulative relative frequency graphs and percentiles (AP Statistics)
stat-histograms | Histograms & frequency density | S | GCSE-H,A-level | 11-12 | - | Frequency density, unequal class widths, estimating frequencies from histograms
stat-frequency-polygons-time-series | Frequency polygons & time series | S | KS3,GCSE-F | 9-10 | - | Frequency polygons, time series graphs, trends and seasonality
stat-scatter-correlation | Scatter graphs & correlation | S | KS3,GCSE-F,GCSE-H,A-level,US-6-8,US-Alg1 | 9-12 | 8-9 | Scatter graphs, correlation types, line of best fit, interpolation/extrapolation, correlation vs causation
stat-mean-absolute-deviation | Mean absolute deviation | S | US-6-8 | - | 6-7 | Computing MAD, interpreting variability, comparing data sets with MAD
stat-standard-deviation | Variance, standard deviation & coding | S | A-level,US-Alg1,US-AP-Stats | 12-12 | 9-12 | Variance and SD from lists and summary statistics, coding, interpreting SD
stat-comparing-distributions | Comparing distributions | S | KS3,GCSE-F,GCSE-H,A-level,US-6-8,US-AP-Stats | 9-12 | 6-12 | Comparing centre and spread in context, shape (skew), choosing measures
stat-two-way-tables | Two-way tables & categorical data | S | KS3,GCSE-F,US-6-8,US-Alg1,US-AP-Stats | 8-10 | 8-12 | Two-way tables, joint/marginal/conditional relative frequencies, association, segmented bar charts
stat-linear-regression | Least-squares regression & residuals | S | A-level,US-Alg1,US-AP-Stats | 12-12 | 9-12 | Regression lines, interpreting slope/intercept, residuals and residual plots, r and r^2, influential points; transforming data to achieve linearity (log and power), judging with residual plots
stat-hypothesis-binomial | Hypothesis testing: binomial | S | A-level | 12-12 | - | Null/alternative hypotheses, significance level, critical regions, one- and two-tailed binomial tests
stat-hypothesis-normal-mean | Hypothesis testing: normal mean | S | A-level | 13-13 | - | Distribution of sample mean, testing a population mean with known variance
stat-hypothesis-correlation | Hypothesis testing: correlation (PMCC) | S | A-level | 13-13 | - | PMCC, testing for zero correlation using critical values, interpreting
stat-sampling-distributions | Sampling distributions & the Central Limit Theorem | S | US-AP-Stats | - | 11-12 | Sampling distributions of p-hat and x-bar, mean/SD, 10% condition, Large Counts, CLT, bias and variability; sampling distributions of differences in proportions and in means
stat-confidence-intervals-proportions | Confidence intervals for proportions | S | US-AP-Stats | - | 11-12 | One- and two-proportion z-intervals, interpreting confidence level, margin of error, sample size
stat-significance-tests-proportions | Significance tests for proportions & error types | S | US-AP-Stats | - | 11-12 | One- and two-proportion z-tests, p-values, Type I/II errors, power
stat-t-procedures | Inference for means: t-intervals & t-tests | S | US-AP-Stats | - | 11-12 | One-sample, paired and two-sample t-intervals and t-tests, conditions
stat-chi-square | Chi-square tests | S | US-AP-Stats | - | 11-12 | Goodness of fit, homogeneity, independence, expected counts, conditions
stat-regression-inference | Inference for regression slope | S | US-AP-Stats | - | 11-12 | t-interval and t-test for slope, conditions (LINER), interpreting computer output

calc-limits | Limits: graphical, numerical & algebraic | C | US-Precalc,US-AP-Calc | - | 11-12 | Limit notation, one-sided limits, estimating from graphs/tables, algebraic techniques (factoring, rationalizing)
calc-continuity | Continuity & the Intermediate Value Theorem | C | US-AP-Calc | - | 11-12 | Definition of continuity, removable/jump/infinite discontinuities, making piecewise functions continuous, IVT
calc-limits-infinity | Limits at infinity, asymptotes & the squeeze theorem | C | US-Precalc,US-AP-Calc | - | 11-12 | Limits at infinity, infinite limits, horizontal/vertical asymptotes, squeeze theorem
calc-first-principles | Differentiation from first principles | C | A-level,US-AP-Calc | 12-13 | 11-12 | Gradient of chord, limit definition of the derivative, derivatives of x^n, sin x, cos x from first principles, differentiability
calc-differentiation-basics | Differentiating powers & polynomials | C | A-level,US-AP-Calc | 12-12 | 11-12 | Power rule, negative and fractional powers, sums, second derivatives, notation
calc-tangents-normals | Tangents, normals & linear approximation | C | A-level,US-AP-Calc | 12-12 | 11-12 | Equations of tangents and normals, local linearization (US)
calc-stationary-points | Stationary points; increasing & decreasing functions | C | A-level,US-AP-Calc | 12-12 | 11-12 | Increasing/decreasing, stationary points, nature using second derivative or sign change, first derivative test
calc-concavity-inflection | Second derivative, concavity & points of inflection | C | A-level,US-AP-Calc | 13-13 | 11-12 | Concavity, points of inflection, second derivative test, graphs of f, f', f''
calc-mvt-evt | Mean Value Theorem, Extreme Value Theorem & curve analysis | C | US-AP-Calc | - | 11-12 | MVT, Rolle's theorem, EVT, candidates test for absolute extrema, justifications
calc-optimisation | Optimisation (optimization) problems | C | A-level,US-AP-Calc | 12-13 | 11-12 | Setting up and solving max/min problems, justifying the nature of the optimum
calc-derivatives-exp-log-trig | Derivatives of exponential, logarithmic & trig functions | C | A-level,US-AP-Calc | 13-13 | 11-12 | Derivatives of e^x, a^x, ln x, sin, cos, tan and reciprocal trig
calc-chain-product-quotient | Chain, product & quotient rules | C | A-level,US-AP-Calc | 13-13 | 11-12 | Chain rule, product rule, quotient rule, dx/dy = 1/(dy/dx), combining rules
calc-implicit-differentiation | Implicit differentiation | C | A-level,US-AP-Calc | 13-13 | 11-12 | Differentiating implicitly, gradients/tangents of implicit curves, second derivatives implicitly (AP)
calc-parametric-vector-differentiation | Parametric & vector-valued calculus | C | A-level,US-AP-Calc | 13-13 | 12-12 | dy/dx for parametric curves, tangents/normals, second derivatives (BC), velocity/speed for vector-valued functions (BC); integrating vector-valued functions, planar motion, displacement and total distance as the integral of speed (BC)
calc-inverse-function-derivatives | Derivatives of inverse functions & inverse trig | C | Further,US-AP-Calc | 13-13 | 11-12 | Derivative of an inverse function, derivatives of arcsin, arccos, arctan, integrals giving inverse trig
calc-related-rates | Related (connected) rates of change | C | A-level,US-AP-Calc | 13-13 | 11-12 | Chain rule for connected rates, volume/area/ladder/shadow problems
calc-lhopital | L'Hôpital's rule | C | US-AP-Calc | - | 11-12 | Indeterminate forms 0/0 and infinity/infinity, repeated application, justification of conditions
calc-integration-basics | Indefinite integration of powers & polynomials | C | A-level,US-AP-Calc | 12-12 | 11-12 | Reverse of differentiation, power rule, constant of integration, finding f from f' and a point
calc-definite-integrals-area | Definite integrals, area & average value | C | A-level,Further,US-AP-Calc | 12-13 | 11-12 | Evaluating definite integrals, area under curves, regions below the axis, area between curves, mean/average value of a function; area between curves integrating with respect to y
calc-riemann-sums | Riemann sums & summation notation for area | C | A-level,US-AP-Calc | 13-13 | 11-12 | Left/right/midpoint sums from graphs/tables, over/under-estimates, limit of Riemann sums as definite integral; integration as the limit of a sum (A-level)
calc-trapezium-rule | Trapezium (trapezoidal) rule | C | A-level,US-AP-Calc | 13-13 | 11-12 | Trapezium rule with equal/unequal intervals (AP tables), over/under-estimation via concavity
calc-ftc-accumulation | Fundamental Theorem of Calculus & accumulation functions | C | US-AP-Calc | - | 11-12 | FTC parts 1 and 2, derivative of an accumulation function, net change, interpreting accumulation from graphs
calc-integration-standard | Integrating exponential, reciprocal & trig functions | C | A-level,US-AP-Calc | 13-13 | 11-12 | Integrals of e^x, 1/x, sin, cos, sec^2, f(ax+b), f'(x)/f(x), trig identities in integration
calc-integration-substitution | Integration by substitution | C | A-level,US-AP-Calc | 13-13 | 11-12 | u-substitution for indefinite and definite integrals, changing limits; rewriting integrands by long division and completing the square (arctan forms)
calc-integration-by-parts | Integration by parts | C | A-level,US-AP-Calc | 13-13 | 12-12 | Integration by parts, repeated parts, ln x and e^x sin x type integrals, tabular method
calc-integration-partial-fractions | Integration using partial fractions | C | A-level,US-AP-Calc | 13-13 | 12-12 | Integrating rational functions via partial fractions, logarithmic answers, definite integrals
calc-differential-equations | Separable differential equations & modelling | C | A-level,US-AP-Calc | 13-13 | 11-12 | Forming and solving separable DEs, general/particular solutions, exponential growth/decay, logistic (BC)
calc-slope-fields-euler | Slope fields & Euler's method | C | US-AP-Calc | - | 11-12 | Drawing and interpreting slope fields, Euler's method (BC)
calc-volumes-revolution | Volumes of revolution & known cross-sections | C | Further,US-AP-Calc | 12-13 | 12-12 | Disc and washer methods about axes and other lines, volumes with known cross-sections (AP)
calc-improper-integrals | Improper integrals | C | Further,US-AP-Calc | 13-13 | 12-12 | Infinite limits, unbounded integrands, convergence/divergence
calc-arc-length | Arc length | C | US-AP-Calc | - | 12-12 | Arc length for y=f(x) and parametric curves (BC)
calc-series-convergence | Infinite series & convergence tests | C | US-AP-Calc | - | 12-12 | nth-term test, geometric, p-series, integral, comparison, limit comparison, ratio, alternating series tests, absolute/conditional convergence
calc-taylor-maclaurin | Taylor & Maclaurin series | C | Further,US-AP-Calc | 13-13 | 12-12 | Taylor polynomials, Maclaurin series of standard functions, manipulating series, Lagrange error bound (BC)
calc-power-series | Power series: radius & interval of convergence | C | US-AP-Calc | - | 12-12 | Radius and interval of convergence, endpoint testing, differentiating/integrating power series, alternating series error bound

pure-proof | Proof: deduction, exhaustion, counter-example & contradiction | PU | A-level | 12-13 | - | Proof by deduction, exhaustion, disproof by counter-example, proof by contradiction (irrationality of root 2, infinitely many primes)
pure-quadratic-functions-discriminant | Quadratic functions & the discriminant | PU | A-level,US-Alg2 | 12-12 | 10-11 | Discriminant and number of roots, quadratics in disguise, parameter problems (tangency, real roots)
pure-polynomials-factor-theorem | Algebraic division, factor & remainder theorems | PU | A-level,US-Alg2 | 12-12 | 10-11 | Polynomial long division, factor theorem, remainder theorem, fully factorising cubics
pure-curve-sketching | Sketching polynomial & reciprocal curves | PU | A-level,US-Alg2,US-Precalc | 12-12 | 10-12 | Cubics, quartics, repeated roots and multiplicity, end behaviour, reciprocal graphs, asymptotes, intersections
pure-modulus | The modulus function | PU | A-level | 13-13 | - | Graphs of |f(x)| and f(|x|), solving modulus equations and inequalities
pure-partial-fractions | Partial fractions | PU | A-level,Further,US-Precalc | 13-13 | 12-12 | Linear factors, repeated factors, improper fractions; irreducible quadratic factors (x^2 + a^2) and integrating to arctan (Further)
pure-binomial-expansion | Binomial expansion (positive integer powers) | PU | A-level,US-Alg2,US-Precalc | 12-12 | 10-12 | Pascal's triangle, nCr, expanding (a+b)^n, finding specific terms/coefficients, approximations
pure-binomial-general | General binomial expansion (rational powers) | PU | A-level | 13-13 | - | (1+x)^n for rational n, validity, (a+bx)^n, approximations, with partial fractions
pure-arithmetic-series | Arithmetic sequences & series | PU | A-level,US-Alg2,US-Precalc | 13-13 | 10-12 | nth term, sum formula, sigma with arithmetic series, problems
pure-geometric-series | Geometric sequences, series & sum to infinity | PU | A-level,US-Alg2,US-Precalc | 13-13 | 10-12 | nth term, sum of n terms, convergence and sum to infinity, finance applications
pure-sigma-recurrence | Sigma notation & recurrence relations | PU | A-level,US-Alg2,US-Precalc | 13-13 | 10-12 | Sigma notation, recursive definitions, increasing/decreasing/periodic sequences
pure-radians-unit-circle | Radians, the unit circle & small-angle approximations | PU | A-level,US-Alg2,US-Precalc | 12-13 | 10-12 | Radian measure, arc length/sector area in radians, unit circle, reference angles, small-angle approximations
pure-trig-graphs | Graphs of trigonometric functions | PU | GCSE-H,A-level,US-Alg2,US-Precalc | 11-12 | 10-12 | Graphs of sin, cos, tan, transformations, amplitude, period, phase shift, modelling periodic phenomena
pure-trig-identities-equations | Trigonometric identities & equations | PU | A-level,US-Precalc | 12-13 | 11-12 | tan = sin/cos, sin^2+cos^2=1, solving equations in given intervals, proving identities
pure-trig-reciprocal-inverse | Reciprocal & inverse trigonometric functions | PU | A-level,US-Precalc | 13-13 | 11-12 | sec, cosec, cot, their graphs and identities, arcsin/arccos/arctan with restricted domains
pure-trig-compound-angles | Compound & double angle formulae | PU | A-level,US-Precalc | 13-13 | 11-12 | Addition formulae, double angle formulae, exact values, solving equations and proving identities; half-angle, power-reducing, product-to-sum and sum-to-product identities (US Precalc)
pure-trig-harmonic-form | Harmonic form R cos(θ ± α) | PU | A-level | 13-13 | - | Expressing a cos x + b sin x as R cos(x ± α), max/min, solving equations
pure-exponentials-logs | Exponential functions & laws of logarithms | PU | A-level,US-Alg2,US-Precalc | 12-12 | 10-12 | Exponential graphs, e and ln, logarithm definition, laws of logs, change of base; solving logarithmic equations (extraneous solutions), continuous compounding A = Pe^(rt)
pure-exponential-modelling | Exponential equations, modelling & log graphs | PU | A-level,US-Alg2,US-Precalc | 12-13 | 10-12 | Solving a^x=b, exponential models, log-linear graphs for y=ax^n and y=kb^x
pure-vectors | Vectors in 2D & 3D | PU | A-level,US-Precalc | 12-13 | 11-12 | Magnitude/direction, unit vectors, position vectors, i j k notation, geometric problems, component form (US); dot product, angle between vectors, projection, work (US Precalc)
pure-parametric-equations | Parametric equations | PU | A-level,US-Precalc | 13-13 | 11-12 | Parametric curves, converting to Cartesian form, sketching, intersections, modelling
pure-numerical-methods | Numerical methods: locating roots, iteration & Newton–Raphson | PU | A-level | 13-13 | - | Change of sign, failure cases, iteration x=g(x), cobweb/staircase diagrams, Newton–Raphson

mech-modelling-units | Modelling, quantities & units in mechanics | M | A-level | 12-12 | - | SI units, scalars vs vectors, modelling assumptions (particle, light, inextensible, smooth)
mech-kinematics-graphs | Displacement–time & velocity–time graphs | M | A-level | 12-12 | - | Displacement/velocity/acceleration graphs, gradient and area interpretation
mech-suvat | Constant acceleration (suvat) | M | A-level | 12-12 | - | Derivation and use of suvat equations, multi-stage motion
mech-vertical-motion | Vertical motion under gravity | M | A-level | 12-12 | - | Free fall, objects projected vertically, time of flight, greatest height
mech-variable-acceleration | Variable acceleration (calculus kinematics) | M | A-level,US-AP-Calc | 12-13 | 11-12 | Using differentiation and integration for s, v, a; particle motion; speeding up/slowing down (AP)
mech-forces-newtons-laws | Forces & Newton's laws | M | A-level | 12-12 | - | Weight, normal reaction, tension, F=ma, Newton's three laws, lifts
mech-connected-particles | Connected particles & pulleys | M | A-level | 12-12 | - | Towing, pulleys, particles over smooth pegs, tension and acceleration
mech-resolving-equilibrium | Resolving forces, statics & inclined planes | M | A-level | 13-13 | - | Components of forces, equilibrium, inclined planes, resultant forces
mech-friction | Friction | M | A-level | 13-13 | - | F ≤ μR, limiting equilibrium, friction on slopes and in dynamics
mech-projectiles | Projectiles | M | A-level | 13-13 | - | Horizontal/vertical components, time of flight, range, max height, trajectory equation
mech-moments | Moments | M | A-level | 13-13 | - | Moments of forces, equilibrium of rods/beams, tilting, non-uniform rods, ladders
mech-vectors-2d-motion | 2D motion with vectors | M | A-level | 13-13 | - | Vector suvat, i j notation, variable acceleration with vectors, position and velocity vectors

fur-complex-numbers | Complex numbers: arithmetic & solving equations | F | Further,US-Alg2,US-Precalc | 12-12 | 10-12 | i, real/imaginary parts, four operations, conjugates, complex roots of quadratics
fur-argand-modulus-argument | Argand diagrams, modulus–argument form & loci | F | Further,US-Precalc | 12-12 | 11-12 | Argand diagram, modulus, argument, polar/trigonometric form, multiplying/dividing in mod-arg form, loci; regions in the Argand diagram defined by inequalities
fur-de-moivre-roots-unity | Exponential form, De Moivre's theorem & roots of unity | F | Further,US-Precalc | 13-13 | 12-12 | Euler's form, De Moivre, nth roots, roots of unity, trig identities via De Moivre
fur-roots-of-polynomials | Roots of polynomials & complex conjugate pairs | F | Further,US-Alg2,US-Precalc | 12-12 | 10-12 | Conjugate root theorem, fundamental theorem of algebra, sums/products of roots, transformed equations
fur-matrices-arithmetic | Matrix arithmetic & multiplication | F | Further,US-Precalc | 12-12 | 11-12 | Order, addition, scalar and matrix multiplication, identity, non-commutativity
fur-determinants-inverses | Determinants, inverses & systems of equations | F | Further,US-Precalc | 12-12 | 11-12 | 2x2 and 3x3 determinants, inverses, singular matrices, solving systems, geometric interpretation
fur-matrix-transformations | Linear transformations with matrices | F | Further,US-Precalc | 12-12 | 11-12 | Reflections, rotations, enlargements, stretches, shears, composition, invariant points/lines, area scale factor
fur-proof-by-induction | Proof by induction | F | Further | 12-13 | - | Induction for sums, divisibility, matrix powers, recurrence relations
fur-series-summation | Series: standard sums & method of differences | F | Further | 12-13 | - | Sums of r, r^2, r^3, method of differences
fur-vectors-lines-planes | Vector equations of lines & planes | F | Further | 12-13 | - | Vector/Cartesian equations of lines and planes, scalar product, angles, intersections, shortest distances; vector (cross) product, normal to a plane, area of a triangle/parallelogram
fur-polar-coordinates | Polar coordinates & curves | F | Further,US-Precalc,US-AP-Calc | 13-13 | 11-12 | Converting coordinates, sketching polar curves, area enclosed (Further and AP BC), tangents
fur-hyperbolic-functions | Hyperbolic functions | F | Further | 13-13 | - | sinh, cosh, tanh definitions, graphs, identities, inverse hyperbolic functions, calculus
fur-first-order-de | First-order differential equations: integrating factor | F | Further | 13-13 | - | Integrating factor method, modelling, particular solutions
fur-second-order-de | Second-order differential equations & SHM | F | Further | 13-13 | - | Auxiliary equations, complementary functions, particular integrals, SHM and damping; coupled first-order linear systems reduced to a second-order DE (e.g. predator-prey)
"""

STRAND_FILE = {
    "Number": "number", "Ratio & Proportion": "ratio-proportion", "Algebra": "algebra",
    "Geometry & Measures": "geometry-measures", "Probability": "probability",
    "Statistics": "statistics", "Calculus": "calculus", "Pure (A-level)": "pure",
    "Mechanics": "mechanics", "Further": "further",
}


def parse_range(s):
    s = s.strip()
    if s == "-":
        return None
    a, b = s.split("-")
    return [int(a), int(b)]


def load():
    topics = []
    for line in RAW.strip().splitlines():
        if not line.strip():
            continue
        tid, title, sc, stages, uk, us, scope = [p.strip() for p in line.split("|", 6)]
        stages = [s.strip() for s in stages.split(",")]
        assert all(s in STAGES for s in stages), (tid, stages)
        us_only = all(s.startswith("US-") for s in stages)
        topics.append({
            "id": tid, "title": title, "strand": STRANDS[sc], "stages": stages,
            "years": {"uk": parse_range(uk), "us": parse_range(us)},
            "convention": "US" if us_only else "UK",
            "scope": scope,
        })
    ids = [t["id"] for t in topics]
    assert len(ids) == len(set(ids)), "duplicate ids"
    return topics


if __name__ == "__main__":
    ts = load()
    out = pathlib.Path(__file__).resolve().parent.parent / "build" / "skeleton.json"
    out.parent.mkdir(exist_ok=True)
    out.write_text(json.dumps(ts, indent=1, ensure_ascii=False))
    from collections import Counter
    print(len(ts), Counter(t["strand"] for t in ts))
