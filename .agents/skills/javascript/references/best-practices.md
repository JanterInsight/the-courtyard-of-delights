# Modern JavaScript Development - Best Practices

## 1. Variables y Scope

### Uso de const y let

**✅ SIEMPRE usar const por defecto:**
```javascript
// ✅ CORRECTO
const API_URL = 'https://api.example.com';
const config = { tema: 'claro', idioma: 'es' };
const usuarios = [];

// ✅ CORRECTO: let solo cuando sea necesario reasignar
let contador = 0;
let indice = 0;

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// ❌ NUNCA usar var
var nombre = 'Juan'; // Evitar
```

**Regla:** Si no estás seguro, usa const. Solo cambia a let si necesitas reasignar la variable.

### Nombres descriptivos

```javascript
// ✅ CORRECTO
const diasTranscurridos = 7;
const usuarioActivo = true;
const obtenerUsuarioPorId = (id) => { };

// ❌ INCORRECTO
const d = 7;
const u = true;
const f = (id) => { };
```

## 2. Funciones

### Funciones pequeñas y específicas

```javascript
// ✅ CORRECTO: Función pequeña y específica
const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const formatearFecha = (fecha) => {
  return new Intl.DateTimeFormat('es-ES').format(fecha);
};

// ❌ INCORRECTO: Función que hace demasiado
const procesarDatos = (datos) => {
  // Validar
  // Transformar
  // Guardar en BD
  // Enviar email
  // Generar reporte
  // ... 100 líneas después
};
```

### Funciones puras

```javascript
// ✅ CORRECTO: Función pura
const sumar = (a, b) => a + b;
const duplicar = x => x * 2;

// ❌ INCORRECTO: Función impura (depende de estado externo)
let contador = 0;
const incrementar = () => contador++;
```

### Parámetros con valores por defecto

```javascript
// ✅ CORRECTO
const crearUsuario = (nombre, email, rol = 'usuario', activo = true) => {
  return { nombre, email, rol, activo };
};

// ✅ CORRECTO: Destructuring con defaults
const configurarOpciones = ({ tema = 'claro', idioma = 'es', notificaciones = true } = {}) => {
  return { tema, idioma, notificaciones };
};

// ❌ INCORRECTO
const crearUsuario = (nombre, email, rol, activo) => {
  rol = rol || 'usuario';
  activo = activo !== undefined ? activo : true;
  // ...
};
```

## 3. Asincronía

### Async/Await

```javascript
// ✅ CORRECTO: Async/Await con try/catch
async function obtenerUsuario(id) {
  try {
    const response = await fetch(`/api/usuarios/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const usuario = await response.json();
    return usuario;
  } catch (error) {
    console.error('Error al obtener usuario:', error);
    throw error;
  }
}

// ✅ CORRECTO: Múltiples llamadas en paralelo
async function cargarDatos() {
  try {
    const [usuarios, posts, comentarios] = await Promise.all([
      fetch('/api/usuarios').then(r => r.json()),
      fetch('/api/posts').then(r => r.json()),
      fetch('/api/comentarios').then(r => r.json())
    ]);
    
    return { usuarios, posts, comentarios };
  } catch (error) {
    console.error('Error al cargar datos:', error);
    throw error;
  }
}

// ❌ INCORRECTO: Sin try/catch
async function obtenerUsuario(id) {
  const response = await fetch(`/api/usuarios/${id}`);
  return response.json(); // ¿Qué pasa si falla?
}
```

### Promise.allSettled para múltiples promesas

```javascript
// ✅ CORRECTO: Promise.allSettled cuando no quieres que falle todo
async function cargarMultiplesRecursos() {
  const resultados = await Promise.allSettled([
    fetch('/api/recurso1').then(r => r.json()),
    fetch('/api/recurso2').then(r => r.json()),
    fetch('/api/recurso3').then(r => r.json())
  ]);
  
  const exitosos = resultados
    .filter(r => r.status === 'fulfilled')
    .map(r => r.value);
  
  const fallidos = resultados
    .filter(r => r.status === 'rejected')
    .map(r => r.reason);
  
  return { exitosos, fallidos };
}
```

### AbortController para timeouts

```javascript
// ✅ CORRECTO: Timeout con AbortController
async function fetchConTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    
    if (error.name === 'AbortError') {
      throw new Error('Timeout: La solicitud tardó demasiado');
    }
    
    throw error;
  }
}
```

## 4. Arrays y Objetos

### Métodos de array

```javascript
// ✅ CORRECTO: map para transformar
const nombres = usuarios.map(u => u.nombre);

