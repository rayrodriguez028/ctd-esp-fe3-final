import React from "react";
import { Link } from "react-router-dom";
import { useDentistaStates } from "../Components/utils/global.context";

const Card = ({ dentista }) => {
    // Aqui iria la logica para agregar la Card en el localStorage
  const { state, dispatch } = useDentistaStates();
  const isFav = state.favs.find((fav) => fav.id === dentista.id);
  const addFav = () => dispatch({ type: isFav ? "REMOVE_FAV" : "ADD_FAV", payload: dentista });
  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <img className="img-doctor" src="./images/doctor.jpg" alt='doctor' />
      <Link to={"/dentist/" + dentista.id}>
        <h2>{dentista.name}</h2>
      </Link>
      <h3>{dentista.username}</h3>
      <button className="favButton" onClick={addFav}>{isFav ? "💖" : "🤍"}</button>
    </div>
  );
};
export default Card;