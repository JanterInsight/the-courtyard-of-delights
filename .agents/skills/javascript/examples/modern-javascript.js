// Modern JavaScript Examples
// Este archivo contiene ejemplos de JavaScript moderno (ES2025+)

// ============================================
// 1. Variables y Const
// ============================================

// ✅ CORRECTO: Usar const por defecto
const API_URL = 'https://api.example.com';
const config = {
  tema: 'claro',
  idioma: 'es',
  notificaciones: true
};

// ✅ CORRECTO: let solo cuando sea necesario reasignar
let contador = 0;
let indice = 0;

// ❌ NUNCA usar var
// var nombre = 'Juan'; // Evitar

// ============================================
// 2. Template Literals
// ============================================

const nombrePersona = 'Juan';
const edadPersona = 25;

// ✅ CORRECTO: Template literals
const mensaje = `Hola, soy ${nombrePersona} y tengo ${edadPersona} años`;
console.log(mensaje);

// ✅ CORRECTO: Template literals multilínea
const html = `
  <div class="card">
    <h2>${nombrePersona}</h2>
    <p>Edad: ${edadPersona} años</p>
  </div>
`;

// ❌ INCORRECTO: Concatenación
// const mensaje = 'Hola, soy ' + nombre + ' y tengo ' + edad + ' años';

// ============================================
// 3. Destructuring
// ============================================

// Objetos
const usuarioEjemplo = {
  nombre: 'Juan',
  edad: 25,
  ciudad: 'Madrid',
  email: 'juan@example.com'
};

// ✅ CORRECTO: Destructuring de objetos
const { nombre, edad, ciudad } = usuarioEjemplo;
console.log(nombre); // 'Juan'
console.log(edad); // 25

// ✅ CORRECTO: Con defaults
const { nombre: nombreUsuario, edad: edadUsuario = 0 } = usuarioEjemplo;

// Arrays
const numeros = [1, 2, 3, 4, 5];

// ✅ CORRECTO: Destructuring de arrays
const [primero, segundo, ...resto] = numeros;
console.log(primero); // 1
console.log(resto); // [3, 4, 5]

// ✅ CORRECTO: Swap de variables (usando let para permitir reasignación)
let [a, b] = [1, 2];
[a, b] = [b, a];
console.log(a, b); // 2 1

// ============================================
// 4. Spread Operator
// ============================================

// Objetos
const usuarioBase = { nombre: 'Juan', edad: 25 };
const usuarioActualizado = { ...usuarioBase, edad: 26 };
const usuarioConEmail = { ...usuarioBase, email: 'juan@example.com' };

// Arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinado = [...array1, ...array2];

// En funciones
const max = Math.max(...numeros);

// ============================================
// 5. Arrow Functions
// ============================================

// ✅ CORRECTO: Funciones cortas
const sumar = (a, b) => a + b;
const duplicar = x => x * 2;
const saludar = () => console.log('Hola');

// ✅ CORRECTO: En callbacks
const pares = numeros.filter(n => n % 2 === 0);
const cuadrados = numeros.map(n => n * n);

// ✅ CORRECTO: En promesas
fetch('/api/usuarios')
  .then(response => response.json())
  .then(usuarios => console.log(usuarios));

// ❌ INCORRECTO: Arrow function cuando necesitas 'this'
// const persona = {
//   nombre: 'Juan',
//   saludar: function() {
//     setTimeout(() => {
//       console.log(this.nombre); // this es window, no persona
//     }, 1000);
//   }
// };

// ============================================
// 6. Optional Chaining y Nullish Coalescing
// ============================================

const usuarioParcial = {
  nombre: 'Juan',
  direccion: {
    ciudad: 'Madrid'
  }
};

// ✅ CORRECTO: Optional chaining
const ciudadUsuario = usuarioParcial?.direccion?.ciudad; // 'Madrid'
const pais = usuarioParcial?.direccion?.pais; // undefined (no error)

// ✅ CORRECTO: Nullish coalescing
const email = usuarioParcial?.email ?? 'sin-email@example.com';
const telefono = usuarioParcial?.telefono ?? null;

// ❌ INCORRECTO
// const ciudad = usuario && usuario.direccion && usuario.direccion.ciudad;
// const email = usuario.email || 'sin-email@example.com'; // Problema si email es ''

// ============================================
// 7. Async/Await
// ============================================

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
    console.error('Error:', error);
    throw error;
  }
}