// ✅ CORRECTO: filter para filtrar
const usuariosActivos = usuarios.filter(u => u.activo);

// ✅ CORRECTO: reduce para agregar
const totalEdad = usuarios.reduce((sum, u) => sum + u.edad, 0);

// ✅ CORRECTO: find para buscar
const usuario = usuarios.find(u => u.id === 1);

// ✅ CORRECTO: some/every para verificar
const hayMenores = usuarios.some(u => u.edad < 18);
const todosActivos = usuarios.every(u => u.activo);

// ✅ CORRECTO: flatMap para transformar y aplanar
const todosLosTags = posts.flatMap(post => post.tags);

// ✅ CORRECTO: sort (creando copia)
const usuariosOrdenados = [...usuarios].sort((a, b) => a.nombre.localeCompare(b.nombre));

// ❌ INCORRECTO: for loop
const nombres = [];
for (let i = 0; i < usuarios.length; i++) {
  nombres.push(usuarios[i].nombre);
}
```

### Destructuring

```javascript
// ✅ CORRECTO: Destructuring de objetos
const { nombre, edad, ciudad } = usuario;

// ✅ CORRECTO: Con defaults
const { nombre, edad = 0, ciudad = 'Desconocida' } = usuario;

// ✅ CORRECTO: Renombrar
const { nombre: nombreUsuario, edad: edadUsuario } = usuario;

// ✅ CORRECTO: Destructuring de arrays
const [primero, segundo, ...resto] = numeros;

// ✅ CORRECTO: En parámetros de función
const saludar = ({ nombre, edad }) => {
  console.log(`Hola ${nombre}, tienes ${edad} años`);
};

// ✅ CORRECTO: Swap de variables
[primero, segundo] = [segundo, primero];
```

### Spread operator

```javascript
// ✅ CORRECTO: Copiar objetos
const usuarioCopia = { ...usuario };

// ✅ CORRECTO: Merge de objetos
const usuarioActualizado = { ...usuario, edad: 26 };

// ✅ CORRECTO: Copiar arrays
const arrayCopia = [...array];

// ✅ CORRECTO: Concatenar arrays
const nuevoArray = [...array1, ...array2];

// ✅ CORRECTO: En funciones
const max = Math.max(...numeros);
```

### Optional chaining y nullish coalescing

```javascript
// ✅ CORRECTO: Optional chaining
const ciudad = usuario?.direccion?.ciudad;
const primerItem = array?.[0];
const metodo = objeto?.metodo?.();

// ✅ CORRECTO: Nullish coalescing
const email = usuario?.email ?? 'sin-email@example.com';
const telefono = usuario?.telefono ?? null;

// ❌ INCORRECTO
const ciudad = usuario && usuario.direccion && usuario.direccion.ciudad;
const email = usuario?.email || 'sin-email@example.com'; // Problema si email es ''
```

## 5. Manipulación del DOM

### Selección de elementos

```javascript
// ✅ CORRECTO: querySelector
const boton = document.querySelector('.boton');
const formulario = document.querySelector('#formulario');
const primerItem = document.querySelector('.lista .item');

// ✅ CORRECTO: querySelectorAll (retorna NodeList)
const items = document.querySelectorAll('.item');

// ✅ CORRECTO: getElementById (más rápido para IDs)
const formulario = document.getElementById('formulario');

// ❌ INCORRECTO: getElementsByClassName (retorna HTMLCollection vivo)
const items = document.getElementsByClassName('item');
```

### Modificación de contenido

```javascript
// ✅ CORRECTO: textContent para texto
element.textContent = 'Hola mundo';

// ✅ CORRECTO: innerHTML solo cuando sea necesario y seguro
element.innerHTML = '<p>Contenido seguro</p>';

// ✅ CORRECTO: createElement para crear elementos
const div = document.createElement('div');
div.textContent = 'Nuevo elemento';
element.appendChild(div);

// ❌ INCORRECTO: innerHTML con contenido no confiable
element.innerHTML = usuarioInput; // XSS vulnerability
```

### Event Listeners

```javascript
// ✅ CORRECTO: addEventListener
button.addEventListener('click', manejarClick);

// ✅ CORRECTO: Remover event listeners
const handler = () => console.log('click');
button.addEventListener('click', handler);
// Más tarde...
button.removeEventListener('click', handler);

// ✅ CORRECTO: Event delegation
document.querySelector('.lista').addEventListener('click', (e) => {
  if (e.target.matches('.item')) {
    console.log('Item clickeado:', e.target.textContent);
  }
});

