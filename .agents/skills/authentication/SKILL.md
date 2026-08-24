---
name: authentication
description: "Autenticacion segura para aplicaciones web modernas. Use para implementar registro y login de usuarios, sesiones y tokens JWT, integrar OAuth providers, proteger rutas y recursos, recuperar contrasenas e implementar autenticacion de dos factores (2FA)."
---

# Authentication

## Proposito

Implementa autenticacion segura en aplicaciones web modernas: registro, login, sesiones, JWT, OAuth y proteccion de rutas.

## Cuando usar

- Implementar registro y login de usuarios
- Configurar sesiones y tokens JWT
- Integrar OAuth (Google, GitHub, etc.)
- Proteger rutas y recursos
- Manejar recuperacion de contrasenas
- Implementar autenticacion de dos factores (2FA)

## Flujo de trabajo

1. Configurar el sistema de autenticacion (Supabase Auth, JWT, etc.).
2. Leer `references/instructions.md` y aplicar sus reglas obligatorias (hashing con bcrypt/argon2, expiracion corta de tokens, rate limiting).
3. Seguir el workflow de `references/best-practices.md` (cookies httpOnly, CSRF protection, logging).
4. Verificar que la implementacion no incurre en los anti-patrones de `references/common-mistakes.md` (tokens sin expiracion, tokens en localStorage).
5. Consultar `references/references.md` para fuentes oficiales (OWASP, Supabase Auth).
6. Usar `examples/auth-supabase.js` como referencia practica.

## Validacion

Las contrasenas nunca se almacenan en texto plano, los tokens tienen expiracion y refresh, los endpoints de autenticacion tienen rate limiting y toda entrada se valida y sanitiza.