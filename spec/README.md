# spec/ - Desarrollo Guiado por Especificaciones

Documentación viva del proyecto, organizada para desarrollo guiado por especificaciones (Spec Driven Development): primero se escribe la especificación (spec), luego el plan, luego las tareas, y solo entonces se toca el código

## Estructura
```
spec/
├── README.md             <- este archivo
├── general-spec.md       <- paleta de colores, tipografía, plataforma e idioma
├── constitution/         <- reglas estables del proyecto
│   ├── mission.md        <- qué construimos y para quién
│   └── roadmap.md        <- orden de las funcionalidades (features)
└── features/             <- una carpeta por funcionalidad (spec.md, plan.md, tasks.md)
    ├── 001-header-navigation/
    ├── 002-hero-section/
    ├── 003-about-us/
    ├── 004-products/
    ├── 005-gallery/
    ├── 006-schedule/
    ├── 007-contact/
    ├── 008-footer/
    ├── 009-back-to-top/
    ├── 010-dark-light-mode/
    ├── 011-seo-meta-tags/
    ├── 012-performance-optimizations/
    └── 013-accessibility/
```

## Flujo para una funcionalidad nueva o ajustar una ya existente
- El flujo se encuentra en las Instrucciones de spec\constitution\roadmap.md
