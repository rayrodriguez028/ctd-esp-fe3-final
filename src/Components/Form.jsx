import React, { useState } from "react";
import Message from "./Message";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [person, setPerson] = useState({
    name: "",
    email: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const reset = () => {
    setShow(false);
    setError(false);
    setPerson({
      name: "",
      email: "",
    });
  };
  const handleChangeName = (event) => {
    setPerson({ ...person, name: event.target.value });
  };
  const handleChangEmail = (event) => {
    setPerson({ ...person, email: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;
    if (
      person.name.trim().length > 5 &&
      emailRegex.test(person.email)
    ) {
      setError(false);
      setShow(true);
    } else {
      setError(true);
      setShow(false);
    }
  };
  return (
    <div className="div-form">
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={person.name} onChange={handleChangeName}/>
        <label>Email: </label>
        <input type="email" value={person.email} onChange={handleChangEmail}/>
        <button>Enviar</button>
      </form>
      <button onClick={reset}>Reset form</button>
      { error ? <h4 className="error"> 
        Por favor verifique su información nuevamente</h4> 
      : show ? <Message person={person} /> : ""}
    </div>
  );
};
export default Form;