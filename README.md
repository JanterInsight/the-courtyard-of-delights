# 🍦 El Patio de las Delicias

**Modern landing page for an artisanal ice cream, confiture, and croquettes shop**

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📋 Description

Modern, responsive, and accessible landing page for **El Patio de las Delicias**, a shop specializing in artisanal ice cream, homemade confitures, and crispy croquettes. The website features an attractive design with pastel color palette, smooth animations, and interactive functionalities.

### ✨ Main Features

- 🎨 **Modern and attractive design** with pastel color palette
- 📱 **100% responsive** - Adaptable to mobile, tablet, and desktop
- ⚡ **Smooth animations** with React hooks and IntersectionObserver
- 🖼️ **Interactive gallery** with lightbox and navigation
- 🎯 **Hamburger menu** adaptable for mobile devices
- 🔢 **Animated counters** that activate on scroll
- 📞 **Contact buttons** (Call and WhatsApp)
- ⬆️ **Back to top button** with animation
- 🎭 **Hover effects** on cards and interactive elements
- 🌓 **Dark/Light mode** with localStorage persistence
- ♿ **WCAG AA Accessibility** - Keyboard navigation, ARIA attributes
- 🔍 **SEO optimized** - Meta tags, Open Graph, structured data with react-helmet-async
- ⚡ **Performance optimized** - Lazy loading, skeleton placeholders, IntersectionObserver

---

## 🛠️ Technologies Used

### Frontend
- **React 18** - UI library
- **Vite** - Bundler and dev server
- **react-helmet-async** - SEO management
- **CSS Variables** - Design system
- **IntersectionObserver API** - Scroll animations
- **Google Fonts** (Fredoka + Poppins)

### Tools
- **Git** for version control
- **GitHub Pages** for deployment

---

## 📁 Project Structure

