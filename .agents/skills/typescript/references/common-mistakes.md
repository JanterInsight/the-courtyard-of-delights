# TypeScript Development - Common Mistakes

## 1. Errores de Tipos

### ❌ Uso de any

```typescript
// ❌ INCORRECTO
const data: any = obtenerDatos();
function procesar(value: any) { }

// ✅ CORRECTO
const data: Datos = obtenerDatos();
function procesar(value: unknown) { }
```

**Impacto:** Pierde la seguridad de tipos.

---

## 2. Errores de Casting

### ❌ Casting inseguro

```typescript
// ❌ INCORRECTO
const usuario = value as Usuario;
console.log(usuario.nombre); // Puede ser undefined

// ✅ CORRECTO
function esUsuario(value: unknown): value is Usuario {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'nombre' in value
  );
}

if (esUsuario(value)) {
  console.log(value.nombre); // TypeScript sabe el tipo
}
```

**Impacto:** Runtime errors.

---

## 3. Errores de Configuración

### ❌ Desactivar strict mode

```json
// ❌ INCORRECTO
{
  "compilerOptions": {
    "strict": false
  }
}

// ✅ CORRECTO
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

**Impacto:** Menos seguridad de tipos.

---

## 4. Checklist

- [ ] ¿Strict mode activado?
- [ ] ¿Sin any?
- [ ] ¿Type guards?
- [ ] ¿Interfaces tipadas?
- [ ] ¿Generics usados?
- [ ] ¿Compila sin errores?

---

## Resumen

Errores comunes:
1. **Uso de any** - Pierde seguridad
2. **Casting inseguro** - Runtime errors
3. **Sin strict mode** - Menos seguridad
4. **Sin type guards** - Narrowing incorrecto
5. **Sin generics** - Código duplicado