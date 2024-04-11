import axios from "axios";

//buscar nombre
export const searchCountriesByName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/countries/name/${name}`
      );
      dispatch({ type: "SEARCH_COUNTRIES_BY_NAME", payload: response.data });
    } catch (error) {
      console.error("Error al buscar países:", error);
    }
  };
};

//traer todas
export const fetchCountries = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/countries`);
      dispatch({ type: "FETCH_COUNTRIES", payload: response.data });
    } catch (error) {
      console.error("Error al obtener países:", error);
    }
  };
};

//id
export const fetchCountriesById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/countries/${id}`);
      dispatch({ type: "FETCH_COUNTRIES_BY_ID", payload: response.data });
    } catch (error) {
      console.error("Error al obtener detalles del país:", error);
    }
  };
};

//borrar el buscador
export const clearSearch = () => {
  return {
    type: "CLEAR_SEARCH",
  };
};

//continente
export const filterByContinent = (continent) => ({
  type: "FILTER_BY_CONTINENT",
  payload: continent,
});

// ordenar paises alfab
export const sortCountries = (sortType) => ({
  type: "SORT_COUNTRIES",
  payload: sortType,
});

//ordenar por poblacion
export const sortCountriesByPopulation = (sortType) => ({
  type: "SORT_COUNTRIES_BY_POPULATION",
  payload: sortType,
});
