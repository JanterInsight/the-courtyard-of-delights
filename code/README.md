# Code - Web Dev Template

## Directory Tree

```
code/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
├── README.md
├── public/
│   ├── icons/          (Icon-Main-Full-*.png, Map/telephone/whatsapp icons x theme)
│   └── images/         (confiture/, croquette/, ice-cream/, ice-cream-confiture/, local/)
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── vite-env.d.ts
│   ├── components/     (About/, Contact/, Footer/, Gallery/, Header/, Hero/, Products/, Schedule/, UI/)
│   ├── data/           (contact.ts, gallery.ts, products.ts)
│   ├── hooks/          (useIntersectionObserver.ts, useScrollPosition.ts, useTheme.ts, useTypewriter.ts, index.ts)
│   └── styles/         (global.css, responsive.css, variables.css)
├── supabase/           (empty - for future use)
└── tests/              (empty - for future use)
```

## Key Files Description

- **package.json** - Project dependencies and scripts (dev, build, preview, lint, typecheck), React 18 + Vite 5 + TypeScript 6 setup
- **vite.config.ts** - Vite configuration (React plugin, base './', path aliases @components/@hooks/@data/@styles, server port 3000 with open)
- **tsconfig.json** - TypeScript configuration (target ES2022, bundler mode, strict, path aliases, noEmit)
- **eslint.config.js** - ESLint configuration (typescript-eslint, react-hooks, react-refresh, ignores dist/node_modules)
- **index.html** - Entry HTML with root div and module script pointing to src/main.tsx, includes SEO meta (Open Graph, Twitter, JSON-LD LocalBusiness), Google Fonts and icons
- **src/main.tsx** - React app bootstrap (createRoot, StrictMode, renders App, imports @styles/variables.css, global.css, responsive.css)
- **src/App.tsx** - Main App component (Header, Hero, About, Products, Gallery, Schedule, Contact, Footer, BackToTop, MotionNotice with skip-to-content link)
- **src/vite-env.d.ts** - Vite client types reference

## Empty Directories

- **supabase/** - Directory reserved for future Supabase configuration
- **tests/** - Directory reserved for future test files
