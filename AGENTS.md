## Project Open Source — site

Static Astro/TypeScript site scaffolded from the Claude Design MCP reference
("Project Open Source Portfolio", the Nocturne design system).

- **Design tokens**: `src/styles/tokens.css` — CSS variables copied verbatim
  from the Nocturne design system, not approximated. `src/styles/global.css`
  imports it and adds the component classes (`.btn`, `.tag`, `.nav`, `.card`,
  `.table`, `.hr`, `.input`) built on top of those tokens.
- **`Project` type**: `src/types/index.ts` — the lean shape used by the
  homepage grid, stats, and about page (slug, title, description, date,
  category, originalApp, originalPrice, githubUrl, demoUrl?, videoUrl?,
  techStack, status, whatItMatches, whereItFallsShort). The content
  collection schema in `src/content.config.ts` is a superset of this type,
  adding page-only fields (steps, pipeline, code example, run-it-yourself
  sidebar, `draft`) that the detail template needs but the list views don't.
- **Stats**: `src/lib/stats.ts` (`computeStats`) and `src/lib/projects.ts`
  (`getProjects`) are the single source of truth for every number shown on
  the site — reused by both the homepage and the about page. `getProjects()`
  excludes `draft: true` entries (e.g. the template/example project) from
  real counts. GitHub star counts are hardcoded to 0 pending the GitHub API
  integration noted below — there's no fake data standing in for it.
- **Current phase**: Phase 1 complete — static scaffold, no GitHub API, no
  mobile pass yet.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
