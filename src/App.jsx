import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Home from './views/Home/Home';
import ItemDetail from './views/ItemDetail/ItemDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
