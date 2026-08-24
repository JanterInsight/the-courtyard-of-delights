# Referencias de Row Level Security

## Documentación Oficial
- [Supabase RLS Documentation](https://supabase.com/docs/guides/database/row-level-security)
- [PostgreSQL RLS Docs](https://www.postgresql.org/docs/current/ddl-rowsecurity.html)
- [Supabase Policies](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [Supabase Auth Helpers](https://supabase.com/docs/guides/auth/auth-helpers)

## Guías y Tutoriales
- [Supabase RLS Tutorial](https://supabase.com/docs/learn/auth-deep-dive/auth-row-level-security)
- [PostgreSQL Security](https://www.postgresql.org/docs/current/ddl-rowsecurity.html)
- [RLS with Supabase Blog](https://supabase.com/blog/postgres-row-level-security)

## Funciones útiles
- `auth.uid()` - Obtener ID del usuario autenticado
- `auth.jwt()` - Obtener claims del JWT
- `auth.role()` - Obtener rol del usuario
- `current_setting('request.jwt.claims')` - Acceder a claims personalizados

## Ejemplos prácticos
- [Supabase RLS Examples](https://supabase.com/docs/guides/database/postgres/row-level-security#examples)
- [RLS Policies Cheat Sheet](https://supabase.com/docs/guides/database/postgres/row-level-security#policy-cheat-sheet)