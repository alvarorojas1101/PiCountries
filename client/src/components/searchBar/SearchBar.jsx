import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountriesByName, clearSearch } from "../../redux/actions/index";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      dispatch(searchCountriesByName(searchTerm));
    } else {
      // Limpia la búsqueda cuando el campo de entrada está vacío
      dispatch(clearSearch());
    }
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch();
  };

  return (
    <div className={styles["search-bar-container"]}>
      <input
        type="text"
        placeholder="Buscar país por nombre"
        value={searchTerm}
        onChange={handleChange}
        className={styles["search-bar-input"]}
      />
      <button onClick={handleSearch} className={styles["search-bar-button"]}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
