# Plan de Implementación: Encabezado y Navegación

## Enfoque

Implementar el encabezado fijo (header) con navegación principal, logo, menú hamburguesa adaptable (responsive) y conmutador de tema (theme toggle), siguiendo un enfoque primero para móviles (mobile-first).

## Estructura de Componentes

### Componentes a Crear
1. **Header** (`Header.jsx`) - Componente contenedor del encabezado (header)
2. **Navbar** (`Navbar.jsx`) - Navegación principal con enlaces y menú hamburguesa
3. **ThemeToggle** (`ThemeToggle.jsx`) - Botón conmutador (toggle) para cambiar tema

### Hooks a Utilizar
- `useTheme` - Gestión del tema oscuro/claro con localStorage
- `useScrollPosition` - Detectar desplazamiento (scroll) para efecto de sombra

## Pasos de Implementación

### Paso 1: Crear componentes base
- Crear `Header.jsx` con estructura semántica
- Crear `Navbar.jsx` con navegación en escritorio (desktop) y móvil
- Crear `ThemeToggle.jsx` con iconos de sol/luna

### Paso 2: Implementar estilos CSS
- Estilos base del encabezado (header) (fijo, sombra, z-index)
- Navegación horizontal en escritorio (desktop)
- Menú hamburguesa móvil con animación
- Estilos del logo
- Estilos del conmutador de tema (theme toggle)

### Paso 3: Implementar funcionalidad JavaScript
- Oyente de eventos (event listener) de desplazamiento (scroll) para sombra dinámica
- Conmutador (toggle) del menú hamburguesa
- Cierre con Escape y clic fuera
- Bloqueo de desplazamiento (scroll) del body cuando menú abierto
- Conmutador (toggle) de tema con localStorage

### Paso 4: Adaptabilidad y accesibilidad (Responsive y Accesibilidad)
- Punto de interrupción (breakpoint) 768px para cambio a menú hamburguesa
- Atributos ARIA (ARIA attributes) (aria-label, aria-expanded, role)
- Navegación por teclado
- Estados de foco visible (focus visible)

## Consideraciones Técnicas

- Primero para móviles (mobile-first): Estilos base para móvil, consultas de medios (media queries) para escritorio (desktop)
- Rendimiento (performance): Oyentes de eventos (event listeners) con passive: true
- Limpieza (cleanup): Remover oyentes de eventos (event listeners) en useEffect
- Accesibilidad: Enlace de salto al contenido (skip to content), atributos ARIA (ARIA attributes)

## Orden de Trabajo

1. Crear estructura de componentes
2. Implementar estilos CSS
3. Agregar funcionalidad JavaScript
4. Probar adaptabilidad (responsive) y accesibilidad
5. Integrar en App.jsx
