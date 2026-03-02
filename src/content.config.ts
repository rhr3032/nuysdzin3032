import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
	schema: () =>
		z.object({
			title: z.string(),
			pubDate: z.date(),
			author: z.string(),
			description: z.string(),
			image: z.string().optional(),
			thumbnail: z.string().optional()
		})
})

const projects = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/projects' }),
	schema: () =>
		z.object({
			title: z.string(),
			client: z.string(),
			category: z.string(),
			description: z.string(),
			image: z.string().optional(),
			thumbnail: z.string().optional(),
			year: z.string().optional(),
			services: z.array(z.string()).optional(),
			results: z.array(z.string()).optional(),
			featured: z.boolean().optional()
		})
})

export const collections = {
	blog,
	projects
}
