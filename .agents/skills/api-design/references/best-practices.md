# API Design - Best Practices

## 1. REST APIs

### Recursos y Endpoints

**✅ SIEMPRE usar sustantivos en plural:**
```javascript
// ✅ CORRECTO
GET    /api/v1/usuarios
GET    /api/v1/usuarios/:id
POST   /api/v1/usuarios
PUT    /api/v1/usuarios/:id
DELETE /api/v1/usuarios/:id

GET    /api/v1/posts
GET    /api/v1/posts/:id
POST   /api/v1/posts

// ❌ INCORRECTO
GET    /api/v1/usuario
GET    /api/v1/obtenerUsuarios
POST   /api/v1/crearUsuario
```

## 2. Status Codes

### Códigos HTTP

```javascript
// ✅ CORRECTO: Status codes apropiados
200 OK - GET exitoso
201 Created - POST exitoso
204 No Content - DELETE exitoso
400 Bad Request - Validación fallida
401 Unauthorized - No autenticado
403 Forbidden - No autorizado
404 Not Found - Recurso no encontrado
409 Conflict - Conflicto (ej: email duplicado)
422 Unprocessable Entity - Error de validación
500 Internal Server Error - Error del servidor

// ❌ INCORRECTO
res.status(200).json({ error: 'Usuario no encontrado' });
res.status(500).json({ error: 'Email inválido' });
```

## 3. Versionado

### Estrategias de Versionado

```javascript
// ✅ CORRECTO: URL versioning
app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);

// ✅ CORRECTO: Header versioning
app.use((req, res, next) => {
  const version = req.headers['api-version'] || 'v1';
  req.apiVersion = version;
  next();
});

// ✅ CORRECTO: Deprecation header
res.set('X-API-Deprecation', '2024-12-31');
res.set('X-API-Sunset', '2025-01-01');
```

## 4. Paginación

### Estrategias de Paginación

```javascript
// ✅ CORRECTO: Offset-based pagination
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

// ✅ CORRECTO: Cursor-based pagination
router.get('/posts', async (req, res) => {
  const cursor = req.query.cursor;
  const limit = parseInt(req.query.limit) || 10;
  
  const posts = await postService.obtenerDespuesDe(cursor, limit);
  
  res.json({
    data: posts,
    next_cursor: posts[posts.length - 1]?.id
  });
});
```

## 5. Filtrado y Ordenamiento

### Query Parameters

```javascript
// ✅ CORRECTO: Filtrado
router.get('/usuarios', async (req, res) => {
  const { nombre, email, activo } = req.query;
  
  const filtros = {};
  if (nombre) filtros.nombre = nombre;
  if (email) filtros.email = email;
  if (activo !== undefined) filtros.activo = activo === 'true';
  
  const usuarios = await usuarioService.obtenerConFiltros(filtros);
  res.json(usuarios);
});

// ✅ CORRECTO: Ordenamiento
router.get('/usuarios', async (req, res) => {
  const { sort = 'nombre', order = 'asc' } = req.query;
  
  const usuarios = await usuarioService.obtenerTodos({
    sort: { [sort]: order }
  });
  
  res.json(usuarios);
});
```

## 6. Documentación

### OpenAPI/Swagger

```javascript
// ✅ CORRECTO: Documentación con Swagger
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Usuarios',
      version: '1.0.0',
      description: 'API para gestión de usuarios'
    },
    servers: [
      { url: 'http://localhost:3000/api/v1' }
    ]
  },
  apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
```

## 7. Validación

### Validación de Entrada

```javascript
// ✅ CORRECTO: Validación con express-validator
import { body, validationResult } from 'express-validator';

router.post('/usuarios',
  body('nombre')
    .notEmpty().withMessage('Nombre requerido')
    .isLength({ min: 2 }).withMessage('Nombre muy corto'),
  body('email')
    .isEmail().withMessage('Email inválido')
    .normalizeEmail(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // ...
  }
);
```

## 8. CORS y Seguridad

### CORS

```javascript
// ✅ CORRECTO: CORS configurado
import cors from 'cors';

app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
}));
```

## Resumen

### ✅ SIEMPRE:
1. Usar sustantivos en plural
2. Status codes correctos
3. Versionar API
4. Paginación
5. Filtrado y ordenamiento
6. Documentación
7. Validación
8. CORS

### ❌ NUNCA:
1. Verbos en URLs
2. Status codes incorrectos
3. Sin versionado
4. Sin paginación
5. Sin documentación
6. Sin validación
7. Sin CORS
8. Breaking changes sin versión