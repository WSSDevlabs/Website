import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Case studies, following the audit 3.18 template. Only entries with
 * `draft: false` AND written permission on file appear on the site.
 */
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
  schema: ({ image }) =>
    z.object({
      /** Client name, or an honest anonymous label such as "Retail chain, Selangor". */
      client: z.string(),
      industry: z.string(),
      offer: z.enum(['websites', 'systems', 'custom']),
      /** The problem, in the client's words (2 to 3 sentences). */
      problem: z.string(),
      built: z.string(),
      /** The result as a number: hours saved, RM saved per year, launch time. */
      result: z.string(),
      screenshots: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      quote: z
        .object({
          text: z.string(),
          name: z.string(),
          role: z.string()
        })
        .optional(),
      /** Written permission to publish the name, logo, screenshots and quote. */
      permissionOnFile: z.boolean().default(false),
      draft: z.boolean().default(true),
      publishDate: z.coerce.date()
    })
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Team member slug from src/data/team.json. Articles carry a named author (audit N3). */
    author: z.string().default('razali'),
    coverImage: z.string(),
    coverAlt: z.string().default(''),
    tags: z.array(z.string()).default([]),
    /** Which offer page the article's closing call to action points to (audit N7). */
    cta: z.enum(['websites', 'systems', 'custom']).default('websites'),
    draft: z.boolean().default(true),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    sourceUrl: z.string().optional(),
    sourceLabel: z.string().optional()
  })
});

export const collections = { caseStudies, posts };
