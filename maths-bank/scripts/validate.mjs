#!/usr/bin/env node
// Validator for the maths question bank.
//
//   node scripts/validate.mjs                       full bank: data/topics.json + data/questions/*.json
//   node scripts/validate.mjs --part <file.json>    one per-topic question part (data/questions/parts/<topicId>.json)
//   node scripts/validate.mjs --topics-part <file>  one strand's topic-detail part (data/topics-parts/<strand>.json)
//   add --quiet to print only the summary line, --json for machine-readable output
//
// Checks: schema, unique ids, cross-references (topics, prerequisites, linked topics, misconceptions),
// prerequisite graph is acyclic, $...$ / $$...$$ delimiters balance, every maths span parses in KaTeX,
// no stray LaTeX outside maths, no JSON escape damage (tab/form-feed/backspace characters), SVG diagrams
// are well-formed and safe, markdown tables are rectangular, and per-topic difficulty/type spread.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import katex from 'katex';
import { XMLValidator } from 'fast-xml-parser';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TYPES = ['fluency', 'reasoning', 'problem-solving', 'spot-the-mistake', 'exam-style', 'real-world', 'synoptic'];
const STAGES = ['KS3', 'GCSE-F', 'GCSE-H', 'A-level', 'Further', 'US-6-8', 'US-Alg1', 'US-Geo', 'US-Alg2', 'US-Precalc', 'US-AP-Calc', 'US-AP-Stats'];
const STRANDS = ['Number', 'Algebra', 'Ratio & Proportion', 'Geometry & Measures', 'Probability', 'Statistics', 'Calculus', 'Pure (A-level)', 'Mechanics', 'Further'];

const args = process.argv.slice(2);
const flag = (f) => args.includes(f);
const opt = (f) => { const i = args.indexOf(f); return i >= 0 ? args[i + 1] : null; };

const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

function readJSON(file) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    err(path.relative(ROOT, file), `cannot parse JSON: ${e.message}`);
    return null;
  }
}

// ---------- text / maths ----------

// Split a string into text and maths segments. `\$` is a literal dollar sign.
export function tokenize(s) {
  const out = [];
  let i = 0, buf = '';
  while (i < s.length) {
    if (s[i] === '\\' && s[i + 1] === '$') { buf += '$'; i += 2; continue; }
    if (s[i] === '$') {
      const display = s[i + 1] === '$';
      const open = display ? 2 : 1;
      let j = i + open, found = -1;
      while (j < s.length) {
        if (s[j] === '\\') { j += 2; continue; }
        if (s[j] === '$') {
          if (display && s[j + 1] === '$') { found = j; break; }
          if (!display) { found = j; break; }
        }
        j++;
      }
      if (found < 0) return { error: `unclosed ${display ? '$$' : '$'} starting near "${s.slice(i, i + 40)}"` };
      if (buf) out.push({ t: 'text', v: buf });
      buf = '';
      out.push({ t: display ? 'display' : 'inline', v: s.slice(i + open, found) });
      i = found + open;
      continue;
    }
    buf += s[i++];
  }
  if (buf) out.push({ t: 'text', v: buf });
  return { tokens: out };
}

const katexCache = new Map();
function checkMath(where, tex, display) {
  const key = (display ? 'D' : 'I') + tex;
  if (katexCache.has(key)) { const m = katexCache.get(key); if (m) err(where, m); return; }
  let msg = null;
  try {
    katex.renderToString(tex, { displayMode: display, throwOnError: true, strict: 'ignore', trust: false });
  } catch (e) {
    msg = `KaTeX error in $${tex.slice(0, 80)}$: ${String(e.message).slice(0, 160)}`;
  }
  katexCache.set(key, msg);
  if (msg) err(where, msg);
}

