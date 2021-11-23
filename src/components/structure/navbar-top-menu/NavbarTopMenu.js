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
            </ul>
          </div>

          {/* <div className="col">
            <form action="" className="search-bar d-flex">
              <input type="search" name="search" pattern=".*\S.*" required />
              <button className="search-btn" type="submit">
                <FiSearch />
              </button>
            </form>
          </div> */}
        </div>
      </nav>
      {/* <nav className=" menutop navbar">
        <div className="container-fluid">
          <a class="navbar-brand">Navbar</a>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav> */}

      {/* <nav className="menutop navbar-default">
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
      </nav> */}
    </>
  );
};