// ✅ CORRECTO: Una vez
button.addEventListener('click', manejarClick, { once: true });

// ❌ INCORRECTO: onclick inline
<button onclick="manejarClick()">Click</button>
```

## 6. Manejo de Errores

### Try/Catch

```javascript
// ✅ CORRECTO: Try/Catch en código síncrono
try {
  const usuario = JSON.parse(datos);
  console.log(usuario);
} catch (error) {
  console.error('Error al parsear JSON:', error);
  mostrarError('Datos inválidos');
}

// ✅ CORRECTO: Try/Catch en async/await
async function cargarDatos() {
  try {
    const response = await fetch('/api/datos');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// ✅ CORRECTO: Custom errors
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

// ❌ INCORRECTO: Catch vacío
try {
  hacerAlgo();
} catch (error) {
  // Vacío - ignora el error
}
```

### Propagación de errores

```javascript
// ✅ CORRECTO: Propagar errores cuando sea necesario
async function obtenerUsuario(id) {
  try {
    const response = await fetch(`/api/usuarios/${id}`);
    if (!response.ok) {
      throw new Error('Usuario no encontrado');
    }
    return await response.json();
  } catch (error) {
    console.error('Error en obtenerUsuario:', error);
    throw error; // Propagar para que el caller lo maneje
  }
}

// ✅ CORRECTO: Manejar en el caller
async function cargarPerfil(id) {
  try {
    const usuario = await obtenerUsuario(id);
    // Continuar con lógica
    return usuario;
  } catch (error) {
    // Manejar error específico de esta función
    mostrarError('No se pudo cargar el perfil');
  }
}
```

## 7. Módulos ES6+

### Imports y Exports

```javascript
// ✅ CORRECTO: Named exports
// utils.js
export function sumar(a, b) {
  return a + b;
}

export const PI = 3.14159;

export default class Calculadora { }

// ✅ CORRECTO: Imports
import Calculadora, { sumar, PI } from './utils.js';

// ✅ CORRECTO: Renombrar
import { sumar as add } from './utils.js';

// ✅ CORRECTO: Importar todo
import * as Utils from './utils.js';

// ✅ CORRECTO: Dynamic imports
async function cargarModulo() {
  const modulo = await import('./modulo-dinamico.js');
  modulo.hacerAlgo();
}
```

### Organización de módulos

```
src/
├── utils/
│   ├── validaciones.js
│   ├── formateo.js
│   └── api.js
├── components/
│   ├── Botton.js
│   ├── Formulario.js
│   └── Tarjeta.js
├── services/
│   ├── usuario.service.js
│   └── posts.service.js
└── main.js
```

## 8. Performance

### Event Delegation

```javascript
// ✅ CORRECTO: Event delegation para listas
document.querySelector('.lista').addEventListener('click', (e) => {
  if (e.target.matches('.item')) {
    const id = e.target.dataset.id;
    console.log('Item clickeado:', id);
  }
});

// ❌ INCORRECTO: Event listener por cada item
items.forEach(item => {
  item.addEventListener('click', () => {
    console.log('Item clickeado');
  });
});
```

### Debouncing

```javascript
// ✅ CORRECTO: Debounce para búsquedas
function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

const buscar = debounce(async (termino) => {
  const response = await fetch(`/api/buscar?q=${termino}`);
  const resultados = await response.json();
  mostrarResultados(resultados);
}, 300);

input.addEventListener('input', (e) => {
  buscar(e.target.value);
});
```

### Throttling

```javascript
// ✅ CORRECTO: Throttle para scroll
function throttle(func, limit) {
  let inThrottle;
  
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

const manejarScroll = throttle(() => {
  console.log('Scroll position:', window.scrollY);
}, 100);

window.addEventListener('scroll', manejarScroll);
```

### Memoization

```javascript
// ✅ CORRECTO: Memoización para funciones costosas
function memoize(fn) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key);
    }
    
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const factorial = memoize((n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
});
```

## 9. Seguridad

### Prevenir XSS

```javascript
// ✅ CORRECTO: textContent
element.textContent = usuarioInput;

// ✅ CORRECTO: Crear elementos
const div = document.createElement('div');
div.textContent = usuarioInput;
element.appendChild(div);

// ❌ INCORRECTO: innerHTML con contenido no confiable
element.innerHTML = usuarioInput; // XSS vulnerability
```

### Validación de entrada

```javascript
// ✅ CORRECTO: Validar entrada de usuario
const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const validarEdad = (edad) => {
  const num = Number(edad);
  return Number.isInteger(num) && num >= 0 && num <= 120;
};

// ✅ CORRECTO: Sanitizar datos
const sanitizar = (str) => {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
};
```

## 10. Código Limpio

### Nombres descriptivos

```javascript
// ✅ CORRECTO
const diasTranscurridos = 7;
const usuarioActivo = true;
const obtenerUsuarioPorId = (id) => { };
const esEmailValido = (email) => { };

// ❌ INCORRECTO
const d = 7;
const u = true;
const f = (id) => { };
const check = (e) => { };
```

### Funciones pequeñas

```javascript
// ✅ CORRECTO: Funciones pequeñas y específicas
const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const mostrarError = (mensaje) => {
  const errorElement = document.querySelector('.error');
  errorElement.textContent = mensaje;
  errorElement.classList.add('visible');
};

const limpiarFormulario = () => {
  document.querySelector('form').reset();
};

// ❌ INCORRECTO: Función muy larga
const procesarFormulario = () => {
  // Validar
  // Transformar
  // Guardar
  // Mostrar mensaje
  // Limpiar
  // Redirigir
  // ... 50 líneas
};
```

### Comentarios apropiados

```javascript
// ✅ CORRECTO: Comentar el "por qué", no el "qué"
// Usamos debounce para evitar demasiadas llamadas a la API
const buscar = debounce((termino) => {
  // ...
}, 300);

// ✅ CORRECTO: Comentar código complejo
// Algoritmo de ordenamiento personalizado por fecha y prioridad
const ordenarTareas = (tareas) => {
  return tareas.sort((a, b) => {
    // Primero por prioridad (alta > media > baja)
    const prioridadA = { alta: 3, media: 2, baja: 1 }[a.prioridad];
    const prioridadB = { prioridad: 3, media: 2, baja: 1 }[b.prioridad];
    
    if (prioridadA !== prioridadB) {
      return prioridadB - prioridadA;
    }
    
    // Luego por fecha (más reciente primero)
    return new Date(b.fecha) - new Date(a.fecha);
  });
};

// ❌ INCORRECTO: Comentar lo obvio
// Incrementar contador en 1
contador++;

// Asignar nombre a usuario
usuario.nombre = 'Juan';
```

## 11. Patrones de Diseño

### Module Pattern

```javascript
// ✅ CORRECTO: Module pattern
const UsuarioService = (() => {
  // Privado
  const API_URL = '/api/usuarios';
  
  const obtenerTodos = async () => {
    const response = await fetch(API_URL);
    return response.json();
  };
  
  const obtenerPorId = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
  };
  
  // Público
  return {
    obtenerTodos,
    obtenerPorId
  };
})();

