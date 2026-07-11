import raw from './site.json';

type SocialLinks = {
  linkedin: string;
  instagram: string;
  github: string;
  facebook: string;
  twitter: string;
};

type SiteSettings = {
  name: string;
  tagline: string;
  legalName: string;
  ssmNumber: string;
  sstNumber: string;
  email: string;
  whatsapp: string;
  phone: string;
  address: string;
  hours: string;
  social: SocialLinks;
};

// Editable via the CMS at /data/site.json (see /wss-console/config.yml)
export const SITE = raw as SiteSettings;
