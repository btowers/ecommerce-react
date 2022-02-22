import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import Loading from './Base/Loading';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebaseConfig';
import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [item, setItem] = useState({
    title: '',
    price: 0,
    pictureUrl: '',
    rating: {
      rate: 0,
      count: 0,
    },
  });
  const [loading, setLoading] = useState(false);

  let params = useParams();
  let id = params.id;

  useEffect(() => {
    setLoading(true);
    const getProduct = async () => {
      console.log(id);
      const q = query(
        collection(db, 'ItemCollection'),
        where(documentId(), '==', id)
      );
      console.log('getting docs');
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        console.log('No matching documents.');
        return;
      }
      console.log(querySnapshot.docs);
      setItem(querySnapshot.docs[0].data());
    };
    getProduct();
    setLoading(false);
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ItemDetail
          id={item.id}
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