// ✅ CORRECTO: Múltiples llamadas en paralelo
async function cargarDatos() {
  try {
    const [usuarios, posts] = await Promise.all([
      fetch('/api/usuarios').then(r => r.json()),
      fetch('/api/posts').then(r => r.json())
    ]);
    
    return { usuarios, posts };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// ❌ INCORRECTO: Callback hell
// fetch('/api/usuarios/1')
//   .then(response => response.json())
//   .then(usuario => {
//     fetch(`/api/posts/${usuario.id}`)
//       .then(response => response.json())
//       .then(posts => {
//         // ...
//       });
//   });

// ============================================
// 8. Arrays Modernos
// ============================================

const usuarios = [
  { id: 1, nombre: 'Juan', edad: 25, activo: true },
  { id: 2, nombre: 'Pedro', edad: 30, activo: false },
  { id: 3, nombre: 'María', edad: 28, activo: true }
];

// ✅ CORRECTO: map para transformar
const nombres = usuarios.map(u => u.nombre);
console.log(nombres); // ['Juan', 'Pedro', 'María']

// ✅ CORRECTO: filter para filtrar
const activos = usuarios.filter(u => u.activo);
console.log(activos); // [{ id: 1, ... }, { id: 3, ... }]

// ✅ CORRECTO: reduce para agregar
const totalEdad = usuarios.reduce((sum, u) => sum + u.edad, 0);
console.log(totalEdad); // 83

// ✅ CORRECTO: find para buscar
const usuario = usuarios.find(u => u.id === 1);
console.log(usuario); // { id: 1, nombre: 'Juan', ... }

// ✅ CORRECTO: some/every para verificar
const hayMenores = usuarios.some(u => u.edad < 18);
const todosActivos = usuarios.every(u => u.activo);

// ✅ CORRECTO: flatMap para transformar y aplanar
const posts = [
  { titulo: 'Post 1', tags: ['javascript', 'web'] },
  { titulo: 'Post 2', tags: ['css', 'design'] }
];
const todosLosTags = posts.flatMap(post => post.tags);
console.log(todosLosTags); // ['javascript', 'web', 'css', 'design']

// ❌ INCORRECTO: for loop
// const nombres = [];
// for (let i = 0; i < usuarios.length; i++) {
//   nombres.push(usuarios[i].nombre);
// }

// ============================================
// 9. Objetos Modernos
// ============================================

const usuarioObj = { nombre: 'Juan', edad: 25, ciudad: 'Madrid' };

// ✅ CORRECTO: Object.keys, values, entries
const keys = Object.keys(usuarioObj); // ['nombre', 'edad', 'ciudad']
const values = Object.values(usuarioObj); // ['Juan', 25, 'Madrid']
const entries = Object.entries(usuarioObj); // [['nombre', 'Juan'], ...]

// ✅ CORRECTO: Object.fromEntries
const entriesArray = [['nombre', 'Juan'], ['edad', 25]];
const nuevoUsuario = Object.fromEntries(entriesArray);

// ✅ CORRECTO: Spread operator para merge
const defaults = { tema: 'claro', idioma: 'es' };
const preferencias = { tema: 'oscuro' };
const configFinal = { ...defaults, ...preferencias };
console.log(configFinal); // { tema: 'oscuro', idioma: 'es' }

// ============================================
// 10. Módulos ES6+
// ============================================

// ✅ CORRECTO: Named exports
// En utils.js:
// export function sumar(a, b) {
//   return a + b;
// }
// export const PI = 3.14159;

// ✅ CORRECTO: Imports
// import { sumar, PI } from './utils.js';

// ✅ CORRECTO: Renombrar imports
// import { sumar as add } from './utils.js';

// ✅ CORRECTO: Dynamic imports
async function cargarModulo() {
  const modulo = await import('./modulo-dinamico.js');
  modulo.hacerAlgo();
}

// ============================================
// 11. Manejo de Errores
// ============================================

// ✅ CORRECTO: Custom errors
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

function validarEmailConError(email) {
  if (!email.includes('@')) {
    throw new ValidationError('Email inválido', 'email');
  }
}

// ✅ CORRECTO: Try/Catch
try {
  validarEmailConError('invalido');
} catch (error) {
  if (error instanceof ValidationError) {
    console.error('Error de validación:', error.field, error.message);
  } else {
    console.error('Error:', error);
  }
}

// ❌ INCORRECTO: Catch vacío
// try {
//   hacerAlgo();
// } catch (error) {
//   // Vacío
// }

// ============================================
// 12. Event Listeners
// ============================================

// ✅ CORRECTO: addEventListener
const button = document.querySelector('.button');
button.addEventListener('click', manejarClick);

// ✅ CORRECTO: Remover event listeners
const handler = () => console.log('click');
button.addEventListener('click', handler);
// Más tarde...
// button.removeEventListener('click', handler);

// ✅ CORRECTO: Event delegation
document.querySelector('.lista').addEventListener('click', (e) => {
  if (e.target.matches('.item')) {
    console.log('Item clickeado:', e.target.textContent);
  }
});

// ✅ CORRECTO: Una vez
button.addEventListener('click', manejarClick, { once: true });

// ❌ INCORRECTO: onclick inline
// <button onclick="manejarClick()">Click</button>

// ============================================
// 13. Manipulación del DOM
// ============================================

// ✅ CORRECTO: querySelector
const formulario = document.querySelector('#formulario');
const primerItem = document.querySelector('.lista .item');

// ✅ CORRECTO: textContent para texto seguro
const elemento = document.querySelector('.contenido');
elemento.textContent = 'Hola mundo';

// ✅ CORRECTO: createElement para crear elementos
const div = document.createElement('div');
div.textContent = 'Nuevo elemento';
div.className = 'nuevo-elemento';
elemento.appendChild(div);

// ❌ INCORRECTO: innerHTML con contenido no confiable
// const usuarioInput = '<script>alert("XSS")</script>';
// element.innerHTML = usuarioInput; // XSS vulnerability

// ============================================
// 14. Performance
// ============================================

// ✅ CORRECTO: Event delegation para listas
document.querySelector('.lista').addEventListener('click', (e) => {
  if (e.target.matches('.item')) {
    const id = e.target.dataset.id;
    console.log('Item clickeado:', id);
  }
});

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

const input = document.querySelector('#busqueda');
input.addEventListener('input', (e) => {
  buscar(e.target.value);
});

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

// ============================================
// 15. LocalStorage
// ============================================

// ✅ CORRECTO: Guardar datos
const usuarioParaGuardar = { nombre: 'Juan', edad: 25 };
localStorage.setItem('usuario', JSON.stringify(usuarioParaGuardar));

// ✅ CORRECTO: Leer datos
const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));

