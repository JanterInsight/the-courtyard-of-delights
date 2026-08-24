# Database Design - Common Mistakes

## 1. Errores de Normalización

### ❌ Sin normalización

```sql
-- ❌ INCORRECTO: Datos repetidos
CREATE TABLE usuarios (
  id INTEGER,
  email VARCHAR(255),
  nombre VARCHAR(100),
  calle VARCHAR(255),
  ciudad VARCHAR(100),
  pais VARCHAR(100)
);

-- ✅ CORRECTO: Normalizado
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

**Impacto:** Datos duplicados, inconsistencia.

---

## 2. Errores de Índices

### ❌ Sin índices

```sql
-- ❌ INCORRECTO: Sin índices en columnas consultadas
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255),
  nombre VARCHAR(100)
);

-- Queries lentas
SELECT * FROM usuarios WHERE email = 'juan@example.com';

-- ✅ CORRECTO: Con índice
CREATE INDEX idx_usuarios_email ON usuarios(email);
```

**Impacto:** Queries lentas.

---

### ❌ Índices innecesarios

```sql
-- ❌ INCORRECTO: Demasiados índices
CREATE INDEX idx_usuarios_1 ON usuarios(nombre);
CREATE INDEX idx_usuarios_2 ON usuarios(apellido);
CREATE INDEX idx_usuarios_3 ON usuarios(email);
CREATE INDEX idx_usuarios_4 ON usuarios(telefono);

-- ✅ CORRECTO: Solo índices necesarios
CREATE INDEX idx_usuarios_email ON usuarios(email);
```

**Impacto:** Escrituras lentas.

---

## 3. Errores de Claves

### ❌ Sin clave primaria

```sql
-- ❌ INCORRECTO
CREATE TABLE usuarios (
  email VARCHAR(255),
  nombre VARCHAR(100)
);

-- ✅ CORRECTO
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  nombre VARCHAR(100) NOT NULL
);
```

**Impacto:** Sin identificación única.

---

## 4. Checklist

- [ ] ¿Normalizado hasta 3NF?
- [ ] ¿Clave primaria?
- [ ] ¿Índices apropiados?
- [ ] ¿Foreign keys?
- [ ] ¿Constraints?
- [ ] ¿Naming consistente?

---

## Resumen

Errores comunes:
1. **Sin normalización** - Datos duplicados
2. **Sin índices** - Queries lentas
3. **Sin clave primaria** - Sin identificación
4. **Sin foreign keys** - Integridad
5. **Naming inconsistente** - Confusión