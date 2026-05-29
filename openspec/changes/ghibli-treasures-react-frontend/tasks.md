## 1. Project Setup

- [x] 1.1 Scaffold Vite + React 18 project in `frontend/` using `npm create vite@latest frontend -- --template react`
- [x] 1.2 Install dependencies: `react-router-dom`, `tailwindcss`, `postcss`, `autoprefixer`
- [x] 1.3 Configure `tailwind.config.js` with Ghibli color tokens (`ghibli-cream`, `ghibli-forest`, `ghibli-sky`, `ghibli-text`, `ghibli-accent-yellow`, `ghibli-accent-peach`), custom fonts (`Lora`, `Nunito`), and `boxShadow.soft`
- [x] 1.4 Import Google Fonts (Lora + Nunito) in `index.html` via `<link>` tags
- [x] 1.5 Migrate `ghibli-utilities.css` content (animations, section utilities, card-anim, btn-pop, shape-leaf, reveal-*) into `src/index.css`
- [x] 1.6 Configure Tailwind `content` paths in `tailwind.config.js` to include `./src/**/*.{js,jsx}`
- [x] 1.7 Verify dev server starts with `npm run dev` and Tailwind Ghibli classes resolve

## 2. Dummy Data

- [x] 2.1 Create `src/data/products.js` with 20 hardcoded Ghibli merchandise items (id, name, category, description, price in IDR, stock, imageUrl using `placehold.co` pastel URLs)
- [x] 2.2 Create `src/data/articles.js` with 8 dummy promotional Ghibli articles (id, title, category, excerpt, content, author, authorAvatar, publishDate, coverUrl, status)
- [x] 2.3 Create `src/data/users.js` with 10 dummy user accounts (id, name, email, role, avatar, joinDate, status)
- [x] 2.4 Create `src/data/transactions.js` with 12 dummy orders (id, orderId, customer, items, total IDR, paymentMethod, status, date)

## 3. Shared Components

- [x] 3.1 Create `src/components/Navbar.jsx` — brand "Ghibli Treasures", nav links (Beranda, Katalog, Artikel, Keranjang with item count badge, Login), mobile hamburger menu with state toggle
- [x] 3.2 Create `src/components/Footer.jsx` — translated from `footer.blade.php`, animated leaf/sparkle particles (useMemo), nav links, brand, palette swatches, copyright
- [x] 3.3 Create `src/components/ProductCard.jsx` — image, category badge, name, IDR-formatted price, "Tambah ke Keranjang" button, card-anim hover effect
- [x] 3.4 Create `src/components/ArticleCard.jsx` — cover image, category badge, title, excerpt, author, date, link to detail
- [x] 3.5 Create `src/components/AdminSidebar.jsx` — logo, nav links (Dashboard, Produk, Artikel, Pengguna, Transaksi) with active state via `useLocation`, logout button
- [x] 3.6 Create `src/components/AdminHeader.jsx` — page title (dynamic), admin avatar/name, notification bell icon
- [x] 3.7 Create `src/components/Modal.jsx` — reusable modal overlay with close button, title slot, and children content
- [x] 3.8 Create `src/components/Badge.jsx` — reusable color-coded badge component for status/role labels
- [x] 3.9 Create `src/components/StatCard.jsx` — admin dashboard stat card with icon, label, and value
- [x] 3.10 Create `src/components/Pagination.jsx` — page number buttons with prev/next controls

## 4. Layouts & Routing

- [x] 4.1 Create `src/layouts/PublicLayout.jsx` — renders `<Navbar />`, `<Outlet />`, `<Footer />`
- [x] 4.2 Create `src/layouts/AdminLayout.jsx` — renders `<AdminSidebar />` + `<AdminHeader />` + `<Outlet />`
- [x] 4.3 Configure `src/App.jsx` with React Router DOM `HashRouter` and all 13 routes:
  - `/` → LandingPage (PublicLayout)
  - `/katalog` → KatalogProduk (PublicLayout)
  - `/produk/:id` → DetailProduk (PublicLayout)
  - `/keranjang` → Keranjang (PublicLayout)
  - `/pembayaran` → Pembayaran (PublicLayout)
  - `/history` → HistoryTransaksi (PublicLayout)
  - `/artikel` → ArsipArtikel (PublicLayout)
  - `/artikel/:id` → DetailArtikel (PublicLayout)
  - `/admin` → AdminDashboard (AdminLayout)
  - `/admin/produk` → AdminKelolaProdk (AdminLayout)
  - `/admin/artikel` → AdminKelolaArtikel (AdminLayout)
  - `/admin/pengguna` → AdminKelolaUser (AdminLayout)
  - `/admin/transaksi` → AdminKelolaTransaksi (AdminLayout)
