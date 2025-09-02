import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./cliente.css";
import Navbar from "../navbar/navbar";

export default function Cliente() {
  return (
    <div className="contenedor">
      


      {/* Sección de destinos */}
      <h1 className="titulo">Descubre tu próximo viaje</h1>
      <div className="tarjetas">
        <div className="tarjeta">
          <div className="imagen">
            <img src="https://denomades-blog.imgix.net/blog/wp-content/uploads/2024/07/31024711/5.jpg?auto=compress%2Cformat&ixlib=php-3.3.1" alt="Bogotá" />
          </div>
          <div className="info">
            <h2 className="ciudad">Santa Marta</h2>
            <p className="detalle">Fecha: 12/02/25</p>
            <p className="detalle">Precio: 950.000</p>
            <p className="detalle">Tipo: Ida y Vuelta</p>
          </div>
        </div>

        <div className="tarjeta">
          <div className="imagen">
            <img src="https://blog.urbansa.co/hubfs/Centro%20de%20la%20ciudad%20-%20El%20centro%20de%20Bogot%C3%A1-Bogot%C3%A1%20de%20noche.jpg" alt="" />
          </div>
          <div className="info">
            <h2 className="ciudad">Bogotá</h2>
            <p className="detalle">Fecha: 01/09/25</p>
            <p className="detalle">Precio: 300.000</p>
            <p className="detalle">Tipo: Solo ida</p>
          </div>
        </div>

        <div className="tarjeta">
          <div className="imagen">
            <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/5b/97/bf.jpg" alt="" />
          </div>
          <div className="info">
            <h2 className="ciudad">San Andrés</h2>
            <p className="detalle">Fecha: 25/05/25</p>
            <p className="detalle">Precio: 1.050.000</p>
            <p className="detalle">Tipo: Ida y Vuelta</p>
          </div>
        </div>

        <div className="tarjeta">
          <div className="imagen">
            <img src="https://www.ul.edu.co/uleduco/cache/mod_roksprocket/caba858bd232dc141cde641e6d15b438_350_500.jpg" alt="" />
          </div>
          <div className="info">
            <h2 className="ciudad">Barranquilla</h2>
            <p className="detalle">Fecha: 07/07/25</p>
            <p className="detalle">Precio: 700.000</p>
            <p className="detalle">Tipo: Ida y Vuelta</p>
          </div>
        </div>

        <div className="tarjeta">
          <div className="imagen">
            <img src="https://s3.pagegear.co/3/eventos/1626/ev_67cb4ae00611a.jpg" alt="" />
          </div>
          <div className="info">
            <h2 className="ciudad">Pereira</h2>
            <p className="detalle">Fecha: 12/12/25</p>
            <p className="detalle">Precio: 250.000</p>
            <p className="detalle">Tipo: Vuelta</p>
          </div>
        </div>

         <div className="tarjeta">
          <div className="imagen">
            <img src="https://ca-times.brightspotcdn.com/dims4/default/694d0d7/2147483647/strip/false/crop/1515x1000+0+0/resize/1486x981!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fec%2F48%2F75fb9d684e1b9673520e911a8a3c%2Fun-destino-para-gozar-958578.JPG" alt="" />
          </div>
          <div className="info">
            <h2 className="ciudad">Cartagena</h2>
            <p className="detalle">Fecha: 12/08/25</p>
            <p className="detalle">Precio: 350.000</p>
            <p className="detalle">Tipo: Solo ida</p>
          </div>
        </div>

         <div className="tarjeta">
          <div className="imagen">
            <img src="https://www.caminosalkantay.com/blog/wp-content/uploads/2024/11/miraflores-lima-city-in-front-the-ocean-1024x767-1.jpg" alt="" />
          </div>
          <div className="info">
            <h2 className="ciudad">Perú</h2>
            <p className="detalle">Fecha: 25/12/25</p>
            <p className="detalle">Precio: 1.350.000</p>
            <p className="detalle">Tipo: Ida y Vuelta</p>
          </div>
        </div>

         <div className="tarjeta">
          <div className="imagen">
            <img src="https://humanidades.com/wp-content/uploads/2017/04/brasil-1-e1566159463813-800x400.jpg" alt="" />
          </div>
          <div className="info">
            <h2 className="ciudad">Brásil</h2>
            <p className="detalle">Fecha: 04/04/25</p>
            <p className="detalle">Precio: 1.200.000</p>
            <p className="detalle">Tipo: Ida y Vuelta</p>
          </div>
        </div>
      </div>

      {/* Sección de aeropuertos */}
      <h1 className="titulo">Aeropuertos</h1>
      <div className="tarjetas">
        <div className="tarjeta">
          <div className="imagen">
            <img src="https://www.itcsa.es/wp-content/uploads/Terminal-aeropuerto-1.jpg" alt="" />
          </div>
          <div className="info">
            <h2 className="ciudad">Aeropuerto Easy Flights</h2>
            <p className="detalle">Ciudad: Bogotá</p>
            <p className="detalle">Código: 5DA15AS5D1285</p>
          </div>
        </div>

        <div className="tarjeta">
          <div className="imagen">
            <img src="https://www.avionrevue.com/wp-content/uploads/2024/01/mexico-aerop.jpg" alt="" />
          </div>
          <div className="info">
            <h2 className="ciudad">Aeropuerto Dorado</h2>
            <p className="detalle">Ciudad: San Juan de Pasto</p>
            <p className="detalle">Código: SS4SA516DF9T92</p>
          </div>
        </div>

        <div className="tarjeta">
          <div className="imagen">
            <img src="https://www.airportgurus.com/wp-content/uploads/2023/02/airport-at-the-colorful-sunset-2022-02-02-05-06-41-utc-scaled-e1671720802460.jpeg" alt="" />
          </div>
          <div className="info">
            <h2 className="ciudad">Colombia por el Mundo</h2>
            <p className="detalle">Ciudad: Cali</p>
            <p className="detalle">Código: 3F5GFT2B8E69WW9</p>
          </div>
        </div>

        <div className="tarjeta">
          <div className="imagen">
            <img src="https://www.pedelta.com/images/proyectos/big_crop_1583928831el-dorado-aeropuerto-4.jpg" alt="" />
          </div>
          <div className="info">
            <h2 className="ciudad">URKUNINA</h2>
            <p className="detalle">Ciudad: San Juan de Pasto</p>
            <p className="detalle">Código: 5SD19A228WF5GT656</p>
          </div>
        </div>
      </div>
    </div>
  );
}