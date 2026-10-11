/**
 * The price catalogue: the ONLY place prices live (audit Part 12).
 * Every page reads from here, so a price can never contradict itself again.
 *
 * Prices sit about 44% below the Malaysian market reference (reference x 0.75 x 0.75),
 * a founder decision dated 11 Oct 2026. Review them after the 5 Founding Client
 * projects or 6 months (whichever comes first) and move back toward `reviewTarget`.
 * Items flagged `estimate: true` are judgement calls, not market data: validate them
 * with 3 competitor quotes. No SST is added (founder decision): prices are final.
 */

export const formatRM = (amount: number) => `RM${amount.toLocaleString('en-MY')}`;

/** One sentence used everywhere a reply time is promised (audit 1.6). */
export const REPLY_PROMISE = 'We reply within one business day. Fixed quote within three.';

/* ── A. Websites ─────────────────────────────────────────────────────────── */

export type PackageSpec = {
  who: string;
  problem: string;
  payment: string;
  timeline: string;
  included: string[];
  notIncluded: string[];
  revisions: string;
  youProvide: string;
  handover: string;
  warranty: string;
};

export type WebsitePackage = {
  id: 'one-page' | 'business' | 'store';
  name: string;
  price: number;
  /** Price the founder should move toward at the price review (audit 12.1, "Step 1"). */
  reviewTarget: number;
  badge?: string;
  whoFor: string;
  highlights: string[];
  timeline: string;
  renewal: string;
  spec: PackageSpec;
};

export const HOSTING_SITE_YEARLY = 219;
export const HOSTING_STORE_YEARLY = 369;

