import type { ClipKey } from './media';
import type { FaqItem } from './faq';

// The sectors WSS DevLabs builds for. Each one drives a card on the home page,
// a row on /solutions and a full page at /solutions/<slug>.

export type SectorUseCase = {
  title: string;
  body: string;
  /** A looping clip from media.ts, or a still image URL. Clip wins when both are set. */
  clip?: ClipKey;
  image?: string;
  href?: string;
};

export type StackLayer = 'sense' | 'connect' | 'understand' | 'act';

export type Sector = {
  slug: string;
  name: string;
  /** H1 on the sector page: `titleLead` + highlighted `titleHighlight`. */
  titleLead: string;
  titleHighlight: string;
  summary: string;
  intro: string;
  problem: string;
  image: string;
  /** Page hero clip (sector page only). */
  clip: ClipKey;
  /** Home page sector-scroller clip, so the home page never repeats the sector page visuals. */
  teaserClip: ClipKey;
  stack: Record<StackLayer, string[]>;
  useCases: SectorUseCase[];
  outcomes: string[];
  demos: string[];
  related: { label: string; href: string }[];
  whyNow?: { text: string; href: string; linkLabel: string };
  faqs: FaqItem[];
};

const u = (id: string, w = 1200, h = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=75`;

export const STACK_LAYERS: { key: StackLayer; label: string; verb: string }[] = [
  { key: 'sense', label: 'Sense', verb: 'Sensors, cameras and records capture what is happening.' },
  { key: 'connect', label: 'Connect', verb: 'Networks and integrations move the data to one place.' },
  { key: 'understand', label: 'Understand', verb: 'AI, analytics and digital twins turn it into answers.' },
  { key: 'act', label: 'Act', verb: 'Alerts, automation and reports put it to work.' }
];

export const SECTORS: Sector[] = [
  {
    slug: 'agriculture',
    name: 'Agriculture',
    titleLead: 'Smart farming for',
    titleHighlight: 'Malaysian growers',
    summary:
      'Weather stations, soil sensors, CCTV with AI detection and a farm system that ties them together.',
    intro:
      'You can’t walk every block every day. We put sensors, cameras and AI in the field so you see rain, soil moisture, pests, disease and intruders from one screen, and act on them the same day.',
    problem:
      'Most farm decisions still run on memory, WhatsApp photos and a walk around the field. By the time someone spots leaf blight or a broken fence, the damage is done.',
    image: u('1592982537447-7440770cbfc9'),
    clip: 'cropIrrigation',
    teaserClip: 'agriField',
    stack: {
      sense: [
        'Weather station: rain, wind, temperature, humidity',
        'Soil moisture, pH and EC probes',
        'CCTV and thermal cameras at boundaries and stores',
        'Drone and phone photos of leaves and canopy'
      ],
      connect: [
        'LoRaWAN or 4G gateways for remote blocks',
        'Solar-powered nodes where there is no grid',
        'Offline buffering when the signal drops'
      ],
      understand: [
        'AI detection of animals, people and vehicles',
        'Leaf disease detection from photos',
        'Rain, yield and input history per block',
        'A digital twin of the farm map'
      ],
      act: [
        'WhatsApp alerts to the right supervisor',
        'Irrigation and fertigation valves on schedule or threshold',
        'Task lists for workers in the farm app',
        'Reports for owners, buyers and grant audits'
      ]
    },
    useCases: [
      {
        title: 'Wild animal alerts',
        body: 'Cameras at the forest edge detect elephants, wild boar and monkeys and alert your team before they reach the crop.',
        clip: 'monkey'
      },
      {
        title: 'Plant disease detection',
        body: 'A worker photographs a leaf in the app. The model names the likely disease and the treatment your agronomist approved.',
        image: u('1625246333195-78d9c38ad449')
      },
      {
        title: 'Weather-led irrigation',
        body: 'A weather station and soil probes decide when to irrigate, so you stop watering before rain and stop guessing in a dry spell.',
        clip: 'tropicalRain'
      },
      {
        title: 'Plantation digital twin',
        body: 'A live map of every block with sensor readings, tasks and harvest history, so a manager in KL sees what the mandor sees.',
        clip: 'jungleRiver'
      },
      {
        title: 'Farm management system',
        body: 'Blocks, workers, harvest, inputs and costs in one system instead of five notebooks and a spreadsheet.',
        image: u('1560493676-04071c5f467b')
      },
      {
        title: 'Drone surveys',
        body: 'Regular drone flights turn into canopy maps that show stressed or missing trees block by block.',
        image: u('1473968512647-3e447244af8f')
      }
    ],
    outcomes: [
      'You hear about intruders and disease within minutes, not at the next field walk.',
      'Water and fertiliser go where the data says, not where habit says.',
      'Every block has a record you can show a buyer, an auditor or a bank.',
      'Supervisors spend less time reporting and more time fixing.'
    ],
    demos: ['wildlife-detection', 'plant-disease', 'plantation-twin'],
    related: [
      { label: 'AI & Automation services', href: '/services/artificial-intelligence-automation' },
      { label: 'IoT Solutions & Infrastructure', href: '/services/iot-solutions-infrastructure' },
      { label: 'Ready-made systems', href: '/marketplace' }
    ],
    whyNow: {
      text: 'Budget 2027 gives the Ministry of Agriculture and Food Security RM6.92 billion, with local food production and farmer resilience as the stated priorities.',
      href: '/insights/budget-2027-agriculture-food-security-tech',
      linkLabel: 'What Budget 2027 means for farm tech'
    },
    faqs: [
      {
        question: 'Do we need internet coverage across the whole farm?',
        answer:
          'No. Sensors in remote blocks send data over LoRaWAN to one gateway near the office or a 4G point. If the signal drops, nodes store readings and send them when it returns.'
      },
      {
        question: 'Can the AI detect animals at night?',
        answer:
          'Yes, with infrared or thermal cameras. We check light, distance and camera angle on a site visit first, because those decide how well detection works.'
      },
      {
        question: 'Can we start small?',
        answer:
          'Yes. Most farms start with one weather station, a few soil probes or two cameras on the worst boundary. You watch the data for a month, then decide what to add.'
      }
    ]
  },
  {
    slug: 'biomass',
    name: 'Biomass',
    titleLead: 'AI and digital twins for',
    titleHighlight: 'the biomass industry',
    summary:
      'Feedstock tracking, moisture grading, plant monitoring and digital twins for palm biomass, wood pellet and biomass power operators.',
    intro:
      'Biomass margins depend on what goes into the boiler: how wet it is, how much arrived and what it cost to move. We connect weighbridges, sensors and cameras to one system and model the plant as a digital twin, so you plan on data instead of averages.',
    problem:
      'Empty fruit bunches, fibre, shell and wood waste arrive wet, mixed and on irregular trucks. Operators guess moisture, chase delivery notes and find problems after boiler output drops.',
    image: u('1513828583688-c52646db42da'),
    clip: 'industrialSite',
    teaserClip: 'factoryTop',
    stack: {
      sense: [
        'Weighbridge and truck-in records',
        'Moisture and temperature probes in storage piles',
        'Cameras on conveyors and tipping areas',
        'Energy meters, boiler and dryer sensors'
      ],
      connect: [
        'PLC and SCADA data links (Modbus, OPC UA)',
        'Mill-to-plant delivery records',
        'Cloud or on-site server, your choice'
      ],
      understand: [
        'Feedstock grading from camera images',
        'Moisture trends and pile fire-risk warnings',
        'Digital twin of flows, stock and output',
        'Weekly supply and output forecasts'
      ],
      act: [
        'Alerts when a pile overheats or a dryer drifts',
        'Supplier scorecards and payment by quality',
        'Daily production and stock dashboard',
        'Traceability and emissions reports for buyers'
      ]
    },
    useCases: [
      {
        title: 'Feedstock intake and grading',
        body: 'Every truck is weighed, photographed and graded, so you pay suppliers on measured quality.',
        clip: 'grainStore'
      },
      {
        title: 'Plant digital twin',
        body: 'A live model of conveyors, dryers and boiler shows where material and energy are lost, and lets you test a change before you make it.',
        clip: 'plantCorridor'
      },
      {
        title: 'Pile and dryer monitoring',
        body: 'Temperature probes in storage piles warn your team before self-heating turns into a fire.',
        image: u('1581091226825-a6a2a5aee158')
      },
      {
        title: 'Predictive maintenance',
        body: 'Vibration and current sensors on shredders and fans flag wear early, so you replace parts on your schedule.',
        clip: 'machinery'
      },
      {
        title: 'Supply forecasting',
        body: 'Mill output, weather and transport data predict next month’s feedstock, so you sign contracts with numbers.',
        image: u('1590682680695-43b964a3ae17')
      },
      {
        title: 'Traceability for buyers',
        body: 'Batch records from mill to shipment for buyers who ask where the biomass came from.',
        clip: 'cloudData'
      }
    ],
    outcomes: [
      'You know the moisture and weight of every load before it reaches the boiler.',
      'Maintenance happens before a breakdown stops the line.',
      'Buyers, auditors and investors get records, not estimates.',
      'Managers try changes on the digital twin first.'
    ],
    demos: ['plantation-twin', 'energy-twin', 'waste-to-energy'],
    related: [
      { label: 'AI & Automation services', href: '/services/artificial-intelligence-automation' },
      { label: 'IoT Solutions & Infrastructure', href: '/services/iot-solutions-infrastructure' },
      { label: 'Waste-to-energy solutions', href: '/solutions/waste-to-energy' }
    ],
    whyNow: {
      text: 'The 2027 feed-in tariff quota, announced in September 2026, sets aside 120MW for biomass and 30MW for biogas projects in Peninsular Malaysia and Labuan.',
      href: '/insights/biomass-biogas-fit-quota-2027',
      linkLabel: 'Read: the 2027 FiT quota explained'
    },
    faqs: [
      {
        question: 'What is a digital twin, in plain terms?',
        answer:
          'A live software model of your plant. It shows the same flows, stock and machine readings as the real site, updated from sensors, so you can spot problems and try changes on screen first.'
      },
      {
        question: 'Can you work with our existing PLC or SCADA?',
        answer:
          'Usually yes. We read data from common industrial protocols such as Modbus and OPC UA, or from your historian, without changing how the plant is controlled.'
      },
      {
        question: 'Is this only for palm biomass?',
        answer:
          'No. The same approach works for wood chips, pellets, rice husk and other agricultural residues.'
      }
    ]
  },
  {
    slug: 'smart-city',
    name: 'Smart City',
    titleLead: 'Smart city tech for',
    titleHighlight: 'councils and townships',
    summary:
      'CCTV analytics, flood and air sensors, smart lighting and city dashboards for councils, developers and building managers.',
    intro:
      'Cities already own thousands of cameras and street assets. We connect them, add sensors where data is missing, and give your team one dashboard for traffic, floods, parking, lighting and complaints.',
    problem:
      'Flash floods, jammed junctions and dark streets show up first as angry posts on social media. Most councils and township managers find out after residents do.',
    image: u('1508062878650-88b52897f298'),
    clip: 'cityDusk',
    teaserClip: 'cityAvenue',
    stack: {
      sense: [
        'Existing CCTV with AI analytics',
        'Water-level and rain gauges at flood hotspots',
        'Air quality and noise sensors',
        'Smart meters and street-light controllers'
      ],
      connect: [
        '4G, fibre and LoRaWAN networks',
        'Links to existing CCTV recorders',
        'Open APIs for council systems'
      ],
      understand: [
        'Vehicle and people counting',
        'Flood early warning from rising levels',
        'Parking occupancy',
        'Digital twin of a township or district'
      ],
      act: [
        'Alerts to operators and residents',
        'Public dashboards and open data',
        'Lighting dimmed or raised on schedule',
        'Work orders for maintenance teams'
      ]
    },
    useCases: [
      {
        title: 'Traffic and crowd analytics',
        body: 'Existing CCTV counts vehicles and people at junctions, markets and events. Most sites need no new cameras.',
        clip: 'rainyTraffic'
      },
      {
        title: 'Flood early warning',
        body: 'Water-level sensors in drains and rivers alert your team and residents when levels pass a set mark.',
        clip: 'streetRain'
      },
      {
        title: 'Command centre dashboards',
        body: 'One screen for cameras, sensors, complaints and work orders, built for the operators who watch it all day.',
        clip: 'securityDesk'
      },
      {
        title: 'Township digital twin',
        body: 'A 3D model of the township with live sensor, asset and complaint data on one map.',
        clip: 'cityBuild'
      },
      {
        title: 'Smart street lighting',
        body: 'Lights report their own faults and dim when streets are empty, cutting energy bills and night-time complaints.',
        clip: 'pedestrianLight'
      },
      {
        title: 'Resident reporting app',
        body: 'Residents report potholes and fallen trees with a photo and location. Your team sees the queue and closes the loop.',
        image: u('1580910051074-3eb694886505')
      }
    ],
    outcomes: [
      'Operators see incidents before the public posts about them.',
      'You plan roads, lighting and drainage with counts, not complaints.',
      'Residents get early warnings and updates they can trust.',
      'Cameras you already paid for start producing data.'
    ],
    demos: ['traffic-counting', 'cctv-analytics'],
    related: [
      { label: 'AI & Automation services', href: '/services/artificial-intelligence-automation' },
      { label: 'IoT Solutions & Infrastructure', href: '/services/iot-solutions-infrastructure' },
      { label: 'Energy & sustainability', href: '/solutions/energy-sustainability' }
    ],
    whyNow: {
      text: 'Budget 2027 puts RM100 million into Klang Valley retention ponds and river maintenance, and close to RM320 million into slopes, drains and ditches nationwide.',
      href: '/insights/budget-2027-liveable-cities-flood-tech',
      linkLabel: 'Read: Budget 2027 and liveable cities'
    },
    faqs: [
      {
        question: 'Can you use our existing CCTV cameras?',
        answer:
          'In most cases, yes. We pull video from your recorders and run analytics on a local server or in the cloud. We check camera angle and resolution first.'
      },
      {
        question: 'How do you handle privacy?',
        answer:
          'We count and detect, and we do not identify people by default. Footage stays on your servers, access is logged, and the setup follows the PDPA.'
      },
      {
        question: 'Do you work with developers and building managers too?',
        answer:
          'Yes. Township developers, malls and campuses use the same tools at a smaller scale.'
      }
    ]
  },
  {
    slug: 'energy-sustainability',
    name: 'Energy & Sustainability',
    titleLead: 'AI for energy and',
    titleHighlight: 'sustainability',
    summary:
      'Energy monitoring, solar analytics, load forecasting and carbon reporting for factories, buildings and solar owners.',
    intro:
      'Electricity is one of the biggest bills an SME pays and one of the least understood. We meter it, model it and use AI to find waste, forecast demand and back your carbon numbers with measured data.',
    problem:
      'Most businesses see one number a month: the electricity bill. You can’t cut what you can’t see by machine, by hour and by site.',
    image: u('1497435334941-8c899ee9e8e9'),
    clip: 'solarRows',
    teaserClip: 'windFarm',
    stack: {
      sense: [
        'Smart meters and current clamps per machine or floor',
        'Solar inverter and battery data',
        'Temperature, occupancy and air-con sensors',
        'Fuel and generator logs'
      ],
      connect: [
        'Modbus and inverter APIs',
        'Building management system links',
        'Secure cloud dashboard'
      ],
      understand: [
        'Load profiles and peak-demand analysis',
        'Anomaly detection on machines and chillers',
        'Solar yield against expected yield',
        'Emissions by scope and by site'
      ],
      act: [
        'Alerts when consumption spikes',
        'Schedules for air-con, pumps and compressors',
        'Solar cleaning and maintenance tickets',
        'Sustainability reports for buyers and banks'
      ]
    },
    useCases: [
      {
        title: 'Solar performance analytics',
        body: 'Compare actual solar yield with what the weather says you should get, and catch dirty panels or failed strings early.',
        clip: 'solarInstall'
      },
      {
        title: 'Energy monitoring by machine',
        body: 'Meters on each line or floor show where every kilowatt-hour goes, hour by hour.',
        image: u('1544724569-5f546fd6f2b5')
      },
      {
        title: 'Site digital twin',
        body: 'A model of your building or solar site with live energy, temperature and occupancy data, so you test changes before you spend.',
        clip: 'solarRoof'
      },
      {
        title: 'AI load forecasting',
        body: 'Forecast tomorrow’s demand to avoid peak charges and plan battery use.',
        clip: 'hudGraph'
      },
      {
        title: 'Carbon and ESG reporting',
        body: 'Turn meter and fuel data into the emissions figures your buyers and lenders now ask for.',
        image: u('1542601906990-b4d3fb778b09')
      },
      {
        title: 'Data centre and server rooms',
        body: 'Power, cooling and temperature monitoring for server rooms, where an hour of overheating costs more than the sensors.',
        clip: 'serverLights'
      }
    ],
    outcomes: [
      'You see waste by machine and by hour, not one number a month.',
      'Solar faults surface in days instead of at the yearly service.',
      'Your sustainability report rests on measured data.',
      'Buyers and banks get the numbers they ask for.'
    ],
    demos: ['energy-twin'],
    related: [
      { label: 'AI & Automation services', href: '/services/artificial-intelligence-automation' },
      { label: 'IoT Solutions & Infrastructure', href: '/services/iot-solutions-infrastructure' },
      { label: 'Waste-to-energy solutions', href: '/solutions/waste-to-energy' }
    ],
    whyNow: {
      text: 'Budget 2027 extends investment tax allowances of up to 100% for green technology projects and for companies buying green assets for their own use, until 31 December 2030.',
      href: '/insights/budget-2027-green-energy-incentives',
      linkLabel: 'Read: Budget 2027 green incentives'
    },
    faqs: [
      {
        question: 'Do we have to replace our meters?',
        answer:
          'No. We add clamp-on sensors or read your existing smart meters and inverters. Installation rarely needs a production shutdown.'
      },
      {
        question: 'Can this help with sustainability reporting?',
        answer:
          'Yes. We convert energy and fuel data into emissions figures and export them in the format your auditor or buyer requests.'
      },
      {
        question: 'We already have solar. What would you add?',
        answer:
          'A check on whether it produces what it should. Many systems lose output to dirt, shading or failed strings for months before anyone notices.'
      }
    ]
  },
  {
    slug: 'waste-to-energy',
    name: 'Waste-to-Energy',
    titleLead: 'Monitoring and AI for',
    titleHighlight: 'waste-to-energy',
    summary:
      'Biogas and waste-to-energy plant monitoring, AI waste sorting, digital twins and investor reporting.',
    intro:
      'Waste-to-energy plants depend on steady feedstock and stable digesters. We give operators live data on what comes in, what the process is doing and what goes out to the grid.',
    problem:
      'Digesters and boilers drift for hours before anyone notices. Feedstock records sit on paper, and investors wait weeks for numbers that should be on a screen.',
    image: u('1611284446314-60a58ac0deb9'),
    clip: 'dumpSite',
    teaserClip: 'landfillTruck',
    stack: {
      sense: [
        'Feedstock weighing and camera grading',
        'Digester pH, temperature, pressure and gas flow',
        'Methane and H2S gas analysers',
        'Generator and grid export meters'
      ],
      connect: [
        'PLC and SCADA integration',
        'Secure remote access for off-site engineers',
        'Cloud dashboard for owners and investors'
      ],
      understand: [
        'Digester stability models and early warnings',
        'AI waste classification',
        'Digital twin of the process line',
        'Energy output against feedstock analysis'
      ],
      act: [
        'Alarms by WhatsApp, SMS and email',
        'Feeding schedules adjusted to the data',
        'Daily operating and export reports',
        'Emissions and carbon credit records'
      ]
    },
    useCases: [
      {
        title: 'POME biogas monitoring',
        body: 'Live pH, temperature and gas readings from palm oil mill effluent digesters, with alerts before a digester sours.',
        clip: 'substation'
      },
      {
        title: 'AI waste sorting',
        body: 'Cameras on the line classify plastics, organics and contaminants so you pull rejects before they reach the process.',
        clip: 'wasteSorting'
      },
      {
        title: 'Process digital twin',
        body: 'Model the full line from tipping floor to grid meter and see where energy is lost.',
        image: u('1503387762-592deb58ef4e')
      },
      {
        title: 'Feedstock logistics',
        body: 'Collection routes, weights and supplier records in one system, ready for audits.',
        image: u('1532996122724-e3c354a0b15b')
      },
      {
        title: 'Investor reporting',
        body: 'Daily output, uptime and export figures on a dashboard investors and lenders can log in to.',
        clip: 'dataHud'
      },
      {
        title: 'Carbon credit evidence',
        body: 'Measured methane capture and energy export data, stored for verification.',
        clip: 'powerLines'
      }
    ],
    outcomes: [
      'Operators catch digester problems hours earlier.',
      'Feedstock records are complete and audit-ready.',
      'Owners and investors see output without waiting for a monthly report.',
      'Engineers support the plant without driving to it.'
    ],
    demos: ['waste-to-energy', 'energy-twin'],
    related: [
      { label: 'Biomass solutions', href: '/solutions/biomass' },
      { label: 'IoT Solutions & Infrastructure', href: '/services/iot-solutions-infrastructure' },
      { label: 'AI & Automation services', href: '/services/artificial-intelligence-automation' }
    ],
    whyNow: {
      text: 'The 2027 feed-in tariff quota includes 30MW for biogas. Bidding runs from 3 February to 24 March 2027, and bidders need clean operating data.',
      href: '/insights/biomass-biogas-fit-quota-2027',
      linkLabel: 'Read: the 2027 FiT quota explained'
    },
    faqs: [
      {
        question: 'Do you build the plant itself?',
        answer:
          'No. We work with plant owners, EPC contractors and operators on the monitoring, software, AI and reporting layer.'
      },
      {
        question: 'Can engineers reach the system off-site?',
        answer:
          'Yes, through secure remote access with logged sign-ins and role-based permissions.'
      },
      {
        question: 'Can you work with an existing plant?',
        answer:
          'Yes. Most projects add sensors and software to a running plant. We plan installs around your maintenance windows.'
      }
    ]
  },
  {
    slug: 'digital-foundations',
    name: 'Websites, Apps & IoT',
    titleLead: 'Websites, apps and',
    titleHighlight: 'basic IoT',
    summary:
      'Fast websites, mobile apps, business systems, cloud setup and simple connected devices, from the same team.',
    intro:
      'Every solution on this site runs on the basics: a website people trust, apps your team opens every day, and devices that send reliable data. We build those too, with fixed prices for the common needs.',
    problem:
      'Many businesses pay for a website nobody updates, an app nobody opens and a system that doesn’t talk to the others.',
    image: u('1581094794329-c8112a89af12'),
    clip: 'code',
    teaserClip: 'circuitMachine',
    stack: {
      sense: [
        'Contact forms, bookings and orders',
        'Simple sensors: temperature, door, power, water',
        'Barcode and QR scanning'
      ],
      connect: [
        'Cloud hosting, domains and email',
        'APIs between your systems',
        'WhatsApp and payment gateways'
      ],
      understand: [
        'Visitor and sales analytics',
        'Stock and order dashboards',
        'Reports by branch and by staff'
      ],
      act: [
        'Online payment and booking',
        'Automated reminders and follow-ups',
        'Device alerts to your phone'
      ]
    },
    useCases: [
      {
        title: 'Websites in days',
        body: 'Fixed-price websites through WSS Express, with speed and search built in.',
        image: u('1563013544-824ae1b704d3'),
        href: '/express'
      },
      {
        title: 'Ready-made business systems',
        body: 'POS, inventory, HR and more from the Marketplace. Buy once and own the code.',
        clip: 'officeDocs',
        href: '/marketplace'
      },
      {
        title: 'Custom apps and systems',
        body: 'Customer and staff apps for Android, iOS and the web, built when nothing off the shelf fits.',
        clip: 'phoneTyping'
      },
      {
        title: 'Basic IoT',
        body: 'Cold-room temperature alarms, door sensors and power monitoring that alert your phone.',
        image: u('1558002038-1055907df827')
      },
      {
        title: 'Cloud and servers',
        body: 'Domains, email, hosting, backups and security, set up properly and documented.',
        clip: 'fiberOptics'
      },
      {
        title: 'Analytics dashboards',
        body: 'Sales, stock and visitor numbers on one screen instead of three exports.',
        clip: 'multiScreens'
      }
    ],
    outcomes: [
      'Your website loads fast and brings in enquiries.',
      'Your systems share data instead of copies.',
      'You own the code and the accounts.',
      'Everything connects later if you add AI or IoT.'
    ],
    demos: ['cctv-analytics'],
    related: [
      { label: 'WSS Express websites', href: '/express' },
      { label: 'The Marketplace', href: '/marketplace' },
      { label: 'Web, system & app development', href: '/services/web-software-app-development' }
    ],
    whyNow: {
      text: 'Budget 2027 extends the accelerated capital allowance for ICT hardware to 31 December 2030 and lowers the MSME tax rate on the first RM150,000 of chargeable income to 14%.',
      href: '/insights/budget-2027-what-it-means-for-sme-digitalisation',
      linkLabel: 'Read: Budget 2027 for SMEs'
    },
    faqs: [
      {
        question: 'Can I start with just a website?',
        answer:
          'Yes. Most clients start with one piece. What we build connects later when you add more.'
      },
      {
        question: 'Do I own what you build?',
        answer:
          'Yes. You get the source code and the accounts, so you are never locked in to us.'
      },
      {
        question: 'What counts as basic IoT?',
        answer:
          'Small connected devices that measure one thing and alert you: a freezer temperature, a door left open, a pump that stopped. They are cheap to start with.'
      }
    ]
  },
  {
    slug: 'sme-digital-shift',
    name: 'SME Digital Shift',
    titleLead: 'Move your SME to digital,',
    titleHighlight: 'with training',
    summary:
      'CCTV with AI, office IoT, HR, ERP and stock systems connected, plus hands-on classes for your team.',
    intro:
      'Going digital takes more than buying software. We install the cameras and devices, connect your HR, accounting, ERP and stock systems so data flows once, and train your people until they run it without calling us.',
    problem:
      'Most SMEs already pay for three or four systems that don’t talk to each other. Staff re-type the same data, owners wait for reports, and someone checks the CCTV only after stock goes missing.',
    image: u('1557597774-9d273605dfa9'),
    clip: 'opsCentre',
    teaserClip: 'brainstorm',
    stack: {
      sense: [
        'CCTV with AI detection',
        'Door access and attendance devices',
        'Office energy and environment sensors',
        'Barcode scanners in the store'
      ],
      connect: [
        'HRM, payroll, ERP, accounting and stock integration',
        'E-invoicing ready data',
        'Single sign-on for staff'
      ],
      understand: [
        'Owner dashboard: sales, stock, attendance, cash',
        'AI summaries of daily operations',
        'Alerts on stock-outs and unusual activity'
      ],
      act: [
        'Payroll inputs straight from attendance',
        'Purchase orders when stock runs low',
        'Staff trained to run it themselves'
      ]
    },
    useCases: [
      {
        title: 'CCTV with AI',
        body: 'Cameras that alert you to after-hours movement, crowding or an open till, instead of hours of footage nobody watches.',
        clip: 'cctvFeed'
      },
      {
        title: 'Training and classes',
        body: 'Hands-on classes for owners and staff: digital basics, AI tools at work, your new systems and digital marketing.',
        clip: 'boardroom'
      },
      {
        title: 'HR, ERP and stock, connected',
        body: 'One sale updates stock, invoice and report in a single step, because your systems finally share data.',
        image: u('1586528116311-ad8dd3c8310d')
      },
      {
        title: 'Smart office IoT',
        body: 'Door access, attendance, air-con schedules and energy monitoring in one app.',
        clip: 'busyOffice'
      },
      {
        title: 'Owner dashboard',
        body: 'Sales, stock, cash and attendance for every branch on your phone.',
        clip: 'chartsDesk'
      },
      {
        title: 'Digital marketing',
        body: 'Google Business Profile, social media and ads, run with the customer data your systems already collect.',
        clip: 'whatsapp'
      }
    ],
    outcomes: [
      'Staff key in data once.',
      'You see the business on your phone, by branch.',
      'Your team runs the systems without calling the vendor.',
      'CCTV starts preventing losses instead of recording them.'
    ],
    demos: ['cctv-analytics', 'training'],
    related: [
      { label: 'Digital consulting & solutions', href: '/services/digital-consulting-solutions' },
      { label: 'Digital design & media marketing', href: '/services/digital-design-media-marketing' },
      { label: 'Ready-made systems', href: '/marketplace' }
    ],
    whyNow: {
      text: 'Budget 2027 includes an RM30 million MDEC fund to help 4,000 MSMEs adopt AI and automation. Application details are still to be announced.',
      href: '/insights/budget-2027-what-it-means-for-sme-digitalisation',
      linkLabel: 'Read: Budget 2027 for SMEs'
    },
    faqs: [
      {
        question: 'We already use HR and accounting software. Do we have to replace them?',
        answer:
          'No. We connect what you have where it offers an API or export, and replace a system only when it can’t be connected.'
      },
      {
        question: 'Is training only for systems you install?',
        answer:
          'No. We run general classes on digital basics, AI tools at work and digital marketing for any team.'
      },
      {
        question: 'Can classes be in Bahasa Malaysia?',
        answer: 'Yes. We teach in Bahasa Malaysia or English, at your office or online.'
      }
    ]
  }
];

export const getSector = (slug: string) => SECTORS.find((s) => s.slug === slug);

/** Classes offered under the SME Digital Shift programme. */
export const TRAINING_CLASSES = [
  {
    title: 'Digital basics for teams',
    body: 'Email, cloud files, passwords, WhatsApp Business and scam awareness.',
    length: 'Half day'
  },
  {
    title: 'AI tools at work',
    body: 'Using ChatGPT and Copilot for quotes, emails and reports, and what data never to paste in.',
    length: 'Half day'
  },
  {
    title: 'Your new system',
    body: 'Role-by-role training on the systems we install, with a printed quick guide.',
    length: '1 to 2 days'
  },
  {
    title: 'Digital marketing for owners',
    body: 'Google Business Profile, social posting and the basics of paid ads.',
    length: 'Full day'
  },
  {
    title: 'Data and dashboards',
    body: 'Reading reports, cleaning spreadsheets and building a first dashboard.',
    length: 'Full day'
  }
];
