# Feature: Hero Section

## Descripción

Implementar la sección principal del sitio (hero) con título animado, efecto typewriter en el subtítulo, descripción del negocio y botones de llamada a la acción.

## Requisitos Funcionales

### RF-001: Título
- Título principal "El Patio de las Delicias"
- ID único para accesibilidad (hero-title)
- Clase CSS para estilos del hero

### RF-002: Subtítulo con Typewriter
- Texto: "Helados Artesanales Hechos con Amor"
- Efecto de escritura progresiva (typewriter)
- Cursor parpadeante al final del texto
- Velocidad de escritura configurable (default: 80ms)
- Activación al hacer scroll y entrar en viewport
- aria-label con el texto completo

### RF-003: Descripción
- Párrafo descriptivo del negocio
- Texto: "Descubre nuestros deliciosos helados artesanales, confituras caseras y croquetas crujientes. El sabor tradicional que te transporta a los mejores momentos."

### RF-004: Botones CTA
- Botón secundario: "Ver Productos" (link a #productos)
- Botón primario: "Contactar" (link a #contacto)
- Estilos diferenciados para cada botón
- Hover effects

### RF-005: Animaciones
- Fade-in animation al cargar la sección
- Animaciones suaves y respetuosas con prefers-reduced-motion

## Requisitos No Funcionales

### RNF-001: Accesibilidad
- aria-labelledby apuntando al título
- aria-label en el typewriter con texto completo
- Estructura semántica con section

### RNF-002: Rendimiento
- IntersectionObserver para activar typewriter solo cuando visible
- Cleanup de observers en useEffect
- Sin dependencias externas

### RNF-003: Responsive
- Mobile-first design
- Padding adaptativo según breakpoint
- Tipografía responsive

## Criterios de Aceptación

- [ ] Título "El Patio de las Delicias" visible
- [ ] Subtítulo con efecto typewriter funcional
- [ ] Cursor parpadeante visible durante escritura
- [ ] Typewriter se activa al entrar en viewport
- [ ] Descripción del negocio visible
- [ ] Botón "Ver Productos" funcional
- [ ] Botón "Contactar" funcional
- [ ] Animación fade-in al cargar
- [ ] Respeto por prefers-reduced-motion
- [ ] Accesibilidad implementada (ARIA attributes)