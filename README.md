# Shared Souls — Fan Reference Site

> *Shared Souls* by Arcnote · AO3 #71180021  
> 97 chapters · 256,505 words · Completed 2026-01-20

---

## 📁 Structure

```
shared-souls/
│
├── index.html                   ← Homepage / Overview
│
├── pages/
│   ├── characters.html          ← Character grid + detail panel
│   ├── arcs.html                ← Arc timeline + tension chart
│   ├── constellation.html       ← Force-directed relationship graph
│   └── echoes.html              ← Key quotes, filterable by speaker
│
├── css/
│   └── style.css                ← All styles (design tokens + every component)
│
├── data/                        ← ✏️  Edit these files to update content
│   ├── characters.json          ← 25 character profiles (array of objects)
│   ├── arcs.json                ← 25 arcs (array of objects)
│   ├── dialogue.json            ← 22 key quotes (array of objects)
│   └── relationships.json       ← 23 bonds for the constellation graph
│
└── js/
    ├── characters.js            ← Logic for characters.html
    ├── arcs.js                  ← Logic for arcs.html
    ├── constellation.js         ← Logic for constellation.html
    └── echoes.js                ← Logic for echoes.html
```

Each HTML page is pure markup — it `<link>`s one CSS file and `<script>`s one JS file.  
All data lives in JSON. No build step, no dependencies, no modules.

---

## ✏️ Editing content

### Add / update a character — `data/characters.json`

```json
{
  "id": "my_char",
  "name": "Full Name",
  "alias": "Hero Name or null",
  "fandom": "MHA",
  "role": "classmate",
  "color": "#48BB78",
  "first_chapter": 7,
  "description": "...",
  "quirk": "...",
  "fighting_style": "...",
  "appearance": "...",
  "key_relationships": ["momo", "katsuki"],
  "notable_moments": [
    { "ch": 12, "desc": "First appearance." }
  ]
}
```

`fandom` options: `"MHA"` · `"Demon Slayer"` · `"MCU"` · `"MHA (OC)"`

### Add an arc — `data/arcs.json`

```json
{
  "id": "arc_id",
  "saga": "Saga Name",
  "name": "Arc Name",
  "chapters": [firstCh, lastCh],
  "summary": "...",
  "tension": 75,
  "key_events": ["Event (Ch N)"],
  "color": "#9F7AEA"
}
```

`tension` 0–100: ≥90 red · ≥70 orange · ≥45 purple · <45 green

### Add a quote — `data/dialogue.json`

```json
{
  "ch": 42,
  "speaker": "momo",
  "text": "...",
  "context": "Ch 42 — scene description",
  "mood": "determined"
}
```

Speaker IDs: `momo` `shinobu` `natasha` `ekaterina` `katsuki` `hanta` `kurohana` `allMight` `narrator`

### Add a bond — `data/relationships.json`

```json
{ "source": "momo", "target": "my_char", "type": "ally", "label": "...", "strength": 6 }
```

`strength` 1–10 → link thickness.  
Bond type → colour mapping is in `js/constellation.js` → `LINK_COLORS`.

---

## 🎨 Styling tokens — `css/style.css` → `:root`

| Token | Purpose |
|---|---|
| `--bg` / `--bg-card` / `--bg-hover` | Background layers |
| `--text` / `--text-muted` / `--text-faint` | Text hierarchy |
| `--shinobu` / `--natasha` | Vestige accent colours |
| `--border` / `--border-hover` | Card borders |
| `--radius` | Corner rounding |
| `--transition` | Global animation easing |

---

## 🖥️ Running locally

The JS files use `fetch()` to load the JSON — they need a local server:

```bash
python3 -m http.server 8080   # then open http://localhost:8080
npx serve .
# or VS Code → Live Server extension
```

> Opening `index.html` directly as `file://` won't work (fetch is blocked).
