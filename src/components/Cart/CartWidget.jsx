import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { IconButton, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

const CartWidget = () => {
  const navigate = useNavigate();
  const { itemsInCart } = useContext(CartContext);

  return (
    <>
      <Badge badgeContent={itemsInCart.length} color="warning">
        <IconButton
          onClick={() => {
            navigate("/cart");
          }}
          aria-label="add to shopping cart"
        >
          <ShoppingCart />
        </IconButton>
      </Badge>
    </>
  );
};

export default CartWidget;
