# Shared Souls — Fan Reference Site

> Interactive reference for *Shared Souls* by Arcnote · AO3 #71180021
> 97 chapters · 256,505 words · Completed 2026-01-20

---

## 📁 Structure

```
shared-souls/
│
├── index.html                  ← Overview / homepage
│
├── pages/
│   ├── characters.html         ← 22 character profiles (filterable, detail panel)
│   ├── arcs.html               ← 26-arc timeline + tension chart
│   ├── constellation.html      ← Force-directed relationship graph
│   └── echoes.html             ← Key quotes (filterable by speaker)
│
├── css/
│   └── style.css               ← All styles (CSS tokens + every component)
│
├── data/
│   └── characters.js           ← ✏️  MAIN DATA FILE — edit here for all content
│       ├── CHARACTERS{}        ← 22 full character profiles
│       ├── ARCS[]              ← 26 arcs (summaries, tension, key events)
│       ├── DIALOGUE[]          ← 20 key quotes with speaker/chapter/context
│       └── RELATIONSHIPS[]     ← 23 bonds (source, target, type, strength)
│
└── js/
    └── nav.js                  ← (unused helper, kept for reference)
```

> Each page is self-contained: it imports only the data it needs from `data/characters.js`
> and handles its own JS inline. No build step needed.

---

## 🔧 How to edit

### ✏️ Add / update a character

Open `data/characters.js` → `CHARACTERS` object. Each entry:

```js
my_char: {
  id: "my_char",
  name: "Full Name",
  alias: "Hero Name",            // optional
  fandom: "MHA",                 // "MHA" | "Demon Slayer" | "MCU" | "MHA (OC)"
  role: "classmate",             // drives filter + detail label
  color: "#48BB78",              // hex — top accent bar + constellation node
  first_chapter: 7,
  description: "...",
  quirk: "...",                  // optional
  fighting_style: "...",         // optional
  appearance: "...",             // optional
  key_relationships: ["momo"],   // array of other character IDs
  notable_moments: [
    { ch: 12, desc: "First appearance." }
  ]
}
```

### ✏️ Add an arc

`data/characters.js` → `ARCS` array:

```js
{
  id: "arc_id",
  saga: "Saga Name",
  name: "Arc Name",
  chapters: [firstCh, lastCh],   // same number if single chapter
  summary: "...",
  tension: 75,                   // 0–100 · ≥90 red · ≥70 orange · ≥45 purple · else green
  key_events: ["Event (Ch N)"],
  color: "#9F7AEA"               // dot colour on the timeline
}
```

### ✏️ Add a quote

`data/characters.js` → `DIALOGUE` array:

```js
{ ch: 42, speaker: "momo", text: "...", context: "Ch 42 — Scene", mood: "determined" }
```

Speaker IDs for colour: `momo` `shinobu` `natasha` `ekaterina` `katsuki` `hanta` `kurohana` `allMight` `narrator`

### ✏️ Add a relationship bond

`data/characters.js` → `RELATIONSHIPS` array:

```js
{ source: "momo", target: "my_char", type: "ally", label: "Description", strength: 6 }
```

`strength` 1–10 → link thickness on constellation.
Bond type colours are in `constellation.html` → `LINK_COLORS` object.

---

## 🎨 Styling tokens

All design tokens in `css/style.css` → `:root`:

| Variable | Purpose |
|---|---|
| `--bg` / `--bg-card` / `--bg-hover` | Background layers |
| `--text` / `--text-muted` / `--text-faint` | Text hierarchy |
| `--shinobu` / `--natasha` | Vestige accent colours |
| `--border` / `--border-hover` | Card borders |
| `--radius` | Corner rounding |
| `--transition` | Global easing |

---

## 🖥️ Running locally

ES modules require a local server (won't work with `file://`):

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .

# VS Code → Live Server extension
```

Open `http://localhost:8080`
