export type SeoProps = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
};

export const SITE_NAME = 'WSS DevLabs';
export const DEFAULT_OG_IMAGE = '/images/og/default.png';
export const LOCALE = 'en_MY';

// Klang Valley, Malaysia: update once a confirmed office location is set.
export const GEO = {
  region: 'MY-10',
  placename: 'Selangor',
  position: '3.1390;101.6869',
  icbm: '3.1390, 101.6869'
};

/** Appends the brand once. Titles that already contain it are left alone. */
export function buildPageTitle(title: string) {
  return title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
}

/** Page URLs end in "/" (Cloudflare serves /about/ directly; /about would redirect). */
export function withTrailingSlash(path: string) {
  if (path === '' || path === '/') return '/';
  const [pathname, hash = ''] = path.split('#');
  const lastSegment = pathname.split('/').pop() ?? '';
  const isFile = lastSegment.includes('.');
  const normalized = pathname.endsWith('/') || isFile ? pathname : `${pathname}/`;
  return hash ? `${normalized}#${hash}` : normalized;
}

export function resolveCanonical(siteUrl: string, path: string) {
  return new URL(withTrailingSlash(path), siteUrl).toString();
}
