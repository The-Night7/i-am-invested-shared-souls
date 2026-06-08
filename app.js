// ============================================================
//  SHARED SOULS — Main App Entry Point
// ============================================================

import { CHARACTERS, ARCS, DIALOGUE, RELATIONSHIPS } from '../data/characters.js';
import { renderCharGrid, renderCharDetail }           from './modules/characters.js';
import { renderArcTimeline, renderTensionChart }      from './modules/arcs.js';
import { initConstellation }                          from './modules/constellation.js';
import { renderDialogue }                             from './modules/echoes.js';

// ─── State ───────────────────────────────────────────────────
const state = { activeTab: 'overview', constellationInit: false };

// ─── Tab switching ────────────────────────────────────────────
function switchTab(id) {
  state.activeTab = id;
  document.querySelectorAll('.tab-section').forEach(s => s.classList.add('hidden'));
  document.querySelectorAll('#main-nav button').forEach(b => b.classList.remove('active'));
  const section = document.getElementById(`tab-${id}`);
  const btn     = document.querySelector(`#main-nav button[data-tab="${id}"]`);
  if (section) { section.classList.remove('hidden'); section.classList.add('fade-in'); }
  if (btn) btn.classList.add('active');
  if (id === 'constellation' && !state.constellationInit) {
    state.constellationInit = true;
    initConstellation(CHARACTERS, RELATIONSHIPS, document.getElementById('constellation-canvas'));
  }
}

// ─── Nav events ───────────────────────────────────────────────
document.querySelectorAll('#main-nav button').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

// ─── Char detail panel ────────────────────────────────────────
document.getElementById('detail-close').addEventListener('click', () => {
  document.getElementById('char-detail').classList.remove('open');
});

// ─── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCharGrid(CHARACTERS, (id) => {
    const detail = document.getElementById('char-detail');
    document.getElementById('detail-content').innerHTML = renderCharDetail(CHARACTERS[id], CHARACTERS);
    detail.classList.add('open');
  });

  renderArcTimeline(ARCS);
  renderTensionChart(ARCS);
  renderDialogue(DIALOGUE, CHARACTERS);
});

// Expose for filters
window._sharedSouls = { CHARACTERS, ARCS, DIALOGUE, RELATIONSHIPS };
