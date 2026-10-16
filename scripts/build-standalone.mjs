#!/usr/bin/env node
/* Bundle the budget app into a single self-contained HTML file.
   Usage: node scripts/build-standalone.mjs [outDir]
   Writes <outDir>/budget-standalone.html (full document, open from disk)
   and   <outDir>/budget-fragment.html   (no doctype/html/head/body, for hosts that wrap pages). */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(here, '..', 'src', 'budget');
const outDir = path.resolve(process.argv[2] || path.join(here, '..', 'dist'));
fs.mkdirSync(outDir, { recursive: true });

const read = (f) => fs.readFileSync(path.join(src, f), 'utf8');

/** Turn an ES module into an IIFE that returns its exports. */
function moduleToIife(name, code, deps) {
  const exported = [];
  let out = code
    // import * as X from './y.js'  ->  const X = __y;
    .replace(/^import \* as (\w+) from '\.\/(\w+)\.js';\s*$/gm, (m, alias, mod) => `const ${alias} = __${mod};`)
    // import { a, b } from './y.js' (possibly multi-line) -> const { a, b } = __y;
    .replace(/^import \{([^}]+)\} from '\.\/(\w+)\.js';/gm, (m, names, mod) => `const {${names}} = __${mod};`)
    .replace(/^export (async function|function|const|let|class) (\w+)/gm, (m, kw, id) => {
      exported.push(id);
      return `${kw} ${id}`;
    });
  if (/^export /m.test(out)) throw new Error(`Unhandled export form in ${name}`);
  if (/^import /m.test(out)) throw new Error(`Unhandled import form in ${name}`);
  return `const __${name} = (() => {\n${out}\nreturn { ${exported.join(', ')} };\n})();\n`;
}

const modules = ['engine', 'charts', 'storage', 'sample'].map((m) => moduleToIife(m, read(`${m}.js`)));
const appCode = read('app.js')
  .replace(/^import \* as (\w+) from '\.\/(\w+)\.js';\s*$/gm, (m, alias, mod) => `const ${alias} = __${mod};`)
  .replace(/^import \{([^}]+)\} from '\.\/(\w+)\.js';/gm, (m, names, mod) => `const {${names}} = __${mod};`);
if (/^import |^export /m.test(appCode)) throw new Error('Unhandled import/export in app.js');

const bundle = `${modules.join('\n')}\n// ---- app ----\n${appCode}`;
if (bundle.includes('</script')) throw new Error('Bundle contains a closing script tag');

const appCss = read('budget.css');

const shellCss = `
/* Layout: a single centred column, app fills the width; site tokens carried over from styles.css. */
:root {
  --orange-500: #E86A33; --orange-600: #D55A25; --orange-100: #FEF3ED; --orange-50: #FFFAF7;
  --slate-900: #1A1D23; --slate-800: #2D3139; --slate-700: #3D424D; --slate-600: #5A6070; --slate-500: #737A8C;
  --slate-400: #9CA3B4; --slate-300: #C4CAD6; --slate-200: #E2E5EB; --slate-100: #F3F4F7; --slate-50: #F9FAFB;
  --white: #FFFFFF; --page-bg: #FFFFFF;
  --font-display: 'Fraunces', Georgia, serif;
  --font-body: 'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --shadow-sm: 0 1px 2px rgba(26, 29, 35, 0.05); --shadow-md: 0 4px 12px rgba(26, 29, 35, 0.08); --shadow-lg: 0 12px 32px rgba(26, 29, 35, 0.12);
  --radius-sm: 6px; --radius-md: 10px; --radius-lg: 16px; --radius-xl: 24px;
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --slate-50: #1a1a2e; --slate-100: #252541; --slate-200: #2d2d4a; --slate-300: #3d3d5c; --slate-400: #6b6b8a;
    --slate-500: #8a8aa3; --slate-600: #a3a3b8; --slate-700: #c4c4d4; --slate-800: #e0e0eb; --slate-900: #f5f5fa;
    --white: #20203a; --page-bg: #1a1a2e; --orange-100: #3a2a24; --orange-50: #24202c; color-scheme: dark;
  }
}
:root[data-theme="dark"] {
  --slate-50: #1a1a2e; --slate-100: #252541; --slate-200: #2d2d4a; --slate-300: #3d3d5c; --slate-400: #6b6b8a;
  --slate-500: #8a8aa3; --slate-600: #a3a3b8; --slate-700: #c4c4d4; --slate-800: #e0e0eb; --slate-900: #f5f5fa;
  --white: #20203a; --page-bg: #1a1a2e; --orange-100: #3a2a24; --orange-50: #24202c; color-scheme: dark;
}
*, *::before, *::after { box-sizing: border-box; }
body { margin: 0; font-family: var(--font-body); font-size: 16px; line-height: 1.55; color: var(--slate-800); background: var(--page-bg); -webkit-font-smoothing: antialiased; }
h1, h2, h3, h4 { font-family: var(--font-display); font-weight: 600; line-height: 1.25; color: var(--slate-900); margin: 0; text-wrap: balance; }
a { color: inherit; text-decoration: none; }
.page { max-width: 1240px; margin: 0 auto; padding-block: 0 3rem; padding-left: max(16px, env(safe-area-inset-left, 0px)); padding-right: max(16px, env(safe-area-inset-right, 0px)); }
.bg-topbar { display: flex; align-items: center; justify-content: space-between; gap: 1rem; padding: 1rem 0 0.75rem; border-bottom: 1px solid var(--slate-200); margin-bottom: 1rem; }
.bg-topbar .brand { display: flex; flex-direction: column; line-height: 1.1; }
.bg-topbar .brand-kicker { font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: var(--orange-500); }
.bg-topbar .brand-name { font-family: var(--font-display); font-size: 1.35rem; font-weight: 700; color: var(--slate-900); }
.theme-toggle { background: none; border: 1px solid var(--slate-200); font-size: 1.1rem; cursor: pointer; padding: 0.35rem 0.55rem; border-radius: 999px; color: var(--slate-800); }
.theme-toggle:focus-visible { outline: 2px solid var(--orange-500); outline-offset: 2px; }
.intro { color: var(--slate-600); max-width: 62ch; margin: 0 0 1.25rem; }
.btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.7rem 1.25rem; font-family: var(--font-body); font-size: 0.92rem; font-weight: 600; border-radius: var(--radius-md); cursor: pointer; transition: background 0.2s ease; border: none; }
.btn-primary { background: var(--orange-500); color: #fff; }
.btn-primary:hover { background: var(--orange-600); }
.btn-secondary { background: var(--slate-100); color: var(--slate-800); }
.btn-secondary:hover { background: var(--slate-200); }
.btn-outline { background: transparent; color: var(--slate-800); border: 2px solid var(--slate-300); }
.btn:focus-visible, button:focus-visible { outline: 2px solid var(--orange-500); outline-offset: 2px; }
.page-foot { margin-top: 2rem; font-size: 0.82rem; color: var(--slate-500); border-top: 1px solid var(--slate-200); padding-top: 1rem; }
@media (prefers-reduced-motion: reduce) { * { transition: none !important; animation: none !important; } }
`;

