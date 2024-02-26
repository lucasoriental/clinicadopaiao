import React from "react";
import Footer from "../../common/footer/footer";
import CadaServico from "./cadaServico/cadaServico";

function Servicos() {
  return (
    <div>
      <div>
        <div id="servicos" className="container-geral">
          <p className="titulos-geral">Serviços</p>
          <p className="paragrafos-geral">
            A Clínica do Paião disponibiliza atualmente diferentes serviços de
            medicina e saúde. Futuramente, perspectiva-se a disponibilização de
            mais de serviços de saúde e exames complementares de diagnóstico.
          </p>
        </div>
        <div className="container-galeria">
          <CadaServico></CadaServico>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Servicos;