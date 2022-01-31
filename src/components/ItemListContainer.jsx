import React from 'react';
import { Alert } from 'react-bootstrap';
import ItemCount from './ItemCount';

const ItemListContainer = (prop) => {
  return (
    <>
      <Alert variant="success" className="m-3">
        <Alert.Heading>¡Hola!</Alert.Heading>
        <p>{prop.greeting}</p>
      </Alert>
      <ItemCount stock={10} initial={0} />
      <ItemCount stock={5} initial={0} />
      <ItemCount stock={30} initial={0} />
    </>
  );
};

export default ItemListContainer;
