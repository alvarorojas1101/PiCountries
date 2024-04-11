import React from "react";
import { Routes, Route } from "react-router-dom";

import Welcome from "../src/components/welcome/Welcome.jsx";
import Home from "../src/components/home/Home.jsx";
import Detail from "../src/components/detail/Detail.jsx";
import Form from "../src/components/form/Form.jsx";
import "./App.css";
import NavBar from "./components/navBar/NavBar.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
