// Every fact, page and FAQ lives here. Edit content only in this file.
// Facts were checked against the store listings in SOURCES on SITE.reviewed.

export const SITE = {
  origin: 'https://smartprinter.uk',
  name: 'Smart Printer',
  domain: 'smartprinter.uk',
  reviewed: '2026-11-08',
  published: '2026-11-08',
  email: 'info@hrhelperg.com',
};

export const PUBLISHERS = {
  hrhelperg: {
    id: 'hrhelperg',
    name: 'hrhelperg s.r.o.',
    street: 'Husitská 502/36',
    city: 'Praha',
    postal: '130 00',
    country: 'CZ',
    countryName: 'Czechia',
    email: 'info@hrhelperg.com',
  },
  helperg: {
    id: 'helperg',
    name: 'HELPERG LLC',
    street: '30 N Gould St Ste N',
    city: 'Sheridan',
    region: 'WY',
    postal: '82801',
    country: 'US',
    countryName: 'USA',
    email: 'info@helperg.com',
  },
};

export const RELATED = {
  printerArchive: 'https://printerarchive.net/',
  faxb2b: 'https://faxb2b.com/',
};

export const APPS = {
  printer: {
    key: 'printer',
    brand: 'Smart Printer',
    path: '/printer/',
    iosName: 'Smart Printer: Scan Master Pro',
    androidName: 'Printer Smart: Scan, Print PDF',
    appStore: 'https://apps.apple.com/app/id6746067890',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.helperg.smart.printer',
    publisher: 'hrhelperg',
    icon: 'printer',
    tone: 'blue',
    category: 'UtilitiesApplication',
    tagline: 'Print documents, photos and web pages from your phone to a Wi-Fi printer.',
    bullets: ['PDF, Word, Excel, PowerPoint, JPG, PNG, TXT', 'Over 10,000 Wi-Fi printer models via AirPrint', 'No drivers or computer needed', 'Built-in document scanner'],
    rating: { value: '4.5', count: 111 },
    privacy: 'https://docs.google.com/document/d/11yrh35mfkEWHd2DNptRYTzVXfI34FxhRDnSVHey1VUo/edit?usp=sharing',
    features: [
      'Print documents, photos, emails and web pages',
      'Supports PDF, DOC, XLS, PPT, JPG, PNG and TXT files',
      'Import files from Dropbox and iCloud Drive',
      'Scan documents, IDs, passports, receipts, business cards and notes',
      'Adjust copies, orientation and paper size',
      'Preview PDFs before printing',
      'Works with over 10,000 Wi-Fi printer models via AirPrint',
    ],
  },
  fax: {
    key: 'fax',
    brand: 'FAX: send from phone',
    short: 'FAX',
    path: '/fax/',
    iosName: 'FAX: send from phone',
    androidName: 'FAX: send from phone',
    appStore: 'https://apps.apple.com/app/id6760895885',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.helperg.fax.app',
    publisher: 'helperg',
    icon: 'send',
    tone: 'teal',
    category: 'BusinessApplication',
    tagline: 'Send a fax from your phone. No fax machine, no landline.',
    bullets: ['Send to local and international numbers', 'Scan with the camera or upload a PDF', 'Delivery status for every fax', 'Fax history and one-tap resend'],
    privacy: 'https://docs.google.com/document/d/14Pmh0-lDWM-rJlxZQiUZWAiJzmN9AjRRnLZPaSPM0aI/edit?usp=drivesdk',
    features: [
      'Send faxes to local and international fax numbers',
      'Fax a PDF or a photo taken with the camera',
      'Built-in scanner: crop, enhance and convert before sending',
      'Track the delivery status of every fax',
      'Fax history with one-tap resend',
    ],
  },
  pdf: {
    key: 'pdf',
    brand: 'PDF Editor',
    path: '/pdf-editor/',
    iosName: 'PDF Editor: Scan & Sign Docs',
    androidName: 'PDF Editor: Converter Files',
    appStore: 'https://apps.apple.com/app/id6747341672',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.helperg.editor.documents',
    publisher: 'hrhelperg',
    icon: 'pen',
    tone: 'red',
    category: 'BusinessApplication',
    tagline: 'Edit, sign, scan and convert PDFs on your phone.',
    bullets: ['Sign and fill in PDF forms', 'Scanner with on-device text recognition', 'Convert to and from Word, Excel, JPG', 'Merge, split, compress, password-protect'],
    rating: { value: '4.7', count: 62 },
    features: [
      'Draw or photograph your signature and reuse it',
      'Fill in PDF forms',
      'Add text, images, shapes, stamps and sticky notes',
      'Scan documents, IDs, passports and books with edge detection',
      'On-device text recognition (OCR); QR and barcode reader',
      'Convert PDF to and from Word, PowerPoint, Excel (CSV), EPUB, TXT and images',
      'Merge, split, compress, watermark and password-protect PDFs',
      'Reorder, rotate, extract and delete pages',
      'Folders, tags, bookmarks, night mode and Face ID lock',
    ],
  },
};

export const SOURCES = [
  { label: 'Smart Printer: Scan Master Pro, App Store listing', url: APPS.printer.appStore },
  { label: 'Printer Smart: Scan, Print PDF, Google Play listing', url: APPS.printer.googlePlay },
  { label: 'FAX: send from phone, App Store listing', url: APPS.fax.appStore },
  { label: 'FAX: send from phone, Google Play listing', url: APPS.fax.googlePlay },
  { label: 'PDF Editor: Scan & Sign Docs, App Store listing', url: APPS.pdf.appStore },
  { label: 'PDF Editor: Converter Files, Google Play listing', url: APPS.pdf.googlePlay },
  { label: 'faxB2B, online fax for business teams', url: RELATED.faxb2b },
  { label: 'PrinterArchive.net, reference library on printing and fax', url: RELATED.printerArchive },
];

// ---------------------------------------------------------------------------
// Small HTML helpers used by the page bodies
// ---------------------------------------------------------------------------
const ICONS = {
  printer: '<path d="M7 9V3h10v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M7 14h10v7H7z"/>',
  send: '<path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4z"/>',
  pen: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="m9 17 .8-2.8 4.7-4.7 2 2-4.7 4.7z"/>',
  scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M7 12h10"/>',
  phone: '<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/>',
  android: '<path d="M5 10h14v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM8 10a4 4 0 0 1 8 0M8 4l1.5 2.5M16 4l-1.5 2.5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  check: '<path d="m5 12 4.5 4.5L19 7"/>',
};
export const icon = (name, cls = 'ico') => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;

// Google Play accepts an install referrer, so installs from this site show up in Play Console.
export const playUrl = (app, campaign) =>
  `${app.googlePlay}&amp;referrer=${encodeURIComponent(`utm_source=smartprinter.uk&utm_medium=website&utm_campaign=${campaign}`)}`;

