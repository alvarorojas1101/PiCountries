const axios = require("axios");
const { conn } = require("../db.js");
const Country = require("../models/Country.js")(conn);

async function saveCountries() {
  try {
    //extraemos los paises de la api
    const response = await axios.get("http://localhost:5000/countries");
    //extraemos la data de los paises
    const countries = response.data;
    //termina la promesa al terminar todos los paises
    await Promise.all(
      //mapeo pais por pais
      countries.map((country) => {
        const saveCountry = {
          id: country.ccn3,
          name: country.name.common,
          flagImage: country.flags.png,
          continents: Array.isArray(country.continents)
            ? country.continents[0]
            : "Unknown",
          capital: Array.isArray(country.capital)
            ? country.capital[0]
            : "Unknown",
          subregion: country.subregion || "Unknown",
          area: Math.round(country.area),
          population: country.population,
        };
        //crea uno por uno el pais
        return Country.create(saveCountry);
      })
    );

    console.log("Countries fetched and saved successfully");
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
}

module.exports = { saveCountries };
