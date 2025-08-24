const mongoose = require('mongoose');

// Definir el esquema de Usuario
const UsuarioSchema = new mongoose.Schema({
  idUsuario: {
    type: Number,
    required: true,
    unique: true
  },
  nombreUsuario: {
    type: String,
    required: true
  },
  correoUsuario: {
    type: String,
    required: true,
    unique: true,
    match: [/^.+@.+\..+$/, "El correo debe ser válido"]
  },
  contraseniaUsuario: {
    type: String,
    required: true
  },
  tipoIdentificacion: {
    type: String,
    required: true
  },
  identificacionUsuario: {
    type: String,
    required: true,
    unique: true
  },
  celularUsuario: String,
  paisUsuario: String,
  fechaNacimiento: Date,
  created_at: {
    type: Date,
    default: Date.now
  },
  rolUsuario: {
    type: String,
    required: true,
    enum: ["admin", "cliente"]
  }
});

// Crear el modelo
module.exports = mongoose.model('Usuario', UsuarioSchema);
