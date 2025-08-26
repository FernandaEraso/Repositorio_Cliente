import React from 'react';
import RegistroUsuario from './componentes/registro/registro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistroUsuario />} />
      </Routes>
    </Router>
  );
}

export default App;