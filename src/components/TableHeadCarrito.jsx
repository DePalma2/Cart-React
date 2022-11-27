import React from 'react'

const TableHeadCarrito = () => {
  return (
    <>
         <thead>
        <tr>
          <th scope="col" className="border-0 bg-light">
            <div className="p-2 px-3 text-uppercase">Producto</div>
          </th>
          <th scope="col" className="border-0 bg-light">
            <div className="py-2 text-uppercase">Precio</div>
          </th>
          <th scope="col" className="border-0 bg-light">
            <div className="py-2 text-uppercase">Cantidad</div>
          </th>
          <th scope="col" className="border-0 bg-light">
            <div className="py-2 text-uppercase">Agregar</div>
          </th>
          <th scope="col" className="border-0 bg-light">
            <div className="py-2 text-uppercase">Eliminar</div>
          </th>
          <th scope="col" className="border-0 bg-light">
            <div className="py-2 text-uppercase">Borrar</div>
          </th>
        </tr>
      </thead>
    </>
  )
}

export default TableHeadCarrito