function checkText(where, s, { required = true } = {}) {
  if (s === undefined || s === null || s === '') {
    if (required) err(where, 'missing or empty');
    return;
  }
  if (typeof s !== 'string') { err(where, 'must be a string'); return; }
  // eslint-disable-next-line no-control-regex
  const ctrl = s.match(/[\x00-\x09\x0b-\x1f]/);
  if (ctrl) {
    const names = { '\t': 'TAB (\\t: was this \\times/\\theta/\\tan/\\text?)', '\f': 'FORM FEED (\\f: was this \\frac?)', '\b': 'BACKSPACE (\\b: was this \\beta/\\begin?)', '\r': 'CR (\\r: was this \\right/\\rho?)' };
    err(where, `control character ${names[ctrl[0]] || JSON.stringify(ctrl[0])} - LaTeX backslashes must be doubled in JSON`);
  }
  const tk = tokenize(s);
  if (tk.error) { err(where, tk.error); return; }
  checkTables(where, tk.tokens.map((t) => (t.t === 'text' ? t.v : t.t === 'inline' ? 'M' : '\nM\n')).join(''));
  for (const tok of tk.tokens) {
    if (tok.t === 'text') {
      const cmd = tok.v.match(/\\[a-zA-Z]+/);
      if (cmd) err(where, `LaTeX command ${cmd[0]} outside $...$`);
    } else {
      if (tok.t === 'inline' && tok.v.includes('\n')) err(where, `newline inside inline maths $${tok.v.slice(0, 50)}$ (was this \\neq/\\nu/\\nabla/\\not written with a single backslash?)`);
      if (!tok.v.trim()) err(where, 'empty maths span');
      checkMath(where, tok.v, tok.t === 'display');
    }
  }
}

function checkTables(where, text) {
  const lines = text.split('\n');
  let block = [];
  const flush = () => {
    if (block.length) {
      const cols = block.map((l) => splitRow(l).length);
      if (block.length < 2 || !/^\s*\|?\s*:?-{2,}/.test(block[1])) err(where, 'markdown table needs a header row and a |---| separator row');
      if (new Set(cols).size > 1) err(where, `markdown table rows have different column counts (${cols.join(',')})`);
    }
    block = [];
  };
  for (const l of lines) { if (/^\s*\|.*\|\s*$/.test(l)) block.push(l); else flush(); }
  flush();
}
function splitRow(l) { return l.trim().replace(/^\|/, '').replace(/\|$/, '').split('|'); }

