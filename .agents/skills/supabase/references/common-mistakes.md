# Errores Comunes de Supabase

## ❌ Base de Datos
- Deshabilitar RLS en tablas
- No crear policies de seguridad
- Usar primary keys numéricos en lugar de UUID
- No implementar soft deletes
- Concatenar queries directamente

## ❌ Autenticación
- Usar service role key en cliente
- No configurar email verification
- Exponer secrets en código
- No manejar errores de auth
- Usar proveedores no seguros

## ❌ Storage
- Subir archivos sin validar tipo/tamaño
- No configurar policies de buckets
- Usar URLs públicas para archivos sensibles
- No limpiar archivos huérfanos
- Exponer rutas de almacenamiento

## ❌ Realtime
- Suscribirse a todas las tablas
- No usar filters para limitar datos
- Ignorar desconexiones
- No implementar presence correctamente
- Suscripciones que causan memory leaks

## ❌ Edge Functions
- Usar service role key en funciones
- No implementar CORS
- Exponer secrets en código
- No manejar errores
- Deploy sin testing