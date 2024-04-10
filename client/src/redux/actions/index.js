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
