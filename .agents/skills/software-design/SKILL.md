---
name: software-design
description: "Design of scalable and maintainable software architectures. Use to design architecture for new applications, refactor existing code, implement design patterns, apply SOLID principles, dependency injection and Clean Architecture."
---

# Software Design

## Purpose

Designs scalable and maintainable software architectures applying SOLID principles, design patterns and engineering best practices.

## When to Use

- Design architecture for new applications
- Refactor existing code
- Implement design patterns
- Separate responsibilities
- Improve maintainability and extensibility

## Workflow

1. Identify system requirements and entities.
2. Read `references/instructions.md` and follow its design workflow (boundaries, layers, patterns, abstractions).
3. Apply the rules from `references/best-practices.md` (Clean Architecture, Repository, Dependency Injection).
4. Verify that you do not fall into the anti-patterns from `references/common-mistakes.md` (god classes, excessive coupling).
5. Consult `references/references.md` for official sources.
6. Use `examples/clean-architecture-example.js` as a practical reference.
7. Verify SOLID compliance in the resulting design.

## Validation

The design must show low coupling and high cohesion, composition over inheritance, programming against interfaces and single responsibility per module.
