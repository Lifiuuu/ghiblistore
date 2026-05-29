## Why

The existing Ghibli project has a working Laravel Blade landing page with a magical aesthetic, but lacks a full e-commerce frontend. We need to migrate the existing Blade landing page to React, extend the design system across 13 pages, and build a complete customer + admin UI for "Ghibli Treasures" — a Studio Ghibli-themed merchandise store — using React JS and Tailwind CSS.

## What Changes

- **NEW**: Initialize a standalone React + Vite + Tailwind CSS frontend project inside `frontend/` directory within the workspace
- **NEW**: Translate all existing Laravel Blade components (hero, navbar, footer, feature sections, CTA form, testimonial) into modular React components preserving the original Ghibli design tokens
- **NEW**: Refine the Blade-derived design system to match "Ghibli Store" concept — pastel sky blue (#7BA7BC), forest green (#2E4F3B), warm cream (#F9F6F0), accent peach (#FAD6C0), accent yellow (#F7E9A7) with soft rounded corners
- **NEW**: 20-item hardcoded dummy product JSON (Ghibli merchandise, prices in IDR)
- **NEW**: Dummy article JSON for promotional blog content
- **NEW**: 13 fully responsive pages (Mobile / Tablet / Desktop):
  1. Landing Page (translated from Blade)
  2. Katalog Produk
  3. Detail Produk
  4. Keranjang
  5. Pembayaran
  6. History Transaksi
  7. Arsip Artikel
  8. Detail Artikel
  9. Dashboard Admin
  10. Kelola Produk (Admin)
  11. Kelola Artikel (Admin)
  12. Kelola Pengguna (Admin)
  13. Kelola Transaksi (Admin)
- **NEW**: Shared components: `Navbar`, `Footer`, `ProductCard`, `AdminSidebar`, `AdminHeader`
- **NEW**: React Router for client-side navigation between all 13 pages
- Frontend only — no backend, no real API calls

## Capabilities

### New Capabilities

- `react-setup`: Initialize React + Vite + Tailwind CSS project structure with Ghibli design tokens configured in `tailwind.config.js`
- `landing-page`: Translated React landing page from existing Blade components (hero carousel, testimonial, feature cards, dark/light split sections, CTA form, footer)
- `katalog-produk`: Product catalogue grid displaying all 20 dummy merchandise items with filter/search UI
- `detail-produk`: Individual product detail page with image, description, price (IDR), and add-to-cart action
- `keranjang`: Shopping cart page showing selected items, quantities, subtotal, and checkout CTA
- `pembayaran`: Checkout/payment form page with order summary and form fields
- `history-transaksi`: Order history list page showing past transactions with status badges
- `arsip-artikel`: Article archive grid page showing promotional Ghibli blog posts from dummy JSON
- `detail-artikel`: Individual article detail page with full content rendering
- `admin-dashboard`: Admin dashboard with stats overview cards and recent activity
- `admin-kelola-produk`: Admin product management table with all 20 dummy items (CRUD UI)
- `admin-kelola-artikel`: Admin article management table with dummy articles
- `admin-kelola-pengguna`: Admin user management table with dummy user data
- `admin-kelola-transaksi`: Admin transaction management table with dummy order data
- `shared-components`: Reusable Navbar, Footer, ProductCard, AdminSidebar, AdminHeader components

### Modified Capabilities

## Impact

- **New directory**: `frontend/` — standalone Vite React app (does not affect existing Laravel project)
- **Existing Blade files**: Read-only reference — no modifications to Laravel code
- **Dependencies added**: `react`, `react-dom`, `react-router-dom`, `vite`, `@vitejs/plugin-react`, `tailwindcss`, `@tailwindcss/vite`
- **No backend changes**: Pure frontend, static dummy data only
