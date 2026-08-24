# Modern CSS Development - Common Mistakes

## 1. Errores de Metodología y Arquitectura

### ❌ Especificidad Wars

**Problema:**
```css
/* ❌ INCORRECTO: Especificidad creciente */
.button {
  background-color: blue;
}

.container .button {
  background-color: green;
}

#main .container .button {
  background-color: red;
}

#main .container .button.special {
  background-color: purple !important;
}
```

**Solución:**
```css
/* ✅ CORRECTO: Especificidad baja y consistente */
.button {
  background-color: var(--color-primary);
}

.button--secondary {
  background-color: var(--color-secondary);
}

.button--special {
  background-color: var(--color-danger);
}
```

**Impacto:** Dificultad para mantener estilos, necesidad de !important, código frágil.

---

### ❌ Uso de !important

**Problema:**
```css
/* ❌ INCORRECTO */
.button {
  background-color: blue !important;
}

.header {
  padding: 20px !important;
}
```

**Solución:**
```css
/* ✅ CORRECTO */
.button--primary {
  background-color: var(--color-primary);
}

.header {
  padding: var(--spacing-4);
}
```

**Impacto:** Rompe la cascada natural de CSS, dificulta mantenimiento.

---

### ❌ IDs para estilos

**Problema:**
```css
/* ❌ INCORRECTO */
#header {
  background-color: blue;
}

#main-content {
  padding: 20px;
}

#submit-button {
  background-color: green;
}
```

**Solución:**
```css
/* ✅ CORRECTO */
.header {
  background-color: var(--color-primary);
}

.main-content {
  padding: var(--spacing-4);
}

.button--primary {
  background-color: var(--color-success);
}
```

**Impacto:** Especificidad muy alta, imposible reutilizar estilos.

---

## 2. Errores de Responsive Design

### ❌ Desktop-First

**Problema:**
```css
/* ❌ INCORRECTO */
.container {
  max-width: 1200px;
  padding: 3rem;
  display: flex;
  gap: 2rem;
}

@media (max-width: 1024px) {
  .container {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
    display: block;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0.5rem;
  }
}
```

**Solución:**
```css
/* ✅ CORRECTO: Mobile-First */
.container {
  padding: 0.5rem;
  display: block;
}

@media (min-width: 480px) {
  .container {
    padding: 1rem;
  }
}

@media (min-width: 768px) {
  .container {
    padding: 2rem;
    display: flex;
    gap: var(--spacing-4);
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    padding: 3rem;
    margin: 0 auto;
  }
}
```

**Impacto:** Código más complejo, más líneas de CSS, peor rendimiento en móviles.

---

### ❌ Breakpoints basados en dispositivos

**Problema:**
```css
/* ❌ INCORRECTO */
@media (min-width: 320px) { /* iPhone */ }
@media (min-width: 768px) { /* iPad */ }
@media (min-width: 1024px) { /* iPad Pro */ }
@media (min-width: 1920px) { /* Full HD */ }
```

**Solución:**
```css
/* ✅ CORRECTO: Breakpoints basados en contenido */
@media (min-width: 640px) { /* Cuando el contenido lo requiere */ }
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large desktop */ }
```

**Impacto:** Breakpoints innecesarios, no escalable.

---

### ❌ Dependencia solo de Media Queries

**Problema:**
```css
/* ❌ INCORRECTO: Componente que cambia según viewport */
@media (min-width: 768px) {
  .card {
    flex-direction: row;
  }
}

@media (min-width: 1024px) {
  .card {
    flex-direction: row;
  }
}
```

**Solución:**
```css
/* ✅ CORRECTO: Container Query */
.card-wrapper {
  container-type: inline-size;
}

.card {
  display: flex;
  flex-direction: column;
}

@container (min-width: 400px) {
  .card {
    flex-direction: row;
  }
}
```

**Impacto:** Componentes no reutilizables en diferentes contextos.

---

## 3. Errores de Performance

### ❌ Animar propiedades costosas

**Problema:**
```css
/* ❌ INCORRECTO */
.animated-element {
  transition: width 0.3s, height 0.3s, top 0.3s, left 0.3s;
}

.element:hover {
  width: 200px;
  height: 200px;
  top: 10px;
  left: 10px;
}
```

