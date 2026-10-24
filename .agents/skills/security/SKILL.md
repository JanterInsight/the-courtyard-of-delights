---
name: security
description: "Professional web security against OWASP Top 10. Use to protect applications against XSS, SQL injection and CSRF, configure security headers, handle secrets and environment variables securely, and audit web application security."
---

# Security Web

## Purpose

Implement professional web security by protecting applications against OWASP Top 10 vulnerabilities and securing sensitive data.

## When to Use

- Protect applications against XSS, SQLi, or CSRF
- Configure security headers
- Handle secrets and environment variables
- Audit the security of an application

## Workflow

1. Identify applicable attack vectors.
2. Read `references/instructions.md` and apply its mandatory rules (never trust user input, prepared statements, escape output).
3. Configure security headers and RLS/authorization following `references/best-practices.md`.
4. Verify that it does not fall into the anti-patterns from `references/common-mistakes.md` (unsanitized innerHTML, secrets in code).
5. Consult `references/references.md` for official sources (OWASP).
6. Audit the result (e.g., with OWASP ZAP).

## Validation

All input must be validated and sanitized, SQL built with prepared statements, output escaped against XSS, CSRF protected, HTTPS enabled, and no secrets exposed in code.
