# Funcionalidad: Sección Principal (Hero)

## Descripción

Implementar la sección principal del sitio (hero) con título animado, efecto de escritura progresiva (typewriter) en el subtítulo, descripción del negocio y botones de llamada a la acción.

## Requisitos Funcionales

### RF-001: Título
- Título principal "El Patio de las Delicias"
- ID único para accesibilidad (hero-title)
- Clase CSS para estilos de la sección principal (hero)

### RF-002: Subtítulo con Escritura Progresiva (Typewriter)
- Texto: "Helados Artesanales Hechos con Amor"
- Efecto de escritura progresiva (typewriter)
- Cursor parpadeante al final del texto
- Velocidad de escritura configurable (por defecto/default: 80ms)
- Activación al hacer desplazamiento (scroll) y entrar en ventana visible (viewport)
- aria-label con el texto completo

### RF-003: Descripción
- Párrafo descriptivo del negocio
- Texto: "Descubre nuestros deliciosos helados artesanales, confituras caseras y croquetas crujientes. El sabor tradicional que te transporta a los mejores momentos."

### RF-004: Botones de Llamada a la Acción (CTA)
- Botón secundario: "Ver Productos" (enlace a #productos)
- Botón primario: "Contactar" (enlace a #contacto)
- Estilos diferenciados para cada botón
- Efectos al pasar el cursor (hover effects)

### RF-005: Animaciones
- Animación de aparición gradual (fade-in) al cargar la sección
- Animaciones suaves y respetuosas con prefers-reduced-motion

## Requisitos No Funcionales

### RNF-001: Accesibilidad
- aria-labelledby apuntando al título
- aria-label en el efecto de escritura (typewriter) con texto completo
- Estructura semántica con section

### RNF-002: Rendimiento
- IntersectionObserver para activar efecto de escritura (typewriter) solo cuando visible
- Limpieza (cleanup) de observadores (observers) en useEffect
- Sin dependencias externas

### RNF-003: Adaptabilidad (Responsive)
- Diseño primero para móviles (mobile-first)
- Relleno (padding) adaptativo según punto de interrupción (breakpoint)
- Tipografía adaptable (responsive)

## Criterios de Aceptación

- [ ] Título "El Patio de las Delicias" visible
- [ ] Subtítulo con efecto de escritura progresiva (typewriter) funcional
- [ ] Cursor parpadeante visible durante escritura
- [ ] Efecto de escritura (typewriter) se activa al entrar en ventana visible (viewport)
- [ ] Descripción del negocio visible
- [ ] Botón "Ver Productos" funcional
- [ ] Botón "Contactar" funcional
- [ ] Animación de aparición gradual (fade-in) al cargar
- [ ] Respeto por prefers-reduced-motion
- [ ] Accesibilidad implementada (atributos ARIA)
