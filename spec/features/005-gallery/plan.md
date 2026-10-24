# Plan de Implementación: Galería (Gallery)

## Enfoque

Implementar galería de imágenes con cuadrícula adaptable (responsive grid), ventana emergente (lightbox) interactiva, navegación por teclado y carga diferida (lazy loading).

## Estructura de Componentes

### Componentes a Crear
1. **Gallery** (`Gallery.jsx`) - Sección contenedora
2. **GalleryItem** (`GalleryItem.jsx`) - Ítem individual con esqueleto (skeleton)
3. **Lightbox** (`Lightbox.jsx`) - Modal de visualización (ventana emergente / lightbox)

### Datos
- Array de imágenes en `data/gallery.js`

## Pasos de Implementación

### Paso 1: Crear componentes base
- Crear `Gallery.jsx` con maquetado en cuadrícula (grid layout)
- Crear `GalleryItem.jsx` con esqueleto (skeleton) y carga diferida (lazy loading)
- Crear `Lightbox.jsx` con navegación

### Paso 2: Implementar estilos CSS
- Cuadrícula adaptable (responsive grid) (1/2/3-4 columnas)
- Superposición (overlay) con icono de zoom (zoom icon) al pasar el cursor (hover)
- Ventana emergente (lightbox) con fondo superpuesto (backdrop) oscuro
- Botones de navegación
- Animaciones de transición

### Paso 3: Implementar funcionalidad JavaScript
- Carga diferida (lazy loading) con IntersectionObserver
- Apertura/cierre de la ventana emergente (lightbox)
- Navegación anterior/siguiente
- Cierre con Escape, X, click fuera
- Navegación por teclado (← →)
- Contador de imágenes

### Paso 4: Accesibilidad
- Atributos alt descriptivos
- Atributos ARIA (ARIA attributes) en la ventana emergente (lightbox)
- Trampa de foco (focus trap) en la ventana emergente (lightbox)
- Navegación por teclado
