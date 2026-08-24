# Checklist de Code Review

## 🔴 Blocker (Debe corregirse)
- [ ] Vulnerabilidades de seguridad (XSS, SQLi, CSRF)
- [ ] Bugs que rompen funcionalidad
- [ ] Datos sensibles expuestos
- [ ] Auth/authorization faltante
- [ ] RLS no habilitado

## 🟡 Major (Debería corregirse)
- [ ] Falta validación de entradas
- [ ] Manejo de errores incompleto
- [ ] N+1 queries
- [ ] Renders innecesarios
- [ ] Código duplicado significativo
- [ ] Funciones muy largas (>50 líneas)

## 🟢 Minor (Puede corregirse después)
- [ ] Nombres de variables poco descriptivos
- [ ] Falta de comentarios/documentación
- [ ] Formato inconsistente
- [ ] Imports desordenados
- [ ] Tests faltantes para edge cases

## Proceso
1. Revisar contexto del PR
2. Ejecutar la app localmente
3. Buscar problemas de seguridad
4. Verificar lógica de negocio
5. Evaluar rendimiento
6. Comprobar tests
7. Proporcionar feedback con ejemplos