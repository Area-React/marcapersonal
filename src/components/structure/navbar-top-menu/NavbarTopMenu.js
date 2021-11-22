import React from "react";
import "./navbarTopMenu.css";
import { FiSearch } from "react-icons/fi";

export const NavbarTopMenu = () => {
  return (
    <>
      <nav className="menutop navbar-expand-sm">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <a className="navbar-brand" href="/">
                <img
                  className="image-per"
                  src="../../AM.png"
                  alt="logo-personal"
                  width="100"
                  height="100"
                />
              </a>
            </div>

            <div className="col">
              <form action="" className="search-bar d-flex">
                <input type="search" name="search" pattern=".*\S.*" required />
                <button class="search-btn" type="submit">
                  <FiSearch />
                </button>
              </form>
            </div>

            <div className="col">
              <div className="nav-item collapse navbar-collapse">
                <ul className="navbar-nav me-auto">
                  <li >
                    <a className="nav-link" href="/">
                      INICIO
                    </a>
                  </li>
                  <li >
                    <a className="nav-link" href="/">
                      ACERCA DE MI
                    </a>
                  </li>
                  <li >
                    <a className="nav-link" href="/">
                      CONTACTO
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col">
              <button className="iniciar-sesion">Iniciar Sesión</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
