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

// Content gate: add real team members before this section ships
export const TEAM: TeamMember[] = [];

export const getTeamMemberBySlug = (slug: string) => TEAM.find((m) => m.slug === slug);
