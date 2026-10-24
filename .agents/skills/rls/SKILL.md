---
name: rls
description: "Row Level Security (RLS) in PostgreSQL/Supabase. Use to protect data at the row level based on the authenticated user, implement security policies per operation in Supabase, restrict access by role or user, and secure sensitive data at the database level."
---

# Row Level Security (RLS)

## Purpose

Implement Row Level Security in PostgreSQL/Supabase to protect data at the row level based on the authenticated user.

## When to Use

- Multi-user applications with private data
- Implement security policies in Supabase
- Restrict row access by role or user
- Protect sensitive data at the database level

## Workflow

1. Read `references/instructions.md` and apply its mandatory rules (enable RLS on all tables, policies per operation, auth.uid()).
2. Create security policies following `references/best-practices.md`.
3. Enable RLS on the affected tables.
4. Test policies with different roles and authenticated users.
5. Verify that it does not fall into the anti-patterns from `references/common-mistakes.md` (overly permissive policies).
6. Consult `references/references.md` for official sources.
7. Use `examples/rls-policies.sql` as a practical reference.

## Validation

RLS must be enabled on all tables, with granular policies per operation (SELECT, INSERT, UPDATE, DELETE), using auth.uid() and tested with different roles; never disable RLS in production.
