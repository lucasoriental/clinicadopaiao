import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../../../assets/img/logo.webp";
import "./header.css";

function Header() {
  const location = useLocation();
  return (
    <>
      <header>
        <Link to="/">
          <img src={logo} alt="Logo Do Paião" id="logo" />
        </Link>
        <nav>
          <ul id="links">
            <li>
              <Link
                className={location.pathname === "/" ? "ativo" : "inativo"}
                to="/"
              >
                Clínica do Paião
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === "/sobre" ? "ativo" : "inativo"}
                to="/sobre"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                className={
                  location.pathname === "/servicos" ? "ativo" : "inativo"
                }
                to="/servicos"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                className={
                  location.pathname === "/nossaEquipa" ? "ativo" : "inativo"
                }
                to="/nossaEquipa"
              >
                Nossa Equipa
              </Link>
            </li>
            <li>
              <Link
                className={
                  location.pathname === "/contacto" ? "ativo" : "inativo"
                }
                to="/contacto"
              >
                Contactos
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
