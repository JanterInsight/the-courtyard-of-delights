---
name: supabase
description: "Configuration and implementation of Supabase projects. Use to create projects with Supabase, configure PostgreSQL database with RLS, implement authentication, use Storage for files, Realtime subscriptions, and Edge Functions."
---

# Supabase

## Purpose

Configure, implement, and optimize projects with Supabase: database, authentication, storage, realtime, and edge functions.

## When to Use

- Create projects with Supabase
- Configure PostgreSQL database with RLS
- Implement authentication with Supabase
- Use Storage for files
- Implement Realtime subscriptions
- Create Edge Functions

## Workflow

1. Create the project in Supabase.
2. Read `references/instructions.md` and apply its mandatory rules (RLS on all tables, service role key only on server).
3. Configure database, policies, storage buckets, and authentication following `references/best-practices.md`.
4. Implement realtime and edge functions if necessary.
5. Connect with the frontend.
6. Verify that it does not fall into the anti-patterns from `references/common-mistakes.md`.
7. Consult `references/references.md` for official sources.
8. Use `examples/basic-setup.js` as a practical reference.

## Validation

RLS enabled on all tables with their policies, storage buckets with access policies, service role key only on the backend, and sessions handled correctly.
