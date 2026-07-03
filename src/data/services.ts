export type ServiceGroup = 'Build' | 'Intelligence' | 'Design & Care' | 'Grow';

export type Service = {
  slug: string;
  title: string;
  group: ServiceGroup;
  shortDescription: string;
  valueProp: string;
  problem: string;
  deliverables: string[];
  approach: string[];
  tools: string[];
  pricingFrom?: string;
  faq: { question: string; answer: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    group: 'Build',
    shortDescription: 'Custom-built, fast, typed websites — not template builders.',
    valueProp:
      'A site built from scratch around your content and goals, engineered for speed and search visibility from the first commit.',
    problem:
      'Template builders (WordPress/Elementor/Wix) ship bloated, slow, hard-to-maintain sites that cap how fast and how well a business can rank or convert.',
    deliverables: [
      'Custom-coded marketing or product site',
      'Mobile-first, accessible UI',
      'SEO-ready information architecture',
      'CMS-backed content where needed',
      'Performance budget enforced at every layer'
    ],
    approach: [
      'Discovery & content audit',
      'IA and wireframes',
      'Build in a typed, component-based stack',
      'Performance and accessibility QA',
      'Launch and handover'
    ],
    tools: ['Astro', 'TypeScript', 'Tailwind CSS', 'React', 'Cloudflare Pages'],
    pricingFrom: 'RM 3,000',
    faq: []
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    group: 'Build',
    shortDescription: 'Native-feeling iOS and Android apps, built cross-platform or native.',
    valueProp:
      'A mobile app scoped honestly to your actual reach and budget — cross-platform where it fits, native where performance demands it.',
    problem:
      'Many studios oversell "native" delivery or undersell the real cost/timeline tradeoffs between cross-platform and native development.',
    deliverables: [
      'Cross-platform or native app build',
      'API/backend integration',
      'App Store and Google Play submission support',
      'Push notifications and analytics wiring',
      'Post-launch maintenance plan'
    ],
    approach: [
      'Platform and architecture decision (cross-platform vs native)',
      'UX flows and prototyping',
      'Development in sprints with staging builds',
      'Device and OS-version QA',
      'Store submission and launch'
    ],
    tools: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    pricingFrom: 'RM 28,000',
    faq: []
  },
  {
    slug: 'custom-systems',
    title: 'Custom Systems (CMS / ERP)',
    group: 'Build',
    shortDescription: 'Internal tools, CMS, and ERP systems built around how your team works.',
    valueProp:
      'A system shaped to your actual workflow, not the other way around — replacing spreadsheets and rigid off-the-shelf software.',
    problem:
      'Off-the-shelf CMS/ERP software forces teams to bend their process to the tool, creating workarounds and shadow spreadsheets.',
    deliverables: [
      'Custom CMS or admin dashboard',
      'ERP modules (inventory, orders, reporting, etc.)',
      'Role-based access control',
      'Data migration from existing tools',
      'Documentation and training handover'
    ],
    approach: [
      'Process mapping with stakeholders',
      'Data model and architecture design',
      'Iterative build with staging environment',
      'User acceptance testing',
      'Migration, launch, and training'
    ],
    tools: ['TypeScript', 'Node.js', 'PostgreSQL', 'REST/GraphQL APIs'],
    pricingFrom: 'RM 15,000',
    faq: []
  },
  {
    slug: 'ai-development',
    title: 'AI Development',
    group: 'Intelligence',
    shortDescription: 'LLM-powered features, integrations, and automation — scoped honestly.',
    valueProp:
      'AI integrated where it genuinely improves a workflow or product, with clear boundaries between AI integration and custom ML.',
    problem:
      'Most "AI-powered" claims are a thin wrapper with no real engineering behind them, or vague promises that collapse under technical scrutiny.',
    deliverables: [
      'LLM-powered features (chat, search, generation, summarization)',
      'Retrieval-augmented generation (RAG) pipelines',
      'Workflow automation',
      'Custom ML where genuinely warranted',
      'Evaluation and monitoring for AI features'
    ],
    approach: [
      'Feasibility and readiness assessment',
      'Architecture design (integration vs custom model)',
      'Build with evaluation harness',
      'Staged rollout with monitoring',
      'Tuning and iteration post-launch'
    ],
    tools: ['LLM APIs', 'RAG pipelines', 'Automation frameworks', 'Python (ML, where offered)'],
    pricingFrom: 'RM 6,000',
    faq: []
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    group: 'Design & Care',
    shortDescription: 'Interface design grounded in usability, not just visual trend.',
    valueProp:
      'Design that is measured by whether users complete the task, not by how it looks in a static mockup.',
    problem:
      'Visually striking designs that ignore usability, accessibility, or implementation cost create expensive rework later.',
    deliverables: [
      'UX research and flows',
      'Wireframes and prototypes',
      'High-fidelity UI design system',
      'Developer handoff specs',
      'Accessibility review'
    ],
    approach: [
      'Research and user flows',
      'Wireframing and prototyping',
      'Visual design and design system',
      'Usability validation',
      'Developer handoff'
    ],
    tools: ['Figma', 'Design tokens', 'Accessibility audits (WCAG AA)'],
    pricingFrom: 'RM 3,500',
    faq: []
  },
  {
    slug: 'maintenance-support',
    title: 'Maintenance & Support',
    group: 'Design & Care',
    shortDescription: 'Ongoing care after launch — uptime, security, and continuous improvement.',
    valueProp:
      'A direct line to the people who built your system, so issues get fixed by people who already understand the codebase.',
    problem:
      'Sites and systems left unmaintained accumulate security risk, broken integrations, and slow performance regression over time.',
    deliverables: [
      'Uptime and error monitoring',
      'Security patches and dependency updates',
      'Performance monitoring and regression fixes',
      'Content and feature updates',
      'Monthly reporting'
    ],
    approach: [
      'Audit current system health',
      'Set up monitoring and alerting',
      'Define SLA and response times',
      'Ongoing maintenance cycle',
      'Quarterly review and roadmap'
    ],
    tools: ['Uptime monitoring', 'Dependency audits', 'Performance monitoring (Lighthouse CI)'],
    pricingFrom: 'RM 300 / month',
    faq: []
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    group: 'Grow',
    shortDescription: 'SEO, paid ads, social media strategy, and content marketing — data-driven growth.',
    valueProp:
      'A marketing setup that brings the right people to your business consistently, not just a spike of traffic with no follow-through.',
    problem:
      'Most businesses run ads without a strategy, post on social without a plan, and can\'t tell which channel is actually driving revenue.',
    deliverables: [
      'SEO audit and on-page optimisation',
      'Google Ads and Meta Ads campaign setup and management',
      'Social media strategy and content calendar',
      'Content marketing plan and production',
      'Monthly analytics report with actionable insights'
    ],
    approach: [
      'Audit current digital presence and competitors',
      'Define target audience and channel priorities',
      'Build and launch campaigns with tracking in place',
      'Optimise weekly based on data',
      'Monthly review and roadmap'
    ],
    tools: ['Google Analytics 4', 'Google Ads', 'Meta Ads', 'SEMrush', 'Hootsuite'],
    pricingFrom: 'RM 1,500 / month',
    faq: [
      {
        question: 'How long before I see results?',
        answer:
          'SEO typically shows traction in 3–6 months. Paid ads can deliver leads from week one. We set realistic expectations per channel in the initial strategy call.'
      },
      {
        question: 'Do you manage ads or just set them up?',
        answer:
          'We do both — setup and ongoing management with weekly optimisation. One-time setup without management rarely performs well.'
      }
    ]
  },
  {
    slug: 'business-growth',
    title: 'Business Growth',
    group: 'Grow',
    shortDescription: 'Growth strategy, market positioning, and go-to-market execution for startups and SMEs.',
    valueProp:
      'A clear, executable growth plan built around your actual market, not generic advice — so you grow in the direction that makes sense for your stage.',
    problem:
      'Most startups and SMEs know what they want to build but not how to position it, price it, or get in front of the right customers at the right time.',
    deliverables: [
      'Business and market audit',
      'Competitor and market positioning analysis',
      'Go-to-market (GTM) strategy',
      'Pricing and revenue model review',
      'Quarterly OKR and growth roadmap'
    ],
    approach: [
      'Discovery: understand your business, customers, and market',
      'Research: competitive landscape and positioning gaps',
      'Strategy: define positioning, channels, and targets',
      'Plan: 90-day execution roadmap with milestones',
      'Review: measure, iterate, and re-plan quarterly'
    ],
    tools: ['Business framework (Lean Canvas, Jobs-to-be-Done)', 'Competitive analysis', 'Analytics stack', 'OKR tracking'],
    pricingFrom: 'RM 2,500 / engagement',
    faq: [
      {
        question: 'Is this consulting or execution?',
        answer:
          'Primarily strategy and planning, but we stay involved through the execution phase to make sure the plan is actually implemented. We don\'t hand you a deck and disappear.'
      },
      {
        question: 'Do you work with pre-revenue startups?',
        answer:
          'Yes. The approach adjusts: pre-revenue focuses on validation and GTM; post-revenue focuses on scaling what\'s working and fixing what\'s not.'
      }
    ]
  },
  {
    slug: 'branding-services',
    title: 'Branding & Identity',
    group: 'Grow',
    shortDescription: 'Brand identity, product photography, and social media visuals — assets that make your brand stick.',
    valueProp:
      'A brand that looks consistent, professional, and intentional at every touchpoint — from your logo to your product shots to your Instagram grid.',
    problem:
      'Inconsistent visuals, DIY logos, and low-quality product photos undermine trust before a customer even reads your copy.',
    deliverables: [
      'Logo design and brand identity system',
      'Brand guidelines (colours, typography, usage rules)',
      'Product photography (studio or location)',
      'Social media post templates (Canva or Figma)',
      'Print and digital marketing collateral'
    ],
    approach: [
      'Brand discovery: values, audience, and reference direction',
      'Concept design: 2–3 directions presented',
      'Refinement: one direction developed to completion',
      'Photography: styling, shoot, and post-processing',
      'Handover: all source files and brand guide'
    ],
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Lightroom', 'Canva (for client editing)'],
    pricingFrom: 'RM 3,800',
    faq: [
      {
        question: 'Do I get source files?',
        answer:
          'Yes — all final files in AI, EPS, PNG, and SVG formats, plus your brand guide as a PDF and editable Figma/Canva templates.'
      },
      {
        question: 'Can you do product photography outside a studio?',
        answer:
          'Yes. We do studio tabletop shoots for products and on-location shoots where the environment adds to the story.'
      }
    ]
  },
  {
    slug: 'product-photoshoot-marketing',
    title: 'Product Photoshoot & Marketing',
    group: 'Grow',
    shortDescription: 'Professional product photography paired with marketing campaigns that put those visuals to work.',
    valueProp:
      'Studio-quality product shots and the campaign to match — one team handles the shoot, the creative, and the ads, so your visuals actually sell.',
    problem:
      'Great products lose sales to bad photos, and even good photos sit unused because nobody turns them into ads, listings, and social content that convert.',
    deliverables: [
      'Studio or on-location product photoshoot',
      'Retouched, e-commerce-ready images (white background, lifestyle, detail shots)',
      'Platform-optimised exports (Shopee, Lazada, Instagram, website)',
      'Ad creatives and social media posts built from the shoot',
      'Campaign setup and management using the new visuals'
    ],
    approach: [
      'Brief: product, audience, and platform requirements',
      'Shoot planning: styling, props, and shot list',
      'Photoshoot: studio tabletop or on-location',
      'Post-production: retouch, colour, and platform exports',
      'Marketing: launch ads and content using the new assets'
    ],
    tools: ['Adobe Photoshop', 'Adobe Lightroom', 'Capture One', 'Meta Ads', 'Canva (client templates)'],
    pricingFrom: 'RM 1,800 / package',
    faq: [
      {
        question: 'Do I need to send my products to you?',
        answer:
          'For studio shoots, yes — we arrange collection or delivery within the Klang Valley. For bulky products or venue-based businesses, we shoot on-location at your premises.'
      },
      {
        question: 'Can I use the photos anywhere?',
        answer:
          'Yes. You receive full usage rights to all final images, delivered in high resolution plus web-optimised and platform-specific crops.'
      }
    ]
  },
  {
    slug: 'media-creation',
    title: 'Media Creation',
    group: 'Grow',
    shortDescription: 'Video production, Reels, content series, and digital media — scroll-stopping creative for every platform.',
    valueProp:
      'Polished video and visual content built for how people actually consume — short-form for social, long-form for YouTube, product demos for sales.',
    problem:
      'Businesses know they need video content but lack the production quality, editing, or consistency to build an audience or convert viewers.',
    deliverables: [
      'Short-form video (Reels, TikTok, YouTube Shorts)',
      'Long-form video (YouTube, website hero, product demos)',
      'Social media content series (photo + caption)',
      'Motion graphics and text animations',
      'Voiceover and subtitles'
    ],
    approach: [
      'Brief: define content goals, audience, and platform',
      'Pre-production: scripting, storyboard, scheduling',
      'Production: shoot or record (studio / on-location / screen capture)',
      'Post-production: edit, colour, audio, graphics',
      'Delivery: optimised exports per platform'
    ],
    tools: ['Adobe Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Adobe Lightroom', 'CapCut (social-native)'],
    pricingFrom: 'RM 1,200 / video',
    faq: [
      {
        question: 'Do you shoot on-site or remotely?',
        answer:
          'Both. On-site for product, brand, and interview content; remote/screen-capture for tutorials, SaaS demos, and webinars.'
      },
      {
        question: 'How many revisions are included?',
        answer:
          'Two rounds of edit revisions are included per video. We structure briefs well upfront to reduce revision cycles.'
      }
    ]
  }
];

export const getServiceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);

export const SERVICE_GROUPS: ServiceGroup[] = ['Build', 'Intelligence', 'Design & Care', 'Grow'];
