import React from "react";
import CadaFuncionario from "../common/cadaFuncionario/cadaFuncionario.jsx";
import "./nossaEquipa.css";

function NossaEquipa() {
  return (
    <div>
      <div className="container">
        <p id="title">Nossa equipa</p>
      </div>
      <div id="container-cada-funcionario">
        <CadaFuncionario></CadaFuncionario>
      </div>
    </div>
  );
}

export default NossaEquipa;
