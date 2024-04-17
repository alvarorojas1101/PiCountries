const { Country, Activity } = require("../db");

exports.allCountries = async (req, res) => {
  try {
    // trae todas las intacias de los paises incliodos actividades
    const countries = await Country.findAll({
      include: [
        {
          model: Activity,
          as: "countryActivities",
        },
      ],
    });
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: "Error fetching countries" });
  }
};
