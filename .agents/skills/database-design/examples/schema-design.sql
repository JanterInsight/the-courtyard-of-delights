-- Ejemplo: Diseño de esquema de base de datos profesional
-- PostgreSQL moderno con buenas prácticas

-- ============================================
-- 1. Extensiones necesarias
-- ============================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================
-- 2. Tipos enumerados
-- ============================================
CREATE TYPE rol_usuario AS ENUM ('admin', 'usuario', 'invitado');
CREATE TYPE estado_orden AS ENUM ('pendiente', 'procesando', 'enviado', 'entregado', 'cancelado');

-- ============================================
-- 3. Tabla: usuarios
-- ============================================
CREATE TABLE usuarios (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    rol rol_usuario NOT NULL DEFAULT 'usuario',
    activo BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    
    CONSTRAINT email_formato CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Índices
CREATE INDEX idx_usuarios_email ON usuarios(email);
CREATE INDEX idx_usuarios_rol ON usuarios(rol);
CREATE INDEX idx_usuarios_activo ON usuarios(activo) WHERE activo = true;

-- ============================================
-- 4. Tabla: categorias
-- ============================================
CREATE TABLE categorias (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nombre VARCHAR(100) NOT NULL UNIQUE,
    descripcion TEXT,
    slug VARCHAR(120) NOT NULL UNIQUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================
-- 5. Tabla: productos
-- ============================================
CREATE TABLE productos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    categoria_id UUID NOT NULL REFERENCES categorias(id) ON DELETE RESTRICT,
    nombre VARCHAR(200) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL CHECK (precio >= 0),
    stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0),
    sku VARCHAR(50) NOT NULL UNIQUE,
    activo BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Índices
CREATE INDEX idx_productos_categoria ON productos(categoria_id);
CREATE INDEX idx_productos_precio ON productos(precio);
CREATE INDEX idx_productos_activo ON productos(activo) WHERE activo = true;

-- ============================================
-- 6. Tabla: ordenes
-- ============================================
CREATE TABLE ordenes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    usuario_id UUID NOT NULL REFERENCES usuarios(id) ON DELETE CASCADE,
    estado estado_orden NOT NULL DEFAULT 'pendiente',
    total DECIMAL(10, 2) NOT NULL DEFAULT 0 CHECK (total >= 0),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Índices
CREATE INDEX idx_ordenes_usuario ON ordenes(usuario_id);
CREATE INDEX idx_ordenes_estado ON ordenes(estado);
CREATE INDEX idx_ordenes_created_at ON ordenes(created_at DESC);

-- ============================================
-- 7. Tabla: orden_items (relación muchos a muchos)
-- ============================================
CREATE TABLE orden_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    orden_id UUID NOT NULL REFERENCES ordenes(id) ON DELETE CASCADE,
    producto_id UUID NOT NULL REFERENCES productos(id) ON DELETE RESTRICT,
    cantidad INTEGER NOT NULL CHECK (cantidad > 0),
    precio_unitario DECIMAL(10, 2) NOT NULL CHECK (precio_unitario >= 0),
    subtotal DECIMAL(10, 2) GENERATED ALWAYS AS (cantidad * precio_unitario) STORED,
    
    UNIQUE (orden_id, producto_id)
);

-- Índices
CREATE INDEX idx_orden_items_orden ON orden_items(orden_id);
CREATE INDEX idx_orden_items_producto ON orden_items(producto_id);

-- ============================================
-- 8. Función: actualizar updated_at
-- ============================================
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers
CREATE TRIGGER trg_usuarios_updated_at
    BEFORE UPDATE ON usuarios
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER trg_productos_updated_at
    BEFORE UPDATE ON productos
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

CREATE TRIGGER trg_ordenes_updated_at
    BEFORE UPDATE ON ordenes
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- ============================================
-- 9. Función: calcular total de orden
-- ============================================
CREATE OR REPLACE FUNCTION calcular_total_orden(orden_id UUID)
RETURNS DECIMAL AS $$
DECLARE
    total DECIMAL(10, 2);
BEGIN
    SELECT COALESCE(SUM(subtotal), 0)
    INTO total
    FROM orden_items
    WHERE orden_id = $1;
    
    RETURN total;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- 10. Vistas útiles
-- ============================================
CREATE VIEW v_ordenes_detalle AS
SELECT 
    o.id AS orden_id,
    u.nombre AS usuario_nombre,
    u.email AS usuario_email,
    o.estado,
    o.total,
    o.created_at
FROM ordenes o
JOIN usuarios u ON u.id = o.usuario_id;

-- ============================================
-- 11. Comentarios de documentación
-- ============================================
COMMENT ON TABLE usuarios IS 'Usuarios del sistema';
COMMENT ON COLUMN usuarios.password_hash IS 'Hash de la contraseña usando bcrypt';
COMMENT ON TABLE productos IS 'Catálogo de productos';
COMMENT ON TABLE ordenes IS 'Órdenes de compra';
COMMENT ON TABLE orden_items IS 'Items de cada orden';