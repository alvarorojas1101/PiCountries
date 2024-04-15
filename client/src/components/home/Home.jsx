import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCountries,
  filterByContinent,
  sortCountries,
  sortCountriesByPopulation,
  filterByActivity,
  goToPage,
} from "../../redux/actions/index";

import Cards from "../cards/Cards";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const filteredCountries = useSelector((state) => state.filteredCountries);
  const activities = useSelector((state) => state.activities);
  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = useSelector((state) => state.totalPages);

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

  const handleFilterByActivity = (e) => {
    const activity = e.target.value;
    if (activity) {
      dispatch(filterByActivity(activity));
    } else {
      dispatch(fetchCountries());
    }
  };

  const handlePageChange = (pageNumber) => {
    dispatch(goToPage(pageNumber));
  };

  const countriesToShow =
    filteredCountries.length > 0
      ? filteredCountries.slice((currentPage - 1) * 10, currentPage * 10)
      : countries.slice((currentPage - 1) * 10, currentPage * 10);

  return (
    <div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="continentSelector">
          Elegir Continente:
        </label>
        <select
          className={styles.selectInput}
          onChange={handleFilterByContinent}>
          <option value="">All</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="North America">North America</option>
          <option value="Europe">Europe</option>
          <option value="South America">South America</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctica">Antartica</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="orderSelector">
          Ordenar Alfabéticamente:
        </label>
        <select className={styles.selectInput} onChange={handleSortAlpha}>
          <option value="">Seleccionar</option>
          <option value="A">Ascendente</option>
          <option value="D"> Descendente</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="populationSelector">
          Ordenar por población:
        </label>
        <select className={styles.selectInput} onChange={handleSortPopulation}>
          <option value="">Seleccionar</option>
          <option value="populationA">Ascendente</option>
          <option value="populationD"> Descendente</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <select
          className={styles.selectInput}
          onChange={handleFilterByActivity}>
          <option value="">Seleccionar actividad</option>
          {activities?.map((activity) => (
            <option key={activity} value={activity}>
              {activity}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.homecards}>
        <Cards countries={countriesToShow} />
      </div>
      <div>
        {/* Crear botones para cada página */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            className={styles.button} // Establecer clase de estilo para el botón
            key={index} // Establecer clave única para React
            onClick={() => handlePageChange(index + 1)}>
            {" "}
            {/* Manejar clic en el botón */}
            {index + 1} {/* Mostrar número de página */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
