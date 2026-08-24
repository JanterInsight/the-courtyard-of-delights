# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- "Ver menos" button in gallery to collapse back to the initial 8 images after expanding
- Dismissible notice that informs users when animations are disabled by the system's reduced-motion preference

### Changed
- WhatsApp contact link now includes a pre-filled message (`wa.me` with encoded text)
- Stat counter now respects `prefers-reduced-motion`: shows the final value instantly, consistent with all other animations

### Fixed
- `og:image` and `twitter:image` pointed to a non-existent `hero.jpg`; now reference `images/local/local1.jpg`

## [1.2.0] - 2026-08-24

### Changed
- Full migration to TypeScript in strict mode (all components, hooks and data typed)
- Path aliases (`@components`, `@hooks`, `@data`, `@styles`) with barrel files per component folder
- Build now runs type-checking (`tsc --noEmit && vite build`)
- Added ESLint flat config with TypeScript and react-hooks rules; scripts: `lint`, `typecheck`

### Removed
- Unused dependency `react-helmet-async`
- Dead code: unused hook return values, unused CSS utility classes, unreferenced assets (icons and images)
- Dead code removed from hooks API (`isIntersecting`, `isComplete`, `theme`)

### Fixed
- Broken `node_modules` (corrupted Vite install) — clean reinstall with committed lockfile
- ARIA issues: invalid menubar/menuitem roles replaced by native semantics, lightbox `aria-modal`, gallery item labels
- `tel:` link no longer opens a new tab via `target="_blank"`
- Animated counter now cancels its animation frame on unmount

## [1.1.0] - 2026-08-23

### Added
- Initial project structure and configuration (historical Unreleased content released here)
- Spec-Driven Development documentation (spec/constitution/)
- Feature specifications (spec/features/)
- Agent configuration with skills management

### Changed
- Project documentation restructured following SDD pattern
- Skills configuration optimized for landing page needs
- Repository hygiene: fixed .gitignore (untracked `code/dist`), versioned specs/docs/.agents

## [1.0.0] - 2025-07-16

### Added
- Complete landing page implementation
- Header with fixed navigation and hamburger menu
- Hero section with typewriter effect
- About Us section with animated counters
- Products section with 4 product cards
- Gallery with 12 images and lightbox
- Schedule section with glassmorphism design
- Contact section with 3 cards (phone, WhatsApp, map)
- Footer with copyright
- Back to Top button
- Dark/Light mode toggle with localStorage persistence
- SEO optimization (meta tags, Open Graph, Twitter Cards, JSON-LD)
- Performance optimizations (lazy loading, skeleton placeholders, IntersectionObserver)
- Accessibility features (WCAG AA compliance, keyboard navigation, ARIA attributes)
- Custom React hooks (useTheme, useIntersectionObserver, useScrollPosition, useTypewriter)
- Responsive design (mobile, tablet, desktop)

### Changed
- 

### Deprecated
- 

### Removed
- 

### Fixed
- Initial bug fixes and UI improvements

### Security
- 

## [0.2.0] - 2025-06-20

### Added
- Core components structure (Header, Hero, About, Products, Gallery, Contact, Footer)
- CSS variables design system
- Basic responsive layout
- Custom hooks implementation
- Image lazy loading with skeleton placeholders
- Theme toggle functionality

### Changed
- 

### Deprecated
- 

### Removed
- 

### Fixed
- 

### Security
- 

## [0.1.0] - 2025-01-15

### Added
- Initial project setup with React + Vite
- Basic project structure
- Package configuration
- Git repository initialization
- Initial documentation (README.md)

### Changed
- 

### Deprecated
- 

### Removed
- 

### Fixed
- 

### Security
- 

---

## How to Maintain This CHANGELOG

### Version Categories
- **Added** for new features
- **Changed** for changes in existing functionality
- **Deprecated** for soon-to-be removed features
- **Removed** for now removed features
- **Fixed** for any bug fixes
- **Security** in case of vulnerabilities

### Version Numbering
Follow [Semantic Versioning](https://semver.org/):
- **MAJOR** version when you make incompatible API changes
- **MINOR** version when you add functionality in a backwards compatible manner
- **PATCH** version when you make backwards compatible bug fixes

### Guidelines
1. Always update this file when releasing a new version
2. Group changes by category (Added, Changed, Fixed, etc.)
3. Write changes in **English**
4. Be descriptive but concise
5. Include issue/PR references when applicable
6. Update the date for each release

### GitHub Links

```markdown
[unreleased]: https://github.com/JanterInsight/the-courtyard-of-delights/compare/v1.2.0...HEAD
[1.2.0]: https://github.com/JanterInsight/the-courtyard-of-delights/releases/tag/v1.2.0
[1.1.0]: https://github.com/JanterInsight/the-courtyard-of-delights/releases/tag/v1.1.0
[1.0.0]: https://github.com/JanterInsight/the-courtyard-of-delights/releases/tag/v1.0.0
[0.2.0]: https://github.com/JanterInsight/the-courtyard-of-delights/releases/tag/v0.2.0
[0.1.0]: https://github.com/JanterInsight/the-courtyard-of-delights/releases/tag/v0.1.0