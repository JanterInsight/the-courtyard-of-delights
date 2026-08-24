# HTML Modern Development - Common Mistakes

## 1. Errores de Estructura Semántica

### ❌ Divitis - Uso excesivo de divs

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<div class="header">
  <div class="container">
    <div class="nav">
      <div class="logo">Mi App</div>
      <div class="menu">
        <div class="menu-item">Inicio</div>
        <div class="menu-item">Acerca de</div>
      </div>
    </div>
  </div>
</div>
<div class="main-content">
  <div class="article">
    <div class="title">Título</div>
    <div class="content">Contenido...</div>
  </div>
</div>
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<header>
  <nav>
    <a href="/" class="logo">Mi App</a>
    <ul>
      <li><a href="/">Inicio</a></li>
      <li><a href="/about">Acerca de</a></li>
    </ul>
  </nav>
</header>
<main>
  <article>
    <h1>Título</h1>
    <p>Contenido...</p>
  </article>
</main>
```

**Impacto:** Peor SEO, peor accesibilidad, código menos mantenible.

---

### ❌ Saltos en jerarquía de encabezados

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<h1>Título Principal</h1>
<h3>Subtítulo</h3> <!-- Salta h2 -->
<h2>Otra sección</h2> <!-- Orden incorrecto -->
<h4>Subsección</h4> <!-- Salta de vuelta -->
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<h2>Otra sección</h2>
<h3>Subsección</h3>
```

**Impacto:** Screen readers no pueden navegar correctamente, SEO afectado.

---

### ❌ Múltiples h1 por página

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<h1>Título del Sitio</h1>
<main>
  <article>
    <h1>Título del Artículo</h1> <!-- Segundo h1 -->
  </article>
</main>
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<h1>Título del Sitio</h1>
<main>
  <article>
    <h2>Título del Artículo</h2>
  </article>
</main>
```

**Impacto:** Confusión en estructura, SEO degradado.

---

## 2. Errores de Accesibilidad

### ❌ Imágenes sin texto alternativo

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<img src="perfil.jpg">
<img src="grafico.png">
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<img src="perfil.jpg" alt="Foto de perfil de Juan Pérez, desarrollador web">
<img src="grafico.png" alt="Gráfico de ventas del Q4 2024">
```

**Impacto:** Screen readers no pueden describir la imagen, usuarios con discapacidad visual ven "[IMAGE]".

---

### ❌ Inputs sin labels

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<input type="text" placeholder="Nombre">
<input type="email" placeholder="Correo">
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<label for="nombre">Nombre</label>
<input type="text" id="nombre" name="nombre" required>

<label for="email">Correo Electrónico</label>
<input type="email" id="email" name="email" required>
```

**Impacto:** Screen readers no saben qué campo es qué, usuarios no entienden qué ingresar.

---

### ❌ Placeholder usado como label

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<input type="text" placeholder="Nombre completo">
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<label for="nombre">Nombre completo</label>
<input type="text" id="nombre" name="nombre" required>
```

**Impacto:** Placeholder desaparece al escribir, usuarios olvidan qué era el campo.

---

### ❌ Elementos clickeables no accesibles

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<div onclick="submitForm()">Enviar</div>
<span onclick="navigate()">Click aquí</span>
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<button type="submit">Enviar</button>
<a href="/ruta">Click aquí</a>
```

**Impacto:** No se puede navegar con teclado, screen readers no reconocen como interactivo.

---

### ❌ Contraste de color insuficiente

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

## 3. Errores en Formularios

### ❌ No agrupar radios/checkboxes

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<input type="radio" id="card" name="payment" value="card">
<label for="card">Tarjeta</label>

<input type="radio" id="paypal" name="payment" value="paypal">
<label for="paypal">PayPal</label>
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<fieldset>
  <legend>Método de Pago</legend>
  
  <div class="radio-group">
    <input type="radio" id="card" name="payment" value="card" checked>
    <label for="card">Tarjeta de Crédito</label>
  </div>
  
  <div class="radio-group">
    <input type="radio" id="paypal" name="payment" value="paypal">
    <label for="paypal">PayPal</label>
  </div>
</fieldset>
```