export const WEBSITE_PACKAGES: WebsitePackage[] = [
  {
    id: 'one-page',
    name: 'One-Page Website',
    price: 569,
    reviewTarget: 750,
    whoFor: 'For new or small businesses with no website yet',
    highlights: [
      'One scrolling page, up to 5 sections',
      'WhatsApp button and contact form',
      'Google Business Profile set up for you',
      'Domain, hosting and SSL for year 1',
      '14-day fix warranty'
    ],
    timeline: 'Live in 5 working days',
    renewal: `From year 2: hosting and domain ${formatRM(HOSTING_SITE_YEARLY)}/year, or included in any Care Plan.`,
    spec: {
      who: 'Sole traders, home businesses, new shops, freelancers, and anyone with no website or only a Facebook page.',
      problem:
        "Customers Google you and find nothing, or find a competitor. A Facebook page doesn't show up well in Google Search or Maps, and you don't own it. A one-page site gives you a professional address that appears in Google and turns visitors into WhatsApp chats.",
      payment: `${formatRM(569)} one-time. 50% to start, 50% before going live. From year 2, hosting and domain cost ${formatRM(HOSTING_SITE_YEARLY)}/year, or they're included in a Care Plan.`,
      timeline: '5 working days after you send your content.',
      included: [
        'One long scrolling page with up to 5 sections (for example: intro, about, services, gallery, contact), built on a refined WSS template so it can ship fast at this price',
        'Mobile-first design using your logo and colours',
        'WhatsApp button and a contact form that sends to your email',
        'Google Business Profile set up or optimised',
        'Google Maps embed',
        'Basic SEO: page title, description and Google Search Console submission',
        'Domain (.com or .my), hosting and SSL for the first year',
        'Speed-optimised: we target a 90+ mobile Lighthouse score at handover, and fix it free if we miss it on the agreed content'
      ],
      notIncluded: [
        `Extra pages (${formatRM(219)} each)`,
        `Copywriting (${formatRM(149)} per page)`,
        'Photography',
        'Online payments',
        'Blog',
        'Bahasa Malaysia translation'
      ],
      revisions: '1 round of changes on the full draft.',
      youProvide:
        'Your logo, your text (or a voice note we turn into text with the copywriting add-on), up to 10 photos, and your business details.',
      handover:
        'Your live site, the login for your domain, and a one-page guide on how to request changes. You approve the draft link in writing (WhatsApp is fine) before it goes live.',
      warranty: '14 days of free fixes for anything we built that doesn\'t work as agreed.'
    }
  },
  {
    id: 'business',
    name: 'Business Website',
    price: 2990,
    reviewTarget: 3990,
    badge: 'Most popular',
    whoFor: 'For established SMEs that need enquiries',
    highlights: [
      'Up to 6 pages, custom design',
      'Edit it yourself (CMS)',
      'Google-ready SEO setup',
      'Leads to WhatsApp and email',
      '30-day fix warranty'
    ],
    timeline: 'Live in 2 to 3 weeks',
    renewal: `From year 2: hosting and domain ${formatRM(HOSTING_SITE_YEARLY)}/year, or included in any Care Plan.`,
    spec: {
      who: 'Established SMEs such as clinics, contractors, consultants, training centres and F&B groups that need to look credible and get enquiries.',
      problem:
        "Your current site is outdated, slow, can't be edited without calling a developer, or doesn't bring in leads. Buyers judge credibility in seconds, and a slow or old site sends them to competitors.",
      payment: `${formatRM(2990)}. 50% to start, 50% when you approve the staging site.`,
      timeline: '2 to 3 weeks after we receive your content.',
      included: [
        `Up to 6 pages (for example: Home, About, Services, Projects, Blog, Contact). More pages are ${formatRM(219)} each`,
        'Custom design (not a stock template look), with one design concept you approve before we build',
        'An easy editor (CMS) so you can change text, photos and blog posts yourself',
        'Blog set up, with one starter article written for you',
        'SEO foundation: titles and descriptions for every page, sitemap, structured data, Google Search Console and Google Business Profile',
        'Contact form and WhatsApp routing, so enquiries reach both your email and WhatsApp',
        'A privacy-friendly analytics dashboard',
        'A 1-hour online training session, recorded for you',
        'Domain, hosting and SSL for the first year'
      ],
      notIncluded: [
        `Online store or payments (choose the Store Website, or add a payment gateway for ${formatRM(369)})`,
        `More than 6 pages (${formatRM(219)} each)`,
        `Copywriting (${formatRM(149)} per page)`,
        `Bahasa Malaysia version (+${formatRM(749)})`,
        'Professional photography'
      ],
      revisions: '2 rounds on the design concept, plus 2 rounds on the built site.',
      youProvide:
        'Your logo, the text for each page (or add copywriting), photos, your list of services, and access to your existing domain if you have one.',
      handover:
        'Your live site, CMS login, domain and hosting credentials, the recorded training and a short written guide. You approve the staging site in writing; we go live within 2 working days after that.',
      warranty: '30 days of free fixes after launch. After that, a Care Plan or pay-per-fix.'
    }
  },
  {
    id: 'store',
    name: 'Store Website',
    price: 5590,
    reviewTarget: 7490,
    whoFor: 'For shops that want to sell on their own site',
    highlights: [
      'Everything in Business, up to 10 pages',
      'Online store with 50 products loaded',
      'FPX, card and e-wallet payments',
      'Money goes straight to your account',
      '30-day fix warranty'
    ],
    timeline: 'Live in 3 to 5 weeks',
    renewal: `From year 2: hosting ${formatRM(HOSTING_STORE_YEARLY)}/year (stores need more resources and backups), or included in any Care Plan.`,
    spec: {
      who: 'Shops and brands that want to sell online on their own site, not only on Shopee or Lazada.',
      problem:
        'Marketplace commissions eat your margin, you don\'t own the customer list, and you compete next to cheaper sellers on the same page. Your own store keeps the customer relationship and the margin.',
      payment: `${formatRM(5590)}. 40% to start, 30% when you approve the design, 30% before going live. From year 2, hosting is ${formatRM(HOSTING_STORE_YEARLY)}/year, or it's included in a Care Plan.`,
      timeline: '3 to 5 weeks after we receive your products and content.',
      included: [
        'Everything in the Business Website, with up to 10 pages',
        'Online store with product options (size, colour), stock tracking and discount codes',
        'Up to 50 products loaded from your spreadsheet (we give you the template). You can add as many more as you like yourself',
        'Malaysian payment gateways: ToyyibPay, SenangPay or Stripe (FPX, cards and e-wallets depending on the gateway). Money goes straight to your own merchant account, with no commission to us',
        'Shipping rules by state or weight, and order notification emails',
        'Order dashboard and a 2-hour training session'
      ],
      notIncluded: [
        'Gateway registration and per-transaction fees (charged by the gateway)',
        'Product photography',
        `Loading more than 50 products for you (${formatRM(149)} per extra 50)`,
        'Shopee or Lazada sync',
        'Accounting software integration (quoted separately)'
      ],
      revisions: '2 design rounds, plus 2 build rounds.',
      youProvide:
        'Your product spreadsheet and photos, shipping rates, return policy, and a registered merchant account with your chosen gateway (we guide you through it).',
      handover:
        'Your live store, admin login, a real test order completed with you, recorded training and a written guide. Acceptance is a successful real test transaction plus your written approval.',
      warranty: '30 days of free fixes, and we monitor the payment flow for the first 14 days.'
    }
  }
];

