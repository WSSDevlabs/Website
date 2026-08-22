export type MarketplaceSystem = {
  id: string;
  slug: string;
  name: string;
  price: string;
  priceRaw: number;
  category: 'Developer Tools' | 'Venues & Hospitality' | 'Health & Services' | 'Commerce & Rental' | 'Real Estate & CRM' | 'Corporate Operations';
  tagline: string;
  target: string;
  summary: string;
  underTheHood: {
    title: string;
    highlights: string[];
    technicalArchitecture: string;
    securityAndLicensing: string;
  };
  features: string[];
  techStack: string[];
  pricingModel: string;
  includedDeliverables: string[];
  faq: { q: string; a: string }[];
};

export const MARKETPLACE_SYSTEMS: MarketplaceSystem[] = [
  {
    id: 'wss-eventspace',
    slug: 'wss-eventspace',
    name: 'WSS EventSpace',
    price: 'RM 699',
    priceRaw: 699,
    category: 'Venues & Hospitality',
    tagline: 'Real-Time Availability Calendar & Hall Booking Engine',
    target: 'Event Venues, Wedding Halls, Studio Spaces & Co-Working Spaces',
    summary:
      'A complete booking and deposit management system for Malaysian event spaces. Includes live slot checking, booking notifications, calendar synchronization, and automated confirmation emails.',
    underTheHood: {
      title: 'Atomic Slot Reservation & Conflict-Proof Engine',
      highlights: [
        'Atomic database transactions preventing double-booking across simultaneous checkout sessions.',
        'Real-time availability calendar rendered via vanilla JS without heavy calendar plugin overhead.',
        'Automated booking confirmation emails with calendar (.ics) attachments and deposit invoices.',
        'Direct WhatsApp and push notification triggers for hall managers upon reservation.'
      ],
      technicalArchitecture: 'MySQL transaction locks, Webhook dispatchers, responsive mobile-first booking UI.',
      securityAndLicensing: 'Full source code. Zero recurring fees or booking cut percentages.'
    },
    features: [
      'Interactive multi-venue / hall availability calendar',
      'Custom hourly, half-day, and full-day booking slots',
      'Deposit payment flow with ToyyibPay & FPX support',
      'Admin visual booking matrix & date blackout manager',
      'Automated WhatsApp & Email customer notification',
      'Customer intake form for catering, AV, and decoration add-ons'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'Vanilla JS', 'FPX Gateway'],
    pricingModel: 'Buy-Once, Own-Forever',
    includedDeliverables: [
      'Full venue booking source code',
      'Admin portal with master calendar view',
      'Automated email templates',
      'Database schema & installation manual'
    ],
    faq: [
      {
        q: 'Does WSS take a cut of my venue booking fees?',
        a: 'Never. 100% of booking revenue goes directly to your bank account via your payment gateway.'
      }
    ]
  },
  {
    id: 'wss-medcare',
    slug: 'wss-medcare',
    name: 'WSS MedCare Clinic',
    price: 'RM 749',
    priceRaw: 749,
    category: 'Health & Services',
    tagline: 'AJAX Appointment Slot Picker & Live Patient Queue System',
    target: 'Private Clinics, Dental Practices, Physio Centers & GP Medical Outlets',
    summary:
      'Modernize clinic patient flow with fast AJAX doctor appointment booking, digital patient intake forms, and a real-time waiting room live queue display.',
    underTheHood: {
      title: 'Sub-second AJAX Slot Allocator & Live Waiting Room Queue',
      highlights: [
        'Lightweight AJAX doctor appointment picker with zero full-page reloads.',
        'Live patient queue management system with waiting room TV display screen URL.',
        'Encrypted digital patient intake forms adhering to Malaysian PDPA privacy principles.',
        'Doctor consultation schedule switcher with emergency leave blackout overrides.'
      ],
      technicalArchitecture: 'MySQL InnoDB schema, WebSocket/AJAX polling for TV queue display, PDPA-compliant encryption.',
      securityAndLicensing: 'Buy once, complete data privacy. Patient health information is never hosted on third-party SaaS clouds.'
    },
    features: [
      'Doctor & specialty appointment slot scheduler',
      'Digital patient intake form (symptoms, allergies, IC/Passport)',
      'Live queue number display board for clinic waiting room TVs',
      'Counter triage dashboard for clinic receptionists',
      'Automated SMS/WhatsApp appointment reminders',
      'Doctor consultation log and appointment history'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'AJAX', 'WebSockets / Polling'],
    pricingModel: 'Buy-Once, Own-Forever',
    includedDeliverables: [
      'Patient booking portal',
      'Reception counter triage dashboard',
      'Waiting room TV live queue display',
      'Installation guide & secure database schema'
    ],
    faq: [
      {
        q: 'Does it store patient IC numbers securely?',
        a: 'Yes, fields can be hashed or encrypted at rest in your local MySQL database, fulfilling PDPA requirements.'
      }
    ]
  },
  {
    id: 'wss-ticketflow',
    slug: 'wss-ticketflow',
    name: 'WSS TicketFlow',
    price: 'RM 749',
    priceRaw: 749,
    category: 'Venues & Hospitality',
    tagline: 'QR Code Generation API & Per-Tier Capacity Scanner',
    target: 'Event Organizers, Conferences, Festivals & Ticketed Workshops',
    summary:
      'Sell event tickets directly with zero third-party ticketing platform commission. Issues cryptographic QR code e-tickets and provides a mobile camera scanner for live gate check-in.',
    underTheHood: {
      title: 'Encrypted QR Pass Engine & Real-Time Gate Scanner',
      highlights: [
        'Automated high-resolution QR code generator with cryptographic check-hash to prevent forged passes.',
        'Browser-based mobile camera QR scanner for fast gate check-in with offline cache capability.',
        'Per-tier capacity control with real-time countdown (Early Bird, General, VIP).',
        'Instant PDF e-ticket generation dispatched via email upon successful FPX checkout.'
      ],
      technicalArchitecture: 'SVG/PNG QR generation library, HTML5 Camera API scanner, MySQL concurrency locks.',
      securityAndLicensing: 'Full source code ownership. Keep 100% of your ticket sales with no percentage cuts.'
    },
    features: [
      'Multi-tier ticket inventory manager with automatic phase transitions',
      'Instant FPX, Credit Card, and DuitNow QR checkout',
      'Automated PDF ticket generation with embedded QR codes',
      'Mobile-friendly gate staff QR scanner with audio/vibration feedback',
      'Real-time attendee check-in percentage dashboard',
      'Exportable attendee lists for post-event email marketing'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'HTML5 Barcode Detection API', 'ToyyibPay/Stripe'],
    pricingModel: 'Buy-Once, Own-Forever',
    includedDeliverables: [
      'Customer ticket sales storefront',
      'Gate scanner web application',
      'Admin attendee management dashboard',
      'Setup guide and SQL schema'
    ],
    faq: [
      {
        q: 'Do gate staff need to download an app to scan tickets?',
        a: 'No app download needed. Gate staff open the secure scanner URL in any mobile browser (Safari/Chrome) and use their phone camera.'
      }
    ]
  },
  {
    id: 'wss-buildright',
    slug: 'wss-buildright',
    name: 'WSS BuildRight CRM',
    price: 'RM 799',
    priceRaw: 799,
    category: 'Real Estate & CRM',
    tagline: 'Visual Kanban Pipeline & Lead Tracking for Service Contractors',
    target: 'Renovation Contractors, Interior Designers, Engineering & HVAC Firms',
    summary:
      'A purpose-built CRM that tracks homeowner and commercial leads from initial quote request to on-site inspection, quotation sign-off, and project milestone completion.',
    underTheHood: {
      title: 'Contractor Kanban Pipeline & Lead Capture Engine',
      highlights: [
        'Visual drag-and-drop Kanban pipeline with customized contractor deal stages.',
        'Per-lead task tracking, site photo attachments, and measurement note logs.',
        'Automated quote request capture widget embeddable on any landing page.',
        'WhatsApp direct messaging templates for rapid quotation follow-ups.'
      ],
      technicalArchitecture: 'Sortable.js Kanban engine, MySQL relational schema, responsive tablet/mobile site-survey UI.',
      securityAndLicensing: 'Full source code ownership. Unlimited contractor seats and leads.'
    },
    features: [
      'Visual drag-and-drop contractor deal pipeline',
      'Quotation generator with line-item breakdown & PDF export',
      'Site visit scheduling with Google Maps navigation links',
      'Customer project status tracker link for homeowners',
      'Expense & contractor payout tracking per project',
      'Embeddable quotation request widget'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'Sortable.js', 'Alpine.js'],
    pricingModel: 'Buy-Once, Own-Forever',
    includedDeliverables: [
      'Complete CRM web application',
      'Embeddable quote request script',
      'PDF quotation template',
      'Database installation manual'
    ],
    faq: [
      {
        q: 'Can our site supervisors use this on their iPads or phones?',
        a: 'Yes, the interface is fully responsive and designed for easy photo uploading and notes directly on site.'
      }
    ]
  },
  {
    id: 'wss-directory',
    slug: 'wss-directory',
    name: 'WSS Directory',
    price: 'RM 749',
    priceRaw: 749,
    category: 'Commerce & Rental',
    tagline: 'Business Association Directory with Monetized Featured Placements',
    target: 'Chambers of Commerce, Business Associations & Regional Niche Guides',
    summary:
      'Launch a profitable business directory or community portal. Allow merchants to submit their profiles, manage listing claims, and monetize premium top-of-category placements.',
    underTheHood: {
      title: 'Moderated Submission Pipeline & Monetized Category Banners',
      highlights: [
        'Listing submission and approval workflow with admin review queue.',
        'Monetized featured placement plans with automated badge and sticky top-ranking status.',
        'Multi-level category filters with state, district, and keyword search indexes.',
        'Direct business lead generation form on each listing with email dispatch.'
      ],
      technicalArchitecture: 'MySQL Full-Text Search indexing, Tailwind CSS responsive cards, payment gateway monetization.',
      securityAndLicensing: 'Perpetual license. Full source code ownership.'
    },
    features: [
      'Searchable business listing directory with category filters',
      'Self-service merchant listing submission and claiming workflow',
      'Featured placement monetization packages (Basic, Verified, Premium)',
      'Interactive location map pins and contact information cards',
      'User review and rating moderation system',
      'Admin analytics on listing views and contact clicks'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'Leaflet / OpenStreetMap', 'FPX Gateway'],
    pricingModel: 'Buy-Once, Own-Forever',
    includedDeliverables: [
      'Full directory public portal',
      'Merchant dashboard and admin moderation queue',
      'Monetization plan configuration',
      'Database installation files'
    ],
    faq: [
      {
        q: 'Can I charge businesses an annual fee to stay listed in the directory?',
        a: 'Yes, you can configure one-time or recurring listing fees for verified and featured placements.'
      }
    ]
  },
  {
    id: 'wss-staffportal',
    slug: 'wss-staffportal',
    name: 'WSS StaffPortal',
    price: 'RM 899',
    priceRaw: 899,
    category: 'Corporate Operations',
    tagline: 'Internal Operations Hub with RBAC & Approval Workflows',
    target: 'SMEs, Corporate Teams, Operations Managers & Growing Enterprises',
    summary:
      'Unify day-to-day internal operations. Features Role-Based Access Control (RBAC), internal Kanban task boards, and multi-tier approval workflows for leave, IT assets, and company expense claims.',
    underTheHood: {
      title: 'Enterprise RBAC & Multi-Level Request Approval Engine',
      highlights: [
        'Role-Based Access Control (RBAC): SuperAdmin, Department Head, Staff, and Auditor permissions.',
        'Internal drag-and-drop team Kanban task and sprint tracking board.',
        'Configurable multi-tier request approval engine for annual leave, expense claims, and equipment requests.',
        'Detailed audit logging for all status changes and financial approvals.'
      ],
      technicalArchitecture: 'MySQL relational schema with foreign key integrity, Tailwind CSS enterprise dashboard, audit trail engine.',
      securityAndLicensing: 'Full source code ownership. Deploy on your local company server, intranet, or private cloud.'
    },
    features: [
      'Comprehensive employee directory with department hierarchies',
      'Leave management system with automated balance calculations and public holiday calendars',
      'Expense claim submission with receipt photo attachments and manager approvals',
      'IT asset and equipment allocation registry',
      'Internal team Kanban board for cross-department tasks',
      'Complete audit trail and PDF summary exports for accountants'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'Sortable.js', 'Alpine.js'],
    pricingModel: 'Buy-Once, Own-Forever',
    includedDeliverables: [
      'Complete internal staff operations portal',
      'Admin RBAC configuration panel',
      'Email approval workflow notification system',
      'Database migration files & setup guide'
    ],
    faq: [
      {
        q: 'Can we install this on an internal office server or intranet?',
        a: 'Yes, WSS StaffPortal is 100% self-hosted and runs seamlessly on local office servers, private VPNs, or standard cloud hosting.'
      }
    ]
  }
];

export const getMarketplaceSystemBySlug = (slug: string) =>
  MARKETPLACE_SYSTEMS.find((system) => system.slug === slug);
