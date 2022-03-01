import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import Loading from '../Base/Loading';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebaseConfig';
import ItemNotFound from './ItemNotFound';
import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(false);
  const [noItem, setNoItem] = useState(false);
  const [item, setItem] = useState({
    title: '',
    price: 0,
    pictureUrl: '',
    rating: {
      rate: 0,
      count: 0,
    },
  });

  let params = useParams();
  let id = params.id;

  useEffect(() => {
    setLoading(true);
    const getProduct = async () => {
      const q = query(
        collection(db, 'ItemCollection'),
        where(documentId(), '==', id)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        console.log('No matching documents.');
        setNoItem(true);
        setLoading(false);
        return;
      }
      const product = querySnapshot.docs[0].data();
      setItem({ ...product, id });
      setNoItem(false);
      setLoading(false);
    };
    getProduct();
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : noItem ? (
        <ItemNotFound />
      ) : (
        <ItemDetail
          id={item.id}
          title={item.title}
          price={item.price}
          stock={item.stock}
          description={item.description}
          pictureUrl={item.image}
          rating={item.rating.rate}
        />
      )}
    </>
  );
};

export default ItemDetailContainer;
