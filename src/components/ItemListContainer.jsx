import React from "react";
import { Alert } from "react-bootstrap";

const ItemListContainer = (prop) => {
  return (
    <>
      <Alert variant="success" className="m-3">
        <Alert.Heading>¡Hola!</Alert.Heading>
        <p>{prop.greeting}</p>
      </Alert>
    </>
  );
};

export default ItemListContainer;
