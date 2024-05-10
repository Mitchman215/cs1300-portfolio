import { defineCollection, z } from 'astro:content';

// 2. Define your collection(s)
const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.array(z.string()),
    timeline: z.string(),
    tools: z.array(z.string()),
    image: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'cases-studies': caseStudiesCollection,
};
