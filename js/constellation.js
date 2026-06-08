// ============================================================
//  constellation.js — logic for pages/constellation.html
//  Force-directed canvas graph; data from JSON
// ============================================================

const GROUP_COLORS = {
  'MHA':          '#48BB78',
  'Demon Slayer': '#9F7AEA',
  'MCU':          '#F56565',
  'MHA (OC)':     '#718096',
};

const LINK_COLORS = {
  vestige_bond:        '#9F7AEA',
  romance_slowburn:    '#63B3ED',
  romance:             '#F687B3',
  best_friend:         '#48BB78',
  rival_protective:    '#ED8936',
  ally:                '#68D391',
  family:              '#A0AEC0',
  family_trauma:       '#FC8181',
  nemesis:             '#E53E3E',
  mentor:              '#63B3ED',
  trainer:             '#68D391',
  vestige_peer:        '#B794F4',
  maternal:            '#FEB2B2',
  friend_trio:         '#48BB78',
  spiritual_parallel:  '#4299E1',
  protective:          '#F6AD55',
  ally_villain:        '#4A5568',
};

// ── Load both JSON files then init ───────────────────────────
Promise.all([
  fetch('../data/characters.json').then(r => r.json()),
  fetch('../data/relationships.json').then(r => r.json()),
]).then(([chars, rels]) => {
  initGraph(chars, rels);
});

