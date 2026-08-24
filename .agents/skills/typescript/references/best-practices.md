# TypeScript Development - Best Practices

## 1. Tipos e Interfaces

### Interfaces vs Type Aliases

**✅ SIEMPRE usar tipos apropiados:**
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
type ID = string | number;

// ✅ CORRECTO: Extensión de interfaces
interface UsuarioAdmin extends Usuario {
  rol: 'admin';
  permisos: string[];
}

// ❌ INCORRECTO: any
const usuario: any = { id: 1 };
```

## 2. Generics

### Reutilización de Código

```typescript
// ✅ CORRECTO: Generic functions
function obtenerPrimero<T>(array: T[]): T | undefined {
  return array[0];
}

// ✅ CORRECTO: Generic interfaces
interface Respuesta<T> {
  data: T;
  error: string | null;
  status: number;
}

// ✅ CORRECTO: Generic constraints
function obtenerLongitud<T extends { length: number }>(item: T): number {
  return item.length;
}

// ✅ CORRECTO: Generic classes
class Repositorio<T> {
  private items: T[] = [];
  
  agregar(item: T): void {
    this.items.push(item);
  }
  
  obtenerTodos(): T[] {
    return this.items;
  }
}
```

## 3. Type Guards

### Narrowing de Tipos

```typescript
// ✅ CORRECTO: Type guards
function esUsuario(value: unknown): value is Usuario {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'nombre' in value
  );
}

// ✅ CORRECTO: Discriminated unions
type Resultado =
  | { tipo: 'exito'; data: Usuario }
  | { tipo: 'error'; mensaje: string };

function procesarResultado(resultado: Resultado) {
  if (resultado.tipo === 'exito') {
    console.log(resultado.data.nombre);
  } else {
    console.log(resultado.mensaje);
  }
}

// ❌ INCORRECTO: Casting inseguro
const usuario = value as Usuario;
```

## 4. Strict Mode

### Configuración

```json
// ✅ CORRECTO: tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

## 5. Utility Types

### Tipos Utilitarios

```typescript
// ✅ CORRECTO: Utility types
type UsuarioSinId = Omit<Usuario, 'id'>;
type UsuarioParcial = Partial<Usuario>;
type UsuarioSoloLectura = Readonly<Usuario>;
type UsuarioRequerido = Required<Usuario>;
type UsuarioBasico = Pick<Usuario, 'id' | 'nombre'>;
type MapaUsuarios = Record<string, Usuario>;

// ✅ CORRECTO: ReturnType y Parameters
type RetornoFuncion = ReturnType<typeof obtenerUsuario>;
type ParametrosFuncion = Parameters<typeof obtenerUsuario>;
```

## 6. React + TypeScript

### Componentes Tipados

```tsx
// ✅ CORRECTO: Props tipados
interface BotonProps {
  texto: string;
  onClick: () => void;
  variante?: 'primario' | 'secundario' | 'peligro';
  deshabilitado?: boolean;
}

function Boton({ texto, onClick, variante = 'primario', deshabilitado = false }: BotonProps) {
  return (
    <button 
      onClick={onClick}
      disabled={deshabilitado}
      className={`boton boton-${variante}`}
    >
      {texto}
    </button>
  );
}

// ✅ CORRECTO: Hooks tipados
function useContador(inicial: number = 0) {
  const [contador, setContador] = useState<number>(inicial);
  
  const incrementar = useCallback(() => {
    setContador(c => c + 1);
  }, []);
  
  return { contador, incrementar };
}
```

## 7. Node.js + TypeScript

### Backend Tipado

```typescript
// ✅ CORRECTO: Express + TypeScript
import express, { Request, Response, NextFunction } from 'express';

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

const app = express();

app.get('/usuarios/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const usuario: Usuario = await obtenerUsuario(id);
    res.json(usuario);
  } catch (error) {
    next(error);
  }
});
```

## 8. Testing

### Tests Tipados

```typescript
// ✅ CORRECTO: Jest + TypeScript
import { describe, test, expect } from '@jest/globals';

interface Usuario {
  id: number;
  nombre: string;
}

describe('Usuario', () => {
  test('crea usuario correctamente', () => {
    const usuario: Usuario = { id: 1, nombre: 'Juan' };
    expect(usuario.nombre).toBe('Juan');
  });
});
```

## Resumen

### ✅ SIEMPRE:
1. Usar tipos apropiados
2. Interfaces para objetos
3. Generics para reutilización
4. Type guards
5. Strict mode
6. Utility types
7. Tipos en React
8. Tipos en Node.js

### ❌ NUNCA:
1. Usar any
2. Casting inseguro
3. Desactivar strict mode
4. Sin type guards
5. Sin tipos en props
6. Sin tipos en funciones
7. Mezclar con JS
8. Ignorar errores de tipos