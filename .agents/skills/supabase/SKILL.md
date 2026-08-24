---
name: supabase
description: "Configuracion e implementacion de proyectos Supabase. Use para crear proyectos con Supabase, configurar base de datos PostgreSQL con RLS, implementar autenticacion, usar Storage para archivos, Realtime subscriptions y Edge Functions."
---

# Supabase

## Proposito

Configura, implementa y optimiza proyectos con Supabase: base de datos, autenticacion, storage, realtime y edge functions.

## Cuando usar

- Crear proyectos con Supabase
- Configurar base de datos PostgreSQL con RLS
- Implementar autenticacion con Supabase
- Usar Storage para archivos
- Implementar Realtime subscriptions
- Crear Edge Functions

## Flujo de trabajo

1. Crear el proyecto en Supabase.
2. Leer `references/instructions.md` y aplicar sus reglas obligatorias (RLS en todas las tablas, service role key solo en servidor).
3. Configurar base de datos, policies, storage buckets y autenticacion siguiendo `references/best-practices.md`.
4. Implementar realtime y edge functions si es necesario.
5. Conectar con el frontend.
6. Verificar que no se incurre en los anti-patrones de `references/common-mistakes.md`.
7. Consultar `references/references.md` para fuentes oficiales.
8. Usar `examples/basic-setup.js` como referencia practica.

## Validacion

RLS habilitado en todas las tablas con sus policies, storage buckets con politicas de acceso, service role key solo en backend y sesiones manejadas correctamente.