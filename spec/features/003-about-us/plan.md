# Plan de Implementación: Sobre Nosotros

## Enfoque

Implementar la sección "Sobre Nosotros" con texto descriptivo, imagen del local y contadores animados que se activan al hacer desplazamiento (scroll).

## Estructura de Componentes

### Componentes a Crear
1. **About** (`About.jsx`) - Sección completa con texto, imagen y contadores
2. **AnimatedCounter** (`AnimatedCounter.jsx`) - Componente de contador animado

### Hooks a Utilizar
- `useIntersectionObserver` - Activar contadores al entrar en ventana visible (viewport)

## Pasos de Implementación

### Paso 1: Crear componentes base
- Crear `About.jsx` con disposición (layout) de dos columnas
- Crear `AnimatedCounter.jsx` con animación numérica
- Definir datos de estadísticas (stats) (5+, 10+, 1000+)

### Paso 2: Implementar estilos CSS
- Disposición (layout) en cuadrícula (grid) (texto + imagen)
- Estilos de tarjetas de estadísticas
- Efecto al pasar el cursor (hover) en imagen
- Adaptable (responsive): apilado vertical en móvil

### Paso 3: Implementar funcionalidad JavaScript
- Animación de contador con requestAnimationFrame
- IntersectionObserver para activar al hacer desplazamiento (scroll)
- Duración de animación: 2000ms
- Bandera (flag) para evitar re-animación

### Paso 4: Accesibilidad y adaptabilidad (Responsive)
- Atributo alt descriptivo en imagen
- aria-labelledby en sección
- Cuadrícula (grid) adaptable (responsive) de contadores
