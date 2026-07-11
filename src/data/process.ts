export type ProcessPhase = {
  phase: 'Strategize' | 'Build' | 'Evolve';
  summary: string;
  steps: string[];
};

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    phase: 'Strategize',
    summary:
      'Discovery, requirements, design direction, and a clear roadmap before any code is written.',
    steps: [
      'Discovery and requirements gathering',
      'Feasibility / readiness assessment for AI work',
      'Information architecture and design direction',
      'Scope, timeline, and roadmap sign-off'
    ]
  },
  {
    phase: 'Build',
    summary: 'Development, integration, and QA in a typed, version-controlled, staged environment.',
    steps: [
      'Iterative development in staged sprints',
      'Third-party and backend integration',
      'Continuous QA and performance checks',
      'Stakeholder review checkpoints'
    ]
  },
  {
    phase: 'Evolve',
    summary:
      'Launch, then ongoing optimisation, support, and, where AI is involved, tuning over time.',
    steps: [
      'Launch and handover with documentation',
      'Monitoring and performance optimisation',
      'Ongoing maintenance and support',
      'Tuning / retraining for AI features, where offered'
    ]
  }
];
