const { Country, Activity } = require("../db");
//OP de Sequelize para operaciones de comparacion
const { Op } = require("sequelize");

exports.getCountriesByName = async (req, res) => {
  try {
    // Extrae el parámetro 'name' de los parámetros de ruta de la solicitud.
    const { name } = req.params;
    // cuyo nombre contenga el valor del parámetro 'name', utilizando una búsqueda insensible a mayúsculas y minúsculas.
    const countries = await Country.findAll({
      where: { name: { [Op.iLike]: `%${name}%` } },
      include: [
        {
          model: Activity,
          //alias  actividades asociadas al país
          as: "countryActivities",
        },
      ],
    });
    // Verifica si se encontraron países que coincidan con el nombre proporcionado.
    if (countries.length === 0) {
      return res.status(404).json({ error: "There are no matches by name" });
    }

    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: "Error getting countries by name" });
  }
};
