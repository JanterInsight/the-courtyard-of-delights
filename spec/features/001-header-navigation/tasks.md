# Tareas: Encabezado y Navegación

## Tarea 1: Crear componentes base
- [ ] Crear `Header.jsx` con estructura semántica `<header>`
- [ ] Crear `Navbar.jsx` con navegación y menú hamburguesa
- [ ] Crear `ThemeToggle.jsx` con iconos sol/luna
- [ ] Exportar componentes desde `Header/index.js` (si aplica)

## Tarea 2: Implementar estilos CSS
- [ ] Estilos base del encabezado (header) (position: fixed, z-index, sombra)
- [ ] Estilos del logo (emoji + texto, tipografía)
- [ ] Navegación horizontal en escritorio (desktop) (flexbox, espacio/gap)
- [ ] Estilos de enlaces de navegación (al pasar el cursor/hover, activo/active)
- [ ] Botón hamburguesa (3 líneas, animación a X)
- [ ] Menú móvil (position: fixed, transición, sombra)
- [ ] Estilos del ThemeToggle (al pasar el cursor/hover, transiciones)

## Tarea 3: Implementar funcionalidad JavaScript
- [ ] Hook useScrollPosition para detectar desplazamiento (scroll)
- [ ] Oyente de eventos (event listener) de desplazamiento (scroll) con passive: true
- [ ] Estado isScrolled para sombra dinámica
- [ ] Estado isMenuOpen para menú hamburguesa
- [ ] Función toggleMenu() para abrir/cerrar menú
- [ ] Función closeMenu() para cerrar menú
- [ ] Bloqueo de desplazamiento (scroll) del body (overflow: hidden)
- [ ] Oyente de eventos (event listener) Escape para cerrar menú
- [ ] Clic fuera del menú para cerrar
- [ ] Hook useTheme para gestión de tema
- [ ] Conmutador (toggle) de tema con localStorage
- [ ] Lectura de tema guardado al cargar

## Tarea 4: Adaptabilidad y accesibilidad (Responsive y Accesibilidad)
- [ ] Punto de interrupción (breakpoint) 768px para menú hamburguesa
- [ ] ARIA: role="navigation", aria-label
- [ ] ARIA: aria-expanded en botón hamburguesa
- [ ] ARIA: aria-label en ThemeToggle
- [ ] Enlace de salto al contenido (skip to content)
- [ ] Navegación por teclado (Tab, Enter)
- [ ] Estados de foco visible (focus visible)
- [ ] Prueba en móvil, tableta, escritorio (desktop)

## Tarea 5: Integración
- [ ] Integrar Header en App.jsx
- [ ] Verificar que todas las secciones funcionan
- [ ] Probar navegación con desplazamiento suave (smooth scroll)
- [ ] Probar tema oscuro/claro
- [ ] Verificar accesibilidad con lector de pantalla (screen reader)
