export type FaqItem = { question: string; answer: string };

export const HOME_FAQ: FaqItem[] = [
  {
    question: 'What kinds of projects do you take on?',
    answer:
      'Websites, mobile apps, custom CMS/ERP systems, and AI-powered features — for startups launching and growing companies that need something built right the first time.'
  },
  {
    question: 'Do you build with WordPress or page builders?',
    answer:
      'No. Every site is custom-coded from scratch, which is what makes the speed and Lighthouse scores possible.'
  },
  {
    question: 'How is pricing structured?',
    answer:
      'Most engagements are quote-based after a scoping call, since scope drives cost more than a flat package ever could.'
  },
  {
    question: 'Who will I actually be working with?',
    answer:
      'You work directly with the engineer building your project — not an account manager relaying messages.'
  }
];

export const CONTACT_FAQ: FaqItem[] = [
  {
    question: 'How fast do you respond?',
    answer: 'We aim to respond to every enquiry within one business day.'
  },
  {
    question: 'What should I include in my message?',
    answer:
      'A short description of what you need, your rough timeline, and a budget range — it helps us scope an honest answer faster.'
  }
];
