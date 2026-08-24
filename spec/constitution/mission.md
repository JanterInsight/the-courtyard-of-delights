# Misión del Proyecto

## Propósito

Crear una landing page moderna, responsive y accesible para **El Patio de las Delicias**, un local especializado en helados artesanales, confituras caseras y croquetas crujientes. El sitio web tiene como objetivo establecer una presencia digital profesional que refleje la calidad y tradición de los productos, facilitando el contacto con clientes actuales y potenciales.

## Objetivos del Sitio Web

- Presentar los productos y servicios de manera atractiva y profesional
- Proveer información clara sobre horarios, ubicación y métodos de contacto
- Mejorar la accesibilidad y experiencia del usuario en dispositivos móviles y escritorio
- Optimizar el rendimiento y SEO para maximizar la visibilidad en buscadores
- Facilitar la comunicación con clientes a través de WhatsApp y llamadas directas
- Transmitir la calidez y tradición del local mediante un diseño cuidado

## Público Objetivo

- **Clientes locales**: Familias y personas de la comunidad que buscan un lugar acogedor para disfrutar de helados artesanales
- **Turistas**: Visitantes que descubren el local y desean obtener información sobre horarios y productos
- **Jóvenes y adultos**: Usuarios que buscan opciones de esparcimiento y degustación de productos artesanales
- **Personas interesadas en confituras y croquetas**: Clientes que buscan productos elaborados con ingredientes frescos y recetas tradicionales

## Características Principales

### Diseño y Experiencia de Usuario
- Diseño moderno con paleta de colores cálida y acogedora
- Modo oscuro/claro con persistencia en localStorage
- Animaciones suaves y efectos hover en tarjetas y botones
- Tipografía atractiva con fuentes Fredoka y Poppins
- Totalmente responsive (móvil, tablet, escritorio)

### Secciones del Sitio
- **Header**: Navegación fija con menú hamburguesa en móvil, logo y toggle de tema
- **Hero**: Título animado con efecto typewriter, descripción y botones CTA
- **Sobre Nosotros**: Texto descriptivo, imagen del local y contadores animados
- **Productos**: 4 tarjetas de productos con skeleton loading
- **Galería**: Grid responsive con 12 imágenes, lightbox y navegación por teclado
- **Horarios**: Diseño con glassmorphism mostrando horario de atención
- **Contacto**: 3 tarjetas (teléfono, WhatsApp, mapa de Google)
- **Footer**: Copyright y créditos
- **Back to Top**: Botón animado que aparece al hacer scroll

### Funcionalidades Técnicas
- Lazy loading de imágenes con placeholders skeleton
- IntersectionObserver para animaciones al hacer scroll
- SEO optimizado con meta tags, Open Graph y JSON-LD
- Accesibilidad WCAG AA (navegación por teclado, ARIA attributes)
- Custom hooks: useTheme, useIntersectionObserver, useScrollPosition, useTypewriter

## Principios Rectores

1. **Accesibilidad**: El sitio debe ser navegable y comprensible para todos los usuarios, incluyendo aquellos con discapacidades
2. **Rendimiento**: Carga rápida y optimizada, con lazy loading y animaciones eficientes
3. **Diseño centrado en el usuario**: Interfaz intuitiva y agradable que refleje la identidad del local
4. **Código limpio**: Estructura modular, componentes reutilizables y buenas prácticas de desarrollo
5. **Mantenibilidad**: Documentación clara y arquitectura que facilite futuras modificaciones
6. **Responsive-first**: Diseño que funciona perfectamente en todos los tamaños de pantalla
7. **Especificaciones primero**: Desarrollo guiado por specs (SDD) con documentación previa a la implementación

## Stack Tecnológico

### Frontend
- **React 18+**: Biblioteca para interfaces de usuario
- **Vite**: Bundler y herramienta de desarrollo
- **React Router**: Enrutamiento para SPA
- **CSS Variables**: Sistema de diseño con variables CSS
- **JavaScript (ES6+)**: Lenguaje de programación

### Herramientas
- **Git**: Control de versiones
- **npm**: Gestión de dependencias
- **Desarrollo dirigido por especificaciones (spec/)**: SDD para documentación y planificación

## Notas

- El proyecto sigue el patrón de Spec-Driven Development (SDD)
- Las features se documentan en `spec/features/NNN-nombre/` con `spec.md`, `plan.md` y `tasks.md`
- El deployment se realiza en GitHub Pages