# Funcionalidad: Botón Volver Arriba (Back to Top Button)

## Descripción

Implementar un botón animado que aparece al hacer desplazamiento (scroll) hacia abajo, permitiendo al usuario volver al inicio de la página de forma rápida.

## Requisitos Funcionales

### RF-001: Visibilidad
- Botón oculto inicialmente
- Aparece después de 300px de desplazamiento (scroll)
- Desaparece al llegar al inicio
- Posición fija en inferior-derecha (bottom-right)

### RF-002: Interacción
- Click para desplazamiento suave (smooth scroll) al inicio
- Animación de aparición/desaparición
- Efecto al pasar el cursor (hover effect)
- Icono de flecha hacia arriba

### RF-003: Diseño
- Botón circular
- Color de marca
- Sombra (shadow) para destacar
- Tamaño adecuado (50-60px)
- Índice de apilamiento (z-index) alto

## Requisitos No Funcionales

### RNF-001: Accesibilidad
- aria-label descriptivo
- aria-hidden cuando está oculto
- Navegación por teclado

### RNF-002: Rendimiento
- Escuchador de evento (event listener) de desplazamiento (scroll) con passive: true
- Limpieza (cleanup) en useEffect
- Sin dependencias externas

### RNF-003: Adaptable (Responsive)
- Diseño móvil primero (mobile-first design)
- Tamaño adaptativo
- Posición consistente

## Criterios de Aceptación

- [ ] Botón oculto en la parte superior (top) de la página
- [ ] Botón aparece después de 300px de desplazamiento (scroll)
- [ ] Botón desaparece al hacer desplazamiento (scroll) al inicio
- [ ] Click ejecuta desplazamiento suave (smooth scroll) al inicio (top)
- [ ] Animación de aparición/desaparición
- [ ] Efecto al pasar el cursor (hover effect) funcional
- [ ] Icono de flecha visible
- [ ] Posición inferior-derecha (bottom-right)
- [ ] Accesibilidad implementada
