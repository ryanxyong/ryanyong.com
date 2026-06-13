# AGENTS.md

Context and working agreement for AI agents (and humans) making changes to this
repository. Read this before editing. The companion `README.md` covers setup and
deployment for a human operator; this file covers *how to work in the codebase
without breaking its intent*.

---

## 1. What this is

The personal site for **Ryan Yong** — a staff software engineer (forward-deployed)
who is also a portrait photographer. It is a static React site at `ryanyong.com`.

**Purpose, in priority order** (this shapes every product decision):
1. Build a recognizable personal brand / network.
2. Open career, startup, and advisory doors.
3. Showcase photography.
4. Share interests (food; occasionally finance, via writing only).

**Audience:** primarily recruiters/hiring managers and founders/collaborators at
the same time. The site is deliberately *not* a résumé dump and *not* a lifestyle
blog. The target is "serious work, distinctive person."

**Design north star:** editorial restraint, one accent used sparingly, photography
given real presence, one confident typographic gesture (the serif wordmark). When
in doubt, remove an accessory rather than add one.

---

## 2. Stack & hard constraints

- **Vite + React 18**, `react-router-dom` v6 using **`HashRouter`**.
- **Plain CSS with design tokens** (no Tailwind, no CSS-in-JS, no CSS Modules).
- **No backend and no third-party runtime services.** This is an explicit owner
  requirement, not an accident. Do **not** add: analytics scripts, an email-capture
  service, a font CDN, a comments widget, or any external API call at runtime.
  Contact is a plain `mailto:` link.
- If a feature seems to *need* a service (e.g. a newsletter), surface the tradeoff
  to the owner and propose a self-contained alternative first. Do not add it silently.

Why `HashRouter`: GitHub Pages has no server-side routing, so deep links to client
routes would 404 under a normal router. HashRouter (`/#/work`) needs zero config and
never 404s. Don't switch to `BrowserRouter` without also adding a `404.html`
redirect shim and updating this file.

Why `base: '/'` in `vite.config.js`: the site is served from the root of a custom
domain. If the custom domain is ever removed and the site moves to
`username.github.io/repo`, change `base` to `'/repo/'`.

---

## 3. Project map

```
public/
  CNAME          ← "ryanyong.com" — KEEP. Pins the custom domain across deploys.
  .nojekyll      ← KEEP. Stops GitHub Pages running Jekyll on the output.
  favicon.svg
  photos/        ← real image files go here
src/
  main.jsx       ← entry; imports global.css
  App.jsx        ← HashRouter + all route definitions
  components/
    Layout.jsx   ← Nav + Footer + scroll-to-top on route change
    Nav.jsx      ← sticky header, pulls links from data/site.js; collapses to
                   a hamburger menu under 640px (closes on route change)
    Footer.jsx   ← mailto + socials
    Gallery.jsx  ← photo grid; renders a placeholder when src is null
  pages/         ← one component per route (Home, Work, CaseStudy, Writing, Post,
                   Photography, Eating, About, NotFound)
  data/          ← ALL editable content lives here (see §4)
  styles/
    tokens.css   ← the entire visual identity (color, type, spacing, dark mode)
    global.css   ← reset, layout primitives, component styles
.github/workflows/deploy.yml  ← CI: build + deploy to Pages on push to main
```

---

## 4. Content model — the most important section

**Content is data, not markup.** Components are generic; everything readable lives
in `src/data/`. To change copy or add items, edit data files — do not hardcode
content into components.

- `site.js` — name, nav array, socials, hero copy, about copy, public email.
- `work.js` — array of case studies. Shape:
  `{ slug, title, meta, tags[], summary, sections: [{ heading, body }] }`.
  Add an object → the `/work` list, the `/work/:slug` page, and the "next" link all
  update automatically. Helpers `getWork(slug)` and `nextWork(slug)` already exist.
- `writing.js` — array of posts. Body is a block list so there's **no markdown
  dependency**: `{ type: 'p' | 'h2' | 'quote', text }`. Add a block type only if you
  also handle it in `pages/Post.jsx`.
- `photos.js` — gallery items `{ id, src, alt, caption }`. `src: null` renders a
  clean placeholder; a real path like `/photos/x.jpg` renders the image. **`alt` is
  required** on every item.
