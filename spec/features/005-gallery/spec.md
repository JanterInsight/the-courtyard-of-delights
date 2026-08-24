# Feature: Gallery

## Descripción

Implementar la galería de imágenes con grid responsive, lightbox interactivo, navegación por teclado y lazy loading con skeleton placeholders.

## Requisitos Funcionales

### RF-001: Grid de Imágenes
- Grid responsive de 12 imágenes
- Overlay con icono de zoom en hover
- Lazy loading de imágenes
- Skeleton loading placeholder
- Atributos alt descriptivos

### RF-002: Lightbox
- Apertura al hacer click en imagen
- Navegación anterior/siguiente
- Contador de imágenes (ej: "3 / 12")
- Zoom animation al abrir
- Cierre con: botón X, tecla Escape, click fuera
- Navegación por teclado (flechas ← →)
- Responsive en todos los tamaños

### RF-003: Categorías de Imágenes
- 14 fotos de helados
- 3 fotos de confituras
- 2 fotos de croquetas
- 6 fotos de combinaciones
- 2 fotos del local
- 1 foto adicional

### RF-004: Interacciones
- Hover effect con overlay y zoom icon
- Transición suave al abrir lightbox
- Navegación fluida entre imágenes
- Animación de cierre

## Requisitos No Funcionales

### RNF-001: Accesibilidad
- Atributos alt descriptivos en todas las imágenes
- Navegación por teclado en lightbox
- ARIA attributes en lightbox
- Focus management en lightbox
- Escape para cerrar

### RNF-002: Rendimiento
- Lazy loading con IntersectionObserver
- Skeleton placeholders
- Optimización de imágenes
- Transiciones CSS (GPU accelerated)

### RNF-003: Responsive
- Mobile-first design
- Grid adaptable: 1 col (móvil), 2 col (tablet), 3-4 col (desktop)
- Lightbox responsive

## Criterios de Aceptación

- [ ] 12 imágenes visibles en grid
- [ ] Hover effect con overlay y zoom icon
- [ ] Lightbox funcional al hacer click
- [ ] Navegación anterior/siguiente funcional
- [ ] Contador de imágenes visible
- [ ] Cierre con X, Escape y click fuera
- [ ] Navegación por teclado (← →)
- [ ] Lazy loading implementado
- [ ] Skeleton loading visible
- [ ] Grid responsive (1/2/3-4 columnas)
- [ ] Accesibilidad implementada