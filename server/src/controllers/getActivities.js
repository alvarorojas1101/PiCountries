const { Activity, Country } = require("../db");

exports.getActivities = async (req, res) => {
  try {
    // obtiene todas las actividades de la base de datos, incluyendo los países asociados a cada actividad

    const activities = await Activity.findAll({
      include: [
        { model: Country, as: "activityCountries", attributes: ["id", "name"] },
      ],
    });
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las actividades" });
  }
};