- `eating.js` — `{ name, area, note }` per place.

When adding a new content *type* (e.g. a "Talks" section), follow the existing
pattern: a data file, a page that maps over it, a route in `App.jsx`, a nav entry in
`site.js`, and a homepage preview section if it belongs there.

---

## 5. Design system

`src/styles/tokens.css` is the single source of truth. Re-skinning the whole site
means editing tokens, not chasing values through components.

- **Color:** light theme by default, dark theme via `prefers-color-scheme` — every
  color is a token defined in both. If you introduce a new color, add it as a token
  in **both** themes; never hardcode a hex in a component or in `global.css`.
- **Accent:** `--accent` (coral) is used sparingly and on purpose — links, the status
  dot, the pull-quote rule, tag fills. Adding more accent dilutes it. Resist.
- **Type:** `--font-display` is Georgia (editorial serif, ships everywhere, no font
  service); `--font-body` is the system sans stack. To add a custom face, self-host
  a `.woff2` under `public/fonts/`, add one `@font-face` in `global.css`, repoint the
  token. Never add a font CDN link.
- **Structure encodes meaning.** Do not add numbered markers (01/02/03) to the
  homepage sections — they are categories, not a sequence, so numbering them would be
  decoration. (An earlier draft had this; it was removed deliberately.)
- **Quality floor — maintain it:** responsive to mobile, visible `:focus-visible`
  outlines, `prefers-reduced-motion` respected (it disables the hero animation and
  smooth scroll). Don't regress these.

---

## 6. Conventions & gotchas

- **JSX text vs JS strings — the easy bug.** `\uXXXX` escapes only resolve inside
  **JS string literals** (i.e. the `data/` files). In **JSX text nodes** they render
  literally as backslash-u. So in `data/*.js` use `\u2019`/`\u2014` freely, but in
  `.jsx` markup type the literal character (’ — → “ ”) or a JSX expression. This was
  hit during the initial build; check it whenever you add JSX copy.
- **`.section` is vertical-padding only — keep it that way.** Interior pages put
  `.page` and `.section` on the *same* element (`<article className="page section">`).
  `.page` supplies the horizontal gutter (`padding: 0 var(--gutter)`); `.section`
  must only set vertical padding via `padding-block`. If you ever rewrite `.section`
  to use the `padding` shorthand (e.g. `padding: <v> 0`), its later-in-file `0` will
  silently overwrite `.page`'s gutter and every interior page's text slams against
  the screen edges on mobile. This bug shipped once; don't bring it back.
- **Don't invent metrics.** Case-study outcomes are intentionally directional
  ("substantially", "weeks → hours") because real figures weren't cleared for
  publication. Code comments mark where to swap exact numbers. Never fabricate a
  statistic to fill a placeholder.
- **Client confidentiality.** Enterprise clients are anonymized ("a Fortune 100 CPG
  company", "a major aerospace & defense manufacturer"). This reads as more senior
  and is safer — keep it unless the owner explicitly clears a name.
- **Keep `public/CNAME` and `public/.nojekyll`.** Deleting either breaks the live
  deploy (lost custom domain / Jekyll mangling). Vite copies `public/` into `dist/`
  on build.
- **Verify before handing off:** run `npm run build`. It must finish with no errors.
  Build catches import/syntax issues but not runtime render errors, so also sanity-
  check new pages with `npm run dev`.

---

## 7. Voice & copy (if asked to write content)

Match the owner's register: **direct, understated, concrete, low on fluff.** Plain
verbs, sentence case, no buzzwords or LinkedIn-speak. Lead with the human and the
outcome, keep the tech as a quiet subtitle. The existing hero, about, and case
studies are the reference for tone — read them before writing anything new, and
match their cadence. When possible, ask the owner for a sample of their own writing
rather than guessing the voice.

---

## 8. Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into /dist — must pass clean
npm run preview  # serve the production build locally
```

Deployment is automatic via `.github/workflows/deploy.yml` on push to `main`.

---

## 9. Out of scope unless explicitly requested

Adding services (analytics, newsletter, CMS), switching the router or styling
approach, introducing a UI framework, or changing the visual identity. These are
deliberate decisions documented above — propose, don't unilaterally change. Update
this file in the same change whenever you alter anything it describes.
