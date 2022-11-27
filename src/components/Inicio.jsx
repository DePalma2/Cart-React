import React from 'react'
const Inicio = () => {
  return (
    <>
        <main>
            <div className="card m-2">
                <div className="card-body">
                    <section className='home'>
                    <div className="home-container container">
                        <div className="home-data">
                            <h1 className='home-title'>Informacion</h1>
                            <h2 className='home-subtitle text-muted'>Proyecto Integrador React UTN</h2>
                            <h3 className='text-mute'>Creado Por Lucas De Palma</h3>
                            <p className="home-description">
                                En este proyecto podran agregar productos a un carrito de compra, agregar mas cantidad de productos o disminuirlos tambien podran eliminarlos, dentro del menu encontraran una seccion de contacto donde podran enviar mensajes estos mensajes se programaron para que solo se vean por consola lo mismo pasa con el checkout de los productos que se encuentra en la seccion del carrito.
                            </p>
                            <p className="home-description"> Los productos al igual que los usuarios en la seccion de testimonios son traidos por una api, una para productos y otra para los usuarios.</p>
                            <p className="home-description"> Todo el proyecto es <b>Responsive</b> </p>
                            <p className="home-description"> Tecnologias usadas para el proyecto <b>React JS, Vite, Formik, YUP, React Hot Toast, React Use Card, React DOM, Bootstrap, Font Awesome, React Router</b> </p>
                        </div>
                    </div>
                </section>
                </div>
            </div>
        </main>
    </>
  )
}

export default Inicio