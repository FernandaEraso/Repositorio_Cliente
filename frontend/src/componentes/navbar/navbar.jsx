// Navbar.jsx
import { Link } from "react-router-dom";
import "./navbar.css"; 

export default function Navbar({ usuario, setUsuario }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUsuario(null);
  };

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

        {/* Sesión */}
        <div className="navbar-session">
          {usuario ? (
            <>
              <button className="btn-login">👋 {usuario.nombreUsuario}</button>
              <button onClick={handleLogout} className="btn-logout">
                Cerrar sesión
              </button>
            </>
          ) : (
            <Link to="/inicioSesion" className="btn-login">
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
