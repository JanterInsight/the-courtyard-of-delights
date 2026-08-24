# Errores Comunes de RLS

## ❌ Configuración Incorrecta
- No habilitar RLS en todas las tablas
- Usar policies demasiado amplias
- No usar auth.uid() en policies
- Establecer policies solo para SELECT, ignorar INSERT/UPDATE/DELETE

## ❌ Errores de Implementación
- Deshabilitar RLS en producción
- Usar SERVICE_ROLE_KEY en el cliente
- No probar policies con usuarios reales
- Ignorar el aislamiento entre usuarios

## ❌ Performance
- Subqueries complejas en cada policy
- No indexar columnas usadas en policies
- Policies que causan N+1 queries
- No usar EXPLAIN para debug

## ❌ Seguridad
- Policies con USING (true)
- No restringir accesos por rol
- Exponer datos de otros usuarios
- Usar SECURITY INVOKER sin cuidado