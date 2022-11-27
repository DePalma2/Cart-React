import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="text-center text-white " >

  <div className="container pt-4">

    <section className="mb-4">

      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://twitter.com/"
        role="button"
        data-mdb-ripple-color="dark"
        rel="noopener noreferrer"
        target="_blank"
        ><i className="fab fa-twitter"></i></a>


      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.google.com/"
        role="button"
        data-mdb-ripple-color="dark"
        rel="noopener noreferrer"
        target="_blank"
        ><i className="fab fa-google"></i></a>


      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.instagram.com/"
        role="button"
        data-mdb-ripple-color="dark"
        rel="noopener noreferrer"
        target="_blank"
        ><i className="fab fa-instagram"></i></a>


      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://www.linkedin.com/in/lucasdepalma/"
        role="button"
        data-mdb-ripple-color="dark"
        rel="noopener noreferrer"
        target="_blank"
        ><i className="fab fa-linkedin"></i></a>

      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://github.com/DePalma2"
        role="button"
        data-mdb-ripple-color="dark"
        rel="noopener noreferrer"
        target="_blank"
        ><i className="fab fa-github"></i></a>
    </section>

  </div>

  <div className="text-center text-dark p-3">
    © 2022 Copyright Lucas De Palma
  </div>
</footer>
    </>
  )
}

export default Footer