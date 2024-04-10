// Home.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Importar useSelector
import { fetchCountries } from "../../redux/actions/index";
import SearchBar from "../searchBar/SearchBar";
import Cards from "../cards/Cards";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch(); // Eliminar useSelector

  // Obtener los países del store Redux
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <div className={styles.homecards}>
        <Cards countries={countries} />
      </div>
    </div>
  );
};
export default Home;
