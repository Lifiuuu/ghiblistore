## ADDED Requirements

### Requirement: Transaction history list
The `HistoryTransaksi` page SHALL display a list of dummy past orders in a styled table or card list, showing: Order ID, Tanggal, Items (count), Total IDR, and Status badge (Selesai, Diproses, Dikirim, Dibatalkan).

#### Scenario: Dummy orders are visible
- **WHEN** user navigates to `/history`
- **THEN** at least 5 dummy transaction entries are rendered

#### Scenario: Status badge color-coded
- **WHEN** a transaction with status "Selesai" is shown
- **THEN** its badge is green; "Diproses" is yellow; "Dikirim" is blue; "Dibatalkan" is red

### Requirement: Empty history state
If no transactions exist, the page SHALL show an empty state message "Belum ada transaksi" with a link to the catalogue.

#### Scenario: Empty state when no orders
- **WHEN** transaction list is empty
- **THEN** empty state UI is shown with CTA to shop
