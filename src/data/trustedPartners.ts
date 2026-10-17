// Logos for the home page "Our trusted partner" strip.
// Source files live in WebsiteImage/ (named *-logo.*); optimised copies are in public/images/partners/.
export type TrustedPartner = { name: string; logo: string };

export const TRUSTED_PARTNERS: TrustedPartner[] = [
  { name: 'MDEC', logo: '/images/partners/mdec-logo.webp' },
  { name: 'SME Corp. Malaysia', logo: '/images/partners/smecorp-logo.webp' },
  { name: 'SIDEC', logo: '/images/partners/sidec-logo.webp' },
  { name: 'PayNet', logo: '/images/partners/paynet-logo.webp' },
  { name: 'Lembaga Koko Malaysia', logo: '/images/partners/lkm-logo.webp' },
  { name: 'Universiti Kebangsaan Malaysia', logo: '/images/partners/ukm-logo.webp' },
  { name: 'Universiti Kuala Lumpur', logo: '/images/partners/unikl-logo.webp' },
  { name: 'Universiti Malaysia Perlis', logo: '/images/partners/unimap-logo.webp' }
];
