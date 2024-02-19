import React from "react";
import "./header.css";
import logo from "../../../assets/img/logo.webp"

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo Do Paião" id="logo" />
      <nav>
        <ul id="links">
          <li>
            <a href="#clinicaDoPaiao" style={{ color: "DarkGray" }}>
              Clínica do Paião
            </a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#servicos">Serviços</a>
          </li>
          <li>
            <a href="#nossaEquipa">Nossa Equipa</a>
          </li>
          <li>
            <a href="#contactos">Contactos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
