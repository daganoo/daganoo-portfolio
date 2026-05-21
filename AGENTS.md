# AGENTS.md

## Project Overview

Personal portfolio website — single-page application with animated sections showcasing work, skills, and experience.

## Tech Stack

- **React 19** with TypeScript (strict mode)
- **Tailwind CSS v3** for styling
- **Framer Motion v12** for animations
- **React Router v7** for routing
- **Lucide React** for icons
- **Create React App** (react-scripts) for build tooling
- **Jest + React Testing Library** for tests

## Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start dev server on port 3000 |
| `npm build` | Production build to `build/` |
| `npm test` | Run tests in watch mode |
| `npx tsc --noEmit` | Type-check without emitting |

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Navbar.tsx
│   └── Footer.tsx
├── sections/         # Portfolio sections (Hero, About, Projects, etc.)
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   └── Contact.tsx
├── data/             # Static data files
│   └── projects.ts   # Project entries
├── hooks/            # Custom React hooks
├── App.tsx           # Root component with routes
├── index.tsx         # Entry point (BrowserRouter wrapper)
└── index.css         # Tailwind directives + global styles
```

## Conventions

### TypeScript
- Strict mode is enabled — no `any` without good reason.
- Export types/interfaces alongside their consumers. Use `interface` for objects, `type` for unions/primitives.
- Components return `React.FC` or `JSX.Element`.

### Components
- **Function components only** — no class components.
- Named exports for components in `components/` and `sections/`. Default export for `App`.
- Keep components focused: each section in `sections/` is self-contained with its own animations.
- Co-locate styles using Tailwind utility classes. No separate CSS files for components unless unavoidable.

### Tailwind CSS
- The `content` array in `tailwind.config.js` must include `"./src/**/*.{js,jsx,ts,tsx}"`.
- Extend the default theme for brand colors, fonts, and custom values rather than hardcoding raw values.
- Use responsive prefixes (`sm:`, `md:`, `lg:`) for breakpoints. Mobile-first approach.
- Use `dark:` prefix if dark mode is added.

### Framer Motion
- Import from `framer-motion`: `motion` for animated elements, `AnimatePresence` for enter/exit transitions.
- Prefer `whileInView` with `viewport={{ once: true }}` for scroll-triggered section animations.
- Use consistent animation variants defined as objects (e.g., `fadeIn`, `slideUp`, `staggerContainer`).
- Wrap page transitions in `<AnimatePresence mode="wait">`.

### React Router
- Wrap `<App />` in `<BrowserRouter>` in `index.tsx`.
- Define routes in `App.tsx` using `<Routes>` and `<Route>`.
- Single-page scroll-based navigation is the primary pattern. Use `<Link>` for internal navigation and hash anchors for sections.

### Data
- Portfolio data lives in `src/data/`. Each data file exports a typed array.
- `projects.ts` should export a typed array with fields: `title`, `description`, `tags`, `image`, `links` (live/demo, source), and optionally `featured`.
- No hardcoded strings in components — all copy should reference data files.

### Testing
- Test files use `*.test.tsx` pattern, co-located with the component being tested.
- Use `@testing-library/react` for rendering and queries.
- Prefer `getByRole`, `getByText`, `getByTestId` (in that order) for element selection.
- Run `npm test` to execute tests in watch mode.

### General
- No comments unless the logic is non-obvious.
- Import order: React/libraries → components/sections → data → types.
- All copy and content should be in data files, not hardcoded in JSX.
