import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string().min(4),
    authors: z.array(z.string().min(2)).min(1),
    year: z.number().int().min(1900).max(2100),
    venue: z.string().min(2),
    status: z.enum(['published', 'accepted', 'preprint', 'submitted', 'revised']),
    type: z.enum(['journal', 'conference', 'preprint', 'review']),
    members: z.array(z.string()).min(1),
    topics: z.array(z.enum(['processing', 'inversion', 'algorithms', 'foundation', 'agent'])).min(1),
    featured: z.boolean().default(false),
    doi: z.string().optional(),
    url: z.url(),
    codeUrl: z.url().optional(),
    codeLabel: z.string().optional(),
    verificationSources: z.array(z.url()).min(1),
    verifiedOn: z.coerce.date(),
    summaryZh: z.string().min(12),
    summaryEn: z.string().min(20),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    titleZh: z.string().min(2),
    titleEn: z.string().min(4),
    summaryZh: z.string().min(8),
    summaryEn: z.string().min(12),
    bodyZh: z.string().min(20),
    bodyEn: z.string().min(30),
    date: z.coerce.date(),
    category: z.enum(['project', 'publication', 'team']),
  }),
});

export const collections = { publications, news };
