# Modern CSS Development - Instructions

## Purpose

Este documento proporciona instrucciones detalladas para que el agente IA desarrolle CSS moderno, mantenible y escalable siguiendo estándares profesionales y mejores prácticas de la industria.

## When to Activate

Activar esta skill cuando:
- El usuario solicite crear estilos CSS para una aplicación web
- Se necesite implementar diseño responsive
- Se requiera organizar estilos de manera profesional
- Se deba usar CSS Grid, Flexbox o Container Queries
- Se trabaje en sistemas de diseño (Design Systems)
- Se necesite optimizar el rendimiento de CSS
- Se deba implementar animaciones y transiciones
- Se requiera arquitectura CSS profesional

## Core Rules

### 1. Mobile-First Approach

**Regla #1: Siempre empezar por móvil**
```css
/* ✅ CORRECTO: Mobile-First */
.container {
  /* Estilos base para móvil */
  padding: 1rem;
  display: block;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
    display: flex;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
    max-width: 1200px;
    margin: 0 auto;
  }
}

/* ❌ INCORRECTO: Desktop-First */
.container {
  padding: 3rem;
  max-width: 1200px;
}

@media (max-width: 1024px) {
  .container {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
}
```

### 2. Custom Properties (CSS Variables)

**Regla #2: Usar variables para valores repetitivos**
```css
/* ✅ CORRECTO */
:root {
  /* Colores */
  --color-primary: #3498db;
  --color-secondary: #2ecc71;
  --color-danger: #e74c3c;
  --color-text: #1a1a1a;
  --color-background: #ffffff;
  
  /* Espaciado */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  
  /* Tipografía */
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.25rem;
  --font-size-xl: 2rem;
  
  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  
  /* Sombras */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.button {
  background-color: var(--color-primary);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}

/* ❌ INCORRECTO: Valores hardcodeados */
.button {
  background-color: #3498db;
  padding: 16px 32px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

### 3. CSS Grid y Flexbox

**Regla #3: Usar CSS Grid para layouts 2D, Flexbox para 1D**
```css
/* ✅ CORRECTO: CSS Grid para layout principal */
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

/* ✅ CORRECTO: Flexbox para componentes 1D */
.card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-body {
  flex: 1;
}

.card-footer {
  display: flex;
  gap: var(--spacing-sm);
}
```

### 4. Especificidad y Cascada

**Regla #4: Mantener especificidad baja**
```css
/* ✅ CORRECTO: Especificidad baja */
.button {
  background-color: var(--color-primary);
}

.button--primary {
  background-color: var(--color-primary);
}

.button--secondary {
  background-color: var(--color-secondary);
}

.button--large {
  padding: var(--spacing-lg) var(--spacing-xl);
  font-size: var(--font-size-lg);
}

/* ❌ INCORRECTO: Especificidad alta */
.button {
  background-color: var(--color-primary);
}

.container .card .button {
  background-color: var(--color-secondary);
}

#main-content .card .button {
  background-color: var(--color-danger);
}
```

### 5. Naming Conventions (BEM)

**Regla #5: Usar BEM para nomenclatura**
```css
/* Block */
.card { }

/* Element */
.card__header { }
.card__body { }
.card__footer { }

/* Modifier */
.card--featured { }
.card--large { }
.card--horizontal { }

/* ✅ CORRECTO */
.card {
  background-color: white;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}

.card__header {
  padding: var(--spacing-md);
  border-bottom: 1px solid #eee;
}

.card__body {
  padding: var(--spacing-md);
}

.card__footer {
  padding: var(--spacing-md);
  border-top: 1px solid #eee;
}

.card--featured {
  border: 2px solid var(--color-primary);
}

/* ❌ INCORRECTO: Nombres genéricos */
.card-header { }
.card-body { }
.card-footer { }
```

### 6. Accesibilidad

**Regla #6: Focus indicators visibles**
```css
/* ✅ CORRECTO: Focus visible */
.button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

.link:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* ❌ INCORRECTO: Quitar outline sin reemplazo */
.button:focus {
  outline: none;
}

