# Roadmap
Orden de las funcionalidades (features)

## Implementado

### 1. Cabecera y Navegación (Header & Navigation)
- Navegación fija con efecto al desplazarse (scroll effect)
- Menú hamburguesa adaptable (responsive) para móvil
- Cierre con tecla Escape o clic fuera
- Alternador (toggle) de tema oscuro/claro
- Logo con emoji de helado

### 2. Sección Principal (Hero Section)
- Título y subtítulo animados
- Efecto de máquina de escribir (typewriter) en subtítulo con cursor parpadeante
- Descripción del negocio
- Botones de llamada a la acción (CTA, Call to Action)
- Animación de aparición gradual (fade-in) al cargar

### 3. Sobre Nosotros (About Us)
- Texto descriptivo del negocio
- Imagen del local con efecto al pasar el cursor (hover)
- 3 contadores animados (años de experiencia, sabores, clientes)
- Activación al desplazarse (scroll) con IntersectionObserver

### 4. Productos (Products)
- 4 tarjetas de productos (helados, confituras, croquetas, combinación)
- Efecto al pasar el cursor (hover) con escalado (scale) y sombra (shadow)
- Marcador de posición esqueleto (skeleton loading placeholder)
- Carga diferida (lazy loading) de imágenes

### 5. Galería (Gallery)
- Cuadrícula adaptable (responsive grid) de 12 imágenes
- Superposición (overlay) con icono de zoom al pasar el cursor (hover)
- Visor emergente (lightbox) con navegación anterior/siguiente
- Contador de imágenes (ej: "3 / 12")
- Animación de zoom (zoom animation) en visor emergente (lightbox)
- Cierre con ESC, botón X o clic fuera
- Navegación por teclado (← →)
- Carga diferida (lazy loading) con esqueleto (skeleton)

### 6. Horarios (Schedule)
- Diseño con gradiente oscuro
- Icono de reloj
- Horario destacado: 3:00 PM - 11:00 PM
- Efecto de vidrio esmerilado (glassmorphism)

### 7. Contacto (Contact)
- 3 tarjetas de contacto (teléfono, WhatsApp, mapa)
- Botones funcionales con iconos
- Enlace (link) a Google Maps
- Botón de WhatsApp con mensaje predefinido

### 8. Pie de Página (Footer)
- Copyright 2026
- Diseño con colores de marca

### 9. Botón Volver Arriba (Back to Top Button)
- Aparece después de 300px de desplazamiento (scroll)
- Animación suave
- Desplazamiento (scroll) al hacer clic

### 10. Modo Oscuro/Claro (Dark/Light Mode)
- Alternador (toggle) de tema oscuro/claro
- Persistencia en almacenamiento local (localStorage)
- Variables CSS para ambos temas

### 11. SEO y Metaetiquetas (SEO & Meta Tags)
- Metaetiquetas (meta tags) completas (description, keywords, author)
- Etiquetas Open Graph (Open Graph tags, Facebook)
- Tarjetas de Twitter (Twitter Cards)
- Datos estructurados (structured data) JSON-LD (LocalBusiness)
- URLs amigables
- URL canónica (Canonical URL)
- Atributos alt en imágenes
- HTML semántico

### 12. Optimizaciones de Rendimiento (Performance Optimizations)
- Carga diferida (lazy loading) de imágenes con marcadores de posición esqueleto (skeleton placeholders)
- IntersectionObserver para animaciones al desplazarse (scroll)
- Variables CSS (CSS variables) para evitar repetición
- Preconexión (preconnect) a Google Fonts
- Imágenes con width/height para evitar desplazamiento de diseño (layout shift)
- Componentes modulares para mejor división de código (code splitting)

### 13. Accesibilidad (Accessibility, WCAG AA)
- Enlace de salto al contenido (skip to content link)
- Atributos alt descriptivos en todas las imágenes
- Navegación por teclado (Tab, Enter, Escape, flechas)
- Atributos ARIA (ARIA attributes) en elementos interactivos
- Estados visibles de foco (focus visible states)
- Respeto por `prefers-reduced-motion`
- Respeto por `prefers-contrast: high`
- Contraste WCAG AA garantizado
- HTML semántico (header, nav, main, section, footer, article)

## No implementado todavía

### 14. Formulario de Contacto Funcional (Functional Contact Form)
- Formulario de contacto funcional con validación
- Campos: nombre, email, mensaje
- Retroalimentación (feedback) visual de envío exitoso/error
- Integración con servicio de email o backend

### 15. Filtros de Galería (Gallery Filters)
- Filtros por categoría (helados, confituras, croquetas, local)
- Animación al filtrar imágenes
- Contador de imágenes por categoría

### 16. Integración con Google Analytics (Google Analytics Integration)
- Integración con Google Analytics 4
- Seguimiento (tracking) de eventos personalizados
- Panel (dashboard) de métricas de usuario

### 17. Sistema de Reseñas (Review System)
- Sistema de reseñas y calificaciones
- Integración con Google Reviews o sistema propio
- Visualización (display) de reseñas en el sitio

### 18. Mapa Interactivo (Interactive Map)
- Mapa interactivo de Google Maps incrustado (embedded)
- Marcador de ubicación del local
- Información de contacto en el mapa

### 19. Soporte Multiidioma (Multilingual Support, i18n)
- Soporte multiidioma (español/inglés)
- Traducción de todos los textos del sitio
- Selector de idioma en la cabecera (header)

## Instrucciones

> Cada Funcionalidad (Feature) Nueva se crea como 'spec/features/NNN-nombre' con 'spec.md', 'plan.md' y 'tasks.md' antes de tocar código. Si existe alguna funcionalidad que solo contenga un .md general, debes dividirlo en los tres .md anteriores, separados por funcionalidad y después eliminar ese .md general.

## Notas Adicionales

- El desarrollo sigue el flujo de **Desarrollo Guiado por Especificaciones (Spec-Driven Development)**
- Cada funcionalidad (feature) debe tener su `spec.md`, `plan.md` y `tasks.md` antes de implementarse
- El proyecto usa **React + Vite** para el frontend