- [x] 4.4 Create `src/context/CartContext.jsx` — React Context for cart state (items array, addItem, removeItem, updateQuantity, clearCart)

## 5. Landing Page (Translation from Blade)

- [x] 5.1 Create `src/pages/LandingPage.jsx` — assembles Hero, TestimonialSimple, FeatureDarkSplit, FeatureGridCards, FeatureLightSplit, CTAForm sections
- [x] 5.2 Create `src/components/landing/Hero.jsx` — translated from `hero.blade.php`: glowing blobs, 20 leaf particles (useMemo), 60 sparkles (useMemo), headline, subtitle, CTA button, 3-slide carousel with auto-advance and dot indicators
- [x] 5.3 Create `src/components/landing/TestimonialSimple.jsx` — blockquote, avatar, author name
- [x] 5.4 Create `src/components/landing/FeatureDarkSplit.jsx` — forest green background, text left, image right, quote
- [x] 5.5 Create `src/components/landing/FeatureGridCards.jsx` — "Discover Our Collection" section with 4 product-category feature cards on forest green background
- [x] 5.6 Create `src/components/landing/FeatureLightSplit.jsx` — left green image panel, right cream content panel
- [x] 5.7 Create `src/components/landing/CTAForm.jsx` — newsletter signup form with email, password, submit button

## 6. Public Store Pages

- [x] 6.1 Create `src/pages/KatalogProduk.jsx` — responsive grid of 20 ProductCards, text search, category filter buttons, pagination (12 per page)
- [x] 6.2 Create `src/pages/DetailProduk.jsx` — product image, name, category, description, IDR price, quantity selector (min 1), add-to-cart button, related products row (same category, max 4)
- [x] 6.3 Create `src/pages/Keranjang.jsx` — cart items list with quantity controls, remove button, subtotal/total in IDR, empty state, "Lanjut ke Pembayaran" button
- [x] 6.4 Create `src/pages/Pembayaran.jsx` — order summary panel, payment form (Nama, Email, Alamat, Kota, Kode Pos, Metode Bayar radio group), "Bayar Sekarang" button with success modal/toast
- [x] 6.5 Create `src/pages/HistoryTransaksi.jsx` — dummy transaction list with Order ID, Tanggal, Items count, Total IDR, color-coded status badges, empty state
- [x] 6.6 Create `src/pages/ArsipArtikel.jsx` — article grid with search, category filter tabs, ArticleCard components
- [x] 6.7 Create `src/pages/DetailArtikel.jsx` — full article view (cover, category, title, author, date, body), back link, related articles section

## 7. Admin Pages

- [x] 7.1 Create `src/pages/admin/AdminDashboard.jsx` — 4 StatCards (Total Produk, Total Pengguna, Total Transaksi, Pendapatan), recent 5 transactions table
- [x] 7.2 Create `src/pages/admin/AdminKelolaProdk.jsx` — searchable data table of 20 products (thumbnail, nama, kategori, harga IDR, stok, aksi), "Tambah Produk" button → Modal form
- [x] 7.3 Create `src/pages/admin/AdminKelolaArtikel.jsx` — article management table (cover, judul, kategori, penulis, tanggal, status toggle, aksi), "Tambah Artikel" button → Modal form
- [x] 7.4 Create `src/pages/admin/AdminKelolaUser.jsx` — user table (avatar, nama, email, role badge, tanggal daftar, status toggle, aksi), search filter
- [x] 7.5 Create `src/pages/admin/AdminKelolaTransaksi.jsx` — transaction table (orderId, pelanggan, total IDR, metode, status badge, tanggal, aksi), status filter dropdown, search, inline status update

## 8. Polish & Verification

- [x] 8.1 Add scroll-reveal animation to landing page sections using IntersectionObserver (apply `reveal-from-bottom active` classes)
- [x] 8.2 Verify all 13 routes are navigable via Navbar links and sidebar links
- [x] 8.3 Verify responsive layout on mobile (375px), tablet (768px), desktop (1280px) — check grid columns, navbar hamburger, admin sidebar collapse
- [x] 8.4 Verify IDR price formatting is consistent across all pages (ProductCard, DetailProduk, Keranjang, Pembayaran, HistoryTransaksi, admin tables)
- [x] 8.5 Run `npm run build` and confirm zero build errors
