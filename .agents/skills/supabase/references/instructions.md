# Instrucciones de Supabase

## Configuración Inicial
1. Crear proyecto en [Supabase Dashboard](https://supabase.com/dashboard)
2. Obtener URL del proyecto y anon key
3. Configurar variables de entorno: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
4. Instalar el cliente: `npm install @supabase/supabase-js`

## Base de Datos
- Crear tablas con UUID como primary keys
- Habilitar RLS en todas las tablas
- Crear policies para cada operación
- Implementar indexes para performance
- Usar funciones SQL para lógica compleja

## Autenticación
- Configurar providers (email, Google, GitHub)
- Implementar registro, login, logout
- Manejar sesiones y refresh tokens
- Proteger rutas en el frontend
- Manejar eventos de auth state changes

## Storage
- Crear buckets para almacenamiento
- Configurar policies de acceso
- Subir archivos desde el cliente
- Generar URLs públicas/privadas
- Validar tipos de archivos y tamaños

## Realtime
- Suscribirse a cambios en tablas
- Implementar presence si es necesario
- Optimizar suscripciones para performance
- Manejar desconexiones y errores

## Edge Functions
- Crear funciones serverless con Deno
- Usar service role key solo en servidor
- Implementar webhooks si es necesario
- Manejar CORS en functions

## Flujo de Trabajo
1. Configurar proyecto
2. Crear esquema de base de datos
3. Implementar RLS policies
4. Configurar autenticación
5. Configurar storage
6. Implementar realtime
7. Conectar con frontend
8. Crear edge functions si es necesario