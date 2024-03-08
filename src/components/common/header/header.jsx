import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../../../assets/img/logo.webp";
import Footer from "../footer/footer";

function Header() {
  const location = useLocation();

  const handleClick = () => {
    const btnMenu = document.querySelector(".hamburger");
    const mobile_menu = document.querySelector(".header-nav-mob");

    btnMenu.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  };

  return (
    <>
      <header className="header-main">
        <Link className="logo-link" to="/">
          <img src={logo} alt="Logo Do Paião" id="logo" />
        </Link>
        <nav className="header-nav">
          <ul className="header-nav-links">
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
        <nav className="header-nav-mob">
          <ul className="header-nav-mob-links">
            <li>
              <Link
                className={
                  location.pathname === "/" ? "mob-ativo" : "mob-inativo"
                }
                to="/"
              >
                Clínica do Paião
              </Link>
            </li>
            <li>
              <Link
                className={
                  location.pathname === "/sobre" ? "mob-ativo" : "mob-inativo"
                }
                to="/sobre"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                className={
                  location.pathname === "/servicos"
                    ? "mob-ativo"
                    : "mob-inativo"
                }
                to="/servicos"
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                className={
                  location.pathname === "/nossaEquipa"
                    ? "mob-ativo"
                    : "mob-inativo"
                }
                to="/nossaEquipa"
              >
                Nossa Equipa
              </Link>
            </li>
            <li>
              <Link
                className={
                  location.pathname === "/contacto"
                    ? "mob-ativo"
                    : "mob-inativo"
                }
                to="/contacto"
              >
                Contactos
              </Link>
            </li>
          </ul>
        </nav>
        <button className="hamburger" onClick={handleClick}>
          <div className="bar"></div>
        </button>
      </header>

      <Outlet />
      <Footer />
    </>
  );
}

export default Header;
