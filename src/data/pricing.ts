import raw from './pricing.json';

export type PricingTier = {
  name: string;
  price: string;
  period?: string;
  highlight?: boolean;
  badge?: string;
  description: string;
  features: string[];
  cta: string;
  ctaHref: string;
};

// Editable via the CMS at /data/pricing.json (see /wss-console/config.yml)
export const PRICING_TIERS: PricingTier[] = (raw as { tiers: PricingTier[] }).tiers;
