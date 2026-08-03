import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Superset of the `Project` type (src/types/index.ts): every field there is
// required here too, plus the page-only content the detail template needs
// (steps, pipeline diagram, code example, "Run it yourself" sidebar) that
// doesn't belong in the lean list/stats shape used by the homepage and
// about page.
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    originalApp: z.string(),
    originalPrice: z.number(),
    githubUrl: z.string().url(),
    demoUrl: z.string().url().optional(),
    videoUrl: z.string().url().optional(),
    techStack: z.array(z.string()),
    status: z.enum(["live", "in-progress", "archived"]),
    whatItMatches: z.array(z.string()),
    whereItFallsShort: z.array(z.string()),

    // Excluded from real stats/build-count until the GitHub API lands.
    stars: z.string().default("0"),
    installCommand: z.string(),
    stack: z.array(z.object({ label: z.string(), value: z.string() })),
    steps: z.array(z.object({ title: z.string(), description: z.string() })),
    pipeline: z.array(z.object({ label: z.string(), note: z.string() })),
    codeExample: z.object({ filename: z.string(), code: z.string() }),

    // Marks a template/example entry: excluded from getProjects() (site
    // stats and the homepage grid) but still gets its own page so the
    // template can be visually verified.
    draft: z.boolean().optional(),
  }),
});

export const collections = { projects };
