---
name: El Patio de las Delicias
description: Landing page para una tienda de artesanía de helado, confitería y croquetas. Paleta pastel con tipografías juguetesas y animaciones suaves.
colors:
  primary:
    - chocolate-brown: "#8B4513"
    - honey-gold: "#D4A017"
  neutral:
    - cream-white: "#FFFDF8"
    - vanilla-cream: "#FFF4E8"
    - dark-text: "#2D2D2D"
    - warm-gray: "#6B6B6B"
    - light-gray: "#F5F5F5"
    - medium-gray: "#9E9E9E"
  accent:
    - strawberry: "#E63946"
    - mango: "#F4A261"
    - mint-green: "#6BCB77"
    - blueberry: "#5E60CE"
    - chocolate: "#6F4E37"
    - vanilla: "#FFF1D6"
typography:
  heading:
    fontFamily: "'Fredoka', 'Baloo 2', cursive, sans-serif"
  body:
    fontFamily: "'Poppins', sans-serif"
  sizes:
    - xs: "0.875rem"
    - sm: "1rem"
    - md: "1.125rem"
    - lg: "1.5rem"
    - xl: "2rem"
    - xxl: "3rem"
    - hero: "4rem"
rounded:
  - sm: "8px"
  - md: "12px"
  - lg: "20px"
  - full: "50%"
spacing:
  - xs: "0.5rem"
  - sm: "1rem"
  - md: "1.5rem"
  - lg: "2rem"
  - xl: "3rem"
  - xxl: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.primary.chocolate-brown}"
    textColor: "{colors.neutral.cream-white}"
    rounded: "{rounded.md}"
    padding: "var(--spacing-sm) var(--spacing-lg)"
  button-primary-hover:
    backgroundColor: "{colors.neutral.dark-text}"
  button-secondary:
    backgroundColor: "{colors.accent.mint-green}"
    textColor: "{colors.neutral.cream-white}"
  button-secondary-hover:
    backgroundColor: "{colors.accent.mint-green-hover}"
  focus-ring:
    outline: "3px solid {colors.primary.honey-gold}"
    offset: "2px"
---

# Design System: El Patio de las Delicias

## Overview

**Creative North Star: "The Sweet Garden"**

Una estética dulce, cálida y accesible que invita a la contemplación. La paleta pastel combina conetos tiernos (chocolate, miel) con toques vibrantes de fruta y menta, generando un equilibrio entre tradición artesanal y cercanía. La tipografía juguetea pero no infantil: Fredoka aporta forma y calidez, mientras Poppins sostiene la legibilidad.

La densidad visual es baja a media: cada sección respira, las sombras son difusas y la animación es suave y siempre legible.

**Key Characteristics:**
- Tono cálido, tierno, hispano-artesanal
- Paleta pastel y vibrante, usada con moderación
- Tipografías redondeadas y con forma (Fredoka + Poppins)
- Espaciado generoso y movimiento suave
- Accesibilidad y correcto contraste como prioridad

# Colors

La paleta se organiza en tres familias: **primario** (tierra y calor), **neutro** y **acento** (colores de fruta y menta). Los primarios dominan; los de acento actúan con restricción.

### Primary

