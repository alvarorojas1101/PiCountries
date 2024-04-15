import {
  SEARCH_COUNTRIES_BY_NAME,
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_BY_ID,
  CLEAR_SEARCH,
  FILTER_BY_CONTINENT,
  SORT_COUNTRIES,
  SORT_COUNTRIES_BY_POPULATION,
  FILTER_BY_ACTIVITY,
  GO_TO_PAGE,
  CREATE_ACTIVITY,
} from "../actions/types";

const initialState = {
  countries: [], // Lista de países
  filteredCountries: [], // Lista de países filtrados
  currentCountry: [], //ciudad actual
  currentPage: 1, // Página actual
  totalPages: 1, // Total de páginas
  activity: [], // actividades
};

const reducer = (state = initialState, action) => {
  let sortedCountries = [...state.countries];

  switch (action.type) {
    case SEARCH_COUNTRIES_BY_NAME:
      return {
        ...state,
        filteredCountries: action.payload,
        currentPage: 1,
      };

    case FETCH_COUNTRIES:
      const totalPages = Math.ceil(action.payload.length / 10);
      return {
        ...state,
        countries: action.payload,
        filteredCountries: action.payload,
        totalPages,
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
        currentPage: 1,
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
        filteredCountries: sortedCountries,
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
        filteredCountries: sortedCountries,
      };

    case FILTER_BY_ACTIVITY:
      return {
        ...state,
        filteredCountries: state.countries.filter((country) =>
          country.countryActivities.some(
            (activity) => activity.name === action.payload
          )
        ),
      };

    case GO_TO_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case CREATE_ACTIVITY:
      return {
        ...state,
        activity: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
