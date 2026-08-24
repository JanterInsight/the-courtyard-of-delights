// Ejemplo: Clean Architecture con Repository Pattern

// 1. Entities
class Usuario {
  constructor(id, nombre, email) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
  }
  
  esValido() {
    return this.nombre.length >= 2 && this.email.includes('@');
  }
}

// 2. Use Cases
class CrearUsuario {
  constructor(repo) { this.repo = repo; }
  
  async ejecutar(datos) {
    const usuario = new Usuario(null, datos.nombre, datos.email);
    if (!usuario.esValido()) throw new Error('Datos inválidos');
    return this.repo.crear(usuario);
  }
}

// 3. Repository Interface
class UsuarioRepository {
  async crear(usuario) { throw new Error('No implementado'); }
  async obtenerTodos() { throw new Error('No implementado'); }
}

// 4. Repository Implementation
class SupabaseUsuarioRepository extends UsuarioRepository {
  constructor(client) { super(); this.client = client; }
  
  async crear(usuario) {
    const { data, error } = await this.client
      .from('usuarios')
      .insert({ nombre: usuario.nombre, email: usuario.email })
      .select().single();
    if (error) throw error;
    return data;
  }
  
  async obtenerTodos() {
    const { data, error } = await this.client
      .from('usuarios').select('*');
    if (error) throw error;
    return data;
  }
}

// 5. Dependency Injection
const repo = new SupabaseUsuarioRepository(supabaseClient);
const crearUsuario = new CrearUsuario(repo);