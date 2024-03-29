import { useState, useEffect } from "react";
import Title from "../Login/components/Title/Title.jsx";
import Calificacion from "./components/Calificacion.jsx";

const MisCalificaciones = () => {
  const [listaCalificaciones, setListaCalificaciones] = useState([]);

  useEffect(() => {
    fetch('https://backend-prograweb-production-fff8.up.railway.app/calificaciones')
      .then(response => response.json())
      .then(data => setListaCalificaciones(data))
      .catch(error => console.log(error));
  }, []); // El segundo parámetro [] indica que este efecto solo se ejecutará una vez al montar el componente

  const MapCalificaciones = (listaCalificaciones) => {
    return listaCalificaciones.map((object) => {
      return (
        <div className="calificaciones-container">
          <Calificacion object={object}/>
        </div>
      );
    });
  }

  return (
    <div>
      <div className="calificaciones-container">
        <Title className="title-container" text="Mis Calificaciones" />
        <hr className="divide" />
        <div className="row">
          {MapCalificaciones(listaCalificaciones)}
        </div>
      </div>
    </div>
  )
}

export default MisCalificaciones;
