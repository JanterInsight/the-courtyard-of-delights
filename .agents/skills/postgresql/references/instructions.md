# Instrucciones de PostgreSQL

## Resumen
Esta skill define cómo diseñar, implementar y optimizar bases de datos PostgreSQL modernas.

## Implementación

### 1. Diseño de Esquema
- Identificar entidades y relaciones
- Normalizar hasta 3NF
- Usar UUID como primary keys
- Definir constraints de integridad

### 2. Tipos de Datos
- UUID para IDs
- TIMESTAMPTZ para timestamps
- NUMERIC/DECIMAL para dinero
- JSONB para datos flexibles
- ENUM para valores fijos

### 3. Índices
- B-tree para igualdad y rango
- GIN para JSONB y arrays
- Índices parciales para filtros comunes
- Índices compuestos para queries frecuentes

### 4. Queries Avanzadas
- Usar EXPLAIN ANALYZE
- CTEs para queries complejas
- Window functions para análisis
- Full-text search con tsvector

### 5. Funciones y Triggers
- PL/pgSQL para lógica de negocio
- Triggers para auditoría
- Funciones para cálculos repetidos

### 6. Seguridad
- RLS (Row Level Security)
- Roles y permisos
- Encriptación de datos sensibles
- Backup y recovery

## Flujo de Trabajo
1. Diseñar esquema
2. Crear extensiones
3. Crear tablas
4. Agregar índices
5. Crear funciones/triggers
6. Optimizar con EXPLAIN
7. Implementar seguridad
8. Documentar