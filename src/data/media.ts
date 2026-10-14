// Video library for the whole site.
//
// Every clip below is stock footage from Mixkit (free licence, no attribution
// required): https://mixkit.co/license/. It shows the kind of place we work in,
// not our own system output, so pages label it "illustrative footage".
//
// To use your own recording instead:
//   1. Put the file in /public/videos/ (MP4, H.264, 720p, under 20 MB).
//   2. Set `src` to '/videos/your-file.mp4' (and `srcMobile` to a 360p copy if you have one).
//   3. Set `footage: 'wss'` so the "illustrative" caption disappears.
// To use a YouTube video, set `youtubeId` on the demo (see demos.ts).

export type Clip = {
  src: string;
  /** Lighter file for phones; falls back to `src`. */
  srcMobile?: string;
  /** First frame of the clip, shown while it loads and for reduced-motion visitors. */
  poster: string;
  /** Plain description, used as the accessible label. */
  label: string;
  footage: 'stock' | 'wss';
};

const mixkit = (id: number, poster: string, label: string): Clip => ({
  src: `https://assets.mixkit.co/videos/${id}/${id}-720.mp4`,
  srcMobile: `https://assets.mixkit.co/videos/${id}/${id}-360.mp4`,
  poster: `/images/posters/${poster}.jpg`,
  label,
  footage: 'stock'
});

export const CLIPS = {
  ricePaddy: mixkit(12996, 'rice-paddy', 'Aerial view of terraced rice paddies'),
  cropIrrigation: mixkit(35854, 'crop-irrigation', 'Drone flying over crop rows being irrigated'),
  greenhouse: mixkit(47274, 'greenhouse', 'Worker watering young plants in a greenhouse'),
  sprouts: mixkit(38373, 'sprouts', 'Young shoots growing out of the soil'),
  elephants: mixkit(11059, 'elephants', 'A herd of Asian elephants grazing at the forest edge'),
  processingPlant: mixkit(21950, 'processing-plant', 'Aerial view of a wood and biomass processing plant'),
  powerPlant: mixkit(25050, 'power-plant', 'Aerial view of a power plant beside a river'),
  wasteSorting: mixkit(33621, 'waste-sorting', 'Hands sorting plastic waste into a bag'),
  solarSunset: mixkit(46623, 'solar-sunset', 'Solar farm at sunset, aerial'),
  renewables3d: mixkit(33843, 'renewables-3d', '3D model of a solar and wind site'),
  cityTraffic: mixkit(11, 'city-traffic', 'City interchange traffic at night, aerial'),
  cctv: mixkit(48922, 'cctv', 'A PTZ security camera tracking movement'),
  controlRoom: mixkit(23016, 'control-room', 'Operators watching camera feeds in a control room'),
  code: mixkit(46635, 'code', 'Code reflected in a developer’s glasses'),
  datacenter: mixkit(23282, 'datacenter', 'Data centre corridor lined with server racks'),
  trainingRoom: mixkit(45957, 'training-room', 'A trainer presenting to a small team'),
  workshop: mixkit(48712, 'workshop', 'Team planning together at a workshop table'),
  network: mixkit(31510, 'network', 'Abstract network of connected points'),
  worldMap: mixkit(12748, 'world-map', 'Digital world map made of light')
} satisfies Record<string, Clip>;

export type ClipKey = keyof typeof CLIPS;

/**
 * The rotating reel in the home hero: one clip per sector, in this order.
 * `word` replaces the highlighted word in the hero headline while that clip plays.
 */
export const HERO_REEL: { clip: ClipKey; sector: string; word: string; href: string }[] = [
  { clip: 'ricePaddy', sector: 'Agriculture', word: 'agriculture', href: '/solutions/agriculture' },
  { clip: 'processingPlant', sector: 'Biomass', word: 'biomass', href: '/solutions/biomass' },
  { clip: 'cityTraffic', sector: 'Smart City', word: 'smart cities', href: '/solutions/smart-city' },
  { clip: 'solarSunset', sector: 'Energy & Sustainability', word: 'clean energy', href: '/solutions/energy-sustainability' },
  { clip: 'powerPlant', sector: 'Waste-to-Energy', word: 'waste-to-energy', href: '/solutions/waste-to-energy' },
  { clip: 'cctv', sector: 'SME Digital Shift', word: 'SMEs', href: '/solutions/sme-digital-shift' }
];