function checkSvg(where, svg) {
  if (typeof svg !== 'string' || !svg.trim().startsWith('<svg')) { err(where, 'diagram must be an inline <svg> string'); return; }
  const v = XMLValidator.validate(svg);
  if (v !== true) err(where, `diagram SVG not well-formed: ${v.err?.msg} (line ${v.err?.line})`);
  if (!/viewBox\s*=/.test(svg)) err(where, 'diagram SVG needs a viewBox');
  if (!/xmlns="http:\/\/www\.w3\.org\/2000\/svg"/.test(svg)) err(where, 'diagram SVG needs xmlns="http://www.w3.org/2000/svg"');
  if (/<script|\son[a-z]+\s*=|javascript:|<foreignObject|<image/i.test(svg)) err(where, 'diagram SVG contains script/event handlers/foreignObject/image');
  if (/href\s*=\s*"(?!#)/.test(svg)) err(where, 'diagram SVG has an external href');
  if (svg.length > 12000) warn(where, `diagram is large (${svg.length} chars)`);
}

// ---------- topics ----------

function loadSkeleton() {
  const f = path.join(ROOT, 'build', 'skeleton.json');
  return fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : null;
}

function checkTopicDetail(t, allIds, where) {
  if (!Array.isArray(t.prerequisites)) err(where, 'prerequisites must be an array');
  else for (const p of t.prerequisites) {
    if (!allIds.has(p)) err(where, `prerequisite "${p}" is not a topic id`);
    if (p === t.id) err(where, 'topic lists itself as a prerequisite');
  }
  checkText(`${where}.keyIdea`, t.keyIdea);
  if (!Array.isArray(t.workedExamples) || t.workedExamples.length < 1 || t.workedExamples.length > 2) err(where, 'workedExamples must have 1-2 entries');
  else t.workedExamples.forEach((w, i) => { checkText(`${where}.workedExamples[${i}].question`, w.question); checkText(`${where}.workedExamples[${i}].solution`, w.solution); if (w.diagram) checkSvg(`${where}.workedExamples[${i}].diagram`, w.diagram); });
  if (!Array.isArray(t.misconceptions) || t.misconceptions.length < 2 || t.misconceptions.length > 4) err(where, 'misconceptions must have 2-4 entries');
  else t.misconceptions.forEach((m, i) => {
    if (m.id !== `m${i + 1}`) err(where, `misconception ${i} id must be "m${i + 1}"`);
    checkText(`${where}.misconceptions[${i}].text`, m.text);
    checkText(`${where}.misconceptions[${i}].correction`, m.correction);
  });
}

function checkAcyclic(topics) {
  const byId = new Map(topics.map((t) => [t.id, t]));
  const state = new Map();
  const cycles = [];
  const visit = (id, stack) => {
    if (state.get(id) === 2) return;
    if (state.get(id) === 1) { cycles.push([...stack.slice(stack.indexOf(id)), id].join(' -> ')); return; }
    state.set(id, 1); stack.push(id);
    for (const p of byId.get(id)?.prerequisites || []) if (byId.has(p)) visit(p, stack);
    stack.pop(); state.set(id, 2);
  };
  for (const t of topics) visit(t.id, []);
  for (const c of cycles) err('topics', `prerequisite cycle: ${c}`);
}

function checkTopicsFile(file) {
  const data = readJSON(file);
  if (!data) return null;
  const topics = data.topics;
  if (!Array.isArray(topics)) { err('topics.json', 'missing topics array'); return null; }
  const ids = new Set();
  for (const t of topics) {
    const w = `topic ${t.id}`;
    if (!/^[a-z]+(-[a-z0-9]+)+$/.test(t.id || '')) err(w, 'bad id');
    if (ids.has(t.id)) err(w, 'duplicate topic id');
    ids.add(t.id);
  }
  for (const t of topics) {
    const w = `topic ${t.id}`;
    checkText(`${w}.title`, t.title);
    if (!STRANDS.includes(t.strand)) err(w, `bad strand ${t.strand}`);
    if (!Array.isArray(t.stages) || !t.stages.length || t.stages.some((s) => !STAGES.includes(s))) err(w, `bad stages ${t.stages}`);
    if (!t.years || (!t.years.uk && !t.years.us)) err(w, 'years.uk or years.us required');
    if (!['UK', 'US'].includes(t.convention)) err(w, 'convention must be UK or US');
    checkTopicDetail(t, ids, w);
    for (const l of t.leadsTo || []) if (!ids.has(l)) err(w, `leadsTo "${l}" is not a topic id`);
  }
  checkAcyclic(topics);
  return topics;
}

// ---------- questions ----------

function checkQuestion(q, topicById, where) {
  const t = topicById.get(q.topicId);
  if (!t) { err(where, `topicId "${q.topicId}" not found`); return; }
  if (!new RegExp(`^${q.topicId}-q\\d{2}$`).test(q.id || '')) err(where, `id must look like ${q.topicId}-q01`);
  if (!Number.isInteger(q.difficulty) || q.difficulty < 1 || q.difficulty > 5) err(where, 'difficulty must be an integer 1-5');
  if (!TYPES.includes(q.type)) err(where, `type must be one of ${TYPES.join('|')}`);
  checkText(`${where}.question`, q.question);
  checkText(`${where}.hint`, q.hint);
  checkText(`${where}.answer`, q.answer);
  checkText(`${where}.solution`, q.solution);
  if (q.type === 'exam-style') {
    if (!Number.isInteger(q.marks) || q.marks < 1) err(where, 'exam-style questions need integer marks >= 1');
  } else if (q.marks !== undefined) err(where, 'marks only allowed on exam-style questions');
  if (q.parts !== undefined) {
    if (!Array.isArray(q.parts) || !q.parts.length) err(where, 'parts must be a non-empty array');
    else {
      let sum = 0, allMarked = true;
      q.parts.forEach((p, i) => {
        if (!p.label) err(where, `parts[${i}] needs a label`);
        checkText(`${where}.parts[${i}].prompt`, p.prompt);
        if (p.marks === undefined) allMarked = false; else if (!Number.isInteger(p.marks) || p.marks < 1) err(where, `parts[${i}].marks must be a positive integer`); else sum += p.marks;
      });
      if (q.type === 'exam-style' && allMarked && sum !== q.marks) err(where, `part marks sum to ${sum} but marks = ${q.marks}`);
      if (q.type === 'exam-style' && !allMarked) err(where, 'every part of an exam-style question needs marks');
    }
  }
  if (!Array.isArray(q.linkedTopicIds)) err(where, 'linkedTopicIds must be an array (may be empty)');
  else {
    for (const l of q.linkedTopicIds) {
      if (!topicById.has(l)) err(where, `linkedTopicId "${l}" not found`);
      if (l === q.topicId) err(where, 'linkedTopicIds must not include its own topic');
    }
    if (q.type === 'synoptic' && !q.linkedTopicIds.length) err(where, 'synoptic question needs linkedTopicIds');
  }
  if (q.misconceptionIds !== undefined) {
    const valid = new Set((t.misconceptions || []).map((m) => m.id));
    if (!Array.isArray(q.misconceptionIds)) err(where, 'misconceptionIds must be an array');
    else for (const m of q.misconceptionIds) if (!valid.has(m)) err(where, `misconceptionId "${m}" not defined on topic ${t.id}`);
  }
  if (q.variationSet !== undefined && (typeof q.variationSet !== 'string' || !q.variationSet)) err(where, 'variationSet must be a non-empty string');
  if (q.diagram !== undefined) checkSvg(`${where}.diagram`, q.diagram);
  const known = new Set(['id', 'topicId', 'difficulty', 'type', 'question', 'parts', 'hint', 'answer', 'solution', 'marks', 'linkedTopicIds', 'misconceptionIds', 'variationSet', 'diagram', 'calculator']);
  for (const k of Object.keys(q)) if (!known.has(k)) err(where, `unknown field "${k}"`);
  if (q.calculator !== undefined && typeof q.calculator !== 'boolean') err(where, 'calculator must be true/false');
}

function checkTopicSpread(topic, qs) {
  const w = `topic ${topic.id}`;
  if (qs.length < 15 || qs.length > 20) err(w, `has ${qs.length} questions (need 15-20)`);
  const diffs = new Set(qs.map((q) => q.difficulty));
  for (let d = 1; d <= 5; d++) if (!diffs.has(d)) err(w, `no difficulty ${d} question`);
  const types = new Set(qs.map((q) => q.type));
  if (types.size < 4) err(w, `only ${types.size} question types (need >= 4)`);
  const syn = qs.filter((q) => q.type === 'synoptic').length;
  if (syn < 2) err(w, `only ${syn} synoptic questions (need >= 2)`);
  if (!types.has('exam-style')) err(w, 'no exam-style question');
  for (const m of topic.misconceptions || []) if (!qs.some((q) => (q.misconceptionIds || []).includes(m.id))) err(w, `misconception ${m.id} not targeted by any question`);
  const vs = {};
  for (const q of qs) if (q.variationSet) vs[q.variationSet] = (vs[q.variationSet] || 0) + 1;
  if (!Object.values(vs).some((n) => n >= 3)) err(w, 'needs a variation-theory sequence: >= 3 questions sharing a variationSet');
  const ids = qs.map((q) => q.id);
  if (new Set(ids).size !== ids.length) err(w, 'duplicate question ids');
}

// ---------- modes ----------

function topicsFromSkeletonAndParts() {
  // For part-mode validation before topics.json exists: merge skeleton + topic-detail parts.
  const sk = loadSkeleton() || [];
  const byId = new Map(sk.map((t) => [t.id, { ...t }]));
  const dir = path.join(ROOT, 'data', 'topics-parts');
  if (fs.existsSync(dir)) for (const f of fs.readdirSync(dir).filter((f) => f.endsWith('.json'))) {
    try { for (const d of JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'))) if (byId.has(d.id)) Object.assign(byId.get(d.id), d); } catch { /* reported in topics-part mode */ }
  }
  const tf = path.join(ROOT, 'data', 'topics.json');
  if (fs.existsSync(tf)) { try { for (const t of JSON.parse(fs.readFileSync(tf, 'utf8')).topics) byId.set(t.id, t); } catch { /* ignore */ } }
  return byId;
}

function runPart(file) {
  const topicById = topicsFromSkeletonAndParts();
  const qs = readJSON(file);
  if (!qs) return;
  if (!Array.isArray(qs)) { err(file, 'part file must be a JSON array of questions'); return; }
  const topicId = path.basename(file, '.json');
  const topic = topicById.get(topicId);
  if (!topic) { err(file, `file name must be <topicId>.json; "${topicId}" not found`); return; }
  qs.forEach((q, i) => { checkQuestion(q, topicById, q.id || `${topicId}[${i}]`); if (q.topicId !== topicId) err(q.id, `topicId must be ${topicId}`); });
  checkTopicSpread(topic, qs);
}

function runTopicsPart(file) {
  const sk = loadSkeleton();
  const ids = new Set(sk.map((t) => t.id));
  const arr = readJSON(file);
  if (!arr) return;
  if (!Array.isArray(arr)) { err(file, 'must be an array'); return; }
  const seen = new Set();
  for (const t of arr) {
    if (!ids.has(t.id)) err(file, `unknown topic id ${t.id}`);
    if (seen.has(t.id)) err(file, `duplicate ${t.id}`);
    seen.add(t.id);
    checkTopicDetail(t, ids, `topic ${t.id}`);
  }
}

function runFull() {
  const topics = checkTopicsFile(path.join(ROOT, 'data', 'topics.json'));
  if (!topics) return;
  const topicById = new Map(topics.map((t) => [t.id, t]));
  const qdir = path.join(ROOT, 'data', 'questions');
  const byTopic = new Map(topics.map((t) => [t.id, []]));
  const allIds = new Set();
  const files = fs.readdirSync(qdir).filter((f) => f.endsWith('.json'));
  const strandFile = (s) => ({ Number: 'number', 'Ratio & Proportion': 'ratio-proportion', Algebra: 'algebra', 'Geometry & Measures': 'geometry-measures', Probability: 'probability', Statistics: 'statistics', Calculus: 'calculus', 'Pure (A-level)': 'pure', Mechanics: 'mechanics', Further: 'further' })[s];
  for (const f of files) {
    const qs = readJSON(path.join(qdir, f));
    if (!Array.isArray(qs)) { err(f, 'must be an array'); continue; }
    for (const q of qs) {
      const w = q.id || '(no id)';
      if (allIds.has(q.id)) err(w, 'duplicate question id across bank');
      allIds.add(q.id);
      checkQuestion(q, topicById, w);
      const t = topicById.get(q.topicId);
      if (t && `${strandFile(t.strand)}.json` !== f) err(w, `is in ${f} but topic strand is ${t.strand}`);
      if (byTopic.has(q.topicId)) byTopic.get(q.topicId).push(q);
    }
  }
  for (const t of topics) checkTopicSpread(t, byTopic.get(t.id));
  return { topics: topics.length, questions: allIds.size };
}

const part = opt('--part');
const tpart = opt('--topics-part');
let summary = {};
if (part) runPart(path.resolve(part));
else if (tpart) runTopicsPart(path.resolve(tpart));
else summary = runFull() || {};

if (flag('--json')) {
  console.log(JSON.stringify({ ok: !errors.length, errors, warnings, ...summary }, null, 1));
} else {
  if (!flag('--quiet')) { for (const e of errors) console.log('ERROR  ' + e); for (const w of warnings) console.log('warn   ' + w); }
  console.log(`${errors.length ? 'FAIL' : 'OK'}: ${errors.length} errors, ${warnings.length} warnings${summary.topics ? `, ${summary.topics} topics, ${summary.questions} questions` : ''}`);
}
process.exit(errors.length ? 1 : 0);
