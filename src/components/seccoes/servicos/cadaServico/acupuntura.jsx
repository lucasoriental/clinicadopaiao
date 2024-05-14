import React from "react";

const Acupuntura = () => {
  return (
    <div className="container-geral">
      <div className="titulo-servico">Acupuntura</div>
      <div className="paragrafos-geral">
        <p>
          A acupuntura assenta em tratar a doença/sintomas através de inserção
          de agulhas em pontos estrategicamente definidos de acordo com os
          sintomas apresentados e com suplementação de fitoterapia ajustada
          promovendo um estilo de vida saudável.
        </p>
        <p>
          Acupuntura consiste na aplicação de agulhas em determinados pontos do
          corpo afim de promover o equilíbrio energético e fazer uma auto cura;
          para a medicina chinesa só há doença quando existe um bloqueio
          energético e emocional que gere patologia, assim a terapêutica de
          acupuntura vai equilibrar e desbloquear os meridianos geradores da
          doença.
        </p>
        <p>
          Terapêutica utilizada em crianças e adultos e em{" "}
          <strong>qualquer idade</strong>.
        </p>
        <div className="container-lista">
          <div>
            <label className="titulo-lista">Util em casos como:</label>
            <ul>
              <p className="item-list">• Dores em geral </p>
              <p className="item-list">
                • Estados inflamatórios como tendinite (...)
              </p>
              <p className="item-list">
                • Estados emocionais como depressão, ansiedade, insónias
              </p>
              <p className="item-list">• Relaxamento e combate ao stress</p>
              <p className="item-list">• Deixar de fumar</p>
              <p className="item-list">• Regulação hormonal </p>
              <p className="item-list">
                • Fertilidade e tratamento da infertilidade (...)
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acupuntura;
