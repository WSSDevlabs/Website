import raw from './partners.json';

export type Partner = { name: string; logo: string };

export const PARTNERS = (raw as { partners: Partner[] }).partners;
