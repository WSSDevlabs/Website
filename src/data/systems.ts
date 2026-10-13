import { SYSTEM_TIERS, type SystemTierId } from './catalog';

/**
 * All 41 ready-made systems, with their catalogue status (audit 12.4 C).
 *
 *  public      listed on /systems/ with a price and its own page (15 products)
 *  ecosystem   sold inside an ecosystem package (Part 13); standalone on request
 *  on-request  page unpublished; "more systems available on request"
 *  hold        unpublished until production-ready, tested and supportable
 *
 * Corrections to the audit's guesses, made from the real product data:
 *  - wss-vims is the Visitor Management system (the audit thought it duplicated wss-vms).
 *  - wss-vms is a Vehicle Maintenance system, not visitor management. It takes the
 *    15th public slot.
 *  - wss-training is a training and teambuilding SERVICE, not software, so selling it
 *    as a licence would misdescribe it. Moved to hold.
 *  - wss-emers is canteen meal redemption, not emergency broadcast. It belongs to the
 *    Smart Workplace / Smart Campus ecosystems, not Smart Premises.
 *
 * A product moves from hold to public only when it has a real working demo or
 * recording, a tech-spec box, a 10-question FAQ and at least one supported install.
 */

export type SystemStatus = 'public' | 'ecosystem' | 'on-request' | 'hold';
export type BuyerGroup = 'retail' | 'offices' | 'security' | 'events';
export type EcosystemId =
  | 'smart-premises'
  | 'smart-outlet'
  | 'smart-clinic'
  | 'smart-warehouse'
  | 'smart-workplace'
  | 'smart-factory'
  | 'smart-campus'
  | 'smart-venue';

export const BUYER_GROUPS: Record<BuyerGroup, string> = {
  retail: 'Retail & F&B',
  offices: 'Offices',
  security: 'Security & Property',
  events: 'Events & Hospitality'
};

export type QA = { q: string; a: string };

export type SystemProduct = {
  slug: string;
  /** Plain name a buyer understands. */
  name: string;
  /** The old Marketplace name, kept for reference and redirects. */
  formerName: string;
  tier: SystemTierId | null;
  status: SystemStatus;
  ecosystems?: EcosystemId[];
  /** Why a product is held back or on request. */
  note?: string;
  /* The fields below are only filled for public products. */
  groups?: BuyerGroup[];
  benefit?: string;
  forWho?: string;
  features?: string[];
  rightForYou?: string[];
  /** Answer to "Does it take online payments?" */
  payments?: string;
  /** Hardware the buyer may need, which is never included in the licence. */
  hardware?: string;
  /** Answer to "Does it support Bahasa Malaysia?" when it differs from the default. */
  language?: string;
  stack?: string[];
  extraFaq?: QA[];
  /** Real screenshots only. Never mockups. Empty until the founder adds them. */
  media?: { src: string; alt: string }[];
  /** Real 60-second screen recording, when one exists. */
  videoUrl?: string;
  /** Fill in from the real release history. Shown in the tech-specs box when set. */
  version?: string;
  lastUpdated?: string;
};

const NO_PAYMENTS = "No. This system doesn't take payments.";

