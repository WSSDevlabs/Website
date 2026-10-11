import raw from './site.json';

type SocialLinks = {
  linkedin?: string;
  instagram?: string;
  tiktok?: string;
  facebook?: string;
};

type SiteSettings = {
  name: string;
  tagline: string;
  /** Registered business or company name, exactly as on the SSM certificate. */
  legalName: string;
  /** SSM registration number. Required on the site for online selling (audit L1). */
  ssmNumber: string;
  sstNumber: string;
  /** Full registered address. A virtual office is fine if labelled honestly. */
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
  /** Founding Client Programme slots still open (audit 12.4 G). Update honestly. */
  foundingSlotsLeft: number;
  /** Your own measured PageSpeed mobile score, e.g. "96". Shown only when set. */
  pageSpeedMobile: string;
  googleBusinessProfileUrl: string;
  social: SocialLinks;
};

// Editable in the CMS at /wss-console/ (see public/wss-console/config.yml)
export const SITE = raw as SiteSettings;

/** One set of social links, used everywhere (audit K6). Remove any account you don't post on from site.json. */
const socialEntries: [string, string | undefined][] = [
  ['LinkedIn', SITE.social.linkedin],
  ['Instagram', SITE.social.instagram],
  ['TikTok', SITE.social.tiktok],
  ['Facebook', SITE.social.facebook]
];

export const SOCIAL_LINKS = socialEntries.filter((entry): entry is [string, string] => Boolean(entry[1]));

export const phoneHref = `tel:${SITE.phone.replace(/[^+\d]/g, '')}`;

export const whatsappHref = (message: string) =>
  `https://wa.me/${SITE.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

export const DEFAULT_WHATSAPP_MESSAGE = "Hi WSS DevLabs, I'd like to ask about a project.";

/** Display name for legal text: the registered name once it's filled in. */
export const businessName = SITE.legalName || SITE.name;
