import raw from './services.json';

export type ServiceGroup = 'Build' | 'Intelligence' | 'Design & Care' | 'Grow';

export type Service = {
  slug: string;
  title: string;
  group: ServiceGroup;
  shortDescription: string;
  valueProp: string;
  problem: string;
  deliverables: string[];
  approach: string[];
  tools: string[];
  pricingFrom?: string;
  faq: { question: string; answer: string }[];
};

// Editable via the CMS at /data/services.json (see /wss-console/config.yml)
export const SERVICES: Service[] = (raw as { services: Service[] }).services;

export const getServiceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);

export const SERVICE_GROUPS: ServiceGroup[] = ['Build', 'Intelligence', 'Design & Care', 'Grow'];
