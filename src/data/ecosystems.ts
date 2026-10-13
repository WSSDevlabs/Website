import { CARE_BASIC_MONTHLY, CARE_PRO_EXTRA_SITE_MONTHLY, CARE_PRO_MONTHLY, formatRM } from './catalog';
import type { EcosystemId } from './systems';

/**
 * Ecosystem solutions (audit Part 13): connected packages built only from systems
 * WSS already has, sold to one clear buyer.
 *
 * Rules: launch at most 2 at first (Smart Premises, then Smart Outlet). Publish
 * Smart Clinic and Smart Warehouse only after the first two have live reference
 * clients. Hardware is always quoted separately at cost plus handling, under the
 * supplier's warranty. The integration layer (one login, one shared database, one
 * dashboard) must exist before an ecosystem is sold as finished; until then each
 * published ecosystem is honestly labelled as taking pilot sites.
 */

export type MatrixValue = boolean | string;

export type EcosystemPackage = {
  name: string;
  scope: string;
  price: number;
  care: string;
};

export type Ecosystem = {
  slug: EcosystemId;
  name: string;
  published: boolean;
  /** Honest launch status shown on the page. */
  status: string;
  pitch: string;
  forWho: string;
  problems: { quote: string; detail: string }[];
  /** "How it works" rows: trigger, module, what happens. */
  flow: { trigger: string; module: string; result: string }[];
  hub: string;
  packages: [EcosystemPackage, EcosystemPackage];
  matrix: { feature: string; essential: MatrixValue; complete: MatrixValue }[];
  hardware: string;
  notIncluded: string[];
  timeline: string;
  clientProvides: string[];
  acceptance: string;
  outcomes: string[];
  warranty: string;
  education: { title: string; body: string };
  compliance: string[];
  /** Defaults for the honest 3-year calculator on the page. */
  calculator: { label: string; hint: string; defaultMonthly: number; ownOneTime: number; careMonthly: number; careLabel: string; careRequired: boolean };
  faq: { q: string; a: string }[];
  /** Readiness checklist from the audit. Internal: never rendered. */
  readiness: string[];
};

