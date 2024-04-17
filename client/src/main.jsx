import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import store from "./redux/store/index.js";
import { Provider } from "react-redux";

// renderiza la aplicacion
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Utiliza 'Provider' para envolver toda la aplicación con el store de Redux */}
    <Provider store={store}>
      {/* Utiliza 'BrowserRouter' para envolver la aplicación y proporcionar enrutamiento */}
      <BrowserRouter>
        {/* Componente raíz de la aplicación */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
