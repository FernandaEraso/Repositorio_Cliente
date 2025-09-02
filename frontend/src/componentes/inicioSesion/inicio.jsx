// Inicio.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./inicio.css";

export default function Inicio({ setUsuario }) {
  const [formData, setFormData] = useState({
    correoUsuario: "",
    contraseniaUsuario: "",
  });

  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensaje("");

    try {
      const response = await fetch(
        "https://repositorio-cliente.onrender.com/usuarios/loginUsuario",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.mensaje || "❌ Error en el inicio de sesión");
      }

      setMensaje("✅ Inicio de sesión exitoso");

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      // ✅ Guardar usuario en el estado global
      if (data.usuario) {
        setUsuario(data.usuario);
      }

      // ✅ redirigir al home (o dashboard si lo tienes)
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      setMensaje(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Iniciar Sesión</h2>

        {mensaje && (
          <p className={mensaje.includes("✅") ? "text-green-600" : "text-red-600"}>
            {mensaje}
          </p>
        )}

        <input
          type="email"
          name="correoUsuario"
          placeholder="Correo electrónico"
          value={formData.correoUsuario}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="contraseniaUsuario"
          placeholder="Contraseña"
          value={formData.contraseniaUsuario}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Iniciando..." : "Iniciar Sesión"}
        </button>

        <p>
          ¿No tienes cuenta?{" "}
          <Link to="/registro" className="link">
            Regístrate aquí
          </Link>
        </p>
      </form>
    </div>
  );
}
