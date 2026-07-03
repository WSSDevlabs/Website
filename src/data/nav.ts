export type NavLink = {
  label: string;
  href: string;
};

export const PRIMARY_NAV: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' }
];

export const FOOTER_COMPANY_LINKS: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'Team', href: '/team' },
  { label: 'Career', href: '/career' },
  { label: 'FAQ', href: '/faq' }
];

export const FOOTER_WORK_LINKS: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/work' },
  { label: 'Process', href: '/process' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Testimonials', href: '/testimonials' }
];

export const FOOTER_LEGAL_LINKS: NavLink[] = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' }
];

export const PRIMARY_CTA: NavLink = { label: 'Start a Project', href: '/contact' };