export type AddOn = {
  id: string;
  name: string;
  price: string;
  forWhich: string;
  solves: string;
  estimate?: boolean;
};

export const WEBSITE_ADD_ONS: AddOn[] = [
  {
    id: 'extra-page',
    name: 'Extra page',
    price: `${formatRM(219)} per page`,
    forWhich: 'One-Page, Business',
    solves: 'Room for one more service or landing page.',
    estimate: true
  },
  {
    id: 'copywriting',
    name: 'Copywriting',
    price: `${formatRM(149)} per page`,
    forWhich: 'All websites',
    solves: '"I don\'t know what to write" is the number one cause of website delays. We write it for you.',
    estimate: true
  },
  {
    id: 'bilingual',
    name: 'Bahasa Malaysia + English',
    price: `+${formatRM(749)} Business, +${formatRM(1119)} Store`,
    forWhich: 'Business, Store',
    solves: 'Reach customers who prefer Bahasa Malaysia.',
    estimate: true
  },
  {
    id: 'payment-gateway',
    name: 'Payment gateway',
    price: formatRM(369),
    forWhich: 'Business (already included in Store)',
    solves: 'Take deposits or bookings online.'
  },
  {
    id: 'local-seo',
    name: 'Local SEO Setup',
    price: `${formatRM(819)} one-time`,
    forWhich: 'All websites',
    solves: 'Show up in Google Maps and "near me" searches.',
    estimate: true
  },
  {
    id: 'ai-whatsapp',
    name: 'AI WhatsApp Assistant',
    price: `${formatRM(629)} setup + ${formatRM(99)}/month`,
    forWhich: 'All websites',
    solves: 'Answer common questions 24/7 and collect leads while you sleep.'
  }
];

/** Detail for the two bigger add-ons (audit 12.4 B). */
export const LOCAL_SEO_SETUP = {
  price: 819,
  estimate: true,
  problem:
    'When someone searches "aircond service Shah Alam" or "klinik gigi near me", Google shows a map with three businesses. If your Google Business Profile and website aren\'t set up properly, you aren\'t in it, however good you are.',
  included: [
    'Full Google Business Profile optimisation (categories, services, photos, Q&A)',
    '3 location or service pages on your site',
    'Google Search Console and sitemap',
    'Listings on 10 Malaysian directories',
    'A review-request link and QR code for your counter'
  ],
  notIncluded: 'Ongoing posting, link building and paid ads. There is no ranking guarantee: nobody controls Google.',
  timeline: '7 working days. Results usually build over 3 to 6 months.'
};

/** Phase 2: don't advertise until 2 clients have measurable SEO results (audit 12.4 B1). */
export const LOCAL_SEO_MONTHLY = { price: 969, published: false };

