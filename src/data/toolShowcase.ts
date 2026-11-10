// Real software and hardware shown in the "Real tools, real hardware" slideshow on each service category page.
// Every image is open-licensed: Wikimedia Commons (licence per slide) or the ThingsBoard docs repo (Apache-2.0).
// The credit line on each slide is what the licence asks for: keep it when changing images.
// Originals and the download script live outside the repo; images are resized WebP in public/images/tools/.

export type ToolSlide = {
  img: string;
  name: string;
  caption: string;
  /** 'contain' for software screenshots (show the whole screen), 'cover' for photos */
  fit: 'contain' | 'cover';
  credit: string;
  license: string;
  source: string;
};

const TB = 'https://github.com/thingsboard/thingsboard.github.io/blob/master/images/demo/';
const C = (file: string) => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`;

const S = {
  tbEnergy: { img: '/images/tools/tb-energy.webp', name: 'ThingsBoard', caption: 'Energy monitoring dashboard: live power, voltage and consumption for every meter.', fit: 'contain', credit: 'ThingsBoard documentation', license: 'Apache-2.0', source: `${TB}energy-monitoring-dashboard.png` },
  tbSilos: { img: '/images/tools/tb-silos.webp', name: 'ThingsBoard', caption: 'Grain silo monitoring: weight, temperature and humidity for each silo, with events on the side.', fit: 'contain', credit: 'ThingsBoard documentation', license: 'Apache-2.0', source: `${TB}silos-monitoring-dashboard.png` },
  tbEnv: { img: '/images/tools/tb-env.webp', name: 'ThingsBoard', caption: 'Environmental monitoring across many sites, placed on a map.', fit: 'contain', credit: 'ThingsBoard documentation', license: 'Apache-2.0', source: `${TB}data/environmental_monitoring/environmental_monitoring-1.png` },
  chirpstack: { img: '/images/tools/chirpstack.webp', name: 'ChirpStack', caption: 'Open-source LoRaWAN network server, showing readings from a temperature and humidity sensor.', fit: 'contain', credit: 'Rob7473', license: 'CC BY-SA 4.0', source: C('Chirpstack vue capteur.png') },
  grafana: { img: '/images/tools/grafana.webp', name: 'Grafana', caption: 'Time-series dashboards for sensor readings, alarms and long-term trends.', fit: 'contain', credit: 'Joel Kennedy', license: 'Public domain', source: C('Grafana screenshot (2018).png') },
  grafana2017: { img: '/images/tools/grafana-2017.webp', name: 'Grafana', caption: 'Live dashboards for model outputs, alerts and anomalies.', fit: 'contain', credit: 'Shiunu', license: 'CC BY-SA 4.0', source: C('Grafana Dashboard (2017).jpg') },
  loraGateway: { img: '/images/tools/lora-gateway.webp', name: 'LoRaWAN gateway', caption: 'A rooftop gateway that collects readings from sensors several kilometres away.', fit: 'cover', credit: 'Fabian Horst', license: 'CC BY-SA 4.0', source: C('2018-08-31 - LoRaWan Gateway HoernCampus Kiel.jpg') },
  rpi4: { img: '/images/tools/rpi4.webp', name: 'Raspberry Pi 4', caption: 'A small computer we use as an on-site gateway or local controller.', fit: 'cover', credit: 'Laserlicht', license: 'CC BY-SA 4.0', source: C('Raspberry Pi 4 Model B - Top.jpg') },
  soilSensor: { img: '/images/tools/soil-sensor.webp', name: 'Soil moisture sensor', caption: 'A probe in the ground that reports moisture straight to the dashboard.', fit: 'cover', credit: 'Christianjhart1', license: 'CC0', source: C('272 soilmoisture.JPG') },
  jupyter: { img: '/images/tools/jupyter.webp', name: 'Jupyter Notebook', caption: 'Where AI models are explored, trained and tested on your own data.', fit: 'contain', credit: 'Andrey Yakimchik', license: 'CC BY 4.0', source: C('Jupyter Notebook.png') },
  cctv: { img: '/images/tools/cctv-mumbai.webp', name: 'CCTV cameras', caption: 'Cameras you already have can become a data source for detection, counting and alerts.', fit: 'cover', credit: 'Punit Rajpal', license: 'CC0', source: C('CCTV cameras in Mumbai.jpg') },
  metabase: { img: '/images/tools/metabase.webp', name: 'Metabase', caption: 'Open-source analytics that turns your data into charts anyone on the team can read.', fit: 'contain', credit: 'SparqlDashboards', license: 'CC BY 4.0', source: C('Metabase SPARQL driver - The world in Wikidata.webp') },
  androidStudio: { img: '/images/tools/android-studio.webp', name: 'Android Studio', caption: 'Building and testing Android apps, with a live preview of every screen.', fit: 'contain', credit: 'Google LLC', license: 'Apache-2.0', source: C('Android StudIo Ladybug (2024.2.2.13).png') },
  odoo: { img: '/images/tools/odoo.webp', name: 'Odoo', caption: 'Open-source business apps for sales, inventory, accounting and HR.', fit: 'contain', credit: 'Bigboudda', license: 'Public domain', source: C('Odoo apps page.png') },
  pgadmin: { img: '/images/tools/pgadmin.webp', name: 'PostgreSQL and pgAdmin', caption: 'The reliable database behind many of the systems we build.', fit: 'contain', credit: 'JackPotte', license: 'CC BY-SA 4.0', source: C('PgAdmin-fr.png') },
  matomo: { img: '/images/tools/matomo.webp', name: 'Matomo', caption: 'Privacy-friendly website analytics: visitors, pages and campaigns at a glance.', fit: 'contain', credit: 'Valerio Bozzolan', license: 'CC BY-SA 4.0', source: C('Matomo 4.0 screenshot - English.png') },
  penpot: { img: '/images/tools/penpot.webp', name: 'Penpot', caption: 'Open-source design and prototyping for app and web screens.', fit: 'contain', credit: 'Andrey Antukh', license: 'CC BY-SA 4.0', source: C('Penpot interface.webp') },
  inkscape: { img: '/images/tools/inkscape.webp', name: 'Inkscape', caption: 'Vector design for logos, posters and brand artwork.', fit: 'contain', credit: 'Seba4108', license: 'CC BY-SA 4.0', source: C('Screenshot of Inkscape 1.4.png') },
  resolve: { img: '/images/tools/resolve-panel.webp', name: 'DaVinci Resolve', caption: 'Colour grading and editing for product and brand videos.', fit: 'cover', credit: 'TaurusEmerald', license: 'CC BY-SA 4.0', source: C('Blackmagic Design DaVinci Resolve Mini Panel.jpg') },
  blender: { img: '/images/tools/blender.webp', name: 'Blender', caption: 'Product renders and visualisation before anything is printed.', fit: 'contain', credit: 'Blender Foundation', license: 'CC0', source: C('Blender 2.92 screenshot.png') },
  freecad: { img: '/images/tools/freecad.webp', name: 'FreeCAD', caption: 'Parametric CAD for parts and moving assemblies.', fit: 'contain', credit: 'Maxwxyz', license: 'CC BY 4.0', source: C('FreeCAD 1.0 Light Assembly Example.png') },
  kicadPcb: { img: '/images/tools/kicad-pcb.webp', name: 'KiCad: circuit board', caption: 'Laying out the circuit board that goes inside the product.', fit: 'contain', credit: 'Jon Neal', license: 'CC BY-SA 4.0', source: C('KiCad V6 PCB.png') },
  kicadSch: { img: '/images/tools/kicad-sch.webp', name: 'KiCad: schematic', caption: 'Wiring the electronics on paper before the board is made.', fit: 'contain', credit: 'Jon Neal', license: 'CC BY-SA 4.0', source: C('KiCad V6 SCH.png') },
  printing: { img: '/images/tools/3d-printing.webp', name: '3D printing', caption: 'Quick prototypes printed to test fit, feel and size.', fit: 'cover', credit: 'MukhtaromST', license: 'CC0', source: C('3D Printing.jpg') }
} satisfies Record<string, ToolSlide>;

/** Slides per service category slug */
export const TOOL_SLIDES: Record<string, ToolSlide[]> = {
  'artificial-intelligence-automation': [S.jupyter, S.cctv, S.metabase, S.grafana2017],
  'iot-solutions-infrastructure': [S.tbEnergy, S.chirpstack, S.loraGateway, S.tbSilos, S.soilSensor, S.grafana, S.rpi4, S.tbEnv],
  'web-software-app-development': [S.androidStudio, S.odoo, S.pgadmin, S.matomo],
  'digital-design-media-marketing': [S.penpot, S.inkscape, S.resolve, S.matomo],
  'industrial-product-design': [S.freecad, S.kicadPcb, S.printing, S.kicadSch, S.blender],
  'digital-consulting-solutions': [S.metabase, S.matomo, S.grafana2017]
};
