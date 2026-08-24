---
name: database-design
description: "Diseno de bases de datos relacionales y NoSQL. Use para disenar bases de datos, crear esquemas de tablas, normalizar datos, definir relaciones y constraints, implementar indices, optimizar queries y planificar migraciones y backups."
---

# Database Design

## Proposito

Disena bases de datos relacionales y NoSQL eficientes: esquemas, normalizacion, indices y mejores practicas para bases de datos escalables y mantenibles.

## Cuando usar

- Disenar una base de datos o crear esquemas de tablas
- Normalizar datos y definir relaciones entre tablas
- Implementar indices y constraints
- Optimizar queries
- Migrar datos o planificar backups

## Flujo de trabajo

1. Modelar las entidades y relaciones del dominio.
2. Leer `references/instructions.md` y aplicar sus reglas obligatorias (normalizacion, claves, constraints).
3. Aplicar las tecnicas de `references/best-practices.md` (indices compuestos, optimizacion de queries).
4. Verificar que el diseno no incurre en los anti-patrones de `references/common-mistakes.md`.
5. Consultar `references/references.md` para fuentes oficiales cuando haya dudas.
6. Usar `examples/schema-design.sql` como referencia practica.

## Validacion

El diseno debe estar normalizado, tener indices apropiados y constraints de integridad, ser escalable, estar documentado, contemplar backups y estar optimizado para las queries principales.