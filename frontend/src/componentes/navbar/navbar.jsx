import { Link } from "react-router-dom";
import "./navbar.css"; 

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <span>MiApp</span>
        </div>

        {/* Links */}
        <div className="navbar-links">
          <Link to="/reservar">Reservar</Link>
          <Link to="/ofertas">Ofertas y destinos</Link>
          <Link to="/reserva">Tu reserva</Link>
          <Link to="/ayuda">Información y ayuda</Link>
        </div>

        {/* Botón Iniciar Sesión */}
        <div>
          <Link to="/inicioSesion" className="btn-login">
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </nav>
  );
}
