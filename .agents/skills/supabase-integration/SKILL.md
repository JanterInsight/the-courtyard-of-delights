---
name: supabase-integration
description: "Supabase integration in frontend and backend applications. Use to integrate the Supabase client into a project, work with its PostgreSQL database API, authentication, storage, real-time subscriptions, RLS, and edge functions from the application code."
---

# Supabase Integration

## Purpose

Integrate Supabase into backend and frontend applications: official client, PostgreSQL database, authentication, storage, realtime, and edge functions effectively and securely.

## When to Use

- Integrate Supabase into an existing project
- Work with the Supabase client API (queries, inserts, joins, pagination)
- Implement authentication (sign up/in, OAuth, magic links, password reset)
- Store files with Storage (buckets, signed URLs)
- Work with real-time subscriptions
- Implement RLS from code or use edge functions

## Workflow

1. Read `references/instructions.md` and apply its mandatory rules.
2. Initialize the official client with TypeScript types.
3. Implement queries, auth, storage, and realtime following `references/best-practices.md`.
4. Verify that the integration does not fall into the anti-patterns from `references/common-mistakes.md`.
5. Consult `references/references.md` for official sources when in doubt.
6. Use `examples/supabase-react-integration.js` as a practical reference.

## Validation

The integration must use the official client, have error handling, implement RLS, include validations and TypeScript types, and be optimized.

## Note

This skill partially overlaps with `supabase` (project configuration). Use `supabase` to configure the project and this skill to integrate it into the application code.
