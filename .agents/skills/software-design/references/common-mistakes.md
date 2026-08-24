# Errores Comunes de Software Design

## ❌ Principios
- Violar SOLID (especialmente SRP y DIP)
- God classes con muchas responsabilidades
- Dependencias concretas en lugar de interfaces
- Acoplamiento excesivo entre módulos

## ❌ Patrones
- Usar Singleton excesivamente
- Herencia profunda en lugar de composición
- Patrones innecesarios (fuerza bruta)
- No usar Factory para creación compleja

## ❌ Arquitectura
- Mezclar capas (presentación con lógica)
- Dependencias circulares
- Lógica de negocio en componentes de UI
- Ignorar separación de concerns

## ❌ Calidad
- Código sin tests
- No documentar decisiones de diseño
- No hacer refactoring
- Ignorar deuda técnica
- Código difícil de mantener