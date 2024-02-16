import React from "react";
import "./cadaServico.css";

function CadaServico() {
  let servicos = [
    {
      image: "./src/img/servicos/clinicaGeral.webp",
      nomeDoServico: "Clínica Geral",
      path: "#",
    },
    {
      image: "./src/img/servicos/Cardiologia.webp",
      nomeDoServico: "Cardiologia",
      path: "#",
    },
    {
      image: "./src/img/servicos/dermatologia.webp",
      nomeDoServico: "Dermatologia",
      path: "#",
    },
    {
      image: "./src/img/servicos/dermatologia.webp",
      nomeDoServico: "Dermatologia",
      path: "#",
    },
    {
      image: "./src/img/servicos/dermatologia.webp",
      nomeDoServico: "Dermatologia",
      path: "#",
    },
  ];
  return (
    <body>
      <div className="todosServicos">
        {servicos.map((servico) => {
          return (
            <div key={servico.nomeDoServico} className="cadaServico">
              <a href="#">
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
              </a>
            </div>
          );
        })}
      </div>
    </body>
  );
}

export default CadaServico;