export const AI_WHATSAPP = {
  setup: 629,
  monthly: 99,
  problem:
    "Customers WhatsApp at 11pm asking for prices and opening hours. You reply the next morning and they've already bought elsewhere. Or you spend 2 hours a day answering the same 10 questions.",
  setupIncludes: [
    'Connected to your official WhatsApp Business API number',
    'Trained on your price list, FAQ and services',
    'Hands the chat to a person when needed',
    "Captures each customer's name and need into a sheet or your email",
    '2 rounds of tuning in the first 30 days'
  ],
  monthlyIncludes: 'AI usage up to an agreed conversation volume, monitoring, and monthly answer tuning.',
  notIncluded: "Meta's per-conversation fees (passed through at cost, and we show you the bill) and broadcast campaigns.",
  disclosure:
    'Your customers are told they are chatting with an automated assistant, and can reach a person at any time. It never gives medical, legal or financial advice.'
};

/* ── C. Ready-made systems ────────────────────────────────────────────────── */

export type SystemTierId = 'basic' | 'standard' | 'advanced';

export const SYSTEM_TIERS: Record<
  SystemTierId,
  { name: string; price: number; reviewTarget: number; qualifies: string; estimate?: boolean }
> = {
  basic: {
    name: 'Basic',
    price: 569,
    reviewTarget: 749,
    qualifies: 'Single-purpose tools with one type of user and no integrations.'
  },
  standard: {
    name: 'Standard',
    price: 1119,
    reviewTarget: 1490,
    qualifies: 'Full business systems with several user roles, reports and notifications.'
  },
  advanced: {
    name: 'Advanced',
    price: 2249,
    reviewTarget: 2990,
    qualifies: 'Hardware integration (RFID, IoT, kiosks), AI features or multi-site operation.',
    estimate: true
  }
};

export const SYSTEM_EXTRAS = {
  installation: {
    name: 'Installation and setup',
    price: 369,
    estimate: true,
    detail:
      'We install it on your hosting, connect your domain with SSL, create your admin account, set the basics (company name, logo, currency, tax) and do a test run with you. 3 working days.'
  },
  branding: {
    name: 'Branding and light customisation',
    price: 669,
    from: true,
    estimate: true,
    detail:
      'Your logo and colours throughout, plus up to 2 small changes (for example a field, a report column or a label). Bigger changes get a fixed quote. 5 to 7 working days.'
  },
  training: {
    name: 'Training',
    price: 219,
    estimate: true,
    detail:
      "A 2-hour online session for your team, the recording, and a one-page cheat sheet per role. Systems fail when staff don't use them, not because the code is bad."
  },
  dataImport: {
    name: 'Data import',
    price: 299,
    from: true,
    estimate: true,
    detail:
      'We move your existing records (staff, products, assets, customers) from Excel or CSV into the system, so nobody has to retype them.'
  },
  updateInstall: {
    name: 'Update installation (without a Care Plan)',
    price: 219,
    detail: 'Installing a new release for you. Free on any Care Plan.'
  }
} as const;

export const LICENCE_TERMS = {
  supportDays: 30,
  updateMonths: 12,
  refundDays: 14,
  installations: 'one business entity and one live installation, plus one test copy'
};

/* ── D. Custom ──────────────────────────────────────────────────────────── */

export const CUSTOM = {
  discovery: {
    price: 1129,
    creditWindowDays: 60,
    estimate: true,
    timeline: '1 to 2 weeks',
    included: [
      'Two 2-hour workshops',
      'A map of how the work flows today',
      'A requirements document: features, user roles and rules',
      'A clickable wireframe of the key screens',
      'A fixed-price quote, timeline and milestone plan',
      'A list of risks and how we handle them'
    ]
  },
  build: {
    from: 8250,
    typicalLow: 14000,
    typicalHigh: 28000,
    estimate: true,
    payment: '30% to start, 40% at the staging demo, 30% at handover. No hourly billing.',
    timeline: 'Set in discovery. Usually 6 to 12 weeks.',
    warrantyDays: 60
  },
  mobileApp: { from: 16500, estimate: true },
  rescueAudit: {
    price: 749,
    estimate: true,
    timeline: '5 to 7 working days after you give us access',
    included: [
      'Code and architecture review',
      'Security check: passwords, access, outdated components',
      'Performance check',
      'A written report in plain language',
      'A fix-or-rebuild recommendation, with a fixed price for each option'
    ]
  }
};

/* ── E. Care Plans ──────────────────────────────────────────────────────── */

