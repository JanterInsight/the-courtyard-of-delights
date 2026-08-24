// Ejemplo: Autenticación completa con Supabase
// Registro, login, logout, sesiones y protección de rutas

import { createClient } from '@supabase/supabase-js';

// ============================================
// 1. Configuración del cliente
// ============================================
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ============================================
// 2. Registro de usuario
// ============================================
export async function registrarUsuario(email, password, nombre) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { nombre },
        emailRedirectTo: `${window.location.origin}/confirmar-email`
      }
    });
    
    if (error) throw error;
    
    // Crear perfil en la tabla usuarios
    if (data.user) {
      const { error: perfilError } = await supabase
        .from('usuarios')
        .insert({
          id: data.user.id,
          email: data.user.email,
          nombre
        });
      
      if (perfilError) throw perfilError;
    }
    
    return { success: true, user: data.user };
  } catch (error) {
    console.error('Error al registrar:', error.message);
    return { success: false, error: error.message };
  }
}

// ============================================
// 3. Login
// ============================================
export async function iniciarSesion(email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    if (error) throw error;
    
    return { success: true, session: data.session, user: data.user };
  } catch (error) {
    console.error('Error al iniciar sesión:', error.message);
    return { success: false, error: error.message };
  }
}

// ============================================
// 4. Logout
// ============================================
export async function cerrarSesion() {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error al cerrar sesión:', error.message);
    return { success: false, error: error.message };
  }
}

// ============================================
// 5. Obtener sesión actual
// ============================================
export async function obtenerSesion() {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session;
}

// ============================================
// 6. Escuchar cambios de autenticación
// ============================================
export function onAuthChange(callback) {
  return supabase.auth.onAuthStateChange((event, session) => {
    callback(event, session);
  });
}

// ============================================
// 7. Recuperación de contraseña
// ============================================
export async function recuperarPassword(email) {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`
    });
    
    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error al recuperar contraseña:', error.message);
    return { success: false, error: error.message };
  }
}

// ============================================
// 8. Actualizar contraseña
// ============================================
export async function actualizarPassword(nuevaPassword) {
  try {
    const { error } = await supabase.auth.updateUser({
      password: nuevaPassword
    });
    
    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error al actualizar contraseña:', error.message);
    return { success: false, error: error.message };
  }
}

// ============================================
// 9. Middleware de protección de rutas (React)
// ============================================
export function RequireAuth({ children }) {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setLoading(false);
      }
    );
    
    return () => subscription.unsubscribe();
  }, []);
  
  if (loading) return <div>Cargando...</div>;
  
  if (!session) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}