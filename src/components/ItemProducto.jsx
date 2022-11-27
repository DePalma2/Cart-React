import React from "react";
import { useCart } from "react-use-cart";
import { Toaster, toast } from "react-hot-toast";

const ItemProducto = (producto) => {
  const { addItem } = useCart();

  return (
    <>
      <div className="col-md-4 col-sm-8  m-2 p-2" key={producto.id}>
        <div className="card text-black h-100 m-1 p-4 card-producto">
          <img
            src={producto.img}
            className="card-img-top"
            alt={producto.title}
            height="400px"
          />
          <div className="card-body">
            <div className="text-center">
              <h5 className="card-title">{producto.title.substring(0, 20)}</h5>
              <p className="text-muted mb-4 text-capitalize">
                {producto.category}
              </p>
              <p className="card-text">
                {producto.description.substring(0, 60)}
              </p>
            </div>
            <div className="d-flex justify-content-center total font-weight-bold mt-4">
              <span className="m-2">
                <i className="fa-solid fa-star"></i> {producto.rating}
              </span>
              <span className="m-2">${producto.price} USD</span>
            </div>
          </div>
          <div className="d-flex justify-content-center text-center">
            <a
              onClick={() => {
                addItem(producto.item);
                toast.success("Agregado al carrito!", {
                  duration: 2000,
                  position: "top-right",
                  style: { marginRight: 20 },
                });
              }}
            >
              <button className="btn-shop">
                <span className="hover-underline-animation">
                  Agregar al carrito
                </span>
                <svg
                  id="arrow-horizontal"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="10"
                  viewBox="0 0 46 16"
                >
                  <path
                    id="Path_10"
                    data-name="Path 10"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    transform="translate(30)"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default ItemProducto;
