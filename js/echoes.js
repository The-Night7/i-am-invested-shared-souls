// ============================================================
//  echoes.js — logic for pages/echoes.html
// ============================================================

const LABELS = {
  momo:      'Yaoyorozu Momo',
  shinobu:   'Kochou Shinobu',
  natasha:   'Natasha Romanov',
  ekaterina: 'Yaoyorozu Ekaterina',
  katsuki:   'Bakugou Katsuki',
  hanta:     'Sero Hanta',
  kurohana:  'Kurohana',
  allMight:  'All Might',
  narrator:  '— Narrator —',
};

const COLORS = {
  momo:      '#805AD5',
  shinobu:   '#9F7AEA',
  natasha:   '#F56565',
  ekaterina: '#FEB2B2',
  katsuki:   '#ED8936',
  hanta:     '#68D391',
  kurohana:  '#4A5568',
  allMight:  '#F6AD55',
  narrator:  '#A0AEC0',
};

let ALL_DIALOGUE = [];

fetch('../data/dialogue.json')
  .then(r => r.json())
  .then(data => {
    ALL_DIALOGUE = data;
    render('all');
    wireFilters();
  });

function render(filter) {
  const list = document.getElementById('dialogue-list');
  list.innerHTML = '';
  const entries = filter === 'all'
    ? ALL_DIALOGUE
    : ALL_DIALOGUE.filter(d => d.speaker === filter);

  if (!entries.length) {
    list.innerHTML = '<p style="color:var(--text-faint);font-size:0.85rem;padding:1rem 0">No entries for this filter.</p>';
    return;
  }

  entries.forEach(line => {
    const col = COLORS[line.speaker] || '#A0AEC0';
    const div = document.createElement('div');
    div.className = 'dialogue-entry';
    div.style.setProperty('--speaker-color', col);
    div.innerHTML = `
      <div class="d-header">
        <span class="d-speaker" style="color:${col}">${LABELS[line.speaker] || line.speaker}</span>
        <span class="d-context">${line.context}</span>
      </div>
      <div class="d-text">"${line.text}"</div>`;
    list.appendChild(div);
  });
}

function wireFilters() {
  document.getElementById('echo-filters').querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#echo-filters button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.dataset.filter);
    });
  });
}
