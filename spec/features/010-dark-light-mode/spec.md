# Feature: Dark/Light Mode

## Descripción

Implementar el sistema de temas oscuro y claro con toggle en el header, persistencia en localStorage y variables CSS para ambos temas.

## Requisitos Funcionales

### RF-001: Toggle de Tema
- Botón en el header con icono de sol/luna
- Cambio inmediato entre temas
- Persistencia en localStorage
- Lectura de preferencia guardada al cargar

### RF-002: Variables CSS
- Variables CSS para tema claro
- Variables CSS para tema oscuro
- Override con [data-theme="dark"]
- Transición suave entre temas

### RF-003: Paleta de Colores
**Tema Claro:**
- Títulos: #8B4513 (Chocolate)
- Bordes/hover: #D4A017 (Dorado miel)
- Fondo: #FFFDF8 (Blanco crema)
- Tarjetas: #FFF4E8 (Crema vainilla)
- Texto principal: #2D2D2D (Gris casi negro)
- Texto secundario: #6B6B6B (Gris cálido)

**Tema Oscuro:**
- Títulos: #FFD166 (Dorado vainilla)
- Bordes/hover: #F4A261 (Caramelo)
- Fondo: #121212 (Negro carbón)
- Tarjetas: #1E1E1E (Gris oscuro)
- Texto principal: #F8F8F8 (Blanco suave)
- Texto secundario: #CFCFCF (Gris claro)

## Requisitos No Funcionales

### RNF-001: Accesibilidad
- Contraste WCAG AA en ambos temas
- Transición suave (0.3s)
- Respeto por prefers-color-scheme

### RNF-002: Rendimiento
- Sin dependencias externas
- CSS transitions para cambios
- localStorage para persistencia

### RNF-003: Responsive
- Mobile-first design
- Funciona en todos los dispositivos

## Criterios de Aceptación

- [ ] Toggle de tema visible en header
- [ ] Cambio entre temas funcional
- [ ] Persistencia en localStorage
- [ ] Variables CSS aplicadas correctamente
- [ ] Paleta de colores correcta en ambos temas
- [ ] Transición suave entre temas
- [ ] Contraste WCAG AA garantizado
- [ ] Responsive en móvil y desktop