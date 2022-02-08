import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/">
            <ItemListContainer />
          </Route>
          <Route path="/item/:id">
            <ItemListContainer />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
