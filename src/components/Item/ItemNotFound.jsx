import { Container, Grid, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ItemNotFound = () => {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth="md"
      sx={{
        py: 6,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        columns={1}
        direction="column"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Grid item>
          <Typography align="center">Item no encontrado.</Typography>
        </Grid>
        <Grid item>
          <img src="/assets/empty_cart.png" alt="empty cart" />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/')}
          >
            volver a la tienda
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ItemNotFound;
