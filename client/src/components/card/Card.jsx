// Card.jsx
import React from "react";
import { useSelector } from "react-redux";
import styles from "./Card.module.css";

const Card = ({ id, name, flagImage, continents }) => {
  const countries = useSelector((state) => state.filteredCountries); // Asegúrate de que este selector accede correctamente a countries
  return (
    <div className={styles.card}>
      <h3>{id}</h3>
      <h3>{name}</h3>
      <img src={flagImage} alt={`Bandera de ${name}`} />{" "}
      {/* Aquí se usa flagImage como src */}
      <h3>{continents}</h3>
    </div>
  );
};
export default Card;
