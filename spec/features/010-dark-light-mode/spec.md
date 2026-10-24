# Funcionalidad: Modo Oscuro/Claro (Dark/Light Mode)

## Descripción

Implementar el sistema de temas oscuro y claro con conmutador (toggle) en el encabezado (header), persistencia en almacenamiento local (localStorage) y variables CSS para ambos temas.

## Requisitos Funcionales

### RF-001: Conmutador de Tema (Toggle)
- Botón en el encabezado (header) con icono de sol/luna
- Cambio inmediato entre temas
- Persistencia en almacenamiento local (localStorage)
- Lectura de preferencia guardada al cargar

### RF-002: Variables CSS (CSS Variables)
- Variables CSS para tema claro
- Variables CSS para tema oscuro
- Sobrescritura (override) con [data-theme="dark"]
- Transición suave entre temas

### RF-003: Paleta de Colores
**Tema Claro:**
- Títulos: #8B4513 (Chocolate)
- Bordes/efecto al pasar el cursor (hover): #D4A017 (Dorado miel)
- Fondo: #FFFDF8 (Blanco crema)
- Tarjetas: #FFF4E8 (Crema vainilla)
- Texto principal: #2D2D2D (Gris casi negro)
- Texto secundario: #6B6B6B (Gris cálido)

**Tema Oscuro:**
- Títulos: #FFD166 (Dorado vainilla)
- Bordes/efecto al pasar el cursor (hover): #F4A261 (Caramelo)
- Fondo: #121212 (Negro carbón)
- Tarjetas: #1E1E1E (Gris oscuro)
- Texto principal: #F8F8F8 (Blanco suave)
- Texto secundario: #CFCFCF (Gris claro)

## Requisitos No Funcionales

### RNF-001: Accesibilidad
- Contraste WCAG AA en ambos temas
- Transición suave (0.3s)
- Respeto por preferencia de esquema de color (prefers-color-scheme)

### RNF-002: Rendimiento
- Sin dependencias externas
- Transiciones CSS (CSS transitions) para cambios
- Almacenamiento local (localStorage) para persistencia

### RNF-003: Adaptabilidad (Responsive)
- Diseño móvil primero (mobile-first)
- Funciona en todos los dispositivos

## Criterios de Aceptación

- [ ] Conmutador (toggle) de tema visible en encabezado (header)
- [ ] Cambio entre temas funcional
- [ ] Persistencia en almacenamiento local (localStorage)
- [ ] Variables CSS aplicadas correctamente
- [ ] Paleta de colores correcta en ambos temas
- [ ] Transición suave entre temas
- [ ] Contraste WCAG AA garantizado
- [ ] Adaptable (responsive) en móvil y escritorio (desktop)
