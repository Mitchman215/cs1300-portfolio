import { defineCollection, z } from 'astro:content';

const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      timeline: z.string(),
      tools: z.array(z.string()),
      summary: z.string(),
      thumbnail: image(), // can add more detailed validation: https://docs.astro.build/en/guides/images/#images-in-content-collections
    }),
});

export const collections = {
  'case-studies': caseStudiesCollection,
};
