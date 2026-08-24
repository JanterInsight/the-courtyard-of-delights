# Database Design - Instructions

## Purpose

Este documento proporciona instrucciones detalladas para diseñar bases de datos relacionales y NoSQL.

## When to Activate

Activar esta skill cuando:
- Se necesite diseñar una base de datos
- Se requiera crear esquemas de tablas
- Se deba normalizar datos
- Se necesite implementar índices
- Se trabaje con relaciones entre tablas
- Se requiera optimizar queries
- Se necesite migrar datos
- Se trabaje con backups

## Core Rules

### 1. Normalización

**Regla #1: Normalizar hasta 3NF**
```sql
-- ✅ CORRECTO: 3NF
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  nombre VARCHAR(100) NOT NULL
);

CREATE TABLE direcciones (
  id SERIAL PRIMARY KEY,
  usuario_id INTEGER REFERENCES usuarios(id),
  calle VARCHAR(255),
  ciudad VARCHAR(100)
);

-- ❌ INCORRECTO: Datos repetidos
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255),
  nombre VARCHAR(100),
  calle VARCHAR(255),
  ciudad VARCHAR(100)
);
```

### 2. Claves Primarias

**Regla #2: Usar claves primarias apropiadas**
```sql
-- ✅ CORRECTO: SERIAL/BIGSERIAL
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL
);

-- ✅ CORRECTO: UUID
CREATE TABLE usuarios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL
);

-- ❌ INCORRECTO: Sin clave primaria
CREATE TABLE usuarios (
  email VARCHAR(255)
);
```

### 3. Índices

**Regla #3: Crear índices apropiados**
```sql
-- ✅ CORRECTO: Índice en columna frecuentemente consultada
CREATE INDEX idx_usuarios_email ON usuarios(email);

-- ✅ CORRECTO: Índice compuesto
CREATE INDEX idx_usuarios_nombre_ciudad ON usuarios(nombre, ciudad);

-- ✅ CORRECTO: Índice único
CREATE UNIQUE INDEX idx_usuarios_email_unique ON usuarios(email);

-- ❌ INCORRECTO: Índice en todo
CREATE INDEX idx_usuarios_all ON usuarios(*);
```

### 4. Relaciones

**Regla #4: Implementar relaciones correctamente**
```sql
-- ✅ CORRECTO: Foreign key
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  usuario_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE,
  titulo VARCHAR(255) NOT NULL
);

-- ✅ CORRECTO: Tabla intermedia para N:M
CREATE TABLE usuarios_roles (
  usuario_id INTEGER REFERENCES usuarios(id),
  rol_id INTEGER REFERENCES roles(id),
  PRIMARY KEY (usuario_id, rol_id)
);
```

### 5. Constraints

**Regla #5: Usar constraints**
```sql
-- ✅ CORRECTO: Constraints
CREATE TABLE productos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  precio DECIMAL(10,2) CHECK (precio > 0),
  stock INTEGER CHECK (stock >= 0),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Workflow

### Paso 1: Análisis
1. Identificar entidades
2. Definir relaciones
3. Determinar cardinalidad

### Paso 2: Diseño
1. Crear modelo entidad-relación
2. Normalizar datos
3. Definir claves

### Paso 3: Implementación
1. Crear tablas
2. Agregar índices
3. Implementar constraints

### Paso 4: Optimización
1. Analizar queries
2. Agregar índices
3. Optimizar rendimiento

## Best Practices

### 1. Normalización
- ✅ 3NF mínimo
- ✅ Datos atómicos
- ✅ Sin duplicados
- ❌ No sobre-normalizar

### 2. Índices
- ✅ En columnas consultadas
- ✅ Compuestos cuando sea necesario
- ❌ No indexar todo

### 3. Naming
- ✅ snake_case
- ✅ Nombres descriptivos
- ✅ Consistente
- ❌ No abreviaturas

## Anti Patterns

### 1. Sin normalización
```sql
-- ❌ INCORRECTO
CREATE TABLE usuarios (
  id INTEGER,
  email VARCHAR(255),
  nombre VARCHAR(100),
  calle VARCHAR(255),
  ciudad VARCHAR(100)
);
```

## Examples

Ver la carpeta `examples/` para ejemplos completos.

## References

- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [Database Design Patterns](https://www.sqltutorial.org/)