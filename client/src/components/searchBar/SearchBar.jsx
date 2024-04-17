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
      dispatch(clearSearch());
    }
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch();
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        placeholder="Search By Name"
        value={searchTerm}
        onChange={handleChange}
        className={styles.searchBarInput}
      />
    </div>
  );
};

export default SearchBar;
