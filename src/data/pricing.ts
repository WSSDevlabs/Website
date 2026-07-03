export type PricingTier = {
  name: string;
  price: string;
  period?: string;
  highlight?: boolean;
  badge?: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
};

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Launch',
    price: 'From RM 3,000',
    highlight: false,
    description: 'For startups and businesses that need a fast, credible web presence.',
    features: [
      'Custom-designed website (up to 8 pages)',
      'Mobile-first, fully responsive',
      'SEO-ready structure & meta',
      'Basic contact form (Web3Forms)',
      'Cloudflare Pages deployment',
      'Performance-optimised (Lighthouse ≥ 90)',
      '30 days post-launch support'
    ],
    cta: 'Get a Quote',
    ctaHref: '/contact'
  },
  {
    name: 'Build',
    price: 'From RM 15,000',
    highlight: true,
    badge: 'Most popular',
    description: 'For growing businesses needing a mobile app, custom CMS, or AI-powered feature.',
    features: [
      'Everything in Launch, plus:',
      'Mobile app (cross-platform or native)',
      'Custom CMS / admin dashboard',
      'AI integration or LLM-powered feature',
      'API design and backend integration',
      'User authentication & role-based access',
      'QA testing and staging environment',
      '60 days post-launch support'
    ],
    cta: 'Start a Project',
    ctaHref: '/contact'
  },
  {
    name: 'Enterprise',
    price: 'Custom Quote',
    highlight: false,
    description: 'For complex systems, ERP, or AI-powered platforms requiring bespoke architecture.',
    features: [
      'Everything in Build, plus:',
      'Custom ERP / business system',
      'Full-stack architecture design',
      'Multi-environment CI/CD setup',
      'Advanced AI / ML integration',
      'Data migration from existing systems',
      'Dedicated project management',
      'SLA-backed maintenance plan'
    ],
    cta: 'Let\'s Talk',
    ctaHref: '/contact'
  }
];
