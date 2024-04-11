import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Home.jsx
import {
  fetchCountries,
  filterByContinent,
  sortCountries,
  sortCountriesByPopulation,
} from "../../redux/actions/index";
import SearchBar from "../searchBar/SearchBar";
import Cards from "../cards/Cards";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const filteredCountries = useSelector((state) => state.filteredCountries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleFilterByContinent = (e) => {
    const continent = e.target.value;
    if (continent) {
      dispatch(filterByContinent(continent));
    } else {
      dispatch(fetchCountries());
    }
  };

  const handleSortAlpha = (e) => {
    const orderType = e.target.value;
    if (orderType === "A" || orderType === "D") {
      dispatch(
        sortCountries(
          orderType === "A" ? "alphabetical" : "reverseAlphabetical"
        )
      );
    } else {
      dispatch(fetchCountries());
    }
  };

  const handleSortPopulation = (e) => {
    const orderType = e.target.value;
    if (orderType === "populationA" || orderType === "populationD") {
      dispatch(
        sortCountriesByPopulation(
          orderType === "populationA" ? "population" : "reversePopulation"
        )
      );
    } else {
      dispatch(fetchCountries());
    }
  };

  const countriesToShow =
    filteredCountries.length > 0 ? filteredCountries : countries;

  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <div>
        <label className="filterSelect" htmlFor="continentSelector">
          Elegir Continente:{" "}
        </label>
        <select onChange={handleFilterByContinent}>
          <option value="">Seleccionar</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="America">America</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Antarctica">Antartica</option>
        </select>
        <label className="filterSelect" htmlFor="orderSelector">
          Ordenar Alfabéticamente:{" "}
        </label>
        <select onChange={handleSortAlpha}>
          <option value="">Seleccionar</option>
          <option value="A">Ascendente</option>
          <option value="D"> Descendente</option>
        </select>
        <label className="filterSelect" htmlFor="populationSelector">
          Ordenar por población:{" "}
        </label>
        <select onChange={handleSortPopulation}>
          <option value="">Seleccionar</option>
          <option value="populationA">Ascendente</option>
          <option value="populationD"> Descendente</option>
        </select>
      </div>
      <div className={styles.homecards}>
        <Cards countries={countriesToShow} />
      </div>
    </div>
  );
};

export default Home;
