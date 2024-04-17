const { Country, Activity } = require("../db");
//OP de Sequelize para operaciones de comparacion
const { Op } = require("sequelize");

exports.getCountriesByName = async (req, res) => {
  try {
    // se busca nombre por params
    const { name } = req.params;
    const countries = await Country.findAll({
      //se busca por nombre ignorando mayus o minus
      where: { name: { [Op.iLike]: `%${name}%` } },
      include: [
        {
          model: Activity,
          as: "countryActivities",
        },
      ],
    });
    //si el arreglo esta vacio no se encontraron nombres
    if (countries.length === 0) {
      return res.status(404).json({ error: "There are no matches by name" });
    }
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: "Error getting countries by name" });
  }
};
