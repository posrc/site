# Project Open Source — site

The source for [projectopensource.org](https://github.com/posrc): rebuilding
subscription AI tools as open-source projects, one build at a time.

## Setup

```sh
npm install
npm run dev       # http://localhost:4321
```

| Command             | Action                                        |
| :------------------ | :--------------------------------------------- |
| `npm install`        | Install dependencies                           |
| `npm run dev`         | Start the local dev server                     |
| `npm run build`       | Build the static site to `./dist/`             |
| `npm run preview`     | Preview the production build locally           |
| `npm run astro check` | Type-check `.astro` files                      |

## Adding a project

Add a Markdown file to `src/content/projects/`, following the schema in
`src/content.config.ts` (a superset of the `Project` type in
`src/types/index.ts`). See `example-template.md` in that directory for every
field the project detail page template expects — it's a `draft: true` entry
kept only to visually verify the template, not a real build.

## Current status — Phase 1

Static scaffold from the Claude Design MCP reference. No GitHub API
integration and no mobile pass yet.

- [x] Astro + TypeScript project scaffold
- [x] Design tokens extracted from the Nocturne design system
- [x] Base layout, nav, and footer
- [x] Homepage hero, live stats bar, empty-state builds grid
- [x] Project content collection + detail page template
- [x] About page
- [ ] Real project entries
- [ ] GitHub API integration (live star counts)
- [ ] Mobile layout pass
- [ ] Search/filter/sort on the builds grid
