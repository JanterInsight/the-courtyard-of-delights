# API Design - Instructions

## Purpose

Este documento proporciona instrucciones detalladas para diseñar APIs RESTful y GraphQL.

## When to Activate

Activar esta skill cuando:
- Se necesite diseñar una API REST
- Se requiera implementar GraphQL
- Se deba estructurar endpoints
- Se necesite implementar versionado de API
- Se trabaje con documentación de API
- Se requiera diseñar contratos de API
- Se necesite implementar paginación
- Se trabaje con rate limiting

## Core Rules

### 1. REST APIs

**Regla #1: Usar métodos HTTP apropiados**
```javascript
// ✅ CORRECTO
GET    /api/v1/usuarios          # Listar usuarios
GET    /api/v1/usuarios/:id      # Obtener usuario
POST   /api/v1/usuarios          # Crear usuario
PUT    /api/v1/usuarios/:id      # Actualizar usuario
PATCH  /api/v1/usuarios/:id      # Actualizar parcialmente
DELETE /api/v1/usuarios/:id      # Eliminar usuario

// ❌ INCORRECTO
GET    /api/v1/usuarios/crear    # No RESTful
POST   /api/v1/usuarios/eliminar # No RESTful
```

### 2. Status Codes

**Regla #2: Usar status codes correctos**
```javascript
// ✅ CORRECTO
200 OK - GET exitoso
201 Created - POST exitoso
204 No Content - DELETE exitoso
400 Bad Request - Datos inválidos
401 Unauthorized - No autenticado
403 Forbidden - No autorizado
404 Not Found - Recurso no encontrado
500 Internal Server Error - Error del servidor

// ❌ INCORRECTO
res.status(200).json({ error: 'Usuario no encontrado' });
```

### 3. Versionado

**Regla #3: Versionar API**
```javascript
// ✅ CORRECTO: URL versioning
app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);

// ✅ CORRECTO: Header versioning
app.use((req, res, next) => {
  const version = req.headers['api-version'] || 'v1';
  // ...
});

// ❌ INCORRECTO: Sin versionado
app.use('/api', routes);
```

### 4. Paginación

**Regla #4: Implementar paginación**
```javascript
// ✅ CORRECTO
router.get('/usuarios', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;
  
  const usuarios = await usuarioService.obtenerTodos({ limit, offset });
  const total = await usuarioService.contar();
  
  res.json({
    data: usuarios,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit)
    }
  });
});
```

## Workflow

### Paso 1: Diseño
1. Definir recursos
2. Diseñar endpoints
3. Definir status codes
4. Documentar

### Paso 2: Implementación
1. Crear rutas
2. Implementar validación
3. Manejo de errores
4. Testing

### Paso 3: Documentación
1. OpenAPI/Swagger
2. Ejemplos
3. Testing

## Best Practices

### 1. REST
- ✅ Recursos en plural
- ✅ Métodos HTTP correctos
- ✅ Status codes apropiados
- ❌ No verbos en URLs

### 2. Versionado
- ✅ Versionar desde el inicio
- ✅ Deprecation headers
- ❌ No breaking changes sin versión

### 3. Documentación
- ✅ OpenAPI/Swagger
- ✅ Ejemplos
- ❌ No documentación incompleta

## Anti Patterns

### 1. URLs no RESTful
```javascript
// ❌ INCORRECTO
GET /api/obtenerUsuarios
POST /api/crearUsuario
GET /api/eliminarUsuario

// ✅ CORRECTO
GET /api/usuarios
POST /api/usuarios
DELETE /api/usuarios/:id
```

## Examples

Ver la carpeta `examples/` para ejemplos completos.

## References

- [REST API Tutorial](https://restfulapi.net/)
- [OpenAPI](https://swagger.io/specification/)