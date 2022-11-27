import React, { useState, useEffect } from "react";

const Testimonios = () => {

  // Estado para guardar la informacion
  const [users, setUsers] = useState([]);

  // Consumiendo la api
  const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    setUsers(data.data);
  };

  useEffect(() => {
    getUsers();
  });

  return (
    <>
      <div className="testimonials">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">Testimonios</h2>
            <p className="text-center">
              Testimonios de nuestros clientes.
            </p>
          </div>
          <div className="row people">
            {
              //Mapeo de usuarios 
                users.map((user) => {
                    return (
                        <div className="col-md-6 col-lg-4 item" key={user.id}>
                        <div className="box">
                            <p className="description text-break">
                            Lorem Ipsum is simply dummy text of the printing and typesetting the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div className="user">
                            <img className="rounded-circle" src={user.avatar} />
                            <h5 className="name">{user.first_name + " " +  user.last_name}</h5>
                            <p className="title">Cliente</p>
                        </div>
                        </div>
                    );
                    })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonios;
