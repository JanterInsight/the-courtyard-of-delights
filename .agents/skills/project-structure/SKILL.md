---
name: project-structure
description: "Organizacion de proyectos web profesionales y escalables. Use para crear nuevos proyectos, refactorizar estructura existente, organizar codigo por features o dominios, separar responsabilidades, configurar aliases de imports y establecer convenciones de carpetas."
---

# Project Structure

## Proposito

Organiza proyectos web con estructura escalable, separacion de responsabilidades y mantenibilidad, priorizando organizacion feature-based.

## Cuando usar

- Crear nuevos proyectos
- Refactorizar la estructura existente
- Organizar codigo por dominios o features
- Configurar aliases de imports
- Establecer convenciones de carpetas y nombres

## Flujo de trabajo

1. Identificar los dominios o features de la aplicacion.
2. Leer `references/instructions.md` y seguir su workflow de organizacion.
3. Aplicar las reglas de `references/best-practices.md` (feature-based structure, barrel files, path aliases).
4. Verificar que no se incurre en los anti-patrones de `references/common-mistakes.md` (estructura solo por tipos, dependencias circulares).
5. Consultar `references/references.md` para referencias de estructuras probadas.
6. Usar `examples/folder-structure.md` como referencia practica.
7. Documentar la estructura resultante.

## Validacion

La estructura debe evitar dependencias circulares, separar logica de negocio de presentacion, mantener imports ordenados y estar documentada.