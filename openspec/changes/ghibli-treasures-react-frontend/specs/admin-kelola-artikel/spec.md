## ADDED Requirements

### Requirement: Admin article management table
The `AdminKelolaArtikel` page SHALL display all dummy articles in a table with columns: No, Cover (thumbnail), Judul, Kategori, Penulis, Tanggal, Aksi (Edit / Hapus).

#### Scenario: All articles visible in table
- **WHEN** admin navigates to `/admin/artikel`
- **THEN** all dummy articles are shown in the table

### Requirement: Add article button and modal
The page SHALL include a "Tambah Artikel" button that opens a modal form with fields: Judul, Kategori, Penulis, Konten, Cover URL.

#### Scenario: Add article modal opens
- **WHEN** admin clicks "Tambah Artikel"
- **THEN** modal form appears

### Requirement: Article status toggle
Each article row SHALL have a Published/Draft status badge that can be toggled by clicking.

#### Scenario: Status toggles on click
- **WHEN** admin clicks the status badge of an article
- **THEN** the badge switches between "Published" and "Draft"
