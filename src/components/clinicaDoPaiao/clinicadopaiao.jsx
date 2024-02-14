import React from 'react'
import './clinicadopaiao.css'

function ClinicaDoPaiao () {
    return (
      <main id="background">
        <div className="background-overlay"></div>
        <div id="containerDeInformacoes">
          <p id="clinicaDoPaiaoTitle">Clínica do Paião</p>
          <p id="sloganClinicaDoPaiao">
            Cuidamos de si, a cada passo do caminho.
          </p>
          <div className="horario">
            <p className="infoClinicaDoPaiao">Segunda - Sábado</p>
            <p className="infoClinicaDoPaiao">8h00 – 20h00</p>
          </div>
          <button id="botaoAgendeJa">
            <a href="#" style={{ color: "black", fontSize: "15px" }}>
              Agende já a sua consulta!
            </a>
          </button>
        </div>
      </main>
    );
}

export default ClinicaDoPaiao;