# Plan de Implementación: SEO y Etiquetas Meta (SEO & Meta Tags)

## Enfoque

Implementar todas las optimizaciones SEO: etiquetas meta (meta tags), Open Graph, Tarjetas de Twitter (Twitter Cards), JSON-LD y HTML semántico.

## Estructura

### Archivos a Modificar
1. **index.html** - Etiquetas meta básicas (meta tags) y Open Graph
2. **App.jsx** - react-helmet-async para etiquetas meta dinámicas (dynamic meta tags)
3. **Componentes** - HTML semántico y atributos alt (alt attributes)

## Pasos de Implementación

### Paso 1: Etiquetas meta (meta tags) en index.html
- Descripción meta (meta description), palabras clave (keywords), autor (author)
- Etiquetas Open Graph (Open Graph tags)
- Tarjetas de Twitter (Twitter Cards)
- URL canónica (canonical URL)
- Preconexión (preconnect) a Google Fonts

### Paso 2: Implementar react-helmet-async
- Instalar dependencia
- Agregar Proveedor Helmet (HelmetProvider) en main.jsx
- Etiquetas meta dinámicas (dynamic meta tags) en App.jsx
- Esquema JSON-LD (JSON-LD schema) LocalBusiness

### Paso 3: HTML semántico
- Verificar uso de etiquetas semánticas
- Jerarquía de encabezados (headings) correcta
- Atributos alt (alt attributes) en todas las imágenes
- Atributo idioma Lang="es" en html

### Paso 4: Validación
- Validar etiquetas meta (meta tags)
- Verificar Open Graph
- Prueba (test) de JSON-LD
