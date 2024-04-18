import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountriesByName, clearSearch } from "../../redux/actions/index";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.trim() !== "") {
      dispatch(searchCountriesByName(e.target.value.trim()));
    } else {
      dispatch(clearSearch());
    }
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    dispatch(clearSearch());
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        placeholder="Search By Name"
        value={searchTerm}
        onChange={handleSearchInputChange}
        className={styles.searchBarInput}
      />
      <button className={styles.clear} onClick={handleClearSearch}>
        Clear
      </button>
    </div>
  );
};

export default SearchBar;
