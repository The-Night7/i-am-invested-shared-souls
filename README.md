# Shared Souls — Fan Reference Site

> Interactive reference dashboard for *Shared Souls* by Arcnote  
> AO3: https://archiveofourown.org/works/71180021  
> 97 chapters · 256,505 words · Completed 2026-01-20

---

## 📁 Project Structure

```
shared-souls/
├── index.html              ← Single-page app (entry point)
├── README.md               ← This file
│
├── css/
│   └── style.css           ← All styles (CSS variables + components)
│
├── data/
│   └── characters.js       ← ✏️  THE MAIN DATA FILE — edit this for content updates
│       ├── CHARACTERS      ← Full character profiles (all 20+ chars)
│       ├── ARCS            ← All 26 arcs with summaries, tension scores, events
│       ├── DIALOGUE        ← Key quotes with speaker, chapter, context
│       └── RELATIONSHIPS   ← Bond graph data (source → target, type, strength)
│
└── js/
    ├── app.js              ← Orchestrates all modules
    └── modules/
        ├── characters.js   ← Char grid + detail panel rendering
        ├── arcs.js         ← Arc timeline + tension bar chart
        ├── constellation.js← Force-directed network graph (canvas)
        └── echoes.js       ← Dialogue archive with filters
```

---

## 🔧 How to Edit

### Add or update a character (`data/characters.js → CHARACTERS`)

Each character is an object key. Example:
```js
new_char: {
  id: "new_char",
  name: "Full Name",
  alias: "Hero Name",          // optional
  fandom: "MHA",               // "MHA" | "Demon Slayer" | "MCU" | "MHA (OC)"
  role: "classmate",           // drives tag colours in grid
  color: "#48BB78",            // hex — node + accent colour
  first_chapter: 7,
  description: "...",
  quirk: "...",                // optional
  fighting_style: "...",       // optional
  appearance: "...",           // optional
  key_relationships: ["momo", "katsuki"],  // array of other char IDs
  notable_moments: [
    { ch: 12, desc: "First appearance." }
  ]
}
```

### Add an arc (`data/characters.js → ARCS`)

```js
{
  id: "arc_id",
  saga: "Saga Name",
  name: "Arc Name",
  chapters: [firstCh, lastCh],
  summary: "One-paragraph summary.",
  tension: 75,              // 0–100, drives bar colour: ≥90 red, ≥70 orange, ≥45 purple, else green
  key_events: ["Event A (Ch N)", "Event B"],
  color: "#9F7AEA"          // dot colour on timeline
}
```

### Add a quote (`data/characters.js → DIALOGUE`)

```js
{ ch: 42, speaker: "momo", text: "...", context: "Ch 42 — Scene description", mood: "determined" }
```

Recognised speaker IDs for colour-coding: `momo`, `shinobu`, `natasha`, `ekaterina`, `katsuki`, `hanta`, `kurohana`, `allMight`, `narrator`

### Add a relationship (`data/characters.js → RELATIONSHIPS`)

```js
{ source: "momo", target: "new_char", type: "ally", label: "Brief description", strength: 6 }
```

`strength` 1–10 controls link thickness on the graph.  
`type` drives link colour — see `LINK_COLORS` in `constellation.js` to add new types.

---

## 🎨 Tweaking the Look

All colour/typography tokens live in `:root` in `css/style.css`.  
Key variables:
- `--bg` / `--bg-card` / `--bg-hover` — background layers
- `--text` / `--text-muted` / `--text-faint` — text hierarchy
- `--shinobu` / `--natasha` — vestige accent colours
- `--border` / `--border-hover` — card borders
- `--transition` — global easing

---

## 🖥️ Running Locally

This is a pure ES-modules project — no build step. Just serve with any static server:

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .

# VS Code → Live Server extension
```

Then open `http://localhost:8080`.

> ⚠️ ES modules require a server (won't work if you open `index.html` directly as `file://`).

---

## 📝 Content Notes

- All data sourced directly from the PDF of the fic (97 chapters, read in full)
- Chapter references are accurate to the AO3 source
- "Tension" scores are narrative judgements, easily adjustable
- Dialogue quotes are paraphrased/summarised where copyright caution applies
- The constellation graph uses a lightweight custom force simulation — no external libs needed
