import raw from './career.json';

export type JobOpening = {
  title: string;
  experience: string;
  positions: string;
  type: string;
  responsibilities: string[];
  skills: string[];
};

export type Benefit = {
  icon: string;
  title: string;
  desc: string;
};

type CareerData = {
  benefits: Benefit[];
  openings: JobOpening[];
  galleryImages: string[];
};

const data = raw as CareerData;

// Editable via the CMS at /data/career.json (see /wss-console/config.yml)
export const BENEFITS: Benefit[] = data.benefits;
export const JOB_OPENINGS: JobOpening[] = data.openings;
export const CAREER_GALLERY: string[] = data.galleryImages;
