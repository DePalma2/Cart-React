import React from "react";
import Carrito from "./Carrito";
import { useCart } from "react-use-cart";
import { NavLink } from "react-router-dom";

const Check = () => {
  const {
    totalItems,
    cartTotal,
  } = useCart();
  
  return (
    <>
      <div className="px-4 px-lg-0">
        <div className="pb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                <div className="table-responsive">
                  <table className="table">
                    <Carrito/>
                  </table>
                </div>
              </div>
            </div>

            <div className="row py-5 p-4 bg-white rounded shadow-sm">
              <div className="col-lg-6">
                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                Cupón
                </div>
                <div className="p-4">
                  <p className="font-italic mb-4">
                    Si tiene un cupon puede canjearlo aqui.
                  </p>
                  <div className="input-group mb-4 border rounded-pill p-2">
                    <input
                      type="text"
                      placeholder="Aplicar cupon"
                      aria-describedby="button-addon3"
                      className="form-control border-0"
                    />
                    <div className="input-group-append border-0">
                      <button
                        id="button-addon3"
                        type="button"
                        className="btn btn-dark px-4 rounded-pill"
                      >
                        <i className="fa fa-gift mr-2"></i> Aplicar Cupon
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                  Mensaje Adicional
                </div>
                <div className="p-4">
                  <p className="font-italic mb-4">
                    Si necesita indicar alguna instruccion que debe de seguir la empresa para el envio de su paquete por favor escribalo a continuacion.
                  </p>
                  <textarea
                    name=""
                    cols="30"
                    rows="2"
                    className="form-control"
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
                  ORDEN
                </div>
                <div className="p-4">
                  <ul className="list-unstyled mb-4">
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted"> Subtotal</strong>
                      <strong>${parseFloat(cartTotal).toFixed(2)}</strong>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Envio</strong>
                      <strong>$10.00</strong>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Impuestos</strong>
                      <strong>$5.00</strong>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted"> Articulos</strong>
                      <strong>{totalItems}</strong>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom">
                      <strong className="text-muted">Total</strong>
                      <h5 className="font-weight-bold">$ {parseFloat(cartTotal + 15).toFixed(2)}</h5>
                    </li>
                  </ul>
                  <NavLink to="/checkout" className="btn btn-dark rounded-pill py-2 btn-block">
                    Continuar al pago
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Check;
