import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"


const Checkout = () => {

    const [enviado, setEnviado] = useState(false)

    const validacion = Yup.object({
        email: Yup.string().email("Ingrese un email valido").required("Requerido"),
        name: Yup.string().required("Requerido"),
        direccion: Yup.string().required("Requerido"),
        postal: Yup.number().required("Requerido"),
        pago: Yup.string().required("Requerido")
    })



  return (
    <>
        <Formik onSubmit={(datos, {resetForm}) => {
            // Reseteo de campos
            resetForm();
            // Datos por consola
            console.log(datos);
            // Enviado true
            setEnviado(true);
            // Elimina el mensaje de enviado
            setTimeout(() => setEnviado(false), 2000)

        }}
        
        initialValues = {
            {
                email: "",
                name: "",
                direccion: "",
                postal: "",
                pago: ""
            }
        }

        validationSchema= {validacion}
        
        >
            {
                Formik => {
                     return (
                    <div className="container">
                        <div className="row">
                            <Form className='m-5 p-5 mx-auto'>
                                <div className="form-groups mb-2">
                                    <label htmlFor='email' >Ingresar Email</label>
                                    <Field type="email" className="form-control"  placeholder="Ingresar Email" name="email" id="email" />
                                    <ErrorMessage name='email'/>
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor='name'>Nombre Completo</label>
                                    <Field type="text" className="form-control"  placeholder="Nombre Completo" name="name" id="name" error={Formik.errors.name}/>
                                    <ErrorMessage name='name'/>
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor='direccion'>Direccion</label>
                                    <Field type="text" className="form-control"  placeholder="Direccion" name="direccion" id="direccion" error={Formik.errors.direccion}/>
                                    <ErrorMessage name='direccion'/>
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor='postal'>Codigo Postal</label>
                                    <Field type="text" className="form-control"  placeholder="Codigo Postal" id="postal" name="postal" error={Formik.errors.postal}/>
                                    <ErrorMessage name='postal'/>
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor='pago'>Metodo de pago</label>
                                    <Field className="form-control" id="pago" name="pago" as="select" error={Formik.errors.pago}>
                                        <option>MercadoPago</option>
                                        <option>Tarjeta de Credito</option>
                                        <option>Tarjeta de debito</option>
                                        <option>Efectivo</option>
                                    </Field>
                                    <ErrorMessage name='pago'/>
                                </div>
                                <button type="submit" className="btn btn-dark mt-4">Comprar</button>
                            </Form>
                        </div>
                </div>
                     )
                }
            }
        </Formik>
    </>
  )
}

export default Checkout