---
name: supabase-integration
description: "Integracion de Supabase en aplicaciones frontend y backend. Use para integrar el cliente de Supabase en un proyecto, trabajar con su API de base de datos PostgreSQL, autenticacion, storage, real-time subscriptions, RLS y edge functions desde el codigo de la aplicacion."
---

# Supabase Integration

## Proposito

Integra Supabase en aplicaciones backend y frontend: cliente oficial, base de datos PostgreSQL, autenticacion, storage, realtime y edge functions de manera efectiva y segura.

## Cuando usar

- Integrar Supabase en un proyecto existente
- Trabajar con la API cliente de Supabase (queries, inserts, joins, paginacion)
- Implementar autenticacion (sign up/in, OAuth, magic links, password reset)
- Almacenar archivos con Storage (buckets, URLs firmadas)
- Trabajar con real-time subscriptions
- Implementar RLS desde el codigo o usar edge functions

## Flujo de trabajo

1. Leer `references/instructions.md` y aplicar sus reglas obligatorias.
2. Inicializar el cliente oficial con tipos TypeScript.
3. Implementar queries, auth, storage y realtime siguiendo `references/best-practices.md`.
4. Verificar que la integracion no incurre en los anti-patrones de `references/common-mistakes.md`.
5. Consultar `references/references.md` para fuentes oficiales cuando haya dudas.
6. Usar `examples/supabase-react-integration.js` como referencia practica.

## Validacion

La integracion debe usar el cliente oficial, tener manejo de errores, implementar RLS, incluir validaciones y tipos TypeScript, y estar optimizada.

## Nota

Esta skill se solapa parcialmente con `supabase` (configuracion del proyecto). Usar `supabase` para configurar el proyecto y esta skill para integrarlo en el codigo de la aplicacion.