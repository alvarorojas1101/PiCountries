const server = require("./src/server.js");
const { conn } = require("./src/db.js");
require("dotenv").config();
const { PORT } = process.env;
const { saveCountries } = require("./src/controllers/saveCountries.js");

conn
  .sync({ force: true })
  .then(() => {
    // Llama a saveCountries después de sincronizar la base de datos
    saveCountries().then(() => {
      server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
      });
    });
  })
  .catch((error) => {
    console.error(error);
  });
