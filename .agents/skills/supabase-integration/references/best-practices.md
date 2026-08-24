# Supabase Integration - Best Practices

## 1. Cliente Supabase

### Inicialización

**✅ SIEMPRE usar variables de entorno:**
```javascript
// ✅ CORRECTO
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// ❌ NUNCA hardcodear credenciales
const supabase = createClient('https://xxx.supabase.co', 'key');
```

## 2. Base de Datos

### Queries

```javascript
// ✅ CORRECTO: Usar el cliente
const { data, error } = await supabase
  .from('usuarios')
  .select('id, nombre, email')
  .eq('id', userId)
  .single();

// ✅ CORRECTO: Con joins
const { data } = await supabase
  .from('usuarios')
  .select('*, posts(*)')
  .eq('id', userId);

// ❌ INCORRECTO: SQL injection
const { data } = await supabase
  .from('usuarios')
  .select(`* where id = ${userId}`);
```

## 3. Autenticación

### Auth

```javascript
// ✅ CORRECTO: Sign up
const { data, error } = await supabase.auth.signUp({
  email: 'usuario@example.com',
  password: 'password123'
});

// ✅ CORRECTO: Sign in
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'usuario@example.com',
  password: 'password123'
});

// ✅ CORRECTO: OAuth
const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'google'
});
```

## 4. Storage

### Upload/Download

```javascript
// ✅ CORRECTO: Upload
const { data, error } = await supabase.storage
  .from('bucket')
  .upload('ruta/archivo.jpg', file);

// ✅ CORRECTO: Download
const { data } = await supabase.storage
  .from('bucket')
  .download('ruta/archivo.jpg');
```

## 5. RLS

### Row Level Security

```sql
-- ✅ CORRECTO: RLS policy
CREATE POLICY "Usuarios pueden ver sus propios datos"
  ON usuarios FOR SELECT
  USING (auth.uid() = id);
```

## 6. Manejo de Errores

```javascript
// ✅ CORRECTO
const { data, error } = await supabase
  .from('usuarios')
  .insert([{ nombre: 'Juan' }]);

if (error) {
  console.error('Error:', error.message);
  throw error;
}
```

## Resumen

### ✅ SIEMPRE:
1. Usar variables de entorno
2. Manejar errores
3. Implementar RLS
4. Validar entrada
5. Usar tipos TypeScript

### ❌ NUNCA:
1. Exponer service_role key
2. Ignorar errores
3. Sin RLS
4. Hardcodear credenciales
5. Sin validación