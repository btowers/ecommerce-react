import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Container,
  IconButton,
  Typography,
  Button,
} from '@mui/material';

import { CartContext } from '../../context/CartContext';
import { DeleteOutline } from '@mui/icons-material';

const Cart = () => {
  const { itemsInCart, removeItem } = useContext(CartContext);
  const navigate = useNavigate();
  const totalPrice = () => {
    return itemsInCart.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  };
  console.log(itemsInCart);

  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md">
        {itemsInCart.length > 0 ? (
          <div>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell align="right">Precio</TableCell>
                  <TableCell align="right">Cantidad</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {itemsInCart.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.title}
                    </TableCell>
                    <TableCell align="right">$ {row.price}</TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        color="error"
                        onClick={() => {
                          removeItem(row.id);
                        }}
                      >
                        <DeleteOutline />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Typography align="right"> Total: $ {totalPrice()}</Typography>
          </div>
        ) : (
          <div>
            <Button
              onClick={() => {
                navigate('/');
              }}
            >
              Ver Productos
            </Button>
            <Typography align="center">
              No hay productos en el carrito
            </Typography>
          </div>
        )}
      </Container>
    </>
  );
};

export default Cart;
