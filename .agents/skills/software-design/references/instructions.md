# Instrucciones de Software Design

## Principios SOLID
1. **S**ingle Responsibility: Una clase/función, una responsabilidad
2. **O**pen/Closed: Abierto a extensión, cerrado a modificación
3. **L**iskov Substitution: Subtipos reemplazables
4. **I**nterface Segregation: Interfaces específicas
5. **D**ependency Inversion: Depender de abstracciones

## Patrones de Diseño
- **Creacionales**: Factory, Singleton, Builder
- **Estructurales**: Adapter, Decorator, Facade
- **Comportamiento**: Strategy, Observer, Command

## Clean Architecture
- **Entities**: Reglas de negocio
- **Use Cases**: Casos de uso
- **Adapters**: Interfaces externas
- **Frameworks**: Detalles de implementación

## Flujo de Trabajo
1. Identificar entidades y casos de uso
2. Definir interfaces
3. Implementar lógica de negocio
4. Conectar con infraestructura
5. Verificar SOLID