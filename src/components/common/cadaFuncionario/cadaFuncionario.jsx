import React from "react";
import "./cadaFuncionario.css";

function CadaFuncionario() {
  let funcionarios = [
    {
      fotografia: "./src/img/equipa/clinicaGeral.png",
      especializacao: "Clínica Geral",
    },
    {
      fotografia: "./src/img/equipa/clinicaGeral.png",
      especializacao: "Clínica Geral",
    },
    {
      fotografia: "./src/img/equipa/clinicaGeral.png",
      especializacao: "Clínica Geral",
    },
    {
      fotografia: "./src/img/equipa/clinicaGeral.png",
      especializacao: "Clínica Geral",
    },
    {
      fotografia: "./src/img/equipa/clinicaGeral.png",
      especializacao: "Clínica Geral",
    },
    {
      fotografia: "./src/img/equipa/clinicaGeral.png",
      especializacao: "Clínica Geral",
    },
  ];
  return (
    <body>
      <div className="todosFuncionarios">
        {funcionarios.map((funcionario) => {
          return (
            <div key={funcionario.especializacao} className="cadaFuncionario">
              <div>
                <img
                  className="fotoDoFuncionario"
                  src={funcionario.fotografia}
                  alt={funcionario.especializacao}
                />
              </div>
              <div id="background_nome_funcionario">
                <p className="nomeDoFuncionario">
                  {funcionario.especializacao}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </body>
  );
}

export default CadaFuncionario;
