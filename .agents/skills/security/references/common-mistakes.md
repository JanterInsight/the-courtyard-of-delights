# Errores Comunes de Seguridad Web

## ❌ Vulnerabilidades
- XSS: Usar innerHTML sin sanitizar
- SQLi: Concatenar queries directamente
- CSRF: No usar tokens de protección
- IDOR: No verificar ownership de recursos
- Broken Auth: Sesiones sin expiración

## ❌ Configuración
- No configurar headers de seguridad
- Usar HTTP en lugar de HTTPS
- Exponer secrets en código
- No implementar rate limiting
- CORS demasiado permisivo

## ❌ Datos
- Almacenar contraseñas en texto plano
- No encriptar datos sensibles
- Exponer datos en logs
- No validar entradas
- No sanitizar output

## ❌ Dependencias
- No actualizar dependencias
- Usar librerías vulnerables
- No escanear vulnerabilidades
- Ignorar CVEs