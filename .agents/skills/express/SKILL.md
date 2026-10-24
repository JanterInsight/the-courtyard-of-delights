---
name: express
description: "Development of servers and REST APIs with modern Express.js. Use to create HTTP servers, implement middleware and routes, validate data, handle errors centrally, configure CORS, rate limiting, sessions, and cookies."
---

# Express.js Development

## Purpose

Develop APIs and web servers with modern Express.js: scalable servers, middleware, routes, and best practices for robust backends.

## When to Use

- Create an HTTP server with Express
- Implement REST APIs
- Handle middleware or routes
- Implement authentication in Express
- Validate input data
- Configure CORS, rate limiting, sessions, and cookies
- Implement centralized error handling

## Workflow

1. Read `references/instructions.md` and apply its mandatory rules.
2. Consult `references/best-practices.md` during implementation (middleware order, error handling middleware).
3. Verify that the implementation does not fall into the anti-patterns from `references/common-mistakes.md`.
4. Consult `references/references.md` for official sources when in doubt.
5. Use `examples/express-api.js` as a practical reference.

## Validation

The generated Express code must use async/await, have centralized error handling, validate input data, be secure (Helmet, sanitization), be organized, testable, and follow REST principles.
