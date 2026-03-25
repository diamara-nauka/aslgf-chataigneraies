import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        date: z.coerce.date(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = { blog };
