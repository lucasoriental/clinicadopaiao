import React from "react";
import fotografia from "../../../../assets/img/equipa/noPic.webp"

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
      especializacao: "• Otorrinolaringoogia",
      id: 5,
    },
    {
      fotografia: fotografia,
      nome: "Dra. Rute Matos",
      especializacao: "• Psicologia",
      id: 6,
    },
    {
      fotografia: fotografia,
      nome: "Dra. Bárbara Gomes",
      especializacao: "• Fisioterapia",
      id: 6,
    },
    {
      fotografia: fotografia,
      nome: "Dra. Adriana Sousa",
      especializacao: "• Fisioterapia",
      id: 7,
    },
    {
      fotografia: fotografia,
      nome: "Dr. Sergey Belykh",
      especializacao: "• Medicina Interna",
      id: 8,
    },
    {
      fotografia: fotografia,
      nome: "Dr. Nuno Jesus",
      especializacao: "• Reabilitação Auditiva",
      id: 9,
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
