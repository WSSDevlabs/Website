export type ExpressPackage = {
  id: string;
  name: string;
  price: string;
  priceRaw: number;
  period?: string;
  strategicCopy: string;
  overview: string;
  turnaround: string;
  targetAudience: string;
  badge?: string;
  highlight?: boolean;
  features: string[];
  specs: {
    pages: string;
    domainHosting: string;
    turnaroundTime: string;
    revisions: string;
    support: string;
    answerEngineReady: boolean;
  };
  ctaText: string;
  whatsappMessage: string;
};

export const EXPRESS_PACKAGES: ExpressPackage[] = [
  {
    id: 'express-landing',
    name: 'WSS Express Landing',
    price: 'RM 180',
    period: '/ year',
    priceRaw: 180,
    strategicCopy: 'Search-Ready Visibility with Zero SaaS Dependency.',
    overview:
      'Entry-level discovery for micro-SMEs, hawkers, solo professionals, and service traders. Focused on AI search discoverability, immediate credibility, and removal of technical barriers.',
    turnaround: '3–5 Days',
    targetAudience: 'Micro-SMEs, Solo Founders, Service Pros & Local Traders',
    badge: 'Micro-SME Entry',
    highlight: false,
    features: [
      '1-page high-speed hosted website',
      'Free domain & SSL certificate included',
      'Mobile-first, responsive performance',
      'Optimized for Answer Engines (Perplexity, ChatGPT Search, Gemini)',
      'Click-to-WhatsApp direct contact button',
      'Google Business Profile integration support',
      'Zero monthly SaaS subscription fees'
    ],
    specs: {
      pages: '1 Custom Page (Long-form conversion)',
      domainHosting: 'Free Domain + High-Speed Hosting included',
      turnaroundTime: '3–5 Days from asset delivery',
      revisions: '1 Structured Feedback Round',
      support: 'Standard Email & WhatsApp Setup Support',
      answerEngineReady: true
    },
    ctaText: 'Get Express Landing (RM 180/yr)',
    whatsappMessage: "Hi WSS DevLabs! I'd like to launch a WSS Express Landing Page for RM 180/year. Let's get started."
  },
  {
    id: 'express-starter',
    name: 'WSS Express Starter',
    price: 'RM 1,500',
    priceRaw: 1500,
    strategicCopy: 'The Rapid Launchpad for Growth-Focused Brands.',
    overview:
      'A multi-page solution engineered to ship in 3–7 days. Built for established small businesses, service providers, and agencies that need to showcase multiple offerings with clarity and authority.',
    turnaround: '3–7 Days',
    targetAudience: 'Growing Businesses, Clinics, Consultancies & Service Firms',
    badge: 'Most Popular for SMEs',
    highlight: true,
    features: [
      'Up to 3 custom-crafted pages (Home, Services, Contact/About)',
      'Engineered for 3–7 day rapid go-live',
      'SEO-ready semantic information architecture',
      '24-hour response time during onboarding and build',
      'Performance-led UI with smooth micro-interactions',
      'Direct builder access — talk directly to Razin & Natasya',
      'Web3Forms lead inquiry pipeline + WhatsApp routing',
      'Free 1st-year hosting & SSL on Cloudflare Pages'
    ],
    specs: {
      pages: 'Up to 3 Custom Structured Pages',
      domainHosting: 'Free 1st-Year Fast Global Edge Hosting',
      turnaroundTime: '3–7 Days Guaranteed',
      revisions: '2 Polishing Revision Rounds',
      support: 'Priority WhatsApp direct with builder',
      answerEngineReady: true
    },
    ctaText: 'Launch Starter Package (RM 1,500)',
    whatsappMessage: "Hi WSS DevLabs! I'm interested in the WSS Express Starter package (RM 1,500). I'd like to discuss my project."
  },
  {
    id: 'express-business',
    name: 'WSS Express Business',
    price: 'RM 4,500',
    priceRaw: 4500,
    strategicCopy: 'Authority-Grade Infrastructure for Digital Commerce.',
    overview:
      'Comprehensive storefronts and high-converting platforms for SMEs requiring robust catalog navigation, inquiry qualification, and integrated Malaysian payment checkouts.',
    turnaround: '7–14 Days',
    targetAudience: 'Retail SMEs, Wholesalers, Booking Operations & Digital Brands',
    badge: 'Grant Matching Eligible',
    highlight: false,
    features: [
      'Full E-Commerce / Advanced Catalog capabilities',
      'Integrated ToyyibPay / SenangPay / Stripe payment gateways',
      'Custom conversion-optimized UI/UX designed for brand trust',
      'State-by-state shipping rate calculator & order management',
      'Answer Engine & Schema.org rich snippet optimization',
      'Eligible for PMKS Madani Grant 50% matching subsidy',
      'Dedicated onboarding & staging walkthrough session',
      '30-day post-launch warranty & tuning'
    ],
    specs: {
      pages: 'Up to 7 Pages + Full E-Commerce / System Modules',
      domainHosting: 'Enterprise Edge Hosting + CDN',
      turnaroundTime: '7–14 Days',
      revisions: '3 Comprehensive Review Cycles',
      support: 'Dedicated Senior Engineer Support Channel',
      answerEngineReady: true
    },
    ctaText: 'Claim Business Package (RM 4,500)',
    whatsappMessage: "Hi WSS DevLabs! I'd like to get started with the WSS Express Business package (RM 4,500). Please share the kickoff steps."
  }
];

export const EXPRESS_FAQ = [
  {
    q: 'How fast do you ship?',
    a: 'Landing pages and Starter builds ship in 3–7 business days from the moment we receive your core brand assets and content requirements. Business tier builds ship within 7–14 days.'
  },
  {
    q: 'What info is needed to start?',
    a: 'Just your brand assets (logo, photos), your target audience, and the key pages or services you need to present. We guide you through a frictionless 15-minute intake checklist and help refine the rest.'
  },
  {
    q: 'Is maintenance included?',
    a: 'We offer both on-demand support and structured monthly Care Plans to keep your site secure, typed, backed up, and updated without any long-term vendor lock-in.'
  },
  {
    q: 'Is it mobile-friendly?',
    a: 'Every build is 100% mobile-first and optimized for sub-second performance by default. We enforce strict performance budgets so your site loads instantly on Malaysian 4G/5G mobile networks.'
  },
  {
    q: 'What makes WSS Express different from DIY site builders like Wix or WordPress?',
    a: 'Wix and WordPress lock you into recurring monthly SaaS subscriptions, bloated plugins, and sluggish page load speeds. WSS Express delivers clean, typed, high-speed code that you own completely, engineered by senior Malaysian developers.'
  }
];
