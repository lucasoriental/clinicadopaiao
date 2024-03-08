import React from "react";
import psicologia1 from "../../../../assets/img/servicos/cada_servico_imgs/psicologia/psicologia1.jpg";
import psicologia2 from "../../../../assets/img/servicos/cada_servico_imgs/psicologia/psicologia2.jpg";

const Psicologia = () => {
  return (
    <div className="container-geral">
      <p className="titulo-servico">Psicologia</p>
      <div className="paragrafos-geral">
        <p>
          Psicologia é a{" "}
          <strong>
            ciência que que trata, estuda e analisa os processos mentais e
            comportamentos
          </strong>{" "}
          de indivíduos em diferentes situações.
        </p>
        <div className="container-lista">
          <div>
            <label className="titulo-lista">
              Na Clínica do Paião, o serviço de psicologia inclui:
            </label>
            <ul>
              <p className="item-list">• Terapia individual;</p>
              <p className="item-list">• Terapia em grupo;</p>
              <p className="item-list">• Terapia familiar;</p>
              <p className="item-list">
                • Realização de workshops sobre saúde mental e bem-estar;
              </p>
              <p className="item-list">• e Rastreio psicológico gratuito.</p>
            </ul>
          </div>
          <div className="img_mobile">
            <img
              className="img-hvr"
              src={psicologia1}
              style={{
                height: "100%",
                width: "100%",
                maxHeight: "350px",
                maxWidth: "300px",
              }}
            />
          </div>
        </div>
      </div>
      <div className="paragrafos-geral">
        <p>
          A avaliação e intervenção têm por base o modelo{" "}
          <strong>cognitivo-comportamental de 2ª e 3ª geração</strong>,
          conhecido pela sua eficácia e adaptação às necessidades dos clientes.{" "}
        </p>
      </div>
      <div className="paragrafos-geral">
        <p>
          As consultas de psicologia destinam-se, portanto, à prevenção e
          tratamento da doença mental, em crianças, adolescentes, jovens,
          adultos e idosos.
        </p>
      </div>
      <div className="paragrafos-geral">
        <div className="container-lista">
          <div>
            <label className="titulo-lista">
              Especificamente, a intervenção pode incidir em:
            </label>
            <ul>
              <p className="item-list">• Stress e Ansiedade;</p>
              <p className="item-list">
                • Depressão ou outras perturbações de humor;
              </p>
              <p className="item-list">• Ansiedade e Medos;</p>
              <p className="item-list">• Perturbações Alimentares;</p>
              <p className="item-list">• Problemas de comportamento;</p>
              <p className="item-list">• Hiperatividade e Défice de Atenção;</p>
              <p className="item-list">• Lidar com doenças crónicas;</p>
              <p className="item-list">• Problemas de sono;</p>
              <p className="item-list">• Perda e Luto;</p>
              <p className="item-list">• Stress pós-traumático;</p>
              <p className="item-list">
                • Lidar com dificuldades do dia-a-dia (escolares, sociais,
                amorosas, laborais, familiares);
              </p>
              <p className="item-list">• Enurese e encoprese;</p>
              <p className="item-list">• Entre outras problemáticas.</p>
            </ul>
          </div>
          <div className="img_mobile">
            <img
              className="img-hvr"
              src={psicologia2}
              style={{
                height: "100%",
                width: "100%",
                maxHeight: "400px",
                maxWidth: "400px",
              }}
            />
          </div>
        </div>
      </div>
      <div className="paragrafos-geral">
        <p>
          Deste modo, as consultas visam{" "}
          <strong>
            promover e manter a saúde mental e física, a prevenção da
            psicopatologia e a redução de situações de risco.
          </strong>
        </p>
        <p>
          Com as consultas é possível, por exemplo, os clientes aprenderem a
          gerir estados de ansiedade, superar fobias, tomar decisões conscientes
          e ponderadas em momentos de transição, lidar com as emoções
          desagradáveis, entre outras coisas.
        </p>
      </div>
      <div className="paragrafos-geral">
        <p>
          O serviço de psicologia está disponível de segunda a sábado de manhã,
          mediante marcação.
        </p>
      </div>
      <div className="paragrafos-geral">
        A <strong>missão</strong> é melhorar a qualidade de vida dos clientes,
        promovendo o desenvolvimento de competências que contribuem para atingir
        objetivos pessoais, sociais, académicos ou profissionais.{" "}
      </div>
      <div className="paragrafos-geral">
        <div>
          <label className="titulo-lista">
            Os <strong>valores</strong> são:{" "}
          </label>
          <div className="lista-2columns">
            <div>
              <ul>
                <p className="item-list">• Empatia;</p>
                <p className="item-list">• Honestidade e integridade;</p>
                <p className="item-list">• Respeito;</p>
                <p className="item-list">• Responsabilidade;</p>
                <p className="item-list">• Compromisso com os clientes;</p>
                <p className="item-list">• Autenticidade e Seriedade;</p>
                <p className="item-list">
                  • Qualidade e Competência profissional;
                </p>
                <p className="item-list">• Desenvolvimento contínuo;</p>
                <p className="item-list">• Ética;</p>
                <p className="item-list">• Confidencialidade. </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Psicologia;
