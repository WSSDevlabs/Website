// Belanjawan / Budget 2027 (tabled 9 Oct 2026): headline figures and sector notes shown at the top of /solutions.
// Every figure comes from the linked report; the one-line notes are our own wording.
// The headline total depends on the source: RM510bn covers spending plus investment vehicles, RM459.8bn is the federal budget alone.
// Check the full budget speech for official numbers before quoting them elsewhere.

export type Source = { label: string; url: string; lang?: 'EN' | 'BM' };

export const BUDGET_FACTS: { value: string; label: string; source: Source }[] = [
  {
    value: 'RM510bn',
    label: 'Total spending and investment, up from RM470bn',
    source: { label: 'The Star', url: 'https://www.thestar.com.my/news/nation/2026/10/10/record-rm510bil-budget-tabled' }
  },
  {
    value: 'RM459.8bn',
    label: 'Federal budget alone',
    source: { label: 'Free Malaysia Today', url: 'https://www.freemalaysiatoday.com/category/nation/2026/10/09/govt-allocates-rm459-84bil-for-2027-budget' }
  },
  {
    value: 'RM83bn',
    label: 'Development expenditure',
    source: { label: 'Bernama', url: 'https://www.bernama.com/en/general/news.php?id=2617655' }
  },
  {
    value: '3.3%',
    label: 'Fiscal deficit target for 2027, as a share of GDP',
    source: { label: 'Business Today', url: 'https://www.businesstoday.com.my/2026/10/09/budget-2027-spending-rises-to-rm510-billion-as-govt-targets-3-3-deficit/' }
  }
];

export type SectorNote = {
  sector: string;
  figure: string;
  headline: string;
  points: string[];
  sources: Source[];
  /** where we help, linking to the matching section further down this page (omit when we have no section for it) */
  anchor?: string;
};

