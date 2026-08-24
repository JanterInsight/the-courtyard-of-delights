# Web Accessibility - Best Practices

## 1. HTML Semántico

### Elementos Semánticos

**✅ SIEMPRE usar elementos semánticos:**
```html
<!-- ✅ CORRECTO -->
<header>
  <nav aria-label="Navegación principal">
    <ul>
      <li><a href="/">Inicio</a></li>
      <li><a href="/about">Acerca de</a></li>
    </ul>
  </nav>
</header>

<main id="main-content">
  <article>
    <h1>Título del Artículo</h1>
    <p>Contenido del artículo...</p>
  </article>
  
  <aside aria-label="Contenido relacionado">
    <h2>Relacionado</h2>
    <ul>
      <li><a href="/post1">Post 1</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>&copy; 2024 Mi Empresa</p>
</footer>

<!-- ❌ INCORRECTO -->
<div class="header">
  <div class="nav">...</div>
</div>
<div class="content">...</div>
<div class="footer">...</div>
```

### Estructura de Headings

```html
<!-- ✅ CORRECTO: Estructura jerárquica -->
<h1>Título Principal de la Página</h1>
  <h2>Sección 1</h2>
    <h3>Subsección 1.1</h3>
    <h3>Subsección 1.2</h3>
  <h2>Sección 2</h2>
    <h3>Subsección 2.1</h3>

<!-- ❌ INCORRECTO: Saltar niveles -->
<h1>Título</h1>
  <h3>Subsección</h3> <!-- Falta h2 -->
  <h2>Otra sección</h2>
```

## 2. ARIA Attributes

### ARIA Labels

```html
<!-- ✅ CORRECTO: aria-label -->
<button aria-label="Cerrar modal">
  <svg aria-hidden="true">
    <use xlink:href="#icon-close"></use>
  </svg>
</button>

<!-- ✅ CORRECTO: aria-labelledby -->
<h2 id="modal-title">Confirmar Acción</h2>
<div role="dialog" aria-labelledby="modal-title">
  <p>¿Estás seguro?</p>
</div>

<!-- ❌ INCORRECTO: ARIA innecesario -->
<button role="button">Click</button>
<!-- button ya tiene role="button" implícito -->
```

### ARIA States

```html
<!-- ✅ CORRECTO: aria-expanded -->
<button 
  aria-expanded="false" 
  aria-controls="menu-desplegable"
  aria-haspopup="true"
>
  Menú
</button>
<ul id="menu-desplegable" hidden>
  <li><a href="/opcion1">Opción 1</a></li>
</ul>

<!-- ✅ CORRECTO: aria-selected -->
<div role="tablist">
  <button role="tab" aria-selected="true">Tab 1</button>
  <button role="tab" aria-selected="false">Tab 2</button>
</div>
```

### ARIA Live Regions

```html
<!-- ✅ CORRECTO: aria-live para actualizaciones -->
<div aria-live="polite" aria-atomic="true" class="notificacion">
  {mensaje}
</div>

<!-- ✅ CORRECTO: aria-live assertive para alertas -->
<div role="alert" aria-live="assertive">
  Error: No se pudo guardar
</div>

<!-- ✅ CORRECTO: aria-busy para carga -->
<div aria-busy="true">
  Cargando...
</div>
```

## 3. Formularios Accesibles

### Labels

```html
<!-- ✅ CORRECTO: Label con for -->
<label for="email">Correo electrónico</label>
<input 
  type="email" 
  id="email" 
  name="email"
  autocomplete="email"
/>

<!-- ✅ CORRECTO: Label wrapping -->
<label>
  Nombre
  <input type="text" name="nombre" />
</label>

<!-- ❌ INCORRECTO: Placeholder como label -->
<input type="text" placeholder="Nombre" />
```

### Validación

