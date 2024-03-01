import React from "react";
import fisioterapia1 from "../../../../assets/img/servicos/cada_servico_imgs/fisioterapia/fisioterapia1.jpg";
import fisioterapia2 from "../../../../assets/img/servicos/cada_servico_imgs/fisioterapia/fisioterapia2.jpg";

const Fisioterapia = () => {
  return (
    <div className="container-geral" style={{ marginBottom: "90px" }}>
      <p className="titulo-servico">Fisioterapia e Pilates Clínico</p>
      <div className="paragrafos-geral" style={{ margin: "0" }}>
        <p>
          A Fisioterapia é um serviço prestado por fisioterapeutas de forma a
          <strong>
            {" "}
            desenvolver, manter e restaurar o máximo de movimento e capacidade
            funcional ao longo da vida.
          </strong>
        </p>
      </div>
      <div className="paragrafos-geral" style={{ margin: "0" }}>
        <div className="container-lista">
          <div>
            <label className="titulo-lista">
              Na Clínica do Paião, o serviço de fisioterapia inclui:
            </label>
            <ul>
              <li className="item-list">Fisioterapia;</li>
              <li className="item-list">Pilates clínico; </li>
              <li className="item-list">e Treino funcional.</li>
            </ul>
          </div>
          <div>
            <img
              className="img-hvr"
              src={fisioterapia1}
              alt="fisioterapia1_img"
              style={{
                width: "250px",
                height: "150px",
                border: "solid #bdbdbd 5px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
      <div className="paragrafos-geral">
        <p>
          O/A fisioterapeuta intervém ao nível da{" "}
          <strong>
            avaliação inicial, diagnóstico em fisioterapia, planos de tratamento
            promovendo a reabilitação e implementação de estratégias.
          </strong>{" "}
          O/A fisioterapeuta pode inclusivamente atuar na{" "}
          <strong>prevenção, educação e aconselhamento.</strong>
        </p>
      </div>
      <div className="paragrafos-geral">
        <p>
          Ao longo da vida existem diversas situações em que o movimento e a
          função sofrem alterações. Na Clínica do Paião, a Fisioterapia tem um
          papel importante na vida da{" "}
          <strong>
            criança, adolescente, e idade adulta até ao envelhecimento.
          </strong>
        </p>
      </div>
      <div className="paragrafos-geral">
        <div className="container-lista">
          <div style={{ maxWidth: "60%" }}>
            <label className="titulo-lista">
              Especificamente, após a avaliação inicial a intervenção pode
              incidir sobre:{" "}
            </label>
            <ul>
              <li className="item-list">Lombalgias (Dor lombar)</li>
              <li className="item-list">Cervicalgias (Dor cervical/pescoço)</li>
              <li className="item-list">Lombociatalgias (Dor ciática)</li>
              <li className="item-list">Omalgias (Dor ombro)</li>
              <li className="item-list">Gonalgia (Dor joelho)</li>
              <li className="item-list">Tendinopatias (Tendinites)</li>
              <li className="item-list">Roturas musculares</li>
              <li className="item-list">
                Contusão e entorses (Tornozelo, joelho)
              </li>
              <li className="item-list">
                Reabilitação pós-cirúrgica (Prótese do joelho, anca, ombro)
              </li>
              <li className="item-list">
                Patologias osteoarticulares (Artroses, artrite, escolioses,
                esporão calcâneo)
              </li>
              <li className="item-list">Prevenção de quedas</li>
              <li className="item-list">Entre outras problemáticas. </li>
            </ul>
          </div>
          <div>
            <img
              className="img-hvr"
              src={fisioterapia2}
              alt="fisioterapia2_img"
              style={{
                width: "327px",
                height: "261px",
                border: "solid #bdbdbd 5px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
      <div className="paragrafos-geral">
        <p>
          Através da fisioterapia é possível, por exemplo, alívio da dor,
          aumento da mobilidade e força, prevenção do risco de queda e melhoria
          da qualidade de vida.
        </p>
      </div>
      <div className="paragrafos-geral">
        <p>
          Dispomos também de Pilates Clínico em sessões individuais ou em grupos
          de duas pessoas. O Pilates Clínico tem benefícios ao nível do
          pavimento pélvico diminuindo as perdas de urina, aumenta a força e
          resistência muscular, melhora o equilíbrio e a postura corporal, o que
          produz efeitos na diminuição da dor e no aumento da mobilidade das
          articulações.{" "}
        </p>
      </div>
      <div className="paragrafos-geral">
        <p>
          O serviço de fisioterapia está disponível durante a semana, mediante
          marcação.{" "}
        </p>
      </div>
    </div>
  );
};

export default Fisioterapia;
