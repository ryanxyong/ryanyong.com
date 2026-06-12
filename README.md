# ryanyong.com

Personal site for Ryan Yong — staff engineer & portrait photographer.
React + Vite, plain CSS design tokens, no backend or third-party services.
Deploys to GitHub Pages on a custom domain.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into /dist
npm run preview  # preview the production build
```

Node 20.19+ or 22+ required (Vite 8).

## Where everything lives

```
src/
  data/        ← all your content (edit these, not the components)
    site.js      name, nav, socials, hero copy, about copy
    work.js      case studies
    writing.js   posts
    photos.js    gallery
    eating.js    restaurant list
  pages/       ← one file per route
  components/  ← Nav, Footer, Layout, Gallery
  styles/
    tokens.css   ← the whole visual identity (colors, type, spacing)
    global.css   ← layout + component styles
public/
  CNAME          ← ryanyong.com (keeps your domain on every deploy)
  photos/        ← drop image files here
```

### Editing content
Everything readable on the site is a string in `src/data/`. Add a case study by
appending an object to `work.js`; add a post by appending to `writing.js`. Routes,
list pages, and "next" links update on their own.

> See **`TASKS.md`** for copy-paste recipes (add a post, photo, case study, restaurant,
> change the accent, self-host a font, add a section).

### Adding photos
Drop a file into `public/photos/`, then in `src/data/photos.js` set
`src: '/photos/your-file.jpg'`. Any item with `src: null` shows a clean
placeholder, so the grid always looks intentional.

### Re-skinning
Open `src/styles/tokens.css`. Change `--accent`, the background, or the fonts in
one place and the whole site follows. Dark mode is handled automatically via
`prefers-color-scheme`.

### Want a custom font (still no font service)
Drop a `.woff2` into `public/fonts/`, add one `@font-face` rule at the top of
`global.css`, and point `--font-display` at it in `tokens.css`. Self-hosted, so
nothing external is loaded.

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`)
that builds and deploys automatically.

1. Push the repo to GitHub.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Every push to `main` rebuilds and deploys. No `gh-pages` branch to manage.

### Custom domain (ryanyong.com)
1. In **Settings → Pages → Custom domain**, enter `ryanyong.com` and save.
   (The `public/CNAME` file already pins this so it survives redeploys.)
2. At your DNS provider, point the apex domain at GitHub Pages with four `A`
   records:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   And, if you want `www` to work too, a `CNAME` record for `www` →
   `<your-username>.github.io`.
3. Tick **Enforce HTTPS** once the certificate provisions (can take a few minutes).

> GitHub occasionally updates its Pages IP addresses — confirm the current ones
> in GitHub's "Managing a custom domain" docs before setting DNS.

## Notes
- Routing uses `HashRouter`, so URLs look like `ryanyong.com/#/work`. This is the
  zero-config choice for Pages: deep links never 404. To switch to clean URLs
  later, swap to `BrowserRouter` and add a `404.html` redirect.
- There is intentionally no email-capture service. "Say hello" and the footer use
  a plain `mailto:` link.
```
