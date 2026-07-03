export type JobOpening = {
  slug: string;
  title: string;
  type: 'Full Time' | 'Part Time' | 'Contract' | 'Remote';
  experience: string;
  openings: number;
  responsibilities: string[];
  qualifications: string[];
};

export type Benefit = {
  title: string;
  description: string;
  icon: string;
};

// Content gate: add real job openings before this section ships
export const JOB_OPENINGS: JobOpening[] = [];

export const BENEFITS: Benefit[] = [
  {
    title: 'Remote-first',
    description: 'Work from anywhere in Malaysia. We care about output, not office hours.',
    icon: 'remote'
  },
  {
    title: 'Direct ownership',
    description: 'You talk to the client and own your work end-to-end — no middlemen.',
    icon: 'ownership'
  },
  {
    title: 'Real engineering',
    description: 'Custom-coded, typed, version-controlled. We don\'t do page builders.',
    icon: 'engineering'
  },
  {
    title: 'Flexible hours',
    description: 'Core overlap hours with full flexibility around personal commitments.',
    icon: 'time'
  },
  {
    title: 'Learn & grow',
    description: 'Budget for courses, books, and conference tickets every year.',
    icon: 'growth'
  },
  {
    title: 'Performance bonus',
    description: 'When the project wins, the team wins. Transparent bonus structure.',
    icon: 'bonus'
  }
];

export const getJobBySlug = (slug: string) => JOB_OPENINGS.find((j) => j.slug === slug);
