export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company?: string;
  rating?: number;
};

// Content gate: only real reviews, quoted word for word, with the client's written permission.
// The reviews section stays hidden on every page until this list has at least one entry.
export const TESTIMONIALS: Testimonial[] = [];
