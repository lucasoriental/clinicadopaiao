import React from "react";
import { Link } from "react-router-dom";
import cardiologia from "../../../../assets/img/servicos/cardiologia.webp";
import clinicaGeral from "../../../../assets/img/servicos/clinicaGeral.webp";
import dermatologia from "../../../../assets/img/servicos/dermatologia.webp";
import fisioterapia from "../../../../assets/img/servicos/fisioterapia.webp";
import medicinaInterna from "../../../../assets/img/servicos/medicinaInterna.webp";
import ortopedia from "../../../../assets/img/servicos/ortopedia.webp";
import otorrinolaringologia from "../../../../assets/img/servicos/otorrinolaringologia.webp";
import psicologia from "../../../../assets/img/servicos/psicologia.webp";
import psiquiatria from "../../../../assets/img/servicos/psiquiatria.webp";
import reabilitacaoAuditiva from "../../../../assets/img/servicos/reabilitacaoAuditiva.webp";
import podologia from "../../../../assets/img/servicos/podologia.webp"
import acupuntura from "../../../../assets/img/servicos/acupuntura.webp"

function CadaServico() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  let servicos = [
    {
      image: clinicaGeral,
      nomeDoServico: "Clínica Geral",
      path: "/clinicaGeral",
    },
    {
      image: cardiologia,
      nomeDoServico: "Cardiologia",
      path: "*",
    },
    {
      image: dermatologia,
      nomeDoServico: "Dermatologia",
      path: "*",
    },
    {
      image: ortopedia,
      nomeDoServico: "Ortopedia",
      path: "/ortopedia",
    },
    {
      image: otorrinolaringologia,
      nomeDoServico: "Otorrinolaringologia",
      path: "*",
    },
    {
      image: psicologia,
      nomeDoServico: "Psicologia",
      path: "/psicologia",
    },
    {
      image: psiquiatria,
      nomeDoServico: "Psiquiatria",
      path: "*",
    },
    {
      image: fisioterapia,
      nomeDoServico: "Fisioterapia",
      path: "/fisioterapia",
    },
    {
      image: medicinaInterna,
      nomeDoServico: "Medicina Interna",
      path: "*",
    },
    {
      image: reabilitacaoAuditiva,
      nomeDoServico: "Reabilitação Auditiva",
      path: "*",
    },
    {
      image: podologia,
      nomeDoServico: "Podologia",
      path: "*",
    },
    {
      image: acupuntura,
      nomeDoServico: "Acupuntura",
      path: "/acupuntura",
    },
  ];
  return (
    <div className="container-galeria-items">
      {servicos.map((servico, index) => {
        return (
          <div key={index} className="cada-item-galeria">
            <Link to={servico.path} onClick={handleClick}>
              <div>
                <img
                  className="imagens-galeria"
                  src={servico.image}
                  alt={servico.nomeDoServico}
                />
              </div>
              <div className="background-nome-galeria">
                <p className="nome-galeria">{servico.nomeDoServico}</p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CadaServico;
