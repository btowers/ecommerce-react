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
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { NotificationContext } from "../../context/NotificationContext";
import { DeleteOutline } from "@mui/icons-material";

const Cart = () => {
  const { itemsInCart, removeItem, clear } = useContext(CartContext);
  const { newNotification } = useContext(NotificationContext);
  const navigate = useNavigate();
  const totalPrice = () => {
    return itemsInCart.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  };
  const buyItems = async () => {
    const total = itemsInCart.reduce((totalt, item) => {
      return totalt + item.price;
    }, 0);
    const items = itemsInCart.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      };
    });
    const order = {
      buyer: {
        name: "John Doe",
        email: "johndoe@gmail.com",
        phone: "123456789",
      },
      total,
      items,
      date: new Date().toLocaleDateString(),
    };
    const orderRef = collection(db, "OrderCollection");

    addDoc(orderRef, order)
      .then(({ id }) => {
        clear();
        newNotification(`Orden ${id} creada`);
        navigate("/");
        console.log(id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md">
        {itemsInCart.length > 0 ? (
          <div>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
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
              onClick={() => buyItems(itemsInCart)}
            >
              Comprar
            </Button>
          </div>
        ) : (
          <div>
            <Button
              onClick={() => {
                navigate("/");
              }}
            >
              Ver Productos
            </Button>
            <Typography align="center">
              No hay productos en el carrito
            </Typography>
          </div>
        )}
      </Container>
    </>
  );
};

export default Cart;
