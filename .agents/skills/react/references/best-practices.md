# React Development - Best Practices

## 1. Componentes

### Functional Components

**✅ SIEMPRE usar functional components:**
```jsx
// ✅ CORRECTO
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

// ❌ NUNCA usar class components
class Usuario extends React.Component {
  render() {
    return <div>{this.props.nombre}</div>;
  }
}
```

### Component Composition

```jsx
// ✅ CORRECTO: Composition
function Card({ titulo, children }) {
  return (
    <div className="card">
      <h2>{titulo}</h2>
      {children}
    </div>
  );
}

function Boton({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

// Uso
<Card titulo="Mi Card">
  <p>Contenido</p>
  <Boton onClick={manejarClick}>Click me</Boton>
</Card>

// ❌ INCORRECTO: Props drilling
<A usuario={usuario} />
<B usuario={usuario} />
<C usuario={usuario} />
```

### Naming Conventions

```jsx
// ✅ CORRECTO: PascalCase para componentes
function UsuarioCard() { }
function BotonPrimario() { }

// ✅ CORRECTO: camelCase para props
<UsuarioCard nombreUsuario="Juan" edadUsuario={25} />

// ❌ INCORRECTO: kebab-case o snake_case
<usuario-card /> // No usar
<UsuarioCard nombre_usuario="Juan" /> // No usar
```

## 2. Hooks

### useState

```jsx
// ✅ CORRECTO: Estado simple
const [contador, setContador] = useState(0);

// ✅ CORRECTO: Estado con objeto
const [usuario, setUsuario] = useState({ nombre: '', email: '' });

// ✅ CORRECTO: Actualizar estado basado en estado anterior
setContador(prev => prev + 1);
setUsuario(prev => ({ ...prev, nombre: 'Juan' }));

// ❌ INCORRECTO: Mutar estado
usuario.nombre = 'Juan'; // No mutar
setUsuario(usuario);
```

### useEffect

```jsx
// ✅ CORRECTO: Sin dependencias (solo al montar)
useEffect(() => {
  console.log('Componente montado');
}, []);

// ✅ CORRECTO: Con dependencias
useEffect(() => {
  document.title = `Contador: ${contador}`;
}, [contador]);

// ✅ CORRECTO: Cleanup
useEffect(() => {
  const subscription = subscribe();
  
  return () => {
    subscription.unsubscribe();
  };
}, []);

// ❌ INCORRECTO: Sin array de dependencias
useEffect(() => {
  console.log('Se ejecuta en cada render');
}); // Evitar
```

### Custom Hooks

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

## 3. Estado

### Estado Local vs Global

```jsx
// ✅ CORRECTO: Estado local cuando sea posible
function Componente() {
  const [contador, setContador] = useState(0);
  // Solo se usa en este componente
}

// ✅ CORRECTO: Context para estado global
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [tema, setTema] = useState('claro');
  
  return (
    <ThemeContext.Provider value={{ tema, setTema }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ❌ INCORRECTO: Context para todo
const TodoContext = createContext();
const UserContext = createContext();
const ThemeContext = createContext();
// ... demasiados contexts
```

### useReducer para Estado Complejo

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
    </div>
  );
}
```

## 4. Performance

### React.memo

```jsx
// ✅ CORRECTO: React.memo para componentes puros
const UsuarioItem = React.memo(({ usuario }) => {
  console.log('Renderizando:', usuario.nombre);
  return (
    <div>
      <h3>{usuario.nombre}</h3>
    </div>
  );
});

// Se re-renderiza solo cuando usuario cambie
```

### useMemo

```jsx
// ✅ CORRECTO: useMemo para cálculos costosos
const usuariosFiltrados = useMemo(() => {
  console.log('Filtrando usuarios...');
  return usuarios.filter(u => u.activo);
}, [usuarios]);

