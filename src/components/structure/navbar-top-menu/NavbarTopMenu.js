import React, { useEffect, useState } from "react";
import "./navbarTopMenu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiMenu, FiSearch } from "react-icons/fi";

export const NavbarTopMenu = () => {
  const [navbar, setNavbar] = useState(false);
  const [ocultar, setOcultar] = useState(false);

  useEffect(() => {
    changeColorNavbar();
    window.addEventListener("scroll", changeColorNavbar);
  }, []);

  const changeColorNavbar = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const ocultarMenu = () => {
    setOcultar(!ocultar);
  };

  return (
    <>
      <div
        className={
          navbar
            ? "container-navbarr bg-dark fixed-top "
            : "container-navbarr fixed-top "
        }
      >
        <div className="row p-0 m-0">
          <div className="col-lg-2 p-0 m-0 text-center">
            <a className="navbar-brand-1" href="/">
              <img src="../../AM.png" alt="Taxi" height="70" />
            </a>
            <button
              className="navbar-toggler ocultar-big-screen"
              type="button"
              onClick={ocultarMenu}
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              <i className="icon-menu fas fa-bars"></i>
            </button>
          </div>

          <div
            className={
              ocultar
                ? "col-lg-7 p-0 m-0 align-self-center ocultar"
                : "col-lg-7 p-0 m-0 align-self-center"
            }
          >
            <div className="row m-0 p-0">
              <div className="col-lg-4 text-center align-self-center">
                <a
                  className="nav-link text-white text-center align-self-center"
                  href="/"
                >
                  INICIO
                </a>
              </div>
              <div className="col-lg-4 text-center align-self-center">
                <a
                  className="nav-link text-white text-center align-self-center"
                  href="/"
                >
                  ACERCA DE MI
                </a>
              </div>
              <div className="col-lg-4 text-center align-self-center">
                <a
                  className="nav-link text-white text-center align-self-center"
                  href="/"
                >
                  CONTACTO
                </a>
              </div>
            </div>
          </div>

          <div
            className={
              ocultar
                ? "col-lg-3 p-0 m-0 align-self-center ocultar"
                : "col-lg-3 p-0 m-0 align-self-center"
            }
          >
            <div className="row m-0 p-0">
              <div className=" col-12 col-xl-12 col-sm-12 m-0 p-0 container-button">
                <div className="btn-ini">
                  <button className="ini" type="submit">
                    Iniciar Sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
