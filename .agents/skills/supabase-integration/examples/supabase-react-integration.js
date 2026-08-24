// Ejemplo: Integración de Supabase con React
// Configuración del cliente, autenticación y CRUD

import { createClient } from '@supabase/supabase-js';

// ============================================
// 1. Configuración del cliente Supabase
// ============================================
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ============================================
// 2. Autenticación
// ============================================
export const authService = {
  // Registro con email y password
  async registrar(email, password) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/confirmar`
      }
    });
    
    if (error) throw error;
    return data;
  },
  
  // Login
  async iniciarSesion(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    if (error) throw error;
    return data;
  },
  
  // Logout
  async cerrarSesion() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },
  
  // Obtener sesión actual
  async obtenerSesion() {
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    return data.session;
  },
  
  // Escuchar cambios de autenticación
  onAuthChange(callback) {
    return supabase.auth.onAuthStateChange((event, session) => {
      callback(event, session);
    });
  }
};

// ============================================
// 3. CRUD con Supabase
// ============================================
export const usuariosService = {
  // Obtener todos los usuarios
  async obtenerTodos() {
    const { data, error } = await supabase
      .from('usuarios')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },
  
  // Obtener por ID
  async obtenerPorId(id) {
    const { data, error } = await supabase
      .from('usuarios')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  },
  
  // Crear
  async crear(usuario) {
    const { data, error } = await supabase
      .from('usuarios')
      .insert(usuario)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },
  
  // Actualizar
  async actualizar(id, cambios) {
    const { data, error } = await supabase
      .from('usuarios')
      .update(cambios)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },
  
  // Eliminar
  async eliminar(id) {
    const { error } = await supabase
      .from('usuarios')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }
};

// ============================================
// 4. Realtime subscriptions
// ============================================
export function suscribirseACambios(callback) {
  return supabase
    .channel('usuarios-cambios')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'usuarios' },
      (payload) => callback(payload)
    )
    .subscribe();
}

// ============================================
// 5. Storage
// ============================================
export const storageService = {
  async subirArchivo(bucket, ruta, archivo) {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(ruta, archivo);
    
    if (error) throw error;
    return data;
  },
  
  async obtenerURLPublica(bucket, ruta) {
    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(ruta);
    
    return data.publicUrl;
  }
};