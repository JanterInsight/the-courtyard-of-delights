# Funcionalidad: Encabezado y Navegación

## Descripción

Implementar el encabezado fijo (header) con navegación principal del sitio, incluyendo logo, menú de enlaces, botón hamburguesa para móvil y conmutador de tema oscuro/claro (theme toggle).

## Requisitos Funcionales

### RF-001: Encabezado Fijo (Header)
- El encabezado (header) debe estar fijo en la parte superior de la página
- Debe tener un efecto de sombra dinámico al hacer desplazamiento (scroll)
- Altura fija de 80px
- Índice z (z-index) alto para superponerse al contenido

### RF-002: Logo
- Logo con emoji de helado (🍦)
- Texto "El Patio de las Delicias"
- Enlace al inicio de la página (#inicio)
- aria-label para accesibilidad

### RF-003: Navegación en Escritorio (Desktop)
- Menú horizontal con 5 enlaces: Inicio, Nosotros, Productos, Galería, Contacto
- Efecto al pasar el cursor (hover) con cambio de color y fondo
- Estado activo para la sección visible
- Espacio (gap) de 2rem entre enlaces

### RF-004: Menú Hamburguesa (Móvil)
- Botón hamburguesa visible solo en móvil (≤768px)
- Icono animado (3 líneas que se transforman en X)
- Apertura/cierre del menú con animación
- Cierre con tecla Escape
- Cierre al hacer clic fuera del menú
- Bloqueo del desplazamiento (scroll) del body cuando está abierto

### RF-005: Conmutador de Tema (Theme Toggle)
- Botón conmutador (toggle) para cambiar entre modo claro y oscuro
- Icono de sol/luna
- Persistencia del tema en localStorage
- Aplicación inmediata del tema al cambiar

## Requisitos No Funcionales

### RNF-001: Accesibilidad
- Navegación por teclado (Tab, Enter, Escape)
- Atributos ARIA (ARIA attributes): role="navigation", aria-label, aria-expanded
- Estados de foco visible (focus visible)
- Enlace de salto al contenido (skip to content)

### RNF-002: Adaptabilidad (Responsive)
- Diseño primero para móviles (mobile-first)
- Punto de interrupción (breakpoint): 768px para cambio a menú hamburguesa
- Menú de ancho completo (full-width) en móvil

### RNF-003: Rendimiento
- Sin dependencias externas
- Oyentes de eventos (event listeners) con passive: true para desplazamiento (scroll)
- Limpieza (cleanup) de oyentes de eventos (event listeners) en useEffect

## Criterios de Aceptación

- [ ] Encabezado fijo (header) con sombra dinámica al hacer desplazamiento (scroll)
- [ ] Logo funcional con enlace a #inicio
- [ ] Navegación horizontal en escritorio (desktop) con 5 enlaces
- [ ] Menú hamburguesa funcional en móvil (≤768px)
- [ ] Animación del icono hamburguesa a X
- [ ] Cierre del menú con Escape y clic fuera
- [ ] Bloqueo de desplazamiento (scroll) del body cuando menú abierto
- [ ] Conmutador de tema (theme toggle) funcional con persistencia en localStorage
- [ ] Navegación por teclado funcional
- [ ] Atributos ARIA (ARIA attributes) implementados
- [ ] Adaptable (responsive) en móvil, tableta y escritorio
