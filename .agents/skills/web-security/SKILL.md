---
name: web-security
description: "Comprehensive security for web applications. Use to protect against OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF), implement authentication and authorization (JWT, OAuth, RBAC), security headers (Helmet, CSP, HSTS), encryption and input validation."
---

# Web Security

## Purpose

Implements security in web applications: protection against common vulnerabilities, authentication and authorization, and security best practices.

## When to Use

- Implement security in a web application
- Protect against OWASP Top 10 vulnerabilities
- Implement authentication and authorization (JWT, OAuth, RBAC)
- Handle sessions, tokens and encryption
- Configure CORS and security headers
- Validate data input
- Work with compliance (GDPR, HIPAA)

## Workflow

1. Read `references/instructions.md` and apply its mandatory rules.
2. Identify applicable attack vectors (OWASP Top 10).
3. Apply the countermeasures from `references/best-practices.md` (headers, hashing, least privilege).
4. Verify that you do not fall into the anti-patterns in `references/common-mistakes.md`.
5. Consult `references/references.md` for official sources (OWASP, MDN).
6. Use `examples/security-best-practices.js` as a practical reference.

## Validation

The result must protect against OWASP Top 10, use robust authentication and appropriate authorization (RBAC), have security headers, validate all input, use appropriate encryption and include security logging.

## Note

This skill partially overlaps with `security`. Use this skill as a general web security reference and `security` for specific OWASP hardening and auditing.
