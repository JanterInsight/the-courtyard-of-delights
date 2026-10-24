# skills

## Available Skills

This document lists all available skills in the project and when to use them.

### Standard Structure

All skills follow the Agent Skills standard. Each skill is a self-contained package that lives directly in ``.agents/skills/<name>/``:

```
skill-name/
+-- SKILL.md          # Entry point: frontmatter (name, description), when to use and workflow
+-- references/       # Documentation: instructions.md, best-practices.md, common-mistakes.md, references.md
+-- examples/         # Practical examples (if applicable)
```

### Complete Skills List

```yaml
skills:
  # Frontend Skills (path relative to .agents/skills/)
  - name: html
    path: html
    description: "Structure and semantic, accessible HTML5 markup. Use to create or modify web page structure, implement semantic HTML for SEO and WCAG accessibility, forms with native validation and browser Web APIs"
    use_when:
      - "Create or modify HTML structure"
      - "Implement semantic HTML for SEO and accessibility"
      - "Create forms with native validations and accessibility"
      - "Optimize markup for search engines"
    examples: [examples/semantic-page.html, examples/accessible-form.html]

  - name: css
    path: css
    description: "Modern, maintainable and scalable CSS development. Use for styling, responsive design with Grid/Flexbox/Container Queries, professional CSS architecture, design systems, animations and CSS performance"
    use_when:
      - "Create CSS styles for a web application"
      - "Implement responsive design with modern CSS"
      - "Organize styles in a professional and scalable way"
      - "Implement animations and transitions"
    examples: [examples/responsive-grid.html]

  - name: javascript
    path: javascript
    description: "Modern JavaScript development (ES2025+). Use for client-side logic, DOM manipulation, events, asynchronous APIs, ES6+ modules, validations and error handling"
    use_when:
      - "Implement interactivity and validations in web pages"
      - "Manipulate the DOM or handle events"
      - "Work with modern and asynchronous web APIs"
    examples: [examples/modern-javascript.js]

  - name: react
    path: react
    description: "Interface development with React 19+. Use for reusable functional components, hooks, Context API, performance optimization, forms, testing and Server Components"
    use_when:
      - "Create user interface components with React"
      - "Use hooks for state and effect management"
      - "Work with Context API or state management"

  - name: typescript
    path: typescript
    description: "Development with typed TypeScript. Use to configure tsconfig.json and strict mode, define types, interfaces and generics, type guards and integration with React, Node.js and Vite"
    use_when:
      - "Write or configure TypeScript code"
      - "Define types, interfaces or generics"
      - "Integrate TypeScript with React, Node.js or Vite"
    examples: [examples/type-safe-api.ts]

  - name: vite
    path: vite
    description: "Configuration and build with Vite. Use to create projects, configure vite.config.js, optimize builds, code splitting, environment variables, plugins and deployment"
    use_when:
      - "Create a new project with Vite"
      - "Configure or optimize vite.config.js"
      - "Deploy a Vite application"
    examples: [examples/vite-config-example.js]

  - name: accessibility
    path: accessibility
    description: "Web accessibility WCAG 2.2. Use for ARIA attributes, keyboard navigation, focus management, color contrast, screen readers and automated testing with axe or Lighthouse"
    use_when:
      - "Implement web accessibility or comply with WCAG 2.2"
      - "Work with ARIA attributes or keyboard navigation"
      - "Audit accessibility with axe or Lighthouse"
    examples: [examples/accessible-form.html]
    
  # Backend Skills (path relative to .agents/skills/)
  - name: api-design
    path: api-design
    description: "Design of RESTful and GraphQL APIs. Use to structure endpoints, versioning, OpenAPI documentation, contracts, pagination, filtering and rate limiting"
    use_when: ["Design a REST or GraphQL API", "Structure endpoints and API contracts", "Document APIs with OpenAPI/Swagger"]
    examples: [examples/rest-api-design.js]

  - name: authentication
    path: authentication
    description: "Secure authentication. Use for registration and login, sessions and JWT, OAuth, route protection, password recovery and 2FA"
    use_when: ["Implement user registration and login", "Configure sessions and JWT tokens", "Integrate OAuth providers"]
    examples: [examples/auth-supabase.js]

  - name: database-design
    path: database-design
    description: "Design of relational and NoSQL databases. Use for schemas, normalization, relationships, indexes, query optimization and migrations"
    use_when: ["Design a database or table schema", "Normalize data and implement indexes", "Plan migrations"]
    examples: [examples/schema-design.sql]

  - name: express
    path: express
    description: "Servers and REST APIs with Express.js. Use for HTTP servers, middleware, routes, validation, authentication, CORS, rate limiting and centralized error handling"
    use_when: ["Create an HTTP server with Express", "Implement middleware, routes or validation", "Configure CORS, rate limiting or sessions"]
    examples: [examples/express-api.js]

  - name: nodejs
    path: nodejs
    description: "Backend development with modern Node.js. Use for services and APIs, ES6+ modules, streams, processes, npm, performance (clustering, worker threads) and testing"
    use_when: ["Create backend applications with Node.js", "Implement API services in Node", "Optimize Node process performance"]
    examples: [examples/rest-api-server.js]

  - name: postgresql
    path: postgresql
    description: "Modern PostgreSQL databases. Use for schemas, advanced SQL, optimization with EXPLAIN ANALYZE, indexes, constraints, JSONB, functions, triggers and security"
    use_when: ["Design PostgreSQL schemas", "Optimize queries with EXPLAIN ANALYZE", "Use JSONB, functions or triggers"]

  - name: python
    path: python
    description: "Backend development with modern Python. Use for FastAPI, Django or Flask, type hints, async/await, Pydantic, SQLAlchemy and testing with pytest"
    use_when: ["Create backend applications with Python", "Work with FastAPI, Django or Flask", "Process data, automate or scrape"]
    examples: [examples/fastapi-crud.py]

  - name: rls
    path: rls
    description: "Row Level Security in PostgreSQL/Supabase. Use to protect data at row level according to the authenticated user with policies per operation"
    use_when: ["Multi-user applications with private data", "Implement RLS policies in Supabase", "Restrict row access by role or user"]
    examples: [examples/rls-policies.sql]

  - name: security
    path: security
    description: "Professional web security against OWASP Top 10. Use for hardening against XSS/SQLi/CSRF, security headers, secure secrets handling and auditing"
    use_when: ["Harden application security (hardening)", "Configure security headers", "Audit security with OWASP ZAP"]

  - name: supabase
    path: supabase
    description: "Configuration of Supabase projects. Use to create projects, database with RLS, authentication, storage, realtime and edge functions"
    use_when: ["Create or configure a Supabase project", "Configure RLS, storage buckets or realtime", "Create Edge Functions"]
    examples: [examples/basic-setup.js]

  - name: supabase-integration
    path: supabase-integration
    description: "Supabase integration in application code. Use for the official client, queries, auth, storage, real-time subscriptions and edge functions from the app"
    use_when: ["Integrate the Supabase client into a project", "Implement auth, storage or realtime from code", "Use `supabase` to configure the project and this skill to integrate it"]
    examples: [examples/supabase-react-integration.js]

  - name: web-security
    path: web-security
    description: "Comprehensive security for web applications. Use for OWASP Top 10, authentication and authorization (JWT, OAuth, RBAC), headers, encryption and input validation"
    use_when: ["Implement general security in web applications", "Define authentication and authorization (RBAC)", "Handle encryption and compliance (GDPR, HIPAA)"]
    examples: [examples/security-best-practices.js]

  # Architecture Skills (path relative to .agents/skills/)
  - name: code-review
    path: code-review
    description: "Professional code reviews. Use to review code before merge, audit existing code, identify quality, security and technical debt issues"
    use_when: ["Conduct structured code reviews", "Audit existing code or before merge", "Identify anti-patterns and technical debt"]
    examples: [examples/review-checklist.md]

  - name: performance
    path: performance
    description: "Web performance optimization. Use for Core Web Vitals, bundles, React renders, queries and caching, measuring before optimizing"
    use_when: ["Optimize web application performance", "Improve initial load time", "Audit and monitor performance"]
    examples: [examples/performance-optimizations.js]

  - name: project-structure
    path: project-structure
    description: "Organization of scalable web projects. Use to structure by features/domains, separate responsibilities and configure import aliases"
    use_when: ["Create new projects", "Refactor existing structure", "Establish folder and import conventions"]
    examples: [examples/folder-structure.md]

  - name: software-design
    path: software-design
    description: "Design of scalable architectures. Use for SOLID, design patterns, dependency injection and Clean Architecture when designing or refactoring"
    use_when: ["Design architecture for new applications", "Implement design patterns", "Improve maintainability and extensibility"]
    examples: [examples/clean-architecture-example.js]

  - name: web-architecture
    path: web-architecture
    description: "Web application architecture. Use to choose the architecture style (monolith, microservices, serverless, SPA/SSR) and make high-level decisions"
    use_when: ["Start a web application without defined architecture", "Evaluate or change architecture style", "Document architecture decisions"]

  # Spec-Driven Development (path relative to .agents/skills/)
  - name: spec-driven-development
    path: spec-driven-development
    description: "Creates specs before coding. Use when starting a new project, feature, or significant change and no specification exists yet. Use when requirements are unclear, ambiguous, or only exist as a vague idea."
    use_when: ["Start a new project or significant feature", "Requirements are unclear or ambiguous", "No specification exists yet"]

  # Versioned Skills (path relative to .agents/skills/)
    - name: auto-commit
      path: auto-commit
      description: "Automates git commits after applying changes to the project. Always use when the agent modifies project files."
      use_when: ["Apply changes to the project", "Automate git commits after modifying files", "Use semantic commit messages"]
        
```

### Notes

- `supabase` and `supabase-integration`, as well as `security` and `web-security`, partially overlap; each `SKILL.md` documents its specific scope.
