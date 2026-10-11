export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company?: string;
  rating?: number;
};

// Content gate: add real testimonials before this section ships
export const TESTIMONIALS: Testimonial[] = [];