export const SYSTEMS: SystemProduct[] = [
  /* ── Public (15) ─────────────────────────────────────────────────────── */
  {
    slug: 'wss-pos',
    name: 'Point of Sale (POS)',
    formerName: 'WSS POS System',
    tier: 'standard',
    status: 'public',
    ecosystems: ['smart-outlet'],
    groups: ['retail'],
    benefit: "Ring up sales, track stock and see today's takings, with no monthly POS fee.",
    forWho: 'Retail shops, cafés, restaurants and service counters.',
    features: [
      'Scan a barcode or tap a product to ring up a sale',
      'See stock levels update as you sell',
      'Record cash, card and QR payments against each sale',
      'Read daily sales and shift reports at closing time',
      'Give each cashier their own login',
      'Print receipts for your customers'
    ],
    rightForYou: [
      'Do you sell over a counter at one or more tills?',
      "Are you paying a monthly POS fee for software you'd rather own?",
      'Do you want your sales and stock data on your own server?'
    ],
    payments:
      'It records cash, card and e-wallet or DuitNow QR payments taken at your counter. Card terminals and QR codes come from your bank or payment provider; the POS records each payment against the sale. Linking a specific card terminal directly is a customisation, quoted before any work starts.',
    hardware: 'Works with a barcode scanner, receipt printer and cash drawer. Hardware is not included; we can source it at cost.',
    stack: ['MySQL', 'Tailwind CSS', 'Barcode scanner support'],
    extraFaq: [
      {
        q: 'Does it handle LHDN e-invoicing (MyInvois)?',
        a: "Not in the standard licence. If you need MyInvois submission, we quote the integration as a fixed-price customisation. Check with your accountant whether e-invoicing applies to your business yet."
      }
    ]
  },
  {
    slug: 'wss-helpdesk',
    name: 'Helpdesk & Ticketing',
    formerName: 'WSS Helpdesk / Ticketing System',
    tier: 'standard',
    status: 'public',
    ecosystems: ['smart-workplace'],
    groups: ['offices'],
    benefit: 'Turn scattered support requests into one list your team can actually finish.',
    forWho: 'SMEs with a support, IT or customer service team.',
    features: [
      'Every request becomes a ticket with an owner and a status',
      'Customers send requests through their own portal',
      'Set response targets and see which tickets are overdue',
      'Bring in requests from email (and WhatsApp, with a WhatsApp Business API account)',
      'See response times and ticket volumes every month',
      'Keep internal notes and a full history on every ticket'
    ],
    rightForYou: [
      'Do support requests get lost in WhatsApp groups or inboxes?',
      'Do customers keep asking when their issue will be handled?',
      'Do you want to measure how fast your team responds?'
    ],
    payments: NO_PAYMENTS,
    stack: ['MySQL', 'Tailwind CSS', 'Email integration']
  },
  {
    slug: 'wss-vims',
    name: 'Visitor Management',
    formerName: 'VIMS',
    tier: 'standard',
    status: 'public',
    ecosystems: ['smart-premises', 'smart-campus', 'smart-venue'],
    groups: ['security', 'offices'],
    benefit: "Replace the paper logbook. Visitors pre-register, check in with a QR code, and their host is told they've arrived.",
    forWho: 'Offices, factories, schools and guarded premises.',
    features: [
      'Visitors pre-register online before they arrive',
      'Check visitors in at the counter with a QR code or ID scan',
      'Print visitor badges automatically',
      'Tell the host the moment their visitor arrives',
      'Flag anyone on your watchlist before they get in',
      'Search every past visit in seconds'
    ],
    rightForYou: [
      'Do you still keep a paper visitor logbook?',
      'Do you need to know who was on site at a given time?',
      "Do you want visitors' personal data kept on your own server?"
    ],
    payments: NO_PAYMENTS,
    hardware: 'A tablet or PC at the counter. A badge printer is optional. Hardware is not included.',
    stack: ['MySQL', 'Tailwind CSS', 'Badge printer support'],
    extraFaq: [
      {
        q: 'What about PDPA and visitor data?',
        a: "You decide which visitor details to collect, and you're the data controller. We recommend collecting the minimum (for example, not storing full IC numbers unless you must), keeping records for a short period such as 90 days, and showing a privacy notice at your counter. Ask us to show you how this is set up before you buy."
      }
    ]
  },
  {
    slug: 'wss-vms',
    name: 'Vehicle Maintenance',
    formerName: 'WSS Vehicle Management System',
    tier: 'standard',
    status: 'public',
    groups: ['offices'],
    benefit: "Know when every vehicle is due for service, what it costs you and who's driving it.",
    forWho: 'Transport operators, factories and any business that runs vehicles.',
    features: [
      "Keep each vehicle's service history in one place",
      'Get a reminder before each service is due',
      'See repair costs and downtime for every vehicle',
      'Track which driver has which vehicle',
      "See the whole fleet's status on one dashboard",
      'Plan servicing ahead instead of paying for breakdowns'
    ],
    rightForYou: [
      'Do you run more than a few vehicles?',
      'Do services get missed until something breaks?',
      'Do you want to see what each vehicle really costs you?'
    ],
    payments: NO_PAYMENTS,
    hardware: 'None needed. Connecting GPS trackers or telematics is a customisation.',
    stack: ['MySQL', 'Tailwind CSS']
  },
  {
    slug: 'wss-guardtour',
    name: 'Guard Patrol',
    formerName: 'WSS Guard Tour',
    tier: 'standard',
    status: 'public',
    ecosystems: ['smart-premises'],
    groups: ['security'],
    benefit: "Proof that every patrol happened. Guards scan checkpoints, and you're alerted when one is missed.",
    forWho: 'Security companies, condominiums, factories and guarded properties.',
    features: [
      'Guards scan a QR code or NFC tag at each checkpoint',
      'Set patrol routes and times for each shift',
      'Get an alert when a checkpoint is missed',
      'Guards log incidents with notes while they patrol',
      'Show clients patrol reports with time stamps',
      "Works on the guards' phones"
    ],
    rightForYou: [
      'Do you need proof that patrols really happen?',
      'Do clients or committees ask for patrol reports?',
      'Are patrol records still on paper or in WhatsApp?'
    ],
    payments: NO_PAYMENTS,
    hardware:
      'QR checkpoints can be printed on paper or stickers at almost no cost. NFC tags are hardware and are not included; we can source them at cost.',
    stack: ['MySQL', 'Tailwind CSS', 'QR and NFC scanning'],
    extraFaq: [
      {
        q: 'Which phones do guards need?',
        a: 'QR checkpoints work with any phone that has a camera. NFC tags need an Android phone with NFC. Tell us which phones your guards use before you buy, and we\'ll confirm they work.'
      },
      {
        q: 'Does it track where guards are?',
        a: 'It records when each checkpoint is scanned. Let your guards know in writing what the system records; it is good practice under the PDPA.'
      }
    ]
  },
  {
    slug: 'wss-tams',
    name: 'Staff Attendance',
    formerName: 'TAMS',
    tier: 'standard',
    status: 'public',
    ecosystems: ['smart-outlet', 'smart-warehouse', 'smart-workplace'],
    groups: ['offices'],
    benefit: 'Clock-ins, lateness and overtime worked out for you, ready for payroll.',
    forWho: 'SMEs, factories and HR teams.',
    features: [
      'Staff clock in by card, phone or fingerprint reader',
      'Plan shifts and rosters',
      'Lateness and absences are flagged automatically',
      'Overtime is calculated using your own rules',
      'Export attendance ready for payroll',
      "See who's in today on one dashboard"
    ],
    rightForYou: [
      'Is attendance still on paper, a punch card or WhatsApp?',
      'Do overtime and lateness cause payroll disputes?',
      'Do you run shifts or rosters?'
    ],
    payments: NO_PAYMENTS,
    hardware: 'Card or fingerprint readers are optional and not included. Phone clock-in needs no extra hardware.',
    stack: ['MySQL', 'Tailwind CSS', 'Card and biometric reader support'],
    extraFaq: [
      {
        q: 'Can we use fingerprints?',
        a: "Yes, with a compatible reader. Fingerprints are sensitive personal data under the PDPA, so get each employee's explicit consent and offer a card or phone alternative."
      }
    ]
  },
  {
    slug: 'wss-staffportal',
    name: 'Staff Portal',
    formerName: 'WSS StaffPortal',
    tier: 'standard',
    status: 'public',
    ecosystems: ['smart-outlet', 'smart-workplace'],
    groups: ['offices'],
    benefit: "Leave, claims, equipment and team tasks in one place, with approvals that don't get lost.",
    forWho: 'Growing SMEs and office teams.',
    features: [
      'Staff apply for leave and see their balance',
      'Submit expense claims with a photo of the receipt',
      'Requests go to the right manager for approval',
      'Keep a register of laptops and equipment you issue',
      'Share tasks on a simple team board',
      'Export claims and leave records for your accountant'
    ],
    rightForYou: [
      'Are leave and claims handled on paper or in chat?',
      'Do approvals get stuck with one busy manager?',
      'Do you need a record your accountant can use?'
    ],
    payments: NO_PAYMENTS,
    stack: ['MySQL', 'Tailwind CSS', 'Alpine.js']
  },
  {
    slug: 'wss-assetmanagement',
    name: 'Asset Management',
    formerName: 'WSS Asset Management',
    tier: 'standard',
    status: 'public',
    ecosystems: ['smart-warehouse', 'smart-workplace', 'smart-factory'],
    groups: ['offices'],
    benefit: 'Know what you own, who has it, and when it is due for maintenance.',
    forWho: 'Offices, factories, schools and institutions.',
    features: [
      'Register every asset with a QR or barcode label',
      'Check assets in and out to staff',
      'Schedule maintenance before things break',
      'Track depreciation for your accounts',
      "Scan a label to see an asset's full history",
      'Print reports ready for an audit'
    ],
    rightForYou: [
      'Do laptops, tools or equipment go missing?',
      'Is your asset list an old spreadsheet?',
      'Do you need records for an audit?'
    ],
    payments: NO_PAYMENTS,
    hardware: 'Label printing and a barcode scanner are optional. Any phone camera can scan QR labels.',
    stack: ['MySQL', 'Tailwind CSS', 'QR and barcode tagging']
  },
  {
    slug: 'wss-parcellocker',
    name: 'Parcel Management',
    formerName: 'WSS Parcel Locker',
    tier: 'standard',
    status: 'public',
    ecosystems: ['smart-premises'],
    groups: ['security', 'offices'],
    benefit: 'Every parcel logged, the owner notified, and collected with a PIN or QR code.',
    forWho: 'Condominiums, offices and campus mailrooms.',
    features: [
      'Log each parcel as it arrives',
      'Notify the owner automatically',
      'Release parcels with a PIN or QR code',
      'See which lockers are in use',
      'Get alerts for parcels left too long',
      'Couriers drop off through their own screen'
    ],
    rightForYou: [
      'Do parcels pile up at your guardhouse or reception?',
      'Do residents or staff complain about lost parcels?',
      'Do you want a record of who collected what, and when?'
    ],
    payments: NO_PAYMENTS,
    hardware:
      'Runs as a parcel log at the counter with no special hardware. Connecting smart locker hardware is quoted per locker model.',
    stack: ['MySQL', 'Tailwind CSS', 'Smart locker support']
  },
  {
    slug: 'wss-eventspace',
    name: 'Room & Event Space Booking',
    formerName: 'WSS EventSpace',
    tier: 'standard',
    status: 'public',
    ecosystems: ['smart-venue', 'smart-campus'],
    groups: ['events', 'offices'],
    benefit: "Let customers see what's free and book with a deposit, with no double bookings.",
    forWho: 'Event halls, studios, meeting rooms and co-working spaces.',
    features: [
      'Show live availability for each hall or room',
      'Offer hourly, half-day and full-day slots',
      'Take deposits online by FPX',
      'Block out dates for maintenance or private events',
      'Send booking confirmations by email and WhatsApp',
      'Collect catering, AV and decoration requests with each booking'
    ],
    rightForYou: [
      'Do you take bookings over WhatsApp and a paper diary?',
      'Have you ever double-booked a room or hall?',
      'Do you chase customers for deposits?'
    ],
    payments:
      'Yes. Deposits are paid online by FPX through ToyyibPay, straight into your own account. We never take a cut of your bookings.',
    stack: ['MySQL', 'Tailwind CSS', 'Vanilla JS', 'ToyyibPay (FPX)']
  },
  {
    slug: 'wss-incidentsystem',
    name: 'Incident Reporting',
    formerName: 'WSS Incident System',
    tier: 'standard',
    status: 'public',
    ecosystems: ['smart-premises', 'smart-warehouse', 'smart-factory'],
    groups: ['security', 'offices'],
    benefit: 'Every safety or security incident recorded with photos, followed up and closed.',
    forWho: 'Factories, offices, condominiums and security teams.',
    features: [
      'Report incidents from a phone, with photos',
      'Rate severity so urgent issues are seen first',
      'Assign follow-up and track it until it is closed',
      'Keep a full audit trail for every incident',
      'Spot recurring problems in monthly reports',
      "Escalate automatically when something isn't handled"
    ],
    rightForYou: [
      'Are incidents reported in WhatsApp groups and then forgotten?',
      'Do you need records for safety audits or committee meetings?',
      'Do you want to see which problems keep coming back?'
    ],
    payments: NO_PAYMENTS,
    stack: ['MySQL', 'Tailwind CSS', 'File attachments']
  },
  {
    slug: 'wss-kiosk',
    name: 'Self-Service Kiosk',
    formerName: 'WSS Kiosk Solution',
    tier: 'standard',
    status: 'public',
    ecosystems: ['smart-venue'],
    groups: ['retail', 'events'],
    benefit: 'Let customers check in, pay or find information themselves, so your counter queue gets shorter.',
    forWho: 'Retail shops, lobbies and service counters.',
    features: [
      'Touchscreen screens for check-in, payment or information',
      'Take payments through your own payment gateway',
      'Print receipts or queue tickets',
      'Change what the kiosk shows from anywhere',
      'See how the kiosk is being used',
      'Show the screens in more than one language'
    ],
    rightForYou: [
      'Do queues build up at your counter?',
      'Do staff answer the same simple questions all day?',
      'Do you have space for a touchscreen near the entrance?'
    ],
    payments:
      'Yes, through your own payment gateway account. Tell us which gateway you use and we\'ll confirm it\'s supported before you buy.',
    hardware: 'Kiosk hardware (touchscreen, stand, receipt printer) is not included; we can source it at cost.',
    language: 'Yes. The kiosk can show its screens in more than one language. Tell us which languages you need.',
    stack: ['MySQL', 'Tailwind CSS', 'Payment gateway support']
  },
  {
    slug: 'wss-digitalform',
    name: 'Digital Forms',
    formerName: 'WSS Digital Form Platform',
    tier: 'basic',
    status: 'public',
    ecosystems: ['smart-clinic', 'smart-workplace'],
    groups: ['offices', 'events'],
    benefit: 'Replace paper forms with online forms that send themselves to the right person, and can take payment.',
    forWho: 'Offices, associations and service businesses that still run on paper forms.',
    features: [
      'Build forms whose questions change with earlier answers',
      'Send each submission to the right person automatically',
      'Collect payment with the form',
      'Track every submission on one dashboard',
      'Export responses to Excel'
    ],
    rightForYou: [
      'Do you still print, scan or retype forms?',
      'Do forms get lost between departments?',
      'Do you collect fees with a form today?'
    ],
    payments:
      'Yes, through your own payment gateway account. Tell us which gateway you use and we\'ll confirm it\'s supported before you buy.',
    stack: ['MySQL', 'Tailwind CSS', 'Payment gateway support']
  },
  {
    slug: 'wss-ebusinesscard',
    name: 'Digital Business Card',
    formerName: 'WSS eBusiness Card',
    tier: 'basic',
    status: 'public',
    groups: ['offices', 'events'],
    benefit: 'Share your contact details with one tap, and update them without reprinting cards.',
    forWho: 'Sales teams and anyone who hands out name cards.',
    features: [
      'Tap an NFC card or show a QR code to share your details',
      'A profile page for every staff member',
      'Capture the details of people you meet',
      'Keep every card on brand with one template',
      'See how often each card is viewed',
      'Update details any time, with no reprinting'
    ],
    rightForYou: [
      'Do you reprint name cards every time a title or number changes?',
      'Does your sales team meet new people every week?',
      'Do you want to know who you met at an event?'
    ],
    payments: NO_PAYMENTS,
    hardware: 'NFC cards are not included; we can source them at cost. QR sharing needs no hardware.',
    stack: ['MySQL', 'Tailwind CSS', 'NFC tag provisioning']
  },
  {
    slug: 'wss-directory',
    name: 'Business Directory',
    formerName: 'WSS Directory',
    tier: 'basic',
    status: 'public',
    groups: ['offices'],
    benefit: 'Run a searchable directory for your association or area, and earn from featured listings.',
    forWho: 'Chambers of commerce, business associations and local guides.',
    features: [
      'Searchable listings with categories and map pins',
      'Businesses submit and claim their own listings',
      'Sell featured placements at different levels',
      'Check reviews before they go live',
      'See listing views and contact clicks',
      'Maps use OpenStreetMap, so there is no map bill'
    ],
    rightForYou: [
      'Do you run an association, chamber or local guide?',
      'Is your member list a PDF or a spreadsheet?',
      'Would members pay to be featured?'
    ],
    payments:
      'Yes. Featured placements are paid online by FPX through your own payment gateway account.',
    stack: ['MySQL', 'Tailwind CSS', 'Leaflet with OpenStreetMap', 'FPX payment gateway']
  },

  /* ── Ecosystem modules (15): sold inside an ecosystem, standalone on request ── */
  { slug: 'wss-emers', name: 'Canteen Meal Redemption', formerName: 'EMERS', tier: 'standard', status: 'ecosystem', ecosystems: ['smart-workplace', 'smart-campus'] },
  { slug: 'wss-smartid', name: 'Smart ID and Access Cards', formerName: 'WSS Smart ID System', tier: 'advanced', status: 'ecosystem', ecosystems: ['smart-premises', 'smart-campus'] },
  { slug: 'wss-rfidtracking', name: 'RFID Tracking', formerName: 'WSS RFID Tracking', tier: 'advanced', status: 'ecosystem', ecosystems: ['smart-warehouse', 'smart-premises', 'smart-factory'] },
  { slug: 'wss-iotboard', name: 'IoT Sensor Dashboard', formerName: 'WSS IoT Board', tier: 'advanced', status: 'ecosystem', ecosystems: ['smart-warehouse', 'smart-factory'] },
  { slug: 'wss-machinemonitoring', name: 'Machine Monitoring', formerName: 'WSS Machine Monitoring', tier: 'advanced', status: 'ecosystem', ecosystems: ['smart-factory'] },
  { slug: 'wss-energysaving', name: 'Energy Monitoring', formerName: 'WSS Energy Saving', tier: 'advanced', status: 'ecosystem', ecosystems: ['smart-factory', 'smart-warehouse'] },
  { slug: 'wss-aikiosk', name: 'AI Self-Order Kiosk', formerName: 'WSS AI Digital Kiosk', tier: 'advanced', status: 'ecosystem', ecosystems: ['smart-outlet', 'smart-clinic'] },
  { slug: 'wss-medcare', name: 'Clinic Management', formerName: 'WSS MedCare Clinic', tier: 'advanced', status: 'ecosystem', ecosystems: ['smart-clinic'] },
  { slug: 'wss-smarthostel', name: 'Hostel Management', formerName: 'WSS Smart Hostel', tier: 'advanced', status: 'ecosystem', ecosystems: ['smart-campus'] },
  { slug: 'wss-safepickup', name: 'Safe Student Pick-Up', formerName: 'SafePickup', tier: 'standard', status: 'ecosystem', ecosystems: ['smart-campus'] },
  { slug: 'wss-edupurs', name: 'Student Cashless Card', formerName: 'EDUPURS', tier: 'standard', status: 'ecosystem', ecosystems: ['smart-campus'] },
  { slug: 'wss-epurs', name: 'Cashless Canteen Wallet', formerName: 'EPURS', tier: 'standard', status: 'ecosystem', ecosystems: ['smart-workplace'] },
  { slug: 'wss-fabs', name: 'Facility Booking', formerName: 'FABS', tier: 'standard', status: 'ecosystem', ecosystems: ['smart-premises', 'smart-workplace'] },
  { slug: 'wss-ticketflow', name: 'Event Ticketing', formerName: 'WSS TicketFlow', tier: 'standard', status: 'ecosystem', ecosystems: ['smart-venue'] },
  { slug: 'wss-eventgallery', name: 'Event Photo Gallery', formerName: 'WSS Event Gallery', tier: 'basic', status: 'ecosystem', ecosystems: ['smart-venue'] },

  /* ── On request (3) ──────────────────────────────────────────────────── */
  { slug: 'wss-buildright', name: 'Contractor Sales Pipeline (CRM)', formerName: 'WSS BuildRight CRM', tier: 'standard', status: 'on-request' },
  { slug: 'wss-epelanggan', name: 'Virtual Service Counter', formerName: 'WSS E-Pelanggan', tier: 'standard', status: 'on-request' },
  { slug: 'wss-bats', name: 'School and Staff Bus Tracking', formerName: 'BATS', tier: 'standard', status: 'on-request', note: 'GPS hardware and tracking costs need scoping per fleet.' },

  /* ── Hold (8) ────────────────────────────────────────────────────────── */
  { slug: 'wss-aimeetingnotes', name: 'AI Meeting Notes', formerName: 'WSS AI Meeting Notes', tier: 'standard', status: 'hold', note: 'AI accuracy and recording consent.' },
  { slug: 'wss-digitalcontentai', name: 'AI Content Generator', formerName: 'WSS Digital Content AI', tier: 'standard', status: 'hold', note: 'AI accuracy and copyright of outputs.' },
  { slug: 'wss-aiphone', name: 'AI Phone Receptionist', formerName: 'WSS AI Phone System', tier: 'advanced', status: 'hold', note: 'Call recording consent and telco costs.' },
  { slug: 'wss-aivoice', name: 'AI Voice Assistant', formerName: 'WSS AI Voice Solution', tier: 'advanced', status: 'hold', note: 'Recording consent and AI accuracy.' },
  { slug: 'wss-vrar', name: 'VR/AR Experiences', formerName: 'WSS VR / AR Solutions', tier: null, status: 'hold', note: 'Not an SME purchase.' },
  { slug: 'wss-servercloud', name: 'Server and Cloud Setup', formerName: 'WSS Server / Cloud Solutions', tier: null, status: 'hold', note: 'Developer service with high support risk.' },
  { slug: 'wss-webportals', name: 'Web Portals', formerName: 'WSS Web Portals', tier: null, status: 'hold', note: 'Developer service, better sold as a Custom build.' },
  { slug: 'wss-training', name: 'Training and Teambuilding', formerName: 'WSS Training and Teambuilding', tier: null, status: 'hold', note: 'A training service, not software. Off-strategy for a software studio (audit 1.2).' }
];

