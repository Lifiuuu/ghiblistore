## ADDED Requirements

### Requirement: Article archive grid
The `ArsipArtikel` page SHALL display a grid of promotional Ghibli blog articles from dummy JSON (`src/data/articles.js`), showing article cover image, category tag, title, excerpt, author, and publish date.

#### Scenario: All dummy articles displayed
- **WHEN** user navigates to `/artikel`
- **THEN** all articles from the dummy JSON are rendered as cards (minimum 6 articles)

#### Scenario: Article card links to detail
- **WHEN** user clicks an article card
- **THEN** they are navigated to `/artikel/:id`

### Requirement: Article search
The archive page SHALL include a search input filtering articles by title or excerpt.

#### Scenario: Search filters articles
- **WHEN** user types a keyword in the search box
- **THEN** only matching articles are shown

### Requirement: Article category filter tabs
The archive page SHALL include filter tabs for article categories (e.g., Tips, Koleksi, Berita, Story).

#### Scenario: Category tab filters articles
- **WHEN** user clicks "Koleksi" tab
- **THEN** only articles with category "Koleksi" are shown
