# HTML Modern Development - Instructions

## Purpose

Este documento proporciona instrucciones detalladas para que el agente IA desarrolle HTML5 moderno, semántico y accesible siguiendo estándares profesionales.

## When to Activate

Activar esta skill cuando:
- El usuario solicite crear estructura HTML de una página o aplicación
- Se necesite implementar marcado semántico para SEO y accesibilidad
- Se deban crear formularios accesibles con validación
- Se requiera optimizar el markup para motores de búsqueda
- Se trabaje en la estructura base de componentes
- Se necesite implementar Web APIs del navegador

## Core Rules

### 1. Estructura Semántica Obligatoria

**Regla #1: Usar etiquetas semánticas en lugar de divs**
```html
<!-- ❌ INCORRECTO -->
<div class="header">
  <div class="nav">
    <div class="logo">Mi App</div>
  </div>
</div>

<!-- ✅ CORRECTO -->
<header>
  <nav>
    <a href="/" class="logo">Mi App</a>
  </nav>
</header>
```

**Regla #2: Jerarquía de encabezados sin saltos**
```html
<!-- ❌ INCORRECTO: Salta de h1 a h3 -->
<h1>Título Principal</h1>
<h3>Subtítulo</h3>

<!-- ✅ CORRECTO: Jerarquía secuencial -->
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<h3>Sección</h3>
```

**Regla #3: Un solo h1 por página**
```html
<!-- ✅ CORRECTO -->
<body>
  <h1>Título Principal de la Página</h1>
  <main>
    <article>
      <h2>Título del Artículo</h2>
    </article>
  </main>
</body>
```

### 2. Accesibilidad WCAG 2.2 Nivel AA

**Regla #4: Todos los elementos interactivos deben ser accesibles por teclado**
```html
<!-- ❌ INCORRECTO: div con onclick no accesible -->
<div onclick="submitForm()">Enviar</div>

<!-- ✅ CORRECTO: button nativo -->
<button type="submit">Enviar</button>

<!-- Si es necesario usar div, agregar role y tabindex -->
<div role="button" tabindex="0" onclick="submitForm()" 
     onkeydown="if(event.key==='Enter') submitForm()">
  Enviar
</div>
```

**Regla #5: Imágenes siempre con texto alternativo**
```html
<!-- ❌ INCORRECTO: Sin alt -->
<img src="perfil.jpg">

<!-- ✅ CORRECTO: Alt descriptivo -->
<img src="perfil.jpg" alt="Foto de perfil de Juan Pérez, desarrollador web">

<!-- Si es decorativa -->
<img src="decoracion.png" alt="" role="presentation">
```

**Regla #6: Labels asociados a inputs**
```html
<!-- ❌ INCORRECTO: Label no asociado -->
<label>Nombre:</label>
<input type="text" id="nombre">

<!-- ✅ CORRECTO: Label con for -->
<label for="nombre">Nombre:</label>
<input type="text" id="nombre">

<!-- O usando wrapper -->
<label>
  Nombre:
  <input type="text" id="nombre">
</label>
```

**Regla #7: Contraste de color mínimo**
- Texto normal: ratio mínimo 4.5:1
- Texto grande (18px+ o 14px+ bold): ratio mínimo 3:1
- Componentes UI: ratio mínimo 3:1

```css
/* ✅ CORRECTO */
.text-primary {
  color: #1a1a1a; /* Contraste 16:1 sobre blanco */
}

/* ❌ INCORRECTO */
.text-primary {
  color: #999999; /* Contraste 2.8:1 sobre blanco - NO CUMPLE */
}
```

### 3. Formularios Accesibles

**Regla #8: Validación nativa HTML5 primero**
```html
<form>
  <div class="form-group">
    <label for="email">Correo Electrónico *</label>
    <input 
      type="email" 
      id="email" 
      name="email"
      required
      autocomplete="email"
      aria-describedby="email-error"
    >
    <span id="email-error" class="error" aria-live="polite"></span>
  </div>
  
  <div class="form-group">
    <label for="password">Contraseña *</label>
    <input 
      type="password" 
      id="password" 
      name="password"
      required
      minlength="8"
      pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
      aria-describedby="password-requirements"
    >
    <small id="password-requirements">
      Mínimo 8 caracteres, al menos una letra y un número
    </small>
  </div>
  
  <button type="submit">Registrarse</button>
</form>
```

