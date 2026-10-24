# Misión del Proyecto

## Propósito

Crear una landing page moderna, adaptable (responsive) y accesible para **El Patio de las Delicias**, un local especializado en helados artesanales, confituras caseras y croquetas crujientes. El sitio web tiene como objetivo establecer una presencia digital profesional que refleje la calidad y tradición de los productos, facilitando el contacto con clientes actuales y potenciales.

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
- Modo oscuro/claro con persistencia en almacenamiento local (localStorage)
- Animaciones suaves y efectos al pasar el cursor (hover) en tarjetas y botones
- Tipografía atractiva con fuentes Fredoka y Poppins
- Totalmente adaptable (responsive) (móvil, tableta, escritorio)

### Secciones del Sitio
- **Cabecera (Header)**: Navegación fija con menú hamburguesa en móvil, logo y alternador (toggle) de tema
- **Sección Principal (Hero)**: Título animado con efecto de máquina de escribir (typewriter), descripción y botones de llamada a la acción (CTA, Call to Action)
- **Sobre Nosotros**: Texto descriptivo, imagen del local y contadores animados
- **Productos**: 4 tarjetas de productos con marcador de posición esqueleto (skeleton loading)
- **Galería**: Cuadrícula adaptable (grid responsive) con 12 imágenes, visor emergente (lightbox) y navegación por teclado
- **Horarios**: Diseño con vidrio esmerilado (glassmorphism) mostrando horario de atención
- **Contacto**: 3 tarjetas (teléfono, WhatsApp, mapa de Google)
- **Pie de página (Footer)**: Copyright y créditos
- **Volver Arriba (Back to Top)**: Botón animado que aparece al desplazarse (scroll)

### Funcionalidades Técnicas
- Carga diferida (lazy loading) de imágenes con marcadores de posición esqueleto (skeleton placeholders)
- IntersectionObserver para animaciones al desplazarse (scroll)
- SEO optimizado con metaetiquetas (meta tags), Open Graph y JSON-LD
- Accesibilidad WCAG AA (navegación por teclado, atributos ARIA (ARIA attributes))
- Hooks personalizados (custom hooks): useTheme, useIntersectionObserver, useScrollPosition, useTypewriter

## Principios Rectores

1. **Accesibilidad**: El sitio debe ser navegable y comprensible para todos los usuarios, incluyendo aquellos con discapacidades
2. **Rendimiento**: Carga rápida y optimizada, con carga diferida (lazy loading) y animaciones eficientes
3. **Diseño centrado en el usuario**: Interfaz intuitiva y agradable que refleje la identidad del local
4. **Código limpio**: Estructura modular, componentes reutilizables y buenas prácticas de desarrollo
5. **Mantenibilidad**: Documentación clara y arquitectura que facilite futuras modificaciones
6. **Enfoque adaptable primero (Responsive-first)**: Diseño que funciona perfectamente en todos los tamaños de pantalla
7. **Especificaciones primero**: Desarrollo guiado por especificaciones (Spec-Driven Development, SDD) con documentación previa a la implementación

## Stack Tecnológico

### Frontend
- **React 18+**: Biblioteca para interfaces de usuario
- **Vite**: Empaquetador (bundler) y herramienta de desarrollo
- **React Router**: Enrutamiento para aplicación de página única (SPA, Single Page Application)
- **Variables CSS (CSS Variables)**: Sistema de diseño con variables CSS
- **TypeScript 5 (modo estricto, strict mode)**: Lenguaje de programación

### Backend
- **Supabase**: Autenticación (Authentication), base de datos PostgreSQL y almacenamiento (storage)
- **Supabase Auth**: Gestión de usuarios (email/contraseña, Google OAuth)
- **Supabase Database**: PostgreSQL

### Herramientas
- **Git**: Control de versiones
- **npm**: Gestión de dependencias
- **Desarrollo guiado por especificaciones (spec/)**: SDD para documentación y planificación

## Notas

- El proyecto sigue el patrón de Desarrollo Guiado por Especificaciones (Spec-Driven Development, SDD)
- Las funcionalidades (features) se documentan en `spec/features/NNN-nombre/` con `spec.md`, `plan.md` y `tasks.md`
- El despliegue (deployment) se realiza en GitHub Pages
