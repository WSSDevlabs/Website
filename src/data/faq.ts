import raw from './faq.json';

export type FaqItem = { question: string; answer: string };

type FaqData = {
  home: FaqItem[];
  contact: FaqItem[];
};

const data = raw as FaqData;

// Editable via the CMS at /data/faq.json (see /wss-console/config.yml)
export const HOME_FAQ: FaqItem[] = data.home;
export const CONTACT_FAQ: FaqItem[] = data.contact;
