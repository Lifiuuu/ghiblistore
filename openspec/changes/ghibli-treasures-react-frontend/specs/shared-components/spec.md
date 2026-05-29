## ADDED Requirements

### Requirement: Shared components library
The project SHALL have reusable components: `Navbar`, `Footer`, `ProductCard`, `ArticleCard`, `AdminSidebar`, `AdminHeader`, `Modal`, `Badge`, `StatCard`, `Pagination`.

#### Scenario: Navbar renders on all public pages
- **WHEN** any public route (non-admin) is rendered
- **THEN** `Navbar` appears at the top with brand and nav links

#### Scenario: AdminSidebar renders on all admin pages
- **WHEN** any `/admin/*` route is rendered
- **THEN** `AdminSidebar` is visible with navigation links

### Requirement: PublicLayout and AdminLayout wrappers
The project SHALL have `PublicLayout` (Navbar + Outlet + Footer) and `AdminLayout` (AdminSidebar + AdminHeader + Outlet) components used as nested route layouts.

#### Scenario: PublicLayout wraps all public pages
- **WHEN** user visits `/`, `/katalog`, `/produk/:id`, `/keranjang`, `/pembayaran`, `/history`, `/artikel`, `/artikel/:id`
- **THEN** Navbar and Footer are present on all these pages

#### Scenario: AdminLayout wraps all admin pages
- **WHEN** user visits any `/admin/*` route
- **THEN** AdminSidebar and AdminHeader are present, Navbar and Footer are NOT shown
