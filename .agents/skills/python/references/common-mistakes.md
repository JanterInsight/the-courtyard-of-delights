# Python Backend Development - Common Mistakes

## 1. Errores de Type Hints

### ❌ Sin type hints

```python
# ❌ INCORRECTO
def procesar(datos):
    return datos

# ✅ CORRECTO
def procesar(datos: dict[str, str]) -> dict[str, str]:
    return datos
```

**Impacto:** Código menos mantenible.

---

## 2. Errores de Async/Await

### ❌ Código bloqueante

```python
# ❌ INCORRECTO
import requests

@app.get("/usuarios")
def obtener_usuarios():
    response = requests.get("https://api.example.com/usuarios")
    return response.json()

# ✅ CORRECTO
import httpx

@app.get("/usuarios")
async def obtener_usuarios():
    async with httpx.AsyncClient() as client:
        response = await client.get("https://api.example.com/usuarios")
        return response.json()
```

**Impacto:** Performance pobre.

---

## 3. Errores de Manejo de Errores

### ❌ Sin manejo de errores

```python
# ❌ INCORRECTO
@app.get("/usuarios/{user_id}")
async def obtener_usuario(user_id: int):
    return await usuario_service.obtener(user_id)

# ✅ CORRECTO
@app.get("/usuarios/{user_id}")
async def obtener_usuario(user_id: int):
    try:
        usuario = await usuario_service.obtener(user_id)
        if not usuario:
            raise HTTPException(status_code=404, detail="Usuario no encontrado")
        return usuario
    except DatabaseError as e:
        raise HTTPException(status_code=500, detail="Error de base de datos")
```

**Impacto:** Errores no manejados.

---

## 4. Checklist

- [ ] ¿Usa type hints?
- [ ] ¿Async/await apropiado?
- [ ] ¿Maneja errores?
- [ ] ¿Valida con Pydantic?
- [ ] ¿Variables de entorno?
- [ ] ¿Tests con pytest?

---

## Resumen

Errores comunes:
1. **Sin type hints** - Código menos mantenible
2. **Código bloqueante** - Performance pobre
3. **Sin errores** - No maneja errores
4. **Sin validación** - Datos inválidos
5. **Hardcodear** - Configuración expuesta