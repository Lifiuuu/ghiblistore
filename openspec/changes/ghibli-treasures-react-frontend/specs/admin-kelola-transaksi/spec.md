## ADDED Requirements

### Requirement: Admin transaction table
The `AdminKelolaTransaksi` page SHALL display all dummy transactions in a table with columns: No, Order ID, Pelanggan, Produk (count), Total IDR, Metode Bayar, Status, Tanggal, Aksi (Lihat Detail).

#### Scenario: Transaction table has dummy data
- **WHEN** admin navigates to `/admin/transaksi`
- **THEN** at least 10 dummy transaction rows are rendered

### Requirement: Transaction status filter
The page SHALL include dropdown or tab filters for status: Semua, Diproses, Dikirim, Selesai, Dibatalkan.

#### Scenario: Status filter narrows rows
- **WHEN** admin selects "Selesai" from the filter
- **THEN** only transactions with status "Selesai" are shown in the table

### Requirement: Status update action
Each transaction row SHALL allow the admin to update its status via a dropdown or button group.

#### Scenario: Status updated in table
- **WHEN** admin changes a transaction's status from "Diproses" to "Dikirim"
- **THEN** the status badge in that row updates immediately

### Requirement: Transaction search
The page SHALL support searching transactions by Order ID or Pelanggan name.

#### Scenario: Search filters transactions
- **WHEN** admin types an Order ID prefix
- **THEN** only matching transactions are shown
