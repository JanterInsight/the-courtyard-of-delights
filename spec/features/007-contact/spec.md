# Feature: Contact

## Descripción

Implementar la sección de contacto con 3 tarjetas que muestran información de contacto: teléfono, WhatsApp y dirección con mapa de Google.

## Requisitos Funcionales

### RF-001: Tarjeta de Teléfono
- Icono de teléfono (📞)
- Número: +53 58993196
- Link a llamada directa (tel:+5358993196)
- Hover effect

### RF-002: Tarjeta de WhatsApp
- Icono de WhatsApp (💬)
- Número: +53 58993196
- Link a WhatsApp con mensaje predefinido
- URL: https://wa.me/5358993196?text=Hola%20me%20gustaría%20obtener%20más%20información
- Hover effect

### RF-003: Tarjeta de Dirección
- Icono de ubicación (📍)
- Dirección: Calle 4ta, La Güira
- Link a Google Maps
- URL: https://maps.google.com/?q=Calle+4ta,+La+Güira
- Hover effect

### RF-004: Layout
- 3 tarjetas en grid horizontal en desktop
- Stack vertical en móvil
- Gap entre tarjetas
- Diseño centrado
- Iconos grandes y visibles

### RF-005: Interacciones
- Hover effect en tarjetas (scale, shadow)
- Transiciones suaves
- Links funcionales
- Cursor pointer

## Requisitos No Funcionales

### RNF-001: Accesibilidad
- Atributos alt en iconos
- aria-label en links
- Estructura semántica con section
- aria-labelledby para título

### RNF-002: Rendimiento
- Sin dependencias externas
- CSS transitions para animaciones
- Links directos (sin redirects innecesarios)

### RNF-003: Responsive
- Mobile-first design
- Breakpoint: 768px para cambio a layout vertical
- Grid adaptable

## Criterios de Aceptación

- [ ] 3 tarjetas de contacto visibles
- [ ] Tarjeta de teléfono con número y link funcional
- [ ] Tarjeta de WhatsApp con link y mensaje predefinido
- [ ] Tarjeta de dirección con link a Google Maps
- [ ] Iconos visibles en cada tarjeta
- [ ] Hover effect funcional en tarjetas
- [ ] Grid de 3 columnas en desktop
- [ ] Stack vertical en móvil
- [ ] Links funcionales (tel:, wa.me, maps)
- [ ] Accesibilidad implementada