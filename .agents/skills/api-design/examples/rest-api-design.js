// Ejemplo: Diseño de API REST profesional
// Estructura, versionado, paginación, filtros y errores

// ============================================
// 1. Estructura de respuesta estándar
// ============================================

// Respuesta exitosa
const respuestaExitosa = {
  data: {},
  meta: {
    page: 1,
    per_page: 20,
    total: 100,
    total_pages: 5
  }
};

// Respuesta de error
const respuestaError = {
  error: {
    code: 'VALIDATION_ERROR',
    message: 'Datos inválidos',
    details: [
      { field: 'email', message: 'Email inválido' },
      { field: 'password', message: 'Mínimo 8 caracteres' }
    ]
  }
};

// ============================================
// 2. Códigos de estado HTTP correctos
// ============================================
const HTTP_STATUS = {
  OK: 200,
  CREADO: 201,
  SIN_CONTENIDO: 204,
  BAD_REQUEST: 400,
  NO_AUTORIZADO: 401,
  PROHIBIDO: 403,
  NO_ENCONTRADO: 404,
  CONFLICTO: 409,
  ERROR_INTERNO: 500
};

// ============================================
// 3. Paginación
// ============================================
function paginar(datos, page = 1, perPage = 20) {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const items = datos.slice(start, end);
  
  return {
    data: items,
    meta: {
      page,
      per_page: perPage,
      total: datos.length,
      total_pages: Math.ceil(datos.length / perPage)
    }
  };
}

// ============================================
// 4. Filtros y búsqueda
// ============================================
function filtrarUsuarios(usuarios, { activo, rol, busqueda }) {
  let resultado = [...usuarios];
  
  if (activo !== undefined) {
    resultado = resultado.filter(u => u.activo === activo);
  }
  
  if (rol) {
    resultado = resultado.filter(u => u.rol === rol);
  }
  
  if (busqueda) {
    const termino = busqueda.toLowerCase();
    resultado = resultado.filter(u => 
      u.nombre.toLowerCase().includes(termino) ||
      u.email.toLowerCase().includes(termino)
    );
  }
  
  return resultado;
}

// ============================================
// 5. Versionado de API
// ============================================
// URL: /api/v1/usuarios
// URL: /api/v2/usuarios
// 
// O usar headers:
// Accept: application/vnd.api.v1+json
// Accept: application/vnd.api.v2+json

// ============================================
// 6. Validación de entrada
// ============================================
function validarUsuario(datos) {
  const errores = [];
  
  if (!datos.nombre || datos.nombre.trim().length < 2) {
    errores.push({ field: 'nombre', message: 'El nombre es requerido (mínimo 2 caracteres)' });
  }
  
  if (!datos.email || !datos.email.includes('@')) {
    errores.push({ field: 'email', message: 'Email inválido' });
  }
  
  if (!datos.password || datos.password.length < 8) {
    errores.push({ field: 'password', message: 'La contraseña debe tener mínimo 8 caracteres' });
  }
  
  return errores;
}

// ============================================
// 7. Rate limiting
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
    
    // Limpiar requests antiguas
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
// 8. Ejemplo de endpoint completo
// ============================================
async function obtenerUsuarios(req, res) {
  try {
    // Validar query params
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const perPage = Math.min(100, Math.max(1, parseInt(req.query.per_page) || 20));
    
    // Obtener datos
    const usuarios = await fetchUsuarios();
    
    // Filtrar
    const filtrados = filtrarUsuarios(usuarios, req.query);
    
    // Paginar
    const resultado = paginar(filtrados, page, perPage);
    
    // Responder
    res.status(HTTP_STATUS.OK).json(resultado);
  } catch (error) {
    res.status(HTTP_STATUS.ERROR_INTERNO).json({
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Error interno del servidor'
      }
    });
  }
}

// Función de ejemplo
async function fetchUsuarios() {
  return [
    { id: 1, nombre: 'Juan', email: 'juan@example.com', activo: true, rol: 'admin' },
    { id: 2, nombre: 'María', email: 'maria@example.com', activo: false, rol: 'usuario' }
  ];
}

export {
  paginar,
  filtrarUsuarios,
  validarUsuario,
  RateLimiter,
  HTTP_STATUS
};