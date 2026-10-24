---
name: authentication
description: "Secure authentication for modern web applications. Use to implement user registration and login, sessions and JWT tokens, integrate OAuth providers, protect routes and resources, handle password recovery, and implement two-factor authentication (2FA)."
---

# Authentication

## Purpose

Implements secure authentication in modern web applications: registration, login, sessions, JWT, OAuth, and route protection.

## When to Use

- Implement user registration and login
- Configure sessions and JWT tokens
- Integrate OAuth (Google, GitHub, etc.)
- Protect routes and resources
- Handle password recovery
- Implement two-factor authentication (2FA)

## Workflow

1. Configure the authentication system (Supabase Auth, JWT, etc.).
2. Read `references/instructions.md` and apply its mandatory rules (hashing with bcrypt/argon2, short token expiration, rate limiting).
3. Follow the workflow in `references/best-practices.md` (httpOnly cookies, CSRF protection, logging).
4. Verify that the implementation does not fall into the anti-patterns in `references/common-mistakes.md` (tokens without expiration, tokens in localStorage).
5. Consult `references/references.md` for official sources (OWASP, Supabase Auth).
6. Use `examples/auth-supabase.js` as a practical reference.

## Validation

Passwords are never stored in plain text, tokens have expiration and refresh, authentication endpoints have rate limiting, and all input is validated and sanitized.
