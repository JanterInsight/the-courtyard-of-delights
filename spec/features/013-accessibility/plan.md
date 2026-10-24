# Plan de Implementación: Accesibilidad (Accessibility) (WCAG AA)

## Enfoque

Implementar mejoras de accesibilidad para cumplir WCAG AA: navegación por teclado, Atributos ARIA (ARIA attributes), gestión de foco (focus management) y contraste.

## Estructura

### Archivos a Modificar
1. **Componentes** - Atributos ARIA (ARIA attributes), roles
2. **CSS** - Estados de foco visible (focus visible states), contraste
3. **Hooks** - Trampa de foco (focus trap) (si necesario)

## Pasos de Implementación

### Paso 1: Navegación por teclado
- Enlace de salto al contenido (skip to content link)
- Navegación completa con Tabulación (Tab)
- Cierre de modales con Escape
- Navegación en caja de luz (lightbox) con flechas

### Paso 2: Atributos ARIA (ARIA attributes)
- Rol (role)="navigation" en nav
- Etiqueta aria (aria-label) en elementos interactivos
- Estado expandido (aria-expanded) en menú hamburguesa
- Etiquetado por aria (aria-labelledby) en secciones
- Oculto para aria (aria-hidden) en elementos decorativos

### Paso 3: Gestión de foco (focus management)
- Estados de foco visible (focus visible states)
- Trampa de foco (focus trap) en menú móvil
- Trampa de foco (focus trap) en caja de luz (lightbox)
- Orden de tabulación lógico

### Paso 4: Contraste y movimiento (motion)
- Contraste mínimo 4.5:1
- Respeto por preferencia de movimiento reducido (prefers-reduced-motion)
- Respeto por preferencia de contraste alto (prefers-contrast: high)
