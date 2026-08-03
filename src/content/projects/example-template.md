---
# TEMPLATE / EXAMPLE ENTRY — not a real build.
# Exists only to visually verify src/pages/projects/[slug].astro renders
# every section correctly. `draft: true` excludes it from getProjects()
# (site stats and the homepage grid). Delete this file once the first
# real project ships.
title: "Example Build (Template)"
description: "A placeholder project used to verify the project page template renders correctly. Not a real build."
date: 2026-08-03
category: "Template"
originalApp: "Example SaaS Pro"
originalPrice: 20
githubUrl: "https://github.com/posrc/site"
techStack: ["Astro", "TypeScript"]
status: "in-progress"
draft: true
stars: "0"
installCommand: "git clone https://github.com/posrc/site && cd site && npm install"
stack:
  - label: "Framework"
    value: "Astro + TypeScript"
  - label: "Styling"
    value: "Nocturne design tokens (CSS variables)"
  - label: "Content"
    value: "Astro content collections"
  - label: "Hosting"
    value: "TBD"
steps:
  - title: "Step one (replace this)"
    description: "Describe the first real step of how the build actually works."
  - title: "Step two (replace this)"
    description: "Describe the second real step of how the build actually works."
  - title: "Step three (replace this)"
    description: "Describe the third real step of how the build actually works."
pipeline:
  - label: "input"
    note: "replace with a real pipeline stage"
  - label: "process"
    note: "replace with a real pipeline stage"
  - label: "output"
    note: "replace with a real pipeline stage"
codeExample:
  filename: "example.ts"
  code: |
    // Replace this with a real code example
    export function placeholder() {
      return "template";
    }
whatItMatches:
  - "Renders every section of the project template"
  - "Demonstrates the status/category/star badge row"
  - "Shows the matches / falls-short two-column layout"
whereItFallsShort:
  - "Not a real, working build"
  - "Numbers and copy are placeholders"
  - "Should be removed once a real project ships"
---

This entry exists only to verify that the project page template renders
correctly — every section, badge, and layout. It is not a real build.
Delete it once the first real project ships.