```html
<!-- ✅ CORRECTO: Validación accesible -->
<label for="password">Contraseña</label>
<input 
  type="password" 
  id="password"
  aria-required="true"
  aria-invalid="false"
  aria-describedby="password-requirements password-error"
/>
<div id="password-requirements">
  <p>La contraseña debe tener al menos 8 caracteres</p>
</div>
<div id="password-error" class="error" aria-live="polite" hidden>
  <p>La contraseña no cumple con los requisitos</p>
</div>

<!-- ❌ INCORRECTO: Sin información de error -->
<input type="password" />
<span class="error">Error</span>
```

### Fieldsets

```html
<!-- ✅ CORRECTO: Fieldset para grupos -->
<fieldset>
  <legend>Información de Contacto</legend>
  
  <label for="nombre">Nombre</label>
  <input type="text" id="nombre" name="nombre" />
  
  <label for="email">Email</label>
  <input type="email" id="email" name="email" />
</fieldset>
```

## 4. Imágenes Accesibles

### Alt Text

```html
<!-- ✅ CORRECTO: Alt text descriptivo -->
<img 
  src="gato.jpg" 
  alt="Gato naranja jugando con una bola de lana en un jardín"
/>

<!-- ✅ CORRECTO: Alt text vacío para imágenes decorativas -->
<img src="decoracion.jpg" alt="" role="presentation" />

<!-- ✅ CORRECTO: Alt text para logos -->
<img src="logo.png" alt="Mi Empresa - Inicio" />

<!-- ❌ INCORRECTO: Sin alt text -->
<img src="gato.jpg" />

<!-- ❌ INCORRECTO: Alt text redundante -->
<img src="gato.jpg" alt="Imagen de gato" />
<!-- Si ya está descrito en el texto cercano -->
```

## 5. Navegación por Teclado

### Orden de Tabulación

```html
<!-- ✅ CORRECTO: Orden lógico -->
<header>
  <a href="/">Inicio</a>
  <nav>
    <a href="/about">Acerca de</a>
    <a href="/contact">Contacto</a>
  </nav>
</header>

<main>
  <h1>Título</h1>
  <form>
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" />
    
    <button type="submit">Enviar</button>
  </form>
</main>

<!-- ✅ CORRECTO: tabindex positivo (solo si es necesario) -->
<div tabindex="0">Elemento focusable</div>

<!-- ❌ INCORRECTO: tabindex positivo para cambiar orden -->
<button tabindex="3">Botón 1</button>
<button tabindex="1">Botón 2</button>
<button tabindex="2">Botón 3</button>
```

### Skip Links

```html
<!-- ✅ CORRECTO: Skip link -->
<a href="#main-content" class="skip-link">
  Saltar al contenido principal
</a>

<header>
  <nav>...</nav>
</header>

<main id="main-content">
  <!-- Contenido principal -->
</main>

<footer>...</footer>
```

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px 16px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

## 6. Focus Indicators

### Focus Visible

```css
/* ✅ CORRECTO: Focus indicators visibles */
a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible,
[tabindex]:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

/* ✅ CORRECTO: Focus ring personalizado */
.button:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 2px;
  box-shadow: 0 0 0 6px rgba(37, 99, 235, 0.2);
}

/* ❌ INCORRECTO: Remover outline */
button:focus {
  outline: none;
}

/* ❌ INCORRECTO: Outline sin offset */
button:focus {
  outline: 2px solid blue;
}
```

## 7. Contraste de Colores

### WCAG AA (4.5:1 mínimo)

```css
/* ✅ CORRECTO: Contraste 4.5:1 o mayor */
.texto-normal {
  color: #595959; /* 4.6:1 sobre blanco */
  background: #ffffff;
}

.texto-grande {
  color: #767676; /* 3.1:1 sobre blanco - OK para texto grande 18pt+ */
  background: #ffffff;
}

/* ❌ INCORRECTO: Contraste insuficiente */
.texto {
  color: #999999; /* 2.8:1 sobre blanco */
  background: #ffffff;
}
```

### Herramientas de Verificación

- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Stark (plugin para Figma/Chrome)
- axe DevTools

## 8. Reduced Motion

### Prefers Reduced Motion

