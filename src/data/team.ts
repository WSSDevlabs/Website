import raw from './team.json';

export type TeamMember = {
  slug: string;
  name: string;
  /** Full name for the About page and article bylines. Shown when set. */
  fullName?: string;
  role: string;
  /** Path to a real photo, e.g. /uploads/razali.jpg. A monogram shows until it's added. */
  photo: string;
  bio: string;
  yearsExperience?: string;
  /** 2 or 3 notable things built, in plain words. */
  notable?: string[];
  social?: {
    linkedin?: string;
    tiktok?: string;
    instagram?: string;
  };
};

// Editable in the CMS at /wss-console/ (see public/wss-console/config.yml)
export const TEAM: TeamMember[] = (raw as { members: TeamMember[] }).members;

export const FOUNDER: TeamMember = TEAM[0];

export const founderDisplayName = FOUNDER.fullName || FOUNDER.name;
