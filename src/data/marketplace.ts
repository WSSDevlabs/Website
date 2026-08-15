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
    id: 'wss-forms',
    slug: 'wss-forms',
    name: 'WSS Forms',
    price: 'RM 149',
    priceRaw: 149,
    category: 'Developer Tools',
    tagline: 'Self-Hosted Form Engine with Ed25519 Offline Licensing & Zero Telemetry',
    target: 'Agencies, Freelancers & Developers',
    summary:
      'A standalone, embeddable PHP form processing engine that replaces subscription-heavy SaaS form builders. Store submissions locally in MySQL/SQLite with complete privacy and zero monthly fees.',
    underTheHood: {
      title: 'Cryptographic License Verification & MIME Protection',
      highlights: [
        'Ed25519-signed offline licensing — no external phone-home servers or DRM check bloat.',
        'Strict server-side MIME-type magic byte verification for all file uploads.',
        'Zero external telemetry: 100% of lead data stays in your local MySQL/SQLite database.',
        'Web3Forms, SMTP, and Webhook dispatch adapters included out of the box.'
      ],
      technicalArchitecture: 'PHP 8.2+ strict typed pipeline, PSR-7 request handling, SQLite/MySQL persistence layer, zero external runtime dependencies.',
      securityAndLicensing: 'Ed25519 cryptographic key signature. Buy once, host on unlimited client projects under standard developer license.'
    },
    features: [
      'Visual drag-and-drop form builder component',
      'Local submission storage with CSV/JSON export',
      'Automated client & admin email responders',
      'reCAPTCHA v3 & Cloudflare Turnstile integration',
      'MIME-verified multi-file upload engine',
      'Webhook triggers for Slack, Discord, and Telegram'
    ],
    techStack: ['PHP 8.2+', 'MySQL / SQLite', 'Tailwind CSS', 'Alpine.js', 'Vanilla JS'],
    pricingModel: 'Buy-Once, Own-Forever',
    includedDeliverables: [
      'Full unencrypted PHP source code',
      'Production SQL schemas & migration scripts',
      'One-command setup guide',
      'Lifetime bugfixes & local documentation'
    ],
    faq: [
      {
        q: 'Do I need to pay monthly SaaS fees for WSS Forms?',
        a: 'No. You pay RM 149 once and own the full source code forever. Host on your own cPanel, VPS, or cloud server.'
      },
      {
        q: 'How does the Ed25519 offline license work?',
        a: 'The license is verified mathematically via an Ed25519 public key in code without calling external licensing servers. Your forms never fail due to third-party outage.'
      }
    ]
  },
  {
    id: 'wss-flexbuilder',
    slug: 'wss-flexbuilder',
    name: 'WSS FlexBuilder',
    price: 'RM 799',
    priceRaw: 799,
    category: 'Developer Tools',
    tagline: 'Divi-Style Visual Block Editor with Malaysian Payment Gateways',
    target: 'SMEs & Agencies needing custom landing pages without bloated WordPress themes',
    summary:
      'A modular, high-performance visual website and landing page engine with 14 prebuilt section types, 13 custom field types, and built-in support for gKash, SenangPay, ToyyibPay, and Stripe.',
    underTheHood: {
      title: 'Modular Layout Architecture & Native Gateway Hooks',
      highlights: [
        '14 custom layout section modules rendered via cached PHP partials (sub-50ms TTFB).',
        '13 field types including rich text, repeater blocks, media pickers, and live pricing sliders.',
        'Native payment drivers: gKash, SenangPay, ToyyibPay, Stripe, and DuitNow QR.',
        'Clean semantic HTML output with zero shortcode or page-builder database bloat.'
      ],
      technicalArchitecture: 'PHP 8.2+ MVC architecture, Tailwind CSS design token engine, GSAP interaction hooks, MySQL relational schema.',
      securityAndLicensing: 'Full source code ownership. Unlocked for custom client branding and white-labeling.'
    },
    features: [
      'Visual live-preview layout designer',
      '14 prebuilt landing and sales section types',
      '13 customizable input & repeater field types',
      'Integrated Malaysian payment gateways (ToyyibPay, SenangPay, gKash, Stripe)',
      'Built-in SEO metadata and OpenGraph control',
      'Blazing fast sub-second mobile page loads'
    ],
    techStack: ['PHP 8.2+', 'MySQL', 'Tailwind CSS', 'GSAP', 'JavaScript'],
    pricingModel: 'Buy-Once, Own-Forever',
    includedDeliverables: [
      'Complete modular PHP codebase',
      '14 section component templates',
      'Payment gateway webhook adapters',
      'Interactive visual demo database'
    ],
    faq: [
      {
        q: 'Can I integrate my existing SenangPay or ToyyibPay merchant account?',
        a: 'Yes, just paste your API keys and secret hash in the settings dashboard. Transactions deposit straight to your bank.'
      }
    ]
  },
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
      technicalArchitecture: 'PHP 8.2+, MySQL transaction locks, Webhook dispatchers, responsive mobile-first booking UI.',
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
    techStack: ['PHP 8.2+', 'MySQL', 'Tailwind CSS', 'Vanilla JS', 'FPX Gateway'],
    pricingModel: 'Buy-Once, Own-Forever',
    includedDeliverables: [
      'Full venue booking PHP codebase',
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
    id: 'wss-tablereserve',
    slug: 'wss-tablereserve',
    name: 'WSS TableReserve',
    price: 'RM 699',
    priceRaw: 699,
    category: 'Venues & Hospitality',
    tagline: 'Multi-Branch Restaurant Reservation & Menu Pre-Order Platform',
    target: 'F&B Brands, Cafes, Fine Dining & Multi-Branch Restaurants',
    summary:
      'Manage dining tables, prevent no-shows with deposit commitments, and allow patrons to pre-order dishes for seamless service during peak dinner hours.',
    underTheHood: {
      title: 'Multi-Outlet Capacity Engine & Pre-Order Ledger',
      highlights: [
        'Multi-branch table inventory manager with per-outlet operating hours and seating quotas.',
        'Deposit payment logic to reduce table no-shows by up to 85%.',
        'Menu pre-order selector with dietary modifier tags and live subtotal calculations.',
        'Instant kitchen print & kitchen display system (KDS) export format.'
      ],
      technicalArchitecture: 'PHP 8.2+, MySQL relational database, Alpine.js reactive menu selector, WhatsApp Business webhook.',
      securityAndLicensing: 'Perpetual ownership. Deploy for single or multiple outlets under your brand.'
    },
    features: [
      'Multi-branch location selector with branch-specific hours',
      'Table allocation & party size selector (2-pax, 4-pax, VIP room)',
      'Deposit payment collection via FPX & DuitNow QR',
      'Interactive menu pre-order system with dietary flags',
      'Automated WhatsApp booking confirmation to guests',
      'Staff admin floor view with live seating status'
    ],
    techStack: ['PHP 8.2+', 'MySQL', 'Tailwind CSS', 'Alpine.js', 'ToyyibPay/Stripe'],
    pricingModel: 'Buy-Once, Own-Forever',
    includedDeliverables: [
      'Customer-facing booking flow',
      'Staff admin floor manager',
      'Kitchen order print sheet layout',
      'SQL database setup & installation guide'
    ],
    faq: [
      {
        q: 'Can customers reserve without paying a deposit?',
        a: 'Yes, deposit requirement can be toggled on or off per branch, day of week, or group size (e.g. required only for 6+ pax).'
      }
    ]
  },
  {
    id: 'wss-salonflow',
    slug: 'wss-salonflow',
    name: 'WSS SalonFlow',
    price: 'RM 699',
    priceRaw: 699,
    category: 'Health & Services',
    tagline: 'Staff Slot Management & Service Add-On Booking Suite',
    target: 'Spas, Hair Salons, Aesthetic Centers & Grooming Lounges',
    summary:
      'Empower clients to choose their preferred stylist or therapist, select service add-ons, and book time slots that automatically adjust to staff working schedules.',
    underTheHood: {
      title: 'Individual Stylist Roster & Service Stacking Logic',
      highlights: [
        'Staff working hours & lunch break slot exclusion algorithm.',
        'Dynamic duration calculation when multiple service add-ons are chosen in a single booking.',
        'Individual staff profile management with showcase portfolios and specialist pricing.',
        'SMS & WhatsApp reminder trigger engine before scheduled appointments.'
      ],
      technicalArchitecture: 'PHP 8.2+, MySQL time-matrix scheduling, GSAP micro-interactions, responsive mobile appointment picker.',
      securityAndLicensing: 'Full source code. Zero recurring fees per staff member.'
    },
    features: [
      'Therapist & stylist selector with photo and bio profiles',
      'Service catalog with duration & tiered price add-ons',
      'Real-time slot calculator matching specific staff availability',
      'Customer appointment management & self-rescheduling window',
      'Admin roster management with day-off blockouts',
      'WhatsApp reminder links & booking receipts'
    ],
    techStack: ['PHP 8.2+', 'MySQL', 'Tailwind CSS', 'Vanilla JS', 'WhatsApp API'],
    pricingModel: 'Buy-Once, Own-Forever',
    includedDeliverables: [
      'Client booking interface',
      'Staff appointment schedule view',
      'Admin configuration panel',
      'Setup guide and SQL schema'
    ],
    faq: [
      {
        q: 'Is there a limit on how many stylists or services I can add?',
        a: 'No limit. Since you host it locally, you can create unlimited staff members, branches, and service packages.'
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
      technicalArchitecture: 'PHP 8.2+, MySQL InnoDB schema, WebSocket/AJAX polling for TV queue display, PDPA-compliant encryption.',
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
    techStack: ['PHP 8.2+', 'MySQL', 'Tailwind CSS', 'AJAX', 'WebSockets / Polling'],
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
      technicalArchitecture: 'PHP 8.2+, SVG/PNG QR generation library, HTML5 Camera API scanner, MySQL concurrency locks.',
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
    techStack: ['PHP 8.2+', 'MySQL', 'Tailwind CSS', 'HTML5 Barcode Detection API', 'ToyyibPay/Stripe'],
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
    id: 'wss-easyrent',
    slug: 'wss-easyrent',
    name: 'WSS EasyRent',
    price: 'RM 699',
    priceRaw: 699,
    category: 'Commerce & Rental',
    tagline: 'Conflict-Free Vehicle & Equipment Rental Engine',
    target: 'Car Rentals, Camera Equipment, Heavy Machinery & Tool Hire Companies',
    summary:
      'An automated rental management engine featuring conflict detection, flexible daily or hourly billing calculation, deposit holding, and vehicle/equipment fleet management.',
    underTheHood: {
      title: 'Fleet Conflict Detection & Interval Billing Engine',
      highlights: [
        'Automated availability conflict detection preventing overlapping rental intervals across the fleet.',
        'Dynamic pricing logic supporting daily, hourly, weekend, and long-term rental rates.',
        'Blackout date and scheduled maintenance buffer management for vehicle inspection periods.',
        'Security deposit hold and damage waiver add-on logic.'
      ],
      technicalArchitecture: 'PHP 8.2+, MySQL temporal range queries, Tailwind CSS responsive booking widget, PDF contract generator.',
      securityAndLicensing: 'Full source code ownership. Deploy for single or multi-depot operations.'
    },
    features: [
      'Fleet catalog with high-res photos, specs, and transmission filters',
      'Date/time pickup and return selector with auto duration calculation',
      'Security deposit collection & refund tracking',
      'Identity verification upload (Driver license, IC/Passport)',
      'Admin visual timeline calendar of rented vs available units',
      'Rental agreement PDF generator with digital signature field'
    ],
    techStack: ['PHP 8.2+', 'MySQL', 'Tailwind CSS', 'Alpine.js', 'FPX Gateway'],
    pricingModel: 'Buy-Once, Own-Forever',
    includedDeliverables: [
      'Client rental reservation system',
      'Admin fleet schedule & maintenance portal',
      'Digital rental agreement templates',
      'Database installation scripts'
    ],
    faq: [
      {
        q: 'Can I set different rental rates for weekends and public holidays?',
        a: 'Yes, the pricing engine allows custom surcharges for peak dates and weekend rentals.'
      }
    ]
  },
  {
    id: 'wss-primeproperty',
    slug: 'wss-primeproperty',
    name: 'WSS PrimeProperty',
    price: 'RM 749',
    priceRaw: 749,
    category: 'Real Estate & CRM',
    tagline: 'Real Estate Portal with REN Validation & Viewing Pipeline',
    target: 'Real Estate Agencies, Property Developers & Negotiator Teams',
    summary:
      'A specialized property listing and lead capture portal for Malaysian real estate. Features LPPEH REN validation, viewing schedule capture, and mortgage calculation tools.',
    underTheHood: {
      title: 'REN Agent Verification & Geolocation Filtering Engine',
      highlights: [
        'Agent profile management with LPPEH REN license number display and verification badges.',
        'Viewing lead status tracking pipeline with automated WhatsApp routing to assigned negotiators.',
        'Advanced property filters (tenure, bedrooms, built-up sqft, state, neighborhood, furnishing).',
        'Interactive Malaysian mortgage loan & stamp duty estimation calculator.'
      ],
      technicalArchitecture: 'PHP 8.2+, MySQL spatial index, Tailwind CSS UI, WhatsApp deep-link lead generation.',
      securityAndLicensing: 'Complete source code. Unrestricted listings and agent profiles.'
    },
    features: [
      'Property listing manager (For Sale / For Rent / New Launches)',
      'Agent directory with verified REN numbers and WhatsApp links',
      'Schedule a Viewing lead modal with instant CRM capture',
      'Built-in Malaysian Home Loan & Legal Fee calculator',
      'Floor plan, 360 virtual tour, and YouTube video embed fields',
      'Automated watermark generator for property listing photos'
    ],
    techStack: ['PHP 8.2+', 'MySQL', 'Tailwind CSS', 'Alpine.js', 'WhatsApp Business API'],
    pricingModel: 'Buy-Once, Own-Forever',
    includedDeliverables: [
      'Full agency property portal',
      'Agent listing submission backend',
      'Mortgage calculator widget',
      'SQL database schemas & deployment guide'
    ],
    faq: [
      {
        q: 'Can individual agents log in to post their own listings?',
        a: 'Yes, role-based access allows individual agents to submit listings while the principal/admin approves them before going live.'
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
      technicalArchitecture: 'PHP 8.2+, Sortable.js Kanban engine, MySQL relational schema, responsive tablet/mobile site-survey UI.',
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
    techStack: ['PHP 8.2+', 'MySQL', 'Tailwind CSS', 'Sortable.js', 'Alpine.js'],
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
    id: 'wss-shopflow',
    slug: 'wss-shopflow',
    name: 'WSS ShopFlow',
    price: 'RM 799',
    priceRaw: 799,
    category: 'Commerce & Rental',
    tagline: 'Session-Based E-Commerce Engine with Malaysian State Shipping Rates',
    target: 'Retail Brands, Boutique Shops, Wholesalers & E-Commerce Sellers',
    summary:
      'A lightning-fast, self-hosted e-commerce platform with zero marketplace commissions. Features instant AJAX cart checkout, Peninsular/East Malaysia shipping tiers, and inventory stock alerts.',
    underTheHood: {
      title: 'Session AJAX Cart & Granular State-Based Shipping Matrix',
      highlights: [
        'Session-based AJAX cart with zero checkout lag and sub-second item quantity updates.',
        'Malaysian shipping rate calculation matrix by state (Semenanjung, Sabah, Sarawak, Labuan).',
        'Automated inventory deduction and low-stock email alerts to shop owners.',
        'Integrated Malaysian payment gateways (ToyyibPay, SenangPay, Stripe, Manual Bank Transfer).'
      ],
      technicalArchitecture: 'PHP 8.2+, MySQL transaction isolation, Tailwind CSS storefront, session storage engine.',
      securityAndLicensing: 'Buy once, keep 100% of retail sales. Never pay Shopify monthly subscriptions again.'
    },
    features: [
      'Modern, mobile-first product catalog and product detail screens',
      'Granular product variants (sizes, colors, materials) with live price updates',
      'Slide-over AJAX shopping cart with free shipping progress bar',
      'Malaysian shipping calculator by state & weight',
      'Order fulfillment admin with tracking number notification dispatch',
      'Coupon code engine with percentage and fixed amount discounts'
    ],
    techStack: ['PHP 8.2+', 'MySQL', 'Tailwind CSS', 'Alpine.js', 'ToyyibPay/Stripe'],
    pricingModel: 'Buy-Once, Own-Forever',
    includedDeliverables: [
      'Complete e-commerce storefront',
      'Admin order and product inventory portal',
      'Order confirmation email templates',
      'Database installation scripts'
    ],
    faq: [
      {
        q: 'Does it support manual bank transfers (CDM/DuitNow receipt upload)?',
        a: 'Yes, customers can checkout and upload their bank transfer receipt for manual admin verification.'
      }
    ]
  },
  {
    id: 'wss-gatedvault',
    slug: 'wss-gatedvault',
    name: 'WSS Gated Vault',
    price: 'RM 799',
    priceRaw: 799,
    category: 'Commerce & Rental',
    tagline: 'Tiered Membership Dashboard & Unlocked Content Feed',
    target: 'Educators, Course Creators, Paid Communities & Independent Consultants',
    summary:
      'Monetize your expertise with a private membership platform. Provide gated video lessons, downloadable PDF playbooks, and exclusive member discussions with tiered access levels.',
    underTheHood: {
      title: 'Tiered Access Control & Secure Media Delivery Engine',
      highlights: [
        'Tiered access levels (Starter, Pro, Elite) with granular content permission gates.',
        'Direct encrypted video and download URL masking preventing unauthorized sharing.',
        'Member subscription dashboard with renewal management and invoice history.',
        'Integrated recurring and one-time payment flows via Stripe & Malaysian FPX.'
      ],
      technicalArchitecture: 'PHP 8.2+, JWT/Session authentication, MySQL RBAC permission matrices, Tailwind CSS modern dark-mode dashboard.',
      securityAndLicensing: 'Full source code ownership. Host unlimited members without per-user SaaS tax.'
    },
    features: [
      'Modern member dashboard with progress tracking',
      'Tiered access gating for video courses, templates, and articles',
      'Secure download link masking with expiration timestamps',
      'Community discussion board or comment section per post',
      'Member billing portal with downloadable tax invoices',
      'Admin member directory with manual access grant overrides'
    ],
    techStack: ['PHP 8.2+', 'MySQL', 'Tailwind CSS', 'Alpine.js', 'Stripe / ToyyibPay'],
    pricingModel: 'Buy-Once, Own-Forever',
    includedDeliverables: [
      'Member portal & dashboard codebase',
      'Public sales page and checkout templates',
      'Admin content management panel',
      'SQL database schemas'
    ],
    faq: [
      {
        q: 'Can I host my videos on YouTube Unlisted, Vimeo, or Bunny.net?',
        a: 'Yes, embed code or direct CDN video URLs are supported with player customization.'
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
      technicalArchitecture: 'PHP 8.2+, MySQL Full-Text Search indexing, Tailwind CSS responsive cards, payment gateway monetization.',
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
    techStack: ['PHP 8.2+', 'MySQL', 'Tailwind CSS', 'Leaflet / OpenStreetMap', 'FPX Gateway'],
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
    id: 'wss-careerhub',
    slug: 'wss-careerhub',
    name: 'WSS CareerHub',
    price: 'RM 749',
    priceRaw: 749,
    category: 'Corporate Operations',
    tagline: 'Employer Job Portal & Secure Resume Processing System',
    target: 'Recruitment Agencies, Growing Companies & HR Consultancies',
    summary:
      'Streamline hiring with an in-house job portal. Post vacancies across departments, receive parsed applications, securely store PDF resumes, and track candidates through hiring stages.',
    underTheHood: {
      title: 'Candidate Pipeline Tracker & Secure Resume Storage',
      highlights: [
        'Application status tracking pipeline (Applied, Screened, Interviewed, Offered, Rejected).',
        'Employer job posting dashboard with salary range and employment type filters.',
        'Secure resume upload and local storage with sanitized file naming and MIME validation.',
        'Automated applicant email acknowledgements and status update notifications.'
      ],
      technicalArchitecture: 'PHP 8.2+, MySQL candidate tracking schema, Tailwind CSS interface, secure file server storage.',
      securityAndLicensing: 'Full source code ownership. No per-seat recruiter subscription fees.'
    },
    features: [
      'Branded careers portal with department and location filters',
      'One-click job application form with drag-and-drop resume upload',
      'Recruiter candidate tracking dashboard with interview note logs',
      'Automated email templates for interview invites and status updates',
      'Internal rating scorecard per candidate for hiring committees',
      'Exportable candidate data for payroll and onboarding'
    ],
    techStack: ['PHP 8.2+', 'MySQL', 'Tailwind CSS', 'Alpine.js', 'Vanilla JS'],
    pricingModel: 'Buy-Once, Own-Forever',
    includedDeliverables: [
      'Public job board and application flow',
      'HR recruiter management dashboard',
      'Email notification templates',
      'Database schema and installation manual'
    ],
    faq: [
      {
        q: 'Are candidate resumes stored securely?',
        a: 'Yes, uploaded files are stored in a protected folder with server-level access controls to protect personal data.'
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
      technicalArchitecture: 'PHP 8.2+, MySQL relational schema with foreign key integrity, Tailwind CSS enterprise dashboard, audit trail engine.',
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
    techStack: ['PHP 8.2+', 'MySQL', 'Tailwind CSS', 'Sortable.js', 'Alpine.js'],
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
        a: 'Yes, WSS StaffPortal is 100% self-hosted PHP and runs seamlessly on local office servers, private VPNs, or standard cloud hosting.'
      }
    ]
  }
];

export const getMarketplaceSystemBySlug = (slug: string) =>
  MARKETPLACE_SYSTEMS.find((system) => system.slug === slug);
