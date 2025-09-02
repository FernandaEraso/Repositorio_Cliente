// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistroUsuario from "./componentes/registro/registro";
import Inicio from "./componentes/inicioSesion/inicio";
import Cliente from "./componentes/pagCliente/cliente";
import Navbar from "./componentes/navbar/navbar";

function App() {
  const [usuario, setUsuario] = useState(null); // null = no logueado

  return (
    <Router>
      <Navbar usuario={usuario} setUsuario={setUsuario} /> {/* Navbar recibe usuario */}
      <Routes>
        <Route path="/" element={<Cliente />} />
        <Route path="/inicioSesion" element={<Inicio setUsuario={setUsuario} />} />
        <Route path="/registro" element={<RegistroUsuario />} />
      </Routes>
    </Router>
  );
}

export default App;
