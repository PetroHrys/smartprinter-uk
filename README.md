# smartprinter.uk

A small, fast static site for three mobile apps: **Smart Printer** (print and scan), **FAX: send from phone** and **PDF Editor**. It is written so search engines and AI assistants can read, quote and cite it, and every page sends readers to the App Store and Google Play.

Live: https://smartprinter.uk/ · Hosted on Cloudflare Pages (free plan), deployed automatically from `main`.

## Structure

- `src/content.mjs` holds every fact, page, guide and FAQ. Edit content only here.
- `src/styles.css` is the whole stylesheet; it is inlined into each page (no extra requests, no JavaScript, no web fonts).
- `src/static/` holds files copied as they are: icons and the social image (`og.png`).
- `build.mjs` (Node 18+, no dependencies) writes `dist/`: one HTML page per entry, `404.html`, `sitemap.xml`, `robots.txt`, `llms.txt`, Cloudflare `_headers` and `_redirects`. It checks titles, descriptions, JSON-LD, internal and external links and store links, and fails the build if anything is off.

```bash
node build.mjs                 # build into dist/
npm run preview                # build and serve on http://localhost:8788
```

## Pages

| Path | Purpose |
|---|---|
| `/` | Hub for the three apps, "which app do I need", FAQ |
| `/printer/`, `/fax/`, `/pdf-editor/` | One page per app (MobileApplication, HowTo, FAQPage schema) |
| `/guides/…` | Five how-to guides targeting long-tail searches (print from iPhone/Android, scan, sign a PDF, send a fax in the UK) |
| `/about/`, `/privacy/` | Publishers, contact, sources; UK GDPR privacy notice |

## SEO and AI-search features

- Answer-first pages, one H1, titles ≤ 60 chars, descriptions 110–160 chars (enforced by the build).
- JSON-LD `@graph` per page: Organization, WebSite, MobileApplication (with offers and App Store ratings), WebPage, BreadcrumbList, FAQPage, HowTo.
- `en-GB` language, hreflang, canonical URLs, Open Graph image, `apple-itunes-app` smart banner on app pages.
- `llms.txt` with all facts and Q&A in plain text; `robots.txt` welcomes search and AI crawlers.
- Google Play links carry an install referrer (`utm_source=smartprinter.uk`, `utm_campaign=<page>`), so installs from the site show up in Play Console.
- `*.pages.dev` copies are served with `X-Robots-Tag: noindex`; `www` redirects to the apex.

## Updating facts

1. Re-check the store listings in `SOURCES` (names, features, ratings).
2. Edit `src/content.mjs` and set `SITE.reviewed` to today's date (drives the visible date, `dateModified` and sitemap `lastmod`).
3. `node build.mjs`, commit and push to `main`. Cloudflare Pages rebuilds and deploys in about a minute.

To re-render the images after changing `src/static/favicon.svg`, run `python3 scripts/make-images.py` with Playwright and Chromium installed.

## Deployment (Cloudflare Pages)

- Pages project `smartprinter-uk`, connected to this GitHub repo, production branch `main`.
- Build command `node build.mjs`, output directory `dist`, environment variable `NODE_VERSION=22`.
- Custom domains: `smartprinter.uk` and `www.smartprinter.uk` (DNS in the same Cloudflare account).
