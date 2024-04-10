import axios from "axios";

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

export const clearSearch = () => {
  return {
    type: "CLEAR_SEARCH",
  };
};
