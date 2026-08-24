# Plan de Implementación: About Us

## Enfoque

Implementar la sección "Sobre Nosotros" con texto descriptivo, imagen del local y contadores animados que se activan al hacer scroll.

## Estructura de Componentes

### Componentes a Crear
1. **About** (`About.jsx`) - Sección completa con texto, imagen y contadores
2. **AnimatedCounter** (`AnimatedCounter.jsx`) - Componente de contador animado

### Hooks a Utilizar
- `useIntersectionObserver` - Activar contadores al entrar en viewport

## Pasos de Implementación

### Paso 1: Crear componentes base
- Crear `About.jsx` con layout de dos columnas
- Crear `AnimatedCounter.jsx` con animación numérica
- Definir datos de stats (5+, 10+, 1000+)

### Paso 2: Implementar estilos CSS
- Layout grid (texto + imagen)
- Estilos de tarjetas de estadísticas
- Efecto hover en imagen
- Responsive: stack vertical en móvil

### Paso 3: Implementar funcionalidad JavaScript
- Animación de contador con requestAnimationFrame
- IntersectionObserver para activar al hacer scroll
- Duración de animación: 2000ms
- Flag para evitar re-animación

### Paso 4: Accesibilidad y responsive
- Atributo alt descriptivo en imagen
- aria-labelledby en sección
- Grid responsive de contadores