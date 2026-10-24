---
name: performance
description: "Web application performance optimization. Use to improve load time and Core Web Vitals, reduce bundle size, optimize React renders and database queries, implement caching, lazy loading and code splitting by measuring before optimizing."
---

# Performance Optimization

## Purpose

Optimizes web application performance: loading, rendering, database queries and user experience, always measuring before optimizing.

## When to Use

- Optimize page load time or Core Web Vitals
- Improve query performance
- Reduce bundle size
- Optimize React renders
- Implement caching or lazy loading

## Workflow

1. Measure current performance (Lighthouse, Web Vitals) before changing anything.
2. Read `references/instructions.md` and identify bottlenecks following its workflow.
3. Apply the techniques from `references/best-practices.md` (code splitting, memoization, pagination, CDN).
4. Verify that you do not fall into the anti-patterns from `references/common-mistakes.md` (optimizing without measuring, ignoring N+1).
5. Consult `references/references.md` for tools and official sources.
6. Use `examples/performance-optimizations.js` as a practical reference.
7. Re-measure and verify the improvement obtained.

## Validation

All optimization must be justified by a prior measurement and verified with a subsequent measurement; Core Web Vitals must be maintained or improved.
