import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ id }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/" + id)
      .then((res) => {
        console.log(res.data);
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <ItemDetail
        title={item.title}
        price={item.price}
        pictureUrl={item.image}
      />
    </>
  );
};

export default ItemDetailContainer;
