import React from 'react';
import { Container, CircularProgress } from '@mui/material';

function Loading() {
  return (
    <>
      <Container
        style={{ minHeight: '60vh' }}
        sx={{
          display: 'flex',
          direction: 'column',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress />
      </Container>
    </>
  );
}

export default Loading;
