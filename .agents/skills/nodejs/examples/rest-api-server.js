// Ejemplo: Servidor REST API con Node.js moderno
// Usa ES Modules, async/await, y patrones profesionales

import { createServer } from 'http';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

// ============================================
// Base de datos en memoria (ejemplo)
// ============================================
const usuarios = new Map([
  ['1', { id: '1', nombre: 'Juan', email: 'juan@example.com' }],
  ['2', { id: '2', nombre: 'María', email: 'maria@example.com' }]
]);

// ============================================
// Utilidades
// ============================================
const sendJSON = (res, status, data) => {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
};

const parseBody = async (req) => {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString() || '{}');
};

// ============================================
// Router
// ============================================
const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const { pathname } = url;
  
  try {
    // GET /api/usuarios
    if (req.method === 'GET' && pathname === '/api/usuarios') {
      return sendJSON(res, 200, Array.from(usuarios.values()));
    }
    
    // GET /api/usuarios/:id
    const match = pathname.match(/^\/api\/usuarios\/(\d+)$/);
    if (req.method === 'GET' && match) {
      const usuario = usuarios.get(match[1]);
      if (!usuario) {
        return sendJSON(res, 404, { error: 'Usuario no encontrado' });
      }
      return sendJSON(res, 200, usuario);
    }
    
    // POST /api/usuarios
    if (req.method === 'POST' && pathname === '/api/usuarios') {
      const body = await parseBody(req);
      const id = String(usuarios.size + 1);
      const nuevoUsuario = { id, ...body };
      usuarios.set(id, nuevoUsuario);
      return sendJSON(res, 201, nuevoUsuario);
    }
    
    // 404
    return sendJSON(res, 404, { error: 'Ruta no encontrada' });
  } catch (error) {
    console.error('Error:', error);
    return sendJSON(res, 500, { error: 'Error interno del servidor' });
  }
});

// ============================================
// Iniciar servidor
// ============================================
server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// ============================================
// Ejemplo: Leer archivo con fs/promises
// ============================================
async function leerConfig() {
  try {
    const data = await readFile(path.join(__dirname, 'config.json'), 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error leyendo config:', error);
    return {};
  }
}