# Funcionalidad: Accesibilidad (Accessibility) (WCAG AA)

## Descripción

Implementar todas las mejoras de accesibilidad necesarias para cumplir con el estándar WCAG AA y garantizar que el sitio sea navegable y comprensible para todos los usuarios.

## Requisitos Funcionales

### RF-001: Navegación por Teclado
- Enlace de salto al contenido (skip to content link)
- Navegación completa con Tabulación (Tab)
- Activación con Entrar (Enter)
- Cierre de modales con Escape
- Navegación en caja de luz (lightbox) con flechas (← →)

### RF-002: Atributos ARIA (ARIA Attributes)
- Rol (role)="navigation" en nav
- Etiqueta aria (aria-label) en elementos interactivos
- Estado expandido (aria-expanded) en menú hamburguesa
- Etiquetado por aria (aria-labelledby) en secciones
- Oculto para aria (aria-hidden) en elementos decorativos
- Etiqueta aria (aria-label) en escritura progresiva (typewriter) con texto completo

### RF-003: Gestión de Foco (Focus Management)
- Estados de foco visible (focus visible states)
- Trampa de foco (focus trap) en menú móvil
- Trampa de foco (focus trap) en caja de luz (lightbox)
- Orden de tabulación lógico
- Restauración de foco (focus restoration) al cerrar modales

### RF-004: Contraste y Legibilidad
- Contraste mínimo 4.5:1 para texto normal
- Contraste mínimo 3:1 para texto grande
- Respeto por preferencia de contraste alto (prefers-contrast: high)
- Texto redimensionable hasta 200%

### RF-005: Movimiento y Animaciones (Motion)
- Respeto por preferencia de movimiento reducido (prefers-reduced-motion)
- Alternativas sin animación
- Pausa/detención de animaciones

## Requisitos No Funcionales

### RNF-001: Estándares
- Cumplimiento WCAG 2.1 nivel AA
- HTML semántico
- Estructura de encabezados (headings) correcta (h1 → h2 → h3)

### RNF-002: Compatibilidad
- Compatible con lectores de pantalla (screen readers)
- Navegación por teclado completa
- Funciona con tecnologías de asistencia

### RNF-003: Adaptabilidad (Responsive)
- Accesible en todos los dispositivos
- Áreas táctiles (touch targets) mínimo 44x44px

## Criterios de Aceptación

- [ ] Enlace de salto al contenido (skip to content link) implementado
- [ ] Navegación completa por teclado
- [ ] Atributos ARIA (ARIA attributes) en todos los elementos interactivos
- [ ] Estados de foco visible (focus visible states) implementados
- [ ] Trampa de foco (focus trap) en menú móvil
- [ ] Trampa de foco (focus trap) en caja de luz (lightbox)
- [ ] Contraste WCAG AA garantizado
- [ ] Respeto por preferencia de movimiento reducido (prefers-reduced-motion)
- [ ] Respeto por preferencia de contraste alto (prefers-contrast: high)
- [ ] HTML semántico correcto
- [ ] Compatible con lectores de pantalla (screen readers)
- [ ] Áreas táctiles (touch targets) mínimo 44x44px
