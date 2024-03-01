import React from "react";
import psicologia1 from "../../../../assets/img/servicos/cada_servico_imgs/psicologia/psicologia1.jpg";
import psicologia2 from "../../../../assets/img/servicos/cada_servico_imgs/psicologia/psicologia2.jpg";

const Psicologia = () => {
  return (
    <div className="container-geral" style={{ marginBottom: "90px" }}>
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
              <li className="item-list">Terapia individual;</li>
              <li className="item-list">Terapia em grupo;</li>
              <li className="item-list">Terapia familiar;</li>
              <li className="item-list">
                Realização de workshops sobre saúde mental e bem-estar;
              </li>
              <li className="item-list">e Rastreio psicológico gratuito.</li>
            </ul>
          </div>
          <div>
            <img
              className="img-hvr"
              src={psicologia1}
              style={{
                width: "299px",
                height: "196px",
                border: "solid #bdbdbd 5px",
                objectFit: "cover",
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
          <div style={{ maxWidth: "50%" }}>
            <label className="titulo-lista">
              Especificamente, a intervenção pode incidir em:
            </label>
            <ul>
              <li className="item-list">Stress e Ansiedade;</li>
              <li className="item-list">
                Depressão ou outras perturbações de humor;
              </li>
              <li className="item-list">Ansiedade e Medos;</li>
              <li className="item-list">Perturbações Alimentares;</li>
              <li className="item-list">Problemas de comportamento;</li>
              <li className="item-list">Hiperatividade e Défice de Atenção;</li>
              <li className="item-list">Lidar com doenças crónicas;</li>
              <li className="item-list">Problemas de sono;</li>
              <li className="item-list">Perda e Luto;</li>
              <li className="item-list">Stress pós-traumático;</li>
              <li className="item-list">
                Lidar com dificuldades do dia-a-dia (escolares, sociais,
                amorosas, laborais, familiares);
              </li>
              <li className="item-list">Enurese e encoprese;</li>
              <li className="item-list">Entre outras problemáticas.</li>
            </ul>
          </div>
          <div>
            <img
              className="img-hvr"
              src={psicologia2}
              style={{
                width: "400px",
                height: "300px",
                border: "solid #bdbdbd 5px",
                objectFit: "cover",
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
                <li className="item-list">Empatia;</li>
                <li className="item-list">Honestidade e integridade;</li>
                <li className="item-list">Respeito;</li>
                <li className="item-list">Responsabilidade;</li>
                <li className="item-list">Compromisso com os clientes;</li>
              </ul>
            </div>
            <div style={{ marginLeft: "150px" }}>
              <ul>
                <li className="item-list">Autenticidade e Seriedade;</li>
                <li className="item-list">
                  Qualidade e Competência profissional;
                </li>
                <li className="item-list">Desenvolvimento contínuo;</li>
                <li className="item-list">Ética;</li>
                <li className="item-list">Confidencialidade. </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Psicologia;