export const ECOSYSTEMS: Ecosystem[] = [
  {
    slug: 'smart-premises',
    name: 'Smart Premises',
    published: true,
    status: 'Now booking our first pilot site',
    pitch: 'Every visitor, guard patrol, parcel and incident in one dashboard, on a system your building owns.',
    forWho:
      'Condominium JMB and MC committees, property managers (100 to 2,000 units), security companies, office buildings, and factories or warehouses with a guardhouse.',
    problems: [
      { quote: '"We don\'t know who entered the building last night."', detail: 'Paper visitor logbooks are hard to read, easy to fake and impossible to search.' },
      { quote: '"Are the guards actually patrolling?"', detail: 'There is no proof of patrols, so complaints come with no evidence either way.' },
      { quote: '"Parcels pile up at the guardhouse."', detail: 'Parcels get lost, residents complain and guards get distracted.' },
      { quote: '"Incidents get lost in WhatsApp groups."', detail: 'No record, no follow-up, and nothing to show at the committee meeting.' },
      { quote: '"Every vendor charges monthly per unit."', detail: 'A subscription for each job adds up every year.' }
    ],
    flow: [
      { trigger: 'A visitor arrives', module: 'Visitor Management with QR pre-registration', result: 'The host gets a WhatsApp alert' },
      { trigger: 'A guard patrols', module: 'Guard Patrol with QR or NFC checkpoints', result: 'Missed checkpoints raise an alert' },
      { trigger: 'A parcel arrives', module: 'Parcel Management', result: 'The resident is notified' },
      { trigger: 'Something happens', module: 'Incident Reporting with photo and location', result: 'The manager is alerted' }
    ],
    hub: 'One dashboard and a monthly committee report, with one login and one shared resident and unit database.',
    packages: [
      {
        name: 'Essential',
        scope: 'Visitors, patrols, parcels and incidents in one dashboard',
        price: 9690,
        care: `Care Pro required: ${formatRM(CARE_PRO_MONTHLY)}/month`
      },
      {
        name: 'Complete',
        scope: 'Everything in Essential, plus access cards, facility booking, CCTV and smart lockers',
        price: 18690,
        care: `Care Pro required: ${formatRM(CARE_PRO_MONTHLY)}/month + ${formatRM(CARE_PRO_EXTRA_SITE_MONTHLY)}/month per extra site`
      }
    ],
    matrix: [
      { feature: 'Visitor Management with QR pre-registration', essential: true, complete: true },
      { feature: 'Guard Patrol (QR or NFC checkpoints)', essential: true, complete: true },
      { feature: 'Incident reporting with photos', essential: true, complete: true },
      { feature: 'Parcel management (log and notifications)', essential: true, complete: true },
      { feature: 'One dashboard and a monthly PDF report for the committee', essential: true, complete: true },
      { feature: 'One resident and unit database shared by every module', essential: true, complete: true },
      { feature: 'WhatsApp notifications (Meta fees at cost)', essential: true, complete: true },
      { feature: 'Smart ID or RFID access cards for residents and staff', essential: false, complete: true },
      { feature: 'Facility booking for shared spaces (courts, halls, BBQ pits)', essential: false, complete: true },
      { feature: "CCTV integration: view linked cameras from the dashboard, through your partner's recorder", essential: false, complete: true },
      { feature: 'Smart parcel locker hardware integration', essential: false, complete: true },
      { feature: 'Installation and 2 on-site training sessions', essential: true, complete: true }
    ],
    hardware:
      'Tablets or kiosks, NFC tags, RFID readers, lockers and cameras are quoted separately, at cost plus handling, with the supplier\'s warranty.',
    notIncluded: [
      'Hardware purchase',
      'Cabling and civil works (done by a licensed partner)',
      'Internet connection at the guardhouse',
      'Guard manpower',
      'CCTV cameras and recorders themselves'
    ],
    timeline: 'Essential: 4 to 6 weeks. Complete: 8 to 12 weeks, depending on hardware lead times.',
    clientProvides: [
      'Your unit list and guard schedule',
      'Checkpoint locations',
      'A guardhouse device, or the budget for one',
      'Internet at the guardhouse',
      'A committee contact who can sign off'
    ],
    acceptance: 'A 2-week pilot with your real guards and visitors, then a sign-off checklist covering every module, then go-live.',
    outcomes: [
      'Share of visitors pre-registered',
      'Patrol completion rate',
      'Time to collect a parcel',
      'Incidents closed within 48 hours',
      'Paper removed from the guardhouse'
    ],
    warranty:
      '60 days of software warranty. Hardware is covered by the supplier\'s warranty. Care Pro is required after that, because security systems can\'t be left unmaintained.',
    education: {
      title: 'Why one system instead of four apps?',
      body: "Separate apps mean four logins, four bills, and data that doesn't connect: the visitor log can't tell you which guard was on patrol when an incident happened. One connected system answers what happened, when, and who was there, in a single search. And because you own it, the cost doesn't grow every year with your unit count."
    },
    compliance: [
      'The management body is the data controller for residents\' and visitors\' data; we sign a Data Processing Agreement as the processor.',
      'Visitor data is kept to the minimum, with IC numbers masked where full numbers aren\'t needed and a retention period you set (we suggest 90 days).',
      'We provide a PDPA notice template for the guardhouse.',
      'We don\'t store CCTV footage unless you ask us to in writing; access goes through your own recorder credentials.',
      'Biometric access only with consent, and always with a card or PIN alternative.',
      'Radio devices are certified for Malaysia, and electrical work is done by licensed contractors.'
    ],
    calculator: {
      label: 'What your building pays now for visitor, patrol and parcel apps, per month (RM)',
      hint: 'The starting figure is only an example. Multiply what you pay per unit by your number of units.',
      defaultMonthly: 800,
      ownOneTime: 9690,
      careMonthly: CARE_PRO_MONTHLY,
      careLabel: 'Care Pro (required)',
      careRequired: true
    },
    faq: [
      {
        q: 'Is Smart Premises ready today?',
        a: "Each module (visitor management, guard patrol, parcels, incidents) exists today as its own system. The connected dashboard that ties them together is being finished with our first pilot site. If you'd like to be that site, you get Founding Client pricing in exchange for a case study."
      },
      {
        q: 'Why is Care Pro required?',
        a: 'A security system that stops getting updates, backups and monitoring becomes a risk to your residents. Care Pro keeps it maintained, with a 1-working-day response and same-day help for critical issues.'
      },
      {
        q: 'Who supplies and installs the hardware?',
        a: 'A hardware partner supplies certified devices at cost plus handling, with the supplier\'s warranty. Any electrical or cabling work is done by a licensed contractor.'
      },
      {
        q: 'Can the committee approve this through our normal process?',
        a: 'Yes. We provide a formal proposal, a quotation with a validity date, company details and a sample contract, so the committee can compare quotations and approve it properly.'
      },
      {
        q: "Who owns the residents' data?",
        a: 'Your management body does. We only process it on your instructions under a Data Processing Agreement, and we hand everything back or delete it when the engagement ends.'
      }
    ],
    readiness: [
      'Integration layer built: one login, shared unit and person database, unified dashboard',
      'Real demo running on a real server (not a mockup)',
      'Hardware partner agreement for tablets, kiosks, NFC tags, RFID readers, lockers and CCTV',
      'One pilot site signed as a Founding Client',
      'PDPA review: retention, access control and guardhouse signage'
    ]
  },
  {
    slug: 'smart-outlet',
    name: 'Smart Outlet',
    published: true,
    status: 'Now booking pilot outlets',
    pitch: 'Sell, schedule staff and talk to customers from one system, with no monthly POS rent.',
    forWho: 'Cafés, restaurants, bakeries and retail shops with 1 to 10 outlets.',
    problems: [
      { quote: '"The POS bill never stops."', detail: 'Subscriptions are charged per outlet, every month, for as long as you trade.' },
      { quote: '"Attendance is on paper or WhatsApp."', detail: 'Which leads to payroll disputes at the end of every month.' },
      { quote: '"Customers ask the same questions at all hours."', detail: 'Prices, opening hours and the menu, over WhatsApp, late at night.' },
      { quote: '"Online orders cost us commission."', detail: 'Marketplace and delivery apps take a cut of every order.' },
      { quote: '"Nothing talks to anything."', detail: "Sales and staff data sit in separate apps that don't share anything." }
    ],
    flow: [
      { trigger: 'A customer orders', module: 'Self-order kiosk or QR menu', result: 'The order goes straight to the POS and kitchen' },
      { trigger: 'A customer messages', module: 'AI WhatsApp assistant', result: 'Menu, hours and orders answered' },
      { trigger: 'An online order comes in', module: 'Your own online store', result: 'Recorded with your in-store sales and stock' },
      { trigger: 'Staff clock in', module: 'Staff Attendance and Staff Portal', result: 'Hours are ready for payroll' }
    ],
    hub: 'One owner dashboard for sales, stock and staff hours, on one shared sales and stock database.',
    packages: [
      {
        name: 'Essential',
        scope: 'One outlet: POS, staff attendance and an AI WhatsApp assistant',
        price: 4490,
        care: `Care Basic recommended: ${formatRM(CARE_BASIC_MONTHLY)}/month`
      },
      {
        name: 'Complete',
        scope: 'Up to 3 outlets, plus self-order kiosk and your own online store',
        price: 11900,
        care: `Care Pro required: ${formatRM(CARE_PRO_MONTHLY)}/month`
      }
    ],
    matrix: [
      { feature: 'POS with inventory', essential: true, complete: 'Yes, multi-outlet' },
      { feature: 'Staff Attendance and Staff Portal', essential: true, complete: true },
      { feature: 'Owner dashboard (sales, stock, staff hours)', essential: true, complete: true },
      { feature: 'AI WhatsApp assistant (setup)', essential: true, complete: true },
      { feature: 'Self-order kiosk or QR ordering', essential: false, complete: true },
      { feature: 'Store website with online ordering', essential: false, complete: true },
      { feature: 'Installation and training', essential: true, complete: true }
    ],
    hardware:
      'POS terminal, receipt printer, cash drawer, scanner and kiosk are quoted separately, at cost plus handling, with the supplier\'s warranty.',
    notIncluded: [
      'Hardware',
      'Payment gateway and card terminal fees (charged by your provider)',
      "Meta's WhatsApp conversation fees (passed through at cost)",
      'LHDN e-invoicing (MyInvois) integration, quoted separately if you need it'
    ],
    timeline: 'Essential: 3 to 4 weeks. Complete: 6 to 8 weeks.',
    clientProvides: [
      'Your menu or product list with prices',
      'Staff list and shift patterns',
      'Your payment provider details',
      'One person who can sign off'
    ],
    acceptance: 'A live trial week at one outlet, then a sign-off checklist for every module.',
    outcomes: [
      'Monthly software fees removed',
      'Time spent on payroll each month',
      'Enquiries answered after hours',
      'Share of orders taken without commission'
    ],
    warranty: '60 days of software warranty. Hardware is covered by the supplier\'s warranty.',
    education: {
      title: 'Is owning really cheaper?',
      body: "Be fair to both sides: subscriptions include hosting, updates and support. Owning means you pay once, pay for your own hosting, and can choose a Care Plan for support. With one outlet and a Care Plan, owning can cost more over 3 years. The saving grows with every extra outlet and every extra year. Use the calculator with your own numbers."
    },
    compliance: [
      'Marketing messages only to customers who opted in, with an easy opt-out.',
      'No card data is ever stored; payments run through your provider.',
      'Staff are told in writing what the attendance system records; fingerprints only with consent and an alternative.',
      'A Data Processing Agreement if we maintain the system on a Care Plan.'
    ],
    calculator: {
      label: 'What you pay now for POS and staff apps, per month, all outlets (RM)',
      hint: 'The starting figure is one published POS entry plan. Add every app you pay for, across all outlets.',
      defaultMonthly: 158,
      ownOneTime: 4490,
      careMonthly: CARE_BASIC_MONTHLY,
      careLabel: 'Care Basic (recommended)',
      careRequired: false
    },
    faq: [
      {
        q: 'Is Smart Outlet ready today?',
        a: 'The POS, attendance and staff portal exist today as separate systems. The shared owner dashboard is being finished with our first pilot outlets. Pilot outlets get Founding Client pricing in exchange for a case study.'
      },
      {
        q: 'Does it work for more than one outlet?',
        a: 'Yes. Complete covers up to 3 outlets on one shared sales and stock database. Larger groups get a fixed quote.'
      },
      {
        q: 'Does it support LHDN e-invoicing?',
        a: 'Not as standard. MyInvois integration is quoted separately if you need it. Check with your accountant whether e-invoicing applies to you yet.'
      },
      {
        q: 'Do you take a cut of my sales?',
        a: 'Never. Payments go straight to your own payment provider and bank account.'
      }
    ],
    readiness: [
      'POS and attendance share one database',
      'Tested with real printers and scanners',
      'Hardware supplier agreement',
      'MyInvois position stated clearly'
    ]
  },
  {
    slug: 'smart-clinic',
    name: 'Smart Clinic',
    published: false,
    status: 'Not yet published: needs Smart Premises and Smart Outlet references first',
    pitch: 'Fewer phone calls, shorter queues, and no more retyping patient forms, on a system the clinic owns.',
    forWho: 'Private GP, dental, physiotherapy and aesthetic clinics, and small specialist practices with 1 to 3 branches.',
    problems: [
      { quote: '"The phone never stops ringing for appointments."', detail: 'Front-desk staff spend hours on calls instead of patients.' },
      { quote: '"The waiting area is packed."', detail: "Walk-ins and appointments clash, and patients don't know how long they'll wait." },
      { quote: '"We retype the same details again and again."', detail: 'Paper registration forms are slow, messy and easy to lose.' },
      { quote: '"Patients don\'t show up."', detail: 'No reminders, so empty slots cost money.' },
      { quote: '"Patients message us at night."', detail: 'Questions about hours, prices and directions pile up.' }
    ],
    flow: [
      { trigger: 'A patient messages', module: 'WhatsApp assistant (admin topics only)', result: 'Books, reschedules or gets an answer' },
      { trigger: 'An appointment is booked', module: 'Clinic Management calendar', result: 'A reminder goes out 24 hours before' },
      { trigger: 'A new patient registers', module: 'Digital form with consent', result: 'The patient record fills itself' },
      { trigger: 'The patient arrives', module: 'Self check-in kiosk', result: 'Queue number on the screen' }
    ],
    hub: 'One clinic dashboard for appointments, queue and no-shows.',
    packages: [
      { name: 'Essential', scope: 'One branch', price: 5490, care: `Care Pro required: ${formatRM(CARE_PRO_MONTHLY)}/month` },
      {
        name: 'Complete',
        scope: 'Up to 3 branches, with kiosk, queue display and clinic website',
        price: 11490,
        care: `Care Pro required: ${formatRM(CARE_PRO_MONTHLY)}/month + ${formatRM(CARE_PRO_EXTRA_SITE_MONTHLY)}/month per extra branch`
      }
    ],
    matrix: [
      { feature: 'Clinic management: records, appointments, queue, visit notes, billing', essential: true, complete: 'Yes, multi-branch' },
      { feature: 'Digital pre-registration and consent forms', essential: true, complete: true },
      { feature: 'AI WhatsApp assistant for booking, reminders and FAQs (admin topics only)', essential: true, complete: true },
      { feature: 'Appointment reminders (Meta fees at cost)', essential: true, complete: true },
      { feature: 'Self check-in kiosk and queue display', essential: false, complete: true },
      { feature: 'Clinic website with a booking link', essential: false, complete: true },
      { feature: 'Installation and training for front desk and doctors', essential: true, complete: true }
    ],
    hardware: 'Tablet or kiosk, queue TV and receipt printer are quoted separately at cost plus handling.',
    notIncluded: [
      'Hardware',
      'Panel or insurance (TPA) claim integrations, quoted separately',
      'E-invoicing integration, quoted separately',
      'Pharmacy stock control',
      'Any diagnosis or clinical decision feature (deliberately excluded)',
      'Data migration from an old clinic system (from RM299 per data set)'
    ],
    timeline: 'Essential: 3 to 4 weeks. Complete: 6 to 8 weeks.',
    clientProvides: [
      'Doctors, services and session times',
      'Existing patient list, if migrating',
      'Clinic policies (cancellation, deposits)',
      'Consent wording approved by the clinic',
      'A front-desk device'
    ],
    acceptance: 'A 1-week parallel run (paper and system side by side), then a sign-off checklist per module.',
    outcomes: ['Fewer phone calls', 'Average waiting time', 'No-show rate', 'Registration time per patient', 'After-hours enquiries handled'],
    warranty: '60 days of software warranty, then Care Pro.',
    education: {
      title: 'Why digital registration?',
      body: "A paper form is retyped at least once, can be lost, and can be read by anyone at the counter. A digital form fills the record directly, records the patient's consent, and is visible only to the staff who need it."
    },
    compliance: [
      'Health information is sensitive personal data: explicit consent, role-based access, audit logs, encryption, backups and hosting in Malaysia.',
      'The clinic is the data controller; WSS is the processor under a Data Processing Agreement.',
      'The system does not diagnose, recommend treatment or interpret results. It is administrative and record-keeping software, not a medical device.',
      'The clinic sets its own record retention policy and is responsible for its medical advertising.'
    ],
    calculator: {
      label: 'What the clinic pays now for booking and queue apps, per month (RM)',
      hint: 'Add up every subscription the front desk uses.',
      defaultMonthly: 400,
      ownOneTime: 5490,
      careMonthly: CARE_PRO_MONTHLY,
      careLabel: 'Care Pro (required)',
      careRequired: true
    },
    faq: [],
    readiness: [
      'Clinic Management reviewed for role-based access and audit logs',
      'Malaysian hosting arranged',
      'DPA and Clinic Addendum ready',
      'AI assistant scripted to refuse medical advice',
      'Pilot clinic as a Founding Client',
      'Tested with a real queue display and printer'
    ]
  },
  {
    slug: 'smart-warehouse',
    name: 'Smart Warehouse',
    published: false,
    status: 'Not yet published: needs Smart Premises and Smart Outlet references first',
    pitch: 'Know where every pallet, asset and temperature reading is, live, without a stock count that takes three days.',
    forWho: 'SME warehouses, distributors, small 3PL operators, food and pharmaceutical storage, spare-parts stores and workshops.',
    problems: [
      { quote: '"Stock counts take days and are still wrong."', detail: 'Clipboards and one-by-one barcode scans are slow and error-prone.' },
      { quote: '"We can\'t find it."', detail: 'Pallets, tools and returnable containers go missing.' },
      { quote: '"We found out the chiller failed the next morning."', detail: 'Temperature problems are discovered too late.' },
      { quote: '"Our electricity bill keeps rising."', detail: 'Nobody can see which equipment uses the most power.' },
      { quote: '"Incidents are reported on WhatsApp and forgotten."', detail: 'No record for safety audits or customer complaints.' }
    ],
    flow: [
      { trigger: 'A pallet passes a gate', module: 'RFID Tracking', result: 'Its location updates live' },
      { trigger: 'A chiller drifts', module: 'IoT Sensor Dashboard', result: 'A WhatsApp alert goes out' },
      { trigger: 'Equipment runs', module: 'Energy Monitoring', result: 'Usage shows on the dashboard' },
      { trigger: 'Something happens', module: 'Incident Reporting', result: 'Recorded with photo and location' }
    ],
    hub: 'One warehouse dashboard: stock and asset location, cold-chain log, energy and incidents, with exportable reports.',
    packages: [
      { name: 'Essential', scope: 'One site, pilot zone', price: 9990, care: `Care Pro required: ${formatRM(CARE_PRO_MONTHLY)}/month` },
      {
        name: 'Complete',
        scope: 'One site, full coverage',
        price: 15490,
        care: `Care Pro required: ${formatRM(CARE_PRO_MONTHLY)}/month + ${formatRM(CARE_PRO_EXTRA_SITE_MONTHLY)}/month per extra site`
      }
    ],
    matrix: [
      { feature: 'RFID tracking for pallets, assets or containers', essential: '1 zone, up to 2 gates or handhelds', complete: 'Whole site' },
      { feature: 'Temperature, humidity and door monitoring with alerts', essential: 'Up to 6 sensors', complete: 'Up to 20 sensors' },
      { feature: 'Asset management', essential: true, complete: true },
      { feature: 'Cold-chain log export', essential: true, complete: true },
      { feature: 'Energy monitoring', essential: false, complete: true },
      { feature: 'Incident reporting', essential: false, complete: true },
      { feature: 'Staff attendance', essential: false, complete: true },
      { feature: 'Unified warehouse dashboard', essential: true, complete: true },
      { feature: 'Site survey, installation and training', essential: true, complete: true }
    ],
    hardware: 'RFID tags, readers and gates, sensors, gateways and energy meters are quoted separately at cost plus handling.',
    notIncluded: [
      'Hardware',
      'Electrical and cabling works (licensed contractor)',
      'Internet connectivity',
      'ERP or accounting integration, quoted separately',
      'Sensor calibration certificates (from the hardware supplier)'
    ],
    timeline: 'Essential: 4 to 6 weeks, starting with one pilot zone. Complete: 8 to 12 weeks.',
    clientProvides: ['Floor plan', 'Asset and pallet types', 'Temperature thresholds per room', 'Wi-Fi or space for a gateway', 'A contact who approves alerts and signs off'],
    acceptance: 'A 2-week pilot in one zone with read-rate and alert tests (target accuracy agreed in writing first), then sign-off.',
    outcomes: ['Stock count time', 'Inventory accuracy', 'Assets lost per month', 'Temperature excursions and response time', 'Energy use per month'],
    warranty: '60 days of software warranty; hardware under the supplier\'s warranty; Care Pro required.',
    education: {
      title: 'RFID or barcodes?',
      body: 'A barcode must be scanned one item at a time, in line of sight. RFID tags are read automatically as pallets pass a gate, dozens at once. Counts that took days take minutes.'
    },
    compliance: [
      'All radio devices carry Malaysian certification.',
      'Electrical work by licensed contractors only.',
      'Sensor readings are time-stamped and cannot be edited.',
      'WSS guarantees that alerts are sent at the agreed thresholds, not the condition of your stock.'
    ],
    calculator: {
      label: 'What you pay now for tracking and monitoring tools, per month (RM)',
      hint: 'Add up every subscription you use today.',
      defaultMonthly: 600,
      ownOneTime: 9990,
      careMonthly: CARE_PRO_MONTHLY,
      careLabel: 'Care Pro (required)',
      careRequired: true
    },
    faq: [],
    readiness: [
      'RFID and IoT modules integrated into one dashboard',
      'Certified hardware partner with stock and warranty terms',
      'Pilot zone at a Founding Client',
      'Read-rate test procedure written',
      'Electrical contractor partner'
    ]
  }
];

