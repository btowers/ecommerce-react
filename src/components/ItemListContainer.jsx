import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import ItemList from "./ItemList";
import Loading from "./Base/Loading";
import ItemsCarousel from "./Base/Carousel";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    setLoading(true);

    const getProducts = async () => {
      let q;
      if (params.category) {
        q = query(
          collection(db, "ItemCollection"),
          where("category", "==", params.category)
        );
      } else {
        q = query(collection(db, "ItemCollection"));
      }
      let docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs);
    };
    getProducts();
    setLoading(false);
  }, [params]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <ItemsCarousel />
          <ItemList items={items} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
