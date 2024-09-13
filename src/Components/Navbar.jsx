import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useDentistaStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {
  const { state, dispatch} = useDentistaStates();
  const theme = state.theme ? '🌕' : '🌚';
  const toggleTheme = () => dispatch({ type: 'TOGGLE_THEME' });
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Link to="/contact">
        <h3>Contact</h3>
      </Link>
      <Link to="/favs">
        <h3>Favs</h3>
      </Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className="nav-button" onClick={toggleTheme}>{theme}</button>
    </nav>
  );
};
export default Navbar;