**Solución:**
```css
/* ✅ CORRECTO */
.animated-element {
  transition: transform 0.3s, opacity 0.3s;
}

.element:hover {
  transform: scale(1.1);
  opacity: 0.9;
}
```

**Impacto:** Jank, bajo framerate, mala experiencia de usuario.

---

### ❌ Box-shadow en animaciones

**Problema:**
```css
/* ❌ INCORRECTO */
.button {
  transition: box-shadow 0.3s;
}

.button:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}
```

**Solución:**
```css
/* ✅ CORRECTO: Usar pseudo-elemento o transform */
.button {
  position: relative;
  transition: transform 0.3s;
}

.button::before {
  content: '';
  position: absolute;
  inset: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
  z-index: -1;
}

.button:hover {
  transform: translateY(-2px);
}

.button:hover::before {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}
```

**Impacto:** Animaciones con bajo rendimiento.

---

### ❌ No usar contain

**Problema:**
```css
/* ❌ INCORRECTO */
.card {
  /* Sin contain, el navegador debe recalcular toda la página */
}
```

**Solución:**
```css
/* ✅ CORRECTO */
.card {
  contain: layout style paint;
}
```

**Impacto:** Reflows y repaints innecesarios, peor rendimiento.

---

## 4. Errores de Accesibilidad

### ❌ Remover focus outline

**Problema:**
```css
/* ❌ INCORRECTO */
.button:focus {
  outline: none;
}

a:focus {
  outline: none;
}
```

**Solución:**
```css
/* ✅ CORRECTO */
.button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

a:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

**Impacto:** Usuarios de teclado no pueden ver el foco.

---

### ❌ Ignorar prefers-reduced-motion

**Problema:**
```css
/* ❌ INCORRECTO */
.animated-element {
  animation: slideIn 0.5s ease;
}

.animated-element:hover {
  transition: all 0.3s;
}
```

**Solución:**
```css
/* ✅ CORRECTO */
@media (prefers-reduced-motion: no-preference) {
  .animated-element {
    animation: slideIn 0.5s ease;
  }
  
  .animated-element:hover {
    transition: all 0.3s;
  }
}
```

**Impacto:** Problemas para usuarios con trastornos vestibulares.

---

### ❌ Contraste insuficiente

**Problema:**
```css
/* ❌ INCORRECTO */
.text {
  color: #999999; /* 2.8:1 sobre blanco */
  background: #ffffff;
}

.button {
  color: #cccccc; /* 1.6:1 sobre azul */
  background: #0066cc;
}
```

**Solución:**
```css
/* ✅ CORRECTO */
.text {
  color: #595959; /* 4.6:1 sobre blanco */
  background: #ffffff;
}

.button {
  color: #ffffff; /* 4.5:1 sobre azul */
  background: #0055aa;
}
```

**Impacto:** Usuarios con discapacidad visual no pueden leer el texto.

---

## 5. Errores de Organización

### ❌ Hardcodeo de valores

**Problema:**
```css
/* ❌ INCORRECTO */
.button {
  padding: 16px 32px;
  background-color: #3498db;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card {
  padding: 24px;
  margin-bottom: 32px;
}

.input {
  padding: 12px 16px;
  border: 2px solid #ddd;
  border-radius: 4px;
}
```

**Solución:**
```css
/* ✅ CORRECTO */
:root {
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --color-primary: #3498db;
  --radius-md: 0.5rem;
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.button {
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--color-primary);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}

.card {
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.input {
  padding: var(--spacing-3) var(--spacing-4);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-sm);
}
```

**Impacto:** Difícil de mantener, inconsistente, cambios globales difíciles.

---

### ❌ Nombres genéricos

**Problema:**
```css
/* ❌ INCORRECTO */
.red-button { }
.big-text { }
.small-box { }
.blue-header { }
```

**Solución:**
```css
/* ✅ CORRECTO */
.button--danger { }
.heading-xl { }
.card--compact { }
.header { }
```

**Impacto:** Nombres no semánticos, difíciles de entender y mantener.

---

### ❌ Selectores muy específicos

**Problema:**
```css
/* ❌ INCORRECTO */
div.container > div.row > div.col-md-6 > button.btn-primary {
  background-color: blue;
}

