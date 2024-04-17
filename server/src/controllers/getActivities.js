const { Activity, Country } = require("../db");

exports.getActivities = async (req, res) => {
  try {
    //trae todas las intancias de las actividades 
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
