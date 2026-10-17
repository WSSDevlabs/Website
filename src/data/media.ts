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
  worldMap: mixkit(12748, 'world-map', 'Digital world map made of light'),
  agriField: mixkit(822, 'agri-field', 'Sunlit crop field at dawn'),
  factoryTop: mixkit(14631, 'factory-top', 'Industrial plant seen from above'),
  cityAvenue: mixkit(2034, 'city-avenue', 'Aerial view of a busy city avenue'),
  windFarm: mixkit(51779, 'wind-farm', 'Aerial view of a wind farm'),
  landfillTruck: mixkit(49209, 'landfill-truck', 'Truck unloading waste at a landfill, aerial'),
  circuitMachine: mixkit(47266, 'circuit-machine', 'Machine placing parts on circuit boards'),
  brainstorm: mixkit(46680, 'brainstorm', 'Team planning around a meeting table'),
  agriMorning: mixkit(825, 'agri-morning', 'Farmland and hills in the morning, aerial'),
  furnace: mixkit(17897, 'furnace', 'Industrial furnace and machinery'),
  crowdJunction: mixkit(4401, 'crowd-junction', 'People and cars crossing a busy junction'),
  cameraInstall: mixkit(22972, 'camera-install', 'Technician fitting a camera in a server room'),
  solarCgi: mixkit(33838, 'solar-cgi', '3D render of solar panels'),
  dotsSphere: mixkit(31771, 'dots-sphere', 'Abstract sphere of connected points'),
  industrialSite: mixkit(21946, 'industrial-site', 'Industrial processing facility, aerial'),
  cityDusk: mixkit(4308, 'city-dusk', 'City skyline at dusk'),
  solarRows: mixkit(47097, 'solar-rows', 'Rows of solar panels on a farm'),
  dumpSite: mixkit(25551, 'dump-site', 'Trucks crossing a waste dump'),
  opsCentre: mixkit(23268, 'ops-centre', 'Team monitoring screens in an operations centre'),
  monkey: mixkit(46211, 'monkey', 'A macaque eating fruit on the ground'),
  tropicalRain: mixkit(6890, 'tropical-rain', 'Rain falling in a tropical forest'),
  jungleRiver: mixkit(49334, 'jungle-river', 'Drone flight above a jungle river'),
  grainStore: mixkit(45847, 'grain-store', 'Sacks stacked in a storage warehouse'),
  plantCorridor: mixkit(23377, 'plant-corridor', 'Industrial corridor lined with control cabinets'),
  machinery: mixkit(17675, 'machinery', 'Mechanical machinery working, close up'),
  rainyTraffic: mixkit(4331, 'rainy-traffic', 'Traffic on a wet street at night'),
  streetRain: mixkit(48004, 'street-rain', 'Raindrops hitting a flooded street'),
  securityDesk: mixkit(23028, 'security-desk', 'Operator watching camera feeds'),
  cityBuild: mixkit(4010, 'city-build', 'Buildings and cranes under construction, aerial'),
  solarInstall: mixkit(23491, 'solar-install', 'Worker installing a solar panel'),
  solarRoof: mixkit(33840, 'solar-roof', '3D model of solar panels on a roof'),
  hudGraph: mixkit(5396, 'hud-graph', 'Animated data graph'),
  serverLights: mixkit(23215, 'server-lights', 'Server rack status lights'),
  substation: mixkit(23493, 'substation', 'Engineers at an electrical substation'),
  nightCity: mixkit(1673, 'night-city', 'City lights at night, aerial'),
  dataHud: mixkit(5437, 'data-hud', 'Animated dashboard charts'),
  powerLines: mixkit(28351, 'power-lines', 'Power lines across fields at sunset'),
  officeDocs: mixkit(4835, 'office-docs', 'Hands working with tablets and reports'),
  phoneTyping: mixkit(4915, 'phone-typing', 'Hands typing on a phone'),
  fiberOptics: mixkit(47050, 'fiber-optics', 'Fibre optic cables in a server room'),
  multiScreens: mixkit(46746, 'multi-screens', 'Engineer working across several screens'),
  cctvFeed: mixkit(31372, 'cctv-feed', 'Night-time CCTV footage of an office'),
  boardroom: mixkit(22961, 'boardroom', 'A presenter walking a team through a report'),
  busyOffice: mixkit(918, 'busy-office', 'Open-plan office in use'),
  chartsDesk: mixkit(46685, 'charts-desk', 'Team marking up sales charts'),
  classroom: mixkit(11643, 'classroom', 'Small group learning with a trainer'),
  cloudData: mixkit(31544, 'cloud-data', 'Abstract stream of data'),
  harvest: mixkit(45782, 'harvest', 'Combine harvesting a crop, close up'),
  altEnergy: mixkit(47652, 'alt-energy', 'Wind turbines at sunset'),
  pedestrianLight: mixkit(39825, 'pedestrian-light', 'Smart pedestrian signal counting down'),
  whatsapp: mixkit(41165, 'whatsapp', 'Man replying to customers on his phone'),
  droneSky: mixkit(44644, 'drone-sky', 'Drone flying against the sky')
} satisfies Record<string, Clip>;

export type ClipKey = keyof typeof CLIPS;

/**
 * The rotating reel in the home hero: one clip per sector, in this order.
 * `word` replaces the highlighted word in the hero headline while that clip plays.
 */
export const HERO_REEL: { clip: ClipKey; sector: string; word: string; href: string }[] = [
  { clip: 'ricePaddy', sector: 'Agriculture', word: 'agriculture', href: '/solutions#agriculture' },
  { clip: 'processingPlant', sector: 'Biomass', word: 'biomass', href: '/solutions#biomass' },
  { clip: 'cityTraffic', sector: 'Smart City', word: 'smart cities', href: '/solutions#smart-city' },
  { clip: 'solarSunset', sector: 'Energy & Sustainability', word: 'clean energy', href: '/solutions#energy-sustainability' },
  { clip: 'powerPlant', sector: 'Waste-to-Energy', word: 'waste-to-energy', href: '/solutions#waste-to-energy' },
  { clip: 'cctv', sector: 'SME Digital Shift', word: 'SMEs', href: '/solutions#sme-digital-shift' }
];
