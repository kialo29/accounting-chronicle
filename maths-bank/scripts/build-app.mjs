#!/usr/bin/env node
// Build the self-contained app: index.html (offline, full document) and build/artifact.html (page fragment
// for publishing). Both embed KaTeX (JS + CSS with woff2 fonts as data URIs) and the whole bank as JSON.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const K = path.join(ROOT, 'node_modules', 'katex', 'dist');
const read = (...p) => fs.readFileSync(path.join(...p), 'utf8');

let css = read(K, 'katex.min.css');
css = css.replace(/src:url\(fonts\/([^)]+)\.woff2\) format\("woff2"\)(,url\([^)]+\) format\("[a-z]+"\))*/g, (_, name) => {
  const b64 = fs.readFileSync(path.join(K, 'fonts', `${name}.woff2`)).toString('base64');
  return `src:url(data:font/woff2;base64,${b64}) format("woff2")`;
});
if (/url\(fonts\//.test(css)) throw new Error('unreplaced KaTeX font url');
const js = read(K, 'katex.min.js');

const topicsDoc = JSON.parse(read(ROOT, 'data', 'topics.json'));
const qdir = path.join(ROOT, 'data', 'questions');
const questions = fs.readdirSync(qdir).filter((f) => f.endsWith('.json')).flatMap((f) => JSON.parse(read(qdir, f)));
const order = new Map(topicsDoc.topics.map((t, i) => [t.id, i]));
questions.sort((a, b) => (order.get(a.topicId) ?? 1e9) - (order.get(b.topicId) ?? 1e9) || a.id.localeCompare(b.id));
const bank = { strands: topicsDoc.strands, stages: topicsDoc.stages, topics: topicsDoc.topics, questions };
const bankJson = JSON.stringify(bank).replace(/</g, '\\u003c').replace(/[\u2028\u2029]/g, (c) => `\\u${c.charCodeAt(0).toString(16)}`);

const tpl = read(ROOT, 'app', 'template.html');
const fill = (isArtifact) => tpl
  .replace('/*KATEX_CSS*/', () => css)
  .replace('/*KATEX_JS*/', () => js.replace(/<\/script/gi, '<\\/script'))
  .replace('/*BANK_JSON*/', () => bankJson)
  .replace('/*IS_ARTIFACT*/false', isArtifact ? 'true' : 'false');

const [head, body] = fill(false).split('<!--BODY-->');
const doc = `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n${head}</head>\n<body>\n${body}</body>\n</html>\n`;
fs.writeFileSync(path.join(ROOT, 'index.html'), doc);
fs.mkdirSync(path.join(ROOT, 'build'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'build', 'artifact.html'), fill(true).replace('<!--BODY-->', ''));
const mb = (s) => (Buffer.byteLength(s) / 1e6).toFixed(2);
console.log(`index.html ${mb(doc)} MB · ${topicsDoc.topics.length} topics · ${questions.length} questions`);
