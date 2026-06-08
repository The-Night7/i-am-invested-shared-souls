// ============================================================
//  SHARED SOULS — Arcs Module
// ============================================================

export function renderArcTimeline(ARCS) {
  const container = document.getElementById('arc-timeline');
  if (!container) return;

  container.innerHTML = ARCS.map(arc => {
    const chRange = arc.chapters[0] === arc.chapters[1]
      ? `Ch ${arc.chapters[0]}`
      : `Ch ${arc.chapters[0]}–${arc.chapters[1]}`;

    const events = arc.key_events?.map(e =>
      `<div class="arc-event">${e}</div>`
    ).join('') || '';

    const tensionPct = arc.tension || 0;
    const tensionColor = tensionPct >= 90 ? '#F56565'
                       : tensionPct >= 70 ? '#ED8936'
                       : tensionPct >= 45 ? '#9F7AEA'
                       : '#48BB78';

    return `
      <div class="arc-item" style="--arc-color:${arc.color || '#A0AEC0'}">
        <div class="arc-ch-range">${chRange}</div>
        <div class="arc-body">
          <div class="arc-saga">${arc.saga}</div>
          <div class="arc-name">${arc.name}</div>
          <div class="arc-summary">${arc.summary}</div>
          ${events ? `<div class="arc-events">${events}</div>` : ''}
          <div class="tension-bar-wrap" style="margin-top:0.5rem">
            <div style="display:flex;justify-content:space-between;font-size:0.62rem;color:var(--text-faint);margin-bottom:0.2rem">
              <span>Tension</span><span>${tensionPct}%</span>
            </div>
            <div class="tension-bar">
              <div class="tension-bar-fill" style="width:${tensionPct}%;background:${tensionColor}"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

export function renderTensionChart(ARCS) {
  const canvas = document.getElementById('tension-chart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const pad = { top: 10, bottom: 30, left: 8, right: 8 };
  const chartH = H - pad.top - pad.bottom;
  const barW = (W - pad.left - pad.right) / ARCS.length;

  ctx.clearRect(0, 0, W, H);

  ARCS.forEach((arc, i) => {
    const t = arc.tension || 0;
    const barH = (t / 100) * chartH;
    const x = pad.left + i * barW;
    const y = pad.top + chartH - barH;

    const color = t >= 90 ? '#F56565'
                : t >= 70 ? '#ED8936'
                : t >= 45 ? '#9F7AEA'
                : '#48BB78';

    ctx.fillStyle = color + '55';
    ctx.fillRect(x + 1, y, barW - 2, barH);
    ctx.fillStyle = color;
    ctx.fillRect(x + 1, y, barW - 2, 2);
  });

  // X-axis labels (abbreviated saga names)
  ctx.fillStyle = 'rgba(160,160,170,0.5)';
  ctx.font = '8px DM Sans, sans-serif';
  ctx.textAlign = 'center';
  const sagaLabels = ['UA1','UA2','RV','RV','RV','FB','FB','FB','J','J'];
  ARCS.forEach((arc, i) => {
    const x = pad.left + i * barW + barW / 2;
    // only draw every 3rd to avoid crowding
    if (i % 3 === 0) {
      ctx.fillText(arc.chapters[0], x, H - 4);
    }
  });
}
