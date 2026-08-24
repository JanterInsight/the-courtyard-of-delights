# Instrucciones de Row Level Security

## Resumen
Implementar RLS para proteger datos a nivel de fila en PostgreSQL/Supabase.

## Pasos de Implementación
1. Habilitar RLS en todas las tablas
2. Crear policies para SELECT, INSERT, UPDATE, DELETE
3. Usar auth.uid() para identificar al usuario
4. Probar con usuarios autenticados y anónimos
5. Crear roles y permisos
6. Monitorear y ajustar policies

## Consideraciones
- Los policies se aplican después de la autenticación
- Usar SECURITY DEFINER para funciones que necesiten privilegios elevados
- Probar exhaustive con diferentes roles y usuarios
- Documentar cada policy creada

## Flujo de Trabajo
1. Identificar tablas con datos sensibles
2. Habilitar RLS
3. Crear policies por operación
4. Probar con auth.uid()
5. Validar comportamiento