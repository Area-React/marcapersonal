import React from "react";
import "./navbarTopMenu.css";

export const NavbarTopMenu = () => {
  return (
    <>
      <div className="row">
        <center>
          <div className="menutop">
            <div className="menu-con">
              <a href="/">INICIO</a>
            </div>
            <div className="menu-con">
              <a href="/noticias">ACERCA DE MI</a>
            </div>
            <div className="menu-con">
              <a href="/noticias">CONTÁCTAME</a>
            </div>
            <div className="menu-con">
              <a href="/mapa">MAPA</a>
            </div>
          </div>
        </center>
      </div>
    </>
  );
};
