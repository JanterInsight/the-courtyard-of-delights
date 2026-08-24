# Tasks: Header & Navigation

## Task 1: Crear componentes base
- [ ] Crear `Header.jsx` con estructura semántica `<header>`
- [ ] Crear `Navbar.jsx` con navegación y menú hamburguesa
- [ ] Crear `ThemeToggle.jsx` con iconos sol/luna
- [ ] Exportar componentes desde `Header/index.js` (si aplica)

## Task 2: Implementar estilos CSS
- [ ] Estilos base del header (position: fixed, z-index, sombra)
- [ ] Estilos del logo (emoji + texto, tipografía)
- [ ] Navegación horizontal desktop (flexbox, gap)
- [ ] Estilos de links de navegación (hover, active)
- [ ] Botón hamburguesa (3 líneas, animación a X)
- [ ] Menú móvil (position: fixed, transición, sombra)
- [ ] Estilos del ThemeToggle (hover, transiciones)

## Task 3: Implementar funcionalidad JavaScript
- [ ] Hook useScrollPosition para detectar scroll
- [ ] Event listener scroll con passive: true
- [ ] Estado isScrolled para sombra dinámica
- [ ] Estado isMenuOpen para menú hamburguesa
- [ ] Función toggleMenu() para abrir/cerrar menú
- [ ] Función closeMenu() para cerrar menú
- [ ] Bloqueo de scroll del body (overflow: hidden)
- [ ] Event listener Escape para cerrar menú
- [ ] Click fuera del menú para cerrar
- [ ] Hook useTheme para gestión de tema
- [ ] Toggle de tema con localStorage
- [ ] Lectura de tema guardado al cargar

## Task 4: Responsive y accesibilidad
- [ ] Breakpoint 768px para menú hamburguesa
- [ ] ARIA: role="navigation", aria-label
- [ ] ARIA: aria-expanded en botón hamburguesa
- [ ] ARIA: aria-label en ThemeToggle
- [ ] Skip to content link
- [ ] Navegación por teclado (Tab, Enter)
- [ ] Focus visible states
- [ ] Test en móvil, tablet, desktop

## Task 5: Integración
- [ ] Integrar Header en App.jsx
- [ ] Verificar que todas las secciones funcionan
- [ ] Probar navegación smooth scroll
- [ ] Probar tema oscuro/claro
- [ ] Verificar accesibilidad con screen reader