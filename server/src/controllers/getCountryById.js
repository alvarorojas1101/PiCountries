const { Country, Activity } = require("../db");

exports.getCountryById = async (req, res) => {
  try {
    // Obtiene el ID del país desde los parámetros de la ruta
    const { id } = req.params;
    // Obtiene el país de la base de datos, incluyendo sus actividades asociadas

    const country = await Country.findOne({
      where: { id },
      include: [
        {
          model: Activity,
          //alias  actividades asociadas al país
          as: "countryActivities",
        },
      ],
    });
    // Verifica si el país existe
    if (!country) {
      return res.status(404).json({ error: "Country not found" });
    }
    // Envía el país y sus actividades asociadas como respuesta
    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ error: "Error fetching country" });
  }
};
