# Mejores Prácticas de PostgreSQL

## Diseño de Esquema
- Usar UUID como primary keys (uuid_generate_v4())
- Usar TIMESTAMPTZ en lugar de TIMESTAMP
- Normalizar hasta 3NF
- Usar ENUM para valores fijos
- Usar JSONB para datos semi-estructurados
- Implementar soft deletes con deleted_at

## Índices
- Crear índices para columnas en WHERE y JOIN
- Usar índices parciales para filtros comunes
- Usar GIN para JSONB y arrays
- Usar índices compuestos para queries frecuentes
- Evitar índices en columnas con baja cardinalidad

## Queries
- Usar EXPLAIN ANALYZE para optimizar
- Evitar SELECT * en producción
- Usar CTEs para queries complejas
- Usar window functions para análisis
- Implementar paginación con keyset (WHERE id > last_id)

## Constraints
- Siempre definir NOT NULL cuando corresponda
- Usar CHECK para validar rangos
- Usar UNIQUE para datos únicos
- Usar FOREIGN KEY con ON DELETE apropiado
- Usar DEFAULT para valores por defecto

## Performance
- Usar connection pooling (PgBouncer)
- Particionar tablas grandes
- Usar VACUUM y ANALYZE regularmente
- Monitorear queries lentas
- Usar pg_stat_statements para análisis

## Seguridad
- Implementar RLS (Row Level Security)
- Usar roles con mínimos privilegios
- Encriptar datos sensibles
- Usar SSL para conexiones
- Backup regular con pg_dump