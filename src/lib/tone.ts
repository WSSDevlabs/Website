import type { ServiceGroup } from '../data/services';

export type Tone = 'neutral' | 'red' | 'blue' | 'yellow' | 'green';

export const GROUP_TONE: Record<ServiceGroup, Tone> = {
  Build: 'blue',
  Intelligence: 'red',
  'Design & Care': 'yellow',
  Grow: 'green'
};

export const CATEGORY_TONE: Record<string, Tone> = {
  Web: 'blue',
  Mobile: 'yellow',
  System: 'neutral',
  AI: 'red'
};

export const TONE_TEXT_CLASS: Record<Tone, string> = {
  neutral: 'text-ink-dim',
  red: 'text-accent-red',
  blue: 'text-accent',
  yellow: 'text-accent-yellow',
  green: 'text-accent-green'
};

export const TONE_BORDER_CLASS: Record<Tone, string> = {
  neutral: 'border-line text-ink-dim',
  red: 'border-accent-red/40 text-accent-red',
  blue: 'border-accent/40 text-accent',
  yellow: 'border-accent-yellow/40 text-accent-yellow',
  green: 'border-accent-green/40 text-accent-green'
};

export const TONE_BG_SOFT_CLASS: Record<Tone, string> = {
  neutral: 'bg-ink/5',
  red: 'bg-accent-red/8',
  blue: 'bg-accent/8',
  yellow: 'bg-accent-yellow/10',
  green: 'bg-accent-green/8'
};
