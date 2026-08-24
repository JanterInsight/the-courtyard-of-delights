# skills

## Skills Disponibles

Este documento lista todas las skills disponibles en el proyecto y cuando utilizarlas.

### Estructura estandar

Todas las skills siguen el estandar Agent Skills. Cada skill es un paquete autocontenido que vive directamente en ``.agents/skills/<nombre>/``:

```
skill-name/
+-- SKILL.md          # Punto de entrada: frontmatter (name, description), cuando usar y flujo de trabajo
+-- references/       # Documentacion: instructions.md, best-practices.md, common-mistakes.md, references.md
+-- examples/         # Ejemplos practicos (si aplica)
```

Los routers (`SKILL.md` raiz y los de cada categoria) solo contienen tablas de navegacion hacia las sub-skills.

### Lista Completa de Skills

```yaml
skills:
  # Frontend Skills (path relativo a .agents/skills/)
  - name: html
    path: html
    description: "Estructura y marcado HTML5 semantico y accesible. Use para crear o modificar la estructura de paginas web, implementar HTML semantico para SEO y accesibilidad WCAG, formularios con validacion nativa y Web APIs del navegador"
    use_when:
      - "Crear o modificar estructura HTML"
      - "Implementar HTML semantico para SEO y accesibilidad"
      - "Crear formularios con validaciones nativas y accesibilidad"
      - "Optimizar el markup para motores de busqueda"
    examples: [examples/semantic-page.html, examples/accessible-form.html]

  - name: css
    path: css
    description: "Desarrollo CSS moderno, mantenible y escalable. Use para estilos, diseno responsive con Grid/Flexbox/Container Queries, arquitectura CSS profesional, sistemas de diseno, animaciones y rendimiento CSS"
    use_when:
      - "Crear estilos CSS para una aplicacion web"
      - "Implementar diseno responsive con CSS moderno"
      - "Organizar estilos de manera profesional y escalable"
      - "Implementar animaciones y transiciones"
    examples: [examples/responsive-grid.html]

  - name: javascript
    path: javascript
    description: "Desarrollo JavaScript moderno (ES2025+). Use para logica de cliente, manipulacion del DOM, eventos, APIs asincronas, modulos ES6+, validaciones y manejo de errores"
    use_when:
      - "Implementar interactividad y validaciones en paginas web"
      - "Manipular el DOM o manejar eventos"
      - "Trabajar con APIs web modernas y asincronas"
    examples: [examples/modern-javascript.js]

  - name: react
    path: react
    description: "Desarrollo de interfaces con React 19+. Use para componentes funcionales reutilizables, hooks, Context API, optimizacion de rendimiento, formularios, testing y Server Components"
    use_when:
      - "Crear componentes de interfaz de usuario con React"
      - "Utilizar hooks para gestion de estado y efectos"
      - "Trabajar con Context API o state management"

  - name: typescript
    path: typescript
    description: "Desarrollo con TypeScript tipado. Use para configurar tsconfig.json y strict mode, definir tipos, interfaces y generics, type guards e integracion con React, Node.js y Vite"
    use_when:
      - "Escribir o configurar codigo TypeScript"
      - "Definir tipos, interfaces o generics"
      - "Integrar TypeScript con React, Node.js o Vite"
    examples: [examples/type-safe-api.ts]

  - name: vite
    path: vite
    description: "Configuracion y build con Vite. Use para crear proyectos, configurar vite.config.js, optimizar builds, code splitting, variables de entorno, plugins y despliegue"
    use_when:
      - "Crear un nuevo proyecto con Vite"
      - "Configurar u optimizar vite.config.js"
      - "Desplegar una aplicacion Vite"
    examples: [examples/vite-config-example.js]

  - name: accessibility
    path: accessibility
    description: "Accesibilidad web WCAG 2.2. Use para atributos ARIA, navegacion por teclado, focus management, contraste de colores, screen readers y pruebas automatizadas con axe o Lighthouse"
    use_when:
      - "Implementar accesibilidad web o cumplir WCAG 2.2"
      - "Trabajar con atributos ARIA o navegacion por teclado"
      - "Auditar accesibilidad con axe o Lighthouse"
    examples: [examples/accessible-form.html]
  # Backend Skills (path relativo a .agents/skills/)
  - name: api-design
    path: api-design
    description: "Diseno de APIs RESTful y GraphQL. Use para estructurar endpoints, versionado, documentacion OpenAPI, contratos, paginacion, filtering y rate limiting"
    use_when: ["Disenar una API REST o GraphQL", "Estructurar endpoints y contratos de API", "Documentar APIs con OpenAPI/Swagger"]
    examples: [examples/rest-api-design.js]

  - name: authentication
    path: authentication
    description: "Autenticacion segura. Use para registro y login, sesiones y JWT, OAuth, proteccion de rutas, recuperacion de contrasenas y 2FA"
    use_when: ["Implementar registro y login de usuarios", "Configurar sesiones y tokens JWT", "Integrar OAuth providers"]
    examples: [examples/auth-supabase.js]

  - name: database-design
    path: database-design
    description: "Diseno de bases de datos relacionales y NoSQL. Use para esquemas, normalizacion, relaciones, indices, optimizacion de queries y migraciones"
    use_when: ["Disenar una base de datos o esquema de tablas", "Normalizar datos e implementar indices", "Planificar migraciones"]
    examples: [examples/schema-design.sql]

  - name: express
    path: express
    description: "Servidores y APIs REST con Express.js. Use para servidores HTTP, middleware, rutas, validacion, autenticacion, CORS, rate limiting y manejo centralizado de errores"
    use_when: ["Crear un servidor HTTP con Express", "Implementar middleware, rutas o validacion", "Configurar CORS, rate limiting o sesiones"]
    examples: [examples/express-api.js]

  - name: nodejs
    path: nodejs
    description: "Desarrollo backend con Node.js moderno. Use para servicios y APIs, modulos ES6+, streams, procesos, npm, rendimiento (clustering, worker threads) y testing"
    use_when: ["Crear aplicaciones backend con Node.js", "Implementar servicios API en Node", "Optimizar rendimiento de procesos Node"]
    examples: [examples/rest-api-server.js]

  - name: postgresql
    path: postgresql
    description: "Bases de datos PostgreSQL modernas. Use para esquemas, SQL avanzado, optimizacion con EXPLAIN ANALYZE, indices, constraints, JSONB, funciones, triggers y seguridad"
    use_when: ["Disenar esquemas PostgreSQL", "Optimizar queries con EXPLAIN ANALYZE", "Usar JSONB, funciones o triggers"]

  - name: python
    path: python
    description: "Desarrollo backend con Python moderno. Use para FastAPI, Django o Flask, type hints, async/await, Pydantic, SQLAlchemy y testing con pytest"
    use_when: ["Crear aplicaciones backend con Python", "Trabajar con FastAPI, Django o Flask", "Procesar datos, automatizar o hacer scraping"]
    examples: [examples/fastapi-crud.py]

  - name: rls
    path: rls
    description: "Row Level Security en PostgreSQL/Supabase. Use para proteger datos a nivel de fila segun el usuario autenticado con policies por operacion"
    use_when: ["Aplicaciones multi-usuario con datos privados", "Implementar policies RLS en Supabase", "Restringir acceso a filas por rol o usuario"]
    examples: [examples/rls-policies.sql]

  - name: security
    path: security
    description: "Seguridad web profesional contra OWASP Top 10. Use para hardening contra XSS/SQLi/CSRF, headers de seguridad, manejo seguro de secrets y auditoria"
    use_when: ["Endurecer la seguridad de una aplicacion (hardening)", "Configurar headers de seguridad", "Auditar seguridad con OWASP ZAP"]

  - name: supabase
    path: supabase
    description: "Configuracion de proyectos Supabase. Use para crear proyectos, base de datos con RLS, autenticacion, storage, realtime y edge functions"
    use_when: ["Crear o configurar un proyecto Supabase", "Configurar RLS, storage buckets o realtime", "Crear Edge Functions"]
    examples: [examples/basic-setup.js]

  - name: supabase-integration
    path: supabase-integration
    description: "Integracion de Supabase en el codigo de la aplicacion. Use para el cliente oficial, queries, auth, storage, real-time subscriptions y edge functions desde la app"
    use_when: ["Integrar el cliente de Supabase en un proyecto", "Implementar auth, storage o realtime desde el codigo", "Usar `supabase` para configurar el proyecto y esta skill para integrarlo"]
    examples: [examples/supabase-react-integration.js]

  - name: web-security
    path: web-security
    description: "Seguridad integral en aplicaciones web. Use para OWASP Top 10, autenticacion y autorizacion (JWT, OAuth, RBAC), headers, encriptacion y validacion de entradas"
    use_when: ["Implementar seguridad general en aplicaciones web", "Definir autenticacion y autorizacion (RBAC)", "Manejar encriptacion y compliance (GDPR, HIPAA)"]
    examples: [examples/security-best-practices.js]
  # Architecture Skills (path relativo a .agents/skills/)
  - name: code-review
    path: code-review
    description: "Revisiones de codigo profesionales. Use para revisar codigo antes de merge, auditar codigo existente, identificar problemas de calidad, seguridad y deuda tecnica"
    use_when: ["Realizar revisiones de codigo estructuradas", "Auditar codigo existente o antes de merge", "Identificar anti-patterns y deuda tecnica"]
    examples: [examples/review-checklist.md]

  - name: performance
    path: performance
    description: "Optimizacion de rendimiento web. Use para Core Web Vitals, bundles, renders de React, queries y caching, midiendo antes de optimizar"
    use_when: ["Optimizar rendimiento de aplicaciones web", "Mejorar tiempo de carga inicial", "Auditar y monitorear performance"]
    examples: [examples/performance-optimizations.js]

  - name: project-structure
    path: project-structure
    description: "Organizacion de proyectos web escalables. Use para estructurar por features/dominios, separar responsabilidades y configurar aliases de imports"
    use_when: ["Crear nuevos proyectos", "Refactorizar la estructura existente", "Establecer convenciones de carpetas e imports"]
    examples: [examples/folder-structure.md]

  - name: software-design
    path: software-design
    description: "Diseno de arquitecturas escalables. Use para SOLID, patrones de diseno, inyeccion de dependencias y Clean Architecture al disenar o refactorizar"
    use_when: ["Disenar la arquitectura de nuevas aplicaciones", "Implementar patrones de diseno", "Mejorar mantenibilidad y extensibilidad"]
    examples: [examples/clean-architecture-example.js]

  - name: web-architecture
    path: web-architecture
    description: "Arquitectura de aplicaciones web. Use para elegir el estilo de arquitectura (monolito, microservicios, serverless, SPA/SSR) y tomar decisiones de alto nivel"
    use_when: ["Iniciar una aplicacion web sin arquitectura definida", "Evaluar o cambiar el estilo de arquitectura", "Documentar decisiones de arquitectura"]

  # Spec-Driven Development (path relativo a .agents/skills/)
  - name: spec-driven-development
    path: spec-driven-development
    description: "Creates specs before coding. Use when starting a new project, feature, or significant change and no specification exists yet. Use when requirements are unclear, ambiguous, or only exist as a vague idea."
    use_when: ["Comenzar un nuevo proyecto o feature significativa", "Los requisitos son poco claros o ambiguos", "No existe una especificacion aun"]
```

### Notas

- La categoria `versioned/auto-commit` fue eliminada del indice: el directorio referenciado no existe en disco.
- `supabase` y `supabase-integration`, asi como `security` y `web-security`, se solapan parcialmente; cada `SKILL.md` documenta su alcance especifico.