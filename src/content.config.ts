import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      category: z.string(),
      status: z.enum(['En ligne', 'En développement', 'Projet personnel']),
      year: z.number().int(),
      order: z.number().int().default(100),
      featured: z.boolean().default(false),
      stack: z.array(z.string()),
      logo: image().optional(),
      color: z.string().default('#2bb3a3'),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      demo: z.url().optional(),
      demoLabel: z.string().default('Voir en ligne'),
      access: z.string().optional(),
      repo: z.url().optional(),
    }),
});

export const collections = { projets };
