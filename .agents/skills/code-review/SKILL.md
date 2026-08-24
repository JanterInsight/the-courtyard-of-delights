---
name: code-review
description: "Revisiones de codigo profesionales. Use para revisar codigo antes de merge, auditar codigo existente, evaluar calidad de implementaciones, identificar problemas de seguridad, rendimiento, deuda tecnica y verificar cumplimiento de estandares."
---

# Code Review

## Proposito

Realiza revisiones de codigo profesionales identificando problemas de calidad, seguridad, rendimiento y mantenibilidad antes de que lleguen a produccion.

## Cuando usar

- Revisar codigo antes de merge
- Auditar codigo existente
- Evaluar calidad de implementaciones
- Identificar deuda tecnica
- Verificar cumplimiento de estandares del proyecto

## Flujo de trabajo

1. Entender el contexto y proposito del codigo a revisar.
2. Leer `references/instructions.md` y seguir su workflow de revision (logica de negocio, seguridad, rendimiento, manejo de errores, tests, arquitectura).
3. Aplicar las reglas de `references/best-practices.md` (priorizar por severidad, dar ejemplos de correccion).
4. Verificar que no se pasan por alto los errores comunes de `references/common-mistakes.md`.
5. Consultar `references/references.md` para guias oficiales de revision.
6. Usar `examples/review-checklist.md` como checklist base de la revision.

## Validacion

La revision debe cubrir funcionalidad (no solo estilo), seguridad primero, rendimiento, manejo de errores, tests y mantenibilidad, y terminar con feedback constructivo priorizado por severidad.