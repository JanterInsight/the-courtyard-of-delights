// Ejemplo: Optimizaciones de rendimiento en React
// Code splitting, memoización, lazy loading

import React, { lazy, Suspense, useMemo, useCallback, memo } from 'react';

// 1. Code Splitting con React.lazy
const UserProfile = lazy(() => import('./UserProfile'));

function App() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <UserProfile userId="123" />
    </Suspense>
  );
}

// 2. Memoización con useMemo
function ListaUsuarios({ usuarios, filtro }) {
  const filtrados = useMemo(() => {
    return usuarios.filter(u => 
      u.nombre.toLowerCase().includes(filtro.toLowerCase())
    );
  }, [usuarios, filtro]);
  
  return (
    <ul>
      {filtrados.map(u => <li key={u.id}>{u.nombre}</li>)}
    </ul>
  );
}

// 3. useCallback para funciones estables
function Formulario({ onGuardar }) {
  const [nombre, setNombre] = React.useState('');
  
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    onGuardar({ nombre });
  }, [nombre, onGuardar]);
  
  return (
    <form onSubmit={handleSubmit}>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <button type="submit">Guardar</button>
    </form>
  );
}

// 4. React.memo para evitar re-renders
const TarjetaUsuario = memo(function TarjetaUsuario({ usuario }) {
  return (
    <div>
      <h3>{usuario.nombre}</h3>
      <p>{usuario.email}</p>
    </div>
  );
});

// 5. Debounce para búsquedas
function useDebounce(valor, delay = 300) {
  const [debounced, setDebounced] = React.useState(valor);
  
  React.useEffect(() => {
    const timer = setTimeout(() => setDebounced(valor), delay);
    return () => clearTimeout(timer);
  }, [valor, delay]);
  
  return debounced;
}

// 6. Caching de datos
const cache = new Map();

async function fetchConCache(url) {
  if (cache.has(url)) {
    return cache.get(url);
  }
  
  const response = await fetch(url);
  const data = await response.json();
  cache.set(url, data);
  return data;
}