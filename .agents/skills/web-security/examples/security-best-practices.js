// Ejemplo: Seguridad web profesional
// Protección contra XSS, CSRF, SQL Injection, y más

import crypto from 'crypto';

// ============================================
// 1. Protección contra XSS
// ============================================
function escaparHTML(texto) {
  const mapa = {
    '&': '&',
    '<': '<',
    '>': '>',
    '"': '"',
    "'": '&#039;'
  };
  
  return texto.replace(/[&<>"']/g, (char) => mapa[char]);
}

// Uso: Nunca usar innerHTML con datos del usuario
// const usuarioInput = '<script>alert("XSS")</script>';
// element.textContent = escaparHTML(usuarioInput); // ✅ Seguro

// ============================================
// 2. Protección contra SQL Injection
// ============================================
// ❌ NUNCA hacer esto:
// const query = `SELECT * FROM usuarios WHERE email = '${email}'`;

// ✅ Usar parámetros preparados:
// const query = 'SELECT * FROM usuarios WHERE email = $1';
// const result = await db.query(query, [email]);

// ============================================
// 3. Hashing de contraseñas
// ============================================
async function hashPassword(password) {
  // Usar bcrypt o argon2 en producción
  // Este es un ejemplo con crypto (NO usar en producción)
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

async function verificarPassword(password, storedHash) {
  const [salt, hash] = storedHash.split(':');
  const testHash = crypto.scryptSync(password, salt, 64).toString('hex');
  return crypto.timingSafeEqual(
    Buffer.from(hash, 'hex'),
    Buffer.from(testHash, 'hex')
  );
}

// ============================================
// 4. Tokens CSRF
// ============================================
class CSRFProtection {
  constructor() {
    this.tokens = new Map();
  }
  
  generarToken(sessionId) {
    const token = crypto.randomBytes(32).toString('hex');
    this.tokens.set(sessionId, token);
    return token;
  }
  
  validarToken(sessionId, token) {
    const storedToken = this.tokens.get(sessionId);
    if (!storedToken || !token) return false;
    
    return crypto.timingSafeEqual(
      Buffer.from(storedToken),
      Buffer.from(token)
    );
  }
  
  limpiarToken(sessionId) {
    this.tokens.delete(sessionId);
  }
}

// ============================================
// 5. Headers de seguridad
// ============================================
const securityHeaders = {
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'",
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
};

// ============================================
// 6. Rate limiting
// ============================================
class RateLimiter {
  constructor(maxRequests = 100, windowMs = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.requests = new Map();
  }
  
  check(ip) {
    const now = Date.now();
    const userRequests = this.requests.get(ip) || [];
    
    const validRequests = userRequests.filter(t => now - t < this.windowMs);
    
    if (validRequests.length >= this.maxRequests) {
      return false;
    }
    
    validRequests.push(now);
    this.requests.set(ip, validRequests);
    return true;
  }
}

// ============================================
// 7. Validación de entrada
// ============================================
function sanitizarEntrada(datos) {
  const sanitizado = {};
  
  for (const [key, value] of Object.entries(datos)) {
    if (typeof value === 'string') {
      sanitizado[key] = value.trim().slice(0, 500);
    } else {
      sanitizado[key] = value;
    }
  }
  
  return sanitizado;
}

// ============================================
// 8. JWT seguro
// ============================================
function crearJWT(payload, secret, expiresIn = '1h') {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const body = Buffer.from(JSON.stringify({
    ...payload,
    exp: Date.now() + (expiresIn === '1h' ? 3600000 : 86400000)
  })).toString('base64url');
  
  const signature = crypto
    .createHmac('sha256', secret)
    .update(`${header}.${body}`)
    .digest('base64url');
  
  return `${header}.${body}.${signature}`;
}

function verificarJWT(token, secret) {
  const [header, body, signature] = token.split('.');
  
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(`${header}.${body}`)
    .digest('base64url');
  
  if (signature !== expectedSignature) {
    return null;
  }
  
  const payload = JSON.parse(Buffer.from(body, 'base64url').toString());
  
  if (payload.exp < Date.now()) {
    return null;
  }
  
  return payload;
}

// ============================================
// 9. Middleware de autenticación
// ============================================
function requireAuth(secret) {
  return (req, res, next) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({ error: 'No autorizado' });
    }
    
    const payload = verificarJWT(token, secret);
    
    if (!payload) {
      return res.status(401).json({ error: 'Token inválido o expirado' });
    }
    
    req.user = payload;
    next();
  };
}

export {
  escaparHTML,
  hashPassword,
  verificarPassword,
  CSRFProtection,
  RateLimiter,
  sanitizarEntrada,
  crearJWT,
  verificarJWT,
  requireAuth,
  securityHeaders
};