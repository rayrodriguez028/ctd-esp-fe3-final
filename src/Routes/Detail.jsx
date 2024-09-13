import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  console.log(id);
  const url = "https://jsonplaceholder.typicode.com/users/" + id;
  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setDetail(res.data);
    });
  }, []);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  return (
    <main>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h1>Detail Dentist id: {detail.id} </h1>
      <table>
      <tr>
        <td>Name</td>
        <td>Username</td>
        <td>Email</td>
        <td>Phone</td>
        <td>Website</td>
      </tr>
      <tr>
        <td>{detail.name}</td>
        <td>{detail.username}</td>
        <td>{detail.email}</td>
        <td>{detail.phone}</td>
        <td>{detail.website}</td>
      </tr>
      </table>
    </main>
  );
};
export default Detail;