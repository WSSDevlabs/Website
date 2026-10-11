export const SITE_NAME = 'WSS DevLabs';
export const DEFAULT_OG_IMAGE = '/images/og/default.png';
export const LOCALE = 'en_MY';

/** Adds the brand once. Titles that already contain it are left alone (audit T5). */
export function buildPageTitle(title: string) {
  return title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
}

/** Every page URL ends in a slash, so links never trigger a redirect hop (audit T1). */
export function withTrailingSlash(path: string) {
  const [pathname, rest = ''] = path.split(/(?=[?#])/);
  if (pathname.endsWith('/') || /\.[a-z0-9]+$/i.test(pathname)) return path;
  return `${pathname}/${rest}`;
}

export function resolveCanonical(siteUrl: string, path: string) {
  return new URL(withTrailingSlash(path), siteUrl).toString();
}
