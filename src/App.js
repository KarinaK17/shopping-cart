import "./App.css";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";

function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <footer>
          Images from <a href="https://darvish.by/">Darvish</a>,{" "}
          <a href="https://www.svgrepo.com/">SVG Repo</a>,{" "}
          <a href="https://pixabay.com/">Pixabay</a>
        </footer>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
