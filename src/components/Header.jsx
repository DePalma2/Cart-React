import React from "react";
import Inicio from "./Inicio";
import Producto from "./Producto"
import Testimonios from "./Testimonios";

const Header = () => {
  return (
    <>
      <div className="parallax-header">
        <div className="row h-100">
          <div className="col-md-12 align-self-center">
            <h1 className="text-center">Bienvenido</h1>
          </div>
        </div>
      </div>
      <Inicio/> 
     <Producto/>
      <Testimonios/>
    </>
    
  );
};
export default Header;
