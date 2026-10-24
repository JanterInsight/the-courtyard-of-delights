---
name: code-review
description: "Professional code reviews. Use to review code before merge, audit existing code, evaluate implementation quality, identify security, performance, technical debt issues and verify compliance with standards."
---

# Code Review

## Purpose

Conducts professional code reviews identifying quality, security, performance and maintainability issues before they reach production.

## When to Use

- Review code before merge
- Audit existing code
- Evaluate implementation quality
- Identify technical debt
- Verify compliance with project standards

## Workflow

1. Understand the context and purpose of the code to be reviewed.
2. Read `references/instructions.md` and follow its review workflow (business logic, security, performance, error handling, tests, architecture).
3. Apply the rules from `references/best-practices.md` (prioritize by severity, provide correction examples).
4. Verify that common errors from `references/common-mistakes.md` are not overlooked.
5. Consult `references/references.md` for official review guides.
6. Use `examples/review-checklist.md` as a base checklist for the review.

## Validation

The review must cover functionality (not just style), security first, performance, error handling, tests and maintainability, and end with constructive feedback prioritized by severity.
