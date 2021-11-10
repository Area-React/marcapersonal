import React from "react";
import "./footer.css";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";

export const Footer = () => {
  return (
    <footer>
      <div className="logo-footer">
        <img src="../../AM.png" alt="logo-personal" width="100" height="100" />
        <h2>Alexander Mendoza - Blog Personal</h2>
        <p>
          Copyright © 2021 Alexander Mendoza. Todos los derechos reservados.
        </p>
      </div>

      <div className="network">
        <div className="row">
          <div className=" col-md-4">
            <a className="facebook" href="https://www.facebook.com/alemendoza87">
              <SiFacebook />
            </a>
          </div>

          <div className="col-md-4">
            <a className="facebook" href="https://www.instagram.com/alexandermendop/?hl=es">
              <SiInstagram />
            </a>
          </div>

          <div className="col-md-4">
            <a className="facebook" href="https://twitter.com/alexandermep">
              <SiTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
// FiInstagram
