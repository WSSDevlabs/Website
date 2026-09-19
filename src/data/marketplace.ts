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
  },
  {
    id: 'wss-webportals',
    slug: 'wss-webportals',
    name: 'WSS Web Portals',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Developer Tools',
    tagline: 'CMS-Backed Portals Built for Daily Logins, Not One-Time Visitors',
    target: 'Corporations, Membership Organizations & Institutions',
    summary:
      'A CMS-backed web portal built for the people who log in every day, whether that\'s staff, members, or customers, not a one-time marketing visitor.',
    underTheHood: {
      title: 'Role-Based Portal & Content Management Engine',
      highlights: [
        'Flexible CMS foundation shaped around how the portal is actually used daily.',
        'Role-based login and content areas for different user types.',
        'Admin panel for managing users and content without a developer.',
        'Mobile-responsive, accessible UI across every portal area.'
      ],
      technicalArchitecture: 'Headless CMS integration, role-based access control, mobile-first responsive UI.',
      securityAndLicensing: 'Full source code ownership. Deploys on your own server or private cloud.'
    },
    features: [
      'Role-based login and permissions',
      'Admin-manageable content areas',
      'Member/staff/customer-specific views',
      'Mobile-responsive, accessible UI',
      'Search and content organization',
      'Integration with existing business systems'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'Headless CMS'],
    pricingModel: 'Custom Quote, scoped to portal complexity and user volume',
    includedDeliverables: [
      'Custom-built web portal',
      'Admin content management panel',
      'Role and permissions configuration',
      'Installation and handover documentation'
    ],
    faq: [
      {
        q: 'Can different user types see different content in the same portal?',
        a: 'Yes, roles and permissions control exactly what each user type can see and do.'
      }
    ]
  },
  {
    id: 'wss-servercloud',
    slug: 'wss-servercloud',
    name: 'WSS Server / Cloud Solutions',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Developer Tools',
    tagline: 'Dedicated Server & Cloud Infrastructure, Sized to Fit',
    target: 'Growing SMEs, Corporates & System Operators',
    summary:
      'Dedicated server and cloud-based infrastructure sized and secured for what your systems actually need, delivering reliable, secure, and scalable performance.',
    underTheHood: {
      title: 'Right-Sized Infrastructure & Monitoring Engine',
      highlights: [
        'Infrastructure sized to real traffic and workload, not guesswork.',
        'Security hardening and access control from day one.',
        'Backup and disaster-recovery configuration.',
        'Ongoing uptime and performance monitoring with alerts.'
      ],
      technicalArchitecture: 'Cloud/dedicated server provisioning, CDN configuration, automated backup pipelines.',
      securityAndLicensing: 'Full infrastructure ownership. No lock-in to a single provider.'
    },
    features: [
      'Dedicated server or cloud environment setup',
      'Security hardening and access control',
      'Backup and disaster-recovery configuration',
      'Uptime and performance monitoring',
      'CDN and caching configuration',
      'Scaling plan as traffic grows'
    ],
    techStack: ['Cloudflare', 'Linux Server Administration', 'Docker'],
    pricingModel: 'Custom Quote, scoped to infrastructure tier',
    includedDeliverables: [
      'Provisioned and secured server/cloud environment',
      'Monitoring and alerting setup',
      'Backup and disaster-recovery plan',
      'Documentation and access handover'
    ],
    faq: [
      {
        q: 'Can you migrate us from our current host?',
        a: 'Yes, migration planning and execution is part of the scoping process so there\'s minimal downtime during the switch.'
      }
    ]
  },
  {
    id: 'wss-training',
    slug: 'wss-training',
    name: 'WSS Training and Teambuilding',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Corporate Operations',
    tagline: 'Technical Skills Training & Team-Culture Programs That Stick',
    target: 'SMEs, Corporate Teams & Growing Organizations',
    summary:
      'Comprehensive training programs designed to enhance technical skills, strengthen collaboration, and foster a positive team culture that drives long-term improvement.',
    underTheHood: {
      title: 'Skill-Gap Assessment & Custom Curriculum Engine',
      highlights: [
        'Assessment of real skill gaps and team dynamics before designing a program.',
        'Curriculum built around your actual tools and workflows, not generic material.',
        'Hands-on workshops rather than passive lecture-style sessions.',
        'Follow-up check-in to measure real adoption after training.'
      ],
      technicalArchitecture: 'Custom curriculum design, hands-on workshop delivery, post-training assessment.',
      securityAndLicensing: 'Delivered on-site or remote, scoped per engagement.'
    },
    features: [
      'Technical skills training, scoped to your team',
      'Collaboration and team-culture workshops',
      'Practical exercises tied to real workflows',
      'Follow-up adoption check-in',
      'Custom curriculum design',
      'On-site or remote delivery'
    ],
    techStack: ['Custom Curriculum Design', 'Hands-On Workshops', 'Team Assessments'],
    pricingModel: 'Custom Quote, scoped to team size and program length',
    includedDeliverables: [
      'Skill-gap assessment',
      'Custom training curriculum',
      'Workshop delivery',
      'Post-training adoption report'
    ],
    faq: [
      {
        q: 'Can this be combined with a system we just built with you?',
        a: 'Yes, this pairs well with a new custom system or portal rollout, so your team is trained on it directly.'
      }
    ]
  },
  {
    id: 'wss-helpdesk',
    slug: 'wss-helpdesk',
    name: 'WSS Helpdesk / Ticketing System',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Corporate Operations',
    tagline: 'A User-Friendly Helpdesk System to Streamline Support and Issue Tracking',
    target: 'SMEs, Corporates & Customer Support Teams',
    summary:
      'A user-friendly helpdesk system that turns scattered support requests into a single, trackable queue, with status tracking and reporting.',
    underTheHood: {
      title: 'Ticket Queue & SLA Tracking Engine',
      highlights: [
        'Every support request lands in one trackable queue.',
        'Customer-facing submission portal for new tickets.',
        'Configurable SLA and escalation rules.',
        'Reporting on response times and ticket volume.'
      ],
      technicalArchitecture: 'MySQL relational schema, email/WhatsApp integration, SLA escalation engine.',
      securityAndLicensing: 'Full source code ownership. Deploys on your own infrastructure.'
    },
    features: [
      'Ticketing with status tracking and assignment',
      'Customer-facing submission portal',
      'SLA and escalation rules',
      'Response time and volume reporting',
      'Email/WhatsApp integration',
      'Internal notes and ticket history'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'Email/WhatsApp Integration'],
    pricingModel: 'Custom Quote, scoped to team size and ticket volume',
    includedDeliverables: [
      'Helpdesk ticketing system',
      'Customer submission portal',
      'SLA configuration',
      'Reporting dashboard'
    ],
    faq: [
      {
        q: 'Can tickets be submitted by email as well as the portal?',
        a: 'Yes, email-to-ticket conversion can be configured so nothing has to change for customers who prefer email.'
      }
    ]
  },
  {
    id: 'wss-vms',
    slug: 'wss-vms',
    name: 'WSS Vehicle Management System',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Facility & Operations Management',
    tagline: 'Monitor, Schedule, and Report Vehicle Maintenance',
    target: 'Transport Operators, Factories & Fleet-Owning Businesses',
    summary:
      'Monitors, schedules, and reports vehicle maintenance to reduce downtime and operational costs, replacing reactive repairs with a scheduled maintenance program.',
    underTheHood: {
      title: 'Scheduled Maintenance & Fleet Reporting Engine',
      highlights: [
        'Vehicle registry with full maintenance history per unit.',
        'Scheduled maintenance reminders configured per vehicle type.',
        'Cost and downtime reporting across the whole fleet.',
        'Driver and vehicle assignment tracking.'
      ],
      technicalArchitecture: 'MySQL relational schema, maintenance scheduling engine, fleet reporting dashboard.',
      securityAndLicensing: 'Full source code ownership. Fleet data stays on your own infrastructure.'
    },
    features: [
      'Vehicle registry and maintenance history',
      'Scheduled maintenance reminders',
      'Cost and downtime reporting',
      'Driver/vehicle assignment tracking',
      'Fleet-wide maintenance dashboard',
      'Service due alerts'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'GPS/Telemetry Integration'],
    pricingModel: 'Custom Quote, scoped to fleet size',
    includedDeliverables: [
      'Vehicle management system',
      'Maintenance scheduling module',
      'Fleet cost/downtime reports',
      'Setup and configuration guide'
    ],
    faq: [
      {
        q: 'Does this replace manual service logbooks?',
        a: 'Yes, every service record moves into one digital fleet-wide history, replacing paper or per-vehicle logbooks.'
      }
    ]
  },
  {
    id: 'wss-epelanggan',
    slug: 'wss-epelanggan',
    name: 'WSS E-Pelanggan',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Facility & Operations Management',
    tagline: 'A Virtual Counter for Live Chat, Officer Directory & Video Meetings',
    target: 'Government Agencies, Corporates & Public Service Counters',
    summary:
      'A virtual counter for live chat, officer directory, complaint submission, and integrated video meetings, replacing a physical service counter with a digital one.',
    underTheHood: {
      title: 'Virtual Counter & Officer Routing Engine',
      highlights: [
        'Live chat routed directly to the right officer or department.',
        'Officer directory so customers can reach the right person without a physical visit.',
        'Complaint submission and tracking workflow.',
        'Integrated video meeting scheduling for cases that need a face-to-face discussion.'
      ],
      technicalArchitecture: 'MySQL relational schema, WebRTC video integration, live chat routing engine.',
      securityAndLicensing: 'Full source code ownership. Deploys on your own infrastructure.'
    },
    features: [
      'Virtual counter with live chat',
      'Officer directory with direct routing',
      'Complaint submission and tracking',
      'Integrated video meeting scheduling',
      'Case history per customer',
      'Officer workload dashboard'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'WebRTC/Video API'],
    pricingModel: 'Custom Quote, scoped to officer/department count',
    includedDeliverables: [
      'Virtual counter platform',
      'Officer directory and routing setup',
      'Complaint tracking workflow',
      'Video meeting integration'
    ],
    faq: [
      {
        q: 'Can customers escalate a chat to a video call?',
        a: 'Yes, a chat can be escalated directly into a scheduled or instant video meeting with the assigned officer.'
      }
    ]
  },
  {
    id: 'wss-vrar',
    slug: 'wss-vrar',
    name: 'WSS VR / AR Solutions',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Developer Tools',
    tagline: 'Immersive Experiences to Explore, Visualize, and Interact',
    target: 'Real Estate, Retail, Training Providers & Event Organizers',
    summary:
      'Immersive digital experiences enabling users to explore, visualize, and interact with content in innovative ways, from product visualization to training simulations.',
    underTheHood: {
      title: 'Immersive 3D Experience Engine',
      highlights: [
        'VR or AR experiences scoped to a specific use case, not a generic demo.',
        '3D asset creation or integration with existing models.',
        'Deployment across web, mobile, or dedicated headsets.',
        'Analytics on engagement and completion for training use cases.'
      ],
      technicalArchitecture: 'Unity/WebXR-based experience engine, 3D asset pipeline, cross-platform deployment.',
      securityAndLicensing: 'Full source code ownership. Deploys to your chosen platform(s).'
    },
    features: [
      'VR/AR experience scoped to your use case',
      '3D asset creation or integration',
      'Web, mobile, or headset deployment',
      'Engagement and completion analytics',
      'Product visualization or virtual tour modes',
      'Training simulation support'
    ],
    techStack: ['Unity', 'WebXR', '3D Asset Pipelines'],
    pricingModel: 'Custom Quote, scoped to experience complexity',
    includedDeliverables: [
      'VR/AR experience build',
      '3D asset production or integration',
      'Cross-platform deployment',
      'Engagement analytics dashboard'
    ],
    faq: [
      {
        q: 'Do users need special headsets to experience this?',
        a: 'Not necessarily — many experiences run in a standard mobile browser; dedicated headsets are only needed for full VR use cases.'
      }
    ]
  },
  {
    id: 'wss-digitalform',
    slug: 'wss-digitalform',
    name: 'WSS Digital Form Platform',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Corporate Operations',
    tagline: 'Smart Forms, Automated Workflows & Integrated Payments in One Ecosystem',
    target: 'Corporates, Government Agencies & Service Businesses',
    summary:
      'Combines smart forms, automated workflows, integrated payments, and AI technology in one ecosystem, so a submission triggers real action automatically.',
    underTheHood: {
      title: 'Smart Form & Automated Workflow Engine',
      highlights: [
        'Conditional logic forms that adapt based on how they\'re filled in.',
        'Automated workflow routing the moment a form is submitted.',
        'Integrated payment collection where a form requires it.',
        'AI-assisted data extraction or validation on submissions.'
      ],
      technicalArchitecture: 'MySQL relational schema, payment gateway integration, LLM-assisted validation.',
      securityAndLicensing: 'Full source code ownership. Deploys on your own infrastructure.'
    },
    features: [
      'Smart form builder with conditional logic',
      'Automated workflow routing on submission',
      'Integrated payment collection',
      'AI-assisted data extraction/validation',
      'Submission tracking dashboard',
      'Export and reporting'
    ],
    techStack: ['MySQL', 'Tailwind CSS', 'Payment Gateway Integration', 'LLM APIs'],
    pricingModel: 'Custom Quote, scoped to form/workflow complexity',
    includedDeliverables: [
      'Digital form platform',
      'Workflow automation engine',
      'Payment integration',
      'Submission reporting dashboard'
    ],
    faq: [
      {
        q: 'Can a form trigger different workflows depending on the answers given?',
        a: 'Yes, conditional logic routes each submission down the right workflow path automatically.'
      }
    ]
  },
  {
    id: 'wss-aimeetingnotes',
    slug: 'wss-aimeetingnotes',
    name: 'WSS AI Meeting Notes',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Corporate Operations',
    tagline: 'Transforms Conversations Into Structured, Searchable Notes',
    target: 'Corporates, Consultancies & Remote-First Teams',
    summary:
      'Transforms conversations into structured, searchable meeting notes and action items automatically, instead of relying on whoever remembered to take notes.',
    underTheHood: {
      title: 'AI Transcription & Action-Item Extraction Engine',
      highlights: [
        'AI transcription of meeting audio across common platforms.',
        'Structured summary with key decisions and action items.',
        'Searchable meeting archive across your whole organization.',
        'Integration with calendar or task management tools.'
      ],
      technicalArchitecture: 'Speech-to-text pipeline, LLM-based summarization, calendar/task integration.',
      securityAndLicensing: 'Full source code ownership. Meeting data stays on your own infrastructure.'
    },
    features: [
      'AI transcription of meeting audio',
      'Structured summary with action items',
      'Searchable meeting archive',
      'Calendar/task tool integration',
      'Speaker identification',
      'Exportable meeting reports'
    ],
    techStack: ['Speech-to-Text APIs', 'LLM APIs', 'Calendar Integration'],
    pricingModel: 'Custom Quote, scoped to meeting volume',
    includedDeliverables: [
      'AI meeting notes system',
      'Transcription and summarization pipeline',
      'Calendar/task integration',
      'Searchable archive'
    ],
    faq: [
      {
        q: 'Does this work with our existing video call platform?',
        a: 'We confirm compatibility with your video platform during scoping and integrate accordingly.'
      }
    ]
  },
  {
    id: 'wss-aivoice',
    slug: 'wss-aivoice',
    name: 'WSS AI Voice Solution',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Corporate Operations',
    tagline: 'Customizable Voice and Dialect Settings for Natural AI Interactions',
    target: 'Call Centers, Kiosks & Customer-Facing Businesses',
    summary:
      'Customizable voice and dialect settings for natural-sounding AI voice interactions, tuned to how your actual customers speak.',
    underTheHood: {
      title: 'Custom Voice Profile & Dialect Tuning Engine',
      highlights: [
        'Custom voice profile configuration matched to your brand and audience.',
        'Multi-dialect and multi-language support where needed.',
        'Integration into phone lines, kiosks, or apps.',
        'Ongoing tuning based on real user interactions.'
      ],
      technicalArchitecture: 'Text-to-speech and voice-tuning pipeline, multi-language support.',
      securityAndLicensing: 'Full source code ownership. Deploys to your chosen channel.'
    },
    features: [
      'Custom voice profile configuration',
      'Multi-dialect/language support',
      'Phone, kiosk, or app integration',
      'Voice interaction testing and tuning',
      'Natural-sounding local accents',
      'Ongoing quality monitoring'
    ],
    techStack: ['Text-to-Speech APIs', 'Voice Cloning/Tuning', 'LLM APIs'],
    pricingModel: 'Custom Quote, scoped to channel and language coverage',
    includedDeliverables: [
      'Custom voice profile setup',
      'Channel integration (phone/kiosk/app)',
      'Multi-language configuration',
      'Tuning and quality review'
    ],
    faq: [
      {
        q: 'Can the voice speak in local Malaysian dialects?',
        a: 'Yes, dialect and accent settings are configured to match your actual customer base.'
      }
    ]
  },
  {
    id: 'wss-aiphone',
    slug: 'wss-aiphone',
    name: 'WSS AI Phone System',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Corporate Operations',
    tagline: 'Answers Calls, Understands Callers in Multiple Languages, 24/7',
    target: 'Call Centers, Clinics & Customer Service Teams',
    summary:
      'An AI-powered system that answers calls, understands and responds to callers in multiple languages 24/7, and provides insights on every call.',
    underTheHood: {
      title: '24/7 Multi-Language Call Handling Engine',
      highlights: [
        'AI phone answering system covering calls around the clock.',
        'Multi-language call understanding and response.',
        'Routing and escalation to a human when needed.',
        'Call insights and transcript reporting.'
      ],
      technicalArchitecture: 'Telephony API integration, speech-to-text/text-to-speech pipeline, LLM-based response generation.',
      securityAndLicensing: 'Full source code ownership. Call data stays on your own infrastructure.'
    },
    features: [
      '24/7 AI phone answering',
      'Multi-language call handling',
      'Human escalation routing',
      'Call insights and transcripts',
      'Call volume reporting',
      'Integration with existing phone lines'
    ],
    techStack: ['Telephony APIs', 'Speech-to-Text/Text-to-Speech', 'LLM APIs'],
    pricingModel: 'Custom Quote, scoped to call volume',
    includedDeliverables: [
      'AI phone answering system',
      'Multi-language configuration',
      'Human escalation setup',
      'Call reporting dashboard'
    ],
    faq: [
      {
        q: 'What happens if the AI can\'t handle a caller\'s request?',
        a: 'The call is escalated to a human agent, with the AI\'s summary of the conversation so far handed off with it.'
      }
    ]
  },
  {
    id: 'wss-digitalcontentai',
    slug: 'wss-digitalcontentai',
    name: 'WSS Digital Content AI',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Corporate Operations',
    tagline: 'Create, Manage, and Publish Digital Content at Scale',
    target: 'Marketing Teams, Agencies & Content-Heavy Businesses',
    summary:
      'Empowers teams to create, manage, and publish digital content at scale (images, videos, text) powered by AI, matching content output to your publishing schedule.',
    underTheHood: {
      title: 'AI-Assisted Content Generation & Publishing Engine',
      highlights: [
        'AI-assisted generation across images, video, and text.',
        'Content management and review pipeline before publishing.',
        'Brand-consistency guardrails on every generated asset.',
        'Multi-channel publishing support.'
      ],
      technicalArchitecture: 'Generative AI API integration, content management pipeline, multi-channel publishing.',
      securityAndLicensing: 'Full source code ownership. Deploys on your own infrastructure.'
    },
    features: [
      'AI-assisted content generation',
      'Content management and review pipeline',
      'Brand-consistency guardrails',
      'Multi-channel publishing support',
      'Content calendar and scheduling',
      'Asset library management'
    ],
    techStack: ['Generative AI APIs', 'Content Management Pipeline', 'Media Processing'],
    pricingModel: 'Custom Quote, scoped to content volume and channels',
    includedDeliverables: [
      'Content generation workflow',
      'Review and approval pipeline',
      'Multi-channel publishing setup',
      'Brand guardrail configuration'
    ],
    faq: [
      {
        q: 'Does generated content stay on-brand automatically?',
        a: 'Brand guardrails are configured up front (tone, colors, style) so generated content stays consistent before it ever reaches review.'
      }
    ]
  },
  {
    id: 'wss-aikiosk',
    slug: 'wss-aikiosk',
    name: 'WSS AI Digital Kiosk',
    price: 'Custom Quote',
    priceRaw: 0,
    category: 'Facility & Operations Management',
    tagline: 'Engages Visitors With Interactive, Expressive Voice Experiences',
    target: 'Malls, Lobbies, Museums & Public Service Counters',
    summary:
      'Engages visitors, provides information, and delivers interactive and expressive voice experiences, replacing static touchscreen menus with real conversation.',
    underTheHood: {
      title: 'Conversational Kiosk & Knowledge Base Engine',
      highlights: [
        'Interactive voice and touch interface for natural visitor engagement.',
        'AI response generation grounded in a defined knowledge base.',
        'Expressive voice responses instead of flat text-to-speech.',
        'Usage analytics on visitor interactions.'
      ],
      technicalArchitecture: 'LLM-based response engine, text-to-speech/speech-to-text, kiosk hardware integration.',
      securityAndLicensing: 'Full source code ownership. Deploys on your chosen kiosk hardware.'
    },
    features: [
      'Interactive voice/touch kiosk interface',
      'AI response generation from a knowledge base',
      'Expressive voice responses',
      'Usage analytics dashboard',
      'Multi-language support',
      'Remote content/knowledge base updates'
    ],
    techStack: ['LLM APIs', 'Text-to-Speech/Speech-to-Text', 'Kiosk Hardware Integration'],
    pricingModel: 'Custom Quote, scoped to kiosk count and hardware',
    includedDeliverables: [
      'AI digital kiosk software',
      'Knowledge base setup',
      'Kiosk hardware integration',
      'Usage analytics dashboard'
    ],
    faq: [
      {
        q: 'Can we update what the kiosk knows without touching the hardware?',
        a: 'Yes, the knowledge base is managed remotely, so updates go live without visiting each kiosk.'
      }
    ]
  }
];

export const getMarketplaceSystemBySlug = (slug: string) =>
  MARKETPLACE_SYSTEMS.find((system) => system.slug === slug);
