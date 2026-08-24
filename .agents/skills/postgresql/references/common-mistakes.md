# Errores Comunes de PostgreSQL

## ❌ Diseño de Esquema
- Usar SERIAL en lugar de UUID
- Usar TIMESTAMP en lugar de TIMESTAMPTZ
- Almacenar datos JSON en TEXT en lugar de JSONB
- No usar constraints de integridad
- Usar nombres de tablas en plural

## ❌ Índices
- Crear índices en todas las columnas
- No crear índices en columnas de JOIN
- Usar índices en columnas con baja cardinalidad
- Ignorar índices parciales

## ❌ Queries
- Usar SELECT * innecesariamente
- No usar EXPLAIN ANALYZE
- Hacer N+1 queries
- Usar LIKE '%texto%' sin full-text search
- No usar paginación keyset

## ❌ Constraints
- No definir NOT NULL cuando corresponde
- Usar ON DELETE CASCADE sin pensar en consecuencias
- No usar CHECK para validar datos
- No usar UNIQUE para datos únicos

## ❌ Performance
- No usar connection pooling
- Ignorar VACUUM y ANALYZE
- No monitorear queries lentas
- Particionar tablas sin necesidad

## ❌ Seguridad
- No implementar RLS
- Usar roles con excesivos privilegios
- No encriptar datos sensibles
- No hacer backups regulares