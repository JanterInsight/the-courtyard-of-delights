# Plan de Implementación: Accessibility (WCAG AA)

## Enfoque

Implementar mejoras de accesibilidad para cumplir WCAG AA: navegación por teclado, ARIA attributes, focus management y contraste.

## Estructura

### Archivos a Modificar
1. **Componentes** - ARIA attributes, roles
2. **CSS** - Focus visible states, contraste
3. **Hooks** - Focus trap (si necesario)

## Pasos de Implementación

### Paso 1: Navegación por teclado
- Skip to content link
- Navegación completa con Tab
- Cierre de modales con Escape
- Navegación en lightbox con flechas

### Paso 2: ARIA attributes
- role="navigation" en nav
- aria-label en elementos interactivos
- aria-expanded en menú hamburguesa
- aria-labelledby en secciones
- aria-hidden en elementos decorativos

### Paso 3: Focus management
- Focus visible states
- Focus trap en menú móvil
- Focus trap en lightbox
- Orden de tabulación lógico

### Paso 4: Contraste y motion
- Contraste mínimo 4.5:1
- Respeto por prefers-reduced-motion
- Respeto por prefers-contrast: high