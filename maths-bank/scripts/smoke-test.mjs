#!/usr/bin/env node
// Headless browser smoke test of index.html: renders every view, checks KaTeX/SVG output, filters,
// worksheet generation and print layout, and saves screenshots + a print PDF to build/screens/.
//   node scripts/smoke-test.mjs            (needs Playwright; Chromium at /opt/pw-browsers)
import { createRequire } from 'node:module';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); } catch { ({ chromium } = require('/opt/node22/lib/node_modules/playwright')); }

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'build', 'screens');
fs.mkdirSync(OUT, { recursive: true });
const url = 'file://' + path.join(ROOT, 'index.html');
const problems = [];
const ok = (cond, msg) => { if (!cond) problems.push(msg); console.log(`${cond ? 'PASS' : 'FAIL'}  ${msg}`); };

const browser = await chromium.launch();
for (const [label, viewport, scheme] of [['desktop-light', { width: 1300, height: 900 }, 'light'], ['phone-dark', { width: 390, height: 844 }, 'dark']]) {
  const page = await browser.newPage({ viewport, colorScheme: scheme });
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error' && !/fonts\.(googleapis|gstatic)/.test(m.text())) errors.push(m.text()); });
  await page.goto(url);
  await page.waitForSelector('.topic-card');
  ok(errors.length === 0, `${label}: no JS errors on load ${errors.join(' | ')}`);
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  ok(overflow <= 1, `${label}: no horizontal page scroll on browse (overflow ${overflow}px)`);
  await page.screenshot({ path: path.join(OUT, `${label}-browse.png`) });

  // search + filters
  await page.fill('#q', 'quadratic');
  await page.waitForTimeout(400);
  const tTopics = await page.textContent('#tab-topics');
  ok(/\((\d+)\)/.test(tTopics) && +tTopics.match(/\((\d+)\)/)[1] > 0, `${label}: search finds topics (${tTopics})`);
  await page.click('#tab-questions');
  const nq = await page.locator('#results .qcard').count();
  ok(nq > 0, `${label}: search finds questions (${nq} shown)`);
  if (label === 'desktop-light') {
    await page.selectOption('#f-stage', 'A-level');
    await page.click('#f-diff button[data-d="5"]');
    const tq = await page.textContent('#tab-questions');
    ok(/\(\d/.test(tq), `${label}: stage + difficulty filter (${tq})`);
    await page.click('#f-reset');
    await page.selectOption('#f-year', 'us8');
    const tt = await page.textContent('#tab-topics');
    ok(+tt.match(/\((\d+)\)/)[1] > 0, `${label}: grade filter (${tt})`);
    await page.click('#f-reset');
  }

  // a topic page with diagrams
  const topicWithDiagram = await page.evaluate(() => {
    const b = JSON.parse(document.getElementById('bank').textContent);
    const q = b.questions.find((x) => x.diagram && x.topicId.startsWith('geo-')) || b.questions.find((x) => x.diagram) || b.questions[0];
    return q ? q.topicId : b.topics[0].id;
  });
  await page.evaluate((id) => { location.hash = 'topic-' + id; }, topicWithDiagram);
  await page.waitForSelector('#view-topic .qcard');
  const katexCount = await page.locator('#view-topic .katex').count();
  const katexErr = await page.locator('#view-topic .katex-error').count();
  const svgCount = await page.locator('#view-topic .diagram svg').count();
  ok(katexCount > 0 && katexErr === 0, `${label}: topic ${topicWithDiagram} renders LaTeX (${katexCount} formulas, ${katexErr} errors)`);
  ok(svgCount > 0, `${label}: topic ${topicWithDiagram} shows SVG diagrams (${svgCount})`);
  const card = page.locator('#view-topic .qcard').first();
  await card.locator('[data-reveal="hint"]').click();
  await card.locator('[data-reveal="solution"]').click();
  ok(await card.locator('.reveal.hint').isVisible() && await card.locator('.reveal.solution').isVisible() && !(await card.locator('.reveal.answer').count()), `${label}: hint and solution reveal separately`);
  const ov2 = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  ok(ov2 <= 1, `${label}: no horizontal page scroll on topic page (overflow ${ov2}px)`);
  await page.screenshot({ path: path.join(OUT, `${label}-topic.png`), fullPage: false });
  await card.screenshot({ path: path.join(OUT, `${label}-question.png`) });

  // learning path
  await page.evaluate(() => { location.hash = 'path-calc-integration-by-parts'; });
  await page.waitForSelector('ol.path li');
  const steps = await page.locator('ol.path li').count();
  ok(steps > 3, `${label}: learning path for integration by parts has ${steps} steps`);
  await page.screenshot({ path: path.join(OUT, `${label}-path.png`) });

  // worksheet
  await page.evaluate((id) => { location.hash = 'topic-' + id; }, 'alg-quadratic-formula');
  await page.waitForSelector('#tp-ws');
  await page.click('#tp-ws');
  await page.waitForSelector('#ws-sheet ol.wsq li');
  const wsN = await page.locator('#ws-sheet ol.wsq > li').count();
  const ansN = await page.locator('#ws-answers ol.wsq > li').count();
  ok(wsN > 0 && wsN === ansN, `${label}: worksheet generated (${wsN} questions, ${ansN} answers)`);
  await page.screenshot({ path: path.join(OUT, `${label}-worksheet.png`) });
  if (label === 'desktop-light') {
    await page.evaluate(() => document.body.setAttribute('data-print', 'worksheet'));
    await page.emulateMedia({ media: 'print' });
    await page.pdf({ path: path.join(OUT, 'worksheet-print.pdf'), format: 'A4' });
    await page.screenshot({ path: path.join(OUT, 'print-worksheet.png'), fullPage: true });
    const hiddenChrome = await page.evaluate(() => getComputedStyle(document.querySelector('.masthead')).display === 'none' && getComputedStyle(document.getElementById('ws-answers')).display === 'none');
    ok(hiddenChrome, 'print: worksheet-only print hides app chrome and answer sheet');
    await page.evaluate(() => document.body.setAttribute('data-print', 'answers'));
    await page.pdf({ path: path.join(OUT, 'answers-print.pdf'), format: 'A4' });
    const ansOnly = await page.evaluate(() => getComputedStyle(document.getElementById('ws-sheet')).display === 'none' && getComputedStyle(document.getElementById('ws-answers')).display !== 'none');
    ok(ansOnly, 'print: answer-sheet print shows only the answers');
    await page.emulateMedia({ media: 'screen' });
  }
  ok(errors.length === 0, `${label}: no JS errors after interaction ${errors.join(' | ')}`);
  await page.close();
}

// Render every question once to catch KaTeX failures in the browser build.
const page = await browser.newPage();
await page.goto(url);
const res = await page.evaluate(() => {
  const b = JSON.parse(document.getElementById('bank').textContent);
  let bad = [];
  const fields = (q) => [q.question, q.hint, q.answer, q.solution, ...(q.parts || []).map((p) => p.prompt)];
  const re = /\$\$([\s\S]+?)\$\$|\$((?:\\.|[^$\\])+?)\$/g;
  for (const q of b.questions) for (const f of fields(q)) {
    const s = String(f || '').replace(/\\\$/g, '');
    let m; while ((m = re.exec(s))) { try { katex.renderToString(m[1] || m[2], { throwOnError: true, displayMode: !!m[1], strict: 'ignore' }); } catch (e) { bad.push(q.id + ': ' + e.message.slice(0, 80)); } }
  }
  return { n: b.questions.length, bad: bad.slice(0, 20), nbad: bad.length };
});
ok(res.nbad === 0, `browser KaTeX render of all ${res.n} questions: ${res.nbad} failures ${res.bad.join(' | ')}`);
await browser.close();
console.log(problems.length ? `\n${problems.length} problem(s)` : '\nAll smoke tests passed');
process.exit(problems.length ? 1 : 0);
