# Plan de Implementación: Header & Navigation

## Enfoque

Implementar el header fijo con navegación principal, logo, menú hamburguesa responsive y toggle de tema, siguiendo un enfoque mobile-first.

## Estructura de Componentes

### Componentes a Crear
1. **Header** (`Header.jsx`) - Componente contenedor del header
2. **Navbar** (`Navbar.jsx`) - Navegación principal con links y menú hamburguesa
3. **ThemeToggle** (`ThemeToggle.jsx`) - Botón toggle para cambiar tema

### Hooks a Utilizar
- `useTheme` - Gestión del tema oscuro/claro con localStorage
- `useScrollPosition` - Detectar scroll para efecto de sombra

## Pasos de Implementación

### Paso 1: Crear componentes base
- Crear `Header.jsx` con estructura semántica
- Crear `Navbar.jsx` con navegación desktop y móvil
- Crear `ThemeToggle.jsx` con iconos de sol/luna

### Paso 2: Implementar estilos CSS
- Estilos base del header (fijo, sombra, z-index)
- Navegación horizontal desktop
- Menú hamburguesa móvil con animación
- Estilos del logo
- Estilos del theme toggle

### Paso 3: Implementar funcionalidad JavaScript
- Event listener de scroll para sombra dinámica
- Toggle del menú hamburguesa
- Cierre con Escape y click fuera
- Bloqueo de scroll del body cuando menú abierto
- Toggle de tema con localStorage

### Paso 4: Responsive y accesibilidad
- Breakpoint 768px para cambio a menú hamburguesa
- ARIA attributes (aria-label, aria-expanded, role)
- Navegación por teclado
- Focus visible states

## Consideraciones Técnicas

- Mobile-first: Estilos base para móvil, media queries para desktop
- Performance: Event listeners con passive: true
- Cleanup: Remover event listeners en useEffect
- Accesibilidad: Skip to content link, ARIA attributes

## Orden de Trabajo

1. Crear estructura de componentes
2. Implementar estilos CSS
3. Agregar funcionalidad JavaScript
4. Probar responsive y accesibilidad
5. Integrar en App.jsx