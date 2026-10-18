export type NavLink = {
  label: string;
  href: string;
  badge?: string;
};

export type NavGroup = {
  label: string;
  links: NavLink[];
};

export const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Solutions',
    links: [
      { label: 'Resources', href: '/resources' },
      { label: 'All Services', href: '/services' }
    ]
  },
  {
    label: 'Company',
    links: [
      { label: 'About & Builders', href: '/about' },
      { label: 'FAQ', href: '/about#faq' },
      { label: 'Contact', href: '/contact' }
    ]
  }
];

export const NAV_LINKS: NavLink[] = [
  { label: 'Resources', href: '/resources' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' }
];

export const FOOTER_SOLUTIONS_LINKS: NavLink[] = [
  { label: 'Smart Agriculture', href: '/solutions#agriculture' },
  { label: 'Biomass & Digital Twins', href: '/solutions#biomass' },
  { label: 'Smart City', href: '/solutions#smart-city' },
  { label: 'Energy & Sustainability', href: '/solutions#energy-sustainability' },
  { label: 'Waste-to-Energy', href: '/solutions#waste-to-energy' },
  { label: 'Websites, Apps & IoT', href: '/solutions#digital-foundations' },
  { label: 'SME Digital Shift & Training', href: '/solutions#sme-digital-shift' },
  { label: 'Resources', href: '/resources' }
];

export const FOOTER_COMPANY_LINKS: NavLink[] = [
  { label: 'About Us & Vision', href: '/about' },
  { label: 'All Services', href: '/services' },
  { label: 'Website packages', href: '/services/web-software-app-development' },
  { label: 'Resources', href: '/resources' },
  { label: 'Insights & News', href: '/insights' },
  { label: 'Contact Us', href: '/contact' }
];

export const FOOTER_WORK_LINKS = FOOTER_SOLUTIONS_LINKS;

export const FOOTER_LEGAL_LINKS: NavLink[] = [
  { label: 'Privacy Policy (PDPA)', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' }
];

export const PRIMARY_CTA: NavLink = {
  label: 'WhatsApp an Engineer',
  href: 'https://wa.me/601127205895?text=Hi%20WSS%20DevLabs%2C%20I%27d%20like%20to%20speak%20directly%20with%20an%20engineer%20about%20a%20project.'
};
