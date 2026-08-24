# Express.js Development - Instructions

## Purpose

Este documento proporciona instrucciones detalladas para desarrollar APIs y servidores web con Express.js moderno.

## When to Activate

Activar esta skill cuando:
- Se necesite crear un servidor HTTP con Express
- Se requiera implementar APIs REST
- Se deba manejar middleware
- Se necesite implementar autenticación
- Se trabaje con validación de datos
- Se requiera manejo de errores centralizado
- Se necesite implementar CORS, rate limiting
- Se trabaje con sesiones y cookies

## Core Rules

### 1. Servidor Básico

**Regla #1: Crear servidor Express correctamente**
```javascript
// ✅ CORRECTO
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware básico
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/usuarios', import('./routes/usuarios.js'));

// Error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
```

### 2. Middleware

**Regla #2: Usar middleware apropiadamente**
```javascript
// ✅ CORRECTO: Middleware personalizado
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
};

app.use(logger);

// ✅ CORRECTO: Middleware de validación
const validarUsuario = (req, res, next) => {
  const { nombre, email } = req.body;
  
  if (!nombre || !email) {
    return res.status(400).json({ error: 'Nombre y email requeridos' });
  }
  
  next();
};

// ❌ INCORRECTO: Middleware que no llama next
const malMiddleware = (req, res, next) => {
  console.log('Request');
  // Falta next()
};
```

### 3. Rutas

**Regla #3: Organizar rutas correctamente**
```javascript
// ✅ CORRECTO: Rutas organizadas
// routes/usuarios.js
import express from 'express';
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const usuarios = await usuarioService.obtenerTodos();
    res.json(usuarios);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const usuario = await usuarioService.obtenerPorId(req.params.id);
    res.json(usuario);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const usuario = await usuarioService.crear(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    next(error);
  }
});

export default router;

// ❌ INCORRECTO: Todas las rutas en un archivo
```

### 4. Manejo de Errores

**Regla #4: Error handling centralizado**
```javascript
// ✅ CORRECTO: Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }
  
  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ error: 'No autorizado' });
  }
  
  res.status(500).json({ error: 'Error interno del servidor' });
});

// ✅ CORRECTO: Async error wrapper
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Uso
router.get('/', asyncHandler(async (req, res) => {
  const data = await obtenerDatos();
  res.json(data);
}));
```

### 5. Validación

**Regla #5: Validar entrada de datos**
```javascript
// ✅ CORRECTO: Validación manual
const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

router.post('/', async (req, res, next) => {
  const { nombre, email } = req.body;
  
  if (!nombre || nombre.length < 2) {
    return res.status(400).json({ error: 'Nombre inválido' });
  }
  
  if (!validarEmail(email)) {
    return res.status(400).json({ error: 'Email inválido' });
  }
  
  const usuario = await usuarioService.crear({ nombre, email });
  res.status(201).json(usuario);
});

// ✅ CORRECTO: Usar express-validator
import { body, validationResult } from 'express-validator';

router.post('/', 
  body('nombre').notEmpty().withMessage('Nombre requerido'),
  body('email').isEmail().withMessage('Email inválido'),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // ...
  }
);
```

### 6. Seguridad

**Regla #6: Implementar seguridad básica**
```javascript
// ✅ CORRECTO: Middleware de seguridad
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

app.use(helmet());
app.use(cors());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
}));

// ✅ CORRECTO: Sanitizar input
import sanitize from 'express-sanitizer';

app.use(sanitize());
```

## Workflow

### Paso 1: Inicialización
1. Crear proyecto
2. Instalar dependencias
3. Configurar estructura
4. Configurar ESLint

### Paso 2: Desarrollo
1. Crear rutas
2. Implementar middleware
3. Validación
4. Manejo de errores

### Paso 3: Testing
1. Unit tests
2. Integration tests
3. E2E tests

### Paso 4: Producción
1. Configurar variables de entorno
2. Configurar logging
3. Configurar PM2
4. Deploy

## Best Practices

### 1. Estructura
- ✅ Separar rutas en archivos
- ✅ Usar controladores
- ✅ Usar servicios
- ✅ Middleware organizado
- ❌ No mezclar lógica

### 2. Middleware
- ✅ Orden correcto
- ✅ Error handling
- ✅ Validación
- ❌ No olvidar next()

### 3. Rutas
- ✅ RESTful
- ✅ Parámetros validados
- ✅ Status codes correctos
- ❌ No lógica en rutas

### 4. Seguridad
- ✅ Helmet
- ✅ CORS
- ✅ Rate limiting
- ✅ Validación
- ❌ No exponer errores

## Anti Patterns

### 1. Callbacks
```javascript
// ❌ INCORRECTO
router.get('/', (req, res) => {
  obtenerDatos((err, data) => {
    res.json(data);
  });
});

// ✅ CORRECTO
router.get('/', async (req, res) => {
  const data = await obtenerDatos();
  res.json(data);
});
```

### 2. Sin manejo de errores
```javascript
// ❌ INCORRECTO
router.get('/', async (req, res) => {
  const data = await obtenerDatos();
  res.json(data);
});

// ✅ CORRECTO
router.get('/', async (req, res, next) => {
  try {
    const data = await obtenerDatos();
    res.json(data);
  } catch (error) {
    next(error);
  }
});
```

## Examples

Ver la carpeta `examples/` para ejemplos completos.

## References

- [Express Docs](https://expressjs.com/)
- [Express Best Practices](https://expressjs.com/en/advanced/best-practice-performance.html)