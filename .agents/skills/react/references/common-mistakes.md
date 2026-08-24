# React Development - Common Mistakes

## 1. Errores de Componentes

### ❌ Class Components

**Problema:**
```jsx
// ❌ INCORRECTO
class Usuario extends React.Component {
  render() {
    return <div>{this.props.nombre}</div>;
  }
}
```

**Solución:**
```jsx
// ✅ CORRECTO
function Usuario({ nombre }) {
  return <div>{nombre}</div>;
}
```

**Impacto:** Código más verboso, no aprovecha hooks, obsoleto en React 19+.

---

### ❌ Mutar Estado

**Problema:**
```jsx
// ❌ INCORRECTO
const [usuario, setUsuario] = useState({ nombre: 'Juan' });
usuario.nombre = 'Pedro'; // Mutación directa
setUsuario(usuario);
```

**Solución:**
```jsx
// ✅ CORRECTO
const [usuario, setUsuario] = useState({ nombre: 'Juan' });
setUsuario({ ...usuario, nombre: 'Pedro' });
```

**Impacto:** React no detecta cambios, no hay re-render.

---

## 2. Errores de Hooks

### ❌ Hooks Condicionales

**Problema:**
```jsx
// ❌ INCORRECTO
if (condicion) {
  useEffect(() => {
    // ...
  });
}
```

**Solución:**
```jsx
// ✅ CORRECTO
useEffect(() => {
  if (condicion) {
    // ...
  }
}, [condicion]);
```

**Impacto:** Error en tiempo de ejecución.

---

### ❌ Dependencias Incompletas en useEffect

**Problema:**
```jsx
// ❌ INCORRECTO
useEffect(() => {
  console.log(usuario.nombre);
}, []); // Falta usuario en dependencias
```

**Solución:**
```jsx
// ✅ CORRECTO
useEffect(() => {
  console.log(usuario.nombre);
}, [usuario.nombre]);
```

**Impacto:** Stale closures, bugs difíciles de detectar.

---

### ❌ useEffect sin Array de Dependencias

**Problema:**
```jsx
// ❌ INCORRECTO
useEffect(() => {
  console.log('Cada render');
}); // Se ejecuta infinitamente
```

**Solución:**
```jsx
// ✅ CORRECTO
useEffect(() => {
  console.log('Solo al montar');
}, []);
```

**Impacto:** Performance pobre, bucles infinitos.

---

## 3. Errores de Estado

### ❌ Props Drilling

**Problema:**
```jsx
// ❌ INCORRECTO
<A usuario={usuario} />
<B usuario={usuario} />
<C usuario={usuario} />
<D usuario={usuario} />
```

**Solución:**
```jsx
// ✅ CORRECTO
<UsuarioProvider>
  <A />
  <B />
  <C />
  <D />
</UsuarioProvider>
```

**Impacto:** Código difícil de mantener.

---

### ❌ Estado Derivado

**Problema:**
```jsx
// ❌ INCORRECTO
const [usuarios, setUsuarios] = useState([]);
const [usuariosActivos, setUsuariosActivos] = useState([]);

useEffect(() => {
  setUsuariosActivos(usuarios.filter(u => u.activo));
}, [usuarios]);
```

**Solución:**
```jsx
// ✅ CORRECTO
const [usuarios, setUsuarios] = useState([]);
const usuariosActivos = usuarios.filter(u => u.activo);
```

**Impacto:** Estado duplicado, sincronización innecesaria.

---

## 4. Errores de Performance

### ❌ Falta de Keys en Listas

**Problema:**
```jsx
// ❌ INCORRECTO
{usuarios.map(usuario => (
  <UsuarioItem key={usuario.id} usuario={usuario} />
))}
```

**Solución:**
```jsx
// ✅ CORRECTO
{usuarios.map(usuario => (
  <UsuarioItem key={usuario.id} usuario={usuario} />
))}
```

**Impacto:** Re-renders innecesarios, warnings en consola.

---

### ❌ Objetos/Arrays Inline en Props

**Problema:**
```jsx
// ❌ INCORRECTO
<UsuarioItem 
  usuario={{ nombre: 'Juan' }} // Nuevo objeto cada render
  onClick={() => {}} // Nueva función cada render
/>
```

