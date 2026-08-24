# React Development - Instructions

## Purpose

Este documento proporciona instrucciones detalladas para que el agente IA desarrolle aplicaciones con React moderno (React 19+), siguiendo mejores prácticas profesionales.

## When to Activate

Activar esta skill cuando:
- El usuario solicite crear componentes React
- Se necesite implementar estado y efectos
- Se requiera usar hooks modernos
- Se trabaje con React 19+ y sus nuevas características
- Se necesite optimizar rendimiento
- Se requiera implementar formularios
- Se trabaje con Context API o state management
- Se necesite implementar Server Components

## Core Rules

### 1. Functional Components

**Regla #1: Usar functional components en lugar de class components**
```jsx
// ✅ CORRECTO: Functional component
function Usuario({ nombre, edad }) {
  return (
    <div>
      <h1>{nombre}</h1>
      <p>Edad: {edad}</p>
    </div>
  );
}

// ✅ CORRECTO: Arrow function
const Usuario = ({ nombre, edad }) => {
  return (
    <div>
      <h1>{nombre}</h1>
      <p>Edad: {edad}</p>
    </div>
  );
};

// ❌ INCORRECTO: Class component (obsoleto en React 19+)
class Usuario extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.nombre}</h1>
      </div>
    );
  }
}
```

### 2. Hooks Básicos

**Regla #2: useState para estado local**
```jsx
// ✅ CORRECTO
const [contador, setContador] = useState(0);
const [usuario, setUsuario] = useState(null);

const incrementar = () => {
  setContador(contador + 1);
  // o
  setContador(prev => prev + 1);
};

// ❌ INCORRECTO: Mutar estado directamente
contador++; // Error
```

**Regla #3: useEffect para efectos secundarios**
```jsx
// ✅ CORRECTO: useEffect con dependencias
useEffect(() => {
  const obtenerDatos = async () => {
    const response = await fetch('/api/usuarios');
    const data = await response.json();
    setUsuarios(data);
  };
  
  obtenerDatos();
}, []); // Array de dependencias vacío = solo al montar

// ✅ CORRECTO: useEffect con dependencias específicas
useEffect(() => {
  document.title = `Contador: ${contador}`;
}, [contador]); // Se ejecuta cuando contador cambia

// ✅ CORRECTO: Cleanup
useEffect(() => {
  const subscription = subscribeToChannel('test');
  
  return () => {
    subscription.unsubscribe(); // Cleanup al desmontar
  };
}, []);

// ❌ INCORRECTO: useEffect sin array de dependencias
useEffect(() => {
  console.log('Se ejecuta en cada render');
}); // Se ejecuta en cada render
```

### 3. Custom Hooks

**Regla #4: Extraer lógica reutilizable en custom hooks**
```jsx
// ✅ CORRECTO: Custom hook
function useUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await fetch('/api/usuarios');
        const data = await response.json();
        setUsuarios(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    obtenerUsuarios();
  }, []);

  return { usuarios, cargando, error };
}

// Uso
const { usuarios, cargando, error } = useUsuarios();
```

### 4. Props y Composition

**Regla #5: Usar props correctamente**
```jsx
// ✅ CORRECTO: Props con destructuring
function Boton({ texto, onClick, disabled = false }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {texto}
    </button>
  );
}

// ✅ CORRECTO: Props con children
function Card({ titulo, children }) {
  return (
    <div className="card">
      <h2>{titulo}</h2>
      {children}
    </div>
  );
}

// Uso
<Card titulo="Mi Card">
  <p>Contenido de la card</p>
</Card>

// ✅ CORRECTO: Spread props
const props = { nombre: 'Juan', edad: 25 };
<Usuario {...props} />
```

### 5. Estado Complejo

**Regla #6: useReducer para estado complejo**
```jsx
// ✅ CORRECTO: useReducer
const initialState = { contador: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENTAR':
      return { contador: state.contador + 1 };
    case 'DECREMENTAR':
      return { contador: state.contador - 1 };
    case 'RESET':
      return initialState;
    default:
      throw new Error(`Acción desconocida: ${action.type}`);
  }
}

function Contador() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <p>Contador: {state.contador}</p>
      <button onClick={() => dispatch({ type: 'INCREMENTAR' })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENTAR' })}>
        -
      </button>
    </div>
  );
}
```

### 6. Context API

**Regla #7: Context para estado global**
```jsx
// ✅ CORRECTO: Crear context
const ThemeContext = createContext();

// Provider
function ThemeProvider({ children }) {
  const [tema, setTema] = useState('claro');
  
  const toggleTema = () => {
    setTema(prev => prev === 'claro' ? 'oscuro' : 'claro');
  };
  
  return (
    <ThemeContext.Provider value={{ tema, toggleTema }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Consumer
function useTema() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTema debe usarse dentro de ThemeProvider');
  }
  return context;
}

// Uso
function App() {
  return (
    <ThemeProvider>
      <Componente />
    </ThemeProvider>
  );
}

function Componente() {
  const { tema, toggleTema } = useTema();
  
  return (
    <div className={tema}>
      <button onClick={toggleTema}>Cambiar tema</button>
    </div>
  );
}
```

### 7. Optimización

