## ADDED Requirements

### Requirement: Admin dashboard stats overview
The `AdminDashboard` page SHALL display at least 4 summary stat cards: Total Produk, Total Pengguna, Total Transaksi, Pendapatan Bulan Ini (IDR).

#### Scenario: Stats cards show correct dummy values
- **WHEN** admin navigates to `/admin`
- **THEN** 4 stat cards are visible, each with an icon, label, and numeric value

### Requirement: Recent transactions table on dashboard
The dashboard SHALL include a table of the 5 most recent dummy transactions with columns: Order ID, Pelanggan, Total, Status.

#### Scenario: Recent transactions visible
- **WHEN** admin views dashboard
- **THEN** a table with 5 rows of recent orders is visible below the stat cards

### Requirement: Admin layout with sidebar
All admin pages SHALL use an `AdminLayout` wrapper that includes `AdminSidebar` (left) and `AdminHeader` (top), with the page content rendered in the main area.

#### Scenario: Sidebar shows navigation links
- **WHEN** admin is on any admin page
- **THEN** `AdminSidebar` shows links to: Dashboard, Kelola Produk, Kelola Artikel, Kelola Pengguna, Kelola Transaksi

#### Scenario: Sidebar active link highlighted
- **WHEN** admin is on `/admin/produk`
- **THEN** the "Kelola Produk" sidebar link is highlighted as active
