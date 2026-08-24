# Feature: Accessibility (WCAG AA)

## Descripción

Implementar todas las mejoras de accesibilidad necesarias para cumplir con el estándar WCAG AA y garantizar que el sitio sea navegable y comprensible para todos los usuarios.

## Requisitos Funcionales

### RF-001: Navegación por Teclado
- Skip to content link
- Navegación completa con Tab
- Activación con Enter
- Cierre de modales con Escape
- Navegación en lightbox con flechas (← →)

### RF-002: ARIA Attributes
- role="navigation" en nav
- aria-label en elementos interactivos
- aria-expanded en menú hamburguesa
- aria-labelledby en secciones
- aria-hidden en elementos decorativos
- aria-label en typewriter con texto completo

### RF-003: Focus Management
- Focus visible states
- Focus trap en menú móvil
- Focus trap en lightbox
- Orden de tabulación lógico
- Focus restoration al cerrar modales

### RF-004: Contraste y Legibilidad
- Contraste mínimo 4.5:1 para texto normal
- Contraste mínimo 3:1 para texto grande
- Respeto por prefers-contrast: high
- Texto redimensionable hasta 200%

### RF-005: Motion y Animaciones
- Respeto por prefers-reduced-motion
- Alternativas sin animación
- Pausa/stop de animaciones

## Requisitos No Funcionales

### RNF-001: Estándares
- Cumplimiento WCAG 2.1 nivel AA
- HTML semántico
- Estructura de headings correcta (h1 → h2 → h3)

### RNF-002: Compatibilidad
- Compatible con screen readers
- Navegación por teclado completa
- Funciona con tecnologías de asistencia

### RNF-003: Responsive
- Accesible en todos los dispositivos
- Touch targets mínimo 44x44px

## Criterios de Aceptación

- [ ] Skip to content link implementado
- [ ] Navegación completa por teclado
- [ ] ARIA attributes en todos los elementos interactivos
- [ ] Focus visible states implementados
- [ ] Focus trap en menú móvil
- [ ] Focus trap en lightbox
- [ ] Contraste WCAG AA garantizado
- [ ] Respeto por prefers-reduced-motion
- [ ] Respeto por prefers-contrast: high
- [ ] HTML semántico correcto
- [ ] Compatible con screen readers
- [ ] Touch targets mínimo 44x44px