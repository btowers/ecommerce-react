import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemList from './ItemList';

const ItemListContainer = (prop) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <ItemList users={users} />
    </>
  );
};

export default ItemListContainer;
