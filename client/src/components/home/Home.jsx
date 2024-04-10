import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries, clearSearch } from "../../redux/actions/index";
import SearchBar from "../searchBar/SearchBar";
import Cards from "../cards/Cards";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  // Usa countries para mostrar todos los países por defecto
  const countries = useSelector((state) => state.countries);
  // Usa filteredCountries para mostrar los resultados de la búsqueda
  const filteredCountries = useSelector((state) => state.filteredCountries);

  useEffect(() => {
    // Carga todos los países cuando se monta el componente
    dispatch(fetchCountries());
    // Limpia la búsqueda para asegurar que se muestren todos los países
    dispatch(clearSearch());
  }, [dispatch]);

  // Determina qué lista de países mostrar: todos o filtrados
  const countriesToShow =
    filteredCountries.length > 0 ? filteredCountries : countries;

  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <div className={styles.homecards}>
        <Cards countries={countriesToShow} />
      </div>
    </div>
  );
};

export default Home;
