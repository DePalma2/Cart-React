import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  

  return (
    <header className="header sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <strong className="h6 mb-0 font-weight-bold text-uppercase">
              Lucas De Palma
            </strong>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link " to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/productos">
                  Productos
                </NavLink>
              </li>
            </ul>
            <div className="btn-container">
              <NavLink className="btn btn-outline-dark m-1" to="/contacto">
                Contacto
              </NavLink>
              <NavLink to="/check">
                <button type="button" className="btn btn-dark">
                  <i className="fa fa-shopping-cart"></i>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
