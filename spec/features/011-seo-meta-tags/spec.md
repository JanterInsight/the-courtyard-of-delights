# Feature: SEO & Meta Tags

## Descripción

Implementar todas las optimizaciones SEO necesarias para mejorar el posicionamiento en buscadores y la compartición en redes sociales.

## Requisitos Funcionales

### RF-001: Meta Tags Básicos
- Meta description (150-160 caracteres)
- Meta keywords
- Meta author
- Meta robots
- Canonical URL

### RF-002: Open Graph (Facebook)
- og:title
- og:description
- og:image
- og:url
- og:type
- og:site_name

### RF-003: Twitter Cards
- twitter:card
- twitter:title
- twitter:description
- twitter:image

### RF-004: Structured Data
- JSON-LD schema.org/LocalBusiness
- Nombre del negocio
- Dirección
- Teléfono
- Horario de atención
- Tipo de negocio

### RF-005: HTML Semántico
- Uso de etiquetas semánticas (header, nav, main, section, footer, article)
- Jerarquía de headings correcta (h1 → h2 → h3)
- Atributos alt en todas las imágenes
- Lang="es" en html

## Requisitos No Funcionales

### RNF-001: Rendimiento
- Meta tags en head
- JSON-LD al final del body
- Sin impacto en rendimiento

### RNF-002: Accesibilidad
- Meta description descriptiva
- Alt attributes informativos

### RNF-003: Responsive
- Open Graph image responsive (1200x630px)

## Criterios de Aceptación

- [ ] Meta description presente
- [ ] Meta keywords presente
- [ ] Open Graph tags completos
- [ ] Twitter Cards implementados
- [ ] JSON-LD schema implementado
- [ ] HTML semántico correcto
- [ ] Jerarquía de headings correcta
- [ ] Atributos alt en todas las imágenes
- [ ] Canonical URL definida
- [ ] Validación de SEO exitosa