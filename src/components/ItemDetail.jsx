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

const ItemDetail = ({
  id,
  title,
  price,
  stock,
  rating,
  description,
  pictureUrl,
}) => {
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
  const goToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <>
      <Container sx={{ py: 6 }} maxWidth="md">
        <Card
          elevation={0}
          className="m-3 p-3"
          sx={{
            //  border: "1px solid #E0E0E0",
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            maxWidth: '800px',
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: 400,
              height: 400,
            }}
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
              <Typography variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body-2">
                {stock} unindades disponibles
              </Typography>
              <Typography variant="h6">$ {price}</Typography>
              <Rating name="size-small" value={rating} size="medium" />
            </div>
            {finish ? (
              <>
                <Typography>item(s) agregado(s) al carrito</Typography>

                <div>
                  <div>
                    <Button
                      sx={{
                        width: '100%',
                        mb: 2,
                      }}
                      variant="outlined"
                      color="primary"
                      onClick={() => goToCart()}
                    >
                      Ver Carrito
                    </Button>
                  </div>
                  <div>
                    <Button
                      sx={{
                        width: '100%',
                      }}
                      variant="contained"
                      color="primary"
                      onClick={() => goToCheckout()}
                    >
                      Comprar Carrito
                    </Button>
                  </div>{' '}
                </div>
              </>
            ) : (
              <ItemCount stock={10} initial={1} onAdd={onAdd} />
            )}
          </CardContent>
        </Card>
        <Container sx={{ py: 2 }} maxWidth="md">
          {description}
        </Container>
      </Container>
    </>
  );
};

export default ItemDetail;
