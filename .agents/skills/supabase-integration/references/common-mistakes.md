# Supabase Integration - Common Mistakes

## 1. Errores de Seguridad

### ❌ Exponer Service Role Key

```javascript
// ❌ INCORRECTO
const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

// ✅ CORRECTO
const supabase = createClient(SUPABASE_URL, ANON_KEY);
```

**Impacto:** Acceso total a la base de datos.

---

### ❌ Sin RLS

```sql
-- ❌ INCORRECTO: Sin políticas RLS
SELECT * FROM usuarios;

-- ✅ CORRECTO: Con RLS
CREATE POLICY "Usuarios ven sus datos"
  ON usuarios FOR SELECT
  USING (auth.uid() = id);
```

**Impacto:** Datos sin protección.

---

## 2. Errores de Queries

### ❌ SQL Injection

```javascript
// ❌ INCORRECTO
const { data } = await supabase
  .from('usuarios')
  .select(`* where id = ${userId}`);

// ✅ CORRECTO
const { data } = await supabase
  .from('usuarios')
  .select('*')
  .eq('id', userId);
```

**Impacto:** Vulnerabilidad SQL injection.

---

## 3. Errores de Manejo de Errores

### ❌ Sin manejo de errores

```javascript
// ❌ INCORRECTO
const { data } = await supabase
  .from('usuarios')
  .insert([{ nombre: 'Juan' }]);

// ✅ CORRECTO
const { data, error } = await supabase
  .from('usuarios')
  .insert([{ nombre: 'Juan' }]);

if (error) {
  console.error('Error:', error);
  throw error;
}
```

**Impacto:** Errores no manejados.

---

## 4. Checklist

- [ ] ¿Usa variables de entorno?
- [ ] ¿Maneja errores?
- [ ] ¿Implementa RLS?
- [ ] ¿Valida entrada?
- [ ] ¿No expone service_role?

---

## Resumen

Errores comunes:
1. **Service role expuesto** - Vulnerabilidad crítica
2. **Sin RLS** - Datos sin protección
3. **SQL injection** - Queries inseguras
4. **Sin errores** - No maneja errores
5. **Hardcodear** - Credenciales expuestas