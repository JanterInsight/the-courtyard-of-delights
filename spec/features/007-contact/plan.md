# Plan de Implementación: Contact

## Enfoque

Implementar sección de contacto con 3 tarjetas: teléfono, WhatsApp y dirección con mapa.

## Estructura de Componentes

### Componentes a Crear
1. **Contact** (`Contact.jsx`) - Sección contenedora
2. **ContactCard** (`ContactCard.jsx`) - Tarjeta individual

## Pasos de Implementación

### Paso 1: Crear componentes base
- Crear `Contact.jsx` con grid layout
- Crear `ContactCard.jsx` con icono, título, info y link

### Paso 2: Implementar estilos CSS
- Grid responsive (3 cols desktop, 1 móvil)
- Estilos de tarjetas (gradiente, shadow)
- Hover effects
- Iconos grandes

### Paso 3: Implementar funcionalidad JavaScript
- Links funcionales (tel:, wa.me, maps)
- Hover effects con transiciones

### Paso 4: Accesibilidad
- aria-label en links
- Atributos alt en iconos