import React from "react";
import { useCart } from "react-use-cart";
import { Toaster, toast } from "react-hot-toast";
import TableHeadCarrito from "./TableHeadCarrito";

const Carrito = () => {
  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <h1 className="text-center">El carrito esta vacio</h1>;

  return (
    <>
     <TableHeadCarrito/>
      {items.map((producto) => {
        return (
            <> 
            
          <tbody key={producto.id}>
            <tr>
              <th scope="row" className="border-0" >
                <div className="p-2" >
                  <img
                    src={producto.image}
                    alt={producto.title}
                    width="70"
                    className="img-fluid rounded shadow-sm"
                  />
                  <div className="ml-3 d-inline-block align-middle">
                    <h5 className="mb-0 font-weight-normal font-italic d-block m-2 text-break">
                    {producto.title}
                    </h5>
                    <span className="text-muted font-weight-normal font-italic d-block m-2">
                      {producto.category}
                    </span>
                  </div>
                </div>
              </th>
              <td className="border-0 align-middle text-center">
                <strong>${producto.price}</strong>
              </td>
              <td className="border-0 align-middle text-center">
                <strong>{producto.quantity}</strong>
              </td>
              <td className="border-0 align-middle text-center" >
                <button className="text-dark text-center border-0" 
                onClick={() => {updateItemQuantity(producto.id, producto.quantity + 1);toast.success("Cantidad aumentada!", {
                  duration: 1500,
                  position: "button-right",
                  style: { marginRight: 20 },
                })}}>
                <i className="fa-solid fa-plus"></i>
                </button>
              </td>
              <td className="border-0 align-middle text-center" >
                <button className="text-dark text-center border-0" onClick={() => {updateItemQuantity(producto.id, producto.quantity - 1); toast.success("Cantidad disminuida!", {
                  duration: 1500,
                  position: "button-right",
                  style: { marginRight: 20 },
                })}}>
                <i className="fa-solid fa-minus"></i>
                </button>
              </td>
              <td className="border-0 align-middle text-center">
              <button className="text-dark text-center border-0"  onClick={() => {removeItem(producto.id); toast("Producto Eliminado!", {
                  duration: 1000,
                  position: "button-right",
                  icon: "⚠",
                  style: { marginRight: 20, background: '#333', color: '#fff', },
                })}}>
              <i className="fa-solid fa-trash-can"></i>
                </button>
                <Toaster />
              </td>
            </tr>
          </tbody>
            </>
        );
      })}
    </>
  );
};

export default Carrito;
