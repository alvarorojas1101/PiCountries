const { Country, Activity } = require("../db");

// Controlador para obtener todos los países
exports.allCountries = async (req, res) => {
  try {
    // Obtiene todos los países de la base de datos
    const countries = await Country.findAll({
      include: [
        {
          model: Activity,
          //alias  actividades asociadas al país
          as: "countryActivities",
        },
      ],
    });
    // Envía los países como respuesta
    res.status(200).json(countries);
  } catch (error) {
    // En caso de error, envía un mensaje de error
    res.status(500).json({ error: "Error fetching countries" });
  }
};
