# Instrucciones de Code Review

## Proceso de Revisión

1. **Contexto**: Leer la descripción del PR y entender el objetivo
2. **Seguridad**: Buscar XSS, SQL injection, auth bypass, data leaks
3. **Lógica**: Verificar que la funcionalidad sea correcta
4. **Rendimiento**: Detectar N+1 queries, renders innecesarios, memory leaks
5. **Errores**: Verificar try/catch, manejo de errores, edge cases
6. **Tests**: Comprobar cobertura de casos principales
7. **Estilo**: Verificar consistencia con el codebase
8. **Feedback**: Proporcionar comentarios específicos con ejemplos

## Checklist de Seguridad
- [ ] Entradas validadas y sanitizadas
- [ ] No hay SQL injection
- [ ] No hay XSS en outputs
- [ ] Auth/authorization verificados
- [ ] Secrets no expuestos
- [ ] RLS habilitado si aplica

## Checklist de Calidad
- [ ] Código legible y mantenible
- [ ] Funciones pequeñas con una responsabilidad
- [ ] Nombres descriptivos
- [ ] Sin código duplicado
- [ ] Manejo de errores adecuado
- [ ] Documentación cuando sea necesaria