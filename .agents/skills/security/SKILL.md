---
name: security
description: "Seguridad web profesional contra OWASP Top 10. Use para proteger aplicaciones contra XSS, SQL injection y CSRF, configurar headers de seguridad, manejar secrets y variables de entorno de forma segura y auditar la seguridad de aplicaciones web."
---

# Security Web

## Proposito

Implementa seguridad web profesional protegiendo aplicaciones contra vulnerabilidades OWASP Top 10 y asegurando datos sensibles.

## Cuando usar

- Proteger aplicaciones contra XSS, SQLi o CSRF
- Configurar headers de seguridad
- Manejar secrets y variables de entorno
- Auditar la seguridad de una aplicacion

## Flujo de trabajo

1. Identificar los vectores de ataque aplicables.
2. Leer `references/instructions.md` y aplicar sus reglas obligatorias (nunca confiar en input del usuario, prepared statements, escapar output).
3. Configurar headers de seguridad y RLS/autorizacion siguiendo `references/best-practices.md`.
4. Verificar que no se incurre en los anti-patrones de `references/common-mistakes.md` (innerHTML sin sanitizar, secrets en codigo).
5. Consultar `references/references.md` para fuentes oficiales (OWASP).
6. Auditar el resultado (por ejemplo con OWASP ZAP).

## Validacion

Toda entrada debe estar validada y sanitizada, SQL construido con prepared statements, output escapado contra XSS, CSRF protegido, HTTPS activo y sin secrets expuestos en codigo.