import React, { useContext } from "react";
import { Typography, TextField, Button, Container } from "@mui/material";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { NotificationContext } from "../../context/NotificationContext";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const { itemsInCart, clear } = useContext(CartContext);
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
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h5">BASIC WITH MATERIAL UI</Typography>
      <form>
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Nombre"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="email"
          label="Email"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Telefono"
          variant="outlined"
        />
        <br />

        <Button variant="contained" color="primary" onClick={() => buyItems()}>
          finalizar compra
        </Button>
      </form>
    </Container>
  );
}
