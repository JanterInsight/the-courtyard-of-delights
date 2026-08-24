# Python Backend Development - Best Practices

## 1. Type Hints

### Anotaciones de Tipos

**✅ SIEMPRE usar type hints:**
```python
# ✅ CORRECTO
from typing import Optional, List, Dict
from datetime import datetime

def obtener_usuario(user_id: int) -> Optional[dict[str, str]]:
    return {"id": str(user_id), "nombre": "Juan"}

def procesar_usuarios(usuarios: List[dict[str, str]]) -> Dict[str, int]:
    return {u["id"]: len(u) for u in usuarios}

# ❌ NUNCA sin type hints
def obtener_usuario(user_id):
    return {"id": user_id, "nombre": "Juan"}
```

## 2. Async/Await

### Programación Asíncrona

```python
# ✅ CORRECTO: Async en FastAPI
from fastapi import FastAPI
import httpx

app = FastAPI()

@app.get("/usuarios/{user_id}")
async def obtener_usuario(user_id: int):
    async with httpx.AsyncClient() as client:
        response = await client.get(f"https://api.example.com/usuarios/{user_id}")
        return response.json()

# ✅ CORRECTO: Múltiples requests en paralelo
import asyncio

async def obtener_multiples():
    async with httpx.AsyncClient() as client:
        tasks = [
            client.get(f"https://api.example.com/usuarios/{i}")
            for i in range(1, 4)
        ]
        responses = await asyncio.gather(*tasks)
        return [r.json() for r in responses]

# ❌ INCORRECTO: Bloqueante
import requests

def obtener_usuario(user_id: int):
    response = requests.get(f"https://api.example.com/usuarios/{user_id}")
    return response.json()
```

## 3. Pydantic Models

### Validación de Datos

```python
# ✅ CORRECTO: Modelos Pydantic
from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime

class Usuario(BaseModel):
    id: int
    nombre: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    edad: Optional[int] = Field(None, ge=0, le=150)
    creado_en: datetime

class UsuarioCreate(BaseModel):
    nombre: str
    email: EmailStr
    password: str = Field(..., min_length=8)

# Uso en FastAPI
from fastapi import FastAPI

app = FastAPI()

@app.post("/usuarios", response_model=Usuario)
async def crear_usuario(usuario: UsuarioCreate):
    # Validación automática
    return await usuario_service.crear(usuario)
```

## 4. Manejo de Errores

### Excepciones

```python
# ✅ CORRECTO: Excepciones personalizadas
class UsuarioNoEncontrado(Exception):
    def __init__(self, user_id: int):
        self.user_id = user_id
        super().__init__(f"Usuario {user_id} no encontrado")

# Uso
from fastapi import HTTPException

@app.get("/usuarios/{user_id}")
async def obtener_usuario(user_id: int):
    try:
        usuario = await usuario_service.obtener(user_id)
        if not usuario:
            raise UsuarioNoEncontrado(user_id)
        return usuario
    except UsuarioNoEncontrado as e:
        raise HTTPException(status_code=404, detail=str(e))
    except DatabaseError as e:
        raise HTTPException(status_code=500, detail="Error de base de datos")
```

## 5. Variables de Entorno

### Configuración

```python
# ✅ CORRECTO: Pydantic Settings
from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    database_url: str
    api_key: str
    debug: bool = False
    allowed_hosts: list[str] = ["localhost"]
    
    class Config:
        env_file = ".env"

settings = Settings()

# ✅ CORRECTO: python-dotenv
from dotenv import load_dotenv
import os

load_dotenv()
DATABASE_URL = os.getenv("DATABASE_URL")
```

## 6. Estructura del Proyecto

### Organización

```
app/
├── __init__.py
├── main.py
├── models/
│   ├── usuario.py
│   └── post.py
├── schemas/
│   ├── usuario.py
│   └── post.py
├── services/
│   ├── usuario_service.py
│   └── post_service.py
├── routers/
│   ├── usuarios.py
│   └── posts.py
├── dependencies/
│   └── auth.py
└── utils/
    ├── validadores.py
    └── helpers.py
```

## 7. Testing

### Pytest

```python
# ✅ CORRECTO: Tests con pytest
import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_obtener_usuario():
    response = client.get("/usuarios/1")
    assert response.status_code == 200
    assert response.json()["id"] == 1

def test_usuario_no_encontrado():
    response = client.get("/usuarios/999")
    assert response.status_code == 404

# ✅ CORRECTO: Fixtures
@pytest.fixture
def usuario():
    return {"id": 1, "nombre": "Juan", "email": "juan@example.com"}

def test_usuario(usuario):
    assert usuario["nombre"] == "Juan"
```

## 8. Logging

### Logs Estructurados

```python
# ✅ CORRECTO: Logging
import logging
from pythonjsonlogger import jsonlogger

logger = logging.getLogger()
logger.setLevel(logging.INFO)

handler = logging.StreamHandler()
formatter = jsonlogger.JsonFormatter()
handler.setFormatter(formatter)
logger.addHandler(handler)

# Uso
logger.info("Usuario creado", extra={"user_id": usuario.id})
logger.error("Error al crear usuario", extra={"error": str(e)})
```

## Resumen

### ✅ SIEMPRE:
1. Usar type hints
2. Async/await en FastAPI
3. Pydantic para validación
4. Manejo de errores
5. Variables de entorno
6. Tests con pytest
7. Logging estructurado
8. PEP 8

### ❌ NUNCA:
1. Sin type hints
2. Código bloqueante
3. Sin validación
4. Hardcodear configuración
5. Sin manejo de errores
6. Sin tests
7. Sin logging
8. Ignorar PEP 8