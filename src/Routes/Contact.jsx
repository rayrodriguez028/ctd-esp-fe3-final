import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Contact = () => {
  return (
    <main>
      <div>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
      </div>
      <Form/>
    </main>
  );
};

export default Contact;