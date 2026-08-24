# Web Accessibility - Instructions

## Purpose

Este documento proporciona instrucciones detalladas para implementar accesibilidad web siguiendo WCAG 2.2 nivel AA.

## When to Activate

Activar esta skill cuando:
- Se necesite implementar accesibilidad web
- Se requiera cumplir con WCAG 2.2
- Se deba mejorar la accesibilidad de una aplicación
- Se trabaje con ARIA attributes
- Se necesite implementar navegación por teclado
- Se requiera optimizar para screen readers
- Se trabaje con contraste de colores
- Se necesite implementar focus management

## Core Rules

### 1. HTML Semántico

**Regla #1: Usar elementos semánticos**
```html
<!-- ✅ CORRECTO -->
<header>
  <nav>
    <ul>
      <li><a href="/">Inicio</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Título</h1>
    <p>Contenido</p>
  </article>
</main>

<footer>
  <p>Copyright</p>
</footer>

<!-- ❌ INCORRECTO -->
<div class="header">
  <div class="nav">
    <div class="menu-item">Inicio</div>
  </div>
</div>
```

### 2. ARIA Attributes

**Regla #2: Usar ARIA apropiadamente**
```html
<!-- ✅ CORRECTO: ARIA labels -->
<button aria-label="Cerrar modal">
  <svg>...</svg>
</button>

<!-- ✅ CORRECTO: ARIA live regions -->
<div aria-live="polite" aria-atomic="true">
  {mensaje}
</div>

<!-- ✅ CORRECTO: ARIA para estado -->
<button aria-expanded="false" aria-controls="menu">
  Menú
</button>

<!-- ❌ INCORRECTO: ARIA innecesario -->
<button role="button">Click</button>
<!-- button ya tiene role="button" implícito -->
```

### 3. Formularios Accesibles

**Regla #3: Labels y validación**
```html
<!-- ✅ CORRECTO -->
<label for="nombre">Nombre</label>
<input 
  type="text" 
  id="nombre" 
  name="nombre"
  aria-required="true"
  aria-invalid="false"
  aria-describedby="error-nombre"
/>
<span id="error-nombre" class="error" aria-live="polite">
  Error message
</span>

<!-- ❌ INCORRECTO -->
<input type="text" placeholder="Nombre" />
<!-- Sin label, sin accesibilidad -->
```

### 4. Imágenes Accesibles

**Regla #4: Alt text apropiado**
```html
<!-- ✅ CORRECTO: Alt text descriptivo -->
<img src="gato.jpg" alt="Gato naranja jugando con una bola de lana" />

<!-- ✅ CORRECTO: Alt text vacío para imágenes decorativas -->
<img src="decoracion.jpg" alt="" />

<!-- ❌ INCORRECTO: Sin alt text -->
<img src="gato.jpg" />
```

### 5. Navegación por Teclado

**Regla #5: Elementos focusables**
```html
<!-- ✅ CORRECTO: Elementos nativamente focusables -->
<button>Click</button>
<a href="/">Link</a>
<input type="text" />

<!-- ✅ CORRECTO: Div con tabindex -->
<div tabindex="0" role="button" onclick="manejarClick()">
  Click
</div>

<!-- ❌ INCORRECTO: Div sin tabindex -->
<div onclick="manejarClick()">
  Click
</div>
```

### 6. Focus Indicators

**Regla #6: Focus visible**
```css
/* ✅ CORRECTO: Focus indicators */
button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* ❌ INCORRECTO: Remover outline */
button:focus {
  outline: none;
}
```

### 7. Contraste de Colores

**Regla #7: Contraste mínimo WCAG AA**
```css
/* ✅ CORRECTO: Contraste 4.5:1 o mayor */
.texto {
  color: #595959; /* 4.6:1 sobre blanco */
  background: #ffffff;
}

/* ❌ INCORRECTO: Contraste insuficiente */
.texto {
  color: #999999; /* 2.8:1 sobre blanco */
  background: #ffffff;
}
```

### 8. Reduced Motion

**Regla #8: Respetar preferencia de movimiento**
```css
/* ✅ CORRECTO: Respetar prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 9. Skip Links

**Regla #9: Skip navigation links**
```html
<!-- ✅ CORRECTO -->
<a href="#main-content" class="skip-link">
  Saltar al contenido principal
</a>

<main id="main-content">
  <!-- Contenido -->
</main>
```

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--color-primary);
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

### 10. Live Regions

**Regla #10: Anunciar cambios a screen readers**
```jsx
// ✅ CORRECTO: Live region
function Notificacion({ mensaje }) {
  return (
    <div 
      aria-live="polite" 
      aria-atomic="true"
      className="notificacion"
    >
      {mensaje}
    </div>
  );
}

// ✅ CORRECTO: Alertas
<div role="alert" aria-live="assertive">
  Error crítico
</div>
```

## Workflow

### Paso 1: Análisis
1. Revisar estructura HTML
2. Verificar elementos semánticos
3. Identificar ARIA attributes necesarios
4. Planificar navegación por teclado

### Paso 2: Implementación
1. Usar elementos semánticos
2. Agregar ARIA attributes
3. Implementar labels en formularios
4. Agregar alt text en imágenes
5. Implementar focus indicators
6. Agregar skip links

### Paso 3: Testing
1. Navegación por teclado
2. Screen reader testing
3. Contraste de colores
4. Automated testing (axe, Lighthouse)
5. Manual testing

### Paso 4: Validación
1. Verificar WCAG 2.2 AA
2. Corregir errores
3. Documentar decisiones

## Best Practices

### 1. HTML
- ✅ Elementos semánticos
- ✅ ARIA attributes apropiados
- ✅ Labels en formularios
- ✅ Alt text en imágenes
- ✅ Estructura de headings (h1-h6)
- ❌ No usar divs para todo

### 2. CSS
- ✅ Focus indicators visibles
- ✅ Contraste mínimo 4.5:1
- ✅ prefers-reduced-motion
- ✅ Screen reader only
- ❌ No remover outline sin reemplazo

### 3. JavaScript
- ✅ Keyboard navigation
- ✅ Focus management
- ✅ Live regions
- ✅ Event handlers apropiados
- ❌ No capturar todos los eventos

### 4. Testing
- ✅ Automated testing
- ✅ Manual testing
- ✅ Screen reader testing
- ✅ Keyboard testing
- ❌ No solo confiar en automated testing

## Anti Patterns

### 1. Divs para todo
```html
<!-- ❌ INCORRECTO -->
<div class="button" onclick="...">Click</div>

<!-- ✅ CORRECTO -->
<button onclick="...">Click</button>
```

### 2. Sin alt text
```html
<!-- ❌ INCORRECTO -->
<img src="imagen.jpg" />

<!-- ✅ CORRECTO -->
<img src="imagen.jpg" alt="Descripción" />
```

### 3. Remover focus outline
```css
/* ❌ INCORRECTO */
button:focus {
  outline: none;
}

/* ✅ CORRECTO */
button:focus-visible {
  outline: 2px solid blue;
}
```

## Examples

Ver la carpeta `examples/` para ejemplos completos de:
- HTML semántico
- Formularios accesibles
- ARIA attributes
- Focus management
- Live regions
- Skip links

## References

- [WCAG 2.2](https://www.w3.org/WAI/WCAG22/quickref/)
- [WAI-ARIA](https://www.w3.org/WAI/WCAG22/Techniques/aria/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [A11y Project](https://www.a11yproject.com/)
- [WebAIM](https://webaim.org/)