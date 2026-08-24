# Instrucciones de Project Structure

## Estructura Recomendada (Feature-based)

```
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── index.ts
│   ├── users/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── index.ts
│   └── products/
│       ├── components/
│       ├── hooks/
│       ├── services/
│       ├── types/
│       └── index.ts
├── shared/
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   ├── types/
│   └── constants/
├── app/
│   ├── routes/
│   ├── layouts/
│   └── providers/
├── config/
└── assets/
```

## Convenciones
- PascalCase para componentes
- camelCase para funciones y variables
- kebab-case para archivos
- index.ts como barrel file
- Aliases: @features, @shared, @app

## Flujo de Trabajo
1. Identificar features/dominios
2. Crear estructura de carpetas
3. Configurar aliases en vite.config
4. Crear barrel files
5. Mover código existente
6. Documentar estructura