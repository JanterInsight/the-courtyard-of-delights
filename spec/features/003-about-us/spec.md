# Feature: About Us

## Descripción

Implementar la sección "Sobre Nosotros" con texto descriptivo del negocio, imagen del local y contadores animados que se activan al hacer scroll.

## Requisitos Funcionales

### RF-001: Contenido de Texto
- 3 párrafos descriptivos del negocio
- Mención a "El Patio de las Delicias"
- Descripción de productos (helados, confituras, croquetas)
- Mención a ingredientes frescos y recetas tradicionales
- Llamado a visitar el local

### RF-002: Imagen del Local
- Imagen del interior del local (local1.jpg)
- Efecto hover en la imagen
- Atributo alt descriptivo
- Lazy loading
- Dimensiones: 600x400px

### RF-003: Contadores Animados
- 3 contadores con valores:
  - 5+ años de experiencia
  - 10+ sabores de helado
  - 1000+ clientes felices
- Animación de incremento numérico
- Duración de animación: 2000ms
- Activación al entrar en viewport
- Labels descriptivos debajo de cada contador

### RF-004: Layout
- Diseño de dos columnas (texto + imagen) en desktop
- Stack vertical en móvil
- Contadores en grid de 3 columnas en desktop
- Contadores en columna en móvil

## Requisitos No Funcionales

### RNF-001: Accesibilidad
- Atributo alt descriptivo en imagen
- Estructura semántica con section
- aria-labelledby para título de sección

### RNF-002: Rendimiento
- IntersectionObserver para activar contadores solo cuando visibles
- Lazy loading de imagen
- requestAnimationFrame para animación suave

### RNF-003: Responsive
- Mobile-first design
- Breakpoint: 768px para cambio a layout vertical
- Grid adaptable para contadores

## Criterios de Aceptación

- [ ] 3 párrafos de texto visibles
- [ ] Imagen del local cargada con lazy loading
- [ ] Efecto hover en imagen
- [ ] 3 contadores animados funcionales
- [ ] Contadores se activan al hacer scroll
- [ ] Animación de incremento de 0 a valor final
- [ ] Layout de dos columnas en desktop
- [ ] Layout vertical en móvil
- [ ] Grid de 3 columnas para contadores en desktop
- [ ] Accesibilidad implementada