# Vite Development - Common Mistakes

## 1. Errores de Variables de Entorno

### ❌ Sin prefijo VITE_

```bash
# ❌ INCORRECTO
API_KEY=secret
API_URL=https://api.example.com

# ✅ CORRECTO
VITE_API_KEY=secret
VITE_API_URL=https://api.example.com
```

**Impacto:** Variables no accesibles en el código.

---

### ❌ Exponer secrets en cliente

```javascript
// ❌ INCORRECTO
// .env
VITE_DATABASE_PASSWORD=secret123

// ✅ CORRECTO
// .env (server-only, sin VITE_)
DATABASE_PASSWORD=secret123
```

**Impacto:** Secrets expuestos en el bundle.

---

## 2. Errores de Configuración

### ❌ Hardcodear URLs

```javascript
// ❌ INCORRECTO
const apiUrl = 'http://localhost:8000';

// ✅ CORRECTO
const apiUrl = import.meta.env.VITE_API_URL;
```

**Impacto:** No funciona en diferentes entornos.

---

### ❌ Sin code splitting

```javascript
// ❌ INCORRECTO
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// ✅ CORRECTO
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
```

**Impacto:** Bundle muy grande, carga lenta.

---

## 3. Errores de Build

### ❌ Sin optimización

```javascript
// ❌ INCORRECTO
export default defineConfig({
  build: {
    // Sin configuración
  },
});

// ✅ CORRECTO
export default defineConfig({
  build: {
    target: 'esnext',
    minify: 'terser',
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

**Impacto:** Build pesado, lento de cargar.

---

## 4. Checklist

- [ ] ¿Variables tienen prefijo VITE_?
- [ ] ¿No hay secrets en variables de cliente?
- [ ] ¿Usa aliases para imports?
- [ ] ¿Implementa code splitting?
- [ ] ¿Build está optimizado?
- [ ] ¿Proxy configurado para APIs?
- [ ] ¿Variables de entorno por ambiente?

---

## Resumen

Errores comunes:
1. **Variables sin prefijo** - No accesibles
2. **Secrets en cliente** - Vulnerabilidad
3. **Hardcodear URLs** - No portable
4. **Sin code splitting** - Bundle pesado
5. **Build sin optimizar** - Performance pobre