export function storeButtons(app, campaign, { primary = true } = {}) {
  return `<div class="stores">
<a class="btn${primary ? ' btn-primary' : ''} tone-${app.tone}" href="${app.appStore}">${icon('phone')}<span>Download on the App Store<small>${app.iosName} · iPhone &amp; iPad</small></span></a>
<a class="btn" href="${playUrl(app, campaign)}">${icon('android')}<span>Get it on Google Play<small>${app.androidName} · Android</small></span></a>
</div>`;
}

export function appCard(app, campaign) {
  return `<section class="card tone-${app.tone}" aria-labelledby="card-${app.key}">
<div class="card-head">${icon(app.icon, 'badge')}<h3 id="card-${app.key}"><a href="${app.path}">${app.brand}</a></h3></div>
<p>${app.tagline}</p>
<ul class="ticks">${app.bullets.map((b) => `<li>${icon('check')}${b}</li>`).join('')}</ul>
<p class="card-links"><a class="more" href="${app.path}">About ${app.short || app.brand} ${icon('arrow')}</a></p>
<p class="card-stores"><a href="${app.appStore}">App Store</a> · <a href="${playUrl(app, campaign)}">Google Play</a></p>
</section>`;
}

const table = (head, rows, cls = 'stack') =>
  `<div class="table"><table class="${cls}"><thead><tr>${head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows
    .map((r) => `<tr><th scope="row">${r[0]}</th>${r.slice(1).map((c) => `<td>${c}</td>`).join('')}</tr>`)
    .join('')}</tbody></table></div>`;

const steps = (list) => `<ol class="steps">${list.map(([n, t], i) => `<li id="step-${i + 1}"><strong>${n}.</strong> ${t}</li>`).join('')}</ol>`;

const rating = (app) =>
  app.rating ? `<p class="rating">Rated <strong>${app.rating.value} out of 5</strong> from ${app.rating.count} ratings on the App Store (checked November 2026).</p>` : '';

const related = (items) =>
  `<aside class="related" aria-label="Related"><h2>Related</h2><ul>${items.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join('')}</ul></aside>`;

// ---------------------------------------------------------------------------
// Pages
// type: home | app | guide | hub | about | privacy
// ---------------------------------------------------------------------------
const P = APPS.printer;
const F = APPS.fax;
const D = APPS.pdf;