// ✅ CORRECTO: useMemo para objetos/arrays
const config = useMemo(() => ({
  tema: 'claro',
  idioma: 'es'
}), []); // Solo se crea una vez
```

### useCallback

```jsx
// ✅ CORRECTO: useCallback para funciones en props
const manejarClick = useCallback((id) => {
  console.log('Click:', id);
}, []); // Dependencias vacías = función estable

return (
  <UsuarioItem usuario={usuario} onClick={manejarClick} />
);
```

### Code Splitting

```jsx
// ✅ CORRECTO: React.lazy
const ComponentePesado = React.lazy(() => import('./ComponentePesado'));

function App() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ComponentePesado />
    </Suspense>
  );
}
```

## 5. Formularios

### Controlled Components

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
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

### React Hook Form (Recomendado)

```jsx
// ✅ CORRECTO: React Hook Form
import { useForm } from 'react-hook-form';

function Formulario() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('nombre', { required: 'Nombre requerido' })}
      />
      {errors.nombre && <span>{errors.nombre.message}</span>}
      
      <button type="submit">Enviar</button>
    </form>
  );
}
```

## 6. Accesibilidad

```jsx
// ✅ CORRECTO: Elementos semánticos
function Boton({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

// ✅ CORRECTO: ARIA labels
function BotonIcono({ onClick, icono }) {
  return (
    <button onClick={onClick} aria-label="Cerrar modal">
      {icono}
    </button>
  );
}

// ✅ CORRECTO: Focus management
function Modal({ abierto, onClose }) {
  useEffect(() => {
    if (abierto) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      focusableElements[0]?.focus();
    }
  }, [abierto]);
}
```

## 7. Server Components (React 19+)

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

## 8. Error Handling

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

## 9. Testing

```jsx
// ✅ CORRECTO: Test de componente
import { render, screen, fireEvent } from '@testing-library/react';

test('renderiza usuario', () => {
  render(<Usuario nombre="Juan" edad={25} />);
  
  expect(screen.getByText('Juan')).toBeInTheDocument();
  expect(screen.getByText('Edad: 25')).toBeInTheDocument();
});

// ✅ CORRECTO: Test de interacción
test('maneja click', () => {
  const manejarClick = jest.fn();
  render(<Boton onClick={manejarClick}>Click</Boton>);
  
  fireEvent.click(screen.getByText('Click'));
  
  expect(manejarClick).toHaveBeenCalledTimes(1);
});
```

## 10. Estructura de Proyecto

```
src/
├── components/
│   ├── common/
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   ├── Button.css
│   │   │   └── Button.test.jsx
│   │   └── Input/
│   ├── layout/
│   │   ├── Header/
│   │   └── Footer/
│   └── features/
│       ├── Usuarios/
│       │   ├── UsuarioList.jsx
│       │   ├── UsuarioItem.jsx
│       │   └── useUsuarios.js
├── hooks/
│   ├── useUsuarios.js
│   └── useFormulario.js
├── context/
│   └── ThemeContext.jsx
├── utils/
│   └── validaciones.js
├── pages/
│   ├── Home.jsx
│   └── About.jsx
└── App.jsx
```

## Resumen de Mejores Prácticas

### ✅ SIEMPRE:
1. Usar functional components
2. Usar hooks apropiadamente
3. Extraer lógica en custom hooks
4. Optimizar con React.memo, useMemo, useCallback
5. Usar composition sobre herencia
6. Manejar errores con error boundaries
7. Escribir tests
8. Seguir naming conventions (PascalCase)
9. Usar Context para estado global
10. Implementar accesibilidad

### ❌ NUNCA:
1. Usar class components
2. Mutar estado directamente
3. Usar hooks condicionalmente
4. Hacer props drilling excesivo
5. Optimizar prematuramente
6. Olvidar cleanup en useEffect
7. Usar index como key en listas
8. Ignorar accesibilidad
9. Crear componentes muy grandes
10. Mezclar lógica de negocio con UI