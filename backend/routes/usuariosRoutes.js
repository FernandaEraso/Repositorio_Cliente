const express = require('express')
const router = express.Router();
const Usuario = require('../models/usuariosModel');


//obtener todos los usuarios
router.get('/obtenerTodos', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

//agregar un nuevo usuario
router.post("/addUsuarios", async (req, res) => {
    try {
        const usuario = new Usuario(req.body);
        await usuario.save();
        res.status(201).json(usuario)
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

//eliminar un usuario
router.delete("/delUsuario/:id", async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuario) return res.status(404).json({ message: "Usuario no encontrado" })
        res.json({ message: "Usuario eliminado" })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

//actualizar un usuario
router.put("/updateUsuario/:id", async (req, res) => {
    try {
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!usuario) return res.status(404).json({ message: "Usuario no encontrado" })
        res.json(usuario)
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;
