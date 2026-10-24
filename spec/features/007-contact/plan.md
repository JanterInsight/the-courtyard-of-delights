# Plan de Implementación: Contacto (Contact)

## Enfoque

Implementar sección de contacto con 3 tarjetas: teléfono, WhatsApp y dirección con mapa.

## Estructura de Componentes

### Componentes a Crear
1. **Contact** (`Contact.jsx`) - Sección contenedora
2. **ContactCard** (`ContactCard.jsx`) - Tarjeta individual

## Pasos de Implementación

### Paso 1: Crear componentes base
- Crear `Contact.jsx` con maquetado en cuadrícula (grid layout)
- Crear `ContactCard.jsx` con icono, título, info y enlace (link)

### Paso 2: Implementar estilos CSS
- Cuadrícula adaptable (responsive grid) (3 cols escritorio / desktop, 1 móvil)
- Estilos de tarjetas (degradado / gradient, sombra / shadow)
- Efectos al pasar el cursor (hover effects)
- Iconos grandes

### Paso 3: Implementar funcionalidad JavaScript
- Enlaces (links) funcionales (tel:, wa.me, maps)
- Efectos al pasar el cursor (hover effects) con transiciones

### Paso 4: Accesibilidad
- aria-label en enlaces (links)
- Atributos alt en iconos
