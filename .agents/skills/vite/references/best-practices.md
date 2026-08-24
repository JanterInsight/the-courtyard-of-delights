# Vite Development - Best Practices

## 1. Configuración

### Estructura de Configuración

```javascript
// ✅ CORRECTO: Configuración completa
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  
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
  
  build: {
    target: 'esnext',
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
        },
      },
    },
  },
});
```

## 2. Variables de Entorno

```bash
# ✅ CORRECTO: .env
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=Mi App

# .env.local (no commit)
VITE_API_KEY=secret_key

# .env.production
VITE_API_URL=https://api.production.com
```

```javascript
// ✅ CORRECTO: Acceder a variables
const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

// ❌ INCORRECTO: Sin prefijo VITE_
// API_KEY=secret
```

## 3. Code Splitting

```javascript
// ✅ CORRECTO: Lazy loading
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

function App() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
}
```

## 4. Build Optimización

```javascript
// ✅ CORRECTO: Build optimizado
export default defineConfig({
  build: {
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'utils': ['lodash', 'date-fns'],
        },
      },
    },
  },
});
```

## 5. Plugins Esenciales

```javascript
// ✅ CORRECTO: Plugins recomendados
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

## Resumen

### ✅ SIEMPRE:
1. Usar defineConfig
2. Configurar aliases
3. Usar variables con prefijo VITE_
4. Implementar code splitting
5. Optimizar build
6. Configurar proxy para APIs

### ❌ NUNCA:
1. Hardcodear URLs
2. Exponer secrets en cliente
3. Sin code splitting
4. Ignorar optimización
5. Commitear .env.local