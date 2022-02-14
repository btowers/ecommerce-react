import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "./ItemList";
import Loading from "./Loading";
import ItemCount from "./ItemCount";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {loading ? <Loading /> : <ItemList items={items} />}
      <ItemCount />
    </>
  );
};

export default ItemListContainer;
