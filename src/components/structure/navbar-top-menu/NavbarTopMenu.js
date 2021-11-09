import React from "react";
import "./navbarTopMenu.css";

export const NavbarTopMenu = () => {
  return (
    <>
      <div className="menutop">
        <span className="nav-logo">
          <img
            className="image-per"
            src="../../AM.png"
            alt="logo-personal"
            width="100"
            height="100"
          />
        </span>

        <div className="nav-items">
          <a href="/">INICIO</a>
          <a href="/">ACERCA</a>
          <a href="/">CONTACTO</a>
        </div>

        <div className="nav-toggle">
          <div className="bar"></div>
        </div>
      </div>
    </>
  );
};
