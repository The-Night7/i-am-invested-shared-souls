// ============================================================
//  arcs.js — logic for pages/arcs.html
// ============================================================

fetch('../data/arcs.json')
  .then(r => r.json())
  .then(arcs => {
    buildTimeline(arcs);
    buildTensionChart(arcs);
  });

// ── Timeline ──────────────────────────────────────────────────
function buildTimeline(arcs) {
  const container = document.getElementById('arc-timeline');
  container.innerHTML = arcs.map(arc => {
    const chRange = arc.chapters[0] === arc.chapters[1]
      ? `Ch ${arc.chapters[0]}`
      : `Ch ${arc.chapters[0]}–${arc.chapters[1]}`;
    const t  = arc.tension || 0;
    const tc = t >= 90 ? '#F56565' : t >= 70 ? '#ED8936' : t >= 45 ? '#9F7AEA' : '#48BB78';
    const events = (arc.key_events || [])
      .map(e => `<div class="arc-event">${e}</div>`)
      .join('');
    return `
      <div class="arc-item" style="--arc-color:${arc.color || '#A0AEC0'}">
        <div class="arc-ch">${chRange}</div>
        <div class="arc-body">
          <div class="arc-saga">${arc.saga}</div>
          <div class="arc-name">${arc.name}</div>
          <div class="arc-summary">${arc.summary}</div>
          ${events ? `<div class="arc-events" style="margin-top:0.45rem">${events}</div>` : ''}
          <div class="tension-bar-wrap">
            <div class="tension-row"><span>Tension</span><span>${t}%</span></div>
            <div class="tension-bar">
              <div class="tension-fill" style="width:${t}%;background:${tc}"></div>
            </div>
          </div>
        </div>
      </div>`;
  }).join('');
}

// ── Mini tension bar chart (canvas) ───────────────────────────
function buildTensionChart(arcs) {
  const canvas = document.getElementById('tension-chart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const pad = { t: 8, b: 24, l: 6, r: 6 };
  const chartH = H - pad.t - pad.b;
  const barW   = (W - pad.l - pad.r) / arcs.length;

  arcs.forEach((arc, i) => {
    const t   = arc.tension || 0;
    const bH  = (t / 100) * chartH;
    const x   = pad.l + i * barW;
    const y   = pad.t + chartH - bH;
    const col = t >= 90 ? '#F56565' : t >= 70 ? '#ED8936' : t >= 45 ? '#9F7AEA' : '#48BB78';
    ctx.fillStyle = col + '44';
    ctx.fillRect(x + 0.5, y, barW - 1, bH);
    ctx.fillStyle = col;
    ctx.fillRect(x + 0.5, y, barW - 1, 2);
    if (i % 5 === 0) {
      ctx.fillStyle = 'rgba(160,160,170,0.5)';
      ctx.font = '7px DM Sans,sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(arc.chapters[0], x + barW / 2, H - 6);
    }
  });

  // axis line
  ctx.beginPath();
  ctx.moveTo(pad.l, pad.t + chartH);
  ctx.lineTo(W - pad.r, pad.t + chartH);
  ctx.strokeStyle = 'rgba(255,255,255,0.06)';
  ctx.lineWidth = 1;
  ctx.stroke();
}
