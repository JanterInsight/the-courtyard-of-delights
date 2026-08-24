# Ejemplo: API REST con FastAPI y Python moderno
# Tipado, validación, y patrones profesionales

from typing import Optional, List
from datetime import datetime
from uuid import uuid4

from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel, EmailStr, Field
from fastapi.middleware.cors import CORSMiddleware

# ============================================
# 1. Modelos Pydantic
# ============================================
class UsuarioBase(BaseModel):
    nombre: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    activo: bool = True

class UsuarioCreate(UsuarioBase):
    password: str = Field(..., min_length=8)

class Usuario(UsuarioBase):
    id: str
    created_at: datetime
    
    class Config:
        from_attributes = True

class UsuarioUpdate(BaseModel):
    nombre: Optional[str] = None
    email: Optional[EmailStr] = None
    activo: Optional[bool] = None

# ============================================
# 2. Base de datos en memoria (ejemplo)
# ============================================
usuarios_db: dict[str, Usuario] = {}

# ============================================
# 3. Aplicación FastAPI
# ============================================
app = FastAPI(
    title="API de Usuarios",
    version="1.0.0",
    description="Ejemplo de API REST con FastAPI"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ============================================
# 4. Endpoints
# ============================================
@app.get("/api/usuarios", response_model=List[Usuario])
async def obtener_usuarios():
    """Obtener todos los usuarios"""
    return list(usuarios_db.values())

@app.get("/api/usuarios/{usuario_id}", response_model=Usuario)
async def obtener_usuario(usuario_id: str):
    """Obtener un usuario por ID"""
    usuario = usuarios_db.get(usuario_id)
    if not usuario:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Usuario no encontrado"
        )
    return usuario

@app.post("/api/usuarios", response_model=Usuario, status_code=status.HTTP_201_CREATED)
async def crear_usuario(usuario: UsuarioCreate):
    """Crear un nuevo usuario"""
    usuario_id = str(uuid4())
    nuevo_usuario = Usuario(
        id=usuario_id,
        nombre=usuario.nombre,
        email=usuario.email,
        activo=usuario.activo,
        created_at=datetime.now()
    )
    usuarios_db[usuario_id] = nuevo_usuario
    return nuevo_usuario

@app.put("/api/usuarios/{usuario_id}", response_model=Usuario)
async def actualizar_usuario(usuario_id: str, cambios: UsuarioUpdate):
    """Actualizar un usuario existente"""
    usuario = usuarios_db.get(usuario_id)
    if not usuario:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Usuario no encontrado"
        )
    
    datos = cambios.model_dump(exclude_unset=True)
    usuario_actualizado = usuario.model_copy(update=datos)
    usuarios_db[usuario_id] = usuario_actualizado
    return usuario_actualizado

@app.delete("/api/usuarios/{usuario_id}", status_code=status.HTTP_204_NO_CONTENT)
async def eliminar_usuario(usuario_id: str):
    """Eliminar un usuario"""
    if usuario_id not in usuarios_db:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Usuario no encontrado"
        )
    del usuarios_db[usuario_id]

# ============================================
# 5. Health check
# ============================================
@app.get("/health")
async def health_check():
    return {"status": "ok", "timestamp": datetime.now().isoformat()}