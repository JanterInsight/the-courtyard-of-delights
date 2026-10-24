# Funcionalidad: Sobre Nosotros

## Descripción

Implementar la sección "Sobre Nosotros" con texto descriptivo del negocio, imagen del local y contadores animados que se activan al hacer desplazamiento (scroll).

## Requisitos Funcionales

### RF-001: Contenido de Texto
- 3 párrafos descriptivos del negocio
- Mención a "El Patio de las Delicias"
- Descripción de productos (helados, confituras, croquetas)
- Mención a ingredientes frescos y recetas tradicionales
- Llamado a visitar el local

### RF-002: Imagen del Local
- Imagen del interior del local (local1.jpg)
- Efecto al pasar el cursor (hover) en la imagen
- Atributo alt descriptivo
- Carga diferida (lazy loading)
- Dimensiones: 600x400px

### RF-003: Contadores Animados
- 3 contadores con valores:
  - 5+ años de experiencia
  - 10+ sabores de helado
  - 1000+ clientes felices
- Animación de incremento numérico
- Duración de animación: 2000ms
- Activación al entrar en ventana visible (viewport)
- Etiquetas (labels) descriptivas debajo de cada contador

### RF-004: Disposición (Layout)
- Diseño de dos columnas (texto + imagen) en escritorio (desktop)
- Apilado vertical en móvil
- Contadores en cuadrícula (grid) de 3 columnas en escritorio (desktop)
- Contadores en columna en móvil

## Requisitos No Funcionales

### RNF-001: Accesibilidad
- Atributo alt descriptivo en imagen
- Estructura semántica con section
- aria-labelledby para título de sección

### RNF-002: Rendimiento
- IntersectionObserver para activar contadores solo cuando visibles
- Carga diferida (lazy loading) de imagen
- requestAnimationFrame para animación suave

### RNF-003: Adaptabilidad (Responsive)
- Diseño primero para móviles (mobile-first)
- Punto de interrupción (breakpoint): 768px para cambio a disposición (layout) vertical
- Cuadrícula (grid) adaptable para contadores

## Criterios de Aceptación

- [ ] 3 párrafos de texto visibles
- [ ] Imagen del local cargada con carga diferida (lazy loading)
- [ ] Efecto al pasar el cursor (hover) en imagen
- [ ] 3 contadores animados funcionales
- [ ] Contadores se activan al hacer desplazamiento (scroll)
- [ ] Animación de incremento de 0 a valor final
- [ ] Disposición (layout) de dos columnas en escritorio (desktop)
- [ ] Disposición (layout) vertical en móvil
- [ ] Cuadrícula (grid) de 3 columnas para contadores en escritorio (desktop)
- [ ] Accesibilidad implementada
