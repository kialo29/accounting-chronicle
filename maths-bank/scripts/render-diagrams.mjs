#!/usr/bin/env node
// Render every SVG diagram of a topic (questions + worked examples) to PNG so it can be looked at.
//   node scripts/render-diagrams.mjs <topicId> [outDir]
// Writes <outDir>/<id>.png (default outDir: build/diagrams/<topicId>) and prints the paths.
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); } catch { ({ chromium } = require('/opt/node22/lib/node_modules/playwright')); }
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const id = process.argv[2];
const out = process.argv[3] || path.join(ROOT, 'build', 'diagrams', id);
fs.mkdirSync(out, { recursive: true });
const items = [];
const pf = path.join(ROOT, 'data', 'questions', 'parts', `${id}.json`);
if (fs.existsSync(pf)) for (const q of JSON.parse(fs.readFileSync(pf, 'utf8'))) if (q.diagram) items.push([q.id, q.diagram]);
const topic = JSON.parse(execFileSync('python3', [path.join(ROOT, 'scripts', 'show_topic.py'), id], { encoding: 'utf8' }));
(topic.workedExamples || []).forEach((w, i) => { if (w.diagram) items.push([`${id}-example${i + 1}`, w.diagram]); });
if (!items.length) { console.log('no diagrams'); process.exit(0); }
const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 2 });
for (const [qid, svg] of items) {
  await page.setContent(`<body style="margin:0;padding:8px;background:#fff;color:#111;font-family:sans-serif;display:inline-block">${svg}</body>`);
  const el = await page.$('svg');
  const file = path.join(out, `${qid}.png`);
  await el.screenshot({ path: file });
  console.log(file);
}
await browser.close();
