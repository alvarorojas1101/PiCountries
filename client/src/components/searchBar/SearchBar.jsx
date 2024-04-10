import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountriesByName, clearSearch } from "../../redux/actions/index";

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

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar país por nombre"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch(); // Asegúrate de llamar a handleSearch aquí
        }}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;
