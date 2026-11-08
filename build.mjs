// Zero-dependency static build: node build.mjs  ->  dist/
// Cloudflare Pages runs this with build command "node build.mjs" and output directory "dist".
import { mkdirSync, rmSync, writeFileSync, readFileSync, readdirSync, copyFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, PUBLISHERS, APPS, RELATED, SOURCES, PAGES, longDate } from './src/content.mjs';

const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, 'dist');
const O = SITE.origin;
const url = (path) => O + path;

const css = readFileSync(join(root, 'src/styles.css'), 'utf8').replace(/\n+/g, '').trim();
const logo = readFileSync(join(root, 'src/static/favicon.svg'), 'utf8').trim().replace('<svg ', '<svg aria-hidden="true" ');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const text = (html) =>
  html.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim();
const byPath = Object.fromEntries(PAGES.map((p) => [p.path, p]));

// ---------------------------------------------------------------------------
// Structured data: one @graph per page, shared entities referenced by @id
// ---------------------------------------------------------------------------
const ID = {
  site: `${O}/#website`,
  image: `${O}/#og-image`,
  org: (k) => `${O}/#org-${k}`,
  app: (k) => `${O}/#app-${k}`,
};

const orgNode = (p) => ({
  '@type': 'Organization',
  '@id': ID.org(p.id),
  name: p.name,
  email: p.email,
  url: p.id === 'helperg' ? RELATED.faxb2b : url('/about/'),
  address: {
    '@type': 'PostalAddress',
    streetAddress: p.street,
    addressLocality: p.city,
    ...(p.region ? { addressRegion: p.region } : {}),
    postalCode: p.postal,
    addressCountry: p.country,
  },
});

const WEBSITE = {
  '@type': 'WebSite',
  '@id': ID.site,
  url: url('/'),
  name: SITE.name,
  alternateName: SITE.domain,
  description: 'Apps and guides for printing, scanning, faxing and editing PDFs from an iPhone or Android phone.',
  inLanguage: 'en-GB',
  publisher: { '@id': ID.org('hrhelperg') },
};

const IMAGE = { '@type': 'ImageObject', '@id': ID.image, url: url('/og.png'), width: 1200, height: 630 };

const appNode = (a) => ({
  '@type': 'MobileApplication',
  '@id': ID.app(a.key),
  name: a.brand,
  alternateName: [...new Set([a.iosName, a.androidName])].filter((n) => n !== a.brand),
  url: url(a.path),
  description: a.tagline,
  applicationCategory: a.category,
  operatingSystem: 'iOS, iPadOS, Android',
  featureList: a.features,
  publisher: { '@id': ID.org(a.publisher) },
  downloadUrl: [a.appStore, a.googlePlay],
  installUrl: a.appStore,
  sameAs: [a.appStore, a.googlePlay],
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP', description: 'Free to download; optional in-app Pro subscription.' },
  ...(a.rating ? { aggregateRating: { '@type': 'AggregateRating', ratingValue: a.rating.value, ratingCount: a.rating.count, bestRating: '5', worstRating: '1' } } : {}),
});

function crumbsFor(page) {
  const list = [{ name: 'Home', path: '/' }];
  if (page.parent) list.push({ name: byPath[page.parent].nav, path: page.parent });
  list.push({ name: page.nav, path: page.path });
  return list;
}

