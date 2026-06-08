// ============================================================
//  SHARED SOULS — Characters Module
// ============================================================

const ROLE_LABEL = {
  protagonist: 'Protagonist',
  vestige: 'Vestige / Mentor',
  'vestige / mentor': 'Vestige / Mentor',
  'supporting / physical presence': 'Supporting',
  'love interest / core classmate': 'Love Interest',
  'best friend': 'Best Friend',
  'rival / protective classmate': 'Rival / Protective',
  'core classmate': 'Core Classmate',
  classmate: 'Classmate',
  'faculty / romantic subplot': 'Faculty',
  'antagonist (systemic) / shouto\'s father': 'Villain (Systemic)',
  'villain / shouto\'s brother': 'Villain',
  'pro hero / supporting': 'Pro Hero',
  'reformed villain / system-changer': 'Pro Hero',
  'child ward / symbol of hope': 'Child Ward',
  'rival / class 1-b': 'Rival / Class 1-B',
  'family / deceased': 'Family (Deceased)',
  family: 'Family',
  'main antagonist': 'Main Antagonist',
  'allied pro hero': 'Allied Pro Hero',
  trainer: 'Trainer',
  mentor: 'Mentor',
};

const FANDOM_TAG = {
  'MHA':          '<span class="tag tag-mha">MHA</span>',
  'Demon Slayer': '<span class="tag tag-ds">Demon Slayer</span>',
  'MCU':          '<span class="tag tag-mcu">MCU</span>',
  'MHA (OC)':     '<span class="tag tag-oc">MHA · OC</span>',
};

// ─── Char Grid ─────────────────────────────────────────────────
export function renderCharGrid(CHARACTERS, onOpen) {
  const grid = document.getElementById('char-grid');
  if (!grid) return;

  function buildCards(filter) {
    grid.innerHTML = '';
    Object.values(CHARACTERS).forEach(char => {
      if (filter !== 'all') {
        const fandomMatch = char.fandom === filter || char.fandom === `${filter} (OC)`;
        const roleMatch   = char.role && char.role.toLowerCase().includes(filter.toLowerCase());
        if (!fandomMatch && !roleMatch) return;
      }

      const card = document.createElement('div');
      card.className = 'char-card';
      card.style.setProperty('--char-color', char.color || '#9F7AEA');
      card.innerHTML = `
        <div class="char-name">${char.name}</div>
        ${char.alias ? `<div class="char-alias">${char.alias}</div>` : ''}
        <div class="char-role">${ROLE_LABEL[char.role?.toLowerCase()] || char.role || 'Character'}</div>
        <div class="char-desc">${char.description || ''}</div>
        <div class="char-tags">
          ${FANDOM_TAG[char.fandom] || ''}
          ${char.first_chapter ? `<span class="tag" style="background:rgba(255,255,255,0.05);color:var(--text-faint)">Ch ${char.first_chapter}+</span>` : ''}
        </div>
      `;
      card.addEventListener('click', () => onOpen(char.id));
      grid.appendChild(card);
    });
  }

  buildCards('all');

  // Filter buttons
  document.getElementById('char-filters')?.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#char-filters button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      buildCards(btn.dataset.filter);
    });
  });
}

// ─── Char Detail ───────────────────────────────────────────────
export function renderCharDetail(char, ALL_CHARACTERS) {
  if (!char) return '';

  const relatedHTML = char.key_relationships?.map(id => {
    const r = ALL_CHARACTERS[id];
    if (!r) return '';
    return `<span style="display:inline-block;margin:0.2rem 0.3rem 0.2rem 0;padding:0.2rem 0.6rem;background:var(--bg-hover);border:1px solid var(--border);border-radius:4px;font-size:0.75rem;color:var(--text-muted)">${r.name}</span>`;
  }).join('') || '';

  const momentsHTML = char.notable_moments?.map(m =>
    `<li><span class="ch-badge">Ch ${m.ch}</span><span>${m.desc}</span></li>`
  ).join('') || '';

  return `
    <div style="margin-bottom:0.5rem;margin-top:0.3rem">
      ${FANDOM_TAG[char.fandom] || ''}
    </div>
    <h2 class="detail-name" style="color:${char.color || 'var(--text)'}">${char.name}</h2>
    ${char.alias ? `<div style="font-style:italic;color:var(--text-muted);font-size:0.9rem;margin-bottom:0.8rem">${char.alias}</div>` : ''}
    <div style="font-size:0.72rem;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-faint);margin-bottom:1.2rem">
      ${ROLE_LABEL[char.role?.toLowerCase()] || char.role || ''}
    </div>

    ${char.description ? `
    <div class="detail-section">
      <h4>About</h4>
      <p style="font-size:0.85rem">${char.description}</p>
    </div>` : ''}

    ${char.appearance ? `
    <div class="detail-section">
      <h4>Appearance</h4>
      <p style="font-size:0.85rem">${char.appearance}</p>
    </div>` : ''}

    ${char.quirk ? `
    <div class="detail-section">
      <h4>Quirk</h4>
      <p style="font-size:0.85rem">${char.quirk}</p>
    </div>` : ''}

    ${char.fighting_style ? `
    <div class="detail-section">
      <h4>Fighting Style</h4>
      <p style="font-size:0.85rem">${char.fighting_style}</p>
    </div>` : ''}

    ${relatedHTML ? `
    <div class="detail-section">
      <h4>Key Relationships</h4>
      <div>${relatedHTML}</div>
    </div>` : ''}

    ${momentsHTML ? `
    <div class="detail-section">
      <h4>Notable Moments</h4>
      <ul class="moment-list">${momentsHTML}</ul>
    </div>` : ''}
  `;
}
