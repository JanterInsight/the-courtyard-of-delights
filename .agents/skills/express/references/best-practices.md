# Express.js Development - Best Practices

## 1. Estructura del Proyecto

### Organización de Archivos

```
src/
├── config/
│   ├── database.js
│   └── env.js
├── controllers/
│   ├── usuarioController.js
│   └── postController.js
├── services/
│   ├── usuarioService.js
│   └── postService.js
├── routes/
│   ├── usuarios.js
│   └── posts.js
├── middleware/
│   ├── auth.js
│   ├── validacion.js
│   └── errorHandler.js
├── models/
│   └── Usuario.js
├── utils/
│   ├── logger.js
│   └── validadores.js
└── app.js
```

## 2. Middleware

### Orden de Middleware

```javascript
// ✅ CORRECTO: Orden correcto
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import logger from './middleware/logger.js';
import auth from './middleware/auth.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

// 1. Seguridad
app.use(helmet());
app.use(cors());

// 2. Rate limiting
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

// 3. Logging
app.use(logger);

// 4. Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 5. Rutas públicas
app.use('/api/public', publicRoutes);

// 6. Autenticación
app.use('/api', auth);

// 7. Rutas protegidas
app.use('/api', protectedRoutes);

// 8. Error handling (al final)
app.use(errorHandler);
```

## 3. Rutas RESTful

### Convenciones REST

```javascript
// ✅ CORRECTO: Rutas RESTful
router.get('/usuarios', usuarioController.obtenerTodos);
router.get('/usuarios/:id', usuarioController.obtenerPorId);
router.post('/usuarios', usuarioController.crear);
router.put('/usuarios/:id', usuarioController.actualizar);
router.patch('/usuarios/:id', usuarioController.actualizarParcial);
router.delete('/usuarios/:id', usuarioController.eliminar);

// ❌ INCORRECTO: No RESTful
router.get('/obtenerUsuarios', usuarioController.obtenerTodos);
router.post('/crearUsuario', usuarioController.crear);
router.get('/eliminarUsuario', usuarioController.eliminar);
```

## 4. Manejo de Errores

### Error Handling Centralizado

```javascript
// ✅ CORRECTO: Error handler
export default (err, req, res, next) => {
  console.error('Error:', err);

  // Error de validación
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Error de validación',
      details: err.details
    });
  }

  // Error de autenticación
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ error: 'No autorizado' });
  }

  // Error de no encontrado
  if (err.name === 'NotFoundError') {
    return res.status(404).json({ error: err.message });
  }

  // Error genérico
  res.status(500).json({ error: 'Error interno del servidor' });
};

// ✅ CORRECTO: Async wrapper
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
```

## 5. Validación

### Validación de Entrada

```javascript
// ✅ CORRECTO: Validación con express-validator
import { body, param, query, validationResult } from 'express-validator';

router.post('/usuarios',
  body('nombre')
    .notEmpty().withMessage('Nombre requerido')
    .isLength({ min: 2 }).withMessage('Nombre muy corto'),
  body('email')
    .isEmail().withMessage('Email inválido')
    .normalizeEmail(),
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // ...
  })
);

// ✅ CORRECTO: Validación manual
const validarUsuario = (req, res, next) => {
  const { nombre, email } = req.body;
  
  if (!nombre || nombre.length < 2) {
    return res.status(400).json({ error: 'Nombre inválido' });
  }
  
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Email inválido' });
  }
  
  next();
};
```

## 6. Seguridad

### Middleware de Seguridad

```javascript
// ✅ CORRECTO: Configuración de seguridad
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

// Helmet para headers de seguridad
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
    },
  },
}));

// CORS configurado
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Demasiadas solicitudes'
});
app.use('/api/', limiter);
```

## 7. Autenticación

### JWT Authentication

```javascript
// ✅ CORRECTO: Middleware de autenticación
import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'Token requerido' });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};

// Uso
router.get('/perfil', auth, (req, res) => {
  res.json({ user: req.user });
});
```

## 8. Logging

### Logging Apropiado

```javascript
// ✅ CORRECTO: Logging estructurado
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

// Uso
logger.info('Usuario creado', { userId: usuario.id });
logger.error('Error al crear usuario', { error: err.message });
```

## 9. Testing

### Tests con Supertest

```javascript
// ✅ CORRECTO: Test de API
import request from 'supertest';
import app from './app.js';

describe('API de Usuarios', () => {
  test('POST /api/usuarios - crear usuario', async () => {
    const response = await request(app)
      .post('/api/usuarios')
      .send({ nombre: 'Juan', email: 'juan@example.com' })
      .expect(201);
    
    expect(response.body.nombre).toBe('Juan');
  });
});
```

## 10. Performance

### Optimizaciones

```javascript
// ✅ CORRECTO: Compresión
import compression from 'compression';
app.use(compression());

// ✅ CORRECTO: Cache
import cache from './middleware/cache.js';
app.use('/api/usuarios', cache(3600)); // 1 hora

// ✅ CORRECTO: Timeout
app.use((req, res, next) => {
  req.setTimeout(5000);
  next();
});
```

## Resumen

### ✅ SIEMPRE:
1. Usar async/await
2. Manejo de errores centralizado
3. Validar entrada
4. Usar middleware de seguridad
5. Estructura organizada
6. Logging apropiado
7. Tests
8. RESTful routes

### ❌ NUNCA:
1. Callbacks
2. Sin manejo de errores
3. Sin validación
4. Sin seguridad
5. Código mezclado
6. Sin logging
7. Sin tests
8. Rutas no RESTful