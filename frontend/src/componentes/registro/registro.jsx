import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./registro.css";

export default function RegistroUsuario() {
  const [formData, setFormData] = useState({
    nombreUsuario: "",
    correoUsuario: "",
    contraseniaUsuario: "",
    tipoIdentificacion: "",
    identificacionUsuario: "",
    celularUsuario: "",
    paisUsuario: "",
    fechaNacimiento: "",
    rolUsuario: "cliente", // fijo
  });

  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");

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

const nuevoUsuario = {
  idUsuario: Date.now().toString(), // usa timestamp único
  ...formData,
  fechaNacimiento: new Date(formData.fechaNacimiento),
  created_at: new Date(),
};


    try {
      const response = await fetch("https://repositorio-cliente.onrender.com/usuarios/addUsuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoUsuario),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Detalles del error:", errorData);
        throw new Error("Error al registrar usuario");
      }

      const data = await response.json();
      console.log("Respuesta del servidor:", data);

      setMensaje("✅ Usuario registrado exitosamente");
      setFormData({
        nombreUsuario: "",
        correoUsuario: "",
        contraseniaUsuario: "",
        tipoIdentificacion: "",
        identificacionUsuario: "",
        celularUsuario: "",
        paisUsuario: "",
        fechaNacimiento: "",
        rolUsuario: "cliente",
      });
    } catch (error) {
      console.error(error);
      setMensaje("❌ Error al registrar usuario, intenta de nuevo");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Registro de Usuario
        </h2>

        {mensaje && (
          <p
            className={`text-center ${
              mensaje.includes("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {mensaje}
          </p>
        )}

        <input
          type="text"
          name="nombreUsuario"
          placeholder="Nombre completo"
          value={formData.nombreUsuario}
          onChange={handleChange}
          className="w-full p-2 border rounded-xl"
          required
        />

        <input
          type="email"
          name="correoUsuario"
          placeholder="Correo electrónico"
          value={formData.correoUsuario}
          onChange={handleChange}
          className="w-full p-2 border rounded-xl"
          required
        />

        <input
          type="password"
          name="contraseniaUsuario"
          placeholder="Contraseña"
          value={formData.contraseniaUsuario}
          onChange={handleChange}
          className="w-full p-2 border rounded-xl"
          required
        />

        <select
          name="tipoIdentificacion"
          value={formData.tipoIdentificacion}
          onChange={handleChange}
          className="w-full p-2 border rounded-xl"
          required
        >
          <option value="">Seleccione tipo de identificación</option>
          <option value="CC">Cédula de ciudadanía</option>
          <option value="TI">Tarjeta de identidad</option>
          <option value="CE">Cédula de extranjería</option>
          <option value="PP">Pasaporte</option>
        </select>

        <input
          type="text"
          name="identificacionUsuario"
          placeholder="Número de identificación"
          value={formData.identificacionUsuario}
          onChange={handleChange}
          className="w-full p-2 border rounded-xl"
          required
        />

        <input
          type="tel"
          name="celularUsuario"
          placeholder="Número de celular"
          value={formData.celularUsuario}
          onChange={handleChange}
          className="w-full p-2 border rounded-xl"
          required
        />

        <input
          type="text"
          name="paisUsuario"
          placeholder="País"
          value={formData.paisUsuario}
          onChange={handleChange}
          className="w-full p-2 border rounded-xl"
          required
        />

        <label className="block text-gray-700">Fecha de nacimiento:</label>
        <input
          type="date"
          name="fechaNacimiento"
          value={formData.fechaNacimiento}
          onChange={handleChange}
          className="w-full p-2 border rounded-xl"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Registrando..." : "Registrarse"}
        </button>
        <p>
          ¿Ya tienes cuenta?{" "}
          <Link to="/" className="link">
            Inicia sesión aquí
          </Link>
        </p>
      </form>
    </div>
  );
}