function graphFor(page) {
  const pageUrl = url(page.path);
  const pubs = new Set(['hrhelperg', ...page.apps.map((k) => APPS[k].publisher)]);
  const nodes = [...[...pubs].map((k) => orgNode(PUBLISHERS[k])), WEBSITE, IMAGE, ...page.apps.map((k) => appNode(APPS[k]))];
  const webpage = {
    '@type': page.type === 'about' ? 'AboutPage' : page.type === 'hub' ? 'CollectionPage' : 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: page.title,
    headline: page.h1,
    description: page.description,
    inLanguage: 'en-GB',
    isPartOf: { '@id': ID.site },
    datePublished: SITE.published,
    dateModified: SITE.reviewed,
    lastReviewed: SITE.reviewed,
    author: { '@id': ID.org('hrhelperg') },
    publisher: { '@id': ID.org('hrhelperg') },
    primaryImageOfPage: { '@id': ID.image },
  };
  if (page.type === 'app') webpage.mainEntity = { '@id': ID.app(page.apps[0]) };
  else if (page.apps.length) webpage.about = page.apps.map((k) => ({ '@id': ID.app(k) }));
  if (page.path !== '/') {
    webpage.breadcrumb = { '@id': `${pageUrl}#breadcrumb` };
    nodes.push({
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: crumbsFor(page).map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: url(c.path) })),
    });
  }
  nodes.push(webpage);
  if (page.faq?.length) {
    nodes.push({
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      isPartOf: { '@id': `${pageUrl}#webpage` },
      mainEntity: page.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: text(f.a) } })),
    });
  }
  if (page.howto) {
    nodes.push({
      '@type': 'HowTo',
      '@id': `${pageUrl}#howto`,
      name: page.howto.name,
      totalTime: page.howto.totalTime,
      tool: [{ '@type': 'HowToTool', name: 'An iPhone, iPad or Android phone' }],
      step: page.howto.steps.map(([name, t], i) => ({ '@type': 'HowToStep', position: i + 1, name, text: text(t), url: `${pageUrl}#step-${i + 1}` })),
    });
  }
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }).replace(/</g, '\\u003c');
}

// ---------------------------------------------------------------------------
// HTML
// ---------------------------------------------------------------------------
const NAV = ['/printer/', '/fax/', '/pdf-editor/', '/guides/', '/about/'].map((p) => byPath[p]);
const GUIDES = PAGES.filter((p) => p.type === 'guide');

function layout({ page, main, jsonld, robots = 'index, follow, max-snippet:-1, max-image-preview:large' }) {
  const canonical = page.path ? url(page.path) : null;
  const active = page.parent || page.path;
  return `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<meta name="robots" content="${robots}">
${canonical ? `<link rel="canonical" href="${canonical}">\n<link rel="alternate" hreflang="en-GB" href="${canonical}">\n<link rel="alternate" hreflang="x-default" href="${canonical}">` : ''}
<meta property="og:type" content="${page.path === '/' ? 'website' : 'article'}">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:locale" content="en_GB">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
${canonical ? `<meta property="og:url" content="${canonical}">` : ''}
<meta property="og:image" content="${url('/og.png')}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Smart Printer: print, scan, fax and edit PDFs from your phone">
<meta name="twitter:card" content="summary_large_image">
${page.path && page.path !== '/' ? `<meta property="article:modified_time" content="${SITE.reviewed}">` : ''}
${page.type === 'app' ? appBanner(APPS[page.apps[0]]) : ''}
<meta name="theme-color" content="#2454d6">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="sitemap" type="application/xml" href="/sitemap.xml">
<link rel="alternate" type="text/plain" href="/llms.txt" title="Plain-text summary for AI assistants">
<style>${css}</style>
${jsonld ? `<script type="application/ld+json">${jsonld}</script>` : ''}
</head>
<body${page.type === 'home' ? ' class="home"' : ''}>
<a class="skip" href="#main">Skip to content</a>
<header class="site">
<div class="wrap bar">
<a class="brand" href="/" aria-label="Smart Printer home">${logo}<div>Smart<span>Printer</span></div></a>
<nav aria-label="Main"><ul>
${NAV.map((p) => `<li><a href="${p.path}"${p.path === active ? ' aria-current="page"' : ''}>${p.nav}</a></li>`).join('')}
</ul></nav>
</div>
</header>
<main id="main" class="wrap">
${main}
</main>
<footer>
<div class="wrap">
<div class="fcols">
<section><h2>Apps</h2><ul>${Object.values(APPS).map((a) => `<li><a href="${a.path}">${a.brand}</a></li>`).join('')}</ul></section>
<section><h2>Guides</h2><ul>${GUIDES.map((g) => `<li><a href="${g.path}">${g.h1.replace(/^How to /, '').replace(/^./, (c) => c.toUpperCase())}</a></li>`).join('')}</ul></section>
<section><h2>Company</h2><ul><li><a href="/about/">About and contact</a></li><li><a href="/privacy/">Privacy notice</a></li><li><a href="${RELATED.printerArchive}">PrinterArchive.net</a></li><li><a href="${RELATED.faxb2b}">faxB2B</a></li></ul></section>
</div>
<p>Smart Printer and PDF Editor are published by ${PUBLISHERS.hrhelperg.name}, ${PUBLISHERS.hrhelperg.street}, ${PUBLISHERS.hrhelperg.postal} ${PUBLISHERS.hrhelperg.city}, ${PUBLISHERS.hrhelperg.countryName}. FAX: send from phone is published by ${PUBLISHERS.helperg.name}. Contact: <a href="mailto:${SITE.email}">${SITE.email}</a></p>
<p>App Store is a service mark of Apple Inc. Google Play is a trademark of Google LLC. AirPrint is a trademark of Apple Inc. Facts checked <time datetime="${SITE.reviewed}">${longDate(SITE.reviewed)}</time>. © ${SITE.reviewed.slice(0, 4)} ${PUBLISHERS.hrhelperg.name}</p>
</div>
</footer>
</body>
</html>
`;
}

