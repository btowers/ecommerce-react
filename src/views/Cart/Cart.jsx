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
import { DeleteOutline, ShoppingCartCheckout } from '@mui/icons-material';
import EmptyCart from '../../components/Cart/EmptyCart';

const Cart = () => {
  const { itemsInCart, removeItem } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = () => {
    return itemsInCart.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  };

  const goToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <>
      <Container sx={{ py: 3 }} maxWidth="md">
        <Typography variant="h5" sx={{ mb: 2 }}>
          <ShoppingCartCheckout
            sx={{
              color: '#0182CF',
            }}
          />{' '}
          Carrito
        </Typography>
        {itemsInCart.length > 0 ? (
          <div>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
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
                      <img
                        src={row.pictureUrl}
                        width="80"
                        height="80"
                        alt={row.title}
                        loading="lazy"
                      />
                    </TableCell>
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
            <Button
              variant="contained"
              color="primary"
              onClick={() => goToCheckout()}
            >
              Comprar Carrito
            </Button>
          </div>
        ) : (
          <EmptyCart />
        )}
      </Container>
    </>
  );
};

export default Cart;