/* ✅ CORRECTO: Reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* ✅ CORRECTO: High contrast mode */
@media (prefers-contrast: high) {
  .button {
    border: 2px solid currentColor;
  }
}
```

### 7. Performance

**Regla #7: Optimizar animaciones**
```css
/* ✅ CORRECTO: Solo transform y opacity (GPU accelerated) */
.animated-element {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.animated-element:hover {
  transform: translateY(-4px);
  opacity: 0.9;
}

/* ❌ INCORRECTO: Animar propiedades costosas */
.animated-element {
  transition: width 0.3s ease, height 0.3s ease, top 0.3s ease, left 0.3s ease;
}

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
```

### 8. Container Queries

**Regla #8: Usar Container Queries para componentes**
```css
/* ✅ CORRECTO: Container Query */
.card-container {
  container-type: inline-size;
}

.card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

/* Cuando el contenedor tiene más de 400px */
@container (min-width: 400px) {
  .card {
    flex-direction: row;
  }
  
  .card__image {
    flex: 0 0 200px;
  }
  
  .card__content {
    flex: 1;
  }
}

/* ❌ INCORRECTO: Depender solo del viewport */
@media (min-width: 768px) {
  .card {
    flex-direction: row;
  }
}
```

### 9. Organización de Archivos

**Regla #9: Estructura de archivos CSS**
```
styles/
├── abstracts/
│   ├── _variables.css      # Custom properties
│   ├── _mixins.css         # Mixins (si usas preprocesador)
│   ├── _functions.css      # Functions
│   └── _placeholders.css   # Placeholders
├── base/
│   ├── _reset.css          # Reset/normalize
│   ├── _typography.css     # Tipografía base
│   └── _utilities.css      # Utilidades base
├── components/
│   ├── _button.css
│   ├── _card.css
│   ├── _form.css
│   └── _navigation.css
├── layout/
│   ├── _header.css
│   ├── _footer.css
│   ├── _sidebar.css
│   └── _grid.css
├── pages/
│   ├── _home.css
│   ├── _about.css
│   └── _contact.css
├── themes/
│   └── _dark-mode.css
└── main.css                # Archivo principal
```

### 10. Cascade Layers

**Regla #10: Usar @layer para organizar cascada**
```css
/* ✅ CORRECTO: Cascade Layers */
@layer reset, base, components, utilities;

@layer reset {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
}

@layer base {
  body {
    font-family: system-ui, sans-serif;
    line-height: 1.6;
  }
}

@layer components {
  .button {
    padding: var(--spacing-md) var(--spacing-lg);
    border-radius: var(--radius-md);
  }
}

@layer utilities {
  .text-center {
    text-align: center;
  }
  
  .mt-4 {
    margin-top: var(--spacing-lg);
  }
}
```

## Workflow

### Paso 1: Análisis y Planificación
1. Identificar los componentes necesarios
2. Definir breakpoints (móvil, tablet, desktop)
3. Planificar la arquitectura CSS
4. Definir design tokens (colores, espaciado, tipografía)

### Paso 2: Configuración Base
1. Crear Custom Properties en :root
2. Implementar reset CSS
3. Configurar tipografía base
4. Definir utilidades base

### Paso 3: Componentes
1. Crear componentes siguiendo BEM
2. Implementar estados (hover, focus, active, disabled)
3. Agregar variantes (size, color, etc.)
4. Documentar cada componente

### Paso 4: Layout
1. Implementar layout principal (Grid/Flexbox)
2. Crear layouts responsivos
3. Usar Container Queries cuando corresponda
4. Verificar en diferentes tamaños

### Paso 5: Accesibilidad
1. Verificar focus indicators
2. Probar con prefers-reduced-motion
3. Verificar contraste de colores
4. Probar navegación por teclado

### Paso 6: Performance
1. Identificar CSS crítico
2. Optimizar animaciones
3. Remover CSS no usado
4. Minificar para producción

### Paso 7: Testing
1. Probar en navegadores objetivo
2. Verificar responsive design
3. Probar accesibilidad
4. Medir performance (Lighthouse)

## Best Practices

### 1. Custom Properties
- ✅ Definir variables en :root para valores globales
- ✅ Usar variables para colores, espaciado, tipografía
- ✅ Sobrescribir variables en componentes específicos
- ✅ Usar var() con fallback values
- ❌ No hardcodear valores repetitivos

### 2. Responsive Design
- ✅ Mobile-First approach
- ✅ Breakpoints basados en contenido, no dispositivos
- ✅ Usar Container Queries para componentes
- ✅ Imágenes responsivas con srcset
- ❌ No usar Desktop-First
- ❌ No crear demasiados breakpoints

### 3. Layout
- ✅ CSS Grid para layouts 2D
- ✅ Flexbox para layouts 1D
- ✅ Grid para layout principal, Flexbox para componentes
- ✅ Usar gap en lugar de margin/gutter
- ❌ No usar floats para layout
- ❌ No usar tables para layout

### 4. Performance
- ✅ Animar solo transform y opacity
- ✅ Usar will-change para animaciones complejas
- ✅ Implementar Critical CSS
- ✅ Usar contain para aislamiento
- ❌ No animar width, height, top, left
- ❌ No usar box-shadow en animaciones frecuentes

### 5. Accesibilidad
- ✅ Focus indicators visibles (2px outline)
- ✅ Respetar prefers-reduced-motion
- ✅ Contraste mínimo 4.5:1
- ✅ Touch targets mínimo 44x44px
- ❌ No remover outline sin reemplazo
- ❌ No confiar solo en color para transmitir información

### 6. Arquitectura
- ✅ Usar BEM o metodología similar
- ✅ Separar concerns (layout, components, utilities)
- ✅ Mantener especificidad baja
- ✅ Usar Cascade Layers
- ❌ No usar IDs para estilos
- ❌ No usar !important
- ❌ No crear selectores muy específicos

### 7. Naming
- ✅ Nombres descriptivos y semánticos
- ✅ BEM: block__element--modifier
- ✅ Kebab-case para clases
- ✅ Component-based naming
- ❌ No usar nombres genéricos (red-button, big-text)
- ❌ No usar abreviaturas sin sentido

### 8. Organización
- ✅ Un componente por archivo
- ✅ Estructura de carpetas clara
- ✅ Comentar secciones complejas
- ✅ Documentar componentes
- ❌ No mezclar estilos de diferentes componentes
- ❌ No crear archivos CSS muy grandes

## Anti Patterns

### 1. Divitis en CSS
```css
/* ❌ INCORRECTO */
.div1 { }
.div2 { }
.div3 { }

/* ✅ CORRECTO */
.header { }
.nav { }
.main-content { }
```

### 2. Especificidad Wars
```css
/* ❌ INCORRECTO */
.button { }
.container .button { }
#main .container .button { }
#main .container .button.special { }

/* ✅ CORRECTO */
.button { }
.button--special { }
```

### 3. Hardcodeo de Valores
```css
/* ❌ INCORRECTO */
.button {
  padding: 16px 32px;
  background-color: #3498db;
  border-radius: 8px;
}

/* ✅ CORRECTO */
.button {
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--color-primary);
  border-radius: var(--radius-md);
}
```

### 4. Desktop-First
```css
/* ❌ INCORRECTO */
.container {
  max-width: 1200px;
  padding: 3rem;
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
}