- **Chocolate Brown** (#8B4513): Títulos, enlaces, fondo de botones primarios.
- **Honey Gold** (#D4A017): Foco, hover, indicador de keyboard focus.

### Neutral

- **Cream White** (#FFFDF8): Fondo principal.
- **Vanilla Cream** (#FFF4E8): Secciones secundarias, tarjetas.
- **Dark Text** (#2D2D2D): Texto principal.
- **Warm Gray** (#6B6B6B): Texto secundario, subtítulos.
- **Light Gray** (#F5F5F5): Fondo de loading, separadores.
- **Medium Gray** (#9E9E9E): Metadatos, placeholders.

### Accent

- **Strawberry** (#E63946): Tono fresco. Solo punteado o iconos.
- **Mango** (#F4A261): Apertura cálida. Llamados a la acción secundarios.
- **Mint Green** (#6BCB77): Acción positiva, botón secundario, éxito.
- **Blueberry** (#5E60CE): Tono profundo. Uso limitado.
- **Chocolate** (#6F4E37): Textos más oscuros.
- **Vanilla** (#FFF1D6): Subrayado, highlights sutiles.

### Named Rules

**The One Voice Rule.** El primary (#8B4513) se aplica en títulos, links y botones principales. El resto de la paleta es de apoyo.

## Typography

**Display Font:** Fredoka (con fallback 'Baloo 2', cursive, sans-serif)
**Body Font:** Poppins (con fallback sans-serif)

**Character:** Fredoka aporta calidez y forma; Poppins aporta claridad y tono moderno.

### Hierarchy

- **Display** (600, 4rem / clamp(2rem, 5vw, 4rem), 1.2): Títulos de sección, Hero.
- **Headline** (600, 3rem / clamp(1.75rem, 4vw, 3rem), 1.2): Títulos de secciones.
- **Title** (600, 1.5rem / 1.125rem, 1.2): Títulos de secciones secundarias.
- **Body** (400, 1.125rem, 1.6): Texto de cuerpo.
- **Label** (600, 0.875rem, 1.2): Metadatos, placeholders.

### Named Rules

**The Letter-Spacing Rule.** El texto en mayúsculas no se usa.

## Layout

**Grid / Spatial Model:** Contenedores centrados (`.container`, max-width 1200px), secciones verticales de scroll (padding `var(--spacing-xxl)` o 5rem).

**Responsive:**
- Tablet (<=768px): tipografías reducidas, menú hamburguesa
- Mobile (<=480px): 1 columna, botones full width
- Desktop (>=1400px): max-width 1400px

**Spacing Rhythm:** Spacing system escalable (0.5rem a 5rem), aplicado con variables CSS.

## Elevation & Depth

El sistema es **flat** por defecto. La profundidad se consigue con:
- Sombras difusas de hover/estado activo (elevación ligera estructural)
- Espaciado entre secciones que sugiere capas
- Efectos de glow en el focus (honey gold, 3px outline)
- Animación fadeInUp/zoomIn para componentes que entran al viewport

**Shadow Vocabulary:**
- **Ambient blur**: `rgba(0,0,0,0.1)` / `rgba(0,0,0,0.2)`
- **Hover elevation**: `0 4px 12px var(--shadow-strong)`
- **Mobile overlay**: `box-shadow: -4px 0 20px var(--shadow-strong)`

## Shapes

**Corner Strategy:** Radios redondeados y tiernos:
- sm: 8px — botones, elementos pequeños
- md: 12px — buttons primarios, tarjetas
- lg: 20px — contenedores grandes
- full: 50% — elementos circulares

**Border:** No se definen bordes gruesos. La separación se logra con espaciado.

## Components

### Buttons

- **Shape:** 12px radius (border-radius-md)
- **Primary:** fondo `#8B4513`, texto `#FFFDF8`
- **Hover/Focus:** transladaY(-2px), sombra `0 4px 12px`, outline honey gold 3px
- **Secondary:** fondo `#6BCB77` (mint green), texto cream

### Reveal / Scroll Animations

- **Style:** fadeInUp o zoomIn suave
- **Duration:** 0.7s ease, cubic-bezier(0.22,1,0.36,1)
- **Variants:** reveal-up (translateY 36px), reveal-left (translateX -48px), reveal-right (translateX 48px), reveal-zoom (scale 0.9)

### Skip to Content

- Enlace accesible para navegación por teclado. Fondo chocolate, texto cream, padding 8px 16px.

### Skeleton Loading

- **Background:** linear-gradient(90deg, light-gray 25%, cream-white 50%, light-gray 75%)
- **Animation:** skeleton-loading 1.5s infinite

## Do's and Don'ts

### Do:

- **Do** usar el primary `#8B4513` para títulos, links y botones principales.
- **Do** aplicar hover con translateY(-2px) y sombra en todos los botones interactivos.
- **Do** usar reveal animations para contenido que entra al viewport (0.7s ease, cubic-bezier(0.22, 1, 0.36, 1)).
- **Do** mantener buen contraste de texto sobre fondos (WCAG AA mínimo).
- **Do** usar `var(--spacing-*` para todo el espaciado.

### Don't:

- **Don't** usar más de 3 colores de acento por pantalla.
- **Don't** crear nuevos tokens CSS fuera de `src/styles/variables.css`.
- **Don't** añadir bordes gruesos en la paleta clara.
- **Don't** sobreusar esquemas de sombras; el sistema es flat por defecto.
- **Don't** cambiar la tipografía de carga sin actualizar PRODUCT.md y DESIGN.md.
- **Don't** usar colores de acento para texto cuerpo.
