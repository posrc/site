export type ProjectStatus = "live" | "in-progress" | "archived";

export interface Project {
  slug: string;
  title: string;
  description: string;
  date: Date;
  category: string;
  originalApp: string;
  /** Monthly USD price of the subscription this project replaces. */
  originalPrice: number;
  githubUrl: string;
  demoUrl?: string;
  videoUrl?: string;
  techStack: string[];
  status: ProjectStatus;
  whatItMatches: string[];
  whereItFallsShort: string[];
}