const themeScript = `
(() => {
  const KEY = 'ac-budget-theme';
  const rootEl = document.documentElement;
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const stored = () => { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
  const isDark = () => {
    const t = rootEl.getAttribute('data-theme');
    if (t === 'dark' || t === 'light') return t === 'dark';
    return mq.matches;
  };
  const apply = () => {
    document.body.classList.toggle('dark-mode', isDark());
    const b = document.getElementById('theme-toggle');
    if (b) b.textContent = isDark() ? '\\u2600\\uFE0F' : '\\uD83C\\uDF19';
  };
  const s = stored();
  if (s === 'dark' || s === 'light') rootEl.setAttribute('data-theme', s);
  apply();
  mq.addEventListener('change', apply);
  new MutationObserver(apply).observe(rootEl, { attributes: true, attributeFilter: ['data-theme'] });
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    rootEl.setAttribute('data-theme', next);
    try { localStorage.setItem(KEY, next); } catch (e) { /* ignore */ }
    apply();
  });
})();
`;

const body = `<div class="page">
  <header class="bg-topbar">
    <div class="brand"><span class="brand-kicker">Personal finance</span><span class="brand-name">Budget &amp; Cash Flow</span></div>
    <button class="theme-toggle" id="theme-toggle" type="button" aria-label="Toggle dark mode">🌙</button>
  </header>
  <p class="intro">Plan income and spending, forecast your cash day by day, record what actually happens, and keep an income statement, cash budget and balance sheet. Everything stays in this browser; use Settings → Your data to back up or move it.</p>
  <div id="budget-app" class="budget-app"><p>Loading your budget…</p></div>
  <footer class="page-foot">Budget &amp; Cash Flow · a tool from The Accounting Chronicle. Figures are only as good as the plan you give it; this is not financial advice.</footer>
</div>
<script>${themeScript}</script>
<script type="module">
${bundle}
</script>`;

const head = `<title>Budget &amp; Cash Flow</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Source+Sans+3:wght@400;500;600&display=swap">
<style>
${shellCss}
${appCss}
</style>`;

const fragment = `${head}\n${body}\n`;
const full = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
${head}
</head>
<body>
${body}
</body>
</html>
`;

fs.writeFileSync(path.join(outDir, 'budget-fragment.html'), fragment);
fs.writeFileSync(path.join(outDir, 'budget-standalone.html'), full);
console.log(`Wrote ${path.join(outDir, 'budget-standalone.html')} (${(full.length / 1024).toFixed(0)} KB)`);
console.log(`Wrote ${path.join(outDir, 'budget-fragment.html')}`);
