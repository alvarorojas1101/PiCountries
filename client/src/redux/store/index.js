// Importación de funciones y middleware de Redux
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // Middleware que permite acciones asíncronas
import { composeWithDevTools } from "redux-devtools-extension"; // Importa composeWithDevTools desde redux-devtools-extension
import reducer from "../reducer/index"; // Importación del reductor principal de la aplicación

// Configuración de la mejora de la tienda para incluir middleware y herramientas de desarrollo Redux
const composeEnhancer = composeWithDevTools(applyMiddleware(thunk));

// Creación del almacenamiento Redux con el reductor principal y la mejora configurada
const store = createStore(reducer, composeEnhancer);

// Exportación del almacenamiento creado
export default store;
