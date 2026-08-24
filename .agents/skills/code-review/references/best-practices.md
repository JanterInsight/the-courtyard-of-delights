# Mejores Prácticas de Code Review

## Proceso
- Revisar PRs pequeños (menos de 400 líneas)
- Revisar dentro de 24 horas
- Priorizar por severidad: 🔴 Blocker, 🟡 Major, 🟢 Minor
- Proporcionar contexto y ejemplos
- Ser constructivo y específico

## Seguridad
- Verificar validación de entradas
- Buscar XSS, SQLi, CSRF
- Verificar auth y authorization
- Comprobar manejo de secrets
- Revisar RLS y policies

## Calidad
- Verificar principios SOLID
- Buscar código duplicado
- Evaluar complejidad ciclomática
- Verificar manejo de errores
- Comprobar tests significativos

## Rendimiento
- Detectar N+1 queries
- Verificar renders innecesarios
- Evaluar uso de memoria
- Comprobar async/await correcto
- Verificar lazy loading

## Feedback
- Explicar el porqué del cambio
- Proporcionar ejemplos de código
- Sugerir alternativas
- Reconocer buen código
- Mantener tono profesional