**Regla #9: Agrupar campos relacionados con fieldset**
```html
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

**Regla #10: Proporcionar instrucciones claras**
```html
<div class="form-group">
  <label for="date">Fecha de Nacimiento</label>
  <input 
    type="date" 
    id="date" 
    name="birthdate"
    min="1920-01-01"
    max="2024-12-31"
    aria-describedby="date-help"
  >
  <small id="date-help">
    Debes ser mayor de 18 años para registrarte
  </small>
</div>
```

### 4. SEO Básico

**Regla #11: Meta tags esenciales en toda página**
```html
<head>
  <!-- Meta tags básicos -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Descripción de la página (150-160 caracteres)">
  <meta name="keywords" content="palabras, clave, relevantes">
  <meta name="author" content="Nombre del autor o empresa">
  
  <!-- Open Graph para redes sociales -->
  <meta property="og:title" content="Título para redes sociales">
  <meta property="og:description" content="Descripción para redes sociales">
  <meta property="og:image" content="https://ejemplo.com/imagen.jpg">
  <meta property="og:url" content="https://ejemplo.com/pagina">
  <meta property="og:type" content="website">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Título para Twitter">
  <meta name="twitter:description" content="Descripción para Twitter">
  
  <title>Título de la Página | Nombre del Sitio</title>
</head>
```

**Regla #12: Structured Data (JSON-LD)**
```html
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
  "datePublished": "2024-01-15"
}
</script>
```

### 5. Atributos Internacionalización

**Regla #13: Especificar idioma del documento**
```html
<!-- Español -->
<html lang="es">
<head>
  <meta charset="UTF-8">
</head>
<body>
  <!-- Inglés -->
  <p lang="en">Hello World</p>
  
  <!-- Francés -->
  <p lang="fr">Bonjour le monde</p>
</body>
</html>
```

### 6. DOCTYPE y Configuración Base

**Regla #14: Estructura mínima de documento HTML5**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Título de la Página</title>
</head>
<body>
  <!-- Contenido de la página -->
</body>
</html>
```

## Workflow

### Paso 1: Planificación de la Estructura
1. Identificar el propósito de la página
2. Determinar la estructura semántica necesaria
3. Listar los elementos interactivos
4. Planificar la jerarquía de encabezados

### Paso 2: Creación del Markup
1. Escribir DOCTYPE y estructura base
2. Implementar etiquetas semánticas
3. Agregar meta tags para SEO
4. Crear la estructura de contenido

### Paso 3: Accesibilidad
1. Verificar que todos los elementos interactivos sean accesibles por teclado
2. Agregar textos alternativos a imágenes
3. Asociar labels a formularios
4. Verificar contraste de colores
5. Agregar atributos ARIA donde sea necesario

### Paso 4: Formularios (si aplica)
1. Usar validación nativa HTML5
2. Agregar atributos apropiados (required, type, pattern)
3. Proporcionar mensajes de error accesibles
4. Agrupar campos relacionados con fieldset

### Paso 5: Validación
1. Validar HTML en https://validator.w3.org/
2. Verificar accesibilidad con herramientas automatizadas
3. Probar navegación por teclado
4. Verificar contraste de colores

## Best Practices

### 1. HTML Semántico
- ✅ Usar la etiqueta más específica para cada contenido
- ✅ Mantener una jerarquía de encabezados lógica
- ✅ Un solo `<h1>` por página
- ✅ Usar `<main>` para el contenido principal
- ✅ Usar `<nav>` para navegación principal
- ✅ Usar `<article>` para contenido independiente
- ✅ Usar `<section>` para agrupar contenido temático
- ✅ Usar `<aside>` para contenido relacionado

