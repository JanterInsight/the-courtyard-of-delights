# HTML Modern Development - Best Practices

## 1. Estructura Semántica

### Usar etiquetas semánticas apropiadas

**✅ SIEMPRE usar:**
- `<header>` - Encabezado del sitio o sección
- `<nav>` - Navegación principal
- `<main>` - Contenido principal único
- `<article>` - Contenido independiente y autónomo
- `<section>` - Agrupación temática de contenido
- `<aside>` - Contenido relacionado tangencial
- `<footer>` - Pie de página
- `<figure>` y `<figcaption>` - Imágenes con leyenda

**❌ EVITAR:**
- Uso excesivo de `<div>` sin propósito semántico
- `<div>` para todo cuando existen etiquetas más específicas

### Jerarquía de encabezados

**Regla de oro:**
- Un solo `<h1>` por página (el título principal)
- `<h2>` para secciones principales
- `<h3>` para subsecciones
- No saltar niveles (h1 → h3 es incorrecto)

```html
<!-- ✅ CORRECTO -->
<h1>Título Principal del Sitio</h1>
<main>
  <article>
    <h2>Título del Artículo</h2>
    <p>Contenido...</p>
    
    <h3>Sección del Artículo</h3>
    <p>Más contenido...</p>
  </article>
</main>

<!-- ❌ INCORRECTO -->
<h1>Título Principal</h1>
<h3>Subtítulo</h3> <!-- Salto de nivel -->
<h2>Otra sección</h2> <!-- Orden incorrecto -->
```

## 2. Accesibilidad (WCAG 2.2 Nivel AA)

### Textos alternativos en imágenes

**Imágenes informativas:**
```html
<!-- ✅ CORRECTO: Describe el contenido/contexto -->
<img src="equipo-trabajando.jpg" alt="Equipo de desarrollo trabajando en una sala de reuniones moderna">
```

**Imágenes decorativas:**
```html
<!-- ✅ CORRECTO: Alt vacío para imágenes decorativas -->
<img src="decoracion.png" alt="" role="presentation">
```

**Imágenes con texto:**
```html
<!-- ✅ CORRECTO: Incluir el texto de la imagen en el alt -->
<img src="logo-empresa.png" alt="TechCorp - Soluciones Tecnológicas">
```

### Navegación por teclado

**Elementos interactivos nativos:**
```html
<!-- ✅ CORRECTO: Elementos nativos son accesibles por defecto -->
<button>Enviar</button>
<a href="/ruta">Enlace</a>
<input type="checkbox">
<select><option>Opción</option></select>
```

**Elementos personalizados:**
```html
<!-- ✅ CORRECTO: Agregar role, tabindex y manejadores de teclado -->
<div 
  role="button" 
  tabindex="0"
  onclick="handleClick()"
  onkeydown="if(event.key==='Enter' || event.key===' ') { handleClick(); event.preventDefault(); }"
>
  Botón Personalizado
</div>
```

### Contraste de color

**Verificar ratios mínimos:**
- Texto normal (< 18px): 4.5:1
- Texto grande (≥ 18px o ≥ 14px bold): 3:1
- Componentes UI: 3:1

```css
/* ✅ CORRECTO */
.text-primary {
  color: #1a1a1a; /* 16.1:1 sobre blanco */
  background-color: #ffffff;
}

.text-secondary {
  color: #4a4a4a; /* 7.2:1 sobre blanco */
  background-color: #ffffff;
}

/* ❌ INCORRECTO */
.text-low-contrast {
  color: #999999; /* 2.8:1 sobre blanco - NO CUMPLE */
  background-color: #ffffff;
}
```

### ARIA attributes

**Usar ARIA solo cuando sea necesario:**
```html
<!-- ✅ CORRECTO: HTML semántico primero -->
<button aria-expanded="false" aria-controls="menu">
  Menú
</button>
<div id="menu" hidden>
  <!-- Contenido del menú -->
</div>

<!-- ✅ CORRECTO: aria-live para contenido dinámico -->
<div aria-live="polite" aria-atomic="true">
  <!-- Notificaciones que cambian dinámicamente -->
</div>

<!-- ❌ INCORRECTO: No usar ARIA si HTML semántico es suficiente -->
<div role="button" tabindex="0">Click</div> <!-- Mejor usar <button> -->
```

## 3. Formularios Accesibles

### Validación nativa HTML5

**Siempre usar validación nativa primero:**
```html
<!-- ✅ CORRECTO -->
<input 
  type="email"
  required
  minlength="5"
  maxlength="100"
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
  autocomplete="email"
  aria-required="true"
  aria-describedby="email-error"
>
<span id="email-error" class="error" aria-live="polite"></span>
```

