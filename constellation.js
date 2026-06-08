// ============================================================
//  SHARED SOULS — Constellation (Network Graph) Module
//  Force-directed canvas graph with hover tooltip
// ============================================================

const GROUP_COLORS = {
  MHA:       '#48BB78',
  'Demon Slayer': '#9F7AEA',
  MCU:       '#F56565',
  Family:    '#A0AEC0',
  Faculty:   '#63B3ED',
  Villain:   '#718096',
  'MHA (OC)': '#2D3748',
};

const LINK_COLORS = {
  vestige_bond:       '#9F7AEA',
  romance_slowburn:   '#63B3ED',
  romance:            '#F687B3',
  best_friend:        '#48BB78',
  rival_protective:   '#ED8936',
  ally:               '#68D391',
  family:             '#A0AEC0',
  family_trauma:      '#FC8181',
  nemesis:            '#E53E3E',
  mentor:             '#63B3ED',
  trainer:            '#68D391',
  vestige_peer:       '#B794F4',
  maternal:           '#FEB2B2',
  friend_trio:        '#48BB78',
  spiritual_parallel: '#4299E1',
  protective:         '#F6AD55',
  ally_villain:       '#4A5568',
};

export function initConstellation(CHARACTERS, RELATIONSHIPS, canvas) {
  if (!canvas) return;

  const wrapper = canvas.parentNode;
  let W, H;
  let nodes, links;
  let animId;
  let dragging = null;
  let dragOffX = 0, dragOffY = 0;

  function buildNodes() {
    const chars = Object.values(CHARACTERS);
    const count = chars.length;
    const cx = W / 2, cy = H / 2;

    // Momo at centre, others in rings
    nodes = chars.map((char, i) => {
      let x, y, r;
      if (char.role === 'protagonist') {
        x = cx; y = cy; r = 28;
      } else if (char.role?.includes('vestige')) {
        const angle = (i / 4) * Math.PI * 2;
        x = cx + Math.cos(angle) * 130;
        y = cy + Math.sin(angle) * 110;
        r = 18;
      } else {
        const angle = (i / count) * Math.PI * 2 + Math.random() * 0.3;
        const dist  = 190 + Math.random() * 80;
        x = cx + Math.cos(angle) * dist;
        y = cy + Math.sin(angle) * dist;
        r = char.role === 'main antagonist' ? 16
          : char.role?.includes('family') ? 13
          : 12;
      }
      return { ...char, x, y, vx: 0, vy: 0, r };
    });

    links = RELATIONSHIPS.map(rel => ({
      ...rel,
      sourceNode: nodes.find(n => n.id === rel.source),
      targetNode: nodes.find(n => n.id === rel.target),
    })).filter(l => l.sourceNode && l.targetNode);
  }

  function resize() {
    const rect = wrapper.getBoundingClientRect();
    W = rect.width; H = rect.height;
    canvas.width  = W * devicePixelRatio;
    canvas.height = H * devicePixelRatio;
    canvas.style.width  = W + 'px';
    canvas.style.height = H + 'px';
    const ctx = canvas.getContext('2d');
    ctx.scale(devicePixelRatio, devicePixelRatio);
    buildNodes();
    if (animId) cancelAnimationFrame(animId);
    loop();
  }

  function applyForces() {
    const cx = W / 2, cy = H / 2;

    // Gravity toward centre
    nodes.forEach(n => {
      if (n.role === 'protagonist') return;
      n.vx += (cx - n.x) * 0.002;
      n.vy += (cy - n.y) * 0.002;
    });

    // Repulsion between nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 0.01;
        const minD = a.r + b.r + 30;
        if (dist < minD) {
          const f = (minD - dist) / dist * 0.35;
          a.vx += dx * f; a.vy += dy * f;
          b.vx -= dx * f; b.vy -= dy * f;
        }
      }
    }

    // Link attraction
    links.forEach(l => {
      const a = l.sourceNode, b = l.targetNode;
      const dx = b.x - a.x, dy = b.y - a.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 0.01;
      const target = 120 + (10 - (l.strength || 5)) * 15;
      const f = (dist - target) / dist * 0.04;
      a.vx += dx * f; a.vy += dy * f;
      b.vx -= dx * f; b.vy -= dy * f;
    });

    // Dampen + clamp
    nodes.forEach(n => {
      if (n === dragging) return;
      n.vx *= 0.85; n.vy *= 0.85;
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
      const a = l.sourceNode, b = l.targetNode;
      const color = LINK_COLORS[l.type] || '#333';
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = color + '55';
      ctx.lineWidth = Math.max(1, (l.strength || 3) * 0.25);
      ctx.stroke();
    });

    // Nodes
    nodes.forEach(n => {
      const fandom = n.fandom?.replace(' (OC)', '') || 'Family';
      const col = GROUP_COLORS[n.fandom] || GROUP_COLORS[fandom] || '#A0AEC0';

      // Glow
      const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 2.5);
      grd.addColorStop(0, col + '33');
      grd.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      // Circle
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = col + 'CC';
      ctx.fill();
      ctx.strokeStyle = col;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Label
      ctx.fillStyle = 'rgba(240,235,228,0.85)';
      ctx.font = n.role === 'protagonist' ? 'bold 11px DM Sans' : '10px DM Sans';
      ctx.textAlign = 'center';
      const label = n.name?.split(' ')[n.fandom === 'MCU' ? 0 : 1] || n.name?.split(' ')[0];
      ctx.fillText(label, n.x, n.y + n.r + 13);
    });
  }

  function loop() {
    applyForces();
    draw();
    animId = requestAnimationFrame(loop);
  }

  // ─── Mouse events ────────────────────────────────────────────
  function getNode(mx, my) {
    return nodes?.find(n => {
      const dx = mx - n.x, dy = my - n.y;
      return Math.sqrt(dx * dx + dy * dy) < n.r + 4;
    });
  }

  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    const tooltip = document.getElementById('node-tooltip');

    if (dragging) {
      dragging.x = mx + dragOffX;
      dragging.y = my + dragOffY;
      dragging.vx = 0; dragging.vy = 0;
      tooltip.style.display = 'none';
      return;
    }

    const n = getNode(mx, my);
    if (n && tooltip) {
      document.getElementById('tt-name').textContent = n.name;
      document.getElementById('tt-role').textContent = n.role || n.fandom || '';
      document.getElementById('tt-desc').textContent = (n.description || '').slice(0, 120) + (n.description?.length > 120 ? '…' : '');
      tooltip.style.display = 'block';
      let tx = e.clientX - rect.left + 14, ty = e.clientY - rect.top + 14;
      if (tx + 210 > W) tx -= 220;
      if (ty + 100 > H) ty -= 110;
      tooltip.style.left = tx + 'px';
      tooltip.style.top  = ty + 'px';
      canvas.style.cursor = 'pointer';
    } else {
      if (tooltip) tooltip.style.display = 'none';
      canvas.style.cursor = 'grab';
    }
  });

  canvas.addEventListener('mousedown', e => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left, my = e.clientY - rect.top;
    const n = getNode(mx, my);
    if (n) { dragging = n; dragOffX = n.x - mx; dragOffY = n.y - my; canvas.style.cursor = 'grabbing'; }
  });

  canvas.addEventListener('mouseup', () => { dragging = null; canvas.style.cursor = 'grab'; });
  canvas.addEventListener('mouseleave', () => {
    dragging = null;
    const t = document.getElementById('node-tooltip');
    if (t) t.style.display = 'none';
  });

  document.getElementById('reset-graph')?.addEventListener('click', () => {
    buildNodes(); // re-randomise positions
  });

  // ─── Start ───────────────────────────────────────────────────
  new ResizeObserver(resize).observe(wrapper);
  resize();
}
