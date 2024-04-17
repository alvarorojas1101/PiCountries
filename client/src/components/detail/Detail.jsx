import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountriesById } from "../../redux/actions/index";
import styles from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.currentCountry);
  //obtiene detalles del pais
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        await dispatch(fetchCountriesById(id));
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    };
    fetchCountry();
  }, [dispatch, id]);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h1>{country.name}</h1>
          <img src={country.flagImage} alt="Country Flag" />
        </div>
        <div className={styles.rightColumn}>
          <h2>ID: {country.id}</h2>
          <h2>Continent: {country.continents}</h2>
          <h2>Capital: {country.capital}</h2>
          <h2>Subregion: {country.subregion}</h2>
          <h2>Area: {country.area}</h2>
          <h2>Population: {country.population}</h2>
        </div>
      </div>

      <div className={styles.activity}>
        {country.countryActivities && country.countryActivities.length > 0 ? (
          country.countryActivities.map((activity) => (
            <div key={activity.id}>
              <h2>
                Activity:
                <br /> {activity.name}
              </h2>
              <h3>ID: {activity.id}</h3>
              <h3>Difficulty: {activity.difficulty}</h3>
              <h3>Duration: {activity.duration}</h3>
              <h3>Season: {activity.season}</h3>
              <br />
              <hr />
            </div>
          ))
        ) : (
          <h2>There is no activity for this country.</h2>
        )}
      </div>
    </div>
  );
};

export default Detail;
