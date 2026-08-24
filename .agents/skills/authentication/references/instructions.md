# Instrucciones de Autenticación

## Resumen
Esta skill define cómo implementar autenticación segura en aplicaciones web modernas usando mejores prácticas de la industria.

## Implementación

### 1. Registro de Usuarios
- Validar email y contraseña (mínimo 8 caracteres, complejidad razonable)
- Hash de contraseña con bcrypt (cost factor 12) o argon2
- Enviar email de verificación
- Crear perfil de usuario en la base de datos

### 2. Login
- Verificar credenciales con verificación de timing seguro
- Generar access token JWT (15 min expiración)
- Generar refresh token (7 días, rotación)
- Responder con tokens y datos del usuario

### 3. Sesiones y Tokens
- Almacenar refresh tokens hasheados en la base de datos
- Implementar endpoint de refresh token
- Invalidar tokens en logout
- Revocar tokens comprometidos

### 4. Protección de Rutas
- Middleware que verifica JWT en cada request
- Fallo silencioso con 401 status
- No exponer detalles de validación

### 5. OAuth
- Soporte para Google, GitHub, etc.
- State parameter para prevenir CSRF
- Redirect URIs validados

## Flujo de Trabajo
1. Configurar sistema de autenticación
2. Implementar registro
3. Implementar login/logout
4. Configurar JWT y refresh tokens
5. Crear middleware de protección
6. Integrar OAuth providers
7. Implementar recuperación de contraseña
8. Agregar rate limiting y logging
9. Probar seguridad con OWASP ZAP o similar