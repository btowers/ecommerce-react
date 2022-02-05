import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemDetail from './ItemDetail';
import { Typography } from '@mui/material';

const ItemDetailContainer = ({ id }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products/1')
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
      {item}
      <Typography variant="h5" component="h2"></Typography>
      <ItemDetail
        title={item.title}
        price={item.price}
        pictureUrl={item.pictureUrl}
      />
    </>
  );
};

export default ItemDetailContainer;
