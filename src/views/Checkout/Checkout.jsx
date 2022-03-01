import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { NotificationContext } from '../../context/NotificationContext';
import {
  Box,
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from '@mui/material';

import AddressForm from './AddressForm';
import Review from './Review';
import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import EmptyCart from '../../components/Cart/EmptyCart';

const steps = ['Envío', 'Confirmación'];

function getStepContent(step, address, setAddress) {
  switch (step) {
    case 0:
      return <AddressForm address={address} setAddress={setAddress} />;
    case 1:
      return <Review address={address} />;
    default:
      throw new Error('Unknown step');
  }
}

const Checkout = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [orderId, setOrderId] = useState('');
  const { itemsInCart, clear } = useContext(CartContext);
  const { newNotification } = useContext(NotificationContext);
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    email: '',
    direccion: '',
    ciudad: '',
    provincia: '',
    pais: '',
    cp: '',
  });

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      buyItems();
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const buyItems = async () => {
    const total = itemsInCart.reduce((totalt, item) => {
      return totalt + item.price;
    }, 0);
    const items = itemsInCart.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      };
    });
    const order = {
      buyer: address,
      total,
      items,
      date: new Date().toLocaleDateString(),
    };
    const orderRef = collection(db, 'OrderCollection');

    addDoc(orderRef, order)
      .then(({ id }) => {
        clear();
        setOrderId(id);
        newNotification(`Orden ${id} creada`);
        setActiveStep(activeStep + 1);
        console.log(id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <Container sx={{ py: 3 }} maxWidth="md">
        {itemsInCart.length > 0 && activeStep != steps.length ? (
          <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper
              variant="outlined"
              sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            >
              <Typography component="h1" variant="h4" align="center">
                Checkout
              </Typography>
              <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <>
                {activeStep === steps.length ? (
                  <>
                    <Typography variant="h5" gutterBottom>
                      Gracias por su compora.
                    </Typography>
                    <Typography variant="subtitle1">
                      Su pedido ha sido confirmado con el ID:
                      <b>{' ' + orderId}</b>.
                    </Typography>
                    <Container
                      sx={{
                        mt: 6,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                      }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => navigate('/')}
                      >
                        Volver a la tienda
                      </Button>
                    </Container>
                  </>
                ) : (
                  <>
                    {getStepContent(activeStep, address, setAddress)}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                          Atras
                        </Button>
                      )}

                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 3, ml: 1 }}
                      >
                        {activeStep === steps.length - 1
                          ? 'Confirmar Compra'
                          : 'Siguiente'}
                      </Button>
                    </Box>
                  </>
                )}
              </>
            </Paper>
          </Container>
        ) : (
          <EmptyCart />
        )}
      </Container>
    </>
  );
};

export default Checkout;
