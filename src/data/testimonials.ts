import raw from './testimonials.json';

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
  /** Where the review was given, e.g. "Google". */
  source?: string;
  /** Only real reviews from real clients, with written permission to publish (audit 14.2 O). */
  permissionOnFile: boolean;
};

// Editable in the CMS. Reviews only appear on the site once permission is on file.
export const TESTIMONIALS: Testimonial[] = (raw as { testimonials: Testimonial[] }).testimonials.filter(
  (t) => t.permissionOnFile && t.quote.trim().length > 0
);
