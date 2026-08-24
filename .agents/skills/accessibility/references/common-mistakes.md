# Web Accessibility - Common Mistakes

## 1. Errores de HTML

### ❌ Divs para Todo

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<div class="button" onclick="manejarClick()">Click</div>
<div class="link" onclick="navegar()">Ir a página</div>
<div class="menu">...</div>
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<button onclick="manejarClick()">Click</button>
<a href="/pagina" onclick="navegar()">Ir a página</a>
<nav>...</nav>
```

**Impacto:** No accesible por teclado, sin semántica.

---

### ❌ Sin Alt Text

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<img src="gato.jpg" />
<img src="decoracion.jpg" />
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<img src="gato.jpg" alt="Gato naranja jugando" />
<img src="decoracion.jpg" alt="" role="presentation" />
```

**Impacto:** Screen readers no pueden describir la imagen.

---

### ❌ Placeholder como Label

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<input type="text" placeholder="Nombre" />
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<label for="nombre">Nombre</label>
<input type="text" id="nombre" />
```

**Impacto:** Usuarios no saben qué información ingresar.

---

## 2. Errores de ARIA

### ❌ ARIA Innecesario

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<button role="button">Click</button>
<a href="/" role="link">Inicio</a>
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<button>Click</button>
<a href="/">Inicio</a>
```

**Impacto:** ARIA innecesario, código más complejo.

---

### ❌ ARIA Incorrecto

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<div role="button" onclick="manejarClick()">
  Click
</div>
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<button onclick="manejarClick()">Click</button>
```

**Impacto:** No tiene comportamiento nativo de botón.

---

## 3. Errores de Formularios

### ❌ Sin Labels

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<input type="text" placeholder="Nombre" />
<input type="email" placeholder="Email" />
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<label for="nombre">Nombre</label>
<input type="text" id="nombre" />

<label for="email">Email</label>
<input type="email" id="email" />
```

**Impacto:** Usuarios de screen readers no saben qué es cada campo.

---

### ❌ Sin Validación Accesible

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<input type="text" />
<span class="error">Error</span>
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<input 
  type="text" 
  aria-invalid="true"
  aria-describedby="error-mensaje"
/>
<div id="error-mensaje" class="error" role="alert">
  Este campo es requerido
</div>
```

**Impacto:** Errores no anunciados a screen readers.

---

## 4. Errores de Focus

### ❌ Remover Outline

**Problema:**
```css
/* ❌ INCORRECTO */
button:focus {
  outline: none;
}
```

**Solución:**
```css
/* ✅ CORRECTO */
button:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}
```

**Impacto:** Usuarios de teclado no ven el foco.

---

### ❌ Sin Skip Links

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<header>
  <nav>...</nav>
</header>
<main>...</main>
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<a href="#main" class="skip-link">Saltar al contenido</a>
<header>
  <nav>...</nav>
</header>
<main id="main">...</main>
```

**Impacto:** Usuarios de teclado deben navegar por todo el menú.

---

## 5. Errores de Contraste

### ❌ Contraste Insuficiente

**Problema:**
```css
/* ❌ INCORRECTO */
.texto {
  color: #999999; /* 2.8:1 */
  background: #ffffff;
}
```

**Solución:**
```css
/* ✅ CORRECTO */
.texto {
  color: #595959; /* 4.6:1 */
  background: #ffffff;
}
```

**Impacto:** Usuarios con discapacidad visual no pueden leer.

---

## 6. Errores de Navegación

### ❌ Orden de Tabulación Incorrecto

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<button tabindex="3">Botón 1</button>
<button tabindex="1">Botón 2</button>
<button tabindex="2">Botón 3</button>
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<button>Botón 1</button>
<button>Botón 2</button>
<button>Botón 3</button>
```

**Impacto:** Navegación confusa.

---

## 7. Checklist

- [ ] ¿Usa elementos semánticos?
- [ ] ¿Imágenes tienen alt text?
- [ ] ¿Formularios tienen labels?
- [ ] ¿Focus indicators visibles?
- [ ] ¿Contraste mínimo 4.5:1?
- [ ] ¿Skip links implementados?
- [ ] ¿Navegación por teclado funciona?
- [ ] ¿ARIA apropiado?
- [ ] ¿prefers-reduced-motion respetado?
- [ ] ¿Testing de accesibilidad realizado?

---

## Resumen

Errores comunes:
1. **Divs para todo** - Sin semántica
2. **Sin alt text** - Imágenes no accesibles
3. **Placeholder como label** - Formularios inaccesibles
4. **ARIA innecesario** - Código complejo
5. **Sin focus indicators** - Teclado inutilizable
6. **Contraste insuficiente** - Texto ilegible
7. **Sin skip links** - Navegación difícil
8. **Orden de tabulación incorrecto** - Navegación confusa