# Node.js Development - Best Practices

## 1. Módulos ES6+

### Import/Export

**✅ SIEMPRE usar ES6+ modules:**
```javascript
// ✅ CORRECTO
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export function leerArchivo(ruta) {
  return fs.readFile(ruta, 'utf-8');
}

export default class Servicio {
  // ...
}

// ❌ NUNCA usar CommonJS
const fs = require('fs');
module.exports = { leerArchivo };
```

## 2. Async/Await

### Manejo Asíncrono

```javascript
// ✅ CORRECTO: Async/await con try/catch
async function procesarDatos() {
  try {
    const datos = await leerArchivo('datos.json');
    const resultado = await transformar(datos);
    return resultado;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// ✅ CORRECTO: Promise.all para paralelismo
async function cargarMultiples() {
  const [usuarios, posts] = await Promise.all([
    fetch('/api/usuarios'),
    fetch('/api/posts')
  ]);
  return { usuarios, posts };
}

// ❌ INCORRECTO: Callbacks
fs.readFile(ruta, (err, data) => { });
```

## 3. Manejo de Errores

### Try/Catch

```javascript
// ✅ CORRECTO: Manejo de errores
async function obtenerUsuario(id) {
  try {
    const response = await fetch(`/api/usuarios/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// ✅ CORRECTO: Custom errors
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}

// ❌ INCORRECTO: Sin manejo de errores
async function obtenerUsuario(id) {
  return fetch(`/api/usuarios/${id}`).then(r => r.json());
}
```

## 4. Paths

### Rutas de Archivos

```javascript
// ✅ CORRECTO: Usar path module
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ruta = path.join(__dirname, 'data', 'archivo.json');
const rutaAbsoluta = path.resolve('data/archivo.json');

// ❌ INCORRECTO: Hardcodear
const ruta = '/Users/juan/proyecto/data/archivo.json';
```

## 5. Variables de Entorno

### Configuración

```javascript
// ✅ CORRECTO: Variables de entorno
const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.DATABASE_URL,
  apiKey: process.env.API_KEY,
};

// Validar
if (!config.databaseUrl) {
  throw new Error('DATABASE_URL requerida');
}

// ❌ INCORRECTO: Hardcodear
const config = {
  port: 3000,
  databaseUrl: 'postgresql://localhost:5432/db',
};
```

## 6. Streams

### Procesamiento de Archivos Grandes

```javascript
// ✅ CORRECTO: Streams
import fs from 'fs';

const stream = fs.createReadStream('archivo-grande.txt');
stream.on('data', (chunk) => {
  // Procesar chunk
});
stream.on('end', () => {
  console.log('Completado');
});

// ❌ INCORRECTO: Cargar todo en memoria
const data = await fs.readFile('archivo-grande.txt', 'utf-8');
```

## 7. Logging

### Logs Apropiados

```javascript
// ✅ CORRECTO: Logging estructurado
console.error('Error:', { message: error.message, stack: error.stack });
console.log('Info:', { userId, action: 'login' });

// ✅ CORRECTO: Usar librería de logging
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: 'app.log' })],
});

// ❌ INCORRECTO: console.log para todo
console.log('Algo pasó');
```

## 8. Performance

### Clustering

```javascript
// ✅ CORRECTO: Clustering
import cluster from 'cluster';
import os from 'os';

if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  // Worker
  import('./server.js');
}
```

## Resumen

### ✅ SIEMPRE:
1. Usar ES6+ modules
2. Async/await
3. Manejo de errores
4. Path module para rutas
5. Variables de entorno
6. Streams para archivos grandes
7. Logging apropiado
8. Clustering en producción

### ❌ NUNCA:
1. CommonJS
2. Callbacks
3. Hardcodear paths
4. Hardcodear configuración
5. Cargar archivos grandes en memoria
6. Ignorar errores
7. Bloquear event loop
8. Exponer secrets