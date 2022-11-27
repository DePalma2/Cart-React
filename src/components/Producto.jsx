import React, { useState, useEffect } from "react";
import ItemProducto from "./ItemProducto";

const Producto = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getProducto = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      setData(await response.json());
      return () => {};
    };
    getProducto();
  }, []);

  return (
    <>
      <div className="text-center">
        <h1>Productos</h1>
        <h5>
          Si los productos no cargan es posible que la api no este recibiendo
          peticiones.
        </h5>
        <p>
          Para ver los productos en el carrito puede entrar haciendo click en el carrito que esta ubicado en el margen superior derecho.
        </p>
      </div>
      <div className="py-4 container">
        <div className="row justify-content-center">
          {data.map((producto, id) => {
            return (
              <ItemProducto
                key={id}
                category={producto.category}
                title={producto.title}
                description={producto.description}
                img={producto.image}
                price={producto.price}
                item={producto}
                rating={producto.rating.rate}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Producto;
