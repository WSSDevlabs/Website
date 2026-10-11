import { SITE, SOCIAL_LINKS } from '../data/site';
import { founderDisplayName } from '../data/team';
import { SITE_NAME } from './seo';

/**
 * Structured data (audit T10). Only facts that are true and on file go in here:
 * the street address and registration number appear once they're set in site.json.
 */
export function organizationSchema(siteUrl: string) {
  const address: Record<string, string> = { '@type': 'PostalAddress', addressCountry: 'MY' };
  if (SITE.registeredAddress) address.streetAddress = SITE.registeredAddress;

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}#organization`,
    name: SITE_NAME,
    ...(SITE.legalName ? { legalName: SITE.legalName } : {}),
    ...(SITE.ssmNumber ? { identifier: SITE.ssmNumber } : {}),
    url: siteUrl,
    logo: new URL('/images/brand/logo.png', siteUrl).toString(),
    image: new URL('/images/og/default.png', siteUrl).toString(),
    description:
      'Fixed-price websites and ready-made business systems for Malaysian SMEs. Full source code, no monthly SaaS fees.',
    email: SITE.email,
    telephone: SITE.phone,
    areaServed: { '@type': 'Country', name: 'Malaysia' },
    address,
    founder: { '@type': 'Person', name: founderDisplayName },
    priceRange: 'RM569 to RM18,690',
    sameAs: SOCIAL_LINKS.map(([, href]) => href)
  };
}

export function breadcrumbSchema(siteUrl: string, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteUrl).toString()
    }))
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a }
    }))
  };
}
