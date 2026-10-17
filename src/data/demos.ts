import type { ClipKey } from './media';

// Use cases shown in the demo reel (home page, /resources and sector pages).
//
// Each demo plays a clip from media.ts. Today those clips are stock footage of
// the setting (labelled "illustrative footage" on the page). When a screen
// recording of our own system is ready, either:
//   - set `youtubeId` (the part after v= in a YouTube link), or
//   - add the file to media.ts with `footage: 'wss'` and point `clip` at it.

export type Demo = {
  id: string;
  title: string;
  sector: string;
  sectorName: string;
  summary: string;
  points: string[];
  clip: ClipKey;
  youtubeId?: string;
};

export const DEMOS: Demo[] = [
  {
    id: 'wildlife-detection',
    title: 'Wild animal detection at the farm edge',
    sector: 'agriculture',
    sectorName: 'Agriculture',
    summary:
      'Cameras on the forest boundary run a detection model for elephants, wild boar, monkeys and people, then send a WhatsApp alert with a snapshot and bounding box.',
    points: [
      'Day and night with infrared cameras',
      'Alerts the nearest supervisor first',
      'Clips saved for insurance and police reports'
    ],
    clip: 'elephants'
  },
  {
    id: 'plant-disease',
    title: 'Plant disease detection from a photo',
    sector: 'agriculture',
    sectorName: 'Agriculture',
    summary:
      'A worker points a phone at a leaf. The model highlights the affected area, names the likely disease and shows the treatment your agronomist approved.',
    points: [
      'Works offline in the field',
      'Every scan pinned to a block on the map',
      'Model retrained on your own crop photos'
    ],
    clip: 'greenhouse'
  },
  {
    id: 'plantation-twin',
    title: 'Digital twin of a plantation',
    sector: 'agriculture',
    sectorName: 'Agriculture',
    summary:
      'Every block on one live map: rainfall, soil moisture, tasks, harvest and alerts, updated from sensors and the farm app.',
    points: [
      'Drone maps layered with sensor data',
      'Block history for audits and buyers',
      'Managers see the field from the office'
    ],
    clip: 'agriMorning'
  },
  {
    id: 'energy-twin',
    title: 'Digital twin for an energy site',
    sector: 'energy-sustainability',
    sectorName: 'Energy & Sustainability',
    summary:
      'A 3D model of a solar or hybrid site with live output, weather and equipment status, used to spot losses and test changes before spending.',
    points: [
      'Expected against actual yield',
      'Fault and cleaning alerts',
      'Scenario testing for new equipment'
    ],
    clip: 'renewables3d'
  },
  {
    id: 'waste-to-energy',
    title: 'Waste-to-energy plant monitoring',
    sector: 'waste-to-energy',
    sectorName: 'Waste-to-Energy',
    summary:
      'Feedstock in, digester health and power out on one dashboard, with alarms when pH, temperature or gas flow drift.',
    points: [
      'Live digester readings',
      'Daily export and uptime report',
      'Remote access for engineers'
    ],
    clip: 'furnace'
  },
  {
    id: 'traffic-counting',
    title: 'Traffic counting from existing CCTV',
    sector: 'smart-city',
    sectorName: 'Smart City',
    summary:
      'Video from cameras already on the junction becomes vehicle counts by type, direction and hour, without new hardware.',
    points: [
      'Cars, motorcycles, lorries and buses',
      'Peak-hour and queue reports',
      'No faces stored'
    ],
    clip: 'crowdJunction'
  },
  {
    id: 'cctv-analytics',
    title: 'CCTV analytics for offices and stores',
    sector: 'sme-digital-shift',
    sectorName: 'SME Digital Shift',
    summary:
      'Your existing cameras alert you to after-hours movement, crowding at the counter and blocked fire exits, instead of recording footage nobody reviews.',
    points: [
      'Works with most CCTV recorders',
      'Alerts to your phone',
      'Searchable events, not hours of video'
    ],
    clip: 'controlRoom'
  },
  {
    id: 'training',
    title: 'Hands-on AI and digital classes',
    sector: 'sme-digital-shift',
    sectorName: 'SME Digital Shift',
    summary:
      'Small-group classes where your team uses AI tools, dashboards and the new systems on their own work, not on slides.',
    points: [
      'Bahasa Malaysia or English',
      'At your office or online',
      'Printed quick guides to keep'
    ],
    clip: 'trainingRoom'
  }
];

export const getDemo = (id: string) => DEMOS.find((d) => d.id === id);
