import React from 'react'
import img from "../assets/resources/img/error404.png"

const Error404 = () => {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="d-flex justify-content-center">
                    <img src={img} alt="Error 404" className='img-fluid'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Error404