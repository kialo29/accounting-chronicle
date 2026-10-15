// ---------------------------------------------------------------
// charts.js – small SVG charts with hover tooltips, no dependencies
// ---------------------------------------------------------------
import { svg, h, fmt, clear } from './util.js';

const SERIES = ['var(--s1)', 'var(--s2)', 'var(--s3)', 'var(--s4)', 'var(--s5)'];

function niceMax(v) {
  if (v <= 0) return 10;
  const p = Math.pow(10, Math.floor(Math.log10(v)));
  const n = v / p;
  const m = n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10;
  return m * p;
}

function tooltip(host) {
  let tip = host.querySelector('.chart-tip');
  if (!tip) { tip = h('div.chart-tip', { hidden: true }); host.appendChild(tip); }
  return {
    show(x, y, lines) {
      clear(tip); for (const l of lines) tip.appendChild(h('div', l));
      tip.hidden = false;
      const r = host.getBoundingClientRect();
      const tw = tip.offsetWidth, th = tip.offsetHeight;
      let left = x + 12, top = y - th - 8;
      if (left + tw > r.width) left = x - tw - 12;
      if (top < 0) top = y + 12;
      tip.style.left = left + 'px'; tip.style.top = top + 'px';
    },
    hide() { tip.hidden = true; },
  };
}

/**
 * Grouped bar chart.
 * data: { labels: [...], series: [{ name, values: [...] }] }
 */
export function barChart(data, { height = 220, money = true, legend = true } = {}) {
  const host = h('div.chart');
  const W = 600, H = height, padL = 44, padR = 8, padT = 12, padB = 28;
  const max = niceMax(Math.max(1, ...data.series.flatMap(s => s.values)));
  const min = Math.min(0, ...data.series.flatMap(s => s.values));
  const lo = min < 0 ? -niceMax(-min) : 0;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const y = v => padT + plotH * (1 - (v - lo) / (max - lo));
  const el = svg('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart-svg', role: 'img', 'aria-label': 'Bar chart' });
  const n = data.labels.length, ns = data.series.length;
  const groupW = plotW / Math.max(1, n), barW = Math.min(28, (groupW * 0.7) / ns);
  // grid
  const ticks = 4;
  for (let i = 0; i <= ticks; i++) {
    const v = lo + (max - lo) * i / ticks, yy = y(v);
    el.appendChild(svg('line', { x1: padL, x2: W - padR, y1: yy, y2: yy, class: 'grid' }));
    el.appendChild(svg('text', { x: padL - 6, y: yy + 4, class: 'tick', 'text-anchor': 'end' }, money ? fmt.money(v, { compact: true }) : fmt.num(v)));
  }
  const tip = tooltip(host);
  data.labels.forEach((lab, i) => {
    const gx = padL + groupW * i + (groupW - barW * ns - 2 * (ns - 1)) / 2;
    el.appendChild(svg('text', { x: padL + groupW * i + groupW / 2, y: H - 8, class: 'tick', 'text-anchor': 'middle' }, lab));
    data.series.forEach((s, si) => {
      const v = s.values[i] || 0, x = gx + si * (barW + 2);
      const top = Math.min(y(v), y(0)), hgt = Math.abs(y(v) - y(0));
      const r = svg('rect', { x, y: top, width: barW, height: Math.max(hgt, v ? 1 : 0), rx: 3, fill: SERIES[si % SERIES.length], class: 'bar' });
      const hit = svg('rect', { x: x - 2, y: padT, width: barW + 4, height: plotH, fill: 'transparent',
        onMousemove: e => { const b = host.getBoundingClientRect(); tip.show(e.clientX - b.left, e.clientY - b.top, [h('b', lab), `${s.name}: ${money ? fmt.money(v) : fmt.num(v)}`]); },
        onMouseleave: () => tip.hide() });
      el.append(r, hit);
    });
  });
  host.appendChild(el);
  if (legend && ns > 1) host.appendChild(h('div.legend', data.series.map((s, i) => h('span', h('i', { style: { background: SERIES[i % SERIES.length] } }), s.name))));
  return host;
}

