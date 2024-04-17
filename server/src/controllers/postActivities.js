const { Activity, Country } = require("../db");

exports.postActivities = async (req, res) => {
  try {
    //extraemos los datos por body
    const { name, difficulty, duration, season, countryId } = req.body;
    //nueva instancia de la actividad
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    //se asocia la nueva actividad con el pais
    await newActivity.addActivityCountries(countryId);
    // busca la actividad en la db
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
