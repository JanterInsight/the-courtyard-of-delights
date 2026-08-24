---
name: software-design
description: "Diseno de arquitecturas de software escalables y mantenibles. Use para disenar la arquitectura de nuevas aplicaciones, refactorizar codigo existente, implementar patrones de diseno, aplicar principios SOLID, inyeccion de dependencias y Clean Architecture."
---

# Software Design

## Proposito

Disena arquitecturas de software escalables y mantenibles aplicando principios SOLID, patrones de diseno y buenas practicas de ingenieria.

## Cuando usar

- Disenar la arquitectura de nuevas aplicaciones
- Refactorizar codigo existente
- Implementar patrones de diseno
- Separar responsabilidades
- Mejorar mantenibilidad y extensibilidad

## Flujo de trabajo

1. Identificar requisitos y entidades del sistema.
2. Leer `references/instructions.md` y seguir su workflow de diseno (limites, capas, patrones, abstracciones).
3. Aplicar las reglas de `references/best-practices.md` (Clean Architecture, Repository, Dependency Injection).
4. Verificar que no se incurre en los anti-patrones de `references/common-mistakes.md` (god classes, acoplamiento excesivo).
5. Consultar `references/references.md` para fuentes oficiales.
6. Usar `examples/clean-architecture-example.js` como referencia practica.
7. Verificar cumplimiento de SOLID en el diseno resultante.

## Validacion

El diseno debe mostrar bajo acoplamiento y alta cohesion, composicion sobre herencia, programacion contra interfaces y responsabilidad unica por modulo.