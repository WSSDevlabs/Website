import { CUSTOM, HOSTING_SITE_YEARLY, HOSTING_STORE_YEARLY, REPLY_PROMISE, formatRM } from './catalog';

export type QA = { q: string; a: string };

/** Home: 5 questions (audit 3.2). */
export const HOME_FAQ: QA[] = [
  {
    q: 'How much does a website cost?',
    a: 'Websites start from RM569. Every package and price is published on the Websites page, with nothing hidden and no SST added.'
  },
  {
    q: 'What does "you own it" actually mean?',
    a: "For websites and custom builds, the design, code and content made for you are yours once you've paid in full, and your domain is registered in your name. For ready-made systems, you get a perpetual licence with the full source code: use it, change it and host it forever, but don't resell it."
  },
  {
    q: 'Are there monthly fees?',
    a: `No software rent. You only pay monthly if you choose a Care Plan for backups, updates and support. Hosting on its own is from ${formatRM(HOSTING_SITE_YEARLY)} a year.`
  },
  {
    q: 'Who will I be talking to?',
    a: 'The builder. WSS DevLabs is founder-led: Razali scopes, builds and supports every project. There are no account managers in between.'
  },
  {
    q: 'How fast do you reply?',
    a: `${REPLY_PROMISE} WhatsApp or the contact form both reach us directly.`
  }
];

/** Websites: 6 questions, collapsed. */
export const WEBSITES_FAQ: QA[] = [
  {
    q: 'What do I need to prepare?',
    a: "Your logo, photos, business details and the text for each page. Short on words? Add copywriting and we'll write it with you. Delays almost always come from missing content, so the sooner it arrives, the sooner you're live."
  },
  {
    q: 'What happens after the first year?',
    a: `Hosting and your domain renew at ${formatRM(HOSTING_SITE_YEARLY)} a year for websites and ${formatRM(HOSTING_STORE_YEARLY)} a year for stores, or they're included in any Care Plan. Your domain is registered in your name, so you can move it whenever you like.`
  },
  {
    q: 'Will moving to a new website hurt my Google rankings?',
    a: "We keep your existing page addresses where we can, and set up redirects for the ones that change, to protect your rankings. Nobody can promise rankings, because Google decides them, but a careful move avoids the usual losses."
  },
  {
    q: 'How do payments work?',
    a: 'One-Page and Business websites: 50% to start, 50% before going live. Store websites: 40% to start, 30% at design approval, 30% before going live. Prices are final, with no SST added.'
  },
  {
    q: 'Can I update the website myself?',
    a: 'Yes, on the Business and Store packages: they come with an easy editor for text, photos and blog posts. On the One-Page website, send us your changes, or choose a Care Plan that includes small edits each month.'
  },
  {
    q: 'Is the speed promise real?',
    a: "We target a 90+ mobile Lighthouse score at handover, measured on the content we agreed. If we miss it, we fix it free. Things added later (very large photos, extra scripts) can lower the score, so we show you how to keep the site fast."
  }
];

/** Systems listing: general questions. */
export const SYSTEMS_FAQ: QA[] = [
  {
    q: 'What is the difference between buying and subscribing?',
    a: 'A subscription is rent: it includes hosting and updates, but the bill never stops and your access ends when you stop paying. Buying means one payment, the source code, and a system that keeps running on your own hosting. You pay your host directly, and you can add a Care Plan if you want us to look after it.'
  },
  {
    q: 'What do I get when I buy a system?',
    a: 'The full source code, the database setup file, a step-by-step install guide, 30 days of WhatsApp support from the builder, bug fixes for 30 days, and 12 months of updates.'
  },
  {
    q: 'What do I need to run it?',
    a: 'A web hosting account that runs PHP 8.2 or newer with a MySQL database, such as cPanel shared hosting or a small VPS. If that sounds unfamiliar, add Installation and we set it all up for you.'
  },
  {
    q: 'Can I see a system working before I buy?',
    a: "Yes. Book a 15-minute screen-share and we'll walk you through the system with sample data."
  },
  {
    q: 'Can a system be changed to fit my business?',
    a: 'Yes. Light branding and small changes are priced on each system page. Bigger changes get a fixed quote, and if nothing ready-made fits, a Custom build starts with a Discovery Sprint.'
  },
  {
    q: "I don't see the system I need.",
    a: 'We have more systems available on request, including a contractor sales pipeline, a virtual service counter and school bus tracking. Tell us what you need and we will tell you honestly whether one fits.'
  }
];

/** Custom: questions, including the takeover answer kept from the old Express FAQ (audit E9). */
export const CUSTOM_FAQ: QA[] = [
  {
    q: 'Why pay for a Discovery Sprint?',
    a: `Because unclear scope is the main reason software projects fail or go over budget. For ${formatRM(CUSTOM.discovery.price)} you get a requirements document, wireframes and a fixed price you can trust, and the fee is credited in full if you go ahead within ${CUSTOM.discovery.creditWindowDays} days.`
  },
  {
    q: "What if I don't go ahead after discovery?",
    a: "You keep every document. Take them to another developer if you like. That's what makes discovery worth paying for."
  },
  {
    q: 'Can you take over an existing project?',
    a: `Yes. We start with a Rescue Audit (${formatRM(CUSTOM.rescueAudit.price)}, credited toward the fix) to see what you have. If the code is worth saving, we work with it; if a rebuild is cheaper in the long run, we say so, with a fixed price for each option. We only access your systems with your written authorisation.`
  },
  {
    q: 'Do you build mobile apps?',
    a: `Yes, from ${formatRM(CUSTOM.mobileApp.from)}, scoped through a Discovery Sprint. App store fees are paid by you, in your name, so you own the listing. Often a fast mobile website does the job for much less; we will tell you which you need.`
  },
  {
    q: 'What if I want changes during the build?',
    a: "Changes inside the agreed scope are part of the build. Anything new gets a written change request with a fixed price before work starts. You never get a surprise bill after the fact."
  },
  {
    q: 'Who owns the finished system?',
    a: "You do. Once you've paid in full, the code, design and content made for your project are yours, with full source code, documentation and credentials. Our reusable building blocks stay ours, and you get a permanent, free licence to use them in your system."
  }
];
