## ADDED Requirements

### Requirement: Shopping cart displays items
The `Keranjang` page SHALL display all items added to the cart with product image, name, unit price (IDR), quantity, line total, and a remove button.

#### Scenario: Empty cart state
- **WHEN** cart has no items
- **THEN** an empty state illustration and message "Keranjangmu masih kosong" are shown with a link back to the catalogue

#### Scenario: Cart totals shown
- **WHEN** cart has one or more items
- **THEN** subtotal and total are calculated and displayed in IDR format

### Requirement: Quantity adjustment in cart
Users SHALL be able to increment or decrement item quantity directly in the cart.

#### Scenario: Quantity update recalculates total
- **WHEN** user changes quantity of an item
- **THEN** the line total and cart total update immediately

### Requirement: Checkout CTA button
The cart page SHALL show a "Lanjut ke Pembayaran" button that navigates to the payment page.

#### Scenario: Checkout navigation
- **WHEN** cart has items and user clicks "Lanjut ke Pembayaran"
- **THEN** user is navigated to `/pembayaran`
