import React from "react";
import styles from "./Card.module.css";

const Card = ({ id, name, flagImage, continents }) => {
  return (
    <div className={styles.card}>
      <h3>{id}</h3>
      <h3>{name}</h3>
      <img src={flagImage} alt={`Bandera de ${name}`} />
      <h3>{continents}</h3>
    </div>
  );
};
export default Card;
