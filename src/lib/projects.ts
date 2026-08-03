import { getCollection } from "astro:content";
import type { Project } from "../types";

/**
 * Real data-access boundary for project entries: the published subset of
 * the content collection, mapped down to the lean `Project` shape used by
 * the homepage grid, stats, and about page. Draft/template entries (see
 * src/content/projects/example-template.md) are excluded so they never
 * affect real numbers.
 */
export async function getProjects(): Promise<Project[]> {
  const entries = await getCollection("projects", ({ data }) => !data.draft);

  return entries
    .map((entry): Project => {
      const {
        title,
        description,
        date,
        category,
        originalApp,
        originalPrice,
        githubUrl,
        demoUrl,
        videoUrl,
        techStack,
        status,
        whatItMatches,
        whereItFallsShort,
      } = entry.data;

      return {
        slug: entry.id,
        title,
        description,
        date,
        category,
        originalApp,
        originalPrice,
        githubUrl,
        demoUrl,
        videoUrl,
        techStack,
        status,
        whatItMatches,
        whereItFallsShort,
      };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());
}
