# Modern JavaScript Development - Common Mistakes

## 1. Errores de Variables y Scope

### ❌ Uso de var

**Problema:**
```javascript
// ❌ INCORRECTO
var nombre = 'Juan';
var i = 0;

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 100);
}
// Imprime 10 diez veces (i es global)
```

**Solución:**
```javascript
// ✅ CORRECTO
const nombre = 'Juan';
let i = 0;

for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 100);
}
// Imprime 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 (i es local al bloque)
```

**Impacto:** Scope global accidental, hoisting problemático, bugs difíciles de detectar.

---

### ❌ Reasignación de const

**Problema:**
```javascript
// ❌ INCORRECTO
const usuario = { nombre: 'Juan' };
usuario = { nombre: 'Pedro' }; // Error

const array = [1, 2, 3];
array = [4, 5, 6]; // Error
```

**Solución:**
```javascript
// ✅ CORRECTO: Mutación permitida
const usuario = { nombre: 'Juan' };
usuario.nombre = 'Pedro'; // OK

const array = [1, 2, 3];
array.push(4); // OK

// ✅ CORRECTO: Nueva asignación con let
let usuario = { nombre: 'Juan' };
usuario = { nombre: 'Pedro' }; // OK
```

**Impacto:** Confusión sobre inmutabilidad.

---

## 2. Errores de Funciones

### ❌ Callback Hell

**Problema:**
```javascript
// ❌ INCORRECTO
obtenerUsuario(id, function(usuario) {
  obtenerPosts(usuario.id, function(posts) {
    obtenerComentarios(posts[0].id, function(comentarios) {
      obtenerAutor(comentarios[0].autorId, function(autor) {
        // ... 5 niveles más
      });
    });
  });
});
```

**Solución:**
```javascript
// ✅ CORRECTO: Async/Await
async function obtenerDatosCompletos(id) {
  try {
    const usuario = await obtenerUsuario(id);
    const posts = await obtenerPosts(usuario.id);
    const comentarios = await obtenerComentarios(posts[0].id);
    const autor = await obtenerAutor(comentarios[0].autorId);
    return { usuario, posts, comentarios, autor };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
```

**Impacto:** Código difícil de leer y mantener, "pyramid of doom".

---

### ❌ Funciones muy largas

**Problema:**
```javascript
// ❌ INCORRECTO: Función de 100 líneas
const procesarFormulario = () => {
  // Validar nombre (20 líneas)
  // Validar email (20 líneas)
  // Validar password (20 líneas)
  // Guardar en BD (20 líneas)
  // Enviar email (10 líneas)
  // Mostrar mensaje (10 líneas)
};
```

**Solución:**
```javascript
// ✅ CORRECTO: Funciones pequeñas
const validarNombre = (nombre) => { /* ... */ };
const validarEmail = (email) => { /* ... */ };
const validarPassword = (password) => { /* ... */ };
const guardarUsuario = (datos) => { /* ... */ };
const enviarEmailBienvenida = (email) => { /* ... */ };
const mostrarMensajeExito = () => { /* ... */ };

const procesarFormulario = async (datos) => {
  validarNombre(datos.nombre);
  validarEmail(datos.email);
  validarPassword(datos.password);
  const usuario = await guardarUsuario(datos);
  await enviarEmailBienvenida(usuario.email);
  mostrarMensajeExito();
};
```

**Impacto:** Código difícil de testear, mantener y reutilizar.

---

### ❌ Arrow functions con this

**Problema:**
```javascript
// ❌ INCORRECTO
const persona = {
  nombre: 'Juan',
  saludar: function() {
    setTimeout(() => {
      console.log(this.nombre); // this es window, no persona
    }, 1000);
  }
};
```

