# Funcionalidad: Galería (Gallery)

## Descripción

Implementar la galería de imágenes con cuadrícula adaptable (responsive grid), ventana emergente (lightbox) interactiva, navegación por teclado y carga diferida (lazy loading) con marcadores esqueleto (skeleton placeholders).

## Requisitos Funcionales

### RF-001: Cuadrícula (Grid) de Imágenes
- Cuadrícula adaptable (responsive grid) de 12 imágenes
- Superposición (overlay) con icono de zoom (zoom icon) al pasar el cursor (hover)
- Carga diferida (lazy loading) de imágenes
- Marcador de posición esqueleto (skeleton loading placeholder)
- Atributos alt descriptivos

### RF-002: Ventana Emergente (Lightbox)
- Apertura al hacer click en imagen
- Navegación anterior/siguiente
- Contador de imágenes (ej: "3 / 12")
- Animación de zoom (zoom animation) al abrir
- Cierre con: botón X, tecla Escape, click fuera
- Navegación por teclado (flechas ← →)
- Adaptable (responsive) en todos los tamaños

### RF-003: Categorías de Imágenes
- 14 fotos de helados
- 3 fotos de confituras
- 2 fotos de croquetas
- 6 fotos de combinaciones
- 2 fotos del local
- 1 foto adicional

### RF-004: Interacciones
- Efecto al pasar el cursor (hover effect) con superposición (overlay) e icono de zoom (zoom icon)
- Transición suave al abrir la ventana emergente (lightbox)
- Navegación fluida entre imágenes
- Animación de cierre

## Requisitos No Funcionales

### RNF-001: Accesibilidad
- Atributos alt descriptivos en todas las imágenes
- Navegación por teclado en la ventana emergente (lightbox)
- Atributos ARIA (ARIA attributes) en la ventana emergente (lightbox)
- Gestión del foco (focus management) en la ventana emergente (lightbox)
- Escape para cerrar

### RNF-002: Rendimiento
- Carga diferida (lazy loading) con IntersectionObserver
- Marcadores esqueleto (skeleton placeholders)
- Optimización de imágenes
- Transiciones CSS (aceleradas por GPU / GPU accelerated)

### RNF-003: Adaptable (Responsive)
- Diseño móvil primero (mobile-first design)
- Cuadrícula adaptable (responsive grid): 1 col (móvil), 2 col (tablet), 3-4 col (desktop)
- Ventana emergente (lightbox) adaptable (responsive)

## Criterios de Aceptación

- [ ] 12 imágenes visibles en cuadrícula (grid)
- [ ] Efecto al pasar el cursor (hover effect) con superposición (overlay) e icono de zoom (zoom icon)
- [ ] Ventana emergente (lightbox) funcional al hacer click
- [ ] Navegación anterior/siguiente funcional
- [ ] Contador de imágenes visible
- [ ] Cierre con X, Escape y click fuera
- [ ] Navegación por teclado (← →)
- [ ] Carga diferida (lazy loading) implementada
- [ ] Marcador esqueleto (skeleton) de carga visible
- [ ] Cuadrícula adaptable (responsive grid) (1/2/3-4 columnas)
- [ ] Accesibilidad implementada
