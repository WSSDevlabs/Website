import { SERVICES, type Service } from './services';

export type ServiceCategory = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  services: string[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: 'artificial-intelligence-automation',
    title: 'Artificial Intelligence & Automation',
    tagline: 'Intelligence',
    description:
      'AI and automation can take the repetitive work off your team, answer your customers faster and help you make decisions with confidence. We start with the part of your day that feels heaviest, and build the help around it.',
    services: ['ai-development', 'custom-ml-model', 'ai-chatbot', 'ai-analytics', 'workflow-automation', 'computer-vision']
  },
  {
    slug: 'iot-solutions-infrastructure',
    title: 'IoT Solutions & Infrastructure',
    tagline: 'Connect',
    description:
      "IoT lets your equipment, buildings and fields tell you what is happening, without anyone having to check. You hear about a problem as it starts, save time and money, and make calmer decisions from real numbers.",
    services: ['iot-development']
  },
  {
    slug: 'web-software-app-development',
    title: 'Systems, Web & Mobile App Development',
    tagline: 'Build',
    description:
      "A good website, app or system should make your day easier, not add to it. We build the tools your customers and your team actually use, shaped around how your business really works, and we stay beside you after launch.",
    services: ['web-development', 'mobile-app-development', 'custom-systems', 'ui-ux-system-redesign']
  },
  {
    slug: 'digital-design-media-marketing',
    title: 'Digital Design & Media Marketing',
    tagline: 'Design & Grow',
    description:
      "People decide quickly whether they trust a business. We help you look credible and be easy to remember, through design, photos, video and marketing, so the right customers find you and feel comfortable choosing you.",
    services: ['ui-ux-design', 'branding-services', 'product-photoshoot-marketing', 'media-creation', 'digital-marketing']
  },
  {
    slug: 'digital-consulting-solutions',
    title: 'Digital Consulting & Solutions',
    tagline: 'Grow & Care',
    description:
      "Sometimes you do not need a new tool yet, just a clear plan and someone to talk it through. We help you find the right next step, apply for grants where they fit, launch properly, and keep everything running afterwards.",
    services: ['business-growth', 'grant-government-project-support', 'business-startup-package', 'maintenance-support']
  }
];

export const getCategoryBySlug = (slug: string) => SERVICE_CATEGORIES.find((c) => c.slug === slug);

export const getCategoryForService = (serviceSlug: string) =>
  SERVICE_CATEGORIES.find((c) => c.services.includes(serviceSlug));

export const getServicesForCategory = (category: ServiceCategory): Service[] =>
  category.services
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is Service => Boolean(s));

export const serviceHref = (serviceSlug: string): string => {
  const category = getCategoryForService(serviceSlug);
  return category ? `/services/${category.slug}#${serviceSlug}` : '/services';
};
