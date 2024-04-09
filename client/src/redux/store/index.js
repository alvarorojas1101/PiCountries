import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"; // Importa composeWithDevTools desde redux-devtools-extension
import reducer from "../reducer/index";

const composeEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(reducer, composeEnhancer);

export default store;
