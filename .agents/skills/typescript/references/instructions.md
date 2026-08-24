# TypeScript Development - Instructions

## Purpose

Este documento proporciona instrucciones detalladas para desarrollar aplicaciones web con TypeScript.

## When to Activate

Activar esta skill cuando:
- Se necesite escribir código TypeScript
- Se requiera configurar tsconfig.json
- Se deba implementar tipos e interfaces
- Se necesite usar generics
- Se trabaje con type guards
- Se requiera integrar TypeScript con React
- Se necesite configurar strict mode
- Se trabaje con decorators

## Core Rules

### 1. Tipos e Interfaces

**Regla #1: Usar tipos apropiados**
```typescript
// ✅ CORRECTO: Interfaces para objetos
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  edad?: number;
}

// ✅ CORRECTO: Type aliases para unions
type Estado = 'activo' | 'inactivo' | 'pendiente';

// ✅ CORRECTO: Tipos primitivos
const nombre: string = 'Juan';
const edad: number = 30;
const activo: boolean = true;

// ❌ INCORRECTO: any
const usuario: any = { id: 1 };
```

### 2. Generics

**Regla #2: Usar generics para reutilización**
```typescript
// ✅ CORRECTO: Generic function
function obtenerPrimero<T>(array: T[]): T | undefined {
  return array[0];
}

// ✅ CORRECTO: Generic interface
interface Respuesta<T> {
  data: T;
  error: string | null;
}

// ✅ CORRECTO: Generic constraints
function obtenerLongitud<T extends { length: number }>(item: T): number {
  return item.length;
}

// ❌ INCORRECTO: Sin generics
function obtenerPrimero(array: any[]): any {
  return array[0];
}
```

### 3. Type Guards

**Regla #3: Usar type guards**
```typescript
// ✅ CORRECTO: Type guard
function esUsuario(value: unknown): value is Usuario {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'nombre' in value
  );
}

// ✅ CORRECTO: Uso
function procesar(value: unknown) {
  if (esUsuario(value)) {
    console.log(value.nombre); // TypeScript sabe que es Usuario
  }
}

// ❌ INCORRECTO: Casting inseguro
function procesar(value: unknown) {
  const usuario = value as Usuario;
  console.log(usuario.nombre);
}
```

### 4. Strict Mode

**Regla #4: Configurar strict mode**
```json
// ✅ CORRECTO: tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "noUncheckedIndexedAccess": true
  }
}

// ❌ INCORRECTO: Sin strict mode
{
  "compilerOptions": {
    "strict": false
  }
}
```

### 5. Utility Types

**Regla #5: Usar utility types**
```typescript
// ✅ CORRECTO: Utility types
type UsuarioSinId = Omit<Usuario, 'id'>;
type UsuarioParcial = Partial<Usuario>;
type UsuarioSoloLectura = Readonly<Usuario>;
type UsuarioRequerido = Required<Usuario>;

// ✅ CORRECTO: Pick y Record
type UsuarioBasico = Pick<Usuario, 'id' | 'nombre'>;
type MapaUsuarios = Record<string, Usuario>;
```

## Workflow

### Paso 1: Configuración
1. Instalar TypeScript
2. Configurar tsconfig.json
3. Configurar strict mode
4. Configurar paths

### Paso 2: Desarrollo
1. Definir tipos
2. Implementar interfaces
3. Usar generics
4. Type guards

### Paso 3: Testing
1. Compilar TypeScript
2. Ejecutar tests
3. Verificar tipos

## Best Practices

### 1. Tipos
- ✅ Interfaces para objetos
- ✅ Type aliases para unions
- ✅ Generics
- ❌ No usar any

### 2. Configuración
- ✅ Strict mode
- ✅ Paths
- ✅ Declaration files
- ❌ No desactivar strict

### 3. Integración
- ✅ React + TypeScript
- ✅ Node.js + TypeScript
- ✅ Vite + TypeScript
- ❌ No mezclar con JS

## Anti Patterns

### 1. Uso de any
```typescript
// ❌ INCORRECTO
const data: any = obtenerDatos();

// ✅ CORRECTO
const data: Datos = obtenerDatos();
```

## Examples

Ver la carpeta `examples/` para ejemplos completos.

## References

- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)