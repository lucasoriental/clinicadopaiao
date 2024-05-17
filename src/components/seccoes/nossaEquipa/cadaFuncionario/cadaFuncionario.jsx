import React from "react";
import adrianasousa from "../../../../assets/img/equipa/adriana_sousa.jpg";
import barbaragomes from "../../../../assets/img/equipa/barbara_gomes.jpg";
import fotografia from "../../../../assets/img/equipa/noPic.webp";
import rutematos from "../../../../assets/img/equipa/rute_matos.jpg";
import hugobarbosa from "../../../../assets/img/equipa/hugo_barbosa.jpg"

function CadaFuncionario() {
  let funcionarios = [
    {
      fotografia: fotografia,
      nome: "Dra. Soledade Ferreira",
      especializacao: "• Clínica Geral",
    },
    {
      fotografia: fotografia,
      nome: "Dra. Joana Guardado",
      especializacao: "• Cardiologia",
    },
    /* {
      fotografia: fotografia,
      nome: "?",
      especializacao: "• Dermatologia",
    }, */
    {
      fotografia: fotografia,
      nome: "Dr. André Carvalho",
      especializacao: "• Ortopedia",
    },
    {
      fotografia: fotografia,
      nome: "Dr. Afonso Castro",
      especializacao: "• Otorrinolaringologia",
    },
    {
      fotografia: rutematos,
      nome: "Dra. Rute Matos",
      especializacao: "• Psicologia",
    },
    {
      fotografia: fotografia,
      nome: "Dra. Sandra Silva",
      especializacao: "• Psiquiatria",
    },
    {
      fotografia: barbaragomes,
      nome: "Dra. Bárbara Gomes",
      especializacao: "• Fisioterapia",
    },
    {
      fotografia: adrianasousa,
      nome: "Dra. Adriana Sousa",
      especializacao: "• Fisioterapia",
    },
    {
      fotografia: fotografia,
      nome: "Dr. Sergey Belykh",
      especializacao: "• Medicina Interna",
    },
    {
      fotografia: fotografia,
      nome: "Dr. Nuno Jesus",
      especializacao: "• Reabilitação Auditiva",
    },
    {
      fotografia: fotografia,
      nome: "Dra. Joana Neto",
      especializacao: "• Podologia",
    },
    {
      fotografia: hugobarbosa,
      nome: "Dr. Hugo Barbosa",
      especializacao: "• Acupuntura",
    },
  ];
  return (
    <div className="container-galeria-items">
      {funcionarios.map((funcionario, index) => {
        return (
          <div
            key={index}
            id={index}
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
