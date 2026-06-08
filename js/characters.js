// ============================================================
//  characters.js — logic for pages/characters.html
// ============================================================

const ROLE_LABEL = {
  'protagonist':                        'Protagonist',
  'vestige / mentor':                   'Vestige / Mentor',
  'supporting / trainer':               'Supporting',
  'love interest / core classmate':     'Love Interest',
  'best friend':                        'Best Friend',
  'rival / protective classmate':       'Rival / Protective',
  'core classmate':                     'Core Classmate',
  'classmate':                          'Classmate',
  'faculty':                            'Faculty',
  'main antagonist':                    'Main Antagonist',
  'family / deceased':                  'Family (Deceased)',
  'family':                             'Family',
  'pro hero':                           'Pro Hero',
  'reformed villain':                   'Reformed Villain',
  'allied pro hero':                    'Allied Pro Hero',
  'child ward':                         'Child Ward',
  'rival / class 1-b':                  'Rival / Class 1-B',
  'antagonist (systemic)':              'Villain (Systemic)',
  'villain':                            'Villain',
};

const FANDOM_TAG = {
  'MHA':          '<span class="tag tag-mha">MHA</span>',
  'Demon Slayer': '<span class="tag tag-ds">Demon Slayer</span>',
  'MCU':          '<span class="tag tag-mcu">MCU</span>',
  'MHA (OC)':     '<span class="tag tag-oc">OC</span>',
};

let ALL_CHARACTERS = {};   // keyed by id after fetch

// ── Fetch & boot ─────────────────────────────────────────────
fetch('../data/characters.json')
  .then(r => r.json())
  .then(arr => {
    arr.forEach(c => { ALL_CHARACTERS[c.id] = c; });
    buildCards('all');
    wireFilters();
    wireDetailClose();
  });

// ── Card grid ─────────────────────────────────────────────────
function buildCards(filter) {
  const grid = document.getElementById('char-grid');
  grid.innerHTML = '';
  Object.values(ALL_CHARACTERS).forEach(char => {
    if (filter !== 'all') {
      const fMatch = char.fandom === filter || char.fandom === `${filter} (OC)`;
      const rMatch = char.role && char.role.toLowerCase().includes(filter.toLowerCase());
      if (!fMatch && !rMatch) return;
    }
    const card = document.createElement('div');
    card.className = 'char-card';
    card.style.setProperty('--char-color', char.color || '#9F7AEA');
    card.innerHTML = `
      <div class="char-name">${char.name}</div>
      ${char.alias ? `<div class="char-alias">${char.alias}</div>` : ''}
      <div class="char-role">${ROLE_LABEL[char.role?.toLowerCase()] || char.role || ''}</div>
      <div class="char-desc">${char.description || ''}</div>
      <div class="char-tags">
        ${FANDOM_TAG[char.fandom] || ''}
        ${char.first_chapter ? `<span class="tag" style="background:rgba(255,255,255,0.05);color:var(--text-faint)">Ch ${char.first_chapter}+</span>` : ''}
      </div>`;
    card.addEventListener('click', () => openDetail(char));
    grid.appendChild(card);
  });
}

// ── Detail panel ──────────────────────────────────────────────
function openDetail(char) {
  const relHTML = (char.key_relationships || []).map(id => {
    const r = ALL_CHARACTERS[id];
    return r
      ? `<span style="display:inline-block;margin:0.2rem 0.25rem;padding:0.2rem 0.55rem;
           background:var(--bg-hover);border:1px solid var(--border);border-radius:4px;
           font-size:0.75rem;color:var(--text-muted)">${r.name}</span>`
      : '';
  }).join('');

  const momHTML = (char.notable_moments || []).map(m =>
    `<li><span class="ch-badge">Ch ${m.ch}</span><span>${m.desc}</span></li>`
  ).join('');

  document.getElementById('detail-content').innerHTML = `
    <div style="margin-bottom:0.4rem;margin-top:0.2rem">${FANDOM_TAG[char.fandom] || ''}</div>
    <h2 style="font-family:'Cormorant Garamond',serif;font-size:1.8rem;margin-bottom:0.15rem;color:${char.color || 'var(--text)'}">${char.name}</h2>
    ${char.alias ? `<div style="font-style:italic;color:var(--text-muted);font-size:0.88rem;margin-bottom:0.7rem">${char.alias}</div>` : ''}
    <div style="font-size:0.63rem;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-faint);margin-bottom:1.2rem">
      ${ROLE_LABEL[char.role?.toLowerCase()] || char.role || ''}
    </div>
    ${char.description ? `<div class="detail-section"><h4>About</h4><p style="font-size:0.85rem">${char.description}</p></div>` : ''}
    ${char.appearance  ? `<div class="detail-section"><h4>Appearance</h4><p style="font-size:0.85rem">${char.appearance}</p></div>` : ''}
    ${char.quirk       ? `<div class="detail-section"><h4>Quirk</h4><p style="font-size:0.85rem">${char.quirk}</p></div>` : ''}
    ${char.fighting_style ? `<div class="detail-section"><h4>Fighting Style</h4><p style="font-size:0.85rem">${char.fighting_style}</p></div>` : ''}
    ${relHTML ? `<div class="detail-section"><h4>Key Relationships</h4><div style="margin-top:0.2rem">${relHTML}</div></div>` : ''}
    ${momHTML ? `<div class="detail-section"><h4>Notable Moments</h4><ul class="moment-list">${momHTML}</ul></div>` : ''}
  `;
  document.getElementById('char-detail').classList.add('open');
}

// ── Wiring ────────────────────────────────────────────────────
function wireFilters() {
  document.getElementById('char-filters').querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#char-filters button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      buildCards(btn.dataset.filter);
    });
  });
}

function wireDetailClose() {
  document.getElementById('detail-close').addEventListener('click', () => {
    document.getElementById('char-detail').classList.remove('open');
  });
}
