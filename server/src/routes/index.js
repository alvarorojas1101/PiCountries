const { Router } = require("express");
const { allCountries } = require("../controllers/allCountries");
const { getCountryById } = require("../controllers/getCountryById");
const { getCountriesByName } = require("../controllers/getCountriesByName");
const { postActivities } = require("../controllers/postActivities");
const { getActivities } = require("../controllers/getActivities");

const router = Router();

// Ruta para obtener todos los países
router.get("/countries", allCountries);

// Ruta para obtener un país por ID
router.get("/countries/:id", getCountryById);

// Ruta para obtener países por nombre, utilizando un parámetro de ruta
router.get("/countries/name/:name", getCountriesByName);

// Ruta para crear una nueva actividad
router.post("/activities", postActivities);

//Ruta para obtener las actividades turisticas
router.get("/activities", getActivities);

module.exports = router;
