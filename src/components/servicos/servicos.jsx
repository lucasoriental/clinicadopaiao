import React from "react";
import CadaServico from "../common/cadaServico/cadaServico";
import "./servicos.css";

function MyServicos() {
  return (
    <main>
      <div id="container-servicos">
        <p id="servicosTitle">Serviços</p>
        <p className="sobre_paragraph">
          A Clínica do Paião disponibiliza atualmente diferentes serviços de
          medicina e saúde. Futuramente, perspectiva-se a disponibilização de
          mais de serviços de saúde e exames complementares de diagnóstico.
        </p>
      </div>
      <div id="container-cada-servico">
        <CadaServico></CadaServico>
      </div>
    </main>
  );
}

export default MyServicos;
