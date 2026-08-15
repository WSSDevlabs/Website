export type BespokeService = {
  id: string;
  title: string;
  priceRange: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  grantEligible: boolean;
};

export const BESPOKE_SERVICES: BespokeService[] = [
  {
    id: 'custom-enterprise-engineering',
    title: 'Bespoke Enterprise Engineering',
    priceRange: 'RM 4,500 – RM 15,000',
    tagline: 'Tailored ERP, CRM, and Multi-Branch Operations Software',
    description:
      'When your business operations outgrow off-the-shelf software, we engineer tailored internal tools, automated workflows, and multi-department portals shaped around your exact operational reality.',
    deliverables: [
      'Custom ERP/CRM tailored to your specific staff workflows',
      'Multi-branch inventory, procurement, and billing databases',
      'Role-Based Access Control (RBAC) across departments',
      'Legacy database migration and third-party API wiring',
      'Self-hosted data security with complete source code ownership',
      'Comprehensive staff onboarding documentation & video walkthroughs'
    ],
    techStack: ['PHP 8.2+', 'Node.js', 'Go', 'Python', 'MySQL / PostgreSQL', 'Tailwind CSS', 'AWS / Azure'],
    grantEligible: true
  },
  {
    id: 'ai-llm-integration',
    title: 'Advanced AI & LLM Automation',
    priceRange: 'RM 5,500 – RM 15,000',
    tagline: 'Private RAG Pipelines & 24/7 AI Lead Qualification Bots',
    description:
      'Deploy intelligent assistants and automated knowledge retrieval grounded exclusively on your proprietary company data, documents, and pricing guidelines — eliminating hallucination and manual triage.',
    deliverables: [
      'Retrieval-Augmented Generation (RAG) knowledge engine on your internal PDF/SOP docs',
      '24/7 AI Lead Qualification WhatsApp & Web Bot that books meetings directly into your calendar',
      'Automated invoice data extraction and OCR processing pipeline',
      'Evaluation benchmarks to ensure factual accuracy and data privacy',
      'Zero-leakage architecture: company data is never used to train public LLMs'
    ],
    techStack: ['Python', 'LangChain / LlamaIndex', 'OpenAI / Claude / Gemini APIs', 'ChromaDB / pgvector', 'Node.js'],
    grantEligible: true
  },
  {
    id: 'custom-mobile-app',
    title: 'Custom Native & Cross-Platform Mobile Apps',
    priceRange: 'RM 8,500 – RM 15,000',
    tagline: 'Extend Your Systems to iOS & Android with High Performance',
    description:
      'Transform web dashboards and marketplace systems into native mobile experiences for field teams, drivers, service technicians, or VIP retail customers.',
    deliverables: [
      'Native-feel iOS and Android cross-platform application',
      'Real-time push notifications and offline storage sync',
      'Camera, GPS, QR scanning, and Bluetooth hardware integration',
      'Direct API bridge to your core MySQL/PostgreSQL backends',
      'Apple App Store & Google Play submission and review support'
    ],
    techStack: ['React Native', 'Flutter', 'TypeScript', 'Node.js / Go backend', 'Firebase / APNs'],
    grantEligible: true
  }
];

export const GOVERNMENT_GRANTS = [
  {
    code: 'PMKS-MADANI-2026',
    name: 'PMKS Madani Grant 2026',
    matching: '50% Matching Grant (Up to RM 5,000)',
    focus: 'Digital Upgrades: POS Systems, HR Portals, Inventory & Digital Commerce',
    eligibility: 'Malaysian SMEs registered with SSM for at least 6 months with 60%+ Malaysian equity.',
    howWssHelps:
      'All WSS Express Business, Marketplace systems, and Bespoke modules come with compliant itemized quotations and official invoices formatted for quick MDEC/BSN grant reimbursement.'
  },
  {
    code: 'MDEC-MDSG-MFG',
    name: 'MDEC Digital Services Grant (MDSG-MFG)',
    matching: 'Up to RM 75,000 (70% Government Match)',
    focus: 'Smart Manufacturing, Industrial Automation & Predictive Maintenance Software',
    eligibility: 'Mid-tier Malaysian manufacturers and logistics providers implementing digital transformation.',
    howWssHelps:
      'We co-author technical architecture specifications and milestone roadmaps required for MDEC technical committee vetting.'
  },
  {
    code: 'NIMP-2030-ESG',
    name: 'NIMP 2030 & DIAF-ESG Compliance',
    matching: 'Tax Incentives & Subsidized ESG Digitization',
    focus: 'Automated Carbon Footprint Tracking & ESG Supply Chain Reporting',
    eligibility: 'Export-oriented businesses and supply chain contractors fulfilling ESG reporting requirements.',
    howWssHelps:
      'We build automated data aggregation dashboards that collect energy, waste, and logistics metrics from factory machinery for one-click audit reports.'
  }
];

export const TOOLS_WE_TRUST = {
  core: [
    { name: 'PHP 8.2+', desc: 'High-speed typed backend with minimal memory footprint' },
    { name: 'MySQL', desc: 'Rock-solid relational data integrity and transaction safety' },
    { name: 'Tailwind CSS', desc: 'Zero-bloat atomic utility design token system' },
    { name: 'GSAP', desc: '60fps hardware-accelerated micro-interactions' }
  ],
  extended: [
    { name: 'JavaScript / TypeScript', desc: 'Type-safe clientside logic and components' },
    { name: 'Next.js', desc: 'React server components for high-traffic web apps' },
    { name: 'Node.js', desc: 'Asynchronous event-driven microservices & workers' },
    { name: 'Angular', desc: 'Enterprise front-end frameworks for heavy portals' }
  ],
  enterprise: [
    { name: 'Go (Golang)', desc: 'Ultra-low latency microservices & concurrency' },
    { name: 'Rust', desc: 'Memory-safe systems programming for intense data loads' },
    { name: 'Python', desc: 'Machine learning, RAG pipelines, and data scraping' },
    { name: 'Java', desc: 'Legacy enterprise banking and ERP system integration' }
  ],
  infrastructure: [
    { name: 'Amazon Web Services (AWS)', desc: 'Scalable EC2, S3, RDS, and Lambda instances' },
    { name: 'Microsoft Azure', desc: 'Enterprise hybrid cloud and Active Directory auth' },
    { name: 'Cloudflare Edge', desc: 'Sub-30ms global caching, DDoS protection, and SSL' }
  ]
};
