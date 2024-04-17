const { Country, Activity } = require("../db");

exports.getCountryById = async (req, res) => {
  try {
    //obtenemos el id por params
    const { id } = req.params;
    //buscamos el pais en la base de datos donde la referenicia es el id
    const country = await Country.findOne({
      where: { id },
      include: [
        {
          model: Activity,
          as: "countryActivities",
        },
      ],
    });
    // si no se encontro pais sale error
    if (!country) {
      return res.status(404).json({ error: "Country not found" });
    }
    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ error: "Error fetching country" });
  }
};
