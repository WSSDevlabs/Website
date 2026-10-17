import raw from './faq.json';

export type FaqItem = { question: string; answer: string };

type FaqData = {
  home: FaqItem[];
  contact: FaqItem[];
  pricing: FaqItem[];
};

const data = raw as FaqData;

export const HOME_FAQ: FaqItem[] = data.home;
export const CONTACT_FAQ: FaqItem[] = data.contact;
export const PRICING_FAQ: FaqItem[] = data.pricing;