// ✅ CORRECTO: Remover datos
localStorage.removeItem('usuario');

// ✅ CORRECTO: Limpiar todo
// localStorage.clear();

// ============================================
// 16. Fetch API
// ============================================

// ✅ CORRECTO: GET request
async function obtenerDatos(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// ✅ CORRECTO: POST request
async function enviarDatos(url, datos) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// ============================================
// 17. Clases Modernas
// ============================================

class Usuario {
  // Private field
  #password;
  
  constructor(nombre, email, password) {
    this.nombre = nombre;
    this.email = email;
    this.#password = password;
  }
  
  // Getter
  get nombreCompleto() {
    return this.nombre;
  }
  
  // Setter
  set email(nuevoEmail) {
    if (nuevoEmail.includes('@')) {
      this._email = nuevoEmail;
    }
  }
  
  // Método público
  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
  
  // Método privado
  #validarPassword() {
    return this.#password.length >= 8;
  }
  
  // Método público que usa método privado
  validar() {
    return this.#validarPassword();
  }
  
  // Static method
  static crearDesdeObjeto(datos) {
    return new Usuario(datos.nombre, datos.email, datos.password);
  }
}

// Uso
const usuario1 = new Usuario('Juan', 'juan@example.com', 'password123');
console.log(usuario1.saludar()); // 'Hola, soy Juan'

const usuario2 = Usuario.crearDesdeObjeto({
  nombre: 'María',
  email: 'maria@example.com',
  password: 'password456'
});

// ============================================
// 18. Patrones de Diseño
// ============================================

// Module Pattern
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
// const usuarios = await UsuarioService.obtenerTodos();

// ============================================
// 19. Validaciones
// ============================================

// ✅ CORRECTO: Validar email
const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// ✅ CORRECTO: Validar edad
const validarEdad = (edad) => {
  const num = Number(edad);
  return Number.isInteger(num) && num >= 0 && num <= 120;
};

// ✅ CORRECTO: Validar required
const validarRequired = (valor) => {
  return valor !== null && valor !== undefined && valor.trim() !== '';
};

// ============================================
// 20. Utilidades
// ============================================

// ✅ CORRECTO: Generar ID único
const generarId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// ✅ CORRECTO: Formatear fecha
const formatearFecha = (fecha) => {
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(fecha));
};

// ✅ CORRECTO: Debounce
function debounce(func, delay) {
  let timeoutId;
  
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// ✅ CORRECTO: Throttle
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

// ✅ CORRECTO: Memoize
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

console.log('Ejemplos de JavaScript moderno cargados correctamente');