// iOS Safari shows a native "Open / View" banner for the app on its own page.
const appBanner = (a) => `<meta name="apple-itunes-app" content="app-id=${a.appStore.match(/id(\d+)/)[1]}">`;

// Give every <td> of a .stack table its column name, so narrow screens can show rows as cards.
function labelStackTables(html) {
  return html.replace(/<table class="stack">([\s\S]*?)<\/table>/g, (table, inner) => {
    const labels = [...(inner.match(/<thead>([\s\S]*?)<\/thead>/)?.[1] || '').matchAll(/<th[^>]*>([\s\S]*?)<\/th>/g)].map((m) => text(m[1]));
    const body = inner.replace(/<tr>([\s\S]*?)<\/tr>/g, (row, cells) => {
      if (!/<td/.test(row)) return row;
      let i = -1;
      return '<tr>' + cells.replace(/<(th|td)(\s[^>]*)?>/g, (tag, name, attrs = '') => {
        i += 1;
        return name === 'td' && labels[i] ? `<td data-label="${esc(labels[i])}"${attrs}>` : tag;
      }) + '</tr>';
    });
    return `<table class="stack">${body}</table>`;
  });
}

function renderPage(page) {
  const crumbs =
    page.path === '/'
      ? ''
      : `<nav class="crumbs" aria-label="Breadcrumb">${crumbsFor(page)
          .map((c, i, all) => (i === all.length - 1 ? `<span aria-current="page">${c.name}</span>` : `<a href="${c.path}">${c.name}</a>`))
          .join(' › ')}</nav>`;
  const faq = page.faq?.length
    ? `
<section class="faq" aria-labelledby="faq">
<h2 id="faq">Frequently asked questions</h2>
${page.faq.map((f) => `<h3>${f.q}</h3>\n<p>${f.a}</p>`).join('\n')}
</section>`
    : '';
  const meta = ['guide', 'app'].includes(page.type)
    ? `<p class="meta">Updated <time datetime="${SITE.reviewed}">${longDate(SITE.reviewed)}</time></p>`
    : '';
  const main = `<article>
${crumbs}
<h1>${page.h1}</h1>
${meta}
${labelStackTables(page.body(page))}
${faq}
</article>`;
  return layout({ page, main, jsonld: graphFor(page) });
}