/** Single line chart with area fill. data: { labels, values } */
export function lineChart(data, { height = 200, money = true, name = 'Value' } = {}) {
  const host = h('div.chart');
  const W = 600, H = height, padL = 44, padR = 12, padT = 12, padB = 28;
  const max = niceMax(Math.max(1, ...data.values));
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const n = data.values.length;
  const x = i => padL + (n > 1 ? plotW * i / (n - 1) : plotW / 2);
  const y = v => padT + plotH * (1 - v / max);
  const el = svg('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart-svg', role: 'img', 'aria-label': name });
  for (let i = 0; i <= 4; i++) { const v = max * i / 4, yy = y(v); el.appendChild(svg('line', { x1: padL, x2: W - padR, y1: yy, y2: yy, class: 'grid' })); el.appendChild(svg('text', { x: padL - 6, y: yy + 4, class: 'tick', 'text-anchor': 'end' }, money ? fmt.money(v, { compact: true }) : fmt.num(v))); }
  const pts = data.values.map((v, i) => [x(i), y(v)]);
  const path = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  el.appendChild(svg('path', { d: `${path} L${x(n - 1).toFixed(1)} ${y(0)} L${x(0).toFixed(1)} ${y(0)} Z`, class: 'area' }));
  el.appendChild(svg('path', { d: path, class: 'line' }));
  data.labels.forEach((lab, i) => el.appendChild(svg('text', { x: x(i), y: H - 8, class: 'tick', 'text-anchor': i === 0 ? 'start' : i === n - 1 ? 'end' : 'middle' }, lab)));
  const last = pts[n - 1];
  if (last) el.appendChild(svg('circle', { cx: last[0], cy: last[1], r: 4.5, class: 'dot-end' }));
  const tip = tooltip(host);
  const cross = svg('line', { y1: padT, y2: padT + plotH, class: 'cross', hidden: true });
  const dot = svg('circle', { r: 5, class: 'dot', hidden: true });
  el.append(cross, dot);
  el.appendChild(svg('rect', { x: padL, y: padT, width: plotW, height: plotH, fill: 'transparent',
    onMousemove: e => {
      const b = el.getBoundingClientRect(); const sx = (e.clientX - b.left) * W / b.width;
      let i = Math.round((sx - padL) / plotW * (n - 1)); i = Math.max(0, Math.min(n - 1, i));
      cross.setAttribute('x1', x(i)); cross.setAttribute('x2', x(i)); cross.removeAttribute('hidden');
      dot.setAttribute('cx', x(i)); dot.setAttribute('cy', y(data.values[i])); dot.removeAttribute('hidden');
      const hb = host.getBoundingClientRect(); tip.show(e.clientX - hb.left, e.clientY - hb.top, [h('b', data.labels[i]), `${name}: ${money ? fmt.money(data.values[i]) : fmt.num(data.values[i])}`]);
    },
    onMouseleave: () => { tip.hide(); cross.setAttribute('hidden', ''); dot.setAttribute('hidden', ''); } }));
  host.appendChild(el);
  return host;
}

/** Donut: items [{label, value}] – top 4 + Other */
export function donutChart(items, { money = true, size = 160 } = {}) {
  const host = h('div.chart.donut');
  const sorted = [...items].filter(i => i.value > 0).sort((a, b) => b.value - a.value);
  const top = sorted.slice(0, 4); const rest = sorted.slice(4);
  if (rest.length) top.push({ label: 'Other', value: rest.reduce((a, x) => a + x.value, 0) });
  const total = top.reduce((a, x) => a + x.value, 0) || 1;
  const R = 50, r = 34, C = 2 * Math.PI * R;
  const el = svg('svg', { viewBox: '0 0 120 120', class: 'chart-svg donut-svg', style: `max-width:${size}px`, role: 'img', 'aria-label': 'Breakdown' });
  let offset = 0;
  const tip = tooltip(host);
  top.forEach((it, i) => {
    const frac = it.value / total;
    const c = svg('circle', { cx: 60, cy: 60, r: R, fill: 'none', stroke: SERIES[i % SERIES.length], 'stroke-width': R - r, 'stroke-dasharray': `${Math.max(0, frac * C - 2)} ${C}`, 'stroke-dashoffset': -offset * C, transform: 'rotate(-90 60 60)',
      onMousemove: e => { const b = host.getBoundingClientRect(); tip.show(e.clientX - b.left, e.clientY - b.top, [h('b', it.label), `${money ? fmt.money(it.value) : fmt.num(it.value)} · ${fmt.pct(frac)}`]); }, onMouseleave: () => tip.hide() });
    el.appendChild(c); offset += frac;
  });
  el.appendChild(svg('text', { x: 60, y: 57, class: 'donut-label', 'text-anchor': 'middle' }, money ? fmt.money(total, { compact: true }) : fmt.num(total)));
  el.appendChild(svg('text', { x: 60, y: 71, class: 'tick', 'text-anchor': 'middle' }, 'total'));
  const legend = h('div.legend.vertical', top.map((it, i) => h('span', h('i', { style: { background: SERIES[i % SERIES.length] } }), `${it.label} `, h('b', fmt.pct(it.value / total)))));
  host.append(el, legend);
  return host;
}

/** Horizontal bars for rankings. items [{label, value, sub}] */
export function rankBars(items, { money = true, max } = {}) {
  const mx = max || Math.max(1, ...items.map(i => i.value));
  return h('div.rank', items.map(it => h('div.rank-row',
    h('div.rank-label', it.label, it.sub ? h('small', it.sub) : null),
    h('div.rank-bar', h('i', { style: { width: Math.max(2, (it.value / mx) * 100) + '%' } })),
    h('div.rank-val', money ? fmt.money(it.value) : fmt.num(it.value)))));
}

export function progress(value, max, label) {
  const pct = max > 0 ? Math.min(1, value / max) : 0;
  return h('div.progress', { role: 'progressbar', 'aria-valuenow': Math.round(pct * 100), 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-label': label },
    h('div.progress-bar', { class: pct >= 1 ? 'done' : '', style: { width: (pct * 100) + '%' } }));
}
