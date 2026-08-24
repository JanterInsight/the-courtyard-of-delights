# Configuración de Seguridad Web

## Headers de Seguridad (Express)

```js
const helmet = require('helmet');
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"]
    }
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true
  }
}));
```

## CORS Seguro

```js
app.use(cors({
  origin: ['https://miapp.com', 'https://admin.miapp.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400
}));
```

## Rate Limiting

```js
const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Demasiados intentos de login. Intente en 15 minutos.',
  standardHeaders: true
});

app.use('/api/auth/login', loginLimiter);
```

## Validación de Entradas (zod)

```js
const { z } = require('zod');

const usuarioSchema = z.object({
  nombre: z.string().min(2).max(100),
  email: z.string().email(),
  password: z.string().min(8).max(100)
});

app.post('/api/usuarios', (req, res) => {
  const resultado = usuarioSchema.safeParse(req.body);
  if (!resultado.success) {
    return res.status(400).json({ errores: resultado.error });
  }
  // Procesar...
});
```

## Hashing de Contraseñas

```js
const bcrypt = require('bcrypt');

async function crearUsuario(nombre, email, password) {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password, salt);
  // Guardar hash, nunca el password
}

async function verificarPassword(password, hash) {
  return await bcrypt.compare(password, hash);
}