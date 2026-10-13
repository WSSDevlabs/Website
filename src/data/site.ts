import raw from './site.json';

type SocialLinks = {
  linkedin?: string;
  instagram?: string;
  tiktok?: string;
  facebook?: string;
  twitter?: string;
};

type SiteSettings = {
  name: string;
  tagline: string;
  /** Registered business or company name, exactly as on the SSM certificate. */
  legalName: string;
  /** SSM registration number. Shown in the footer and every policy once filled in. */
  ssmNumber: string;
  sstNumber: string;
  /** Full registered address. A virtual office is fine if it is labelled honestly. */
  registeredAddress: string;
  baseLocation: string;
  meetings: string;
  email: string;
  privacyEmail: string;
  privacyContact: string;
  /** WhatsApp number in wa.me format: country code and digits only. */
  whatsapp: string;
  phone: string;
  hours: string;
  foundedYear: string;
  /** Founding Client Programme places still open. Update it honestly each time one is taken. */
  foundingSlotsLeft: number;
  /** Your own measured PageSpeed mobile score, for example "96". Shown only when set. */
  pageSpeedMobile: string;
  googleBusinessProfileUrl: string;
  social: SocialLinks;
};

// Editable in the CMS at /wss-console/ (see public/wss-console/config.yml)
export const SITE = raw as SiteSettings;

/** One set of social accounts used everywhere. Blank a link in site.json to hide it sitewide. */
export const SOCIAL_LINKS = (
  [
    ['LinkedIn', SITE.social.linkedin],
    ['Instagram', SITE.social.instagram],
    ['TikTok', SITE.social.tiktok],
    ['Facebook', SITE.social.facebook]
  ] as [string, string | undefined][]
).filter((entry): entry is [string, string] => Boolean(entry[1]));

export const phoneHref = `tel:${SITE.phone.replace(/[^+\d]/g, '')}`;

export const whatsappHref = (message: string) =>
  `https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

export const DEFAULT_WHATSAPP_MESSAGE = "Hi WSS DevLabs, I'd like to ask about a project.";

/** Name used in legal text: the registered name once it is filled in. */
export const businessName = SITE.legalName || SITE.name;
