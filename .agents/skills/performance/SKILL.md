---
name: performance
description: "Optimizacion de rendimiento de aplicaciones web. Use para mejorar tiempo de carga y Core Web Vitals, reducir tamano de bundles, optimizar renders de React y queries de base de datos, implementar caching, lazy loading y code splitting midiendo antes de optimizar."
---

# Performance Optimization

## Proposito

Optimiza el rendimiento de aplicaciones web: carga, renderizado, queries de base de datos y experiencia de usuario, siempre midiendo antes de optimizar.

## Cuando usar

- Optimizar tiempo de carga de paginas o Core Web Vitals
- Mejorar rendimiento de queries
- Reducir tamano de bundles
- Optimizar renders de React
- Implementar caching o lazy loading

## Flujo de trabajo

1. Medir el rendimiento actual (Lighthouse, Web Vitals) antes de cambiar nada.
2. Leer `references/instructions.md` e identificar cuellos de botella siguiendo su workflow.
3. Aplicar las tecnicas de `references/best-practices.md` (code splitting, memoizacion, paginacion, CDN).
4. Verificar que no se incurre en los anti-patrones de `references/common-mistakes.md` (optimizar sin medir, ignorar N+1).
5. Consultar `references/references.md` para herramientas y fuentes oficiales.
6. Usar `examples/performance-optimizations.js` como referencia practica.
7. Volver a medir y verificar la mejora obtenida.

## Validacion

Toda optimizacion debe estar justificada por una medicion previa y verificada con una medicion posterior; los Core Web Vitals deben mantenerse o mejorar.