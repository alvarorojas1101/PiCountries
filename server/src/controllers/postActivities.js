const { Activity, Country } = require("../db");

exports.postActivities = async (req, res) => {
  try {
    // Extraer los datos de la actividad y los IDs de los países de la solicitud
    const { name, difficulty, duration, season, countryId } = req.body;
    // Crear una nueva actividad
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    // Asociar la actividad con los países indicados
    await newActivity.addActivityCountries(countryId);
    // Responder con la actividad creada y sus países asociados
    const activityWithCountries = await Activity.findOne({
      where: { id: newActivity.id },
      include: [
        {
          model: Country,
          as: "activityCountries",
        },
      ],
    });

    res.status(201).json(activityWithCountries);
  } catch (error) {
    res.status(500).json({ error: "Error creating activity" });
  }
};
