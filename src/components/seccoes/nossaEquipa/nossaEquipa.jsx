import React from "react";
import CadaFuncionario from "./cadaFuncionario/cadaFuncionario";

function NossaEquipa() {
  return (
    <div>
      <div>
        <div id="nossaEquipa" className="container-geral">
          <p className="titulos-geral">Nossa equipa</p>
        </div>
        <div className="container-galeria">
          <CadaFuncionario></CadaFuncionario>
        </div>
      </div>
    </div>
  );
}

export default NossaEquipa;
