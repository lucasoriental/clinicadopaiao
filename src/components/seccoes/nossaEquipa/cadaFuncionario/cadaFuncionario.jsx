import React from "react";
import adrianasousa from "../../../../assets/img/equipa/adriana_sousa.jpg";
import barbaragomes from "../../../../assets/img/equipa/barbara_gomes.jpg";
import fotografia from "../../../../assets/img/equipa/noPic.webp";
import rutematos from "../../../../assets/img/equipa/rute_matos.jpg";

function CadaFuncionario() {
  let funcionarios = [
    {
      fotografia: fotografia,
      nome: "Dra. Soledade Ferreira",
      especializacao: "• Clínica Geral",
      id: 1,
    },
    {
      fotografia: fotografia,
      nome: "Dra. Joana Guardado",
      especializacao: "• Cardiologia",
      id: 2,
    },
    {
      fotografia: rutematos,
      nome: "Dra. Rute Matos",
      especializacao: "• Psicologia",
      id: 6,
    },
    {
      fotografia: fotografia,
      nome: "Dr. João Soares",
      especializacao: "• Dermatologia",
      id: 3,
    },
    {
      fotografia: fotografia,
      nome: "Dr. André Carvalho",
      especializacao: "• Ortopedia",
      id: 4,
    },
    {
      fotografia: fotografia,
      nome: "Dr. Afonso Castro",
      especializacao: "• Otorrinolaringologia",
      id: 5,
    },
    {
      fotografia: barbaragomes,
      nome: "Dra. Bárbara Gomes",
      especializacao: "• Fisioterapia",
      id: 7,
    },
    {
      fotografia: adrianasousa,
      nome: "Dra. Adriana Sousa",
      especializacao: "• Fisioterapia",
      id: 8,
    },
    {
      fotografia: fotografia,
      nome: "Dr. Sergey Belykh",
      especializacao: "• Medicina Interna",
      id: 9,
    },
    {
      fotografia: fotografia,
      nome: "Dr. Nuno Jesus",
      especializacao: "• Reabilitação Auditiva",
      id: 10,
    },
  ];
  return (
    <div className="container-galeria-items">
      {funcionarios.map((funcionario) => {
        return (
          <div
            key={funcionario.id}
            id={funcionario.id}
            className="cada-item-galeria"
          >
            <div>
              <img
                className="imagens-galeria"
                src={funcionario.fotografia}
                alt={funcionario.especializacao}
              />
            </div>
            <div className="background-nome-galeria">
              <p className="nome-galeria-equipa">{funcionario.nome}</p>
              <p className="nome-galeria-equipa-funcao">
                {funcionario.especializacao}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CadaFuncionario;
