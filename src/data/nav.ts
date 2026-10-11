export type NavLink = {
  label: string;
  href: string;
};

/** Header: four links and one button (audit 2.4). */
export const MAIN_NAV: NavLink[] = [
  { label: 'Websites', href: '/websites/' },
  { label: 'Systems', href: '/systems/' },
  { label: 'Custom', href: '/custom/' },
  { label: 'About', href: '/about/' }
];

/** The one primary call to action, used with the same label everywhere (audit G12). */
export const PRIMARY_CTA: NavLink = { label: 'Get a fixed quote', href: '/contact/' };

export const FOOTER_OFFERS: NavLink[] = [
  { label: 'Websites', href: '/websites/' },
  { label: 'Systems', href: '/systems/' },
  { label: 'Custom', href: '/custom/' }
];

export const FOOTER_COMPANY: NavLink[] = [
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Insights', href: '/insights/' }
];

export const FOOTER_LEGAL: NavLink[] = [
  { label: 'Privacy (EN/BM)', href: '/privacy/' },
  { label: 'Terms', href: '/terms/' },
  { label: 'Licence', href: '/licence/' },
  { label: 'Refunds', href: '/refunds/' },
  { label: 'Care Plan terms', href: '/care-plan-terms/' },
  { label: 'Cookies', href: '/cookies/' }
];
