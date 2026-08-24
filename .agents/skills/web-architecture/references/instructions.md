# Web Architecture - Instructions

## Purpose

Este documento proporciona instrucciones detalladas para diseñar arquitecturas de aplicaciones web modernas.

## When to Activate

Activar esta skill cuando:
- Se necesite diseñar la arquitectura de una aplicación web
- Se requiera elegir entre arquitecturas (SPA, SSR, SSG, etc.)
- Se deba implementar microservicios
- Se necesite diseñar sistemas escalables
- Se trabaje con patrones de diseño
- Se requiera implementar caching
- Se necesite diseñar sistemas distribuidos
- Se trabaje con CI/CD

## Core Rules

### 1. Elección de Arquitectura

**Regla #1: Elegir la arquitectura correcta**
```javascript
// ✅ CORRECTO: SPA para aplicaciones interactivas
// - Dashboard
// - Aplicaciones de gestión
// - Apps con mucha interacción

// ✅ CORRECTO: SSR para SEO y performance
// - Blogs
// - E-commerce
// - Sitios con contenido dinámico

// ✅ CORRECTO: SSG para sitios estáticos
// - Documentación
// - Landing pages
// - Blogs estáticos

// ❌ INCORRECTO: SPA para SEO
// - Sitios que necesitan SEO
// - Blogs
// - E-commerce
```

### 2. Patrones de Diseño

**Regla #2: Usar patrones apropiados**
```javascript
// ✅ CORRECTO: Clean Architecture
// src/
// ├── domain/          # Entidades y reglas de negocio
// ├── application/     # Casos de uso
// ├── infrastructure/  # Implementaciones técnicas
// └── presentation/    # Interfaces de usuario

// ✅ CORRECTO: Repository Pattern
class UsuarioRepository {
  async obtenerPorId(id) {
    return await db.usuarios.findByPk(id);
  }
}

// ❌ INCORRECTO: Lógica mezclada
// Todo en un solo archivo
```

### 3. Escalabilidad

**Regla #3: Diseñar para escalar**
```javascript
// ✅ CORRECTO: Stateless services
// - No guardar estado en memoria
// - Usar Redis para sesiones
// - Horizontal scaling

// ✅ CORRECTO: Caching
// - Cache de respuestas
// - Cache de base de datos
// - CDN para assets

// ❌ INCORRECTO: Stateful services
// - Estado en memoria
// - Sesiones en servidor
```

### 4. Microservicios

**Regla #4: Descomponer servicios correctamente**
```javascript
// ✅ CORRECTO: Por dominio
// - Servicio de usuarios
// - Servicio de pagos
// - Servicio de notificaciones

// ❌ INCORRECTO: Por capas
// - Servicio de frontend
// - Servicio de backend
// - Servicio de base de datos
```

## Workflow

### Paso 1: Análisis
1. Identificar requisitos
2. Definir constraints
3. Evaluar opciones

### Paso 2: Diseño
1. Elegir arquitectura
2. Definir componentes
3. Diseñar interfaces

### Paso 3: Implementación
1. Configurar estructura
2. Implementar patrones
3. Configurar CI/CD

### Paso 4: Optimización
1. Performance
2. Escalabilidad
3. Monitoreo

## Best Practices

### 1. Arquitectura
- ✅ Separar concerns
- ✅ Patrones establecidos
- ✅ Documentación
- ❌ No sobre-ingeniería

### 2. Escalabilidad
- ✅ Stateless
- ✅ Caching
- ✅ Horizontal scaling
- ❌ No stateful

### 3. DevOps
- ✅ CI/CD
- ✅ Docker
- ✅ Monitoreo
- ❌ No deploy manual

## Anti Patterns

### 1. God Object
```javascript
// ❌ INCORRECTO
class TodoApp {
  // Todo en una clase
}

// ✅ CORRECTO
// Separar en módulos
```

## Examples

Ver la carpeta `examples/` para ejemplos completos.

## References

- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Microservices](https://microservices.io/)