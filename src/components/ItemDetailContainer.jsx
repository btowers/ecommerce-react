import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemDetail from "./ItemDetail";
import { Container } from "@mui/material";

const ItemDetailContainer = ({ id }) => {
  const [item, setItem] = useState({
    title: "",
    price: 0,
    pictureUrl: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/" + id)
      .then((res) => {
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md">
        <ItemDetail
          title={item.title}
          price={item.price}
          pictureUrl={item.image}
          rating={item.rating.rate}
        />
      </Container>
    </>
  );
};

export default ItemDetailContainer;
