# Funcionalidad: Productos

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
- Efecto al pasar el cursor (hover) con escala (scale) y sombra (shadow)

### RF-002: Imágenes de Productos
- Imágenes de alta calidad para cada producto
- Carga diferida (lazy loading)
- Marcador de posición esqueleto (skeleton loading) mientras carga
- Atributos alt descriptivos
- Dimensiones consistentes

### RF-003: Disposición (Layout)
- Cuadrícula (grid) adaptable (responsive) de 4 columnas en escritorio (desktop)
- Cuadrícula (grid) de 2 columnas en tableta (tablet)
- Cuadrícula (grid) de 1 columna en móvil
- Espacio (gap) entre tarjetas
- Contenedor con ancho máximo (max-width)

### RF-004: Interacciones
- Efecto al pasar el cursor (hover): escala (scale)(1.05) y sombra (shadow) aumentada
- Transición suave (0.3s ease)
- Carga esqueleto (skeleton loading) con animación de brillo (shimmer)
- Aparición gradual (fade-in) al cargar imagen

## Requisitos No Funcionales

### RNF-001: Accesibilidad
- Atributos alt descriptivos en todas las imágenes
- Estructura semántica con section
- aria-labelledby para título de sección

### RNF-002: Rendimiento
- Carga diferida (lazy loading) de imágenes
- Marcadores de posición esqueleto (skeleton placeholders) para mejor experiencia de usuario (UX)
- IntersectionObserver para carga diferida (lazy loading)
- Transiciones CSS para animaciones (aceleradas por GPU)

### RNF-003: Adaptabilidad (Responsive)
- Diseño primero para móviles (mobile-first)
- Puntos de interrupción (breakpoints): 768px (tableta/tablet), 1024px (escritorio/desktop)
- Cuadrícula (grid) adaptable

## Criterios de Aceptación

- [ ] 4 tarjetas de productos visibles
- [ ] Cada tarjeta tiene icono, título, descripción e imagen
- [ ] Efecto al pasar el cursor (hover) funcional (escala/scale + sombra/shadow)
- [ ] Carga esqueleto (skeleton loading) visible durante carga
- [ ] Carga diferida (lazy loading) implementada
- [ ] Cuadrícula (grid) de 4 columnas en escritorio (desktop)
- [ ] Cuadrícula (grid) de 2 columnas en tableta (tablet)
- [ ] Cuadrícula (grid) de 1 columna en móvil
- [ ] Transiciones suaves
- [ ] Accesibilidad implementada
