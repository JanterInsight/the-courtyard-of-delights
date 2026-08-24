# Errores Comunes de Autenticación

## ❌ Errores de Contraseñas
- Almacenar contraseñas en texto plano
- Usar MD5 o SHA1 para hashing
- No aplicar salt a las contraseñas
- Limitar la longitud máxima de contraseñas

## ❌ Errores de JWT
- Usar tokens sin expiración
- Incluir información sensible en el payload
- No validar la firma del token
- Almacenar tokens en localStorage
- Usar el mismo secreto para access y refresh tokens

## ❌ Errores de Sesiones
- No implementar revocación de tokens
- No rotar refresh tokens
- Mantener sesiones activas indefinidamente
- No limpiar sesiones expiradas

## ❌ Errores de Protección
- No implementar rate limiting
- Exponer mensajes de error detallados
- No implementar CSRF protection
- No validar redirect URIs en OAuth
- Ignorar intentos de fuerza bruta

## ❌ Errores de Frontend
- Almacenar tokens en localStorage o sessionStorage
- No manejar expiración de sesión
- No renovar tokens silenciosamente
- Mostrar contraseñas en logs