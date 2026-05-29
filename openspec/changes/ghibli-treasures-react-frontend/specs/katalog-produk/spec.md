## ADDED Requirements

### Requirement: Product catalogue displays all 20 items
The `KatalogProduk` page SHALL display all 20 dummy merchandise items in a responsive grid (1 col mobile, 2 col tablet, 4 col desktop) using `ProductCard` components.

#### Scenario: All 20 products are visible
- **WHEN** user navigates to `/katalog`
- **THEN** exactly 20 product cards are rendered with image, name, and IDR price

### Requirement: Product search and filter
The catalogue page SHALL include a text search input that filters products by name, and category filter buttons.

#### Scenario: Search filters product list
- **WHEN** user types "Totoro" in the search input
- **THEN** only products matching "Totoro" in their name are displayed

#### Scenario: Category filter narrows products
- **WHEN** user clicks a category button (e.g., "Boneka")
- **THEN** only products in that category are shown

### Requirement: ProductCard component
The `ProductCard` component SHALL display a product image (placeholder URL), name, category badge, IDR-formatted price, and an "Add to Cart" button.

#### Scenario: Price is formatted in IDR
- **WHEN** a ProductCard renders a product with price 145000
- **THEN** the displayed price shows "Rp 145.000" or equivalent IDR format

#### Scenario: Card hover animation
- **WHEN** user hovers over a ProductCard
- **THEN** the card lifts (translateY) with shadow increase via card-anim CSS

### Requirement: Pagination or load-more
The catalogue page SHALL provide pagination controls when products exceed 12 per page.

#### Scenario: Pagination controls visible
- **WHEN** total products exceed 12
- **THEN** page number buttons appear at the bottom of the grid
