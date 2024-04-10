// Importación de constantes de tipos de acciones desde un archivo externo
import { fetchCountriesById } from "../actions";
import {
  SEARCH_COUNTRIES_BY_NAME,
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_BY_ID,
  CLEAR_SEARCH,
} from "../actions/types";

// Estado inicial de la aplicación
const initialState = {
  countries: [], // Lista de países
  filteredCountries: [], // Lista de países filtrados
  currentCountry: [],
  currentPage: 1, // Página actual de la lista de países
  totalPages: 0, // Número total de páginas de la lista de países
  activities: [], // Lista de actividades
};

// Reductor que actualiza el estado de la aplicación en función de las acciones
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_COUNTRIES_BY_NAME:
      // Actualizar la lista de países filtrados con los resultados de la búsqueda
      return {
        ...state,
        filteredCountries: action.payload, // Asume que action.payload contiene los resultados de la búsqueda
      };

    case FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };

    case FETCH_COUNTRIES_BY_ID:
      return {
        ...state,
        currentCountry: action.payload,
      };

    case CLEAR_SEARCH:
      return {
        ...state,
        filteredCountries: [],
      };
    default:
      return state;
  }
};

// Exportar el reductor
export default reducer;
