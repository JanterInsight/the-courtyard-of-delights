# Funcionalidad: SEO y Etiquetas Meta (SEO & Meta Tags)

## Descripción

Implementar todas las optimizaciones SEO necesarias para mejorar el posicionamiento en buscadores y la compartición en redes sociales.

## Requisitos Funcionales

### RF-001: Etiquetas Meta Básicas (Meta Tags)
- Descripción meta (meta description) (150-160 caracteres)
- Palabras clave meta (meta keywords)
- Autor meta (meta author)
- Robots meta (meta robots)
- URL canónica (canonical URL)

### RF-002: Open Graph (Facebook)
- og:title
- og:description
- og:image
- og:url
- og:type
- og:site_name

### RF-003: Tarjetas de Twitter (Twitter Cards)
- twitter:card
- twitter:title
- twitter:description
- twitter:image

### RF-004: Datos Estructurados (Structured Data)
- Esquema JSON-LD (JSON-LD schema.org/LocalBusiness)
- Nombre del negocio
- Dirección
- Teléfono
- Horario de atención
- Tipo de negocio

### RF-005: HTML Semántico
- Uso de etiquetas semánticas (header, nav, main, section, footer, article)
- Jerarquía de encabezados (headings) correcta (h1 → h2 → h3)
- Atributos alt (alt attributes) en todas las imágenes
- Atributo idioma Lang="es" en html

## Requisitos No Funcionales

### RNF-001: Rendimiento
- Etiquetas meta (meta tags) en cabecera (head)
- JSON-LD al final del cuerpo (body)
- Sin impacto en rendimiento

### RNF-002: Accesibilidad
- Descripción meta (meta description) descriptiva
- Atributos alt (alt attributes) informativos

### RNF-003: Adaptabilidad (Responsive)
- Imagen Open Graph adaptable (responsive) (1200x630px)

## Criterios de Aceptación

- [ ] Descripción meta (meta description) presente
- [ ] Palabras clave meta (meta keywords) presente
- [ ] Etiquetas Open Graph (Open Graph tags) completos
- [ ] Tarjetas de Twitter (Twitter Cards) implementados
- [ ] Esquema JSON-LD (JSON-LD schema) implementado
- [ ] HTML semántico correcto
- [ ] Jerarquía de encabezados (headings) correcta
- [ ] Atributos alt (alt attributes) en todas las imágenes
- [ ] URL canónica (canonical URL) definida
- [ ] Validación de SEO exitosa
