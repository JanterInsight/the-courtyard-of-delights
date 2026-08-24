// Ejemplo: API REST profesional con Express
// Estructura escalable con middleware, controladores y validación

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { body, validationResult } from 'express-validator';

const app = express();
const PORT = process.env.PORT || 3000;

// ============================================
// Middleware global
// ============================================
app.use(helmet());
app.use(cors());
app.use(express.json());

// ============================================
// Base de datos en memoria (ejemplo)
// ============================================
const usuarios = new Map([
  ['1', { id: '1', nombre: 'Juan', email: 'juan@example.com', activo: true }],
  ['2', { id: '2', nombre: 'María', email: 'maria@example.com', activo: false }]
]);

// ============================================
// Validaciones
// ============================================
const validarUsuario = [
  body('nombre').trim().notEmpty().withMessage('El nombre es requerido'),
  body('email').isEmail().withMessage('Email inválido'),
  body('activo').isBoolean().withMessage('activo debe ser booleano')
];

// ============================================
// Controladores
// ============================================
const obtenerUsuarios = (req, res) => {
  const lista = Array.from(usuarios.values());
  res.json({ data: lista, total: lista.length });
};

const obtenerUsuarioById = (req, res) => {
  const usuario = usuarios.get(req.params.id);
  if (!usuario) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.json({ data: usuario });
};

const crearUsuario = (req, res) => {
  // Validar
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
  
  const id = String(usuarios.size + 1);
  const nuevoUsuario = { id, ...req.body };
  usuarios.set(id, nuevoUsuario);
  
  res.status(201).json({ data: nuevoUsuario });
};

const actualizarUsuario = (req, res) => {
  const usuario = usuarios.get(req.params.id);
  if (!usuario) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  
  const actualizado = { ...usuario, ...req.body, id: usuario.id };
  usuarios.set(usuario.id, actualizado);
  res.json({ data: actualizado });
};

const eliminarUsuario = (req, res) => {
  if (!usuarios.delete(req.params.id)) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }
  res.status(204).send();
};

// ============================================
// Rutas
// ============================================
app.get('/api/usuarios', obtenerUsuarios);
app.get('/api/usuarios/:id', obtenerUsuarioById);
app.post('/api/usuarios', validarUsuario, crearUsuario);
app.put('/api/usuarios/:id', validarUsuario, actualizarUsuario);
app.delete('/api/usuarios/:id', eliminarUsuario);

// ============================================
// Manejo de errores
// ============================================
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// ============================================
// Iniciar servidor
// ============================================
app.listen(PORT, () => {
  console.log(`API Express corriendo en http://localhost:${PORT}`);
});