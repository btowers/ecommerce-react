import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products/" + id)
      .then((res) => {
        setItem(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ItemDetail
          title={item.title}
          price={item.price}
          pictureUrl={item.image}
          rating={item.rating.rate}
        />
      )}
    </>
  );
};

export default ItemDetailContainer;