### Labels obligatorios

**Todo input debe tener un label asociado:**
```html
<!-- ✅ CORRECTO: Label con for -->
<label for="username">Nombre de Usuario</label>
<input type="text" id="username" name="username" required>

<!-- ✅ CORRECTO: Wrapper implícito -->
<label>
  Nombre de Usuario
  <input type="text" name="username" required>
</label>

<!-- ❌ INCORRECTO: Placeholder no reemplaza label -->
<input type="text" placeholder="Nombre de Usuario">
```

### Agrupación con fieldset

**Para grupos de opciones relacionadas:**
```html
<fieldset>
  <legend>Notificaciones por correo electrónico</legend>
  
  <div class="checkbox-group">
    <input type="checkbox" id="notif-news" name="notifications" value="news">
    <label for="notif-news">Noticias y actualizaciones</label>
  </div>
  
  <div class="checkbox-group">
    <input type="checkbox" id="notif-promo" name="notifications" value="promo">
    <label for="notif-promo">Promociones especiales</label>
  </div>
</fieldset>
```

### Mensajes de error accesibles

```html
<div class="form-group">
  <label for="password">Contraseña *</label>
  <input 
    type="password" 
    id="password" 
    name="password"
    required
    minlength="8"
    aria-describedby="password-error password-help"
    aria-invalid="true"
  >
  <div id="password-error" class="error" role="alert">
    La contraseña debe tener al menos 8 caracteres
  </div>
  <small id="password-help">
    Incluye mayúsculas, minúsculas y números
  </small>
</div>
```

## 4. SEO Optimization

### Meta tags esenciales

**En toda página:**
```html
<head>
  <!-- Caracteres y viewport -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO básico -->
  <title>Título Único y Descriptivo (50-60 caracteres) | Nombre del Sitio</title>
  <meta name="description" content="Descripción única de la página (150-160 caracteres)">
  <meta name="keywords" content="palabras, clave, relevantes">
  <meta name="author" content="Nombre del autor o empresa">
  <link rel="canonical" href="https://ejemplo.com/pagina">
  
  <!-- Open Graph (Facebook, LinkedIn) -->
  <meta property="og:title" content="Título para redes sociales">
  <meta property="og:description" content="Descripción atractiva para redes">
  <meta property="og:image" content="https://ejemplo.com/imagen-og.jpg">
  <meta property="og:url" content="https://ejemplo.com/pagina">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Nombre del Sitio">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Título para Twitter">
  <meta name="twitter:description" content="Descripción para Twitter">
  <meta name="twitter:image" content="https://ejemplo.com/imagen-twitter.jpg">
</head>
```

### Structured Data (JSON-LD)

**Para contenido específico:**
```html
<!-- Artículo -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Título del Artículo",
  "description": "Descripción del artículo",
  "image": "https://ejemplo.com/imagen.jpg",
  "author": {
    "@type": "Person",
    "name": "Nombre del Autor"
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-01-20"
}
</script>

<!-- Producto -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Nombre del Producto",
  "description": "Descripción del producto",
  "image": "https://ejemplo.com/producto.jpg",
  "offers": {
    "@type": "Offer",
    "price": "99.99",
    "priceCurrency": "USD"
  }
}
</script>
```

### URLs semánticas

**✅ CORRECTO:**
- `/blog/como-aprender-react`
- `/productos/auriculares-inalambricos`
- `/usuarios/juan-perez`

**❌ INCORRECTO:**
- `/blog?id=123`
- `/p.php?cat=5&id=789`
- `/u/456`

## 5. Performance

### Optimización de imágenes

```html
<!-- ✅ CORRECTO: Dimensiones especificadas -->
<img 
  src="imagen.jpg" 
  alt="Descripción"
  width="800"
  height="600"
  loading="lazy"
  decoding="async"
>

<!-- ✅ CORRECTO: Imágenes responsivas -->
<picture>
  <source 
    media="(min-width: 1200px)" 
    srcset="imagen-large.jpg"
  >
  <source 
    media="(min-width: 768px)" 
    srcset="imagen-medium.jpg"
  >
  <img 
    src="imagen-small.jpg" 
    alt="Descripción"
    loading="lazy"
  >
</picture>
```

### Lazy loading

```html
<!-- ✅ CORRECTO: Lazy loading en imágenes below-the-fold -->
<img src="imagen-abajo.jpg" alt="Descripción" loading="lazy">

<!-- ❌ INCORRECTO: Lazy loading en imágenes above-the-fold -->
<img src="logo.jpg" alt="Logo" loading="lazy"> <!-- No usar lazy en above-the-fold -->
```

### Preload recursos críticos

