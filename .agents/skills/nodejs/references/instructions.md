# Node.js Development - Instructions

## Purpose

Este documento proporciona instrucciones detalladas para desarrollar aplicaciones backend con Node.js moderno.

## When to Activate

Activar esta skill cuando:
- Se necesite crear aplicaciones backend con Node.js
- Se requiera trabajar con módulos ES6+
- Se deba implementar servicios API
- Se necesite manejar archivos y sistema operativo
- Se trabaje con procesos y eventos
- Se requiera implementar workers o jobs
- Se necesite optimizar rendimiento
- Se trabaje con debugging y logging

## Core Rules

### 1. ES6+ Modules

**Regla #1: Usar módulos ES6+ en lugar de CommonJS**
```javascript
// ✅ CORRECTO: ES6+ modules
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// ❌ INCORRECTO: CommonJS
const fs = require('fs');
const path = require('path');
```

### 2. Async/Await

**Regla #2: Usar async/await en lugar de callbacks**
```javascript
// ✅ CORRECTO
async function leerArchivo(ruta) {
  try {
    const contenido = await fs.readFile(ruta, 'utf-8');
    return contenido;
  } catch (error) {
    console.error('Error al leer archivo:', error);
    throw error;
  }
}

// ❌ INCORRECTO: Callbacks
fs.readFile(ruta, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // ...
});
```

### 3. Manejo de Errores

**Regla #3: Siempre manejar errores**
```javascript
// ✅ CORRECTO
async function procesarDatos() {
  try {
    const datos = await obtenerDatos();
    const resultado = await transformarDatos(datos);
    return resultado;
  } catch (error) {
    console.error('Error en procesarDatos:', error);
    throw error;
  }
}

// ❌ INCORRECTO: Sin manejo de errores
async function procesarDatos() {
  const datos = await obtenerDatos();
  return transformarDatos(datos);
}
```

### 4. Paths

**Regla #4: Usar path module para rutas**
```javascript
// ✅ CORRECTO
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rutaArchivo = path.join(__dirname, 'data', 'archivo.json');

// ❌ INCORRECTO: Hardcodear paths
const rutaArchivo = '/Users/juan/proyecto/data/archivo.json';
```

### 5. Environment Variables

**Regla #5: Usar variables de entorno**
```javascript
// ✅ CORRECTO
const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.DATABASE_URL,
  apiKey: process.env.API_KEY,
};

// Validar variables requeridas
if (!config.databaseUrl) {
  throw new Error('DATABASE_URL es requerida');
}

// ❌ INCORRECTO: Hardcodear
const config = {
  port: 3000,
  databaseUrl: 'postgresql://localhost:5432/mydb',
};
```

## Workflow

### Paso 1: Inicialización
1. Inicializar proyecto con `npm init`
2. Configurar package.json
3. Instalar dependencias
4. Configurar ESLint y Prettier

### Paso 2: Estructura
1. Organizar código en carpetas
2. Crear módulos reutilizables
3. Configurar logging
4. Configurar testing

### Paso 3: Desarrollo
1. Implementar funcionalidades
2. Manejo de errores
3. Validaciones
4. Testing

### Paso 4: Producción
1. Optimizar rendimiento
2. Configurar PM2
3. Configurar logs
4. Deploy

## Best Practices

### 1. Código
- ✅ Usar ES6+ modules
- ✅ Async/await
- ✅ Manejo de errores
- ✅ Validaciones
- ✅ Logging
- ❌ No usar callbacks

### 2. Estructura
- ✅ Separar concerns
- ✅ Módulos reutilizables
- ✅ Configuración centralizada
- ❌ No mezclar lógica

### 3. Performance
- ✅ Streams para archivos grandes
- ✅ Clustering
- ✅ Cache
- ❌ No bloquear event loop

### 4. Seguridad
- ✅ Validar input
- ✅ Sanitizar datos
- ✅ Usar helmet
- ❌ No exponer secrets

## Anti Patterns

### 1. Callbacks
```javascript
// ❌ INCORRECTO
fs.readFile(ruta, (err, data) => { });

// ✅ CORRECTO
const data = await fs.readFile(ruta, 'utf-8');
```

### 2. Blocking Event Loop
```javascript
// ❌ INCORRECTO
for (let i = 0; i < 1000000; i++) {
  // Operación bloqueante
}

// ✅ CORRECTO
const stream = fs.createReadStream(ruta);
```

## Examples

Ver la carpeta `examples/` para ejemplos completos.

## References

- [Node.js Docs](https://nodejs.org/docs)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)