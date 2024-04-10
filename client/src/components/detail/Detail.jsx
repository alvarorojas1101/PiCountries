import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchCountriesById } from "../../redux/actions/index";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.currentCountry);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        await dispatch(fetchCountriesById(id)); // Llama a la acción fetchCountriesById con el ID del país
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    };
    fetchCountry();
  }, [dispatch, id]);

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
