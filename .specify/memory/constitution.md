# my_blog (Jeniebeez's Notebook) Constitution

## Core Principles

### I. Explicit Commit & Push Control (NON-NEGOTIABLE)
All modifications MUST remain uncommitted in the working tree by default. Agents MUST NOT execute `git commit` or `git push` automatically after completing a task or phase. A commit or push is permitted only after the user explicitly confirms and requests it.

### II. Local Preview Before Commit (NON-NEGOTIABLE)
Every change to blog content, styles, layouts, or configuration MUST be verified locally before committing. After making changes, the workflow MUST stop for local preview (`npm run dev` at `http://localhost:4321/my_blog/` or `npm run build && npm run preview`) so the user can inspect the actual rendered blog effect prior to any commit.

### III. Simplicity & Static-First Architecture
Write the minimum code required to solve the stated problem. Preserve the Astro static site structure (`src/content/blog/`, `src/layouts/`, `src/pages/`, `src/styles/`) without introducing speculative dependencies, abstractions, or unrequested configuration options.

## Technical Constraints

- **Framework**: Astro (`^5.5.0`) static site generation deployed to GitHub Pages (`site: 'https://jeniebeez.github.io'`, `base: '/my_blog'`).
- **Content Schema**: Blog posts reside in `src/content/blog/` as Markdown files validated against `src/content.config.ts`.
- **Commit Format**: When a commit is explicitly requested by the user, commit messages MUST follow AngularJS Git Commit Message Conventions (`<type>(<scope>): <subject>`).

## Development Workflow & Quality Gates

1. **Edit**: Apply surgical changes in the working tree without committing.
2. **Local Preview**: Start or guide the user to inspect the local server (`npm run dev`) and verify build integrity (`npm run build`) when applicable.
3. **User Confirmation**: Wait for the user to review the rendered blog locally and confirm satisfaction.
4. **Commit (On Request Only)**: Execute `git commit` (and `git push` only if explicitly requested) after receiving explicit approval.

## Governance

This Constitution and the root `AGENTS.md` define the mandatory workflow constraints for `my_blog` and supersede any automatic commit hooks or default task completion behaviors in Spec Kit workflows. Any amendments to these rules require explicit user approval.

**Version**: 1.0.0 | **Ratified**: 2026-11-19 | **Last Amended**: 2026-11-19
