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

// Klang Valley, Malaysia — update once a confirmed office location is set.
export const GEO = {
  region: 'MY-10',
  placename: 'Selangor',
  position: '3.1390;101.6869',
  icbm: '3.1390, 101.6869'
};

export function buildPageTitle(title: string) {
  return title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
}

export function resolveCanonical(siteUrl: string, path: string) {
  return new URL(path, siteUrl).toString();
}
