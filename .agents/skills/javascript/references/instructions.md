# Modern JavaScript Development - Instructions

## Purpose

Este documento proporciona instrucciones detalladas para que el agente IA desarrolle JavaScript moderno (ES2025+), escribiendo código limpio, mantenible y eficiente siguiendo estándares profesionales.

## When to Activate

Activar esta skill cuando:
- El usuario solicite escribir código JavaScript
- Se necesite implementar lógica del lado del cliente
- Se deba manipular el DOM o manejar eventos
- Se requiera trabajar con APIs asíncronas
- Se necesite procesar o transformar datos
- Se deba implementar validaciones
- Se trabaje con módulos ES6+
- Se necesite manejar errores apropiadamente

## Core Rules

### 1. Variables: const y let (NUNCA var)

**Regla #1: Usar const por defecto, let solo cuando sea necesario**
```javascript
// ✅ CORRECTO
const nombre = 'Juan';
const edad = 25;
let contador = 0;

// ❌ INCORRECTO
var nombre = 'Juan';
var edad = 25;
```

**Regla #2: const no significa inmutable**
```javascript
// ✅ CORRECTO: const previene reasignación, no mutación
const usuario = { nombre: 'Juan', edad: 25 };
usuario.edad = 26; // OK - mutación del objeto
usuario.nombre = 'Pedro'; // OK

const array = [1, 2, 3];
array.push(4); // OK - mutación del array
array[0] = 10; // OK

// ❌ INCORRECTO: Reasignación de const
usuario = { nombre: 'Pedro' }; // Error
array = [4, 5, 6]; // Error
```

### 2. Template Literals

**Regla #3: Usar template literals en lugar de concatenación**
```javascript
// ✅ CORRECTO
const nombre = 'Juan';
const edad = 25;
const mensaje = `Hola, soy ${nombre} y tengo ${edad} años`;

const html = `
  <div class="card">
    <h2>${titulo}</h2>
    <p>${descripcion}</p>
  </div>
`;

// ❌ INCORRECTO
const mensaje = 'Hola, soy ' + nombre + ' y tengo ' + edad + ' años';
const html = '<div class="card"><h2>' + titulo + '</h2><p>' + descripcion + '</p></div>';
```

### 3. Destructuring

**Regla #4: Usar destructuring para extraer valores**
```javascript
// ✅ CORRECTO: Objetos
const usuario = { nombre: 'Juan', edad: 25, ciudad: 'Madrid' };
const { nombre, edad, ciudad } = usuario;
console.log(nombre); // 'Juan'

// ✅ CORRECTO: Arrays
const numeros = [1, 2, 3, 4, 5];
const [primero, segundo, ...resto] = numeros;
console.log(primero); // 1
console.log(resto); // [3, 4, 5]

// ✅ CORRECTO: En parámetros de función
function saludar({ nombre, edad }) {
  console.log(`Hola ${nombre}, tienes ${edad} años`);
}
saludar(usuario);

// ❌ INCORRECTO
const nombre = usuario.nombre;
const edad = usuario.edad;
const primero = numeros[0];
const segundo = numeros[1];
```

### 4. Spread Operator

**Regla #5: Usar spread para copiar y combinar**
```javascript
// ✅ CORRECTO: Objetos
const usuario = { nombre: 'Juan', edad: 25 };
const usuarioActualizado = { ...usuario, edad: 26 };
const usuarioConEmail = { ...usuario, email: 'juan@example.com' };

// ✅ CORRECTO: Arrays
const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];
const todosNumeros = [...numeros1, ...numeros2];

// ✅ CORRECTO: En funciones
const max = Math.max(...numeros);

// ❌ INCORRECTO
const usuarioActualizado = Object.assign({}, usuario, { edad: 26 });
const todosNumeros = numeros1.concat(numeros2);
```

### 5. Arrow Functions

