import React from "react";
import "./sobre.css";

function MySobre() {
  return (
    <div className="container">
      <p id="sobre_title">Sobre Nós</p>
      <div className="sobre_paragraph">
        <p>
          A Clínica do Paião é uma clínica privada na área da medicina e saúde,
          que tem como missão disponibilizar serviços de saúde com elevados
          padrões de qualidade e adaptados às necessidades dos seus clientes.
        </p>
      </div>
      <div className="sobre_paragraph">
        <p>
          Situada na freguesia do Paião, no concelho da Figueira da Foz, a
          Clínica do Paião pauta-se pelos seguintes Valores:
        </p>
        <p>
          • <strong>Qualidade</strong> | Disponibilizar serviços de qualidade
          diferenciada e reconhecida;
        </p>
        <p>
          • <strong>Variedade</strong> | Congregar num só espaço o maior número
          de serviços possível possível;
        </p>
        <p>
          • <strong>Valor</strong> | A melhor qualidade ao melhor preço;
        </p>
        <p>
          • <strong>Serviço</strong> | Rapidez, eficiência e segurança.
        </p>
      </div>
      <div>
        <p id="sobre_section2">As nossas instalações</p>
        <div className="sobre_paragraph">
          <p>
            A Clínica do Paião é composta por uma recepção, dois gabinetes
            médicos e uma sala de fisioterapia.{" "}
          </p>
          <div id="sobre_images">
            <img src="./src/img/sobreImg1.webp" alt="Foto da recepção" />
            <img
              src="./src/img/sobreImg2.webp"
              alt="Foto da Entrada"
              style={{ marginLeft: "15px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySobre;
