import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <Button
        variant="outlined"
        size="sm"
        className="smallButton"
        onClick={handleAdd}
      >
        +
      </Button>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        placeholder={handleDecrease}
      />
      <Button
        variant="outlined"
        size="sm"
        className="smallButton"
        onClick={handleAdd}
      >
        -
      </Button>

      <Button variant="primary" size="sm mt-2">
        Agregar
      </Button>
    </>
  );
};

export default ItemCount;
