import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Greeting enviado desde prop..." />
    </>
  );
}

export default App;