export const PUBLIC_SYSTEMS = SYSTEMS.filter((s) => s.status === 'public');

export const getSystem = (slug: string) => SYSTEMS.find((s) => s.slug === slug);

export const systemPrice = (system: SystemProduct) => (system.tier ? SYSTEM_TIERS[system.tier].price : null);

/** Common answers shared by every public system page (audit P6: 10 questions). */
export const COMMON_SYSTEM_FAQ: QA[] = [
  {
    q: 'What do I need to run it?',
    a: 'A web hosting account that runs PHP 8.2 or newer with a MySQL database, such as cPanel shared hosting or a small VPS from any host you like. You pay the host directly. Not sure which to pick? Ask us and we\'ll recommend one, or add Installation and we\'ll set everything up. The install guide lists the exact server requirements; ask for them before you buy.'
  },
  {
    q: 'Can you install it for me?',
    a: 'Yes. Installation is RM369. We install it on your hosting, connect your domain with SSL, create your admin account and do a test run with you, within 3 working days.'
  },
  {
    q: 'What support is included?',
    a: '30 days of WhatsApp support from the builder, plus bug fixes for 30 days. After that, choose a Care Plan or pay per fix.'
  },
  {
    q: 'Do I get updates?',
    a: 'Yes, for 12 months: security patches and improvements to the standard product, delivered as downloadable releases with release notes. Installing an update is free on a Care Plan, otherwise RM219 per installation. If you have customised your copy, adapting an update to your changes is quoted separately.'
  },
  {
    q: 'Can I customise it?',
    a: 'Yes, you get the full source code. Branding and up to 2 small changes (a field, a report column, a label) start from RM669. Bigger changes get a fixed quote before any work starts.'
  },
  {
    q: 'Is there a refund?',
    a: "Yes, in one situation: if the system can't be installed by following the guide and we can't fix it, you get a full refund within 14 days of purchase. See the Refund Policy for the details."
  },
  {
    q: 'How many users can use it?',
    a: 'There are no per-user fees. One licence covers one business and one live installation, plus a test copy. How many people use it at once depends on your server.'
  },
  {
    q: 'Where is my data stored?',
    a: "On your own hosting, in the location you choose. We don't keep a copy. If you ask us to host or maintain it under a Care Plan, we sign a Data Processing Agreement with you first."
  },
  {
    q: 'Is it really mine?',
    a: "You get a perpetual licence with the full source code: use it, change it and host it forever, with no monthly fee and no kill switch. You can't resell it or offer it to other businesses as a service. The Licence Agreement has the full terms."
  },
  {
    q: 'Can I see it working before I buy?',
    a: 'Yes. Book a 15-minute screen-share and we\'ll walk you through the system with sample data, and answer your questions.'
  }
];

export const DEFAULT_LANGUAGE_ANSWER =
  'The standard interface is in English. Adding Bahasa Malaysia labels is a customisation, from RM669.';
