# Web Architecture - Common Mistakes

## 1. Errores de Arquitectura

### ❌ God Object

```javascript
// ❌ INCORRECTO
class TodoApp {
  // Todo en una clase
  // - UI
  // - Lógica de negocio
  // - Base de datos
  // - API calls
}

// ✅ CORRECTO
// Separar en módulos
// - components/
// - services/
// - repositories/
```

**Impacto:** Difícil de mantener y testear.

---

## 2. Errores de Escalabilidad

### ❌ Stateful services

```javascript
// ❌ INCORRECTO
// Estado en memoria
const sessions = new Map();

// ✅ CORRECTO
// Usar Redis para sesiones
// Stateless services
```

**Impacto:** No escalable horizontalmente.

---

## 3. Errores de Patrones

### ❌ Lógica mezclada

```javascript
// ❌ INCORRECTO
// Todo en un archivo
// - HTTP handlers
// - Business logic
// - Database queries

// ✅ CORRECTO
// Separar en capas
// - controllers/
// - services/
// - repositories/
```

**Impacto:** Código difícil de mantener.

---

## 4. Checklist

- [ ] ¿Arquitectura correcta?
- [ ] ¿Patrones apropiados?
- [ ] ¿Stateless services?
- [ ] ¿Caching implementado?
- [ ] ¿CI/CD configurado?
- [ ] ¿Documentación?

---

## Resumen

Errores comunes:
1. **God Object** - Todo en una clase
2. **Stateful** - No escalable
3. **Lógica mezclada** - Difícil de mantener
4. **Sin caching** - Performance pobre
5. **Sin CI/CD** - Deploy manual