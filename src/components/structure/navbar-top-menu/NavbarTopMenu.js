import React from "react";
import "./navbarTopMenu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiMenu, FiSearch } from "react-icons/fi";

export const NavbarTopMenu = () => {
  return (
    <>
      <nav className="menutop navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              className="image-per"
              src="../../AM.png"
              alt="logo-personal"
              width="100"
              height="100"
            />
          </a>

          <button className="navbar-toggler text-white">
            <FiMenu />
          </button>

          <div className="collapse navbar-collapse ">
            <ul className="navbar-nav ms-auto">
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn my-2 my-sm-0 " type="submit">
                  <FiSearch color="white" />
                </button>
              </form>

              <li>
                <a className="menu nav-link text-white" href="/">
                  INICIO
                </a>
              </li>
              <li>
                <a className="menu nav-link text-white" href="/">
                  ACERCA DE MI
                </a>
              </li>
              <li>
                <a className="menu nav-link text-white" href="/">
                  CONTACTO
                </a>
              </li>

              <button className="ini my-2 my-sm-0 " type="submit">
                Iniciar Sesión
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
