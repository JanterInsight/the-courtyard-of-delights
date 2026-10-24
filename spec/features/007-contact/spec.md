# Funcionalidad: Contacto (Contact)

## Descripción

Implementar la sección de contacto con 3 tarjetas que muestran información de contacto: teléfono, WhatsApp y dirección con mapa de Google.

## Requisitos Funcionales

### RF-001: Tarjeta de Teléfono
- Icono de teléfono (📞)
- Número: +53 58993196
- Enlace (link) a llamada directa (tel:+5358993196)
- Efecto al pasar el cursor (hover effect)

### RF-002: Tarjeta de WhatsApp
- Icono de WhatsApp (💬)
- Número: +53 58993196
- Enlace (link) a WhatsApp con mensaje predefinido
- URL: https://wa.me/5358993196?text=Hola%20me%20gustaría%20obtener%20más%20información
- Efecto al pasar el cursor (hover effect)

### RF-003: Tarjeta de Dirección
- Icono de ubicación (📍)
- Dirección: Calle 4ta, La Güira
- Enlace (link) a Google Maps
- URL: https://maps.google.com/?q=Calle+4ta,+La+Güira
- Efecto al pasar el cursor (hover effect)

### RF-004: Maquetado (Layout)
- 3 tarjetas en cuadrícula (grid) horizontal en escritorio (desktop)
- Apilamiento vertical (vertical stack) en móvil
- Espacio (gap) entre tarjetas
- Diseño centrado
- Iconos grandes y visibles

### RF-005: Interacciones
- Efecto al pasar el cursor (hover effect) en tarjetas (escalado / scale, sombra / shadow)
- Transiciones suaves
- Enlaces (links) funcionales
- Cursor en forma de mano (cursor pointer)

## Requisitos No Funcionales

### RNF-001: Accesibilidad
- Atributos alt en iconos
- aria-label en enlaces (links)
- Estructura semántica con section
- aria-labelledby para título

### RNF-002: Rendimiento
- Sin dependencias externas
- Transiciones CSS (CSS transitions) para animaciones
- Enlaces (links) directos (sin redirecciones innecesarias / redirects)

### RNF-003: Adaptable (Responsive)
- Diseño móvil primero (mobile-first design)
- Punto de ruptura (breakpoint): 768px para cambio a maquetado (layout) vertical
- Cuadrícula (grid) adaptable

## Criterios de Aceptación

- [ ] 3 tarjetas de contacto visibles
- [ ] Tarjeta de teléfono con número y enlace (link) funcional
- [ ] Tarjeta de WhatsApp con enlace (link) y mensaje predefinido
- [ ] Tarjeta de dirección con enlace (link) a Google Maps
- [ ] Iconos visibles en cada tarjeta
- [ ] Efecto al pasar el cursor (hover effect) funcional en tarjetas
- [ ] Cuadrícula (grid) de 3 columnas en escritorio (desktop)
- [ ] Apilamiento vertical (vertical stack) en móvil
- [ ] Enlaces (links) funcionales (tel:, wa.me, maps)
- [ ] Accesibilidad implementada
