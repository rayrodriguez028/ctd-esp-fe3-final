import React from 'react'
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src="./images/DH.png" alt='DH-logo' className='img-header'/>
      </Link>
      <Navbar />
    </header>
  );
};
export default Header;