# Mejores Prácticas de Seguridad Web

## Headers de Seguridad
- Content-Security-Policy (CSP)
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- Strict-Transport-Security (HSTS)
- Referrer-Policy
- Permissions-Policy

## Validación de Entradas
- Validar en el servidor, no solo en el cliente
- Usar librerías de validación (zod, joi)
- Sanitizar HTML (DOMPurify)
- Limitar longitud de inputs
- Validar tipos de datos

## Autenticación
- bcrypt/argon2 para contraseñas
- JWT con expiración corta
- Refresh tokens con rotación
- Rate limiting en login
- 2FA para cuentas sensibles

## Autorización
- RLS en base de datos
- Middleware de autorización
- Mínimos privilegios
- Verificar ownership de recursos

## Secrets
- Variables de entorno
- Secret managers (Vault, AWS Secrets)
- Nunca en código o git
- Rotar secrets regularmente

## Monitoreo
- Logging de eventos de seguridad
- Alertas de intentos sospechosos
- Auditoría de accesos
- Actualizar dependencias