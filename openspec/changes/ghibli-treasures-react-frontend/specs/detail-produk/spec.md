## ADDED Requirements

### Requirement: Product detail page renders selected product
The `DetailProduk` page SHALL display a single product selected by route param (`/produk/:id`), showing the product image, name, category, description, IDR price, quantity selector, and an "Tambah ke Keranjang" button.

#### Scenario: Product detail loads from dummy data by ID
- **WHEN** user navigates to `/produk/3`
- **THEN** the product with id 3 from the dummy JSON is rendered

#### Scenario: Add to cart action
- **WHEN** user clicks "Tambah ke Keranjang"
- **THEN** a success toast or visual feedback is shown indicating the item was added

### Requirement: Related products section
The detail page SHALL show a row of up to 4 related products from the same category below the main product.

#### Scenario: Related products shown
- **WHEN** a product detail page is viewed
- **THEN** up to 4 ProductCard components in the same category are rendered below

### Requirement: Quantity selector
The detail page SHALL include a quantity increment/decrement control.

#### Scenario: Quantity cannot go below 1
- **WHEN** user clicks decrement when quantity is 1
- **THEN** the quantity stays at 1 and the decrement button is disabled or visually inactive
