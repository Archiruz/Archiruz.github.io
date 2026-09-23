# Archiruz Astro + Sanity Portfolio

Personal portfolio website built with Astro SSG + React, Sanity CMS for content management, and Docker Compose + Cloudflare Tunnel for deployment.

## Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start Astro dev server (localhost:4321) |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Lint `.js`, `.jsx`, and `.astro` files (fails on warnings) |
| `npm run deploy` | Build + deploy via Docker Compose |
| `npm run sanity` | Start Sanity Studio dev server (localhost:3333) |

## Architecture

```
src/
  layouts/
    Layout.astro        # Root layout — HTML head, favicon, global CSS
  pages/
    index.astro         # Home page — imports all React components as islands
    blog/
      index.astro       # Blog listing (Sanity-driven, created in Phase 3)
      [slug].astro      # Dynamic blog post routes (Sanity-driven, created in Phase 3)
  styles/
    global.css          # Tailwind v4 imports + custom dark theme CSS
  assets/               # Image assets (profiles, project screenshots, logos)
  components/
    react/              # React components migrated from old src/components/
      Hero.jsx          # Hero section with typewriter animation + tech stack
      Navbar.jsx        # Responsive nav with mobile menu
      Portfolio.jsx     # Project showcase (reversed display order)
      Skills.jsx        # Tech stack grid (Backend / Fullstack / Data Science)
      Experience.jsx    # Work experience timeline
      Contact.jsx       # Contact form (getform.io backend)
      Footer.jsx        # Social links footer
      Reveal.jsx        # Shared framer-motion scroll-animation wrapper
      ShinyEffect.jsx   # Radial gradient glow effect component
  lib/
    sanity.ts           # Sanity client configuration (created in Phase 2)
    queries.ts          # GROQ query definitions (created in Phase 2)
astro.config.mjs        # Astro config — static output, React + Tailwind v4
postcss.config.js       # PostCSS config for @tailwindcss/postcss
eslint.config.js        # ESLint 9 flat config (replaces .eslintrc.cjs)
tsconfig.json           # TypeScript config for SSR/SSG
studio/                 # Sanity Studio workspace (initialized in Phase 2)
  package.json          # Studio scripts (dev, build, start) + Sanity deps
  sanity.config.ts      # Studio config — projectId from env, schema types, structureTool
  sanity.cli.ts         # CLI config for project ID
  schemaTypes/          # Content schema definitions
    schemaTypes.ts      # Index file aggregating all schema types
    post.ts             # Blog post schema (title, slug, publishedAt, excerpt, body, etc.)
    project.ts          # Portfolio project schema (title, slug, image, techStack, etc.)
    experience.ts       # Work experience schema (company, role, period, description)
    skill.ts            # Skill category schema (category, items[], order)
    siteSettings.ts     # Global site settings (fullName, bio, socialLinks, etc.)
    blockContent.ts     # Portable Text rich text type
.github/workflows/
  ci.yml                # CI workflow: lint + build on push/PR to main
Dockerfile.dev          # Development Dockerfile
Dockerfile.prod         # Production multi-stage Dockerfile
docker-compose.yml      # Multi-service: web + cloudflared + sanity
```

## Key Files

- `astro.config.mjs` — Astro config; `output: 'static'`, `site: 'https://archiruz.dev'`, React integration, Tailwind v4 via `@tailwindcss/vite` plugin
- `postcss.config.js` — PostCSS config using `@tailwindcss/postcss` for CSS processing
- `eslint.config.js` — ESLint 9 flat config with `eslint-plugin-astro`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
- `src/pages/index.astro` — Home page; React components rendered as islands with `client:load` and `client:visible` directives
- `src/layouts/layout.astro` — Root layout with `<html>`, `<head>`, `<link rel="icon">`, and `<slot />`
- `src/styles/global.css` — Migrated from old `src/index.css`; `@import "tailwindcss"`
- `.github/workflows/ci.yml` — GitHub Actions CI: lint then build on push/PR to `main`
- `studio/` — Sanity Studio workspace (subdirectory of the main repo) for content management

## Code Style

- Functional components with arrow function syntax (React components)
- Astro `.astro` files for pages and layouts
- Default exports only (no named exports in React components)
- JSX files only (`.jsx`) for React components
- Tailwind CSS utility classes (no CSS modules or styled-components)
- Framer Motion for all animations (`motion.div`, `useInView`, `useAnimation`)
- React Icons from `react-icons/ai`, `react-icons/si`, `react-icons/fa`
- 2-space indentation, mixed quote styles (double/single) — no Prettier enforced

## Deployment

### Docker Compose (Local Development / Production)

```yaml
services:
  web:      # Astro dev server (Dockerfile.dev) on port 4321
  sanity:   # Sanity Studio on port 3333
  cloudflared:  # Cloudflare Tunnel — routes archiruz.dev to web container
```

- `.env.example` — Template for environment variables (Cloudflare tunnel token, Sanity project ID)
- `.cloudflared/config.yml` — Tunnel ingress rules for `archiruz.dev` and `admin.archiruz.dev`
- Run with: `docker compose up --build`

### CI/CD

- GitHub Actions workflow (`.github/workflows/ci.yml`) runs on push/PR to `main`
- Two jobs: `lint` (runs first) → `build` (runs only if lint passes)
- Uses Node.js 20 with npm caching

## Gotchas

- **Portfolio reversal:** `Portfolio.jsx` reverses the projects array (`[...projects].reverse()`) so newest appears first
- **No React import needed:** Astro's React integration handles JSX transform; explicit `import React` in components is unnecessary
- **Contact form:** `Contact.jsx` uses [getform.io](https://getform.io) as the backend — form action is hardcoded (`https://getform.io/f/apjmqgla`), no server-side processing
- **Large asset:** `src/assets/profpic.png` is ~1.1MB — optimize before production use
- **Unused assets:** `project6.png` and `project7.png` existed but have been deleted (were never imported)
- **No tests:** No test runner or test scripts in this project
- **Sanity Studio:** Content for the portfolio and blog is managed via Sanity CMS (`studio/` subdirectory). Studio can be run separately via `npm run sanity` or via the Docker Compose `sanity` service. Requires `SANITY_STUDIO_PROJECT_ID` env var — without a valid project ID, Sanity queries return errors but the site still builds (with empty content).
- **Blog content:** Sourced exclusively from Sanity CMS — no local Markdown fallback. Blog pages use `sanityClient.fetch()` with GROQ queries from `src/lib/queries.ts`.
- **Env variables:** `.env` file required for `SANITY_STUDIO_PROJECT_ID`, `SANITY_STUDIO_DATASET`, and `CLOUDFLARE_TUNNEL_TOKEN`. See `.env.example` for template.
- **Sanity Studio dependencies:** `sanity@^3.97.1` requires React 18 (peer dep: `^18 || ^19`). The `@sanity/astro` integration was not added due to version conflicts — the project uses `@sanity/client` + `@sanity/image-url` directly instead.
