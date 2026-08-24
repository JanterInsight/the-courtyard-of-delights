# Mejores Prácticas de Performance

## Frontend
- Code splitting: React.lazy + Suspense
- Optimizar imágenes: WebP, lazy loading, srcset
- Minimizar bundle: tree shaking, minification
- Cachear assets: hashes, CDN, service workers
- Debounce/throttle para eventos (scroll, input)
- Virtualización para listas grandes

## React
- useMemo para cálculos costosos
- useCallback para funciones estables
- React.memo para componentes puros
- Evitar re-renders innecesarios
- Lazy load rutas y componentes pesados

## Backend
- Implementar caching (Redis, Memcached)
- Optimizar queries: índices, joins
- Usar connection pooling
- Compresión de respuestas (gzip)
- Paginación en endpoints
- Rate limiting para protección

## Base de Datos
- Índices apropiados por query
- EXPLAIN ANALYZE para optimizar
- Keyset pagination
- Cache de queries frecuentes
- Particionar tablas grandes

## Monitoreo
- Web Vitals: LCP, FID, CLS
- Lighthouse audits
- Performance monitoring
- Alertas de degradación