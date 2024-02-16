import React from 'react';
import './header.css';

function MyHeader () {
    return (
      <header>
        <img src="src/img/logo.webp" alt="Logo Do Paião" id="logo" />
        <nav>
          <ul id="links">
            <li>
              <a href="#" style={{color: "DarkGray"}}>
                Clínica do Paião
              </a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">Nossa Equipa</a>
            </li>
            <li>
              <a href="#">Contactos</a>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default MyHeader;