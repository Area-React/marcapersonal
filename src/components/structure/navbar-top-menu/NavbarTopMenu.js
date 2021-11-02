import React from "react";
import "./navbarTopMenu.css";

export const NavbarTopMenu = () => {
  return (
    <>
      <div className="menutop">
        <div className="row">
          <center>
            <div className="menu-center">
              <ul className="menu-con">
                <a href="/">HOME</a>
                <a href="/noticias">ACERCA DE MI</a>
                <a href="/contacto">CONTÁCTAME</a>
              </ul>
            </div>
          </center>
        </div>
      </div>
    </>
  );
};
