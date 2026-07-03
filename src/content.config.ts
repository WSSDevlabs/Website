import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      category: z.enum(['Web', 'Mobile', 'System', 'AI']),
      headlineResult: z.string(),
      summary: z.string(),
      heroImage: image(),
      industry: z.string(),
      timeline: z.string(),
      services: z.array(z.string()),
      techStack: z.array(z.string()),
      results: z
        .array(
          z.object({
            label: z.string(),
            value: z.string()
          })
        )
        .default([]),
      gallery: z.array(image()).default([]),
      testimonial: z
        .object({
          quote: z.string(),
          author: z.string(),
          role: z.string()
        })
        .optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(true),
      publishDate: z.coerce.date()
    })
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      author: z.string(),
      coverImage: image(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(true),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional()
    })
});

export const collections = { projects, posts };