export const SECTOR_NOTES: SectorNote[] = [
  {
    sector: 'Agriculture and food',
    figure: 'RM2.62bn',
    headline: 'Aid for paddy farmers, and money for smallholder productivity.',
    points: [
      'The paddy harvesting incentive rises from RM50 to RM100 per hectare per season.',
      'RM425.65m is proposed for smallholder productivity, infrastructure and disease control.'
    ],
    sources: [
      { label: 'Bernama: Budget 2027 highlights', url: 'https://www.bernama.com/en/general/news.php?id=2617655' },
      { label: 'Malay Mail: RM425m for plantations and commodities', url: 'https://www.malaymail.com/news/malaysia/2026/10/06/budget-2027-what-rm425m-for-plantations-and-commodities-means-for-malaysians/234934' }
    ],
    anchor: 'agriculture'
  },
  {
    sector: 'Energy and green technology',
    figure: 'RM15bn',
    headline: 'TNB investment in the national grid, with climate and tax support behind it.',
    points: [
      'A RM1bn KWAP Climate Fund backs renewable energy and decarbonisation projects.',
      'Green investment tax allowances are extended to 2030.'
    ],
    sources: [{ label: 'The Star: sustainability priorities in Budget 2027', url: 'https://www.thestar.com.my/esg/2026/10/09/sustainability-priorities-in-budget-2027' }],
    anchor: 'energy-sustainability'
  },
  {
    sector: 'SMEs',
    figure: 'RM57bn',
    headline: 'Record financing guarantees for micro, small and medium businesses.',
    points: [
      'SME tax is 14% on the first RM150,000 of income and 16% from RM150,000 to RM600,000.',
      'A RM30m MDEC fund helps 4,000 MSMEs adopt AI and automate operations.'
    ],
    sources: [
      { label: 'Malay Mail: record RM57b for MSMEs', url: 'https://www.malaymail.com/news/malaysia/2026/10/17/budget-2027-record-rm57b-allocation-to-boost-malaysian-msmes-resilience-amid-global-economic-uncertainty/239404' },
      { label: 'Berita Harian: Belanjawan 2027 dan PMKS', url: 'https://www.bharian.com.my/amp/bisnes/lain-lain/2026/10/1663360/belanjawan-2027-beri-ruang-kewangan-lebih-luas-kepada-pmks-affin', lang: 'BM' }
    ],
    anchor: 'sme-digital-shift'
  },
  {
    sector: 'Digital and AI',
    figure: 'RM5bn',
    headline: 'Internet connectivity for rural and remote areas, plus an AI skills push.',
    points: [
      'The Digital Ministry targets 200,000 AI-skilled people by 2030.',
      'RM6bn is set aside for research, development and commercialisation across ministries.'
    ],
    sources: [
      { label: 'Bernama: RM5bn for connectivity', url: 'https://www.bernama.com/en/general/news.php?id=2618518' },
      { label: 'Malay Mail: 200,000 AI-skilled individuals', url: 'https://www.malaymail.com/amp/news/malaysia/2026/10/11/budget-2027-digital-ministry-targets-200000-ai-skilled-individuals-in-push-for-ai-nation-by-2030/238688' },
      { label: 'The Star: RM6bil for R&D', url: 'https://www.thestar.com.my/news/nation/2026/10/09/budget-2027-rm6bil-allocated-to-boost-research-development-and-commercialisation-across-ministries' }
    ],
    anchor: 'digital-foundations'
  },
  {
    sector: 'Cities, flood and infrastructure',
    figure: 'RM2.3bn',
    headline: 'Rural roads, and more money for flood control and basic infrastructure.',
    points: [
      'RM3.3bn goes to basic rural infrastructure such as water, electricity and streetlights.',
      'RM100m is set for Klang Valley flood control. Builders say it is modest for the scale of the problem.'
    ],
    sources: [
      { label: 'NST: Budget 2027 live coverage', url: 'https://www.nst.com.my/amp/news/nation/2026/10/1551336/live-2027-budget-rm56b-rural-roads-basic-infrastructure' },
      { label: 'The Edge: MBAM on project delivery', url: 'https://theedgemalaysia.com/node/821262' }
    ],
    anchor: 'smart-city'
  },
  {
    sector: 'Manufacturing and growth',
    figure: 'RM2.1bn',
    headline: 'Funds for mid-tier companies in electronics, digital technology and advanced manufacturing.',
    points: ['A RM100m strategic fund from Khazanah and InvestPenang backs early-stage semiconductor and advanced manufacturing firms.'],
    sources: [{ label: 'The Edge: highlights of Budget 2027', url: 'https://theedgemalaysia.com/node/821179' }],
    anchor: 'biomass'
  },
  {
    sector: 'Health and wellbeing',
    figure: 'RM47.7bn',
    headline: 'A bigger health allocation, and a new affordable insurance plan.',
    points: [
      'The Health Ministry budget rises from RM46.5bn to RM47.7bn.',
      'The affordable MediAsas health insurance plan launches in January 2027, with a RM200 first-year premium subsidy per worker for small firms.'
    ],
    sources: [
      { label: 'Free Malaysia Today: the key highlights', url: 'https://www.freemalaysiatoday.com/category/nation/2026/10/09/2027-budget-the-key-highlights' },
      { label: 'Bernama: Budget 2027 highlights', url: 'https://www.bernama.com/en/general/news.php?id=2617655' }
    ]
  },
  {
    sector: 'Education and skills',
    figure: 'RM69bn',
    headline: 'The largest ministry allocation, with TVET funding across ministries.',
    points: [
      'The Education Ministry receives nearly RM69bn, up from RM66.2bn this year.',
      'About RM8bn is allocated to technical and vocational education and training (TVET).'
    ],
    sources: [
      { label: 'Free Malaysia Today: the key highlights', url: 'https://www.freemalaysiatoday.com/category/nation/2026/10/09/2027-budget-the-key-highlights' },
      { label: 'Berita Harian: Sorotan Belanjawan MADANI 2027', url: 'https://www.bharian.com.my/amp/berita/nasional/2026/10/1662292/sorotan-belanjawan-madani-2027-apa-yang-kita-dapat', lang: 'BM' }
    ],
    anchor: 'sme-digital-shift'
  },
  {
    sector: 'Water and energy infrastructure',
    figure: 'RM5.33bn',
    headline: 'PETRA funding to strengthen water and energy infrastructure.',
    points: ['Utilities and public works are named among the sectors set to benefit from budget spending, the kind of infrastructure that sensors and monitoring systems help run well.'],
    sources: [
      { label: 'Bernama: RM5.33bn for PETRA', url: 'https://www.bernama.com/en/general/news.php?id=2618016' },
      { label: 'The Edge: sectors set to benefit', url: 'https://theedgemalaysia.com/node/817705' }
    ],
    anchor: 'waste-to-energy'
  },
];

