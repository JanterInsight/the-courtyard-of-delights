# Instrucciones de Seguridad Web

## Vulnerabilidades OWASP Top 10
1. **Injection**: SQLi, NoSQLi, Command Injection
2. **Broken Auth**: Sesiones débiles, credenciales expuestas
3. **Sensitive Data**: Datos sin encriptar
4. **XXE**: XML External Entities
5. **Broken Access Control**: Autorización insuficiente
6. **Security Misconfiguration**: Configuración insegura
7. **XSS**: Cross-Site Scripting
8. **Insecure Deserialization**: Deserialización insegura
9. **Vulnerable Components**: Dependencias vulnerables
10. **Insufficient Logging**: Logging insuficiente

## Medidas de Protección
- Validar y sanitizar todas las entradas
- Usar prepared statements
- Escapar output
- Implementar CSRF tokens
- Configurar headers de seguridad
- Usar HTTPS
- Implementar rate limiting
- Manejar secrets con variables de entorno

## Flujo de Trabajo
1. Identificar vectores de ataque
2. Configurar headers de seguridad
3. Implementar validación de entradas
4. Configurar RLS y autorización
5. Proteger contra XSS y SQLi
6. Implementar rate limiting
7. Manejar secrets de forma segura
8. Auditar con OWASP ZAP