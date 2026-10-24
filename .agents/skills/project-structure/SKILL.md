---
name: project-structure
description: "Organization of professional and scalable web projects. Use to create new projects, refactor existing structure, organize code by features or domains, separate responsibilities, configure import aliases and establish folder conventions."
---

# Project Structure

## Purpose

Organizes web projects with scalable structure, separation of concerns and maintainability, prioritizing feature-based organization.

## When to Use

- Create new projects
- Refactor existing structure
- Organize code by domains or features
- Configure import aliases
- Establish folder and naming conventions

## Workflow

1. Identify the application domains or features.
2. Read `references/instructions.md` and follow its organization workflow.
3. Apply the rules from `references/best-practices.md` (feature-based structure, barrel files, path aliases).
4. Verify that you do not fall into the anti-patterns from `references/common-mistakes.md` (structure by types only, circular dependencies).
5. Consult `references/references.md` for references of proven structures.
6. Use `examples/folder-structure.md` as a practical reference.
7. Document the resulting structure.

## Validation

The structure must avoid circular dependencies, separate business logic from presentation, keep imports ordered and be documented.
