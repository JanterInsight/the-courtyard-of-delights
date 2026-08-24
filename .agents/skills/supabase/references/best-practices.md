# Mejores Prácticas de Supabase

## Base de Datos
- Usar UUID como primary keys
- Habilitar RLS en todas las tablas
- Crear policies granulares por operación
- Usar indexes para columnas de JOIN y WHERE
- Implementar soft deletes con deleted_at
- Usar funciones SQL para lógica compleja

## Autenticación
- Usar Supabase Auth para autenticación
- Configurar email verification
- Implementar OAuth providers
- Manejar sesiones con refresh tokens
- Proteger rutas con middleware

## Storage
- Crear buckets con policies específicas
- Validar tipos de archivos y tamaños
- Usar URLs firmadas para archivos privados
- Implementar compresión de imágenes
- Limpiar archivos huérfanos

## Realtime
- Suscribirse solo a tablas necesarias
- Usar filters para limitar datos
- Manejar desconexiones y reconexiones
- Implementar presence para usuarios online
- Optimizar payloads

## Edge Functions
- Usar Deno para funciones serverless
- Service role key solo en servidor
- Implementar CORS correctamente
- Manejar errores y logging
- Usar secrets para configuración

## Frontend
- Usar @supabase/auth-helpers-react
- Escuchar auth state changes
- Implementar loading states
- Manejar errores gracefulmente
- Cachear datos cuando sea posible