/** Ecosystems 5 to 8: outline only. Don't publish until #1 and #2 each have a live reference client. */
export const FUTURE_ECOSYSTEMS = [
  { name: 'Smart Workplace', modules: 'Staff Attendance, Staff Portal, Helpdesk, Asset Management, Digital Forms, Cashless Canteen Wallet, Canteen Meal Redemption', price: 'Essential RM5,900 / Complete RM11,190' },
  { name: 'Smart Factory Monitor', modules: 'Machine Monitoring, IoT Sensor Dashboard, Energy Monitoring, RFID Tracking, Asset Management, Incident Reporting', price: 'Pilot line RM11,190 / Plant from RM22,400 + sensors' },
  { name: 'Smart Campus & Hostel', modules: 'Hostel Management, Safe Student Pick-Up, Smart ID, Visitor Management, Room Booking, Student Cashless Card', price: 'Essential RM9,690 / Complete RM18,690' },
  { name: 'Smart Venue', modules: 'Room & Event Space Booking, Event Ticketing, Event Photo Gallery, Self-Service Kiosk, Visitor Management, POS', price: 'Essential RM5,190 / Complete RM10,400' }
];

export const PUBLISHED_ECOSYSTEMS = ECOSYSTEMS.filter((e) => e.published);
export const getEcosystem = (slug: string) => ECOSYSTEMS.find((e) => e.slug === slug);
