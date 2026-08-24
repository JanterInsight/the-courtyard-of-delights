# Vite Development - Instructions

## Purpose

Este documento proporciona instrucciones detalladas para configurar y optimizar proyectos con Vite moderno.

## When to Activate

Activar esta skill cuando:
- Se necesite crear un proyecto con Vite
- Se requiera configurar vite.config.js
- Se deba optimizar el build
- Se necesite configurar variables de entorno
- Se trabaje con plugins
- Se requiera implementar code splitting
- Se necesite deployar la aplicación

## Core Rules

### 1. Crear Proyecto

**Regla #1: Usar create-vite para scaffolding**
```bash
# ✅ CORRECTO
npm create vite@latest mi-proyecto -- --template react
cd mi-proyecto
npm install

# Con TypeScript
npm create vite@latest mi-proyecto -- --template react-ts
```

### 2. Configuración Básica

**Regla #2: Configurar vite.config.js**
```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  
  // Resolve alias
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  
  // Server configuration
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
});
```

### 3. Variables de Entorno

**Regla #3: Usar variables de entorno correctamente**
```bash
# .env (siempre cargar)
VITE_API_URL=https://api.example.com

# .env.local (local, no commit)
VITE_API_KEY=secret_key

# .env.production (producción)
VITE_API_URL=https://api.production.com
```

```javascript
// Acceder a variables
const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

// ✅ CORRECTO: Todas las variables deben empezar con VITE_
// ❌ INCORRECTO: API_KEY=secret (sin prefijo VITE_)
```

### 4. Build de Producción

**Regla #4: Optimizar build**
```javascript
// vite.config.js
export default defineConfig({
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        // Code splitting
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'utils': ['lodash', 'date-fns'],
        },
      },
    },
  },
});
```

### 5. Plugins Esenciales

**Regla #5: Usar plugins apropiados**
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
    }),
  ],
});
```

## Workflow

### Paso 1: Inicialización
1. Crear proyecto con `npm create vite`
2. Instalar dependencias
3. Configurar variables de entorno
4. Configurar aliases

### Paso 2: Desarrollo
1. Configurar dev server
2. Configurar proxy si es necesario
3. Instalar plugins necesarios
4. Configurar HMR

### Paso 3: Build
1. Configurar optimizaciones
2. Configurar code splitting
3. Configurar minificación
4. Verificar bundle size

### Paso 4: Deploy
1. Build de producción
2. Preview local
3. Deploy a plataforma
4. Configurar CI/CD

## Best Practices

### 1. Configuración
- ✅ Usar defineConfig para type safety
- ✅ Separar configuraciones por entorno
- ✅ Usar aliases para imports limpios
- ✅ Configurar proxy para APIs
- ❌ No hardcodear URLs

### 2. Performance
- ✅ Code splitting manual
- ✅ Tree shaking automático
- ✅ Minificación en producción
- ✅ Asset optimization
- ❌ No cargar librerías innecesarias

### 3. Variables de Entorno
- ✅ Prefijo VITE_ en todas las variables
- ✅ Diferentes archivos por entorno
- ✅ No commitear .env.local
- ❌ No exponer secrets en cliente

### 4. Plugins
- ✅ Usar plugins oficiales
- ✅ Mantener plugins actualizados
- ✅ Configurar plugins apropiadamente
- ❌ No instalar plugins innecesarios

## Anti Patterns

### 1. Variables sin prefijo
```javascript
// ❌ INCORRECTO
// .env
API_KEY=secret

// ✅ CORRECTO
// .env
VITE_API_KEY=secret
```

### 2. Hardcodear URLs
```javascript
// ❌ INCORRECTO
const apiUrl = 'http://localhost:8000';

// ✅ CORRECTO
const apiUrl = import.meta.env.VITE_API_URL;
```

### 3. Sin code splitting
```javascript
// ❌ INCORRECTO
import Todo from './pages/Todo';
import About from './pages/About';
import Contact from './pages/Contact';

// ✅ CORRECTO
const Todo = lazy(() => import('./pages/Todo'));
const About = lazy(() => import('./pages/About'));
```

## Examples

Ver la carpeta `examples/` para ejemplos completos de:
- Configuración básica
- Configuración con React
- Variables de entorno
- Plugins esenciales
- Build optimizado
- Deploy

## References

- [Vite Official Docs](https://vitejs.dev/)
- [Vite Config Reference](https://vitejs.dev/config/)
- [Vite Plugins](https://vitejs.dev/plugins/)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)