# Plan de Implementación: Gallery

## Enfoque

Implementar galería de imágenes con grid responsive, lightbox interactivo, navegación por teclado y lazy loading.

## Estructura de Componentes

### Componentes a Crear
1. **Gallery** (`Gallery.jsx`) - Sección contenedora
2. **GalleryItem** (`GalleryItem.jsx`) - Item individual con skeleton
3. **Lightbox** (`Lightbox.jsx`) - Modal de visualización

### Datos
- Array de imágenes en `data/gallery.js`

## Pasos de Implementación

### Paso 1: Crear componentes base
- Crear `Gallery.jsx` con grid layout
- Crear `GalleryItem.jsx` con skeleton y lazy loading
- Crear `Lightbox.jsx` con navegación

### Paso 2: Implementar estilos CSS
- Grid responsive (1/2/3-4 columnas)
- Overlay con zoom icon en hover
- Lightbox con backdrop oscuro
- Botones de navegación
- Animaciones de transición

### Paso 3: Implementar funcionalidad JavaScript
- Lazy loading con IntersectionObserver
- Apertura/cierre de lightbox
- Navegación anterior/siguiente
- Cierre con Escape, X, click fuera
- Navegación por teclado (← →)
- Contador de imágenes

### Paso 4: Accesibilidad
- Atributos alt descriptivos
- ARIA en lightbox
- Focus trap en lightbox
- Navegación por teclado