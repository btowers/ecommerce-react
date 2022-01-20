import React from "react";
import { Navbar } from "react-bootstrap";

const CartWidget = () => {
  return (
    <>
      <Navbar.Brand href="#home">
        <img
          src="/logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="logo"
        />
      </Navbar.Brand>
    </>
  );
};

export default CartWidget;
