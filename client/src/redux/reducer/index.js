// Importación de constantes de tipos de acciones desde un archivo externo
import {
  SEARCH_COUNTRIES_BY_NAME,
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_BY_ID,
  CLEAR_SEARCH,
  FILTER_BY_CONTINENT,
  SORT_COUNTRIES,
  SORT_COUNTRIES_BY_POPULATION,
} from "../actions/types";

// Estado inicial de la aplicación
const initialState = {
  countries: [], // Lista de países
  filteredCountries: [], // Lista de países filtrados
  currentCountry: [],
};

// En reducer/index.js
const reducer = (state = initialState, action) => {
  let sortedCountries = [...state.countries]; // Mover la declaración aquí

  switch (action.type) {
    case SEARCH_COUNTRIES_BY_NAME:
      return {
        ...state,
        filteredCountries: action.payload,
      };

    case FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        filteredCountries: action.payload, // Asegurarse de que filteredCountries se actualice
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

    case FILTER_BY_CONTINENT:
      return {
        ...state,
        filteredCountries: state.countries.filter(
          (country) => country.continents === action.payload
        ),
      };

    case SORT_COUNTRIES:
      if (action.payload === "alphabetical") {
        sortedCountries.sort((a, b) => a.name.localeCompare(b.name));
      } else if (action.payload === "reverseAlphabetical") {
        sortedCountries.sort((a, b) => b.name.localeCompare(a.name));
      }
      return {
        ...state,
        countries: sortedCountries,
        filteredCountries: sortedCountries, // Actualizar filteredCountries
      };

    case SORT_COUNTRIES_BY_POPULATION:
      if (action.payload === "population") {
        sortedCountries.sort((a, b) => b.population - a.population);
      } else if (action.payload === "reversePopulation") {
        sortedCountries.sort((a, b) => a.population - b.population);
      }
      return {
        ...state,
        countries: sortedCountries,
        filteredCountries: sortedCountries, // Actualizar filteredCountries
      };

    default:
      return state;
  }
};

export default reducer;
