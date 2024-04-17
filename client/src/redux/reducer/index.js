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
  activity: [], // actividades
};

const reducer = (state = initialState, action) => {
  const sortedCountries = [...state.countries];

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
      const filteredByContinent = state.countries.filter(
        (country) => country.continents === action.payload
      );
      if (action.payload === "All") {
        return {
          ...state,
          filteredCountries: state.countries,
          currentPage: 1,
        };
      }
      return {
        ...state,
        filteredCountries: filteredByContinent,
        currentPage: 1,
      };

    case SORT_COUNTRIES:
      const sortedFilteredCountries = [...state.filteredCountries];
      if (action.payload === "alphabetical") {
        sortedFilteredCountries.sort((a, b) => a.name.localeCompare(b.name));
      } else if (action.payload === "reverseAlphabetical") {
        sortedFilteredCountries.sort((a, b) => b.name.localeCompare(a.name));
      }
      return {
        ...state,
        filteredCountries: sortedFilteredCountries,
        currentPage: 1,
      };

    case SORT_COUNTRIES_BY_POPULATION:
      const sortedPopulationFilteredCountries = [...state.filteredCountries];
      if (action.payload === "population") {
        sortedPopulationFilteredCountries.sort(
          (a, b) => b.population - a.population
        );
      } else if (action.payload === "reversePopulation") {
        sortedPopulationFilteredCountries.sort(
          (a, b) => a.population - b.population
        );
      }
      return {
        ...state,
        filteredCountries: sortedPopulationFilteredCountries,
        currentPage: 1,
      };

    case FILTER_BY_ACTIVITY:
      return {
        ...state,
        filteredCountries: state.countries.filter((country) =>
          country.countryActivities.some(
            (activity) => activity.name === action.payload
          )
        ),
        currentPage: 1,
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
