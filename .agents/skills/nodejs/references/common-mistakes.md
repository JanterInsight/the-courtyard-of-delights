# Node.js Development - Common Mistakes

## 1. Errores de Módulos

### ❌ CommonJS en lugar de ES6+

```javascript
// ❌ INCORRECTO
const fs = require('fs');
module.exports = { leerArchivo };

// ✅ CORRECTO
import fs from 'fs/promises';
export function leerArchivo(ruta) { }
```

**Impacto:** Código obsoleto, no aprovecha características modernas.

---

## 2. Errores de Async/Await

### ❌ Olvidar await

```javascript
// ❌ INCORRECTO
async function obtenerDatos() {
  const response = fetch('/api/datos'); // Falta await
  const data = response.json(); // Error
  return data;
}

// ✅ CORRECTO
async function obtenerDatos() {
  const response = await fetch('/api/datos');
  const data = await response.json();
  return data;
}
```

**Impacto:** Errores en tiempo de ejecución.

---

### ❌ Sin manejo de errores

```javascript
// ❌ INCORRECTO
async function procesar() {
  const datos = await fetch('/api/datos');
  return datos; // ¿Qué pasa si falla?
}

// ✅ CORRECTO
async function procesar() {
  try {
    const datos = await fetch('/api/datos');
    return datos;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
```

**Impacto:** Errores no manejados.

---

## 3. Errores de Paths

### ❌ Hardcodear paths

```javascript
// ❌ INCORRECTO
const ruta = '/Users/juan/proyecto/data/archivo.json';

// ✅ CORRECTO
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ruta = path.join(__dirname, 'data', 'archivo.json');
```

**Impacto:** No portable entre sistemas.

---

## 4. Errores de Performance

### ❌ Bloquear event loop

```javascript
// ❌ INCORRECTO
for (let i = 0; i < 1000000; i++) {
  // Operación bloqueante
}

// ✅ CORRECTO
const stream = fs.createReadStream('archivo.txt');
```

**Impacto:** Performance pobre.

---

## 5. Checklist

- [ ] ¿Usa ES6+ modules?
- [ ] ¿Maneja errores apropiadamente?
- [ ] ¿Usa path module?
- [ ] ¿Variables de entorno?
- [ ] ¿Streams para archivos grandes?
- [ ] ¿Logging apropiado?

---

## Resumen

Errores comunes:
1. **CommonJS** - En lugar de ES6+
2. **Sin await** - Olvidar async/await
3. **Sin errores** - No manejar errores
4. **Paths hardcodeados** - No portable
5. **Blocking** - Bloquear event loop