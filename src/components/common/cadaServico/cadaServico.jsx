import React from "react";
import "./cadaServico.css";

function CadaServico() {
  let servicos = [
    {
      image: "./src/img/servicos/clinicaGeral.webp",
      nomeDoServico: "Clínica Geral",
    },
    {
      image: "./src/img/servicos/Cardiologia.webp",
      nomeDoServico: "Cardiologia",
    },
    {
      image: "./src/img/servicos/dermatologia.webp",
      nomeDoServico: "Dermatologia",
    },
    {
      image: "./src/img/servicos/dermatologia.webp",
      nomeDoServico: "Dermatologia",
    },
    {
      image: "./src/img/servicos/dermatologia.webp",
      nomeDoServico: "Dermatologia",
    },
    {
      image: "./src/img/servicos/dermatologia.webp",
      nomeDoServico: "Dermatologia",
    },
  ];
  return (
    <div className="todosServicos">
      {servicos.map((servico) => {
        return (
          <div key={servico.nomeDoServico}>
            <div>
              <img
                className="imageDoServico"
                src={servico.image}
                alt={servico.nomeDoServico}
              />
            </div>
            <div id="background_nome_servico">
              <p className="nomeDoServico">{servico.nomeDoServico}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CadaServico;