**Solución:**
```javascript
// ✅ CORRECTO: Función tradicional
const persona = {
  nombre: 'Juan',
  saludar: function() {
    setTimeout(function() {
      console.log(this.nombre); // this es persona
    }, 1000);
  }
};

// ✅ CORRECTO: Bind
const persona = {
  nombre: 'Juan',
  saludar: function() {
    setTimeout(() => {
      console.log(this.nombre); // OK con bind
    }.bind(this), 1000);
  }
};
```

**Impacto:** Pérdida del contexto de this.

---

## 3. Errores de Asincronía

### ❌ Olvidar async/await

**Problema:**
```javascript
// ❌ INCORRECTO
async function obtenerUsuario(id) {
  const response = fetch(`/api/usuarios/${id}`);
  const data = response.json(); // response es Promise, no Response
  return data; // Retorna Promise, no el usuario
}
```

**Solución:**
```javascript
// ✅ CORRECTO
async function obtenerUsuario(id) {
  const response = await fetch(`/api/usuarios/${id}`);
  const data = await response.json();
  return data;
}
```

**Impacto:** Errores en tiempo de ejecución, datos incorrectos.

---

### ❌ Sin manejo de errores

**Problema:**
```javascript
// ❌ INCORRECTO
async function cargarDatos() {
  const response = await fetch('/api/datos');
  const data = await response.json();
  return data; // ¿Qué pasa si fetch falla?
}
```

**Solución:**
```javascript
// ✅ CORRECTO
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
    mostrarError('No se pudieron cargar los datos');
    throw error;
  }
}
```

**Impacto:** Errores no manejados, aplicación se rompe silenciosamente.

---

### ❌ Ignorar errores en Promise.all

**Problema:**
```javascript
// ❌ INCORRECTO: Si una falla, todas fallan
async function cargarDatos() {
  const [usuarios, posts] = await Promise.all([
    fetch('/api/usuarios').then(r => r.json()),
    fetch('/api/posts').then(r => r.json()) // Si esta falla, usuarios también falla
  ]);
  return { usuarios, posts };
}
```

**Solución:**
```javascript
// ✅ CORRECTO: Promise.allSettled
async function cargarDatos() {
  const resultados = await Promise.allSettled([
    fetch('/api/usuarios').then(r => r.json()),
    fetch('/api/posts').then(r => r.json())
  ]);
  
  const usuarios = resultados[0].status === 'fulfilled' ? resultados[0].value : [];
  const posts = resultados[1].status === 'fulfilled' ? resultados[1].value : [];
  
  return { usuarios, posts };
}
```

**Impacto:** Pérdida de datos parciales, mala experiencia de usuario.

---

## 4. Errores de Arrays

### ❌ For loops en lugar de métodos de array

**Problema:**
```javascript
// ❌ INCORRECTO
const nombres = [];
for (let i = 0; i < usuarios.length; i++) {
  nombres.push(usuarios[i].nombre);
}

const activos = [];
for (let i = 0; i < usuarios.length; i++) {
  if (usuarios[i].activo) {
    activos.push(usuarios[i]);
  }
}
```

**Solución:**
```javascript
// ✅ CORRECTO
const nombres = usuarios.map(u => u.nombre);
const activos = usuarios.filter(u => u.activo);
```

**Impacto:** Código más verboso, más propenso a errores.

---

### ❌ Mutación de arrays

**Problema:**
```javascript
// ❌ INCORRECTO
const usuarios = [{ id: 1, nombre: 'Juan' }];
const usuariosActivos = usuarios.filter(u => u.activo);
usuariosActivos.push({ id: 2, nombre: 'Pedro' }); // Modifica el array original
```

**Solución:**
```javascript
// ✅ CORRECTO
const usuarios = [{ id: 1, nombre: 'Juan' }];
const usuariosActivos = usuarios.filter(u => u.activo);
const nuevoArray = [...usuariosActivos, { id: 2, nombre: 'Pedro' }];
```

**Impacto:** Side effects, bugs difíciles de detectar.

---

### ❌ Sort mutando el array original

