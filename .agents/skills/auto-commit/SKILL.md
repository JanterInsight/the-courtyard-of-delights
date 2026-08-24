---
name: auto-commit
description: Automatiza commits git después de aplicar cambios en el proyecto. Usar siempre que el agente modifique archivos del proyecto.
---

Esta skill configura el agente para hacer commits automáticos después de cualquier cambio en el proyecto, con soporte de versionado semántico.

## Archivos relacionados

- `.agents\skills\versioned\auto-commit\scripts/commit_agent.py` - Script principal de commit automático con versionado
- `.agents\skills\versioned\auto-commit\scripts/auto_commit.ps1` - Wrapper para Windows (PowerShell)
- `.agents\skills\versioned\auto-commit\scripts/auto_commit.sh` - Wrapper para Unix/Linux (Bash)
- `.VERSION` - Archivo de versión semántica del proyecto (se crea automáticamente)

## Uso

**Antes de hacer commit, verifica si el proyecto está inicializado:**

```bash
# Verificar si es un repositorio git
git rev-parse --is-inside-work-tree 2>/dev/null || git init
```

Si no está inicializado, ejecuta `git init` primero. Luego, después de aplicar cualquier cambio (código, imágenes, documentación), el agente debe ejecutar:

```bash
# Commit con mensaje personalizado:
python .agents/commit_agent.py "feat: add new project section"

# Commit con incremento de versión:
python .agents/commit_agent.py --bump patch
python .agents/commit_agent.py --bump minor
python .agents/commit_agent.py --bump major

# Commit con versión específica:
python .agents/commit_agent.py --set 0.1.0

# En Windows (PowerShell):
.\.agents\skills\versioned\auto-commit\scripts\auto_commit.ps1

# En Unix/Linux:
bash .agents/skills/versioned/auto-commit/scripts/auto_commit.sh
```

## Versionado Semántico

El sistema usa [Semantic Versioning](https://semver.org/) (MAJOR.MINOR.PATCH):

- **MAJOR** (X.0.0): Cambios incompatibles con versiones anteriores
- **MINOR** (1.X.0): Nuevas funcionalidades compatibles con versiones anteriores
- **PATCH** (1.0.X): Correcciones de bugs compatibles

### Comandos de versionado

```bash
# Incrementar patch (1.0.0 → 1.0.1) - bug fixes, typos, docs
python .agents/commit_agent.py --bump patch "fix: correct typo in README"

# Incrementar minor (1.0.0 → 1.1.0) - nuevas features, refactors
python .agents/commit_agent.py --bump minor "feat: add user authentication"

# Incrementar major (1.0.0 → 2.0.0) - breaking changes
python .agents/commit_agent.py --bump major "feat!: redesign API endpoints"

# Establecer versión específica
python .agents/commit_agent.py --set 0.1.0 "Initial project setup"
```

### Flujo de versionado en plantillas

Para proyectos basados en plantillas, seguir este flujo:

1. **0.0.0** - Template sin adaptar (primer commit)
2. **0.1.0** - Después de completar la segunda instrucción de `read-this-first.md`
3. **0.2.0** - Después de completar la tercera instrucción de `read-this-first.md`
4. **1.0.0** - Después de completar la cuarta instrucción de `read-this-first.md`
5. **1.0.X** - A partir de 1.0.0, cambios pequeños
6. **1.X.0** - A partir de 1.0.0, cambios medianos
7. **X.0.0** - A partir de 1.0.0, cambios mayores

## Mensaje de commit

- Los mensajes deben ser descriptivos y en **inglés**
- Si existe `.agents/CHANGE_MSG.txt`, se leerá automáticamente como mensaje
- Formato recomendado: `"feat: add new project section"` o `"fix: correct responsive layout"`
- Cuando se usa versionado, el formato es: `"v1.0.1: feat: add new feature"`
- Si no se proporciona mensaje ni existe `CHANGE_MSG.txt`, se usa `"Agent: automated commit"` con una advertencia

## Cuándo usar

- **SIEMPRE** después de modificar archivos del proyecto
- Al finalizar implementación de nuevas funcionalidades
- Al corregir errores o bugs
- Al actualizar contenido, imágenes o documentación
- Cuando se complete un milestone del proyecto (usar --bump minor o --bump major)
