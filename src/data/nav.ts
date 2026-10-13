export type NavLink = {
  label: string;
  href: string;
};

export type NavIcon = 'home' | 'code' | 'store' | 'services' | 'user' | 'document';

export type NavItem = NavLink & { icon: NavIcon; hint: string };

/** The floating icon navigation. Same six icons as before, pointing at the new pages. */
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', icon: 'home', hint: 'Home' },
  { label: 'Websites', href: '/websites/', icon: 'code', hint: 'Fixed-price websites' },
  { label: 'Systems', href: '/systems/', icon: 'store', hint: 'Ready-made business systems' },
  { label: 'Custom', href: '/custom/', icon: 'services', hint: 'Custom software' },
  { label: 'About', href: '/about/', icon: 'user', hint: 'About the founder' },
  { label: 'Insights', href: '/insights/', icon: 'document', hint: 'Guides and articles' }
];

/** The one primary action, used in the header and across the site. */
export const PRIMARY_CTA: NavLink = {
  label: 'Get a quote',
  href: '/contact/'
};

export const FOOTER_OFFER_LINKS: NavLink[] = [
  { label: 'Websites', href: '/websites/' },
  { label: 'Ready-made systems', href: '/systems/' },
  { label: 'Custom software', href: '/custom/' },
  { label: 'Care Plans', href: '/websites/#care-plans' }
];

export const FOOTER_COMPANY_LINKS: NavLink[] = [
  { label: 'About', href: '/about/' },
  { label: 'Insights', href: '/insights/' },
  { label: 'Contact', href: '/contact/' }
];

export const FOOTER_LEGAL_LINKS: NavLink[] = [
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Terms', href: '/terms/' },
  { label: 'Licence', href: '/licence/' },
  { label: 'Refunds', href: '/refunds/' },
  { label: 'Care Plan Terms', href: '/care-plan-terms/' },
  { label: 'Cookies', href: '/cookies/' }
];

/** Normalises the current path so "/systems" and "/systems/" match the same nav item. */
export const isActivePath = (currentPath: string, href: string) => {
  const path = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;
  return href === '/' ? path === '/' : path.startsWith(href);
};