**Regla #6: Usar arrow functions apropiadamente**
```javascript
// ✅ CORRECTO: Funciones cortas
const sumar = (a, b) => a + b;
const duplicar = x => x * 2;
const saludar = () => console.log('Hola');

// ✅ CORRECTO: En callbacks
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(n => n % 2 === 0);
const cuadrados = numeros.map(n => n * n);

// ✅ CORRECTO: En promesas
fetch('/api/usuarios')
  .then(response => response.json())
  .then(usuarios => console.log(usuarios));

// ❌ INCORRECTO: Arrow function cuando necesitas 'this'
const persona = {
  nombre: 'Juan',
  saludar: function() {
    // ✅ CORRECTO: function expression
    setTimeout(function() {
      console.log(this.nombre); // this funciona
    }, 1000);
  }
};

// ❌ INCORRECTO: Arrow function pierde 'this'
const persona = {
  nombre: 'Juan',
  saludar: function() {
    setTimeout(() => {
      console.log(this.nombre); // this es window, no persona
    }, 1000);
  }
};
```

### 6. Optional Chaining y Nullish Coalescing

**Regla #7: Usar optional chaining para evitar errores**
```javascript
// ✅ CORRECTO: Optional chaining
const usuario = { nombre: 'Juan', direccion: { ciudad: 'Madrid' } };
const ciudad = usuario?.direccion?.ciudad; // 'Madrid'
const pais = usuario?.direccion?.pais; // undefined (no error)

const usuarios = [{ nombre: 'Juan' }];
const primerUsuario = usuarios?.[0]?.nombre; // 'Juan'

// ✅ CORRECTO: Nullish coalescing
const valor = usuario?.email ?? 'sin-email@example.com';
const numero = usuario?.telefono ?? 123456789;

// ❌ INCORRECTO
const ciudad = usuario && usuario.direccion && usuario.direccion.ciudad;
const valor = usuario.email || 'sin-email@example.com'; // Problema si email es ''
```

### 7. Async/Await

**Regla #8: Usar async/await en lugar de .then()**
```javascript
// ✅ CORRECTO: Async/Await
async function obtenerUsuario(id) {
  try {
    const response = await fetch(`/api/usuarios/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener usuario');
    }
    const usuario = await response.json();
    return usuario;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// ✅ CORRECTO: Múltiples llamadas en paralelo
async function obtenerDatos() {
  const [usuarios, posts] = await Promise.all([
    fetch('/api/usuarios').then(r => r.json()),
    fetch('/api/posts').then(r => r.json())
  ]);
  return { usuarios, posts };
}

// ❌ INCORRECTO: Callback hell
fetch('/api/usuarios/1')
  .then(response => response.json())
  .then(usuario => {
    fetch(`/api/posts/${usuario.id}`)
      .then(response => response.json())
      .then(posts => {
        fetch(`/api/comentarios/${posts[0].id}`)
          .then(response => response.json())
          .then(comentarios => {
            // ...
          });
      });
  });
