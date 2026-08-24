# Supabase Integration - Instructions

## Purpose

Este documento proporciona instrucciones detalladas para integrar Supabase en aplicaciones backend.

## When to Activate

Activar esta skill cuando:
- Se necesite integrar Supabase en un proyecto
- Se requiera implementar autenticación
- Se deba trabajar con PostgreSQL
- Se necesite almacenar archivos
- Se trabaje con real-time subscriptions
- Se requiera implementar RLS
- Se necesite usar edge functions
- Se trabaje con APIs de Supabase

## Core Rules

### 1. Cliente Supabase

**Regla #1: Inicializar cliente correctamente**
```javascript
// ✅ CORRECTO
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// ❌ INCORRECTO: Hardcodear credenciales
const supabase = createClient('https://xxx.supabase.co', 'public-anon-key');
```

### 2. Base de Datos

**Regla #2: Usar queries seguras**
```javascript
// ✅ CORRECTO: Query parametrizada
const { data, error } = await supabase
  .from('usuarios')
  .select('*')
  .eq('id', userId)
  .single();

// ❌ INCORRECTO: SQL injection
const { data } = await supabase
  .from('usuarios')
  .select(`* where id = ${userId}`);
```

### 3. Autenticación

**Regla #3: Manejar autenticación correctamente**
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

// ✅ CORRECTO: Sign out
await supabase.auth.signOut();
```

### 4. Manejo de Errores

**Regla #4: Siempre manejar errores**
```javascript
// ✅ CORRECTO
const { data, error } = await supabase
  .from('usuarios')
  .insert([{ nombre: 'Juan' }]);

if (error) {
  console.error('Error:', error.message);
  throw error;
}

// ❌ INCORRECTO: Sin manejo de errores
const { data } = await supabase
  .from('usuarios')
  .insert([{ nombre: 'Juan' }]);
```

## Workflow

### Paso 1: Configuración
1. Crear proyecto en Supabase
2. Obtener credenciales
3. Configurar variables de entorno
4. Instalar cliente Supabase

### Paso 2: Desarrollo
1. Implementar autenticación
2. Trabajar con base de datos
3. Implementar storage
4. Configurar RLS

### Paso 3: Testing
1. Probar autenticación
2. Probar queries
3. Probar RLS
4. Probar real-time

## Best Practices

### 1. Seguridad
- ✅ RLS policies
- ✅ Validación de entrada
- ✅ Variables de entorno
- ❌ No exponer service_role key

### 2. Performance
- ✅ Índices en base de datos
- ✅ Paginación
- ✅ Cache
- ❌ No hacer queries innecesarias

### 3. Errores
- ✅ Manejo de errores
- ✅ Logging
- ❌ No ignorar errores

## Anti Patterns

### 1. Service Role en cliente
```javascript
// ❌ INCORRECTO
const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

// ✅ CORRECTO
const supabase = createClient(SUPABASE_URL, ANON_KEY);
```

## Examples

Ver la carpeta `examples/` para ejemplos completos.

## References

- [Supabase Docs](https://supabase.com/docs)
- [Supabase JS Client](https://supabase.com/docs/reference/javascript)