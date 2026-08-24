#!/usr/bin/env python3
"""Helper para que el agente haga commits de forma fiable con versionado semántico.

Uso:
  python .agents/commit_agent.py "Mensaje del commit"
  python .agents/commit_agent.py --bump patch
  python .agents/commit_agent.py --bump minor
  python .agents/commit_agent.py --bump major
  python .agents/commit_agent.py --set 0.1.0

El script hace `git add -A` y `git commit -m <msg>` y reporta salida.
Si se usa --bump o --set, actualiza el archivo .VERSION y formatea el mensaje.
"""
import subprocess
import sys
from pathlib import Path


def run_cmd(args):
    r = subprocess.run(args, capture_output=True, text=True)
    return r.returncode, r.stdout.strip(), r.stderr.strip()


def read_version_file():
    """Lee la versión actual desde .VERSION si existe."""
    version_file = Path(".VERSION")
    if version_file.exists():
        return version_file.read_text().strip()
    return None


def write_version_file(version):
    """Escribe la versión en .VERSION."""
    Path(".VERSION").write_text(version + "\n")


def bump_version(current_version, bump_type):
    """Incrementa la versión según el tipo: patch, minor, major."""
    if not current_version:
        current_version = "0.0.0"
    
    parts = current_version.split(".")
    if len(parts) != 3:
        parts = ["0", "0", "0"]
    
    major, minor, patch = int(parts[0]), int(parts[1]), int(parts[2])
    
    if bump_type == "major":
        major += 1
        minor = 0
        patch = 0
    elif bump_type == "minor":
        minor += 1
        patch = 0
    elif bump_type == "patch":
        patch += 1
    
    return f"{major}.{minor}.{patch}"


def set_version(version_str):
    """Valida y retorna una versión específica."""
    parts = version_str.split(".")
    if len(parts) != 3:
        print(f"Error: versión inválida '{version_str}'. Formato esperado: X.Y.Z")
        sys.exit(1)
    
    try:
        int(parts[0])
        int(parts[1])
        int(parts[2])
    except ValueError:
        print(f"Error: versión inválida '{version_str}'. Deben ser números.")
        sys.exit(1)
    
    return version_str


def main():
    # Parsear argumentos
    bump_type = None
    set_version_str = None
    msg = None
    
    args = sys.argv[1:]
    i = 0
    while i < len(args):
        if args[i] == "--bump" and i + 1 < len(args):
            bump_type = args[i + 1]
            if bump_type not in ["patch", "minor", "major"]:
                print(f"Error: tipo de bump inválido '{bump_type}'. Usa: patch, minor, major")
                sys.exit(1)
            i += 2
        elif args[i] == "--set" and i + 1 < len(args):
            set_version_str = args[i + 1]
            i += 2
        elif not args[i].startswith("--"):
            msg = args[i]
            i += 1
        else:
            i += 1
    
    # Asegurar que estamos en un repo git
    code, out, err = run_cmd(["git", "rev-parse", "--is-inside-work-tree"])
    if code != 0:
        print("Error: el directorio actual no es un repositorio git.")
        print(err)
        sys.exit(1)
    
    # Manejar versionado
    current_version = read_version_file()
    version = current_version
    
    if set_version_str:
        version = set_version(set_version_str)
        write_version_file(version)
        print(f"Versión establecida: {version}")
    elif bump_type:
        version = bump_version(current_version, bump_type)
        write_version_file(version)
        print(f"Versión incrementada ({bump_type}): {version}")
    
    # Construir mensaje de commit
    if not msg:
        # Intentar leer desde .agents/CHANGE_MSG.txt
        change_msg_file = Path(".agents/CHANGE_MSG.txt")
        if change_msg_file.exists():
            msg = change_msg_file.read_text().strip()
        
        if not msg:
            msg = "Agent: automated commit"
            print(f"Advertencia: se usó mensaje por defecto. Proporciona un mensaje o crea .agents/CHANGE_MSG.txt")
    
    # Añadir versión al mensaje si existe
    if version and not msg.startswith(f"v{version}:"):
        msg = f"v{version}: {msg}"
    
    # git add
    code, out, err = run_cmd(["git", "add", "-A"])
    if code != 0:
        print("git add falló:")
        print(err)
        sys.exit(1)
    
    # git commit
    code, out, err = run_cmd(["git", "commit", "-m", msg])
    if code != 0:
        lower = (out + err).lower()
        if "nothing to commit" in lower:
            print("Nada que comitear.")
            sys.exit(0)
        print("git commit falló:")
        print(out)
        print(err)
        sys.exit(code)
    
    print(f"✓ Commit exitoso: {msg}")
    print(out)


if __name__ == '__main__':
    main()