```html
<head>
  <!-- Preload fuentes críticas -->
  <link rel="preload" href="fonts/main-font.woff2" as="font" type="font/woff2" crossorigin>
  
  <!-- Preload CSS crítico -->
  <link rel="preload" href="css/critical.css" as="style">
  
  <!-- Preload imagen above-the-fold -->
  <link rel="preload" href="images/hero.jpg" as="image">
</head>
```

## 6. Internacionalización

### Especificar idioma

```html
<!-- ✅ CORRECTO: Idioma del documento -->
<html lang="es">
<head>
  <meta charset="UTF-8">
</head>
<body>
  <p>Contenido en español</p>
  
  <!-- Contenido en otros idiomas -->
  <p lang="en">Hello World</p>
  <p lang="fr">Bonjour le monde</p>
</body>
</html>
```

### Dirección de texto

```html
<!-- Para idiomas de derecha a izquierda (árabe, hebreo) -->
<html lang="ar" dir="rtl">
```

## 7. Validación y Testing

### Validación W3C

**Siempre validar el HTML:**
1. Usar https://validator.w3.org/
2. Corregir todos los errores
3. Revisar advertencias

### Accesibilidad

**Herramientas de testing:**
- axe DevTools (extensión de navegador)
- WAVE (extensión de navegador)
- Lighthouse (Chrome DevTools)
- Screen readers (NVDA, JAWS, VoiceOver)

**Checklist de accesibilidad:**
- [ ] Navegación completa por teclado (Tab, Enter, Escape, flechas)
- [ ] Todos los elementos interactivos tienen focus visible
- [ ] Imágenes tienen texto alternativo apropiado
- [ ] Formularios tienen labels asociados
- [ ] Contraste de color cumple WCAG AA (4.5:1)
- [ ] No hay errores en validator W3C
- [ ] Estructura de encabezados es lógica
- [ ] ARIA attributes usados correctamente

## 8. Organización del Código

### Indentación y formato

```html
<!-- ✅ CORRECTO: Indentación consistente (2 o 4 espacios) -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título</title>
</head>
<body>
  <header>
    <nav>
      <a href="/">Inicio</a>
      <a href="/about">Acerca de</a>
    </nav>
  </header>
  
  <main>
    <article>
      <h1>Título del Artículo</h1>
      <p>Contenido...</p>
    </article>
  </main>
  
  <footer>
    <p>&copy; 2024 Mi Empresa</p>
  </footer>
</body>
</html>
```

### Comentarios

```html
<!-- Usar comentarios para secciones complejas -->
<header>
  <!-- Navegación principal -->
  <nav>...</nav>
</header>

<main>
  <!-- Contenido del artículo -->
  <article>...</article>
  
  <!-- Barra lateral con contenido relacionado -->
  <aside>...</aside>
</main>
```

## 9. Compatibilidad de Navegadores

### Modern browsers (target principal)

**Soporte para:**
- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- iOS Safari (últimas 2 versiones)

### Feature detection

```html
<!-- Usar feature detection en lugar de browser sniffing -->
<script>
  // Verificar soporte de feature
  if ('IntersectionObserver' in window) {
    // Usar IntersectionObserver
  } else {
    // Fallback
  }
</script>
```

## 10. Seguridad Básica

### Prevenir XSS

```html
<!-- ✅ CORRECTO: Escapar contenido dinámico -->
<p id="user-content"></p>
<script>
  const userInput = '<script>alert("xss")</script>';
  document.getElementById('user-content').textContent = userInput;
</script>

<!-- ❌ INCORRECTO: innerHTML con contenido no confiable -->
<div id="content"></div>
<script>
  document.getElementById('content').innerHTML = userInput; // PELIGROSO
</script>
```

### Content Security Policy

```html
<head>
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://apis.google.com;">
</head>
```

## Resumen de Mejores Prácticas

### ✅ SIEMPRE:
1. Usar etiquetas semánticas apropiadas
2. Mantener jerarquía de encabezados lógica
3. Un solo `<h1>` por página
4. Proporcionar texto alternativo en imágenes
5. Asociar labels a todos los inputs
6. Usar validación nativa HTML5
7. Especificar idioma con `lang`
8. Incluir meta tags esenciales para SEO
9. Verificar contraste de colores (4.5:1 mínimo)
10. Validar HTML en W3C validator

### ❌ NUNCA:
1. Usar `<div>` cuando existe etiqueta semántica
2. Saltar niveles de encabezados
3. Tener múltiples `<h1>` por página
4. Olvidar labels en formularios
5. Usar placeholder como label
6. Confiar solo en placeholder para instrucciones
7. Olvidar el atributo `lang`
8. No especificar viewport
9. Usar `onclick` en elementos no semánticos
10. Ignorar validación W3C