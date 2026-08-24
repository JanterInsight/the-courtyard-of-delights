# Modern CSS Development - Best Practices

## 1. Custom Properties (CSS Variables)

### Organización de Design Tokens

**✅ SIEMPRE definir variables en :root:**
```css
:root {
  /* Colores primarios */
  --color-primary: #3498db;
  --color-primary-dark: #2980b9;
  --color-primary-light: #5dade2;
  
  /* Colores semánticos */
  --color-success: #2ecc71;
  --color-warning: #f39c12;
  --color-danger: #e74c3c;
  --color-info: #17a2b8;
  
  /* Colores de texto */
  --color-text-primary: #1a1a1a;
  --color-text-secondary: #666666;
  --color-text-muted: #999999;
  --color-text-inverse: #ffffff;
  
  /* Colores de fondo */
  --color-bg-primary: #ffffff;
  --color-bg-secondary: #f8f9fa;
  --color-bg-tertiary: #e9ecef;
  
  /* Espaciado (escala de 4px) */
  --spacing-0: 0;
  --spacing-1: 0.25rem;  /* 4px */
  --spacing-2: 0.5rem;   /* 8px */
  --spacing-3: 0.75rem;  /* 12px */
  --spacing-4: 1rem;     /* 16px */
  --spacing-5: 1.5rem;   /* 24px */
  --spacing-6: 2rem;     /* 32px */
  --spacing-7: 3rem;     /* 48px */
  --spacing-8: 4rem;     /* 64px */
  
  /* Tipografía */
  --font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-heading: var(--font-family-base);
  --font-family-mono: 'Fira Code', 'Monaco', 'Courier New', monospace;
  
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 2rem;      /* 32px */
  --font-size-4xl: 2.5rem;    /* 40px */
  
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  
  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
  
  /* Border radius */
  --radius-none: 0;
  --radius-sm: 0.25rem;   /* 4px */
  --radius-md: 0.5rem;    /* 8px */
  --radius-lg: 0.75rem;   /* 12px */
  --radius-xl: 1rem;      /* 16px */
  --radius-full: 9999px;
  
  /* Sombras */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
  
  /* Transiciones */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 350ms ease;
  
  /* Z-index */
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-tooltip: 1060;
  
  /* Breakpoints (para referencia) */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

### Uso de Variables

```css
/* ✅ CORRECTO */
.button {
  background-color: var(--color-primary);
  padding: var(--spacing-3) var(--spacing-5);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

/* ✅ CORRECTO: Con fallback */
.button {
  background-color: var(--color-primary, #3498db);
  padding: var(--spacing-3, 0.75rem) var(--spacing-5, 1.5rem);
}

/* ❌ INCORRECTO: Hardcodeado */
.button {
  background-color: #3498db;
  padding: 12px 24px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

## 2. Mobile-First Responsive Design

### Breakpoints Estratégicos

```css
/* ✅ CORRECTO: Mobile-First con breakpoints basados en contenido */

/* Base: Móvil (< 640px) */
.container {
  padding: var(--spacing-4);
  display: block;
}

/* Small: 640px+ */
@media (min-width: 640px) {
  .container {
    padding: var(--spacing-5);
  }
}

/* Medium: 768px+ (Tablet) */
@media (min-width: 768px) {
  .container {
    padding: var(--spacing-6);
    display: flex;
    gap: var(--spacing-5);
  }
}

/* Large: 1024px+ (Desktop) */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--spacing-7);
  }
}

/* Extra Large: 1280px+ */
@media (min-width: 1280px) {
  .container {
    max-width: 1400px;
  }
}

/* ❌ INCORRECTO: Desktop-First */
.container {
  max-width: 1200px;
  padding: var(--spacing-7);
}

@media (max-width: 1024px) {
  .container {
    padding: var(--spacing-6);
  }
}
```

### Tipografía Fluida

```css
/* ✅ CORRECTO: Fluid typography con clamp() */
html {
  font-size: 100%;
}

h1 {
  /* Min: 2rem, Preferred: 5vw, Max: 4rem */
  font-size: clamp(2rem, 5vw, 4rem);
}

h2 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}

h3 {
  font-size: clamp(1.25rem, 3vw, 2rem);
}

p {
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: var(--line-height-normal);
}

/* ❌ INCORRECTO: Tamaños fijos */
h1 {
  font-size: 3rem;
}

@media (min-width: 768px) {
  h1 {
    font-size: 4rem;
  }
}
```

## 3. CSS Grid y Flexbox

### CSS Grid para Layout Principal

```css
/* ✅ CORRECTO: Grid para layout de página */
.page-layout {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "main"
    "footer";
  min-height: 100vh;
  gap: var(--spacing-md);
}

.header {
  grid-area: header;
}

.main {
  grid-area: main;
}

.sidebar {
  grid-area: sidebar;
}

.footer {
  grid-area: footer;
}

/* Tablet */
@media (min-width: 768px) {
  .page-layout {
    grid-template-columns: 250px 1fr;
    grid-template-areas:
      "header header"
      "sidebar main"
      "footer footer";
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .page-layout {
    grid-template-columns: 300px 1fr 250px;
    grid-template-areas:
      "header header header"
      "sidebar main aside"
      "footer footer footer";
  }
}
```

### CSS Grid para Componentes

```css
/* ✅ CORRECTO: Grid para card grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-5);
}

/* ✅ CORRECTO: Grid con áreas específicas */
.card {
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "image title"
    "image content"
    "footer footer";
  gap: var(--spacing-3);
}

.card__image {
  grid-area: image;
}

.card__title {
  grid-area: title;
}

.card__content {
  grid-area: content;
}

.card__footer {
  grid-area: footer;
}
```

### Flexbox para Componentes

```css
/* ✅ CORRECTO: Flexbox para navegación */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-4);
}

.nav__list {
  display: flex;
  gap: var(--spacing-4);
  list-style: none;
}

/* ✅ CORRECTO: Flexbox para card */
.card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card__body {
  flex: 1;
}

.card__footer {
  display: flex;
  gap: var(--spacing-2);
  justify-content: flex-end;
}

/* ✅ CORRECTO: Flexbox para centrado */
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## 4. Container Queries

### Componentes Adaptativos

```css
/* ✅ CORRECTO: Container Query para card */
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

.card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.card__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card__content {
  flex: 1;
}

/* Cuando el contenedor tiene >= 400px */
@container card (min-width: 400px) {
  .card {
    flex-direction: row;
  }
  
  .card__image {
    width: 200px;
    height: auto;
  }
}

/* Cuando el contenedor tiene >= 600px */
@container card (min-width: 600px) {
  .card {
    flex-direction: row;
  }
  
  .card__image {
    width: 250px;
  }
  
  .card__content {
    display: flex;
    flex-direction: column;
  }
}

/* ❌ INCORRECTO: Depender solo del viewport */
@media (min-width: 768px) {
  .card {
    flex-direction: row;
  }
}
```

## 5. Accesibilidad

### Focus Indicators

```css
/* ✅ CORRECTO: Focus visible */
.button:focus-visible,
.link:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Focus ring para elementos interactivos */
[role="button"]:focus-visible,
[tabindex]:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* ❌ INCORRECTO: Remover outline sin reemplazo */
.button:focus {
  outline: none;
}
```

### Reduced Motion

```css
/* ✅ CORRECTO: Respetar preferencia de movimiento reducido */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* ✅ CORRECTO: Movimiento condicional */
.animated-element {
  transition: transform var(--transition-base);
}

@media (prefers-reduced-motion: no-preference) {
  .animated-element:hover {
    transform: translateY(-4px);
  }
}
```

### High Contrast Mode

```css
/* ✅ CORRECTO: Modo alto contraste */
@media (prefers-contrast: high) {
  .button {
    border: 2px solid currentColor;
  }
  
  .card {
    border: 2px solid var(--color-text-primary);
  }
  
  a {
    text-decoration: underline;
  }
}
```

### Screen Reader Only

```css
/* ✅ CORRECTO: Contenido solo para screen readers */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Focus visible para skip links */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-primary);
  color: white;
  padding: var(--spacing-2) var(--spacing-3);
  text-decoration: none;
  z-index: var(--z-tooltip);
}

.skip-link:focus {
  top: 0;
}
```

## 6. Performance

### Animaciones Optimizadas

```css
/* ✅ CORRECTO: Solo transform y opacity (GPU accelerated) */
.animated-element {
  transition: transform var(--transition-base), 
              opacity var(--transition-base);
}

.animated-element:hover {
  transform: translateY(-4px);
  opacity: 0.9;
}

/* ✅ CORRECTO: Animaciones con @keyframes */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animated-element {
  animation: fadeIn var(--transition-base) ease-out;
}

/* ❌ INCORRECTO: Animar propiedades costosas */
.animated-element {
  transition: width 0.3s, height 0.3s, top 0.3s, left 0.3s;
}
```

### will-change y contain

```css
/* ✅ CORRECTO: will-change para animaciones complejas */
.animated-element {
  will-change: transform;
}

.animated-element.animating {
  animation: slideIn 0.3s ease;
}

/* ✅ CORRECTO: contain para aislamiento */
.card {
  contain: layout style paint;
}

.modal {
  contain: layout style;
}
```

### Critical CSS

```css
/* ✅ CORRECTO: Critical CSS inline */
<style>
  /* Solo estilos críticos above-the-fold */
  .header { }
  .hero { }
  .main-content { }
</style>

/* Resto del CSS async */
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

## 7. BEM (Block Element Modifier)

### Nomenclatura BEM

```css
/* Block: Componente independiente */
.card { }

/* Element: Parte del block */
.card__header { }
.card__body { }
.card__footer { }
.card__title { }
.card__image { }

/* Modifier: Variante del block */
.card--featured { }
.card--large { }
.card--horizontal { }
.card--disabled { }

/* Modifier de element */
.card__title--large { }
.card__image--rounded { }
```

### Ejemplo Completo BEM

```css
/* Block */
.card {
  background-color: var(--color-bg-primary);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: box-shadow var(--transition-base);
}

.card:hover {
  box-shadow: var(--shadow-lg);
}

/* Elements */
.card__header {
  padding: var(--spacing-4) var(--spacing-5);
  border-bottom: 1px solid var(--color-bg-tertiary);
}

.card__body {
  padding: var(--spacing-5);
}

.card__footer {
  padding: var(--spacing-4) var(--spacing-5);
  border-top: 1px solid var(--color-bg-tertiary);
  background-color: var(--color-bg-secondary);
}

.card__title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin: 0;
}

.card__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card__content {
  color: var(--color-text-secondary);
  line-height: var(--line-height-normal);
}

/* Modifiers */
.card--featured {
  border: 2px solid var(--color-primary);
}

.card--large {
  max-width: 600px;
}

.card--horizontal {
  display: flex;
  flex-direction: row;
}

.card--horizontal .card__image {
  width: 300px;
  height: auto;
}

.card--disabled {
  opacity: 0.6;
  pointer-events: none;
}
```

## 8. Cascade Layers

### Organización con @layer

```css
/* ✅ CORRECTO: Definir orden de layers */
@layer reset, base, components, utilities;

@layer reset {
  /* Reset CSS */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}

@layer base {
  /* Estilos base */
  body {
    font-family: var(--font-family-base);
    font-size: var(--font-size-base);
    line-height: var(--line-height-normal);
    color: var(--color-text-primary);
    background-color: var(--color-bg-primary);
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-heading);
    line-height: var(--line-height-tight);
    margin-bottom: var(--spacing-4);
  }
  
  p {
    margin-bottom: var(--spacing-4);
  }
}

@layer components {
  /* Componentes */
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-3) var(--spacing-5);
    background-color: var(--color-primary);
    color: var(--color-text-inverse);
    border: none;
    border-radius: var(--radius-md);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight-medium);
    cursor: pointer;
    transition: background-color var(--transition-fast);
  }
  
  .button:hover {
    background-color: var(--color-primary-dark);
  }
  
  .card {
    background-color: var(--color-bg-primary);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
  }
}

@layer utilities {
  /* Utilidades */
  .text-center {
    text-align: center;
  }
  
  .mt-4 {
    margin-top: var(--spacing-4);
  }
  
  .mb-4 {
    margin-bottom: var(--spacing-4);
  }
  
  .hidden {
    display: none;
  }
}
```

## 9. Formularios

### Estilos de Formularios Accesibles

```css
/* ✅ CORRECTO: Inputs accesibles */
.form-group {
  margin-bottom: var(--spacing-5);
}

label {
  display: block;
  margin-bottom: var(--spacing-2);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"],
select,
textarea {
  width: 100%;
  padding: var(--spacing-3) var(--spacing-4);
  border: 2px solid var(--color-bg-tertiary);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-family: inherit;
  color: var(--color-text-primary);
  background-color: var(--color-bg-primary);
  transition: border-color var(--transition-fast),
              box-shadow var(--transition-fast);
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

input[aria-invalid="true"] {
  border-color: var(--color-danger);
}

input[aria-invalid="true"]:focus {
  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
}

.help-text {
  display: block;
  margin-top: var(--spacing-2);
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
}

.error-message {
  display: none;
  margin-top: var(--spacing-2);
  padding: var(--spacing-3);
  background-color: #f8d7da;
  color: #721c24;
  border-radius: var(--radius-md);
  border-left: 4px solid var(--color-danger);
}

.error-message.visible {
  display: block;
}

/* Fieldset y Legend */
fieldset {
  border: 2px solid var(--color-bg-tertiary);
  border-radius: var(--radius-md);
  padding: var(--spacing-5);
  margin-bottom: var(--spacing-5);
}

legend {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  padding: 0 var(--spacing-2);
}

.radio-group,
.checkbox-group {
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-3);
}

.radio-group input[type="radio"],
.checkbox-group input[type="checkbox"] {
  width: 20px;
  height: 20px;
  margin-right: var(--spacing-2);
  cursor: pointer;
}

.radio-group label,
.checkbox-group label {
  margin-bottom: 0;
  font-weight: normal;
  cursor: pointer;
}
```

## 10. Dark Mode

### Soporte de Tema Oscuro

```css
/* ✅ CORRECTO: Dark mode con prefers-color-scheme */
@media (prefers-color-scheme: dark) {
  :root {
    --color-text-primary: #f0f0f0;
    --color-text-secondary: #b0b0b0;
    --color-text-muted: #808080;
    --color-bg-primary: #1a1a1a;
    --color-bg-secondary: #2d2d2d;
    --color-bg-tertiary: #404040;
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.4);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.5);
  }
}

/* ✅ CORRECTO: Dark mode con clase */
[data-theme="dark"] {
  --color-text-primary: #f0f0f0;
  --color-text-secondary: #b0b0b0;
  --color-text-muted: #808080;
  --color-bg-primary: #1a1a1a;
  --color-bg-secondary: #2d2d2d;
  --color-bg-tertiary: #404040;
}

/* ✅ CORRECTO: Transición suave entre temas */
body {
  transition: background-color var(--transition-base),
              color var(--transition-base);
}
```

## 11. Imágenes Responsivas

```css
/* ✅ CORRECTO: Imágenes responsivas */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Imágenes con aspect ratio */
.aspect-ratio {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

/* Picture element */
picture {
  display: block;
}

picture img {
  width: 100%;
  height: auto;
}

/* Lazy loading */
img[loading="lazy"] {
  opacity: 0;
  transition: opacity var(--transition-base);
}

img[loading="lazy"].loaded {
  opacity: 1;
}
```

## 12. Print Styles

```css
/* ✅ CORRECTO: Estilos de impresión */
@media print {
  /* Ocultar elementos no necesarios */
  .nav,
  .sidebar,
  .footer,
  .advertisement {
    display: none !important;
  }
  
  /* Mostrar todo el contenido */
  * {
    color: black !important;
    background: white !important;
  }
  
  /* Enlaces */
  a[href]::after {
    content: " (" attr(href) ")";
  }
  
  /* Páginas */
  body {
    font-size: 12pt;
    line-height: 1.5;
  }
  
  h1, h2, h3 {
    page-break-after: avoid;
  }
  
  img {
    max-width: 100% !important;
    page-break-inside: avoid;
  }
}
```

## Resumen de Mejores Prácticas

### ✅ SIEMPRE:
1. Usar Custom Properties para valores repetitivos
2. Mobile-First approach
3. CSS Grid para layouts 2D, Flexbox para 1D
4. Container Queries para componentes adaptativos
5. BEM para nomenclatura
6. Focus indicators visibles
7. Respetar prefers-reduced-motion
8. Animar solo transform y opacity
9. Mantener especificidad baja
10. Usar Cascade Layers

### ❌ NUNCA:
1. Hardcodear valores repetitivos
2. Desktop-First approach
3. Usar !important
4. Animar width, height, top, left
5. Remover outline sin reemplazo
6. Usar IDs para estilos
7. Crear selectores muy específicos
8. Ignorar accesibilidad
9. Mezclar concerns (layout, components, utilities)
10. Olvidar breakpoints estratégicos