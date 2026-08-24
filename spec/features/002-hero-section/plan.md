# Plan de Implementación: Hero Section

## Enfoque

Implementar la sección principal del sitio con título, subtítulo con efecto typewriter, descripción y botones CTA, con animaciones de entrada.

## Estructura de Componentes

### Componentes a Crear
1. **Hero** (`Hero.jsx`) - Sección principal con contenido
2. **Typewriter** (`Typewriter.jsx`) - Componente de efecto typewriter

### Hooks a Utilizar
- `useTypewriter` - Lógica del efecto de escritura
- `useIntersectionObserver` - Activar typewriter al entrar en viewport

## Pasos de Implementación

### Paso 1: Crear componentes base
- Crear `Hero.jsx` con estructura semántica
- Crear `Typewriter.jsx` con efecto de escritura
- Crear hook `useTypewriter` con lógica de typing

### Paso 2: Implementar estilos CSS
- Estilos del hero (min-height, gradiente, centrado)
- Tipografía del título y subtítulo
- Estilos de botones CTA (primario y secundario)
- Animaciones fade-in

### Paso 3: Implementar funcionalidad JavaScript
- Hook useTypewriter con velocidad configurable
- Efecto de escritura progresiva
- Cursor parpadeante
- IntersectionObserver para activar al hacer scroll
- Respeto por prefers-reduced-motion

### Paso 4: Accesibilidad y responsive
- aria-labelledby en section
- aria-label en typewriter con texto completo
- Mobile-first responsive
- Test de animaciones

## Consideraciones Técnicas

- Typewriter se activa solo cuando visible (performance)
- Cursor con CSS animation (blink)
- Cleanup de intervalos y observers
- Velocidad de typing: 80ms por carácter