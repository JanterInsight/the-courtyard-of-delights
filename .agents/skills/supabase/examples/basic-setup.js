// Ejemplo: Configuración Básica de Supabase

// Configurar variables de entorno en .env.local
// VITE_SUPABASE_URL=tu-url
// VITE_SUPABASE_ANON_KEY=tu-anon-key

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

// Autenticación - Registro e Inicio de Sesión

// Registro de nuevo usuario
async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) throw error;
  return data;
}

// Inicio de sesión
async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) throw error;
  return data;
}

// Cerrar sesión
async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

// Acceso a Datos con RLS

// Obtener todos los usuarios (requiere RLS policy)
async function obtenerUsuarios() {
  const { data, error } = await supabase
    .from('usuarios')
    .select('*');

  if (error) throw error;
  return data;
}

// Insertar nuevo usuario
async function crearUsuario(nombre, email) {
  const { data, error } = await supabase
    .from('usuarios')
    .insert([{ nombre, email, created_at: new Date() }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

// Storage - Subir Archivo

// Subir archivo al bucket 'avatars'
async function subirAvatar(file) {
  const fileName = `avatar-${Date.now()}-${file.name}`;
  const { data, error } = await supabase
    .storage
    .from('avatars')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (error) throw error;

  // Obtener URL pública
  const { data: urlData } = supabase
    .storage
    .from('avatars')
    .getPublicUrl(fileName);

  return urlData.publicUrl;
}

// Realtime - Suscribirse a cambios

// Suscribirse a cambios en la tabla 'usuarios'
const channel = supabase
  .channel('public:usuarios')
  .on('postgres_changes', { event: 'INSERT', schema: 'public' }, (payload) => {
    console.log('Nuevo usuario insertado:', payload.new);
  })
  .on('postgres_changes', { event: 'UPDATE', schema: 'public' }, (payload) => {
    console.log('Usuario actualizado:', payload.new);
  })
  .subscribe();

// Cancelar suscripción
// supabase.removeChannel(channel);

// Verificar Estado de Autenticación

// Escuchar cambios en el estado de auth
supabase.auth.onAuthStateChange((event, session) => {
  console.log('Evento de auth:', event);
  console.log('Sesión:', session?.user?.email);

  if (event === 'SIGNED_IN') {
    // Navegar a área protegida
  }
});

// Obtener sesión actual
const { data: { session} } = await supabase.auth.getSession();
if (session) {
  // Usuario autenticado
}