### 2. Accesibilidad
- ✅ Proporcionar texto alternativo descriptivo en imágenes
- ✅ Usar etiquetas `<label>` para todos los inputs
- ✅ Asegurar navegación completa por teclado
- ✅ Usar `aria-live` para contenido dinámico
- ✅ Proporcionar instrucciones claras en formularios
- ✅ Verificar contraste de colores (4.5:1 mínimo)
- ✅ Especificar idioma con `lang` attribute

### 3. SEO
- ✅ Meta description única por página (150-160 caracteres)
- ✅ Un solo `<title>` por página
- ✅ URLs semánticas y legibles
- ✅ Jerarquía de encabezados clara
- ✅ Atributos `alt` en todas las imágenes
- ✅ Structured Data cuando corresponda

### 4. Formularios
- ✅ Usar tipos de input apropiados (email, tel, url, etc.)
- ✅ Validación nativa HTML5 antes de JavaScript
- ✅ Atributo `autocomplete` para mejor UX
- ✅ Mensajes de error accesibles con `aria-live`
- ✅ Agrupar radios/checkboxes con `fieldset`
- ✅ Proporcionar ejemplos y formatos esperados

### 5. Performance
- ✅ Especificar dimensiones de imágenes (`width`, `height`)
- ✅ Usar `loading="lazy"` en imágenes below-the-fold
- ✅ Usar `decoding="async"` en imágenes
- ✅ Evitar contenido embebido innecesario
- ✅ Minimizar DOM depth

## Anti Patterns

### ️ Evitar estos errores:

1. **Divitis**: Uso excesivo de `<div>` en lugar de etiquetas semánticas
   ```html
   <!-- ❌ MAL -->
   <div class="header">...</div>
   <div class="main-content">...</div>
   
   <!-- ✅ BIEN -->
   <header>...</header>
   <main>...</main>
   ```

2. **Saltos en jerarquía de encabezados**
   ```html
   <!-- ❌ MAL -->
   <h1>Título</h1>
   <h3>Subtítulo</h3>
   
   <!-- ✅ BIEN -->
   <h1>Título</h1>
   <h2>Subtítulo</h2>
   ```

3. **Múltiples h1 por página**
   ```html
   <!-- ❌ MAL -->
   <h1>Título 1</h1>
   <h1>Título 2</h1>
   
   <!-- ✅ BIEN -->
   <h1>Título Principal</h1>
   <h2>Sección 1</h2>
   <h2>Sección 2</h2>
   ```

4. **Inputs sin labels**
   ```html
   <!-- ❌ MAL -->
   <input type="text" placeholder="Nombre">
   
   <!-- ✅ BIEN -->
   <label for="nombre">Nombre</label>
   <input type="text" id="nombre">
   ```

5. **Imágenes sin alt**
   ```html
   <!-- ❌ MAL -->
   <img src="foto.jpg">
   
   <!-- ✅ BIEN -->
   <img src="foto.jpg" alt="Descripción de la imagen">
   ```

6. **Elementos clickeables no semánticos**
   ```html
   <!-- ❌ MAL -->
   <div onclick="navigate()">Click aquí</div>
   
   <!-- ✅ BIEN -->
   <a href="/ruta">Click aquí</a>
   <!-- o -->
   <button onclick="navigate()">Click aquí</button>
   ```

7. **Olvidar el atributo lang**
   ```html
   <!-- ❌ MAL -->
   <html>
   
   <!-- ✅ BIEN -->
   <html lang="es">
   ```

8. **No especificar viewport**
   ```html
   <!-- ❌ MAL -->
   <meta name="viewport" content="width=1024">
   
   <!-- ✅ BIEN -->
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

## Examples

Ver la carpeta `examples/` para ejemplos completos de:
- Página HTML semántica completa
- Formulario accesible con validación
- Estructura de blog/article
- Landing page con SEO optimizado
- Componentes accesibles

## References

- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3C HTML5 Specification](https://www.w3.org/TR/html52/)
- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [WebAIM - HTML Accessibility](https://webaim.org/techniques/html/)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [W3C HTML Validator](https://validator.w3.org/)