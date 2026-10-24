# Plan de Implementación: Sección Principal (Hero)

## Enfoque

Implementar la sección principal del sitio (hero) con título, subtítulo con efecto de escritura progresiva (typewriter), descripción y botones de llamada a la acción (CTA), con animaciones de entrada.

## Estructura de Componentes

### Componentes a Crear
1. **Hero** (`Hero.jsx`) - Sección principal con contenido
2. **Typewriter** (`Typewriter.jsx`) - Componente de efecto de escritura (typewriter)

### Hooks a Utilizar
- `useTypewriter` - Lógica del efecto de escritura
- `useIntersectionObserver` - Activar efecto de escritura (typewriter) al entrar en ventana visible (viewport)

## Pasos de Implementación

### Paso 1: Crear componentes base
- Crear `Hero.jsx` con estructura semántica
- Crear `Typewriter.jsx` con efecto de escritura (typewriter)
- Crear hook `useTypewriter` con lógica de escritura (typing)

### Paso 2: Implementar estilos CSS
- Estilos de la sección principal (hero) (min-height, degradado, centrado)
- Tipografía del título y subtítulo
- Estilos de botones de llamada a la acción (CTA) (primario y secundario)
- Animaciones de aparición gradual (fade-in)

### Paso 3: Implementar funcionalidad JavaScript
- Hook useTypewriter con velocidad configurable
- Efecto de escritura progresiva
- Cursor parpadeante
- IntersectionObserver para activar al hacer desplazamiento (scroll)
- Respeto por prefers-reduced-motion

### Paso 4: Accesibilidad y adaptabilidad (Responsive)
- aria-labelledby en section
- aria-label en efecto de escritura (typewriter) con texto completo
- Adaptable (responsive) primero para móviles (mobile-first)
- Prueba de animaciones

## Consideraciones Técnicas

- Efecto de escritura (typewriter) se activa solo cuando visible (rendimiento/performance)
- Cursor con animación CSS (blink)
- Limpieza (cleanup) de intervalos y observadores (observers)
- Velocidad de escritura (typing): 80ms por carácter
