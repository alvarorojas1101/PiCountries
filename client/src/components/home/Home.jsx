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
  const currentPage = useSelector((state) => state.currentPage);
  const totalPages = Math.ceil(filteredCountries.length / 10);

  //filtra por continente
  const handleFilterByContinent = (e) => {
    const continent = e.target.value;
    if (continent) {
      dispatch(filterByContinent(continent));
    } else {
      dispatch(fetchCountries());
    }
  };

  //ordena alfab
  const handleSortAlpha = (e) => {
    const orderType = e.target.value;
    if (orderType === "A" || orderType === "D") {
      dispatch(
        sortCountries(
          orderType === "A" ? "alphabetical" : "reverseAlphabetical"
        )
      );
    }
  };

  //ordena por poblacion
  const handleSortPopulation = (e) => {
    const orderType = e.target.value;
    if (orderType === "populationA" || orderType === "populationD") {
      dispatch(
        sortCountriesByPopulation(
          orderType === "populationA" ? "population" : "reversePopulation"
        )
      );
    }
  };

  //filtra por actividad
  const handleFilterByActivity = (e) => {
    const activity = e.target.value;
    if (activity) {
      dispatch(filterByActivity(activity));
    } else {
      dispatch(fetchCountries());
    }
  };

  //cambia la pagina
  const handlePageChange = (pageNumber) => {
    dispatch(goToPage(pageNumber));
  };

  //carga los paises al inicio y monta al componente
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  //extrae con slice una porcion de los paises filtrados segun la currentpage
  const countriesToShow =
    filteredCountries.length > 0
      ? filteredCountries.slice((currentPage - 1) * 10, currentPage * 10)
      : countries.slice((currentPage - 1) * 10, currentPage * 10);

  //metodo reduce en la matriz countries para acomular las actividades en set y eliminar duplicados
  const allActivities = countries.reduce((acc, country) => {
    country.countryActivities.forEach((activity) => {
      acc.add(activity.name);
    });
    return acc;
  }, new Set());
  //convierte el conunto en un array con las actividades unicas
  const uniqueActivities = Array.from(allActivities);

  return (
    <div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="continentSelector">
          Select Continent:
        </label>
        <select
          id="continentSelector"
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
          Order Alphabetically:
        </label>
        <select
          id="orderSelector"
          className={styles.selectInput}
          onChange={handleSortAlpha}>
          <option value="">-</option>
          <option value="A">Asc</option>
          <option value="D"> Desc</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="populationSelector">
          Select By Population:
        </label>
        <select
          id="populationSelector"
          className={styles.selectInput}
          onChange={handleSortPopulation}>
          <option value="">-</option>
          <option value="populationA">Asc</option>
          <option value="populationD"> Desc</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="activitySelector">
          Select Activity:
        </label>
        <select
          id="activitySelector"
          className={styles.selectInput}
          onChange={handleFilterByActivity}>
          <option value="">All</option>
          {uniqueActivities.map((activity, index) => (
            <option key={index} value={activity}>
              {activity}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.homecards}>
        <div>
          <Cards countries={countriesToShow} />
          <button
            className={styles.button}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}>
            Anterior
          </button>
          <button
            className={styles.button}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}>
            Siguiente
          </button>
          <div>
            <span className={styles.pageNumber}> {currentPage}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
