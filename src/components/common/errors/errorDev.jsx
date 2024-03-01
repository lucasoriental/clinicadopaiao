import React from "react";
import { Link } from "react-router-dom";
import ServicoIndisponivel from "../../../assets/img/serviçoindisponivel.png";

const errorDev = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="container-geral"
      style={{ marginBottom: "90px", marginTop: "30px" }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          src={ServicoIndisponivel}
          className="alert_sign"
          alt="Alert Sign"
          style={{
            display: "inline-block",
            height: "100%",
            width: "100%",
            marginBottom: "25px",
          }}
        />
      </div>
      <div className="mensagem-de-erro-paragrafo">
        <p className="errorText">Estimado(a) visitante,</p>
        <p className="errorText">
          Agradecemos o seu interesse no nosso serviço.
        </p>
        <p className="errorText">
          Estamos a atualizar as informações para proporcionar um conteúdo
          completo e informativo sobre o mesmo.
        </p>
        <p className="errorText">
          Ficamos à disposição para esclarecer qualquer dúvida ou fornecer
          informações adicionais. Não hesite em contactar-nos através do{" "}
          <strong>233 940 116</strong> ou visite a nossa clínica na{" "}
          <strong>Rua Doutor Teixeira Dias, nº 47, no Paião</strong>.
        </p>
        <p className="errorText">
          Adicionalmente, convidamo-lo(a) a explorar os outros serviços que
          disponibilizamos. Para uma visão global de todos os serviços
          disponíveis,{" "}
          <Link
            to="/servicos"
            onClick={handleClick}
            style={{
              textDecoration: "underline",
              color: "blue",
              fontWeight: "bold",
            }}
          >
            clique aqui
          </Link>
          .
        </p>
        <p className="errorText">
          Agradecemos a sua compreensão e paciência durante este processo de
          atualização.
        </p>
        <p className="errorText">Cuidamos de si a cada passo do caminho,</p>
        <p className="errorText">Clínica do Paião</p>
      </div>
    </div>
  );
};

export default errorDev;