**Problema:**
```javascript
// ❌ INCORRECTO
const usuarios = [{ nombre: 'Juan' }, { nombre: 'Pedro' }];
const ordenados = usuarios.sort((a, b) => a.nombre.localeCompare(b.nombre));
// usuarios también está ordenado (mutado)
```

**Solución:**
```javascript
// ✅ CORRECTO
const usuarios = [{ nombre: 'Juan' }, { nombre: 'Pedro' }];
const ordenados = [...usuarios].sort((a, b) => a.nombre.localeCompare(b.nombre));
// usuarios no está modificado
```

**Impacto:** Mutación inesperada de datos.

---

## 5. Errores de Objetos

### ❌ Mutación de props

**Problema:**
```javascript
// ❌ INCORRECTO
const config = { tema: 'claro', idioma: 'es' };
const nuevaConfig = config;
nuevaConfig.tema = 'oscuro';
// config también cambió!
```

**Solución:**
```javascript
// ✅ CORRECTO
const config = { tema: 'claro', idioma: 'es' };
const nuevaConfig = { ...config, tema: 'oscuro' };
// config no está modificado
```

**Impacto:** Side effects, bugs difíciles de detectar.

---

### ❌ For-in sin hasOwnProperty

**Problema:**
```javascript
// ❌ INCORRECTO
const usuario = { nombre: 'Juan', edad: 25 };
for (let key in usuario) {
  console.log(key); // Puede incluir propiedades del prototype
}
```

**Solución:**
```javascript
// ✅ CORRECTO
const usuario = { nombre: 'Juan', edad: 25 };
for (let key in usuario) {
  if (usuario.hasOwnProperty(key)) {
    console.log(key);
  }
}

// ✅ CORRECTO: Mejor aún, usar Object.keys
Object.keys(usuario).forEach(key => {
  console.log(key);
});
```

**Impacto:** Propiedades no deseadas del prototype.

---

## 6. Errores de DOM

### ❌ innerHTML con contenido no confiable

**Problema:**
```javascript
// ❌ INCORRECTO
const usuarioInput = '<script>alert("XSS")</script>';
element.innerHTML = usuarioInput; // XSS vulnerability
```

**Solución:**
```javascript
// ✅ CORRECTO
const usuarioInput = '<script>alert("XSS")</script>';
element.textContent = usuarioInput; // Seguro

// ✅ CORRECTO: Crear elementos
const div = document.createElement('div');
div.textContent = usuarioInput;
element.appendChild(div);
```

**Impacto:** Vulnerabilidad XSS.

---

### ❌ Múltiples event listeners sin remover

**Problema:**
```javascript
// ❌ INCORRECTO
function setup() {
  button.addEventListener('click', handler);
  // Se llama setup múltiples veces
  button.addEventListener('click', handler); // Memory leak
}
```

**Solución:**
```javascript
// ✅ CORRECTO
function setup() {
  button.removeEventListener('click', handler);
  button.addEventListener('click', handler);
}

// ✅ CORRECTO: Usar { once: true }
button.addEventListener('click', handler, { once: true });
```

**Impacto:** Memory leaks, múltiples ejecuciones.

---

### ❌ getElementsByClassName (HTMLCollection vivo)

**Problema:**
```javascript
// ❌ INCORRECTO
const items = document.getElementsByClassName('item');
// HTMLCollection vivo - se actualiza automáticamente
for (let i = 0; i < items.length; i++) {
  items[i].classList.add('active'); // Puede causar problemas
}
```

**Solución:**
```javascript
// ✅ CORRECTO: querySelectorAll (NodeList estático)
const items = document.querySelectorAll('.item');
items.forEach(item => item.classList.add('active'));
```

**Impacto:** Comportamiento impredecible.

---

## 7. Errores de Async/Await

### ❌ Olvidar await

**Problema:**
```javascript
// ❌ INCORRECTO
async function obtenerDatos() {
  const response = fetch('/api/datos'); // Falta await
  const data = response.json(); // response es Promise
  return data;
}
```

