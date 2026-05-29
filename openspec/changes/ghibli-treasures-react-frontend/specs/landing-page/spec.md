## ADDED Requirements

### Requirement: Landing page translated from Blade to React
The system SHALL render a `LandingPage` React component that is a faithful translation of the existing Blade template (`landing.blade.php` and its included components), adapted to the "Ghibli Treasures" store concept.

### Requirement: Hero section with animated particles
The `Hero` component SHALL render glowing background blobs, 20 animated leaf shapes, 60 sparkle dots, a headline, subtitle, CTA button, and an image carousel with 3 slides.

#### Scenario: Particle positions are stable
- **WHEN** the Hero component renders or re-renders
- **THEN** leaf and sparkle positions do not change (stable via useMemo)

#### Scenario: Carousel auto-advances
- **WHEN** the Hero image carousel is visible
- **THEN** slides auto-advance every 4 seconds with fade transition

#### Scenario: Carousel shows dot indicators
- **WHEN** multiple slides exist
- **THEN** dot indicators appear showing current slide index

### Requirement: Testimonial section
The `TestimonialSimple` component SHALL render a featured quote, author avatar, and name.

#### Scenario: Quote is visible on all screen sizes
- **WHEN** page is viewed on mobile (375px), tablet (768px), or desktop (1280px)
- **THEN** blockquote text is fully readable without overflow

### Requirement: Feature sections preserved
The `FeatureDarkSplit`, `FeatureGridCards`, `FeatureLightSplit`, and `CTAForm` components SHALL be translated from Blade and rendered on the landing page in the same order.

#### Scenario: Feature grid cards animate on scroll
- **WHEN** user scrolls to the feature grid section
- **THEN** cards animate in with `card-anim` / `is-visible` CSS transition

#### Scenario: CTA form renders email and password inputs
- **WHEN** user visits the landing page
- **THEN** the "Join Our Magical Community" section is visible with email input, password input, and submit button

### Requirement: Navbar with mobile menu
The `Navbar` component SHALL display the brand logo "Ghibli Treasures", navigation links (Beranda, Katalog, Artikel, Keranjang, Login), and a hamburger menu for mobile.

#### Scenario: Mobile menu opens on hamburger click
- **WHEN** viewport is below 768px and user taps hamburger icon
- **THEN** mobile menu slides/fades in showing all nav links

#### Scenario: Active link is highlighted
- **WHEN** user is on a specific page route
- **THEN** the corresponding nav link shows active state styling

### Requirement: Footer with Ghibli palette swatches
The `Footer` component SHALL display nav links, brand name "Ghibli Treasures", color palette swatches, and copyright text with animated background particles.

#### Scenario: Footer renders on all pages
- **WHEN** any public page (non-admin) is viewed
- **THEN** the Footer is visible at the bottom of the page
