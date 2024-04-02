const { Country, Activity } = require("../db"); // Asegúrate de que la ruta sea correcta
const { Op } = require("sequelize");

exports.getCountriesByName = async (req, res) => {
  try {
    // Obtiene el nombre del país desde los parámetros de la consulta
    const name = req.query.name;

    // Verifica si se proporcionó un nombre
    if (!name) {
      return res.status(400).json({ error: "Name parameter is required" });
    }

    // Busca países cuyo nombre coincida con el nombre proporcionado, sin distinguir entre mayúsculas y minúsculas
    const countries = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`, // Utiliza iLike para una búsqueda insensible a mayúsculas y minúsculas
        },
      },
      include: [
        {
          model: Activity,
          //alias  actividades asociadas al país
          as: "countryActivities",
        },
      ],
    });

    // Verifica si se encontraron países
    if (countries.length === 0) {
      return res.status(404).json({ error: "No countries found" });
    }

    // Envía los países encontrados como respuesta
    res.json(countries);
  } catch (error) {
    // En caso de error, envía un mensaje de error
    res.status(500).json({ error: "Error fetching countries" });
  }
};
