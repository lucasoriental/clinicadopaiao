import React, {useState} from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import SVGCross from "../../../assets/icons/SVGCross";
import SVGHamburguer from "../../../assets/icons/SVGhamburguer";
import logo from "../../../assets/img/logo.webp";
import Footer from "../footer/footer";

function Header() {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    const btnMenu = document.querySelector(".hamburger");
    const mobile_menu = document.querySelector(".header-nav-mob");

    btnMenu.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
    setIsActive(!isActive);
  };

  const handleLinkClick = () => {
    setIsActive(false);
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
        <button className="hamburger" onClick={handleClick}>
          <SVGHamburguer />
        </button>

        <nav className={`header-nav-mob ${isActive ? "is-active" : ""}`}>
          <ul className="header-nav-mob-links">
            <button style={{ margin: "30px 0 30px 10%", fill:"white"}} className="hamburger" onClick={handleClick}>
              <SVGCross />
            </button>
            <li>
              <Link
                className={
                  location.pathname === "/" ? "mob-ativo" : "mob-inativo"
                }
                to="/"
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
              >
                Contactos
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
      <Footer />
    </>
  );
}

export default Header;
