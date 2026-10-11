export type ProjectMilestone = {
  stage: string;
  label: string;
  description: string;
  expectedDuration: string;
};

export const STANDARD_BUILD_PIPELINE: ProjectMilestone[] = [
  {
    stage: '01',
    label: 'Architecture & Technical Scope Lock',
    description: 'Direct 30-minute kickoff with the founder. Requirements, data models, and API integrations are finalized.',
    expectedDuration: 'Day 1'
  },
  {
    stage: '02',
    label: 'Core Prototype & Interface Staging',
    description: 'High-fidelity, responsive UI built with Tailwind CSS & GSAP. Staged live on a private URL for your team to test on mobile and desktop.',
    expectedDuration: 'Days 2–4'
  },
  {
    stage: '03',
    label: 'Payment, Gateway & Security Hardening',
    description: 'Wiring of FPX/ToyyibPay/Stripe gateways, MIME upload validations, Ed25519 licensing, and database index tuning.',
    expectedDuration: 'Days 4–6'
  },
  {
    stage: '04',
    label: 'Performance Audit & Production Go-Live',
    description: 'Enforcing 90+ Lighthouse mobile performance budget, Answer Engine structured data checks, DNS cutover, and final handover with source code.',
    expectedDuration: 'Day 7'
  }
];

export const LIVE_SYSTEM_METRICS = {
  overallHealth: 'Operational',
  uptimePercentage: '99.98%',
  averageLighthouseScore: '96 / 100',
  averageResponseTimeSLA: '< 2 Hours',
  activeSprintSlots: {
    total: 6,
    active: 4,
    availableForBooking: 2
  },
  directBuilders: [
    {
      name: 'Razali',
      role: 'Founder & Lead Engineer',
      status: 'Available for Sprint Kickoffs',
      specialty: 'Full-stack development, UI/UX, and Cloudflare edge deployment',
      whatsapp: '+601127205895',
      email: 'hello@wssdevlabs.com'
    }
  ],
  recentDeployments: [
    {
      client: 'WSS Marketplace v2.0',
      category: 'Productized Software Suite',
      status: 'Shipped to Production',
      date: 'August 2026',
      lighthouseMobile: 98
    },
    {
      client: 'SME Madani Grant POS Integration',
      category: 'Custom Enterprise ERP Module',
      status: 'Verified & Audited',
      date: 'August 2026',
      lighthouseMobile: 97
    },
    {
      client: 'Kuala Lumpur Clinic Queue Hub',
      category: 'WSS MedCare Clinic Deployment',
      status: 'Live on Clinic Display TVs',
      date: 'August 2026',
      lighthouseMobile: 99
    }
  ]
};
