## ADDED Requirements

### Requirement: React Vite project initialized
The system SHALL have a Vite + React 18 project scaffolded at `frontend/` with Tailwind CSS v3, React Router DOM v6, Google Fonts (Lora + Nunito), and all Ghibli design tokens configured in `tailwind.config.js`.

#### Scenario: Project builds successfully
- **WHEN** developer runs `npm run dev` inside `frontend/`
- **THEN** the dev server starts at `localhost:5173` without errors

#### Scenario: Tailwind Ghibli tokens available
- **WHEN** any component uses class `bg-ghibli-cream`, `text-ghibli-forest`, `bg-ghibli-sky`
- **THEN** the correct Ghibli palette colors are applied

#### Scenario: Google Fonts loaded
- **WHEN** page loads
- **THEN** Lora (serif) and Nunito (sans-serif) fonts are applied to the document
