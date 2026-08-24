# Mejores Prácticas de RLS

## Diseño de Policies
- Crear policies granulares por operación (SELECT, INSERT, UPDATE, DELETE)
- Usar auth.uid() como identificador principal
- Implementar policies basados en roles
- Usar subqueries para relaciones complejas

## Seguridad
- Habilitar RLS en todas las tablas con datos sensibles
- No usar políticas públicas sin autenticación
- Probar con diferentes usuarios y roles
- Usar SECURITY DEFINER con cuidado

## Performance
- Las policies se ejecutan en cada consulta, optimizarlas
- Usar índices en columnas usadas en policies
- Evitar subqueries complejas si es posible
- Usar EXPLAIN para verificar performance

## Mantenimiento
- Documentar cada policy con nombre descriptivo
- Versionar los scripts de políticas
- Monitorear accesos denegados
- Revisar policies regularmente