**Impacto:** Screen readers no entienden la relación entre opciones.

---

### ❌ Validación solo con JavaScript

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<input type="text" id="email">
<button onclick="validateEmail()">Enviar</button>
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<input 
  type="email" 
  id="email" 
  name="email"
  required
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
  aria-describedby="email-error"
>
<button type="submit">Enviar</button>
```

**Impacto:** Validación no funciona si JavaScript está deshabilitado.

---

### ❌ Mensajes de error no accesibles

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<div class="error" style="color: red;">Error: email inválido</div>
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<div id="email-error" class="error" role="alert" aria-live="polite">
  Por favor ingresa un correo electrónico válido
</div>
```

**Impacto:** Screen readers no anuncian el error.

---

## 4. Errores de SEO

### ❌ Meta description duplicada o ausente

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<title>Mi Página</title>
<!-- Sin meta description -->
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<title>Título Único y Descriptivo | Mi Sitio</title>
<meta name="description" content="Descripción única de esta página (150-160 caracteres)">
```

**Impacto:** Peor ranking en motores de búsqueda, snippet genérico en resultados.

---

### ❌ Títulos duplicados

**Problema:**
```html
<!-- Página 1 -->
<title>Mi Sitio</title>

<!-- Página 2 -->
<title>Mi Sitio</title>
```

**Solución:**
```html
<!-- Página 1 -->
<title>Sobre Nosotros | Mi Sitio</title>

<!-- Página 2 -->
<title>Contacto | Mi Sitio</title>
```

**Impacto:** Motores de búsqueda no pueden diferenciar páginas.

---

### ❌ URLs no semánticas

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<a href="/page.php?id=123&cat=5">Artículo</a>
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<a href="/blog/como-aprender-react">Artículo</a>
```

**Impacto:** Peor SEO, URLs menos legibles.

---

## 5. Errores de Performance

### ❌ Imágenes sin dimensiones

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<img src="imagen.jpg" alt="Descripción">
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<img src="imagen.jpg" alt="Descripción" width="800" height="600" loading="lazy">
```

**Impacto:** Layout shift (CLS), peor Core Web Vitals.

---

### ❌ Lazy loading en above-the-fold

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<img src="logo.jpg" alt="Logo" loading="lazy">
<img src="hero.jpg" alt="Hero" loading="lazy">
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<img src="logo.jpg" alt="Logo"> <!-- Above-the-fold: sin lazy -->
<img src="hero.jpg" alt="Hero"> <!-- Above-the-fold: sin lazy -->
<img src="galeria1.jpg" alt="Imagen 1" loading="lazy"> <!-- Below-the-fold: con lazy -->
```

**Impacto:** Peor LCP (Largest Contentful Paint).

---

### ❌ No especificar charset

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<html>
<head>
  <title>Mi Página</title>
</head>
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi Página</title>
</head>
```

**Impacto:** Problemas de encoding, caracteres extraños.

---

## 6. Errores de Configuración Base

### ❌ Olvidar DOCTYPE

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<html>
<head>
  <title>Mi Página</title>
</head>
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi Página</title>
</head>
```

**Impacto:** Quirks mode en navegadores, comportamiento inconsistente.

---

### ❌ No especificar viewport

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<meta name="viewport" content="width=1024">
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Impacto:** Página no responsive en móviles.

---

### ❌ Olvidar idioma

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<html>
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<html lang="es">
```

**Impacto:** Screen readers usan pronunciación incorrecta, motores de búsqueda no identifican idioma.

---

## 7. Errores de Seguridad

### ❌ innerHTML con contenido no confiable

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<div id="content"></div>
<script>
  const userInput = '<script>alert("xss")</script>';
  document.getElementById('content').innerHTML = userInput;
</script>
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<div id="content"></div>
<script>
  const userInput = '<script>alert("xss")</script>';
  document.getElementById('content').textContent = userInput;
</script>
```

**Impacto:** Vulnerabilidad XSS.

---