**Regla #8: Usar React.memo para evitar re-renders**
```jsx
// ✅ CORRECTO: React.memo
const UsuarioItem = React.memo(({ usuario }) => {
  console.log('Renderizando UsuarioItem:', usuario.nombre);
  return (
    <div>
      <h3>{usuario.nombre}</h3>
      <p>{usuario.email}</p>
    </div>
  );
});

// ✅ CORRECTO: useMemo para valores memorizados
const usuariosFiltrados = useMemo(() => {
  return usuarios.filter(u => u.activo);
}, [usuarios]); // Solo recalcular cuando usuarios cambie

// ✅ CORRECTO: useCallback para funciones memorizadas
const manejarClick = useCallback((id) => {
  console.log('Click en usuario:', id);
}, []); // Dependencias vacías = función estable

return (
  <div>
    {usuariosFiltrados.map(usuario => (
      <UsuarioItem 
        key={usuario.id} 
        usuario={usuario}
        onClick={manejarClick}
      />
    ))}
  </div>
);
```

### 8. Formularios

**Regla #9: Controlled components**
```jsx
// ✅ CORRECTO: Controlled component
function Formulario() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  
  const manejarSubmit = (e) => {
    e.preventDefault();
    console.log({ nombre, email });
  };
  
  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

### 9. Server Components (React 19+)

**Regla #10: Usar Server Components cuando sea apropiado**
```jsx
// ✅ CORRECTO: Server Component (async)
async function ListaUsuarios() {
  const usuarios = await fetch('/api/usuarios').then(r => r.json());
  
  return (
    <ul>
      {usuarios.map(usuario => (
        <li key={usuario.id}>{usuario.nombre}</li>
      ))}
    </ul>
  );
}

// ✅ CORRECTO: 'use client' para componentes interactivos
'use client';

import { useState } from 'react';

function Boton() {
  const [clickeado, setClickeado] = useState(false);
  
  return (
    <button onClick={() => setClickeado(true)}>
      {clickeado ? 'Clickeado' : 'Click me'}
    </button>
  );
}
```

### 10. Error Handling

**Regla #11: Error boundaries**
```jsx
// ✅ CORRECTO: Error boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Algo salió mal.</h1>;
    }
    
    return this.props.children;
  }
}

// Uso
<ErrorBoundary>
  <ComponenteInestable />
</ErrorBoundary>
```

## Workflow

### Paso 1: Planificación
1. Identificar componentes necesarios
2. Definir estructura de componentes
3. Planificar estado y props
4. Identificar custom hooks necesarios

### Paso 2: Implementación
1. Crear componentes funcionales
2. Implementar estado con useState/useReducer
3. Extraer lógica en custom hooks
4. Implementar efectos con useEffect
5. Optimizar con React.memo, useMemo, useCallback

### Paso 3: Testing
1. Crear tests para componentes
2. Testear hooks
3. Verificar accesibilidad
4. Probar en diferentes escenarios

### Paso 4: Optimización
1. Identificar re-renders innecesarios
2. Implementar code splitting
3. Optimizar imágenes y assets
4. Medir performance

## Best Practices

### 1. Componentes
- ✅ Functional components
- ✅ Componentes pequeños y específicos
- ✅ Composition sobre herencia
- ✅ Props drilling evitado (usar Context)
- ✅ Nombres descriptivos (PascalCase)

### 2. Hooks
- ✅ Custom hooks para lógica reutilizable
- ✅ Dependencies arrays correctos en useEffect
- ✅ Limpiar efectos
- ✅ Usar useCallback/useMemo cuando sea necesario
- ❌ No usar hooks condicionalmente

### 3. Estado
- ✅ Estado local cuando sea posible
- ✅ Lifting state up cuando sea necesario
- ✅ Context para estado global
- ✅ useReducer para estado complejo
- ❌ No sobre-usar Context

### 4. Performance
- ✅ React.memo para componentes puros
- ✅ useMemo para cálculos costosos
- ✅ useCallback para funciones en props
- ✅ Code splitting con React.lazy
- ❌ No optimizar prematuramente

### 5. Accesibilidad
- ✅ Usar elementos semánticos
- ✅ ARIA labels cuando sea necesario
- ✅ Navegación por teclado
- ✅ Focus management
- ❌ No olvidar alt texts

## Anti Patterns

### 1. Class Components
```jsx
// ❌ INCORRECTO
class Componente extends React.Component { }

// ✅ CORRECTO
function Componente() { }
```

### 2. Mutar Estado
```jsx
// ❌ INCORRECTO
usuario.nombre = 'Juan'; // Mutación
setUsuario(usuario);

// ✅ CORRECTO
setUsuario({ ...usuario, nombre: 'Juan' });
```

### 3. Hooks Condicionales
```jsx
// ❌ INCORRECTO
if (condicion) {
  useEffect(() => { }); // Error
}

// ✅ CORRECTO
useEffect(() => {
  if (condicion) {
    // ...
  }
}, [condicion]);
```

### 4. Props Drilling
```jsx
// ❌ INCORRECTO
<A usuario={usuario} />
<B usuario={usuario} />
<C usuario={usuario} />
<D usuario={usuario} />

// ✅ CORRECTO
<UsuarioProvider>
  <A />
  <B />
  <C />
  <D />
</UsuarioProvider>
```

## Examples

Ver la carpeta `examples/` para ejemplos completos de:
- Componentes funcionales
- Custom hooks
- Context API
- Formularios
- Optimización
- Server Components

## References

- [React Official Docs](https://react.dev/)
- [React 19 Release Notes](https://react.dev/blog/2024/04/25/react-19)
- [React Hooks](https://react.dev/reference/react)
- [React Patterns](https://reactpatterns.com/)
- [Kent C. Dodds Blog](https://kentcdodds.com/blog)