import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerInfo">
        <p className="titleFooter">Localização</p>
        <p className="info">Rua Doutor Teixeira Dias, nº 47</p>
        <p className="info">3090-453, Paião</p>
      </div>
      <div className="footerInfo">
        <p className="titleFooter">Horário</p>
        <p className="info">Segunda - Sábado</p>
        <p className="info">8h00 - 20h00</p>
      </div>
      <div className="footerInfo" style={{maxWidth: "130px"}}>
        <p className="titleFooter">Contactos</p>
        <p className="info">233 940 116</p>
        <p className="info">clinicadopaiao@outlook.pt</p>
      </div>
    </footer>
  );
}

export default Footer;
