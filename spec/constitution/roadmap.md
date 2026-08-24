# Roadmap
Orden de las features

## Implementado

### 1. Header & Navigation
- Navegación fija con scroll effect
- Menú hamburguesa responsive para móvil
- Cierre con tecla Escape o click fuera
- Toggle de tema oscuro/claro
- Logo con emoji de helado

### 2. Hero Section
- Título y subtítulo animados
- Efecto typewriter en subtítulo con cursor parpadeante
- Descripción del negocio
- Botones CTA (Call to Action)
- Animación fade-in al cargar

### 3. About Us
- Texto descriptivo del negocio
- Imagen del local con efecto hover
- 3 contadores animados (años de experiencia, sabores, clientes)
- Activación al hacer scroll con IntersectionObserver

### 4. Products
- 4 tarjetas de productos (helados, confituras, croquetas, combinación)
- Efecto hover con scale y shadow
- Skeleton loading placeholder
- Lazy loading de imágenes

### 5. Gallery
- Grid responsive de 12 imágenes
- Overlay con icono de zoom en hover
- Lightbox con navegación anterior/siguiente
- Contador de imágenes (ej: "3 / 12")
- Zoom animation en lightbox
- Cierre con ESC, botón X o click fuera
- Navegación por teclado (← →)
- Lazy loading con skeleton

### 6. Schedule
- Diseño con gradiente oscuro
- Icono de reloj
- Horario destacado: 3:00 PM - 11:00 PM
- Efecto glassmorphism

### 7. Contact
- 3 tarjetas de contacto (teléfono, WhatsApp, mapa)
- Botones funcionales con iconos
- Link a Google Maps
- Botón de WhatsApp con mensaje predefinido

### 8. Footer
- Copyright 2026
- Diseño con colores de marca

### 9. Back to Top Button
- Aparece después de 300px de scroll
- Animación suave
- Scroll al hacer click

### 10. Dark/Light Mode
- Toggle de tema oscuro/claro
- Persistencia en localStorage
- Variables CSS para ambos temas

### 11. SEO & Meta Tags
- Meta tags completos (description, keywords, author)
- Open Graph tags (Facebook)
- Twitter Cards
- Structured data JSON-LD (LocalBusiness)
- URLs amigables
- Canonical URL
- Atributos alt en imágenes
- HTML semántico

### 12. Performance Optimizations
- Lazy loading de imágenes con skeleton placeholders
- IntersectionObserver para animaciones al hacer scroll
- CSS variables para evitar repetición
- Preconnect a Google Fonts
- Imágenes con width/height para evitar layout shift
- Componentes modulares para mejor code splitting

### 13. Accessibility (WCAG AA)
- Skip to content link
- Atributos alt descriptivos en todas las imágenes
- Navegación por teclado (Tab, Enter, Escape, flechas)
- ARIA attributes en elementos interactivos
- Focus visible states
- Respeto por `prefers-reduced-motion`
- Respeto por `prefers-contrast: high`
- Contraste WCAG AA garantizado
- HTML semántico (header, nav, main, section, footer, article)

## No implementado todavía

### 14. Functional Contact Form
- Formulario de contacto funcional con validación
- Campos: nombre, email, mensaje
- Feedback visual de envío exitoso/error
- Integración con servicio de email o backend

### 15. Gallery Filters
- Filtros por categoría (helados, confituras, croquetas, local)
- Animación al filtrar imágenes
- Contador de imágenes por categoría

### 16. Google Analytics Integration
- Integración con Google Analytics 4
- Tracking de eventos personalizados
- Dashboard de métricas de usuario

### 17. Review System
- Sistema de reseñas y calificaciones
- Integración con Google Reviews o sistema propio
- Display de reseñas en el sitio

### 18. Interactive Map
- Mapa interactivo de Google Maps embebido
- Marcador de ubicación del local
- Información de contacto en el mapa

### 19. Multilingual Support (i18n)
- Soporte multiidioma (español/inglés)
- Traducción de todos los textos del sitio
- Selector de idioma en el header

## Instrucciones

> Cada Feature Nueva se crea como 'spec/features/NNN-nombre' con 'spec.md', 'plan.md' y 'tasks.md' antes de tocar código. Si existe alguna feature que solo contenga un .md general, debes dividirlo en los tres .md anteriores, separados por funcionalidad y después eliminar ese .md general.

## Notas Adicionales

- El desarrollo sigue el flujo de **Spec-Driven Development**
- Cada feature debe tener su `spec.md`, `plan.md` y `tasks.md` antes de implementarse
- El proyecto usa **React + Vite** para el frontend
- Las features implementadas corresponden a la versión 1.0.0 del proyecto