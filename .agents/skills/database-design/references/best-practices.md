# Database Design - Best Practices

## 1. Normalización

### Niveles de Normalización

**✅ SIEMPRE normalizar hasta 3NF:**
```sql
-- 1NF: Valores atómicos
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  nombre VARCHAR(100) NOT NULL
);

-- 2NF: Sin dependencias parciales
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

-- 3NF: Sin dependencias transitivas
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  ciudad_id INTEGER REFERENCES ciudades(id)
);

CREATE TABLE ciudades (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  pais VARCHAR(100)
);
```

## 2. Claves Primarias

### Tipos de Claves

```sql
-- ✅ CORRECTO: SERIAL para PostgreSQL
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL
);

-- ✅ CORRECTO: UUID para distribuidos
CREATE TABLE usuarios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL
);

-- ✅ CORRECTO: BIGSERIAL para grandes volúmenes
CREATE TABLE transacciones (
  id BIGSERIAL PRIMARY KEY,
  usuario_id INTEGER REFERENCES usuarios(id),
  monto DECIMAL(10,2)
);
```

## 3. Índices

### Estrategia de Índices

```sql
-- ✅ CORRECTO: Índice en columna de búsqueda frecuente
CREATE INDEX idx_usuarios_email ON usuarios(email);

-- ✅ CORRECTO: Índice compuesto para queries múltiples
CREATE INDEX idx_usuarios_nombre_ciudad ON usuarios(nombre, ciudad);

-- ✅ CORRECTO: Índice único para integridad
CREATE UNIQUE INDEX idx_usuarios_email_unique ON usuarios(email);

-- ✅ CORRECTO: Índice parcial para casos específicos
CREATE INDEX idx_usuarios_activos ON usuarios(email) WHERE activo = true;

-- ❌ INCORRECTO: Índice en columnas raramente consultadas
CREATE INDEX idx_usuarios_rarely_used ON usuarios(campo_poco_usado);
```

## 4. Relaciones

### Tipos de Relaciones

```sql
-- 1:1
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE perfiles (
  id SERIAL PRIMARY KEY,
  usuario_id INTEGER UNIQUE REFERENCES usuarios(id),
  bio TEXT
);

-- 1:N
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  usuario_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE,
  titulo VARCHAR(255) NOT NULL
);

-- N:M con tabla intermedia
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE usuarios_roles (
  usuario_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE,
  rol_id INTEGER REFERENCES roles(id) ON DELETE CASCADE,
  PRIMARY KEY (usuario_id, rol_id)
);
```

## 5. Constraints

### Integridad de Datos

```sql
-- ✅ CORRECTO: Constraints apropiados
CREATE TABLE productos (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  precio DECIMAL(10,2) CHECK (precio > 0),
  stock INTEGER CHECK (stock >= 0),
  email VARCHAR(255) UNIQUE NOT NULL,
  categoria_id INTEGER REFERENCES categorias(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ✅ CORRECTO: Foreign key con acciones
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  usuario_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE,
  categoria_id INTEGER REFERENCES categorias(id) ON DELETE SET NULL
);
```

## 6. Naming Conventions

### Convenciones de Nombres

```sql
-- ✅ CORRECTO: snake_case
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  primer_nombre VARCHAR(100),
  fecha_creacion TIMESTAMP
);

CREATE INDEX idx_usuarios_email ON usuarios(email);

-- ❌ INCORRECTO: camelCase o PascalCase
CREATE TABLE Usuarios (
  Id SERIAL PRIMARY KEY,
  PrimerNombre VARCHAR(100),
  FechaCreacion TIMESTAMP
);
```

## 7. Performance

### Optimización

```sql
-- ✅ CORRECTO: Índices en columnas de JOIN
CREATE INDEX idx_posts_usuario_id ON posts(usuario_id);

-- ✅ CORRECTO: Índices en columnas de WHERE
CREATE INDEX idx_usuarios_activos ON usuarios(activo) WHERE activo = true;

-- ✅ CORRECTO: Índices en columnas de ORDER BY
CREATE INDEX idx_posts_fecha ON posts(created_at DESC);

-- ❌ INCORRECTO: Demasiados índices
CREATE INDEX idx_usuarios_1 ON usuarios(nombre);
CREATE INDEX idx_usuarios_2 ON usuarios(apellido);
CREATE INDEX idx_usuarios_3 ON usuarios(email);
CREATE INDEX idx_usuarios_4 ON usuarios(telefono);
```

## Resumen

### ✅ SIEMPRE:
1. Normalizar hasta 3NF
2. Usar claves primarias
3. Crear índices apropiados
4. Implementar constraints
5. Usar snake_case
6. Relaciones con foreign keys
7. Índices en columnas consultadas
8. Documentar esquema

### ❌ NUNCA:
1. Sin normalización
2. Sin clave primaria
3. Indexar todo
4. Sin constraints
5. Nombres inconsistentes
6. Sin foreign keys
7. Datos duplicados
8. Sin documentación