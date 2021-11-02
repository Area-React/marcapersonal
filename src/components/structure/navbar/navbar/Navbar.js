import React from "react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="row">
        <div className="contenedor">
          <div className="imagePer">
            <a href="/">
              <img className="image-per" src="../../AM.png" alt=" " />
            </a>
          </div>
          <div className="buttonPer">
            <button className="buttonhref">INICIAR SESIÓN</button>
          </div>
        </div>
      </div>
    </>
  );
};
