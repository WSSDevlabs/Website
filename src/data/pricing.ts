import raw from './pricing.json';

export type PricingTier = {
  name: string;
  price: string;
  period?: string;
  segment?: 'launch' | 'expand' | 'grow' | 'custom';
  audience?: string;
  services?: string[];
  highlight?: boolean;
  badge?: string;
  description: string;
  features: string[];
  note?: string;
  cta: string;
  ctaHref: string;
};

export const PRICING_TIERS: PricingTier[] = (raw as { tiers: PricingTier[] }).tiers;
