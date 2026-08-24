# Feature: Header & Navigation

## Descripción

Implementar el header fijo con navegación principal del sitio, incluyendo logo, menú de enlaces, botón hamburguesa para móvil y toggle de tema oscuro/claro.

## Requisitos Funcionales

### RF-001: Header Fijo
- El header debe estar fijo en la parte superior de la página
- Debe tener un efecto de sombra dinámico al hacer scroll
- Altura fija de 80px
- Z-index alto para superponerse al contenido

### RF-002: Logo
- Logo con emoji de helado (🍦)
- Texto "El Patio de las Delicias"
- Link al inicio de la página (#inicio)
- aria-label para accesibilidad

### RF-003: Navegación Desktop
- Menú horizontal con 5 enlaces: Inicio, Nosotros, Productos, Galería, Contacto
- Efecto hover con cambio de color y fondo
- Estado activo para la sección visible
- Gap de 2rem entre enlaces

### RF-004: Menú Hamburguesa (Móvil)
- Botón hamburguesa visible solo en móvil (≤768px)
- Icono animado (3 líneas que se transforman en X)
- Apertura/cierre del menú con animación
- Cierre con tecla Escape
- Cierre al hacer click fuera del menú
- Bloqueo del scroll del body cuando está abierto

### RF-005: Toggle de Tema
- Botón de toggle para cambiar entre modo claro y oscuro
- Icono de sol/luna
- Persistencia del tema en localStorage
- Aplicación inmediata del tema al cambiar

## Requisitos No Funcionales

### RNF-001: Accesibilidad
- Navegación por teclado (Tab, Enter, Escape)
- ARIA attributes: role="navigation", aria-label, aria-expanded
- Focus visible states
- Skip to content link

### RNF-002: Responsive
- Mobile-first design
- Breakpoint: 768px para cambio a menú hamburguesa
- Menú full-width en móvil

### RNF-003: Rendimiento
- Sin dependencias externas
- Event listeners con passive: true para scroll
- Cleanup de event listeners en useEffect

## Criterios de Aceptación

- [ ] Header fijo con sombra dinámica al scroll
- [ ] Logo funcional con link a #inicio
- [ ] Navegación horizontal en desktop con 5 enlaces
- [ ] Menú hamburguesa funcional en móvil (≤768px)
- [ ] Animación del icono hamburguesa a X
- [ ] Cierre del menú con Escape y click fuera
- [ ] Bloqueo de scroll del body cuando menú abierto
- [ ] Toggle de tema funcional con persistencia en localStorage
- [ ] Navegación por teclado funcional
- [ ] ARIA attributes implementados
- [ ] Responsive en móvil, tablet y desktop