# Express.js Development - Common Mistakes

## 1. Errores de Middleware

### ❌ Olvidar llamar next()

```javascript
// ❌ INCORRECTO
const logger = (req, res, next) => {
  console.log('Request');
  // Falta next()
};

// ✅ CORRECTO
const logger = (req, res, next) => {
  console.log('Request');
  next();
};
```

**Impacto:** Request se queda colgado.

---

## 2. Errores de Rutas

### ❌ Rutas no RESTful

```javascript
// ❌ INCORRECTO
router.get('/obtenerUsuarios', controller.obtenerUsuarios);
router.post('/crearUsuario', controller.crearUsuario);

// ✅ CORRECTO
router.get('/usuarios', controller.obtenerTodos);
router.post('/usuarios', controller.crear);
```

**Impacto:** API no sigue estándares.

---

## 3. Errores de Manejo de Errores

### ❌ Sin error handling

```javascript
// ❌ INCORRECTO
router.get('/', async (req, res) => {
  const data = await obtenerDatos();
  res.json(data);
});

// ✅ CORRECTO
router.get('/', async (req, res, next) => {
  try {
    const data = await obtenerDatos();
    res.json(data);
  } catch (error) {
    next(error);
  }
});
```

**Impacto:** Errores no manejados.

---

## 4. Checklist

- [ ] ¿Usa async/await?
- [ ] ¿Maneja errores?
- [ ] ¿Valida entrada?
- [ ] ¿Usa middleware de seguridad?
- [ ] ¿Rutas RESTful?
- [ ] ¿Estructura organizada?

---

## Resumen

Errores comunes:
1. **Sin next()** - Middleware bloquea
2. **Rutas no RESTful** - No sigue estándares
3. **Sin errores** - No maneja errores
4. **Sin validación** - Datos inválidos
5. **Sin seguridad** - Vulnerabilidades