**Solución:**
```jsx
// ✅ CORRECTO
const usuario = useMemo(() => ({ nombre: 'Juan' }), []);
const manejarClick = useCallback(() => {}, []);

<UsuarioItem usuario={usuario} onClick={manejarClick} />
```

**Impacto:** Re-renders innecesarios.

---

## 5. Errores de Formularios

### ❌ Controlled Components sin Validación

**Problema:**
```jsx
// ❌ INCORRECTO
function Formulario() {
  const [email, setEmail] = useState('');
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      // Enviar sin validar
    }}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
    </form>
  );
}
```

**Solución:**
```jsx
// ✅ CORRECTO
function Formulario() {
  const [email, setEmail] = useState('');
  
  const validarEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  const manejarSubmit = (e) => {
    e.preventDefault();
    if (!validarEmail(email)) {
      alert('Email inválido');
      return;
    }
    // Enviar
  };
  
  return (
    <form onSubmit={manejarSubmit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
    </form>
  );
}
```

**Impacto:** Datos inválidos, mala UX.

---

## 6. Errores de Accesibilidad

### ❌ Divs como Botones

**Problema:**
```jsx
// ❌ INCORRECTO
<div onClick={manejarClick}>Click</div>
```

**Solución:**
```jsx
// ✅ CORRECTO
<button onClick={manejarClick}>Click</button>
```

**Impacto:** No accesible por teclado.

---

### ❌ Sin ARIA Labels

**Problema:**
```jsx
// ❌ INCORRECTO
<button onClick={onClose}>
  <IconoCerrar />
</button>
```

**Solución:**
```jsx
// ✅ CORRECTO
<button onClick={onClose} aria-label="Cerrar">
  <IconoCerrar />
</button>
```

**Impacto:** Screen readers no pueden leer el botón.

---

## 7. Errores de Server Components

### ❌ Usar Hooks en Server Components

**Problema:**
```jsx
// ❌ INCORRECTO
async function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]); // Error
  // ...
}
```

**Solución:**
```jsx
// ✅ CORRECTO
async function ListaUsuarios() {
  const usuarios = await fetch('/api/usuarios').then(r => r.json());
  return <ul>{/* ... */}</ul>;
}
```

**Impacto:** Error en tiempo de ejecución.

---

## 8. Checklist de Errores Comunes

### Antes de entregar código React, verificar:

**Componentes:**
- [ ] ¿Usa functional components?
- [ ] ¿Tiene keys en listas?
- [ ] ¿Evita props drilling?
- [ ] ¿Nombres en PascalCase?

**Hooks:**
- [ ] ¿No usa hooks condicionalmente?
- [ ] ¿Tiene dependencies arrays correctos?
- [ ] ¿Limpia efectos?
- [ ] ¿Extrae lógica en custom hooks?

**Estado:**
- [ ] ¿No muta estado?
- [ ] ¿No tiene estado derivado?
- [ ] ¿Usa Context apropiadamente?
- [ ] ¿Estado local cuando sea posible?

**Performance:**
- [ ] ¿Usa React.memo cuando corresponda?
- [ ] ¿Evita objetos/arrays inline en props?
- [ ] ¿Implementa code splitting?
- [ ] ¿No optimiza prematuramente?

**Accesibilidad:**
- [ ] ¿Usa elementos semánticos?
- [ ] ¿Tiene ARIA labels?
- [ ] ¿Es navegable por teclado?
- [ ] ¿Tiene focus indicators?

---

## Resumen

Los errores más comunes en React son:
1. **Class components** - En lugar de functional components
2. **Mutación de estado** - Modificar estado directamente
3. **Hooks condicionales** - Usar hooks en if/loops
4. **Dependencias incorrectas** - Arrays de dependencias incompletos
5. **Props drilling** - Pasar props por muchos niveles
6. **Falta de keys** - No usar keys en listas
7. **Objetos inline** - Crear objetos/funciones en render
8. **Sin validación** - Formularios sin validar
9. **Inaccesibilidad** - Divs como botones, sin ARIA
10. **Server Components** - Usar hooks en server components

**Regla de oro:** React moderno usa functional components, hooks apropiadamente, y siempre piensa en accesibilidad y performance.