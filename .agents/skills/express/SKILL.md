---
name: express
description: "Desarrollo de servidores y APIs REST con Express.js moderno. Use para crear servidores HTTP, implementar middleware y rutas, validar datos, manejar errores de forma centralizada, configurar CORS, rate limiting, sesiones y cookies."
---

# Express.js Development

## Proposito

Desarrolla APIs y servidores web con Express.js moderno: servidores escalables, middleware, rutas y mejores practicas para backends robustos.

## Cuando usar

- Crear un servidor HTTP con Express
- Implementar APIs REST
- Manejar middleware o rutas
- Implementar autenticacion en Express
- Validar datos de entrada
- Configurar CORS, rate limiting, sesiones y cookies
- Implementar manejo de errores centralizado

## Flujo de trabajo

1. Leer `references/instructions.md` y aplicar sus reglas obligatorias.
2. Consultar `references/best-practices.md` durante la implementacion (orden de middleware, error handling middleware).
3. Verificar que la implementacion no incurre en los anti-patrones de `references/common-mistakes.md`.
4. Consultar `references/references.md` para fuentes oficiales cuando haya dudas.
5. Usar `examples/express-api.js` como referencia practica.

## Validacion

El codigo Express generado debe usar async/await, tener manejo de errores centralizado, validar entrada de datos, ser seguro (Helmet, sanitizacion), estar organizado, testeable y seguir principios REST.