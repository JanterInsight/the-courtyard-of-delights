---
name: web-security
description: "Seguridad integral en aplicaciones web. Use para proteger contra vulnerabilidades OWASP Top 10 (SQLi, XSS, CSRF), implementar autenticacion y autorizacion (JWT, OAuth, RBAC), headers de seguridad (Helmet, CSP, HSTS), encriptacion y validacion de entradas."
---

# Web Security

## Proposito

Implementa seguridad en aplicaciones web: proteccion contra vulnerabilidades comunes, autenticacion y autorizacion, y mejores practicas de seguridad.

## Cuando usar

- Implementar seguridad en una aplicacion web
- Proteger contra vulnerabilidades OWASP Top 10
- Implementar autenticacion y autorizacion (JWT, OAuth, RBAC)
- Manejar sesiones, tokens y encriptacion
- Configurar CORS y headers de seguridad
- Validar entrada de datos
- Trabajar con compliance (GDPR, HIPAA)

## Flujo de trabajo

1. Leer `references/instructions.md` y aplicar sus reglas obligatorias.
2. Identificar vectores de ataque aplicables (OWASP Top 10).
3. Aplicar las contramedidas de `references/best-practices.md` (headers, hashing, least privilege).
4. Verificar que no se incurre en los anti-patrones de `references/common-mistakes.md`.
5. Consultar `references/references.md` para fuentes oficiales (OWASP, MDN).
6. Usar `examples/security-best-practices.js` como referencia practica.

## Validacion

El resultado debe proteger contra OWASP Top 10, usar autenticacion robusta y autorizacion apropiada (RBAC), tener headers de seguridad, validar toda entrada, usar encriptacion apropiada e incluir logging de seguridad.

## Nota

Esta skill se solapa parcialmente con `security`. Usar esta skill como referencia general de seguridad web y `security` para hardening especifico contra OWASP y auditoria.