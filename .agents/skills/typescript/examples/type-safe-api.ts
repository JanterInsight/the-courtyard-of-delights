// Ejemplo: API Type-Safe con TypeScript moderno
// Demuestra tipado estricto, generics, y patrones profesionales

// ============================================
// 1. Tipos básicos y interfaces
// ============================================

interface Usuario {
  id: string;
  nombre: string;
  email: string;
  edad?: number;
  activo: boolean;
  createdAt: Date;
}

type Rol = 'admin' | 'usuario' | 'invitado';

interface UsuarioConRol extends Usuario {
  rol: Rol;
}

// ============================================
// 2. Generics - Funciones reutilizables
// ============================================

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return await response.json() as T;
}

// Uso con tipado inferido
const cargarUsuarios = async (): Promise<Usuario[]> => {
  return fetchData<Usuario[]>('/api/usuarios');
};

// ============================================
// 3. Utility Types
// ============================================

// Partial<T>: Todas las propiedades opcionales
type UsuarioParcial = Partial<Usuario>;

// Pick<T, K>: Seleccionar propiedades
type UsuarioBasico = Pick<Usuario, 'id' | 'nombre' | 'email'>;

// Omit<T, K>: Excluir propiedades
type UsuarioSinPassword = Omit<Usuario, 'password'>;

// Record<K, V>: Objeto con claves tipadas
type UsuariosPorRol = Record<Rol, Usuario[]>;

// ============================================
// 4. Type Guards y Narrowing
// ============================================

function esAdmin(usuario: UsuarioConRol): usuario is UsuarioConRol & { rol: 'admin' } {
  return usuario.rol === 'admin';
}

function obtenerPermisos(usuario: UsuarioConRol): string[] {
  if (esAdmin(usuario)) {
    return ['crear', 'editar', 'eliminar', 'administrar'];
  }
  return ['crear', 'editar'];
}

// ============================================
// 5. Clases con modificadores de acceso
// ============================================

class UsuarioService {
  private readonly apiUrl: string;
  private cache: Map<string, Usuario> = new Map();
  
  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }
  
  public async obtenerPorId(id: string): Promise<Usuario> {
    // Verificar caché
    const cached = this.cache.get(id);
    if (cached) return cached;
    
    const usuario = await fetchData<Usuario>(`${this.apiUrl}/${id}`);
    this.cache.set(id, usuario);
    return usuario;
  }
  
  public async crear(datos: Omit<Usuario, 'id' | 'createdAt'>): Promise<Usuario> {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    });
    
    if (!response.ok) {
      throw new Error('Error al crear usuario');
    }
    
    return await response.json();
  }
  
  public limpiarCache(): void {
    this.cache.clear();
  }
}

// ============================================
// 6. Discriminated Unions
// ============================================

type Resultado<T> = 
  | { tipo: 'exito'; datos: T }
  | { tipo: 'error'; mensaje: string; codigo: number };

function procesarResultado<T>(resultado: Resultado<T>): string {
  switch (resultado.tipo) {
    case 'exito':
      return `Operación exitosa: ${JSON.stringify(resultado.datos)}`;
    case 'error':
      return `Error ${resultado.codigo}: ${resultado.mensaje}`;
    default:
      const _exhaustive: never = resultado;
      return _exhaustive;
  }
}

// ============================================
// 7. Enums modernos con as const
// ============================================

const ESTADOS_HTTP = {
  OK: 200,
  CREADO: 201,
  BAD_REQUEST: 400,
  NO_ENCONTRADO: 404,
  ERROR_INTERNO: 500
} as const;

type EstadoHTTP = typeof ESTADOS_HTTP[keyof typeof ESTADOS_HTTP];

function responderConEstado(estado: EstadoHTTP): void {
  console.log(`Respondiendo con estado HTTP: ${estado}`);
}

// ============================================
// 8. Optional Chaining y Nullish Coalescing
// ============================================

function obtenerNombreCompleto(usuario: Usuario | null | undefined): string {
  const nombre = usuario?.nombre ?? 'Anónimo';
  const edad = usuario?.edad?.toString() ?? 'Desconocida';
  return `${nombre} (${edad})`;
}

// ============================================
// 9. Módulos y exports tipados
// ============================================

export {
  Usuario,
  UsuarioConRol,
  UsuarioService,
  fetchData,
  Rol,
  Resultado,
  procesarResultado,
  ESTADOS_HTTP,
  EstadoHTTP,
  obtenerNombreCompleto
};

export default UsuarioService;