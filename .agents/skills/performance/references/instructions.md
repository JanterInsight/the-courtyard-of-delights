# Instrucciones de Performance

## Proceso de Optimización

1. **Medir**: Usar Lighthouse, Web Vitals, Performance tab
2. **Identificar**: Encontrar cuellos de botella
3. **Priorizar**: Optimizar el impacto más grande primero
4. **Implementar**: Aplicar optimizaciones
5. **Verificar**: Medir de nuevo para confirmar mejoras

## Áreas de Optimización

### Frontend
- Code splitting con React.lazy
- Optimizar imágenes (WebP, lazy loading)
- Minimizar bundle size
- Implementar caching de assets
- Usar CDN

### Backend
- Optimizar queries (índices, joins)
- Implementar caching (Redis)
- Usar connection pooling
- Optimizar payloads de API

### Base de Datos
- Crear índices apropiados
- Optimizar queries con EXPLAIN
- Usar paginación
- Implementar caching de queries

## Métricas Clave
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1
- TTI (Time to Interactive): < 3.5s