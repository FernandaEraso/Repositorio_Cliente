import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistroUsuario from "./componentes/registro/registro";
import Inicio from "./componentes/inicioSesion/inicio"

function App() {
  return (
    <Router>
      <Routes>
        {/* Login en la raíz */}
        <Route path="/" element={<Inicio />} />

        {/* Registro en /registro */}
        <Route path="/registro" element={<RegistroUsuario />} />
      </Routes>
    </Router>
  );
}

export default App;