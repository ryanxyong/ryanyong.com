# TASKS.md — common tasks cheat sheet

Copy-paste recipes for the edits you'll actually do. Every content change is a
data-file edit — you rarely touch components. After any change:

```bash
npm run dev      # check it locally
git add -A && git commit -m "..." && git push   # push to main → auto-deploys
```

---

## Add a writing post

**File:** `src/data/writing.js` — add an object to the `posts` array.
Body is a list of blocks (`p`, `h2`, `quote`) — no markdown needed.

```js
{
  slug: 'a-short-url-slug',          // becomes ryanyong.com/#/writing/a-short-url-slug
  title: 'Your post title',
  date: 'Jun 2026',
  readingTime: '4 min read',
  excerpt: 'One sentence shown in previews and meta.',
  body: [
    { type: 'p', text: 'Opening paragraph.' },
    { type: 'h2', text: 'A subhead' },
    { type: 'p', text: 'More text.' },
    { type: 'quote', text: 'A line you want to pull out.' },
  ],
},
```

Newest posts go at the top of the array. The homepage shows the first three.

---

## Add a photo

**Steps:**
1. Drop the image file into `public/photos/` (e.g. `portrait-sharon.jpg`).
2. **File:** `src/data/photos.js` — add an object to `photos`:

```js
{ id: 'p7', src: '/photos/portrait-sharon.jpg', alt: 'Sharon in window light', caption: 'Sharon, 2026' },
```

- `alt` is required (accessibility) — describe the image, not "photo of".
- Leave `src: null` to show a clean placeholder instead of an image.
- The homepage strip shows the first three; the `/photography` page shows all.

---

## Add a case study

**File:** `src/data/work.js` — add an object to the `work` array.

```js
{
  slug: 'project-slug',              // ryanyong.com/#/work/project-slug
  title: 'What you accomplished, in plain words',
  meta: 'Role · year · an anonymized client descriptor',
  tags: ['multi-agent', 'whatever', 'is-true'],
  summary: 'One sentence for the list view and homepage preview.',
  sections: [
    { heading: 'The problem', body: '...' },
    { heading: 'What I built', body: '...' },
    { heading: 'The outcome', body: '...' },   // directional, not invented numbers
  ],
},
```

The `/work` list, the detail page, and the "next" link all wire up automatically.
Keep clients anonymized ("a Fortune 100 CPG company") unless cleared to name them.

---

## Add a restaurant

**File:** `src/data/eating.js` — add an object to `places`:

```js
{ name: 'The place', area: 'Neighborhood', note: 'One honest, opinionated line.' },
```

Homepage shows the first two; the `/eating` page shows all.

---

## Edit hero / about / email / socials

**File:** `src/data/site.js`.
- Hero text → the `hero` object (`status`, `title`, `lead`).
- About text → the `about` object (`paragraphs` array + `now`).
- Public email → `site.email` (used by "Say hello" and the footer).
- Nav items → the `nav` array. Social links → the `social` array (replace the bare
  profile URLs with your real handles).

---

## Change the accent color (or re-skin)

**File:** `src/styles/tokens.css`. Edit the token once; the whole site follows.

```css
--accent:     #D85A30;   /* links, status dot, tag fills, pull-quote rule */
--accent-ink: #993C1D;   /* darker — used for accent-colored text on light bg */
--accent-wash:#FAECE7;   /* faint accent fill behind tags */
```

If you change the accent, set its three values together, and update the dark-theme
block (`@media (prefers-color-scheme: dark)`) lower in the same file so it works in
both modes. Same pattern for backgrounds and text colors.

---

## Use a custom font (no font service)

1. Put a `.woff2` in `public/fonts/` (e.g. `display.woff2`).
2. Add to the top of `src/styles/global.css`:

```css
@font-face {
  font-family: 'Your Display';
  src: url('/fonts/display.woff2') format('woff2');
  font-display: swap;
}
```

3. Point the token at it in `tokens.css`:

```css
--font-display: 'Your Display', Georgia, serif;
```

Self-hosted, so nothing external loads.

---

## Add a whole new section (e.g. "Talks")

Five steps, following the existing pattern:
1. New data file `src/data/talks.js` (export an array).
2. New page `src/pages/Talks.jsx` that maps over it.
3. Add `<Route path="/talks" element={<Talks />} />` in `src/App.jsx`.
4. Add `{ label: 'Talks', to: '/talks' }` to the `nav` array in `site.js`.
5. (Optional) Add a preview section to `src/pages/Home.jsx`.

See `AGENTS.md` §4 for the conventions.

---

## Publish a change

Push to `main`. GitHub Actions builds and deploys automatically (see
`.github/workflows/deploy.yml`). No manual build or `gh-pages` branch needed.

**Gotcha when writing JSX (not data files):** in `.jsx` markup, type literal
characters (’ — →), not `\u2019`-style escapes — those only resolve inside the JS
strings in `data/`.
