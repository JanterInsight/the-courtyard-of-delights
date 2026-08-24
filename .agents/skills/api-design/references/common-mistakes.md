# API Design - Common Mistakes

## 1. Errores de REST

### ❌ URLs no RESTful

```javascript
// ❌ INCORRECTO
GET /api/obtenerUsuarios
POST /api/crearUsuario
GET /api/eliminarUsuario

// ✅ CORRECTO
GET /api/usuarios
POST /api/usuarios
DELETE /api/usuarios/:id
```

**Impacto:** API no sigue estándares.

---

## 2. Errores de Status Codes

### ❌ Status codes incorrectos

```javascript
// ❌ INCORRECTO
res.status(200).json({ error: 'Usuario no encontrado' });
res.status(500).json({ error: 'Email inválido' });

// ✅ CORRECTO
res.status(404).json({ error: 'Usuario no encontrado' });
res.status(400).json({ error: 'Email inválido' });
```

**Impacto:** Cliente no puede manejar errores correctamente.

---

## 3. Errores de Versionado

### ❌ Sin versionado

```javascript
// ❌ INCORRECTO
app.use('/api', routes);

// ✅ CORRECTO
app.use('/api/v1', v1Routes);
```

**Impacto:** Breaking changes sin control.

---

## 4. Checklist

- [ ] ¿URLs RESTful?
- [ ] ¿Status codes correctos?
- [ ] ¿API versionada?
- [ ] ¿Paginación implementada?
- [ ] ¿Documentación OpenAPI?
- [ ] ¿Validación de entrada?

---

## Resumen

Errores comunes:
1. **URLs no RESTful** - No sigue estándares
2. **Status codes incorrectos** - Manejo de errores difícil
3. **Sin versionado** - Breaking changes
4. **Sin paginación** - Performance pobre
5. **Sin documentación** - Difícil de usar