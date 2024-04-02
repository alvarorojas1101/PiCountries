const { Router } = require("express");
const { allCountries } = require("../controllers/allCountries");
const { getCountryById } = require("../controllers/getCountryById");
const { getCountriesByName } = require("../controllers/getCountriesByName");

const router = Router();

router.get("/countries", allCountries);
router.get("/countries/:id", getCountryById);
router.get("/countries/name", getCountriesByName);

module.exports = router;
