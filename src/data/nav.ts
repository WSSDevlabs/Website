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
      { label: 'WSS Express', href: '/express', badge: '3-7 Days' },
      { label: 'Marketplace', href: '/marketplace', badge: 'Buy-Once' },
      { label: 'All Services', href: '/services' },
      { label: 'Pricing', href: '/pricing' }
    ]
  },
  {
    label: 'Company',
    links: [
      { label: 'Live Status', href: '/status', badge: 'Live SLA' },
      { label: 'About & Builders', href: '/about' },
      { label: 'Projects', href: '/work' },
      { label: 'Process', href: '/process' },
      { label: 'FAQ', href: '/faq' }
    ]
  }
];

export const NAV_LINKS: NavLink[] = [
  { label: 'Express', href: '/express' },
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'Status', href: '/status' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' }
];

export const FOOTER_SOLUTIONS_LINKS: NavLink[] = [
  { label: 'WSS Express (Fixed-Price)', href: '/express' },
  { label: 'WSS Marketplace (Buy-Once)', href: '/marketplace' },
  { label: 'All Services Catalog', href: '/services' },
  { label: 'Pricing & Packages', href: '/pricing' }
];

export const FOOTER_COMPANY_LINKS: NavLink[] = [
  { label: 'Live Project Status', href: '/status' },
  { label: 'About Us & Builders', href: '/about' },
  { label: 'Case Studies & Work', href: '/work' },
  { label: 'Build Process', href: '/process' },
  { label: 'Insights & AI-SEO', href: '/insights' },
  { label: 'Direct FAQ', href: '/faq' }
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
