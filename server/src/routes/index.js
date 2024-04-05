const { Router } = require("express");
const { allCountries } = require("../controllers/allCountries");
const { getCountryById } = require("../controllers/getCountryById");
const { getCountriesByName } = require("../controllers/getCountriesByName");

const router = Router();

// Ruta para obtener todos los países
router.get("/countries", allCountries);

// Ruta para obtener un país por ID
router.get("/countries/:id", getCountryById);

// Ruta para obtener países por nombre, utilizando un parámetro de ruta
router.get("/countries/name/:name", getCountriesByName);

module.exports = router;
