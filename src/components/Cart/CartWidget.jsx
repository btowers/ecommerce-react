import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { IconButton, Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

const CartWidget = () => {
  const navigate = useNavigate();
  const { itemsInCart } = useContext(CartContext);
  const qtyInCart = itemsInCart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <>
      <Badge badgeContent={qtyInCart} color="warning">
        <IconButton
          onClick={() => {
            navigate('/cart');
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
