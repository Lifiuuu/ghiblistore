## ADDED Requirements

### Requirement: Article detail page renders single article
The `DetailArtikel` page SHALL render a full article by route param `/artikel/:id`, showing: large cover image, category, title, author with avatar, publish date, and full article body content.

#### Scenario: Article loads from dummy data by ID
- **WHEN** user navigates to `/artikel/2`
- **THEN** the article with id 2 from the dummy JSON is rendered in full

#### Scenario: Back to archive navigation
- **WHEN** user is on any article detail page
- **THEN** a "← Kembali ke Arsip" link is visible that navigates back to `/artikel`

### Requirement: Related articles section
The article detail page SHALL show up to 3 related articles from the same category at the bottom.

#### Scenario: Related articles are shown
- **WHEN** article detail is rendered
- **THEN** a "Artikel Terkait" section with up to 3 article cards is shown below the content
