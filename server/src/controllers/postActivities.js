const { Activity, Country } = require("../db");

exports.postActivities = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countryId } = req.body;
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    await newActivity.addActivityCountries(countryId);

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
