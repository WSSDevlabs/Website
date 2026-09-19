export type MarketplaceSystem = {
  id: string;
  slug: string;
  name: string;
  price: string;
  priceRaw: number;
  category: 'Developer Tools' | 'Venues & Hospitality' | 'Health & Services' | 'Commerce & Rental' | 'Real Estate & CRM' | 'Corporate Operations' | 'Security & Access Control' | 'Facility & Operations Management' | 'IoT & Monitoring';
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
  },
  {
    id: 'wss-smartid',
    slug: 'wss-smartid',
    name: 'WSS Smart ID System',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Security & Access Control',
    tagline: 'Secure Smart ID Issuance & Lifecycle Management',
    target: 'Corporations, Educational Institutions, Government Agencies & Gated Communities',
    summary:
      'Issue and manage secure smart ID cards for staff, students, or residents, covering the full lifecycle from enrollment to card replacement and access revocation.',
    underTheHood: {
      title: 'Centralized ID Issuance & Access Rights Engine',
      highlights: [
        'Bulk and individual enrollment workflow with photo capture and data validation.',
        'Direct integration with card printers and encoders for on-site badge production.',
        'Centralized access-zone rights management tied to each cardholder\'s profile.',
        'Full revocation and replacement audit trail for lost or deactivated cards.'
      ],
      technicalArchitecture: 'MySQL relational schema, card printer/encoder API integration, RFID/NFC credential provisioning.',
      securityAndLicensing: 'Full source code ownership. Deploys on your own server or private cloud.'
    },
    features: [
      'Bulk staff, student, or resident enrollment',
      'Customizable card design templates',
      'Access-zone assignment per cardholder',
      'Expiry and renewal tracking',
      'Instant lost-card revocation',
      'Integration with door and gate readers'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'RFID/NFC Reader Integration'],
    pricingModel: 'Custom Quote, scoped to cardholder volume and hardware',
    includedDeliverables: [
      'Enrollment and issuance portal',
      'Access rights admin dashboard',
      'Card printer/encoder integration',
      'Installation and hardware setup guide'
    ],
    faq: [
      {
        q: 'Does this work with card printers and access readers we already own?',
        a: 'In most cases, yes — we confirm compatibility with your existing hardware during scoping before the project starts.'
      }
    ]
  },
  {
    id: 'wss-epurs',
    slug: 'wss-epurs',
    name: 'EPURS',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Facility & Operations Management',
    tagline: 'Cashless Payment System for Closed-Loop Environments',
    target: 'Schools, Factories, Campuses & Gated Communities',
    summary:
      'A cashless top-up and payment system for closed-loop environments like school canteens or factory cafeterias, replacing cash handling with card- or app-based balances.',
    underTheHood: {
      title: 'Prepaid Balance & Closed-Loop Payment Engine',
      highlights: [
        'Prepaid balance accounts tied to each cardholder or app user.',
        'POS terminal integration for canteen and cafeteria checkout.',
        'Parent or guardian portal for remote top-ups and spending limits.',
        'Low-balance alerts and full transaction history for every account.'
      ],
      technicalArchitecture: 'MySQL relational schema, POS terminal integration, prepaid-balance ledger with reconciliation reporting.',
      securityAndLicensing: 'Full source code ownership. Zero third-party transaction cuts on your closed-loop volume.'
    },
    features: [
      'Prepaid balance top-up (counter, app, or portal)',
      'POS terminal integration for vendors',
      'Parent/guardian remote top-up portal',
      'Configurable daily/weekly spending limits',
      'Full transaction history per account',
      'Automated low-balance alerts'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'POS Terminal API'],
    pricingModel: 'Custom Quote, scoped to vendor terminals and account volume',
    includedDeliverables: [
      'Cashless account management system',
      'Vendor POS integration',
      'Top-up portal',
      'Transaction reconciliation reports'
    ],
    faq: [
      {
        q: 'Can parents top up their child\'s balance remotely?',
        a: 'Yes, a dedicated portal lets parents or guardians top up and monitor spending without visiting the canteen counter.'
      }
    ]
  },
  {
    id: 'wss-vims',
    slug: 'wss-vims',
    name: 'VIMS',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Security & Access Control',
    tagline: 'Comprehensive Visitor Management System',
    target: 'Corporate Offices, Factories, Schools & Gated Premises',
    summary:
      'Digitize visitor check-in with pre-registration, ID capture, badge printing, and host notification, replacing manual visitor logbooks.',
    underTheHood: {
      title: 'Pre-Registration & Host Notification Engine',
      highlights: [
        'Online pre-registration so hosts can approve visitors before they arrive.',
        'QR or ID-scan check-in at the counter, with automatic badge printing.',
        'Instant host notification the moment a visitor checks in.',
        'Blacklist and watchlist screening against a configurable list.'
      ],
      technicalArchitecture: 'MySQL relational schema, badge printer integration, QR/ID scan check-in flow.',
      securityAndLicensing: 'Full source code ownership. Visitor data stays on your own infrastructure.'
    },
    features: [
      'Online visitor pre-registration',
      'QR or ID-scan counter check-in',
      'Automated badge printing',
      'Instant host notification on arrival',
      'Blacklist/watchlist screening',
      'Full visit history reporting'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'Badge Printer Integration'],
    pricingModel: 'Custom Quote, scoped to site count and hardware',
    includedDeliverables: [
      'Visitor pre-registration portal',
      'Front-desk check-in dashboard',
      'Badge printing integration',
      'Visit history reports'
    ],
    faq: [
      {
        q: 'Can hosts approve visitors from their phone before they arrive?',
        a: 'Yes, hosts get a notification to review and approve pre-registered visitors ahead of the visit.'
      }
    ]
  },
  {
    id: 'wss-tams',
    slug: 'wss-tams',
    name: 'TAMS',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Corporate Operations',
    tagline: 'Time and Attendance Management System',
    target: 'SMEs, Factories & Corporate HR Teams',
    summary:
      'Track staff clock-in and clock-out via biometric, card, or mobile, and automate attendance reporting for payroll and compliance.',
    underTheHood: {
      title: 'Multi-Method Clock-In & Payroll-Ready Reporting Engine',
      highlights: [
        'Biometric, card, or mobile GPS clock-in and clock-out options.',
        'Shift scheduling with automatic late and absence flagging.',
        'Overtime calculation rules configurable per department.',
        'Payroll-ready export in standard spreadsheet formats.'
      ],
      technicalArchitecture: 'MySQL relational schema, biometric/card reader integration, configurable payroll export templates.',
      securityAndLicensing: 'Full source code ownership. Deploys on-premise or on your private cloud.'
    },
    features: [
      'Biometric, card, or mobile clock-in',
      'Shift scheduling and roster management',
      'Automatic late/absence tracking',
      'Configurable overtime calculation',
      'Payroll-ready export',
      'Real-time attendance dashboard'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'Biometric/Card Reader Integration'],
    pricingModel: 'Custom Quote, scoped to headcount and hardware',
    includedDeliverables: [
      'Attendance tracking system',
      'HR admin dashboard',
      'Payroll export templates',
      'Hardware integration guide'
    ],
    faq: [
      {
        q: 'Does this integrate with our existing payroll software?',
        a: 'We export attendance data in standard formats compatible with most Malaysian payroll systems, and can build a direct integration on request.'
      }
    ]
  },
  {
    id: 'wss-emers',
    slug: 'wss-emers',
    name: 'EMERS',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Facility & Operations Management',
    tagline: 'Automated Meal Redemption System for Canteens',
    target: 'Schools, Factories & Institutional Canteens',
    summary:
      'Automate meal entitlement redemption in canteens, tracking who has eaten, what is covered under a meal plan, and flagging duplicate claims.',
    underTheHood: {
      title: 'Meal Entitlement & Duplicate-Claim Prevention Engine',
      highlights: [
        'Card or QR-based meal redemption at the canteen counter.',
        'Configurable meal plan and entitlement rules per cardholder group.',
        'Automatic duplicate-claim prevention within a meal period.',
        'Subsidy and allowance tracking for institutional reporting.'
      ],
      technicalArchitecture: 'MySQL relational schema, card/QR redemption terminal integration.',
      securityAndLicensing: 'Full source code ownership. Deploys on your own canteen counter hardware.'
    },
    features: [
      'Card or QR meal redemption',
      'Configurable meal plan and entitlement rules',
      'Duplicate-claim prevention',
      'Canteen vendor reporting',
      'Subsidy and allowance tracking',
      'Real-time redemption dashboard'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'QR/Card Redemption Terminal'],
    pricingModel: 'Custom Quote, scoped to canteen counters and cardholder volume',
    includedDeliverables: [
      'Meal redemption system',
      'Canteen counter terminal setup',
      'Entitlement rules admin panel',
      'Vendor reporting dashboard'
    ],
    faq: [
      {
        q: 'Can different groups have different meal entitlements?',
        a: 'Yes, entitlement rules are configurable per cardholder group, so subsidized and full-paying groups can run side by side.'
      }
    ]
  },
  {
    id: 'wss-bats',
    slug: 'wss-bats',
    name: 'BATS',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Facility & Operations Management',
    tagline: 'Bus Attendance and GPS Tracking System',
    target: 'Schools, Factories & Transport Operators',
    summary:
      'Track student or staff bus attendance with tap-in/tap-out scanning, plus live GPS tracking so parents or managers know exactly where a bus is.',
    underTheHood: {
      title: 'Tap-In Attendance & Live GPS Tracking Engine',
      highlights: [
        'Tap-in/tap-out card or QR scanning as passengers board and alight.',
        'Live GPS map view of every bus on its route.',
        'Automatic parent or manager notification when a passenger boards.',
        'Full trip history logs for route auditing.'
      ],
      technicalArchitecture: 'MySQL relational schema, GPS tracking device integration, live map rendering.',
      securityAndLicensing: 'Full source code ownership. GPS data stays on your own infrastructure.'
    },
    features: [
      'Tap-in/tap-out attendance scanning',
      'Live GPS map tracking per bus',
      'Route and schedule management',
      'Parent notification on boarding',
      'Driver mobile app',
      'Full trip history logs'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'GPS Tracking API'],
    pricingModel: 'Custom Quote, scoped to fleet size and GPS hardware',
    includedDeliverables: [
      'Bus attendance and tracking system',
      'Live GPS map dashboard',
      'Driver mobile app',
      'GPS device integration guide'
    ],
    faq: [
      {
        q: 'Do we need special hardware installed on each bus?',
        a: 'Yes, a GPS tracking device and a tap-in/tap-out scanner are installed per bus — we scope the exact hardware during setup.'
      }
    ]
  },
  {
    id: 'wss-edupurs',
    slug: 'wss-edupurs',
    name: 'EDUPURS',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Facility & Operations Management',
    tagline: 'One-Card Cashless Campus Solution',
    target: 'Schools, Colleges & Universities',
    summary:
      'A single smart card for students covering cashless canteen payments, library access, and attendance, unifying several campus systems into one card.',
    underTheHood: {
      title: 'Unified Campus Card Engine',
      highlights: [
        'One card provisioned across canteen, library, and attendance systems.',
        'Parent top-up portal for cashless canteen spending.',
        'Spending and usage reports across every connected campus service.',
        'Card replacement workflow for lost or damaged cards.'
      ],
      technicalArchitecture: 'MySQL relational schema, multi-system card provisioning, campus-wide acceptance network.',
      securityAndLicensing: 'Full source code ownership. Deploys across your existing campus infrastructure.'
    },
    features: [
      'Cashless canteen payments',
      'Library and attendance integration',
      'Parent top-up portal',
      'Cross-system spending reports',
      'Card replacement workflow',
      'Campus-wide acceptance network'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'RFID/NFC Card Integration'],
    pricingModel: 'Custom Quote, scoped to student volume and connected systems',
    includedDeliverables: [
      'Unified campus card system',
      'Parent top-up portal',
      'Cross-system reporting dashboard',
      'Card issuance and replacement workflow'
    ],
    faq: [
      {
        q: 'Can this connect to our existing library system?',
        a: 'We integrate with most existing library and attendance systems during scoping — tell us what you\'re running and we\'ll confirm compatibility.'
      }
    ]
  },
  {
    id: 'wss-fabs',
    slug: 'wss-fabs',
    name: 'FABS',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Facility & Operations Management',
    tagline: 'Automated Facilities Booking System',
    target: 'Corporate Offices, Condominiums & Community Centers',
    summary:
      'Let staff or residents book shared facilities like meeting rooms, courts, or halls online, with automated approval and conflict prevention.',
    underTheHood: {
      title: 'Conflict-Free Booking & Approval Engine',
      highlights: [
        'Online booking calendar with real-time availability.',
        'Automatic double-booking prevention across every facility.',
        'Configurable approval workflows for facilities that need sign-off.',
        'Per-user booking quotas to keep access fair.'
      ],
      technicalArchitecture: 'MySQL relational schema with transaction locks, calendar UI, approval-workflow engine.',
      securityAndLicensing: 'Full source code ownership. Deploys on your own server or cloud.'
    },
    features: [
      'Online facility booking calendar',
      'Automatic double-booking prevention',
      'Configurable approval workflows',
      'Per-user usage quotas',
      'Facility maintenance blackout dates',
      'Usage reporting per facility'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'Calendar UI'],
    pricingModel: 'Custom Quote, scoped to facility count and user volume',
    includedDeliverables: [
      'Facilities booking portal',
      'Admin approval dashboard',
      'Usage reporting',
      'Setup and configuration guide'
    ],
    faq: [
      {
        q: 'Can some facilities require manager approval while others don\'t?',
        a: 'Yes, approval workflows are configured per facility, so low-risk bookings can be instant while others require sign-off.'
      }
    ]
  },
  {
    id: 'wss-kiosk',
    slug: 'wss-kiosk',
    name: 'WSS Kiosk Solution',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Facility & Operations Management',
    tagline: 'Self-Service Kiosks for Independent Transactions',
    target: 'Retail, Corporate Lobbies & Public Service Counters',
    summary:
      'Self-service kiosk software for check-in, payments, or information lookup, reducing counter queues and staffing needs.',
    underTheHood: {
      title: 'Touchscreen Self-Service Transaction Engine',
      highlights: [
        'Touchscreen-optimized self-service flows for check-in, payment, or lookup.',
        'Payment gateway integration for on-the-spot transactions.',
        'Printed receipt or ticket output where needed.',
        'Remote content management so screens update without on-site visits.'
      ],
      technicalArchitecture: 'Touchscreen kiosk UI, payment gateway integration, remote content management dashboard.',
      securityAndLicensing: 'Full source code ownership. Deploys on your chosen kiosk hardware.'
    },
    features: [
      'Touchscreen self-service interface',
      'Payment gateway integration',
      'Printed receipt/ticket output',
      'Remote content management',
      'Usage analytics dashboard',
      'Multi-language support'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'Payment Gateway Integration'],
    pricingModel: 'Custom Quote, scoped to kiosk count and hardware',
    includedDeliverables: [
      'Kiosk self-service application',
      'Remote content management dashboard',
      'Payment integration',
      'Usage analytics'
    ],
    faq: [
      {
        q: 'Do you supply the kiosk hardware too?',
        a: 'We can recommend and source compatible kiosk hardware, or build the software for kiosks you already own.'
      }
    ]
  },
  {
    id: 'wss-guardtour',
    slug: 'wss-guardtour',
    name: 'WSS Guard Tour',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Security & Access Control',
    tagline: 'Guard Tour Management System for Patrol Tracking',
    target: 'Security Firms, Factories & Gated Properties',
    summary:
      'Verify security guard patrol routes with checkpoint scanning, timestamped logs, and instant alerts when a checkpoint is missed.',
    underTheHood: {
      title: 'Checkpoint Verification & Missed-Patrol Alert Engine',
      highlights: [
        'NFC or QR checkpoint scanning along a configured patrol route.',
        'Timestamped logs proving every checkpoint was actually visited.',
        'Instant alerts to a supervisor when a checkpoint is missed or late.',
        'Incident note logging directly from the guard\'s mobile app.'
      ],
      technicalArchitecture: 'MySQL relational schema, NFC/QR checkpoint scanning, mobile guard app.',
      securityAndLicensing: 'Full source code ownership. Patrol data stored on your own infrastructure.'
    },
    features: [
      'NFC/QR checkpoint scanning',
      'Configurable patrol route setup',
      'Missed-checkpoint alerts',
      'Incident note logging',
      'Patrol history reports',
      'Guard mobile app'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'NFC/QR Scanning'],
    pricingModel: 'Custom Quote, scoped to site size and checkpoint count',
    includedDeliverables: [
      'Guard tour tracking system',
      'Checkpoint tag/QR setup',
      'Supervisor alert dashboard',
      'Guard mobile app'
    ],
    faq: [
      {
        q: 'What happens if a guard misses a checkpoint?',
        a: 'The system flags it immediately and notifies the assigned supervisor, with a full timestamped record for review.'
      }
    ]
  },
  {
    id: 'wss-rfidtracking',
    slug: 'wss-rfidtracking',
    name: 'WSS RFID Tracking',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Security & Access Control',
    tagline: 'Human and Asset Tracking Using RFID Technology',
    target: 'Factories, Warehouses & Large Campuses',
    summary:
      'Track the real-time location of people or assets tagged with RFID, useful for factory floor safety, asset audits, or restricted-zone monitoring.',
    underTheHood: {
      title: 'Real-Time RFID Location & Zone-Alert Engine',
      highlights: [
        'Real-time location tracking for RFID-tagged people or assets.',
        'Zone entry/exit alerts for restricted or hazardous areas.',
        'Full historical movement reports for audits.',
        'Direct integration with existing access control systems.'
      ],
      technicalArchitecture: 'RFID reader network integration, MySQL relational schema, real-time location dashboard.',
      securityAndLicensing: 'Full source code ownership. Deploys on your own factory or campus network.'
    },
    features: [
      'Real-time location tracking',
      'Zone entry/exit alerts',
      'Asset audit trail',
      'Tag registration management',
      'Historical movement reports',
      'Access control system integration'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'RFID Reader Network'],
    pricingModel: 'Custom Quote, scoped to reader coverage and tag volume',
    includedDeliverables: [
      'RFID tracking dashboard',
      'Reader network integration',
      'Zone alert configuration',
      'Audit reporting'
    ],
    faq: [
      {
        q: 'How accurate is the location tracking?',
        a: 'Accuracy depends on reader density and zone size, scoped during a site survey — typically zone-level accuracy rather than exact GPS coordinates.'
      }
    ]
  },
  {
    id: 'wss-pos',
    slug: 'wss-pos',
    name: 'WSS POS System',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Commerce & Rental',
    tagline: 'Integrated Point of Sale System',
    target: 'Retail Outlets, F&B Businesses & Service Counters',
    summary:
      'A full point-of-sale system covering checkout, inventory sync, and sales reporting for retail or F&B outlets.',
    underTheHood: {
      title: 'Checkout & Inventory Sync Engine',
      highlights: [
        'Fast barcode or manual checkout flow.',
        'Real-time inventory sync across every till and location.',
        'Multiple payment method support at checkout.',
        'Shift-level sales and cashier reporting.'
      ],
      technicalArchitecture: 'MySQL relational schema, barcode scanner integration, multi-payment gateway support.',
      securityAndLicensing: 'Full source code ownership. Zero recurring per-transaction fees.'
    },
    features: [
      'Barcode/product checkout',
      'Real-time inventory sync',
      'Multiple payment method support',
      'Sales and shift reports',
      'Staff/cashier accounts',
      'Receipt printing'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'Barcode Scanner Integration'],
    pricingModel: 'Custom Quote, scoped to outlet count and till hardware',
    includedDeliverables: [
      'POS checkout application',
      'Inventory management dashboard',
      'Sales reporting',
      'Hardware integration guide'
    ],
    faq: [
      {
        q: 'Can this run across multiple outlet locations?',
        a: 'Yes, inventory and sales sync across all connected outlets in real time.'
      }
    ]
  },
  {
    id: 'wss-smarthostel',
    slug: 'wss-smarthostel',
    name: 'WSS Smart Hostel',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Facility & Operations Management',
    tagline: 'Hostel Management System for Accommodations',
    target: 'Universities, Colleges & Worker Dormitories',
    summary:
      'Manage hostel room allocation, resident check-in/out, and facility maintenance requests from one dashboard.',
    underTheHood: {
      title: 'Room Allocation & Maintenance Tracking Engine',
      highlights: [
        'Real-time room allocation and availability tracking.',
        'Resident check-in/out workflow with digital records.',
        'Maintenance request submission and tracking per room.',
        'Visitor logging for hostel access control.'
      ],
      technicalArchitecture: 'MySQL relational schema, room allocation logic, maintenance ticketing workflow.',
      securityAndLicensing: 'Full source code ownership. Deploys on your institution\'s own server.'
    },
    features: [
      'Room allocation and availability',
      'Resident check-in/out',
      'Maintenance request tracking',
      'Visitor logging',
      'Fee and payment tracking',
      'Occupancy reporting'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'Alpine.js'],
    pricingModel: 'Custom Quote, scoped to room count and resident volume',
    includedDeliverables: [
      'Hostel management dashboard',
      'Resident portal',
      'Maintenance ticketing system',
      'Occupancy reports'
    ],
    faq: [
      {
        q: 'Can residents submit maintenance requests themselves?',
        a: 'Yes, residents log requests through their own portal, and staff track and close them out from the admin dashboard.'
      }
    ]
  },
  {
    id: 'wss-parcellocker',
    slug: 'wss-parcellocker',
    name: 'WSS Parcel Locker',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Facility & Operations Management',
    tagline: 'Smart Parcel Locker Management System',
    target: 'Condominiums, Offices & Campus Mailrooms',
    summary:
      'Manage smart parcel lockers so residents or staff can collect deliveries via a PIN or QR code, without needing a manned counter.',
    underTheHood: {
      title: 'Automated Locker Assignment & Pickup Engine',
      highlights: [
        'Courier drop-off interface for logging incoming parcels.',
        'Automatic PIN/QR pickup code generation per parcel.',
        'SMS or app notification the moment a parcel is ready for pickup.',
        'Overdue-parcel alerts for uncollected items.'
      ],
      technicalArchitecture: 'MySQL relational schema, smart locker hardware integration, SMS/notification gateway.',
      securityAndLicensing: 'Full source code ownership. Deploys with your chosen locker hardware.'
    },
    features: [
      'Parcel drop-off logging',
      'PIN/QR pickup codes',
      'SMS/app pickup notifications',
      'Locker occupancy dashboard',
      'Overdue-parcel alerts',
      'Courier drop-off interface'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'Smart Locker Hardware Integration'],
    pricingModel: 'Custom Quote, scoped to locker bank size',
    includedDeliverables: [
      'Parcel locker management system',
      'Resident pickup notifications',
      'Courier drop-off interface',
      'Locker hardware integration guide'
    ],
    faq: [
      {
        q: 'What happens if a parcel isn\'t collected in time?',
        a: 'The system sends overdue alerts to the resident and flags the locker for staff follow-up.'
      }
    ]
  },
  {
    id: 'wss-ebusinesscard',
    slug: 'wss-ebusinesscard',
    name: 'WSS eBusiness Card',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Corporate Operations',
    tagline: 'NFC-Enabled Digital Business Card System',
    target: 'Sales Teams, Corporate Staff & Networking Professionals',
    summary:
      'Replace paper name cards with an NFC-enabled digital business card that shares contact details and a company profile with a single tap.',
    underTheHood: {
      title: 'NFC Tap-to-Share Profile Engine',
      highlights: [
        'One tap shares a full digital profile page to any smartphone.',
        'Team-wide brand-consistent card templates managed centrally.',
        'Lead capture form triggered automatically on share.',
        'Contact analytics showing who viewed or saved a profile.'
      ],
      technicalArchitecture: 'NFC tag provisioning, hosted profile pages, contact-analytics dashboard.',
      securityAndLicensing: 'Full source code ownership. Update every team member\'s profile centrally at any time.'
    },
    features: [
      'NFC tap-to-share contact',
      'Digital profile page per employee',
      'Lead capture on share',
      'Brand-consistent card templates',
      'Contact analytics',
      'Easy profile updates, no reprinting'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'NFC Tag Provisioning'],
    pricingModel: 'Custom Quote, scoped to team size',
    includedDeliverables: [
      'NFC card provisioning',
      'Hosted digital profile pages',
      'Admin template management',
      'Contact analytics dashboard'
    ],
    faq: [
      {
        q: 'Can we update someone\'s job title after their card is printed?',
        a: 'Yes — since the profile is hosted, not printed, updates go live instantly without reissuing the physical card.'
      }
    ]
  },
  {
    id: 'wss-energysaving',
    slug: 'wss-energysaving',
    name: 'WSS Energy Saving',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'IoT & Monitoring',
    tagline: 'Smart Energy Monitoring and Saving Solution',
    target: 'Factories, Offices & Facility Managers',
    summary:
      'Monitor real-time energy consumption across a building or factory floor and flag where usage, and cost, can be reduced.',
    underTheHood: {
      title: 'Real-Time Consumption Monitoring & Anomaly Engine',
      highlights: [
        'Real-time energy consumption dashboard across zones or devices.',
        'Per-zone and per-device breakdown of usage.',
        'Automatic alerts when consumption spikes abnormally.',
        'Historical trend reports for budgeting and audits.'
      ],
      technicalArchitecture: 'Smart meter integration, MySQL time-series schema, real-time dashboard.',
      securityAndLicensing: 'Full source code ownership. Deploys alongside your existing electrical infrastructure.'
    },
    features: [
      'Real-time consumption dashboard',
      'Per-zone/per-device monitoring',
      'Usage anomaly alerts',
      'Historical trend reports',
      'Cost estimation',
      'Smart meter integration'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'Smart Meter Integration'],
    pricingModel: 'Custom Quote, scoped to meter/sensor count',
    includedDeliverables: [
      'Energy monitoring dashboard',
      'Smart meter integration',
      'Anomaly alert configuration',
      'Historical reporting'
    ],
    faq: [
      {
        q: 'Do we need to replace our existing meters?',
        a: 'Not always — we assess your current meters during scoping and add smart monitoring hardware only where needed.'
      }
    ]
  },
  {
    id: 'wss-iotboard',
    slug: 'wss-iotboard',
    name: 'WSS IoT Board',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'IoT & Monitoring',
    tagline: 'Dynamic QR Code & Machine Monitoring System',
    target: 'Factories & Equipment-Heavy Operations',
    summary:
      'A machine-mounted board with a dynamic QR code that gives instant access to that machine\'s live status, maintenance history, and a fault-reporting form.',
    underTheHood: {
      title: 'Per-Machine Dynamic QR & Status Engine',
      highlights: [
        'Dynamic QR code per machine, always pointing to its live status page.',
        'Live status display showing current machine condition.',
        'Full maintenance history log accessible from the same QR scan.',
        'Instant fault-reporting form for on-the-floor staff.'
      ],
      technicalArchitecture: 'Dynamic QR generation, machine sensor integration, MySQL maintenance-log schema.',
      securityAndLicensing: 'Full source code ownership. Deploys per machine with zero recurring per-scan fees.'
    },
    features: [
      'Dynamic per-machine QR code',
      'Live machine status display',
      'Maintenance history log',
      'Instant fault-reporting form',
      'Technician assignment',
      'Uptime reporting'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'Dynamic QR Generation', 'Machine Sensor Integration'],
    pricingModel: 'Custom Quote, scoped to machine count',
    includedDeliverables: [
      'IoT board hardware setup',
      'Machine status dashboard',
      'Fault-reporting workflow',
      'Maintenance history log'
    ],
    faq: [
      {
        q: 'What happens when a staff member scans the QR code and reports a fault?',
        a: 'The assigned technician is notified instantly, and the report is logged against that machine\'s maintenance history.'
      }
    ]
  },
  {
    id: 'wss-assetmanagement',
    slug: 'wss-assetmanagement',
    name: 'WSS Asset Management',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Corporate Operations',
    tagline: 'End-to-End Asset Management System',
    target: 'Corporates, Factories & Institutions',
    summary:
      'Track company assets from procurement to disposal, covering assignment, maintenance schedules, and depreciation records.',
    underTheHood: {
      title: 'Full Asset Lifecycle Tracking Engine',
      highlights: [
        'Centralized asset registry with barcode or QR tagging.',
        'Assignment and check-out tracking per employee or department.',
        'Configurable maintenance scheduling per asset type.',
        'Depreciation tracking for finance and audit reporting.'
      ],
      technicalArchitecture: 'MySQL relational schema, barcode/QR asset tagging, audit-ready reporting engine.',
      securityAndLicensing: 'Full source code ownership. Deploys on your own server or private cloud.'
    },
    features: [
      'Asset registry and tagging',
      'Assignment/check-out tracking',
      'Maintenance scheduling',
      'Depreciation tracking',
      'Audit-ready reporting',
      'Barcode/QR asset lookup'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'Barcode/QR Tagging'],
    pricingModel: 'Custom Quote, scoped to asset volume',
    includedDeliverables: [
      'Asset registry system',
      'Assignment tracking dashboard',
      'Maintenance scheduling module',
      'Audit and depreciation reports'
    ],
    faq: [
      {
        q: 'Can this calculate depreciation automatically?',
        a: 'Yes, depreciation schedules are configured per asset category and calculated automatically for reporting.'
      }
    ]
  },
  {
    id: 'wss-safepickup',
    slug: 'wss-safepickup',
    name: 'SafePickup',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Security & Access Control',
    tagline: 'Secure Parent Pick-Up Verification System',
    target: 'Schools & Childcare Centers',
    summary:
      'Verify that a child is only released to an approved guardian, using ID or QR verification at pick-up time to prevent unauthorized releases.',
    underTheHood: {
      title: 'Approved-Guardian Verification Engine',
      highlights: [
        'Configurable list of approved guardians per child.',
        'QR or ID verification at the pick-up point.',
        'Real-time pick-up notification to parents and staff.',
        'Instant alerts on any unauthorized pickup attempt.'
      ],
      technicalArchitecture: 'MySQL relational schema, QR/ID verification flow, real-time notification system.',
      securityAndLicensing: 'Full source code ownership. Guardian data stays on your institution\'s own server.'
    },
    features: [
      'Approved-guardian list per child',
      'QR/ID pick-up verification',
      'Real-time pick-up notifications',
      'Unauthorized-pickup alerts',
      'Pick-up history log',
      'Temporary guardian authorization'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'QR/ID Verification'],
    pricingModel: 'Custom Quote, scoped to enrollment size',
    includedDeliverables: [
      'Pick-up verification system',
      'Guardian management portal',
      'Real-time notification setup',
      'Pick-up history reporting'
    ],
    faq: [
      {
        q: 'Can a parent temporarily authorize someone else to pick up their child?',
        a: 'Yes, temporary guardian authorization can be granted for a single pickup or a set date range.'
      }
    ]
  },
  {
    id: 'wss-incidentsystem',
    slug: 'wss-incidentsystem',
    name: 'WSS Incident System',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Security & Access Control',
    tagline: 'Incident Management and Reporting System',
    target: 'Corporates, Factories & Facility Security Teams',
    summary:
      'Log, track, and resolve security or safety incidents from first report through investigation and close-out, with a full audit trail.',
    underTheHood: {
      title: 'Incident Logging & Resolution Audit Engine',
      highlights: [
        'Incident logging with photo and evidence attachments.',
        'Severity classification to prioritize response.',
        'Assignment and follow-up tracking through to resolution.',
        'Recurring-issue reporting to catch patterns before they escalate.'
      ],
      technicalArchitecture: 'MySQL relational schema, file/evidence attachment storage, escalation alert engine.',
      securityAndLicensing: 'Full source code ownership. Incident data stays on your own infrastructure.'
    },
    features: [
      'Incident logging with photo evidence',
      'Severity classification',
      'Assignment and follow-up tracking',
      'Resolution audit trail',
      'Recurring-issue reporting',
      'Escalation alerts'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'File Attachment Storage'],
    pricingModel: 'Custom Quote, scoped to site count and team size',
    includedDeliverables: [
      'Incident management system',
      'Assignment and escalation dashboard',
      'Evidence attachment storage',
      'Resolution audit reporting'
    ],
    faq: [
      {
        q: 'Can we see if the same type of incident keeps happening at one location?',
        a: 'Yes, recurring-issue reporting groups incidents by type and location so patterns are easy to spot.'
      }
    ]
  },
  {
    id: 'wss-machinemonitoring',
    slug: 'wss-machinemonitoring',
    name: 'WSS Machine Monitoring',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'IoT & Monitoring',
    tagline: 'Real-Time Machine Monitoring System',
    target: 'Factories & Industrial Operations',
    summary:
      'Monitor machine status, uptime, and performance in real time, flagging breakdowns or abnormal readings before they cause costly downtime.',
    underTheHood: {
      title: 'Real-Time Machine Health & Downtime Alert Engine',
      highlights: [
        'Real-time status dashboard across every connected machine.',
        'Uptime and downtime tracking per machine.',
        'Automatic alerts on abnormal sensor readings.',
        'Performance trend reports to plan preventive maintenance.'
      ],
      technicalArchitecture: 'Machine sensor integration, MySQL time-series schema, real-time monitoring dashboard.',
      securityAndLicensing: 'Full source code ownership. Deploys alongside your existing machine sensors.'
    },
    features: [
      'Real-time status dashboard',
      'Uptime/downtime tracking',
      'Abnormal-reading alerts',
      'Maintenance history log',
      'Performance trend reports',
      'Multi-machine overview'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'Machine Sensor Integration'],
    pricingModel: 'Custom Quote, scoped to machine count',
    includedDeliverables: [
      'Machine monitoring dashboard',
      'Sensor integration setup',
      'Alert configuration',
      'Performance trend reports'
    ],
    faq: [
      {
        q: 'Can this predict a breakdown before it happens?',
        a: 'It flags abnormal readings that typically precede failure, giving your team a window to act before a full breakdown.'
      }
    ]
  },
  {
    id: 'wss-eventgallery',
    slug: 'wss-eventgallery',
    name: 'WSS Event Gallery',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Venues & Hospitality',
    tagline: 'Every Guest. Every Moment. One Gallery.',
    target: 'Weddings, Corporate Events & Conferences',
    summary:
      'Turn every guest into an event photographer. Guests scan a QR code, snap photos, and share them instantly into one shared, real-time event gallery.',
    underTheHood: {
      title: 'QR Scan-to-Share Live Gallery Engine',
      highlights: [
        'Guests scan the event QR code, no app download required.',
        'Photos upload and appear in the shared gallery in real time.',
        'One centralized gallery capturing moments hosts might have missed.',
        'Downloadable full gallery handed to the host after the event.'
      ],
      technicalArchitecture: 'QR-based guest access, real-time photo upload pipeline, shared live gallery view.',
      securityAndLicensing: 'Full source code ownership. Gallery access is scoped to a single event, no recurring platform fees.'
    },
    features: [
      'QR code guest access, no app download',
      'Real-time photo upload to shared gallery',
      'One centralized event gallery',
      'Simple, intuitive interface for any guest',
      'See moments you might have missed',
      'Downloadable gallery for the host after the event'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'Real-Time Upload Pipeline'],
    pricingModel: 'Custom Quote, per event or as a licensed platform',
    includedDeliverables: [
      'Event QR code and guest access page',
      'Live shared gallery',
      'Host download of the full gallery',
      'Event setup and support'
    ],
    faq: [
      {
        q: 'Do guests need to install an app to contribute photos?',
        a: 'No — guests scan the QR code and upload directly from their phone browser, nothing to install.'
      }
    ]
  }
];

export const getMarketplaceSystemBySlug = (slug: string) =>
  MARKETPLACE_SYSTEMS.find((system) => system.slug === slug);
