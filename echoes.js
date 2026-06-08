// ============================================================
//  SHARED SOULS — Echoes / Dialogue Module
// ============================================================

const SPEAKER_LABELS = {
  momo:       'Yaoyorozu Momo',
  shinobu:    'Kochou Shinobu',
  natasha:    'Natasha Romanov',
  ekaterina:  'Yaoyorozu Ekaterina',
  katsuki:    'Bakugou Katsuki',
  hanta:      'Sero Hanta',
  kurohana:   'Kurohana',
  allMight:   'All Might',
  narrator:   '— Narrator —',
};

const SPEAKER_COLORS = {
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

export function renderDialogue(DIALOGUE, CHARACTERS) {
  const list = document.getElementById('dialogue-list');
  if (!list) return;

  function build(filter) {
    list.innerHTML = '';
    const entries = filter === 'all'
      ? DIALOGUE
      : DIALOGUE.filter(d => d.speaker === filter);

    entries.forEach(line => {
      const div = document.createElement('div');
      div.className = 'dialogue-entry';
      const color = SPEAKER_COLORS[line.speaker] || '#A0AEC0';
      div.style.setProperty('--speaker-color', color);
      div.innerHTML = `
        <div class="d-header">
          <span class="d-speaker" style="color:${color}">${SPEAKER_LABELS[line.speaker] || line.speaker}</span>
          <span class="d-context">${line.context}</span>
        </div>
        <div class="d-text">"${line.text}"</div>
      `;
      list.appendChild(div);
    });
  }

  build('all');

  document.querySelectorAll('#dialogue-filters button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#dialogue-filters button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      build(btn.dataset.filter);
    });
  });
}
