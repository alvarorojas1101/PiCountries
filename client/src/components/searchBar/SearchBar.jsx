import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountriesByName } from "../../redux/actions/index"; // Asegúrate de importar la acción correcta

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      dispatch(searchCountriesByName(searchTerm));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar país por nombre"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;
