import type { Project } from "../types";

/**
 * Real data-access boundary for project entries. Returns [] until the
 * content collection lands (Group 3) — callers never need to change when
 * that backing store is filled in.
 */
export async function getProjects(): Promise<Project[]> {
  return [];
}
