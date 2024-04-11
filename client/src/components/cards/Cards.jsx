// Cards.jsx
import Card from "../card/Card";
import styles from "./Cards.module.css";
import { Link } from "react-router-dom";

const Cards = ({ countries }) => {
  return (
    <div className={styles.cards}>
      {countries?.map(({ id, name, flagImage, continents }) => (
        <Link to={`/detail/${id}`} key={id}>
          <Card name={name} flagImage={flagImage} continents={continents} />
        </Link>
      ))}
    </div>
  );
};

export default Cards;