**Solución:**
```javascript
// ✅ CORRECTO
async function obtenerDatos() {
  const response = await fetch('/api/datos');
  const data = await response.json();
  return data;
}
```

**Impacto:** Errores en tiempo de ejecución.

---

### ❌ Async en métodos de array sin await

**Problema:**
```javascript
// ❌ INCORRECTO
const usuarios = await fetch('/api/usuarios').then(r => r.json());
usuarios.forEach(async (usuario) => {
  await actualizarUsuario(usuario); // No espera
});
console.log('Todos actualizados'); // Se ejecuta antes de que terminen
```

**Solución:**
```javascript
// ✅ CORRECTO
const usuarios = await fetch('/api/usuarios').then(r => r.json());
await Promise.all(usuarios.map(usuario => actualizarUsuario(usuario)));
console.log('Todos actualizados'); // Ahora sí espera
```

**Impacto:** Race conditions, código se ejecuta en orden incorrecto.

---

## 8. Errores de Performance

### ❌ Operaciones costosas en loops

**Problema:**
```javascript
// ❌ INCORRECTO
for (let i = 0; i < 1000; i++) {
  const elemento = document.querySelector('.item'); // Costoso
  elemento.classList.add('active');
}
```

**Solución:**
```javascript
// ✅ CORRECTO
const elementos = document.querySelectorAll('.item');
elementos.forEach(elemento => elemento.classList.add('active'));
```

**Impacto:** Bajo rendimiento, jank.

---

### ❌ Reflows y repaints innecesarios

**Problema:**
```javascript
// ❌ INCORRECTO
for (let i = 0; i < 100; i++) {
  element.style.width = '100px';
  element.style.height = '100px';
  element.style.margin = '10px';
  // 3 reflows por iteración = 300 reflows
}
```

**Solución:**
```javascript
// ✅ CORRECTO
element.style.cssText = 'width: 100px; height: 100px; margin: 10px;';
// 1 reflow
```

**Impacto:** Bajo rendimiento, mala experiencia de usuario.

---

## 9. Errores de Seguridad

### ❌ Confiar en entrada de usuario

**Problema:**
```javascript
// ❌ INCORRECTO
const nombre = prompt('Ingresa tu nombre');
element.innerHTML = `<h1>Hola ${nombre}</h1>`; // XSS
```

**Solución:**
```javascript
// ✅ CORRECTO
const nombre = prompt('Ingresa tu nombre');
element.textContent = `Hola ${nombre}`;
```

**Impacto:** Vulnerabilidad XSS.

---

### ❌ No validar datos

**Problema:**
```javascript
// ❌ INCORRECTO
async function crearUsuario(datos) {
  const response = await fetch('/api/usuarios', {
    method: 'POST',
    body: JSON.stringify(datos)
  });
  return response.json();
}
```

**Solución:**
```javascript
// ✅ CORRECTO
async function crearUsuario(datos) {
  // Validar datos
  if (!datos.nombre || datos.nombre.length < 2) {
    throw new Error('Nombre inválido');
  }
  
  if (!datos.email || !datos.email.includes('@')) {
    throw new Error('Email inválido');
  }
  
  const response = await fetch('/api/usuarios', {
    method: 'POST',
    body: JSON.stringify(datos)
  });
  
  if (!response.ok) {
    throw new Error('Error al crear usuario');
  }
  
  return response.json();
}
```

**Impacto:** Datos corruptos, errores en el servidor.

---

## 10. Errores de Módulos

### ❌ Dependencias circulares

**Problema:**
```javascript
// a.js
import { b } from './b.js';
export const a = () => { };

// b.js
import { a } from './a.js';
export const b = () => { };
```

**Solución:**
```javascript
// a.js
export const a = () => { };

// b.js
import { a } from './a.js';
export const b = () => { };
```

**Impacto:** Errores de importación, código no se ejecuta.

