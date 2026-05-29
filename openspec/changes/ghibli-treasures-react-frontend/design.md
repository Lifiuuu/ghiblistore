## Context

The existing workspace is a Laravel project with a Blade-based landing page built with the "Ghibli Atelier" aesthetic. The Blade components define a rich design system: Ghibli color palette (cream, forest green, sky blue, peach, gold), custom animations (float-slow, float-medium, pulse-glow), leaf shapes, card animations, and section layout utilities — all stored in `public/css/ghibli-utilities.css`.

The goal is to create a standalone React frontend at `frontend/` that faithfully translates this design system and extends it across 13 e-commerce pages. This frontend is decoupled from Laravel and serves as a pure UI preview with hardcoded dummy data.

## Goals / Non-Goals

**Goals:**
- Bootstrap a Vite + React 18 + Tailwind CSS 3 project in `frontend/`
- Translate all Blade components to React JSX with identical Ghibli design tokens
- Add magical animation classes (float, pulse-glow, leaf shapes) via `src/index.css`
- Configure Tailwind with exact Ghibli color tokens and custom fonts (Lora + Nunito from Google Fonts)
- Build 13 responsive pages using React Router DOM
- Use 20 hardcoded Ghibli merchandise items with IDR prices
- Use dummy articles JSON for blog/article pages
- Admin section (pages 9–13) uses a sidebar layout with `AdminSidebar` + `AdminHeader`
- Public section (pages 1–8) uses the store `Navbar` + `Footer`

**Non-Goals:**
- No real authentication or authorization
- No API calls or backend integration
- No state persistence (cart resets on refresh)
- No i18n — UI text is in Indonesian where specified, English for labels
- No build optimization / production deployment

## Decisions

### Decision 1: Project Location — `frontend/` subdirectory
**Chosen**: Create a new Vite React app at `c:\laragon\www\ghiblishop\frontend\`  
**Rationale**: Keeps the React project separate from the Laravel codebase while staying in the same workspace. The Laravel app can coexist without interference.  
**Alternative considered**: Replacing the Laravel setup entirely — rejected to avoid breaking existing work.

### Decision 2: Tailwind CSS v3 (not v4)
**Chosen**: Tailwind CSS v3 with `tailwind.config.js`  
**Rationale**: The existing `package.json` already uses `@tailwindcss/vite` (Tailwind v4 approach), but the Blade layout uses Tailwind v3-style `tailwind.config` object injection. For the React frontend, using Tailwind v3 provides better compatibility with `tailwind.config.js` for custom color tokens and gives more stable utility class support.  
**Alternative**: Tailwind v4 with CSS-first config — would require rewriting all color token references.

### Decision 3: React Router DOM for navigation
**Chosen**: `react-router-dom` v6 with `HashRouter`  
**Rationale**: No server-side routing needed; HashRouter works with any static file server including Laragon's localhost. All 13 page routes defined in `App.jsx`.

### Decision 4: Ghibli Design Token Strategy
**Chosen**: Tailwind `tailwind.config.js` `extend.colors` + `src/index.css` for custom animations  
**Rationale**: Mirrors the original Blade setup exactly. Colors like `ghibli-cream`, `ghibli-forest`, `ghibli-sky`, `ghibli-text`, `ghibli-accent-yellow`, `ghibli-accent-peach` will be Tailwind utilities. Animations (float-slow, float-medium, pulse-glow, shape-leaf, card-anim, btn-pop, reveal-*) are defined as CSS classes in `src/index.css` — same approach as `ghibli-utilities.css`.

### Decision 5: Admin vs Public Layout separation
**Chosen**: Two layout components — `PublicLayout` (Navbar + outlet + Footer) and `AdminLayout` (AdminSidebar + AdminHeader + outlet)  
**Rationale**: Admin pages have completely different chrome from public pages. React Router v6 nested routes make layout composition clean and straightforward.

### Decision 6: Dummy data — inline JSON files
**Chosen**: `src/data/products.js` and `src/data/articles.js` as ES module exports  
**Rationale**: Simple, no extra tooling. Components import data directly, React renders it. Easy to extend later with a real API.

### Decision 7: Particle/leaf animations in React
**Chosen**: Generate particle arrays in the component using `useMemo` with fixed seed values (not random on every render)  
**Rationale**: The Blade template uses PHP `rand()` to generate particles on the server — in React we must avoid re-generating on every render or hydration. Using `useMemo` with a deterministic array ensures stable animation positions.

## Risks / Trade-offs

- **Risk**: Leaf particle rendering (20 leaves + 60 sparkles in Hero) may cause performance issues on low-end devices → **Mitigation**: Wrap in `useMemo`; use CSS transforms and `will-change: transform`; limit to hero section only
- **Risk**: Placeholder image URLs (`placehold.co`) may be blocked by CORS or network → **Mitigation**: All image URLs are `<img>` tags, CORS not an issue; fallback alt text always present
- **Risk**: Tailwind v3 purging — custom CSS class names like `animate-float-slow` defined in CSS but used conditionally in JSX may be purged → **Mitigation**: Add custom animation classes to Tailwind `safelist` or define them purely in `index.css` (not as Tailwind utilities)
- **Risk**: `frontend/` directory adds node_modules duplication → **Mitigation**: Acceptable for a dev preview; `.gitignore` should exclude `frontend/node_modules`

## Migration Plan

1. Scaffold React app with Vite in `frontend/` using `npx create-vite@latest`
2. Install dependencies: `react-router-dom`, Tailwind CSS v3, `@tailwindcss/vite` or `postcss`
3. Configure Tailwind with Ghibli color tokens
4. Migrate `ghibli-utilities.css` content into `src/index.css`
5. Build components in order: shared → layout → pages
6. Run `npm run dev` to serve at `localhost:5173`

## Open Questions

- None — all design decisions are resolved above.