#main-content .sidebar .widget .widget-title {
  font-size: 24px;
}
```

**Solución:**
```css
/* ✅ CORRECTO */
.btn-primary {
  background-color: var(--color-primary);
}

.widget__title {
  font-size: var(--font-size-xl);
}
```

**Impacto:** Difícil de sobrescribir, alta especificidad.

---

## 6. Errores de Layout

### ❌ Usar floats para layout

**Problema:**
```css
/* ❌ INCORRECTO */
.column {
  float: left;
  width: 50%;
}

.row::after {
  content: '';
  display: table;
  clear: both;
}
```

**Solución:**
```css
/* ✅ CORRECTO */
.row {
  display: flex;
  gap: var(--spacing-4);
}

.column {
  flex: 1;
}
```

**Impacto:** Código más complejo, problemas de clearfix, menos flexible.

---

### ❌ Usar tables para layout

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<table>
  <tr>
    <td>Sidebar</td>
    <td>Content</td>
  </tr>
</table>
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<div class="layout">
  <aside class="sidebar">Sidebar</aside>
  <main class="content">Content</main>
</div>
```

```css
.layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: var(--spacing-4);
}
```

**Impacto:** Semántica incorrecta, accesibilidad pobre, no responsive.

---

### ❌ Position absolute para layout

**Problema:**
```css
/* ❌ INCORRECTO */
.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
}

.content {
  margin-left: 250px;
}
```

**Solución:**
```css
/* ✅ CORRECTO */
.layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: var(--spacing-4);
}
```

**Impacto:** No responsive, problemas de scroll, superposiciones.

---

## 7. Errores de Naming

### ❌ Nombres que describen apariencia

**Problema:**
```css
/* ❌ INCORRECTO */
.red-button { }
.big-text { }
.blue-box { }
.right-column { }
```

**Solución:**
```css
/* ✅ CORRECTO */
.button--danger { }
.heading-xl { }
.card { }
.sidebar { }
```

**Impacto:** Nombres no semánticos, difíciles de cambiar.

---

### ❌ Nombres muy genéricos

**Problema:**
```css
/* ❌ INCORRECTO */
.box { }
.container { }
.wrapper { }
```

**Solución:**
```css
/* ✅ CORRECTO */
.card { }
.form-container { }
.page-wrapper { }
```

**Impacto:** Ambigüedad, conflictos de nombres.

---

## 8. Errores de Variables

### ❌ No usar variables

**Problema:**
```css
/* ❌ INCORRECTO */
.button {
  background-color: #3498db;
  padding: 16px 32px;
  border-radius: 8px;
}

.card {
  background-color: #3498db;
  padding: 16px 32px;
  border-radius: 8px;
}
```

**Solución:**
```css
/* ✅ CORRECTO */
:root {
  --color-primary: #3498db;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  --radius-md: 0.5rem;
}

.button {
  background-color: var(--color-primary);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
}

.card {
  background-color: var(--color-primary);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
}
```

**Impacto:** Duplicación de código, difícil de mantener.

---

### ❌ Variables con nombres genéricos

**Problema:**
```css
/* ❌ INCORRECTO */
:root {
  --color1: #3498db;
  --color2: #2ecc71;
  --size1: 1rem;
  --size2: 2rem;
}
```

**Solución:**
```css
/* ✅ CORRECTO */
:root {
  --color-primary: #3498db;
  --color-success: #2ecc71;
  --font-size-base: 1rem;
  --spacing-lg: 2rem;
}
```

**Impacto:** Código difícil de entender y mantener.

---

## 9. Errores de Formularios

### ❌ Estilos que rompen accesibilidad

**Problema:**
```css
/* ❌ INCORRECTO */
input[type="checkbox"] {
  display: none;
}

.custom-checkbox {
  width: 20px;
  height: 20px;
  background: blue;
}
```

