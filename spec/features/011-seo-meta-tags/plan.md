# Plan de Implementación: SEO & Meta Tags

## Enfoque

Implementar todas las optimizaciones SEO: meta tags, Open Graph, Twitter Cards, JSON-LD y HTML semántico.

## Estructura

### Archivos a Modificar
1. **index.html** - Meta tags básicos y Open Graph
2. **App.jsx** - react-helmet-async para meta tags dinámicos
3. **Componentes** - HTML semántico y atributos alt

## Pasos de Implementación

### Paso 1: Meta tags en index.html
- Meta description, keywords, author
- Open Graph tags
- Twitter Cards
- Canonical URL
- Preconnect a Google Fonts

### Paso 2: Implementar react-helmet-async
- Instalar dependencia
- Agregar HelmetProvider en main.jsx
- Meta tags dinámicos en App.jsx
- JSON-LD schema LocalBusiness

### Paso 3: HTML semántico
- Verificar uso de etiquetas semánticas
- Jerarquía de headings correcta
- Atributos alt en todas las imágenes
- Lang="es" en html

### Paso 4: Validación
- Validar meta tags
- Verificar Open Graph
- Test de JSON-LD