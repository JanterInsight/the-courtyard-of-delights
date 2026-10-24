---
name: postgresql
description: "Modern PostgreSQL databases. Use to design schemas, write advanced SQL queries, optimize queries with EXPLAIN ANALYZE, implement indexes and constraints, use JSONB, create functions and triggers, and configure database security."
---

# PostgreSQL

## Purpose

Design, implement, and optimize modern PostgreSQL databases: advanced SQL, indexing, performance, and security.

## When to Use

- Design PostgreSQL database schemas
- Write advanced SQL queries
- Optimize query performance
- Implement indexes and constraints
- Use JSONB for flexible data
- Create functions and triggers
- Configure database security (RLS, roles, permissions)

## Workflow

1. Design the schema (tables, relationships, constraints).
2. Read `references/instructions.md` and apply its mandatory rules (UUID as primary keys, TIMESTAMPTZ, indexes on WHERE/JOIN columns).
3. Apply techniques from `references/best-practices.md` (appropriate types, partitioning, connection pooling).
4. Verify that the SQL does not fall into the anti-patterns from `references/common-mistakes.md` (SELECT *, N+1 queries).
5. Optimize queries with EXPLAIN ANALYZE.
6. Consult `references/references.md` for official sources when in doubt.

## Validation

The schema must use UUID and TIMESTAMPTZ, have indexes for primary queries, integrity constraints, documentation with COMMENT, and queries verified with EXPLAIN ANALYZE.
