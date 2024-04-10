const axios = require("axios");
const { conn } = require("../db.js");
const Country = require("../models/Country.js")(conn);

async function saveCountries() {
  try {
    const response = await axios.get("http://localhost:5000/countries");
    const countries = response.data;

    await Promise.all(
      countries.map((country) => {
        // Transforma los datos aquí
        const saveCountry = {
          id: country.ccn3, // Utiliza ccn3 como identificador único
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

        return Country.create(saveCountry);
      })
    );

    console.log("Countries fetched and saved successfully");
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
}

module.exports = { saveCountries };
