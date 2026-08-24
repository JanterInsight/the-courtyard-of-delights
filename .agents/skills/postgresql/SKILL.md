---
name: postgresql
description: "Bases de datos PostgreSQL modernas. Use para disenar esquemas, escribir queries SQL avanzadas, optimizar consultas con EXPLAIN ANALYZE, implementar indices y constraints, usar JSONB, crear funciones y triggers y configurar seguridad de base de datos."
---

# PostgreSQL

## Proposito

Disena, implementa y optimiza bases de datos PostgreSQL modernas: SQL avanzado, indexing, performance y seguridad.

## Cuando usar

- Disenar esquemas de bases de datos PostgreSQL
- Escribir queries SQL avanzadas
- Optimizar rendimiento de consultas
- Implementar indices y constraints
- Usar JSONB para datos flexibles
- Crear funciones y triggers
- Configurar seguridad de base de datos (RLS, roles, permisos)

## Flujo de trabajo

1. Disenar el esquema (tablas, relaciones, constraints).
2. Leer `references/instructions.md` y aplicar sus reglas obligatorias (UUID como primary keys, TIMESTAMPTZ, indices en columnas de WHERE/JOIN).
3. Aplicar las tecnicas de `references/best-practices.md` (tipos apropiados, particionado, connection pooling).
4. Verificar que el SQL no incurre en los anti-patrones de `references/common-mistakes.md` (SELECT *, N+1 queries).
5. Optimizar queries con EXPLAIN ANALYZE.
6. Consultar `references/references.md` para fuentes oficiales cuando haya dudas.

## Validacion

El esquema debe usar UUID y TIMESTAMPTZ, tener indices para las queries principales, constraints de integridad, documentacion con COMMENT y queries verificadas con EXPLAIN ANALYZE.