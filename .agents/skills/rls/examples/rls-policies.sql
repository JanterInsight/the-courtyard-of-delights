-- Ejemplo: Políticas de Row Level Security en Supabase
-- Protección de datos a nivel de fila según usuario autenticado

-- ============================================
-- 1. Habilitar RLS en tablas
-- ============================================
ALTER TABLE usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE productos ENABLE ROW LEVEL SECURITY;
ALTER TABLE ordenes ENABLE ROW LEVEL SECURITY;
ALTER TABLE orden_items ENABLE ROW LEVEL SECURITY;

-- ============================================
-- 2. Policies para usuarios (usuarios solo ven su perfil)
-- ============================================

-- SELECT: usuarios solo pueden ver su propio perfil
CREATE POLICY "usuarios_select_own"
ON usuarios FOR SELECT
USING (auth.uid() = id);

-- UPDATE: usuarios solo pueden actualizar su propio perfil
CREATE POLICY "usuarios_update_own"
ON usuarios FOR UPDATE
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- DELETE: usuarios no pueden eliminarse
-- (No se crea política DELETE)

-- ============================================
-- 3. Policies para productos (públicos)
-- ============================================

-- SELECT: cualquier persona autenticada puede ver productos activos
CREATE POLICY "productos_select_public"
ON productos FOR SELECT
USING (activo = true);

-- INSERT: solo admins
CREATE POLICY "productos_insert_admin"
ON productos FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM usuarios
    WHERE id = auth.uid() AND rol = 'admin'
  )
);

-- UPDATE: solo admins
CREATE POLICY "productos_update_admin"
ON productos FOR UPDATE
USING (
  EXISTS (
    SELECT 1 FROM usuarios
    WHERE id = auth.uid() AND rol = 'admin'
  )
);

-- ============================================
-- 4. Policies para ordenes (usuarios ven sus órdenes)
-- ============================================

-- SELECT: usuarios ven sus propias órdenes
CREATE POLICY "ordenes_select_own"
ON ordenes FOR SELECT
USING (usuario_id = auth.uid());

-- INSERT: usuarios crean sus propias órdenes
CREATE POLICY "ordenes_insert_own"
ON ordenes FOR INSERT
WITH CHECK (usuario_id = auth.uid());

-- UPDATE: admins pueden actualizar cualquier orden
CREATE POLICY "ordenes_update_admin"
ON ordenes FOR UPDATE
USING (
  EXISTS (
    SELECT 1 FROM usuarios
    WHERE id = auth.uid() AND rol = 'admin'
  )
);

-- ============================================
-- 5. Policies para orden_items (vía relación)
-- ============================================

-- SELECT: usuarios ven items de sus órdenes
CREATE POLICY "orden_items_select_own"
ON orden_items FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM ordenes
    WHERE ordenes.id = orden_items.orden_id
    AND ordenes.usuario_id = auth.uid()
  )
);

-- INSERT: usuarios agregan items a sus órdenes
CREATE POLICY "orden_items_insert_own"
ON orden_items FOR INSERT
WITH CHECK (
  EXISTS (
    SELECT 1 FROM ordenes
    WHERE ordenes.id = orden_items.orden_id
    AND ordenes.usuario_id = auth.uid()
  )
);

-- ============================================
-- 6. Roles y permisos
-- ============================================

-- Crear roles
CREATE ROLE app_user;
CREATE ROLE app_admin;

GRANT SELECT ON productos TO app_user;
GRANT SELECT, INSERT, UPDATE ON ordenes TO app_user;
GRANT ALL ON productos TO app_admin;

-- ============================================
-- 7. Función helper para verificar admin
-- ============================================
CREATE OR REPLACE FUNCTION es_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM usuarios
    WHERE id = auth.uid() AND rol = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;