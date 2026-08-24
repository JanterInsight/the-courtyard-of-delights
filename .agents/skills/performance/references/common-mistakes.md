# Errores Comunes de Performance

## ❌ Frontend
- Cargar todo el bundle de una vez
- Imágenes sin optimizar (PNG grandes, sin lazy loading)
- No usar code splitting
- Ignorar Core Web Vitals
- Re-renders innecesarios en React

## ❌ React
- No usar useMemo/useCallback cuando es necesario
- Componentes sin memoización
- Cargar librerías pesadas innecesariamente
- No usar lazy loading para rutas
- Estado global excesivo

## ❌ Backend
- N+1 queries
- No implementar caching
- Payloads de API demasiado grandes
- No usar connection pooling
- Queries sin índices

## ❌ Base de Datos
- SELECT * innecesarios
- No usar EXPLAIN ANALYZE
- Paginación con OFFSET en tablas grandes
- No indexar columnas de JOIN
- Queries N+1

## ❌ Monitoreo
- Optimizar sin medir primero
- Ignorar métricas de performance
- No tener alertas de degradación
- No hacer profiling