export const FURTHER_READING: Source[] = [
  { label: 'The Star: Highlights from Budget 2027', url: 'https://www.thestar.com.my/business/business-news/2026/10/09/highlights-from-budget-2027' },
  { label: 'Free Malaysia Today: 2027 budget, the key highlights', url: 'https://www.freemalaysiatoday.com/category/nation/2026/10/09/2027-budget-the-key-highlights' },
  { label: 'Bernama: Budget 2027 highlights', url: 'https://www.bernama.com/en/general/news.php?id=2617655' },
  { label: 'Berita Harian: Teks ucapan penuh Belanjawan 2027', url: 'https://www.bharian.com.my/amp/berita/nasional/2026/10/1662414/teks-ucapan-penuh-belanjawan-2027', lang: 'BM' },
  { label: 'Berita Harian: Sorotan Belanjawan MADANI 2027', url: 'https://www.bharian.com.my/amp/berita/nasional/2026/10/1662292/sorotan-belanjawan-madani-2027-apa-yang-kita-dapat', lang: 'BM' },
  { label: 'The Vibes: a steady budget, continuity rather than bold reform', url: 'https://www.thevibes.com/articles/news/128159/malaysias-2027-budget-is-a-steady-one-people-oriented-continuity-rather-than-bold-reform' }
];

export type MalaysiaItem = { figure: string; text: string; source: Source };

// Wider Malaysian context: economy, AI and industry news beyond the budget speech itself.
export const BEYOND_BUDGET: MalaysiaItem[] = [
  {
    figure: '5.1%',
    text: 'The World Bank lifted its 2026 growth forecast for Malaysia from 4.4%, citing global AI spending.',
    source: { label: 'Berita Harian', url: 'https://www.bharian.com.my/bisnes/lain-lain/2026/10/1657699/bank-dunia-naikkan-unjuran-ekonomi-malaysia-2026-kepada-51-peratus', lang: 'BM' }
  },
  {
    figure: '27%',
    text: 'About 27% of Malaysian companies had adopted AI by 2024, up from 20% a year earlier. Around 73% remain at a basic level of use.',
    source: { label: 'The Edge', url: 'https://theedgemalaysia.com/node/821782' }
  },
  {
    figure: '100,000',
    text: "Young Malaysians aged 18 to 30 receive free AI access under the 'AI Untuk Rakyat' programme.",
    source: { label: 'Berita Harian', url: 'https://www.bharian.com.my/amp/berita/nasional/2026/07/1594425/ai-untuk-rakyat-dibuka-31-ogos-100000-belia-terima-akses-percuma', lang: 'BM' }
  },
  {
    figure: 'AI hub',
    text: "ILMU, the country's first home-grown large language model, is seen as a step towards digital sovereignty and an AI hub role in ASEAN.",
    source: { label: 'Berita Harian', url: 'https://www.bharian.com.my/berita/nasional/2026/07/1589646/ilmu-jadi-pemangkin-kedaulatan-digital-negara-kukuhkan-kedudukan', lang: 'BM' }
  },
  {
    figure: 'Automate',
    text: 'The trade minister urges industry, including smaller firms, to automate as reliance on foreign workers is reduced step by step.',
    source: { label: 'Kosmo', url: 'https://www.kosmo.com.my/2026/09/08/industri-perlu-automasi-kurangkan-kebergantungan-pekerja-asing-johari/', lang: 'BM' }
  },
  {
    figure: 'AI data centres',
    text: 'Reports point to Malaysia becoming a leading destination for multi-billion-ringgit AI infrastructure.',
    source: { label: 'Berita Harian', url: 'https://www.bharian.com.my/bisnes/lain-lain/2026/05/1563344/malaysia-jadi-destinasi-utama-infrastruktur-ai-bernilai-bilion', lang: 'BM' }
  }
];
