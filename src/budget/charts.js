/* ============================================================
   Tiny SVG chart library for the budget app. No dependencies.
   Each function returns an HTML string; hover tooltips are wired
   once via bindCharts(root) using the registry below.
   ============================================================ */

const registry = new Map();

const esc = (s) =>
  String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function niceStep(range, target = 5) {
  if (range <= 0) return 1;
  const raw = range / target;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const norm = raw / mag;
  const step = norm < 1.5 ? 1 : norm < 3 ? 2 : norm < 7 ? 5 : 10;
  return step * mag;
}

function ticks(min, max, target = 5) {
  const step = niceStep(max - min, target);
  const lo = Math.floor(min / step) * step;
  const hi = Math.ceil(max / step) * step;
  const out = [];
  for (let v = lo; v <= hi + step / 2; v += step) out.push(Math.round(v * 1e6) / 1e6);
  return { ticks: out, lo, hi: out[out.length - 1] };
}

export function compact(v) {
  const a = Math.abs(v);
  const sign = v < 0 ? '-' : '';
  if (a >= 1e6) return `${sign}${(a / 1e6).toFixed(a >= 1e7 ? 0 : 1)}M`;
  if (a >= 1e3) return `${sign}${(a / 1e3).toFixed(a >= 1e4 ? 0 : 1).replace(/\.0$/, '')}K`;
  return `${sign}${Math.round(a)}`;
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export function shortMonth(key) {
  const [y, m] = key.split('-').map(Number);
  return `${MONTHS[m - 1]} ${String(y).slice(2)}`;
}
export function shortDate(s) {
  const [, m, d] = s.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]}`;
}

function legend(series) {
  if (series.length < 2) return '';
  return `<div class="chart-legend">${series
    .map(
      (s) =>
        `<span class="chart-legend-item"><span class="chart-swatch${s.kind === 'band' ? ' band' : ''}${s.dashed ? ' dashed' : ''}" style="--c:${s.color}"></span>${esc(s.name)}</span>`
    )
    .join('')}</div>`;
}

function tableView(headers, rows) {
  return `<details class="chart-table"><summary>Show as table</summary><div class="table-scroll"><table><thead><tr>${headers
    .map((h) => `<th>${esc(h)}</th>`)
    .join('')}</tr></thead><tbody>${rows
    .map((r) => `<tr>${r.map((c, i) => `<td class="${i ? 'num' : ''}">${esc(c)}</td>`).join('')}</tr>`)
    .join('')}</tbody></table></div></details>`;
}

/* ------------------------------------------------------------
   Line chart with optional band (low/high) and reference lines
   ------------------------------------------------------------ */
export function lineChart(opts) {
  const {
    id,
    width = 760,
    height = 260,
    series = [],
    band = null,
    refLines = [],
    marks = [],
    yFormat = (v) => compact(v),
    valueFormat = (v) => String(Math.round(v)),
    xFormat = shortDate,
    title = '',
  } = opts;
  const pad = { top: 16, right: 16, bottom: 28, left: 52 };
  const W = width - pad.left - pad.right;
  const H = height - pad.top - pad.bottom;
  const xs = series[0] ? series[0].points.map((p) => p.x) : [];
  const n = xs.length;
  if (!n) return `<div class="chart-empty">No data to chart yet.</div>`;

  let ys = [];
  for (const s of series) ys = ys.concat(s.points.map((p) => p.y));
  if (band) ys = ys.concat(band.low.map((p) => p.y), band.high.map((p) => p.y));
  for (const r of refLines) ys.push(r.y);
  ys.push(0);
  const { ticks: yT, lo, hi } = ticks(Math.min(...ys), Math.max(...ys));
  const x = (i) => pad.left + (n === 1 ? W / 2 : (i / (n - 1)) * W);
  const y = (v) => pad.top + H - ((v - lo) / (hi - lo || 1)) * H;

  // X ticks at month boundaries (or every ~6th point if < 2 months)
  const xTicks = [];
  for (let i = 0; i < n; i++) {
    if (xs[i].endsWith('-01') || (n < 60 && i % Math.ceil(n / 6) === 0)) xTicks.push(i);
  }
  if (!xTicks.length) xTicks.push(0, n - 1);

  const grid = yT
    .map((v) => `<line class="grid" x1="${pad.left}" x2="${pad.left + W}" y1="${y(v)}" y2="${y(v)}"/>` +
      `<text class="axis" x="${pad.left - 8}" y="${y(v) + 4}" text-anchor="end">${esc(yFormat(v))}</text>`)
    .join('');
  const xAxis = xTicks
    .map((i) => `<text class="axis" x="${x(i)}" y="${height - 8}" text-anchor="middle">${esc(xFormat(xs[i]))}</text>`)
    .join('');
  const zero = lo < 0 && hi > 0 ? `<line class="baseline" x1="${pad.left}" x2="${pad.left + W}" y1="${y(0)}" y2="${y(0)}"/>` : '';

  let bandPath = '';
  if (band) {
    const top = band.high.map((p, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(p.y).toFixed(1)}`).join('');
    const bottom = band.low
      .map((p, i) => `L${x(i).toFixed(1)},${y(p.y).toFixed(1)}`)
      .reverse()
      .join('');
    bandPath = `<path class="band" d="${top}${bottom}Z" fill="${band.color}"/>`;
  }
  const paths = series
    .map((s) => {
      const d = s.points.map((p, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(p.y).toFixed(1)}`).join('');
      return `<path class="line" d="${d}" stroke="${s.color}"${s.dashed ? ' stroke-dasharray="4 4"' : ''}/>`;
    })
    .join('');
  const refs = refLines
    .map(
      (r) =>
        `<line class="ref" x1="${pad.left}" x2="${pad.left + W}" y1="${y(r.y)}" y2="${y(r.y)}" stroke="${r.color}"/>` +
        `<text class="ref-label" x="${pad.left + W - 4}" y="${y(r.y) - 4}" text-anchor="end">${esc(r.label)}</text>`
    )
    .join('');
  const markEls = marks
    .map((m) => {
      const i = xs.indexOf(m.x);
      if (i < 0) return '';
      return `<line class="mark" x1="${x(i)}" x2="${x(i)}" y1="${pad.top}" y2="${pad.top + H}"/>` +
        `<text class="mark-label" x="${x(i) + 4}" y="${pad.top + 10}">${esc(m.label)}</text>`;
    })
    .join('');
  // End label for the first series
  const last = series[0].points[n - 1];
  const endLabel = `<circle class="dot" cx="${x(n - 1)}" cy="${y(last.y)}" r="4" fill="${series[0].color}"/>` +
    `<text class="end-label" x="${x(n - 1) - 6}" y="${y(last.y) - 8}" text-anchor="end">${esc(valueFormat(last.y))}</text>`;

  registry.set(id, {
    type: 'line',
    xs,
    series: series.map((s) => ({ name: s.name, color: s.color, values: s.points.map((p) => p.y) })),
    band: band ? { name: band.name, low: band.low.map((p) => p.y), high: band.high.map((p) => p.y) } : null,
    pad,
    W,
    H,
    width,
    height,
    valueFormat,
    xFormat: opts.xTooltip || ((s) => s),
    y,
    x,
  });

  const legendSeries = series.map((s) => ({ name: s.name, color: s.color, dashed: s.dashed }));
  if (band) legendSeries.push({ name: band.name, color: band.color, kind: 'band' });
  const headers = ['Date', ...series.map((s) => s.name), ...(band ? [`${band.name} low`, `${band.name} high`] : [])];
  const rows = xs.map((d, i) => [
    d,
    ...series.map((s) => valueFormat(s.points[i].y)),
    ...(band ? [valueFormat(band.low[i].y), valueFormat(band.high[i].y)] : []),
  ]);
  return `<figure class="chart" data-chart="${esc(id)}">
    ${title ? `<figcaption>${esc(title)}</figcaption>` : ''}
    ${legend(legendSeries)}
    <div class="chart-wrap">
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(title || 'chart')}">
        ${grid}${zero}${bandPath}${refs}${markEls}${paths}${endLabel}
        <line class="crosshair" x1="0" x2="0" y1="${pad.top}" y2="${pad.top + H}" style="display:none"/>
        <g class="hover-dots"></g>
        ${xAxis}
        <rect class="hit" x="${pad.left}" y="${pad.top}" width="${W}" height="${H}" fill="transparent"/>
      </svg>
      <div class="chart-tip" hidden></div>
    </div>
    ${tableView(headers, rows)}
  </figure>`;
}

/* ------------------------------------------------------------
   Bar chart: grouped or stacked columns
   ------------------------------------------------------------ */
export function barChart(opts) {
  const {
    id,
    width = 760,
    height = 240,
    categories = [],
    series = [],
    stacked = false,
    yFormat = (v) => compact(v),
    valueFormat = (v) => String(Math.round(v)),
    highlight = -1,
    title = '',
    dim = [], // indexes of categories to draw lighter (e.g. forecast months)
  } = opts;
  const pad = { top: 16, right: 12, bottom: 28, left: 52 };
  const W = width - pad.left - pad.right;
  const H = height - pad.top - pad.bottom;
  const n = categories.length;
  if (!n || !series.length) return `<div class="chart-empty">No data to chart yet.</div>`;

  let maxV = 0;
  let minV = 0;
  for (let i = 0; i < n; i++) {
    if (stacked) {
      let pos = 0;
      let neg = 0;
      for (const s of series) {
        const v = s.values[i] || 0;
        if (v >= 0) pos += v;
        else neg += v;
      }
      maxV = Math.max(maxV, pos);
      minV = Math.min(minV, neg);
    } else {
      for (const s of series) {
        maxV = Math.max(maxV, s.values[i] || 0);
        minV = Math.min(minV, s.values[i] || 0);
      }
    }
  }
  const { ticks: yT, lo, hi } = ticks(minV, maxV);
  const y = (v) => pad.top + H - ((v - lo) / (hi - lo || 1)) * H;
  const slot = W / n;
  const groupW = stacked ? Math.min(24, slot * 0.6) : Math.min(24 * series.length + 2 * (series.length - 1), slot * 0.7);
  const barW = stacked ? groupW : (groupW - 2 * (series.length - 1)) / series.length;

  const grid = yT
    .map((v) => `<line class="grid" x1="${pad.left}" x2="${pad.left + W}" y1="${y(v)}" y2="${y(v)}"/>` +
      `<text class="axis" x="${pad.left - 8}" y="${y(v) + 4}" text-anchor="end">${esc(yFormat(v))}</text>`)
    .join('');
  const base = `<line class="baseline" x1="${pad.left}" x2="${pad.left + W}" y1="${y(0)}" y2="${y(0)}"/>`;

  const roundedBar = (x, v, w, color, opacity) => {
    const top = Math.min(y(0), y(v));
    const h = Math.abs(y(v) - y(0));
    if (h < 0.5) return '';
    const r = Math.min(4, h, w / 2);
    // rounded at the data end only
    const d =
      v >= 0
        ? `M${x},${top + h} V${top + r} Q${x},${top} ${x + r},${top} H${x + w - r} Q${x + w},${top} ${x + w},${top + r} V${top + h} Z`
        : `M${x},${top} V${top + h - r} Q${x},${top + h} ${x + r},${top + h} H${x + w - r} Q${x + w},${top + h} ${x + w},${top + h - r} V${top} Z`;
    return `<path d="${d}" fill="${color}" opacity="${opacity}"/>`;
  };

  let bars = '';
  for (let i = 0; i < n; i++) {
    const gx = pad.left + slot * i + (slot - groupW) / 2;
    const opacity = dim.includes(i) ? 0.45 : 1;
    if (stacked) {
      let pos = 0;
      let neg = 0;
      for (const s of series) {
        const v = s.values[i] || 0;
        if (!v) continue;
        if (v > 0) {
          const yTop = y(pos + v);
          const yBot = y(pos) - (pos ? 2 : 0); // 2px surface gap between segments
          const h = Math.max(0, yBot - yTop);
          bars += `<rect x="${gx}" y="${yTop}" width="${barW}" height="${h}" fill="${s.color}" opacity="${opacity}" rx="${pos ? 0 : 0}"/>`;
          pos += v;
        } else {
          const yTop = y(neg) + (neg ? 2 : 0);
          const yBot = y(neg + v);
          bars += `<rect x="${gx}" y="${yTop}" width="${barW}" height="${Math.max(0, yBot - yTop)}" fill="${s.color}" opacity="${opacity}"/>`;
          neg += v;
        }
      }
    } else {
      series.forEach((s, k) => {
        bars += roundedBar(gx + k * (barW + 2), s.values[i] || 0, barW, s.color, opacity);
      });
    }
    if (i === highlight) {
      bars += `<rect class="highlight" x="${pad.left + slot * i}" y="${pad.top}" width="${slot}" height="${H}"/>`;
    }
  }
  const xAxis = categories
    .map((c, i) => `<text class="axis${i === highlight ? ' strong' : ''}" x="${pad.left + slot * i + slot / 2}" y="${height - 8}" text-anchor="middle">${esc(c)}</text>`)
    .join('');

  registry.set(id, {
    type: 'bar',
    categories,
    series: series.map((s) => ({ name: s.name, color: s.color, values: s.values })),
    pad,
    W,
    H,
    width,
    height,
    slot,
    valueFormat,
  });
  const headers = ['', ...series.map((s) => s.name)];
  const rows = categories.map((c, i) => [c, ...series.map((s) => valueFormat(s.values[i] || 0))]);
  return `<figure class="chart" data-chart="${esc(id)}">
    ${title ? `<figcaption>${esc(title)}</figcaption>` : ''}
    ${legend(series)}
    <div class="chart-wrap">
      <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(title || 'chart')}">
        ${grid}${base}${bars}${xAxis}
        <rect class="hit" x="${pad.left}" y="${pad.top}" width="${W}" height="${H}" fill="transparent"/>
      </svg>
      <div class="chart-tip" hidden></div>
    </div>
    ${tableView(headers, rows)}
  </figure>`;
}

/* ------------------------------------------------------------
   Meter (budget progress) and sparkline
   ------------------------------------------------------------ */
export function meter({ value, max, status = 'ok', label = '' }) {
  const pct = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : value > 0 ? 100 : 0;
  return `<div class="meter meter-${status}" role="progressbar" aria-valuenow="${Math.round(pct)}" aria-valuemin="0" aria-valuemax="100" aria-label="${esc(label)}"><span style="width:${pct.toFixed(1)}%"></span></div>`;
}

export function sparkline(values, { width = 120, height = 32, color = 'var(--viz-1)' } = {}) {
  if (!values.length) return '';
  const min = Math.min(...values, 0);
  const max = Math.max(...values, 0);
  const x = (i) => (values.length === 1 ? width / 2 : (i / (values.length - 1)) * (width - 4) + 2);
  const y = (v) => height - 3 - ((v - min) / (max - min || 1)) * (height - 6);
  const d = values.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join('');
  const last = values[values.length - 1];
  return `<svg class="sparkline" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" aria-hidden="true"><path d="${d}" fill="none" stroke="${color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/><circle cx="${x(values.length - 1)}" cy="${y(last)}" r="3" fill="${color}"/></svg>`;
}

/* ------------------------------------------------------------
   Hover binding (delegated; call once after each render)
   ------------------------------------------------------------ */
export function bindCharts(root) {
  root.querySelectorAll('figure.chart').forEach((fig) => {
    const data = registry.get(fig.dataset.chart);
    if (!data) return;
    const svg = fig.querySelector('svg');
    const tip = fig.querySelector('.chart-tip');
    const wrap = fig.querySelector('.chart-wrap');
    const cross = svg.querySelector('.crosshair');
    const dots = svg.querySelector('.hover-dots');
    const hide = () => {
      tip.hidden = true;
      if (cross) cross.style.display = 'none';
      if (dots) dots.innerHTML = '';
      svg.querySelectorAll('.hover-col').forEach((e) => e.remove());
    };
    const move = (ev) => {
      const rect = svg.getBoundingClientRect();
      const scale = data.width / rect.width;
      const px = (ev.clientX - rect.left) * scale;
      let html = '';
      let anchorX = px;
      if (data.type === 'line') {
        const n = data.xs.length;
        const i = Math.max(0, Math.min(n - 1, Math.round(((px - data.pad.left) / data.W) * (n - 1))));
        anchorX = data.x(i);
        if (cross) {
          cross.style.display = '';
          cross.setAttribute('x1', anchorX);
          cross.setAttribute('x2', anchorX);
        }
        if (dots) {
          dots.innerHTML = data.series
            .map((s) => `<circle cx="${anchorX}" cy="${data.y(s.values[i])}" r="5" fill="${s.color}" class="dot"/>`)
            .join('');
        }
        html = `<div class="tip-title">${esc(data.xFormat(data.xs[i]))}</div>` +
          data.series.map((s) => `<div class="tip-row"><span class="chart-swatch" style="--c:${s.color}"></span>${esc(s.name)}<b>${esc(data.valueFormat(s.values[i]))}</b></div>`).join('') +
          (data.band ? `<div class="tip-row muted">${esc(data.band.name)}<b>${esc(data.valueFormat(data.band.low[i]))} – ${esc(data.valueFormat(data.band.high[i]))}</b></div>` : '');
      } else {
        const i = Math.max(0, Math.min(data.categories.length - 1, Math.floor((px - data.pad.left) / data.slot)));
        anchorX = data.pad.left + data.slot * i + data.slot / 2;
        svg.querySelectorAll('.hover-col').forEach((e) => e.remove());
        const col = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        col.setAttribute('class', 'hover-col');
        col.setAttribute('x', data.pad.left + data.slot * i);
        col.setAttribute('y', data.pad.top);
        col.setAttribute('width', data.slot);
        col.setAttribute('height', data.H);
        svg.insertBefore(col, svg.querySelector('.hit'));
        html = `<div class="tip-title">${esc(data.categories[i])}</div>` +
          data.series.map((s) => `<div class="tip-row"><span class="chart-swatch" style="--c:${s.color}"></span>${esc(s.name)}<b>${esc(data.valueFormat(s.values[i] || 0))}</b></div>`).join('');
      }
      tip.innerHTML = html;
      tip.hidden = false;
      const left = (anchorX / data.width) * rect.width;
      const wrapRect = wrap.getBoundingClientRect();
      const tipW = tip.offsetWidth || 160;
      const flip = left + tipW + 16 > wrapRect.width;
      tip.style.left = `${flip ? left - tipW - 12 : left + 12}px`;
      tip.style.top = `${Math.max(0, ev.clientY - rect.top - 10)}px`;
    };
    svg.addEventListener('mousemove', move);
    svg.addEventListener('touchmove', (e) => move(e.touches[0]), { passive: true });
    svg.addEventListener('mouseleave', hide);
    svg.addEventListener('touchend', hide);
  });
}
