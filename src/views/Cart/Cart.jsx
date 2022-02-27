import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Container,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { CartContext } from "../../context/CartContext";
import { DeleteOutline } from "@mui/icons-material";

const Cart = () => {
  const { itemsInCart, removeItem, clear } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = () => {
    return itemsInCart.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  };

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md">
        {itemsInCart.length > 0 ? (
          <div>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell align="right">Precio</TableCell>
                  <TableCell align="right">Cantidad</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {itemsInCart.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <img
                        src={row.pictureUrl}
                        width="80"
                        height="80"
                        alt={row.title}
                        loading="lazy"
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.title}
                    </TableCell>
                    <TableCell align="right">$ {row.price}</TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        color="error"
                        onClick={() => {
                          removeItem(row.id);
                        }}
                      >
                        <DeleteOutline />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Typography align="right"> Total: $ {totalPrice()}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => goToCheckout()}
            >
              Comprar Carrito
            </Button>
          </div>
        ) : (
          <div>
            <Typography align="center">
              No hay productos en el carrito
            </Typography>
            <Container
              maxWidth="md"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://pedidos.mostazagreenburger.com/static/images/cart/empty_cart.png"
                alt="empty cart"
              />
            </Container>
            <Container
              maxWidth="md"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/")}
              >
                Ir a la tienda
              </Button>
            </Container>
          </div>
        )}
      </Container>
    </>
  );
};

export default Cart;