// ── Graph ─────────────────────────────────────────────────────
function initGraph(charsArr, relsArr) {
  const canvas  = document.getElementById('constellation-canvas');
  const tooltip = document.getElementById('node-tooltip');
  const wrapper = document.getElementById('constellation-wrap');

  let W, H, nodes, links, animId;
  let dragging = null, dragOX = 0, dragOY = 0;

  function buildNodes() {
    const cx = W / 2, cy = H / 2;
    nodes = charsArr.map((char, i) => {
      let x, y, r;
      if (char.role === 'protagonist') {
        x = cx; y = cy; r = 28;
      } else if (char.role?.includes('vestige')) {
        const a = i * 1.8;
        x = cx + Math.cos(a) * 140;
        y = cy + Math.sin(a) * 110;
        r = 18;
      } else {
        const a = (i / charsArr.length) * Math.PI * 2 + Math.random() * 0.4;
        const d = 185 + Math.random() * 80;
        x = cx + Math.cos(a) * d;
        y = cy + Math.sin(a) * d;
        r = char.role === 'main antagonist' ? 16 : 12;
      }
      return { ...char, x, y, vx: 0, vy: 0, r };
    });

    links = relsArr.map(rel => ({
      ...rel,
      sn: nodes.find(n => n.id === rel.source),
      tn: nodes.find(n => n.id === rel.target),
    })).filter(l => l.sn && l.tn);
  }

  function physics() {
    const cx = W / 2, cy = H / 2;
    nodes.forEach(n => {
      if (n.role !== 'protagonist') {
        n.vx += (cx - n.x) * 0.0018;
        n.vy += (cy - n.y) * 0.0018;
      }
    });
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 0.01;
        const min  = a.r + b.r + 28;
        if (dist < min) {
          const f = (min - dist) / dist * 0.32;
          a.vx += dx * f; a.vy += dy * f;
          b.vx -= dx * f; b.vy -= dy * f;
        }
      }
    }
    links.forEach(l => {
      const dx = l.tn.x - l.sn.x, dy = l.tn.y - l.sn.y;
      const dist   = Math.sqrt(dx * dx + dy * dy) || 0.01;
      const target = 120 + (10 - (l.strength || 5)) * 14;
      const f = (dist - target) / dist * 0.038;
      l.sn.vx += dx * f; l.sn.vy += dy * f;
      l.tn.vx -= dx * f; l.tn.vy -= dy * f;
    });
    nodes.forEach(n => {
      if (n === dragging) return;
      n.vx *= 0.84; n.vy *= 0.84;
      n.x  += n.vx; n.y  += n.vy;
      n.x = Math.max(n.r + 4, Math.min(W - n.r - 4, n.x));
      n.y = Math.max(n.r + 4, Math.min(H - n.r - 4, n.y));
    });
  }

  function draw() {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, W, H);
    // Links
    links.forEach(l => {
      const col = LINK_COLORS[l.type] || '#333';
      ctx.beginPath();
      ctx.moveTo(l.sn.x, l.sn.y);
      ctx.lineTo(l.tn.x, l.tn.y);
      ctx.strokeStyle = col + '55';
      ctx.lineWidth = Math.max(1, (l.strength || 3) * 0.22);
      ctx.stroke();
    });
    // Nodes
    nodes.forEach(n => {
      const col = GROUP_COLORS[n.fandom] || '#A0AEC0';
      const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 2.4);
      g.addColorStop(0, col + '2a');
      g.addColorStop(1, 'transparent');
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r * 2.4, 0, Math.PI * 2);
      ctx.fillStyle = g; ctx.fill();
      ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = col + 'BB'; ctx.fill();
      ctx.strokeStyle = col; ctx.lineWidth = 1.5; ctx.stroke();
      // Label
      const label = n.fandom === 'MCU'
        ? n.name.split(' ')[0]
        : n.name.split(' ').pop();
      ctx.fillStyle = 'rgba(240,235,228,0.82)';
      ctx.font = n.role === 'protagonist'
        ? 'bold 11px DM Sans,sans-serif'
        : '10px DM Sans,sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(label, n.x, n.y + n.r + 13);
    });
  }

  function loop() { physics(); draw(); animId = requestAnimationFrame(loop); }

  function resize() {
    const rect = wrapper.getBoundingClientRect();
    W = rect.width; H = rect.height;
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = W * dpr; canvas.height = H * dpr;
    canvas.style.width  = W + 'px'; canvas.style.height = H + 'px';
    canvas.getContext('2d').scale(dpr, dpr);
    buildNodes();
    if (animId) cancelAnimationFrame(animId);
    loop();
  }

  function getNode(mx, my) {
    return nodes?.find(n => {
      const dx = mx - n.x, dy = my - n.y;
      return Math.sqrt(dx * dx + dy * dy) < n.r + 4;
    });
  }

  // Events
  canvas.addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect();
    const mx = e.clientX - r.left, my = e.clientY - r.top;
    if (dragging) {
      dragging.x = mx + dragOX; dragging.y = my + dragOY;
      dragging.vx = 0; dragging.vy = 0;
      tooltip.style.display = 'none';
      return;
    }
    const n = getNode(mx, my);
    if (n) {
      document.getElementById('tt-name').textContent = n.name;
      document.getElementById('tt-role').textContent = n.role || n.fandom || '';
      document.getElementById('tt-desc').textContent =
        (n.description || '').slice(0, 110) + (n.description?.length > 110 ? '…' : '');
      let tx = mx + 14, ty = my + 14;
      if (tx + 215 > W) tx -= 220;
      if (ty + 110 > H) ty -= 115;
      tooltip.style.left = tx + 'px'; tooltip.style.top = ty + 'px';
      tooltip.style.display = 'block';
      canvas.style.cursor = 'pointer';
    } else {
      tooltip.style.display = 'none';
      canvas.style.cursor = 'grab';
    }
  });

  canvas.addEventListener('mousedown', e => {
    const r = canvas.getBoundingClientRect();
    const n = getNode(e.clientX - r.left, e.clientY - r.top);
    if (n) {
      dragging = n;
      dragOX = n.x - (e.clientX - r.left);
      dragOY = n.y - (e.clientY - r.top);
      canvas.style.cursor = 'grabbing';
    }
  });
  canvas.addEventListener('mouseup',    () => { dragging = null; canvas.style.cursor = 'grab'; });
  canvas.addEventListener('mouseleave', () => { dragging = null; tooltip.style.display = 'none'; });

  document.getElementById('reset-btn')
    ?.addEventListener('click', buildNodes);

  new ResizeObserver(resize).observe(wrapper);
  resize();
}
