---
name: rls
description: "Row Level Security (RLS) en PostgreSQL/Supabase. Use para proteger datos a nivel de fila segun el usuario autenticado, implementar policies de seguridad por operacion en Supabase, restringir acceso por rol o usuario y asegurar datos sensibles a nivel de base de datos."
---

# Row Level Security (RLS)

## Proposito

Implementa Row Level Security en PostgreSQL/Supabase para proteger datos a nivel de fila segun el usuario autenticado.

## Cuando usar

- Aplicaciones multi-usuario con datos privados
- Implementar policies de seguridad en Supabase
- Restringir acceso a filas segun rol o usuario
- Proteger datos sensibles a nivel de base de datos

## Flujo de trabajo

1. Leer `references/instructions.md` y aplicar sus reglas obligatorias (habilitar RLS en todas las tablas, policies por operacion, auth.uid()).
2. Crear las policies de seguridad siguiendo `references/best-practices.md`.
3. Habilitar RLS en las tablas afectadas.
4. Probar las policies con diferentes roles y usuarios autenticados.
5. Verificar que no se incurre en los anti-patrones de `references/common-mistakes.md` (policies demasiado permisivas).
6. Consultar `references/references.md` para fuentes oficiales.
7. Usar `examples/rls-policies.sql` como referencia practica.

## Validacion

RLS debe estar habilitado en todas las tablas, con policies granulares por operacion (SELECT, INSERT, UPDATE, DELETE), usando auth.uid() y probadas con distintos roles; nunca deshabilitar RLS en produccion.