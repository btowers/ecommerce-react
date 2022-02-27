import "./App.css";
import React from "react";
import NavBar from "./components/Base/NavBar";
import Home from "./views/Home/Home";
import Cart from "./views/Cart/Cart";
import ItemDetail from "./views/ItemDetail/ItemDetail";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SimpleSnackbar from "./components/Base/Snackbar";
import { NotificationProvider } from "./context/NotificationContext";
import Footer from "./components/Base/Footer";

function App() {
  return (
    <NotificationProvider>
      <CartProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<Home />} />
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
        <SimpleSnackbar />
      </CartProvider>
    </NotificationProvider>
  );
}

export default App;
