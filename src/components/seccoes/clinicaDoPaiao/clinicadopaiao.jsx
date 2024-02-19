import React from "react";
import background from "../../../assets/img/backgroundImg.webp"

function ClinicaDoPaiao() {
  return (
    <div id="clinicaDoPaiao" 
    className="background-clinica-do-paiao"
    style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${background})` }}
    >
      <div id="container-clinica-do-paiao">
        <p id="titulo-clinica-do-paiao">Clínica do Paião</p>
        <p id="slogan-clinica-do-paiao">
          Cuidamos de si, a cada passo do caminho.
        </p>
        <div className="horario">
          <p className="infoClinicaDoPaiao">Segunda - Sábado</p>
          <p className="infoClinicaDoPaiao">8h00 – 20h00</p>
        </div>
        <button id="botaoAgendeJa">
          <a href="#contactos" style={{ color: "#444444", fontSize: "15px" }}>
            Agende já a sua consulta!
          </a>
        </button>
      </div>
    </div>
  );
}

export default ClinicaDoPaiao;