### ❌ No escapar caracteres especiales

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<p>5 > 3 && 10 < 20</p> <!-- Navegadores interpretan como tags -->
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<p>5 > 3 && 10 < 20</p>
```

**Impacto:** Renderizado incorrecto, posibles vulnerabilidades.

---

## 8. Errores de Organización

### ❌ Código mal indentado

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Mi Página</title>
</head>
<body>
<header>
<nav>
<a href="/">Inicio</a>
</nav>
</header>
<main>
<article>
<h1>Título</h1>
<p>Contenido</p>
</article>
</main>
</body>
</html>
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi Página</title>
</head>
<body>
  <header>
    <nav>
      <a href="/">Inicio</a>
    </nav>
  </header>
  
  <main>
    <article>
      <h1>Título</h1>
      <p>Contenido</p>
    </article>
  </main>
</body>
</html>
```

**Impacto:** Código difícil de leer y mantener.

---

### ❌ Etiquetas sin cerrar

**Problema:**
```html
<!-- ❌ INCORRECTO -->
<p>Este es un párrafo
<div>Contenido del div</div>
```

**Solución:**
```html
<!-- ✅ CORRECTO -->
<p>Este es un párrafo</p>
<div>Contenido del div</div>
```

**Impacto:** Renderizado impredecible, errores en validator W3C.

---

## 9. Errores de Compatibilidad

### ❌ Browser sniffing

**Problema:**
```javascript
// ❌ INCORRECTO
if (navigator.userAgent.indexOf('Chrome') > -1) {
  // Código específico para Chrome
}
```

**Solución:**
```javascript
// ✅ CORRECTO
if ('IntersectionObserver' in window) {
  // Feature detection
}
```

**Impacto:** Código frágil, no funciona con navegadores nuevos.

---

## 10. Checklist de Errores Comunes

### Antes de entregar código HTML, verificar:

**Estructura:**
- [ ] ¿Usa etiquetas semánticas en lugar de divs?
- [ ] ¿Hay un solo h1 por página?
- [ ] ¿La jerarquía de encabezados es secuencial?
- [ ] ¿Todas las etiquetas están cerradas correctamente?
- [ ] ¿El código está indentado consistentemente?

**Accesibilidad:**
- [ ] ¿Todas las imágenes tienen alt descriptivo?
- [ ] ¿Todos los inputs tienen labels asociados?
- [ ] ¿Los elementos interactivos son accesibles por teclado?
- [ ] ¿El contraste de color cumple WCAG AA (4.5:1)?
- [ ] ¿Los formularios tienen validación nativa HTML5?
- [ ] ¿Los mensajes de error son accesibles (aria-live)?

**SEO:**
- [ ] ¿Cada página tiene meta description única?
- [ ] ¿Los títulos son únicos por página?
- [ ] ¿Las URLs son semánticas?
- [ ] ¿Hay structured data cuando corresponda?

**Performance:**
- [ ] ¿Las imágenes tienen width y height?
- [ ] ¿Las imágenes below-the-fold tienen loading="lazy"?
- [ ] ¿Se especificó viewport correctamente?

**Configuración:**
- [ ] ¿Tiene DOCTYPE?
- [ ] ¿Tiene charset UTF-8?
- [ ] ¿Tiene lang attribute?
- [ ] ¿Tiene viewport meta tag?

**Seguridad:**
- [ ] ¿Se escapa contenido dinámico?
- [ ] ¿No se usa innerHTML con contenido no confiable?

---

## Resumen

Los errores más comunes en HTML son:
1. **Divitis** - Uso excesivo de divs
2. **Falta de accesibilidad** - Sin labels, sin alt, sin contraste
3. **Jerarquía incorrecta** - Saltos en headings, múltiples h1
4. **SEO deficiente** - Meta tags faltantes o duplicados
5. **Performance pobre** - Imágenes sin optimizar
6. **Configuración incompleta** - Sin DOCTYPE, charset, lang, viewport
7. **Validación nativa ignorada** - Dependencia solo de JavaScript
8. **Seguridad descuidada** - XSS vulnerabilities

**Regla de oro:** Siempre validar HTML en https://validator.w3.org/ y verificar accesibilidad antes de entregar.