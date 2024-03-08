import React from "react";
import sobreImg1 from "../../../assets/img/sobreImg1.webp";
import sobreImg2 from "../../../assets/img/sobreImg2.webp";

function Sobre() {
  return (
    <div>
      <div id="sobre" className="container-geral">
        <p className="titulos-geral">Sobre Nós</p>
        <div className="paragrafos-geral">
          <p>
            A Clínica do Paião é uma clínica privada na área da medicina e
            saúde, que tem como missão disponibilizar serviços de saúde com
            elevados padrões de qualidade e adaptados às necessidades dos seus
            clientes.
          </p>
        </div>
        <div className="paragrafos-geral">
          <p>
            Situada na freguesia do Paião, no concelho da Figueira da Foz, a
            Clínica do Paião pauta-se pelos seguintes Valores:
          </p>
          <p>
            • <strong>Qualidade</strong> | Disponibilizar serviços de qualidade
            diferenciada e reconhecida;
          </p>
          <p>
            • <strong>Variedade</strong> | Congregar num só espaço o maior
            número de serviços possível possível;
          </p>
          <p>
            • <strong>Valor</strong> | A melhor qualidade ao melhor preço;
          </p>
          <p>
            • <strong>Serviço</strong> | Rapidez, eficiência e segurança.
          </p>
        </div>
        <div>
          <p id="titulo-sobre-parte-2">As nossas instalações</p>
          <div className="paragrafos-geral">
            <p>
              A Clínica do Paião é composta por uma recepção, dois gabinetes
              médicos e uma sala de fisioterapia.{" "}
            </p>
            <div id="sobre_images">
              <img
                src={sobreImg1}
                className="sobre_img_2"
                alt="Foto da recepção"
              />
              <img
                className="sobre_img_2"
                src={sobreImg2}
                alt="Foto da Entrada"
                style={{ marginLeft: "15px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