```

### 8. Manejo de Errores

**Regla #9: Siempre manejar errores en código asíncrono**
```javascript
// ✅ CORRECTO: Try/Catch con async/await
async function cargarDatos() {
  try {
    const response = await fetch('/api/datos');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cargar datos:', error);
    // Mostrar mensaje al usuario
    mostrarError('No se pudieron cargar los datos');
    throw error; // Re-lanzar si es necesario
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

function validarEmail(email) {
  if (!email.includes('@')) {
    throw new ValidationError('Email inválido', 'email');
  }
}

// ❌ INCORRECTO: Sin manejo de errores
async function cargarDatos() {
  const response = await fetch('/api/datos');
  const data = await response.json();
  return data; // ¿Qué pasa si falla?
}
```

### 9. Arrays Modernos

**Regla #10: Usar métodos de array apropiados**
```javascript
// ✅ CORRECTO: map para transformar
const nombres = usuarios.map(u => u.nombre);

// ✅ CORRECTO: filter para filtrar
const activos = usuarios.filter(u => u.activo);

// ✅ CORRECTO: reduce para agregar
const totalEdad = usuarios.reduce((sum, u) => sum + u.edad, 0);

// ✅ CORRECTO: find para buscar
const usuario = usuarios.find(u => u.id === 1);

// ✅ CORRECTO: some/every para verificar
const hayMenores = usuarios.some(u => u.edad < 18);
const todosActivos = usuarios.every(u => u.activo);

// ✅ CORRECTO: flatMap para transformar y aplanar
const todosLosTags = posts.flatMap(post => post.tags);

// ❌ INCORRECTO: for loop para lo que se puede hacer con métodos de array
for (let i = 0; i < usuarios.length; i++) {
  nombres.push(usuarios[i].nombre);
}
```

### 10. Objetos Modernos

**Regla #11: Usar métodos modernos de objetos**
```javascript
// ✅ CORRECTO: Object.keys, values, entries
const usuario = { nombre: 'Juan', edad: 25, ciudad: 'Madrid' };
const keys = Object.keys(usuario); // ['nombre', 'edad', 'ciudad']
const values = Object.values(usuario); // ['Juan', 25, 'Madrid']
const entries = Object.entries(usuario); // [['nombre', 'Juan'], ...]

// ✅ CORRECTO: Object.fromEntries
const entries = [['nombre', 'Juan'], ['edad', 25]];
const usuario = Object.fromEntries(entries);

// ✅ CORRECTO: Object.assign para merge
const defaults = { tema: 'claro', idioma: 'es' };
const preferencias = { tema: 'oscuro' };
const config = Object.assign({}, defaults, preferencias);

// ✅ CORRECTO: Spread operator (preferido)
const config = { ...defaults, ...preferencias };

// ❌ INCORRECTO: for in sin hasOwnProperty
for (let key in usuario) {
  console.log(key); // Puede incluir propiedades del prototype
}
```

### 11. Módulos ES6+

**Regla #12: Usar módulos ES6+ correctamente**
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

// ✅ CORRECTO: Renombrar imports
import { sumar as add } from './utils.js';

// ✅ CORRECTO: Importar todo
import * as Utils from './utils.js';

// ✅ CORRECTO: Dynamic imports
async function cargarModulo() {
  const modulo = await import('./modulo-dinamico.js');
  modulo.hacerAlgo();
}

// ❌ INCORRECTO: No usar módulos
// Todo en un archivo global
```

### 12. Event Listeners

**Regla #13: Usar event listeners apropiadamente**
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

// ❌ INCORRECTO: Múltiples addEventListener sin remover
button.addEventListener('click', handler1);
button.addEventListener('click', handler2);
// Memory leak si no se remueven
```

## Workflow

### Paso 1: Análisis
1. Identificar qué se necesita hacer
2. Determinar si requiere manipulación del DOM
3. Identificar si hay operaciones asíncronas
4. Planificar la estructura del código

### Paso 2: Implementación
1. Usar const por defecto, let solo cuando sea necesario
2. Implementar funciones puras cuando sea posible
3. Usar async/await para código asíncrono
4. Implementar manejo de errores
5. Usar módulos ES6+ para organizar código

### Paso 3: Manipulación del DOM
1. Seleccionar elementos apropiadamente
2. Modificar contenido de manera segura
3. Agregar event listeners
4. Implementar event delegation cuando corresponda

### Paso 4: Validación
1. Validar datos de entrada
2. Manejar casos edge
3. Probar en diferentes escenarios
4. Verificar manejo de errores

### Paso 5: Performance
1. Usar event delegation para listas
2. Implementar debouncing/throttling cuando corresponda
3. Evitar operaciones costosas en loops
4. Usar requestAnimationFrame para animaciones

### Paso 6: Testing
1. Probar casos normales
2. Probar casos de error
3. Probar edge cases
4. Verificar compatibilidad de navegadores

## Best Practices

### 1. Variables
- ✅ Usar const por defecto
- ✅ Usar let solo cuando sea necesario reasignar
- ❌ NUNCA usar var
- ✅ Usar nombres descriptivos
- ❌ No usar nombres de una letra (excepto en loops)

### 2. Funciones
- ✅ Funciones pequeñas y específicas
- ✅ Funciones puras cuando sea posible
- ✅ Arrow functions para callbacks
- ✅ Parámetros con valores por defecto
- ❌ No crear funciones muy largas (> 20 líneas)

### 3. Asincronía
- ✅ Usar async/await en lugar de .then()
- ✅ Siempre usar try/catch en async/await
- ✅ Usar Promise.all para llamadas paralelas
- ✅ Implementar timeout con AbortController
- ❌ No ignorar errores en promesas

### 4. DOM
- ✅ Usar querySelector en lugar de getElementById
- ✅ Usar textContent en lugar de innerHTML cuando sea posible
- ✅ Usar event delegation para listas
- ✅ Remover event listeners cuando no se necesiten
- ❌ No usar innerHTML con contenido no confiable

### 5. Arrays y Objetos
- ✅ Usar métodos de array (map, filter, reduce)
- ✅ Usar destructuring
- ✅ Usar spread operator
- ✅ Usar optional chaining (?.)
- ❌ No usar for loops cuando se puede usar métodos de array

### 6. Manejo de Errores
- ✅ Usar try/catch en código síncrono
- ✅ Usar try/catch en async/await
- ✅ Crear custom errors cuando sea necesario
- ✅ Propagar errores apropiadamente
- ❌ No ignorar errores con catch vacío

### 7. Módulos
- ✅ Usar named exports para múltiples exports
- ✅ Usar default export para el export principal
- ✅ Importar solo lo necesario
- ✅ Usar dynamic imports para código lazy
- ❌ No crear dependencias circulares

### 8. Performance
- ✅ Usar event delegation
- ✅ Implementar debouncing/throttling
- ✅ Usar requestAnimationFrame para animaciones
- ✅ Evitar reflows y repaints
- ❌ No hacer operaciones costosas en loops

### 9. Seguridad
- ✅ Usar textContent en lugar de innerHTML
- ✅ Escapar contenido dinámico
- ✅ Validar entrada de usuario
- ✅ Usar HTTPS para APIs
- ❌ No confiar en entrada de usuario

### 10. Código Limpio
- ✅ Nombres descriptivos
- ✅ Funciones pequeñas
- ✅ Comentarios cuando sea necesario
- ✅ Código DRY (Don't Repeat Yourself)
- ❌ No crear código espagueti

## Anti Patterns

### 1. Uso de var
```javascript
// ❌ INCORRECTO
var nombre = 'Juan';
for (var i = 0; i < 10; i++) { }

// ✅ CORRECTO
const nombre = 'Juan';
for (let i = 0; i < 10; i++) { }
```

### 2. Callback Hell
```javascript
// ❌ INCORRECTO
obtenerUsuario(id, function(usuario) {
  obtenerPosts(usuario.id, function(posts) {
    obtenerComentarios(posts[0].id, function(comentarios) {
      // ...
    });
  });
});

// ✅ CORRECTO
async function obtenerDatos(id) {
  const usuario = await obtenerUsuario(id);
  const posts = await obtenerPosts(usuario.id);
  const comentarios = await obtenerComentarios(posts[0].id);
  return comentarios;
}
```

### 3. InnerHTML con contenido no confiable
```javascript
// ❌ INCORRECTO
element.innerHTML = usuarioInput; // XSS vulnerability

// ✅ CORRECTO
element.textContent = usuarioInput;
```

### 4. For loops para arrays
```javascript
// ❌ INCORRECTO
const nombres = [];
for (let i = 0; i < usuarios.length; i++) {
  nombres.push(usuarios[i].nombre);
}

// ✅ CORRECTO
const nombres = usuarios.map(u => u.nombre);
```

### 5. Ignorar errores
```javascript
// ❌ INCORRECTO
try {
  hacerAlgo();
} catch (error) {
  // Vacío
}

// ✅ CORRECTO
try {
  hacerAlgo();
} catch (error) {
  console.error('Error:', error);
  mostrarErrorAlUsuario(error.message);
}
```

## Examples

Ver la carpeta `examples/` para ejemplos completos de:
- Manipulación del DOM
- Fetch API y async/await
- Event listeners y event delegation
- Validaciones de formulario
- Módulos ES6+
- Patrones de diseño

## References

- [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [ES6 Features](https://es6-features.org/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)