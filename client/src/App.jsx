import React from "react";
import { Routes, Route } from "react-router-dom";

import Welcome from "../src/components/welcome/Welcome.jsx";
import Home from "../src/components/home/Home.jsx";
import Detail from "../src/components/detail/Detail.jsx";
import Form from "../src/components/form/Form.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/countries/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
