import raw from './site.json';

type SocialLinks = {
  linkedin: string;
  instagram: string;
  tiktok: string;
  facebook: string;
  twitter?: string;
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

export const SITE = raw as SiteSettings;
