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
    slug: 'web-software-app-development',
    title: 'Web, System & Mobile App Development',
    tagline: 'Build',
    description:
      'Custom-coded websites, mobile apps, and internal systems, built from scratch around your goals instead of bent to fit a template.',
    services: ['web-development', 'mobile-app-development', 'custom-systems', 'student-project-support']
  },
  {
    slug: 'digital-design-media-marketing',
    title: 'Digital Design & Media Marketing',
    tagline: 'Design & Grow',
    description:
      'Interface design, brand identity, product photography, video, and the marketing campaigns that put it all in front of the right customers.',
    services: ['ui-ux-design', 'branding-services', 'product-photoshoot-marketing', 'media-creation', 'digital-marketing']
  },
  {
    slug: 'digital-consulting-solutions',
    title: 'Digital Consulting & Solutions',
    tagline: 'Grow & Care',
    description:
      'Growth strategy, grant-funded project support, full business launch bundles, and the ongoing care that keeps everything running after launch.',
    services: ['business-growth', 'grant-government-project-support', 'business-startup-package', 'maintenance-support']
  },
  {
    slug: 'artificial-intelligence-automation',
    title: 'Artificial Intelligence & Automation',
    tagline: 'Intelligence',
    description:
      'LLM-powered features, RAG pipelines, and workflow automation, integrated where it meaningfully improves your product or team, not as a thin wrapper.',
    services: ['ai-development']
  },
  {
    slug: 'iot-solutions-infrastructure',
    title: 'IoT Solutions & Infrastructure',
    tagline: 'Connect',
    description:
      'Connected devices, sensor networks, and the infrastructure to collect, monitor, and act on real-world data alongside your software.',
    services: ['iot-development']
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