```
the-courtyard-of-delights/
│
├── code/                          # React + Vite application
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header/
│   │   │   │   ├── Header.jsx
│   │   │   │   └── Navbar.jsx
│   │   │   ├── Hero/
│   │   │   │   ├── Hero.jsx
│   │   │   │   └── Typewriter.jsx
│   │   │   ├── About/
│   │   │   │   ├── About.jsx
│   │   │   │   └── AnimatedCounter.jsx
│   │   │   ├── Products/
│   │   │   │   ├── Products.jsx
│   │   │   │   └── ProductCard.jsx
│   │   │   ├── Gallery/
│   │   │   │   ├── Gallery.jsx
│   │   │   │   ├── GalleryItem.jsx
│   │   │   │   └── Lightbox.jsx
│   │   │   ├── Schedule/
│   │   │   │   └── Schedule.jsx
│   │   │   ├── Contact/
│   │   │   │   ├── Contact.jsx
│   │   │   │   └── ContactCard.jsx
│   │   │   ├── Footer/
│   │   │   │   └── Footer.jsx
│   │   │   └── UI/
│   │   │       ├── BackToTop.jsx
│   │   │       └── ThemeToggle.jsx
│   │   ├── hooks/
│   │   │   ├── useTheme.js
│   │   │   ├── useIntersectionObserver.js
│   │   │   ├── useScrollPosition.js
│   │   │   └── useTypewriter.js
│   │   ├── data/
│   │   │   ├── products.js
│   │   │   ├── gallery.js
│   │   │   └── contact.js
│   │   ├── styles/
│   │   │   ├── variables.css
│   │   │   ├── global.css
│   │   │   └── responsive.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
│
├── images/                        # Shared images
│   ├── ice cream/                 # Ice cream images (14 photos)
│   ├── confiture/                 # Confiture images (3 photos)
│   ├── croquette/                 # Croquette images (2 photos)
│   ├── ice cream & confiture/     # Combinations (6 photos)
│   ├── local/                     # Shop photos (2 photos)
│   └── other/                     # Other images (1 photo)
│
├── .agents/
│   └── proyecto.yaml              # Project-specific configuration
│
├── .gitignore                     # Git ignored files
├── .clinerules                    # Assistant rules
└── README.md                      # This file
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js >= 16
- npm or yarn

### Installation

```bash
cd code
npm install --legacy-peer-deps
```

### Development

```bash
cd code
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
cd code
npm run build
```

### Preview

```bash
cd code
npm run preview
```

---

## 🚀 Features by Section

### 1. **Header and Navigation**
- Logo with ice cream icon
- Fixed navigation menu with 5 sections
- Animated hamburger menu on mobile
- Close with Escape key or outside click
- Dynamic shadow on scroll
- Theme toggle (dark/light mode)

### 2. **Hero Section**
- Animated title and subtitle
- **Typewriter effect** on subtitle with blinking cursor
- Business description
- CTA (Call to Action) buttons
- Fade-in animation on load

### 3. **About Us**
- Business descriptive text
- Shop image with hover effect
- **3 animated counters:**
  - 5+ years of experience
  - 10+ ice cream flavors
  - 1000+ happy customers

### 4. **Products**
- 4 product cards:
  - 🍦 Artisanal Ice Cream
  - 🍯 Confitures
  - 🥟 Croquettes
  - 🍨 Ice Cream + Confitures
- Hover effect with scale and shadow
- Skeleton loading placeholder

### 5. **Gallery**
- Responsive grid of 12 images
- Overlay with zoom icon on hover
- **Lightbox with:**
  - Previous/next navigation
  - Image counter (e.g., "3 / 12")
  - Zoom animation
  - Close with ESC, X button, or outside click
  - Keyboard navigation (← →)
- Lazy loading with skeleton

### 6. **Schedule**
- Dark gradient design
- Clock icon
- Highlighted schedule: 3:00 PM - 11:00 PM
- Glassmorphism effect

### 7. **Contact**
- 3 contact cards:
  - 📞 Phone: +53 58993196
  - 💬 WhatsApp with predefined message
  - 📍 Address with Google Maps link
- Functional buttons

### 8. **Footer**
- Copyright 2026
- Brand color design

### 9. **Back to Top Button**
- Appears after 300px of scroll
- Smooth animation
- Scroll on click

---

## 🎨 Color Palette

```css
--pastel-pink: #FFD6BA      /* Soft pink */
--cream: #FFF9BD            /* Pale cream background */
--white: #FFFFFF            /* White */
--chocolate-brown: #5D4037  /* Chocolate */
--vanilla-yellow: #DEE791   /* Yellow-green */
--mint-green: #A3DC9A      /* Soft green */
--dark-text: #3E2723        /* Dark brown */
--light-gray: #F5F5F5       /* Light gray */
--medium-gray: #9E9E9E      /* Medium gray */
--shadow: rgba(0, 0, 0, 0.1)
--strong-shadow: rgba(0, 0, 0, 0.2)
```

---

## 🔧 React Features

### Custom Hooks
- **useTheme** - Dark/light mode with localStorage
- **useIntersectionObserver** - Animations on scroll
- **useScrollPosition** - Scroll-based UI updates
- **useTypewriter** - Typewriter effect

### Components
- Modular architecture with reusable components
- SEO management with react-helmet-async
- Accessible components with ARIA attributes
- Responsive design with CSS Grid and Flexbox

---

## 📱 Responsive Breakpoints

| Device | Width | Features |
|--------|-------|----------|
| **Small mobile** | < 360px | Reduced typography, wide menu |
| **Mobile** | < 480px | 1 column grid, full-width buttons |
| **Tablet** | ≤ 768px | Hamburger menu, 2 column grid |
| **Desktop** | > 768px | Horizontal menu, full grid |
| **Large screen** | > 1400px | Expanded typography, max container 1400px |

---

## ♿ Accessibility

- ✅ **Skip to content** link
- ✅ **Descriptive alt attributes** on all images
- ✅ **Keyboard navigation** (Tab, Enter, Escape, arrows)
- ✅ **ARIA attributes** on interactive elements
- ✅ **Focus visible** states
- ✅ **Respect for `prefers-reduced-motion`**
- ✅ **Respect for `prefers-contrast: high`**
- ✅ **WCAG AA contrast** guaranteed
- ✅ **Semantic HTML** (header, nav, main, section, footer, article)

---

## 🔍 SEO

- ✅ Complete meta tags (description, keywords, author)
- ✅ Open Graph tags (Facebook)
- ✅ Twitter Cards
- ✅ **Structured data JSON-LD** (LocalBusiness)
- ✅ Friendly URLs
- ✅ Canonical URL
- ✅ Alt attributes on images
- ✅ Semantic HTML

---

## ⚡ Performance Optimizations

- ✅ **Lazy loading** of images with skeleton placeholders
- ✅ **IntersectionObserver** to activate animations only when visible
- ✅ **CSS variables** to avoid repetition
- ✅ **Preconnect** to Google Fonts
- ✅ **Images with width/height** to avoid layout shift
- ✅ **No external dependencies** (except React and Vite)
- ✅ **Modular components** for better code splitting

---

## 🚀 Deployment on GitHub Pages

### Steps to publish:

1. **Build the project:**
   ```bash
   cd code
   npm run build
   ```

2. **Deploy the `dist` folder** to GitHub Pages or your hosting service

3. **Your site will be available at:**
   ```
   https://YOUR_USERNAME.github.io/the-courtyard-of-delights/
   ```

---

## 📞 Contact Information

**El Patio de las Delicias**

- 📍 **Address:** Calle 4ta, La Güira
- 📞 **Phone:** +53 58993196
- 💬 **WhatsApp:** +53 58993196
- 🕒 **Schedule:** Every day, 3:00 PM - 11:00 PM

---

## 📄 License

This project was created for **El Patio de las Delicias**.

---

## 🙏 Acknowledgments

- Design and development with ❤️ for the community
- Fonts: [Fredoka](https://fonts.google.com/specimen/Fredoka) and [Poppins](https://fonts.google.com/specimen/Poppins) from Google Fonts
- Inspired by the need for a modern and accessible digital presence

---

## 📸 Project Gallery

The site includes 28+ images organized in:
- 14 ice cream photos
- 3 confiture photos
- 2 croquette photos
- 6 combination photos
- 2 shop photos
- 1 additional image

---

## 📊 Project Statistics

- **Framework:** React 18 + Vite 5
- **Main files:** 33+ files in `code/`
- **Components:** 15+ components
- **Custom hooks:** 4 hooks
- **Sections:** 8
- **Images:** 28+
- **Responsive breakpoints:** 4

---

## 🎯 Next Steps (Optional)

- [ ] Add functional contact form
- [ ] Integrate with Google Analytics
- [ ] Implement review system
- [ ] Add gallery filters by category
- [ ] Add interactive map
- [ ] Add i18n support for multilingual content

---

**© 2026 - El Patio de las Delicias - Artisanal Ice Cream**

*Made with ❤️ for our community*