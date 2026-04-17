# Design: convert-wireframe-to-tailwind-landing

Structure:
- `resources/views/layouts/app.blade.php` - master layout with Tailwind CDN, Roboto font, and minimal JS.
- `resources/views/components/*` - components for navbar, hero, testimonial, features, CTA, footer.
- `resources/views/pages/landing.blade.php` - assembles components.

Components are built with Tailwind utility classes. Geometric shapes implemented as inline SVG elements or simple divs with borders so no external images are required.

Responsiveness: mobile-first; navbar collapses to a mobile menu; grids collapse to single column on small screens.