export type CarePlan = {
  id: 'hosting' | 'basic' | 'pro';
  name: string;
  price: string;
  annual?: string;
  forWho: string;
};

export const CARE_PLANS: CarePlan[] = [
  {
    id: 'hosting',
    name: 'Hosting Only',
    price: `${formatRM(HOSTING_SITE_YEARLY)}/year sites, ${formatRM(HOSTING_STORE_YEARLY)}/year stores`,
    forWho: 'You only need the site kept online.'
  },
  {
    id: 'basic',
    name: 'Care Basic',
    price: `${formatRM(129)}/month`,
    annual: `${formatRM(1290)}/year (pay 10 months, get 12)`,
    forWho: 'Most small businesses.'
  },
  {
    id: 'pro',
    name: 'Care Pro',
    price: `${formatRM(339)}/month`,
    annual: `${formatRM(3390)}/year (pay 10 months, get 12)`,
    forWho: 'Busy sites, stores and installed systems.'
  }
];

export const CARE_BASIC_MONTHLY = 129;
export const CARE_PRO_MONTHLY = 339;
export const CARE_PRO_EXTRA_SITE_MONTHLY = 119;

/** Comparison rows: [label, hosting, basic, pro]. */
export const CARE_PLAN_ROWS: [string, string, string, string][] = [
  ['Hosting, domain and SSL', 'Yes', 'Yes', 'Yes'],
  ['Uptime monitoring', 'Yes', 'Yes', 'Yes'],
  ['Backups', 'Weekly', 'Daily', 'Daily'],
  ['Security and software updates', 'No', 'Yes', 'Yes'],
  ['Small edits included', 'No', '30 min/month', '3 hours/month'],
  ['Response time', 'Best effort', '2 working days', '1 working day, critical issues same day'],
  ['Monthly report (uptime, speed, traffic, issues)', 'No', 'No', 'Yes'],
  ['Quarterly speed and SEO check', 'No', 'No', 'Yes'],
  ['Covers installed systems and custom builds', 'Hosting only', 'Yes', 'Yes']
];

/* ── F. Go Digital Bundle ───────────────────────────────────────────────── */

export const GO_DIGITAL_BUNDLE = {
  price: 6790,
  items: [
    { name: 'Business Website', price: 2990 },
    { name: 'One Standard system (for example POS, attendance or helpdesk)', price: 1119 },
    { name: 'Installation', price: 369 },
    { name: 'Branding and customisation', price: 669 },
    { name: 'Training', price: 219 },
    { name: 'AI WhatsApp Assistant setup', price: 629 },
    { name: 'Care Basic, 12 months', price: 1290 }
  ],
  payment: '40% to start, 30% when you approve the website on staging, 30% at handover.',
  timeline: '3 to 4 weeks'
};

export const bundleSeparateTotal = GO_DIGITAL_BUNDLE.items.reduce((sum, item) => sum + item.price, 0);

/* ── G. Founding Client Programme ───────────────────────────────────────── */

export const FOUNDING_CLIENT = {
  discountPercent: 20,
  totalSlots: 5,
  appliesTo: 'Business or Store websites, ready-made systems and custom builds',
  excludes: 'the One-Page Website, Care Plans and hardware',
  inReturn: [
    'A written case study with real results',
    'An honest Google review',
    'Permission to show your logo and screenshots (you approve the text first)',
    'A 15-minute feedback call'
  ],
  effectivePrices: [
    { name: 'Business Website', price: 2390 },
    { name: 'Store Website', price: 4470 },
    { name: 'Standard system', price: 895 }
  ]
};

/* ── Rent vs own (audit 12.4 C1). The subscription figure is a published
      Malaysian POS entry plan, checked Oct 2026: keep its source in
      docs/business/claims-evidence.md and re-check it every 6 months. ── */

export const RENT_VS_OWN = {
  subscriptionMonthly: 158,
  months: 36,
  checked: 'October 2026',
  /** Placeholder hosting estimate for the calculator. Replace it with the real monthly cost of the host you recommend. */
  hostingEstimateMonthly: 50
};

export const subscriptionTotal = RENT_VS_OWN.subscriptionMonthly * RENT_VS_OWN.months;
