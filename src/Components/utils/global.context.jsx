import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../../reducers/reducer";

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];
const initialState = {
  list: [],
  favs: lsFavs,
  theme: false,
};
const DentistaStates = createContext();
const Context = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios(url).then((res) => {
      dispatch({ type: "GET_DENTISTA", payload: res.data});
    });
    localStorage.setItem("favs", JSON.stringify(state.favs));
    document.body.className = state.theme ? 'dark' : 'light';
  }, [state.favs, state.theme]);
  return (
    <DentistaStates.Provider value={{state, dispatch}}>
      {children}
    </DentistaStates.Provider>
  );
};
export default Context;
export const useDentistaStates = () => {
  return useContext(DentistaStates);
};