# El Patio de las Delicias

## 1. Product Overview

**El Patio de las Delicias** (The Courtyard of Delights) es una landing page moderna para una tienda de artesanía de helado, confitería y croquetas. El sitio web presenta la marca, sus productos y su historia en una experiencia visual acogedora y responsive.

- **Tipo:** Landing page / sitio web corporativo
- **Público:** Clientes locales y visitantes del barrio
- **Idioma:** Español
- **Plataforma:** Web adaptativa (móvil, tableta, escritorio)
- **Estado actual:** Página web creada con React + Vite + TypeScript, operativa y desplegada en GitHub Pages.

## 2. Users

- **Principal:** Clientes locales y vecinos de Calle 4ta, La Güira, que visitan la tienda regularmente o desean conocer la oferta.
- **Secundario:** Turistas y visitantes que buscan experiencias gastronómicas auténticas en el área.
- **Terciario:** Compradores de regalos, amantes de la comida y personas interesadas en la historia y la artesanía del producto.

## 3. Jobs to be Done

- **Aprender** sobre la tienda, sus productos (helados, confites, croquetas) y su historia artesanal.
- **Conocer** la experiencia sensorial de la marca a través de una presentación visual atractiva.
- **Encontrar** información de contacto, horarios de visita y ubicación para planificar una visita.
- **Construir** confianza en la calidad y autenticidad de los productos artesanales.

## 4. Product Principles

- **Autenticidad artesanal:** Reflejar la calidad, el cuidado y la tradición detrás de cada producto.
- **Experiencia sensorial:** Usar color, tipografía y animación para evocar la dulzura y alegría de los productos.
- **Accesibilidad y universalidad:** Que toda la comunidad pueda acceder al contenido (WCAG AA, navegación por teclado, contrastes adecuados).
- **Presencia local pero viva digitalmente:** Representar la esencia de un negocio físico con una base digital clara y útil.

## 5. Scope

### En alcance actual
- Página de inicio con menú deslizante responsive.
- Sección Hero con presentación de marca.
- Sección Acerca de (sobre la tienda y su historia).
- Sección Productos (helados, confites, croquetas) con galería e imágenes.
- Sección Galería con lightbox.
- Sección Horarios y Contacto.
- Pie de página con enlaces de contacto y accesibilidad.
- Modo claro/oscuro con persistencia en localStorage.
- Animaciones suaves con IntersectionObserver.
- SEO optimizado (meta tags, Open Graph, JSON-LD).

### Fuera de alcance (futuro, no implementado aún)
- Sistema de compras online.
- Reserva de citas o mesas.
- Panel de administración.
- Backend para gestión de catálogo.

## 6. Stack

- **Frontend:** React 18 + TypeScript (strict) + Vite 5
- **Estilos:** CSS Variables, CSS (no framework), responsive design
- **Animaciones:** IntersectionObserver API + animations CSS/JS custom
- **SEO:** Meta tags, Open Graph, JSON-LD (LocalBusiness)
- **I18n:** Español (contenido único)
- **Deps adicionales:** No se usan librerías de UI (CSS puro + React)

## 7. Platform

- **Plataforma:** Web (adaptativa)
- **Dispositivos:** Móvil, tableta, escritorio
- **Navegadores compatibles:** Chrome, Firefox, Edge, Safari, OperaGX
- **Modo claro/oscuro:** Soportado con persistente local

## 8. Key Constraints

- **Paleta colores:** Asignada fixed en el spec (blanco, negro, apoyo) - colores pastel/verdes/azules/malos.
- **Tipografía:** Fredoka (principal) + Poppins (respaldo) - cargadas desde Google Fonts.
- **Idioma:** Solo español.
- **Accesibilidad:** WCAG AA mínimo - navegación por teclado, ARIA, contrastes razonables, skip-to-content link.
- **SEO:** Meta tags, Open Graph, JSON-LD para LocalBusiness.
- **Rendimiento:** Light animations, no framework de CSS, CSS variables para el sistema de diseño.

## 9. Quality & Testing

- **EsLint:** Configuración flat con reglas de React Hooks.
- **TypeScript:** Strict mode, type-checking en el build.
- **Pruebas:** Directorios code/tests/ vacíos aún - pruebas futuras definidas.
- **Deploy:** Automático a GitHub Pages en push a master.

## 10. Assumptions

- (Asumido) La marca es conocida en La Güira y busca ampliar su presencia digital.
- (Asumido) El público primario local conoce la tienda; la web complementa la experiencia física.
- (Asumido) No se requiere e-commerce o reservas en esta fase; la web es de información y presentación.
- (Asumido) El contenido visual (fotos de productos) ya existe en code/public/images/.
- (Asumido) No se requiere internacionalización adicional más del español.

## 11. References

- spec/general-spec.md - Paleta, tipografía, lenguaje, navegadores.
- code/README.md - Estructura del proyecto y arquitectura.
- docs/CHANGELOG.md - Registro de cambios.
- code/src/ - Implementación del frontend.
