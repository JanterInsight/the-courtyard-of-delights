# Web Security - Best Practices

## 1. OWASP Top 10

### Prevención de Vulnerabilidades

**✅ SIEMPRE proteger contra OWASP Top 10:**
```javascript
// SQL Injection Prevention
const { data } = await supabase
  .from('usuarios')
  .select('*')
  .eq('email', email); // ✅ Parametrizado

// XSS Prevention
import DOMPurify from 'isomorphic-dompurify';
const clean = DOMPurify.sanitize(userInput);

// CSRF Protection
import csrf from 'csurf';
app.use(csrf({ cookie: true }));
```

## 2. Autenticación

### JWT Seguro

```javascript
// ✅ CORRECTO: JWT con mejores prácticas
import jwt from 'jsonwebtoken';

const token = jwt.sign(
  { 
    userId: user.id,
    role: user.role 
  },
  process.env.JWT_SECRET,
  { 
    expiresIn: '1h',
    algorithm: 'HS256'
  }
);

// ✅ CORRECTO: Refresh tokens
const refreshToken = jwt.sign(
  { userId: user.id },
  process.env.JWT_REFRESH_SECRET,
  { expiresIn: '7d' }
);
```

### Password Hashing

```javascript
// ✅ CORRECTO: bcrypt
import bcrypt from 'bcrypt';

const hash = await bcrypt.hash(password, 10);
const valid = await bcrypt.compare(password, hash);

// ✅ CORRECTO: Argon2 (más seguro)
import argon2 from 'argon2';

const hash = await argon2.hash(password);
const valid = await argon2.verify(hash, password);
```

## 3. Autorización

### RBAC

```javascript
// ✅ CORRECTO: Role-Based Access Control
const requireRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ error: 'No autorizado' });
    }
    next();
  };
};

// Uso
router.delete('/usuarios/:id', auth, requireRole('admin'), controller.eliminar);
```

## 4. Headers de Seguridad

### Helmet.js

```javascript
// ✅ CORRECTO: Headers de seguridad
import helmet from 'helmet';

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true
  }
}));
```

### CORS

```javascript
// ✅ CORRECTO: CORS restrictivo
import cors from 'cors';

app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

## 5. Validación

### Input Validation

```javascript
// ✅ CORRECTO: Validación completa
import { body, validationResult } from 'express-validator';

router.post('/usuarios',
  body('email')
    .isEmail().withMessage('Email inválido')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 8 }).withMessage('Password muy corto')
    .matches(/[A-Z]/).withMessage('Debe tener mayúscula')
    .matches(/[0-9]/).withMessage('Debe tener número'),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // ...
  }
);
```

## 6. Rate Limiting

### Protección contra Ataques

```javascript
// ✅ CORRECTO: Rate limiting
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Demasiadas solicitudes'
});

app.use('/api/', limiter);

// ✅ CORRECTO: Rate limiting por usuario
const userLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  keyGenerator: (req) => req.user?.id || req.ip
});
```

## Resumen

### ✅ SIEMPRE:
1. Proteger contra OWASP Top 10
2. Hashear passwords
3. Usar JWT seguro
4. Implementar RBAC
5. Usar Helmet
6. Validar entrada
7. Rate limiting
8. CORS restrictivo

### ❌ NUNCA:
1. Passwords en texto plano
2. SQL injection
3. XSS
4. CSRF sin protección
5. CORS abierto
6. Sin validación
7. Sin rate limiting
8. Confiar en cliente