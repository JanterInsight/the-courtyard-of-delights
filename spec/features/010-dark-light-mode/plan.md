# Plan de Implementación: Dark/Light Mode

## Enfoque

Implementar sistema de temas con toggle, persistencia en localStorage y variables CSS para ambos temas.

## Estructura de Componentes

### Componentes a Crear
1. **ThemeToggle** (`ThemeToggle.jsx`) - Botón toggle
2. **useTheme** (`useTheme.js`) - Hook de gestión de tema

## Pasos de Implementación

### Paso 1: Crear componentes y hooks
- Crear `ThemeToggle.jsx` con iconos sol/luna
- Crear hook `useTheme` con estado y localStorage

### Paso 2: Implementar estilos CSS
- Variables CSS para tema claro
- Variables CSS para tema oscuro
- Override con [data-theme="dark"]
- Transiciones suaves

### Paso 3: Implementar funcionalidad JavaScript
- Toggle de tema
- Persistencia en localStorage
- Lectura al cargar
- Aplicar tema al DOM

### Paso 4: Accesibilidad
- aria-label en toggle
- Respeto por prefers-color-scheme