// ---------------------------------------------------------------------------
// Text files
// ---------------------------------------------------------------------------
function llmsTxt() {
  const allFaq = [];
  for (const p of PAGES) for (const f of p.faq || []) if (!allFaq.some((x) => x.q === f.q)) allFaq.push(f);
  const apps = Object.values(APPS)
    .map(
      (a) => `### ${a.brand}

${a.tagline} Store names: "${a.iosName}" (App Store, iPhone and iPad) and "${a.androidName}" (Google Play, Android). Free to download with an optional in-app Pro subscription.${a.rating ? ` Rated ${a.rating.value}/5 from ${a.rating.count} App Store ratings (November 2026).` : ''}

${a.features.map((f) => `- ${f}`).join('\n')}

Page: ${url(a.path)} · App Store: ${a.appStore} · Google Play: ${a.googlePlay}`,
    )
    .join('\n\n');
  return `# ${SITE.name} (${SITE.domain})

> Three mobile apps for everyday paperwork on iPhone, iPad and Android: Smart Printer (print to Wi-Fi printers via AirPrint, plus a document scanner), FAX: send from phone (send faxes without a fax machine) and PDF Editor (edit, sign, scan with OCR and convert PDFs). The site also has practical guides to printing, scanning, signing and faxing from a phone. Facts last checked ${longDate(SITE.reviewed)} against the official store listings.

## Apps

${apps}

## Pages

${PAGES.map((p) => `- [${p.h1}](${url(p.path)}): ${p.description}`).join('\n')}

## Questions and answers

${allFaq.map((f) => `### ${f.q}\n\n${text(f.a)}`).join('\n\n')}

## Sources

${SOURCES.map((s) => `- [${s.label}](${s.url})`).join('\n')}

## Publishers

- ${PUBLISHERS.hrhelperg.name}, ${PUBLISHERS.hrhelperg.street}, ${PUBLISHERS.hrhelperg.postal} ${PUBLISHERS.hrhelperg.city}, ${PUBLISHERS.hrhelperg.countryName} (Smart Printer, PDF Editor, this website). Contact: ${PUBLISHERS.hrhelperg.email}
- ${PUBLISHERS.helperg.name}, ${PUBLISHERS.helperg.street}, ${PUBLISHERS.helperg.city}, ${PUBLISHERS.helperg.region} ${PUBLISHERS.helperg.postal}, ${PUBLISHERS.helperg.countryName} (FAX: send from phone, faxB2B). Contact: ${PUBLISHERS.helperg.email}
`;
}

const AI_AGENTS = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'anthropic-ai',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Googlebot', 'Bingbot', 'Applebot', 'Applebot-Extended',
  'meta-externalagent', 'Amazonbot', 'DuckAssistBot', 'MistralAI-User', 'cohere-ai', 'CCBot',
];

const robotsTxt = () => `# ${SITE.domain}
# Search engines and AI assistants are welcome to read, quote and cite every page.
User-agent: *
Content-Signal: search=yes, ai-input=yes, ai-train=yes
Allow: /

${AI_AGENTS.map((a) => `User-agent: ${a}`).join('\n')}
Allow: /

Sitemap: ${url('/sitemap.xml')}
`;

const sitemapXml = () => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map((p) => `  <url><loc>${url(p.path)}</loc><lastmod>${SITE.reviewed}</lastmod></url>`).join('\n')}
</urlset>
`;

const headers = () => `/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: DENY
  Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()
  Content-Security-Policy: default-src 'none'; style-src 'unsafe-inline'; img-src 'self'; script-src https://static.cloudflareinsights.com; connect-src https://cloudflareinsights.com; base-uri 'none'; form-action 'none'; frame-ancestors 'none'
  Strict-Transport-Security: max-age=31536000

/llms.txt
  Content-Type: text/plain; charset=utf-8
  Cache-Control: public, max-age=3600

/og.png
  Cache-Control: public, max-age=604800

/favicon.svg
  Cache-Control: public, max-age=604800

/favicon.ico
  Content-Type: image/x-icon
  Cache-Control: public, max-age=604800

/apple-touch-icon.png
  Cache-Control: public, max-age=604800

https://:project.pages.dev/*
  X-Robots-Tag: noindex

https://:version.:project.pages.dev/*
  X-Robots-Tag: noindex
`;

// www -> apex, permanent. Works once www.smartprinter.uk is attached to the Pages project.
const redirects = () => `https://www.${SITE.domain}/* https://${SITE.domain}/:splat 301
/index.html / 301
`;

// ---------------------------------------------------------------------------
// Write
// ---------------------------------------------------------------------------
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
const write = (rel, body) => {
  const f = join(out, rel);
  mkdirSync(dirname(f), { recursive: true });
  writeFileSync(f, body);
};

const html = {};
for (const page of PAGES) {
  const rel = page.path === '/' ? 'index.html' : join(page.path.slice(1), 'index.html');
  html[page.path] = renderPage(page);
  write(rel, html[page.path]);
}

write(
  '404.html',
  layout({
    page: { path: null, apps: [], title: 'Page not found | Smart Printer', description: 'This page does not exist.' },
    robots: 'noindex',
    main: `<article><h1>Page not found</h1><p class="lead">This page does not exist. Try the <a href="/">home page</a>, the <a href="/printer/">Smart Printer app</a>, the <a href="/fax/">FAX app</a>, <a href="/pdf-editor/">PDF Editor</a> or our <a href="/guides/">guides</a>.</p></article>`,
  }),
);
write('llms.txt', llmsTxt());
write('robots.txt', robotsTxt());
write('sitemap.xml', sitemapXml());
write('_headers', headers());
write('_redirects', redirects());

const staticDir = join(root, 'src/static');
if (existsSync(staticDir)) for (const f of readdirSync(staticDir)) copyFileSync(join(staticDir, f), join(out, f));

// ---------------------------------------------------------------------------
// Checks: fail the build instead of shipping a broken page
// ---------------------------------------------------------------------------
const problems = [];
const allowedHosts = new Set(['smartprinter.uk', 'apps.apple.com', 'play.google.com', 'faxb2b.com', 'printerarchive.net', 'docs.google.com']);
const files = new Set(readdirSync(out, { recursive: true }).map((f) => '/' + f.replace(/\\/g, '/')));
const exists = (path) => files.has(path) || files.has(path.replace(/\/?$/, '/index.html'));
const titles = new Set();

for (const page of PAGES) {
  const h = html[page.path];
  if (page.title.length > 60) problems.push(`${page.path}: title is ${page.title.length} chars (max 60)`);
  if (titles.has(page.title)) problems.push(`${page.path}: duplicate title`);
  titles.add(page.title);
  if (page.description.length < 110 || page.description.length > 160)
    problems.push(`${page.path}: description is ${page.description.length} chars (110-160)`);
  if ((h.match(/<h1[\s>]/g) || []).length !== 1) problems.push(`${page.path}: needs exactly one h1`);
  for (const m of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch (e) { problems.push(`${page.path}: invalid JSON-LD (${e.message})`); }
  }
  for (const [, href] of h.matchAll(/href="([^"]+)"/g)) {
    if (href.startsWith('#') || href.startsWith('mailto:')) continue;
    if (href.startsWith('/')) {
      if (!exists(href.split('#')[0])) problems.push(`${page.path}: broken internal link ${href}`);
    } else if (!allowedHosts.has(new URL(href.replace(/&amp;/g, '&')).hostname)) problems.push(`${page.path}: unexpected external link ${href}`);
  }
  for (const k of page.type === 'app' ? page.apps : [])
    for (const target of [APPS[k].appStore, APPS[k].googlePlay])
      if (!h.includes(`href="${target}`)) problems.push(`${page.path}: missing store link ${target}`);
  if (/\$\{|undefined|\[object /.test(h)) problems.push(`${page.path}: template leftovers`);
}
for (const f of ['/og.png', '/favicon.svg', '/favicon.ico', '/apple-touch-icon.png'])
  if (!files.has(f)) problems.push(`missing static file ${f}`);

if (problems.length) {
  console.error('Build checks failed:\n- ' + problems.join('\n- '));
  process.exit(1);
}
const size = (p) => Buffer.byteLength(html[p]);
console.log(`Built ${PAGES.length} pages into dist/:\n${PAGES.map((p) => `  ${p.path.padEnd(36)} ${(size(p.path) / 1024).toFixed(1)} kB`).join('\n')}`);
