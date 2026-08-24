# Python Backend Development - Instructions

## Purpose

Este documento proporciona instrucciones detalladas para desarrollar aplicaciones backend con Python moderno.

## When to Activate

Activar esta skill cuando:
- Se necesite crear aplicaciones backend con Python
- Se requiera trabajar con FastAPI, Django o Flask
- Se deba implementar APIs REST
- Se necesite procesar datos
- Se trabaje con machine learning
- Se requiera automatización
- Se necesite scraping web
- Se trabaje con análisis de datos

## Core Rules

### 1. Type Hints

**Regla #1: Usar type hints siempre**
```python
# ✅ CORRECTO
def obtener_usuario(user_id: int) -> dict[str, str]:
    return {"id": str(user_id), "nombre": "Juan"}

# ❌ INCORRECTO
def obtener_usuario(user_id):
    return {"id": user_id, "nombre": "Juan"}
```

### 2. Async/Await

**Regla #2: Usar async/await en FastAPI**
```python
# ✅ CORRECTO
from fastapi import FastAPI
import httpx

app = FastAPI()

@app.get("/usuarios/{user_id}")
async def obtener_usuario(user_id: int):
    async with httpx.AsyncClient() as client:
        response = await client.get(f"https://api.example.com/usuarios/{user_id}")
        return response.json()

# ❌ INCORRECTO: Bloqueante
import requests

@app.get("/usuarios/{user_id}")
def obtener_usuario(user_id: int):
    response = requests.get(f"https://api.example.com/usuarios/{user_id}")
    return response.json()
```

### 3. Manejo de Errores

**Regla #3: Manejar errores apropiadamente**
```python
# ✅ CORRECTO
from fastapi import HTTPException

@app.get("/usuarios/{user_id}")
async def obtener_usuario(user_id: int):
    try:
        usuario = await usuario_service.obtener(user_id)
        if not usuario:
            raise HTTPException(status_code=404, detail="Usuario no encontrado")
        return usuario
    except DatabaseError as e:
        raise HTTPException(status_code=500, detail="Error de base de datos")

# ❌ INCORRECTO: Sin manejo de errores
@app.get("/usuarios/{user_id}")
async def obtener_usuario(user_id: int):
    return await usuario_service.obtener(user_id)
```

### 4. Pydantic Models

**Regla #4: Usar Pydantic para validación**
```python
# ✅ CORRECTO
from pydantic import BaseModel, EmailStr
from typing import Optional

class Usuario(BaseModel):
    id: int
    nombre: str
    email: EmailStr
    edad: Optional[int] = None

@app.post("/usuarios")
async def crear_usuario(usuario: Usuario):
    return usuario

# ❌ INCORRECTO: Sin validación
@app.post("/usuarios")
async def crear_usuario(nombre: str, email: str, edad: int):
    return {"nombre": nombre, "email": email, "edad": edad}
```

### 5. Variables de Entorno

**Regla #5: Usar variables de entorno**
```python
# ✅ CORRECTO
import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    database_url: str
    api_key: str
    debug: bool = False

settings = Settings()

# ❌ INCORRECTO: Hardcodear
DATABASE_URL = "postgresql://localhost/mydb"
API_KEY = "123456789"
```

## Workflow

### Paso 1: Inicialización
1. Crear proyecto
2. Configurar virtual environment
3. Instalar dependencias
4. Configurar estructura

### Paso 2: Desarrollo
1. Crear modelos Pydantic
2. Implementar endpoints
3. Conectar base de datos
4. Agregar validaciones

### Paso 3: Testing
1. Escribir tests
2. Ejecutar pytest
3. Verificar coverage

### Paso 4: Producción
1. Configurar variables de entorno
2. Optimizar queries
3. Configurar logging
4. Deploy

## Best Practices

### 1. Código
- ✅ Type hints
- ✅ Docstrings
- ✅ PEP 8
- ✅ Async/await
- ❌ No usar variables globales

### 2. Estructura
- ✅ Separar concerns
- ✅ Usar dataclasses
- ✅ Configuración centralizada
- ❌ No mezclar lógica

### 3. Performance
- ✅ Connection pooling
- ✅ Caching
- ✅ Async programming
- ❌ No bloquear event loop

### 4. Testing
- ✅ Pytest
- ✅ Fixtures
- ✅ Mocking
- ❌ No ignorar tests

## Anti Patterns

### 1. Sin type hints
```python
# ❌ INCORRECTO
def procesar(datos):
    return datos

# ✅ CORRECTO
def procesar(datos: dict[str, str]) -> dict[str, str]:
    return datos
```

### 2. Hardcodear configuración
```python
# ❌ INCORRECTO
DB_HOST = "localhost"
DB_PORT = 5432

# ✅ CORRECTO
DB_HOST = os.getenv("DB_HOST")
DB_PORT = int(os.getenv("DB_PORT"))
```

## Examples

Ver la carpeta `examples/` para ejemplos completos.

## References

- [Python Docs](https://docs.python.org/3/)
- [FastAPI Docs](https://fastapi.tiangolo.com/)
- [Pydantic Docs](https://docs.pydantic.dev/)