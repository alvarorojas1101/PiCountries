// importación de funciones y middleware de Redux
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // middleware que permite acciones asíncronas
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducer/index"; // Importación del reducer

// combinamos middleware thunk  y herramientas de desarrollo Redux
const composeEnhancer = composeWithDevTools(applyMiddleware(thunk));

// creación del almacenamiento Redux con el reducer principal y la mejora configurada
const store = createStore(reducer, composeEnhancer);

export default store;
