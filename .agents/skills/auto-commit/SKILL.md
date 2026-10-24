---
name: auto-commit
description: "Automates git commits after applying changes to the project. Always use when the agent modifies project files."
---

This skill configures the agent to make automatic commits after any change to the project, with semantic versioning support.

## Related Files

- `.agents\skills\versioned\auto-commit\scripts/commit_agent.py` - Main auto-commit script with versioning
- `.agents\skills\versioned\auto-commit\scripts/auto_commit.ps1` - Wrapper for Windows (PowerShell)
- `.agents\skills\versioned\auto-commit\scripts/auto_commit.sh` - Wrapper for Unix/Linux (Bash)
- `.VERSION` - Semantic version file for the project (created automatically)

## Usage

**Before committing, verify if the project is initialized:**

```bash
# Verify if it is a git repository
git rev-parse --is-inside-work-tree 2>/dev/null || git init
```

If not initialized, run `git init` first. Then, after applying any change (code, images, documentation), the agent must execute:

```bash
# Commit with custom message:
python .agents/commit_agent.py "feat: add new project section"

# Commit with version bump:
python .agents/commit_agent.py --bump patch
python .agents/commit_agent.py --bump minor
python .agents/commit_agent.py --bump major

# Commit with specific version:
python .agents/commit_agent.py --set 0.1.0

# On Windows (PowerShell):
.\.agents\skills\versioned\auto-commit\scripts\auto_commit.ps1

# On Unix/Linux:
bash .agents/skills/versioned/auto-commit/scripts/auto_commit.sh
```

## Semantic Versioning

The system uses [Semantic Versioning](https://semver.org/) (MAJOR.MINOR.PATCH):

- **MAJOR** (X.0.0): Breaking changes
- **MINOR** (1.X.0): New backwards-compatible features
- **PATCH** (1.0.X): Backwards-compatible bug fixes

### Versioning Commands

```bash
# Bump patch (1.0.0 → 1.0.1) - bug fixes, typos, docs
python .agents/commit_agent.py --bump patch "fix: correct typo in README"

# Bump minor (1.0.0 → 1.1.0) - new features, refactors
python .agents/commit_agent.py --bump minor "feat: add user authentication"

# Bump major (1.0.0 → 2.0.0) - breaking changes
python .agents/commit_agent.py --bump major "feat!: redesign API endpoints"

# Set specific version
python .agents/commit_agent.py --set 0.1.0 "Initial project setup"
```

### Versioning Flow for Templates

For template-based projects, follow this flow:

1. **0.0.0** - Unadapted template (first commit)
2. **0.1.0** - After completing the second instruction in `read-this-first.md`
3. **0.2.0** - After completing the third instruction in `read-this-first.md`
4. **1.0.0** - After completing the fourth instruction in `read-this-first.md`
5. **1.0.X** - From 1.0.0 onward, small changes
6. **1.X.0** - From 1.0.0 onward, medium changes
7. **X.0.0** - From 1.0.0 onward, major changes

## Commit Message

- Messages must be descriptive and in **English**
- If `.agents/CHANGE_MSG.txt` exists, it will be read automatically as the message
- Recommended format: `"feat: add new project section"` or `"fix: correct responsive layout"`
- When using versioning, the format is: `"v1.0.1: feat: add new feature"`
- If no message is provided and `CHANGE_MSG.txt` does not exist, `"Agent: automated commit"` is used with a warning

## When to Use

- **ALWAYS** after modifying project files
- When finishing implementation of new features
- When fixing errors or bugs
- When updating content, images or documentation
- When a project milestone is completed (use --bump minor or --bump major)
