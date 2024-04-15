const { Country, Activity } = require("../db");

exports.getCountryById = async (req, res) => {
  try {
    const { id } = req.params;
    const country = await Country.findOne({
      where: { id },
      include: [
        {
          model: Activity,
          as: "countryActivities",
        },
      ],
    });
    if (!country) {
      return res.status(404).json({ error: "Country not found" });
    }
    res.status(200).json(country);
  } catch (error) {
    res.status(500).json({ error: "Error fetching country" });
  }
};
