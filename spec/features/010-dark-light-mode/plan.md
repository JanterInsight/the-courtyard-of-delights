# Plan de Implementación: Modo Oscuro/Claro (Dark/Light Mode)

## Enfoque

Implementar sistema de temas con conmutador (toggle), persistencia en almacenamiento local (localStorage) y variables CSS para ambos temas.

## Estructura de Componentes

### Componentes a Crear
1. **ThemeToggle** (`ThemeToggle.jsx`) - Botón conmutador (toggle)
2. **useTheme** (`useTheme.js`) - Hook de gestión de tema

## Pasos de Implementación

### Paso 1: Crear componentes y hooks
- Crear `ThemeToggle.jsx` con iconos sol/luna
- Crear hook `useTheme` con estado y almacenamiento local (localStorage)

### Paso 2: Implementar estilos CSS
- Variables CSS para tema claro
- Variables CSS para tema oscuro
- Sobrescritura (override) con [data-theme="dark"]
- Transiciones suaves

### Paso 3: Implementar funcionalidad JavaScript
- Conmutador (toggle) de tema
- Persistencia en almacenamiento local (localStorage)
- Lectura al cargar
- Aplicar tema al DOM

### Paso 4: Accesibilidad
- Etiqueta aria (aria-label) en conmutador (toggle)
- Respeto por preferencia de esquema de color (prefers-color-scheme)
