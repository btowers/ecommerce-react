import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <ItemListContainer greeting="Greeting enviado desde prop..." />
    </React.Fragment>
  );
}

export default App;
