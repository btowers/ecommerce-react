import { Container, Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        columns={1}
        direction="column"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Grid item>
          <Typography align="center">No hay productos en el carrito</Typography>
        </Grid>
        <Grid item>
          <img
            src="https://pedidos.mostazagreenburger.com/static/images/cart/empty_cart.png"
            alt="empty cart"
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/")}
          >
            Ir a la tienda
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EmptyCart;
