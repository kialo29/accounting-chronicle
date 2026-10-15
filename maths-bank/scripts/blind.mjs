#!/usr/bin/env node
// Print a topic's questions WITHOUT hints, answers or solutions, for blind verification.
//   node scripts/blind.mjs <topicId>
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const id = process.argv[2];
const file = path.join(ROOT, 'data', 'questions', 'parts', `${id}.json`);
const qs = JSON.parse(fs.readFileSync(file, 'utf8'));
for (const q of qs) {
  console.log(`=== ${q.id}  [difficulty ${q.difficulty}, ${q.type}${q.marks ? `, ${q.marks} marks` : ''}]`);
  console.log(q.question);
  for (const p of q.parts || []) console.log(`  (${p.label}) ${p.prompt}${p.marks ? `  [${p.marks}]` : ''}`);
  if (q.diagram) console.log(`  [diagram SVG]\n${q.diagram}`);
  console.log();
}
