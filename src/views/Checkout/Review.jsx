import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

const Review = ({ address }) => {
  const { itemsInCart } = useContext(CartContext);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Resumen de compra
      </Typography>
      <List disablePadding>
        {itemsInCart.map((product) => (
          <ListItem key={product.title} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.title} secondary={product.desc} />
            <Typography variant="body2">$ {product.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $ {itemsInCart.reduce((acc, curr) => acc + curr.price, 0)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Envío
          </Typography>
          <Typography gutterBottom>
            {address.firstName + " " + address.lastName}
          </Typography>
          <Typography gutterBottom>{address.direccion}</Typography>
          <Typography gutterBottom>{address.ciudad}</Typography>
          <Typography gutterBottom>{address.provincia}</Typography>
          <Typography gutterBottom>{address.pais}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Review;
