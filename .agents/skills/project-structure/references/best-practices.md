# Mejores Prácticas de Project Structure

## Organización
- Feature-based structure para escalabilidad
- Separar UI, lógica de negocio y datos
- Usar carpetas compartidas para código común
- Implementar barrel files (index.ts)
- Configurar path aliases

## Convenciones
- PascalCase para componentes y clases
- camelCase para funciones y variables
- kebab-case para archivos
- index.ts como punto de entrada
- Nombres descriptivos y consistentes

## Imports
- Usar aliases en lugar de rutas relativas largas
- Ordenar imports: externos, internos, relativos
- Evitar dependencias circulares
- Usar barrel files para simplificar imports

## Escalabilidad
- Mantener features independientes
- Compartir código solo a través de shared/
- Evitar acoplamiento entre features
- Documentar la estructura
- Revisar estructura regularmente