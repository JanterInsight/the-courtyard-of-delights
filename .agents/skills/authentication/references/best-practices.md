# Mejores Prácticas de Autenticación

## Contraseñas
- Usar bcrypt con cost factor 12 o argon2id
- Mínimo 8 caracteres, pero priorizar longitud sobre complejidad
- Nunca limitar longitud de contraseñas (permitir passphrases)
- Implementar verificación de contraseñas comprometidas (HaveIBeenPwned API)

## Tokens JWT
- Access token: 15-30 minutos de expiración
- Refresh token: 7 días con rotación
- Firmar con HS256 o RS256 (preferir RS256 en producción)
- Incluir solo claims necesarios (sub, exp, iat, jti)
- Nunca incluir información sensible en el payload

## Sesiones
- Almacenar refresh tokens hasheados en la base de datos
- Implementar revocación de tokens
- Detectar y prevenir token reuse
- Limpiar sesiones expiradas

## Protección
- Rate limiting en endpoints de auth (5 intentos por minuto)
- Lockout temporal después de intentos fallidos
- Implementar 2FA para cuentas sensibles
- Logging de eventos de autenticación
- Monitorear patrones sospechosos

## OAuth
- Usar PKCE para aplicaciones móviles
- Validar state parameter
- Restringir redirect URIs
- Solicitar solo scopes necesarios

## Frontend
- Almacenar tokens en cookies httpOnly
- Implementar CSRF protection
- Renovar tokens silenciosamente
- Manejar expiración de sesión gracefulmente