/* ✅ CORRECTO */
.container {
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    max-width: 1200px;
    padding: 3rem;
  }
}
```

### 5. Animaciones Costosas
```css
/* ❌ INCORRECTO */
.element {
  transition: width 0.3s, height 0.3s, top 0.3s, left 0.3s;
}

/* ✅ CORRECTO */
.element {
  transition: transform 0.3s, opacity 0.3s;
}
```

### 6. Quitar Focus Outline
```css
/* ❌ INCORRECTO */
.button:focus {
  outline: none;
}

/* ✅ CORRECTO */
.button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### 7. !important
```css
/* ❌ INCORRECTO */
.button {
  background-color: blue !important;
}

/* ✅ CORRECTO */
.button--primary {
  background-color: var(--color-primary);
}
```

### 8. Selectores Complejos
```css
/* ❌ INCORRECTO */
div.container > div.row > div.col-md-6 > button.btn-primary {
  background-color: blue;
}

/* ✅ CORRECTO */
.btn-primary {
  background-color: var(--color-primary);
}
```

## Examples

Ver la carpeta `examples/` para ejemplos completos de:
- Sistema de diseño completo
- Layout responsive con CSS Grid
- Componentes con BEM
- Animaciones optimizadas
- Container Queries
- Dark mode

## References

- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com/)
- [Modern CSS Solutions](https://moderncss.dev/)
- [Container Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries)
- [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [BEM Methodology](https://getbem.com/)
- [WCAG 2.2 - CSS](https://www.w3.org/WAI/WCAG22/Techniques/css)