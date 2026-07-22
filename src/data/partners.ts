import raw from './partners.json';

export type Partner = { name: string; logo: string };

// Editable via the CMS at /data/partners.json (see /wss-console/config.yml)
export const PARTNERS = (raw as { partners: Partner[] }).partners;
