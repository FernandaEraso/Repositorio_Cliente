import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistroUsuario from "./componentes/registro/registro";
import Inicio from "./componentes/inicioSesion/inicio";
import Cliente from "./componentes/pagCliente/cliente";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cliente />} />
        <Route path="/inicioSesion" element={<Inicio />} />
        <Route path="/registro" element={<RegistroUsuario />} />
      </Routes>
    </Router>
  );
}

export default App;