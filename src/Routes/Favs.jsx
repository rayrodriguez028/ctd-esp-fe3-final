import React from "react";
import Card from '../Components/Card'
import { useDentistaStates } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useDentistaStates();
  console.log("lista favs: ", state.favs);
  return (
    <main>
      {/* este componente debe consumir los destacados del localStorage */}
      {/* Deberan renderizar una Card por cada uno de ellos */}
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs?.length === 0 ? <h2>😮 No has agregado favoritos 😮, hazlo desde el Home 💯🤟 </h2> : state.favs?.map((dentista) => (
          <Card key={dentista.id} dentista={dentista} />
        ))}
      </div>
    </main>
  );
};
export default Favs;