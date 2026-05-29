## ADDED Requirements

### Requirement: Payment form page
The `Pembayaran` page SHALL display an order summary panel and a payment form with fields for: Nama Lengkap, Email, Alamat Pengiriman, Kota, Kode Pos, Metode Pembayaran (radio: Transfer Bank, COD, E-Wallet), and a "Bayar Sekarang" submit button.

#### Scenario: Order summary shown
- **WHEN** user arrives at `/pembayaran`
- **THEN** a summary of cart items with total IDR price is shown alongside the form

#### Scenario: Form validation feedback
- **WHEN** user submits form with empty required fields
- **THEN** validation error messages appear below each empty required field

#### Scenario: Successful submission simulation
- **WHEN** all fields are filled and user clicks "Bayar Sekarang"
- **THEN** a success message or modal appears: "Pembayaran berhasil dikonfirmasi! Terima kasih."

### Requirement: Payment method selection
The form SHALL include at least 3 payment method options displayed as styled radio buttons.

#### Scenario: Only one payment method selected at a time
- **WHEN** user selects "E-Wallet"
- **THEN** the previous selection is deselected
