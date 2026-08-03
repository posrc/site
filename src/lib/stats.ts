import type { Project } from "../types";

export interface SiteStats {
  subscriptionsReplacedPerYear: number;
  toolsRebuilt: number;
  liveNow: number;
  githubStars: number;
}

/**
 * Shared by the homepage and the about page so the numbers can never
 * drift between the two.
 */
export function computeStats(projects: Project[]): SiteStats {
  return {
    subscriptionsReplacedPerYear: projects.reduce(
      (sum, p) => sum + p.originalPrice * 12,
      0,
    ),
    toolsRebuilt: projects.length,
    liveNow: projects.filter((p) => p.status === "live").length,
    // No GitHub API integration yet (see CLAUDE.md phase notes) — no star
    // counts are tracked, so this is genuinely 0 rather than a placeholder.
    githubStars: 0,
  };
}
