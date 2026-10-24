---
name: database-design
description: "Relational and NoSQL database design. Use to design databases, create table schemas, normalize data, define relationships and constraints, implement indexes, optimize queries, and plan migrations and backups."
---

# Database Design

## Purpose

Design efficient relational and NoSQL databases: schemas, normalization, indexes, and best practices for scalable and maintainable databases.

## When to Use

- Design a database or create table schemas
- Normalize data and define relationships between tables
- Implement indexes and constraints
- Optimize queries
- Migrate data or plan backups

## Workflow

1. Model the domain entities and relationships.
2. Read `references/instructions.md` and apply its mandatory rules (normalization, keys, constraints).
3. Apply techniques from `references/best-practices.md` (composite indexes, query optimization).
4. Verify that the design does not fall into the anti-patterns from `references/common-mistakes.md`.
5. Consult `references/references.md` for official sources when in doubt.
6. Use `examples/schema-design.sql` as a practical reference.

## Validation

The design must be normalized, have appropriate indexes and integrity constraints, be scalable, documented, include backups, and be optimized for primary queries.
