import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([]);

  const addItem = (product, quantity) => {
    let updatedCart = [...itemsInCart];
    if (isInCart(product.id)) {
      updatedCart = itemsInCart.map(function (item) {
        return item.id === product.id
          ? { ...item, quantity: (item.quantity += quantity) }
          : { ...item, quantity: quantity };
      });
    } else {
      updatedCart.push({ ...product, quantity });
    }
    setItemsInCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = itemsInCart.filter((item) => item.id !== id);
    setItemsInCart(updatedCart);
  };

  const clear = () => {
    setItemsInCart([]);
  };

  const isInCart = (id) => {
    return itemsInCart.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        itemsInCart,
        addItem,
        removeItem,
        clear,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
