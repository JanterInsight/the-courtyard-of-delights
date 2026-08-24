# Web Security - Common Mistakes

## 1. Errores de Autenticación

### ❌ Passwords en texto plano

```javascript
// ❌ INCORRECTO
const user = await db.usuarios.findOne({ email, password });

// ✅ CORRECTO
const user = await db.usuarios.findOne({ email });
if (!user) throw new Error('Usuario no encontrado');
const valid = await bcrypt.compare(password, user.password);
```

**Impacto:** Vulnerabilidad crítica.

---

## 2. Errores de SQL Injection

### ❌ Queries sin parametrizar

```javascript
// ❌ INCORRECTO
const query = `SELECT * FROM usuarios WHERE email = '${email}'`;

// ✅ CORRECTO
const { data } = await supabase
  .from('usuarios')
  .select('*')
  .eq('email', email);
```

**Impacto:** Acceso no autorizado a datos.

---

## 3. Errores de XSS

### ❌ Sin sanitización

```javascript
// ❌ INCORRECTO
res.send(`<div>${userInput}</div>`);

// ✅ CORRECTO
import DOMPurify from 'isomorphic-dompurify';
const clean = DOMPurify.sanitize(userInput);
res.send(`<div>${clean}</div>`);
```

**Impacto:** Ejecución de scripts maliciosos.

---

## 4. Checklist

- [ ] ¿Passwords hasheados?
- [ ] ¿Queries parametrizadas?
- [ ] ¿Input validado?
- [ ] ¿Headers de seguridad?
- [ ] ¿CORS configurado?
- [ ] ¿Rate limiting?

---

## Resumen

Errores comunes:
1. **Passwords en texto plano** - Vulnerabilidad crítica
2. **SQL injection** - Acceso no autorizado
3. **XSS** - Scripts maliciosos
4. **Sin validación** - Datos inválidos
5. **Sin headers** - Información expuesta