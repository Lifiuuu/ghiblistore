## ADDED Requirements

### Requirement: Admin product table
The `AdminKelolaProdk` page SHALL display all 20 dummy products in a data table with columns: No, Gambar (thumbnail), Nama Produk, Kategori, Harga (IDR), Stok, Aksi (Edit / Hapus buttons).

#### Scenario: All 20 products in table
- **WHEN** admin navigates to `/admin/produk`
- **THEN** table shows all 20 dummy products with correct data

### Requirement: Add product button and modal
The page SHALL include an "Tambah Produk" button that opens a modal form with fields: Nama, Kategori, Harga, Stok, Deskripsi, Gambar URL.

#### Scenario: Modal opens on button click
- **WHEN** admin clicks "Tambah Produk"
- **THEN** a modal dialog appears with the product form

#### Scenario: Modal closes on cancel
- **WHEN** admin clicks cancel or the × close button
- **THEN** the modal closes without changes

### Requirement: Table search filter
The product table SHALL have a search input that filters rows by product name.

#### Scenario: Search filters table rows
- **WHEN** admin types "Jiji" in the search box
- **THEN** only rows with "Jiji" in the Nama Produk column are shown
