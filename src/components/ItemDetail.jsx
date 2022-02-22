import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import {
  Card,
  Typography,
  CardContent,
  CardMedia,
  Rating,
  Container,
  Button,
} from '@mui/material';
import ItemCount from './ItemCount';

const ItemDetail = ({ id, title, price, rating, pictureUrl }) => {
  const [finish, setFinish] = useState(false);

  const { addItem } = useContext(CartContext);

  const onAdd = (quantityToAdd) => {
    addItem({ id, title, price, rating, pictureUrl }, quantityToAdd);
    setFinish(true);
  };

  const navigate = useNavigate();
  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Card
          className="m-3 p-3"
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            maxWidth: '800px',
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 400, height: 400 }}
            image={pictureUrl}
            alt={title}
          />
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexGrow: 1,
            }}
          >
            <div>
              <Typography variant="h4" component="h2">
                {title}
              </Typography>
              <Typography variant="h6">$ {price}</Typography>
              <Rating name="size-small" value={rating} size="medium" />
            </div>
            {finish ? (
              <>
                <Typography>item(s) agregado(s) al carrito</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => goToCart()}
                >
                  Terminar mi compra
                </Button>
              </>
            ) : (
              <ItemCount stock={10} initial={1} onAdd={onAdd} />
            )}
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default ItemDetail;
