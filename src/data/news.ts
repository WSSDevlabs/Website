// Headlines for the Resources page news layout. Each item links to the original publisher;
// the one-line summaries are written in our own words from the headline and opening of the story.
// Berita Harian items only show the month because the search listing gave no exact day.
export type NewsItem = {
  title: string;
  source: 'Berita Harian' | 'Kosmo' | 'The Star' | 'Malay Mail';
  url: string;
  date: string;
  tag: string;
  image: string;
  summary: string;
  lang: 'EN' | 'BM';
};

const u = (id: string, w = 1200, h = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=75`;

export const NEWS = {
  featured: {
    title: 'Digital Ministry pushes AI nation goal under Budget 2027',
    source: 'The Star',
    url: 'https://www.thestar.com.my/news/nation/2026/10/11/digital-ministry-pushes-ai-nation-goal-under-budget-2027',
    date: '11 Oct 2026',
    tag: 'AI policy',
    image: u('1555255707-c07966088b7b', 1600, 1100),
    summary:
      'Budget 2027 puts money behind the push to make Malaysia an AI nation by 2030, including funds to help small businesses adopt AI and automate their work.',
    lang: 'EN'
  } as NewsItem,
  side: [
    {
      title: 'Bank Dunia naikkan unjuran ekonomi Malaysia 2026 kepada 5.1 peratus',
      source: 'Berita Harian',
      url: 'https://www.bharian.com.my/bisnes/lain-lain/2026/10/1657699/bank-dunia-naikkan-unjuran-ekonomi-malaysia-2026-kepada-51-peratus',
      date: 'Oct 2026',
      tag: 'Economy',
      image: u('1551288049-bebda4e38f71'),
      summary: 'The World Bank lifts its growth forecast for Malaysia, pointing to global spending on AI.',
      lang: 'BM'
    },
    {
      title: 'Industri perlu automasi, kurangkan kebergantungan pekerja asing - Johari',
      source: 'Kosmo',
      url: 'https://www.kosmo.com.my/2026/09/08/industri-perlu-automasi-kurangkan-kebergantungan-pekerja-asing-johari/',
      date: '8 Sep 2026',
      tag: 'Industry',
      image: u('1513828583688-c52646db42da'),
      summary: 'The trade minister urges industry, including smaller firms, to automate as reliance on foreign workers is reduced step by step.',
      lang: 'BM'
    }
  ] as NewsItem[],
  fresh: [
    {
      title: 'SMEs must embrace AI to stay competitive, says Sim',
      source: 'The Star',
      url: 'https://www.thestar.com.my/news/nation/2026/10/09/smes-must-embrace-ai-to-stay-competitive-says-sim',
      date: '9 Oct 2026',
      tag: 'SME',
      image: u('1550751827-4bd374c3f58b'),
      summary: 'Buying an AI system is not enough, says the minister: firms also need data, talent and safeguards.',
      lang: 'EN'
    },
    {
      title: 'Malaysia disaran wujud dana kekayaan khusus AI dengan modal RM100 bilion - Nazri Khan',
      source: 'Berita Harian',
      url: 'https://www.bharian.com.my/bisnes/lain-lain/2026/10/1660740/malaysia-disaran-wujud-dana-kekayaan-khusus-ai-dengan-modal-rm100',
      date: 'Oct 2026',
      tag: 'Investment',
      image: u('1518186285589-2f7649de83e0'),
      summary: 'A call for a dedicated AI sovereign wealth fund with about RM100 billion in starting capital.',
      lang: 'BM'
    },
    {
      title: "'AI Untuk Rakyat' dibuka 31 Ogos, 100,000 belia terima akses percuma",
      source: 'Berita Harian',
      url: 'https://www.bharian.com.my/amp/berita/nasional/2026/07/1594425/ai-untuk-rakyat-dibuka-31-ogos-100000-belia-terima-akses-percuma',
      date: 'Jul 2026',
      tag: 'Skills',
      image: u('1535378917042-10a22c95931a'),
      summary: 'A programme opens free AI access to around 100,000 young Malaysians aged 18 to 30.',
      lang: 'BM'
    }
  ] as NewsItem[],
  popular: [
    {
      title: 'Robot mengubah landskap industri pembuatan',
      source: 'Kosmo',
      url: 'https://www.kosmo.com.my/2026/08/18/robot-mengubah-landskap-industri-pembuatan/',
      date: '18 Aug 2026',
      tag: 'Industry',
      image: u('1581091226825-a6a2a5aee158'),
      summary: 'Robots now take on assembly, welding and quality checks, and falling costs open automation to smaller firms.',
      lang: 'BM'
    },
    {
      title: 'Robot Jepun bantu automasi industri tempatan',
      source: 'Kosmo',
      url: 'https://www.kosmo.com.my/2026/07/31/robot-jepun-bantu-automasi-industri-tempatan/',
      date: '31 Jul 2026',
      tag: 'Industry',
      image: u('1535378917042-10a22c95931a'),
      summary: 'A local engineering firm partners with a Japanese company to bring smart automation to Malaysian factories.',
      lang: 'BM'
    },
    {
      title: 'ILMU jadi pemangkin kedaulatan digital negara, kukuhkan kedudukan Malaysia sebagai hub AI di ASEAN',
      source: 'Berita Harian',
      url: 'https://www.bharian.com.my/berita/nasional/2026/07/1589646/ilmu-jadi-pemangkin-kedaulatan-digital-negara-kukuhkan-kedudukan',
      date: 'Jul 2026',
      tag: 'AI policy',
      image: u('1555255707-c07966088b7b'),
      summary: "Malaysia's first home-grown large language model is seen as a step towards digital sovereignty.",
      lang: 'BM'
    }
  ] as NewsItem[],
  more: [
    {
      title: 'AI teraju masa depan sektor pembinaan negara',
      source: 'Kosmo',
      url: 'https://www.kosmo.com.my/2026/09/22/ai-teraju-masa-depan-sektor-pembinaan-negara/',
      date: '22 Sep 2026',
      tag: 'Construction',
      image: u('1504868584819-f8e8b4b6d7e3', 1000, 1100),
      summary: 'AI and BIM are used together to catch design clashes before any physical work begins.',
      lang: 'BM'
    },
    {
      title: 'MetMalaysia teroka teknologi AI tingkat ketepatan ramalan cuaca',
      source: 'Berita Harian',
      url: 'https://www.bharian.com.my/berita/nasional/2026/05/1550822/metmalaysia-teroka-teknologi-ai-tingkat-ketepatan-ramalan-cuaca',
      date: 'May 2026',
      tag: 'Weather',
      image: u('1592982537447-7440770cbfc9', 1000, 1100),
      summary: 'The weather department plans to add AI to its forecasting systems.',
      lang: 'BM'
    },
    {
      title: 'Budget 2027: Digital Ministry targets 200,000 AI-skilled individuals in push for AI Nation by 2030',
      source: 'Malay Mail',
      url: 'https://www.malaymail.com/amp/news/malaysia/2026/10/11/budget-2027-digital-ministry-targets-200000-ai-skilled-individuals-in-push-for-ai-nation-by-2030/238688',
      date: '11 Oct 2026',
      tag: 'Skills',
      image: u('1531746790731-6c087fecd65a', 1000, 1100),
      summary: 'Funds will help 4,000 small businesses adopt AI, with training for 5,000 AI professionals.',
      lang: 'EN'
    },
    {
      title: 'Record RM510bil budget tabled',
      source: 'The Star',
      url: 'https://www.thestar.com.my/news/nation/2026/10/10/record-rm510bil-budget-tabled',
      date: '10 Oct 2026',
      tag: 'Budget 2027',
      image: u('1554224155-6726b3ff858f', 1000, 1100),
      summary: 'Total spending and investment of RM510 billion, with the deficit targeted at 3.3% of GDP.',
      lang: 'EN'
    },
    {
      title: 'Budget 2027: Record RM57b allocation to boost Malaysian MSMEs',
      source: 'Malay Mail',
      url: 'https://www.malaymail.com/news/malaysia/2026/10/17/budget-2027-record-rm57b-allocation-to-boost-malaysian-msmes-resilience-amid-global-economic-uncertainty/239404',
      date: '17 Oct 2026',
      tag: 'SME',
      image: u('1556761175-5973dc0f32e7', 1000, 1100),
      summary: 'A record financing guarantee amount for micro, small and medium enterprises.',
      lang: 'EN'
    },
    {
      title: 'Budget 2027: RM5 Bln To Boost Internet Connectivity, RM130 Mln For Creative Industry',
      source: 'Bernama',
      url: 'https://www.bernama.com/en/general/news.php?id=2618518',
      date: 'Oct 2026',
      tag: 'Digital',
      image: u('1558494949-ef010cbdcc31', 1000, 1100),
      summary: 'Money for rural and remote internet coverage, following the JENDELA plan.',
      lang: 'EN'
    },
    {
      title: 'Budget 2027: PETRA Allocated RM5.33 Bln To Strengthen Water And Energy Infrastructure',
      source: 'Bernama',
      url: 'https://www.bernama.com/en/general/news.php?id=2618016',
      date: 'Oct 2026',
      tag: 'Infrastructure',
      image: u('1473341304170-971dccb5ac1e', 1000, 1100),
      summary: 'Funding to strengthen water and energy infrastructure.',
      lang: 'EN'
    },
    {
      title: 'Pelaburan AI ubah peranan Malaysia dalam ekonomi digital dunia',
      source: 'Berita Harian',
      url: 'https://www.bharian.com.my/amp/bisnes/lain-lain/2026/07/1582995/pelaburan-ai-ubah-peranan-malaysia-dalam-ekonomi-digital-dunia',
      date: 'Jul 2026',
      tag: 'AI',
      image: u('1518770660439-4636190af475', 1000, 1100),
      summary: "How AI investment is changing Malaysia's role in the global digital economy.",
      lang: 'BM'
    },
    {
      title: "Ekonomi Malaysia semakin bergantung kepada 'kitaran AI'",
      source: 'Berita Harian',
      url: 'https://www.bharian.com.my/amp/bisnes/lain-lain/2026/08/1603104/ekonomi-malaysia-semakin-bergantung-kepada-kitaran-ai',
      date: 'Aug 2026',
      tag: 'Economy',
      image: u('1639322537228-f710d846310a', 1000, 1100),
      summary: 'The economy leans more and more on the global AI investment cycle.',
      lang: 'BM'
    },
    {
      title: 'Robot AI lebih cekap, penuhi keperluan industri',
      source: 'Kosmo',
      url: 'https://www.kosmo.com.my/2026/07/07/robot-ai-lebih-cekap-penuhi-keperluan-industri/',
      date: '7 Jul 2026',
      tag: 'Industry',
      image: u('1485827404703-89b55fcc595e', 1000, 1100),
      summary: 'New-generation robots use AI and computer vision to spot defects on the production line.',
      lang: 'BM'
    }
  ] as NewsItem[]
};
