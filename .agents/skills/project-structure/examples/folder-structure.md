# Estructura de Carpetas Recomendada

## Frontend (React + Vite)

```
src/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   │   ├── LoginForm.tsx
│   │   │   └── RegisterForm.tsx
│   │   ├── hooks/
│   │   │   └── useAuth.ts
│   │   ├── services/
│   │   │   └── authService.ts
│   │   ├── types/
│   │   │   └── auth.types.ts
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
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Modal.tsx
│   ├── hooks/
│   │   ├── useDebounce.ts
│   │   └── useLocalStorage.ts
│   ├── utils/
│   │   ├── format.ts
│   │   └── validation.ts
│   ├── types/
│   │   └── common.types.ts
│   └── constants/
│       └── api.ts
├── app/
│   ├── routes/
│   │   └── index.tsx
│   ├── layouts/
│   │   ├── MainLayout.tsx
│   │   └── AuthLayout.tsx
│   └── providers/
│       └── AppProviders.tsx
├── config/
│   └── env.ts
└── assets/
    ├── images/
    └── styles/
```

## Backend (Node.js + Express)

```
src/
├── modules/
│   ├── auth/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── models/
│   │   ├── routes/
│   │   └── validators/
│   ├── users/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── models/
│   │   ├── routes/
│   │   └── validators/
│   └── products/
│       ├── controllers/
│       ├── services/
│       ├── models/
│       ├── routes/
│       └── validators/
├── shared/
│   ├── middleware/
│   ├── utils/
│   ├── types/
│   └── constants/
├── config/
│   ├── database.ts
│   └── env.ts
└── app.ts
```

## Configuración de Aliases (vite.config.js)

```js
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
    '@features': path.resolve(__dirname, './src/features'),
    '@shared': path.resolve(__dirname, './src/shared'),
    '@app': path.resolve(__dirname, './src/app'),
    '@config': path.resolve(__dirname, './src/config'),
    '@assets': path.resolve(__dirname, './src/assets')
  }
}