**Solución:**
```css
/* ✅ CORRECTO */
input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.custom-checkbox {
  position: relative;
  padding-left: 30px;
  cursor: pointer;
}

.custom-checkbox::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-sm);
}

input[type="checkbox"]:focus + .custom-checkbox::before {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

input[type="checkbox"]:checked + .custom-checkbox::after {
  content: '✓';
  position: absolute;
  left: 4px;
  top: 0;
  color: var(--color-primary);
}
```

**Impacto:** Checkbox no accesible por teclado.

---

## 10. Errores de Compatibilidad

### ❌ Browser sniffing

**Problema:**
```css
/* ❌ INCORRECTO */
@supports not (display: grid) {
  /* Fallback para navegadores antiguos */
}
```

**Solución:**
```css
/* ✅ CORRECTO: Feature detection */
@supports (display: grid) {
  .container {
    display: grid;
  }
}

@supports not (display: grid) {
  .container {
    display: flex;
    flex-wrap: wrap;
  }
}
```

**Impacto:** Código frágil, no funciona con navegadores nuevos.

---

## 11. Errores de Print Styles

### ❌ No considerar impresión

**Problema:**
```css
/* ❌ INCORRECTO: Sin estilos de impresión */
```

**Solución:**
```css
/* ✅ CORRECTO */
@media print {
  .nav,
  .sidebar,
  .footer,
  .advertisement {
    display: none !important;
  }
  
  * {
    color: black !important;
    background: white !important;
  }
  
  a[href]::after {
    content: " (" attr(href) ")";
  }
  
  body {
    font-size: 12pt;
    line-height: 1.5;
  }
}
```

**Impacto:** Páginas impresas ilegibles o con contenido innecesario.

---

## 12. Checklist de Errores Comunes

### Antes de entregar CSS, verificar:

**Arquitectura:**
- [ ] ¿Usa Custom Properties para valores repetitivos?
- [ ] ¿Evita especificidad alta?
- [ ] ¿No usa !important?
- [ ] ¿No usa IDs para estilos?
- [ ] ¿Sigue metodología de naming (BEM)?
- [ ] ¿Está organizado en archivos/carpetas?

**Responsive:**
- [ ] ¿Usa Mobile-First approach?
- [ ] ¿Los breakpoints son estratégicos?
- [ ] ¿Usa Container Queries para componentes?
- [ ] ¿Es responsive en todos los tamaños?

**Performance:**
- [ ] ¿Anima solo transform y opacity?
- [ ] ¿Usa will-change apropiadamente?
- [ ] ¿Usa contain para aislamiento?
- [ ] ¿Evita animar width, height, top, left?

**Accesibilidad:**
- [ ] ¿Focus indicators visibles?
- [ ] ¿Respeta prefers-reduced-motion?
- [ ] ¿Contraste mínimo 4.5:1?
- [ ] ¿No remueve outline sin reemplazo?

**Organización:**
- [ ] ¿Nombres semánticos?
- [ ] ¿Sin hardcodeo de valores?
- [ ] ¿Variables con nombres descriptivos?
- [ ] ¿Selectores simples?

**Compatibilidad:**
- [ ] ¿Usa @supports para feature detection?
- [ ] ¿Tiene fallbacks apropiados?
- [ ] ¿Incluye print styles?

---

## Resumen

Los errores más comunes en CSS son:
1. **Especificidad alta** - Uso de IDs, selectores complejos, !important
2. **Desktop-First** - No usar Mobile-First approach
3. **Hardcodeo** - No usar Custom Properties
4. **Performance pobre** - Animar propiedades costosas
5. **Accesibilidad neglectada** - Sin focus indicators, sin reduced motion
6. **Nombres pobres** - Nombres que describen apariencia
7. **Layout obsoleto** - Usar floats, tables, absolute positioning
8. **Sin arquitectura** - Código desorganizado, sin metodología
9. **Sin Container Queries** - Dependencia solo de viewport
10. **Sin print styles** - No considerar impresión

**Regla de oro:** CSS debe ser mantenible, escalable, accesible y con buen rendimiento. Usar metodologías probadas (BEM, Mobile-First, Custom Properties) y siempre priorizar accesibilidad.