// Uso
const usuarios = await UsuarioService.obtenerTodos();
```

### Observer Pattern

```javascript
// ✅ CORRECTO: Observer pattern
class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }
  
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(listener => listener(data));
    }
  }
  
  off(event, listener) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(l => l !== listener);
    }
  }
}

// Uso
const emitter = new EventEmitter();

emitter.on('usuario:creado', (usuario) => {
  console.log('Usuario creado:', usuario);
});

emitter.emit('usuario:creado', { id: 1, nombre: 'Juan' });
```

## 12. Testing

### Funciones testeables

```javascript
// ✅ CORRECTO: Función pura (fácil de testear)
const sumar = (a, b) => a + b;
const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// ❌ INCORRECTO: Función impura (difícil de testear)
let contador = 0;
const incrementar = () => {
  contador++;
  console.log('Contador:', contador);
};
```

## Resumen de Mejores Prácticas

### ✅ SIEMPRE:
1. Usar const por defecto, let solo cuando sea necesario
2. Usar async/await en lugar de .then()
3. Usar métodos de array (map, filter, reduce)
4. Usar destructuring y spread operator
5. Usar optional chaining (?.)
6. Manejar errores con try/catch
7. Usar módulos ES6+
8. Usar event delegation para listas
9. Implementar debouncing/throttling cuando corresponda
10. Usar textContent en lugar de innerHTML

### ❌ NUNCA:
1. Usar var
2. Usar .then() sin catch
3. Ignorar errores
4. Usar innerHTML con contenido no confiable
5. Crear funciones muy largas
6. Usar for loops cuando se puede usar métodos de array
7. Mezclar concerns
8. Hardcodear valores
9. Crear código espagueti
10. Olvidar limpiar event listeners