```css
/* ✅ CORRECTO: Respetar prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* ✅ CORRECTO: Movimiento condicional */
.elemento {
  transition: transform 0.3s ease;
}

@media (prefers-reduced-motion: no-preference) {
  .elemento:hover {
    transform: translateY(-4px);
  }
}
```

## 9. Screen Reader Only

### Clase SR-Only

```css
/* ✅ CORRECTO: Screen reader only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Uso */
<h1>Mi Página</h1>
<p class="sr-only">Descripción adicional para screen readers</p>
```

## 10. Focus Management

### Gestión de Foco

```javascript
// ✅ CORRECTO: Mover foco a modal
function abrirModal() {
  modal.classList.add('abierto');
  modal.querySelector('button').focus();
}

function cerrarModal() {
  modal.classList.remove('abierto');
  botonAbrirModal.focus(); // Devolver foco
}

// ✅ CORRECTO: Trampa de foco en modal
function trampaFoco(modal) {
  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const primerElemento = focusableElements[0];
  const ultimoElemento = focusableElements[focusableElements.length - 1];

  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === primerElemento) {
        e.preventDefault();
        ultimoElemento.focus();
      } else if (!e.shiftKey && document.activeElement === ultimoElemento) {
        e.preventDefault();
        primerElemento.focus();
      }
    }
    
    if (e.key === 'Escape') {
      cerrarModal();
    }
  });
}
```

## 11. Custom Widgets

### Botones Personalizados

```jsx
// ✅ CORRECTO: Botón accesible
function BotonPersonalizado({ onClick, children }) {
  return (
    <button 
      onClick={onClick}
      type="button"
      className="boton-personalizado"
    >
      {children}
    </button>
  );
}

// ❌ INCORRECTO: Div como botón
function BotonPersonalizado({ onClick, children }) {
  return (
    <div onClick={onClick} className="boton-personalizado">
      {children}
    </div>
  );
}
```

### Menús Desplegables

```jsx
// ✅ CORRECTO: Menú accesible
function MenuDesplegable({ opciones }) {
  const [abierto, setAbierto] = useState(false);
  
  return (
    <div>
      <button
        aria-expanded={abierto}
        aria-haspopup="true"
        aria-controls="menu"
        onClick={() => setAbierto(!abierto)}
      >
        Opciones
      </button>
      
      {abierto && (
        <ul id="menu" role="menu">
          {opciones.map(opcion => (
            <li key={opcion.id} role="menuitem">
              <a href={opcion.href}>{opcion.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

## 12. Testing

### Automated Testing

```javascript
// ✅ CORRECTO: Usar axe para testing
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

test('no tiene violaciones de accesibilidad', async () => {
  const { container } = render(<MiComponente />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### Manual Testing Checklist

- [ ] Navegación completa por teclado (Tab, Shift+Tab, Enter, Escape)
- [ ] Focus indicators visibles en todos los elementos interactivos
- [ ] Screen reader testing (NVDA, JAWS, VoiceOver)
- [ ] Contraste de colores verificado
- [ ] Zoom al 200% funciona correctamente
- [ ] prefers-reduced-motion respetado
- [ ] Formularios accesibles con labels
- [ ] Imágenes con alt text apropiado
- [ ] Estructura de headings correcta
- [ ] Skip links funcionan

## Resumen de Mejores Prácticas

### ✅ SIEMPRE:
1. Usar elementos semánticos
2. Agregar alt text en imágenes
3. Usar labels en formularios
4. Implementar focus indicators
5. Respetar prefers-reduced-motion
6. Usar ARIA apropiadamente
7. Implementar skip links
8. Navegación por teclado
9. Contraste mínimo 4.5:1
10. Testing de accesibilidad

### ❌ NUNCA:
1. Usar divs para botones/links
2. Remover focus outline sin reemplazo
3. Usar placeholder como label
4. Imágenes sin alt text
5. ARIA innecesario
6. Ignorar navegación por teclado
7. Contraste insuficiente
8. Ignorar reduced motion
9. Sin skip links
10. Solo confiar en automated testing