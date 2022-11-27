import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Contacto = () => {
    const [enviado, setEnviado] = useState(false)
  return (
    <>
      <Formik
        onSubmit={(datos, { resetForm }) => {
        
        // Reseteo de valores
        resetForm();
        // Datos en la consola
        console.log(datos);
        // Estado de enviado
        setEnviado(true);

            // Elimina el mensaje de enviado
            setTimeout(() => setEnviado(false), 2000)

        }}
        // Valores iniciales
        initialValues={{ nombre: "", email: "", mensaje: "" }}
        // Validacion del formulario
        validate = {(datos) => {

            let errors = {}

            // Validacion para el email
            if(!datos.email){
                errors.email = "Ingresa un email"
            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(datos.email)) { 
                errors.email = "Ingrese un correo valido"
            }

            // Validacion para el mensaje

            if(!datos.mensaje){
                errors.mensaje = "Ingresa un mensaje"
            }

            // Validacion para el nombre 
            if(!datos.nombre){
                errors.nombre = "Ingresa un nombre"
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(datos.nombre)) { 
                errors.nombre = "Los caracteres usados son incorrectos"
            }



            return errors;
        }}
      >
        {
          /* Renderer Prop */

          (p) => (
            <div className="container mt-5">
              <div className="row d-flex justify-content-center align-items-center mx-auto my-auto">
                <Form >
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="nombre">
                      Nombre
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      name="nombre"
                      placeholder="Ingresar Nombre Completo"
                      id="nombre"
                    />
                    <ErrorMessage name="nombre" component={() => ( <p className="text-danger">{p.errors.nombre}</p>)}/>
                  </div>


                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      className="form-control"
                      name="email"
                      placeholder="Ingrese su email"
                    />
                    <ErrorMessage name="email" component={() => (<p className="text-danger">{p.errors.email}</p>)}/>
                  </div>


                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="mensaje">
                      Mensaje
                    </label>
                    <Field
                      className="form-control"
                      rows="4"
                      name="mensaje"
                      id="mensaje"
                      as="textarea"
                    />
                    <ErrorMessage name="mensaje" component={() => (<p className="text-danger">{p.errors.mensaje}</p>)} />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-dark btn-block mb-4"
                  >
                    Enviar
                  </button>
                  { 
                      //Mensaje de enviado
                      enviado && <p className="text-success">Informacion enviada correctamente</p>
                   }
                </Form>
              </div>
            </div>
          )
        }
      </Formik>
    </>
  );
};

export default Contacto;
