import React, { useState } from "react";
import { Button, Box, Stack } from "@mui/material";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    console.log(count);
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
      <Stack spacing={2}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            maxWidth: "200px",
            gap: 1,
          }}
        >
          <Button
            disableRipple
            variant="outlined"
            className="smallButton"
            onClick={handleAdd}
          >
            +
          </Button>
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              maxWidth: "50px",
            }}
          >
            {count}
          </Box>

          <Button disableRipple variant="outlined" onClick={handleDecrease}>
            -
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            maxWidth: "200px",
            gap: 1,
          }}
        >
          <Button
            disableRipple
            variant="contained"
            onClick={() => onAdd(count)}
          >
            Agregar
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default ItemCount;
