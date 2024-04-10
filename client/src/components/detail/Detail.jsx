import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/countries/${id}`
        );
        setCountry(response.data);
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    };
    fetchCountry();
  }, [id]);

  return (
    <div>
      <h1>{country.name}</h1>
      <img src={country.flagImage} alt="Country Flag" />
      <p>Continent: {country.continents}</p>
      <p>Capital: {country.capital}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Area: {country.area}</p>
      <p>Population: {country.population}</p>
    </div>
  );
};

export default Detail;
