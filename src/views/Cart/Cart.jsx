import React from 'react';
import { IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

const Cart = () => {
  const goToCart = () => {
    window.location.href = '/cart';
  };
  return (
    <>
      <IconButton onClick={goToCart} aria-label="add to shopping cart">
        <ShoppingCart />
      </IconButton>
    </>
  );
};

export default Cart;
