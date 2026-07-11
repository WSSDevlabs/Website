import raw from './team.json';

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  credentials?: string;
  social?: {
    linkedin?: string;
    github?: string;
    instagram?: string;
    twitter?: string;
  };
  skills?: string[];
};

// Editable via the CMS at /data/team.json (see /wss-console/config.yml)
export const TEAM: TeamMember[] = (raw as { members: TeamMember[] }).members;

export const getTeamMemberBySlug = (slug: string) => TEAM.find((m) => m.slug === slug);