---

### ❌ Importar todo

**Problema:**
```javascript
// ❌ INCORRECTO
import * as Utils from './utils.js';
Utils.sumar(1, 2);
```

**Solución:**
```javascript
// ✅ CORRECTO
import { sumar } from './utils.js';
sumar(1, 2);
```

**Impacto:** Bundle más grande, código menos claro.

---

## 11. Errores de Comparación

### ❌ Comparar con == en lugar de ===

**Problema:**
```javascript
// ❌ INCORRECTO
if (valor == null) { } // Coerción
if (valor == '1') { } // '1' == 1 es true
```

**Solución:**
```javascript
// ✅ CORRECTO
if (valor === null) { }
if (valor === undefined) { }
if (valor === '1') { }
```

**Impacto:** Comparaciones impredecibles.

---

### ❌ Comparar objetos por valor

**Problema:**
```javascript
// ❌ INCORRECTO
const usuario1 = { nombre: 'Juan' };
const usuario2 = { nombre: 'Juan' };
if (usuario1 === usuario2) { } // false - son objetos diferentes
```

**Solución:**
```javascript
// ✅ CORRECTO
const usuario1 = { nombre: 'Juan' };
const usuario2 = { nombre: 'Juan' };
if (JSON.stringify(usuario1) === JSON.stringify(usuario2)) { }

// ✅ CORRECTO: Comparar propiedades específicas
if (usuario1.nombre === usuario2.nombre) { }
```

**Impacto:** Comparaciones incorrectas.

---

## 12. Checklist de Errores Comunes

### Antes de entregar código JavaScript, verificar:

**Variables:**
- [ ] ¿Usa const y let (nunca var)?
- [ ] ¿Los nombres son descriptivos?
- [ ] ¿No hay reasignaciones innecesarias?

**Funciones:**
- [ ] ¿Son pequeñas y específicas?
- [ ] ¿Tienen manejo de errores?
- [ ] ¿No son muy largas (> 20 líneas)?

**Asincronía:**
- [ ] ¿Usa async/await en lugar de .then()?
- [ ] ¿Tiene try/catch en código asíncrono?
- [ ] ¿Maneja errores apropiadamente?

**Arrays y Objetos:**
- [ ] ¿Usa métodos de array (map, filter, reduce)?
- [ ] ¿No muta arrays/objetos originales?
- [ ] ¿Usa destructuring y spread?

**DOM:**
- [ ] ¿Usa textContent en lugar de innerHTML?
- [ ] ¿Remueve event listeners cuando no se necesitan?
- [ ] ¿Usa event delegation para listas?

**Performance:**
- [ ] ¿No hace operaciones costosas en loops?
- [ ] ¿Usa debouncing/throttling cuando corresponda?
- [ ] ¿Evita reflows innecesarios?

**Seguridad:**
- [ ] ¿Valida entrada de usuario?
- [ ] ¿No usa innerHTML con contenido no confiable?
- [ ] ¿Escapa datos antes de mostrar?

**Módulos:**
- [ ] ¿No hay dependencias circulares?
- [ ] ¿Importa solo lo necesario?
- [ ] ¿Está organizado correctamente?

---

## Resumen

Los errores más comunes en JavaScript son:
1. **Uso de var** - En lugar de const/let
2. **Callback Hell** - Código anidado profundamente
3. **Sin manejo de errores** - Async sin try/catch
4. **innerHTML inseguro** - Vulnerabilidad XSS
5. **Mutación** - Modificar arrays/objetos originales
6. **Funciones largas** - Falta de separación de concerns
7. **For loops** - En lugar de métodos de array
8. **Sin validación** - Confiar en entrada de usuario
9. **Memory leaks** - Event listeners sin remover
10. **Comparaciones incorrectas** - == en lugar de ===

**Regla de oro:** JavaScript moderno (ES2025+) usa const/let, async/await, métodos de array, y siempre maneja errores apropiadamente.