export const PAGES = [
  // -------------------------------------------------------------------- HOME
  {
    path: '/',
    nav: 'Home',
    type: 'home',
    apps: ['printer', 'fax', 'pdf'],
    title: 'Smart Printer: Print, Scan, Fax & Edit PDFs on Your Phone',
    description:
      'Smart Printer apps for iPhone and Android: print to Wi-Fi printers, scan documents, send a fax and edit or sign PDFs. Free to download, no drivers.',
    h1: 'Print, scan, fax and edit PDFs from your phone',
    body: () => `<p class="lead">Three apps that turn your phone into a small office. <strong>Smart Printer</strong> prints to almost any Wi-Fi printer, <strong>FAX</strong> sends a fax without a fax machine, and <strong>PDF Editor</strong> lets you fill in, sign and convert documents. All three run on iPhone, iPad and Android and are free to download.</p>

<div class="cards">
${appCard(P, 'home')}
${appCard(F, 'home')}
${appCard(D, 'home')}
</div>

<h2>Which app do I need?</h2>
${table(
  ['I want to…', 'Use', 'Why'],
  [
    ['Print a PDF, photo or web page', `<a href="${P.path}">Smart Printer</a>`, 'Prints over Wi-Fi with AirPrint; no drivers or computer.'],
    ['Scan a document, receipt or ID', `<a href="${P.path}">Smart Printer</a> or <a href="${D.path}">PDF Editor</a>`, 'Both have a camera scanner; PDF Editor adds text recognition (OCR).'],
    ['Send a signed form by fax', `<a href="${F.path}">FAX</a>`, 'Scan or upload the page and send it to any fax number.'],
    ['Sign a contract or fill in a form', `<a href="${D.path}">PDF Editor</a>`, 'Draw your signature once, reuse it, and fill PDF form fields.'],
    ['Turn a PDF into Word or Excel', `<a href="${D.path}">PDF Editor</a>`, 'Converts PDF to and from Word, Excel (CSV), PowerPoint and images.'],
  ],
)}

<h2>How the three apps work together</h2>
<p>Most paperwork follows the same path: a paper document comes in, it gets filled in or signed, and it goes back out on paper or by fax. The apps cover each step, so the whole job stays on your phone.</p>
${steps([
  ['Scan', `Photograph the pages with the scanner in <a href="${P.path}">Smart Printer</a> or <a href="${D.path}">PDF Editor</a>. Edges are detected and the image is cleaned up into a PDF.`],
  ['Fill in and sign', `Open the PDF in <a href="${D.path}">PDF Editor</a>, type into the form fields, and add your saved signature.`],
  ['Print or fax it', `Send the finished file to a Wi-Fi printer with <a href="${P.path}">Smart Printer</a>, or to a fax number with <a href="${F.path}">FAX</a>, and check that it was delivered.`],
])}

<h2>Step-by-step guides</h2>
<ul class="guide-list">
<li><a href="/guides/print-from-iphone/">How to print from an iPhone or iPad</a></li>
<li><a href="/guides/print-from-android/">How to print from an Android phone</a></li>
<li><a href="/guides/scan-documents-with-phone/">How to scan documents with your phone</a></li>
<li><a href="/guides/sign-pdf-on-phone/">How to sign a PDF on your phone</a></li>
<li><a href="/guides/send-fax-from-phone/">How to send a fax from your phone in the UK</a></li>
</ul>`,
    faq: [
      {
        q: 'Are the Smart Printer apps free?',
        a: 'All three apps are free to download from the App Store and Google Play. Advanced features are part of an optional Pro subscription inside each app, priced in your local currency in the store. You can cancel a subscription at any time in your Apple ID or Google Play settings, at least 24 hours before it renews.',
      },
      {
        q: 'Do I need a computer or printer drivers?',
        a: `No. <a href="${P.path}">Smart Printer</a> prints straight from your phone over Wi-Fi using AirPrint, so there is nothing to install on the printer or on a computer. Your phone and printer just need to be on the same Wi-Fi network.`,
      },
      {
        q: 'Can I send a fax without a fax machine or landline?',
        a: `Yes. The <a href="${F.path}">FAX: send from phone</a> app sends the fax over the internet to the recipient's fax number. You scan or upload the document, type the number and tap send.`,
      },
      {
        q: 'Which phones do the apps work on?',
        a: 'Each app is available for iPhone and iPad on the App Store and for Android phones and tablets on Google Play.',
      },
      {
        q: 'Who makes these apps?',
        a: `Smart Printer and PDF Editor are published by hrhelperg s.r.o. in Prague, Czechia. FAX: send from phone is published by HELPERG LLC. See <a href="/about/">About</a> for addresses and contacts.`,
      },
    ],
  },

  // ----------------------------------------------------------------- PRINTER
  {
    path: '/printer/',
    nav: 'Printer',
    type: 'app',
    apps: ['printer'],
    title: 'Smart Printer App: Print from iPhone & Android over Wi-Fi',
    description:
      'Print documents, photos, PDFs, emails and web pages from your iPhone or Android phone to over 10,000 Wi-Fi printer models with AirPrint. No drivers needed.',
    h1: 'Smart Printer: print from your phone to any Wi-Fi printer',
    howto: {
      name: 'How to print from your phone with Smart Printer',
      totalTime: 'PT2M',
      steps: [
        ['Connect to the same Wi-Fi', 'Make sure your phone and your printer are on the same Wi-Fi network (not a guest network).'],
        ['Choose what to print', 'Open Smart Printer and pick a document, photo, web page or file from Dropbox or iCloud Drive, or scan a paper page with the camera.'],
        ['Select your printer', 'Choose your printer from the list of printers found on the network.'],
        ['Set the options', 'Set the number of copies, paper size and orientation, and check the preview.'],
        ['Print', 'Tap Print and collect your pages.'],
      ],
    },
    body: (page) => `<p class="lead">Smart Printer prints documents, photos, emails and web pages from your phone. It works with over 10,000 Wi-Fi printer models through AirPrint, so you don't need drivers, cables or a computer. It also has a scanner, which makes it a pocket copier: scan a page, then print it.</p>
${rating(P)}
${storeButtons(P, 'printer')}

<h2>What Smart Printer does</h2>
<ul class="ticks big">${P.features.map((f) => `<li>${icon('check')}${f}</li>`).join('')}</ul>

<h2>What you can print</h2>
${table(
  ['Type', 'Formats and sources', 'Typical use'],
  [
    ['Documents', 'PDF, Word (DOC), Excel (XLS), PowerPoint (PPT), TXT', 'Letters, contracts, invoices, reports, essays'],
    ['Photos', 'JPG, PNG from your photo library', 'Prints, ID photos, school projects'],
    ['Web pages and emails', 'Any page or message you open in the app', 'Tickets, boarding passes, confirmations'],
    ['Cloud files', 'Dropbox and iCloud Drive', 'Files saved from your computer'],
    ['Scans', 'Documents, IDs, passports, receipts, business cards, notes', 'Copies of paper documents'],
  ],
)}

<h2>${page.howto.name}</h2>
${steps(page.howto.steps)}

<h2>Which printers work?</h2>
<p>Smart Printer works with Wi-Fi printers that support AirPrint, which covers more than 10,000 models according to the app listing. Most wireless printers sold in recent years by HP, Canon, Epson and Brother support AirPrint. Your printer and phone must be on the same network.</p>
<p>If your printer doesn't appear in the list:</p>
<ul>
<li>Check that the printer is switched on and connected to Wi-Fi (most printers can print a network status page).</li>
<li>Make sure your phone isn't on a guest network or a mobile hotspot.</li>
<li>Restart the printer and your Wi-Fi router, then try again.</li>
<li>Update the printer's firmware from the manufacturer's app or website.</li>
</ul>
<p>For model-by-model troubleshooting, the reference library <a href="${RELATED.printerArchive}">PrinterArchive.net</a> covers printer brands, models and common errors.</p>

<h2>Free and Pro</h2>
<p>Smart Printer is free to download. A Pro subscription is available inside the app on weekly, monthly, three-month and yearly plans; prices are shown in pounds in the App Store and Google Play before you subscribe. You can cancel at any time in your store account settings.</p>

${storeButtons(P, 'printer-bottom', { primary: false })}
${related([
  ['/guides/print-from-iphone/', 'How to print from an iPhone or iPad'],
  ['/guides/print-from-android/', 'How to print from an Android phone'],
  ['/guides/scan-documents-with-phone/', 'How to scan documents with your phone'],
])}`,
    faq: [
      {
        q: 'Does Smart Printer work with my HP, Canon, Epson or Brother printer?',
        a: 'If your printer connects to Wi-Fi and supports AirPrint, it should work. That includes most current wireless models from HP, Canon, Epson and Brother. Smart Printer supports over 10,000 Wi-Fi printer models in total.',
      },
      {
        q: 'Do I need to install printer drivers?',
        a: 'No. Smart Printer uses AirPrint, so no extra drivers or software are needed on your phone, printer or computer.',
      },
      {
        q: 'Can I print without Wi-Fi?',
        a: 'Smart Printer prints over your local Wi-Fi network, so the phone and printer need to be connected to the same network. You do not need mobile data or an internet connection to print a file that is already on your phone.',
      },
      {
        q: 'Can Smart Printer scan documents?',
        a: 'Yes. The camera scanner handles documents, IDs, passports, receipts, business cards and notes. You can edit and filter scans, save them in several formats, or print them straight away as a copy.',
      },
      {
        q: 'Which file types can I print?',
        a: 'PDF, DOC, XLS, PPT, JPG, PNG and TXT files, plus photos, emails and web pages. You can import files from Dropbox and iCloud Drive.',
      },
    ],
  },

  // --------------------------------------------------------------------- FAX
  {
    path: '/fax/',
    nav: 'Fax',
    type: 'app',
    apps: ['fax'],
    title: 'FAX App: Send a Fax from iPhone or Android, No Machine',
    description:
      'Send a fax from your iPhone or Android phone without a fax machine or landline: scan or upload a document, send it and track delivery in the FAX app.',
    h1: 'FAX: send a fax from your phone',
    howto: {
      name: 'How to send a fax from your phone',
      totalTime: 'PT3M',
      steps: [
        ['Install the app', 'Download FAX: send from phone from the App Store or Google Play.'],
        ['Add your document', 'Upload a PDF or scan the pages with your camera. Crop and enhance each page so the text is sharp.'],
        ['Enter the fax number', 'Type the recipient\'s fax number in international format, for example +44 20 7946 0000 for a London number.'],
        ['Send', 'Tap send. The app delivers the fax over the internet to the recipient\'s fax machine.'],
        ['Check delivery', 'Watch the delivery status. Your fax history keeps every fax, and you can resend one in a tap.'],
      ],
    },
    body: (page) => `<p class="lead">FAX: send from phone sends faxes from your iPhone, iPad or Android phone to local and international fax numbers. Scan a document with the camera or upload a PDF, type the number and send. You don't need a fax machine, a phone line or a computer.</p>
${storeButtons(F, 'fax')}

<h2>What the FAX app does</h2>
<ul class="ticks big">${F.features.map((f) => `<li>${icon('check')}${f}</li>`).join('')}</ul>

<h2>${page.howto.name}</h2>
${steps(page.howto.steps)}

<h2>Who still needs to fax?</h2>
<p>Email has replaced fax for most things, but some organisations still ask for documents by fax, often because a fax is treated as a signed original or because their systems were built around it. It's common with:</p>
<ul>
<li>healthcare providers, pharmacies and insurers;</li>
<li>solicitors, courts and some government offices, especially abroad;</li>
<li>banks, lenders and letting agents asking for signed forms;</li>
<li>companies in the US and Japan, where fax is still widely used.</li>
</ul>
<p>If you only fax a few times a year, a fax app is far cheaper and quicker than keeping a fax machine and a phone line.</p>

<h2>Prices</h2>
<p>The app is free to download. Sending is part of an unlimited faxing subscription, available monthly or yearly; the price is shown in your local currency in the App Store or Google Play before you pay.</p>

<h2>For business teams: faxB2B</h2>
<p>If several people need to send and receive faxes, <a href="${RELATED.faxb2b}">faxB2B</a> is the browser version from the same publisher. It adds a dedicated fax number, a shared inbox where received faxes arrive as PDFs, and a PDF delivery receipt for each fax. faxB2B currently serves customers in the US and Canada.</p>

${storeButtons(F, 'fax-bottom', { primary: false })}
${related([
  ['/guides/send-fax-from-phone/', 'How to send a fax from your phone in the UK'],
  ['/guides/scan-documents-with-phone/', 'How to scan documents with your phone'],
  ['/guides/sign-pdf-on-phone/', 'How to sign a PDF before you fax it'],
])}`,
    faq: [
      {
        q: 'Do I need a landline or a fax machine?',
        a: 'No. The app sends the fax over the internet. The recipient receives it on their fax machine or fax service as usual.',
      },
      {
        q: 'Can I fax to another country?',
        a: 'Yes, the app sends to local and international fax numbers. Enter the number in international format, starting with + and the country code, for example +1 for the US and Canada or +44 for the UK.',
      },
      {
        q: 'How do I know my fax arrived?',
        a: 'Every fax shows its delivery status in the app. If a fax fails, for example because the line is busy, you can resend it from your fax history.',
      },
      {
        q: 'Can I fax a photo or a document from my phone?',
        a: 'Yes. You can upload a PDF or photograph the pages with the built-in scanner, which crops, enhances and converts them before sending.',
      },
      {
        q: 'Is sending a fax secure?',
        a: 'The app sends your document to the fax network over a secure connection. Bear in mind that faxes travel over the telephone network without end-to-end encryption, and the printed fax can be seen by anyone near the receiving machine, so check the number before you send anything sensitive.',
      },
    ],
  },

  // --------------------------------------------------------------------- PDF
  {
    path: '/pdf-editor/',
    nav: 'PDF Editor',
    type: 'app',
    apps: ['pdf'],
    title: 'PDF Editor App: Edit, Sign, Scan & Convert PDFs on Phone',
    description:
      'Edit text, fill in forms, sign, scan with OCR and convert PDFs to Word, Excel or JPG on iPhone, iPad and Android. Merge, split, compress and protect files.',
    h1: 'PDF Editor: edit, sign and convert PDFs on your phone',
    howto: {
      name: 'How to sign a PDF with PDF Editor',
      totalTime: 'PT2M',
      steps: [
        ['Open the PDF', 'Open PDF Editor and import the file from your phone, cloud storage or an email, or scan a paper document.'],
        ['Create your signature', 'Draw your signature with a pen, marker, fountain pen or pencil, or take a photo of your handwritten signature. Save it to your signature library.'],
        ['Place it', 'Tap where the signature should go, then resize and move it into place. Add your initials or the date if needed.'],
        ['Fill in the rest', 'Type into any form fields and add text where the document asks for it.'],
        ['Save and share', 'Save the signed PDF and share it by email or messaging, print it, or fax it.'],
      ],
    },
    body: (page) => `<p class="lead">PDF Editor puts a complete PDF toolkit on your phone. Sign contracts, fill in forms, scan paper documents with text recognition, convert files to and from Word or Excel, and merge, split or compress PDFs. It runs on iPhone, iPad (iOS 15 or later) and Android.</p>
${rating(D)}
${storeButtons(D, 'pdf')}

<h2>Features</h2>
<div class="grid2">
<section><h3>Sign and fill in</h3><p>Draw a signature with a pen, marker, fountain pen or pencil, or use a photo of your handwritten one. Save signatures and initials to a library and fill in PDF form fields.</p></section>
<section><h3>Scan and OCR</h3><p>Scan documents with automatic edge detection, with modes for ID cards, passports and books. Text recognition runs on your device, and the scanner also reads QR codes and barcodes.</p></section>
<section><h3>Edit and annotate</h3><p>Add text, images, shapes and stamps, highlight or underline text, and leave sticky notes. Create new PDFs or merge several into one.</p></section>
<section><h3>Convert</h3><p>Convert PDFs to and from Word, PowerPoint, EPUB, TXT, Excel (as CSV) and common image formats. Some conversions need an internet connection.</p></section>
<section><h3>PDF tools</h3><p>Split, compress, password-protect, unlock, watermark, number pages, add headers and footers, and print selected pages.</p></section>
<section><h3>Organise</h3><p>Reorder, rotate, duplicate, extract or delete pages, with undo. Keep files in folders with tags and bookmarks, read in night mode, and lock the app with Face ID.</p></section>
</div>

<h2>Conversions at a glance</h2>
${table(
  ['From', 'To', 'Notes'],
  [
    ['PDF', 'Word, PowerPoint, TXT, EPUB, JPG, PNG', 'Editable text from text-based PDFs'],
    ['PDF', 'Excel (CSV)', 'Tables exported as comma-separated values'],
    ['Word, images', 'PDF', 'Combine several files into one PDF'],
    ['Scanned pages', 'Searchable text', 'On-device text recognition (OCR)'],
  ],
)}

<h2>${page.howto.name}</h2>
${steps(page.howto.steps)}

<h2>Free and Pro</h2>
<p>PDF Editor is free to download and open PDFs. The Pro subscription unlocks document signing, the page manager, advanced tools, ID, passport and book scan modes, the QR scanner, online conversions, Face ID lock and saving annotations. Weekly, three-month and yearly plans are available, and the yearly plan comes with a free trial on the App Store. Pro renews automatically; cancel at least 24 hours before the end of the period in your store account settings.</p>

${storeButtons(D, 'pdf-bottom', { primary: false })}
${related([
  ['/guides/sign-pdf-on-phone/', 'How to sign a PDF on iPhone or Android'],
  ['/guides/scan-documents-with-phone/', 'How to scan documents with your phone'],
  ['/printer/', 'Print your PDF with Smart Printer'],
])}`,
    faq: [
      {
        q: 'Can I fill in PDF forms on my phone?',
        a: 'Yes. PDF Editor fills in PDF form fields, and you can add text anywhere on pages that have no form fields.',
      },
      {
        q: 'Is an electronic signature legally valid in the UK?',
        a: 'In England and Wales, electronic signatures are generally accepted as legally valid for most contracts, a position confirmed by the Law Commission in 2019. Some documents, such as certain deeds or documents that must be witnessed, have extra rules. If in doubt, ask the person or organisation that needs the signature.',
      },
      {
        q: 'Does text recognition (OCR) send my documents online?',
        a: 'No. According to the app listing, text recognition runs on your device. Some file conversions do need an internet connection.',
      },
      {
        q: 'Can I convert a PDF to Word?',
        a: 'Yes. PDF Editor converts PDFs to Word and back, and also handles PowerPoint, EPUB, TXT, Excel (CSV) and image formats.',
      },
      {
        q: 'Can I password-protect a PDF?',
        a: 'Yes. You can add a password to a PDF, remove one from a PDF you have the password for, and add a watermark.',
      },
    ],
  },

  // ------------------------------------------------------------- GUIDES HUB
  {
    path: '/guides/',
    nav: 'Guides',
    type: 'hub',
    apps: ['printer', 'fax', 'pdf'],
    title: 'Guides: Print, Scan, Sign and Fax from Your Phone',
    description:
      'Plain-English guides to printing from an iPhone or Android, scanning documents, signing PDFs and sending a fax from your phone, with built-in and app options.',
    h1: 'Guides: printing, scanning, signing and faxing from your phone',
    body: () => `<p class="lead">Short, practical guides for everyday paperwork on a phone. Each one shows the free option built into your phone first, then when an app makes the job easier.</p>
<ul class="guide-cards">
<li><a href="/guides/print-from-iphone/"><strong>How to print from an iPhone or iPad</strong><span>AirPrint in two taps, and what to do when the printer doesn't show up.</span></a></li>
<li><a href="/guides/print-from-android/"><strong>How to print from an Android phone</strong><span>The built-in print service, printer plug-ins and printing apps.</span></a></li>
<li><a href="/guides/scan-documents-with-phone/"><strong>How to scan documents with your phone</strong><span>Get clean, readable scans and save them as PDF.</span></a></li>
<li><a href="/guides/sign-pdf-on-phone/"><strong>How to sign a PDF on your phone</strong><span>Sign on iPhone or Android, and whether e-signatures count in the UK.</span></a></li>
<li><a href="/guides/send-fax-from-phone/"><strong>How to send a fax from your phone in the UK</strong><span>Number formats, cover pages and checking delivery.</span></a></li>
</ul>`,
  },

  // ------------------------------------------------------------- GUIDE: iPhone
  {
    path: '/guides/print-from-iphone/',
    nav: 'Print from iPhone',
    parent: '/guides/',
    type: 'guide',
    apps: ['printer'],
    title: 'How to Print from an iPhone or iPad (AirPrint Guide)',
    description:
      'Print from an iPhone or iPad in two taps with AirPrint, fix a printer that does not show up, and see when a printing app like Smart Printer makes it easier.',
    h1: 'How to print from an iPhone or iPad',
    howto: {
      name: 'How to print from an iPhone with AirPrint',
      totalTime: 'PT1M',
      steps: [
        ['Join the same Wi-Fi', 'Connect your iPhone to the same Wi-Fi network as your printer.'],
        ['Open the share menu', 'In the app with your document, photo or web page, tap the Share button (the square with an arrow) or the More (…) button.'],
        ['Tap Print', 'Scroll down the list of actions and tap Print.'],
        ['Pick your printer', 'Tap Printer and choose your printer from the list.'],
        ['Choose options and print', 'Set copies, page range and other options, then tap Print.'],
      ],
    },
    body: (page) => `<p class="lead">Short answer: connect your iPhone and printer to the same Wi-Fi, open what you want to print, tap <strong>Share</strong> then <strong>Print</strong>, pick your printer and tap <strong>Print</strong>. This uses AirPrint, which is built into every iPhone and iPad and supported by most wireless printers.</p>

<h2>${page.howto.name}</h2>
${steps(page.howto.steps)}
<p>To check or cancel a print job, open the App Switcher while it prints and tap <strong>Print Centre</strong>.</p>

<h2>When a printing app helps</h2>
<p>AirPrint is enough for a photo or a web page. A dedicated app like <a href="${P.path}">Smart Printer</a> is quicker when you need to:</p>
<ul>
<li>print Word, Excel or PowerPoint files and PDFs from Dropbox or iCloud Drive in one place;</li>
<li>scan a paper document and print a copy, using your phone as a copier;</li>
<li>preview a PDF and set paper size, orientation and copies before printing;</li>
<li>print IDs, receipts or business cards scanned with the camera.</li>
</ul>
${storeButtons(P, 'guide-iphone', { primary: false })}

<h2>Printer not showing up?</h2>
<ul>
<li><strong>Same network.</strong> Your iPhone must be on the same Wi-Fi as the printer, not a guest network or a mobile hotspot.</li>
<li><strong>AirPrint support.</strong> Check the printer's box or manual for "AirPrint" or "Works with Apple". Older or USB-only printers don't support it.</li>
<li><strong>Restart.</strong> Turn the printer, the router and your iPhone off and on again.</li>
<li><strong>Firmware.</strong> Update the printer's firmware using the manufacturer's app.</li>
<li><strong>Wake it up.</strong> Some printers drop off Wi-Fi in sleep mode; press a button on the printer and try again.</li>
</ul>
<p>For model-specific help, see the printer guides on <a href="${RELATED.printerArchive}">PrinterArchive.net</a>.</p>
${related([
  ['/guides/print-from-android/', 'How to print from an Android phone'],
  ['/guides/scan-documents-with-phone/', 'How to scan documents with your phone'],
  [P.path, 'Smart Printer app'],
])}`,
    faq: [
      {
        q: 'Can I print from my iPhone without Wi-Fi?',
        a: 'AirPrint needs the iPhone and printer on the same network. Some printers create their own direct Wi-Fi network (often called Wi-Fi Direct) that you can join from Settings › Wi-Fi to print without a router.',
      },
      {
        q: 'Why is there no Print option in the share menu?',
        a: 'Some apps don\'t offer printing. Save the file to the Files app or open it in an app like Smart Printer, then print from there.',
      },
      {
        q: 'Can I print from an iPhone to a printer that doesn\'t support AirPrint?',
        a: 'Often yes, through the printer manufacturer\'s own app, which uses its own connection method. Check the manufacturer\'s website for an iPhone app for your model.',
      },
    ],
  },

  // ------------------------------------------------------------ GUIDE: Android
  {
    path: '/guides/print-from-android/',
    nav: 'Print from Android',
    parent: '/guides/',
    type: 'guide',
    apps: ['printer'],
    title: 'How to Print from an Android Phone: A Simple Guide',
    description:
      'Print from an Android phone over Wi-Fi with the built-in print service or your printer\'s plug-in, fix common problems, and print with the Smart Printer app.',
    h1: 'How to print from an Android phone',
    howto: {
      name: 'How to print from an Android phone',
      totalTime: 'PT2M',
      steps: [
        ['Join the same Wi-Fi', 'Connect your phone to the same Wi-Fi network as your printer.'],
        ['Check the print service', 'Open Settings and search for "Printing". Make sure the Default Print Service or your printer brand\'s plug-in is turned on.'],
        ['Open what you want to print', 'Open the document, photo or web page, tap the menu (⋮) or Share, then tap Print.'],
        ['Select your printer', 'Tap the printer name at the top and choose your printer. If you see "Select a printer", tap All printers.'],
        ['Print', 'Set copies, paper size and colour, then tap the print button.'],
      ],
    },
    body: (page) => `<p class="lead">Short answer: connect your phone and printer to the same Wi-Fi, open the file, tap <strong>⋮</strong> or <strong>Share</strong>, then <strong>Print</strong>, choose your printer and tap the print button. Android has a built-in print service for most Wi-Fi printers; menu names vary slightly between Samsung, Google Pixel and other phones.</p>

<h2>${page.howto.name}</h2>
${steps(page.howto.steps)}

<h2>Built-in service, plug-in or app?</h2>
${table(
  ['Option', 'Good for', 'Limits'],
  [
    ['Default Print Service', 'Quick prints of photos, PDFs and web pages', 'Not every app has a Print option'],
    ['Printer brand plug-in (HP, Canon, Epson, Brother)', 'Printer-specific settings', 'One plug-in per brand'],
    [`<a href="${P.path}">Smart Printer</a>`, 'Office files, scanning and copying, print preview in one app', 'Advanced features need Pro'],
  ],
)}
${storeButtons(P, 'guide-android', { primary: false })}

<h2>Troubleshooting</h2>
<ul>
<li><strong>Printer not found:</strong> check both devices are on the same Wi-Fi band and network, then restart the printer and router.</li>
<li><strong>No Print option in an app:</strong> share the file to an app that can print, such as Smart Printer, Google Drive or your gallery app.</li>
<li><strong>Jobs stuck in the queue:</strong> pull down the notification shade, open the print job and cancel it, then try again.</li>
<li><strong>Blank or garbled pages:</strong> convert the file to PDF first, then print the PDF.</li>
</ul>
${related([
  ['/guides/print-from-iphone/', 'How to print from an iPhone or iPad'],
  ['/guides/scan-documents-with-phone/', 'How to scan documents with your phone'],
  [P.path, 'Smart Printer app'],
])}`,
    faq: [
      {
        q: 'Do I need to install anything to print from Android?',
        a: 'Most recent Android phones include a Default Print Service that finds common Wi-Fi printers. If yours isn\'t found, install your printer brand\'s print plug-in from Google Play or use a printing app.',
      },
      {
        q: 'Can I print from Android to a USB printer?',
        a: 'Printing over Wi-Fi is the simple route. Some printers can connect via a USB OTG cable, but support depends on the phone and printer.',
      },
    ],
  },

  // -------------------------------------------------------------- GUIDE: Scan
  {
    path: '/guides/scan-documents-with-phone/',
    nav: 'Scan documents',
    parent: '/guides/',
    type: 'guide',
    apps: ['printer', 'pdf'],
    title: 'How to Scan Documents with Your Phone (iPhone & Android)',
    description:
      'Scan documents, receipts and IDs with your phone and save them as clear PDFs: built-in scanners on iPhone and Android, scanner apps, and tips for sharp scans.',
    h1: 'How to scan documents with your phone',
    howto: {
      name: 'How to scan a document with your phone',
      totalTime: 'PT2M',
      steps: [
        ['Prepare the page', 'Lay the page flat on a dark, plain surface in good, even light. Avoid shadows from your hand or phone.'],
        ['Open a scanner', 'Use a scanner app such as Smart Printer or PDF Editor, or the scanner built into the Notes or Files app on iPhone, or Google Drive on Android.'],
        ['Capture', 'Hold the phone straight above the page. Let the app detect the edges and take the photo, then repeat for each page.'],
        ['Adjust', 'Check the crop, rotate if needed, and choose a filter such as black and white for text or colour for photos.'],
        ['Save as PDF', 'Save all pages as one PDF, name it clearly, and share, print or fax it.'],
      ],
    },
    body: (page) => `<p class="lead">Short answer: lay the page flat in good light, open a scanner app, hold the phone straight above the page, let it detect the edges, then save the pages as a PDF. iPhones have a scanner in the Notes and Files apps; on Android, Google Drive has one. Scanner apps add extras like ID modes, text recognition and direct printing.</p>

<h2>${page.howto.name}</h2>
${steps(page.howto.steps)}

<h2>Which scanner should you use?</h2>
${table(
  ['Scanner', 'Best for', 'Extras'],
  [
    ['iPhone Notes or Files app', 'Occasional single documents', 'Free and built in'],
    ['Google Drive (Android)', 'Saving scans straight to Drive', 'Free and built in'],
    [`<a href="${P.path}">Smart Printer</a>`, 'Scan then print a copy', 'IDs, passports, receipts, business cards; prints directly'],
    [`<a href="${D.path}">PDF Editor</a>`, 'Scans you need to edit, sign or search', 'On-device OCR, ID, passport and book modes, QR reader'],
  ],
)}

<h2>Tips for sharp, readable scans</h2>
<ul>
<li><strong>Contrast:</strong> a white page on a dark table makes edge detection reliable.</li>
<li><strong>Light:</strong> daylight or an even overhead light; switch the flash off to avoid glare.</li>
<li><strong>Angle:</strong> keep the phone parallel to the page so text isn't stretched.</li>
<li><strong>Filter:</strong> black and white for text keeps files small and easy to read, which also suits faxing.</li>
<li><strong>One file:</strong> save multi-page documents as a single PDF rather than separate photos.</li>
</ul>
${related([
  ['/guides/sign-pdf-on-phone/', 'How to sign a PDF on your phone'],
  ['/guides/send-fax-from-phone/', 'How to fax your scan from your phone'],
  [D.path, 'PDF Editor app'],
])}`,
    faq: [
      {
        q: 'Is a phone scan good enough for official documents?',
        a: 'For most purposes, yes, as long as the scan is sharp, straight and complete. Some organisations ask for originals or certified copies, so check their requirements first.',
      },
      {
        q: 'How do I make a scanned PDF searchable?',
        a: 'Use a scanner with text recognition (OCR), such as PDF Editor, which recognises text on your device so you can search and copy it.',
      },
    ],
  },

  // -------------------------------------------------------------- GUIDE: Sign
  {
    path: '/guides/sign-pdf-on-phone/',
    nav: 'Sign a PDF',
    parent: '/guides/',
    type: 'guide',
    apps: ['pdf'],
    title: 'How to Sign a PDF on iPhone or Android (UK Guide)',
    description:
      'Sign a PDF on your iPhone or Android phone in a minute, reuse your saved signature, and learn when an electronic signature is valid in the UK.',
    h1: 'How to sign a PDF on your phone',
    howto: {
      name: 'How to sign a PDF on your phone',
      totalTime: 'PT2M',
      steps: [
        ['Open the PDF', 'Open the PDF in PDF Editor, or in the Files app on iPhone, from your email, cloud storage or a scan.'],
        ['Add a signature', 'In PDF Editor, choose Sign and draw your signature or use a photo of it. On iPhone without an app, tap Markup, then +, then Add Signature.'],
        ['Position it', 'Drag the signature onto the signature line and resize it.'],
        ['Complete the form', 'Fill in your name, the date and any other fields.'],
        ['Save and send', 'Save the PDF and send it by email, print it, or fax it.'],
      ],
    },
    body: (page) => `<p class="lead">Short answer: open the PDF in a PDF app, tap <strong>Sign</strong>, draw your signature with your finger, drag it onto the signature line and save. On an iPhone you can also use <strong>Markup</strong> in the Files app. For forms, reusable signatures and initials, an app like <a href="${D.path}">PDF Editor</a> is faster.</p>

<h2>${page.howto.name}</h2>
${steps(page.howto.steps)}
${storeButtons(D, 'guide-sign', { primary: false })}

<h2>Is an electronic signature valid in the UK?</h2>
<p>In England and Wales, an electronic signature, including a signature drawn on a phone, is generally capable of being legally valid for contracts, as long as the person intends to sign. The Law Commission confirmed this in its 2019 report on electronic execution of documents, and the Electronic Communications Act 2000 allows electronic signatures as evidence. Scotland and Northern Ireland have similar rules.</p>
<p>There are exceptions. Some documents need a witness, a deed may have extra formalities, and some organisations (for example, HM Land Registry for certain documents) set their own requirements. This guide is general information, not legal advice; if a signature really matters, check with the organisation asking for it or a solicitor.</p>

<h2>Tips</h2>
<ul>
<li>Save your signature and initials once, then reuse them.</li>
<li>Zoom in before placing the signature so it sits neatly on the line.</li>
<li>Send the signed file as a PDF, not a screenshot, so it stays sharp and can't be easily changed.</li>
<li>Need to send it by fax? Use the <a href="${F.path}">FAX app</a> straight from your phone.</li>
</ul>
${related([
  ['/guides/scan-documents-with-phone/', 'How to scan documents with your phone'],
  ['/guides/send-fax-from-phone/', 'How to send a fax from your phone'],
  [D.path, 'PDF Editor app'],
])}`,
    faq: [
      {
        q: 'Can I sign a PDF on my iPhone for free?',
        a: 'Yes. Open the PDF in the Files app, tap Markup, then the + button and Add Signature. PDF Editor adds a signature library, form filling and more pen styles.',
      },
      {
        q: 'What is the difference between an electronic signature and a digital signature?',
        a: 'An electronic signature is any electronic sign of intent to sign, such as a drawn or typed signature. A digital signature is a specific type that uses a certificate and cryptography to prove who signed and that the document hasn\'t changed.',
      },
    ],
  },

  // --------------------------------------------------------------- GUIDE: Fax
  {
    path: '/guides/send-fax-from-phone/',
    nav: 'Send a fax',
    parent: '/guides/',
    type: 'guide',
    apps: ['fax'],
    title: 'How to Send a Fax from Your Phone in the UK (2026 Guide)',
    description:
      'Send a fax from your iPhone or Android phone in the UK without a fax machine: format the number correctly, add a cover page and confirm the fax was delivered.',
    h1: 'How to send a fax from your phone in the UK',
    howto: {
      name: 'How to send a fax from your phone',
      totalTime: 'PT3M',
      steps: [
        ['Get a fax app', 'Install a fax app such as FAX: send from phone from the App Store or Google Play.'],
        ['Prepare the document', 'Scan the pages with the camera or upload a PDF. Use black and white and make sure the text is sharp.'],
        ['Add a cover page', 'Add a cover page with the recipient\'s name, your name and contact details, the date and the number of pages.'],
        ['Enter the number', 'Type the fax number in international format: +44, then the number without its first 0.'],
        ['Send and confirm', 'Send the fax and wait for a delivered status before you rely on it.'],
      ],
    },
    body: (page) => `<p class="lead">Short answer: install a fax app, scan or upload your document, enter the fax number in international format (for a UK number, <strong>+44</strong> followed by the number without its leading 0), send it and wait for the delivered status. You don't need a fax machine or a landline.</p>

<h2>${page.howto.name}</h2>
${steps(page.howto.steps)}
${storeButtons(F, 'guide-fax', { primary: false })}

<h2>Formatting UK and international fax numbers</h2>
${table(
  ['Number as written', 'Enter in the app', 'Note'],
  [
    ['020 7946 0000 (London)', '+44 20 7946 0000', 'Drop the leading 0 after +44'],
    ['0161 496 0000 (Manchester)', '+44 161 496 0000', 'Same rule for every UK area code'],
    ['(212) 555-0100 (New York)', '+1 212 555 0100', 'US and Canada use country code +1'],
    ['01 99 00 12 34 (Paris)', '+33 1 99 00 12 34', 'Most European numbers also drop the leading 0'],
  ],
)}
<p class="small">The example numbers above are from ranges reserved for drama and examples, so they don't belong to anyone.</p>

<h2>Common reasons a fax fails</h2>
<ul>
<li><strong>Wrong number format:</strong> missing country code or an extra 0 after it.</li>
<li><strong>Busy line or the machine is off:</strong> wait a few minutes and resend from your history.</li>
<li><strong>It's a phone number, not a fax number:</strong> confirm the number with the recipient.</li>
<li><strong>Poor scan quality:</strong> faint or grey scans become hard to read when faxed; rescan in black and white.</li>
</ul>

<h2>Alternatives to faxing</h2>
<p>Before you fax, ask whether the recipient will accept a signed PDF by email or a secure upload. If they insist on fax, a fax app is the quickest option for occasional use. Businesses that send and receive faxes every day are better served by an online fax service with a dedicated number, such as <a href="${RELATED.faxb2b}">faxB2B</a> (currently for customers in the US and Canada).</p>
${related([
  [F.path, 'FAX: send from phone app'],
  ['/guides/sign-pdf-on-phone/', 'How to sign a PDF before faxing'],
  ['/guides/scan-documents-with-phone/', 'How to scan documents with your phone'],
])}`,
    faq: [
      {
        q: 'Can I send a fax from my phone for free?',
        a: 'Fax apps are usually free to download, but sending typically needs a subscription or credits, because each fax is delivered over the phone network. Check the price in the app store before you send.',
      },
      {
        q: 'Can I receive faxes on my phone?',
        a: 'Receiving needs a fax number of your own. Many fax apps focus on sending; online fax services offer dedicated numbers and an inbox for received faxes.',
      },
      {
        q: 'Do faxes still count as signed documents?',
        a: 'Many organisations accept a faxed signed document as a valid copy, but the rules depend on the organisation and the type of document. Ask the recipient if you are unsure.',
      },
    ],
  },

  // ------------------------------------------------------------------- ABOUT
  {
    path: '/about/',
    nav: 'About',
    type: 'about',
    apps: ['printer', 'fax', 'pdf'],
    title: 'About Smart Printer: Publishers, Contact and Sources',
    description:
      'Who makes the Smart Printer, FAX and PDF Editor apps, how to contact us, and the sources behind every fact on smartprinter.uk. Facts checked November 2026.',
    h1: 'About Smart Printer',
    body: () => {
      const h = PUBLISHERS.hrhelperg;
      const l = PUBLISHERS.helperg;
      return `<p class="lead">smartprinter.uk is the home of three mobile apps for everyday paperwork: <a href="${P.path}">Smart Printer</a>, <a href="${F.path}">FAX: send from phone</a> and <a href="${D.path}">PDF Editor</a>. The site explains what each app does, how to use it, and how to do the same jobs with the tools already built into your phone.</p>

<h2>Publishers</h2>
<div class="grid2">
<section><h3>${h.name}</h3><address>${h.street}<br>${h.postal} ${h.city}<br>${h.countryName}<br><a href="mailto:${h.email}">${h.email}</a></address><p class="small">Publisher of Smart Printer, PDF Editor and this website.</p></section>
<section><h3>${l.name}</h3><address>${l.street}<br>${l.city}, ${l.region} ${l.postal}<br>${l.countryName}<br><a href="mailto:${l.email}">${l.email}</a></address><p class="small">Publisher of FAX: send from phone and <a href="${RELATED.faxb2b}">faxB2B</a>.</p></section>
</div>

<h2>Contact and support</h2>
<p>For questions about the apps, subscriptions or this website, email <a href="mailto:${SITE.email}">${SITE.email}</a>. To cancel a subscription, use your Apple ID settings (iPhone and iPad) or Google Play › Payments &amp; subscriptions (Android); app publishers cannot cancel store subscriptions for you.</p>

<h2>How we write</h2>
<p>Every app fact on this site comes from the official App Store and Google Play listings below and was checked on <time datetime="${SITE.reviewed}">8 November 2026</time>. Guides show the free, built-in option on your phone first, and say plainly where our apps have limits. Prices are not listed because they vary by country; the store shows the price in your currency before you pay.</p>

<h2>Sources</h2>
<ul class="sources">${SOURCES.map((s) => `<li><a href="${s.url}">${s.label}</a></li>`).join('')}</ul>

<h2>Related sites</h2>
<ul>
<li><a href="${RELATED.printerArchive}">PrinterArchive.net</a>: a reference library on printing, fax and scanning, with printer brands, models and troubleshooting guides.</li>
<li><a href="${RELATED.faxb2b}">faxB2B</a>: online fax in the browser for business teams in the US and Canada.</li>
</ul>`;
    },
  },

  // ----------------------------------------------------------------- PRIVACY
  {
    path: '/privacy/',
    nav: 'Privacy',
    type: 'privacy',
    apps: [],
    title: 'Privacy Notice for smartprinter.uk | Smart Printer',
    description:
      'How smartprinter.uk handles your data: no cookies, no tracking, no forms. Links to the privacy policies of the Smart Printer, FAX and PDF Editor apps.',
    h1: 'Privacy notice',
    body: () => {
      const h = PUBLISHERS.hrhelperg;
      return `<p class="lead">This website does not use cookies, does not track you and has no forms. This notice explains the little data that is processed when you visit, and where to find the privacy policies of the apps.</p>

<h2>Who is responsible</h2>
<p>The controller for this website is ${h.name}, ${h.street}, ${h.postal} ${h.city}, ${h.countryName}. Contact: <a href="mailto:${h.email}">${h.email}</a>.</p>

<h2>What happens when you visit</h2>
<ul>
<li><strong>Hosting:</strong> the site is served by Cloudflare. To deliver pages and protect the site from abuse, Cloudflare processes technical data such as your IP address, browser type and the page requested. This is necessary to run the website (legitimate interests, UK GDPR and EU GDPR Article 6(1)(f)).</li>
<li><strong>Analytics:</strong> if enabled, we use Cloudflare Web Analytics, which counts page views without cookies and without identifying you.</li>
<li><strong>No cookies:</strong> we set no cookies and use no advertising or social media trackers, so there is no cookie banner.</li>
<li><strong>Links to stores:</strong> when you follow a link to the App Store or Google Play, Apple's or Google's privacy policy applies there.</li>
</ul>

<h2>The apps</h2>
<p>Each app has its own privacy policy, also shown on its store page:</p>
<ul>
<li><a href="${P.privacy}">Smart Printer privacy policy</a></li>
<li><a href="${F.privacy}">FAX: send from phone privacy policy</a></li>
<li>PDF Editor: see the privacy policy linked on its <a href="${D.appStore}">App Store</a> or <a href="${D.googlePlay}">Google Play</a> page.</li>
</ul>

<h2>Your rights</h2>
<p>You can ask for access to, correction or deletion of personal data we hold about you, or object to its processing, by emailing <a href="mailto:${h.email}">${h.email}</a>. If you are in the UK, you can complain to the Information Commissioner's Office (ico.org.uk); in the EU, to your local data protection authority.</p>
<p class="small">Last updated <time datetime="${SITE.reviewed}">8 November 2026</time>.</p>`;
    },
  },
];

export const longDate = (iso) =>
  new Date(iso + 'T12:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
