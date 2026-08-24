# Web Security - Instructions

## Purpose

Este documento proporciona instrucciones detalladas para implementar seguridad en aplicaciones web.

## When to Activate

Activar esta skill cuando:
- Se necesite implementar seguridad en una aplicación web
- Se requiera proteger contra vulnerabilidades OWASP
- Se deba implementar autenticación y autorización
- Se necesite manejar sesiones y tokens
- Se trabaje con encriptación
- Se requiera implementar CORS y headers de seguridad
- Se necesite validar entrada de datos
- Se trabaje con compliance (GDPR, HIPAA)

## Core Rules

### 1. OWASP Top 10

**Regla #1: Proteger contra vulnerabilidades comunes**
```javascript
// ✅ CORRECTO: Prevenir SQL injection
const { data } = await supabase
  .from('usuarios')
  .select('*')
  .eq('email', email); // Query parametrizada

// ❌ INCORRECTO: SQL injection
const { data } = await supabase
  .from('usuarios')
  .select(`* where email = '${email}'`);
```

### 2. Autenticación

**Regla #2: Implementar autenticación segura**
```javascript
// ✅ CORRECTO: Hash de passwords
import bcrypt from 'bcrypt';

const hash = await bcrypt.hash(password, 10);
const valid = await bcrypt.compare(password, hash);

// ✅ CORRECTO: JWT seguro
import jwt from 'jsonwebtoken';

const token = jwt.sign(
  { userId: user.id },
  process.env.JWT_SECRET,
  { expiresIn: '1h' }
);

// ❌ INCORRECTO: Password en texto plano
const hash = password; // Nunca hacer esto
```

### 3. Autorización

**Regla #3: Implementar autorización**
```javascript
// ✅ CORRECTO: Middleware de autorización
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

### 4. Headers de Seguridad

**Regla #4: Usar headers de seguridad**
```javascript
// ✅ CORRECTO: Helmet
import helmet from 'helmet';

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
    },
  },
}));

// ✅ CORRECTO: CORS
import cors from 'cors';

app.use(cors({
  origin: process.env.ALLOWED_ORIGINS,
  credentials: true
}));
```

### 5. Validación

**Regla #5: Validar toda entrada**
```javascript
// ✅ CORRECTO: Validación
import { body, validationResult } from 'express-validator';

router.post('/usuarios',
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // ...
  }
);
```

## Workflow

### Paso 1: Análisis
1. Identificar vulnerabilidades
2. Definir requisitos de seguridad
3. Planificar autenticación/autorización

### Paso 2: Implementación
1. Implementar autenticación
2. Implementar autorización
3. Agregar headers de seguridad
4. Validar entrada

### Paso 3: Testing
1. Security testing
2. Penetration testing
3. Code review

## Best Practices

### 1. Autenticación
- ✅ Passwords hasheados
- ✅ JWT con expiración
- ✅ MFA/2FA
- ❌ No passwords en texto plano

### 2. Autorización
- ✅ RBAC/ABAC
- ✅ Middleware de autorización
- ❌ No confiar en cliente

### 3. Headers
- ✅ Helmet
- ✅ CORS
- ✅ CSP
- ❌ No exponer información

## Anti Patterns

### 1. Passwords en texto plano
```javascript
// ❌ INCORRECTO
const user = await db.usuarios.findOne({ email, password });

// ✅ CORRECTO
const user = await db.usuarios.findOne({ email });
if (!user) throw new Error('Usuario no encontrado');
const valid = await bcrypt.compare(password, user.password);
```

## Examples

Ver la carpeta `examples/` para ejemplos completos.

## References

- [OWASP](https://owasp.org/)
- [Helmet.js](https://helmetjs.github.io/)