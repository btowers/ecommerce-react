import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ItemList from './ItemList';
import Loading from './Loading';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  let category = params.category;
  if (category) category = 'category/' + category;
  else category = '';

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://fakestoreapi.com/products/' + category)
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <>{loading ? <Loading /> : <ItemList items={items} />}</>;
};

export default ItemListContainer;
