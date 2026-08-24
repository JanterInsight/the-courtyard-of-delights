# Feature: Products

## Descripción

Implementar la sección de productos con 4 tarjetas que muestran los productos principales del local: helados artesanales, confituras, croquetas y combinación.

## Requisitos Funcionales

### RF-001: Tarjetas de Productos
- 4 tarjetas de productos:
  1. 🍦 Helados Artesanales
  2. 🍯 Confituras
  3. 🥟 Croquetas
  4. 🍨 Helados + Confituras
- Cada tarjeta contiene:
  - Icono/emoji del producto
  - Título del producto
  - Descripción del producto
  - Imagen del producto
- Hover effect con scale y shadow

### RF-002: Imágenes de Productos
- Imágenes de alta calidad para cada producto
- Lazy loading
- Skeleton loading placeholder mientras carga
- Atributos alt descriptivos
- Dimensiones consistentes

### RF-003: Layout
- Grid responsive de 4 columnas en desktop
- Grid de 2 columnas en tablet
- Grid de 1 columna en móvil
- Gap entre tarjetas
- Contenedor con max-width

### RF-004: Interacciones
- Hover effect: scale(1.05) y shadow aumentada
- Transición suave (0.3s ease)
- Skeleton loading con animación shimmer
- Fade-in al cargar imagen

## Requisitos No Funcionales

### RNF-001: Accesibilidad
- Atributos alt descriptivos en todas las imágenes
- Estructura semántica con section
- aria-labelledby para título de sección

### RNF-002: Rendimiento
- Lazy loading de imágenes
- Skeleton placeholders para mejor UX
- IntersectionObserver para lazy loading
- CSS transitions para animaciones (GPU accelerated)

### RNF-003: Responsive
- Mobile-first design
- Breakpoints: 768px (tablet), 1024px (desktop)
- Grid adaptable

## Criterios de Aceptación

- [ ] 4 tarjetas de productos visibles
- [ ] Cada tarjeta tiene icono, título, descripción e imagen
- [ ] Hover effect funcional (scale + shadow)
- [ ] Skeleton loading visible durante carga
- [ ] Lazy loading implementado
- [ ] Grid de 4 columnas en desktop
- [ ] Grid de 2 columnas en tablet
- [ ] Grid de 1 columna en móvil
- [ ] Transiciones suaves
- [ ] Accesibilidad implementada