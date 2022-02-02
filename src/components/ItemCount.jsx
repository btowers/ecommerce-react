import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <Form className="m-3">
        <Form.Group className="d-flex flex-row">
          <Button
            variant="primary"
            size="sm"
            className="smallButton"
            onClick={handleAdd}
          >
            +
          </Button>
          <Form.Control
            className="counter mx-2"
            readOnly
            size="sm"
            type="email"
            placeholder={handleDecrease}
          />
          <Button
            variant="primary"
            size="sm"
            className="smallButton"
            onClick={handleAdd}
          >
            -
          </Button>
        </Form.Group>
        <Button variant="primary" size="sm mt-2">
          Agregar
        </Button>
      </Form>
    </>
  );
};

export default ItemCount;
